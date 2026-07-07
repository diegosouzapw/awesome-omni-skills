#!/usr/bin/env node

"use strict";

/**
 * Harness de avaliação de retrieval sobre o adapter de busca REAL (SQLite/FTS5).
 *
 * Roda dois conjuntos de queries contra o catálogo e reporta recall@k / MRR:
 *   1. golden set curado  (tools/eval/golden-queries.json): query -> substrings
 *      de id esperadas. Uma query "acerta" quando algum id do top-k contém uma
 *      das substrings esperadas (recall binário por query).
 *   2. known-item: para cada skill amostrada deterministicamente (passo por id
 *      ordenado, SEM Math.random), uma query derivada do seu display_name deve
 *      recuperar o próprio id no top-k.
 *
 * O adapter é criado SEM injetar o catálogo, para exercitar o SQL real
 * (BM25/porter/trigram) em vez do scorer em memória.
 *
 * CLI:  node tools/scripts/eval_search.js [--output-json <path>] [--gate]
 */

const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const ROOT = path.resolve(__dirname, "..", "..");

// Módulos ESM (catalog-core, metrics, load-golden) carregados via import()
// dinâmico para funcionar a partir deste script CommonJS em qualquer Node >= 22.
async function loadDeps() {
  const core = await import(
    pathToFileURL(path.join(ROOT, "packages", "catalog-core", "src", "index.js")).href
  );
  const metrics = await import(pathToFileURL(path.join(ROOT, "tools", "eval", "metrics.js")).href);
  const golden = await import(pathToFileURL(path.join(ROOT, "tools", "eval", "load-golden.js")).href);
  return { core, metrics, golden };
}

// Stopwords triviais + rótulos de variante/versão que não agregam sinal de busca.
const STOPWORDS = new Set([
  "the", "a", "an", "and", "or", "of", "to", "for", "with", "in", "on", "by",
  "skill", "workflow", "use", "this", "when", "user", "needs", "pro", "expert",
  "hybrid", "engine", "v1", "v2", "v3", "omni",
]);

function deriveKnownItemQuery(skill) {
  const name = String(skill.display_name || skill.slug || skill.id || "");
  const tokens = name
    .toLowerCase()
    .replace(/[^a-z0-9\s]+/g, " ") // remove emoji/pontuação
    .split(/\s+/)
    .filter(Boolean)
    .filter(
      (token) =>
        token.length >= 2 &&
        !STOPWORDS.has(token) &&
        !/^v?\d+(\.\d+)*$/.test(token), // descarta "v2", "2.0", etc.
    );

  const seen = new Set();
  const significant = [];
  for (const token of tokens) {
    if (seen.has(token)) continue;
    seen.add(token);
    significant.push(token);
    if (significant.length >= 5) break;
  }
  return significant;
}

function sampleSkills(catalog, sampleSize) {
  const skills = [...(catalog.skills || [])].sort((left, right) =>
    String(left.id).localeCompare(String(right.id)),
  );
  const n = skills.length;
  if (n === 0) return [];
  if (!sampleSize || sampleSize >= n) return skills;

  const step = Math.max(1, Math.floor(n / sampleSize));
  const out = [];
  for (let i = 0; i < n && out.length < sampleSize; i += step) {
    out.push(skills[i]);
  }
  return out;
}

