#!/usr/bin/env node

import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import React from "react";
import { render, cleanup } from "ink-testing-library";
import { getTheme } from "../../../packages/cli/src/tui/theme.mjs";
import { MenuScreen, SelectMenu, TextPromptScreen } from "../../../packages/cli/src/tui/controls.mjs";
import { HomeScreen, CatalogExplorerScreen, SettingsScreen } from "../../../packages/cli/src/tui/screens.mjs";
import {
  buildInstallerArgs,
  renderInstallerCommand,
  resolveCustomPath,
} from "../../../packages/cli/src/tui/install-flow.mjs";
import {
  buildConfigMcpArgs,
  defaultMcpConfigUrl,
  normalizeTransportMode,
} from "../../../packages/cli/src/tui/runtime-flow.mjs";
import { OmniSkillsUi } from "../../../packages/cli/src/bin/ui.mjs";

const h = React.createElement;
const THEME = getTheme("midnight-ice");
const SCREEN_READER_RENDER = { isScreenReaderEnabled: true };
const TEST_STATE_PATH = "/tmp/awesome-omni-skills-ui-state.json";

const SKILLS = [
  {
    id: "figma-prime--omni",
    display_name: "Figma Prime",
    quality_score: 98,
    best_practices_score: 99,
    security_score: 95,
    description: "Omni-curated design system implementation and design-to-code workflows.",
    canonical_category: "design",
    tags: ["figma", "design-system", "ux", "omni"],
  },
  {
    id: "figma-prime",
    display_name: "Figma Prime",
    quality_score: 95,
    best_practices_score: 96,
    security_score: 94,
    description: "Design system implementation and design-to-code workflows.",
    canonical_category: "design",
    tags: ["figma", "design-system", "ux"],
  },
  {
    id: "domain-analysis",
    display_name: "Domain Analysis",
    quality_score: 91,
    best_practices_score: 92,
    security_score: 90,
    description: "Map domains, constraints, and operating models.",
    canonical_category: "planning",
    tags: ["domain", "analysis"],
  },
  {
    id: "api-guardian",
    display_name: "API Guardian",
    quality_score: 89,
    best_practices_score: 90,
    security_score: 97,
    description: "Harden API contracts and security posture.",
    canonical_category: "security",
    tags: ["api", "security"],
  },
];

const FAMILIES = [
  {
    id: "figma-prime",
    display_name: "Figma Prime",
    description: "Design system implementation and design-to-code workflows.",
    canonical_category: "design",
    default_skill_id: "figma-prime--omni",
    variant_count: 2,
    variants: [
      { id: "figma-prime", variant_id: "native", variant_label: "Native", is_default: false, source_type: "community" },
      { id: "figma-prime--omni", variant_id: "omni", variant_label: "Omni Curated", is_default: true, source_type: "omni-curated" },
    ],
  },
  {
    id: "domain-analysis",
    display_name: "Domain Analysis",
    description: "Map domains, constraints, and operating models.",
    canonical_category: "planning",
    default_skill_id: "domain-analysis",
    variant_count: 1,
    variants: [
      { id: "domain-analysis", variant_id: "native", variant_label: "Native", is_default: true, source_type: "community" },
    ],
  },
  {
    id: "api-guardian",
    display_name: "API Guardian",
    description: "Harden API contracts and security posture.",
    canonical_category: "security",
    default_skill_id: "api-guardian",
    variant_count: 1,
    variants: [
      { id: "api-guardian", variant_id: "native", variant_label: "Native", is_default: true, source_type: "community" },
    ],
  },
];

const BUNDLES = [
  {
    id: "starter-kit",
    name: "Starter Kit",
    description: "Starter bundle for onboarding and first installs.",
    intended_for: "new operators",
    skill_ids: ["figma-prime", "domain-analysis"],
    availability: { available: 2, total: 2 },
  },
  {
    id: "security-pack",
    name: "Security Pack",
    description: "Security-first bundle for hardened delivery.",
    intended_for: "security reviews",
    skill_ids: ["api-guardian"],
    availability: { available: 1, total: 1 },
  },
];

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

function expectedCliHandoff(args, env = {}, includeStatePath = true) {
  return {
    script: path.join(process.cwd(), "packages", "cli", "src", "bin", "cli.js"),
    args,
    env: {
      ...(includeStatePath ? { OMNI_SKILLS_STATE_PATH: TEST_STATE_PATH } : {}),
      ...env,
    },
  };
}

