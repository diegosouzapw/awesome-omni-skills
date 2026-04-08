import path from "node:path";
import { fileURLToPath } from "node:url";
import { defaultFsAdapter } from "./repositories/FileSystemAdapter.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_REPO_ROOT = path.resolve(__dirname, "..", "..", "..");
const DEFAULT_LIMIT = 20;

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

function ensureNumber(value, fallback) {
  const parsed = Number.parseInt(String(value), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function ensureOptionalNumber(value) {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  return Number.isFinite(parsed) ? parsed : null;
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

function parseSortOrder(value, fallback = "desc") {
  const normalized = String(value || "").toLowerCase();
  if (normalized === "asc" || normalized === "desc") {
    return normalized;
  }
  return fallback;
}

function getMetricValue(skill, metric) {
  switch (metric) {
    case "quality":
      return Number(skill.quality_score || 0);
    case "best-practices":
    case "best_practices":
      return Number(skill.best_practices_score || 0);
    case "level":
    case "skill-level":
    case "skill_level":
      return Number(skill.skill_level || 0);
    case "security":
      return Number(skill.security_score || 0);
    case "updated":
      return Date.parse(skill.date_updated || skill.updated_at || skill.generated_at || "") || 0;
    default:
      return 0;
  }
}

function sortSkills(skills, sort = "", order = "desc") {
  const normalizedSort = String(sort || "").toLowerCase();
  const direction = order === "asc" ? 1 : -1;

  if (!normalizedSort || normalizedSort === "relevance") {
    return skills;
  }

  const cloned = [...skills];

  if (normalizedSort === "name") {
    cloned.sort((left, right) => direction * left.id.localeCompare(right.id));
    return cloned;
  }

  cloned.sort((left, right) => {
    const delta =
      getMetricValue(right, normalizedSort) - getMetricValue(left, normalizedSort);
    if (delta !== 0) {
      return direction === 1 ? -delta : delta;
    }
    return left.id.localeCompare(right.id);
  });
  return cloned;
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value) {
  return normalizeText(value)
    .split(" ")
    .filter(Boolean);
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

function scoreTextMatch(skill, tokens, goalTokens = []) {
  let score = 0;
  const haystacks = [
    skill.id,
    skill.slug,
    skill.display_name,
    skill.description,
    ...(skill.tags || []),
    skill.category,
    skill.raw_category,
    skill.canonical_category,
  ].map(normalizeText);

  for (const token of tokens) {
    if (!token) continue;
    if (normalizeText(skill.id) === token || normalizeText(skill.slug) === token) {
      score += 10;
      continue;
    }
    if (haystacks.some((value) => value === token)) {
      score += 8;
      continue;
    }
    if (haystacks.some((value) => value.includes(token))) {
      score += 3;
    }
  }

  for (const token of goalTokens) {
    if (haystacks.some((value) => value.includes(token))) {
      score += 2;
    }
  }

  return score;
}

function scoreSkill(skill, tokens, goalTokens = [], tool = "", category = "") {
  let score = scoreTextMatch(skill, tokens, goalTokens);

  if (tool && (skill.tools || []).includes(tool)) {
    score += 4;
  }

  if (
    category &&
    (skill.category === category ||
      skill.raw_category === category ||
      skill.canonical_category === category)
  ) {
    score += 3;
  }

  return score;
}

export function getCatalogPaths(options = {}) {
  const repoRoot = resolveRepoRoot(options.repoRoot);
  return {
    repoRoot,
    distDir: path.join(repoRoot, "dist"),
    catalogPath: path.join(repoRoot, "dist", "catalog.json"),
    manifestsDir: path.join(repoRoot, "dist", "manifests"),
    skillsIndexPath: path.join(repoRoot, "skills_index.json"),
  };
}

export function loadCatalog(options = {}) {
  const adapter = options.storageAdapter || defaultFsAdapter;
  const paths = getCatalogPaths(options);
  return readJson(paths.catalogPath, adapter);
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
  const catalog = loadCatalog(options);
  let skills = [...catalog.skills];
  const sort = String(options.sort || "").trim().toLowerCase();
  const order = parseSortOrder(options.order, sort === "name" ? "asc" : "desc");
  const minQualityScore = ensureOptionalNumber(options.min_quality_score ?? options.min_quality);
  const minBestPracticesScore = ensureOptionalNumber(
    options.min_best_practices_score ?? options.min_best_practices,
  );
  const minSkillLevel = ensureOptionalNumber(options.min_skill_level ?? options.min_level);
  const minSecurityScore = ensureOptionalNumber(options.min_security_score ?? options.min_security);

  if (options.category) {
    skills = skills.filter(
      (skill) =>
        skill.category === options.category ||
        skill.raw_category === options.category ||
        skill.canonical_category === options.category,
    );
  }

  if (options.tool) {
    skills = skills.filter((skill) => (skill.tools || []).includes(options.tool));
  }

  if (options.risk) {
    skills = skills.filter((skill) => skill.risk === options.risk);
  }

  if (options.validation_status) {
    skills = skills.filter((skill) => skill.validation_status === options.validation_status);
  }

  if (options.security_status) {
    skills = skills.filter((skill) => skill.security_status === options.security_status);
  }

  if (minQualityScore !== null) {
    skills = skills.filter((skill) => Number(skill.quality_score || 0) >= minQualityScore);
  }

  if (minBestPracticesScore !== null) {
    skills = skills.filter(
      (skill) => Number(skill.best_practices_score || 0) >= minBestPracticesScore,
    );
  }

  if (minSkillLevel !== null) {
    skills = skills.filter((skill) => Number(skill.skill_level || 0) >= minSkillLevel);
  }

  if (minSecurityScore !== null) {
    skills = skills.filter((skill) => Number(skill.security_score || 0) >= minSecurityScore);
  }

  const queryTokens = tokenize(options.q || options.query || "");
  if (queryTokens.length > 0) {
    skills = skills
      .map((skill) => {
        const textScore = scoreTextMatch(skill, queryTokens, []);
        return {
          ...skill,
          _textScore: textScore,
          _score: scoreSkill(skill, queryTokens, [], options.tool, options.category),
        };
      })
      .filter((skill) => skill._textScore > 0)
      .sort((left, right) => right._score - left._score || left.id.localeCompare(right.id));

    if (sort && sort !== "relevance") {
      skills = sortSkills(skills, sort, order);
    }

    skills = skills.map(({ _score, _textScore, ...skill }) => skill);
  } else if (sort) {
    skills = sortSkills(skills, sort, order);
  }

  const limit = ensureNumber(options.limit, DEFAULT_LIMIT);
  const offset = Math.max(0, Number.parseInt(String(options.offset || 0), 10) || 0);

  return {
    total: skills.length,
    offset,
    limit,
    sort: sort || (queryTokens.length > 0 ? "relevance" : "catalog"),
    order,
    filters: {
      category: options.category || null,
      tool: options.tool || null,
      risk: options.risk || null,
      min_quality_score: minQualityScore,
      min_best_practices_score: minBestPracticesScore,
      min_skill_level: minSkillLevel,
      min_security_score: minSecurityScore,
      validation_status: options.validation_status || null,
      security_status: options.security_status || null,
    },
    results: skills.slice(offset, offset + limit),
  };
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
  return listSkills(options);
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
  const manifests = loadAllManifests(options);
  const goalTokens = tokenize(options.goal || "");
  const queryTokens = tokenize(options.q || options.query || "");
  const limit = ensureNumber(options.limit, 5);

  const results = manifests
    .map((manifest) => ({
      id: manifest.id,
      display_name: manifest.display_name,
      description: manifest.description,
      category: manifest.category,
      raw_category: manifest.raw_category,
      canonical_category: manifest.taxonomy?.canonical_category || manifest.category,
      tags: manifest.tags || [],
      tools: manifest.compatibility.tools || [],
      manifest_path: manifest.paths.manifest,
      skill_level: manifest.classification?.maturity?.skill_level,
      skill_level_label: manifest.classification?.maturity?.skill_level_label,
      best_practices_score: manifest.classification?.best_practices?.score,
      quality_score: manifest.classification?.quality?.score,
      security_score: manifest.classification?.security?.score,
      security_status: manifest.classification?.security?.status,
      score: scoreSkill(
        manifest,
        queryTokens.length > 0 ? queryTokens : goalTokens,
        goalTokens,
        options.tool || "",
        options.category || "",
      ),
    }))
    .filter((skill) => {
      if (options.tool && !(skill.tools || []).includes(options.tool)) {
        return false;
      }

      if (
        options.category &&
        skill.category !== options.category &&
        skill.raw_category !== options.category &&
        skill.canonical_category !== options.category
      ) {
        return false;
      }

      return true;
    })
    .sort((left, right) => right.score - left.score || left.id.localeCompare(right.id))
    .slice(0, limit);

  return {
    goal: options.goal || "",
    tool: options.tool || null,
    category: options.category || null,
    results,
  };
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
