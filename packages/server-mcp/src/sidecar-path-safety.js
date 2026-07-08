import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { isPathInside } from "@omni-skills/shared-fs";
import {
  getClineConfigRoot,
  getGooseConfigDir,
  getCopilotHome,
  getKiloConfigDir,
  getOpenCodeConfigDir,
  getClaudeDesktopConfigPath,
} from "./client-config-paths.js";

function parseExtraAllowlist() {
  return String(process.env.OMNI_SKILLS_LOCAL_ALLOWLIST || "")
    .split(path.delimiter)
    .map((value) => value.trim())
    .filter(Boolean);
}

export function uniq(values) {
  return [...new Set(values.filter(Boolean))];
}

export function normalizeEnv(options = {}) {
  const homeDir = path.resolve(
    options.homeDir ||
      process.env.HOME ||
      process.env.USERPROFILE ||
      os.homedir(),
  );
  const cwd = path.resolve(options.cwd || process.cwd());
  const codexHome = path.resolve(options.codexHome || process.env.CODEX_HOME || path.join(homeDir, ".codex"));
  const extraAllowedRoots = uniq([
    ...(options.extraAllowedRoots || []),
    ...parseExtraAllowlist(),
  ]).map((value) => path.resolve(value));

  return {
    homeDir,
    cwd,
    codexHome,
    extraAllowedRoots,
  };
}

export function assertPathInsideRoot(candidatePath, rootPath, label = "Path") {
  const absolutePath = path.resolve(candidatePath);
  const normalizedRoot = path.resolve(rootPath);

  if (!isPathInside(absolutePath, normalizedRoot)) {
    throw new Error(`${label} '${absolutePath}' is outside the allowed root '${normalizedRoot}'.`);
  }

  return absolutePath;
}

export function getLocalAllowlistRoots(options = {}) {
  const env = normalizeEnv(options);
  return uniq([
    path.join(env.homeDir, ".claude"),
    path.join(env.homeDir, ".claude.json"),
    getClineConfigRoot(env),
    path.join(env.homeDir, ".codeium"),
    getGooseConfigDir(env),
    getCopilotHome(env),
    path.join(env.homeDir, ".cursor"),
    path.join(env.homeDir, ".gemini"),
    path.join(env.homeDir, ".kiro"),
    path.join(env.homeDir, ".junie"),
    getKiloConfigDir(env),
    getOpenCodeConfigDir(env),
    getClaudeDesktopConfigPath(env),
    env.codexHome,
    path.join(env.cwd, ".agents"),
    path.join(env.cwd, ".continue"),
    path.join(env.cwd, ".vscode"),
    path.join(env.cwd, ".github"),
    path.join(env.cwd, ".junie"),
    path.join(env.cwd, ".kilocode"),
    path.join(env.cwd, ".opencode"),
    path.join(env.cwd, ".zed"),
    path.join(env.cwd, ".claude"),
    path.join(env.cwd, ".cursor"),
    path.join(env.cwd, ".gemini"),
    path.join(env.cwd, ".kiro"),
    path.join(env.cwd, ".devcontainer"),
    env.cwd,
    ...env.extraAllowedRoots,
  ]).map((value) => path.resolve(value));
}

export function assertPathAllowed(candidatePath, options = {}) {
  const absolutePath = path.resolve(candidatePath);
  const allowlistRoots = getLocalAllowlistRoots(options);
  const allowed = allowlistRoots.some((rootPath) => isPathInside(absolutePath, rootPath));

  if (!allowed) {
    throw new Error(
      `Path '${absolutePath}' is outside the Awesome Omni Skills local allowlist. ` +
        `Use OMNI_SKILLS_LOCAL_ALLOWLIST to explicitly permit additional roots.`,
    );
  }

  return absolutePath;
}

export function getNearestExistingPath(targetPath) {
  let currentPath = path.resolve(targetPath);
  while (!fs.existsSync(currentPath)) {
    const parentPath = path.dirname(currentPath);
    if (parentPath === currentPath) {
      return currentPath;
    }
    currentPath = parentPath;
  }
  return currentPath;
}

export function canWritePath(targetPath) {
  try {
    fs.accessSync(getNearestExistingPath(targetPath), fs.constants.W_OK);
    return true;
  } catch {
    return false;
  }
}

export function listInstalledSkillIdsForPath(skillsPath) {
  if (!fs.existsSync(skillsPath) || !fs.statSync(skillsPath).isDirectory()) {
    return [];
  }

  return fs
    .readdirSync(skillsPath)
    .filter((entry) => {
      const skillEntryPath = path.join(skillsPath, entry);
      return fs.existsSync(path.join(skillEntryPath, "SKILL.md")) && fs.statSync(skillEntryPath).isDirectory();
    })
    .sort();
}
