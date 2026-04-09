#!/usr/bin/env node

import os from "node:os";
import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";
import net from "node:net";
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
  upsertActiveService,
  removeActiveService,
  toggleFavoriteSkill,
  toggleFavoriteBundle,
  updateCliPreferences,
} = require("../lib/cli-state.js");

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "..", "..");
const CLI_SCRIPT = path.join(ROOT, "packages", "cli", "src", "bin", "cli.js");
const CATALOG_CORE = path.join(ROOT, "packages", "catalog-core", "src", "index.js");
const LOCAL_SIDECAR = path.join(ROOT, "packages", "server-mcp", "src", "local-sidecar.js");
const MCP_SERVER = path.join(ROOT, "packages", "server-mcp", "src", "server.js");
const API_SERVER = path.join(ROOT, "packages", "server-api", "src", "server.js");
const A2A_SERVER = path.join(ROOT, "packages", "server-a2a", "src", "server.js");

function wait(ms = 250) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

function fetchJson(url, headers = {}, timeoutMs = 1500) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { headers, signal: controller.signal }).then(async (response) => {
    if (!response.ok) {
      throw new Error(`Request to ${url} failed with ${response.status}`);
    }
    return response.json();
  }).catch((error) => {
    if (error?.name === "AbortError") {
      throw new Error(`Request to ${url} timed out after ${timeoutMs}ms`);
    }
    throw error;
  }).finally(() => {
    clearTimeout(timeout);
  });
}

async function waitFor(checker, timeoutMs = 12000, intervalMs = 250) {
  const startedAt = Date.now();
  let lastError;
  while (Date.now() - startedAt < timeoutMs) {
    try {
      return await checker();
    } catch (error) {
      if (error?.fatal) {
        throw error;
      }
      lastError = error;
      await wait(intervalMs);
    }
  }
  throw lastError || new Error("Timed out while waiting for condition.");
}

function safeSlug(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "runtime";
}

function createFatalError(message) {
  const error = new Error(message);
  error.fatal = true;
  return error;
}

function checkPortAvailability(host, port) {
  return new Promise((resolve) => {
    const server = net.createServer();

    const finish = (result) => {
      server.removeAllListeners();
      try {
        server.close();
      } catch (_error) {
        // Best effort cleanup for a temporary probe socket.
      }
      resolve(result);
    };

    server.once("error", (error) => {
      if (error?.code === "EADDRINUSE") {
        finish({ available: false, reason: `Port ${port} on ${host} is already in use.` });
        return;
      }
      finish({ available: false, reason: String(error?.message || error) });
    });

    server.once("listening", () => {
      server.close(() => {
        resolve({ available: true, reason: "" });
      });
    });

    server.listen({ host, port: Number(port), exclusive: true });
  });
}

function runtimeLogsDir() {
  const directory = path.join(os.homedir(), ".omni-skills", "logs");
  fs.mkdirSync(directory, { recursive: true });
  return directory;
}

function readLogTail(filePath, maxLines = 14) {
  if (!filePath || !fs.existsSync(filePath)) {
    return "";
  }
  const lines = String(fs.readFileSync(filePath, "utf8") || "")
    .split("\n")
    .filter(Boolean);
  return lines.slice(-maxLines).join("\n");
}

function isProcessRunning(pid) {
  const numericPid = Number.parseInt(String(pid || ""), 10);
  if (!Number.isInteger(numericPid) || numericPid <= 0) {
    return false;
  }
  try {
    process.kill(numericPid, 0);
    return true;
  } catch (_error) {
    return false;
  }
}

async function terminateProcess(pid) {
  const numericPid = Number.parseInt(String(pid || ""), 10);
  if (!Number.isInteger(numericPid) || numericPid <= 0) {
    return;
  }
  try {
    process.kill(numericPid, "SIGTERM");
  } catch (_error) {
    return;
  }
  try {
    await waitFor(() => {
      if (isProcessRunning(numericPid)) {
        throw new Error("waiting for process exit");
      }
      return true;
    }, 5000, 150);
  } catch (_error) {
    try {
      process.kill(numericPid, "SIGKILL");
    } catch (_killError) {
      return;
    }
  }
}

function isManagedRuntimeService(record) {
  if (!record) {
    return false;
  }
  if (record.service === "api" || record.service === "a2a") {
    return true;
  }
  return record.service === "mcp" && (record.transport === "stream" || record.transport === "sse");
}

function isForegroundStdioService(record) {
  return record?.service === "mcp" && record?.transport === "stdio";
}

function buildManagedServicePlan(preview) {
  const record = preview.record || {};
  const host = record.host || "127.0.0.1";
  const port = record.port || "";

  if (record.service === "api") {
    const baseUrl = `http://${host}:${port || "3333"}`;
    return {
      label: "Catalog API",
      script: API_SERVER,
      args: [],
      env: {
        HOST: host,
        PORT: String(port || "3333"),
        ...(preview.launch?.env || {}),
      },
      healthUrl: `${baseUrl}/healthz`,
      baseUrl,
      primaryUrl: baseUrl,
      docsUrl: `${baseUrl}/docs`,
      adminUrl: `${baseUrl}/admin/runtime`,
      endpointUrls: [
        `${baseUrl}/v1/families`,
        `${baseUrl}/v1/skills`,
        `${baseUrl}/v1/bundles`,
      ],
    };
  }

  if (record.service === "a2a") {
    const resolvedPort = String(port || "3335");
    const baseUrl = record.baseUrl || `http://${host}:${resolvedPort}`;
    return {
      label: "A2A runtime",
      script: A2A_SERVER,
      args: [],
      env: {
        HOST: host,
        PORT: resolvedPort,
        BASE_URL: baseUrl,
        ...(preview.launch?.env || {}),
      },
      healthUrl: `${baseUrl}/healthz`,
      baseUrl,
      primaryUrl: baseUrl,
      endpointUrls: [
        `${baseUrl}/.well-known/agent.json`,
        `${baseUrl}/a2a`,
      ],
    };
  }

  const resolvedPort = String(port || "3334");
  const baseUrl = `http://${host}:${resolvedPort}`;
  const endpointUrl = record.transport === "sse" ? `${baseUrl}/sse` : `${baseUrl}/mcp`;
  return {
    label: `MCP ${String(record.transport || "stream").toUpperCase()}`,
    script: MCP_SERVER,
    args: ["--transport", record.transport || "stream"],
    env: {
      HOST: host,
      PORT: resolvedPort,
      ...(record.mode === "local" ? { OMNI_SKILLS_MCP_MODE: "local" } : {}),
      ...(preview.launch?.env || {}),
    },
    healthUrl: `${baseUrl}/healthz`,
    baseUrl,
    primaryUrl: endpointUrl,
    endpointUrls: [endpointUrl],
    expectedTransport: record.transport || "stream",
  };
}

