#!/usr/bin/env node

/**
 * omni-skills — Universal AI Skill Installer
 *
 * Installs curated SKILL.md playbooks into the right directory
 * for any major AI coding assistant.
 *
 * Usage:
 *   npx omni-skills [options]
 *
 * Options:
 *   --claude        Install to ~/.claude/skills
 *   --cursor        Install to ~/.cursor/skills
 *   --gemini        Install to ~/.gemini/skills
 *   --codex         Install to ~/.codex/skills
 *   --kiro          Install to ~/.kiro/skills
 *   --antigravity   Install to ~/.gemini/antigravity/skills
 *   --opencode      Install to .agents/skills
 *   --path <dir>    Install to a custom directory
 *   --version <ver> Checkout a specific version (e.g. 1.0.0 -> v1.0.0)
 *   --tag <tag>     Checkout a specific git tag
 *   -h, --help      Show this help message
 */

"use strict";

const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const os = require("os");
const { resolveSafeRealPath } = require("../lib/symlink-safety");

const REPO = "https://github.com/diegosouzapw/omni-skills.git";
const HOME = process.env.HOME || process.env.USERPROFILE || "";

const TOOL_TARGETS = {
  claude:       { name: "Claude Code",  path: () => path.join(HOME, ".claude", "skills") },
  cursor:       { name: "Cursor",       path: () => path.join(HOME, ".cursor", "skills") },
  gemini:       { name: "Gemini CLI",   path: () => path.join(HOME, ".gemini", "skills") },
  codex:        { name: "Codex CLI",    path: () => {
    const codexHome = process.env.CODEX_HOME;
    return codexHome ? path.join(codexHome, "skills") : path.join(HOME, ".codex", "skills");
  }},
  kiro:         { name: "Kiro",         path: () => path.join(HOME, ".kiro", "skills") },
  antigravity:  { name: "Antigravity",  path: () => path.join(HOME, ".gemini", "antigravity", "skills") },
  opencode:     { name: "OpenCode",     path: () => path.join(process.cwd(), ".agents", "skills") },
};

const DEFAULT_TARGET = "antigravity";

// ─── Argument Parsing ────────────────────────────────────────────────

function resolveDir(p) {
  if (!p) return null;
  const s = p.replace(/^~($|\/)/, HOME + "$1");
  return path.resolve(s);
}

function parseArgs() {
  const a = process.argv.slice(2);
  const opts = { pathArg: null, versionArg: null, tagArg: null, tools: [] };

  for (let i = 0; i < a.length; i++) {
    if (a[i] === "--help" || a[i] === "-h") return { help: true };
    if (a[i] === "--path" && a[i + 1]) { opts.pathArg = a[++i]; continue; }
    if (a[i] === "--version" && a[i + 1]) { opts.versionArg = a[++i]; continue; }
    if (a[i] === "--tag" && a[i + 1]) { opts.tagArg = a[++i]; continue; }
    if (a[i] === "install") continue;

    const tool = a[i].replace(/^--/, "");
    if (TOOL_TARGETS[tool]) {
      opts.tools.push(tool);
    }
  }

  return opts;
}

function getTargets(opts) {
  if (opts.pathArg) {
    return [{ name: "Custom", path: resolveDir(opts.pathArg) }];
  }

  if (opts.tools.length > 0) {
    return opts.tools.map(t => ({
      name: TOOL_TARGETS[t].name,
      path: TOOL_TARGETS[t].path(),
    }));
  }

  // Default target
  const def = TOOL_TARGETS[DEFAULT_TARGET];
  return [{ name: def.name, path: def.path() }];
}

// ─── Help ────────────────────────────────────────────────────────────

function printHelp() {
  const toolFlags = Object.entries(TOOL_TARGETS)
    .map(([flag, { name }]) => `  --${flag.padEnd(14)} Install to ${name} skills directory`)
    .join("\n");

  console.log(`
╭───────────────────────────────────────────────────────────╮
│  🚀 omni-skills — Universal AI Skill Installer            │
│  Curated, validated skills for every AI coding assistant.  │
╰───────────────────────────────────────────────────────────╯

Usage:
  npx omni-skills [install] [options]

Tool Targets:
${toolFlags}
  --path <dir>    Install to a custom directory

Options:
  --version <ver> After clone, checkout tag v<ver>
  --tag <tag>     After clone, checkout this exact tag
  -h, --help      Show this help

Examples:
  npx omni-skills                        # Default: Antigravity
  npx omni-skills --claude               # Claude Code
  npx omni-skills --cursor --gemini      # Multiple targets
  npx omni-skills --path ./my-skills     # Custom path
  npx omni-skills --version 1.0.0        # Specific version
`);
}

// ─── File Operations ─────────────────────────────────────────────────

