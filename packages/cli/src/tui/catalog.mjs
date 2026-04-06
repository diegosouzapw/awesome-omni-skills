function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\\s-]/g, " ")
    .replace(/\\s+/g, " ")
    .trim();
}

function tokenize(value) {
  return normalizeText(value)
    .split(" ")
    .filter(Boolean);
}

function scoreBundle(bundle, query) {
  const tokens = tokenize(query);
  if (tokens.length === 0) {
    return 0;
  }

  const haystacks = [
    bundle.id,
    bundle.name,
    bundle.description,
    bundle.intended_for,
    ...(bundle.skill_ids || []),
  ].map(normalizeText);

  let score = 0;
  for (const token of tokens) {
    if (haystacks.some((value) => value === token)) {
      score += 6;
      continue;
    }
    if (haystacks.some((value) => value.includes(token))) {
      score += 2;
    }
  }
  return score;
}

function searchBundleMatches(bundles, query) {
  return bundles
    .map((bundle) => ({ ...bundle, _score: scoreBundle(bundle, query) }))
    .filter((bundle) => bundle._score > 0)
    .sort((left, right) => right._score - left._score || left.id.localeCompare(right.id))
    .map(({ _score, ...bundle }) => bundle);
}

export {
  normalizeText,
  tokenize,
  scoreBundle,
  searchBundleMatches,
};
