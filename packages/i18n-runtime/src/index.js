import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const DEFAULT_LOCALE = "en";
export const DEFAULT_NAMESPACE = "common";
export const SUPPORTED_LOCALES = Object.freeze(["en", "pt-BR", "es"]);
export const SUPPORTED_NAMESPACES = Object.freeze(["common", "cli", "tui", "web", "errors"]);

const RTL_LANGUAGE_CODES = new Set(["ar", "fa", "he", "ps", "ur"]);
const PLURAL_KEYS = new Set(["zero", "one", "two", "few", "many", "other"]);
const BASE_LANGUAGE_FALLBACKS = new Map([
  ["en", "en"],
  ["es", "es"],
  ["pt", "pt-BR"],
]);
const EXACT_LOCALE_ALIASES = new Map([
  ["en-us", "en"],
  ["en-gb", "en"],
  ["es-es", "es"],
  ["es-mx", "es"],
  ["es-419", "es"],
  ["pt", "pt-BR"],
  ["pt-br", "pt-BR"],
]);
const RESOURCES_CACHE = new Map();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCALES_DIR = path.join(__dirname, "locales");

function isPlainObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

function deepFreeze(value) {
  if (!value || typeof value !== "object" || Object.isFrozen(value)) {
    return value;
  }
  Object.freeze(value);
  for (const nested of Object.values(value)) {
    deepFreeze(nested);
  }
  return value;
}

function deepMerge(baseValue, overrideValue) {
  if (overrideValue === undefined) {
    return structuredClone(baseValue);
  }
  if (!isPlainObject(baseValue) || !isPlainObject(overrideValue)) {
    return structuredClone(overrideValue);
  }
  const merged = {};
  for (const key of new Set([...Object.keys(baseValue), ...Object.keys(overrideValue)])) {
    if (key in overrideValue) {
      merged[key] = key in baseValue
        ? deepMerge(baseValue[key], overrideValue[key])
        : structuredClone(overrideValue[key]);
    } else {
      merged[key] = structuredClone(baseValue[key]);
    }
  }
  return merged;
}

function canonicalizeLocaleCase(input) {
  const normalized = String(input || "")
    .trim()
    .replace(/_/g, "-")
    .split("-")
    .filter(Boolean);
  if (!normalized.length) {
    return "";
  }
  return normalized
    .map((segment, index) => {
      if (index === 0) {
        return segment.toLowerCase();
      }
      if (segment.length === 2 || /^[0-9]{3}$/.test(segment)) {
        return segment.toUpperCase();
      }
      return `${segment.slice(0, 1).toUpperCase()}${segment.slice(1).toLowerCase()}`;
    })
    .join("-");
}

function stripLocaleDecorators(input) {
  return canonicalizeLocaleCase(
    String(input || "")
      .trim()
      .split(".")[0]
      .split("@")[0]
      .trim(),
  );
}

function findSupportedLocale(input) {
  const normalized = stripLocaleDecorators(input).toLowerCase();
  return SUPPORTED_LOCALES.find((locale) => locale.toLowerCase() === normalized) || null;
}

function resolveNamespaces(namespaces) {
  const raw = namespaces == null
    ? [DEFAULT_NAMESPACE]
    : Array.isArray(namespaces)
      ? namespaces
      : [namespaces];
  const selected = [];
  for (const namespace of raw) {
    const normalized = String(namespace || "").trim();
    if (!normalized) {
      continue;
    }
    if (!SUPPORTED_NAMESPACES.includes(normalized)) {
      throw new Error(`Unsupported i18n namespace '${normalized}'.`);
    }
    if (!selected.includes(normalized)) {
      selected.push(normalized);
    }
  }
  return selected.length ? selected : [DEFAULT_NAMESPACE];
}

function resourceFilePath(locale, namespace) {
  return path.join(LOCALES_DIR, locale, `${namespace}.json`);
}

