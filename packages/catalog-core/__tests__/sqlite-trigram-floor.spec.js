import path from "node:path";
import fs from "node:fs";
import os from "node:os";
import { describe, expect, test, beforeAll, afterAll } from "vitest";
import { buildCatalogDb } from "../../../tools/scripts/build_catalog_db.js";
import { SQLiteSearchAdapter } from "../src/adapters/SQLiteSearchAdapter.js";

function fixtureCatalog() {
  const base = {
    category: "devops",
    raw_category: "devops",
    canonical_category: "devops",
    tools: ["cursor"],
  };
  return {
    generated_at: "2026-06-02T00:00:00.000Z",
    total_skills: 3,
    categories: ["devops"],
    skills: [
      { ...base, id: "kube-ops", slug: "kube-ops", display_name: "Kubernetes Cluster Operations", description: "kubernetes cluster operations and orchestration", tags: ["kubernetes", "cluster"], family_id: "kube", quality_score: 90 },
      { ...base, id: "py-pipeline", slug: "py-pipeline", display_name: "Python Data Pipeline", description: "python data pipeline for analytics", tags: ["python", "data"], family_id: "py", quality_score: 85 },
      { ...base, id: "docker-build", slug: "docker-build", display_name: "Docker Container Build", description: "docker container build and packaging", tags: ["docker", "container"], family_id: "docker", quality_score: 80 },
    ],
    families: [
      { id: "kube", display_name: "Kube", default_skill_id: "kube-ops", variants: [] },
      { id: "py", display_name: "Py", default_skill_id: "py-pipeline", variants: [] },
      { id: "docker", display_name: "Docker", default_skill_id: "docker-build", variants: [] },
    ],
  };
}

describe("SQLite trigram fallback relevance floor", () => {
  let dir, dbPath;
  beforeAll(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), "trigram-floor-"));
    const catalogPath = path.join(dir, "catalog.json");
    fs.writeFileSync(catalogPath, JSON.stringify(fixtureCatalog()));
    dbPath = path.join(dir, "catalog.db");
    buildCatalogDb({ catalogPath, dbPath });
  });
  afterAll(() => fs.rmSync(dir, { recursive: true, force: true }));

  function search(query) {
    const adapter = new SQLiteSearchAdapter({ databasePath: dbPath });
    adapter.init({ databasePath: dbPath });
    try {
      return adapter.search({ query, searchMode: "sqlite" });
    } finally {
      adapter.close();
    }
  }

  test("typo of a real term still matches via trigram (tolerance preserved)", () => {
    const { results } = search("kuberntes");
    expect(results.map((r) => r.id)).toContain("kube-ops");
  });

  test("exact term matches via fts5, unaffected by the floor", () => {
    const { results } = search("kubernetes");
    expect(results.map((r) => r.id)).toContain("kube-ops");
  });

  test("gibberish with real word fragments returns no matches", () => {
    expect(search("zzzznomatchhere").results).toHaveLength(0);
  });

  test("pure gibberish returns no matches", () => {
    expect(search("qwxzptlkjv").results).toHaveLength(0);
  });

  // Reproduces the real over-recall: the trigram OR-match returns "kube-ops"
  // because the junk query shares the "kub" trigram, yet only ~1/4 of the query
  // trigrams are covered. Without the floor this leaks a result; with it, filtered.
  test("a query that only shares a small fragment with a skill is filtered", () => {
    expect(search("kubzzzzzzzzzz").results).toHaveLength(0);
  });
});
