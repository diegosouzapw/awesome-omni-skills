import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useFocus, useFocusManager, useInput } from "ink";
import TextInput from "ink-text-input";
import { DEFAULT_TUI_THEME } from "./theme.mjs";
import { ActivityFeed, ProgressPanel } from "./activity.mjs";
import { DetailPanel, EmptyState, Panel, Screen, SplitLayout } from "./layout.mjs";
import { FocusTabs, MenuScreen, SelectMenu } from "./controls.mjs";
import { listKnownInstallTargets, formatRecentInstall } from "./install-flow.mjs";
import { searchBundleMatches } from "./catalog.mjs";
import { formatRecentService } from "./runtime-flow.mjs";

const h = React.createElement;

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
      id: "install",
      label: "Install skills",
      description: "Choose a client or custom path, then install a skill, bundle, or the full library.",
      detailText: "Guided install cockpit with preview-before-write and downloadable published skills.",
      detailLines: [
        "Pick Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode, or a custom path.",
        "Install one skill, a bundle, or the entire published library.",
        "Show the exact command before the installer runs.",
      ],
      section: "Install",
      tone: "primary",
      badges: [`${catalog.total_skills} published skills`],
    },
    {
      id: "find-install",
      label: "Find and install",
      description: "Search the catalog first, then install the matching skill or bundle.",
      detailText: "Search-first flow for users who know the outcome they want but not the exact skill id.",
      detailLines: [
        "Search both skills and starter bundles.",
        "Use scores and descriptions to choose before installing.",
      ],
      section: "Install",
      tone: "accent",
      badges: [`${bundleList.length} published bundles`],
    },
    {
      id: "catalog-explorer",
      label: "Browse catalog",
      description: "Explore skills and bundles with search-first keyboard navigation.",
      detailText: "Separate explorer surface for browsing before you decide to install anything.",
      detailLines: [
        "Live query input with tab-switching to results.",
        "Favorites and bundle results appear in the same explorer.",
        "Selecting a result drops you into the install target flow with the item preselected.",
      ],
      section: "Install",
      tone: "accent",
      badges: ["search-first exploration"],
    },
    ...(cliState.recentInstalls.length
      ? [
          {
            id: "recent-install",
            label: "Repeat recent install",
            description: `${cliState.recentInstalls.length} recent install run(s) saved locally.`,
            detailText: "Replay an existing install without rebuilding the draft.",
            detailLines: cliState.recentInstalls.slice(0, 3).map((entry) => formatRecentInstall(entry)),
            section: "Install",
            tone: "info",
          },
        ]
      : []),
    ...(cliState.installPresets.length
      ? [
          {
            id: "install-presets",
            label: "Run saved install preset",
            description: `${cliState.installPresets.length} saved install preset(s).`,
            detailText: "Named install presets reduce repeat work across clients and environments.",
            detailLines: cliState.installPresets.slice(0, 3).map((entry) => entry.name),
            section: "Install",
            tone: "info",
          },
        ]
      : []),
    {
      id: "service",
      label: "Start a service",
      description: "Launch MCP, API, or A2A with guided configuration.",
      detailText: "Operator shell for hosted runtime surfaces built on the same catalog.",
      detailLines: [
        "MCP with stdio, stream, and SSE transports.",
        "API with hardened auth presets.",
        "A2A with persistence and executor controls.",
      ],
      section: "Operate",
      tone: "success",
    },
    {
      id: "settings",
      label: "Settings",
      description: "Change theme, compact mode, and screen reader preferences.",
      detailText: "Persisted locally so the visual shell comes back the same way next time.",
      detailLines: [
        `Theme: ${cliState.preferences?.theme || DEFAULT_TUI_THEME}`,
        `Compact mode: ${cliState.preferences?.compactMode ? "on" : "off"}`,
        `Screen reader: ${cliState.preferences?.screenReaderMode || "auto"}`,
      ],
      section: "Operate",
      tone: "info",
    },
    ...(cliState.recentServices.length
      ? [
          {
            id: "recent-service",
            label: "Repeat recent service launch",
            description: `${cliState.recentServices.length} recent service run(s) saved locally.`,
            detailText: "Replay a known-good runtime configuration.",
            detailLines: cliState.recentServices.slice(0, 3).map((entry) => formatRecentService(entry)),
            section: "Operate",
            tone: "success",
          },
        ]
      : []),
    ...(cliState.servicePresets.length
      ? [
          {
            id: "service-presets",
            label: "Run saved service preset",
            description: `${cliState.servicePresets.length} saved service preset(s).`,
            detailText: "Reusable operator presets for MCP, API, and A2A.",
            detailLines: cliState.servicePresets.slice(0, 3).map((entry) => entry.name),
            section: "Operate",
            tone: "success",
          },
        ]
      : []),
    {
      id: "doctor",
      label: "Run doctor",
      description: "Inspect repo, binaries, default targets, and catalog files.",
      detailText: "Health check for installers, binaries, generated catalog artifacts, and runtime defaults.",
      section: "Utilities",
      tone: "warning",
    },
    {
      id: "smoke",
      label: "Run smoke checks",
      description: "Execute build, packaging, service probes, and validation checks.",
      detailText: "Launch the full smoke workflow before publishing or troubleshooting a runtime issue.",
      section: "Utilities",
      tone: "warning",
    },
    {
      id: "exit",
      label: "Exit",
      description: "Leave the visual shell without running anything.",
      detailText: "Return to the normal shell immediately.",
      section: "Utilities",
      tone: "error",
    },
  ];

  const [activeItem, setActiveItem] = useState(homeItems[0] || null);

  useEffect(() => {
    setActiveItem(homeItems[0] || null);
  }, [cliState.installPresets.length, cliState.recentInstalls.length, cliState.recentServices.length, cliState.servicePresets.length]);

  return h(
    Screen,
    {
      title: "Visual terminal hub",
      subtitle: "Guided shell for catalog install, discovery, and runtime launch.",
      status: flash || `${catalog.total_skills} published skills • state stored at ${statePath}`,
      theme,
      metrics: [
        { label: "Skills", value: catalog.total_skills, tone: "primary" },
        { label: "Bundles", value: bundleList.length, tone: "accent" },
        { label: "Favorites", value: cliState.favorites.skills.length + cliState.favorites.bundles.length, tone: "success" },
      ],
      screenReaderEnabled,
      compactMode,
      footer: "↑/↓ move • Enter select • Ctrl+C exit",
      footerRight: "npx awesome-omni-skills ui",
    },
    h(SplitLayout, {
      theme,
      screenReaderEnabled,
      compactMode,
      sidebar: h(
        Panel,
        { title: "Command center", theme, tone: "primary", active: true, label: "Home command center" },
        h(SelectMenu, {
          items: homeItems,
          onSelect: (item) => {
            if (item.id === "exit") {
              onExit();
              return;
            }
            onSelect(item);
          },
          theme,
          onHighlight: setActiveItem,
          footerNote: "Tab is reserved for multi-control screens",
        }),
      ),
      detail: h(
        Box,
        { flexDirection: "column" },
        h(
          Panel,
          { title: "Selection detail", theme, tone: "accent" },
          h(DetailPanel, {
            item: activeItem,
            theme,
            emptyTitle: "Awesome Omni Skills",
            emptyText: "Select an action to preview the install or runtime flow.",
          }),
        ),
        h(
          Panel,
          { title: "State snapshot", theme, tone: "info" },
          h(Text, { color: theme.colors.text }, `Recent installs: ${cliState.recentInstalls.length}`),
          h(Text, { color: theme.colors.text }, `Recent services: ${cliState.recentServices.length}`),
          h(Text, { color: theme.colors.text }, `Install presets: ${cliState.installPresets.length}`),
          h(Text, { color: theme.colors.text }, `Service presets: ${cliState.servicePresets.length}`),
          h(Text, { color: theme.colors.text }, `Favorite skills: ${cliState.favorites.skills.length}`),
          h(Text, { color: theme.colors.text }, `Favorite bundles: ${cliState.favorites.bundles.length}`),
        ),
        h(ProgressPanel, {
          title: "Current funnel",
          progress,
          theme,
          screenReaderEnabled,
        }),
        h(ActivityFeed, {
          items: activityItems,
          theme,
          title: "Session activity",
          emptyText: "No actions recorded in this session yet.",
        }),
        h(
          Panel,
          { title: "Install surfaces", theme, tone: "success", marginBottom: 0 },
          ...listKnownInstallTargets(cliState.customInstallTargets || []).slice(0, 8).map((target) =>
            h(Text, { key: target.id, color: theme.colors.textDim }, `${target.name} • ${target.resolvedPath}`),
          ),
        ),
      ),
    }),
  );
}