function readJsonFile(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function loadLocaleResources(locale) {
  const resolvedLocale = resolveLocale(locale, DEFAULT_LOCALE);
  if (RESOURCES_CACHE.has(resolvedLocale)) {
    return RESOURCES_CACHE.get(resolvedLocale);
  }

  const resources = {};
  for (const namespace of SUPPORTED_NAMESPACES) {
    const filePath = resourceFilePath(resolvedLocale, namespace);
    resources[namespace] = readJsonFile(filePath);
  }

  const frozen = deepFreeze(resources);
  RESOURCES_CACHE.set(resolvedLocale, frozen);
  return frozen;
}

function getPathValue(source, dottedPath) {
  if (!dottedPath) {
    return source;
  }
  return dottedPath.split(".").reduce((current, segment) => {
    if (current == null || typeof current !== "object" || !(segment in current)) {
      return undefined;
    }
    return current[segment];
  }, source);
}

function interpolateString(template, values) {
  return String(template).replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, (_match, token) => {
    if (!(token in values) || values[token] == null) {
      return `{{${token}}}`;
    }
    return String(values[token]);
  });
}

function resolvePluralValue(locale, value, options) {
  if (!isPlainObject(value)) {
    return value;
  }
  const pluralKeys = Object.keys(value).filter((key) => PLURAL_KEYS.has(key));
  if (!pluralKeys.length) {
    return value;
  }

  const count = Number(options?.count);
  if (!Number.isFinite(count)) {
    return value.other ?? value.one ?? value[pluralKeys[0]];
  }
  if (count === 0 && value.zero) {
    return value.zero;
  }
  const category = new Intl.PluralRules(locale).select(count);
  return value[category] ?? value.other ?? value.one ?? value[pluralKeys[0]];
}

function resolveMessage(bundle, key, namespaces) {
  const rawKey = String(key || "").trim();
  if (!rawKey) {
    return undefined;
  }

  if (rawKey.includes(":")) {
    const [namespace, dottedPath] = rawKey.split(/:(.+)/, 2);
    return getPathValue(bundle.resources[namespace], dottedPath);
  }

  for (const namespace of namespaces) {
    const value = getPathValue(bundle.resources[namespace], rawKey);
    if (value !== undefined) {
      return value;
    }
  }
  return undefined;
}

export function listSupportedLocales() {
  return [...SUPPORTED_LOCALES];
}

export function listSupportedNamespaces() {
  return [...SUPPORTED_NAMESPACES];
}

export function normalizeLocale(input) {
  const stripped = stripLocaleDecorators(input);
  if (!stripped) {
    return null;
  }

  const exact = findSupportedLocale(stripped);
  if (exact) {
    return exact;
  }

  const alias = EXACT_LOCALE_ALIASES.get(stripped.toLowerCase());
  if (alias) {
    return alias;
  }

  const [baseLanguage] = stripped.split("-");
  return BASE_LANGUAGE_FALLBACKS.get(baseLanguage.toLowerCase()) || null;
}

export function isSupportedLocale(input) {
  return Boolean(normalizeLocale(input));
}

export function resolveLocale(candidates, fallback = DEFAULT_LOCALE) {
  const pool = Array.isArray(candidates) ? candidates : [candidates];
  for (const candidate of pool) {
    const resolved = normalizeLocale(candidate);
    if (resolved) {
      return resolved;
    }
  }
  return normalizeLocale(fallback) || DEFAULT_LOCALE;
}

export function parseAcceptLanguageHeader(header) {
  return String(header || "")
    .split(",")
    .map((entry) => {
      const [rawTag, ...params] = entry.trim().split(";");
      if (!rawTag || rawTag === "*") {
        return null;
      }
      const qParam = params
        .map((param) => param.trim())
        .find((param) => param.startsWith("q="));
      const quality = qParam ? Number.parseFloat(qParam.slice(2)) : 1;
      return {
        tag: rawTag,
        quality: Number.isFinite(quality) ? quality : 1,
      };
    })
    .filter(Boolean)
    .sort((left, right) => right.quality - left.quality)
    .map((entry) => entry.tag);
}

export function resolveLocaleFromAcceptLanguage(header, fallback = DEFAULT_LOCALE) {
  return resolveLocale(parseAcceptLanguageHeader(header), fallback);
}

