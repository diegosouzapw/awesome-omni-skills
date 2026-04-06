import path from "node:path";
import { describe, expect, test } from "vitest";
import {
  buildInstallPlan,
  compareSkills,
  getCatalogPaths,
  getClientInstallRecipe,
  getHealthSnapshot,
  getSkill,
  getSkillPublicUrls,
  listBundles,
  listSkillArchives,
  listSkillArtifacts,
  listSkills,
  loadAllManifests,
  loadCatalog,
  loadManifest,
  loadSkillsIndex,
  recommendSkills,
  resolveCatalogFile,
  resolveManifestFile,
  resolveSkillArchiveChecksumsFile,
  resolveSkillArchiveFile,
  resolveSkillArchiveSignatureFile,
  resolveSkillArtifactFile,
  resolveSkillEntrypointFile,
  searchSkills,
} from "../src/index.js";

function createManifest({
  id,
  category,
  rawCategory = category,
  canonicalCategory = category,
  description,
  tools,
  tags,
  risk = "low",
  entrypoint = `skills/${id}/SKILL.md`,
  artifactPath = `skills/${id}/docs/guide.md`,
  archivePath = `dist/archives/${id}.zip`,
  signaturePath = `dist/archives/${id}.zip.sig`,
  checksumsPath = `dist/archives/${id}.checksums.txt`,
  installTargets = tools.map((tool) => ({ tool, path: `/targets/${tool}/${id}` })),
  recipes = tools.map((tool) => ({
    tool,
    command: `npx awesome-omni-skills --${tool.replace(/_/g, "-")}`,
    scope: "user",
    default_path: `~/.config/${tool}/skills`,
    behavior: `Install into ${tool}`,
  })),
  classification,
  checksums = { "SKILL.md": "sha256:entry" },
}) {
  return {
    id,
    slug: id,
    display_name: id.replace(/-/g, " "),
    description,
    category,
    raw_category: rawCategory,
    taxonomy: {
      raw_category: rawCategory,
      canonical_category: canonicalCategory,
      inferred_category: canonicalCategory,
      category_source: "test-fixture",
    },
    tags,
    risk,
    entrypoint,
    paths: {
      manifest: `dist/manifests/${id}.json`,
    },
    artifacts: [
      {
        path: artifactPath,
        size_bytes: 128,
      },
    ],
    archives: [
      {
        format: "zip",
        file_name: `${id}.zip`,
        path: archivePath,
        size_bytes: 256,
        signature: {
          path: signaturePath,
          size_bytes: 64,
        },
      },
    ],
    archive_checksums: {
      path: checksumsPath,
      file_name: `${id}.checksums.txt`,
      size_bytes: 80,
    },
    checksums,
    compatibility: {
      tools,
      install_targets: installTargets,
    },
    install: {
      recipes,
    },
    classification,
  };
}

function createCatalogSkill({
  id,
  description,
  category,
  rawCategory = category,
  canonicalCategory = category,
  tags,
  tools,
  quality,
  bestPractices,
  security,
  securityStatus,
  skillLevel,
  validationStatus = "passed",
  risk = "low",
  updated = "2026-04-01T12:00:00.000Z",
}) {
  return {
    id,
    slug: id,
    display_name: id.replace(/-/g, " "),
    description,
    version: "1.0.0",
    category,
    raw_category: rawCategory,
    canonical_category: canonicalCategory,
    taxonomy: {
      raw_category: rawCategory,
      canonical_category: canonicalCategory,
      inferred_category: canonicalCategory,
      category_source: "test-fixture",
    },
    tags,
    complexity: "medium",
    risk,
    tools,
    entrypoint: `skills/${id}/SKILL.md`,
    manifest_path: `dist/manifests/${id}.json`,
    metadata_path: `skills/${id}/metadata.json`,
    skill_level: skillLevel,
    skill_level_label: `L${skillLevel}`,
    has_scripts: true,
    has_extra_files: true,
    best_practices_score: bestPractices,
    best_practices_tier: "good",
    quality_score: quality,
    quality_tier: "good",
    security_score: security,
    security_tier: "good",
    security_status: securityStatus,
    archives_count: 1,
    validation_status: validationStatus,
    date_updated: updated,
    updated_at: updated,
    generated_at: updated,
  };
}

