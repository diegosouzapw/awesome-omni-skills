#!/usr/bin/env node

import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import { spawn } from "node:child_process";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { render, Box, Text, useApp, useIsScreenReaderEnabled } from "ink";
import { DEFAULT_TUI_THEME, getTheme } from "../tui/theme.mjs";
import { ActivityFeed, ProgressPanel } from "../tui/activity.mjs";
import {
  Panel,
  Screen,
  SplitLayout,
  StepRail,
  SummaryPanel,
  TextPreviewPanel,
} from "../tui/layout.mjs";
import {
  MenuScreen,
  SelectMenu,
  TextPromptScreen,
} from "../tui/controls.mjs";
import { searchBundleMatches } from "../tui/catalog.mjs";
import {
  buildInstallRecord,
  buildInstallerArgs,
  emptyInstallDraft,
  formatRecentInstall,
  listKnownInstallTargets,
  PRIMARY_NPX_COMMAND,
  renderInstallerCommand,
  resolveCustomPath,
} from "../tui/install-flow.mjs";
import {
  buildA2aLaunch,
  buildApiLaunch,
  buildConfigMcpArgs,
  buildConfigMcpLaunch,
  buildMcpLaunch,
  defaultMcpConfigUrl,
  emptyServiceDraft,
  formatRecentService,
  normalizeTransportMode,
} from "../tui/runtime-flow.mjs";
import { CatalogExplorerScreen, HomeScreen, SettingsScreen } from "../tui/screens.mjs";
import { createCatalogRuntime } from "../lib/catalog-runtime.js";

const h = React.createElement;
const require = createRequire(import.meta.url);

const {
  DEFAULT_STATE_PATH,
  loadCliState,
  saveCliState,
  upsertCustomInstallTarget,
  recordRecentInstall,
  recordRecentService,
  saveInstallPreset,
  saveServicePreset,
  toggleFavoriteSkill,
  toggleFavoriteBundle,
  updateCliPreferences,
} = require("../lib/cli-state.js");

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "..", "..");
const CLI_SCRIPT = path.join(ROOT, "packages", "cli", "src", "bin", "cli.js");
const CATALOG_CORE = path.join(ROOT, "packages", "catalog-core", "src", "index.js");
const LOCAL_SIDECAR = path.join(ROOT, "packages", "server-mcp", "src", "local-sidecar.js");

function screenFooter(hint, extra = "") {
  return `${hint}${extra ? ` • ${extra}` : ""}`;
}

