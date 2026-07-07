import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { loadCatalog } from "@omni-skills/catalog-core";
import { configureClientMcp, installSkills, removeSkills } from "../src/local-sidecar.js";

const REAL_SKILL_ID = loadCatalog().skills[0].id;

let tmpRoot;
let options;
let targetPath;

beforeEach(() => {
  tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "omni-mcp-dryrun-"));
  options = {
    cwd: path.join(tmpRoot, "cwd"),
    homeDir: path.join(tmpRoot, "home"),
    codexHome: path.join(tmpRoot, "codex"),
  };
  fs.mkdirSync(options.cwd, { recursive: true });
  fs.mkdirSync(options.homeDir, { recursive: true });
  targetPath = path.join(options.cwd, "skills-target");
});

afterEach(() => {
  fs.rmSync(tmpRoot, { recursive: true, force: true });
});

describe("installSkills dry-run default (destructive op is safe by default)", () => {
  test("omitting dry_run does NOT write any files", () => {
    const result = installSkills(
      { skill_ids: [REAL_SKILL_ID], target_path: targetPath, include_docs: false },
      options,
    );

    expect(result.dry_run).toBe(true);
    expect(result.applied).toBe(false);
    // A real plan is still built, so the preview is useful...
    expect(result.operations.length).toBeGreaterThan(0);
    // ...but nothing was actually written to disk.
    expect(fs.existsSync(targetPath)).toBe(false);
  });

  test("explicit dry_run:true also does not write", () => {
    const result = installSkills(
      { skill_ids: [REAL_SKILL_ID], target_path: targetPath, include_docs: false, dry_run: true },
      options,
    );

    expect(result.applied).toBe(false);
    expect(fs.existsSync(targetPath)).toBe(false);
  });

  test("explicit dry_run:false actually writes the skill files", () => {
    const result = installSkills(
      { skill_ids: [REAL_SKILL_ID], target_path: targetPath, include_docs: false, dry_run: false },
      options,
    );

    expect(result.applied).toBe(true);
    expect(fs.existsSync(path.join(targetPath, REAL_SKILL_ID, "SKILL.md"))).toBe(true);
  });
});

describe("removeSkills dry-run default (destructive op is safe by default)", () => {
  let skillDir;

  beforeEach(() => {
    // Seed a real installed skill directory so there is something to (not) remove.
    installSkills(
      { skill_ids: [REAL_SKILL_ID], target_path: targetPath, include_docs: false, dry_run: false },
      options,
    );
    skillDir = path.join(targetPath, REAL_SKILL_ID);
    expect(fs.existsSync(skillDir)).toBe(true);
  });

  test("omitting dry_run does NOT delete the installed skill directory", () => {
    const result = removeSkills({ skill_ids: [REAL_SKILL_ID], target_path: targetPath }, options);

    expect(result.dry_run).toBe(true);
    expect(result.applied).toBe(false);
    expect(fs.existsSync(skillDir)).toBe(true);
  });

  test("explicit dry_run:true also does not delete", () => {
    const result = removeSkills(
      { skill_ids: [REAL_SKILL_ID], target_path: targetPath, dry_run: true },
      options,
    );

    expect(result.applied).toBe(false);
    expect(fs.existsSync(skillDir)).toBe(true);
  });

  test("explicit dry_run:false actually deletes the installed skill directory", () => {
    const result = removeSkills(
      { skill_ids: [REAL_SKILL_ID], target_path: targetPath, dry_run: false },
      options,
    );

    expect(result.applied).toBe(true);
    expect(fs.existsSync(skillDir)).toBe(false);
  });
});

describe("configureClientMcp dry-run default (destructive op is safe by default)", () => {
  let configFilePath;

  beforeEach(() => {
    configFilePath = path.join(options.cwd, "mcp-config.json");
  });

  test("omitting dry_run does NOT write the config file", () => {
    const result = configureClientMcp({ file_path: configFilePath, transport: "stdio" }, options);

    expect(result.dry_run).toBe(true);
    expect(result.applied).toBe(false);
    expect(fs.existsSync(configFilePath)).toBe(false);
    // The preview text is still produced for the caller to inspect.
    expect(result.next_config_text.length).toBeGreaterThan(0);
  });

  test("explicit dry_run:false writes the config file", () => {
    const result = configureClientMcp(
      { file_path: configFilePath, transport: "stdio", dry_run: false },
      options,
    );

    expect(result.applied).toBe(true);
    expect(fs.existsSync(configFilePath)).toBe(true);
    const written = JSON.parse(fs.readFileSync(configFilePath, "utf-8"));
    expect(written.mcpServers).toBeDefined();
  });
});
