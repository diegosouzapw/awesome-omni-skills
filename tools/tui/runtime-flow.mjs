import path from "node:path";
import { fileURLToPath } from "node:url";
import { PRIMARY_NPX_COMMAND, renderInstallerCommand } from "./install-flow.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const CLI_SCRIPT = path.join(ROOT, "tools", "bin", "cli.js");

function normalizeTransportMode(value) {
  const normalized = String(value || "stream").trim().toLowerCase();
  if (normalized === "http") {
    return "stream";
  }
  return normalized || "stream";
}

function defaultMcpConfigUrl(transport) {
  return normalizeTransportMode(transport) === "sse"
    ? "http://127.0.0.1:3334/sse"
    : "http://127.0.0.1:3334/mcp";
}

function buildConfigMcpArgs({
  configTarget = "",
  filePath = "",
  transport = "stream",
  url = "",
  serverName = "omni-skills",
  write = false,
}) {
  const args = ["config-mcp"];
  if (configTarget) {
    args.push("--target", configTarget);
  }
  if (filePath) {
    args.push("--file", filePath);
  }
  args.push("--transport", normalizeTransportMode(transport));
  if (normalizeTransportMode(transport) !== "stdio" && url) {
    args.push("--url", url);
  }
  if (serverName && serverName !== "omni-skills") {
    args.push("--server-name", serverName);
  }
  if (write) {
    args.push("--write");
  }
  return args;
}

function buildMcpLaunch(draft) {
  const args = ["mcp", draft.transport];
  const env = {};

  if (draft.localMode) {
    args.push("--local");
  }
  if (draft.transport !== "stdio") {
    if (draft.host) {
      args.push("--host", draft.host);
    }
    if (draft.port) {
      args.push("--port", String(draft.port));
    }
  }

  const command = `${PRIMARY_NPX_COMMAND} ${args.join(" ")}`;
  return {
    label: `Start MCP (${draft.transport})`,
    script: CLI_SCRIPT,
    args,
    env,
    command,
    record: {
      service: "mcp",
      transport: draft.transport,
      mode: draft.localMode ? "local" : "read-only",
      host: draft.host || "",
      port: draft.port || "",
      command,
    },
  };
}

