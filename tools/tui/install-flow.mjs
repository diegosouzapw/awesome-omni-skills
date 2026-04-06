import os from "node:os";
import path from "node:path";

const PRIMARY_NPX_COMMAND = "npx awesome-omni-skills";

const KNOWN_INSTALL_TARGETS = [
  {
    id: "claude-code",
    name: "Claude Code",
    flag: "--claude",
    path: () => path.join(os.homedir(), ".claude", "skills"),
  },
  {
    id: "cursor",
    name: "Cursor",
    flag: "--cursor",
    path: () => path.join(os.homedir(), ".cursor", "skills"),
  },
  {
    id: "gemini-cli",
    name: "Gemini CLI",
    flag: "--gemini",
    path: () => path.join(os.homedir(), ".gemini", "skills"),
  },
  {
    id: "codex-cli",
    name: "Codex CLI",
    flag: "--codex",
    path: () => path.join(process.env.CODEX_HOME || path.join(os.homedir(), ".codex"), "skills"),
  },
  {
    id: "kiro",
    name: "Kiro",
    flag: "--kiro",
    path: () => path.join(os.homedir(), ".kiro", "skills"),
  },
  {
    id: "antigravity",
    name: "Antigravity",
    flag: "--antigravity",
    path: () => path.join(os.homedir(), ".gemini", "antigravity", "skills"),
  },
  {
    id: "opencode",
    name: "OpenCode",
    flag: "--opencode",
    path: () => path.join(process.cwd(), ".agents", "skills"),
  },
];

const TOOL_INSTALL_FLAGS = {
  "claude-code": "--claude",
  cursor: "--cursor",
  "gemini-cli": "--gemini",
  "codex-cli": "--codex",
  kiro: "--kiro",
  antigravity: "--antigravity",
  opencode: "--opencode",
};

function normalizeToolId(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function listKnownInstallTargets() {
  return KNOWN_INSTALL_TARGETS.map((target) => ({
    ...target,
    resolvedPath: target.path(),
  }));
}

function expandUserPath(value) {
  return String(value || "").replace(/^~(?=$|\/)/, os.homedir());
}

function resolveCustomPath(value) {
  const expanded = expandUserPath(value).trim();
  return expanded ? path.resolve(expanded) : "";
}

function buildInstallerArgs({ tool, targetPath, skillId, bundleId }) {
  const args = [];
  const normalizedTool = normalizeToolId(tool);
  const flag = TOOL_INSTALL_FLAGS[normalizedTool];
  if (targetPath) {
    args.push("--path", targetPath);
  } else if (flag) {
    args.push(flag);
  }
  if (skillId) {
    args.push("--skill", skillId);
  }
  if (bundleId) {
    args.push("--bundle", bundleId);
  }
  return args;
}

function renderInstallerCommand(args) {
  return `${PRIMARY_NPX_COMMAND} ${args.join(" ")}`.trim();
}

function emptyInstallDraft() {
  return {
    tool: "",
    targetLabel: "",
    targetPath: "",
    scope: "",
    skillId: "",
    bundleId: "",
    query: "",
  };
}

function buildInstallRecord(draft, skill, bundle, installerArgs, command) {
  return {
    tool: draft.tool || "",
    targetPath: draft.targetPath,
    targetLabel: draft.targetLabel,
    scope: draft.scope,
    skillId: skill?.id || "",
    bundleId: bundle?.id || "",
    command,
    installerArgs,
  };
}

function formatRecentInstall(entry) {
  if (entry.scope === "skill" && entry.skillId) {
    return `${entry.targetLabel || entry.tool || "custom"} • skill ${entry.skillId}`;
  }
  if (entry.scope === "bundle" && entry.bundleId) {
    return `${entry.targetLabel || entry.tool || "custom"} • bundle ${entry.bundleId}`;
  }
  if (entry.scope === "search" && entry.skillId) {
    return `${entry.targetLabel || entry.tool || "custom"} • search → ${entry.skillId}`;
  }
  return `${entry.targetLabel || entry.tool || "custom"} • full library`;
}

export {
  KNOWN_INSTALL_TARGETS,
  PRIMARY_NPX_COMMAND,
  buildInstallRecord,
  buildInstallerArgs,
  emptyInstallDraft,
  expandUserPath,
  formatRecentInstall,
  listKnownInstallTargets,
  normalizeToolId,
  renderInstallerCommand,
  resolveCustomPath,
};
