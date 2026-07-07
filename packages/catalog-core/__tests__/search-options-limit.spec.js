import { describe, expect, test } from "vitest";
import { MAX_LIMIT, parseSearchOptions } from "../src/adapters/search-utils.js";

describe("parseSearchOptions limit ceiling", () => {
  test("clamps an oversized limit down to MAX_LIMIT", () => {
    const parsed = parseSearchOptions({ limit: 100000 });
    expect(parsed.limit).toBe(MAX_LIMIT);
  });

  test("preserves a requested limit that is within the ceiling", () => {
    const parsed = parseSearchOptions({ limit: 1000 });
    expect(parsed.limit).toBe(1000);
  });
});
