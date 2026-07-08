import fs from "node:fs";
import { fileURLToPath } from "node:url";

const PACKAGE_JSON_PATH = fileURLToPath(new URL("../../../package.json", import.meta.url));

function loadOmniSkillsVersion() {
  try {
    const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, "utf-8"));
    return String(packageJson.version || "").trim() || "0.0.1";
  } catch {
    return process.env.npm_package_version || "0.0.1";
  }
}

const OMNI_SKILLS_VERSION = loadOmniSkillsVersion();

function shellQuote(value) {
  const text = String(value ?? "");
  if (!text) {
    return "''";
  }
  return `'${text.replace(/'/g, `'\"'\"'`)}'`;
}

export const CONFIG_PROFILES = {
  "claude-json": {
    id: "claude-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: true,
    description: "Claude Code style JSON config with typed MCP entries.",
  },
  "cursor-json": {
    id: "cursor-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: true,
    description: "Cursor style JSON config using mcpServers.",
  },
  "generic-json": {
    id: "generic-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "Generic JSON config using mcpServers.",
  },
  "antigravity-json": {
    id: "antigravity-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "Antigravity JSON config using mcpServers at ~/.gemini/antigravity/mcp.json.",
  },
  "opencode-json": {
    id: "opencode-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "Legacy OpenCode workspace JSON config using .agents/mcp.json with mcpServers.",
  },
  "opencode-config-json": {
    id: "opencode-config-json",
    format: "json",
    rootKey: "mcp",
    rootPath: ["mcp"],
    includeType: false,
    description: "Official OpenCode and Kilo CLI JSON config using the top-level mcp object.",
  },
  "cline-json": {
    id: "cline-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "Cline CLI JSON config using cline_mcp_settings.json with mcpServers.",
  },
  "kilo-json": {
    id: "kilo-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "Kilo Code workspace JSON config using .kilocode/mcp.json with mcpServers.",
  },
  "copilot-json": {
    id: "copilot-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "GitHub Copilot CLI JSON config using mcpServers and per-server tool allowlists.",
  },
  "zed-json": {
    id: "zed-json",
    format: "json",
    rootKey: "context_servers",
    rootPath: ["context_servers"],
    includeType: false,
    description: "Zed workspace settings using the context_servers object in .zed/settings.json.",
  },
  "continue-yaml": {
    id: "continue-yaml",
    format: "yaml",
    rootKey: "mcpServers",
    includeType: false,
    description: "Continue workspace YAML config stored under .continue/mcpServers/*.yaml and loaded from Agent mode.",
  },
  "junie-json": {
    id: "junie-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "Junie project or user mcp.json using a top-level mcpServers object.",
  },
  "windsurf-json": {
    id: "windsurf-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "Windsurf MCP config using ~/.codeium/windsurf/mcp_config.json with mcpServers entries.",
  },
  "goose-yaml": {
    id: "goose-yaml",
    format: "yaml",
    rootKey: "extensions",
    rootPath: ["extensions"],
    includeType: false,
    description: "Goose config.yaml using a top-level extensions object for persistent MCP extensions.",
  },
  "vscode-json": {
    id: "vscode-json",
    format: "json",
    rootKey: "servers",
    rootPath: ["servers"],
    includeType: true,
    description: "VS Code MCP config using the servers root key.",
  },
  "devcontainer-json": {
    id: "devcontainer-json",
    format: "json",
    rootKey: "servers",
    rootPath: ["customizations", "vscode", "mcp", "servers"],
    includeType: true,
    description: "Dev Container configuration nested under customizations.vscode.mcp.servers.",
  },
  "codex-toml": {
    id: "codex-toml",
    format: "toml",
    rootKey: "mcp_servers",
    includeType: false,
    description: "Codex config.toml using mcp_servers tables.",
  },
  "claude-settings-json": {
    id: "claude-settings-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: true,
    description: "Claude Code settings.json using a top-level mcpServers object.",
  },
  "gemini-settings-json": {
    id: "gemini-settings-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "Gemini CLI settings.json using JSON settings with mcpServers.",
  },
  "kiro-json": {
    id: "kiro-json",
    format: "json",
    rootKey: "mcpServers",
    rootPath: ["mcpServers"],
    includeType: false,
    description: "Kiro MCP JSON config using mcpServers.",
  },
};