function createFixture() {
  const repoRoot = path.resolve("/virtual/awesome-omni-skills");
  const paths = getCatalogPaths({ repoRoot });

  const catalogSkills = [
    createCatalogSkill({
      id: "alpha-architecture",
      description: "Architecture planning for resilient systems",
      category: "architecture",
      tags: ["architecture", "planning", "system-design"],
      tools: ["cursor", "codex-cli"],
      quality: 95,
      bestPractices: 92,
      security: 93,
      securityStatus: "clean",
      skillLevel: 5,
      updated: "2026-04-01T10:00:00.000Z",
    }),
    createCatalogSkill({
      id: "beta-docker",
      description: "Dockerize app delivery workflows",
      category: "devops",
      rawCategory: "operations",
      canonicalCategory: "devops",
      tags: ["docker", "containers", "delivery"],
      tools: ["cursor", "goose"],
      quality: 82,
      bestPractices: 79,
      security: 88,
      securityStatus: "review-required",
      skillLevel: 3,
      risk: "medium",
      updated: "2026-03-29T10:00:00.000Z",
    }),
    createCatalogSkill({
      id: "gamma-security",
      description: "Security review with policy enforcement",
      category: "security",
      tags: ["security", "audit", "review"],
      tools: ["codex-cli", "goose"],
      quality: 90,
      bestPractices: 94,
      security: 99,
      securityStatus: "clean",
      skillLevel: 4,
      updated: "2026-04-03T10:00:00.000Z",
    }),
    createCatalogSkill({
      id: "delta-legacy",
      description: "Legacy migration notes",
      category: "architecture",
      tags: ["legacy", "migration"],
      tools: ["cursor"],
      quality: 60,
      bestPractices: 55,
      security: 45,
      securityStatus: "warn",
      skillLevel: 2,
      validationStatus: "warn",
      risk: "high",
      updated: "2026-02-01T10:00:00.000Z",
    }),
  ];

  const manifests = {
    "alpha-architecture": createManifest({
      id: "alpha-architecture",
      category: "architecture",
      description: "Architecture planning for resilient systems",
      tools: ["cursor", "codex-cli"],
      tags: ["architecture", "planning", "system-design"],
      classification: {
        maturity: { skill_level: 5, skill_level_label: "L5" },
        best_practices: { score: 92 },
        quality: { score: 95 },
        security: { score: 93, status: "clean" },
      },
    }),
    "beta-docker": createManifest({
      id: "beta-docker",
      category: "devops",
      rawCategory: "operations",
      canonicalCategory: "devops",
      description: "Dockerize app delivery workflows",
      tools: ["cursor", "goose"],
      tags: ["docker", "containers", "delivery"],
      risk: "medium",
      classification: {
        maturity: { skill_level: 3, skill_level_label: "L3" },
        best_practices: { score: 79 },
        quality: { score: 82 },
        security: { score: 88, status: "review-required" },
      },
    }),
    "gamma-security": createManifest({
      id: "gamma-security",
      category: "security",
      description: "Security review with policy enforcement",
      tools: ["codex-cli", "goose"],
      tags: ["security", "audit", "review"],
      classification: {
        maturity: { skill_level: 4, skill_level_label: "L4" },
        best_practices: { score: 94 },
        quality: { score: 90 },
        security: { score: 99, status: "clean" },
      },
    }),
    "delta-legacy": createManifest({
      id: "delta-legacy",
      category: "architecture",
      description: "Legacy migration notes",
      tools: ["cursor"],
      tags: ["legacy", "migration"],
      risk: "high",
      artifactPath: "../escape.txt",
      archivePath: "../dist/archives/legacy.zip",
      signaturePath: "",
      checksumsPath: "",
      installTargets: [{ tool: "cursor", path: "~/.cursor/skills" }],
      recipes: [
        {
          tool: "cursor",
          command: "npx awesome-omni-skills --cursor",
          scope: "user",
          default_path: "~/.cursor/skills",
          behavior: "Install into cursor",
        },
      ],
      classification: {
        maturity: { skill_level: 2, skill_level_label: "L2" },
        best_practices: { score: 55 },
        quality: { score: 60 },
        security: { score: 45, status: "warn" },
      },
      checksums: { "SKILL.md": "sha256:legacy" },
    }),
  };

  const skillsIndex = {
    skills: catalogSkills.map((skill) => ({ id: skill.id, category: skill.category })),
  };

  const bundles = [
    {
      id: "platform-foundation",
      name: "Platform Foundation",
      skill_ids: ["alpha-architecture", "gamma-security"],
    },
    {
      id: "ops-mixed",
      name: "Ops Mixed",
      skill_ids: ["beta-docker", "missing-skill"],
    },
  ];

  const jsonMap = new Map();
  jsonMap.set(paths.catalogPath, {
    generated_at: "2026-04-06T12:00:00.000Z",
    total_skills: catalogSkills.length,
    categories: ["architecture", "devops", "security"],
    skills: catalogSkills,
  });
  jsonMap.set(paths.skillsIndexPath, skillsIndex);
  jsonMap.set(path.join(repoRoot, "data", "bundles.json"), bundles);

  const existingPaths = new Set([
    paths.catalogPath,
    paths.skillsIndexPath,
    path.join(repoRoot, "data", "bundles.json"),
  ]);

  for (const [id, manifest] of Object.entries(manifests)) {
    const manifestPath = path.join(paths.manifestsDir, `${id}.json`);
    jsonMap.set(manifestPath, manifest);
    existingPaths.add(manifestPath);
    existingPaths.add(path.resolve(repoRoot, manifest.entrypoint));
    for (const artifact of manifest.artifacts || []) {
      const resolved = path.resolve(repoRoot, artifact.path);
      if (resolved.startsWith(`${repoRoot}${path.sep}`)) {
        existingPaths.add(resolved);
      }
    }
    for (const archive of manifest.archives || []) {
      const resolvedArchive = path.resolve(repoRoot, archive.path);
      if (resolvedArchive.startsWith(`${repoRoot}${path.sep}`)) {
        existingPaths.add(resolvedArchive);
      }
      if (archive.signature?.path) {
        const resolvedSignature = path.resolve(repoRoot, archive.signature.path);
        if (resolvedSignature.startsWith(`${repoRoot}${path.sep}`)) {
          existingPaths.add(resolvedSignature);
        }
      }
    }
    if (manifest.archive_checksums?.path) {
      const resolvedChecksums = path.resolve(repoRoot, manifest.archive_checksums.path);
      if (resolvedChecksums.startsWith(`${repoRoot}${path.sep}`)) {
        existingPaths.add(resolvedChecksums);
      }
    }
  }

  const storageAdapter = {
    existsSync(filePath) {
      return existingPaths.has(path.resolve(filePath));
    },
    readJsonSync(filePath) {
      const resolved = path.resolve(filePath);
      if (!jsonMap.has(resolved)) {
        throw new Error(`Unexpected JSON read: ${resolved}`);
      }
      return jsonMap.get(resolved);
    },
  };

  return {
    repoRoot,
    paths,
    storageAdapter,
    bundles,
    manifests,
  };
}

