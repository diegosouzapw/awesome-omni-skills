import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, test, expect, beforeAll, afterAll } from "vitest";
import { buildCatalogDb } from "../../../tools/scripts/build_catalog_db.js";
import { searchSkills } from "../src/index.js";
import { MemorySearchAdapter } from "../src/adapters/MemorySearchAdapter.js";
import { createSearchAdapter } from "../src/adapters/createSearchAdapter.js";

const skillA = { id: "alpha", slug: "alpha", display_name: "Alpha", description: "generic devops helper", category: "devops", raw_category: "devops", canonical_category: "devops", tags: ["devops"], tools: ["cursor"], family_id: "alpha", quality_score: 80 };
const skillB = { id: "bravo", slug: "bravo", display_name: "Bravo", description: "wireguard vpn tunnel manager", category: "devops", raw_category: "devops", canonical_category: "devops", tags: ["network"], tools: ["cursor"], family_id: "bravo", quality_score: 80 };

describe("SQL path released when catalog.db exists", () => {
  let dir;
  beforeAll(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), "sqlrelease-"));
    const distDir = path.join(dir, "dist");
    fs.mkdirSync(distDir, { recursive: true });
    // catalog.json INTENCIONALMENTE só com skillA
    fs.writeFileSync(path.join(distDir, "catalog.json"), JSON.stringify({ generated_at: "2026-06-02T00:00:00.000Z", total_skills: 1, categories: ["devops"], skills: [skillA], families: [] }));
    // DB construído com AMBOS
    const fullPath = path.join(dir, "full-catalog.json");
    fs.writeFileSync(fullPath, JSON.stringify({ generated_at: "2026-06-02T00:00:00.000Z", total_skills: 2, categories: ["devops"], skills: [skillA, skillB], families: [] }));
    buildCatalogDb({ catalogPath: fullPath, dbPath: path.join(distDir, "catalog.db") });
  });
  afterAll(() => { fs.rmSync(dir, { recursive: true, force: true }); });

  test("finds a skill present only in the DB, not in catalog.json (proves SQL path runs)", () => {
    const { results } = searchSkills({ query: "wireguard", repoRoot: dir });
    expect(results.map((r) => r.id)).toContain("bravo");
  });

  test("Memory adapter lazy-loads catalog via catalogLoader (fallback stays functional)", () => {
    const adapter = new MemorySearchAdapter({ catalogLoader: () => ({ skills: [skillA] }) });
    adapter.init({});
    const { results } = adapter.search({ query: "generic" });
    expect(results.map((r) => r.id)).toContain("alpha");
  });
});

const kubeSkillA = { id: "kube-ops", slug: "kube-ops", display_name: "Kube Ops", description: "kubernetes cluster operations", category: "devops", raw_category: "devops", canonical_category: "devops", tags: ["governance", "kubernetes"], tools: ["cursor"], family_id: "kube", quality_score: 90 };
const kubeSkillB = { id: "kube-ops-v2", slug: "kube-ops-v2", display_name: "Kube Ops v2", description: "kubernetes ops", category: "devops", raw_category: "devops", canonical_category: "devops", tags: ["governance"], tools: ["cursor"], family_id: "kube", quality_score: 88 };

describe("SQLite (no catalog) vs Memory parity", () => {
  let dir, dbPath, catalog;
  beforeAll(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), "sqlparity-"));
    catalog = { generated_at: "2026-06-02T00:00:00.000Z", total_skills: 2, categories: ["devops"], skills: [kubeSkillA, kubeSkillB], families: [{ id: "kube", display_name: "Kube", default_skill_id: "kube-ops", variants: [] }] };
    const catalogPath = path.join(dir, "catalog.json");
    fs.writeFileSync(catalogPath, JSON.stringify(catalog));
    dbPath = path.join(dir, "catalog.db");
    buildCatalogDb({ catalogPath, dbPath });
  });
  afterAll(() => { fs.rmSync(dir, { recursive: true, force: true }); });

  function makeSqlite() {
    // Sem catálogo: força o caminho SQL (BM25/porter/trigram).
    return createSearchAdapter({ databasePath: dbPath, searchMode: "sqlite" });
  }
  function makeMemory() {
    return createSearchAdapter({ catalog, searchMode: "memory" });
  }

  test.each(["kubernetes", "governance", "kube"])(
    "exact query '%s' returns the same id set on SQLite (SQL) and Memory",
    (query) => {
      const sqlite = makeSqlite();
      const memory = makeMemory();
      try {
        const sqlIds = new Set(sqlite.search({ query }).results.map((r) => r.id));
        const memIds = new Set(memory.search({ query }).results.map((r) => r.id));
        expect([...sqlIds].sort()).toEqual([...memIds].sort());
      } finally {
        sqlite.close?.();
        memory.close?.();
      }
    },
  );

  test("fuzzy/typo query 'kuberntes' still returns the kube skills via SQLite trigram (no set equality forced)", () => {
    const sqlite = makeSqlite();
    try {
      const ids = sqlite.search({ query: "kuberntes" }).results.map((r) => r.id);
      expect(ids).toEqual(expect.arrayContaining(["kube-ops", "kube-ops-v2"]));
    } finally {
      sqlite.close?.();
    }
  });
});