function currentTimestamp() {
  return new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

function launchActionPreview(action, persistState, exitWithAction, logActivity) {
  if (action.kind === "install") {
    persistState((current) => recordRecentInstall(current, action.record));
  } else if (action.kind === "service") {
    persistState((current) => recordRecentService(current, action.record));
  }
  logActivity?.(
    `${action.kind === "install" ? "Prepared install" : "Prepared service"} • ${action.record.command || action.launch?.args?.join(" ") || "handoff"}`,
    "success",
  );
  exitWithAction(action.launch);
}

function OmniSkillsUi({
  catalog,
  bundles,
  core,
  searchAdapter,
  searchModeLabel,
  sidecar,
  initialState,
  persistState,
  onHandoff,
  statePath = DEFAULT_STATE_PATH,
}) {
  const { exit } = useApp();
  const detectedScreenReader = useIsScreenReaderEnabled();
  const [cliState, setCliState] = useState(initialState);
  const [stack, setStack] = useState([{ id: "home" }]);
  const [installDraft, setInstallDraft] = useState(emptyInstallDraft());
  const [customTargetDraft, setCustomTargetDraft] = useState({ name: "", path: "" });
  const [serviceDraft, setServiceDraft] = useState(emptyServiceDraft());
  const [catalogQuery, setCatalogQuery] = useState("");
  const [flash, setFlash] = useState("");
  const [activityItems, setActivityItems] = useState([]);
  const [progressState, setProgressState] = useState(null);
  const cliStateRef = useRef(initialState);

  const currentScreen = stack[stack.length - 1];
  const bundleList = useMemo(() => bundles || [], [bundles]);
  const skillList = useMemo(() => [...(catalog.skills || [])], [catalog]);
  const bundleMap = useMemo(
    () => new Map(bundleList.map((bundle) => [bundle.id, bundle])),
    [bundleList],
  );
  const skillMap = useMemo(
    () => new Map(skillList.map((skill) => [skill.id, skill])),
    [skillList],
  );
  const configTargetList = useMemo(() => {
    const detection = sidecar.detectClients();
    return [...(detection.config_targets || [])].sort((left, right) => left.id.localeCompare(right.id));
  }, [sidecar]);
  const resolvedThemeName = process.env.OMNI_SKILLS_TUI_THEME || cliState.preferences?.theme || DEFAULT_TUI_THEME;
  const theme = useMemo(() => getTheme(resolvedThemeName), [resolvedThemeName]);
  const compactMode = Boolean(cliState.preferences?.compactMode);
  const screenReaderEnabled =
    cliState.preferences?.screenReaderMode === "on"
      ? true
      : cliState.preferences?.screenReaderMode === "off"
        ? false
        : detectedScreenReader;
  const viewProps = { theme, screenReaderEnabled, compactMode };

  function searchCatalog(query, limit = 10) {
    if (searchAdapter && typeof searchAdapter.search === "function") {
      return searchAdapter.search({ query, limit });
    }
    return core.searchSkills({ query, limit });
  }

  useEffect(() => {
    cliStateRef.current = cliState;
  }, [cliState]);

  function saveState(update) {
    const current = cliStateRef.current;
    const next = typeof update === "function" ? update(current) : update;
    const persisted = persistState(next);
    cliStateRef.current = persisted;
    setCliState(persisted);
    return persisted;
  }

  function logActivity(label, tone = "info") {
    setActivityItems((current) => [
      ...current,
      {
        id: `${Date.now()}-${current.length}`,
        label,
        tone,
        timestamp: currentTimestamp(),
      },
    ].slice(-14));
  }

  function updateProgress(progress) {
    setProgressState(progress);
  }

  function applyPreference(patch, message = "") {
    saveState((current) => updateCliPreferences(current, patch));
    if (message) {
      setFlash(message);
      logActivity(message, "success");
    }
  }

  function renderMenu(props) {
    return h(MenuScreen, { ...props, ...viewProps });
  }

  function renderPrompt(props) {
    return h(TextPromptScreen, { ...props, ...viewProps });
  }

  function goHome() {
    setStack([{ id: "home" }]);
    setFlash("");
    setProgressState(null);
  }

  function push(screen) {
    setStack((current) => [...current, screen]);
    setFlash("");
  }

  function pop() {
    setStack((current) => (current.length > 1 ? current.slice(0, -1) : current));
    setFlash("");
  }

  function startInstallFlow(initialScope = "") {
    setInstallDraft(emptyInstallDraft());
    setCatalogQuery("");
    if (initialScope) {
      setInstallDraft((current) => ({ ...current, scope: initialScope }));
    }
    updateProgress({
      label: "Install funnel",
      completed: initialScope ? 2 : 1,
      total: 5,
      detail: initialScope ? `Scope preset: ${initialScope}` : "Choose a target destination",
      nextStep: initialScope ? "Choose catalog item or preview" : "Choose install target",
    });
    setStack([{ id: "home" }, { id: "install-target" }]);
  }

  function startServiceFlow() {
    setServiceDraft(emptyServiceDraft());
    updateProgress({
      label: "Runtime funnel",
      completed: 1,
      total: 5,
      detail: "Choose a service family",
      nextStep: "Select MCP, API, A2A, or MCP config",
    });
    setStack([{ id: "home" }, { id: "service-kind" }]);
  }

  function exitWithAction(action) {
    onHandoff(action);
    exit();
  }

  function persistFavoriteSkill(skillId) {
    saveState((current) => toggleFavoriteSkill(current, skillId));
  }

  function persistFavoriteBundle(bundleId) {
    saveState((current) => toggleFavoriteBundle(current, bundleId));
  }

  function buildInstallPreviewAction() {
    const skill = installDraft.skillId ? skillMap.get(installDraft.skillId) : null;
    const bundle = installDraft.bundleId ? bundleMap.get(installDraft.bundleId) : null;
    const installerArgs = buildInstallerArgs({
      tool: installDraft.tool,
      targetPath: installDraft.targetKind === "path" ? installDraft.targetPath : "",
      skillId: skill?.id || "",
      bundleId: bundle?.id || "",
      customTargets: cliState.customInstallTargets || [],
    });
    const command = renderInstallerCommand(installerArgs);
    const action = {
      kind: "install",
      record: buildInstallRecord(installDraft, skill, bundle, installerArgs, command),
      launch: {
        script: CLI_SCRIPT,
        args: installerArgs,
        env: statePath !== DEFAULT_STATE_PATH ? { OMNI_SKILLS_STATE_PATH: statePath } : {},
      },
      previewLines: [
        { label: "Target", value: installDraft.targetLabel || "Custom path" },
        { label: "Path", value: installDraft.targetPath },
        {
          label: "Scope",
          value:
            installDraft.scope === "skill"
              ? `Single skill (${skill?.id || ""})`
              : installDraft.scope === "bundle"
                ? `Bundle (${bundle?.id || ""})`
                : installDraft.scope === "search"
                  ? bundle
                    ? `Search → bundle (${bundle.id})`
                    : `Search → skill (${skill?.id || ""})`
                  : "Full library",
        },
        { label: "Command", value: command, color: "greenBright" },
      ],
      skill,
      bundle,
    };
    return action;
  }

  function buildServicePreviewAction() {
    if (serviceDraft.service === "mcp-config") {
      try {
        const launch = buildConfigMcpLaunch(serviceDraft, sidecar);
        return {
          kind: "service",
          record: launch.record,
          launch: {
            script: CLI_SCRIPT,
            args: launch.args,
            env: launch.env,
          },
          previewLines: [
            { label: "Service", value: "MCP client config" },
            { label: "Target", value: launch.preview.target_name || serviceDraft.configTarget || "custom file" },
            { label: "Path", value: launch.preview.config_path },
            { label: "Profile", value: `${launch.preview.config_profile} (${launch.preview.config_format})` },
            { label: "Transport", value: serviceDraft.transport },
            { label: "Command", value: launch.command, color: "greenBright" },
          ],
          previewText: launch.preview.next_config_text,
          previewNotes: [
            ...(launch.preview.instructions || []).map((line) => `Instruction: ${line}`),
            ...(launch.preview.recipes || []).map((recipe) => `Recipe (${recipe.client}): ${recipe.command}`),
          ],
          invalid: false,
        };
      } catch (error) {
        return {
          kind: "service",
          record: {
            service: "mcp-config",
            mode: "invalid",
            transport: serviceDraft.transport,
            targetId: serviceDraft.configTarget || "",
            targetPath: serviceDraft.configFilePath || "",
            serverName: serviceDraft.serverName || "omni-skills",
            url: serviceDraft.url || "",
            command: "",
          },
          launch: null,
          previewLines: [
            { label: "Service", value: "MCP client config" },
            { label: "Status", value: "invalid draft", color: "redBright" },
          ],
          previewText: "",
          previewNotes: [String(error.message || error)],
          invalid: true,
        };
      }
    }
    if (serviceDraft.service === "mcp") {
      const launch = buildMcpLaunch(serviceDraft);
      return {
        kind: "service",
        record: launch.record,
        launch: {
          script: CLI_SCRIPT,
          args: launch.args,
          env: launch.env,
        },
        previewLines: [
          { label: "Service", value: "MCP" },
          { label: "Transport", value: serviceDraft.transport },
          { label: "Mode", value: serviceDraft.localMode ? "local sidecar" : "read-only" },
          { label: "Command", value: launch.command, color: "greenBright" },
        ],
      };
    }
    if (serviceDraft.service === "api") {
      const launch = buildApiLaunch(serviceDraft);
      return {
        kind: "service",
        record: launch.record,
        launch: {
          script: CLI_SCRIPT,
          args: launch.args,
          env: launch.env,
        },
        previewLines: [
          { label: "Service", value: "Catalog API" },
          { label: "Host", value: serviceDraft.host },
          { label: "Port", value: serviceDraft.port || "3333" },
          { label: "Security", value: serviceDraft.authMode === "none" ? "basic" : "hardened" },
          { label: "Command", value: launch.command, color: "greenBright" },
        ],
      };
    }
    const launch = buildA2aLaunch(serviceDraft);
    return {
      kind: "service",
      record: launch.record,
      launch: {
        script: CLI_SCRIPT,
        args: launch.args,
        env: launch.env,
      },
      previewLines: [
        { label: "Service", value: "A2A" },
        { label: "Host", value: serviceDraft.host },
        { label: "Port", value: serviceDraft.port || "3335" },
        { label: "Store", value: serviceDraft.storeType },
        { label: "Executor", value: serviceDraft.executorMode },
        { label: "Command", value: launch.command, color: "greenBright" },
      ],
    };
  }

  function buildServicePresetRecord(preview) {
    return {
      ...preview.record,
      transport: serviceDraft.transport,
      localMode: Boolean(serviceDraft.localMode),
      url: serviceDraft.url || "",
      configTarget: serviceDraft.configTarget || "",
      configFilePath: serviceDraft.configFilePath || "",
      serverName: serviceDraft.serverName || "omni-skills",
      authMode: serviceDraft.authMode || "none",
      hardened: Boolean(serviceDraft.hardened),
      bearerToken: serviceDraft.bearerToken || "",
      apiKeys: serviceDraft.apiKeys || "",
      rateLimitMax: serviceDraft.rateLimitMax || "",
      rateLimitWindowMs: serviceDraft.rateLimitWindowMs || "",
      auditLog: Boolean(serviceDraft.auditLog),
      storeType: serviceDraft.storeType || "json",
      storePath: serviceDraft.storePath || "",
      executorMode: serviceDraft.executorMode || "inline",
      queueEnabled: Boolean(serviceDraft.queueEnabled),
      workerPollMs: serviceDraft.workerPollMs || "",
      leaseMs: serviceDraft.leaseMs || "",
      baseUrl: serviceDraft.baseUrl || "",
    };
  }

  if (currentScreen.id === "home") {
    return h(
      HomeScreen,
      {
        catalog,
        bundleList,
        cliState,
        flash,
        activityItems,
        progress: progressState,
        theme,
        screenReaderEnabled,
        compactMode,
        statePath,
        onExit: exit,
        onSelect: (item) => {
          if (item.id === "install") {
            startInstallFlow("");
            return;
          }
          if (item.id === "find-install") {
            startInstallFlow("search");
            return;
          }
          if (item.id === "catalog-explorer") {
            setCatalogQuery("");
            push({ id: "catalog-explorer" });
            updateProgress({
              label: "Catalog explorer",
              completed: 1,
              total: 3,
              detail: "Browse and search published skills and bundles",
              nextStep: "Pick a result to start install target selection",
            });
            return;
          }
          if (item.id === "recent-install") {
            push({ id: "recent-install-list" });
            return;
          }
          if (item.id === "install-presets") {
            push({ id: "install-preset-list" });
            return;
          }
          if (item.id === "service") {
            startServiceFlow();
            return;
          }
          if (item.id === "settings") {
            push({ id: "settings" });
            return;
          }
          if (item.id === "recent-service") {
            push({ id: "recent-service-list" });
            return;
          }
          if (item.id === "service-presets") {
            push({ id: "service-preset-list" });
            return;
          }
          if (item.id === "doctor") {
            exitWithAction({ script: CLI_SCRIPT, args: ["doctor"], env: {} });
            return;
          }
          if (item.id === "smoke") {
            exitWithAction({ script: CLI_SCRIPT, args: ["smoke"], env: {} });
            return;
          }
          exit();
        },
      }
    );
  }

  if (currentScreen.id === "catalog-explorer") {
    return h(CatalogExplorerScreen, {
      core,
      searchAdapter,
      skillList,
      bundleList,
      cliState,
      query: catalogQuery,
      setQuery: setCatalogQuery,
      searchModeLabel,
      theme,
      screenReaderEnabled,
      compactMode,
      onBack: goHome,
      onToggleFavoriteSkill: (skillId) => {
        persistFavoriteSkill(skillId);
        logActivity(
          cliState.favorites.skills.includes(skillId)
            ? `Removed ${skillId} from favorites.`
            : `Added ${skillId} to favorites.`,
          "info",
        );
      },
      onToggleFavoriteBundle: (bundleId) => {
        persistFavoriteBundle(bundleId);
        logActivity(
          cliState.favorites.bundles.includes(bundleId)
            ? `Removed ${bundleId} from favorites.`
            : `Added ${bundleId} to favorites.`,
          "info",
        );
      },
      onSelectResult: (item) => {
        if (item.id.startsWith("skill:")) {
          setInstallDraft((current) => ({
            ...current,
            scope: "skill",
            skillId: item.id.slice("skill:".length),
            bundleId: "",
            query: catalogQuery,
          }));
        } else {
          setInstallDraft((current) => ({
            ...current,
            scope: "bundle",
            bundleId: item.id.slice("bundle:".length),
            skillId: "",
            query: catalogQuery,
          }));
        }
        updateProgress({
          label: "Install funnel",
          completed: 2,
          total: 5,
          detail: "Catalog item selected",
          nextStep: "Choose an install target",
        });
        setStack([{ id: "home" }, { id: "install-target" }]);
      },
    });
  }

  if (currentScreen.id === "settings") {
    return h(SettingsScreen, {
      cliState,
      theme,
      screenReaderEnabled,
      compactMode,
      onBack: goHome,
      onApplyPreference: applyPreference,
    });
  }

  if (currentScreen.id === "recent-install-list") {
    return renderMenu({
      title: "Recent installs",
      subtitle: "Re-run an install without re-entering all choices.",
      items: cliState.recentInstalls.map((entry) => ({
        id: entry.id,
        label: formatRecentInstall(entry),
        description: entry.command,
      })),
      onBack: goHome,
      onSelect: (item) => {
        const selected = cliState.recentInstalls.find((entry) => entry.id === item.id);
        setInstallDraft({
          tool: selected.tool || "",
          targetLabel: selected.targetLabel || (selected.tool ? selected.tool : "Custom path"),
          targetPath: selected.targetPath || "",
          targetKind:
            selected.targetKind ||
            (selected.tool
              ? listKnownInstallTargets(cliState.customInstallTargets || []).some(
                  (target) => target.id === selected.tool && target.source === "custom",
                )
                ? "custom"
                : "builtin"
              : "path"),
          scope: selected.scope || "full",
          skillId: selected.skillId || "",
          bundleId: selected.bundleId || "",
          query: "",
        });
        push({ id: "install-preview" });
      },
    });
  }

  if (currentScreen.id === "install-preset-list") {
    return renderMenu({
      title: "Saved install presets",
      subtitle: "Named install configurations saved locally.",
      items: cliState.installPresets.map((entry) => ({
        id: entry.id,
        label: `${entry.name} • ${formatRecentInstall(entry)}`,
        description: entry.command,
      })),
      onBack: goHome,
      onSelect: (item) => {
        const selected = cliState.installPresets.find((entry) => entry.id === item.id);
        setInstallDraft({
          tool: selected.tool || "",
          targetLabel: selected.targetLabel || (selected.tool ? selected.tool : "Custom path"),
          targetPath: selected.targetPath || "",
          targetKind:
            selected.targetKind ||
            (selected.tool
              ? listKnownInstallTargets(cliState.customInstallTargets || []).some(
                  (target) => target.id === selected.tool && target.source === "custom",
                )
                ? "custom"
                : "builtin"
              : "path"),
          scope: selected.scope || "full",
          skillId: selected.skillId || "",
          bundleId: selected.bundleId || "",
          query: "",
        });
        push({ id: "install-preview" });
      },
    });
  }

  if (currentScreen.id === "recent-service-list") {
    return renderMenu({
      title: "Recent services",
      subtitle: "Repeat a service launch with the same configuration.",
      items: cliState.recentServices.map((entry) => ({
        id: entry.id,
        label: formatRecentService(entry),
        description: entry.command,
      })),
      onBack: goHome,
      onSelect: (item) => {
        const selected = cliState.recentServices.find((entry) => entry.id === item.id);
        setServiceDraft({
          ...emptyServiceDraft(),
          service: selected.service,
          transport: selected.transport || "stream",
          localMode:
            typeof selected.localMode === "boolean"
              ? selected.localMode
              : selected.mode === "local",
          host: selected.host || "127.0.0.1",
          port: selected.port || "",
          url: selected.url || "",
          storeType: selected.storeType || "json",
          storePath: selected.storePath || "",
          executorMode: selected.executorMode || "inline",
          queueEnabled: Boolean(selected.queueEnabled),
          workerPollMs: selected.workerPollMs || "250",
          leaseMs: selected.leaseMs || "4000",
          baseUrl: selected.baseUrl || "",
          configTarget: selected.targetId || "",
          configFilePath: selected.targetPath || "",
          serverName: selected.serverName || "omni-skills",
          authMode: selected.authMode || "none",
          hardened:
            typeof selected.hardened === "boolean"
              ? selected.hardened
              : selected.mode === "hardened",
          bearerToken: selected.bearerToken || "",
          apiKeys: selected.apiKeys || "",
          rateLimitMax: selected.rateLimitMax || "60",
          rateLimitWindowMs: selected.rateLimitWindowMs || "60000",
          auditLog:
            typeof selected.auditLog === "boolean"
              ? selected.auditLog
              : true,
        });
        push({ id: "service-preview" });
      },
    });
  }

  if (currentScreen.id === "service-preset-list") {
    return renderMenu({
      title: "Saved service presets",
      subtitle: "Named service launch configurations saved locally.",
      items: cliState.servicePresets.map((entry) => ({
        id: entry.id,
        label: `${entry.name} • ${formatRecentService(entry)}`,
        description: entry.command,
      })),
      onBack: goHome,
      onSelect: (item) => {
        const selected = cliState.servicePresets.find((entry) => entry.id === item.id);
        setServiceDraft({
          ...emptyServiceDraft(),
          service: selected.service,
          transport: selected.transport || "stream",
          localMode:
            typeof selected.localMode === "boolean"
              ? selected.localMode
              : selected.mode === "local",
          host: selected.host || "127.0.0.1",
          port: selected.port || "",
          url: selected.url || "",
          storeType: selected.storeType || "json",
          storePath: selected.storePath || "",
          executorMode: selected.executorMode || "inline",
          queueEnabled: Boolean(selected.queueEnabled),
          workerPollMs: selected.workerPollMs || "250",
          leaseMs: selected.leaseMs || "4000",
          baseUrl: selected.baseUrl || "",
          configTarget: selected.targetId || "",
          configFilePath: selected.targetPath || "",
          serverName: selected.serverName || "omni-skills",
          authMode: selected.authMode || "none",
          hardened:
            typeof selected.hardened === "boolean"
              ? selected.hardened
              : selected.mode === "hardened",
          bearerToken: selected.bearerToken || "",
          apiKeys: selected.apiKeys || "",
          rateLimitMax: selected.rateLimitMax || "60",
          rateLimitWindowMs: selected.rateLimitWindowMs || "60000",
          auditLog:
            typeof selected.auditLog === "boolean"
              ? selected.auditLog
              : true,
        });
        push({ id: "service-preview" });
      },
    });
  }

  if (currentScreen.id === "install-target") {
    const installTargets = listKnownInstallTargets(cliState.customInstallTargets || []);
    const items = [
      ...installTargets.map((target) => ({
        id: target.id,
        label: target.name,
        description: target.resolvedPath,
      })),
      {
        id: "custom-path",
        label: "Custom path",
        description: "Install into any absolute or ~-prefixed directory you choose.",
      },
      {
        id: "register-custom-target",
        label: "Register custom target",
        description: "Save a reusable CLI or IDE skills directory for future installs.",
      },
    ];

    return renderMenu({
      title: "Choose an install destination",
      subtitle: "The guided flow no longer assumes Antigravity in interactive mode.",
      items,
      onBack: goHome,
      onSelect: (item) => {
        if (item.id === "custom-path") {
          push({ id: "install-custom-path" });
          return;
        }
        if (item.id === "register-custom-target") {
          setCustomTargetDraft({ name: "", path: "" });
          push({ id: "install-custom-target-name" });
          return;
        }
        const target = installTargets.find((candidate) => candidate.id === item.id);
        setInstallDraft((current) => ({
          ...current,
          tool: target.id,
          targetLabel: target.name,
          targetPath: target.resolvedPath,
          targetKind: target.source === "custom" ? "custom" : "builtin",
        }));
        if (installDraft.scope === "search") {
          push({ id: "install-search-query" });
          return;
        }
        push({ id: "install-scope" });
      },
    });
  }

  if (currentScreen.id === "install-custom-target-name") {
    return renderPrompt({
      title: "Register a custom install target",
      subtitle: "Name the CLI or IDE so it shows up in future install flows.",
      label: "Target name",
      initialValue: customTargetDraft.name || "",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a target name." : ""),
      onSubmit: (value) => {
        setCustomTargetDraft((current) => ({ ...current, name: String(value || "").trim() }));
        push({ id: "install-custom-target-path" });
      },
      placeholder: "Team CLI",
    });
  }

  if (currentScreen.id === "install-custom-target-path") {
    return renderPrompt({
      title: "Choose the custom skills directory",
      subtitle: "Use a dedicated directory for any CLI or IDE that supports SKILL.md playbooks.",
      label: "Target path",
      initialValue: customTargetDraft.path || "",
      onBack: pop,
      validate: (value) => (!resolveCustomPath(value) ? "Please enter a non-empty path." : ""),
      onSubmit: (value) => {
        const resolvedPath = resolveCustomPath(value);
        const nextState = saveState((current) =>
          upsertCustomInstallTarget(current, {
            name: customTargetDraft.name,
            path: resolvedPath,
          }),
        );
        const savedTarget = listKnownInstallTargets(nextState.customInstallTargets || []).find(
          (target) => target.source === "custom" && target.resolvedPath === resolvedPath,
        );
        if (!savedTarget) {
          setFlash("Custom install target saved.");
          goHome();
          return;
        }
        setInstallDraft((current) => ({
          ...current,
          tool: savedTarget.id,
          targetLabel: savedTarget.name,
          targetPath: savedTarget.resolvedPath,
          targetKind: "custom",
        }));
        setFlash(`Custom install target saved: ${savedTarget.name}`);
        logActivity(`Saved custom install target • ${savedTarget.name}`, "success");
        if (installDraft.scope === "search") {
          setStack([{ id: "home" }, { id: "install-target" }, { id: "install-search-query" }]);
          return;
        }
        setStack([{ id: "home" }, { id: "install-target" }, { id: "install-scope" }]);
      },
      placeholder: "~/.team-cli/skills",
    });
  }

  if (currentScreen.id === "install-custom-path") {
    return renderPrompt({
      title: "Choose a custom install path",
      subtitle: "The resolved absolute path will be shown in preview before anything is written.",
      label: "Custom path",
      initialValue: installDraft.targetPath || "",
      onBack: pop,
      validate: (value) => (!resolveCustomPath(value) ? "Please enter a non-empty path." : ""),
      onSubmit: (value) => {
        const resolved = resolveCustomPath(value);
        setInstallDraft((current) => ({
          ...current,
          tool: "",
          targetLabel: "Custom path",
          targetPath: resolved,
          targetKind: "path",
        }));
        if (installDraft.scope === "search") {
          push({ id: "install-search-query" });
          return;
        }
        push({ id: "install-scope" });
      },
      placeholder: "~/my-skills",
    });
  }

  if (currentScreen.id === "install-scope") {
    return renderMenu({
      title: "Choose the install scope",
      subtitle: "Install everything, pick a skill, pick a bundle, or search the catalog first.",
      items: [
        { id: "full", label: "Full library install", description: "Install every published skill." },
        { id: "skill", label: "One published skill", description: "Install one specific skill." },
        { id: "bundle", label: "One curated bundle", description: "Install a published bundle." },
        { id: "search", label: "Search then install", description: "Query the catalog, then install the chosen result." },
      ],
      onBack: pop,
      onSelect: (item) => {
        setInstallDraft((current) => ({ ...current, scope: item.id }));
        if (item.id === "full") {
          push({ id: "install-preview" });
          return;
        }
        if (item.id === "skill") {
          push({ id: "install-skill" });
          return;
        }
        if (item.id === "bundle") {
          push({ id: "install-bundle" });
          return;
        }
        push({ id: "install-search-query" });
      },
    });
  }

  if (currentScreen.id === "install-skill") {
    const skills = [...skillList].sort((left, right) =>
      String(left.display_name || left.id).localeCompare(String(right.display_name || right.id)),
    );
    return renderMenu({
      title: "Choose a skill",
      subtitle: "Published skills include quality, best-practices, and security scores.",
      items: skills.map((skill) => ({
        id: skill.id,
        label: `${skill.display_name || skill.id} • Q${skill.quality_score} • BP${skill.best_practices_score} • S${skill.security_score}`,
        description: skill.description,
      })),
      onBack: pop,
      onSelect: (item) => {
        setInstallDraft((current) => ({ ...current, skillId: item.id, bundleId: "" }));
        push({ id: "install-preview" });
      },
    });
  }

  if (currentScreen.id === "install-bundle") {
    const sortedBundles = [...bundleList].sort((left, right) => left.id.localeCompare(right.id));
    return renderMenu({
      title: "Choose a bundle",
      subtitle: "Only fully published starter bundles are listed here.",
      items: sortedBundles.map((bundle) => ({
        id: bundle.id,
        label: `${bundle.name} • ${bundle.availability.available}/${bundle.availability.total}`,
        description: bundle.description,
      })),
      onBack: pop,
      onSelect: (item) => {
        setInstallDraft((current) => ({ ...current, bundleId: item.id, skillId: "" }));
        push({ id: "install-preview" });
      },
    });
  }

  if (currentScreen.id === "install-search-query") {
    return renderPrompt({
      title: "Search the catalog",
      subtitle: "Search published skills and bundles, then choose what to install.",
      label: "Search query",
      initialValue: installDraft.query || "",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a search query." : ""),
      onSubmit: (value) => {
        setInstallDraft((current) => ({ ...current, query: String(value || "").trim() }));
        push({ id: "install-search-results" });
      },
      placeholder: "figma, api, security, devops...",
    });
  }

  if (currentScreen.id === "install-search-results") {
    const searchResults = searchCatalog(installDraft.query, 10).results || [];
    const bundleResults = searchBundleMatches(bundleList, installDraft.query).slice(0, 5);
    const items = [
      ...searchResults.map((skill) => ({
        id: `skill:${skill.id}`,
        label: `${skill.display_name || skill.id} • Q${skill.quality_score} • S${skill.security_score}`,
        description: skill.description,
      })),
      ...bundleResults.map((bundle) => ({
        id: `bundle:${bundle.id}`,
        label: `${bundle.name} • ${bundle.availability.available}/${bundle.availability.total}`,
        description: bundle.description,
      })),
    ];

    if (items.length === 0) {
      return renderMenu({
        title: "No catalog matches",
        subtitle: `Nothing published matched '${installDraft.query}'.`,
        items: [
          {
            id: "retry",
            label: "Back to search",
            description: "Try broader terms or a different wording.",
          },
          {
            id: "home",
            label: "Return home",
            description: "Cancel the current install flow.",
          },
        ],
        onBack: pop,
        onSelect: (item) => {
          if (item.id === "retry") {
            pop();
            return;
          }
          goHome();
        },
      });
    }

    return renderMenu({
      title: `Choose a match for '${installDraft.query}'`,
      subtitle: "The visual shell can install either a matching skill or a matching bundle.",
      footer: screenFooter("Enter confirms the highlighted match", `Search backend ${searchModeLabel}`),
      items,
      onBack: pop,
      onSelect: (item) => {
        if (item.id.startsWith("skill:")) {
          setInstallDraft((current) => ({
            ...current,
            scope: "search",
            skillId: item.id.slice("skill:".length),
            bundleId: "",
          }));
        } else {
          setInstallDraft((current) => ({
            ...current,
            scope: "search",
            bundleId: item.id.slice("bundle:".length),
            skillId: "",
          }));
        }
        push({ id: "install-preview" });
      },
    });
  }

    if (currentScreen.id === "install-preview") {
    const preview = buildInstallPreviewAction();
    const previewItems = [
      {
        id: "run",
        label: "Run install now",
        description: "Exit the visual shell and execute the installer backend.",
      },
      {
        id: "save-preset",
        label: "Save install preset",
        description: "Store this configuration for future one-step runs.",
      },
      ...(preview.skill
        ? [
            {
              id: "toggle-favorite-skill",
              label: cliState.favorites.skills.includes(preview.skill.id)
                ? "Remove favorite skill"
                : "Favorite this skill",
              description: preview.skill.id,
            },
          ]
        : []),
      ...(preview.bundle
        ? [
            {
              id: "toggle-favorite-bundle",
              label: cliState.favorites.bundles.includes(preview.bundle.id)
                ? "Remove favorite bundle"
                : "Favorite this bundle",
              description: preview.bundle.id,
            },
          ]
        : []),
      {
        id: "back",
        label: "Back",
        description: "Return to the previous step without losing the draft.",
      },
      {
        id: "cancel",
        label: "Cancel",
        description: "Return to the home screen.",
      },
    ];

    return h(
      Screen,
      {
        title: "Install preview",
        subtitle: "Every write flow shows the resolved destination and command before execution.",
        status: flash,
        footer: screenFooter("↑/↓ move", "Enter select • Esc back • Ctrl+C exit"),
        ...viewProps,
      },
      h(SplitLayout, {
        ...viewProps,
        sidebar: h(
          Box,
          { flexDirection: "column" },
          h(SummaryPanel, { lines: preview.previewLines, theme, title: "Install plan" }),
          h(StepRail, {
            title: "Install flow",
            theme,
            steps: [
              { id: "target", label: "Choose destination", status: "completed" },
              { id: "scope", label: "Choose scope", status: "completed" },
              { id: "selection", label: "Select skill or bundle", status: "completed" },
              { id: "preview", label: "Review command", status: "current" },
              { id: "execute", label: "Run installer", status: "pending" },
            ],
            currentId: "preview",
          }),
          h(ProgressPanel, {
            title: "Handoff readiness",
            theme,
            screenReaderEnabled,
            progress: {
              label: "Install preview ready",
              completed: 4,
              total: 5,
              detail: preview.skill
                ? `Selected skill ${preview.skill.id}`
                : preview.bundle
                  ? `Selected bundle ${preview.bundle.id}`
                  : "Full library install",
              nextStep: "Confirm the action menu to run the installer backend",
            },
          }),
        ),
        detail: h(
          Box,
          { flexDirection: "column" },
          h(
            Panel,
            { title: "Actions", theme, tone: "primary" },
            h(SelectMenu, {
              items: previewItems,
              onBack: pop,
              onSelect: (item) => {
                if (item.id === "run") {
                  launchActionPreview(preview, saveState, exitWithAction, logActivity);
                  return;
                }
                if (item.id === "save-preset") {
                  push({ id: "install-save-preset" });
                  return;
                }
                if (item.id === "toggle-favorite-skill") {
                  persistFavoriteSkill(preview.skill.id);
                  const message = cliState.favorites.skills.includes(preview.skill.id)
                    ? `Removed ${preview.skill.id} from favorites.`
                    : `Added ${preview.skill.id} to favorites.`;
                  setFlash(message);
                  logActivity(message, "info");
                  return;
                }
                if (item.id === "toggle-favorite-bundle") {
                  persistFavoriteBundle(preview.bundle.id);
                  const message = cliState.favorites.bundles.includes(preview.bundle.id)
                    ? `Removed ${preview.bundle.id} from favorites.`
                    : `Added ${preview.bundle.id} to favorites.`;
                  setFlash(message);
                  logActivity(message, "info");
                  return;
                }
                if (item.id === "back") {
                  pop();
                  return;
                }
                goHome();
              },
              theme,
              footerNote: "Run, save preset, or toggle favorite",
            }),
          ),
          h(ActivityFeed, {
            items: activityItems,
            theme,
            title: "Recent session events",
            emptyText: "This preview has not emitted session events yet.",
          }),
        ),
      }),
    );
  }

  if (currentScreen.id === "install-save-preset") {
    const preview = buildInstallPreviewAction();
    return renderPrompt({
      title: "Save install preset",
      subtitle: "Give this install configuration a reusable name.",
      label: "Preset name",
      initialValue:
        preview.skill?.id ||
        preview.bundle?.id ||
        `${installDraft.targetLabel || "custom"}-${installDraft.scope || "full"}`,
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a preset name." : ""),
      onSubmit: (value) => {
        saveState((current) => saveInstallPreset(current, value, preview.record));
        setFlash(`Saved install preset '${String(value).trim()}'.`);
        pop();
      },
    });
  }

  if (currentScreen.id === "service-kind") {
    return renderMenu({
      title: "Choose a service",
      subtitle: "The same visual shell can launch services or write MCP client configs.",
      items: [
        { id: "mcp", label: "MCP", description: "Start stdio, stream, or SSE in read-only or local mode." },
        { id: "mcp-config", label: "Configure MCP client", description: "Generate and optionally write client-specific MCP config files." },
        { id: "api", label: "Catalog API", description: "Start the read-only HTTP API with optional hardening." },
        { id: "a2a", label: "A2A", description: "Start the task runtime with store and executor options." },
      ],
      onBack: goHome,
      onSelect: (item) => {
        setServiceDraft((current) => ({
          ...emptyServiceDraft(),
          service: item.id,
          port: item.id === "api" ? "3333" : item.id === "a2a" ? "3335" : "3334",
        }));
        if (item.id === "mcp") {
          push({ id: "mcp-transport" });
          return;
        }
        if (item.id === "mcp-config") {
          push({ id: "config-target" });
          return;
        }
        if (item.id === "api") {
          push({ id: "api-host" });
          return;
        }
        push({ id: "a2a-host" });
      },
    });
  }

  if (currentScreen.id === "config-target") {
    return renderMenu({
      title: "Choose an MCP client target",
      subtitle: "Pick a supported config target or point at an explicit file path.",
      items: [
        ...configTargetList.map((target) => ({
          id: target.id,
          label: `${target.name} • ${target.config_profile}`,
          description: target.path,
        })),
        {
          id: "custom-file",
          label: "Custom file path",
          description: "Write the generated config into a file path inside the local allowlist.",
        },
      ],
      onBack: pop,
      onSelect: (item) => {
        if (item.id === "custom-file") {
          push({ id: "config-file-path" });
          return;
        }
        setServiceDraft((current) => ({
          ...current,
          configTarget: item.id,
          configFilePath: "",
          serverName: current.serverName || "omni-skills",
        }));
        push({ id: "config-transport" });
      },
    });
  }

  if (currentScreen.id === "config-file-path") {
    return renderPrompt({
      title: "Choose a custom MCP config file",
      subtitle: "Use an allowlisted path such as a workspace config file or a user-scoped settings file.",
      label: "Config file path",
      initialValue: serviceDraft.configFilePath || "",
      onBack: pop,
      validate: (value) => (!resolveCustomPath(value) ? "Please enter a non-empty config file path." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({
          ...current,
          configTarget: "",
          configFilePath: resolveCustomPath(value),
          serverName: current.serverName || "omni-skills",
        }));
        push({ id: "config-transport" });
      },
      placeholder: "~/.config/example/mcp.json",
    });
  }

  if (currentScreen.id === "config-transport") {
    return renderMenu({
      title: "Choose MCP transport",
      subtitle: "Use stdio for local process launch or network transports for hosted endpoints.",
      items: [
        { id: "stdio", label: "stdio", description: "Launch the Awesome Omni Skills MCP server as a local process." },
        { id: "stream", label: "stream", description: "Use a streamable HTTP endpoint at /mcp." },
        { id: "sse", label: "sse", description: "Use an SSE endpoint at /sse." },
      ],
      onBack: pop,
      onSelect: (item) => {
        setServiceDraft((current) => ({
          ...current,
          transport: item.id,
          url: item.id === "stdio" ? "" : current.url || defaultMcpConfigUrl(item.id),
        }));
        if (item.id === "stdio") {
          push({ id: "service-preview" });
          return;
        }
        push({ id: "config-url" });
      },
    });
  }

  if (currentScreen.id === "config-url") {
    return renderPrompt({
      title: "Choose MCP endpoint URL",
      subtitle: "Preview uses this URL exactly, so paste the final local or hosted endpoint.",
      label: "MCP URL",
      initialValue: serviceDraft.url || defaultMcpConfigUrl(serviceDraft.transport || "stream"),
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter an MCP endpoint URL." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, url: String(value).trim() }));
        push({ id: "service-preview" });
      },
      placeholder: defaultMcpConfigUrl(serviceDraft.transport || "stream"),
    });
  }

  if (currentScreen.id === "mcp-transport") {
    return renderMenu({
      title: "Choose MCP transport",
      subtitle: "The server supports stdio, streamable HTTP, and SSE.",
      items: [
        { id: "stdio", label: "stdio", description: "Pipe-based transport for local agent wiring." },
        { id: "stream", label: "stream", description: "Streamable HTTP transport." },
        { id: "sse", label: "sse", description: "Server-Sent Events transport." },
      ],
      onBack: pop,
      onSelect: (item) => {
        setServiceDraft((current) => ({ ...current, transport: item.id }));
        push({ id: "mcp-mode" });
      },
    });
  }

  if (currentScreen.id === "mcp-mode") {
    return renderMenu({
      title: "Choose MCP mode",
      subtitle: "Local mode exposes install and config tools. Read-only mode only serves discovery.",
      items: [
        { id: "local", label: "Local sidecar", description: "Filesystem-aware install, remove, and config tools." },
        { id: "readonly", label: "Read-only", description: "Discovery, compare, recommend, and install preview only." },
      ],
      onBack: pop,
      onSelect: (item) => {
        setServiceDraft((current) => ({ ...current, localMode: item.id === "local" }));
        if (serviceDraft.transport === "stdio") {
          push({ id: "service-preview" });
          return;
        }
        push({ id: "mcp-host" });
      },
    });
  }

  if (currentScreen.id === "mcp-host") {
    return renderPrompt({
      title: "Choose MCP host",
      subtitle: "Only needed for stream and SSE transports.",
      label: "Host",
      initialValue: serviceDraft.host || "127.0.0.1",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a host." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, host: String(value).trim() }));
        push({ id: "mcp-port" });
      },
    });
  }

  if (currentScreen.id === "mcp-port") {
    return renderPrompt({
      title: "Choose MCP port",
      subtitle: "The selected transport will bind here.",
      label: "Port",
      initialValue: serviceDraft.port || "3334",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a port." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, port: String(value).trim() }));
        push({ id: "service-preview" });
      },
    });
  }

  if (currentScreen.id === "api-host") {
    return renderPrompt({
      title: "Choose API host",
      subtitle: "Use 127.0.0.1 for local-only access or 0.0.0.0 for external binding.",
      label: "Host",
      initialValue: serviceDraft.host || "127.0.0.1",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a host." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, host: String(value).trim() }));
        push({ id: "api-port" });
      },
    });
  }

  if (currentScreen.id === "api-port") {
    return renderPrompt({
      title: "Choose API port",
      subtitle: "The catalog API defaults to 3333.",
      label: "Port",
      initialValue: serviceDraft.port || "3333",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a port." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, port: String(value).trim() }));
        push({ id: "api-security-profile" });
      },
    });
  }

  if (currentScreen.id === "api-security-profile") {
    return renderMenu({
      title: "Choose API security profile",
      subtitle: "Basic keeps local defaults. Hardened enables auth and rate limiting.",
      items: [
        { id: "basic", label: "Basic", description: "No auth, no explicit rate limit overrides." },
        { id: "hardened-bearer", label: "Hardened with bearer token", description: "Bearer auth + rate limiting + audit log." },
        { id: "hardened-api-key", label: "Hardened with API keys", description: "Header API keys + rate limiting + audit log." },
      ],
      onBack: pop,
      onSelect: (item) => {
          if (item.id === "basic") {
            setServiceDraft((current) => ({
              ...current,
              authMode: "none",
              hardened: false,
              bearerToken: "",
              apiKeys: "",
            }));
          push({ id: "service-preview" });
          return;
        }
        setServiceDraft((current) => ({
          ...current,
          hardened: true,
          authMode: item.id === "hardened-bearer" ? "bearer" : "api-key",
        }));
        push({ id: item.id === "hardened-bearer" ? "api-bearer-token" : "api-api-keys" });
      },
    });
  }

  if (currentScreen.id === "api-bearer-token") {
    return renderPrompt({
      title: "Set bearer token",
      subtitle: "The token is only persisted locally if you save this service as a preset.",
      label: "Bearer token",
      initialValue: serviceDraft.bearerToken || "",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a token." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, bearerToken: String(value).trim() }));
        push({ id: "api-rate-limit-max" });
      },
    });
  }

  if (currentScreen.id === "api-api-keys") {
    return renderPrompt({
      title: "Set API keys",
      subtitle: "Provide a comma-separated list of API keys.",
      label: "API keys",
      initialValue: serviceDraft.apiKeys || "",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter one or more API keys." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, apiKeys: String(value).trim() }));
        push({ id: "api-rate-limit-max" });
      },
    });
  }

  if (currentScreen.id === "api-rate-limit-max") {
    return renderPrompt({
      title: "Set rate limit max",
      subtitle: "Maximum requests per window for the hosted API profile.",
      label: "Rate limit max",
      initialValue: serviceDraft.rateLimitMax || "60",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a rate limit value." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, rateLimitMax: String(value).trim() }));
        push({ id: "api-rate-limit-window" });
      },
    });
  }

  if (currentScreen.id === "api-rate-limit-window") {
    return renderPrompt({
      title: "Set rate limit window",
      subtitle: "Window length in milliseconds for the hosted API profile.",
      label: "Window ms",
      initialValue: serviceDraft.rateLimitWindowMs || "60000",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a window in milliseconds." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, rateLimitWindowMs: String(value).trim(), auditLog: true }));
        push({ id: "service-preview" });
      },
    });
  }

  if (currentScreen.id === "a2a-host") {
    return renderPrompt({
      title: "Choose A2A host",
      subtitle: "The A2A runtime defaults to 127.0.0.1.",
      label: "Host",
      initialValue: serviceDraft.host || "127.0.0.1",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a host." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, host: String(value).trim() }));
        push({ id: "a2a-port" });
      },
    });
  }

  if (currentScreen.id === "a2a-port") {
    return renderPrompt({
      title: "Choose A2A port",
      subtitle: "The A2A runtime defaults to 3335.",
      label: "Port",
      initialValue: serviceDraft.port || "3335",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a port." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, port: String(value).trim() }));
        push({ id: "a2a-store-type" });
      },
    });
  }

  if (currentScreen.id === "a2a-store-type") {
    return renderMenu({
      title: "Choose A2A persistence",
      subtitle: "Memory is simplest. JSON and SQLite support resume. SQLite lease coordination is optional advanced mode.",
      items: [
        { id: "memory", label: "memory", description: "No persistence between restarts." },
        { id: "json", label: "json", description: "File-backed task persistence." },
        { id: "sqlite", label: "sqlite", description: "Durable store with optional shared lease queue support." },
      ],
      onBack: pop,
      onSelect: (item) => {
        setServiceDraft((current) => ({ ...current, storeType: item.id }));
        if (item.id === "memory") {
          push({ id: "a2a-executor" });
          return;
        }
        push({ id: "a2a-store-path" });
      },
    });
  }

  if (currentScreen.id === "a2a-store-path") {
    return renderPrompt({
      title: "Choose A2A store path",
      subtitle: "Pick a durable JSON or SQLite file location.",
      label: "Store path",
      initialValue:
        serviceDraft.storePath ||
        (serviceDraft.storeType === "sqlite"
          ? path.join(os.homedir(), ".omni-skills", "state", "a2a-tasks.sqlite")
          : path.join(os.homedir(), ".omni-skills", "state", "a2a-tasks.json")),
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a store path." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, storePath: resolveCustomPath(value) || String(value).trim() }));
        push({ id: "a2a-executor" });
      },
    });
  }

  if (currentScreen.id === "a2a-executor") {
    return renderMenu({
      title: "Choose A2A executor",
      subtitle: "Inline is the simple default. Process mode is optional when you want an external worker.",
      items: [
        { id: "inline", label: "inline", description: "Execute tasks in-process." },
        { id: "process", label: "process", description: "Use the external worker process executor." },
      ],
      onBack: pop,
      onSelect: (item) => {
        setServiceDraft((current) => ({ ...current, executorMode: item.id }));
        if (serviceDraft.storeType === "sqlite") {
          push({ id: "a2a-queue-mode" });
          return;
        }
        push({ id: "service-preview" });
      },
    });
  }

  if (currentScreen.id === "a2a-queue-mode") {
    return renderMenu({
      title: "Choose queue mode",
      subtitle: "Shared leases are optional. Leave them off unless you want multi-worker failover.",
      items: [
        { id: "lease-disabled", label: "Keep queue disabled", description: "Simple-first mode with SQLite persistence only." },
        { id: "lease-enabled", label: "Enable shared lease queue", description: "Advanced mode for multi-worker runtime." },
      ],
      onBack: pop,
      onSelect: (item) => {
        setServiceDraft((current) => ({ ...current, queueEnabled: item.id === "lease-enabled" }));
        if (item.id === "lease-enabled") {
          push({ id: "a2a-worker-poll" });
          return;
        }
        push({ id: "service-preview" });
      },
    });
  }

  if (currentScreen.id === "a2a-worker-poll") {
    return renderPrompt({
      title: "Set queue poll interval",
      subtitle: "Polling cadence in milliseconds for SQLite lease workers.",
      label: "Worker poll ms",
      initialValue: serviceDraft.workerPollMs || "250",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a poll interval." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, workerPollMs: String(value).trim() }));
        push({ id: "a2a-lease-ms" });
      },
    });
  }

  if (currentScreen.id === "a2a-lease-ms") {
    return renderPrompt({
      title: "Set lease duration",
      subtitle: "Task lease duration in milliseconds before another worker may reclaim work.",
      label: "Lease ms",
      initialValue: serviceDraft.leaseMs || "4000",
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a lease duration." : ""),
      onSubmit: (value) => {
        setServiceDraft((current) => ({ ...current, leaseMs: String(value).trim() }));
        push({ id: "service-preview" });
      },
    });
  }

  if (currentScreen.id === "service-preview") {
    const preview = buildServicePreviewAction();
    const runLabel = serviceDraft.service === "mcp-config" ? "Write config now" : "Run service now";
    const runDescription =
      serviceDraft.service === "mcp-config"
        ? "Exit the visual shell and write the generated MCP client config."
        : "Exit the visual shell and start the selected service.";
    return h(
      Screen,
      {
        title: serviceDraft.service === "mcp-config" ? "Config preview" : "Service preview",
        subtitle:
          serviceDraft.service === "mcp-config"
            ? "The visual hub renders the exact config text and write command before touching the client file."
            : "The visual hub renders the exact command and environment-derived behavior before handoff.",
        status: flash,
        footer: screenFooter("↑/↓ move", "Enter select • Esc back • Ctrl+C exit"),
        ...viewProps,
      },
      h(SplitLayout, {
        ...viewProps,
        sidebar: h(
          Box,
          { flexDirection: "column" },
          h(SummaryPanel, { lines: preview.previewLines, theme, title: serviceDraft.service === "mcp-config" ? "Config plan" : "Runtime plan" }),
          preview.previewText
            ? h(TextPreviewPanel, {
                title: serviceDraft.service === "mcp-config" ? "Config text" : "Generated preview",
                text: preview.previewText,
                color: "greenBright",
                theme,
              })
            : null,
          Array.isArray(preview.previewNotes) && preview.previewNotes.length > 0
            ? h(TextPreviewPanel, {
                title: "Operational notes",
                text: preview.previewNotes.join("\n"),
                color: "gray",
                maxLines: 14,
                theme,
              })
            : null,
          h(StepRail, {
            title: "Runtime flow",
            theme,
            steps: [
              { id: "family", label: "Choose service family", status: "completed" },
              { id: "config", label: "Capture runtime options", status: "completed" },
              { id: "preview", label: "Review command and consequences", status: "current" },
              { id: "execute", label: serviceDraft.service === "mcp-config" ? "Write config" : "Launch runtime", status: "pending" },
            ],
            currentId: "preview",
          }),
        ),
        detail: h(
          Box,
          { flexDirection: "column" },
          h(ProgressPanel, {
            title: "Runtime readiness",
            theme,
            screenReaderEnabled,
            progress: {
              label: preview.invalid ? "Fix the draft before continuing" : "Preview ready",
              completed: preview.invalid ? 2 : 3,
              total: 4,
              detail: serviceDraft.service === "mcp-config" ? "Client config preview prepared" : `Prepared ${serviceDraft.service} launch`,
              nextStep: preview.invalid ? "Go back and repair the draft" : runLabel,
            },
          }),
          h(
            Panel,
            { title: "Actions", theme, tone: "primary" },
            h(SelectMenu, {
              items: preview.invalid
                ? [
                    {
                      id: "back",
                      label: "Back",
                      description: "Fix the invalid target or transport settings.",
                    },
                    {
                      id: "cancel",
                      label: "Cancel",
                      description: "Return to the home screen.",
                    },
                  ]
                : [
                    {
                      id: "run",
                      label: runLabel,
                      description: runDescription,
                    },
                    {
                      id: "save-preset",
                      label: "Save service preset",
                      description: "Store this launch configuration for future runs.",
                    },
                    {
                      id: "back",
                      label: "Back",
                      description: "Return to the previous step.",
                    },
                    {
                      id: "cancel",
                      label: "Cancel",
                      description: "Return to the home screen.",
                    },
                  ],
              onBack: pop,
              onSelect: (item) => {
                if (item.id === "run") {
                  launchActionPreview(preview, saveState, exitWithAction, logActivity);
                  return;
                }
                if (item.id === "save-preset") {
                  push({ id: "service-save-preset" });
                  return;
                }
                if (item.id === "back") {
                  pop();
                  return;
                }
                goHome();
              },
              theme,
            }),
          ),
          h(ActivityFeed, {
            items: activityItems,
            theme,
            title: "Recent session events",
            emptyText: "No runtime events recorded in this session yet.",
          }),
        ),
      }),
    );
  }

  if (currentScreen.id === "service-save-preset") {
    const preview = buildServicePreviewAction();
    return renderPrompt({
      title: "Save service preset",
      subtitle: "Give this service configuration a reusable name.",
      label: "Preset name",
      initialValue: `${serviceDraft.service || "service"}-${serviceDraft.port || ""}`.replace(/-$/, ""),
      onBack: pop,
      validate: (value) => (!String(value || "").trim() ? "Please enter a preset name." : ""),
      onSubmit: (value) => {
        saveState((current) => saveServicePreset(current, value, buildServicePresetRecord(preview)));
        setFlash(`Saved service preset '${String(value).trim()}'.`);
        pop();
      },
    });
  }

  return h(
    Screen,
    {
      title: "Unknown screen",
      subtitle: "The visual shell lost track of the current view.",
      footer: screenFooter("Esc home", "Ctrl+C exit"),
    },
    h(
      Panel,
      { title: "Recovery" },
      h(Text, { color: "white" }, "Press Ctrl+C to exit and reopen the visual shell."),
    ),
  );
}

