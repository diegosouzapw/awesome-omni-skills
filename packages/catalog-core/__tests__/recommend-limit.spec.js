import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, test, expect, beforeAll, afterAll } from "vitest";
import { buildCatalogDb } from "../../../tools/scripts/build_catalog_db.js";
import { SQLiteSearchAdapter } from "../src/adapters/SQLiteSearchAdapter.js";

function skill(id, quality, desc) {
  return { id, slug: id, display_name: id, description: desc, category: "devops", raw_category: "devops", canonical_category: "devops", tags: [], tools: ["cursor"], family_id: id, quality_score: quality };
}

describe("SQLite recommend candidate ceiling", () => {
  let dir, dbPath, adapter;
  beforeAll(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), "rec-"));
    const catalogPath = path.join(dir, "catalog.json");
    // 3 skills: quality 90, 80, 70. O de menor qualidade (q70) casa o goal "obscure".
    fs.writeFileSync(catalogPath, JSON.stringify({ generated_at: "2026-06-02T00:00:00.000Z", total_skills: 3, categories: ["devops"], skills: [skill("high", 90, "kubernetes deployment"), skill("mid", 80, "kubernetes scaling"), skill("low", 70, "obscure niche tool")], families: [] }));
    dbPath = path.join(dir, "catalog.db");
    buildCatalogDb({ catalogPath, dbPath });
    adapter = new SQLiteSearchAdapter({ databasePath: dbPath });
    adapter.init({ databasePath: dbPath });
  });
  afterAll(() => { adapter?.close(); fs.rmSync(dir, { recursive: true, force: true }); });

  test("default ceiling keeps all skills (no behavior change): low-quality goal match is returned", () => {
    const { results } = adapter.recommend({ goal: "obscure", limit: 5 });
    expect(results.map((r) => r.id)).toContain("low");
  });

  test("a small injected ceiling bounds the pool to the highest-quality skills", () => {
    // ceiling 2 => pool = {high(90), mid(80)} ordenado por quality DESC; "low" fica de fora.
    const { results } = adapter.recommend({ goal: "obscure", limit: 5, recommendCandidateCeiling: 2 });
    expect(results.map((r) => r.id)).not.toContain("low");
  });
});
