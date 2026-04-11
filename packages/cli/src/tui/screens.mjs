import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useFocus, useFocusManager, useInput } from "ink";
import TextInput from "ink-text-input";
import { DEFAULT_TUI_THEME } from "./theme.mjs";
import { BadgeRow, EmptyState, Panel, Screen, resolveViewport } from "./layout.mjs";
import { FocusTabs, MenuScreen, SelectMenu } from "./controls.mjs";
import { listKnownInstallTargets } from "./install-flow.mjs";
import { searchBundleMatches } from "./catalog.mjs";
import {
  createRuntimeTranslator,
  getLocaleDisplayName,
  getNextRuntimeLocalePreference,
  resolveRuntimeLocale,
} from "../lib/runtime-i18n.js";

const h = React.createElement;

function truncateLine(value, maxLength = 140) {
  const normalized = String(value || "").replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }
  return `${normalized.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}

function buildScreenTranslator(resolvedLocale, preferredLocale = null) {
  const locale = resolveRuntimeLocale({
    requestedLocale: resolvedLocale,
    preferredLocale,
  });
  return createRuntimeTranslator({
    locale,
    namespaces: ["common", "tui"],
  });
}

function formatPreferredLanguage(preferredLocale, resolvedLocale, t) {
  if (!preferredLocale) {
    return `${t("language.auto")} (${getLocaleDisplayName(resolvedLocale)})`;
  }
  return getLocaleDisplayName(preferredLocale);
}

function getThemeLabel(themeId, t) {
  if (themeId === "ember") {
    return t("settings.values.ember");
  }
  if (themeId === "forest") {
    return t("settings.values.forest");
  }
  return t("settings.values.midnightIce");
}

function withCurrentSelection(label, isCurrent, t) {
  return isCurrent ? `${label} (${t("settings.currentSelection")})` : label;
}

function HomeScreen({
  catalog,
  bundleList,
  cliState,
  flash,
  activityItems,
  progress,
  theme,
  screenReaderEnabled,
  compactMode,
  statePath,
  onSelect,
  onExit,
  resolvedLocale = null,
}) {
  const i18n = buildScreenTranslator(resolvedLocale, cliState.preferences?.language ?? null);
  const { t, locale } = i18n;
  const currentLanguage = formatPreferredLanguage(cliState.preferences?.language ?? null, locale, t);
  const homeItems = [
    {
      id: "install-hub",
      label: t("home.installLabel"),
      description: t("home.installDescription"),
      meta: t("home.metrics.skills", { count: catalog.total_skills }),
      section: "Start",
      tone: "primary",
    },
    {
      id: "discover-hub",
      label: t("home.catalogLabel"),
      description: t("home.catalogDescription"),
      meta: t("home.metrics.bundles", { count: bundleList.length }),
      section: "Start",
      tone: "accent",
    },
    {
      id: "operate-hub",
      label: t("home.servicesLabel"),
      description: t("home.servicesDescription"),
      meta: cliState.recentServices.length
        ? t("home.metrics.recentServices", { count: cliState.recentServices.length })
        : t("labels.services"),
      section: "Start",
      tone: "success",
    },
    {
      id: "settings",
      label: t("home.settingsLabel"),
      description: t("home.settingsDescription"),
      meta: currentLanguage,
      section: "Start",
      tone: "info",
    },
    {
      id: "diagnostics-hub",
      label: t("home.diagnosticsLabel"),
      description: t("home.diagnosticsDescription"),
      meta: t("home.diagnosticsMeta"),
      section: "Start",
      tone: "warning",
    },
    {
      id: "exit",
      label: t("home.exitLabel"),
      description: t("home.exitDescription"),
      meta: t("home.exitMeta"),
      section: "Start",
      tone: "error",
    },
  ];

  const viewport = resolveViewport(theme, { screenReaderEnabled, compactMode });
  const favoriteCount = cliState.favorites.skills.length + cliState.favorites.bundles.length;
  const contextLine = [
    t("home.metrics.skills", { count: catalog.total_skills }),
    t("home.metrics.bundles", { count: bundleList.length }),
    t("home.metrics.favorites", { count: favoriteCount }),
    cliState.recentInstalls.length ? t("home.metrics.recentInstalls", { count: cliState.recentInstalls.length }) : null,
    cliState.recentServices.length ? t("home.metrics.recentServices", { count: cliState.recentServices.length }) : null,
  ]
    .filter(Boolean)
    .join(" • ");
  const topInstallTargets = listKnownInstallTargets(cliState.customInstallTargets || []).slice(0, viewport.narrow ? 3 : 4);

  return h(
    Screen,
    {
      title: t("home.title"),
      subtitle: t("home.subtitle"),
      status: flash || contextLine,
      theme,
      showLogo: true,
      metrics: [],
      screenReaderEnabled,
      compactMode,
      footer: t("home.footer"),
      footerRight: "npx awesome-omni-skills ui",
    },
    h(
      Box,
      { flexDirection: "column" },
      h(
        Panel,
        {
          title: t("home.panelTitle"),
          theme,
          tone: "primary",
          active: true,
          label: "Home entry menu",
          marginBottom: 0,
        },
        h(Text, { color: theme.colors.textDim }, t("home.subtitle")),
        h(BadgeRow, {
          items: [
            t("home.metrics.skills", { count: catalog.total_skills }),
            t("home.metrics.bundles", { count: bundleList.length }),
            t("home.metrics.favorites", { count: favoriteCount }),
          ],
          theme,
        }),
        h(SelectMenu, {
          items: homeItems,
          onSelect: (item) => {
            if (item.id === "exit") {
              onExit();
              return;
            }
            onSelect(item);
          },
          onHighlight: null,
          theme,
          pageSize: homeItems.length,
          label: "Home menu",
          footerNote: t("home.footerNote"),
        }),
        topInstallTargets.length
          ? h(Text, { color: theme.colors.subtle }, t("home.popularTargets", { value: topInstallTargets.map((target) => target.name).join(" • ") }))
          : null,
        progress
          ? h(
              Text,
              { color: theme.colors.primary },
              `${t("home.inProgress", { value: progress.label })}${progress.nextStep ? ` • ${t("home.nextStep", { value: progress.nextStep })}` : ""}`,
            )
          : null,
        activityItems.length
          ? h(Text, { color: theme.colors.textDim }, t("home.recentActivity", { value: activityItems[activityItems.length - 1].label }))
          : h(Text, { color: theme.colors.textDim }, t("home.noRecentActivity")),
        h(Text, { color: theme.colors.subtle }, t("home.stateFile", { value: statePath })),
      ),
    ),
  );
}

function CatalogExplorerScreen({
  core,
  searchAdapter,
  familyList,
  bundleList,
  cliState,
  query,
  setQuery,
  searchModeLabel = "Memory",
  theme,
  screenReaderEnabled,
  compactMode,
  onBack,
  onSelectResult,
  onToggleFavoriteSkill,
  onToggleFavoriteBundle,
  resolvedLocale = null,
}) {
  const i18n = buildScreenTranslator(resolvedLocale, cliState.preferences?.language ?? null);
  const { t } = i18n;
  const focusManager = useFocusManager();
  const { isFocused: queryFocused } = useFocus({ id: "catalog-query", autoFocus: true });
  const [activeItem, setActiveItem] = useState(null);
  const [debouncedQuery, setDebouncedQuery] = useState(String(query || ""));

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(String(query || ""));
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const sortedSkills = useMemo(
    () =>
      [...familyList].sort(
        (left, right) =>
          Number(right.default_skill?.quality_score || 0) - Number(left.default_skill?.quality_score || 0) ||
          String(left.display_name || left.id).localeCompare(String(right.display_name || right.id)),
      ),
    [familyList],
  );

  const resultItems = useMemo(() => {
    const normalizedQuery = String(debouncedQuery || "").trim();
    const topFamilies = normalizedQuery
      ? searchAdapter && typeof searchAdapter.search === "function"
        ? core.searchFamilies({ query: normalizedQuery, limit: 24 })?.results || []
        : core.searchFamilies({ query: normalizedQuery, limit: 24 }).results || []
      : sortedSkills.slice(0, 24);
    const topBundles = normalizedQuery
      ? searchBundleMatches(bundleList, normalizedQuery).slice(0, 12)
      : [...bundleList]
          .sort((left, right) => String(left.name || left.id).localeCompare(String(right.name || right.id)))
          .slice(0, 12);

    return [
      ...topFamilies.map((family) => {
        const recommendedSkill = family.default_skill || null;
        const recommendedVariant = (family.variants || []).find((variant) => variant.is_default) || family.variants?.[0];
        return {
        id: `family:${family.id}`,
        label: t(
          Number(family.variant_count || 1) === 1 ? "catalog.familyLabelOne" : "catalog.familyLabelOther",
          {
            name: family.display_name || family.id,
            count: family.variant_count || 1,
          },
        ),
        description: truncateLine(family.description, 120),
        detailTitle: family.display_name || family.id,
        detailText: t("catalog.familyDetailText", {
          value: family.canonical_category || recommendedSkill?.category || "general",
        }),
        detailLines: [
          t("catalog.recommendedVariant", {
            value: recommendedVariant?.variant_label || t("catalog.native"),
          }),
          t("catalog.recommendedId", { value: recommendedSkill?.id || family.default_skill_id }),
          t("catalog.availableVariants", {
            value: (family.variants || []).map((variant) => variant.variant_label).join(", ") || t("catalog.none"),
          }),
          t("catalog.tags", {
            value: (recommendedSkill?.tags || []).slice(0, 6).join(", ") || t("catalog.noTags"),
          }),
        ],
        badges: recommendedSkill && cliState.favorites.skills.includes(recommendedSkill.id) ? [t("catalog.favoriteBadge")] : [],
        section: t("catalog.familySection"),
        tone: "primary",
      }}),
      ...topBundles.map((bundle) => ({
        id: `bundle:${bundle.id}`,
        label: `${bundle.name} • ${bundle.availability.available}/${bundle.availability.total}`,
        description: truncateLine(bundle.description, 120),
        detailTitle: bundle.name,
        detailText: t("catalog.bundleDetailText", {
          value: bundle.intended_for || t("catalog.starterPack"),
        }),
        detailLines: [
          t("catalog.publishedSkillsAvailable", {
            value: `${bundle.availability.available}/${bundle.availability.total}`,
          }),
          t("catalog.bundleId", { value: bundle.id }),
          t("catalog.includes", {
            value: `${(bundle.skill_ids || []).slice(0, 6).join(", ")}${bundle.skill_ids.length > 6 ? "…" : ""}` || t("catalog.none"),
          }),
        ],
        badges: cliState.favorites.bundles.includes(bundle.id) ? [t("catalog.favoriteBadge")] : [],
        section: t("catalog.bundleSection"),
        tone: "accent",
      })),
    ];
  }, [bundleList, cliState.favorites.bundles, cliState.favorites.skills, core, debouncedQuery, searchAdapter, sortedSkills, t]);

  useEffect(() => {
    setActiveItem(resultItems[0] || null);
  }, [resultItems]);

  useInput((input, key) => {
    if (key.escape) {
      onBack();
      return;
    }
    if (queryFocused && key.return) {
      if (String(query || "").trim() && resultItems.length > 0) {
        onSelectResult(resultItems[0]);
        return;
      }
      focusManager.focus("catalog-results");
      return;
    }
    if (key.tab) {
      focusManager.focus(queryFocused ? "catalog-results" : "catalog-query");
      return;
    }
    if (queryFocused) {
      return;
    }
    if (input.toLowerCase() === "f" && activeItem) {
      if (String(activeItem.id).startsWith("family:")) {
        onToggleFavoriteSkill(String(activeItem.id).slice("family:".length));
      } else if (String(activeItem.id).startsWith("bundle:")) {
        onToggleFavoriteBundle(String(activeItem.id).slice("bundle:".length));
      }
    }
  });

  return h(
    Screen,
    {
      title: t("catalog.title"),
      subtitle: t("catalog.subtitle"),
      theme,
      screenReaderEnabled,
      compactMode,
      footer: t("catalog.footer"),
      footerRight: t("catalog.footerRight", {
        query: String(query || "").trim() || t("catalog.topPicks"),
        mode: searchModeLabel,
      }),
    },
    h(FocusTabs, {
      theme,
      active: queryFocused ? "query" : "results",
      items: [
        { id: "query", label: t("catalog.tabQuery") },
        { id: "results", label: t("catalog.tabResults") },
      ],
    }),
    h(
      Box,
      { flexDirection: "column" },
      queryFocused
        ? h(
            Panel,
            { title: t("catalog.searchTitle"), theme, tone: "primary", active: true, label: t("catalog.searchLabel"), marginBottom: 0 },
            h(
              Box,
              { flexDirection: "row" },
              h(Text, { color: theme.colors.primary }, "> "),
              h(TextInput, {
                value: query,
                focus: queryFocused,
                placeholder: t("catalog.searchPlaceholder"),
                onChange: setQuery,
                onSubmit: () => {
                  if (String(query || "").trim() && resultItems.length > 0) {
                    focusManager.focus("catalog-results");
                    return;
                  }
                  focusManager.focus("catalog-results");
                },
              }),
            ),
            h(Text, { color: theme.colors.subtle }, t("catalog.searchBlankHint")),
            h(
              Text,
              { color: theme.colors.textDim },
              String(query || "").trim() !== String(debouncedQuery || "").trim()
                ? t("catalog.refreshing", { mode: searchModeLabel })
                : t("catalog.ready", { count: resultItems.length, mode: searchModeLabel }),
            ),
            resultItems.length
              ? h(Text, { color: theme.colors.text }, t("catalog.topMatch", { value: resultItems[0].detailTitle || resultItems[0].label }))
              : h(Text, { color: theme.colors.warning }, t("catalog.noMatches")),
            resultItems.length > 1
              ? h(Text, { color: theme.colors.subtle }, t("catalog.next", { value: resultItems.slice(1, 4).map((item) => item.detailTitle || item.label).join(" • ") }))
              : null,
            h(Text, { color: theme.colors.subtle }, t("catalog.pressTab")),
          )
        : resultItems.length
          ? h(
              Panel,
              { title: t("catalog.resultsTitle"), theme, tone: "accent", active: true, label: t("catalog.resultsLabel"), marginBottom: 0 },
              activeItem?.detailTitle
                ? h(Text, { color: theme.colors.primary, bold: true }, activeItem.detailTitle)
                : null,
              activeItem?.detailText ? h(Text, { color: theme.colors.textDim }, activeItem.detailText) : null,
              activeItem?.description ? h(Text, { color: theme.colors.text }, activeItem.description) : null,
              activeItem?.detailLines?.length
                ? h(Text, { color: theme.colors.subtle }, truncateLine(activeItem.detailLines.join(" • "), 160))
                : null,
              h(SelectMenu, {
                items: resultItems,
                onSelect: onSelectResult,
                onBack,
                onHighlight: setActiveItem,
                theme,
                focusId: "catalog-results",
                autoFocus: false,
                pageSize: 8,
                footerNote: t("catalog.resultsFooterNote"),
              }),
            )
          : h(EmptyState, {
              title: t("catalog.emptyTitle"),
              text: t("catalog.emptyText", { query }),
              hint: t("catalog.emptyHint"),
              theme,
              tone: "warning",
            }),
    ),
  );
}

function SettingsScreen({
  cliState,
  theme,
  screenReaderEnabled,
  compactMode,
  onBack,
  onApplyPreference,
  resolvedLocale = null,
}) {
  const i18n = buildScreenTranslator(resolvedLocale, cliState.preferences?.language ?? null);
  const { t, locale } = i18n;
  const preferredLanguage = formatPreferredLanguage(cliState.preferences?.language ?? null, locale, t);
  const currentThemeId = cliState.preferences?.theme || DEFAULT_TUI_THEME;
  const currentThemeLabel = getThemeLabel(currentThemeId, t);
  const nextLanguagePreference = getNextRuntimeLocalePreference(cliState.preferences?.language ?? null);
  const items = [
    {
      id: "theme:midnight-ice",
      label: withCurrentSelection(getThemeLabel("midnight-ice", t), cliState.preferences?.theme === "midnight-ice", t),
      description:
        cliState.preferences?.theme === "midnight-ice"
          ? t("settings.themeCurrent")
          : t("settings.themeSwitch", { value: getThemeLabel("midnight-ice", t) }),
    },
    {
      id: "theme:ember",
      label: withCurrentSelection(getThemeLabel("ember", t), cliState.preferences?.theme === "ember", t),
      description:
        cliState.preferences?.theme === "ember"
          ? t("settings.themeCurrent")
          : t("settings.themeSwitch", { value: getThemeLabel("ember", t) }),
    },
    {
      id: "theme:forest",
      label: withCurrentSelection(getThemeLabel("forest", t), cliState.preferences?.theme === "forest", t),
      description:
        cliState.preferences?.theme === "forest"
          ? t("settings.themeCurrent")
          : t("settings.themeSwitch", { value: getThemeLabel("forest", t) }),
    },
    {
      id: "language:cycle",
      label: t("settings.languageLabel", { value: preferredLanguage }),
      description: `${t("settings.languageDescription")} ${t("language.current", { value: preferredLanguage })}`,
    },
    {
      id: "compact:toggle",
      label: t("settings.compactLabel", {
        value: cliState.preferences?.compactMode ? t("settings.values.on") : t("settings.values.off"),
      }),
      description: t("settings.compactDescription"),
    },
    {
      id: "screen-reader:auto",
      label: withCurrentSelection(
        t("settings.screenReaderLabel", { value: t("settings.values.auto") }),
        cliState.preferences?.screenReaderMode === "auto",
        t,
      ),
      description: t("settings.screenReaderAutoDescription"),
    },
    {
      id: "screen-reader:on",
      label: withCurrentSelection(
        t("settings.screenReaderLabel", { value: t("settings.values.forcedOn") }),
        cliState.preferences?.screenReaderMode === "on",
        t,
      ),
      description: t("settings.screenReaderOnDescription"),
    },
    {
      id: "screen-reader:off",
      label: withCurrentSelection(
        t("settings.screenReaderLabel", { value: t("settings.values.forcedOff") }),
        cliState.preferences?.screenReaderMode === "off",
        t,
      ),
      description: t("settings.screenReaderOffDescription"),
    },
    {
      id: "back",
      label: t("settings.backLabel"),
      description: t("settings.backDescription"),
    },
  ];

  return h(MenuScreen, {
    title: t("settings.title"),
    subtitle: t("settings.subtitle"),
    items,
    onBack,
    onSelect: (item) => {
      if (item.id === "back") {
        onBack();
        return;
      }
      if (item.id.startsWith("theme:")) {
        const selectedTheme = item.id.split(":")[1];
        onApplyPreference({ theme: selectedTheme }, t("settings.themeSet", { value: getThemeLabel(selectedTheme, t) }));
        return;
      }
      if (item.id === "language:cycle") {
        const nextLanguage = getNextRuntimeLocalePreference(cliState.preferences?.language ?? null);
        const nextValue =
          nextLanguage === null
            ? `${t("language.auto")} (${getLocaleDisplayName(locale)})`
            : getLocaleDisplayName(nextLanguage);
        onApplyPreference({ language: nextLanguage }, t("settings.languageSet", { value: nextValue }));
        return;
      }
      if (item.id === "compact:toggle") {
        onApplyPreference(
          { compactMode: !cliState.preferences?.compactMode },
          cliState.preferences?.compactMode ? t("settings.compactDisabled") : t("settings.compactEnabled"),
        );
        return;
      }
      if (item.id.startsWith("screen-reader:")) {
        const mode = item.id.split(":")[1];
        const modeLabel =
          mode === "on"
            ? t("settings.values.forcedOn")
            : mode === "off"
              ? t("settings.values.forcedOff")
              : t("settings.values.auto");
        onApplyPreference({ screenReaderMode: mode }, t("settings.screenReaderSet", { value: modeLabel }));
      }
    },
    theme,
    screenReaderEnabled,
    compactMode,
    status: `${t("settings.status", {
      theme: currentThemeLabel,
      detected: screenReaderEnabled ? t("settings.detectedYes") : t("settings.detectedNo"),
    })} • ${t("labels.locale")}: ${getLocaleDisplayName(locale)}`,
  });
}

export {
  CatalogExplorerScreen,
  HomeScreen,
  SettingsScreen,
};
