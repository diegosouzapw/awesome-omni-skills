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

function translate(translator, key, defaultValue, interpolation = {}) {
  if (!translator?.t) {
    return defaultValue;
  }
  return translator.t(key, { defaultValue, ...interpolation });
}

function countLabel(translator, key, count, singular, plural) {
  return translate(
    translator,
    key,
    count === 1 ? singular : plural,
    { count },
  );
}

function resolveLanguageLabel(translator, locale) {
  if (locale === "pt-BR") {
    return translate(translator, "tui:settings.values.portugueseBrazil", "Portuguese (Brazil)");
  }
  if (locale === "es") {
    return translate(translator, "tui:settings.values.spanish", "Spanish");
  }
  return translate(translator, "tui:settings.values.english", "English");
}

function resolveThemeValueLabel(translator, themeId) {
  if (themeId === "ember") {
    return translate(translator, "tui:settings.values.ember", "Ember");
  }
  if (themeId === "forest") {
    return translate(translator, "tui:settings.values.forest", "Forest");
  }
  return translate(translator, "tui:settings.values.midnightIce", "Midnight Ice");
}

function cycleLocale(locale) {
  const order = ["en", "pt-BR", "es"];
  const currentIndex = order.indexOf(locale);
  return order[(currentIndex + 1 + order.length) % order.length];
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
  translator,
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
      label: translate(translator, "tui:home.installLabel", "Install and update"),
      description: translate(
        translator,
        "tui:home.installDescription",
        "Open the guided install hub for destinations, skills, bundles, and updates.",
      ),
      meta: `${catalog.total_skills} skills ready`,
      aliases: ["guided install", "install", "update", "setup", "skills"],
    },
    {
      id: "catalog-explorer",
      command: "/catalog",
      label: translate(translator, "tui:home.catalogLabel", "Browse published catalog"),
      description: translate(
        translator,
        "tui:home.catalogDescription",
        "Search families, variants, and bundles before you install anything.",
      ),
      meta: `${bundleList.length} bundles • family-aware search`,
      aliases: ["discover", "search", "browse", "families", "variants"],
    },
    {
      id: "operate-hub",
      command: "/services",
      label: translate(translator, "tui:home.servicesLabel", "Launch services"),
      description: translate(
        translator,
        "tui:home.servicesDescription",
        "Open runtime launchers for MCP, API, Web, and A2A with guided configuration.",
      ),
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
      label: translate(translator, "tui:home.settingsLabel", "Settings"),
      description: translate(
        translator,
        "tui:home.settingsDescription",
        "Change theme, language, compact mode, and screen reader preferences.",
      ),
      meta: cliState.preferences?.theme || DEFAULT_TUI_THEME,
      aliases: ["preferences", "theme", "config"],
    },
    {
      id: "diagnostics-hub",
      command: "/diagnostics",
      label: translate(translator, "tui:home.diagnosticsLabel", "Diagnostics"),
      description: translate(
        translator,
        "tui:home.diagnosticsDescription",
        "Run doctor, smoke checks, and inspect local health before publishing.",
      ),
      meta: "doctor + smoke",
      aliases: ["doctor", "smoke", "health", "checks"],
    },
    {
      id: "exit",
      command: "/exit",
      label: translate(translator, "tui:home.exitLabel", "Exit"),
      description: translate(
        translator,
        "tui:home.exitDescription",
        "Leave the visual shell without running anything.",
      ),
      meta: "back to terminal",
      aliases: ["quit", "close", "leave"],
    },
  ];

  const viewport = resolveViewport(theme, { screenReaderEnabled, compactMode });
  const favoriteCount = cliState.favorites.skills.length + cliState.favorites.bundles.length;
  const contextLine = [
    countLabel(translator, "tui:home.metrics.skills", catalog.total_skills, `${catalog.total_skills} skill`, `${catalog.total_skills} skills`),
    countLabel(translator, "tui:home.metrics.bundles", bundleList.length, `${bundleList.length} bundle`, `${bundleList.length} bundles`),
    countLabel(translator, "tui:home.metrics.favorites", favoriteCount, `${favoriteCount} favorite`, `${favoriteCount} favorites`),
    cliState.recentInstalls.length
      ? countLabel(
          translator,
          "tui:home.metrics.recentInstalls",
          cliState.recentInstalls.length,
          `${cliState.recentInstalls.length} recent install`,
          `${cliState.recentInstalls.length} recent installs`,
        )
      : null,
    cliState.recentServices.length
      ? countLabel(
          translator,
          "tui:home.metrics.recentServices",
          cliState.recentServices.length,
          `${cliState.recentServices.length} recent service`,
          `${cliState.recentServices.length} recent services`,
        )
      : null,
    cliState.activeServices?.length
      ? countLabel(
          translator,
          "tui:home.metrics.activeRuntimes",
          cliState.activeServices.length,
          `${cliState.activeServices.length} active runtime`,
          `${cliState.activeServices.length} active runtimes`,
        )
      : null,
  ]
    .filter(Boolean)
    .join(" • ");
  const topInstallTargets = listKnownInstallTargets(cliState.customInstallTargets || []).slice(0, viewport.narrow ? 3 : 4);
  const filteredCommands = useMemo(() => {
    return filterSlashCommandItems(homeItems, commandQuery);
  }, [commandQuery, homeItems]);
  const commandItems = commandQuery.startsWith("/") ? filteredCommands : [];
  const selectedCommand = commandItems[selectedIndex] || null;
  const latestActivity = activityItems.length
    ? activityItems[activityItems.length - 1].label
    : translate(translator, "tui:home.noRecentActivity", "No recent activity.");

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
      title: translate(translator, "tui:home.title", "Visual terminal hub"),
      subtitle: translate(
        translator,
        "tui:home.subtitle",
        "Type / to open commands. The shell stays minimal until you choose a path.",
      ),
      status: flash || contextLine,
      theme,
      showLogo: true,
      metrics: [],
      screenReaderEnabled,
      compactMode,
      footer: translate(
        translator,
        "tui:home.footer",
        "Type / to browse • ↑/↓ suggestions • Tab autocomplete • Enter open • Esc clear • Ctrl+C exit",
      ),
      footerRight: "npx awesome-omni-skills ui",
    },
    h(
      Box,
      { flexDirection: "column" },
      h(
        Panel,
        {
          title: translate(translator, "tui:home.commandBarTitle", "Command bar"),
          theme,
          tone: "primary",
          active: true,
          label: translate(translator, "tui:home.commandBarLabel", "Home command palette"),
          marginBottom: 0,
        },
        h(
          Text,
          { color: theme.colors.textDim },
          translate(
            translator,
            "tui:home.commandBarIntro",
            "Claude-style entry point: no open menu by default. Type / to reveal the command list.",
          ),
        ),
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
          ? h(
              Text,
              { color: theme.colors.subtle },
              translate(translator, "tui:home.hintTypeSlash", "Type / to open the top-level commands for this shell."),
            )
          : !commandQuery.startsWith("/")
            ? h(
                Text,
                { color: theme.colors.warning },
                translate(
                  translator,
                  "tui:home.hintSlashOnly",
                  "Commands in this shell start with /. Try /install, /catalog, or /services.",
                ),
              )
            : null,
        commandQuery === "/"
          ? h(Text, { color: theme.colors.textDim }, translate(translator, "tui:home.hintAllCommands", "Top-level commands:"))
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
              translate(
                translator,
                "tui:home.hintNoMatches",
                "No slash command matches the current query. Try /install, /catalog, /services, /settings, or /diagnostics.",
              ),
            )
            : null,
        topInstallTargets.length
          ? h(
              Text,
              { color: theme.colors.subtle },
              translate(
                translator,
                "tui:home.popularTargets",
                `Popular targets: ${topInstallTargets.map((target) => target.name).join(" • ")}`,
                { value: topInstallTargets.map((target) => target.name).join(" • ") },
              ),
            )
          : null,
        progress
          ? h(
              Text,
              { color: theme.colors.primary },
              `${translate(translator, "tui:home.inProgress", `In progress: ${progress.label}`, { value: progress.label })}${progress.nextStep ? ` • ${translate(translator, "tui:home.nextStep", `next ${progress.nextStep}`, { value: progress.nextStep })}` : ""}`,
            )
          : null,
        h(
          Text,
          { color: theme.colors.textDim },
          translate(translator, "tui:home.recentActivity", `Recent activity: ${latestActivity}`, { value: latestActivity }),
        ),
        h(
          Text,
          { color: theme.colors.subtle },
          translate(translator, "tui:home.stateFile", `State file: ${statePath}`, { value: statePath }),
        ),
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
  translator,
  locale = "en",
  onBack,
  onApplyPreference,
}) {
  const currentTheme = cliState.preferences?.theme || DEFAULT_TUI_THEME;
  const currentLanguage = locale || cliState.preferences?.language || "en";
  const currentScreenReaderMode = cliState.preferences?.screenReaderMode || "auto";
  const compactStateLabel = cliState.preferences?.compactMode
    ? translate(translator, "tui:settings.values.on", "On")
    : translate(translator, "tui:settings.values.off", "Off");
  const themeLabels = {
    "midnight-ice": resolveThemeValueLabel(translator, "midnight-ice"),
    ember: resolveThemeValueLabel(translator, "ember"),
    forest: resolveThemeValueLabel(translator, "forest"),
  };
  const items = [
    {
      id: "theme:midnight-ice",
      label: themeLabels["midnight-ice"],
      description:
        currentTheme === "midnight-ice"
          ? translate(translator, "tui:settings.themeCurrent", "Current theme")
          : translate(translator, "tui:settings.themeSwitch", "Switch to Midnight Ice", { value: themeLabels["midnight-ice"] }),
    },
    {
      id: "theme:ember",
      label: themeLabels.ember,
      description:
        currentTheme === "ember"
          ? translate(translator, "tui:settings.themeCurrent", "Current theme")
          : translate(translator, "tui:settings.themeSwitch", "Switch to Ember", { value: themeLabels.ember }),
    },
    {
      id: "theme:forest",
      label: themeLabels.forest,
      description:
        currentTheme === "forest"
          ? translate(translator, "tui:settings.themeCurrent", "Current theme")
          : translate(translator, "tui:settings.themeSwitch", "Switch to Forest", { value: themeLabels.forest }),
    },
    {
      id: "compact:toggle",
      label: translate(translator, "tui:settings.compactLabel", `Compact mode • ${compactStateLabel}`, { value: compactStateLabel }),
      description: translate(translator, "tui:settings.compactDescription", "Narrow the shell layout for smaller terminals."),
    },
    {
      id: "language:cycle",
      label: translate(
        translator,
        "tui:settings.languageLabel",
        `Language • ${resolveLanguageLabel(translator, currentLanguage)}`,
        { value: resolveLanguageLabel(translator, currentLanguage) },
      ),
      description: translate(
        translator,
        "tui:settings.languageDescription",
        "Cycle between English, Portuguese (Brazil), and Spanish.",
      ),
    },
    {
      id: "screen-reader:auto",
      label: translate(
        translator,
        "tui:settings.screenReaderLabel",
        "Screen reader • Auto",
        { value: translate(translator, "tui:settings.values.auto", "Auto") },
      ),
      description:
        currentScreenReaderMode === "auto"
          ? translate(translator, "tui:settings.currentSelection", "Current selection")
          : translate(translator, "tui:settings.screenReaderAutoDescription", "Follow Ink and terminal detection."),
    },
    {
      id: "screen-reader:on",
      label: translate(
        translator,
        "tui:settings.screenReaderLabel",
        "Screen reader • Force on",
        { value: translate(translator, "tui:settings.values.forcedOn", "Force on") },
      ),
      description:
        currentScreenReaderMode === "on"
          ? translate(translator, "tui:settings.currentSelection", "Current selection")
          : translate(translator, "tui:settings.screenReaderOnDescription", "Prefer text-first rendering and explicit labels."),
    },
    {
      id: "screen-reader:off",
      label: translate(
        translator,
        "tui:settings.screenReaderLabel",
        "Screen reader • Force off",
        { value: translate(translator, "tui:settings.values.forcedOff", "Force off") },
      ),
      description:
        currentScreenReaderMode === "off"
          ? translate(translator, "tui:settings.currentSelection", "Current selection")
          : translate(translator, "tui:settings.screenReaderOffDescription", "Use the normal visual shell."),
    },
    {
      id: "back",
      label: translate(translator, "tui:settings.backLabel", "Back"),
      description: translate(translator, "tui:settings.backDescription", "Return to the home screen."),
    },
  ];

  useInput((input, key) => {
    if (key.escape) {
      onBack();
      return;
    }
    if (input === "1") {
      onApplyPreference({ theme: "midnight-ice" }, translate(translator, "tui:settings.themeSet", "Theme set to Midnight Ice.", { value: themeLabels["midnight-ice"] }));
      return;
    }
    if (input === "2") {
      onApplyPreference({ theme: "ember" }, translate(translator, "tui:settings.themeSet", "Theme set to Ember.", { value: themeLabels.ember }));
      return;
    }
    if (input === "3") {
      onApplyPreference({ theme: "forest" }, translate(translator, "tui:settings.themeSet", "Theme set to Forest.", { value: themeLabels.forest }));
      return;
    }
    if (input === "4") {
      onApplyPreference(
        { compactMode: !cliState.preferences?.compactMode },
        cliState.preferences?.compactMode
          ? translate(translator, "tui:settings.compactDisabled", "Compact mode disabled.")
          : translate(translator, "tui:settings.compactEnabled", "Compact mode enabled."),
      );
      return;
    }
    if (input === "5") {
      const nextLanguage = cycleLocale(currentLanguage);
      onApplyPreference(
        { language: nextLanguage },
        translate(translator, "tui:settings.languageSet", `Language set to ${resolveLanguageLabel(translator, nextLanguage)}.`, {
          value: resolveLanguageLabel(translator, nextLanguage),
        }),
      );
      return;
    }
    if (input === "6") {
      onApplyPreference({ screenReaderMode: "auto" }, "Screen reader mode set to auto.");
      return;
    }
    if (input === "7") {
      onApplyPreference({ screenReaderMode: "on" }, "Screen reader mode set to on.");
      return;
    }
    if (input === "8") {
      onApplyPreference({ screenReaderMode: "off" }, "Screen reader mode set to off.");
      return;
    }
    if (input === "9") {
      onBack();
    }
  });

  return h(MenuScreen, {
    title: translate(translator, "tui:settings.title", "Visual shell settings"),
    subtitle: translate(
      translator,
      "tui:settings.subtitle",
      "Persisted locally in the CLI state file so the shell comes back the same way next time.",
    ),
    items,
    onBack,
    onSelect: (item) => {
      if (item.id === "back") {
        onBack();
        return;
      }
      if (item.id.startsWith("theme:")) {
        onApplyPreference(
          { theme: item.id.split(":")[1] },
          translate(translator, "tui:settings.themeSet", `Theme set to ${item.label}.`, { value: item.label }),
        );
        return;
      }
      if (item.id === "compact:toggle") {
        onApplyPreference(
          { compactMode: !cliState.preferences?.compactMode },
          cliState.preferences?.compactMode
            ? translate(translator, "tui:settings.compactDisabled", "Compact mode disabled.")
            : translate(translator, "tui:settings.compactEnabled", "Compact mode enabled."),
        );
        return;
      }
      if (item.id === "language:cycle") {
        const nextLanguage = cycleLocale(currentLanguage);
        onApplyPreference(
          { language: nextLanguage },
          translate(translator, "tui:settings.languageSet", `Language set to ${resolveLanguageLabel(translator, nextLanguage)}.`, {
            value: resolveLanguageLabel(translator, nextLanguage),
          }),
        );
        return;
      }
      if (item.id.startsWith("screen-reader:")) {
        const mode = item.id.split(":")[1];
        const value =
          mode === "on"
            ? translate(translator, "tui:settings.values.forcedOn", "Force on")
            : mode === "off"
              ? translate(translator, "tui:settings.values.forcedOff", "Force off")
              : translate(translator, "tui:settings.values.auto", "Auto");
        onApplyPreference(
          { screenReaderMode: mode },
          translate(translator, "tui:settings.screenReaderSet", `Screen reader mode set to ${value}.`, { value }),
        );
      }
    },
    theme,
    screenReaderEnabled,
    compactMode,
    translator,
    numericShortcuts: false,
    footer: translate(translator, "tui:settings.footer", "↑/↓ move • Enter select • Esc back • Ctrl+C exit"),
    status: translate(
      translator,
      "tui:settings.status",
      `Effective theme: ${theme.label} • Screen reader detected: ${screenReaderEnabled ? "yes" : "no"}`,
      {
        theme: theme.label,
        detected: screenReaderEnabled
          ? translate(translator, "tui:settings.detectedYes", "yes")
          : translate(translator, "tui:settings.detectedNo", "no"),
      },
    ),
  });
}

export {
  CatalogExplorerScreen,
  HomeScreen,
  SettingsScreen,
};
