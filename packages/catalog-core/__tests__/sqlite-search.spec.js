import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, test, vi } from "vitest";
import { createSearchAdapter } from "../src/adapters/createSearchAdapter.js";
import { MemorySearchAdapter } from "../src/adapters/MemorySearchAdapter.js";
import { SQLiteSearchAdapter } from "../src/adapters/SQLiteSearchAdapter.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..", "..");
const { buildCatalogDb } = await import(path.join(ROOT, "tools", "scripts", "build_catalog_db.js")).then(
  (mod) => mod.default || mod,
);

const tempDirs = [];

afterEach(() => {
  while (tempDirs.length > 0) {
    const dir = tempDirs.pop();
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

function createCatalogFixture() {
  return {
    schema_version: 1,
    generated_at: "2026-04-08T13:00:00.000Z",
    total_skills: 3,
    categories: {
      architecture: 1,
      devops: 1,
      security: 1,
    },
    skills: [
      {
        id: "alpha-architecture",
        slug: "alpha-architecture",
        display_name: "Alpha Architecture",
        description: "Architecture planning for resilient systems",
        category: "architecture",
        raw_category: "architecture",
        canonical_category: "architecture",
        tags: ["architecture", "planning"],
        tools: ["cursor", "codex-cli"],
        risk: "low",
        skill_level: 5,
        skill_level_label: "L5",
        quality_score: 95,
        best_practices_score: 91,
        security_score: 94,
        security_status: "clean",
        validation_status: "passed",
        date_updated: "2026-04-07T10:00:00.000Z",
        manifest_path: "dist/manifests/alpha-architecture.json",
      },
      {
        id: "beta-docker",
        slug: "beta-docker",
        display_name: "Beta Docker",
        description: "Dockerized delivery workflow",
        category: "devops",
        raw_category: "operations",
        canonical_category: "devops",
        tags: ["docker", "delivery"],
        tools: ["goose"],
        risk: "medium",
        skill_level: 3,
        skill_level_label: "L3",
        quality_score: 78,
        best_practices_score: 74,
        security_score: 81,
        security_status: "review-required",
        validation_status: "passed",
        date_updated: "2026-04-06T10:00:00.000Z",
        manifest_path: "dist/manifests/beta-docker.json",
      },
      {
        id: "gamma-security",
        slug: "gamma-security",
        display_name: "Gamma Security",
        description: "Security review and audit assistance",
        category: "security",
        raw_category: "security",
        canonical_category: "security",
        tags: ["security", "audit"],
        tools: ["goose"],
        risk: "low",
        skill_level: 4,
        skill_level_label: "L4",
        quality_score: 90,
        best_practices_score: 95,
        security_score: 99,
        security_status: "clean",
        validation_status: "passed",
        date_updated: "2026-04-08T10:00:00.000Z",
        manifest_path: "dist/manifests/gamma-security.json",
      },
    ],
  };
}

function createTempCatalogDb() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "catalog-sqlite-"));
  tempDirs.push(dir);

  const distDir = path.join(dir, "dist");
  fs.mkdirSync(distDir, { recursive: true });

  const catalogPath = path.join(distDir, "catalog.json");
  const dbPath = path.join(distDir, "catalog.db");
  const catalog = createCatalogFixture();
  fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2), "utf8");

  buildCatalogDb({
    catalogPath,
    dbPath,
    logger: { log() {} },
  });

  return { dir, catalogPath, dbPath, catalog };
}

describe("SQLite catalog search", () => {
  test("builds catalog.db and auto-selects SQLiteSearchAdapter when the DB exists", () => {
    const fixture = createTempCatalogDb();
    const adapter = createSearchAdapter({
      catalog: fixture.catalog,
      databasePath: fixture.dbPath,
      manifestLoader: () => null,
    });

    expect(adapter).toBeInstanceOf(SQLiteSearchAdapter);

    const result = adapter.search({
      q: "docker",
      tool: "goose",
    });

    expect(result.total).toBe(1);
    expect(result.results[0].id).toBe("beta-docker");
    adapter.close();
  });

  test("supports filtered browse and recommendations through SQLite", () => {
    const fixture = createTempCatalogDb();
    const adapter = new SQLiteSearchAdapter({
      catalog: fixture.catalog,
      databasePath: fixture.dbPath,
      manifestLoader: (skillId) => ({ id: skillId }),
    });
    adapter.init();

    const browse = adapter.list({
      category: "security",
      min_security: 90,
      sort: "updated",
      order: "desc",
    });
    expect(browse.total).toBe(1);
    expect(browse.results[0].id).toBe("gamma-security");

    const recommended = adapter.recommend({
      goal: "architecture planning",
      tool: "cursor",
      category: "architecture",
      limit: 1,
    });
    expect(recommended.results[0].id).toBe("alpha-architecture");
    expect(adapter.getById("alpha-architecture")).toEqual({ id: "alpha-architecture" });
    adapter.close();
  });

  test("falls back to MemorySearchAdapter when the SQLite DB is missing or disabled", () => {
    const catalog = createCatalogFixture();

    const missingDbAdapter = createSearchAdapter({
      catalog,
      databasePath: path.join(os.tmpdir(), "missing-catalog.db"),
      manifestLoader: () => null,
    });
    expect(missingDbAdapter).toBeInstanceOf(MemorySearchAdapter);

    const forcedMemory = createSearchAdapter({
      catalog,
      databasePath: path.join(os.tmpdir(), "missing-catalog.db"),
      searchMode: "memory",
      manifestLoader: () => null,
    });
    expect(forcedMemory).toBeInstanceOf(MemorySearchAdapter);
  });

  test("warns and falls back to MemorySearchAdapter when SQLite initialization fails", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "catalog-sqlite-bad-"));
    tempDirs.push(dir);
    const warn = { warn: vi.fn() };
    const catalog = createCatalogFixture();

    const adapter = createSearchAdapter({
      catalog,
      databasePath: dir,
      manifestLoader: () => null,
      logger: warn,
    });

    expect(adapter).toBeInstanceOf(MemorySearchAdapter);
    expect(warn.warn).toHaveBeenCalledWith(
      expect.stringContaining("SQLite search unavailable, falling back to memory adapter:"),
    );
  });

  test("falls back to MemorySearchAdapter when catalog.db has a stale schema", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "catalog-sqlite-stale-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "catalog.db");
    const warn = { warn: vi.fn() };
    const catalog = createCatalogFixture();
    const { default: Database } = await import("better-sqlite3");
    const db = new Database(dbPath);
    db.exec(`
      CREATE TABLE skills (
        id TEXT PRIMARY KEY,
        display_name TEXT NOT NULL,
        description TEXT
      );
    `);
    db.close();

    const adapter = createSearchAdapter({
      catalog,
      databasePath: dbPath,
      manifestLoader: () => null,
      logger: warn,
    });

    expect(adapter).toBeInstanceOf(MemorySearchAdapter);
    expect(warn.warn).toHaveBeenCalledWith(
      expect.stringContaining("SQLite search unavailable, falling back to memory adapter:"),
    );
  });
});
