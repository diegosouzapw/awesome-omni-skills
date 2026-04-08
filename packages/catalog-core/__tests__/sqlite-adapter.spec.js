import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { afterEach, describe, expect, test } from "vitest";
import { MemorySearchAdapter } from "../src/adapters/MemorySearchAdapter.js";
import { SQLiteSearchAdapter } from "../src/adapters/SQLiteSearchAdapter.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..", "..");
const { buildCatalogDb } = await import(
  pathToFileURL(path.join(ROOT, "tools", "scripts", "build_catalog_db.js")).href
).then((mod) => mod.default || mod);

const tempDirs = [];

afterEach(() => {
  while (tempDirs.length > 0) {
    fs.rmSync(tempDirs.pop(), { recursive: true, force: true });
  }
});

function createFixtureCatalog() {
  return {
    schema_version: 1,
    generated_at: "2026-04-08T16:00:00.000Z",
    total_skills: 4,
    categories: {
      architecture: 1,
      devops: 1,
      security: 1,
      testing: 1,
    },
    skills: [
      {
        id: "alpha-architecture",
        slug: "alpha-architecture",
        display_name: "Alpha Architecture",
        description: "Architecture planning for resilient docker platforms",
        category: "architecture",
        raw_category: "architecture",
        canonical_category: "architecture",
        taxonomy: {
          raw_category: "architecture",
          canonical_category: "architecture",
          inferred_category: "architecture",
          category_source: "test-fixture",
        },
        tags: ["architecture", "planning", "docker"],
        tools: ["cursor", "codex-cli"],
        risk: "safe",
        skill_level: 5,
        skill_level_label: "L5",
        quality_score: 95,
        best_practices_score: 92,
        security_score: 91,
        security_status: "passed",
        validation_status: "passed",
        date_updated: "2026-04-08T12:00:00.000Z",
        manifest_path: "dist/manifests/alpha-architecture.json",
      },
      {
        id: "beta-docker",
        slug: "beta-docker",
        display_name: "Beta Docker",
        description: "Docker kubernetes delivery workflow and pipeline automation",
        category: "devops",
        raw_category: "operations",
        canonical_category: "devops",
        taxonomy: {
          raw_category: "operations",
          canonical_category: "devops",
          inferred_category: "devops",
          category_source: "test-fixture",
        },
        tags: ["docker", "kubernetes", "pipeline"],
        tools: ["goose", "cursor"],
        risk: "caution",
        skill_level: 3,
        skill_level_label: "L3",
        quality_score: 82,
        best_practices_score: 80,
        security_score: 77,
        security_status: "warn",
        validation_status: "passed",
        date_updated: "2026-04-06T12:00:00.000Z",
        manifest_path: "dist/manifests/beta-docker.json",
      },
      {
        id: "gamma-security",
        slug: "gamma-security",
        display_name: "Gamma Security",
        description: "Security audit workflow with policy and governance checks",
        category: "security",
        raw_category: "security",
        canonical_category: "security",
        taxonomy: {
          raw_category: "security",
          canonical_category: "security",
          inferred_category: "security",
          category_source: "test-fixture",
        },
        tags: ["security", "audit", "policy"],
        tools: ["goose"],
        risk: "safe",
        skill_level: 4,
        skill_level_label: "L4",
        quality_score: 90,
        best_practices_score: 95,
        security_score: 99,
        security_status: "passed",
        validation_status: "passed",
        date_updated: "2026-04-09T12:00:00.000Z",
        manifest_path: "dist/manifests/gamma-security.json",
      },
      {
        id: "delta-testing",
        slug: "delta-testing",
        display_name: "Delta Testing",
        description: "Testing pipelines for regression control and release readiness",
        category: "testing",
        raw_category: "testing",
        canonical_category: "testing",
        taxonomy: {
          raw_category: "testing",
          canonical_category: "testing",
          inferred_category: "testing",
          category_source: "test-fixture",
        },
        tags: ["testing", "pipeline", "release"],
        tools: ["codex-cli"],
        risk: "safe",
        skill_level: 2,
        skill_level_label: "L2",
        quality_score: 75,
        best_practices_score: 78,
        security_score: 88,
        security_status: "warn",
        validation_status: "warn",
        date_updated: "2026-04-07T12:00:00.000Z",
        manifest_path: "dist/manifests/delta-testing.json",
      },
    ],
  };
}

function createTempDbFixture() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "catalog-parity-"));
  tempDirs.push(dir);
  const distDir = path.join(dir, "dist");
  fs.mkdirSync(distDir, { recursive: true });
  const catalogPath = path.join(distDir, "catalog.json");
  const dbPath = path.join(distDir, "catalog.db");
  const catalog = createFixtureCatalog();
  fs.writeFileSync(catalogPath, JSON.stringify(catalog), "utf8");
  buildCatalogDb({ catalogPath, dbPath, logger: { log() {} } });
  return { catalog, dbPath };
}

function normalizeSearchResult(result) {
  return {
    total: result.total,
    sort: result.sort,
    order: result.order,
    ids: result.results.map((skill) => skill.id),
  };
}

describe("SQLiteSearchAdapter parity", () => {
  test("matches memory adapter across query, filter, sort, and pagination scenarios", () => {
    const { catalog, dbPath } = createTempDbFixture();
    const manifestLoader = (skillId) => ({ id: skillId, ok: true });
    const memory = new MemorySearchAdapter({ catalog, manifestLoader });
    const sqlite = new SQLiteSearchAdapter({ catalog, databasePath: dbPath, manifestLoader });
    memory.init();
    sqlite.init();

    const scenarios = [
      { q: "docker" },
      { q: "dock" },
      { q: "plan syst" },
      { q: "gamma-security" },
      { category: "security" },
      { tool: "goose" },
      { risk: "safe" },
      { min_quality: 90 },
      { min_best_practices: 90 },
      { min_security: 90 },
      { sort: "name", order: "asc" },
      { sort: "quality", order: "desc" },
      { sort: "updated", order: "desc" },
      { sort: "security", order: "desc" },
      { sort: "best-practices", order: "desc" },
      { q: "pipeline", limit: 1, offset: 1 },
      { q: "dock", limit: 1, offset: 1 },
      { q: "architecture", tool: "cursor", category: "architecture" },
    ];

    for (const scenario of scenarios) {
      expect(normalizeSearchResult(sqlite.search(scenario))).toEqual(
        normalizeSearchResult(memory.search(scenario)),
      );
    }

    expect(sqlite.getById("alpha-architecture")).toEqual({ id: "alpha-architecture", ok: true });
    sqlite.close();
  });
});
