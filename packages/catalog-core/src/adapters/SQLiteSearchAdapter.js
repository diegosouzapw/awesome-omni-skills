import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { SearchAdapter } from "./SearchAdapter.js";
import {
  buildSearchResponse,
  ensureNumber,
  normalizeText,
  parseSearchOptions,
  scoreSkill,
  scoreTextMatch,
  skillMatchesFilters,
  sortSkills,
  tokenize,
} from "./search-utils.js";

const SORT_SQL_MAP = {
  name: "skills.id",
  quality: "skills.quality_score",
  "best-practices": "skills.best_practices_score",
  best_practices: "skills.best_practices_score",
  level: "skills.skill_level",
  "skill-level": "skills.skill_level",
  skill_level: "skills.skill_level",
  security: "skills.security_score",
  updated: "skills.date_updated",
};

const require = createRequire(import.meta.url);
const REQUIRED_SKILLS_COLUMNS = [
  "id",
  "slug",
  "display_name",
  "description",
  "version",
  "category",
  "raw_category",
  "canonical_category",
  "tags",
  "tools",
  "risk",
  "entrypoint",
  "manifest_path",
  "metadata_path",
  "skill_level",
  "skill_level_label",
  "has_scripts",
  "has_extra_files",
  "quality_score",
  "quality_tier",
  "best_practices_score",
  "best_practices_tier",
  "security_score",
  "security_tier",
  "security_status",
  "validation_status",
  "archives_count",
  "date_updated",
  "generated_at",
];

function loadDatabaseDriver() {
  return require("better-sqlite3");
}

function resolveReadableDatabasePath(candidatePath) {
  const normalized = String(candidatePath || "").trim();
  if (!normalized || normalized.includes("\u0000") || /(^|[\\/])\.\.([\\/]|$)/.test(normalized)) {
    return null;
  }

  const absolutePath = path.resolve(normalized);
  if (path.basename(absolutePath).toLowerCase().endsWith(".db")) {
    return absolutePath;
  }

  if (!fs.existsSync(absolutePath) || !fs.statSync(absolutePath).isDirectory()) {
    return null;
  }

  return absolutePath;
}