async function runEval({ repoRoot = ROOT, sampleSize = 200, ks = [1, 3, 5, 10], goldenPath } = {}) {
  const { core, metrics, golden } = await loadDeps();
  const { createSearchAdapter, getCatalogPaths, loadCatalog } = core;
  const { aggregate } = metrics;
  const { loadGolden } = golden;

  const paths = getCatalogPaths({ repoRoot });
  const catalog = loadCatalog({ repoRoot });
  // Sem `catalog` injetado -> o adapter usa o SQL real (SQLite/FTS5).
  const adapter = createSearchAdapter({ ...paths, searchMode: "sqlite" });
  const maxK = Math.max(...ks);

  try {
    const goldenFile = goldenPath || path.join(ROOT, "tools", "eval", "golden-queries.json");
    const goldenSet = loadGolden(goldenFile);
    const goldenCases = [];
    for (const { q, expect_id_substrings } of goldenSet.queries) {
      const ids = adapter.search({ query: q, limit: maxK }).results.map((r) => r.id);
      // Colapsa "acerto por substring" num id sintético único, para reusar
      // recallAtK/reciprocalRank (recall binário: achou um relevante no top-k?).
      const retrieved = ids.map((id, i) =>
        expect_id_substrings.some((sub) => id.includes(sub)) ? "__HIT__" : `__miss_${i}__`,
      );
      goldenCases.push({ retrieved, relevant: new Set(["__HIT__"]) });
    }

    const sample = sampleSkills(catalog, sampleSize);
    const knownCases = [];
    for (const skill of sample) {
      const tokens = deriveKnownItemQuery(skill);
      if (tokens.length === 0) continue;
      const ids = adapter.search({ query: tokens.join(" "), limit: maxK }).results.map((r) => r.id);
      knownCases.push({ retrieved: ids, relevant: new Set([skill.id]) });
    }

    return {
      golden: aggregate(goldenCases, ks),
      knownItem: aggregate(knownCases, ks),
      meta: {
        sampleSize: knownCases.length,
        goldenCount: goldenCases.length,
        ks,
      },
    };
  } finally {
    adapter.close?.();
  }
}

function formatGroup(label, group) {
  const parts = Object.keys(group)
    .filter((key) => key.startsWith("recall@") || key === "mrr")
    .map((key) => `${key}=${group[key].toFixed(4)}`);
  return `${label}: ${parts.join("  ")}`;
}

function parseArgs(argv) {
  const args = {};
  const outIdx = argv.indexOf("--output-json");
  if (outIdx >= 0 && argv[outIdx + 1]) args.outputJson = argv[outIdx + 1];
  args.gate = argv.includes("--gate");
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const result = await runEval({ repoRoot: ROOT });

  process.stdout.write(`\nEval de retrieval (SQL real) — sampleSize=${result.meta.sampleSize}, golden=${result.meta.goldenCount}\n`);
  process.stdout.write(`${formatGroup("golden    ", result.golden)}\n`);
  process.stdout.write(`${formatGroup("knownItem ", result.knownItem)}\n`);

  if (args.outputJson) {
    fs.writeFileSync(args.outputJson, `${JSON.stringify(result, null, 2)}\n`);
    process.stdout.write(`\nJSON escrito em ${args.outputJson}\n`);
  }

  if (args.gate) {
    // eslint-disable-next-line global-require
    const { checkAgainstBaseline } = require("./eval_gate.js");
    const baselinePath = path.join(ROOT, "tools", "eval", "baseline.json");
    const baseline = JSON.parse(fs.readFileSync(baselinePath, "utf8"));
    const tolerance = typeof baseline.tolerance === "number" ? baseline.tolerance : 0.03;
    const check = checkAgainstBaseline(result, baseline, tolerance);
    if (!check.ok) {
      process.stderr.write(`\nGATE FALHOU (tolerância ${tolerance}):\n`);
      for (const f of check.failures) {
        process.stderr.write(
          `  ${f.scope}.${f.metric}: atual=${f.actual.toFixed(4)} < piso=${f.floor.toFixed(4)} (baseline=${f.expected.toFixed(4)})\n`,
        );
      }
      process.exit(1);
    }
    process.stdout.write(`\nGATE OK (>= baseline - ${tolerance})\n`);
  }
}

module.exports = { runEval, deriveKnownItemQuery, sampleSkills };

if (require.main === module) {
  main().catch((error) => {
    process.stderr.write(`${error?.stack || error}\n`);
    process.exit(1);
  });
}
