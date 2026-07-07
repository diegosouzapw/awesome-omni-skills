import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, test } from "vitest";
import { resolveSafeDbPath } from "../src/adapters/db-path.js";

const NUL = String.fromCharCode(0);

describe("resolveSafeDbPath", () => {
  test("accepts an absolute .db file path even if it does not exist yet", () => {
    const p = path.resolve(os.tmpdir(), "nope", "catalog.db");
    expect(resolveSafeDbPath(p)).toBe(p);
  });
  test("accepts an existing directory", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "dbp-"));
    try {
      expect(resolveSafeDbPath(dir)).toBe(path.resolve(dir));
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
  test("rejects empty / null", () => {
    expect(resolveSafeDbPath("")).toBe(null);
    expect(resolveSafeDbPath(null)).toBe(null);
  });
  test("rejects a traversal path", () => {
    expect(resolveSafeDbPath("../../etc/catalog.db")).toBe(null);
  });
  test("rejects a NUL byte", () => {
    expect(resolveSafeDbPath(`/tmp/x${NUL}.db`)).toBe(null);
  });
  test("rejects a non-.db path that is not an existing directory", () => {
    expect(resolveSafeDbPath(path.resolve(os.tmpdir(), "does-not-exist-xyz"))).toBe(null);
  });
});
