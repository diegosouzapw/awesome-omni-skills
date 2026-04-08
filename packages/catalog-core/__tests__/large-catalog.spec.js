import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath, pathToFileURL } from "node:url";
import { afterEach, describe, expect, test } from "vitest";
import { createSearchAdapter } from "../src/adapters/createSearchAdapter.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..", "..");
const { generateSyntheticCatalog } = await import(
  pathToFileURL(path.join(ROOT, "tools", "scripts", "generate_synthetic_skills.js")).href
).then((mod) => mod.default || mod);
const { buildCatalogDb } = await import(
  pathToFileURL(path.join(ROOT, "tools", "scripts", "build_catalog_db.js")).href
).then((mod) => mod.default || mod);

const tempDirs = [];

afterEach(() => {
  while (tempDirs.length > 0) {
    fs.rmSync(tempDirs.pop(), { recursive: true, force: true });
  }
});

describe("large catalog regression", () => {
  test("builds and searches a multi-thousand-skill catalog through SQLite without regressing", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "catalog-large-"));
    tempDirs.push(dir);
    const distDir = path.join(dir, "dist");
    fs.mkdirSync(distDir, { recursive: true });
    const catalogPath = path.join(distDir, "catalog.json");
    const dbPath = path.join(distDir, "catalog.db");
    const catalog = generateSyntheticCatalog({ count: 5000, seed: 4242 });

    fs.writeFileSync(catalogPath, JSON.stringify(catalog), "utf8");
    buildCatalogDb({ catalogPath, dbPath, logger: { log() {} } });

    const adapter = createSearchAdapter({
      catalog,
      databasePath: dbPath,
      manifestLoader: () => null,
    });

    expect(adapter.mode).toBe("sqlite");

    const startedAt = performance.now();
    const docker = adapter.search({ query: "docker kubernetes", limit: 20 });
    const elapsedMs = performance.now() - startedAt;
    const fuzzy = adapter.search({ query: "kuberntes", limit: 20 });
    const paged = adapter.search({ query: "pipeline", limit: 10, offset: 10 });

    expect(docker.total).toBeGreaterThan(0);
    expect(docker.results.length).toBeGreaterThan(0);
    expect(fuzzy.total).toBeGreaterThan(0);
    expect(paged.results.length).toBeGreaterThan(0);
    expect(new Set(docker.results.map((skill) => skill.id)).size).toBe(docker.results.length);
    expect(elapsedMs).toBeLessThan(1500);

    adapter.close?.();
  });
});
