import { beforeEach, describe, expect, test, vi } from "vitest";

const searchAdapter = {
  mode: "sqlite",
  close: vi.fn(),
};

const mockCore = {
  loadCatalog: vi.fn(() => ({ total_skills: 2, skills: [{ id: "alpha" }, { id: "beta" }] })),
  listBundles: vi.fn(() => [{ id: "starter" }]),
  createSearchAdapter: vi.fn(() => searchAdapter),
  resolveCatalogDatabaseFile: vi.fn(() => "/tmp/catalog.db"),
  loadManifest: vi.fn((skillId) => ({ id: skillId, source: "manifest" })),
};

vi.mock("@omni-skills/catalog-core", () => mockCore);

describe("createCatalogRuntime", () => {
  beforeEach(() => {
    searchAdapter.close.mockClear();
    for (const fn of Object.values(mockCore)) {
      if (typeof fn?.mockClear === "function") {
        fn.mockClear();
      }
    }
    mockCore.loadCatalog.mockReturnValue({
      total_skills: 2,
      skills: [{ id: "alpha" }, { id: "beta" }],
    });
    mockCore.listBundles.mockReturnValue([{ id: "starter" }]);
    mockCore.resolveCatalogDatabaseFile.mockReturnValue("/tmp/catalog.db");
    mockCore.createSearchAdapter.mockReturnValue(searchAdapter);
  });

  test("creates one shared search adapter lifecycle and decorates search options", async () => {
    const { createCatalogRuntime } = await import("../src/lib/catalog-runtime.js");

    const runtime = createCatalogRuntime({
      repoRoot: "/repo",
      searchMode: "auto",
    });

    expect(mockCore.loadCatalog).toHaveBeenCalledWith({ repoRoot: "/repo" });
    expect(mockCore.listBundles).toHaveBeenCalledWith({ repoRoot: "/repo" });
    expect(mockCore.resolveCatalogDatabaseFile).toHaveBeenCalledWith({ repoRoot: "/repo" });
    expect(mockCore.createSearchAdapter).toHaveBeenCalledTimes(1);
    expect(mockCore.createSearchAdapter).toHaveBeenCalledWith(
      expect.objectContaining({
        repoRoot: "/repo",
        searchMode: "auto",
        catalog: expect.objectContaining({ total_skills: 2 }),
        databasePath: "/tmp/catalog.db",
        manifestLoader: expect.any(Function),
      }),
    );
    expect(runtime.searchAdapter).toBe(searchAdapter);
    expect(runtime.searchModeLabel).toBe("SQLite FTS5");
    expect(runtime.withSearch({ query: "figma", limit: 5 })).toEqual({
      repoRoot: "/repo",
      query: "figma",
      limit: 5,
      searchAdapter,
    });

    const manifestLoader = mockCore.createSearchAdapter.mock.calls[0][0].manifestLoader;
    expect(manifestLoader("alpha")).toEqual({ id: "alpha", source: "manifest" });

    runtime.close();
    expect(searchAdapter.close).toHaveBeenCalledTimes(1);
  });
});