describe("catalog-core", () => {
  const fixture = createFixture();
  const options = {
    repoRoot: fixture.repoRoot,
    storageAdapter: fixture.storageAdapter,
    baseUrl: "https://catalog.example.com/",
  };

  test("resolves catalog paths and loads catalog artifacts through the storage adapter", () => {
    const paths = getCatalogPaths({ repoRoot: fixture.repoRoot });

    expect(paths.catalogPath).toBe(path.join(fixture.repoRoot, "dist", "catalog.json"));
    expect(resolveCatalogFile({ repoRoot: fixture.repoRoot })).toBe(paths.catalogPath);
    expect(loadCatalog(options).skills).toHaveLength(4);
    expect(loadSkillsIndex(options).skills).toHaveLength(4);
    expect(loadManifest("alpha-architecture", options)?.id).toBe("alpha-architecture");
    expect(loadManifest("unknown-skill", options)).toBeNull();
    expect(loadAllManifests(options)).toHaveLength(4);
  });

  test("resolves manifest, entrypoint, artifact, archive, signature, and checksum files safely", () => {
    expect(resolveManifestFile("alpha-architecture", options)).toBe(
      path.join(fixture.repoRoot, "dist", "manifests", "alpha-architecture.json"),
    );
    expect(resolveManifestFile("missing-skill", options)).toBeNull();
    expect(resolveSkillEntrypointFile("alpha-architecture", options)).toBe(
      path.join(fixture.repoRoot, "skills", "alpha-architecture", "SKILL.md"),
    );
    expect(resolveSkillEntrypointFile("missing-skill", options)).toBeNull();

    const artifact = resolveSkillArtifactFile("alpha-architecture", "skills/alpha-architecture/docs/guide.md", options);
    expect(artifact?.absolutePath).toBe(
      path.join(fixture.repoRoot, "skills", "alpha-architecture", "docs", "guide.md"),
    );
    expect(resolveSkillArtifactFile("missing-skill", "anything", options)).toBeNull();
    expect(resolveSkillArtifactFile("alpha-architecture", "missing.md", options)).toBeNull();
    expect(resolveSkillArtifactFile("delta-legacy", "../escape.txt", options)).toBeNull();

    const archive = resolveSkillArchiveFile("alpha-architecture", "zip", options);
    expect(archive?.absolutePath).toBe(
      path.join(fixture.repoRoot, "dist", "archives", "alpha-architecture.zip"),
    );
    expect(resolveSkillArchiveFile("delta-legacy", "zip", options)).toBeNull();

    const signature = resolveSkillArchiveSignatureFile("alpha-architecture", "zip", options);
    expect(signature?.absolutePath).toBe(
      path.join(fixture.repoRoot, "dist", "archives", "alpha-architecture.zip.sig"),
    );
    expect(resolveSkillArchiveSignatureFile("delta-legacy", "zip", options)).toBeNull();

    const checksums = resolveSkillArchiveChecksumsFile("alpha-architecture", options);
    expect(checksums?.absolutePath).toBe(
      path.join(fixture.repoRoot, "dist", "archives", "alpha-architecture.checksums.txt"),
    );
    expect(resolveSkillArchiveChecksumsFile("delta-legacy", options)).toBeNull();
    expect(resolveSkillArchiveChecksumsFile("missing-skill", options)).toBeNull();

    const missingSignatureOptions = {
      ...options,
      storageAdapter: {
        ...fixture.storageAdapter,
        existsSync(filePath) {
          if (String(filePath).endsWith("alpha-architecture.zip.sig")) {
            return false;
          }
          return fixture.storageAdapter.existsSync(filePath);
        },
      },
    };
    expect(resolveSkillArchiveSignatureFile("alpha-architecture", "zip", missingSignatureOptions)).toBeNull();

    const missingChecksumsOptions = {
      ...options,
      storageAdapter: {
        ...fixture.storageAdapter,
        existsSync(filePath) {
          if (String(filePath).endsWith("alpha-architecture.checksums.txt")) {
            return false;
          }
          return fixture.storageAdapter.existsSync(filePath);
        },
      },
    };
    expect(resolveSkillArchiveChecksumsFile("alpha-architecture", missingChecksumsOptions)).toBeNull();
  });

  test("builds public URLs and download metadata for artifacts and archives", () => {
    const urls = getSkillPublicUrls("alpha-architecture", options);
    expect(urls.self).toBe("https://catalog.example.com/v1/skills/alpha-architecture");
    expect(urls.archive_checksums).toBe(
      "https://catalog.example.com/v1/skills/alpha-architecture/download/archive/checksums",
    );

    const artifacts = listSkillArtifacts("alpha-architecture", options);
    expect(artifacts).toHaveLength(1);
    expect(artifacts[0].download_url).toContain("/download/artifact?path=");

    const archives = listSkillArchives("alpha-architecture", options);
    expect(archives).toHaveLength(1);
    expect(archives[0].download_url).toContain("/download/archive?format=zip");
    expect(archives[0].signature.download_url).toContain("/download/archive/signature?format=zip");

    const legacyArchives = listSkillArchives("delta-legacy", options);
    expect(legacyArchives[0].signature.path).toBe("");

    expect(getSkillPublicUrls("missing-skill", options)).toBeNull();
    expect(
      getSkillPublicUrls("alpha-architecture", {
        repoRoot: fixture.repoRoot,
        storageAdapter: fixture.storageAdapter,
      }),
    ).toEqual({
      self: null,
      downloads: null,
      manifest: null,
      entrypoint: null,
      artifacts: null,
      archives: null,
      archive_checksums: null,
    });
    expect(listSkillArtifacts("missing-skill", options)).toBeNull();
    expect(listSkillArchives("missing-skill", options)).toBeNull();
    expect(resolveSkillArchiveFile("missing-skill", "zip", options)).toBeNull();
    expect(resolveSkillArchiveFile("alpha-architecture", "tar.gz", options)).toBeNull();
    expect(resolveSkillArchiveSignatureFile("missing-skill", "zip", options)).toBeNull();
  });

  test("lists skills with filters, pagination, catalog sorting, and lexical relevance", () => {
    const filtered = listSkills({
      ...options,
      category: "architecture",
      tool: "cursor",
      risk: "low",
      min_quality: 90,
      min_best_practices: 90,
      min_skill_level: 4,
      min_security: 90,
      validation_status: "passed",
      security_status: "clean",
    });

    expect(filtered.total).toBe(1);
    expect(filtered.results[0].id).toBe("alpha-architecture");

    const sortedByUpdated = listSkills({ ...options, sort: "updated", order: "desc" });
    expect(sortedByUpdated.results[0].id).toBe("gamma-security");

    const sortedByName = listSkills({ ...options, sort: "name" });
    expect(sortedByName.results[0].id).toBe("alpha-architecture");

    const paginated = listSkills({ ...options, sort: "quality", limit: 2, offset: 1 });
    expect(paginated.limit).toBe(2);
    expect(paginated.offset).toBe(1);
    expect(paginated.results).toHaveLength(2);
    expect(paginated.results[0].id).toBe("gamma-security");

    const lexical = listSkills({ ...options, q: "docker" });
    expect(lexical.sort).toBe("relevance");
    expect(lexical.results[0].id).toBe("beta-docker");

    const lexicalWithSortOverride = listSkills({ ...options, q: "review", sort: "security", order: "asc" });
    expect(lexicalWithSortOverride.results.at(-1).id).toBe("gamma-security");
  });

  test("falls back safely for unknown sort metrics, relevance passthrough, and id tie-breaks", () => {
    const unknownMetric = listSkills({ ...options, sort: "unknown-metric", order: "asc" });
    expect(unknownMetric.results.map((skill) => skill.id)).toEqual([
      "alpha-architecture",
      "beta-docker",
      "delta-legacy",
      "gamma-security",
    ]);

    const explicitRelevance = listSkills({ ...options, q: "alpha", sort: "relevance" });
    expect(explicitRelevance.sort).toBe("relevance");
    expect(explicitRelevance.results[0].id).toBe("alpha-architecture");

    const relevanceWithoutQuery = listSkills({ ...options, sort: "relevance" });
    expect(relevanceWithoutQuery.results.map((skill) => skill.id)).toEqual([
      "alpha-architecture",
      "beta-docker",
      "gamma-security",
      "delta-legacy",
    ]);

    const sortedByBestPractices = listSkills({ ...options, sort: "best-practices", order: "desc" });
    expect(sortedByBestPractices.results[0].id).toBe("gamma-security");

    const sortedBySkillLevel = listSkills({ ...options, sort: "skill-level", order: "desc" });
    expect(sortedBySkillLevel.results[0].id).toBe("alpha-architecture");

    const sortedBySecurity = listSkills({ ...options, sort: "security", order: "desc" });
    expect(sortedBySecurity.results[0].id).toBe("gamma-security");
  });

  test("returns skill details with or without public links and exposes search alias", () => {
    const skillWithoutBaseUrl = getSkill("alpha-architecture", {
      repoRoot: fixture.repoRoot,
      storageAdapter: fixture.storageAdapter,
    });
    expect(skillWithoutBaseUrl.links).toBeUndefined();

    const skillWithLinks = getSkill("alpha-architecture", options);
    expect(skillWithLinks.links.downloads).toBe(
      "https://catalog.example.com/v1/skills/alpha-architecture/downloads",
    );
    expect(searchSkills({ ...options, q: "architecture" }).results[0].id).toBe("alpha-architecture");
    expect(getSkill("missing-skill", options)).toBeNull();
  });

  test("compares manifests and computes shared tools, tags, categories, and unique differences", () => {
    const comparison = compareSkills(["alpha-architecture", "gamma-security", "missing-skill"], options);

    expect(comparison.skills).toHaveLength(2);
    expect(comparison.shared.categories).toEqual([]);
    expect(comparison.shared.tools).toEqual(["codex-cli"]);
    expect(comparison.shared.tags).toEqual([]);
    expect(comparison.differences.find((entry) => entry.id === "alpha-architecture")?.unique_tools).toContain(
      "cursor",
    );

    const empty = compareSkills(["missing-skill"], options);
    expect(empty.skills).toEqual([]);
    expect(empty.shared.tools).toEqual([]);
    expect(empty.shared.tags).toEqual([]);

    const sharedCategory = compareSkills(["alpha-architecture", "delta-legacy"], options);
    expect(sharedCategory.shared.categories).toEqual(["architecture"]);
  });

  test("recommends skills by goal and query, scoped by tool/category", () => {
    const goalResults = recommendSkills({
      ...options,
      goal: "security audit review",
      tool: "goose",
      category: "security",
      limit: 2,
    });
    expect(goalResults.results[0].id).toBe("gamma-security");
    expect(goalResults.results).toHaveLength(1);

    const queryResults = recommendSkills({
      ...options,
      q: "architecture planning",
      tool: "cursor",
      category: "architecture",
      limit: 1,
    });
    expect(queryResults.results[0].id).toBe("alpha-architecture");
  });

  test("boosts exact id matches, partial lexical matches, and tool/category relevance", () => {
    const exactMatch = listSkills({ ...options, q: "alpha-architecture" });
    expect(exactMatch.results[0].id).toBe("alpha-architecture");

    const partialMatch = listSkills({ ...options, q: "dock" });
    expect(partialMatch.results[0].id).toBe("beta-docker");

    const boosted = recommendSkills({
      ...options,
      q: "review",
      tool: "goose",
      category: "security",
      limit: 1,
    });
    expect(boosted.results[0].id).toBe("gamma-security");
  });

  test("lists bundles, resolves install recipes, and builds selected install plans with warnings", () => {
    const bundles = listBundles(options);
    const mixedBundle = bundles.find((bundle) => bundle.id === "ops-mixed");
    expect(mixedBundle.available_skill_ids).toEqual(["beta-docker"]);
    expect(mixedBundle.missing_skill_ids).toEqual(["missing-skill"]);

    const recipe = getClientInstallRecipe("goose", options);
    expect(recipe.source_skill_id).toBe("beta-docker");
    expect(recipe.recipe.tool).toBe("goose");
    expect(getClientInstallRecipe("unknown-client", options)).toBeNull();

    const selectedPlan = buildInstallPlan(
      {
        skill_ids: ["alpha-architecture", "missing-skill"],
        bundle_ids: ["ops-mixed", "missing-bundle"],
      },
      options,
    );
    expect(selectedPlan.install_scope).toBe("selected-skills");
    expect(selectedPlan.selected_skills.map((skill) => skill.id)).toEqual([
      "alpha-architecture",
      "beta-docker",
    ]);
    expect(selectedPlan.target_clients).toContain("cursor");
    expect(selectedPlan.target_clients).toContain("goose");
    expect(selectedPlan.warnings.join(" ")).toContain("Some requested skills were not found");
    expect(selectedPlan.warnings.join(" ")).toContain("Some requested bundles were not found");
    expect(selectedPlan.warnings.join(" ")).toContain("references unavailable skills");
    expect(selectedPlan.commands[0]).toContain("--skill 'alpha-architecture'");
    expect(selectedPlan.commands.some((command) => command.includes("--bundle 'ops-mixed'"))).toBe(true);

    const customPathPlan = buildInstallPlan(
      {
        target_path: "/tmp/custom-skills",
        dry_run: false,
      },
      options,
    );
    expect(customPathPlan.target_clients).toEqual(["custom-path"]);
    expect(customPathPlan.commands[0]).toContain("--path '/tmp/custom-skills'");
    expect(customPathPlan.dry_run).toBe(false);

    const unresolvedPlan = buildInstallPlan(
      {
        skill_ids: ["missing-skill"],
      },
      options,
    );
    expect(unresolvedPlan.install_scope).toBe("full-library");
    expect(unresolvedPlan.warnings.join(" ")).toContain("No requested skills or bundles could be resolved");
  });

  test("returns current health snapshot from the loaded catalog", () => {
    expect(getHealthSnapshot(options)).toEqual({
      status: "ok",
      generated_at: "2026-04-06T12:00:00.000Z",
      total_skills: 4,
      categories: ["architecture", "devops", "security"],
    });
  });

  test("resolves repo root from environment fallback when options omit repoRoot", () => {
    const previousRoot = process.env.OMNI_SKILLS_ROOT;
    process.env.OMNI_SKILLS_ROOT = fixture.repoRoot;
    try {
      const paths = getCatalogPaths();
      expect(paths.repoRoot).toBe(fixture.repoRoot);
      expect(paths.catalogPath).toBe(path.join(fixture.repoRoot, "dist", "catalog.json"));
    } finally {
      if (previousRoot === undefined) {
        delete process.env.OMNI_SKILLS_ROOT;
      } else {
        process.env.OMNI_SKILLS_ROOT = previousRoot;
      }
    }
  });
});