export function resolveLocaleFromEnv(env = process.env, fallback = DEFAULT_LOCALE) {
  return resolveLocale(
    [
      env?.OMNI_SKILLS_LANG,
      env?.LC_ALL,
      env?.LC_MESSAGES,
      env?.LANG,
    ],
    fallback,
  );
}

export function resolveDirection(locale) {
  const normalized = stripLocaleDecorators(locale);
  const languageCode = normalized.split("-")[0].toLowerCase();
  return RTL_LANGUAGE_CODES.has(languageCode) ? "rtl" : "ltr";
}

export function getTranslations(locale, namespaces = SUPPORTED_NAMESPACES, options = {}) {
  const selectedNamespaces = resolveNamespaces(namespaces);
  const resolvedLocale = resolveLocale(locale, options.fallbackLocale || DEFAULT_LOCALE);
  const fallbackLocale = resolveLocale(options.fallbackLocale || DEFAULT_LOCALE, DEFAULT_LOCALE);
  const fallbackResources = loadLocaleResources(fallbackLocale);
  const localeResources = loadLocaleResources(resolvedLocale);
  const resources = {};

  for (const namespace of selectedNamespaces) {
    resources[namespace] = resolvedLocale === fallbackLocale
      ? structuredClone(localeResources[namespace])
      : deepMerge(fallbackResources[namespace], localeResources[namespace]);
  }

  return {
    locale: resolvedLocale,
    fallbackLocale,
    direction: resolveDirection(resolvedLocale),
    namespaces: selectedNamespaces,
    resources,
  };
}

export function createTranslator(options = {}) {
  const bundle = getTranslations(
    options.locale || DEFAULT_LOCALE,
    options.namespaces || [DEFAULT_NAMESPACE],
    { fallbackLocale: options.fallbackLocale || DEFAULT_LOCALE },
  );
  const preferredNamespaces = bundle.namespaces;

  return {
    locale: bundle.locale,
    fallbackLocale: bundle.fallbackLocale,
    direction: bundle.direction,
    namespaces: preferredNamespaces,
    bundle,
    has(key) {
      return resolveMessage(bundle, key, preferredNamespaces) !== undefined;
    },
    t(key, interpolation = {}) {
      const resolved = resolveMessage(bundle, key, preferredNamespaces);
      if (resolved === undefined) {
        return interpolation.defaultValue ?? String(key || "");
      }

      const withPlural = resolvePluralValue(bundle.locale, resolved, interpolation);
      if (typeof withPlural === "string") {
        return interpolateString(withPlural, interpolation);
      }
      if (Array.isArray(withPlural)) {
        return interpolation.returnObjects ? structuredClone(withPlural) : withPlural.join(", ");
      }
      if (isPlainObject(withPlural) && interpolation.returnObjects) {
        return structuredClone(withPlural);
      }
      return interpolation.defaultValue ?? String(key || "");
    },
    formatNumber(value, numberOptions = {}) {
      return formatNumber(bundle.locale, value, numberOptions);
    },
    formatDate(value, dateOptions = {}) {
      return formatDate(bundle.locale, value, dateOptions);
    },
    formatTime(value, timeOptions = {}) {
      return formatTime(bundle.locale, value, timeOptions);
    },
  };
}

function normalizeDateInput(value) {
  if (value == null || value === "") {
    return null;
  }
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value;
  }
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function formatNumber(locale, value, options = {}) {
  const resolvedLocale = resolveLocale(locale, DEFAULT_LOCALE);
  return new Intl.NumberFormat(resolvedLocale, options).format(Number(value || 0));
}

export function formatDate(locale, value, options = {}) {
  const date = normalizeDateInput(value);
  if (!date) {
    return "";
  }
  const resolvedLocale = resolveLocale(locale, DEFAULT_LOCALE);
  return new Intl.DateTimeFormat(resolvedLocale, options).format(date);
}

export function formatTime(locale, value, options = {}) {
  const date = normalizeDateInput(value);
  if (!date) {
    return "";
  }
  const resolvedLocale = resolveLocale(locale, DEFAULT_LOCALE);
  return new Intl.DateTimeFormat(
    resolvedLocale,
    Object.keys(options).length
      ? options
      : {
          hour: "2-digit",
          minute: "2-digit",
        },
  ).format(date);
}
