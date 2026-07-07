import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, test } from "vitest";
import { loadGolden } from "../load-golden.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GOLDEN_PATH = path.join(__dirname, "..", "golden-queries.json");

describe("golden query set", () => {
  test("loadGolden returns a well-formed set with >= 20 queries", () => {
    const golden = loadGolden(GOLDEN_PATH);
    expect(Array.isArray(golden.queries)).toBe(true);
    expect(golden.queries.length).toBeGreaterThanOrEqual(20);
  });

  test("each entry carries a non-empty query and >= 1 expected id substring", () => {
    const { queries } = loadGolden(GOLDEN_PATH);
    for (const entry of queries) {
      expect(typeof entry.q).toBe("string");
      expect(entry.q.trim().length).toBeGreaterThan(0);
      expect(Array.isArray(entry.expect_id_substrings)).toBe(true);
      expect(entry.expect_id_substrings.length).toBeGreaterThanOrEqual(1);
      for (const sub of entry.expect_id_substrings) {
        expect(typeof sub).toBe("string");
        expect(sub.trim().length).toBeGreaterThan(0);
      }
    }
  });
});
