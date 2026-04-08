#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const DEFAULT_OUTPUT = path.join(ROOT, "dist", "synthetic-catalog.json");
const DEFAULT_COUNT = 200_000;
const DEFAULT_SEED = 20260408;

const CATEGORIES = [
  "ai-agents",
  "architecture",
  "backend",
  "data-ai",
  "deployment",
  "devops",
  "frontend",
  "observability",
  "operations",
  "planning",
  "security",
  "testing",
];

const TOOLS = [
  "antigravity",
  "claude-code",
  "codex-cli",
  "cursor",
  "gemini-cli",
  "goose",
  "kiro",
  "opencode",
  "qwen-code",
];

const ADJECTIVES = [
  "adaptive",
  "advanced",
  "asynchronous",
  "autonomous",
  "composable",
  "distributed",
  "enterprise",
  "event-driven",
  "fault-tolerant",
  "federated",
  "hardened",
  "hybrid",
  "lightweight",
  "resilient",
  "scalable",
  "streaming",
];

const NOUNS = [
  "analyzer",
  "audit",
  "coordinator",
  "deployer",
  "diagnostic",
  "engine",
  "gateway",
  "orchestrator",
  "pipeline",
  "planner",
  "router",
  "sandbox",
  "scanner",
  "service",
  "validator",
  "workflow",
];

const DOMAINS = [
  "docker",
  "kubernetes",
  "python",
  "react",
  "security",
  "audit",
  "pipeline",
  "terraform",
  "observability",
  "graphql",
  "postgres",
  "redis",
  "agents",
  "reasoning",
  "deployment",
  "browser",
  "migrations",
  "testing",
  "oauth",
  "incident-response",
];

const CONTEXTS = [
  "for multi-team delivery",
  "for regulated environments",
  "for internal platform operators",
  "for sandboxed execution",
  "for large monorepos",
  "for service hardening",
  "for rapid prototyping",
  "for agentic review loops",
  "for runtime governance",
  "for CI and release pipelines",
];

function parseArgs(argv = process.argv.slice(2)) {
  const result = {
    count: DEFAULT_COUNT,
    outputPath: DEFAULT_OUTPUT,
    seed: DEFAULT_SEED,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === "--count" && argv[index + 1]) {
      result.count = Number.parseInt(argv[index + 1], 10);
      index += 1;
      continue;
    }
    if (value === "--output" && argv[index + 1]) {
      result.outputPath = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (value === "--seed" && argv[index + 1]) {
      result.seed = Number.parseInt(argv[index + 1], 10);
      index += 1;
    }
  }

  return result;
}

function mulberry32(seed) {
  let state = seed >>> 0;
  return function next() {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(rng, values) {
  return values[Math.floor(rng() * values.length)];
}

function pickMany(rng, values, count) {
  const chosen = new Set();
  while (chosen.size < count) {
    chosen.add(pick(rng, values));
  }
  return [...chosen];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function buildDate(index) {
  const month = (index % 12) + 1;
  const day = (index % 28) + 1;
  const hour = index % 24;
  return `2026-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}:00:00.000Z`;
}

function buildTopicSet(index, rng) {
  const topics = pickMany(rng, DOMAINS, 3);
  if (index % 7 === 0) topics.push("docker", "kubernetes");
  if (index % 11 === 0) topics.push("python");
  if (index % 13 === 0) topics.push("react");
  if (index % 17 === 0) topics.push("pipeline");
  if (index % 19 === 0) topics.push("security", "audit");
  return [...new Set(topics)].slice(0, 4);
}

function generateSkill(index, rng) {
  const id = `synthetic-skill-${String(index + 1).padStart(6, "0")}`;
  const category = pick(rng, CATEGORIES);
  const tools = pickMany(rng, TOOLS, 1);
  const topics = buildTopicSet(index, rng);
  const adjective = pick(rng, ADJECTIVES);
  const noun = pick(rng, NOUNS);
  const quality = clamp(65 + Math.round(rng() * 35), 0, 100);
  const bestPractices = clamp(60 + Math.round(rng() * 40), 0, 100);
  const security = clamp(58 + Math.round(rng() * 42), 0, 100);
  const skillLevel = 1 + (index % 5);
  const dateUpdated = buildDate(index);
  const securityStatus = security >= 90 ? "passed" : security >= 75 ? "warn" : "review-required";
  const validationStatus = quality >= 75 ? "passed" : "warn";
  const risk = security >= 90 ? "safe" : security >= 75 ? "caution" : "review-required";

  return {
    id,
    slug: id,
    display_name: `${adjective} ${noun}`,
    description: `${topics.slice(0, 2).join(" ")} ${noun} ${pick(rng, CONTEXTS)}.`,
    category,
    raw_category: category,
    canonical_category: category,
    tags: [...topics, adjective, noun].slice(0, 3),
    risk,
    tools,
    manifest_path: `dist/manifests/${id}.json`,
    skill_level: skillLevel,
    best_practices_score: bestPractices,
    quality_score: quality,
    security_score: security,
    security_status: securityStatus,
    validation_status: validationStatus,
    date_updated: dateUpdated,
  };
}

function generateSyntheticCatalog({ count = DEFAULT_COUNT, seed = DEFAULT_SEED } = {}) {
  const rng = mulberry32(seed);
  const skills = [];
  const categories = Object.fromEntries(CATEGORIES.map((category) => [category, 0]));

  for (let index = 0; index < count; index += 1) {
    const skill = generateSkill(index, rng);
    categories[skill.canonical_category] = (categories[skill.canonical_category] || 0) + 1;
    skills.push(skill);
  }

  return {
    schema_version: 1,
    generated_at: new Date().toISOString(),
    total_skills: skills.length,
    categories,
    skills,
  };
}

function writeSyntheticCatalog({
  count = DEFAULT_COUNT,
  seed = DEFAULT_SEED,
  outputPath = DEFAULT_OUTPUT,
  logger = console,
} = {}) {
  const catalog = generateSyntheticCatalog({ count, seed });
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(catalog), "utf8");
  logger.log(`✅ Generated synthetic catalog with ${catalog.total_skills} skills at ${outputPath}`);
  return { catalog, outputPath };
}

function main() {
  const options = parseArgs();
  writeSyntheticCatalog(options);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`✗ Failed to generate synthetic catalog: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  DEFAULT_COUNT,
  DEFAULT_OUTPUT,
  DEFAULT_SEED,
  generateSyntheticCatalog,
  writeSyntheticCatalog,
};