function parseListValue(value) {
  const normalized = String(value || "");
  if (!normalized) {
    return [];
  }
  try {
    const parsed = JSON.parse(normalized);
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch {
    // Fall through to compact text parsing.
  }
  return normalized.split("\u001f").filter(Boolean);
}

function hydrateSkillRow(row = {}) {
  return {
    id: row.id,
    slug: row.slug,
    display_name: row.display_name,
    description: row.description || "",
    version: row.version || null,
    category: row.category || null,
    raw_category: row.raw_category || row.category || null,
    canonical_category: row.canonical_category || row.category || null,
    taxonomy: {
      raw_category: row.raw_category || row.category || null,
      canonical_category: row.canonical_category || row.category || null,
      inferred_category: row.canonical_category || row.category || null,
      category_source: "sqlite-index",
    },
    tags: parseListValue(row.tags),
    tools: parseListValue(row.tools),
    risk: row.risk || null,
    entrypoint: row.entrypoint || null,
    manifest_path: row.manifest_path || null,
    metadata_path: row.metadata_path || null,
    skill_level: row.skill_level ?? null,
    skill_level_label: row.skill_level_label || null,
    has_scripts: Boolean(row.has_scripts),
    has_extra_files: Boolean(row.has_extra_files),
    best_practices_score: row.best_practices_score ?? null,
    best_practices_tier: row.best_practices_tier || null,
    quality_score: row.quality_score ?? null,
    quality_tier: row.quality_tier || null,
    security_score: row.security_score ?? null,
    security_tier: row.security_tier || null,
    security_status: row.security_status || null,
    archives_count: row.archives_count ?? null,
    validation_status: row.validation_status || null,
    date_updated: row.date_updated || null,
    updated_at: row.date_updated || null,
    generated_at: row.generated_at || row.date_updated || null,
  };
}

function buildSkillSelectColumns(alias = "skills") {
  return [
    `${alias}.id AS id`,
    `${alias}.slug AS slug`,
    `${alias}.display_name AS display_name`,
    `${alias}.description AS description`,
    `${alias}.version AS version`,
    `${alias}.category AS category`,
    `${alias}.raw_category AS raw_category`,
    `${alias}.canonical_category AS canonical_category`,
    `${alias}.tags AS tags`,
    `${alias}.tools AS tools`,
    `${alias}.risk AS risk`,
    `${alias}.entrypoint AS entrypoint`,
    `${alias}.manifest_path AS manifest_path`,
    `${alias}.metadata_path AS metadata_path`,
    `${alias}.skill_level AS skill_level`,
    `${alias}.skill_level_label AS skill_level_label`,
    `${alias}.has_scripts AS has_scripts`,
    `${alias}.has_extra_files AS has_extra_files`,
    `${alias}.quality_score AS quality_score`,
    `${alias}.quality_tier AS quality_tier`,
    `${alias}.best_practices_score AS best_practices_score`,
    `${alias}.best_practices_tier AS best_practices_tier`,
    `${alias}.security_score AS security_score`,
    `${alias}.security_tier AS security_tier`,
    `${alias}.security_status AS security_status`,
    `${alias}.validation_status AS validation_status`,
    `${alias}.archives_count AS archives_count`,
    `${alias}.date_updated AS date_updated`,
    `${alias}.generated_at AS generated_at`,
  ].join(", ");
}

function escapeFtsValue(value) {
  return String(value || "").replace(/"/g, '""');
}

function buildPorterMatch(tokens) {
  return tokens
    .flatMap((token) =>
      normalizeText(token)
        .split(/[\s-]+/)
        .filter(Boolean),
    )
    .map((token) => `${escapeFtsValue(token)}*`)
    .join(" AND ");
}

function toTrigramTokens(tokens) {
  const trigrams = new Set();
  for (const token of tokens) {
    const normalized = normalizeText(token);
    if (!normalized) continue;
    if (normalized.length < 3) {
      trigrams.add(`"${escapeFtsValue(normalized)}"`);
      continue;
    }
    for (let index = 0; index <= normalized.length - 3; index += 1) {
      trigrams.add(`"${escapeFtsValue(normalized.slice(index, index + 3))}"`);
    }
  }
  return [...trigrams];
}

function buildTrigramMatch(normalizedQuery, tokens) {
  const trigramTokens = toTrigramTokens(
    tokens.length > 0 ? tokens : normalizedQuery.split(/\s+/).filter(Boolean),
  );
  return trigramTokens.join(" OR ");
}

function buildFilterSql(filters, alias = "skills") {
  const clauses = [];
  const params = [];

  if (filters.category) {
    clauses.push(
      `(${alias}.category = ? OR ${alias}.raw_category = ? OR ${alias}.canonical_category = ?)`,
    );
    params.push(filters.category, filters.category, filters.category);
  }

  if (filters.tool) {
    clauses.push(
      `EXISTS (SELECT 1 FROM skill_tools st WHERE st.skill_rowid = ${alias}.rowid AND st.tool = ?)`,
    );
    params.push(filters.tool);
  }

  if (filters.risk) {
    clauses.push(`${alias}.risk = ?`);
    params.push(filters.risk);
  }

  if (filters.validation_status) {
    clauses.push(`${alias}.validation_status = ?`);
    params.push(filters.validation_status);
  }

  if (filters.security_status) {
    clauses.push(`${alias}.security_status = ?`);
    params.push(filters.security_status);
  }

  if (filters.min_quality_score !== null) {
    clauses.push(`${alias}.quality_score >= ?`);
    params.push(filters.min_quality_score);
  }

  if (filters.min_best_practices_score !== null) {
    clauses.push(`${alias}.best_practices_score >= ?`);
    params.push(filters.min_best_practices_score);
  }

  if (filters.min_skill_level !== null) {
    clauses.push(`${alias}.skill_level >= ?`);
    params.push(filters.min_skill_level);
  }

  if (filters.min_security_score !== null) {
    clauses.push(`${alias}.security_score >= ?`);
    params.push(filters.min_security_score);
  }

  return {
    sql: clauses.length > 0 ? clauses.join(" AND ") : "",
    params,
  };
}

function buildPaginatedResponse(results, parsedOptions, total) {
  return {
    total,
    offset: parsedOptions.offset,
    limit: parsedOptions.limit,
    sort: parsedOptions.sort || (parsedOptions.queryTokens.length > 0 ? "relevance" : "catalog"),
    order: parsedOptions.order,
    filters: parsedOptions.filters,
    results,
  };
}

function buildDelimitedExactSql(columnSql) {
  return `(${columnSql} = ? OR ${columnSql} LIKE ? OR ${columnSql} LIKE ? OR ${columnSql} LIKE ?)`;
}

function buildDelimitedPatterns(token) {
  return [token, `${token}\u001f%`, `%\u001f${token}`, `%\u001f${token}\u001f%`];
}

function buildTokenScoreSql(alias, token) {
  const exactTagSql = buildDelimitedExactSql(`lower(${alias}.tags)`);
  const exactToolSql = buildDelimitedExactSql(`lower(${alias}.tools)`);
  const exactColumnSql = [
    `lower(${alias}.display_name) = ?`,
    `lower(${alias}.description) = ?`,
    `lower(${alias}.category) = ?`,
    `lower(${alias}.raw_category) = ?`,
    `lower(${alias}.canonical_category) = ?`,
    exactTagSql,
    exactToolSql,
  ].join(" OR ");
  const containsColumnSql = [
    `instr(lower(${alias}.id), ?) > 0`,
    `instr(lower(${alias}.slug), ?) > 0`,
    `instr(lower(${alias}.display_name), ?) > 0`,
    `instr(lower(${alias}.description), ?) > 0`,
    `instr(lower(${alias}.category), ?) > 0`,
    `instr(lower(${alias}.raw_category), ?) > 0`,
    `instr(lower(${alias}.canonical_category), ?) > 0`,
    `instr(lower(${alias}.tags), ?) > 0`,
    `instr(lower(${alias}.tools), ?) > 0`,
  ].join(" OR ");

  return {
    sql: `
      CASE
        WHEN lower(${alias}.id) = ? OR lower(${alias}.slug) = ? THEN 10
        WHEN ${exactColumnSql} THEN 8
        WHEN ${containsColumnSql} THEN 3
        ELSE 0
      END
    `,
    params: [
      token,
      token,
      token,
      token,
      token,
      token,
      token,
      ...buildDelimitedPatterns(token),
      ...buildDelimitedPatterns(token),
      token,
      token,
      token,
      token,
      token,
      token,
      token,
      token,
      token,
    ],
  };
}

function buildRelevanceSql(alias, queryTokens, filters) {
  const clauses = [];
  const params = [];

  for (const token of queryTokens) {
    const tokenScore = buildTokenScoreSql(alias, token);
    clauses.push(tokenScore.sql);
    params.push(...tokenScore.params);
  }

  if (filters.tool) {
    clauses.push(
      `CASE WHEN EXISTS (SELECT 1 FROM skill_tools st WHERE st.skill_rowid = ${alias}.rowid AND st.tool = ?) THEN 4 ELSE 0 END`,
    );
    params.push(filters.tool);
  }

  if (filters.category) {
    clauses.push(
      `CASE WHEN (${alias}.category = ? OR ${alias}.raw_category = ? OR ${alias}.canonical_category = ?) THEN 3 ELSE 0 END`,
    );
    params.push(filters.category, filters.category, filters.category);
  }

  return {
    sql: clauses.length > 0 ? clauses.join(" + ") : "0",
    params,
  };
}

export class SQLiteSearchAdapter extends SearchAdapter {
  constructor(context = {}) {
    super();
    this.mode = "sqlite";
    this.context = context;
    this.dbPath = context.databasePath || null;
    this.catalog = context.catalog || null;
    this.manifestLoader = context.manifestLoader || null;
    this.db = null;
  }

  init(options = {}) {
    this.context = { ...this.context, ...options };
    this.dbPath = this.context.databasePath || this.dbPath;
    this.catalog = this.context.catalog || this.catalog;
    this.manifestLoader = this.context.manifestLoader || this.manifestLoader;

    const safeDbPath = resolveReadableDatabasePath(this.dbPath);
    if (!safeDbPath || !fs.existsSync(safeDbPath)) {
      throw new Error(`SQLite catalog database not found at ${this.dbPath || "<missing>"}.`);
    }
    this.dbPath = safeDbPath;

    const Database = loadDatabaseDriver();
    this.db = new Database(this.dbPath, {
      readonly: true,
      fileMustExist: true,
    });

    const columnRows = this.db.prepare("PRAGMA table_info(skills)").all();
    const columns = new Set(columnRows.map((row) => row.name));
    const missingColumns = REQUIRED_SKILLS_COLUMNS.filter((column) => !columns.has(column));
    if (missingColumns.length > 0) {
      this.close();
      throw new Error(
        `SQLite catalog schema is incompatible; missing columns: ${missingColumns.join(", ")}`,
      );
    }
  }

  ensureDb() {
    if (!this.db) {
      throw new Error("SQLiteSearchAdapter has not been initialized.");
    }
    return this.db;
  }

  getById(skillId) {
    if (typeof this.manifestLoader === "function") {
      return this.manifestLoader(skillId);
    }

    const row = this.ensureDb()
      .prepare(`SELECT ${buildSkillSelectColumns("skills")} FROM skills WHERE id = ? LIMIT 1`)
      .get(skillId);
    return row ? hydrateSkillRow(row) : null;
  }

  list(options = {}) {
    const parsed = parseSearchOptions(options);

    if (parsed.queryTokens.length === 0) {
      return this.listWithoutQuery(parsed);
    }

    if (this.catalog?.skills) {
      return this.listQueryFromCatalog(parsed);
    }

    const normalizedQuery = normalizeText(options.q || options.query || "");
    const strategies = [
      {
        name: "fts5",
        params: [buildPorterMatch(parsed.queryTokens)],
        cteSql:
          "SELECT rowid AS skill_rowid, bm25(skills_fts, 12.0, 9.0, 7.0) AS rank FROM skills_fts WHERE skills_fts MATCH ?",
      },
      {
        name: "trigram",
        params: [buildTrigramMatch(normalizedQuery, parsed.queryTokens)],
        cteSql:
          "SELECT rowid AS skill_rowid, bm25(skills_trigram, 10.0, 8.0, 6.0) AS rank FROM skills_trigram WHERE skills_trigram MATCH ?",
      },
      {
        name: "like",
        params: Array.from({ length: 6 }, () => `%${normalizedQuery}%`),
        cteSql:
          "SELECT rowid AS skill_rowid, 0.0 AS rank FROM skills WHERE (lower(id) LIKE ? OR lower(slug) LIKE ? OR lower(display_name) LIKE ? OR lower(description) LIKE ? OR lower(tags) LIKE ? OR lower(category) LIKE ?)",
      },
    ];

    for (const strategy of strategies) {
      const result = this.listWithQueryStrategy(strategy, parsed, normalizedQuery);
      if (result.total > 0) {
        return result;
      }
    }

    return buildSearchResponse([], parsed);
  }

  search(options = {}) {
    return this.list(options);
  }

  recommend(options = {}) {
    const db = this.ensureDb();
    const parsed = parseSearchOptions(options);
    const goalTokens = tokenize(options.goal || "");
    const queryTokens = tokenize(options.q || options.query || "");
    const limit = ensureNumber(options.limit, 5);
    const where = buildFilterSql(parsed.filters, "skills");
    const rows = db
      .prepare(
        `
          SELECT ${buildSkillSelectColumns("skills")}
          FROM skills
          ${where.sql ? `WHERE ${where.sql}` : ""}
          ORDER BY skills.rowid ASC
        `,
      )
      .all(...where.params);

    const results = rows
      .map(hydrateSkillRow)
      .map((skill) => ({
        id: skill.id,
        display_name: skill.display_name,
        description: skill.description,
        category: skill.category,
        raw_category: skill.raw_category,
        canonical_category: skill.canonical_category,
        tags: skill.tags || [],
        tools: skill.tools || [],
        manifest_path: skill.manifest_path,
        skill_level: skill.skill_level,
        skill_level_label: skill.skill_level_label,
        best_practices_score: skill.best_practices_score,
        quality_score: skill.quality_score,
        security_score: skill.security_score,
        security_status: skill.security_status,
        score: scoreSkill(
          skill,
          queryTokens.length > 0 ? queryTokens : goalTokens,
          goalTokens,
          options.tool || "",
          options.category || "",
        ),
      }))
      .sort((left, right) => right.score - left.score || left.id.localeCompare(right.id))
      .slice(0, limit);

    return {
      goal: options.goal || "",
      tool: options.tool || null,
      category: options.category || null,
      results,
    };
  }

  listWithoutQuery(parsed) {
    const db = this.ensureDb();
    const where = buildFilterSql(parsed.filters, "skills");
    const total = db
      .prepare(`SELECT COUNT(*) AS total FROM skills ${where.sql ? `WHERE ${where.sql}` : ""}`)
      .get(...where.params).total;

    const orderSql =
      parsed.sort && SORT_SQL_MAP[parsed.sort]
        ? `${SORT_SQL_MAP[parsed.sort]} ${parsed.order.toUpperCase()}, skills.id ASC`
        : "skills.rowid ASC";

    const rows = db
      .prepare(
        `
          SELECT ${buildSkillSelectColumns("skills")}
          FROM skills
          ${where.sql ? `WHERE ${where.sql}` : ""}
          ORDER BY ${orderSql}
          LIMIT ? OFFSET ?
        `,
      )
      .all(...where.params, parsed.limit, parsed.offset);

    return buildPaginatedResponse(rows.map(hydrateSkillRow), parsed, total);
  }

  listQueryFromCatalog(parsed) {
    let skills = [...this.catalog.skills].filter((skill) => skillMatchesFilters(skill, parsed.filters));

    skills = skills
      .map((skill) => {
        const textScore = scoreTextMatch(skill, parsed.queryTokens, []);
        return {
          ...skill,
          _textScore: textScore,
          _score: scoreSkill(
            skill,
            parsed.queryTokens,
            [],
            parsed.filters.tool || "",
            parsed.filters.category || "",
          ),
        };
      })
      .filter((skill) => skill._textScore > 0)
      .sort((left, right) => right._score - left._score || left.id.localeCompare(right.id));

    if (parsed.sort && parsed.sort !== "relevance") {
      skills = sortSkills(skills, parsed.sort, parsed.order);
    }

    return buildSearchResponse(
      skills.map(({ _score, _textScore, ...skill }) => skill),
      parsed,
    );
  }

  listWithQueryStrategy(strategy, parsed, normalizedQuery) {
    const db = this.ensureDb();
    const filter = buildFilterSql(parsed.filters, "skills");
    const relevanceFromFiltered = buildRelevanceSql("filtered", parsed.queryTokens, parsed.filters);
    const relevanceFromCandidate = buildRelevanceSql("candidate", parsed.queryTokens, parsed.filters);
    const querySortSqlMap = {
      name: "filtered.id",
      quality: "filtered.quality_score",
      "best-practices": "filtered.best_practices_score",
      best_practices: "filtered.best_practices_score",
      level: "filtered.skill_level",
      "skill-level": "filtered.skill_level",
      skill_level: "filtered.skill_level",
      security: "filtered.security_score",
      updated: "filtered.date_updated",
    };
    const baseParams = [
      ...strategy.params,
      normalizedQuery,
      normalizedQuery,
      `${normalizedQuery}%`,
      `${normalizedQuery}%`,
      ...filter.params,
    ];
    const baseCte = `
      WITH matched AS (
        ${strategy.cteSql}
      ),
      filtered AS (
        SELECT
          ${buildSkillSelectColumns("skills")},
          skills.rowid AS rowid,
          matched.rank AS rank,
          CASE WHEN lower(skills.id) = ? OR lower(skills.slug) = ? THEN 1 ELSE 0 END AS exact_id,
          CASE WHEN lower(skills.id) LIKE ? OR lower(skills.slug) LIKE ? THEN 1 ELSE 0 END AS prefix_id
        FROM matched
        JOIN skills ON skills.rowid = matched.skill_rowid
        ${filter.sql ? `WHERE ${filter.sql}` : ""}
      )
    `;
    let total;
    if (!filter.sql) {
      total = db
        .prepare(
          `
            WITH matched AS (
              ${strategy.cteSql}
            )
            SELECT COUNT(*) AS total
            FROM matched
          `,
        )
        .get(...strategy.params).total;
    } else {
      const countCte = `
        WITH matched AS (
          ${strategy.cteSql}
        ),
        filtered AS (
          SELECT skills.rowid AS rowid
          FROM matched
          JOIN skills ON skills.rowid = matched.skill_rowid
          WHERE ${filter.sql}
        )
      `;
      total = db
        .prepare(`${countCte} SELECT COUNT(*) AS total FROM filtered`)
        .get(...strategy.params, ...filter.params).total;
    }

    if (total === 0) {
      return {
        ...buildSearchResponse([], parsed),
        total: 0,
      };
    }

    const orderSql =
      parsed.sort && parsed.sort !== "relevance" && querySortSqlMap[parsed.sort]
        ? `${querySortSqlMap[parsed.sort]} ${parsed.order.toUpperCase()}, filtered.id ASC`
        : "exact_id DESC, prefix_id DESC, relevance_score DESC, id ASC, rank ASC";

    let rows;

    if (!parsed.sort || parsed.sort === "relevance") {
      const candidateLimit = Math.max(250, parsed.offset + parsed.limit * 10);

      if (total > candidateLimit) {
        rows = db
          .prepare(
            `
              ${baseCte},
              candidate AS (
                SELECT *
                FROM filtered
                ORDER BY exact_id DESC, prefix_id DESC, rank ASC, id ASC
                LIMIT ?
              ),
              scored AS (
                SELECT
                  ${buildSkillSelectColumns("candidate")},
                  candidate.rowid AS rowid,
                  candidate.rank AS rank,
                  candidate.exact_id AS exact_id,
                  candidate.prefix_id AS prefix_id,
                  (${relevanceFromCandidate.sql}) AS relevance_score
                FROM candidate
              )
              SELECT ${buildSkillSelectColumns("scored")}
              FROM scored
              ORDER BY exact_id DESC, prefix_id DESC, relevance_score DESC, id ASC, rank ASC
              LIMIT ? OFFSET ?
            `,
          )
          .all(
            ...baseParams,
            candidateLimit,
            ...relevanceFromCandidate.params,
            parsed.limit,
            parsed.offset,
          );
      } else {
        rows = db
          .prepare(
            `
              ${baseCte},
              scored AS (
                SELECT
                  ${buildSkillSelectColumns("filtered")},
                  filtered.rowid AS rowid,
                  filtered.rank AS rank,
                  filtered.exact_id AS exact_id,
                  filtered.prefix_id AS prefix_id,
                  (${relevanceFromFiltered.sql}) AS relevance_score
                FROM filtered
              )
              SELECT ${buildSkillSelectColumns("scored")}
              FROM scored
              ORDER BY exact_id DESC, prefix_id DESC, relevance_score DESC, id ASC, rank ASC
              LIMIT ? OFFSET ?
            `,
          )
          .all(...baseParams, ...relevanceFromFiltered.params, parsed.limit, parsed.offset);
      }
    } else {
      rows = db
        .prepare(
          `
            ${baseCte}
            SELECT ${buildSkillSelectColumns("filtered")}
            FROM filtered
            ORDER BY ${orderSql}
            LIMIT ? OFFSET ?
          `,
        )
        .all(...baseParams, parsed.limit, parsed.offset);
    }

    return buildPaginatedResponse(rows.map(hydrateSkillRow), parsed, total);
  }

  close() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }
}
