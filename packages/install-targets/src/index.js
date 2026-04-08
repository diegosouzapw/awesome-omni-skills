import os from "node:os";
import path from "node:path";

const PRIMARY_NPX_COMMAND = "npx awesome-omni-skills";

const BUILTIN_INSTALL_TARGET_DEFINITIONS = [
  {
    id: "claude-code",
    aliases: ["claude", "claude-code"],
    name: "Claude Code",
    flag: "--claude",
    path: ({ homeDir }) => path.join(homeDir, ".claude", "skills"),
    description: "User-scoped Claude Code skills directory.",
  },
  {
    id: "cursor",
    aliases: ["cursor"],
    name: "Cursor",
    flag: "--cursor",
    path: ({ homeDir }) => path.join(homeDir, ".cursor", "skills"),
    description: "User-scoped Cursor skills directory.",
  },
  {
    id: "gemini-cli",
    aliases: ["gemini", "gemini-cli"],
    name: "Gemini CLI",
    flag: "--gemini",
    path: ({ homeDir }) => path.join(homeDir, ".gemini", "skills"),
    description: "User-scoped Gemini CLI skills directory.",
  },
  {
    id: "codex-cli",
    aliases: ["codex", "codex-cli"],
    name: "Codex CLI",
    flag: "--codex",
    path: ({ codexHome }) => path.join(codexHome, "skills"),
    description: "User-scoped Codex skills directory.",
  },
  {
    id: "kiro",
    aliases: ["kiro"],
    name: "Kiro",
    flag: "--kiro",
    path: ({ homeDir }) => path.join(homeDir, ".kiro", "skills"),
    description: "User-scoped Kiro skills directory.",
  },
  {
    id: "antigravity",
    aliases: ["antigravity"],
    name: "Antigravity",
    flag: "--antigravity",
    path: ({ homeDir }) => path.join(homeDir, ".gemini", "antigravity", "skills"),
    description: "Antigravity skills directory nested under Gemini.",
  },
  {
    id: "goose",
    aliases: ["goose"],
    name: "Goose",
    flag: "--goose",
    path: ({ homeDir }) => path.join(homeDir, ".agents", "skills"),
    description: "Global Agent Skills directory recommended by Goose.",
  },
  {
    id: "qwen-code",
    aliases: ["qwen", "qwen-code"],
    name: "Qwen Code",
    flag: "--qwen",
    path: ({ cwd }) => path.join(cwd, ".qwen", "skills"),
    description: "Project-scoped Qwen Code skills directory.",
  },
  {
    id: "opencode",
    aliases: ["opencode"],
    name: "OpenCode",
    flag: "--opencode",
    path: ({ cwd }) => path.join(cwd, ".opencode", "skills"),
    description: "Project-scoped OpenCode skills directory.",
  },
];

const DEFAULT_INSTALL_TARGET_ID = "antigravity";

function resolveInstallContext(options = {}) {
  const homeDir = options.homeDir || os.homedir();
  return {
    cwd: options.cwd || process.cwd(),
    homeDir,
    codexHome: options.codexHome || process.env.CODEX_HOME || path.join(homeDir, ".codex"),
  };
}

function expandUserPath(value, options = {}) {
  const homeDir = options.homeDir || os.homedir();
  return String(value || "").replace(/^~(?=$|\/)/, homeDir);
}

function resolveCustomPath(value, options = {}) {
  const cwd = options.cwd || process.cwd();
  const expanded = expandUserPath(value, options).trim();
  if (!expanded) {
    return "";
  }
  return path.isAbsolute(expanded) ? path.normalize(expanded) : path.resolve(cwd, expanded);
}

function slugifyInstallTargetName(value) {
  let result = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
  
  while (result.startsWith("-")) result = result.slice(1);
  while (result.endsWith("-")) result = result.slice(0, -1);
  
  return result;
}

function normalizeInstallTargetId(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (!normalized) {
    return "";
  }

  for (const definition of BUILTIN_INSTALL_TARGET_DEFINITIONS) {
    if (definition.id === normalized || definition.aliases.includes(normalized)) {
      return definition.id;
    }
  }

  return normalized;
}

function normalizeCustomInstallTargetEntry(entry, options = {}) {
  if (!entry || typeof entry !== "object") {
    return null;
  }

  const name = String(entry.name || "").trim();
  const resolvedPath = resolveCustomPath(entry.path || entry.targetPath || "", options);
  if (!name || !resolvedPath) {
    return null;
  }

  const requestedId = slugifyInstallTargetName(entry.id || "");
  const fallbackId = `custom-${slugifyInstallTargetName(name) || "target"}`;
  const id = normalizeInstallTargetId(requestedId || fallbackId);

  return {
    id,
    name,
    resolvedPath,
    flag: null,
    description: entry.description || "User-registered install target.",
    source: "custom",
    kind: "custom",
    created_at: entry.created_at || null,
    updated_at: entry.updated_at || null,
  };
}

function listBuiltinInstallTargets(options = {}) {
  const context = resolveInstallContext(options);
  return BUILTIN_INSTALL_TARGET_DEFINITIONS.map((definition) => ({
    id: definition.id,
    name: definition.name,
    flag: definition.flag,
    resolvedPath: definition.path(context),
    description: definition.description,
    source: "builtin",
    kind: "builtin",
  }));
}

function listCustomInstallTargets(customTargets = [], options = {}) {
  return (Array.isArray(customTargets) ? customTargets : [])
    .map((entry) => normalizeCustomInstallTargetEntry(entry, options))
    .filter(Boolean)
    .sort((left, right) => left.name.localeCompare(right.name));
}

function listInstallTargets(customTargets = [], options = {}) {
  return [...listBuiltinInstallTargets(options), ...listCustomInstallTargets(customTargets, options)];
}

function getInstallTargetById(id, customTargets = [], options = {}) {
  const normalizedId = normalizeInstallTargetId(id);
  if (!normalizedId) {
    return null;
  }
  return listInstallTargets(customTargets, options).find((target) => target.id === normalizedId) || null;
}

function getInstallTargetFlag(targetId) {
  const target = listBuiltinInstallTargets().find((candidate) => candidate.id === normalizeInstallTargetId(targetId));
  return target?.flag || "";
}

function buildInstallerArgs({ tool, targetPath, skillId, bundleId, customTargets = [] }, options = {}) {
  const args = [];
  const resolvedTargetPath = resolveCustomPath(targetPath, options);
  const normalizedTool = normalizeInstallTargetId(tool);
  const target = normalizedTool ? getInstallTargetById(normalizedTool, customTargets, options) : null;

  if (resolvedTargetPath) {
    args.push("--path", resolvedTargetPath);
  } else if (target?.flag) {
    args.push(target.flag);
  } else if (target?.id) {
    args.push("--target-id", target.id);
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

function isInstallTargetFlag(value) {
  return listBuiltinInstallTargets().some((target) => target.flag === value);
}

export {
  BUILTIN_INSTALL_TARGET_DEFINITIONS,
  DEFAULT_INSTALL_TARGET_ID,
  PRIMARY_NPX_COMMAND,
  buildInstallerArgs,
  expandUserPath,
  getInstallTargetById,
  getInstallTargetFlag,
  isInstallTargetFlag,
  listBuiltinInstallTargets,
  listCustomInstallTargets,
  listInstallTargets,
  normalizeCustomInstallTargetEntry,
  normalizeInstallTargetId,
  renderInstallerCommand,
  resolveCustomPath,
  resolveInstallContext,
  slugifyInstallTargetName,
};
