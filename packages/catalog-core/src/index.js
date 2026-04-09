import path from "node:path";
import { fileURLToPath } from "node:url";
import { createSearchAdapter } from "./adapters/createSearchAdapter.js";
import { defaultFsAdapter } from "./repositories/FileSystemAdapter.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_REPO_ROOT = path.resolve(__dirname, "..", "..", "..");

function resolveRepoRoot(repoRoot) {
  if (repoRoot) {
    return path.resolve(repoRoot);
  }

  if (process.env.OMNI_SKILLS_ROOT) {
    return path.resolve(process.env.OMNI_SKILLS_ROOT);
  }

  return DEFAULT_REPO_ROOT;
}

function readJson(jsonPath, adapter = defaultFsAdapter) {
  return adapter.readJsonSync(jsonPath);
}

function loadBundleDefinitions(options = {}) {
  const adapter = options.storageAdapter || defaultFsAdapter;
  const { repoRoot } = getCatalogPaths(options);
  const bundlesPath = path.join(repoRoot, "data", "bundles.json");
  return readJson(bundlesPath, adapter);
}

function trimTrailingSlash(value) {
  let result = String(value || "");
  while (result.endsWith("/")) {
    result = result.slice(0, -1);
  }
  return result;
}

function getPublicBaseUrl(options = {}) {
  const baseUrl =
    options.baseUrl ||
    process.env.OMNI_SKILLS_PUBLIC_BASE_URL ||
    process.env.OMNI_SKILLS_API_BASE_URL ||
    "";

  return trimTrailingSlash(baseUrl) || null;
}

function buildPublicUrl(pathname, options = {}) {
  const baseUrl = getPublicBaseUrl(options);
  if (!baseUrl) {
    return null;
  }

  return `${baseUrl}${pathname}`;
}