function wait(ms = 50) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizeFrame(frame) {
  return String(frame || "")
    .replace(/\u001B\[[0-9;]*m/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function createCoreFixture() {
  const skillById = new Map(SKILLS.map((skill) => [skill.id, skill]));
  const sorted = [...FAMILIES].map((family) => ({
    ...family,
    default_skill: skillById.get(family.default_skill_id) || null,
  })).sort(
    (left, right) =>
      Number(right.default_skill?.quality_score || 0) - Number(left.default_skill?.quality_score || 0) ||
      String(left.display_name || left.id).localeCompare(String(right.display_name || right.id)),
  );
  return {
    searchFamilies({ query = "", limit = 10 } = {}) {
      const normalized = String(query || "").trim().toLowerCase();
      const haystack = (family) =>
        [
          family.id,
          family.display_name,
          family.description,
          family.default_skill?.id,
          ...(family.default_skill?.tags || []),
        ]
          .join(" ")
          .toLowerCase();
      const results = normalized
        ? sorted.filter((family) => haystack(family).includes(normalized))
        : sorted;
      return { results: results.slice(0, limit) };
    },
    searchSkills({ query = "", limit = 10 } = {}) {
      const normalized = String(query || "").trim().toLowerCase();
      const haystack = (skill) =>
        [skill.id, skill.display_name, skill.description, ...(skill.tags || [])]
          .join(" ")
          .toLowerCase();
      const results = normalized
        ? SKILLS.filter((skill) => haystack(skill).includes(normalized))
        : SKILLS;
      return { results: results.slice(0, limit) };
    },
  };
}

function createSidecarFixture() {
  return {
    detectClients() {
      return {
        config_targets: [
          {
            id: "continue-workspace",
            name: "Continue workspace",
            config_profile: "workspace",
            path: "/tmp/continue/.continue/config.json",
          },
          {
            id: "cursor-user",
            name: "Cursor user settings",
            config_profile: "user",
            path: "/tmp/cursor/settings.json",
          },
        ],
      };
    },
    configureClientMcp({
      config_target,
      file_path,
      server_name,
      transport,
      url,
    }) {
      const targetName = config_target === "continue-workspace" ? "Continue workspace" : file_path ? "Custom file" : "Cursor user settings";
      const configPath =
        file_path ||
        (config_target === "continue-workspace"
          ? "/tmp/continue/.continue/config.json"
          : "/tmp/cursor/settings.json");
      return {
        target_name: targetName,
        config_profile: config_target === "continue-workspace" ? "workspace" : file_path ? "file" : "user",
        config_format: "json",
        config_path: configPath,
        server_name: server_name || "omni-skills",
        next_config_text: JSON.stringify(
          {
            server: server_name || "omni-skills",
            transport,
            url: transport === "stdio" ? "" : url,
          },
          null,
          2,
        ),
        instructions: ["Restart the client after writing the config."],
        recipes: [{ client: "Continue", command: "continue reload" }],
      };
    },
  };
}

function createInitialState(overrides = {}) {
  return {
    version: 2,
    last_updated_at: null,
    recentInstalls: cloneJson(overrides.recentInstalls || []),
    recentServices: cloneJson(overrides.recentServices || []),
    activeServices: cloneJson(overrides.activeServices || []),
    installPresets: cloneJson(overrides.installPresets || []),
    servicePresets: cloneJson(overrides.servicePresets || []),
    customInstallTargets: cloneJson(overrides.customInstallTargets || []),
    favorites: {
      skills: [...(overrides.favorites?.skills || [])],
      bundles: [...(overrides.favorites?.bundles || [])],
    },
    preferences: {
      theme: overrides.preferences?.theme ?? "midnight-ice",
      compactMode: overrides.preferences?.compactMode ?? true,
      screenReaderMode: overrides.preferences?.screenReaderMode ?? "auto",
    },
  };
}

async function renderAndRun(node, callback, options = {}) {
  const result = render(node, options);
  try {
    await wait();
    await callback(result);
  } finally {
    cleanup();
  }
}

async function withUiHarness(options, callback) {
  let state = createInitialState(options?.initialState || {});
  let handoff = null;
  const previousUiTestMode = process.env.OMNI_SKILLS_UI_TEST_MODE;
  process.env.OMNI_SKILLS_UI_TEST_MODE = "1";
  const result = render(
    h(OmniSkillsUi, {
      catalog: {
        total_skills: SKILLS.length,
        total_families: FAMILIES.length,
        skills: cloneJson(SKILLS),
        families: cloneJson(FAMILIES),
      },
      bundles: cloneJson(BUNDLES),
      core: createCoreFixture(),
      sidecar: createSidecarFixture(),
      initialState: state,
      persistState: (nextState) => {
        state = cloneJson(nextState);
        return state;
      },
      onHandoff: (action) => {
        handoff = cloneJson(action);
      },
      statePath: TEST_STATE_PATH,
    }),
    SCREEN_READER_RENDER,
  );

  try {
    await wait();
    await callback({
      result,
      frame: () => result.lastFrame(),
      text: () => normalizeFrame(result.lastFrame()),
      getState: () => cloneJson(state),
      getHandoff: () => {
        if (!handoff) {
          return null;
        }
        return cloneJson(handoff.launch || handoff);
      },
    });
  } finally {
    if (previousUiTestMode == null) {
      delete process.env.OMNI_SKILLS_UI_TEST_MODE;
    } else {
      process.env.OMNI_SKILLS_UI_TEST_MODE = previousUiTestMode;
    }
    cleanup();
  }
}

function matches(frame, needle) {
  if (needle instanceof RegExp) {
    return needle.test(frame);
  }
  return frame.includes(String(needle));
}

async function waitForFrame(result, needle, timeoutMs = 2500) {
  const startedAt = Date.now();
  let lastFrame = "";
  while (Date.now() - startedAt < timeoutMs) {
    lastFrame = normalizeFrame(result.lastFrame());
    if (matches(lastFrame, needle)) {
      return lastFrame;
    }
    await wait(30);
  }
  throw new Error(`Timed out waiting for frame ${String(needle)}.\nLast frame:\n${lastFrame}`);
}

async function waitForCondition(check, label = "condition", timeoutMs = 2500) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    if (check()) {
      return;
    }
    await wait(30);
  }
  throw new Error(`Timed out waiting for ${label}.`);
}

async function press(result, input, delayMs = 100) {
  result.stdin.write(input);
  await wait(delayMs);
}

async function moveDown(result, times = 1, delayMs = 100) {
  for (let index = 0; index < times; index += 1) {
    await press(result, "\u001B[B", delayMs);
  }
}

async function pressEnter(result, delayMs = 100) {
  await press(result, "\r", delayMs);
}

async function pressTab(result, delayMs = 60) {
  await press(result, "\t", delayMs);
}

async function typeText(result, text, delayMs = 10) {
  await wait(80);
  for (const char of String(text || "")) {
    result.stdin.write(char);
    await wait(delayMs);
  }
  await wait(40);
}

async function selectMenuIndex(result, index) {
  if (index < 1) {
    throw new Error(`Menu index must be >= 1, received ${index}.`);
  }
  await moveDown(result, index - 1);
  await wait(60);
  await pressEnter(result);
}

async function selectHomeShortcut(result, index) {
  await waitForFrame(result, "Visual terminal hub");
  await wait(120);
  await press(result, String(index), 150);
}

async function testSelectMenuNavigation() {
  const selected = [];
  await renderAndRun(
    h(SelectMenu, {
      theme: THEME,
      items: [
        { id: "alpha", label: "Alpha", description: "First item" },
        { id: "beta", label: "Beta", description: "Second item" },
      ],
      onSelect: (item) => selected.push(item.id),
    }),
    async (result) => {
      assert.match(result.lastFrame(), /❯ 1\. Alpha/, "select menu should auto-focus the first item");
      await press(result, "\u001B[B");
      assert.match(result.lastFrame(), /❯ 2\. Beta/, "down arrow should move focus to the next item");
      await pressEnter(result);
      assert.deepEqual(selected, ["beta"], "enter should select the highlighted item");
    },
  );
}

async function testMenuScreenEscapeBacksOutImmediately() {
  let backCount = 0;
  await renderAndRun(
    h(MenuScreen, {
      title: "Diagnostics",
      subtitle: "Run checks.",
      theme: THEME,
      items: [
        { id: "doctor", command: "/doctor", label: "Doctor" },
        { id: "smoke", command: "/smoke", label: "Smoke" },
      ],
      onSelect: () => {},
      onBack: () => {
        backCount += 1;
      },
    }),
    async (result) => {
      await press(result, "\u001B");
      assert.equal(backCount, 1, "Esc should back out immediately when the palette is in its default slash state");
    },
  );
}

async function testMenuScreenWindowsLongSlashLists() {
  await renderAndRun(
    h(MenuScreen, {
      title: "Long menu",
      subtitle: "Window slash suggestions.",
      theme: THEME,
      pageSize: 4,
      items: Array.from({ length: 12 }, (_value, index) => ({
        id: `item-${index + 1}`,
        command: `/item-${String(index + 1).padStart(2, "0")}`,
        label: `Item ${index + 1}`,
      })),
      onSelect: () => {},
      onBack: () => {},
    }),
    async (result) => {
      await moveDown(result, 6);
      const frame = normalizeFrame(result.lastFrame());
      assert.match(frame, /\/item-07/, "moving beyond the first page should keep the selected slash command visible");
      assert.doesNotMatch(frame, /\/item-01/, "the slash palette should render the active window instead of pinning to the first page");
    },
  );
}

async function testPromptValidationAndSubmit() {
  const submitted = [];
  await renderAndRun(
    h(TextPromptScreen, {
      title: "Save preset",
      subtitle: "Enter a name.",
      label: "Preset name",
      theme: THEME,
      validate: (value) => (!String(value || "").trim() ? "Preset name is required." : ""),
      onSubmit: (value) => submitted.push(value),
    }),
    async (result) => {
      await pressEnter(result);
      assert.match(result.lastFrame(), /Preset name is required\./, "prompt should show validation errors inline");
      await typeText(result, "preset");
      await pressEnter(result);
      assert.equal(submitted.length, 1, "prompt should submit once after the value becomes valid");
      assert.ok(String(submitted[0] || "").trim().length > 0, "prompt should submit a non-empty value");
    },
  );
}

async function testHomeScreenAndScreenReaderMode() {
  await renderAndRun(
    h(HomeScreen, {
      catalog: { total_skills: 154, total_families: 100 },
      bundleList: [{ id: "essentials" }, { id: "design" }],
      cliState: {
        recentInstalls: [{ scope: "skill", skillId: "api-design", targetLabel: "Codex CLI" }],
        recentServices: [{ service: "api", host: "127.0.0.1", port: "3333" }],
        activeServices: [{ id: "active-api", service: "api", host: "127.0.0.1", port: "3333", healthState: "ok", simulated: true }],
        installPresets: [{ name: "codex-core" }],
        servicePresets: [{ name: "local-api" }],
        favorites: { skills: ["api-design"], bundles: ["design"] },
        preferences: { theme: "midnight-ice", compactMode: false, screenReaderMode: "auto" },
      },
      flash: "Saved preset.",
      activityItems: [{ id: "1", label: "Prepared install • api-design", tone: "success", timestamp: "12:00:00" }],
      progress: {
        label: "Install funnel",
        completed: 3,
        total: 5,
        detail: "Destination chosen",
        nextStep: "Preview install",
      },
      theme: THEME,
      screenReaderEnabled: true,
      compactMode: false,
      statePath: TEST_STATE_PATH,
      onSelect: () => {},
      onExit: () => {},
    }),
    async (result) => {
      const initialFrame = result.lastFrame();
      assert.match(initialFrame, /Visual terminal hub/, "home screen should keep the main shell title");
      assert.match(initialFrame, /Type \/ to open commands\./, "home screen should stay minimal until slash input starts");
      assert.match(initialFrame, /Command bar/, "home screen should render the command palette card");
      assert.doesNotMatch(initialFrame, /\/install/, "home screen should not open the command list before slash input");
      assert.match(initialFrame, /Recent activity: Prepared install/, "home screen should fold recent activity into the main card");
      assert.doesNotMatch(initialFrame, /\/ __ \\/, "screen reader mode should suppress the large ASCII logo");

      await typeText(result, "/");
      const slashFrame = result.lastFrame();
      assert.match(slashFrame, /\/install/, "typing slash should reveal the top-level command list");
    },
    SCREEN_READER_RENDER,
  );
}

async function testCatalogExplorerAndFavorites() {
  const favoriteSkills = [];
  const selectedResults = [];
  const searchAdapter = {
    search({ query = "", limit = 36 } = {}) {
      return createCoreFixture().searchFamilies({ query, limit });
    },
  };
  await renderAndRun(
    h(CatalogExplorerScreen, {
      core: createCoreFixture(),
      searchAdapter,
      familyList: cloneJson(FAMILIES),
      bundleList: [],
      cliState: {
        favorites: { skills: [], bundles: [] },
      },
      query: "fig",
      setQuery: () => {},
      searchModeLabel: "SQLite FTS5",
      theme: THEME,
      screenReaderEnabled: false,
      compactMode: false,
      onBack: () => {},
      onSelectResult: (item) => selectedResults.push(item.id),
      onToggleFavoriteSkill: (skillId) => favoriteSkills.push(skillId),
      onToggleFavoriteBundle: () => {},
    }),
    async (result) => {
      const frame = result.lastFrame();
      assert.match(frame, /Top match: Figma Prime/, "catalog explorer should show the top family match in the query step");
      assert.match(frame, /Results/, "catalog explorer should keep the result list visible on the same screen");
      assert.match(frame, /Figma Prime • 2 variants/, "catalog explorer should render the first family result immediately");
      assert.match(frame, /SQLite FTS5/, "catalog explorer should expose the active search backend");
      await moveDown(result, 1);
      await press(result, "f");
      await pressEnter(result);
      assert.deepEqual(selectedResults, ["family:figma-prime"], "catalog explorer should let the user move directly into results and open the highlighted family");
      assert.deepEqual(favoriteSkills, ["figma-prime"], "catalog explorer should wire favorites from the highlighted family result");
    },
    SCREEN_READER_RENDER,
  );
}

async function testSettingsQuickSelectionAndHelpers() {
  const preferenceCalls = [];
  await renderAndRun(
    h(SettingsScreen, {
      cliState: {
        preferences: {
          theme: "midnight-ice",
          compactMode: false,
          screenReaderMode: "auto",
        },
      },
      theme: THEME,
      screenReaderEnabled: false,
      compactMode: false,
      onBack: () => {},
      onApplyPreference: (patch, message) => preferenceCalls.push({ patch, message }),
    }),
    async (result) => {
      await press(result, "4");
      assert.deepEqual(
        preferenceCalls,
        [{ patch: { compactMode: true }, message: "Compact mode enabled." }],
        "quick-number selection should activate settings actions",
      );
    },
    SCREEN_READER_RENDER,
  );

  const customPath = resolveCustomPath("~/skills-demo");
  assert.ok(customPath.endsWith("skills-demo"), "custom path resolution should expand the home directory");

  const installArgs = buildInstallerArgs({
    tool: "codex-cli",
    targetPath: "",
    skillId: "api-design",
    bundleId: "",
  });
  assert.deepEqual(installArgs, ["--codex", "--skill", "api-design"], "install args should preserve client flag + skill selection");
  assert.equal(
    renderInstallerCommand(installArgs),
    "npx awesome-omni-skills --codex --skill api-design",
    "installer command should stay human-readable in previews",
  );

  assert.deepEqual(
    buildInstallerArgs({
      tool: "goose",
      targetPath: "",
      skillId: "domain-analysis",
      bundleId: "",
    }),
    ["--goose", "--skill", "domain-analysis"],
    "Goose installs should resolve to the dedicated builtin flag",
  );
  assert.deepEqual(
    buildInstallerArgs({
      tool: "qwen-code",
      targetPath: "",
      skillId: "api-design",
      bundleId: "",
    }),
    ["--qwen", "--skill", "api-design"],
    "Qwen Code installs should resolve to the dedicated builtin flag",
  );
  assert.deepEqual(
    buildInstallerArgs({
      tool: "custom-team-cli",
      targetPath: "",
      skillId: "api-design",
      bundleId: "",
      customTargets: [
        {
          id: "custom-team-cli",
          name: "Team CLI",
          path: "~/.team-cli/skills",
        },
      ],
    }),
    ["--target-id", "custom-team-cli", "--skill", "api-design"],
    "custom install targets should resolve to --target-id instead of a builtin flag",
  );

  assert.equal(normalizeTransportMode("http"), "stream", "http alias should normalize to stream for MCP config previews");
  assert.equal(defaultMcpConfigUrl("sse"), "http://127.0.0.1:3334/sse", "SSE config previews should target the SSE URL");
  assert.deepEqual(
    buildConfigMcpArgs({
      configTarget: "continue-workspace",
      filePath: "",
      transport: "http",
      url: "http://127.0.0.1:4444/mcp",
      serverName: "omni-skills",
      write: true,
    }),
    ["config-mcp", "--target", "continue-workspace", "--transport", "stream", "--url", "http://127.0.0.1:4444/mcp", "--write"],
    "MCP config args should normalize transport aliases and preserve write intent",
  );
}

async function testInstallFullLibraryFlow() {
  await withUiHarness({}, async ({ result, text, getState, getHandoff }) => {
    await waitForFrame(result, "Visual terminal hub");
    assert.match(text(), /\/tmp\/awesome-omni-skills-ui-state\.json/, "home screen should expose the resolved state path when no flash is active");
    await selectHomeShortcut(result, 1);
    await waitForFrame(result, "Install from destination");
    await pressEnter(result);
    await waitForFrame(result, "Choose an install destination");
    await selectMenuIndex(result, 4);
    await waitForFrame(result, "Choose the install scope");
    await pressEnter(result);
    await waitForFrame(result, "Install preview");
    assert.match(text(), /npx awesome-omni-skills/, "preview should show the resolved installer command");
    assert.match(text(), /--codex/, "preview should preserve the chosen install target");
    await selectMenuIndex(result, 1);
    await wait();
    assert.deepEqual(getHandoff(), expectedCliHandoff(["--codex"]));
    assert.equal(getState().recentInstalls.length, 1, "running the install preview should persist a recent install entry");
    assert.equal(getState().recentInstalls[0].scope, "full");
  });
}

async function testRegisterCustomTargetFlow() {
  await withUiHarness({}, async ({ result, text, getState, getHandoff }) => {
    await selectHomeShortcut(result, 1);
    await waitForFrame(result, "Install from destination");
    await pressEnter(result);
    await waitForFrame(result, "Choose an install destination");
    await moveDown(result, 10);
    await pressEnter(result);
    await waitForFrame(result, "Register a custom install target");
    await typeText(result, "teamcli");
    await pressEnter(result);
    await waitForFrame(result, "Choose the custom skills directory");
    await typeText(result, "~/.teamcli/skills");
    await pressEnter(result);
    await waitForFrame(result, "Choose the install scope");
    await pressEnter(result);
    await waitForFrame(result, "Install preview");
    assert.match(text(), /--target-id/, "preview should use --target-id for saved custom targets");
    await selectMenuIndex(result, 1);
    await wait();
    assert.equal(getState().customInstallTargets.length, 1, "registering a custom target should persist it in UI state");
    const savedTargetId = getState().customInstallTargets[0].id;
    assert.ok(savedTargetId.startsWith("custom-"), "saved custom targets should receive a stable generated id");
    assert.deepEqual(getHandoff(), expectedCliHandoff(["--target-id", savedTargetId]));
  });
}

async function testFindInstallCustomPathSearchSkillAndSavePreset() {
  await withUiHarness({}, async ({ result, text, getState, getHandoff }) => {
    await selectHomeShortcut(result, 1);
    await waitForFrame(result, "Install from destination");
    await selectMenuIndex(result, 2);
    await waitForFrame(result, "Search the catalog");
    await typeText(result, "f");
    await pressEnter(result);
    await waitForFrame(result, "Figma Prime");
    await pressEnter(result);
    await waitForFrame(result, "Pick the version you want to install");
    await pressEnter(result);
    await waitForFrame(result, "Choose an install destination");
    await moveDown(result, 9);
    await pressEnter(result);
    await waitForFrame(result, "Choose a custom install path");
    await typeText(result, "~/custom-skills");
    await pressEnter(result);
    await waitForFrame(result, "Install preview");
    assert.match(text(), /Target: Custom path/, "search install preview should stay on the custom path branch");
    assert.match(text(), /figma-prime--omni/, "search install preview should preserve the chosen family variant");
    await selectMenuIndex(result, 2);
    await waitForFrame(result, "Save install preset");
    await pressEnter(result);
    await waitForFrame(result, "Install preview");
    await waitForCondition(
      () => getState().installPresets.length === 1,
      "saved install preset to persist",
    );
    assert.equal(getState().installPresets.length, 1, "saving an install preset should persist the preset");
    assert.equal(getState().installPresets[0].skillId, "figma-prime--omni");
    await selectMenuIndex(result, 1);
    await wait();
    assert.equal(getHandoff().args.at(-1), "figma-prime--omni", "the install handoff should target the selected family variant");
  });
}

async function testDirectSkillInstallPromptsForVariantFamilies() {
  await withUiHarness({}, async ({ result, text, getHandoff }) => {
    await selectHomeShortcut(result, 1);
    await waitForFrame(result, "Install from destination");
    await pressEnter(result);
    await waitForFrame(result, "Choose an install destination");
    await selectMenuIndex(result, 4);
    await waitForFrame(result, "Choose the install scope");
    await selectMenuIndex(result, 2);
    await waitForFrame(result, "Choose a skill");
    await selectMenuIndex(result, 3);
    await waitForFrame(result, "Pick the version you want to install");
    await pressEnter(result);
    await waitForFrame(result, "Install preview");
    assert.match(text(), /figma-prime--omni/, "direct skill install should resolve through the family variant picker");
    await selectMenuIndex(result, 1);
    await wait();
    assert.equal(getHandoff().args.at(-1), "figma-prime--omni", "direct skill install should hand off the chosen variant id");
  });
}

async function testCatalogExplorerRouteFlow() {
  await withUiHarness({}, async ({ result, text }) => {
    await selectHomeShortcut(result, 2);
    await waitForFrame(result, "Catalog explorer");
    await typeText(result, "fig");
    await pressEnter(result);
    await waitForFrame(result, "Results");
    await pressEnter(result);
    await waitForFrame(result, "Pick the version you want to install");
    await pressEnter(result);
    await waitForFrame(result, "Choose an install destination");
    await selectMenuIndex(result, 4);
    await waitForFrame(result, "Install preview");
    assert.match(text(), /figma-prime--omni/, "catalog flow should preserve the selected family variant into preview");
    assert.match(text(), /--codex/, "catalog flow should route through destination selection before preview");
  });

  await withUiHarness({}, async ({ result }) => {
    await selectHomeShortcut(result, 2);
    await waitForFrame(result, "Catalog explorer");
    await waitForFrame(result, "Top match: Figma Prime");
    await press(result, "\u001B");
    await waitForFrame(result, "Visual terminal hub");
  });
}

async function testRecentInstallReplayFlow() {
  await withUiHarness(
    {
      initialState: {
        recentInstalls: [
          {
            id: "recent-install-1",
            tool: "cursor",
            targetLabel: "Cursor",
            targetPath: path.join(os.homedir(), ".cursor", "skills"),
            scope: "skill",
            skillId: "domain-analysis",
            bundleId: "",
            command: "npx awesome-omni-skills --cursor --skill domain-analysis",
          },
        ],
      },
    },
    async ({ result, text, getHandoff }) => {
      await selectHomeShortcut(result, 1);
      await waitForFrame(result, "Repeat recent install");
      await selectMenuIndex(result, 3);
      await waitForFrame(result, "Recent installs");
      await pressEnter(result);
      await waitForFrame(result, "Install preview");
      assert.match(text(), /--cursor/, "recent install replay should restore the saved tool target");
      assert.match(text(), /domain-analysis/, "recent install replay should restore the saved skill");
      await selectMenuIndex(result, 1);
      await wait();
      assert.deepEqual(getHandoff().args, ["--cursor", "--skill", "domain-analysis"]);
    },
  );
}

async function testInstallPresetReplayFlow() {
  await withUiHarness(
    {
      initialState: {
        installPresets: [
          {
            id: "install-preset-1",
            name: "starter-bundle",
            tool: "codex-cli",
            targetLabel: "Codex CLI",
            targetPath: path.join(os.homedir(), ".codex", "skills"),
            scope: "bundle",
            skillId: "",
            bundleId: "starter-kit",
            command: "npx awesome-omni-skills --codex --bundle starter-kit",
          },
        ],
      },
    },
    async ({ result, text, getHandoff }) => {
      await selectHomeShortcut(result, 1);
      await waitForFrame(result, "Run saved install preset");
      await selectMenuIndex(result, 4);
      await waitForFrame(result, "Saved install presets");
      await pressEnter(result);
      await waitForFrame(result, "Install preview");
      assert.match(text(), /starter-kit/, "install preset replay should restore the saved bundle target");
      await selectMenuIndex(result, 1);
      await wait();
      assert.deepEqual(getHandoff().args, ["--codex", "--bundle", "starter-kit"]);
    },
  );
}

async function testServiceMcpStreamFlow() {
  await withUiHarness({}, async ({ result, text, getHandoff, getState }) => {
    await selectHomeShortcut(result, 3);
    await waitForFrame(result, "Start a service");
    await pressEnter(result);
    await waitForFrame(result, "Choose a service");
    await pressEnter(result);
    await waitForFrame(result, "Choose MCP transport");
    await pressEnter(result);
    await waitForFrame(result, "Choose MCP mode");
    await pressEnter(result);
    await waitForFrame(result, "Choose MCP host");
    await pressEnter(result);
    await waitForFrame(result, "Choose MCP port");
    await pressEnter(result);
    await waitForFrame(result, "Service preview");
    assert.match(text(), /mcp stream/, "MCP preview should show the stream transport");
    assert.match(text(), /--local/, "MCP preview should show local mode");
    await selectMenuIndex(result, 1);
    await waitForFrame(result, "MCP control center");
    assert.deepEqual(getHandoff().args, ["mcp", "stream", "--local", "--host", "127.0.0.1", "--port", "3334"]);
    assert.equal(getState().recentServices.length, 1, "running a service preview should persist recent services");
    assert.equal(getState().recentServices[0].service, "mcp");
    assert.equal(getState().activeServices.length, 1, "managed MCP launches should register an active runtime");
  });
}

async function testServiceMcpSseFlow() {
  await withUiHarness({}, async ({ result, getHandoff, getState }) => {
    await selectHomeShortcut(result, 3);
    await waitForFrame(result, "Start a service");
    await pressEnter(result);
    await waitForFrame(result, "Choose a service");
    await pressEnter(result);
    await waitForFrame(result, "Choose MCP transport");
    await selectMenuIndex(result, 2);
    await waitForFrame(result, "Choose MCP mode");
    await pressEnter(result);
    await waitForFrame(result, "Choose MCP host");
    await pressEnter(result);
    await waitForFrame(result, "Choose MCP port");
    await pressEnter(result);
    await waitForFrame(result, "Service preview");
    await selectMenuIndex(result, 1);
    await waitForFrame(result, "MCP control center");
    assert.deepEqual(getHandoff().args, ["mcp", "sse", "--local", "--host", "127.0.0.1", "--port", "3334"]);
    assert.equal(getState().activeServices.length, 1, "managed MCP SSE launches should register an active runtime");
  });
}

async function testServiceMcpSsePortConflictShowsFailure() {
  await withUiHarness(
    {
      initialState: {
        activeServices: [
          {
            id: "active-mcp-stream-1",
            service: "mcp",
            transport: "stream",
            host: "127.0.0.1",
            port: "3334",
            pid: null,
            simulated: true,
            healthState: "ok",
            baseUrl: "http://127.0.0.1:3334",
            primaryUrl: "http://127.0.0.1:3334/mcp",
            healthUrl: "http://127.0.0.1:3334/healthz",
            endpointUrls: ["http://127.0.0.1:3334/mcp"],
          },
        ],
      },
    },
    async ({ result, text, getHandoff, getState }) => {
      await selectHomeShortcut(result, 3);
      await waitForFrame(result, "Start a service");
      await pressEnter(result);
      await waitForFrame(result, "Choose a service");
      await pressEnter(result);
      await waitForFrame(result, "Choose MCP transport");
      await selectMenuIndex(result, 2);
      await waitForFrame(result, "Choose MCP mode");
      await pressEnter(result);
      await waitForFrame(result, "Choose MCP host");
      await pressEnter(result);
      await waitForFrame(result, "Choose MCP port");
      await pressEnter(result);
      await waitForFrame(result, "Service preview");
      await selectMenuIndex(result, 1);
      await waitForFrame(result, "MCP control center");
      assert.match(text(), /Launch failed/, "port conflicts should open the managed service failure view");
      assert.match(text(), /Port 3334 on 127\.0\.0\.1 is already used by MCP STREAM/, "the failure view should explain the conflicting runtime");
      assert.equal(getHandoff(), null, "port conflicts should not hand off a launch");
      assert.equal(getState().activeServices.length, 1, "the original managed runtime should remain registered");
    },
  );
}

async function testServiceMcpStdioFlow() {
  await withUiHarness({}, async ({ result, text, getHandoff, getState }) => {
    await selectHomeShortcut(result, 3);
    await waitForFrame(result, "Start a service");
    await pressEnter(result);
    await waitForFrame(result, "Choose a service");
    await pressEnter(result);
    await waitForFrame(result, "Choose MCP transport");
    await selectMenuIndex(result, 3);
    await waitForFrame(result, "Choose MCP mode");
    await pressEnter(result);
    await waitForFrame(result, "Service preview");
    assert.match(text(), /Run in terminal now/, "stdio MCP should stay as a foreground terminal handoff");
    await selectMenuIndex(result, 1);
    await wait();
    assert.deepEqual(getHandoff().args, ["mcp", "stdio", "--local"]);
    assert.equal(getState().activeServices.length, 0, "stdio should not register a managed background runtime");
  });
}

async function testServiceMcpConfigFlow() {
  await withUiHarness({}, async ({ result, text, getHandoff }) => {
    await selectHomeShortcut(result, 3);
    await waitForFrame(result, "Start a service");
    await pressEnter(result);
    await waitForFrame(result, "Choose a service");
    await selectMenuIndex(result, 2);
    await waitForFrame(result, "Choose an MCP client target");
    await pressEnter(result);
    await waitForFrame(result, "Choose MCP transport");
    await selectMenuIndex(result, 2);
    await waitForFrame(result, "Choose MCP endpoint URL");
    await pressEnter(result);
    await waitForFrame(result, "Config preview");
    assert.match(text(), /config-mcp/, "MCP config preview should show the config subcommand");
    assert.match(text(), /continue-workspace/, "MCP config preview should preserve the selected target");
    assert.match(text(), /http:\/\/127\.0\.0\.1:3334\/mcp/, "MCP config preview should preserve the selected endpoint");
    await waitForFrame(result, "Write config now");
    await pressEnter(result);
    await waitForFrame(result, "Write MCP client config");
    assert.equal(getHandoff(), null, "config write should stay inside the TUI instead of exiting through handoff");
  });
}

async function testServiceApiFlowAndPresetSave() {
  await withUiHarness({}, async ({ result, text, getState, getHandoff }) => {
    await selectHomeShortcut(result, 3);
    await waitForFrame(result, "Start a service");
    await pressEnter(result);
    await waitForFrame(result, "Choose a service");
    await selectMenuIndex(result, 3);
    await waitForFrame(result, "Choose API host");
    await pressEnter(result);
    await waitForFrame(result, "Choose API port");
    await pressEnter(result);
    await waitForFrame(result, "Choose API security profile");
    await selectMenuIndex(result, 2);
    await waitForFrame(result, "Set bearer token");
    await typeText(result, "top-secret-token");
    await pressEnter(result);
    await waitForFrame(result, "Set rate limit max");
    await pressEnter(result);
    await waitForFrame(result, "Set rate limit window");
    await pressEnter(result);
    await waitForFrame(result, "Service preview");
    assert.match(text(), /Security: hardened/, "API preview should reflect the hardened profile");
    await selectMenuIndex(result, 2);
    await waitForFrame(result, "Save service preset");
    await pressEnter(result);
    await waitForFrame(result, "Service preview");
    const state = getState();
    assert.equal(state.servicePresets.length, 1, "saving a service preset should persist the runtime configuration");
    assert.equal(state.servicePresets[0].authMode, "bearer");
    assert.ok(String(state.servicePresets[0].bearerToken || "").trim().length > 0, "service presets should retain a non-empty bearer token");
    assert.equal(state.servicePresets[0].rateLimitMax, "60");

    await selectMenuIndex(result, 1);
    await waitForFrame(result, "API control center");
    assert.equal(getState().activeServices.length, 1, "API launch should register an active managed service");
    assert.ok(String(getHandoff().env.OMNI_SKILLS_HTTP_BEARER_TOKEN || "").trim().length > 0, "API launch should preserve a non-empty bearer token");
  });
}

async function testServiceA2aFlow() {
  await withUiHarness({}, async ({ result, text, getHandoff, getState }) => {
    await selectHomeShortcut(result, 3);
    await waitForFrame(result, "Start a service");
    await pressEnter(result);
    await waitForFrame(result, "Choose a service");
    await selectMenuIndex(result, 4);
    await waitForFrame(result, "Choose A2A host");
    await pressEnter(result);
    await waitForFrame(result, "Choose A2A port");
    await pressEnter(result);
    await waitForFrame(result, "Choose A2A persistence");
    await selectMenuIndex(result, 3);
    await waitForFrame(result, "Choose A2A store path");
    await pressEnter(result);
    await waitForFrame(result, "Choose A2A executor");
    await selectMenuIndex(result, 2);
    await waitForFrame(result, "Choose queue mode");
    await selectMenuIndex(result, 2);
    await waitForFrame(result, "Set queue poll interval");
    await pressEnter(result);
    await waitForFrame(result, "Set lease duration");
    await pressEnter(result);
    await waitForFrame(result, "Service preview");
    assert.match(text(), /A2A/, "A2A preview should render the runtime family");
    await selectMenuIndex(result, 1);
    await waitForFrame(result, "A2A control center");
    assert.deepEqual(getHandoff().args, ["a2a", "--host", "127.0.0.1", "--port", "3335"]);
    assert.equal(getHandoff().env.OMNI_SKILLS_A2A_STORE_TYPE, "sqlite");
    assert.equal(getHandoff().env.OMNI_SKILLS_A2A_EXECUTOR, "process");
    assert.equal(getHandoff().env.OMNI_SKILLS_A2A_QUEUE_ENABLED, "1");
    assert.equal(getHandoff().env.OMNI_SKILLS_A2A_WORKER_POLL_MS, "250");
    assert.equal(getHandoff().env.OMNI_SKILLS_A2A_LEASE_MS, "4000");
    assert.equal(getState().activeServices.length, 1, "A2A launch should register an active managed service");
  });
}

async function testRecentServiceReplayFlow() {
  await withUiHarness(
    {
      initialState: {
        recentServices: [
          {
            id: "recent-service-1",
            service: "a2a",
            host: "127.0.0.1",
            port: "4445",
            transport: "stream",
            storeType: "sqlite",
            storePath: "/tmp/a2a.sqlite",
            executorMode: "process",
            queueEnabled: true,
            workerPollMs: "150",
            leaseMs: "5000",
            command: "npx awesome-omni-skills a2a --host 127.0.0.1 --port 4445",
          },
        ],
      },
    },
    async ({ result, text, getHandoff, getState }) => {
      await selectHomeShortcut(result, 3);
      await waitForFrame(result, "Repeat recent service");
      await selectMenuIndex(result, 3);
      await waitForFrame(result, "Recent services");
      await pressEnter(result);
      await waitForFrame(result, "Service preview");
      assert.match(text(), /A2A/, "recent service replay should restore the service preview");
      await selectMenuIndex(result, 1);
      await waitForFrame(result, "A2A control center");
      assert.equal(getHandoff().env.OMNI_SKILLS_A2A_STORE_PATH, "/tmp/a2a.sqlite");
      assert.equal(getHandoff().env.OMNI_SKILLS_A2A_WORKER_POLL_MS, "150");
      assert.equal(getHandoff().env.OMNI_SKILLS_A2A_LEASE_MS, "5000");
      assert.equal(getState().activeServices.length, 1, "recent service replay should register the managed runtime");
    },
  );
}

async function testServicePresetReplayFlow() {
  await withUiHarness(
    {
      initialState: {
        servicePresets: [
          {
            id: "service-preset-1",
            name: "secure-api",
            service: "api",
            host: "127.0.0.1",
            port: "4444",
            authMode: "bearer",
            hardened: true,
            bearerToken: "preset-token",
            apiKeys: "",
            rateLimitMax: "12",
            rateLimitWindowMs: "1200",
            auditLog: true,
            command: "OMNI_SKILLS_HTTP_BEARER_TOKEN=*** npx awesome-omni-skills api --host 127.0.0.1 --port 4444",
          },
        ],
      },
    },
    async ({ result, text, getHandoff, getState }) => {
      await selectHomeShortcut(result, 3);
      await waitForFrame(result, "Run saved service preset");
      await selectMenuIndex(result, 4);
      await waitForFrame(result, "Saved service presets");
      await pressEnter(result);
      await waitForFrame(result, "Service preview");
      assert.match(text(), /Security: hardened/, "service preset replay should restore hardened API mode");
      await selectMenuIndex(result, 1);
      await waitForFrame(result, "API control center");
      assert.equal(getHandoff().env.OMNI_SKILLS_HTTP_BEARER_TOKEN, "preset-token");
      assert.equal(getHandoff().env.OMNI_SKILLS_RATE_LIMIT_MAX, "12");
      assert.equal(getHandoff().env.OMNI_SKILLS_RATE_LIMIT_WINDOW_MS, "1200");
      assert.equal(getHandoff().env.OMNI_SKILLS_HTTP_AUDIT_LOG, "1");
      assert.equal(getState().activeServices.length, 1, "service preset replay should register the managed runtime");
    },
  );
}

async function testManagedServiceControlFlow() {
  await withUiHarness(
    {
      initialState: {
        activeServices: [
          {
            id: "active-api-1",
            service: "api",
            host: "127.0.0.1",
            port: "3333",
            pid: null,
            simulated: true,
            healthState: "ok",
            baseUrl: "http://127.0.0.1:3333",
            primaryUrl: "http://127.0.0.1:3333",
            healthUrl: "http://127.0.0.1:3333/healthz",
            docsUrl: "http://127.0.0.1:3333/docs",
            endpointUrls: [
              "http://127.0.0.1:3333/v1/families",
              "http://127.0.0.1:3333/v1/skills",
            ],
          },
        ],
      },
    },
    async ({ result, text, getState }) => {
      await selectHomeShortcut(result, 3);
      await waitForFrame(result, "Manage running services");
      await selectMenuIndex(result, 2);
      await waitForFrame(result, "Running services");
      await pressEnter(result);
      await waitForFrame(result, "API control center");
      assert.match(text(), /Swagger: http:\/\/127\.0\.0\.1:3333\/docs/, "managed service detail should expose the Swagger URL");
      await selectMenuIndex(result, 2);
      await wait(120);
      assert.equal(getState().activeServices.length, 0, "stopping a managed service should remove it from tracked state");
    },
  );
}

async function testSettingsRouteFlow() {
  await withUiHarness({}, async ({ result, getState }) => {
    await selectHomeShortcut(result, 4);
    await waitForFrame(result, "Visual shell settings");
    await selectMenuIndex(result, 2);
    await wait(120);
    assert.equal(getState().preferences.theme, "ember", "settings flow should persist the selected theme");
  });
}

async function testHomeUtilityCommands() {
  await withUiHarness({}, async ({ result, text, getHandoff }) => {
    await selectHomeShortcut(result, 5);
    await waitForFrame(result, "Diagnostics");
    await pressEnter(result);
    await waitForFrame(result, "Run doctor");
    assert.match(text(), /Running inside the visual shell|Completed with status/, "doctor should render inside the TUI");
    assert.equal(getHandoff(), null, "doctor should no longer exit the TUI through handoff");
  });

  await withUiHarness({}, async ({ result, text, getHandoff }) => {
    await selectHomeShortcut(result, 5);
    await waitForFrame(result, "Diagnostics");
    await selectMenuIndex(result, 2);
    await waitForFrame(result, "Run quick smoke checks");
    assert.match(text(), /Running inside the visual shell|Completed with status|Failed with status/, "smoke should render inside the TUI");
    assert.equal(getHandoff(), null, "smoke should no longer exit the TUI through handoff");
  });
}

await testSelectMenuNavigation();
await testMenuScreenEscapeBacksOutImmediately();
await testMenuScreenWindowsLongSlashLists();
await testPromptValidationAndSubmit();
await testHomeScreenAndScreenReaderMode();
await testCatalogExplorerAndFavorites();
await testSettingsQuickSelectionAndHelpers();
await testInstallFullLibraryFlow();
await testRegisterCustomTargetFlow();
await testFindInstallCustomPathSearchSkillAndSavePreset();
await testDirectSkillInstallPromptsForVariantFamilies();
await testCatalogExplorerRouteFlow();
await testRecentInstallReplayFlow();
await testInstallPresetReplayFlow();
await testServiceMcpStreamFlow();
await testServiceMcpSseFlow();
await testServiceMcpSsePortConflictShowsFailure();
await testServiceMcpStdioFlow();
await testServiceMcpConfigFlow();
await testServiceApiFlowAndPresetSave();
await testServiceA2aFlow();
await testRecentServiceReplayFlow();
await testServicePresetReplayFlow();
await testManagedServiceControlFlow();
await testSettingsRouteFlow();
await testHomeUtilityCommands();

console.log("TUI component and end-to-end tests passed.");