const SERVER_ENTRY_PATH = fileURLToPath(new URL("./server.js", import.meta.url));

export function normalizeTransportMode(transport) {
  const normalized = String(transport || "stream").trim().toLowerCase();
  if (normalized === "http") {
    return "stream";
  }
  return normalized;
}

function defaultTransportUrl(transport) {
  const mode = normalizeTransportMode(transport);
  const pathname = mode === "sse" ? "/sse" : "/mcp";
  return (
    process.env.OMNI_SKILLS_MCP_BASE_URL ||
    `http://${process.env.HOST || "127.0.0.1"}:${process.env.PORT || "3334"}${pathname}`
  );
}

function getTransportType(mode) {
  if (mode === "stdio") {
    return "stdio";
  }
  if (mode === "sse") {
    return "sse";
  }
  return "http";
}

export function buildMcpServerEntry({ transport = "stream", url }, profile = CONFIG_PROFILES["generic-json"]) {
  const mode = normalizeTransportMode(transport);

  if (profile.id === "continue-yaml") {
    return {
      transport: {
        type: mode === "sse" ? "sse" : "streamable-http",
        url: url || defaultTransportUrl(mode),
      },
    };
  }

  if (profile.id === "windsurf-json") {
    return {
      serverUrl: url || defaultTransportUrl(mode),
    };
  }

  if (profile.id === "goose-yaml") {
    if (mode === "sse") {
      throw new Error("Goose first-class config currently supports stdio and stream transport. Use --transport stdio or stream.");
    }

    if (mode === "stdio") {
      return {
        name: "Awesome Omni Skills",
        cmd: process.execPath,
        args: [SERVER_ENTRY_PATH],
        envs: {
          OMNI_SKILLS_MCP_MODE: "local",
          ...(process.env.OMNI_SKILLS_API_BASE_URL
            ? { OMNI_SKILLS_API_BASE_URL: process.env.OMNI_SKILLS_API_BASE_URL }
            : {}),
        },
        enabled: true,
        type: "stdio",
      };
    }

    return {
      name: "Awesome Omni Skills",
      url: url || defaultTransportUrl(mode),
      enabled: true,
      type: "streamable_http",
    };
  }

  if (profile.id === "opencode-config-json") {
    if (mode === "stdio") {
      return {
        type: "local",
        command: [process.execPath, SERVER_ENTRY_PATH],
        environment: {
          OMNI_SKILLS_MCP_MODE: "local",
          ...(process.env.OMNI_SKILLS_API_BASE_URL
            ? { OMNI_SKILLS_API_BASE_URL: process.env.OMNI_SKILLS_API_BASE_URL }
            : {}),
        },
        enabled: true,
      };
    }
    return {
      type: "remote",
      url: url || defaultTransportUrl(mode),
      enabled: true,
    };
  }

  if (profile.id === "cline-json" || profile.id === "kilo-json") {
    if (mode === "stdio") {
      return {
        command: process.execPath,
        args: [SERVER_ENTRY_PATH],
        env: {
          OMNI_SKILLS_MCP_MODE: "local",
          ...(process.env.OMNI_SKILLS_API_BASE_URL
            ? { OMNI_SKILLS_API_BASE_URL: process.env.OMNI_SKILLS_API_BASE_URL }
            : {}),
        },
      };
    }
    return {
      type: mode === "sse" ? "sse" : "streamable-http",
      url: url || defaultTransportUrl(mode),
    };
  }

  if (profile.id === "copilot-json") {
    if (mode === "stdio") {
      return {
        type: "local",
        command: process.execPath,
        args: [SERVER_ENTRY_PATH],
        env: {
          OMNI_SKILLS_MCP_MODE: "local",
          ...(process.env.OMNI_SKILLS_API_BASE_URL
            ? { OMNI_SKILLS_API_BASE_URL: process.env.OMNI_SKILLS_API_BASE_URL }
            : {}),
        },
        tools: ["*"],
      };
    }
    return {
      type: getTransportType(mode),
      url: url || defaultTransportUrl(mode),
      tools: ["*"],
    };
  }

  if (profile.id === "zed-json") {
    if (mode === "stdio") {
      return {
        command: process.execPath,
        args: [SERVER_ENTRY_PATH],
        env: {
          OMNI_SKILLS_MCP_MODE: "local",
          ...(process.env.OMNI_SKILLS_API_BASE_URL
            ? { OMNI_SKILLS_API_BASE_URL: process.env.OMNI_SKILLS_API_BASE_URL }
            : {}),
        },
      };
    }
    return {
      url: url || defaultTransportUrl(mode),
    };
  }

  if (mode === "stdio") {
    const entry = {
      command: process.execPath,
      args: [SERVER_ENTRY_PATH],
      env: {
        OMNI_SKILLS_MCP_MODE: "local",
        ...(process.env.OMNI_SKILLS_API_BASE_URL
          ? { OMNI_SKILLS_API_BASE_URL: process.env.OMNI_SKILLS_API_BASE_URL }
          : {}),
      },
    };
    return profile.includeType ? { type: "stdio", ...entry } : entry;
  }

  const entry = {
    url: url || defaultTransportUrl(mode),
  };
  return profile.includeType ? { type: getTransportType(mode), ...entry } : entry;
}

