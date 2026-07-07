import path from "node:path";
import { describe, expect, test } from "vitest";
import { getCatalogPaths, searchFamilies } from "../src/index.js";

function createCountingFixture(familyCount) {
  const repoRoot = path.resolve("/virtual/search-families");
  const paths = getCatalogPaths({ repoRoot });

  const skills = [];
  const families = [];
  for (let index = 0; index < familyCount; index += 1) {
    const skillId = `skill-${index}`;
    skills.push({
      id: skillId,
      slug: skillId,
      display_name: `Skill ${index}`,
      description: `Description for skill ${index}`,
      category: "general",
      tags: [],
      tools: [],
      family_id: `family-${index}`,
      quality_score: 50 + (index % 40),
    });
    families.push({
      id: `family-${index}`,
      display_name: `Family ${index}`,
      default_skill_id: skillId,
      variants: [{ id: skillId, variant_id: "omni" }],
    });
  }

  const catalog = {
    generated_at: "2026-04-06T12:00:00.000Z",
    total_skills: skills.length,
    categories: ["general"],
    skills,
    families,
  };

  const reads = { catalog: 0 };
  const storageAdapter = {
    existsSync() {
      return true;
    },
    readJsonSync(filePath) {
      if (path.resolve(filePath) === paths.catalogPath) {
        reads.catalog += 1;
        return catalog;
      }
      throw new Error(`Unexpected JSON read: ${filePath}`);
    },
  };

  return { repoRoot, storageAdapter, reads };
}

describe("searchFamilies catalog access", () => {
  test("does not re-read the catalog a number of times that scales with the family count", () => {
    const fixture = createCountingFixture(40);

    const result = searchFamilies({
      repoRoot: fixture.repoRoot,
      storageAdapter: fixture.storageAdapter,
      searchMode: "memory",
      query: "",
    });

    expect(result.results.length).toBeGreaterThan(0);
    // The empty-query ranking sorts every family; it must resolve default skills
    // from the already-loaded catalog, not reload the 13.9 MB catalog per comparison.
    expect(fixture.reads.catalog).toBeLessThanOrEqual(4);
  });
});
