export const DEFAULT_LIMIT = 20;

export function ensureNumber(value, fallback) {
  const parsed = Number.parseInt(String(value), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export function ensureOptionalNumber(value) {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  return Number.isFinite(parsed) ? parsed : null;
}

export function parseSortOrder(value, fallback = "desc") {
  const normalized = String(value || "").toLowerCase();
  if (normalized === "asc" || normalized === "desc") {
    return normalized;
  }
  return fallback;
}

export function getMetricValue(skill, metric) {
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

export function sortSkills(skills, sort = "", order = "desc") {
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
    const delta = getMetricValue(right, normalizedSort) - getMetricValue(left, normalizedSort);
    if (delta !== 0) {
      return direction === 1 ? -delta : delta;
    }
    return left.id.localeCompare(right.id);
  });
  return cloned;
}

export function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function tokenize(value) {
  return normalizeText(value)
    .split(" ")
    .filter(Boolean);
}

export function scoreTextMatch(skill, tokens, goalTokens = []) {
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

export function scoreSkill(skill, tokens, goalTokens = [], tool = "", category = "") {
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

export function parseSearchOptions(options = {}) {
  const sort = String(options.sort || "").trim().toLowerCase();
  const order = parseSortOrder(options.order, sort === "name" ? "asc" : "desc");
  const minQualityScore = ensureOptionalNumber(options.min_quality_score ?? options.min_quality);
  const minBestPracticesScore = ensureOptionalNumber(
    options.min_best_practices_score ?? options.min_best_practices,
  );
  const minSkillLevel = ensureOptionalNumber(options.min_skill_level ?? options.min_level);
  const minSecurityScore = ensureOptionalNumber(options.min_security_score ?? options.min_security);
  const limit = ensureNumber(options.limit, DEFAULT_LIMIT);
  const offset = Math.max(0, Number.parseInt(String(options.offset || 0), 10) || 0);
  const queryTokens = tokenize(options.q || options.query || "");

  return {
    sort,
    order,
    limit,
    offset,
    queryTokens,
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
  };
}

export function skillMatchesFilters(skill, filters = {}) {
  if (
    filters.category &&
    skill.category !== filters.category &&
    skill.raw_category !== filters.category &&
    skill.canonical_category !== filters.category
  ) {
    return false;
  }

  if (filters.tool && !(skill.tools || []).includes(filters.tool)) {
    return false;
  }

  if (filters.risk && skill.risk !== filters.risk) {
    return false;
  }

  if (
    filters.validation_status &&
    skill.validation_status !== filters.validation_status
  ) {
    return false;
  }

  if (filters.security_status && skill.security_status !== filters.security_status) {
    return false;
  }

  if (
    filters.min_quality_score !== null &&
    Number(skill.quality_score || 0) < filters.min_quality_score
  ) {
    return false;
  }

  if (
    filters.min_best_practices_score !== null &&
    Number(skill.best_practices_score || 0) < filters.min_best_practices_score
  ) {
    return false;
  }

  if (
    filters.min_skill_level !== null &&
    Number(skill.skill_level || 0) < filters.min_skill_level
  ) {
    return false;
  }

  if (
    filters.min_security_score !== null &&
    Number(skill.security_score || 0) < filters.min_security_score
  ) {
    return false;
  }

  return true;
}

export function buildSearchResponse(skills, parsedOptions) {
  return {
    total: skills.length,
    offset: parsedOptions.offset,
    limit: parsedOptions.limit,
    sort: parsedOptions.sort || (parsedOptions.queryTokens.length > 0 ? "relevance" : "catalog"),
    order: parsedOptions.order,
    filters: parsedOptions.filters,
    results: skills.slice(parsedOptions.offset, parsedOptions.offset + parsedOptions.limit),
  };
}

