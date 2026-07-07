import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, test, expect, afterAll } from "vitest";
import { buildCatalogDb } from "../../../tools/scripts/build_catalog_db.js";
import { createCatalogRuntime } from "../src/lib/catalog-runtime.js";

const skillA = { id: "alpha", slug: "alpha", display_name: "Alpha", description: "generic helper", category: "devops", raw_category: "devops", canonical_category: "devops", tags: [], tools: ["cursor"], family_id: "alpha", quality_score: 80 };
const skillB = { id: "bravo", slug: "bravo", display_name: "Bravo", description: "wireguard vpn tunnel", category: "devops", raw_category: "devops", canonical_category: "devops", tags: [], tools: ["cursor"], family_id: "bravo", quality_score: 80 };

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "cli-sql-"));
afterAll(() => fs.rmSync(dir, { recursive: true, force: true }));

describe("CLI catalog-runtime uses the SQL path when catalog.db exists", () => {
  test("adapter does NOT have an injected catalog and finds a DB-only skill", () => {
    const distDir = path.join(dir, "dist");
    fs.mkdirSync(distDir, { recursive: true });
    // listBundles() lê data/bundles.json a partir do repoRoot
    fs.mkdirSync(path.join(dir, "data"), { recursive: true });
    fs.writeFileSync(path.join(dir, "data", "bundles.json"), JSON.stringify([]));
    // catalog.json só com A; DB com A e B
    fs.writeFileSync(path.join(distDir, "catalog.json"), JSON.stringify({ generated_at: "2026-06-02T00:00:00.000Z", total_skills: 1, categories: ["devops"], skills: [skillA], families: [] }));
    const fullPath = path.join(dir, "full.json");
    fs.writeFileSync(fullPath, JSON.stringify({ generated_at: "2026-06-02T00:00:00.000Z", total_skills: 2, categories: ["devops"], skills: [skillA, skillB], families: [] }));
    buildCatalogDb({ catalogPath: fullPath, dbPath: path.join(distDir, "catalog.db") });

    const runtime = createCatalogRuntime({ repoRoot: dir });
    try {
      expect(runtime.searchAdapter.mode).toBe("sqlite");
      expect(Boolean(runtime.searchAdapter.catalog?.skills)).toBe(false); // NÃO injetado
      const { results } = runtime.searchAdapter.search({ query: "wireguard" });
      expect(results.map((r) => r.id)).toContain("bravo"); // só existe no DB
      // runtime.catalog (para renderização) ainda reflete o catalog.json (só A)
      expect(runtime.catalog.skills.map((s) => s.id)).toEqual(["alpha"]);
    } finally {
      runtime.close();
    }
  });
});
