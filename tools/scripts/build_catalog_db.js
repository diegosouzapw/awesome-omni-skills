#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");
const Database = require("better-sqlite3");

const ROOT = path.resolve(__dirname, "..", "..");
const CATALOG_PATH = path.resolve(ROOT, "dist", "catalog.json");
const DB_PATH = path.resolve(ROOT, "dist", "catalog.db");

function toJsonArray(value) {
  return JSON.stringify(Array.isArray(value) ? value : []);
}

function toListText(value) {
  return Array.isArray(value) ? value.join("\u001f") : "";
}

function toCanonicalCategory(skill) {
  return skill.canonical_category || skill.taxonomy?.canonical_category || skill.category || null;
}

function toDateUpdated(skill) {
  return skill.date_updated || skill.updated_at || skill.generated_at || null;
}

function toBooleanInt(value) {
  return value ? 1 : 0;
}

function bytesToReadable(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function loadCatalog(catalogPath = CATALOG_PATH) {
  if (!fs.existsSync(catalogPath)) {
    throw new Error(`catalog.json not found at ${catalogPath}. Run npm run index first.`);
  }

  const raw = fs.readFileSync(catalogPath, "utf8");
  const catalog = JSON.parse(raw);
  if (!Array.isArray(catalog.skills)) {
    throw new Error(`Invalid catalog payload at ${catalogPath}: missing skills array.`);
  }
  return catalog;
}

function createSchema(db) {
  db.exec(`
    PRAGMA foreign_keys = OFF;
    PRAGMA journal_mode = MEMORY;
    PRAGMA synchronous = OFF;
    PRAGMA temp_store = MEMORY;

    DROP TABLE IF EXISTS skill_tools;
    DROP TABLE IF EXISTS skills_fts;
    DROP TABLE IF EXISTS skills_trigram;
    DROP TABLE IF EXISTS skills;

    CREATE TABLE skills (
      id TEXT PRIMARY KEY,
      slug TEXT,
      display_name TEXT NOT NULL,
      description TEXT,
      version TEXT,
      category TEXT,
      raw_category TEXT,
      canonical_category TEXT,
      tags TEXT,
      tools TEXT,
      risk TEXT,
      entrypoint TEXT,
      manifest_path TEXT,
      metadata_path TEXT,
      skill_level INTEGER,
      skill_level_label TEXT,
      has_scripts INTEGER,
      has_extra_files INTEGER,
      quality_score REAL,
      quality_tier TEXT,
      best_practices_score REAL,
      best_practices_tier TEXT,
      security_score REAL,
      security_tier TEXT,
      security_status TEXT,
      validation_status TEXT,
      archives_count INTEGER,
      date_updated TEXT,
      generated_at TEXT
    );

    CREATE TABLE skill_tools (
      skill_id TEXT NOT NULL,
      skill_rowid INTEGER NOT NULL,
      tool TEXT NOT NULL
    );

    CREATE VIRTUAL TABLE skills_fts USING fts5(
      id,
      display_name,
      description,
      content='skills',
      content_rowid='rowid',
      tokenize='porter unicode61 remove_diacritics 2',
      prefix='2 3',
      columnsize=0,
      detail=none
    );

    CREATE VIRTUAL TABLE skills_trigram USING fts5(
      id,
      display_name,
      description,
      content='skills',
      content_rowid='rowid',
      tokenize='trigram',
      columnsize=0,
      detail=none
    );
  `);
}

function createIndexes(db) {
  db.exec(`
    CREATE INDEX idx_skills_category ON skills(category);
    CREATE INDEX idx_skills_canonical_category ON skills(canonical_category);
    CREATE INDEX idx_skills_risk ON skills(risk);
    CREATE INDEX idx_skills_validation ON skills(validation_status);
    CREATE INDEX idx_skills_security_status ON skills(security_status);
    CREATE INDEX idx_skills_quality ON skills(quality_score);
    CREATE INDEX idx_skills_best_practices ON skills(best_practices_score);
    CREATE INDEX idx_skills_security_score ON skills(security_score);
    CREATE INDEX idx_skills_skill_level ON skills(skill_level);
    CREATE INDEX idx_skills_date_updated ON skills(date_updated);
    CREATE INDEX idx_skill_tools_tool ON skill_tools(tool);
    CREATE INDEX idx_skill_tools_skill_rowid ON skill_tools(skill_rowid);
  `);
}

function buildCatalogDb({
  catalogPath = CATALOG_PATH,
  dbPath = DB_PATH,
  logger = console,
} = {}) {
  const catalog = loadCatalog(catalogPath);
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  fs.rmSync(dbPath, { force: true });

  const db = new Database(dbPath);

  try {
    createSchema(db);

    const insertSkill = db.prepare(`
      INSERT INTO skills (
        id,
        slug,
        display_name,
        description,
        version,
        category,
        raw_category,
        canonical_category,
        tags,
        tools,
        risk,
        entrypoint,
        manifest_path,
        metadata_path,
        skill_level,
        skill_level_label,
        has_scripts,
        has_extra_files,
        quality_score,
        quality_tier,
        best_practices_score,
        best_practices_tier,
        security_score,
        security_tier,
        security_status,
        validation_status,
        date_updated,
        archives_count,
        generated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const insertTool = db.prepare(`
      INSERT INTO skill_tools (skill_id, skill_rowid, tool)
      VALUES (?, ?, ?)
    `);

    const insertMany = db.transaction((skills) => {
      for (const skill of skills) {
        const info = insertSkill.run(
          skill.id,
          skill.slug || skill.id,
          skill.display_name || skill.id,
          skill.description || "",
          skill.version || null,
          skill.category || null,
          skill.raw_category || skill.category || null,
          toCanonicalCategory(skill),
          toListText(skill.tags),
          toListText(skill.tools),
          skill.risk || null,
          skill.entrypoint || null,
          skill.manifest_path || skill.paths?.manifest || null,
          skill.metadata_path || null,
          skill.skill_level ?? null,
          skill.skill_level_label || null,
          toBooleanInt(skill.has_scripts),
          toBooleanInt(skill.has_extra_files),
          skill.quality_score ?? null,
          skill.quality_tier || null,
          skill.best_practices_score ?? null,
          skill.best_practices_tier || null,
          skill.security_score ?? null,
          skill.security_tier || null,
          skill.security_status || null,
          skill.validation_status || null,
          toDateUpdated(skill),
          skill.archives_count ?? (Array.isArray(skill.archives) ? skill.archives.length : 0),
          skill.generated_at || toDateUpdated(skill),
        );

        for (const tool of Array.isArray(skill.tools) ? skill.tools : []) {
          insertTool.run(skill.id, info.lastInsertRowid, tool);
        }
      }
    });

    insertMany(catalog.skills);
    createIndexes(db);

    db.exec(`
      INSERT INTO skills_fts(skills_fts) VALUES('rebuild');
      INSERT INTO skills_trigram(skills_trigram) VALUES('rebuild');
      INSERT INTO skills_fts(skills_fts) VALUES('optimize');
      INSERT INTO skills_trigram(skills_trigram) VALUES('optimize');
      PRAGMA journal_mode = DELETE;
    `);

    const skillCount = db.prepare("SELECT COUNT(*) AS count FROM skills").get().count;
    const toolCount = db.prepare("SELECT COUNT(*) AS count FROM skill_tools").get().count;
    const sizeBytes = fs.statSync(dbPath).size;

    logger.log(
      `✅ Built ${path.relative(ROOT, dbPath)} with ${skillCount} skills, ${toolCount} tool edges, ${bytesToReadable(sizeBytes)}`,
    );

    return {
      catalogPath,
      dbPath,
      skillCount,
      toolCount,
      sizeBytes,
    };
  } finally {
    db.close();
  }
}

function main() {
  buildCatalogDb();
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`✗ Failed to build catalog.db: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  buildCatalogDb,
  loadCatalog,
};
