import { afterEach, describe, expect, test } from "vitest";
import { loadCatalog, __clearCatalogCache } from "../src/index.js";

const fixture = { generated_at: "x", total_skills: 0, categories: [], skills: [], families: [] };

function makeAdapter(mtime) {
  let reads = 0;
  return {
    adapter: {
      existsSync: () => true,
      readJsonSync: (p) => { if (String(p).endsWith("catalog.json")) reads += 1; return fixture; },
      statMtimeMs: () => mtime,
    },
    reads: () => reads,
  };
}

afterEach(() => __clearCatalogCache());

describe("loadCatalog memoization", () => {
  test("reads the file once while mtime is unchanged", () => {
    const h = makeAdapter(42);
    loadCatalog({ repoRoot: "/tmp/cache-fixture-a", storageAdapter: h.adapter });
    loadCatalog({ repoRoot: "/tmp/cache-fixture-a", storageAdapter: h.adapter });
    expect(h.reads()).toBe(1);
  });

  test("re-reads when mtime changes", () => {
    let mtime = 1;
    let reads = 0;
    const adapter = {
      existsSync: () => true,
      readJsonSync: () => { reads += 1; return fixture; },
      statMtimeMs: () => mtime,
    };
    loadCatalog({ repoRoot: "/tmp/cache-fixture-b", storageAdapter: adapter });
    mtime = 2; // arquivo mudou
    loadCatalog({ repoRoot: "/tmp/cache-fixture-b", storageAdapter: adapter });
    expect(reads).toBe(2);
  });
});
