import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useFocus, useFocusManager, useInput } from "ink";
import TextInput from "ink-text-input";
import { DEFAULT_TUI_THEME } from "./theme.mjs";
import { BadgeRow, EmptyState, Panel, Screen, resolveViewport } from "./layout.mjs";
import { FocusTabs, MenuScreen, SelectMenu, filterSlashCommandItems, normalizeSlashInput, resolveItemCommand } from "./controls.mjs";
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

function resolveSlashCommand(items, rawQuery, selectedItem) {
  if (selectedItem) {
    return selectedItem;
  }
  const normalizedQuery = normalizeSlashInput(rawQuery);
  if (!normalizedQuery.startsWith("/")) {
    return null;
  }
  const exactQuery = normalizedQuery.replace(/^\//, "").trim().toLowerCase();
  if (!exactQuery) {
    return items[0] || null;
  }
  return items.find((item) => resolveItemCommand(item).replace(/^\//, "").toLowerCase() === exactQuery) || null;
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
  const focusManager = useFocusManager();
  const { isFocused } = useFocus({ id: "home-command-palette", autoFocus: true });
  const [commandQuery, setCommandQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const homeItems = [
    {
      id: "install-hub",
      command: "/install",
      label: "Install and update",
      description: "Open the guided install hub for destinations, skills, bundles, and updates.",
      meta: `${catalog.total_skills} skills ready`,
      aliases: ["guided install", "install", "update", "setup", "skills"],
    },
    {
      id: "catalog-explorer",
      command: "/catalog",
      label: "Browse published catalog",
      description: "Search families, variants, and bundles before you install anything.",
      meta: `${bundleList.length} bundles • family-aware search`,
      aliases: ["discover", "search", "browse", "families", "variants"],
    },
    {
      id: "operate-hub",
      command: "/services",
      label: "Launch services",
      description: "Open runtime launchers for MCP, API, Web, and A2A with guided configuration.",
      meta:
        cliState.activeServices?.length
          ? `${cliState.activeServices.length} active runtime${cliState.activeServices.length === 1 ? "" : "s"}`
          : cliState.recentServices.length
            ? `${cliState.recentServices.length} recent runs`
            : "runtime launchers",
      aliases: ["service", "runtime", "mcp", "api", "web", "a2a"],
    },
    {
      id: "settings",
      command: "/settings",
      label: "Settings",
      description: "Change theme, compact mode, and screen reader preferences.",
      meta: cliState.preferences?.theme || DEFAULT_TUI_THEME,
      aliases: ["preferences", "theme", "config"],
    },
    {
      id: "diagnostics-hub",
      command: "/diagnostics",
      label: "Diagnostics",
      description: "Run doctor, smoke checks, and inspect local health before publishing.",
      meta: "doctor + smoke",
      aliases: ["doctor", "smoke", "health", "checks"],
    },
    {
      id: "exit",
      command: "/exit",
      label: "Exit",
      description: "Leave the visual shell without running anything.",
      meta: "back to terminal",
      aliases: ["quit", "close", "leave"],
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
    cliState.activeServices?.length ? `${cliState.activeServices.length} active runtimes` : null,
  ]
    .filter(Boolean)
    .join(" • ");
  const topInstallTargets = listKnownInstallTargets(cliState.customInstallTargets || []).slice(0, viewport.narrow ? 3 : 4);
  const filteredCommands = useMemo(() => {
    return filterSlashCommandItems(homeItems, commandQuery);
  }, [commandQuery, homeItems]);
  const commandItems = commandQuery.startsWith("/") ? filteredCommands : [];
  const selectedCommand = commandItems[selectedIndex] || null;
  const latestActivity = activityItems.length ? activityItems[activityItems.length - 1].label : "No recent activity.";

  useEffect(() => {
    if (selectedIndex >= commandItems.length) {
      setSelectedIndex(0);
    }
  }, [commandItems.length, selectedIndex]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [commandQuery]);

  useEffect(() => {
    focusManager.focus("home-command-palette");
  }, [focusManager]);

  useInput((input, key) => {
    if (!isFocused) {
      return;
    }
    if (key.upArrow) {
      setSelectedIndex((current) => (current <= 0 ? Math.max(0, commandItems.length - 1) : current - 1));
      return;
    }
    if (key.downArrow) {
      setSelectedIndex((current) => (current >= commandItems.length - 1 ? 0 : current + 1));
      return;
    }
    if (key.pageUp) {
      setSelectedIndex((current) => Math.max(0, current - 4));
      return;
    }
    if (key.pageDown) {
      setSelectedIndex((current) => Math.min(Math.max(0, commandItems.length - 1), current + 4));
      return;
    }
    if (key.tab && selectedCommand) {
      setCommandQuery(resolveItemCommand(selectedCommand));
      return;
    }
    if (key.escape && commandQuery) {
      setCommandQuery("");
      return;
    }
    if (input >= "1" && input <= "9") {
      const targetIndex = Number.parseInt(input, 10) - 1;
      const numericPool = commandQuery.startsWith("/") ? commandItems : homeItems;
      if (numericPool[targetIndex]) {
        onSelect(numericPool[targetIndex]);
      }
    }
  });

  function handleSubmit() {
    const nextItem = resolveSlashCommand(homeItems, commandQuery, selectedCommand);
    if (!nextItem) {
      return;
    }
    if (nextItem.id === "exit") {
      onExit();
      return;
    }
    onSelect(nextItem);
  }

  return h(
    Screen,
    {
      title: "Visual terminal hub",
      subtitle: "Type / to open commands. The shell stays minimal until you choose a path.",
      status: flash || contextLine,
      theme,
      showLogo: true,
      metrics: [],
      screenReaderEnabled,
      compactMode,
      footer: "Type / to browse • ↑/↓ suggestions • Tab autocomplete • Enter open • Esc clear • Ctrl+C exit",
      footerRight: "npx awesome-omni-skills ui",
    },
    h(
      Box,
      { flexDirection: "column" },
      h(
        Panel,
        {
          title: "Command bar",
          theme,
          tone: "primary",
          active: true,
          label: "Home command palette",
          marginBottom: 0,
        },
        h(Text, { color: theme.colors.textDim }, "Claude-style entry point: no open menu by default. Type / to reveal the command list."),
        h(BadgeRow, {
          items: [
            `${catalog.total_skills} skills`,
            `${bundleList.length} bundles`,
            `${favoriteCount} favorites`,
          ],
          theme,
        }),
        h(
          Box,
          {
            flexDirection: "row",
            borderStyle: "round",
            borderColor: theme.colors.borderActive,
            paddingX: 1,
            marginTop: 1,
            marginBottom: 1,
          },
          h(TextInput, {
            value: commandQuery,
            focus: isFocused,
            placeholder: "/",
            onChange: (value) => setCommandQuery(normalizeSlashInput(value)),
            onSubmit: handleSubmit,
          }),
        ),
        !commandQuery
          ? h(Text, { color: theme.colors.subtle }, "Type / to open the top-level commands for this shell.")
          : !commandQuery.startsWith("/")
            ? h(Text, { color: theme.colors.warning }, "Commands in this shell start with /. Try /install, /catalog, or /services.")
            : null,
        commandQuery === "/"
          ? h(Text, { color: theme.colors.textDim }, "Top-level commands:")
          : null,
        commandItems.length
          ? commandItems.map((item, index) => {
              const selected = index === selectedIndex;
              return h(
                Box,
                  {
                  key: item.id,
                  flexDirection: "column",
                  marginTop: index === 0 ? 1 : 0,
                  marginBottom: index === filteredCommands.length - 1 ? 0 : 1,
                },
                h(
                  Text,
                  {
                    color: selected ? theme.colors.primary : theme.colors.text,
                    backgroundColor: selected ? theme.colors.panelAlt : undefined,
                    bold: selected,
                  },
                  `${selected && isFocused ? "›" : " "} ${resolveItemCommand(item)}  ${item.label}`,
                ),
                h(Text, { color: selected ? theme.colors.text : theme.colors.textDim }, `  ${item.description || item.label}`),
                selected && item.meta ? h(Text, { color: theme.colors.subtle }, `  ${item.meta}`) : null,
              );
            })
          : commandQuery.startsWith("/")
            ? h(
              Text,
              { color: theme.colors.warning, bold: true },
              "No slash command matches the current query. Try /install, /catalog, /services, /settings, or /diagnostics.",
            )
            : null,
        topInstallTargets.length
          ? h(Text, { color: theme.colors.subtle }, `Popular targets: ${topInstallTargets.map((target) => target.name).join(" • ")}`)
          : null,
        progress
          ? h(Text, { color: theme.colors.primary }, `In progress: ${progress.label}${progress.nextStep ? ` • next ${progress.nextStep}` : ""}`)
          : null,
        h(Text, { color: theme.colors.textDim }, `Recent activity: ${latestActivity}`),
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
    if (queryFocused && key.downArrow && resultItems.length > 0) {
      focusManager.focus("catalog-results");
      return;
    }
    if (queryFocused && key.return) {
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
      subtitle: "Search in the top bar and browse the result list below without leaving the screen.",
      theme,
      screenReaderEnabled,
      compactMode,
      footer: "↓ or Tab results • Enter open • F favorite • Esc back • Ctrl+C exit",
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
      h(
        Panel,
        { title: "Search", theme, tone: "primary", active: queryFocused, label: "Catalog search input", marginBottom: 1 },
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
        h(Text, { color: theme.colors.subtle }, "Press ↓ or Tab to move into the result list."),
      ),
      resultItems.length
        ? h(
            Panel,
            { title: "Results", theme, tone: "accent", active: !queryFocused, label: "Catalog result list", marginBottom: 0 },
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

  useInput((input, key) => {
    if (key.escape) {
      onBack();
      return;
    }
    if (input === "1") {
      onApplyPreference({ theme: "midnight-ice" }, "Theme set to Midnight Ice.");
      return;
    }
    if (input === "2") {
      onApplyPreference({ theme: "ember" }, "Theme set to Ember.");
      return;
    }
    if (input === "3") {
      onApplyPreference({ theme: "forest" }, "Theme set to Forest.");
      return;
    }
    if (input === "4") {
      onApplyPreference({ compactMode: !cliState.preferences?.compactMode }, `Compact mode ${cliState.preferences?.compactMode ? "disabled" : "enabled"}.`);
      return;
    }
    if (input === "5") {
      onApplyPreference({ screenReaderMode: "auto" }, "Screen reader mode set to auto.");
      return;
    }
    if (input === "6") {
      onApplyPreference({ screenReaderMode: "on" }, "Screen reader mode set to on.");
      return;
    }
    if (input === "7") {
      onApplyPreference({ screenReaderMode: "off" }, "Screen reader mode set to off.");
      return;
    }
    if (input === "8") {
      onBack();
    }
  });

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
    numericShortcuts: false,
    status: `Effective theme: ${theme.label} • Screen reader detected: ${screenReaderEnabled ? "yes" : "no"}`,
  });
}

export {
  CatalogExplorerScreen,
  HomeScreen,
  SettingsScreen,
};