function cloneJsonRecord(value) {
  return JSON.parse(JSON.stringify(value || {}));
}

export function setNestedValue(target, pathSegments, value) {
  const record = cloneJsonRecord(target);
  let cursor = record;
  for (let index = 0; index < pathSegments.length - 1; index += 1) {
    const segment = pathSegments[index];
    if (!cursor[segment] || typeof cursor[segment] !== "object" || Array.isArray(cursor[segment])) {
      cursor[segment] = {};
    }
    cursor = cursor[segment];
  }
  cursor[pathSegments[pathSegments.length - 1]] = value;
  return record;
}

export function getNestedValue(target, pathSegments) {
  let cursor = target;
  for (const segment of pathSegments) {
    if (!cursor || typeof cursor !== "object") {
      return undefined;
    }
    cursor = cursor[segment];
  }
  return cursor;
}

function normalizeStringArray(values) {
  if (!Array.isArray(values)) {
    return [];
  }
  return values.map((value) => String(value || "").trim()).filter(Boolean);
}

function normalizeStringRecord(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value)
      .map(([key, entryValue]) => [String(key || "").trim(), String(entryValue || "").trim()])
      .filter(([key, entryValue]) => key && entryValue),
  );
}

export function applyClientSpecificProfileOptions(config, profile, entry, input = {}) {
  let nextConfig = cloneJsonRecord(config);
  let nextEntry = cloneJsonRecord(entry);
  const headers = normalizeStringRecord(input.headers);
  const env = normalizeStringRecord(input.env);
  const cwd = String(input.cwd || "").trim();
  const envFile = String(input.env_file || "").trim();
  const description = String(input.description || "").trim();
  const timeoutMs = Number.parseInt(String(input.timeout_ms ?? ""), 10);
  const includeTools = normalizeStringArray(input.include_tools);
  const excludeTools = normalizeStringArray(input.exclude_tools);
  const disabledTools = normalizeStringArray(input.disabled_tools);
  const autoApprove = normalizeStringArray(input.auto_approve);

  if (Object.keys(headers).length > 0) {
    nextEntry.headers = {
      ...(nextEntry.headers || {}),
      ...headers,
    };
  }

  if (Object.keys(env).length > 0) {
    nextEntry.env = {
      ...(nextEntry.env || {}),
      ...env,
    };
  }

  if (cwd) {
    nextEntry.cwd = cwd;
  }

  if (envFile) {
    nextEntry.envFile = envFile;
  }

  if (description) {
    nextEntry.description = description;
  }

  if (Number.isFinite(timeoutMs) && timeoutMs > 0) {
    nextEntry.timeout = timeoutMs;
  }

  if (includeTools.length > 0) {
    nextEntry.includeTools = includeTools;
  }

  if (excludeTools.length > 0) {
    nextEntry.excludeTools = excludeTools;
  }

  if (input.disabled === true) {
    nextEntry.disabled = true;
  }

  if (input.trust === true) {
    nextEntry.trust = true;
  }

  if (profile.id === "claude-json" || profile.id === "claude-settings-json") {
    const allowed = normalizeStringArray(input.allowed_mcp_servers);
    const denied = normalizeStringArray(input.denied_mcp_servers);
    if (allowed.length > 0) {
      nextConfig.allowedMcpServers = allowed;
    }
    if (denied.length > 0) {
      nextConfig.deniedMcpServers = denied;
    }
    const permissionsDeny = normalizeStringArray(input.permissions_deny);
    if (permissionsDeny.length > 0) {
      nextConfig.permissions = {
        ...(nextConfig.permissions || {}),
        deny: permissionsDeny,
      };
    }
    if (input.enable_all_project_mcp_servers === true) {
      nextConfig.enableAllProjectMcpServers = true;
    }
  }

  if (profile.id === "vscode-json" || profile.id === "devcontainer-json") {
    if (input.sandbox_enabled === true) {
      nextEntry.sandboxEnabled = true;
    }

    const allowWrite = normalizeStringArray(input.sandbox_allow_write);
    const allowNetwork = normalizeStringArray(input.sandbox_allow_network);
    if (allowWrite.length > 0 || allowNetwork.length > 0) {
      nextEntry.sandbox = {
        ...(nextEntry.sandbox || {}),
        ...(allowWrite.length > 0
          ? {
              filesystem: {
                ...((nextEntry.sandbox && nextEntry.sandbox.filesystem) || {}),
                allowWrite,
              },
            }
          : {}),
        ...(allowNetwork.length > 0
          ? {
              network: {
                ...((nextEntry.sandbox && nextEntry.sandbox.network) || {}),
                allowHosts: allowNetwork,
              },
            }
          : {}),
      };
    }

    if (String(input.dev_watch || "").trim()) {
      nextEntry.dev = {
        ...(nextEntry.dev || {}),
        watch: String(input.dev_watch || "").trim(),
      };
    }
    if (String(input.dev_debug_type || "").trim()) {
      nextEntry.dev = {
        ...(nextEntry.dev || {}),
        debug: {
          ...((nextEntry.dev && nextEntry.dev.debug) || {}),
          type: String(input.dev_debug_type || "").trim(),
        },
      };
    }
  }

  if (profile.id === "gemini-settings-json") {
    const allowed = normalizeStringArray(input.mcp_allowed_servers);
    const excluded = normalizeStringArray(input.mcp_excluded_servers);
    if (allowed.length > 0 || excluded.length > 0) {
      nextConfig.mcp = {
        ...(nextConfig.mcp || {}),
        ...(allowed.length > 0 ? { allowed } : {}),
        ...(excluded.length > 0 ? { excluded } : {}),
      };
    }
  }

  if (profile.id === "kiro-json") {
    if (disabledTools.length > 0) {
      nextEntry.disabledTools = disabledTools;
    }
    if (autoApprove.length > 0) {
      nextEntry.autoApprove = autoApprove;
    }
  }

  if (profile.id === "cline-json" || profile.id === "kilo-json") {
    if (autoApprove.length > 0) {
      nextEntry.alwaysAllow = autoApprove;
    }
  }

  if (profile.id === "copilot-json") {
    nextEntry.tools = includeTools.length > 0 ? includeTools : nextEntry.tools || ["*"];
    const filterMapping = normalizeStringRecord(input.filter_mapping);
    if (Object.keys(filterMapping).length > 0) {
      nextEntry.filterMapping = filterMapping;
    }
    delete nextEntry.includeTools;
    delete nextEntry.excludeTools;
  }

  if (profile.id === "windsurf-json") {
    if (autoApprove.length > 0) {
      nextEntry.alwaysAllow = autoApprove;
    }
  }

  if (profile.id === "opencode-config-json") {
    if (nextEntry.env) {
      nextEntry.environment = {
        ...(nextEntry.environment || {}),
        ...nextEntry.env,
      };
      delete nextEntry.env;
    }
    if (Number.isFinite(timeoutMs) && timeoutMs > 0) {
      nextEntry.timeout = timeoutMs;
    }
    if (input.enabled === false) {
      nextEntry.enabled = false;
    }
    delete nextEntry.cwd;
    delete nextEntry.envFile;
    delete nextEntry.description;
    delete nextEntry.includeTools;
    delete nextEntry.excludeTools;
  }

  if (profile.id === "continue-yaml" && nextEntry.transport) {
    if (Object.keys(headers).length > 0) {
      nextEntry.transport.requestOptions = {
        ...(nextEntry.transport.requestOptions || {}),
        headers: {
          ...((nextEntry.transport.requestOptions && nextEntry.transport.requestOptions.headers) || {}),
          ...headers,
        },
      };
    }

    if (Number.isFinite(timeoutMs) && timeoutMs > 0) {
      nextEntry.transport.requestOptions = {
        ...(nextEntry.transport.requestOptions || {}),
        timeout: timeoutMs,
      };
    }

    delete nextEntry.headers;
    delete nextEntry.timeout;
    delete nextEntry.cwd;
    delete nextEntry.envFile;
    delete nextEntry.description;
  }

  if (profile.id === "goose-yaml") {
    if (nextEntry.env && Object.keys(nextEntry.env).length > 0) {
      nextEntry.envs = {
        ...(nextEntry.envs || {}),
        ...nextEntry.env,
      };
      delete nextEntry.env;
    }

    if (Number.isFinite(timeoutMs) && timeoutMs > 0) {
      nextEntry.timeout = Math.max(1, Math.ceil(timeoutMs / 1000));
    }

    nextEntry.enabled = input.enabled === false ? false : true;
    delete nextEntry.headers;
    delete nextEntry.cwd;
    delete nextEntry.envFile;
    delete nextEntry.description;
    delete nextEntry.includeTools;
    delete nextEntry.excludeTools;
    delete nextEntry.disabled;
    delete nextEntry.trust;
  }

  return { config: nextConfig, entry: nextEntry };
}

