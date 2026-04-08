import { describe, expect, test } from "vitest";
import { isSafeArchiveFormat } from "../src/archive-format.js";

describe("isSafeArchiveFormat", () => {
  test("accepts published archive formats such as tar.gz", () => {
    expect(isSafeArchiveFormat("zip")).toBe(true);
    expect(isSafeArchiveFormat("tar.gz")).toBe(true);
    expect(isSafeArchiveFormat("tar-bz2")).toBe(true);
  });

  test("rejects traversal or path-like input", () => {
    expect(isSafeArchiveFormat("../zip")).toBe(false);
    expect(isSafeArchiveFormat("tar/gz")).toBe(false);
    expect(isSafeArchiveFormat("")).toBe(false);
  });
});
