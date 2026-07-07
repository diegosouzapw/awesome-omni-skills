import path from "node:path";
import { describe, expect, test } from "vitest";
import { compareSkills, getCatalogPaths, MAX_COMPARE_IDS } from "../src/index.js";

function createManifestReadFixture(skillCount) {
  const repoRoot = path.resolve("/virtual/compare-cap");
  const paths = getCatalogPaths({ repoRoot });
  const manifestPaths = new Map();

  for (let index = 0; index < skillCount; index += 1) {
    const id = `skill-${index}`;
    manifestPaths.set(path.join(paths.manifestsDir, `${id}.json`), {
      id,
      display_name: `Skill ${index}`,
      description: `Description ${index}`,
      category: "general",
      risk: "low",
      tags: ["general"],
      compatibility: { tools: ["cursor"] },
      paths: { manifest: `dist/manifests/${id}.json` },
    });
  }

  const reads = { manifests: 0 };
  const storageAdapter = {
    existsSync(filePath) {
      return manifestPaths.has(path.resolve(filePath));
    },
    readJsonSync(filePath) {
      const resolved = path.resolve(filePath);
      if (!manifestPaths.has(resolved)) {
        throw new Error(`Unexpected JSON read: ${filePath}`);
      }
      reads.manifests += 1;
      return manifestPaths.get(resolved);
    },
  };

  const ids = [...manifestPaths.keys()].map((manifestPath) =>
    path.basename(manifestPath, ".json"),
  );

  return { repoRoot, storageAdapter, reads, ids };
}

describe("compareSkills id ceiling", () => {
  test("reads at most MAX_COMPARE_IDS manifests even when given far more ids", () => {
    const fixture = createManifestReadFixture(100);

    const result = compareSkills(fixture.ids, {
      repoRoot: fixture.repoRoot,
      storageAdapter: fixture.storageAdapter,
    });

    expect(fixture.ids.length).toBeGreaterThan(MAX_COMPARE_IDS);
    expect(fixture.reads.manifests).toBeLessThanOrEqual(MAX_COMPARE_IDS);
    expect(result.skills.length).toBeLessThanOrEqual(MAX_COMPARE_IDS);
  });
});