function spawnDetachedNodeProcess({ script, args = [], env = {}, label = "service" }) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const slug = safeSlug(label);
  const logDir = runtimeLogsDir();
  const stdoutPath = path.join(logDir, `${slug}-${timestamp}.stdout.log`);
  const stderrPath = path.join(logDir, `${slug}-${timestamp}.stderr.log`);
  const stdoutFd = fs.openSync(stdoutPath, "a");
  const stderrFd = fs.openSync(stderrPath, "a");
  const child = spawn(process.execPath, [script, ...args], {
    cwd: ROOT,
    env: {
      ...process.env,
      ...env,
    },
    detached: true,
    stdio: ["ignore", stdoutFd, stderrFd],
  });
  child.unref();
  fs.closeSync(stdoutFd);
  fs.closeSync(stderrFd);
  return {
    pid: child.pid,
    stdoutPath,
    stderrPath,
  };
}

function runCommandCaptured(script, args = [], env = {}, onData) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [script, ...args], {
      cwd: ROOT,
      env: {
        ...process.env,
        ...env,
      },
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      const text = String(chunk || "");
      stdout += text;
      onData?.({ stream: "stdout", chunk: text, stdout, stderr });
    });

    child.stderr.on("data", (chunk) => {
      const text = String(chunk || "");
      stderr += text;
      onData?.({ stream: "stderr", chunk: text, stdout, stderr });
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      resolve({
        code: Number(code ?? 1),
        stdout,
        stderr,
        ok: code === 0,
      });
    });
  });
}

