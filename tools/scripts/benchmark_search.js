#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { performance } = require("node:perf_hooks");
const { spawnSync } = require("node:child_process");
const { pathToFileURL } = require("node:url");
const { writeSyntheticCatalog, DEFAULT_COUNT, DEFAULT_SEED } = require("./generate_synthetic_skills.js");
const { buildCatalogDb } = require("./build_catalog_db.js");

const ROOT = path.resolve(__dirname, "..", "..");
const CLI_ENTRY = path.join(ROOT, "tools", "scripts", "benchmark_search.js");

const DEFAULT_QUERIES = ["python", "docker kubernetes", "security audit", "react component", "pipeli*", "kuberntes"];
const DEFAULT_SAMPLES = 3;

function parseArgs(argv = process.argv.slice(2)) {
  const result = {
    count: DEFAULT_COUNT,
    seed: DEFAULT_SEED,
    keepArtifacts: false,
    outputJson: "",
    catalogPath: "",
    dbPath: "",
    worker: "",
    samples: DEFAULT_SAMPLES,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === "--count" && argv[index + 1]) {
      const parsed = Number.parseInt(argv[index + 1], 10);
      result.count = Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_COUNT;
      index += 1;
      continue;
    }
    if (value === "--seed" && argv[index + 1]) {
      const parsed = Number.parseInt(argv[index + 1], 10);
      result.seed = Number.isFinite(parsed) ? parsed : DEFAULT_SEED;
      index += 1;
      continue;
    }
    if (value === "--catalog" && argv[index + 1]) {
      result.catalogPath = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (value === "--db" && argv[index + 1]) {
      result.dbPath = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (value === "--output-json" && argv[index + 1]) {
      result.outputJson = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (value === "--worker" && argv[index + 1]) {
      result.worker = String(argv[index + 1]);
      index += 1;
      continue;
    }
    if (value === "--samples" && argv[index + 1]) {
      const parsed = Number.parseInt(argv[index + 1], 10);
      result.samples = Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_SAMPLES;
      index += 1;
      continue;
    }
    if (value === "--keep-artifacts") {
      result.keepArtifacts = true;
    }
  }

  return result;
}

function formatMs(value) {
  return `${value.toFixed(2)}ms`;
}

function formatBytes(value) {
  if (value < 1024) return `${value} B`;
  if (value < 1024 * 1024) return `${(value / 1024).toFixed(1)} KB`;
  return `${(value / (1024 * 1024)).toFixed(2)} MB`;
}

function computeStats(samples) {
  if (!Array.isArray(samples) || samples.length === 0) {
    throw new Error("benchmark worker did not collect any timing samples");
  }
  const sorted = [...samples].sort((left, right) => left - right);
  const average = sorted.reduce((sum, value) => sum + value, 0) / sorted.length;
  return {
    samples,
    average_ms: average,
    min_ms: sorted[0],
    max_ms: sorted[sorted.length - 1],
  };
}

function toWorkerPayload(catalogPath, dbPath, mode, samples) {
  const child = spawnSync(
    process.execPath,
    ["--expose-gc", CLI_ENTRY, "--worker", mode, "--catalog", catalogPath, "--db", dbPath, "--samples", String(samples)],
    {
      cwd: ROOT,
      encoding: "utf8",
      env: { ...process.env, FORCE_COLOR: "0" },
    },
  );

  if (child.status !== 0) {
    throw new Error(child.stderr || `benchmark worker '${mode}' failed`);
  }

  return JSON.parse(child.stdout);
}

async function runMemoryWorker({ catalogPath, samples = DEFAULT_SAMPLES }) {
  const sampleCount = Number.isFinite(samples) && samples > 0 ? samples : DEFAULT_SAMPLES;
  global.gc?.();
  const baseline = process.memoryUsage().heapUsed;
  const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
  const { MemorySearchAdapter } = await import(
    pathToFileURL(path.join(ROOT, "packages", "catalog-core", "src", "adapters", "MemorySearchAdapter.js")).href
  );
  const adapter = new MemorySearchAdapter({ catalog, manifestLoader: () => null });
  adapter.init();

  const timings = {};
  for (const query of DEFAULT_QUERIES) {
    adapter.search({ query, limit: 20 });
    const samples = [];
    for (let iteration = 0; iteration < sampleCount; iteration += 1) {
      const startedAt = performance.now();
      adapter.search({ query, limit: 20 });
      samples.push(performance.now() - startedAt);
    }
    timings[query] = computeStats(samples);
  }

  global.gc?.();
  const heapAfter = process.memoryUsage().heapUsed;

  return {
    mode: "memory",
    heap_delta_bytes: Math.max(0, heapAfter - baseline),
    sample_count: sampleCount,
    timings,
  };
}

async function runSqliteWorker({ dbPath, samples = DEFAULT_SAMPLES }) {
  const sampleCount = Number.isFinite(samples) && samples > 0 ? samples : DEFAULT_SAMPLES;
  global.gc?.();
  const baseline = process.memoryUsage().heapUsed;
  const { SQLiteSearchAdapter } = await import(
    pathToFileURL(path.join(ROOT, "packages", "catalog-core", "src", "adapters", "SQLiteSearchAdapter.js")).href
  );
  const adapter = new SQLiteSearchAdapter({ databasePath: dbPath });
  adapter.init();

  const timings = {};
  for (const query of DEFAULT_QUERIES) {
    adapter.search({ query, limit: 20 });
    const samples = [];
    for (let iteration = 0; iteration < sampleCount; iteration += 1) {
      const startedAt = performance.now();
      adapter.search({ query, limit: 20 });
      samples.push(performance.now() - startedAt);
    }
    timings[query] = computeStats(samples);
  }

  global.gc?.();
  const heapAfter = process.memoryUsage().heapUsed;
  adapter.close();

  return {
    mode: "sqlite",
    heap_delta_bytes: Math.max(0, heapAfter - baseline),
    sample_count: sampleCount,
    timings,
  };
}

function printSummary(results) {
  console.log(`Synthetic catalog: ${results.count.toLocaleString("en-US")} skills`);
  console.log(`Catalog path: ${results.catalogPath}`);
  console.log(`Database path: ${results.dbPath}`);
  console.log(`Build time: ${formatMs(results.build.elapsed_ms)} • DB size: ${formatBytes(results.build.size_bytes)}`);
  console.log(`Samples per query: ${results.sample_count}`);
  console.log("");
  console.log("SQLite timings:");
  for (const query of DEFAULT_QUERIES) {
    const stats = results.sqlite.timings[query];
    console.log(`  "${query}" -> avg ${formatMs(stats.average_ms)} (min ${formatMs(stats.min_ms)}, max ${formatMs(stats.max_ms)})`);
  }
  console.log(`SQLite heap delta: ${formatBytes(results.sqlite.heap_delta_bytes)}`);
  console.log("");
  console.log("Memory timings:");
  for (const query of DEFAULT_QUERIES) {
    const stats = results.memory.timings[query];
    console.log(`  "${query}" -> avg ${formatMs(stats.average_ms)} (min ${formatMs(stats.min_ms)}, max ${formatMs(stats.max_ms)})`);
  }
  console.log(`Memory heap delta: ${formatBytes(results.memory.heap_delta_bytes)}`);
}

function runParent(options) {
  const benchmarkDir = fs.mkdtempSync(path.join(os.tmpdir(), "awesome-omni-search-benchmark-"));
  const catalogPath = options.catalogPath || path.join(benchmarkDir, "catalog.json");
  const dbPath = options.dbPath || path.join(benchmarkDir, "catalog.db");

  if (!options.catalogPath) {
    writeSyntheticCatalog({
      count: options.count,
      seed: options.seed,
      outputPath: catalogPath,
      logger: { log() {} },
    });
  }

  const buildStartedAt = performance.now();
  const buildResult = buildCatalogDb({
    catalogPath,
    dbPath,
    logger: { log() {} },
  });
  const buildElapsed = performance.now() - buildStartedAt;

  const sqlite = toWorkerPayload(catalogPath, dbPath, "sqlite", options.samples);
  const memory = toWorkerPayload(catalogPath, dbPath, "memory", options.samples);

  const results = {
    generated_at: new Date().toISOString(),
    count: options.count,
    seed: options.seed,
    sample_count: options.samples,
    catalogPath,
    dbPath,
    queries: DEFAULT_QUERIES,
    build: {
      elapsed_ms: buildElapsed,
      size_bytes: buildResult.sizeBytes,
      skill_count: buildResult.skillCount,
      tool_count: buildResult.toolCount,
    },
    sqlite,
    memory,
  };

  if (options.outputJson) {
    fs.mkdirSync(path.dirname(options.outputJson), { recursive: true });
    fs.writeFileSync(options.outputJson, JSON.stringify(results, null, 2), "utf8");
  }

  printSummary(results);

  if (!options.keepArtifacts && !options.catalogPath && !options.dbPath) {
    fs.rmSync(benchmarkDir, { recursive: true, force: true });
  }

  return results;
}

async function main() {
  const options = parseArgs();
  if (options.worker === "memory") {
    process.stdout.write(JSON.stringify(await runMemoryWorker(options)));
    return;
  }
  if (options.worker === "sqlite") {
    process.stdout.write(JSON.stringify(await runSqliteWorker(options)));
    return;
  }

  runParent(options);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`✗ Search benchmark failed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = {
  DEFAULT_QUERIES,
  DEFAULT_SAMPLES,
  runParent,
  runMemoryWorker,
  runSqliteWorker,
};
