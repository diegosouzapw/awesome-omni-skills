#!/usr/bin/env node

/**
 * awesome-omni-skills — Universal AI Skill Installer
 *
 * Installs curated SKILL.md playbooks into the right directory
 * for any major AI coding assistant.
 *
 * Usage:
 *   npx awesome-omni-skills [options]
 *
 * Options:
 *   --claude        Install to ~/.claude/skills
 *   --cursor        Install to ~/.cursor/skills
 *   --gemini        Install to ~/.gemini/skills
 *   --codex         Install to ~/.codex/skills
 *   --kiro          Install to ~/.kiro/skills
 *   --antigravity   Install to ~/.gemini/antigravity/skills
 *   --opencode      Install to .opencode/skills
 *   --skill <id>    Install only the selected skill (repeatable)
 *   --bundle <id>   Install only the available skills from a bundle (repeatable)
 *   --path <dir>    Install to a custom directory
 *   --version <ver> Checkout a specific version (e.g. 0.0.1 -> v0.0.1)
 *   --tag <tag>     Checkout a specific git tag
 *   -h, --help      Show this help message
 */

"use strict";

const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const os = require("os");
const { resolveSafeRealPath } = require("../lib/symlink-safety");
const { DEFAULT_REF, fetchBundles, fetchManifest, writeRelativeFile } = require("../lib/catalog-client");
const { loadCliState, DEFAULT_STATE_PATH } = require("../lib/cli-state");
const {
  DEFAULT_INSTALL_TARGET_ID,
  PRIMARY_NPX_COMMAND,
  getInstallTargetById,
  listBuiltinInstallTargets,
  normalizeInstallTargetId,
  resolveCustomPath,
} = require("../lib/install-targets.js");
const REPO = "https://github.com/diegosouzapw/awesome-omni-skills.git";
const HOME = process.env.HOME || process.env.USERPROFILE || "";
const SELECTIVE_DOC_PATHS = [
  "docs/README.md",
  "docs/CATALOG.md",
  "docs/users/GETTING-STARTED.md",
  "docs/users/USAGE.md",
  "docs/users/BUNDLES.md",
];

const DEFAULT_TARGET = DEFAULT_INSTALL_TARGET_ID;

// ─── Argument Parsing ────────────────────────────────────────────────

function resolveDir(p) {
  if (!p) return null;
  return resolveCustomPath(p);
}

function getCustomTargets() {
  return loadCliState(process.env.OMNI_SKILLS_STATE_PATH || DEFAULT_STATE_PATH).customInstallTargets || [];
}

function parseArgs() {
  const a = process.argv.slice(2);
  const opts = {
    pathArg: null,
    versionArg: null,
    tagArg: null,
    targetId: "",
    tools: [],
    skills: [],
    bundles: [],
  };

  for (let i = 0; i < a.length; i++) {
    if (a[i] === "--help" || a[i] === "-h") return { help: true };
    if (a[i] === "--path" && a[i + 1]) { opts.pathArg = a[++i]; continue; }
    if (a[i] === "--target-id" && a[i + 1]) { opts.targetId = a[++i]; continue; }
    if (a[i] === "--version" && a[i + 1]) { opts.versionArg = a[++i]; continue; }
    if (a[i] === "--tag" && a[i + 1]) { opts.tagArg = a[++i]; continue; }
    if (a[i] === "--skill" && a[i + 1]) { opts.skills.push(a[++i]); continue; }
    if (a[i] === "--bundle" && a[i + 1]) { opts.bundles.push(a[++i]); continue; }
    if (a[i] === "install") continue;

    const target = listBuiltinInstallTargets().find((item) => item.flag === a[i]);
    if (target) {
      opts.tools.push(target.id);
    }
  }

  return opts;
}

function getTargets(opts) {
  if (opts.pathArg) {
    return [{ name: "Custom", path: resolveDir(opts.pathArg) }];
  }

  const customTargets = getCustomTargets();
  if (opts.targetId) {
    const target = getInstallTargetById(opts.targetId, customTargets);
    if (!target) {
      throw new Error(`Unknown install target id '${opts.targetId}'.`);
    }
    return [{ name: target.name, path: target.resolvedPath }];
  }

  if (opts.tools.length > 0) {
    return opts.tools.map((toolId) => {
      const target = getInstallTargetById(toolId, customTargets);
      return {
        name: target.name,
        path: target.resolvedPath,
      };
    });
  }

  // Default target
  const defaultTarget = getInstallTargetById(DEFAULT_TARGET, customTargets);
  return [{ name: defaultTarget.name, path: defaultTarget.resolvedPath }];
}

// ─── Help ────────────────────────────────────────────────────────────