function shouldSkipInlineExecutionForTests() {
  return process.env.OMNI_SKILLS_UI_TEST_MODE === "1";
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
  const [commandRunner, setCommandRunner] = useState(null);
  const [managedServiceView, setManagedServiceView] = useState(null);
  const cliStateRef = useRef(initialState);

  const currentScreen = stack[stack.length - 1];
  const bundleList = useMemo(() => bundles || [], [bundles]);
  const skillList = useMemo(() => [...(catalog.skills || [])], [catalog]);
  const familyList = useMemo(
    () =>
      [...(catalog.families || [])].map((family) => ({
        ...family,
        default_skill: (catalog.skills || []).find((skill) => skill.id === family.default_skill_id) || null,
      })),
    [catalog],
  );
  const bundleMap = useMemo(
    () => new Map(bundleList.map((bundle) => [bundle.id, bundle])),
    [bundleList],
  );
  const skillMap = useMemo(
    () => new Map(skillList.map((skill) => [skill.id, skill])),
    [skillList],
  );
  const familyMap = useMemo(
    () => new Map(familyList.map((family) => [family.id, family])),
    [familyList],
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
      return core.searchFamilies({ query, limit });
    }
    return core.searchFamilies({ query, limit });
  }

  function resolveFamilyToSkill(familyId, variantId = "") {
    const family = familyMap.get(familyId);
    if (!family) {
      return null;
    }
    if (variantId) {
      const variant = (family.variants || []).find((item) => item.variant_id === variantId || item.id === variantId);
      if (variant) {
        return skillMap.get(variant.id) || null;
      }
    }
    return skillMap.get(family.default_skill_id) || null;
  }

  function normalizeSourceType(sourceType) {
    return String(sourceType || "")
      .trim()
      .toLowerCase()
      .replace(/_/g, "-");
  }

  function getVariantPriority(variant) {
    if (variant?.is_default) {
      return 0;
    }
    const sourceType = normalizeSourceType(variant?.source_type);
    if (sourceType === "omni-curated") {
      return 1;
    }
    if (sourceType === "official") {
      return 2;
    }
    if (sourceType === "native") {
      return 3;
    }
    if (sourceType === "community") {
      return 4;
    }
    if (sourceType === "external-import") {
      return 5;
    }
    return 6;
  }

  function getOrderedFamilyVariants(family) {
    return [...(family?.variants || [])].sort(
      (left, right) =>
        getVariantPriority(left) - getVariantPriority(right) ||
        String(left.variant_label || left.id).localeCompare(String(right.variant_label || right.id)),
    );
  }

  function openInstallFamilyVariantPicker(familyId) {
    const family = familyMap.get(familyId);
    if (!family) {
      return;
    }
    if ((family.variants || []).length <= 1) {
      const selectedSkill = resolveFamilyToSkill(familyId);
      if (!selectedSkill) {
        return;
      }
      const nextDraft = {
        ...installDraft,
        scope: installDraft.scope === "search" ? "search" : "skill",
        skillId: selectedSkill.id,
        bundleId: "",
      };
      setInstallDraft(nextDraft);
      pushInstallStepAfterSelection(nextDraft);
      return;
    }
    push({ id: "install-family-variants", familyId });
  }

  useEffect(() => {
    cliStateRef.current = cliState;
  }, [cliState]);

  useEffect(() => {
    const staleServiceIds = (cliState.activeServices || [])
      .filter((entry) => !entry.simulated && entry.pid && !isProcessRunning(entry.pid))
      .map((entry) => entry.id);
    if (!staleServiceIds.length) {
      return;
    }
    saveState((current) => ({
      ...current,
      activeServices: (current.activeServices || []).filter((entry) => !staleServiceIds.includes(entry.id)),
    }));
  }, []);

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

  function mergeInstallDraft(patch) {
    const nextDraft = {
      ...installDraft,
      ...patch,
    };
    setInstallDraft(nextDraft);
    return nextDraft;
  }

  function installDraftHasTarget(draft = installDraft) {
    return Boolean(String(draft?.targetPath || "").trim());
  }

  function installDraftHasSelection(draft = installDraft) {
    return draft?.scope === "full" || Boolean(draft?.skillId || draft?.bundleId);
  }

  function pushInstallStepAfterSelection(draft) {
    if (installDraftHasTarget(draft)) {
      push({ id: "install-preview" });
      return;
    }
    push({ id: "install-target" });
  }

  function pushInstallStepAfterTarget(draft) {
    if (installDraftHasSelection(draft)) {
      push({ id: "install-preview" });
      return;
    }
    if (draft.scope === "search") {
      push({ id: "install-search-query" });
      return;
    }
    push({ id: "install-scope" });
  }

  function collapseToInstallTarget(nextScreen) {
    setStack((current) => {
      const targetIndex = current.findIndex((entry) => entry.id === "install-target");
      const base = targetIndex >= 0 ? current.slice(0, targetIndex + 1) : [{ id: "home" }];
      return nextScreen ? [...base, nextScreen] : base;
    });
    setFlash("");
  }

  function advanceAfterInstallTargetPrompt(draft) {
    if (installDraftHasSelection(draft)) {
      collapseToInstallTarget({ id: "install-preview" });
      return;
    }
    if (draft.scope === "search") {
      collapseToInstallTarget({ id: "install-search-query" });
      return;
    }
    collapseToInstallTarget({ id: "install-scope" });
  }

  function goHome() {
    setStack([{ id: "home" }]);
    setFlash("");
    setProgressState(null);
    setManagedServiceView(null);
  }

  function push(screen) {
    setStack((current) => [...current, screen]);
    setFlash("");
  }

  function pop() {
    setStack((current) => (current.length > 1 ? current.slice(0, -1) : current));
    setFlash("");
  }

  function hydrateManagedService(entry) {
    if (!entry) {
      return null;
    }
    const running = entry.simulated ? true : isProcessRunning(entry.pid);
    return {
      ...entry,
      running,
      healthState: entry.healthState || (running ? "unknown" : "stopped"),
      logTail:
        [readLogTail(entry.stdoutPath, compactMode ? 10 : 14), readLogTail(entry.stderrPath, compactMode ? 6 : 10)]
          .filter(Boolean)
          .join("\n"),
    };
  }

  function openManagedService(entry) {
    const hydrated = hydrateManagedService(entry);
    setManagedServiceView(hydrated);
    setStack([{ id: "home" }, { id: "managed-service-detail", serviceId: hydrated?.id || entry?.id || "" }]);
  }

  function startInstallFlow(initialScope = "") {
    const nextDraft = {
      ...emptyInstallDraft(),
      ...(initialScope ? { scope: initialScope } : {}),
    };
    setInstallDraft(nextDraft);
    setCatalogQuery("");
    updateProgress({
      label: "Install funnel",
      completed: 1,
      total: 5,
      detail: initialScope === "search" ? "Search the catalog first" : "Choose a target destination",
      nextStep: initialScope === "search" ? "Pick a skill family or bundle" : "Choose install target",
    });
    setStack(initialScope === "search" ? [{ id: "home" }, { id: "install-search-query" }] : [{ id: "home" }, { id: "install-target" }]);
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

  async function startInlineCommand({ title, subtitle, commandLabel, args, env = {}, successHint = "", replaceCurrent = false }) {
    const commandText = [process.execPath, CLI_SCRIPT, ...args].join(" ");
    const nextRunner = {
      id: `${Date.now()}-${args.join("-")}`,
      title,
      subtitle,
      commandLabel,
      commandText,
      args,
      env,
      status: "running",
      output: "",
      error: "",
      exitCode: null,
      successHint,
    };
    setCommandRunner(nextRunner);
    if (!replaceCurrent) {
      push({ id: "command-runner" });
    }
    logActivity(`Started ${commandLabel}.`, "info");
    updateProgress({
      label: commandLabel,
      completed: 1,
      total: 2,
      detail: "Running inside the visual shell",
      nextStep: "Review command output",
    });

    if (shouldSkipInlineExecutionForTests()) {
      setCommandRunner((current) =>
        current
          ? {
              ...current,
              status: "completed",
              output: `Simulated ${commandLabel} execution in UI test mode.`,
              exitCode: 0,
            }
          : current,
      );
      setFlash(`${commandLabel} finished.`);
      updateProgress({
        label: commandLabel,
        completed: 2,
        total: 2,
        detail: "Command completed successfully",
        nextStep: "Return to home",
      });
      return;
    }

    const result = await runCommandCaptured(
      CLI_SCRIPT,
      args,
      statePath !== DEFAULT_STATE_PATH ? { ...env, OMNI_SKILLS_STATE_PATH: statePath } : env,
      ({ stdout, stderr }) => {
        setCommandRunner((current) =>
          current
            ? {
                ...current,
                output: `${stdout}${stderr ? `\n${stderr}` : ""}`.trim(),
              }
            : current,
        );
      },
    ).catch((error) => ({
      ok: false,
      code: 1,
      stdout: "",
      stderr: String(error.message || error),
    }));

    setCommandRunner((current) =>
      current
        ? {
            ...current,
            status: result.ok ? "completed" : "failed",
            output: `${result.stdout}${result.stderr ? `\n${result.stderr}` : ""}`.trim(),
            error: result.stderr || "",
            exitCode: result.code,
          }
        : current,
    );
    setFlash(result.ok ? `${commandLabel} finished.` : `${commandLabel} failed with status ${result.code}.`);
    logActivity(result.ok ? `Finished ${commandLabel}.` : `${commandLabel} failed.`, result.ok ? "success" : "warning");
    updateProgress({
      label: commandLabel,
      completed: 2,
      total: 2,
      detail: result.ok ? "Command completed successfully" : `Command exited with status ${result.code}`,
      nextStep: "Return to home or rerun",
    });
  }

  async function launchManagedService(preview) {
    const plan = buildManagedServicePlan(preview);
    const launchLabel = `${plan.label} on ${plan.primaryUrl || plan.baseUrl || preview.record.command}`;
    const targetHost = preview.record.host || "127.0.0.1";
    const targetPort = String(preview.record.port || "");
    logActivity(`Starting ${launchLabel}.`, "info");
    setFlash(`Starting ${plan.label}...`);
    updateProgress({
      label: plan.label,
      completed: 1,
      total: 3,
      detail: "Starting background runtime",
      nextStep: "Wait for readiness and open the control screen",
    });

    if (targetPort) {
      const conflictingRuntime = (cliStateRef.current.activeServices || [])
        .map((entry) => hydrateManagedService(entry))
        .find((entry) =>
          entry?.running &&
          String(entry.host || "127.0.0.1") === targetHost &&
          String(entry.port || "") === targetPort,
        );
      if (conflictingRuntime) {
        const conflictLabel = `${String(conflictingRuntime.service || "service").toUpperCase()} ${String(conflictingRuntime.transport || "").toUpperCase()}`.trim();
        const conflictError = `Port ${targetPort} on ${targetHost} is already used by ${conflictLabel || "another managed runtime"}. Stop it or choose a different port.`;
        setManagedServiceView({
          id: crypto.randomUUID(),
          service: preview.record.service,
          transport: preview.record.transport || "",
          host: targetHost,
          port: targetPort,
          running: false,
          healthState: "failed",
          baseUrl: plan.baseUrl || "",
          primaryUrl: plan.primaryUrl || "",
          healthUrl: plan.healthUrl || "",
          docsUrl: plan.docsUrl || "",
          adminUrl: plan.adminUrl || "",
          endpointUrls: plan.endpointUrls || [],
          stdoutPath: "",
          stderrPath: "",
          logTail: conflictError,
          failureReason: conflictError,
        });
        setStack([{ id: "home" }, { id: "managed-service-detail", serviceId: "" }]);
        setFlash(`Cannot start ${plan.label}.`);
        logActivity(`Failed to start ${launchLabel}.`, "warning");
        updateProgress({
          label: plan.label,
          completed: 2,
          total: 3,
          detail: "Port conflict detected before launch",
          nextStep: "Review the conflict and return home",
        });
        return;
      }
    }

    if (shouldSkipInlineExecutionForTests()) {
      const simulatedEntry = {
        id: crypto.randomUUID(),
        service: preview.record.service,
        transport: preview.record.transport || "",
        host: preview.record.host || "127.0.0.1",
        port: preview.record.port || "",
        mode: preview.record.mode || "",
        pid: null,
        simulated: true,
        created_at: new Date().toISOString(),
        healthState: "ok",
        baseUrl: plan.baseUrl || "",
        primaryUrl: plan.primaryUrl || "",
        healthUrl: plan.healthUrl || "",
        docsUrl: plan.docsUrl || "",
        adminUrl: plan.adminUrl || "",
        endpointUrls: plan.endpointUrls || [],
        stdoutPath: "",
        stderrPath: "",
      };
      saveState((current) => upsertActiveService(recordRecentService(current, preview.record), simulatedEntry));
      onHandoff(preview);
      setFlash(`${plan.label} prepared in UI test mode.`);
      updateProgress({
        label: plan.label,
        completed: 3,
        total: 3,
        detail: "Simulated background runtime prepared",
        nextStep: "Return home or inspect the service card",
      });
      openManagedService(simulatedEntry);
      return;
    }

    if (targetPort) {
      const portCheck = await checkPortAvailability(targetHost, targetPort);
      if (!portCheck.available) {
        setManagedServiceView({
          id: crypto.randomUUID(),
          service: preview.record.service,
          transport: preview.record.transport || "",
          host: targetHost,
          port: targetPort,
          running: false,
          healthState: "failed",
          baseUrl: plan.baseUrl || "",
          primaryUrl: plan.primaryUrl || "",
          healthUrl: plan.healthUrl || "",
          docsUrl: plan.docsUrl || "",
          adminUrl: plan.adminUrl || "",
          endpointUrls: plan.endpointUrls || [],
          stdoutPath: "",
          stderrPath: "",
          logTail: portCheck.reason,
          failureReason: portCheck.reason,
        });
        setStack([{ id: "home" }, { id: "managed-service-detail", serviceId: "" }]);
        setFlash(`Cannot start ${plan.label}.`);
        logActivity(`Failed to start ${launchLabel}.`, "warning");
        updateProgress({
          label: plan.label,
          completed: 2,
          total: 3,
          detail: "Port conflict detected before launch",
          nextStep: "Review the conflict and return home",
        });
        return;
      }
    }

    const launched = spawnDetachedNodeProcess({
      script: plan.script,
      args: plan.args,
      env: plan.env,
      label: `${preview.record.service}-${preview.record.transport || preview.record.port || "runtime"}`,
    });

    try {
      let healthPayload = null;
      if (plan.healthUrl) {
        healthPayload = await waitFor(async () => {
          if (!isProcessRunning(launched.pid)) {
            throw new Error(
              `Process exited before readiness.\n${readLogTail(launched.stderrPath, 12) || readLogTail(launched.stdoutPath, 12)}`,
            );
          }
          const response = await fetchJson(plan.healthUrl);
          if (plan.expectedTransport && response.transport !== plan.expectedTransport) {
            throw createFatalError(
              `Port ${targetPort || "?"} on ${targetHost} responded with transport '${response.transport}' while '${plan.expectedTransport}' was requested. Another MCP runtime is probably already bound to that port.`,
            );
          }
          return response;
        }, 12000, 250);
      }

      const activeEntry = {
        id: crypto.randomUUID(),
        service: preview.record.service,
        transport: preview.record.transport || "",
        host: preview.record.host || "127.0.0.1",
        port: preview.record.port || "",
        mode: preview.record.mode || "",
        pid: launched.pid,
        created_at: new Date().toISOString(),
        healthState: "ok",
        lastHealthAt: new Date().toISOString(),
        lastHealthSummary: healthPayload ? JSON.stringify(healthPayload) : "",
        baseUrl: plan.baseUrl || "",
        primaryUrl: plan.primaryUrl || "",
        healthUrl: plan.healthUrl || "",
        docsUrl: plan.docsUrl || "",
        adminUrl: plan.adminUrl || "",
        endpointUrls: plan.endpointUrls || [],
        stdoutPath: launched.stdoutPath,
        stderrPath: launched.stderrPath,
      };
      saveState((current) => upsertActiveService(recordRecentService(current, preview.record), activeEntry));
      setFlash(`${plan.label} is running.`);
      logActivity(`Started ${launchLabel}.`, "success");
      updateProgress({
        label: plan.label,
        completed: 3,
        total: 3,
        detail: "Background runtime is healthy",
        nextStep: "Inspect URLs or return home",
      });
      openManagedService(activeEntry);
    } catch (error) {
      await terminateProcess(launched.pid);
      setManagedServiceView({
        id: crypto.randomUUID(),
        service: preview.record.service,
        transport: preview.record.transport || "",
        host: preview.record.host || "127.0.0.1",
        port: preview.record.port || "",
        running: false,
        healthState: "failed",
        baseUrl: plan.baseUrl || "",
        primaryUrl: plan.primaryUrl || "",
        healthUrl: plan.healthUrl || "",
        docsUrl: plan.docsUrl || "",
        adminUrl: plan.adminUrl || "",
        endpointUrls: plan.endpointUrls || [],
        stdoutPath: launched.stdoutPath,
        stderrPath: launched.stderrPath,
        logTail:
          [readLogTail(launched.stdoutPath, 10), readLogTail(launched.stderrPath, 10)]
            .filter(Boolean)
            .join("\n") || String(error.message || error),
        failureReason: String(error.message || error),
      });
      setStack([{ id: "home" }, { id: "managed-service-detail", serviceId: "" }]);
      setFlash(`Failed to start ${plan.label}.`);
      logActivity(`Failed to start ${launchLabel}.`, "warning");
      updateProgress({
        label: plan.label,
        completed: 2,
        total: 3,
        detail: "Runtime failed during readiness checks",
        nextStep: "Review logs and return home",
      });
    }
  }

  async function refreshManagedService(serviceId) {
    const currentEntry = (cliStateRef.current.activeServices || []).find((entry) => entry.id === serviceId);
    const hydrated = hydrateManagedService(currentEntry || managedServiceView);
    if (!hydrated) {
      goHome();
      return;
    }
    if (hydrated.simulated) {
      setManagedServiceView({
        ...hydrated,
        healthState: "ok",
        lastHealthAt: new Date().toISOString(),
      });
      setFlash("Simulated service state refreshed.");
      return;
    }
    if (!hydrated.running) {
      setManagedServiceView({
        ...hydrated,
        healthState: "stopped",
      });
      saveState((current) => removeActiveService(current, hydrated.id));
      setFlash("Service is no longer running.");
      return;
    }
    if (!hydrated.healthUrl) {
      setManagedServiceView(hydrated);
      setFlash("This runtime does not expose an HTTP health endpoint.");
      return;
    }
    try {
      const payload = await fetchJson(hydrated.healthUrl);
      const nextEntry = {
        ...hydrated,
        healthState: "ok",
        lastHealthAt: new Date().toISOString(),
        lastHealthSummary: JSON.stringify(payload),
      };
      saveState((current) => upsertActiveService(current, nextEntry));
      setManagedServiceView(hydrateManagedService(nextEntry));
      setFlash("Service health check passed.");
    } catch (error) {
      const nextEntry = {
        ...hydrated,
        healthState: "error",
        lastHealthAt: new Date().toISOString(),
        lastHealthSummary: String(error.message || error),
      };
      saveState((current) => upsertActiveService(current, nextEntry));
      setManagedServiceView(hydrateManagedService(nextEntry));
      setFlash(`Health check failed: ${String(error.message || error)}`);
    }
  }

  async function stopManagedService(serviceId) {
    const currentEntry = (cliStateRef.current.activeServices || []).find((entry) => entry.id === serviceId);
    const hydrated = hydrateManagedService(currentEntry || managedServiceView);
    if (!hydrated) {
      goHome();
      return;
    }
    if (!hydrated.simulated && hydrated.pid) {
      await terminateProcess(hydrated.pid);
    }
    saveState((current) => removeActiveService(current, hydrated.id));
    setManagedServiceView({
      ...hydrated,
      running: false,
      healthState: "stopped",
      lastHealthAt: new Date().toISOString(),
      logTail:
        hydrated.logTail ||
        [readLogTail(hydrated.stdoutPath, 10), readLogTail(hydrated.stderrPath, 10)].filter(Boolean).join("\n"),
    });
    setFlash(`${String(hydrated.service || "service").toUpperCase()} stopped.`);
    logActivity(`Stopped ${hydrated.service}.`, "info");
    updateProgress({
      label: hydrated.service.toUpperCase(),
      completed: 3,
      total: 3,
      detail: "Background runtime stopped",
      nextStep: "Return home",
    });
  }

  function executeActionInline(action) {
    saveState((current) => recordRecentInstall(current, action.record));
    onHandoff(action);
    logActivity(
      `Prepared install • ${action.record.command || action.launch?.args?.join(" ") || "handoff"}`,
      "success",
    );
    if (shouldSkipInlineExecutionForTests()) {
      setFlash("Install command prepared.");
      updateProgress({
        label: "install",
        completed: 2,
        total: 2,
        detail: "Execution skipped in UI test mode",
        nextStep: "Review resolved handoff payload",
      });
      return;
    }
    startInlineCommand({
      title: "Run installer",
      subtitle: "Execute the resolved installer command inside the visual shell.",
      commandLabel: "install",
      args: action.launch?.args || [],
      env: action.launch?.env || {},
    });
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
      const baseUrl =
        serviceDraft.transport === "stdio"
          ? "stdio client session"
          : `http://${serviceDraft.host || "127.0.0.1"}:${serviceDraft.port || "3334"}`;
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
          { label: "Primary", value: serviceDraft.transport === "sse" ? `${baseUrl}/sse` : serviceDraft.transport === "stream" ? `${baseUrl}/mcp` : baseUrl },
          ...(serviceDraft.transport === "stdio" ? [] : [{ label: "Health", value: `${baseUrl}/healthz` }]),
          { label: "Command", value: launch.command, color: "greenBright" },
        ],
      };
    }
    if (serviceDraft.service === "api") {
      const launch = buildApiLaunch(serviceDraft);
      const baseUrl = `http://${serviceDraft.host || "127.0.0.1"}:${serviceDraft.port || "3333"}`;
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
          { label: "Service URL", value: baseUrl },
          { label: "Swagger", value: `${baseUrl}/docs` },
          { label: "Health", value: `${baseUrl}/healthz` },
          { label: "Command", value: launch.command, color: "greenBright" },
        ],
      };
    }
    const launch = buildA2aLaunch(serviceDraft);
    const baseUrl = serviceDraft.baseUrl || `http://${serviceDraft.host || "127.0.0.1"}:${serviceDraft.port || "3335"}`;
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
        { label: "Service URL", value: baseUrl },
        { label: "Agent card", value: `${baseUrl}/.well-known/agent.json` },
        { label: "Health", value: `${baseUrl}/healthz` },
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

  async function runServicePreview(preview) {
    if (preview.invalid) {
      setFlash("Fix the invalid service draft before running it.");
      return;
    }

    if (serviceDraft.service === "mcp-config") {
      saveState((current) => recordRecentService(current, preview.record));
      logActivity(
        `Prepared service • ${preview.record.command || preview.launch?.args?.join(" ") || "handoff"}`,
        "success",
      );
      await startInlineCommand({
        title: "Write MCP client config",
        subtitle: "Write the generated MCP client configuration and review the result inside the visual shell.",
        commandLabel: "config-mcp",
        args: preview.launch?.args || [],
        env: preview.launch?.env || {},
        successHint: "MCP client config written.",
      });
      return;
    }

    if (isForegroundStdioService(preview.record)) {
      saveState((current) => recordRecentService(current, preview.record));
      onHandoff(preview);
      logActivity(
        `Prepared foreground service • ${preview.record.command || preview.launch?.args?.join(" ") || "handoff"}`,
        "success",
      );
      if (shouldSkipInlineExecutionForTests()) {
        setFlash("Foreground MCP stdio launch prepared.");
        updateProgress({
          label: "MCP stdio",
          completed: 2,
          total: 2,
          detail: "Execution skipped in UI test mode",
          nextStep: "Review resolved handoff payload",
        });
        return;
      }
      exitWithAction(preview);
      return;
    }

    if (isManagedRuntimeService(preview.record)) {
      await launchManagedService(preview);
      return;
    }

    saveState((current) => recordRecentService(current, preview.record));
    onHandoff(preview);
    logActivity(
      `Prepared service • ${preview.record.command || preview.launch?.args?.join(" ") || "handoff"}`,
      "success",
    );
    if (shouldSkipInlineExecutionForTests()) {
      setFlash("Service command prepared.");
      updateProgress({
        label: "service",
        completed: 2,
        total: 2,
        detail: "Execution skipped in UI test mode",
        nextStep: "Review resolved handoff payload",
      });
      return;
    }
    await startInlineCommand({
      title: "Launch service",
      subtitle: "Run the resolved runtime command inside the visual shell.",
      commandLabel: "service",
      args: preview.launch?.args || [],
      env: preview.launch?.env || {},
    });
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
          if (item.id === "install-hub") {
            push({ id: "install-hub" });
            return;
          }
          if (item.id === "discover-hub") {
            push({ id: "discover-hub" });
            return;
          }
          if (item.id === "operate-hub") {
            push({ id: "operate-hub" });
            return;
          }
          if (item.id === "diagnostics-hub") {
            push({ id: "diagnostics-hub" });
            return;
          }
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
          exit();
        },
      }
    );
  }

  if (currentScreen.id === "install-hub") {
    return renderMenu({
      title: "Install and update",
      subtitle: "Choose how you want to start the install flow.",
      status: `${catalog.total_skills} published skills • ${bundleList.length} bundles`,
      items: [
        {
          id: "install",
          label: "Install from destination",
          description: "Pick a client or custom path, then choose one skill, a bundle, or the full library.",
          section: "Install",
        },
        {
          id: "find-install",
          label: "Find and install",
          description: "Search first, then install the matching skill or bundle.",
          section: "Install",
        },
        {
          id: "recent-install",
          label: "Repeat recent install",
          description: cliState.recentInstalls.length
            ? `${cliState.recentInstalls.length} recent install run(s) saved locally.`
            : "No recent installs yet.",
          section: "Reuse",
        },
        {
          id: "install-presets",
          label: "Run saved install preset",
          description: cliState.installPresets.length
            ? `${cliState.installPresets.length} saved install preset(s).`
            : "No install presets saved yet.",
          section: "Reuse",
        },
      ],
      onBack: goHome,
      onSelect: (item) => {
        if (item.id === "install") {
          startInstallFlow("");
          return;
        }
        if (item.id === "find-install") {
          startInstallFlow("search");
          return;
        }
        if (item.id === "recent-install") {
          push({ id: "recent-install-list" });
          return;
        }
        if (item.id === "install-presets") {
          push({ id: "install-preset-list" });
        }
      },
    });
  }

  if (currentScreen.id === "discover-hub") {
    return renderMenu({
      title: "Discover catalog",
      subtitle: "Browse or search the published catalog before installing.",
      status: `${catalog.total_skills} skills • ${bundleList.length} bundles • backend ${searchModeLabel}`,
      items: [
        {
          id: "catalog-explorer",
          label: "Browse catalog",
          description: "Explore skills and bundles with search-first keyboard navigation.",
          section: "Discover",
        },
        {
          id: "find-install",
          label: "Search and install",
          description: "Jump directly into the search-driven install flow.",
          section: "Discover",
        },
      ],
      onBack: goHome,
      onSelect: (item) => {
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
        startInstallFlow("search");
      },
    });
  }

  if (currentScreen.id === "operate-hub") {
    return renderMenu({
      title: "Launch services",
      subtitle: "Start a runtime or replay a known configuration.",
      status: cliState.activeServices?.length
        ? `${cliState.activeServices.length} active runtime(s) • ${cliState.servicePresets.length} presets`
        : cliState.recentServices.length
        ? `${cliState.recentServices.length} recent services • ${cliState.servicePresets.length} presets`
        : "MCP, API, A2A, and MCP config launchers",
      items: [
        {
          id: "service",
          label: "Start a service",
          description: "Launch MCP, API, A2A, or MCP config with guided setup.",
          section: "Launch",
        },
        {
          id: "active-service",
          label: "Manage running services",
          description: cliState.activeServices?.length
            ? `${cliState.activeServices.length} runtime(s) currently tracked in this shell state.`
            : "No running services are currently tracked.",
          section: "Launch",
        },
        {
          id: "recent-service",
          label: "Repeat recent service",
          description: cliState.recentServices.length
            ? `${cliState.recentServices.length} recent service run(s) saved locally.`
            : "No recent service launches yet.",
          section: "Reuse",
        },
        {
          id: "service-presets",
          label: "Run saved service preset",
          description: cliState.servicePresets.length
            ? `${cliState.servicePresets.length} saved service preset(s).`
            : "No service presets saved yet.",
          section: "Reuse",
        },
      ],
      onBack: goHome,
      onSelect: (item) => {
        if (item.id === "service") {
          startServiceFlow();
          return;
        }
        if (item.id === "active-service") {
          push({ id: "active-service-list" });
          return;
        }
        if (item.id === "recent-service") {
          push({ id: "recent-service-list" });
          return;
        }
        push({ id: "service-preset-list" });
      },
    });
  }

  if (currentScreen.id === "diagnostics-hub") {
    return renderMenu({
      title: "Diagnostics",
      subtitle: "Inspect repo health, run fast runtime probes, or execute the full release gate.",
      status: "Local diagnostics and validation",
      items: [
        {
          id: "doctor",
          label: "Run doctor",
          description: "Inspect repo, binaries, default targets, and catalog files.",
          section: "Checks",
        },
        {
          id: "smoke-quick",
          label: "Run quick smoke checks",
          description: "Fast runtime probes for API, MCP, and A2A without the full release pipeline.",
          section: "Checks",
        },
        {
          id: "smoke-full",
          label: "Run full release smoke",
          description: "Validation, build, tests, packaging, and runtime probes. This is intentionally slower.",
          section: "Checks",
        },
      ],
      onBack: goHome,
      onSelect: (item) => {
        if (item.id === "doctor") {
          startInlineCommand({
            title: "Run doctor",
            subtitle: "Inspect repo, binaries, default targets, and catalog files without leaving the TUI.",
            commandLabel: "doctor",
            args: ["doctor"],
          });
          return;
        }
        startInlineCommand({
          title: item.id === "smoke-quick" ? "Run quick smoke checks" : "Run full release smoke",
          subtitle:
            item.id === "smoke-quick"
              ? "Run the fast runtime probes inside the visual shell and review the result here."
              : "Execute the full release-oriented smoke suite and review the result here.",
          commandLabel: item.id === "smoke-quick" ? "smoke --quick" : "smoke",
          args: item.id === "smoke-quick" ? ["smoke", "--quick"] : ["smoke"],
        });
      },
    });
  }

  if (currentScreen.id === "command-runner" && commandRunner) {
    return h(
      Screen,
      {
        title: commandRunner.title,
        subtitle: commandRunner.subtitle,
        status:
          commandRunner.status === "running"
            ? "Running inside the visual shell"
            : commandRunner.status === "completed"
              ? `Completed with status ${commandRunner.exitCode}`
              : `Failed with status ${commandRunner.exitCode}`,
        footer: screenFooter(
          commandRunner.status === "running" ? "Please wait" : "Enter or Esc back",
          "Ctrl+C exit",
        ),
        ...viewProps,
      },
      h(
        Box,
        { flexDirection: "column" },
        h(SummaryPanel, {
          title: "Command",
          theme,
          lines: [
            { label: "Action", value: commandRunner.commandLabel },
            { label: "Status", value: commandRunner.status },
            { label: "Exit code", value: commandRunner.exitCode ?? "running" },
            { label: "Node", value: process.execPath },
          ],
        }),
        h(StepRail, {
          title: "Execution flow",
          theme,
          steps: [
            { id: "spawn", label: "Spawn command", status: "completed" },
            {
              id: "stream",
              label: "Stream output",
              status: commandRunner.status === "running" ? "current" : "completed",
            },
            {
              id: "review",
              label: "Review result",
              status: commandRunner.status === "running" ? "pending" : "current",
            },
          ],
          currentId: commandRunner.status === "running" ? "stream" : "review",
        }),
        h(TextPreviewPanel, {
          title: "Output",
          text: commandRunner.output || "Waiting for command output...",
          maxLines: compactMode ? 18 : 24,
          theme,
          tone: commandRunner.status === "failed" ? "error" : "accent",
        }),
        h(
          Panel,
          { title: "Actions", theme, tone: "primary" },
          h(SelectMenu, {
            items:
              commandRunner.status === "running"
                ? [
                    {
                      id: "waiting",
                      label: "Running",
                      description: "This command is still executing inside the visual shell.",
                    },
                  ]
                : [
                    {
                      id: "home",
                      label: "Back to home",
                      description: commandRunner.successHint || "Return to the initial command hub.",
                    },
                    {
                      id: "rerun",
                      label: "Run again",
                      description: "Execute the same command one more time.",
                    },
                  ],
            onBack: commandRunner.status === "running" ? undefined : () => {
              setCommandRunner(null);
              goHome();
            },
            onSelect: (item) => {
              if (item.id === "waiting") {
                return;
              }
              if (item.id === "rerun") {
                startInlineCommand({
                  title: commandRunner.title,
                  subtitle: commandRunner.subtitle,
                  commandLabel: commandRunner.commandLabel,
                  args: commandRunner.args,
                  env: commandRunner.env,
                  successHint: commandRunner.successHint,
                  replaceCurrent: true,
                });
                return;
              }
              setCommandRunner(null);
              goHome();
            },
            theme,
          }),
        ),
      ),
    );
  }

  if (currentScreen.id === "catalog-explorer") {
    return h(CatalogExplorerScreen, {
      core,
      searchAdapter,
      familyList,
      bundleList,
      cliState,
      query: catalogQuery,
      setQuery: setCatalogQuery,
      searchModeLabel,
      theme,
      screenReaderEnabled,
      compactMode,
      onBack: goHome,
      onToggleFavoriteSkill: (familyId) => {
        const selectedSkill = resolveFamilyToSkill(familyId);
        if (!selectedSkill) {
          return;
        }
        persistFavoriteSkill(selectedSkill.id);
        logActivity(
          cliState.favorites.skills.includes(selectedSkill.id)
            ? `Removed ${selectedSkill.id} from favorites.`
            : `Added ${selectedSkill.id} to favorites.`,
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
        if (item.id.startsWith("family:")) {
          const familyId = item.id.slice("family:".length);
          const family = familyMap.get(familyId);
          if (!family) {
            return;
          }
          if ((family.variants || []).length > 1) {
            push({ id: "catalog-family-variants", familyId });
            return;
          }
          const selectedSkill = resolveFamilyToSkill(familyId);
          if (!selectedSkill) {
            return;
          }
          const nextDraft = {
            ...installDraft,
            scope: "skill",
            skillId: selectedSkill.id,
            bundleId: "",
            query: catalogQuery,
          };
          setInstallDraft(nextDraft);
          updateProgress({
            label: "Install funnel",
            completed: 2,
            total: 5,
            detail: "Catalog item selected",
            nextStep: installDraftHasTarget(nextDraft) ? "Review the install preview" : "Choose an install target",
          });
          pushInstallStepAfterSelection(nextDraft);
          return;
        } else {
          const nextDraft = {
            ...installDraft,
            scope: "bundle",
            bundleId: item.id.slice("bundle:".length),
            skillId: "",
            query: catalogQuery,
          };
          setInstallDraft(nextDraft);
          updateProgress({
            label: "Install funnel",
            completed: 2,
            total: 5,
            detail: "Catalog item selected",
            nextStep: installDraftHasTarget(nextDraft) ? "Review the install preview" : "Choose an install target",
          });
          pushInstallStepAfterSelection(nextDraft);
          return;
        }
      },
    });
  }

  if (currentScreen.id === "catalog-family-variants") {
    const family = familyMap.get(currentScreen.familyId);
    const variants = getOrderedFamilyVariants(family);
    return renderMenu({
      title: family?.display_name || "Choose version",
      subtitle: "Pick the version you want to install for this skill family.",
      status: variants.length ? `${variants.length} variants available` : "No variants available",
      items: variants.map((variant) => {
        const variantSkill = skillMap.get(variant.id);
        return {
          id: variant.id,
          label: `${variant.variant_label}${variant.is_default ? " (recommended)" : ""}`,
          description: variantSkill?.description || `${variant.source_type} variant`,
          section: "Variants",
        };
      }),
      onBack: pop,
      onSelect: (item) => {
        const nextDraft = {
          ...installDraft,
          scope: "skill",
          skillId: item.id,
          bundleId: "",
          query: catalogQuery,
        };
        setInstallDraft(nextDraft);
        updateProgress({
          label: "Install funnel",
          completed: 2,
          total: 5,
          detail: "Catalog family and variant selected",
          nextStep: installDraftHasTarget(nextDraft) ? "Review the install preview" : "Choose an install target",
        });
        pushInstallStepAfterSelection(nextDraft);
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

  if (currentScreen.id === "active-service-list") {
    const activeServices = (cliState.activeServices || []).map((entry) => hydrateManagedService(entry));
    if (!activeServices.length) {
      return renderMenu({
        title: "Running services",
        subtitle: "No managed runtime is currently tracked.",
        items: [
          {
            id: "home",
            label: "Back to home",
            description: "Return to the initial command hub.",
          },
        ],
        onBack: goHome,
        onSelect: () => {
          goHome();
        },
      });
    }
    return renderMenu({
      title: "Running services",
      subtitle: "Inspect status, health, logs, or stop a background runtime.",
      items: activeServices.map((entry) => ({
        id: entry.id,
        label: `${String(entry.service || "service").toUpperCase()}${entry.transport ? ` • ${entry.transport}` : ""}`,
        description: entry.running
          ? `${entry.primaryUrl || entry.baseUrl || "background runtime"} • pid ${entry.pid || "simulated"}`
          : `${entry.primaryUrl || entry.baseUrl || "background runtime"} • stopped`,
      })),
      onBack: pop,
      onSelect: (item) => {
        const selected = activeServices.find((entry) => entry.id === item.id);
        openManagedService(selected);
      },
    });
  }

  if (currentScreen.id === "managed-service-detail") {
    const selectedService =
      managedServiceView && (!currentScreen.serviceId || currentScreen.serviceId === managedServiceView.id)
        ? managedServiceView
        : hydrateManagedService(
            (cliState.activeServices || []).find((entry) => entry.id === currentScreen.serviceId),
          );
    const statusLabel =
      selectedService?.healthState === "failed"
        ? "Launch failed"
        : selectedService?.healthState === "stopped"
          ? "Stopped"
          : selectedService?.running
            ? "Running"
            : "Unavailable";
    const urlLines = [
      selectedService?.primaryUrl ? { label: "Primary", value: selectedService.primaryUrl } : null,
      selectedService?.healthUrl ? { label: "Health", value: selectedService.healthUrl } : null,
      selectedService?.docsUrl ? { label: "Swagger", value: selectedService.docsUrl } : null,
      selectedService?.adminUrl ? { label: "Admin", value: selectedService.adminUrl } : null,
      ...(selectedService?.endpointUrls || []).map((value, index) => ({
        label: `Endpoint ${index + 1}`,
        value,
      })),
    ].filter(Boolean);

    return h(
      Screen,
      {
        title: selectedService?.service ? `${String(selectedService.service).toUpperCase()} control center` : "Service control center",
        subtitle: "Inspect the runtime, verify health, or stop the managed process.",
        status: flash || statusLabel,
        footer: screenFooter("↑/↓ move", "Enter select • Esc home • Ctrl+C exit"),
        ...viewProps,
      },
      h(
        Box,
        { flexDirection: "column" },
        h(SummaryPanel, {
          title: "Runtime status",
          theme,
          lines: [
            { label: "Service", value: String(selectedService?.service || "unknown").toUpperCase() },
            { label: "Transport", value: selectedService?.transport || "n/a" },
            { label: "PID", value: selectedService?.pid || "simulated" },
            { label: "State", value: statusLabel },
            { label: "Checked", value: selectedService?.lastHealthAt || "not checked" },
          ],
        }),
        urlLines.length
          ? h(SummaryPanel, {
              title: "Runtime links",
              theme,
              lines: urlLines,
              tone: "info",
            })
          : null,
        h(TextPreviewPanel, {
          title: "Recent logs",
          text:
            selectedService?.logTail ||
            selectedService?.lastHealthSummary ||
            selectedService?.failureReason ||
            "No logs captured yet.",
          maxLines: compactMode ? 14 : 18,
          theme,
          tone: selectedService?.healthState === "failed" ? "error" : "accent",
        }),
        h(
          Panel,
          { title: "Actions", theme, tone: "primary" },
          h(SelectMenu, {
            items: [
              ...(selectedService?.running
                ? [
                    {
                      id: "refresh",
                      label: "Refresh status",
                      description: "Probe the health endpoint again and refresh the log tail.",
                    },
                    {
                      id: "stop",
                      label: "Stop service",
                      description: "Terminate the managed background process.",
                    },
                  ]
                : []),
              {
                id: "home",
                label: "Back to home",
                description: "Return to the initial command hub.",
              },
            ],
            onBack: goHome,
            onSelect: async (item) => {
              if (item.id === "refresh") {
                await refreshManagedService(selectedService?.id);
                return;
              }
              if (item.id === "stop") {
                await stopManagedService(selectedService?.id);
                return;
              }
              goHome();
            },
            theme,
          }),
        ),
      ),
    );
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
      subtitle: "Pick the client or path that should receive the current install selection.",
      items,
      onBack: pop,
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
        const nextDraft = {
          ...installDraft,
          tool: target.id,
          targetLabel: target.name,
          targetPath: target.resolvedPath,
          targetKind: target.source === "custom" ? "custom" : "builtin",
        };
        setInstallDraft(nextDraft);
        pushInstallStepAfterTarget(nextDraft);
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
        const nextDraft = {
          ...installDraft,
          tool: savedTarget.id,
          targetLabel: savedTarget.name,
          targetPath: savedTarget.resolvedPath,
          targetKind: "custom",
        };
        setInstallDraft(nextDraft);
        setFlash(`Custom install target saved: ${savedTarget.name}`);
        logActivity(`Saved custom install target • ${savedTarget.name}`, "success");
        advanceAfterInstallTargetPrompt(nextDraft);
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
        const nextDraft = {
          ...installDraft,
          tool: "",
          targetLabel: "Custom path",
          targetPath: resolved,
          targetKind: "path",
        };
        setInstallDraft(nextDraft);
        advanceAfterInstallTargetPrompt(nextDraft);
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
    const families = [...familyList].sort((left, right) =>
      String(left.display_name || left.id).localeCompare(String(right.display_name || right.id)),
    );
    return renderMenu({
      title: "Choose a skill",
      subtitle: "Pick a skill family first. If more than one version exists, the next step asks which variant you want.",
      items: families.map((family) => {
        const recommendedSkill = family.default_skill || resolveFamilyToSkill(family.id);
        const recommendedVariant = (family.variants || []).find((variant) => variant.is_default) || family.variants?.[0] || null;
        return {
          id: family.id,
          label:
            `${family.display_name || family.id}` +
            `${family.variant_count > 1 ? ` • ${family.variant_count} versions` : ""}` +
            `${recommendedSkill ? ` • Q${recommendedSkill.quality_score} • BP${recommendedSkill.best_practices_score} • S${recommendedSkill.security_score}` : ""}`,
          description:
            `${family.description || recommendedSkill?.description || "Published skill family."}` +
            `${family.variant_count > 1 ? ` Recommended: ${recommendedVariant?.variant_label || "default"}.` : ""}`,
        };
      }),
      commandPlaceholder: "/figma",
      onBack: pop,
      onSelect: (item) => {
        openInstallFamilyVariantPicker(item.id);
      },
    });
  }

  if (currentScreen.id === "install-family-variants") {
    const family = familyMap.get(currentScreen.familyId);
    const variants = getOrderedFamilyVariants(family);
    return renderMenu({
      title: family?.display_name || "Choose version",
      subtitle: "Pick the version you want to install for this skill family.",
      status: variants.length ? `${variants.length} versions available` : "No variants available",
      items: variants.map((variant) => {
        const variantSkill = skillMap.get(variant.id);
        return {
          id: variant.id,
          label: `${variant.variant_label}${variant.is_default ? " (recommended)" : ""}`,
          description:
            variantSkill?.description ||
            `${variant.source_type || "published"} variant for ${family?.display_name || family?.id || "this family"}.`,
        };
      }),
      commandPlaceholder: "/omni",
      onBack: pop,
      onSelect: (item) => {
        const nextDraft = mergeInstallDraft({
          scope: installDraft.scope === "search" ? "search" : "skill",
          skillId: item.id,
          bundleId: "",
          query: installDraft.query || catalogQuery,
        });
        pushInstallStepAfterSelection(nextDraft);
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
        const nextDraft = mergeInstallDraft({
          scope: "bundle",
          bundleId: item.id,
          skillId: "",
        });
        pushInstallStepAfterSelection(nextDraft);
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
      ...searchResults.map((family) => {
        const recommendedSkill = family.default_skill || resolveFamilyToSkill(family.id);
        const recommendedVariant = (family.variants || []).find((variant) => variant.is_default) || family.variants?.[0] || null;
        return {
          id: `family:${family.id}`,
          label:
            `${family.display_name || family.id}` +
            `${family.variant_count > 1 ? ` • ${family.variant_count} versions` : ""}` +
            `${recommendedSkill ? ` • Q${recommendedSkill.quality_score} • S${recommendedSkill.security_score}` : ""}`,
          description:
            `${family.description || recommendedSkill?.description || "Published skill family."}` +
            `${family.variant_count > 1 ? ` Recommended: ${recommendedVariant?.variant_label || "default"}.` : ""}`,
        };
      }),
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
      subtitle: "The visual shell installs matching skill families or bundles. Families with multiple versions ask for a variant next.",
      footer: screenFooter("Enter confirms the highlighted match", `Search backend ${searchModeLabel}`),
      commandPlaceholder: `/${installDraft.query}`,
      items,
      onBack: pop,
      onSelect: (item) => {
        if (item.id.startsWith("family:")) {
          const familyId = item.id.slice("family:".length);
          const family = familyMap.get(familyId);
          if (!family) {
            return;
          }
          if ((family.variants || []).length > 1) {
            push({ id: "install-family-variants", familyId });
            return;
          }
          const selectedSkill = resolveFamilyToSkill(familyId);
          if (!selectedSkill) {
            return;
          }
          const nextDraft = {
            ...installDraft,
            scope: "search",
            skillId: selectedSkill.id,
            bundleId: "",
          };
          setInstallDraft(nextDraft);
          pushInstallStepAfterSelection(nextDraft);
          return;
        } else {
          const nextDraft = {
            ...installDraft,
            scope: "search",
            bundleId: item.id.slice("bundle:".length),
            skillId: "",
          };
          setInstallDraft(nextDraft);
          pushInstallStepAfterSelection(nextDraft);
          return;
        }
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
                  executeActionInline(preview);
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
      subtitle: "Stream is the best default for a standalone runtime. Use stdio only when a client will attach to this terminal.",
      items: [
        { id: "stream", label: "stream", description: "Streamable HTTP transport." },
        { id: "sse", label: "sse", description: "Server-Sent Events transport." },
        { id: "stdio", label: "stdio", description: "Pipe-based transport for local agent wiring." },
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
    const runLabel =
      serviceDraft.service === "mcp-config"
        ? "Write config now"
        : serviceDraft.service === "mcp" && serviceDraft.transport === "stdio"
          ? "Run in terminal now"
          : "Start service in background";
    const runDescription =
      serviceDraft.service === "mcp-config"
        ? "Write the generated MCP client config and keep the result inside the visual shell."
        : serviceDraft.service === "mcp" && serviceDraft.transport === "stdio"
          ? "Leave the visual shell and attach this terminal directly to the MCP stdio session."
          : "Start the selected service in background, then open a control screen with health and stop actions.";
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
              onSelect: async (item) => {
                if (item.id === "run") {
                  await runServicePreview(preview);
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
    const normalizedHandoff = handoff.launch || handoff;
    if (!normalizedHandoff?.script) {
      throw new Error("Resolved handoff is missing a script to execute.");
    }
    await runCommand(normalizedHandoff.script, normalizedHandoff.args, normalizedHandoff.env);
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
