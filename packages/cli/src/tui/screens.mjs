import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useFocus, useFocusManager, useInput } from "ink";
import TextInput from "ink-text-input";
import { DEFAULT_TUI_THEME } from "./theme.mjs";
import { BadgeRow, EmptyState, Panel, Screen, resolveViewport } from "./layout.mjs";
import { FocusTabs, MenuScreen, SelectMenu } from "./controls.mjs";
import { listKnownInstallTargets } from "./install-flow.mjs";
import { searchBundleMatches } from "./catalog.mjs";

const h = React.createElement;

function truncateLine(value, maxLength = 140) {
  const normalized = String(value || "").replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }
  return `${normalized.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
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
}) {
  const homeItems = [
    {
      id: "install-hub",
      label: "Install and update",
      description: "Set destination, choose scope, and install published skills or bundles.",
      meta: `${catalog.total_skills} skills ready`,
      section: "Start",
      tone: "primary",
    },
    {
      id: "discover-hub",
      label: "Discover catalog",
      description: "Search and browse the catalog before choosing anything to install.",
      meta: `${bundleList.length} bundles published`,
      section: "Start",
      tone: "accent",
    },
    {
      id: "operate-hub",
      label: "Launch services",
      description: "Start MCP, API, or A2A with guided runtime configuration.",
      meta: cliState.recentServices.length ? `${cliState.recentServices.length} recent runs` : "runtime launchers",
      section: "Start",
      tone: "success",
    },
    {
      id: "settings",
      label: "Settings",
      description: "Change theme, compact mode, and screen reader preferences.",
      meta: cliState.preferences?.theme || DEFAULT_TUI_THEME,
      section: "Start",
      tone: "info",
    },
    {
      id: "diagnostics-hub",
      label: "Diagnostics",
      description: "Run doctor, smoke checks, and inspect local health before publishing.",
      meta: "doctor + smoke",
      section: "Start",
      tone: "warning",
    },
    {
      id: "exit",
      label: "Exit",
      description: "Leave the visual shell without running anything.",
      meta: "back to terminal",
      section: "Start",
      tone: "error",
    },
  ];

  const viewport = resolveViewport(theme, { screenReaderEnabled, compactMode });
  const favoriteCount = cliState.favorites.skills.length + cliState.favorites.bundles.length;
  const contextLine = [
    `${catalog.total_skills} skills`,
    `${bundleList.length} bundles`,
    `${favoriteCount} favorites`,
    cliState.recentInstalls.length ? `${cliState.recentInstalls.length} recent installs` : null,
    cliState.recentServices.length ? `${cliState.recentServices.length} recent services` : null,
  ]
    .filter(Boolean)
    .join(" • ");
  const topInstallTargets = listKnownInstallTargets(cliState.customInstallTargets || []).slice(0, viewport.narrow ? 3 : 4);

  return h(
    Screen,
    {
      title: "Visual terminal hub",
      subtitle: "Choose a path, then move step by step through install, discovery, or runtime.",
      status: flash || contextLine,
      theme,
      showLogo: true,
      metrics: [],
      screenReaderEnabled,
      compactMode,
      footer: "↑/↓ move • Enter open • 1-6 jump • Ctrl+C exit",
      footerRight: "npx awesome-omni-skills ui",
    },
    h(
      Box,
      { flexDirection: "column" },
      h(
        Panel,
        {
          title: "Start here",
          theme,
          tone: "primary",
          active: true,
          label: "Home entry menu",
          marginBottom: 0,
        },
        h(Text, { color: theme.colors.textDim }, "The first screen stays simple. Detailed choices open on the next step."),
        h(BadgeRow, {
          items: [
            `${catalog.total_skills} skills`,
            `${bundleList.length} bundles`,
            `${favoriteCount} favorites`,
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
          footerNote: "Open one path at a time",
        }),
        topInstallTargets.length
          ? h(Text, { color: theme.colors.subtle }, `Popular targets: ${topInstallTargets.map((target) => target.name).join(" • ")}`)
          : null,
        progress
          ? h(Text, { color: theme.colors.primary }, `In progress: ${progress.label}${progress.nextStep ? ` • next ${progress.nextStep}` : ""}`)
          : null,
        activityItems.length
          ? h(Text, { color: theme.colors.textDim }, `Latest activity: ${activityItems[activityItems.length - 1].label}`)
          : null,
        h(Text, { color: theme.colors.subtle }, `State file: ${statePath}`),
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
}) {
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
        label: `${family.display_name || family.id} • ${family.variant_count || 1} variant${family.variant_count === 1 ? "" : "s"}`,
        description: truncateLine(family.description, 120),
        detailTitle: family.display_name || family.id,
        detailText: `Family • category ${family.canonical_category || recommendedSkill?.category || "general"}`,
        detailLines: [
          `Recommended variant: ${recommendedVariant?.variant_label || "Native"}`,
          `Recommended id: ${recommendedSkill?.id || family.default_skill_id}`,
          `Available variants: ${(family.variants || []).map((variant) => variant.variant_label).join(", ") || "none"}`,
          `Tags: ${(recommendedSkill?.tags || []).slice(0, 6).join(", ") || "none"}`,
        ],
        badges: recommendedSkill && cliState.favorites.skills.includes(recommendedSkill.id) ? ["favorite"] : [],
        section: "Families",
        tone: "primary",
      }}),
      ...topBundles.map((bundle) => ({
        id: `bundle:${bundle.id}`,
        label: `${bundle.name} • ${bundle.availability.available}/${bundle.availability.total}`,
        description: truncateLine(bundle.description, 120),
        detailTitle: bundle.name,
        detailText: `Bundle • ${bundle.intended_for || "starter pack"}`,
        detailLines: [
          `Published skills available: ${bundle.availability.available}/${bundle.availability.total}`,
          `Bundle id: ${bundle.id}`,
          `Includes: ${(bundle.skill_ids || []).slice(0, 6).join(", ")}${bundle.skill_ids.length > 6 ? "…" : ""}`,
        ],
        badges: cliState.favorites.bundles.includes(bundle.id) ? ["favorite"] : [],
        section: "Bundles",
        tone: "accent",
      })),
    ];
  }, [bundleList, cliState.favorites.bundles, cliState.favorites.skills, core, debouncedQuery, searchAdapter, sortedSkills]);

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
      title: "Catalog explorer",
      subtitle: "Search first, then move into results when you are ready.",
      theme,
      screenReaderEnabled,
      compactMode,
      footer: "Tab switch pane • Enter open • F favorite • Esc back • Ctrl+C exit",
      footerRight: `Query: ${String(query || "").trim() || "top picks"} • Search: ${searchModeLabel}`,
    },
    h(FocusTabs, {
      theme,
      active: queryFocused ? "query" : "results",
      items: [
        { id: "query", label: "Query" },
        { id: "results", label: "Results" },
      ],
    }),
    h(
      Box,
      { flexDirection: "column" },
      queryFocused
        ? h(
            Panel,
            { title: "Search", theme, tone: "primary", active: true, label: "Catalog search input", marginBottom: 0 },
            h(
              Box,
              { flexDirection: "row" },
              h(Text, { color: theme.colors.primary }, "> "),
              h(TextInput, {
                value: query,
                focus: queryFocused,
                placeholder: "figma, security, api, bundle...",
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
            h(Text, { color: theme.colors.subtle }, "Leave blank to browse top-rated skills and published bundles."),
            h(
              Text,
              { color: theme.colors.textDim },
              String(query || "").trim() !== String(debouncedQuery || "").trim()
                ? `Refreshing ${searchModeLabel} results…`
                : `${resultItems.length} result(s) ready in ${searchModeLabel}`,
            ),
            resultItems.length
              ? h(Text, { color: theme.colors.text }, `Top match: ${resultItems[0].detailTitle || resultItems[0].label}`)
              : h(Text, { color: theme.colors.warning }, "No matches for the current query."),
            resultItems.length > 1
              ? h(Text, { color: theme.colors.subtle }, `Next: ${resultItems.slice(1, 4).map((item) => item.detailTitle || item.label).join(" • ")}`)
              : null,
            h(Text, { color: theme.colors.subtle }, "Press Tab to browse the result list."),
          )
        : resultItems.length
          ? h(
              Panel,
              { title: "Results", theme, tone: "accent", active: true, label: "Catalog result list", marginBottom: 0 },
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
                footerNote: "Enter install • F favorite • Tab back to query",
              }),
            )
          : h(EmptyState, {
              title: "No catalog matches",
              text: `Nothing published matched '${query}'.`,
              hint: "Broaden the query or clear it to browse top picks.",
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
}) {
  const items = [
    {
      id: "theme:midnight-ice",
      label: "Theme • Midnight Ice",
      description: cliState.preferences?.theme === "midnight-ice" ? "Current theme" : "Switch to Midnight Ice",
    },
    {
      id: "theme:ember",
      label: "Theme • Ember",
      description: cliState.preferences?.theme === "ember" ? "Current theme" : "Switch to Ember",
    },
    {
      id: "theme:forest",
      label: "Theme • Forest",
      description: cliState.preferences?.theme === "forest" ? "Current theme" : "Switch to Forest",
    },
    {
      id: "compact:toggle",
      label: `Compact mode • ${cliState.preferences?.compactMode ? "On" : "Off"}`,
      description: "Narrow the shell layout for smaller terminals.",
    },
    {
      id: "screen-reader:auto",
      label: `Screen reader • Auto${cliState.preferences?.screenReaderMode === "auto" ? " (current)" : ""}`,
      description: "Follow Ink and terminal detection.",
    },
    {
      id: "screen-reader:on",
      label: `Screen reader • Force on${cliState.preferences?.screenReaderMode === "on" ? " (current)" : ""}`,
      description: "Prefer text-first rendering and explicit labels.",
    },
    {
      id: "screen-reader:off",
      label: `Screen reader • Force off${cliState.preferences?.screenReaderMode === "off" ? " (current)" : ""}`,
      description: "Use the normal visual shell.",
    },
    {
      id: "back",
      label: "Back",
      description: "Return to the home screen.",
    },
  ];

  return h(MenuScreen, {
    title: "Visual shell settings",
    subtitle: "Persisted locally in the CLI state file so the shell comes back the same way next time.",
    items,
    onBack,
    onSelect: (item) => {
      if (item.id === "back") {
        onBack();
        return;
      }
      if (item.id.startsWith("theme:")) {
        onApplyPreference({ theme: item.id.split(":")[1] }, `Theme set to ${item.label.split("•")[1].trim()}.`);
        return;
      }
      if (item.id === "compact:toggle") {
        onApplyPreference({ compactMode: !cliState.preferences?.compactMode }, `Compact mode ${cliState.preferences?.compactMode ? "disabled" : "enabled"}.`);
        return;
      }
      if (item.id.startsWith("screen-reader:")) {
        const mode = item.id.split(":")[1];
        onApplyPreference({ screenReaderMode: mode }, `Screen reader mode set to ${mode}.`);
      }
    },
    theme,
    screenReaderEnabled,
    compactMode,
    status: `Effective theme: ${theme.label} • Screen reader detected: ${screenReaderEnabled ? "yes" : "no"}`,
  });
}

export {
  CatalogExplorerScreen,
  HomeScreen,
  SettingsScreen,
};