function CatalogExplorerScreen({
  core,
  skillList,
  bundleList,
  cliState,
  query,
  setQuery,
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

  const sortedSkills = useMemo(
    () =>
      [...skillList].sort(
        (left, right) =>
          Number(right.quality_score || 0) - Number(left.quality_score || 0) ||
          String(left.display_name || left.id).localeCompare(String(right.display_name || right.id)),
      ),
    [skillList],
  );

  const resultItems = useMemo(() => {
    const normalizedQuery = String(query || "").trim();
    const topSkills = normalizedQuery
      ? core.searchSkills({ query: normalizedQuery, limit: 36 }).results || []
      : sortedSkills.slice(0, 24);
    const topBundles = normalizedQuery
      ? searchBundleMatches(bundleList, normalizedQuery).slice(0, 12)
      : [...bundleList]
          .sort((left, right) => String(left.name || left.id).localeCompare(String(right.name || right.id)))
          .slice(0, 12);

    return [
      ...topSkills.map((skill) => ({
        id: `skill:${skill.id}`,
        label: `${skill.display_name || skill.id} • Q${skill.quality_score} • BP${skill.best_practices_score} • S${skill.security_score}`,
        description: skill.description,
        detailTitle: skill.display_name || skill.id,
        detailText: `Skill • category ${skill.canonical_category || skill.category || "general"}`,
        detailLines: [
          `Quality score: ${skill.quality_score}`,
          `Best-practices score: ${skill.best_practices_score}`,
          `Security score: ${skill.security_score}`,
          `Tags: ${(skill.tags || []).slice(0, 6).join(", ") || "none"}`,
        ],
        badges: cliState.favorites.skills.includes(skill.id) ? ["favorite"] : [],
        section: "Skills",
        tone: "primary",
      })),
      ...topBundles.map((bundle) => ({
        id: `bundle:${bundle.id}`,
        label: `${bundle.name} • ${bundle.availability.available}/${bundle.availability.total}`,
        description: bundle.description,
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
  }, [bundleList, cliState.favorites.bundles, cliState.favorites.skills, core, query, sortedSkills]);

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
      if (String(activeItem.id).startsWith("skill:")) {
        onToggleFavoriteSkill(String(activeItem.id).slice("skill:".length));
      } else if (String(activeItem.id).startsWith("bundle:")) {
        onToggleFavoriteBundle(String(activeItem.id).slice("bundle:".length));
      }
    }
  });

  return h(
    Screen,
    {
      title: "Catalog explorer",
      subtitle: "Search-first exploration for skills and bundles before you install.",
      theme,
      screenReaderEnabled,
      compactMode,
      footer: "Tab switches focus • Enter from query opens top match • Enter install selected • F toggle favorite • Esc back • Ctrl+C exit",
      footerRight: `Query: ${String(query || "").trim() || "top picks"}`,
    },
    h(FocusTabs, {
      theme,
      active: queryFocused ? "query" : "results",
      items: [
        { id: "query", label: "Query" },
        { id: "results", label: "Results" },
      ],
    }),
    h(SplitLayout, {
      theme,
      screenReaderEnabled,
      compactMode,
      sidebar: h(
        Box,
        { flexDirection: "column" },
        h(
          Panel,
          { title: "Search", theme, tone: "primary", active: queryFocused, label: "Catalog search input" },
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
                  onSelectResult(resultItems[0]);
                  return;
                }
                focusManager.focus("catalog-results");
              },
            }),
          ),
          h(Text, { color: theme.colors.subtle }, "Leave blank to browse top-rated skills and published bundles."),
        ),
        resultItems.length
          ? h(
              Panel,
              { title: "Results", theme, tone: "accent", active: !queryFocused, label: "Catalog result list" },
              h(SelectMenu, {
                items: resultItems,
                onSelect: onSelectResult,
                onBack,
                onHighlight: setActiveItem,
                theme,
                focusId: "catalog-results",
                autoFocus: false,
                pageSize: 12,
                footerNote: "F favorite • Enter install",
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
      detail: h(
        Box,
        { flexDirection: "column" },
        h(
          Panel,
          { title: "Result detail", theme, tone: "info" },
          h(DetailPanel, {
            item: activeItem,
            theme,
            emptyTitle: "Browse the published catalog",
            emptyText: "Type to filter, press Tab to focus results, and Enter to start an install flow.",
          }),
        ),
        h(
          Panel,
          { title: "Explorer notes", theme, tone: "success", marginBottom: 0 },
          h(Text, { color: theme.colors.textDim }, `Favorites: ${cliState.favorites.skills.length} skills • ${cliState.favorites.bundles.length} bundles`),
          h(Text, { color: theme.colors.textDim }, `Visible results: ${resultItems.length}`),
          h(Text, { color: theme.colors.subtle }, "Selecting a result opens the install target funnel with the item preselected."),
        ),
      ),
    }),
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