function escapeTomlString(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"');
}

function formatTomlString(value) {
  return `"${escapeTomlString(value)}"`;
}

function formatTomlKeySegment(value) {
  return /^[A-Za-z0-9_-]+$/.test(value) ? value : formatTomlString(value);
}

function formatTomlInlineTable(record) {
  const entries = Object.entries(record || {}).map(
    ([key, value]) => `${formatTomlKeySegment(key)} = ${formatTomlString(value)}`,
  );
  return `{ ${entries.join(", ")} }`;
}

function escapeYamlString(value) {
  return String(value || "").replace(/'/g, "''");
}

function formatYamlScalar(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  return `'${escapeYamlString(value)}'`;
}

function renderYamlBlock(value, indentLevel = 0) {
  const indent = "  ".repeat(indentLevel);

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return `${indent}[]`;
    }

    return value
      .map((item) => {
        if (item && typeof item === "object" && !Array.isArray(item)) {
          const entries = Object.entries(item);
          if (entries.length === 0) {
            return `${indent}- {}`;
          }

          const [firstKey, firstValue] = entries[0];
          const lines = [];
          if (firstValue && typeof firstValue === "object") {
            lines.push(`${indent}- ${firstKey}:`);
            lines.push(renderYamlBlock(firstValue, indentLevel + 2));
          } else {
            lines.push(`${indent}- ${firstKey}: ${formatYamlScalar(firstValue)}`);
          }

          for (const [key, nestedValue] of entries.slice(1)) {
            if (nestedValue && typeof nestedValue === "object") {
              lines.push(`${"  ".repeat(indentLevel + 1)}${key}:`);
              lines.push(renderYamlBlock(nestedValue, indentLevel + 2));
            } else {
              lines.push(`${"  ".repeat(indentLevel + 1)}${key}: ${formatYamlScalar(nestedValue)}`);
            }
          }

          return lines.join("\n");
        }

        return `${indent}- ${formatYamlScalar(item)}`;
      })
      .join("\n");
  }

  if (value && typeof value === "object") {
    const lines = [];
    for (const [key, nestedValue] of Object.entries(value)) {
      if (Array.isArray(nestedValue) || (nestedValue && typeof nestedValue === "object")) {
        lines.push(`${indent}${key}:`);
        lines.push(renderYamlBlock(nestedValue, indentLevel + 1));
      } else {
        lines.push(`${indent}${key}: ${formatYamlScalar(nestedValue)}`);
      }
    }
    return lines.join("\n");
  }

  return `${indent}${formatYamlScalar(value)}`;
}