function buildApiLaunch(draft) {
  const args = ["api"];
  const env = {};

  if (draft.host) {
    args.push("--host", draft.host);
  }
  if (draft.port) {
    args.push("--port", String(draft.port));
  }
  if (draft.hardened && draft.authMode === "bearer" && draft.bearerToken) {
    env.OMNI_SKILLS_HTTP_BEARER_TOKEN = draft.bearerToken;
  }
  if (draft.hardened && draft.authMode === "api-key" && draft.apiKeys) {
    env.OMNI_SKILLS_HTTP_API_KEYS = draft.apiKeys;
  }
  if (draft.hardened && draft.rateLimitMax) {
    env.OMNI_SKILLS_RATE_LIMIT_MAX = String(draft.rateLimitMax);
  }
  if (draft.hardened && draft.rateLimitWindowMs) {
    env.OMNI_SKILLS_RATE_LIMIT_WINDOW_MS = String(draft.rateLimitWindowMs);
  }
  if (draft.hardened && draft.auditLog) {
    env.OMNI_SKILLS_HTTP_AUDIT_LOG = "1";
  }

  const envPreview = [
    env.OMNI_SKILLS_HTTP_BEARER_TOKEN ? "OMNI_SKILLS_HTTP_BEARER_TOKEN=***" : "",
    env.OMNI_SKILLS_HTTP_API_KEYS ? "OMNI_SKILLS_HTTP_API_KEYS=***" : "",
    env.OMNI_SKILLS_RATE_LIMIT_MAX ? `OMNI_SKILLS_RATE_LIMIT_MAX=${env.OMNI_SKILLS_RATE_LIMIT_MAX}` : "",
    env.OMNI_SKILLS_RATE_LIMIT_WINDOW_MS
      ? `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=${env.OMNI_SKILLS_RATE_LIMIT_WINDOW_MS}`
      : "",
    env.OMNI_SKILLS_HTTP_AUDIT_LOG ? "OMNI_SKILLS_HTTP_AUDIT_LOG=1" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const command = `${envPreview ? `${envPreview} ` : ""}${PRIMARY_NPX_COMMAND} ${args.join(" ")}`.trim();
  return {
    label: "Start Catalog API",
    script: CLI_SCRIPT,
    args,
    env,
    command,
    record: {
      service: "api",
      mode: draft.authMode === "none" ? "basic" : "hardened",
      authMode: draft.authMode || "none",
      hardened: Boolean(draft.hardened),
      host: draft.host || "",
      port: draft.port || "",
      rateLimitMax: draft.rateLimitMax || "",
      rateLimitWindowMs: draft.rateLimitWindowMs || "",
      auditLog: Boolean(draft.auditLog),
      command,
    },
  };
}

function buildA2aLaunch(draft) {
  const args = ["a2a"];
  const env = {};

  if (draft.host) {
    args.push("--host", draft.host);
  }
  if (draft.port) {
    args.push("--port", String(draft.port));
  }
  if (draft.baseUrl) {
    args.push("--base-url", draft.baseUrl);
  }

  if (draft.storeType) {
    env.OMNI_SKILLS_A2A_STORE_TYPE = draft.storeType;
  }
  if (draft.storePath) {
    env.OMNI_SKILLS_A2A_STORE_PATH = draft.storePath;
  }
  if (draft.executorMode) {
    env.OMNI_SKILLS_A2A_EXECUTOR = draft.executorMode;
  }
  if (draft.queueEnabled) {
    env.OMNI_SKILLS_A2A_QUEUE_ENABLED = "1";
  }
  if (draft.workerPollMs) {
    env.OMNI_SKILLS_A2A_WORKER_POLL_MS = String(draft.workerPollMs);
  }
  if (draft.leaseMs) {
    env.OMNI_SKILLS_A2A_LEASE_MS = String(draft.leaseMs);
  }

  const envPreview = [
    env.OMNI_SKILLS_A2A_STORE_TYPE ? `OMNI_SKILLS_A2A_STORE_TYPE=${env.OMNI_SKILLS_A2A_STORE_TYPE}` : "",
    env.OMNI_SKILLS_A2A_STORE_PATH ? `OMNI_SKILLS_A2A_STORE_PATH=${env.OMNI_SKILLS_A2A_STORE_PATH}` : "",
    env.OMNI_SKILLS_A2A_QUEUE_ENABLED ? "OMNI_SKILLS_A2A_QUEUE_ENABLED=1" : "",
    env.OMNI_SKILLS_A2A_WORKER_POLL_MS
      ? `OMNI_SKILLS_A2A_WORKER_POLL_MS=${env.OMNI_SKILLS_A2A_WORKER_POLL_MS}`
      : "",
    env.OMNI_SKILLS_A2A_LEASE_MS ? `OMNI_SKILLS_A2A_LEASE_MS=${env.OMNI_SKILLS_A2A_LEASE_MS}` : "",
    env.OMNI_SKILLS_A2A_EXECUTOR ? `OMNI_SKILLS_A2A_EXECUTOR=${env.OMNI_SKILLS_A2A_EXECUTOR}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const command = `${envPreview ? `${envPreview} ` : ""}${PRIMARY_NPX_COMMAND} ${args.join(" ")}`.trim();
  return {
    label: "Start A2A Runtime",
    script: CLI_SCRIPT,
    args,
    env,
    command,
    record: {
      service: "a2a",
      mode: `${draft.storeType || "json"} + ${draft.executorMode || "inline"}`,
      host: draft.host || "",
      port: draft.port || "",
      storeType: draft.storeType || "json",
      storePath: draft.storePath || "",
      executorMode: draft.executorMode || "inline",
      queueEnabled: Boolean(draft.queueEnabled),
      workerPollMs: draft.workerPollMs || "",
      leaseMs: draft.leaseMs || "",
      baseUrl: draft.baseUrl || "",
      command,
    },
  };
}

function buildConfigMcpLaunch(draft, sidecar) {
  const preview = sidecar.configureClientMcp({
    config_target: draft.configTarget || undefined,
    file_path: draft.configFilePath || undefined,
    server_name: draft.serverName || "omni-skills",
    transport: draft.transport || "stream",
    url: draft.transport === "stdio" ? "" : draft.url || defaultMcpConfigUrl(draft.transport),
    dry_run: true,
  });
  const args = buildConfigMcpArgs({
    configTarget: draft.configTarget,
    filePath: draft.configFilePath,
    transport: draft.transport,
    url: draft.transport === "stdio" ? "" : draft.url || defaultMcpConfigUrl(draft.transport),
    serverName: draft.serverName || "omni-skills",
    write: true,
  });
  const command = renderInstallerCommand(args);
  return {
    preview,
    label: "Write MCP client config",
    script: CLI_SCRIPT,
    args,
    env: {},
    command,
    record: {
      service: "mcp-config",
      mode: preview.config_profile,
      transport: draft.transport,
      targetId: draft.configTarget || "",
      targetPath: preview.config_path,
      serverName: preview.server_name,
      url: draft.transport === "stdio" ? "" : draft.url || defaultMcpConfigUrl(draft.transport),
      command,
    },
  };
}

function emptyServiceDraft() {
  return {
    service: "",
    transport: "stream",
    localMode: true,
    host: "127.0.0.1",
    port: "",
    url: "",
    configTarget: "",
    configFilePath: "",
    serverName: "omni-skills",
    authMode: "none",
    hardened: false,
    bearerToken: "",
    apiKeys: "",
    rateLimitMax: "60",
    rateLimitWindowMs: "60000",
    auditLog: true,
    storeType: "json",
    storePath: "",
    executorMode: "inline",
    queueEnabled: false,
    workerPollMs: "250",
    leaseMs: "4000",
    baseUrl: "",
  };
}

function formatRecentService(entry) {
  if (entry.service === "mcp-config") {
    return `MCP config • ${entry.targetId || "custom"} • ${entry.transport || "stream"}`;
  }
  if (entry.service === "mcp") {
    return `MCP ${entry.transport || "stdio"} • ${entry.mode || "read-only"} • ${entry.port || "stdio"}`;
  }
  if (entry.service === "api") {
    return `API • ${entry.host || "127.0.0.1"}:${entry.port || "3333"}`;
  }
  if (entry.service === "a2a") {
    return `A2A • ${entry.storeType || "json"} • ${entry.executorMode || "inline"}`;
  }
  return entry.service || "service";
}

export {
  buildA2aLaunch,
  buildApiLaunch,
  buildConfigMcpArgs,
  buildConfigMcpLaunch,
  buildMcpLaunch,
  defaultMcpConfigUrl,
  emptyServiceDraft,
  formatRecentService,
  normalizeTransportMode,
};