function shellQuote(value) {
  return `'${String(value).replace(/'/g, `'\\''`)}'`;
}

function appendSelectionFlags(command, selection = {}) {
  const flags = [
    ...(selection.bundleIds || []).map((bundleId) => `--bundle ${shellQuote(bundleId)}`),
    ...(selection.skillIds || []).map((skillId) => `--skill ${shellQuote(skillId)}`),
  ];

  return flags.length > 0 ? `${command} ${flags.join(" ")}` : command;
}


export function getCatalogPaths(options = {}) {
  const repoRoot = resolveRepoRoot(options.repoRoot);
  return {
    repoRoot,
    distDir: path.join(repoRoot, "dist"),
    catalogPath: path.join(repoRoot, "dist", "catalog.json"),
    databasePath: path.join(repoRoot, "dist", "catalog.db"),
    manifestsDir: path.join(repoRoot, "dist", "manifests"),
    skillsIndexPath: path.join(repoRoot, "skills_index.json"),
  };
}

export function loadCatalog(options = {}) {
  const adapter = options.storageAdapter || defaultFsAdapter;
  const paths = getCatalogPaths(options);
  return readJson(paths.catalogPath, adapter);
}

export function listFamilies(options = {}) {
  const catalog = loadCatalog(options);
  return [...(catalog.families || [])];
}

export function getFamily(familyId, options = {}) {
  return listFamilies(options).find((family) => family.id === familyId) || null;
}

export function resolveSkillSelection(selectionId, options = {}) {
  if (!selectionId) {
    return null;
  }

  const catalog = loadCatalog(options);
  const directSkill = (catalog.skills || []).find((skill) => skill.id === selectionId);
  if (directSkill) {
    return directSkill;
  }

  const family = (catalog.families || []).find((item) => item.id === selectionId);
  if (!family) {
    return null;
  }

  return (catalog.skills || []).find((skill) => skill.id === family.default_skill_id) || null;
}

export function resolveFamilyVariant(familyId, variantId = "", options = {}) {
  const catalog = loadCatalog(options);
  const family = (catalog.families || []).find((item) => item.id === familyId);
  if (!family) {
    return null;
  }

  if (!variantId) {
    return (catalog.skills || []).find((skill) => skill.id === family.default_skill_id) || null;
  }

  const variant = (family.variants || []).find((item) => item.variant_id === variantId || item.id === variantId);
  if (!variant) {
    return null;
  }

  return (catalog.skills || []).find((skill) => skill.id === variant.id) || null;
}

export function loadSkillsIndex(options = {}) {
  const adapter = options.storageAdapter || defaultFsAdapter;
  const paths = getCatalogPaths(options);
  return readJson(paths.skillsIndexPath, adapter);
}

export function loadManifest(skillId, options = {}) {
  const adapter = options.storageAdapter || defaultFsAdapter;
  const paths = getCatalogPaths(options);
  const manifestPath = path.join(paths.manifestsDir, `${skillId}.json`);

  if (!adapter.existsSync(manifestPath)) {
    return null;
  }

  return readJson(manifestPath, adapter);
}

export function loadAllManifests(options = {}) {
  const catalog = loadCatalog(options);
  return catalog.skills
    .map((skill) => loadManifest(skill.id, options))
    .filter(Boolean);
}

function resolveRepoFile(relativePath, options = {}) {
  const { repoRoot } = getCatalogPaths(options);
  const absolutePath = path.resolve(repoRoot, relativePath);
  const repoRootPrefix = `${repoRoot}${path.sep}`;

  if (absolutePath !== repoRoot && !absolutePath.startsWith(repoRootPrefix)) {
    return null;
  }

  return absolutePath;
}

export function resolveCatalogFile(options = {}) {
  return getCatalogPaths(options).catalogPath;
}

export function resolveCatalogDatabaseFile(options = {}) {
  return getCatalogPaths(options).databasePath;
}

export function resolveManifestFile(skillId, options = {}) {
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  return resolveRepoFile(manifest.paths.manifest, options);
}

export function resolveSkillEntrypointFile(skillId, options = {}) {
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  return resolveRepoFile(manifest.entrypoint, options);
}

export function listSkillArtifacts(skillId, options = {}) {
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  return (manifest.artifacts || []).map((artifact) => ({
    ...artifact,
    download_url: buildPublicUrl(
      `/v1/skills/${encodeURIComponent(skillId)}/download/artifact?path=${encodeURIComponent(
        artifact.path,
      )}`,
      options,
    ),
  }));
}

export function resolveSkillArtifactFile(skillId, artifactPath, options = {}) {
  const adapter = options.storageAdapter || defaultFsAdapter;
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  const artifact = (manifest.artifacts || []).find((item) => item.path === artifactPath);
  if (!artifact) {
    return null;
  }

  const absolutePath = resolveRepoFile(artifact.path, options);
  if (!absolutePath || !adapter.existsSync(absolutePath)) {
    return null;
  }

  return {
    artifact,
    absolutePath,
  };
}

export function getSkillPublicUrls(skillId, options = {}) {
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  return {
    self: buildPublicUrl(`/v1/skills/${encodeURIComponent(skillId)}`, options),
    downloads: buildPublicUrl(`/v1/skills/${encodeURIComponent(skillId)}/downloads`, options),
    manifest: buildPublicUrl(`/v1/skills/${encodeURIComponent(skillId)}/download/manifest`, options),
    entrypoint: buildPublicUrl(`/v1/skills/${encodeURIComponent(skillId)}/download/entrypoint`, options),
    artifacts: buildPublicUrl(`/v1/skills/${encodeURIComponent(skillId)}/artifacts`, options),
    archives: buildPublicUrl(`/v1/skills/${encodeURIComponent(skillId)}/archives`, options),
    archive_checksums: buildPublicUrl(
      `/v1/skills/${encodeURIComponent(skillId)}/download/archive/checksums`,
      options,
    ),
  };
}

export function listSkillArchives(skillId, options = {}) {
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  return (manifest.archives || []).map((archive) => ({
    ...archive,
    download_url: buildPublicUrl(
      `/v1/skills/${encodeURIComponent(skillId)}/download/archive?format=${encodeURIComponent(
        archive.format,
      )}`,
      options,
    ),
    signature:
      archive.signature && archive.signature.path
        ? {
            ...archive.signature,
            download_url: buildPublicUrl(
              `/v1/skills/${encodeURIComponent(skillId)}/download/archive/signature?format=${encodeURIComponent(
                archive.format,
              )}`,
              options,
            ),
          }
        : archive.signature,
  }));
}

export function resolveSkillArchiveFile(skillId, format, options = {}) {
  const adapter = options.storageAdapter || defaultFsAdapter;
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  const archive = (manifest.archives || []).find((item) => item.format === format);
  if (!archive) {
    return null;
  }

  const absolutePath = resolveRepoFile(archive.path, options);
  if (!absolutePath || !adapter.existsSync(absolutePath)) {
    return null;
  }

  return { archive, absolutePath };
}

export function resolveSkillArchiveSignatureFile(skillId, format, options = {}) {
  const adapter = options.storageAdapter || defaultFsAdapter;
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  const archive = (manifest.archives || []).find((item) => item.format === format);
  const signaturePath = archive?.signature?.path;
  if (!archive || !signaturePath) {
    return null;
  }

  const absolutePath = resolveRepoFile(signaturePath, options);
  if (!absolutePath || !adapter.existsSync(absolutePath)) {
    return null;
  }

  return { archive, absolutePath };
}

export function resolveSkillArchiveChecksumsFile(skillId, options = {}) {
  const adapter = options.storageAdapter || defaultFsAdapter;
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  const checksumPath = manifest.archive_checksums?.path;
  if (!checksumPath) {
    return null;
  }

  const absolutePath = resolveRepoFile(checksumPath, options);
  if (!absolutePath || !adapter.existsSync(absolutePath)) {
    return null;
  }

  return {
    archive_checksums: manifest.archive_checksums,
    absolutePath,
  };
}

export function listSkills(options = {}) {
  return withSearchAdapter(options, (adapter) => adapter.list(options));
}

export function getSkill(skillId, options = {}) {
  const manifest = loadManifest(skillId, options);
  if (!manifest) {
    return null;
  }

  const baseUrl = getPublicBaseUrl(options);
  if (!baseUrl) {
    return manifest;
  }

  return {
    ...manifest,
    links: getSkillPublicUrls(skillId, options),
  };
}

export function searchSkills(options = {}) {
  return withSearchAdapter(options, (adapter) => adapter.search(options));
}

export function searchFamilies(options = {}) {
  const catalog = loadCatalog(options);
  const familyMap = new Map((catalog.families || []).map((family) => [family.id, family]));
  const searchResult = searchSkills(options);
  const familyResults = [];
  const seen = new Set();

  for (const skill of searchResult.results || []) {
    const family = familyMap.get(skill.family_id);
    if (!family || seen.has(family.id)) {
      continue;
    }
    seen.add(family.id);
    familyResults.push({
      ...family,
      default_skill_id: family.default_skill_id,
      default_skill: resolveSkillSelection(family.default_skill_id, options),
      matched_skill_id: skill.id,
    });
  }

  if (!String(options.query || options.q || "").trim()) {
    const rankedFamilies = [...(catalog.families || [])]
      .sort((left, right) => {
        const leftSkill = resolveSkillSelection(left.default_skill_id, options);
        const rightSkill = resolveSkillSelection(right.default_skill_id, options);
        return (
          Number(rightSkill?.quality_score || 0) - Number(leftSkill?.quality_score || 0) ||
          String(left.display_name || left.id).localeCompare(String(right.display_name || right.id))
        );
      })
      .slice(0, options.limit || 24)
      .map((family) => ({
        ...family,
        default_skill: resolveSkillSelection(family.default_skill_id, options),
      }));

    return {
      ...searchResult,
      total: rankedFamilies.length,
      results: rankedFamilies,
    };
  }

  return {
    ...searchResult,
    total: familyResults.length,
    results: familyResults.slice(0, options.limit || familyResults.length || 0),
  };
}

export function compareSkills(skillIds, options = {}) {
  const manifests = skillIds
    .map((skillId) => loadManifest(skillId, options))
    .filter(Boolean);

  if (manifests.length === 0) {
    return {
      skills: [],
      shared: {
        categories: [],
        tools: [],
        tags: [],
      },
      differences: [],
    };
  }

  const shared = {
    categories:
      new Set(manifests.map((manifest) => manifest.category).filter(Boolean)).size === 1
        ? [...new Set(manifests.map((manifest) => manifest.category).filter(Boolean))]
        : [],
    tools: manifests
      .map((manifest) => new Set(manifest.compatibility.tools || []))
      .reduce((current, next) => {
        if (!current) return next;
        return new Set([...current].filter((tool) => next.has(tool)));
      }, null),
    tags: manifests
      .map((manifest) => new Set(manifest.tags || []))
      .reduce((current, next) => {
        if (!current) return next;
        return new Set([...current].filter((tag) => next.has(tag)));
      }, null),
  };

  return {
    skills: manifests.map((manifest) => ({
      id: manifest.id,
      display_name: manifest.display_name,
      description: manifest.description,
      category: manifest.category,
      tools: manifest.compatibility.tools || [],
      tags: manifest.tags || [],
      risk: manifest.risk,
      manifest_path: manifest.paths.manifest,
    })),
    shared: {
      categories: shared.categories,
      tools: [...(shared.tools || new Set())],
      tags: [...(shared.tags || new Set())],
    },
    differences: manifests.map((manifest) => ({
      id: manifest.id,
      unique_tools: (manifest.compatibility.tools || []).filter(
        (tool) => !(shared.tools || new Set()).has(tool),
      ),
      unique_tags: (manifest.tags || []).filter((tag) => !(shared.tags || new Set()).has(tag)),
    })),
  };
}

export function recommendSkills(options = {}) {
  return withSearchAdapter(options, (adapter) => adapter.recommend(options));
}

export function listBundles(options = {}) {
  const availableIds = new Set(loadCatalog(options).skills.map((skill) => skill.id));
  const bundleDefinitions = loadBundleDefinitions(options);

  return bundleDefinitions.map((bundle) => {
    const available_skill_ids = bundle.skill_ids.filter((skillId) => availableIds.has(skillId));
    const missing_skill_ids = bundle.skill_ids.filter((skillId) => !availableIds.has(skillId));
    return {
      ...bundle,
      available_skill_ids,
      missing_skill_ids,
      availability: {
        available: available_skill_ids.length,
        total: bundle.skill_ids.length,
      },
    };
  });
}

export function getClientInstallRecipe(client, options = {}) {
  const manifests = loadAllManifests(options);

  for (const manifest of manifests) {
    const match = (manifest.install.recipes || []).find((recipe) => recipe.tool === client);
    if (match) {
      return {
        client,
        recipe: match,
        source_skill_id: manifest.id,
      };
    }
  }

  return null;
}

export function buildInstallPlan(input = {}, options = {}) {
  const explicitSkillIds = Array.isArray(input.skill_ids) ? input.skill_ids : input.skillIds || [];
  const explicitBundleIds = Array.isArray(input.bundle_ids) ? input.bundle_ids : input.bundleIds || [];
  const bundleIndex = new Map(listBundles(options).map((bundle) => [bundle.id, bundle]));
  const selectedBundles = explicitBundleIds
    .map((bundleId) => bundleIndex.get(bundleId))
    .filter(Boolean);
  const expandedSkillIds = [...new Set([
    ...explicitSkillIds,
    ...selectedBundles.flatMap((bundle) => bundle.available_skill_ids || []),
  ])];
  const selectedSkills = expandedSkillIds
    .map((skillId) => loadManifest(skillId, options))
    .filter(Boolean);
  const validExplicitSkillIds = explicitSkillIds.filter((skillId) =>
    selectedSkills.some((skill) => skill.id === skillId),
  );
  const validExplicitBundleIds = selectedBundles.map((bundle) => bundle.id);

  const explicitTools = Array.isArray(input.tools) ? input.tools : [];
  const targetPath = input.target_path || input.targetPath || null;
  const dryRun = input.dry_run !== undefined ? Boolean(input.dry_run) : true;
  const hasResolvedSelection = validExplicitSkillIds.length > 0 || validExplicitBundleIds.length > 0;

  const inferredTools = [...new Set(
    selectedSkills.flatMap((skill) => (skill.compatibility.install_targets || []).map((target) => target.tool)),
  )];

  const tools = explicitTools.length > 0 ? explicitTools : inferredTools;
  const baseRecipes = targetPath
    ? [
        {
          tool: "custom-path",
          command: `npx awesome-omni-skills --path ${shellQuote(targetPath)}`,
          scope: "custom",
          default_path: targetPath,
          behavior: "Installs the full Awesome Omni Skills library into the selected custom path by default. Use --skill or --bundle to install only a subset.",
        },
      ]
    : tools
        .map((tool) => getClientInstallRecipe(tool, options))
        .filter(Boolean)
        .map((item) => item.recipe);
  const clientRecipes = baseRecipes.map((recipe) => ({
    ...recipe,
    command: appendSelectionFlags(recipe.command, {
      skillIds: validExplicitSkillIds,
      bundleIds: validExplicitBundleIds,
    }),
    behavior: hasResolvedSelection
      ? "Installs only the selected skills and bundle members into the selected target."
      : recipe.behavior,
  }));

  const warnings = [];
  const missingSkillIds = explicitSkillIds.filter(
    (skillId) => !selectedSkills.some((skill) => skill.id === skillId),
  );
  if (missingSkillIds.length > 0) {
    warnings.push(`Some requested skills were not found: ${missingSkillIds.join(", ")}.`);
  }

  const missingBundleIds = explicitBundleIds.filter((bundleId) => !bundleIndex.has(bundleId));
  if (missingBundleIds.length > 0) {
    warnings.push(`Some requested bundles were not found: ${missingBundleIds.join(", ")}.`);
  }

  if ((explicitSkillIds.length > 0 || explicitBundleIds.length > 0) && !hasResolvedSelection) {
    warnings.push("No requested skills or bundles could be resolved. Generated commands fall back to the default full-library install.");
  }

  const bundlesWithMissingSkills = selectedBundles.filter(
    (bundle) => Array.isArray(bundle.missing_skill_ids) && bundle.missing_skill_ids.length > 0,
  );
  for (const bundle of bundlesWithMissingSkills) {
    warnings.push(
      `Bundle '${bundle.id}' references unavailable skills: ${bundle.missing_skill_ids.join(", ")}.`,
    );
  }
  if (!targetPath && clientRecipes.length === 0) {
    warnings.push("No compatible install targets were resolved from the selected skills. Provide an explicit tool or target_path.");
  }

  return {
    dry_run: dryRun,
    selected_bundles: selectedBundles.map((bundle) => ({
      id: bundle.id,
      name: bundle.name,
      available_skill_ids: bundle.available_skill_ids,
      missing_skill_ids: bundle.missing_skill_ids,
    })),
    selected_skills: selectedSkills.map((skill) => ({
      id: skill.id,
      display_name: skill.display_name,
      manifest_path: skill.paths.manifest,
      checksums: skill.checksums,
      links: getSkillPublicUrls(skill.id, options),
      archives: listSkillArchives(skill.id, options),
      classification: skill.classification,
    })),
    install_scope: hasResolvedSelection ? "selected-skills" : "full-library",
    target_path: targetPath,
    target_clients: targetPath ? ["custom-path"] : tools,
    commands: clientRecipes.map((recipe) => recipe.command),
    recipes: clientRecipes,
    warnings,
    downloads: {
      catalog: buildPublicUrl("/v1/catalog/download", options),
      artifacts_available: Boolean(getPublicBaseUrl(options)),
    },
    next_steps: clientRecipes.map((recipe) => ({
      action: "run-command",
      command: recipe.command,
      description: `Install Awesome Omni Skills into ${recipe.default_path}`,
    })),
  };
}

export function getHealthSnapshot(options = {}) {
  const catalog = loadCatalog(options);
  return {
    status: "ok",
    generated_at: catalog.generated_at,
    total_skills: catalog.total_skills,
    categories: catalog.categories,
  };
}

function createSearchAdapterContext(options = {}) {
  const paths = getCatalogPaths(options);
  return {
    ...options,
    catalogPath: paths.catalogPath,
    databasePath: paths.databasePath,
    catalog: options.catalog || loadCatalog(options),
    manifestLoader: (skillId) => loadManifest(skillId, options),
  };
}

function withSearchAdapter(options = {}, callback) {
  const externalAdapter = options.searchAdapter && typeof options.searchAdapter.search === "function";
  const adapter = externalAdapter
    ? options.searchAdapter
    : createSearchAdapter(createSearchAdapterContext(options));

  try {
    return callback(adapter);
  } finally {
    if (!externalAdapter && typeof adapter.close === "function") {
      adapter.close();
    }
  }
}

export { createSearchAdapter };