export function renderContinueYamlConfig(serverName, entry) {
  const document = {
    name: "Awesome Omni Skills",
    version: OMNI_SKILLS_VERSION,
    schema: "v1",
    mcpServers: [
      {
        name: serverName,
        ...entry,
      },
    ],
  };

  return `${renderYamlBlock(document)}\n`;
}

function renderCodexConfigBlock(serverName, entry) {
  const lines = [`[mcp_servers.${formatTomlKeySegment(serverName)}]`];

  if (entry.url) {
    lines.push(`url = ${formatTomlString(entry.url)}`);
  }

  if (entry.command) {
    lines.push(`command = ${formatTomlString(entry.command)}`);
  }

  if (Array.isArray(entry.args) && entry.args.length > 0) {
    lines.push(`args = [${entry.args.map((value) => formatTomlString(value)).join(", ")}]`);
  }

  if (entry.env && Object.keys(entry.env).length > 0) {
    lines.push(`env = ${formatTomlInlineTable(entry.env)}`);
  }

  return `${lines.join("\n")}\n`;
}

function parseCodexSectionHeader(line) {
  const match = line.match(/^\[mcp_servers\.(?:"([^"]+)"|([A-Za-z0-9_-]+))\]\s*$/);
  if (!match) {
    return null;
  }
  return match[1] || match[2] || null;
}

export function upsertCodexConfigToml(currentText, serverName, entry) {
  const block = renderCodexConfigBlock(serverName, entry).trimEnd();
  const lines = String(currentText || "").split(/\r?\n/);
  const result = [];
  let index = 0;
  let replaced = false;

  while (index < lines.length) {
    const headerName = parseCodexSectionHeader(lines[index]);
    if (headerName !== serverName) {
      result.push(lines[index]);
      index += 1;
      continue;
    }

    replaced = true;
    result.push(block);
    index += 1;
    while (index < lines.length && !lines[index].startsWith("[")) {
      index += 1;
    }
  }

  const nextText = result.join("\n").trim();
  if (replaced) {
    return `${nextText}\n`;
  }

  const separator = nextText ? "\n\n" : "";
  return `${nextText}${separator}${block}\n`;
}

export function buildConfigInstructions(targetName, configPath, profile, transport) {
  const base = [
    `Write the Awesome Omni Skills MCP server into ${targetName || "the selected target"} at ${configPath}.`,
  ];

  if (profile.id === "vscode-json") {
    base.push("VS Code expects a .vscode/mcp.json file with a top-level 'servers' object.");
  } else if (profile.id === "devcontainer-json") {
    base.push("Dev Containers nest MCP config under customizations.vscode.mcp.servers in devcontainer.json.");
  } else if (profile.id === "codex-toml") {
    base.push("Codex expects ~/.codex/config.toml with [mcp_servers.<name>] tables.");
  } else if (profile.id === "claude-settings-json") {
    base.push("Claude Code settings.json stores MCP entries in a top-level 'mcpServers' object.");
  } else if (profile.id === "claude-json") {
    base.push("Claude Code project and JSON configs use a top-level 'mcpServers' object and typed entries.");
    base.push("Claude-specific allow and deny lists can be written through allowedMcpServers and deniedMcpServers.");
  } else if (profile.id === "cursor-json") {
    base.push("Cursor reads mcp.json files with a top-level 'mcpServers' object.");
  } else if (profile.id === "gemini-settings-json") {
    base.push("Gemini CLI uses settings.json with top-level 'mcpServers' plus optional global mcp.allowed/excluded controls.");
  } else if (profile.id === "antigravity-json") {
    base.push("Antigravity reads ~/.gemini/antigravity/mcp.json with a top-level 'mcpServers' object.");
  } else if (profile.id === "kiro-json") {
    base.push("Kiro uses settings/mcp.json with top-level 'mcpServers' entries.");
  } else if (profile.id === "opencode-json") {
    base.push("OpenCode reads workspace-scoped MCP config from .agents/mcp.json using a top-level 'mcpServers' object.");
  } else if (profile.id === "opencode-config-json") {
    base.push("OpenCode and Kilo CLI store MCP entries under the top-level 'mcp' object in opencode.json or kilo.json.");
    base.push("Local servers use type 'local' with a command array; remote servers use type 'remote' with url, headers, and optional oauth.");
  } else if (profile.id === "cline-json") {
    base.push("Cline CLI stores MCP entries in cline_mcp_settings.json under a top-level 'mcpServers' object.");
  } else if (profile.id === "kilo-json") {
    base.push("Kilo Code workspace config uses .kilocode/mcp.json with a top-level 'mcpServers' object.");
  } else if (profile.id === "copilot-json") {
    base.push("GitHub Copilot CLI stores persistent MCP entries in mcp-config.json using a top-level 'mcpServers' object.");
    base.push("Copilot entries should carry a 'tools' allowlist, with ['*'] enabling every tool exposed by the server.");
  } else if (profile.id === "zed-json") {
    base.push("Zed loads custom MCP servers from .zed/settings.json under the 'context_servers' object.");
    base.push("Trusted worktrees are required before Zed will launch MCP servers from workspace settings.");
  } else if (profile.id === "continue-yaml") {
    base.push("Continue can load standalone MCP server YAML files from .continue/mcpServers/*.yaml.");
    base.push("Continue MCP tools are exposed from Agent mode, and the generated file is a dedicated per-server YAML document.");
  } else if (profile.id === "junie-json") {
    base.push("Junie stores MCP entries in .junie/mcp/mcp.json for project scope or ~/.junie/mcp/mcp.json for user scope.");
    base.push("Junie uses a top-level 'mcpServers' object and can also import the same JSON from the /mcp installation assistant.");
  } else if (profile.id === "windsurf-json") {
    base.push("Windsurf stores MCP entries in ~/.codeium/windsurf/mcp_config.json under a top-level 'mcpServers' object.");
  } else if (profile.id === "goose-yaml") {
    base.push("Goose stores persistent MCP extensions in ~/.config/goose/config.yaml under the top-level 'extensions' object.");
    base.push("Goose first-class config support is intentionally limited to stdio and Streamable HTTP because those are the stable transport shapes documented publicly.");
  }

  if (normalizeTransportMode(transport) === "stdio") {
    base.push("Stdio mode launches the local server process directly on this machine.");
  } else {
    base.push("Network transports point the client at the selected MCP endpoint URL.");
  }

  if (profile.id === "vscode-json" || profile.id === "devcontainer-json") {
    base.push("VS Code can optionally sandbox stdio servers with filesystem and network allowlists.");
  }

  if (
    profile.id === "cursor-json" ||
    profile.id === "cline-json" ||
    profile.id === "gemini-settings-json" ||
    profile.id === "kiro-json" ||
    profile.id === "opencode-config-json" ||
    profile.id === "zed-json" ||
    profile.id === "continue-yaml" ||
    profile.id === "junie-json"
  ) {
    base.push("These clients can carry extra entry metadata such as headers, cwd, env, or timeout depending on the transport.");
  }

  return base;
}

export function buildConfigRecipes({ targetId, configPath, serverName, transport, url }) {
  const mode = normalizeTransportMode(transport);
  const effectiveUrl = url || defaultTransportUrl(mode);
  const recipes = [];

  if (targetId === "workspace" || targetId === "claude-project" || targetId === "claude-user-settings") {
    const scope = targetId === "claude-user-settings" ? "user" : "project";
    recipes.push({
      client: "claude-code",
      kind: "cli",
      command:
        mode === "stdio"
          ? `claude mcp add ${serverName} --scope ${scope} -- node ${shellQuote(SERVER_ENTRY_PATH)}`
          : `claude mcp add --transport ${mode === "sse" ? "sse" : "http"} ${serverName} --scope ${scope} ${shellQuote(effectiveUrl)}`,
    });
  }

  if (targetId === "gemini-user" || targetId === "gemini-workspace") {
    const scope = targetId === "gemini-workspace" ? "project" : "user";
    recipes.push({
      client: "gemini-cli",
      kind: "cli",
      command:
        mode === "stdio"
          ? `gemini mcp add --scope ${scope} ${serverName} node ${shellQuote(SERVER_ENTRY_PATH)}`
          : `gemini mcp add --scope ${scope} --transport ${mode === "sse" ? "sse" : "http"} ${serverName} ${shellQuote(effectiveUrl)}`,
    });
  }

  if (targetId === "antigravity" || targetId === "antigravity-user") {
    recipes.push({
      client: "antigravity",
      kind: "manual",
      command: `Edit ${configPath} and add the generated mcpServers entry for Antigravity.`,
    });
  }

  if (targetId === "codex-user") {
    recipes.push({
      client: "codex-cli",
      kind: "cli",
      command:
        mode === "stdio"
          ? `codex mcp add ${serverName} --command ${shellQuote(process.execPath)} --arg ${shellQuote(SERVER_ENTRY_PATH)}`
          : `codex mcp add ${serverName} --url ${shellQuote(effectiveUrl)}`,
    });
  }

  if (targetId === "vscode" || targetId === "vscode-user" || targetId === "vscode-insiders-user" || targetId === "devcontainer") {
    recipes.push({
      client: "vscode",
      kind: "manual",
      command: "Use the Command Palette and run 'MCP: Open User Configuration' or 'MCP: Open Workspace Configuration' to apply the generated entry through VS Code.",
    });
  }

  if (targetId === "cursor-user" || targetId === "cursor-workspace") {
    recipes.push({
      client: "cursor",
      kind: "manual",
      command: `Edit ${configPath} directly or import the generated entry from Cursor MCP settings.`,
    });
  }

  if (targetId === "kiro-user" || targetId === "kiro-workspace") {
    recipes.push({
      client: "kiro",
      kind: "manual",
      command: `Edit ${configPath} and paste the generated mcpServers entry into Kiro's MCP settings.`,
    });
  }

  if (targetId === "opencode" || targetId === "opencode-workspace") {
    recipes.push({
      client: "opencode",
      kind: "manual",
      command: `Edit ${configPath} and add the generated 'mcp' entry for the OpenCode project config.`,
    });
  }

  if (targetId === "opencode-user") {
    recipes.push({
      client: "opencode",
      kind: "manual",
      command: `Edit ${configPath} and add the generated 'mcp' entry for the OpenCode user config.`,
    });
  }

  if (targetId === "cline-user") {
    recipes.push({
      client: "cline",
      kind: "cli",
      command:
        mode === "stdio"
          ? `cline mcp add ${serverName} -- ${shellQuote(process.execPath)} ${shellQuote(SERVER_ENTRY_PATH)}`
          : `cline mcp add ${serverName} ${shellQuote(effectiveUrl)} --type ${mode === "sse" ? "sse" : "http"}`,
    });
  }

  if (targetId === "kilo-user" || targetId === "kilo-project") {
    recipes.push({
      client: "kilo",
      kind: "manual",
      command: `Edit ${configPath} and add the generated 'mcp' entry for the Kilo CLI config.`,
    });
  }

  if (targetId === "kilo-workspace") {
    recipes.push({
      client: "kilo",
      kind: "manual",
      command: `Edit ${configPath} or use Kilo Settings > Agent Behaviour > MCP Servers > Edit Project MCP to paste the generated mcpServers entry.`,
    });
  }

  if (targetId === "copilot-user" || targetId === "copilot-repo") {
    recipes.push({
      client: "copilot",
      kind: "manual",
      command: `Edit ${configPath} and add the generated mcpServers entry for GitHub Copilot CLI.`,
    });
  }

  if (targetId === "zed-workspace") {
    recipes.push({
      client: "zed",
      kind: "manual",
      command: `Edit ${configPath} or use Zed Agent Settings > Add Custom Server, then trust the worktree so Zed can run the MCP server.`,
    });
  }

  if (targetId === "continue-workspace") {
    recipes.push({
      client: "continue",
      kind: "manual",
      command: `Create or update ${configPath} with the generated YAML server document, then use Continue in Agent mode to load the MCP tools.`,
    });
  }

  if (targetId === "junie-project" || targetId === "junie-user") {
    const scope = targetId === "junie-project" ? "project" : "user";
    recipes.push({
      client: "junie",
      kind: "manual",
      command: `Use Junie's /mcp installation assistant with ${scope} scope, or edit ${configPath} directly and paste the generated mcpServers JSON entry.`,
    });
  }

  if (targetId === "windsurf-user") {
    recipes.push({
      client: "windsurf",
      kind: "manual",
      command: `Edit ${configPath} directly or open Windsurf MCP settings and paste the generated mcpServers entry.`,
    });
  }

  if (targetId === "goose-user") {
    recipes.push({
      client: "goose",
      kind: "manual",
      command: `Edit ${configPath} and add the generated extension under the top-level 'extensions' object, or use 'goose configure' and paste the same values there.`,
    });
    if (mode === "stdio") {
      recipes.push({
        client: "goose",
        kind: "cli",
        command: `goose session --with-extension ${shellQuote(`${process.execPath} ${SERVER_ENTRY_PATH}`)}`,
      });
    } else if (mode === "stream") {
      recipes.push({
        client: "goose",
        kind: "cli",
        command: `goose session --with-streamable-http-extension ${shellQuote(effectiveUrl)}`,
      });
    }
  }

  return recipes;
}