function printHelp() {
  const toolFlags = listBuiltinInstallTargets()
    .map((target) => `  ${target.flag.padEnd(16)} Install to ${target.name} skills directory`)
    .join("\n");

  console.log(`
╭───────────────────────────────────────────────────────────╮
│  🚀 awesome-omni-skills — Universal AI Skill Installer    │
│  Public skills and curated best-practice skills for AI coding assistants. │
╰───────────────────────────────────────────────────────────╯

Usage:
  ${PRIMARY_NPX_COMMAND} [install] [options]

Tool Targets:
${toolFlags}
  --target-id <id> Install to a registered custom target from local CLI state
  --path <dir>    Install to a custom directory

Options:
  --skill <id>    Install only the selected skill (repeatable)
  --bundle <id>   Install only the available skills from a bundle
  --version <ver> After clone, checkout tag v<ver>
  --tag <tag>     After clone, checkout this exact tag
  -h, --help      Show this help

Examples:
  ${PRIMARY_NPX_COMMAND}                        # Default: Antigravity
  ${PRIMARY_NPX_COMMAND} --claude               # Claude Code
  ${PRIMARY_NPX_COMMAND} --skill omni-figma     # Selective install
  ${PRIMARY_NPX_COMMAND} --goose                # Goose global Agent Skills
  ${PRIMARY_NPX_COMMAND} --qwen                 # Project .qwen/skills
  ${PRIMARY_NPX_COMMAND} --target-id custom-team-cli
  ${PRIMARY_NPX_COMMAND} --bundle full-stack    # Bundle install
  ${PRIMARY_NPX_COMMAND} --cursor --gemini      # Multiple targets
  ${PRIMARY_NPX_COMMAND} --path ./my-skills     # Custom path
  ${PRIMARY_NPX_COMMAND} --version 0.0.1        # Specific version
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
  prepareTarget(target);
  installSkillsIntoTarget(tempDir, target.path);
  console.log(`  ✓ Installed to ${target.path}`);
}

function prepareTarget(target) {
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
}

function getRef(opts) {
  return (
    opts.tagArg ||
    (opts.versionArg
      ? opts.versionArg.startsWith("v")
        ? opts.versionArg
        : `v${opts.versionArg}`
      : DEFAULT_REF)
  );
}

async function resolveSelectedSkillIds(opts, ref) {
  const selected = new Set(opts.skills);

  if (opts.bundles.length > 0) {
    const bundlePayload = await fetchBundles(ref);
    const bundles = bundlePayload.bundles || [];

    for (const bundleId of opts.bundles) {
      const bundle = bundles.find((item) => item.id === bundleId);
      if (!bundle) {
        throw new Error(`Unknown bundle '${bundleId}'.`);
      }

      bundle.available_skill_ids.forEach((skillId) => selected.add(skillId));

      if (bundle.missing_skill_ids.length > 0) {
        console.warn(
          `  ⚠ Bundle '${bundleId}' references unavailable skills: ${bundle.missing_skill_ids.join(", ")}`
        );
      }
    }
  }

  return [...selected];
}

async function downloadDocsIntoTarget(ref, targetPath) {
  for (const relativePath of SELECTIVE_DOC_PATHS) {
    const destination = path.join(targetPath, relativePath.replace(/^docs\//, "docs/"));
    await writeRelativeFile(relativePath, destination, ref);
  }
}

async function installSelectedSkillsIntoTarget(skillIds, ref, target) {
  prepareTarget(target);

  for (const skillId of skillIds) {
    const manifest = await fetchManifest(skillId, ref);
    for (const artifact of manifest.artifacts || []) {
      const installRelativePath = artifact.path.replace(/^skills\//, "");
      const destination = path.join(target.path, installRelativePath);
      await writeRelativeFile(artifact.path, destination, ref);
    }
  }

  await downloadDocsIntoTarget(ref, target.path);

  console.log(`  ✓ Installed ${skillIds.length} selected skill(s) to ${target.path}`);
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
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

  const ref = getRef(opts);
  const selectedSkillIds = await resolveSelectedSkillIds(opts, ref);

  if (selectedSkillIds.length > 0) {
    console.log("\n🚀 awesome-omni-skills selective installer\n");
    console.log(`Source ref: ${ref}`);
    console.log(`Selected skills: ${selectedSkillIds.join(", ")}\n`);

    console.log(`Installing for ${targets.length} target(s):\n`);
    for (const target of targets) {
      console.log(`📦 ${target.name}:`);
      await installSelectedSkillsIntoTarget(selectedSkillIds, ref, target);
      console.log();
    }

    console.log("━".repeat(55));
    console.log("✅ Selective installation complete!");
    console.log(`\n💡 Installed skills: ${selectedSkillIds.join(", ")}`);
    console.log(`📚 Browse bundles: docs/users/BUNDLES.md`);
    console.log(`📖 Usage guide:   docs/users/USAGE.md\n`);
    return;
  }

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "awesome-omni-skills-"));
  const originalCwd = process.cwd();

  try {
    console.log("\n🚀 awesome-omni-skills installer\n");
    console.log("Cloning repository…");
    run("git", ["clone", "--depth", "1", REPO, tempDir]);

    if (ref && ref !== DEFAULT_REF) {
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
    console.log(`📚 Browse bundles: docs/users/BUNDLES.md`);
    console.log(`📖 Usage guide:   docs/users/USAGE.md\n`);
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
  main().catch((error) => {
    console.error(`\n✗ ${error.message}`);
    process.exit(1);
  });
}

module.exports = {
  copyRecursiveSync,
  installSkillsIntoTarget,
  installForTarget,
  main,
};
