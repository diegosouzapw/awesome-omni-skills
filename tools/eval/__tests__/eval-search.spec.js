import path from "node:path";
import fs from "node:fs";
import os from "node:os";
import { describe, expect, test, beforeAll, afterAll } from "vitest";
import { buildCatalogDb } from "../../scripts/build_catalog_db.js";
import { runEval, deriveKnownItemQuery, sampleSkills } from "../../scripts/eval_search.js";

function fixtureCatalog() {
  return {
    generated_at: "2026-07-07T00:00:00.000Z",
    total_skills: 3,
    categories: ["devops", "web"],
    skills: [
      {
        id: "kube-ops",
        slug: "kube-ops",
        display_name: "🤖 Kubernetes Operations (v2.0)",
        description: "kubernetes cluster operations and rollout",
        category: "devops", raw_category: "devops", canonical_category: "devops",
        tags: ["kubernetes"], tools: ["cursor"], family_id: "kube", quality_score: 90,
      },
      {
        id: "docker-deploy",
        slug: "docker-deploy",
        display_name: "Docker Deployment",
        description: "docker container deployment workflow",
        category: "devops", raw_category: "devops", canonical_category: "devops",
        tags: ["docker"], tools: ["cursor"], family_id: "docker", quality_score: 85,
      },
      {
        id: "terraform-modules",
        slug: "terraform-modules",
        display_name: "Terraform Modules",
        description: "terraform reusable infrastructure modules",
        category: "devops", raw_category: "devops", canonical_category: "devops",
        tags: ["terraform"], tools: ["cursor"], family_id: "terraform", quality_score: 80,
      },
    ],
    families: [
      { id: "kube", display_name: "Kube", default_skill_id: "kube-ops", variants: [] },
      { id: "docker", display_name: "Docker", default_skill_id: "docker-deploy", variants: [] },
      { id: "terraform", display_name: "Terraform", default_skill_id: "terraform-modules", variants: [] },
    ],
  };
}

describe("eval_search harness", () => {
  let dir, goldenPath;
  beforeAll(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), "eval-search-"));
    const distDir = path.join(dir, "dist");
    fs.mkdirSync(distDir, { recursive: true });
    const catalogPath = path.join(distDir, "catalog.json");
    fs.writeFileSync(catalogPath, JSON.stringify(fixtureCatalog()));
    buildCatalogDb({ catalogPath, dbPath: path.join(distDir, "catalog.db") });
    goldenPath = path.join(dir, "golden.json");
    fs.writeFileSync(
      goldenPath,
      JSON.stringify({ queries: [{ q: "docker", expect_id_substrings: ["docker"] }] }),
    );
  });
  afterAll(() => fs.rmSync(dir, { recursive: true, force: true }));

  test("deriveKnownItemQuery strips emoji/version noise and keeps significant tokens", () => {
    const tokens = deriveKnownItemQuery({ display_name: "🤖 Kubernetes Operations (v2.0)" });
    expect(tokens).toContain("kubernetes");
    expect(tokens).toContain("operations");
    expect(tokens).not.toContain("v2");
    expect(tokens.length).toBeLessThanOrEqual(5);
  });

  test("sampleSkills is deterministic and ordered by id", () => {
    const catalog = fixtureCatalog();
    const s1 = sampleSkills(catalog, 2);
    const s2 = sampleSkills(catalog, 2);
    expect(s1.map((x) => x.id)).toEqual(s2.map((x) => x.id));
    expect(s1[0].id).toBe("docker-deploy"); // alfabético
  });

  test("runEval recupera known-item e golden sobre o SQL real", async () => {
    const result = await runEval({ repoRoot: dir, sampleSize: 3, ks: [1, 3, 5, 10], goldenPath });
    // known-item: cada nome distinto recupera seu próprio id no top-k
    expect(result.knownItem["recall@10"]).toBe(1);
    expect(typeof result.knownItem.mrr).toBe("number");
    // golden: query "docker" acha um id contendo "docker"
    expect(result.golden["recall@10"]).toBe(1);
    expect(result.golden).toHaveProperty("mrr");
  });
});
