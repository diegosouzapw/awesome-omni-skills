import path from "node:path";
import { describe, expect, test } from "vitest";
import { isPathInside } from "../src/index.js";

const root = path.resolve("/tmp/root");

describe("isPathInside", () => {
  test("accepts a path inside the root", () => {
    expect(isPathInside(path.join(root, "a", "b.txt"), root)).toBe(true);
  });
  test("accepts the root itself", () => {
    expect(isPathInside(root, root)).toBe(true);
  });
  test("rejects a parent-traversal path", () => {
    expect(isPathInside(path.resolve(root, "..", "etc", "passwd"), root)).toBe(false);
  });
  test("rejects an absolute path outside the root", () => {
    expect(isPathInside("/etc/passwd", root)).toBe(false);
  });
  test("rejects a sibling dir with a shared prefix (not naive startsWith)", () => {
    expect(isPathInside(`${root}-evil/x`, root)).toBe(false);
  });
});