function copyRecursiveSync(src, dest, rootDir = src, skipGit = true) {
  const stats = fs.lstatSync(src);
  const resolvedSource = stats.isSymbolicLink()
    ? resolveSafeRealPath(rootDir, src)
    : src;

  if (!resolvedSource) {
    console.warn(`  ⚠ Skipping symlink outside root: ${src}`);
    return;
  }

  const resolvedStats = fs.statSync(resolvedSource);
  if (resolvedStats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(resolvedSource).forEach((child) => {
      if (skipGit && child === ".git") return;
      if (child === "node_modules") return;
      copyRecursiveSync(
        path.join(resolvedSource, child),
        path.join(dest, child),
        rootDir,
        skipGit
      );
    });
  } else {
    fs.copyFileSync(resolvedSource, dest);
  }
}

function installSkillsIntoTarget(tempDir, targetPath) {
  const repoSkills = path.join(tempDir, "skills");
  if (!fs.existsSync(repoSkills)) {
    console.error("  ✗ Cloned repo has no skills/ directory.");
    process.exit(1);
  }

  fs.readdirSync(repoSkills).forEach((name) => {
    const src = path.join(repoSkills, name);
    const dest = path.join(targetPath, name);
    copyRecursiveSync(src, dest, repoSkills);
  });

  // also copy docs if present
  const repoDocs = path.join(tempDir, "docs");
  if (fs.existsSync(repoDocs)) {
    const docsDest = path.join(targetPath, "docs");
    if (!fs.existsSync(docsDest)) fs.mkdirSync(docsDest, { recursive: true });
    copyRecursiveSync(repoDocs, docsDest, repoDocs);
  }
}

// ─── Shell Helper ────────────────────────────────────────────────────

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { stdio: "inherit", ...opts });
  if (r.status !== 0) process.exit(r.status == null ? 1 : r.status);
}

// ─── Install Logic ───────────────────────────────────────────────────

function installForTarget(tempDir, target) {
  if (fs.existsSync(target.path)) {
    const gitDir = path.join(target.path, ".git");
    if (fs.existsSync(gitDir)) {
      console.log(`  Migrating from full-repo install to skills-only layout…`);
      const backupPath = `${target.path}_backup_${Date.now()}`;
      try {
        fs.renameSync(target.path, backupPath);
        console.log(`  ⚠ Backup created at: ${backupPath}`);
        fs.mkdirSync(target.path, { recursive: true });
      } catch (err) {
        console.error(`  ✗ Migration Error: ${err.message}`);
        process.exit(1);
      }
    } else {
      console.log(`  Updating existing install at ${target.path}…`);
    }
  } else {
    const parent = path.dirname(target.path);
    if (!fs.existsSync(parent)) {
      try {
        fs.mkdirSync(parent, { recursive: true });
      } catch (e) {
        console.error(`  ✗ Cannot create directory: ${parent}`, e.message);
        process.exit(1);
      }
    }
    fs.mkdirSync(target.path, { recursive: true });
  }

  installSkillsIntoTarget(tempDir, target.path);
  console.log(`  ✓ Installed to ${target.path}`);
}

// ─── Main ────────────────────────────────────────────────────────────

function main() {
  const opts = parseArgs();

  if (opts.help) {
    printHelp();
    return;
  }

  const targets = getTargets(opts);
  if (!targets.length || !HOME) {
    console.error("Could not resolve home directory. Use --path <absolute-path>.");
    process.exit(1);
  }

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "omni-skills-"));
  const originalCwd = process.cwd();

  try {
    console.log("\n🚀 omni-skills installer\n");
    console.log("Cloning repository…");
    run("git", ["clone", "--depth", "1", REPO, tempDir]);

    const ref =
      opts.tagArg ||
      (opts.versionArg
        ? opts.versionArg.startsWith("v")
          ? opts.versionArg
          : `v${opts.versionArg}`
        : null);

    if (ref) {
      console.log(`Checking out ${ref}…`);
      process.chdir(tempDir);
      run("git", ["fetch", "--depth", "1", "origin", `refs/tags/${ref}:refs/tags/${ref}`]);
      run("git", ["checkout", ref]);
      process.chdir(originalCwd);
    }

    console.log(`\nInstalling for ${targets.length} target(s):\n`);
    for (const target of targets) {
      console.log(`📦 ${target.name}:`);
      installForTarget(tempDir, target);
      console.log();
    }

    console.log("━".repeat(55));
    console.log("✅ Installation complete!");
    console.log(`\n💡 Get started: use @brainstorming to plan your first task.`);
    console.log(`📚 Browse bundles: docs/users/bundles.md`);
    console.log(`📖 Usage guide:   docs/users/usage.md\n`);
  } finally {
    try {
      if (fs.existsSync(tempDir)) {
        if (fs.rmSync) {
          fs.rmSync(tempDir, { recursive: true, force: true });
        } else {
          fs.rmdirSync(tempDir, { recursive: true });
        }
      }
    } catch {
      // ignore cleanup errors
    }
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  copyRecursiveSync,
  installSkillsIntoTarget,
  installForTarget,
  main,
};
