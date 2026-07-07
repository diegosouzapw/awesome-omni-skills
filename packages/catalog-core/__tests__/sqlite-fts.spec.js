import path from "node:path";
import fs from "node:fs";
import os from "node:os";
import { describe, expect, test, beforeAll, afterAll } from "vitest";
import { buildCatalogDb } from "../../../tools/scripts/build_catalog_db.js";
import Database from "better-sqlite3";
import { SQLiteSearchAdapter } from "../src/adapters/SQLiteSearchAdapter.js";

function fixtureCatalog() {
  return {
    generated_at: "2026-06-02T00:00:00.000Z",
    total_skills: 2,
    categories: ["devops"],
    skills: [
      { id: "kube-ops", slug: "kube-ops", display_name: "Kube Ops", description: "kubernetes cluster operations",
        category: "devops", raw_category: "devops", canonical_category: "devops",
        tags: ["governance", "kubernetes"], tools: ["cursor"], family_id: "kube", quality_score: 90 },
      { id: "kube-ops-v2", slug: "kube-ops-v2", display_name: "Kube Ops v2", description: "kubernetes ops",
        category: "devops", raw_category: "devops", canonical_category: "devops",
        tags: ["governance"], tools: ["cursor"], family_id: "kube", quality_score: 88 },
    ],
    families: [{ id: "kube", display_name: "Kube", default_skill_id: "kube-ops", variants: [] }],
  };
}

describe("catalog.db FTS schema", () => {
  let dir, dbPath, db;
  beforeAll(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), "fts-"));
    const catalogPath = path.join(dir, "catalog.json");
    fs.writeFileSync(catalogPath, JSON.stringify(fixtureCatalog()));
    dbPath = path.join(dir, "catalog.db");
    buildCatalogDb({ catalogPath, dbPath });
    db = new Database(dbPath, { readonly: true });
  });
  afterAll(() => { db?.close(); fs.rmSync(dir, { recursive: true, force: true }); });

  test("skills table carries family_id", () => {
    const cols = db.prepare("PRAGMA table_info(skills)").all().map((c) => c.name);
    expect(cols).toContain("family_id");
  });

  test("skills_fts uses detail=column (bm25-capable, position-free)", () => {
    const sql = db.prepare("SELECT sql FROM sqlite_master WHERE name = 'skills_fts'").get().sql;
    expect(sql).toMatch(/detail\s*=\s*['"]?column/i);
  });

  test("a tag-only term is matched by the porter FTS table", () => {
    const rows = db.prepare("SELECT id FROM skills_fts WHERE skills_fts MATCH 'governance'").all();
    expect(rows.length).toBeGreaterThan(0);
  });

  test("BM25 column weighting is active (detail not none)", () => {
    const ranked = db.prepare(
      "SELECT id, bm25(skills_fts, 10.0, 5.0, 3.0, 2.0, 1.0) AS s FROM skills_fts WHERE skills_fts MATCH 'kube' ORDER BY s"
    ).all();
    expect(ranked[0].id).toBe("kube-ops");
  });

  test("hydrated rows preserve family_id for family grouping", () => {
    const adapter = new SQLiteSearchAdapter({ databasePath: dbPath });
    adapter.init({ databasePath: dbPath });
    const { results } = adapter.search({ query: "kubernetes", searchMode: "sqlite" });
    adapter.close();
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((r) => typeof r.family_id === "string")).toBe(true);
  });

  // Regression guard: bm25() arg counts must match the current skills_fts (5 cols)
  // and skills_trigram (3 cols) schemas. This does not assert on result ORDER
  // (the ORDER BY tiebreaks on exact_id/prefix_id/relevance_score before rank),
  // it only proves both strategies execute without a bm25 argument-count error
  // and return results.
  test("adapter bm25 weights match column counts for fts5 and trigram strategies", () => {
    const adapter = new SQLiteSearchAdapter({ databasePath: dbPath });
    adapter.init({ databasePath: dbPath });
    // fts5 (exact term) e trigram (fuzzy/typo) devem rodar sem erro de bm25 e retornar resultados.
    const exact = adapter.search({ query: "kubernetes", searchMode: "sqlite" });
    const fuzzy = adapter.search({ query: "kuberntes", searchMode: "sqlite" }); // typo -> trigram
    adapter.close();
    expect(exact.results.length).toBeGreaterThan(0);
    expect(fuzzy.results.length).toBeGreaterThan(0);
  });
});