async function runCommand(script, args = [], env = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [script, ...args], {
      cwd: ROOT,
      env: {
        ...process.env,
        ...env,
      },
      stdio: "inherit",
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`Command exited with status ${code ?? 1}.`));
    });
  });
}

async function loadRuntime() {
  const sidecar = await import(pathToFileURL(LOCAL_SIDECAR).href);
  const runtime = createCatalogRuntime({ repoRoot: ROOT });
  return {
    core: runtime.core,
    sidecar,
    catalog: runtime.catalog,
    bundles: runtime.bundles,
    searchAdapter: runtime.searchAdapter,
    searchModeLabel: runtime.searchModeLabel,
    close: () => runtime.close(),
  };
}

async function main() {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    throw new Error("The visual UI requires an interactive TTY. Use 'omni-skills ui --text' or direct CLI commands in non-interactive environments.");
  }

  const runtime = await loadRuntime();
  let persistedState = loadCliState();
  let handoff = null;

  const instance = render(
    h(OmniSkillsUi, {
      catalog: runtime.catalog,
      bundles: runtime.bundles,
      core: runtime.core,
      searchAdapter: runtime.searchAdapter,
      searchModeLabel: runtime.searchModeLabel,
      sidecar: runtime.sidecar,
      initialState: persistedState,
      persistState: (nextState) => {
        persistedState = saveCliState(nextState);
        return persistedState;
      },
      onHandoff: (action) => {
        handoff = action;
      },
      statePath: DEFAULT_STATE_PATH,
    }),
    {
      exitOnCtrlC: true,
    },
  );

  await instance.waitUntilExit();

  if (handoff) {
    await runCommand(handoff.script, handoff.args, handoff.env);
  }

  runtime.close?.();
}

function isDirectExecution() {
  if (!process.argv[1]) {
    return false;
  }
  return pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;
}

export { OmniSkillsUi, loadRuntime, main };

if (isDirectExecution()) {
  main().catch((error) => {
    console.error(`\\nUI error: ${error.message}`);
    process.exit(1);
  });
}
