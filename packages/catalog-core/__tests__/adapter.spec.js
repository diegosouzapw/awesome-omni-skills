import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, test } from "vitest";
import { defaultFsAdapter } from "../src/repositories/FileSystemAdapter.js";

const tempDirs = [];

afterEach(() => {
  while (tempDirs.length > 0) {
    const dir = tempDirs.pop();
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("defaultFsAdapter", () => {
  test("reports file existence and parses JSON synchronously", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "catalog-core-adapter-"));
    tempDirs.push(dir);
    const jsonPath = path.join(dir, "manifest.json");
    fs.writeFileSync(jsonPath, JSON.stringify({ id: "adapter-test", ok: true }), "utf8");

    expect(defaultFsAdapter.existsSync(jsonPath)).toBe(true);
    expect(defaultFsAdapter.existsSync(path.join(dir, "missing.json"))).toBe(false);
    expect(defaultFsAdapter.readJsonSync(jsonPath)).toEqual({ id: "adapter-test", ok: true });
  });
});
