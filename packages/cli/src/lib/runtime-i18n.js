import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  PROJECT_LOCALE_ALIASES,
  PROJECT_LOCALE_METADATA,
  RUNTIME_LOCALE_ORDER,
} from "../../../i18n-runtime/src/locale-metadata.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCALES_ROOT = path.resolve(__dirname, "../../../i18n-runtime/src/locales");
const RTL_LOCALES = new Set(["ar", "he"]);
const NAMESPACE_CACHE = new Map();

function lookupKeyPath(source, keyPath = "") {
  if (!source || !keyPath) {
    return undefined;
  }

  return String(keyPath)
    .split(".")
    .reduce((current, segment) => {
      if (!current || typeof current !== "object") {
        return undefined;
      }
      return current[segment];
    }, source);
}

function interpolate(template, variables = {}) {
  return String(template).replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, (_match, key) => {
    const value = variables[key];
    return value === undefined || value === null ? "" : String(value);
  });
}

function getPluralCategory(value, locale) {
  try {
    return new Intl.PluralRules(locale).select(Number(value));
  } catch {
    return Number(value) === 1 ? "one" : "other";
  }
}

function normalizeLocaleCandidate(value) {
  return String(value || "")
    .trim()
    .replace(/_/g, "-")
    .replace(/\..*$/, "")
    .replace(/@.*$/, "");
}

function normalizeRuntimeLocale(value) {
  const candidate = normalizeLocaleCandidate(value);
  if (!candidate) {
    return null;
  }

  if (PROJECT_LOCALE_METADATA[candidate]) {
    return candidate;
  }

  const lower = candidate.toLowerCase();
  if (PROJECT_LOCALE_ALIASES[lower]) {
    return PROJECT_LOCALE_ALIASES[lower];
  }

  const caseInsensitiveMatch = Object.keys(PROJECT_LOCALE_METADATA).find(
    (locale) => locale.toLowerCase() === lower,
  );
  if (caseInsensitiveMatch) {
    return caseInsensitiveMatch;
  }

  const base = lower.split("-")[0];
  if (PROJECT_LOCALE_ALIASES[base]) {
    return PROJECT_LOCALE_ALIASES[base];
  }
  if (PROJECT_LOCALE_METADATA[base]) {
    return base;
  }

  return null;
}

function detectSystemLocale(env = process.env) {
  const candidates = [env.LC_ALL, env.LC_MESSAGES, env.LANG];
  for (const candidate of candidates) {
    const normalized = normalizeRuntimeLocale(candidate);
    if (normalized) {
      return normalized;
    }
  }
  return null;
}

function resolveRuntimeLocale({
  requestedLocale = null,
  preferredLocale = null,
  env = process.env,
} = {}) {
  return (
    normalizeRuntimeLocale(requestedLocale) ||
    normalizeRuntimeLocale(env.OMNI_SKILLS_LANG) ||
    normalizeRuntimeLocale(preferredLocale) ||
    detectSystemLocale(env) ||
    "en"
  );
}

function getLocaleMetadata(locale) {
  const normalized = normalizeRuntimeLocale(locale) || "en";
  return PROJECT_LOCALE_METADATA[normalized] || PROJECT_LOCALE_METADATA.en;
}

function getLocaleDisplayName(locale) {
  const metadata = getLocaleMetadata(locale);
  return metadata.nativeName || metadata.code;
}

function isRtlLocale(locale) {
  return RTL_LOCALES.has(resolveRuntimeLocale({ requestedLocale: locale }));
}

function getIntlLocale(locale) {
  return getLocaleMetadata(locale).intlCode || "en";
}

function loadLocaleNamespace(locale, namespace) {
  const normalizedLocale = resolveRuntimeLocale({ requestedLocale: locale });
  const cacheKey = `${normalizedLocale}:${namespace}`;
  if (NAMESPACE_CACHE.has(cacheKey)) {
    return NAMESPACE_CACHE.get(cacheKey);
  }

  const localePath = path.join(LOCALES_ROOT, normalizedLocale, `${namespace}.json`);
  const fallbackPath = path.join(LOCALES_ROOT, "en", `${namespace}.json`);
  const sourcePath = fs.existsSync(localePath) ? localePath : fallbackPath;
  const parsed = JSON.parse(fs.readFileSync(sourcePath, "utf-8"));
  NAMESPACE_CACHE.set(cacheKey, parsed);
  return parsed;
}

function translateValue(rawValue, variables, locale) {
  if (rawValue && typeof rawValue === "object" && !Array.isArray(rawValue)) {
    if (variables.count !== undefined && variables.count !== null) {
      const category = getPluralCategory(variables.count, getIntlLocale(locale));
      const template =
        rawValue[category] ??
        rawValue.other ??
        rawValue.one ??
        Object.values(rawValue)[0];
      return interpolate(template, variables);
    }
    return "";
  }

  if (rawValue === undefined) {
    return "";
  }

  return interpolate(rawValue, variables);
}

function createRuntimeTranslator({
  locale = "en",
  namespaces = ["common", "tui"],
} = {}) {
  const resolvedLocale = resolveRuntimeLocale({ requestedLocale: locale });
  const loadedNamespaces = new Map(
    namespaces.map((namespace) => [
      namespace,
      {
        primary: loadLocaleNamespace(resolvedLocale, namespace),
        fallback: loadLocaleNamespace("en", namespace),
      },
    ]),
  );

  function resolveRawValue(namespace, keyPath) {
    const source = loadedNamespaces.get(namespace);
    if (!source) {
      return undefined;
    }
    return lookupKeyPath(source.primary, keyPath) ?? lookupKeyPath(source.fallback, keyPath);
  }

  function tIn(namespace, keyPath, variables = {}) {
    const rawValue = resolveRawValue(namespace, keyPath);
    if (rawValue === undefined) {
      return keyPath;
    }
    return translateValue(rawValue, variables, resolvedLocale);
  }

  function t(keyPath, variables = {}) {
    for (const namespace of namespaces) {
      const rawValue = resolveRawValue(namespace, keyPath);
      if (rawValue !== undefined) {
        return translateValue(rawValue, variables, resolvedLocale);
      }
    }
    return keyPath;
  }

  return {
    locale: resolvedLocale,
    intlLocale: getIntlLocale(resolvedLocale),
    direction: isRtlLocale(resolvedLocale) ? "rtl" : "ltr",
    t,
    tIn,
  };
}

function getNextRuntimeLocalePreference(currentPreference = null) {
  const options = [null, ...RUNTIME_LOCALE_ORDER];
  const current =
    currentPreference === null || currentPreference === undefined
      ? null
      : normalizeRuntimeLocale(currentPreference);
  const currentIndex = options.findIndex((option) => option === current);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;
  return options[(safeIndex + 1) % options.length];
}

function listSupportedRuntimeLocales() {
  return [...RUNTIME_LOCALE_ORDER];
}

export {
  createRuntimeTranslator,
  getIntlLocale,
  getLocaleDisplayName,
  getNextRuntimeLocalePreference,
  isRtlLocale,
  listSupportedRuntimeLocales,
  normalizeRuntimeLocale,
  resolveRuntimeLocale,
};
