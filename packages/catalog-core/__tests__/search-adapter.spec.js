import { describe, expect, test, vi } from "vitest";
import { createSearchAdapter } from "../src/adapters/createSearchAdapter.js";
import { MemorySearchAdapter } from "../src/adapters/MemorySearchAdapter.js";

function createCatalog() {
  return {
    generated_at: "2026-04-08T12:00:00.000Z",
    total_skills: 3,
    categories: ["architecture", "security"],
    skills: [
      {
        id: "alpha-architecture",
        slug: "alpha-architecture",
        display_name: "alpha architecture",
        description: "Architecture planning for resilient systems",
        category: "architecture",
        raw_category: "architecture",
        canonical_category: "architecture",
        tags: ["architecture", "planning"],
        tools: ["cursor", "codex-cli"],
        risk: "low",
        quality_score: 95,
        best_practices_score: 91,
        security_score: 94,
        security_status: "clean",
        validation_status: "passed",
        skill_level: 5,
        skill_level_label: "L5",
        manifest_path: "dist/manifests/alpha-architecture.json",
      },
      {
        id: "beta-docker",
        slug: "beta-docker",
        display_name: "beta docker",
        description: "Dockerized delivery workflow",
        category: "devops",
        raw_category: "operations",
        canonical_category: "devops",
        tags: ["docker", "delivery"],
        tools: ["goose"],
        risk: "medium",
        quality_score: 78,
        best_practices_score: 74,
        security_score: 81,
        security_status: "review-required",
        validation_status: "passed",
        skill_level: 3,
        skill_level_label: "L3",
        manifest_path: "dist/manifests/beta-docker.json",
      },
      {
        id: "gamma-security",
        slug: "gamma-security",
        display_name: "gamma security",
        description: "Security review and audit assistance",
        category: "security",
        raw_category: "security",
        canonical_category: "security",
        tags: ["security", "audit"],
        tools: ["goose"],
        risk: "low",
        quality_score: 90,
        best_practices_score: 95,
        security_score: 99,
        security_status: "clean",
        validation_status: "passed",
        skill_level: 4,
        skill_level_label: "L4",
        manifest_path: "dist/manifests/gamma-security.json",
      },
    ],
  };
}

describe("MemorySearchAdapter", () => {
  test("searches and filters a preloaded catalog without filesystem access", () => {
    const adapter = new MemorySearchAdapter({
      catalog: createCatalog(),
      manifestLoader: () => null,
    });
    adapter.init();

    const result = adapter.search({
      q: "security review",
      tool: "goose",
      category: "security",
      min_security: 90,
    });

    expect(result.total).toBe(1);
    expect(result.sort).toBe("relevance");
    expect(result.results[0].id).toBe("gamma-security");
  });

  test("matches small typos through fuzzy text scoring", () => {
    const adapter = new MemorySearchAdapter({
      catalog: createCatalog(),
      manifestLoader: () => null,
    });
    adapter.init();

    const result = adapter.search({
      q: "dockr",
      limit: 5,
    });

    expect(result.total).toBeGreaterThan(0);
    expect(result.results[0].id).toBe("beta-docker");
  });

  test("recommends from catalog metadata and exposes manifest lookup via getById", () => {
    const manifestLoader = vi.fn((skillId) => ({ id: skillId, ok: true }));
    const adapter = new MemorySearchAdapter({
      catalog: createCatalog(),
      manifestLoader,
    });
    adapter.init();

    const recommended = adapter.recommend({
      goal: "architecture planning",
      tool: "cursor",
      category: "architecture",
      limit: 1,
    });

    expect(recommended.results[0].id).toBe("alpha-architecture");
    expect(adapter.getById("alpha-architecture")).toEqual({
      id: "alpha-architecture",
      ok: true,
    });
    expect(manifestLoader).toHaveBeenCalledWith("alpha-architecture");
  });
});

describe("createSearchAdapter", () => {
  test("returns a memory adapter by default and preserves an injected adapter instance", () => {
    const created = createSearchAdapter({
      catalog: createCatalog(),
      manifestLoader: () => null,
    });
    expect(created).toBeInstanceOf(MemorySearchAdapter);
    expect(created.mode).toBe("memory");

    const injected = {
      mode: "custom",
      search: vi.fn(),
      list: vi.fn(),
      recommend: vi.fn(),
      close: vi.fn(),
    };

    expect(createSearchAdapter({ searchAdapter: injected })).toBe(injected);
  });
});
