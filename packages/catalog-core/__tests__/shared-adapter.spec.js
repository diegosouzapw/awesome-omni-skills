import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterAll, afterEach, describe, expect, test, vi } from "vitest";
import { buildCatalogDb } from "../../../tools/scripts/build_catalog_db.js";
import { getSharedSearchAdapter, __resetSharedSearchAdapters } from "../src/index.js";
import { SQLiteSearchAdapter } from "../src/adapters/SQLiteSearchAdapter.js";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "shared-"));
const distDir = path.join(dir, "dist");
fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, "catalog.json"), JSON.stringify({ generated_at: "2026-06-02T00:00:00.000Z", total_skills: 1, categories: ["devops"], skills: [{ id: "alpha", slug: "alpha", display_name: "Alpha", description: "kubernetes helper", category: "devops", raw_category: "devops", canonical_category: "devops", tags: [], tools: ["cursor"], family_id: "alpha", quality_score: 80 }], families: [] }));
buildCatalogDb({ catalogPath: path.join(distDir, "catalog.json"), dbPath: path.join(distDir, "catalog.db") });

afterEach(() => __resetSharedSearchAdapters());

describe("getSharedSearchAdapter", () => {
  test("opens the SQLite adapter once and reuses it", () => {
    const initSpy = vi.spyOn(SQLiteSearchAdapter.prototype, "init");
    const a = getSharedSearchAdapter({ repoRoot: dir });
    const b = getSharedSearchAdapter({ repoRoot: dir });
    expect(a).toBe(b); // mesma instância
    expect(initSpy).toHaveBeenCalledTimes(1); // abriu o SQLite uma vez
    expect(a.mode).toBe("sqlite");
    initSpy.mockRestore();
  });
});
afterAll(() => { __resetSharedSearchAdapters(); fs.rmSync(dir, { recursive: true, force: true }); });
