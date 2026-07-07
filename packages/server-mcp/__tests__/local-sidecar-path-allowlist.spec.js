import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { loadCatalog } from "@omni-skills/catalog-core";
import {
  configureClientMcp,
  getLocalAllowlistRoots,
  installSkills,
  listInstalledSkills,
} from "../src/local-sidecar.js";

// A real skill id from the actual catalog. installSkills/removeSkills resolve skill
// manifests through catalog-core, so using a real id exercises the full path end to end
// instead of short-circuiting on "skill not found".
const REAL_SKILL_ID = loadCatalog().skills[0].id;

let tmpRoot;
let options;

// Every test gets an isolated fake home/cwd/codexHome so the allowlist under test never
// overlaps with the developer's real filesystem (getLocalAllowlistRoots always includes
// homeDir/.claude, cwd, etc. — using fakes keeps assertions deterministic and safe).
beforeEach(() => {
  tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "omni-mcp-allowlist-"));
  options = {
    cwd: path.join(tmpRoot, "cwd"),
    homeDir: path.join(tmpRoot, "home"),
    codexHome: path.join(tmpRoot, "codex"),
  };
  fs.mkdirSync(options.cwd, { recursive: true });
  fs.mkdirSync(options.homeDir, { recursive: true });
});

afterEach(() => {
  fs.rmSync(tmpRoot, { recursive: true, force: true });
});

describe("local sidecar path allowlist (isPathInside via assertPathAllowed)", () => {
  test("accepts a target_path nested inside an allowed root (cwd)", () => {
    const targetPath = path.join(options.cwd, "skills");
    const result = installSkills(
      { skill_ids: [REAL_SKILL_ID], target_path: targetPath, include_docs: false },
      options,
    );
    expect(result.target_path).toBe(targetPath);
    expect(result.dry_run).toBe(true);
  });

  test("accepts a target_path that IS the allowed root itself", () => {
    const result = installSkills(
      { skill_ids: [REAL_SKILL_ID], target_path: options.cwd, include_docs: false },
      options,
    );
    expect(result.target_path).toBe(path.resolve(options.cwd));
  });

  test("accepts a path that traverses out and back inside the same allowed root", () => {
    // "sub/../skills" literally contains "..", but resolves back inside cwd. The check is
    // resolution-based (path.relative), not a naive string ban on "..".
    const targetPath = path.join(options.cwd, "sub", "..", "skills");
    const result = installSkills(
      { skill_ids: [REAL_SKILL_ID], target_path: targetPath, include_docs: false },
      options,
    );
    expect(result.target_path).toBe(path.resolve(options.cwd, "skills"));
  });

  test("rejects a target_path that escapes every allowed root via traversal (../..)", () => {
    const targetPath = path.join(options.cwd, "..", "..", "outside-target");
    expect(() =>
      installSkills({ skill_ids: [REAL_SKILL_ID], target_path: targetPath, dry_run: true }, options),
    ).toThrow(/outside the Awesome Omni Skills local allowlist/);
  });

  test("rejects an absolute path unrelated to any allowed root", () => {
    expect(() =>
      installSkills(
        { skill_ids: [REAL_SKILL_ID], target_path: "/etc/passwd-not-really", dry_run: true },
        options,
      ),
    ).toThrow(/outside the Awesome Omni Skills local allowlist/);
  });

  test("rejects a directory that merely shares a string prefix with an allowed root", () => {
    // "<cwd>-evil" starts with the same characters as "<cwd>" but is a sibling, not a
    // descendant. This guards against a naive `startsWith` allowlist check instead of the
    // real path.relative()-based containment check.
    const siblingLookalike = `${options.cwd}-evil`;
    fs.mkdirSync(siblingLookalike, { recursive: true });
    expect(() =>
      installSkills(
        { skill_ids: [REAL_SKILL_ID], target_path: siblingLookalike, dry_run: true },
        options,
      ),
    ).toThrow(/outside the Awesome Omni Skills local allowlist/);
  });

  test("getLocalAllowlistRoots includes cwd, homeDir/.claude and extraAllowedRoots, and excludes an arbitrary path", () => {
    const extraRoot = path.join(tmpRoot, "extra");
    const roots = getLocalAllowlistRoots({ ...options, extraAllowedRoots: [extraRoot] });
    expect(roots).toContain(path.resolve(options.cwd));
    expect(roots).toContain(path.resolve(options.homeDir, ".claude"));
    expect(roots).toContain(path.resolve(extraRoot));
    expect(roots).not.toContain(path.resolve("/etc"));
  });

  test("configureClientMcp rejects a file_path outside the allowlist", () => {
    expect(() =>
      configureClientMcp({ file_path: "/etc/mcp-evil.json", dry_run: true }, options),
    ).toThrow(/outside the Awesome Omni Skills local allowlist/);
  });

  test("listInstalledSkills rejects a target_path outside the allowlist", () => {
    expect(() =>
      listInstalledSkills({ target_path: path.join(tmpRoot, "..", "..", "somewhere-else") }, options),
    ).toThrow(/outside the Awesome Omni Skills local allowlist/);
  });
});
