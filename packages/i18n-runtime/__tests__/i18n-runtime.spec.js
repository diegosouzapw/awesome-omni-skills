import { describe, expect, it } from "vitest";
import {
  createTranslator,
  formatDate,
  formatNumber,
  formatTime,
  getTranslations,
  listSupportedLocales,
  listSupportedNamespaces,
  normalizeLocale,
  parseAcceptLanguageHeader,
  resolveDirection,
  resolveLocale,
  resolveLocaleFromAcceptLanguage,
  resolveLocaleFromEnv,
} from "../src/index.js";

describe("i18n-runtime", () => {
  it("lists the supported locales and namespaces", () => {
    expect(listSupportedLocales()).toEqual(["en", "pt-BR", "es"]);
    expect(listSupportedNamespaces()).toEqual(["common", "cli", "tui", "web", "errors"]);
  });

  it("normalizes locales with aliases and environment-style decorators", () => {
    expect(normalizeLocale("pt")).toBe("pt-BR");
    expect(normalizeLocale("PT_br")).toBe("pt-BR");
    expect(normalizeLocale("en_US.UTF-8")).toBe("en");
    expect(normalizeLocale("es-MX")).toBe("es");
    expect(normalizeLocale("zz-ZZ")).toBeNull();
  });

  it("resolves locales from candidate lists, env vars, and Accept-Language", () => {
    expect(resolveLocale(["zz-ZZ", "es-MX"])).toBe("es");
    expect(resolveLocaleFromEnv({ LANG: "pt_BR.UTF-8" })).toBe("pt-BR");
    expect(parseAcceptLanguageHeader("fr-CA,pt-BR;q=0.9,en;q=0.8")).toEqual(["fr-CA", "pt-BR", "en"]);
    expect(resolveLocaleFromAcceptLanguage("fr-CA,pt-BR;q=0.9,en;q=0.8")).toBe("pt-BR");
  });

  it("resolves text direction independently from locale support", () => {
    expect(resolveDirection("pt-BR")).toBe("ltr");
    expect(resolveDirection("ar")).toBe("rtl");
  });

  it("creates translators with fallback, interpolation, and pluralization", () => {
    const ptTranslator = createTranslator({ locale: "pt", namespaces: ["common", "tui", "web"] });
    expect(ptTranslator.locale).toBe("pt-BR");
    expect(ptTranslator.t("language.label")).toBe("Idioma");
    expect(ptTranslator.t("tui:home.title")).toBe("Central visual do terminal");
    expect(ptTranslator.t("collections.bundleCount", { count: 1 })).toBe("1 bundle");
    expect(ptTranslator.t("collections.bundleCount", { count: 3 })).toBe("3 bundles");
    expect(ptTranslator.t("web:status.generatedAt", { value: "10:30" })).toBe("Gerado em 10:30");
    expect(ptTranslator.t("missing.key", { defaultValue: "fallback" })).toBe("fallback");
  });

  it("falls back to english when a localized key is missing", () => {
    const esTranslator = createTranslator({ locale: "es", namespaces: ["web"] });
    expect(esTranslator.t("status.catalogOnline")).toBe("Catalogo en linea");
    expect(esTranslator.t("status.catalogUnhealthy")).toBe("Catalog Unhealthy");
  });

  it("returns structured translation bundles for selected namespaces", () => {
    const bundle = getTranslations("es", ["common", "web"]);
    expect(bundle.locale).toBe("es");
    expect(bundle.direction).toBe("ltr");
    expect(Object.keys(bundle.resources)).toEqual(["common", "web"]);
    expect(bundle.resources.common.language.label).toBe("Idioma");
  });

  it("formats numbers, dates, and times with Intl using the resolved locale", () => {
    const sampleDate = new Date("2026-12-31T18:45:00.000Z");
    expect(formatNumber("pt-BR", 12345.67)).toBe(new Intl.NumberFormat("pt-BR").format(12345.67));
    expect(formatDate("es", sampleDate, { dateStyle: "short", timeZone: "UTC" }))
      .toBe(new Intl.DateTimeFormat("es", { dateStyle: "short", timeZone: "UTC" }).format(sampleDate));
    expect(formatTime("en-US", sampleDate, { hour: "2-digit", minute: "2-digit", timeZone: "UTC" }))
      .toBe(new Intl.DateTimeFormat("en", { hour: "2-digit", minute: "2-digit", timeZone: "UTC" }).format(sampleDate));
  });
});
