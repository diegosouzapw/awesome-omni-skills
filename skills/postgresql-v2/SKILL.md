---
name: postgresql-v2
description: "PostgreSQL Table Design workflow skill. Use this skill when the user needs Design a PostgreSQL-specific schema. Covers best-practices, data types, indexing, constraints, performance patterns, and advanced features and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["postgresql-v2", "postgresql", "design", "postgresql-specific", "schema", "covers", "best-practices", "data"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# PostgreSQL Table Design

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/postgresql` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# PostgreSQL Table Design

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Safety, PostgreSQL “Gotchas”, Data Types, Table Types, Row-Level Security, Constraints.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Designing a schema for PostgreSQL
- Selecting data types and constraints
- Planning indexes, partitions, or RLS policies
- Reviewing tables for scale and maintainability
- You are targeting a non-PostgreSQL database
- You only need query tuning without schema changes

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Capture entities, access patterns, and scale targets (rows, QPS, retention).
2. Choose data types and constraints that enforce invariants.
3. Add indexes for real query paths and validate with EXPLAIN.
4. Plan partitioning or RLS where required by scale or access control.
5. Review migration impact and apply changes safely.
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview, playbook, and source summary before loading any upstream support files.

### Imported Workflow Notes

#### Imported: Instructions

1. Capture entities, access patterns, and scale targets (rows, QPS, retention).
2. Choose data types and constraints that enforce invariants.
3. Add indexes for real query paths and validate with `EXPLAIN`.
4. Plan partitioning or RLS where required by scale or access control.
5. Review migration impact and apply changes safely.

#### Imported: Safety

- Avoid destructive DDL on production without backups and a rollback plan.
- Use migrations and staging validation before applying schema changes.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @postgresql-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/postgresql-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/postgresql-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @postgresql-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Users

```sql
CREATE TABLE users (
  user_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX ON users (LOWER(email));
CREATE INDEX ON users (created_at);
```

### Orders

```sql
CREATE TABLE orders (
  order_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(user_id),
  status TEXT NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING','PAID','CANCELED')),
  total NUMERIC(10,2) NOT NULL CHECK (total > 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX ON orders (user_id);
CREATE INDEX ON orders (created_at);
```

### JSONB

```sql
CREATE TABLE profiles (
  user_id BIGINT PRIMARY KEY REFERENCES users(user_id),
  attrs JSONB NOT NULL DEFAULT '{}',
  theme TEXT GENERATED ALWAYS AS (attrs->>'theme') STORED
);
CREATE INDEX profiles_attrs_gin ON profiles USING GIN (attrs);
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Define a PRIMARY KEY for reference tables (users, orders, etc.). Not always needed for time-series/event/log data. When used, prefer BIGINT GENERATED ALWAYS AS IDENTITY; use UUID only when global uniqueness/opacity is needed.
- Normalize first (to 3NF) to eliminate data redundancy and update anomalies; denormalize only for measured, high-ROI reads where join performance is proven problematic. Premature denormalization creates maintenance burden.
- Add NOT NULL everywhere it’s semantically required; use DEFAULTs for common values.
- Create indexes for access paths you actually query: PK/unique (auto), FK columns (manual!), frequent filters/sorts, and join keys.
- Prefer TIMESTAMPTZ for event time; NUMERIC for money; TEXT for strings; BIGINT for integer values, DOUBLE PRECISION for floats (or NUMERIC for exact decimal arithmetic).
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Core Rules

- Define a **PRIMARY KEY** for reference tables (users, orders, etc.). Not always needed for time-series/event/log data. When used, prefer `BIGINT GENERATED ALWAYS AS IDENTITY`; use `UUID` only when global uniqueness/opacity is needed.
- **Normalize first (to 3NF)** to eliminate data redundancy and update anomalies; denormalize **only** for measured, high-ROI reads where join performance is proven problematic. Premature denormalization creates maintenance burden.
- Add **NOT NULL** everywhere it’s semantically required; use **DEFAULT**s for common values.
- Create **indexes for access paths you actually query**: PK/unique (auto), **FK columns (manual!)**, frequent filters/sorts, and join keys.
- Prefer **TIMESTAMPTZ** for event time; **NUMERIC** for money; **TEXT** for strings; **BIGINT** for integer values, **DOUBLE PRECISION** for floats (or `NUMERIC` for exact decimal arithmetic).

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/postgresql`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Indexing

- **B-tree**: default for equality/range queries (`=`, `<`, `>`, `BETWEEN`, `ORDER BY`)
- **Composite**: order matters—index used if equality on leftmost prefix (`WHERE a = ? AND b > ?` uses index on `(a,b)`, but `WHERE b = ?` does not). Put most selective/frequently filtered columns first.
- **Covering**: `CREATE INDEX ON tbl (id) INCLUDE (name, email)` - includes non-key columns for index-only scans without visiting table.
- **Partial**: for hot subsets (`WHERE status = 'active'` → `CREATE INDEX ON tbl (user_id) WHERE status = 'active'`). Any query with `status = 'active'` can use this index.
- **Expression**: for computed search keys (`CREATE INDEX ON tbl (LOWER(email))`). Expression must match exactly in WHERE clause: `WHERE LOWER(email) = 'user@example.com'`.
- **GIN**: JSONB containment/existence, arrays (`@>`, `?`), full-text search (`@@`)
- **GiST**: ranges, geometry, exclusion constraints
- **BRIN**: very large, naturally ordered data (time-series)—minimal storage overhead. Effective when row order on disk correlates with indexed column (insertion order or after `CLUSTER`).

#### Imported: PostgreSQL “Gotchas”

- **Identifiers**: unquoted → lowercased. Avoid quoted/mixed-case names. Convention: use `snake_case` for table/column names.
- **Unique + NULLs**: UNIQUE allows multiple NULLs. Use `UNIQUE (...) NULLS NOT DISTINCT` (PG15+) to restrict to one NULL.
- **FK indexes**: PostgreSQL **does not** auto-index FK columns. Add them.
- **No silent coercions**: length/precision overflows error out (no truncation). Example: inserting 999 into `NUMERIC(2,0)` fails with error, unlike some databases that silently truncate or round.
- **Sequences/identity have gaps** (normal; don't "fix"). Rollbacks, crashes, and concurrent transactions create gaps in ID sequences (1, 2, 5, 6...). This is expected behavior—don't try to make IDs consecutive.
- **Heap storage**: no clustered PK by default (unlike SQL Server/MySQL InnoDB); `CLUSTER` is one-off reorganization, not maintained on subsequent inserts. Row order on disk is insertion order unless explicitly clustered.
- **MVCC**: updates/deletes leave dead tuples; vacuum handles them—design to avoid hot wide-row churn.

#### Imported: Data Types

- **IDs**: `BIGINT GENERATED ALWAYS AS IDENTITY` preferred (`GENERATED BY DEFAULT` also fine); `UUID` when merging/federating/used in a distributed system or for opaque IDs. Generate with `uuidv7()` (preferred if using PG18+) or `gen_random_uuid()` (if using an older PG version).
- **Integers**: prefer `BIGINT` unless storage space is critical; `INTEGER` for smaller ranges; avoid `SMALLINT` unless constrained.
- **Floats**: prefer `DOUBLE PRECISION` over `REAL` unless storage space is critical. Use `NUMERIC` for exact decimal arithmetic.
- **Strings**: prefer `TEXT`; if length limits needed, use `CHECK (LENGTH(col) <= n)` instead of `VARCHAR(n)`; avoid `CHAR(n)`. Use `BYTEA` for binary data. Large strings/binary (>2KB default threshold) automatically stored in TOAST with compression. TOAST storage: `PLAIN` (no TOAST), `EXTENDED` (compress + out-of-line), `EXTERNAL` (out-of-line, no compress), `MAIN` (compress, keep in-line if possible). Default `EXTENDED` usually optimal. Control with `ALTER TABLE tbl ALTER COLUMN col SET STORAGE strategy` and `ALTER TABLE tbl SET (toast_tuple_target = 4096)` for threshold. Case-insensitive: for locale/accent handling use non-deterministic collations; for plain ASCII use expression indexes on `LOWER(col)` (preferred unless column needs case-insensitive PK/FK/UNIQUE) or `CITEXT`.
- **Money**: `NUMERIC(p,s)` (never float).
- **Time**: `TIMESTAMPTZ` for timestamps; `DATE` for date-only; `INTERVAL` for durations. Avoid `TIMESTAMP` (without timezone). Use `now()` for transaction start time, `clock_timestamp()` for current wall-clock time.
- **Booleans**: `BOOLEAN` with `NOT NULL` constraint unless tri-state values are required.
- **Enums**: `CREATE TYPE ... AS ENUM` for small, stable sets (e.g. US states, days of week). For business-logic-driven and evolving values (e.g. order statuses) → use TEXT (or INT) + CHECK or lookup table.
- **Arrays**: `TEXT[]`, `INTEGER[]`, etc. Use for ordered lists where you query elements. Index with **GIN** for containment (`@>`, `<@`) and overlap (`&&`) queries. Access: `arr[1]` (1-indexed), `arr[1:3]` (slicing). Good for tags, categories; avoid for relations—use junction tables instead. Literal syntax: `'{val1,val2}'` or `ARRAY[val1,val2]`.
- **Range types**: `daterange`, `numrange`, `tstzrange` for intervals. Support overlap (`&&`), containment (`@>`), operators. Index with **GiST**. Good for scheduling, versioning, numeric ranges. Pick a bounds scheme and use it consistently; prefer `[)` (inclusive/exclusive) by default.
- **Network types**: `INET` for IP addresses, `CIDR` for network ranges, `MACADDR` for MAC addresses. Support network operators (`<<`, `>>`, `&&`).
- **Geometric types**: `POINT`, `LINE`, `POLYGON`, `CIRCLE` for 2D spatial data. Index with **GiST**. Consider **PostGIS** for advanced spatial features.
- **Text search**: `TSVECTOR` for full-text search documents, `TSQUERY` for search queries. Index `tsvector` with **GIN**. Always specify language: `to_tsvector('english', col)` and `to_tsquery('english', 'query')`. Never use single-argument versions. This applies to both index expressions and queries.
- **Domain types**: `CREATE DOMAIN email AS TEXT CHECK (VALUE ~ '^[^@]+@[^@]+$')` for reusable custom types with validation. Enforces constraints across tables.
- **Composite types**: `CREATE TYPE address AS (street TEXT, city TEXT, zip TEXT)` for structured data within columns. Access with `(col).field` syntax.
- **JSONB**: preferred over JSON; index with **GIN**. Use only for optional/semi-structured attrs. ONLY use JSON if the original ordering of the contents MUST be preserved.
- **Vector types**: `vector` type by `pgvector` for vector similarity search for embeddings.


### Do not use the following data types
- DO NOT use `timestamp` (without time zone); DO use `timestamptz` instead.
- DO NOT use `char(n)` or `varchar(n)`; DO use `text` instead.
- DO NOT use `money` type; DO use `numeric` instead.
- DO NOT use `timetz` type; DO use `timestamptz` instead.
- DO NOT use `timestamptz(0)` or any other precision specification; DO use `timestamptz` instead
- DO NOT use `serial` type; DO use `generated always as identity` instead.

#### Imported: Table Types

- **Regular**: default; fully durable, logged.
- **TEMPORARY**: session-scoped, auto-dropped, not logged. Faster for scratch work.
- **UNLOGGED**: persistent but not crash-safe. Faster writes; good for caches/staging.

#### Imported: Row-Level Security

Enable with `ALTER TABLE tbl ENABLE ROW LEVEL SECURITY`. Create policies: `CREATE POLICY user_access ON orders FOR SELECT TO app_users USING (user_id = current_user_id())`. Built-in user-based access control at the row level.

#### Imported: Constraints

- **PK**: implicit UNIQUE + NOT NULL; creates a B-tree index.
- **FK**: specify `ON DELETE/UPDATE` action (`CASCADE`, `RESTRICT`, `SET NULL`, `SET DEFAULT`). Add explicit index on referencing column—speeds up joins and prevents locking issues on parent deletes/updates. Use `DEFERRABLE INITIALLY DEFERRED` for circular FK dependencies checked at transaction end.
- **UNIQUE**: creates a B-tree index; allows multiple NULLs unless `NULLS NOT DISTINCT` (PG15+). Standard behavior: `(1, NULL)` and `(1, NULL)` are allowed. With `NULLS NOT DISTINCT`: only one `(1, NULL)` allowed. Prefer `NULLS NOT DISTINCT` unless you specifically need duplicate NULLs.
- **CHECK**: row-local constraints; NULL values pass the check (three-valued logic). Example: `CHECK (price > 0)` allows NULL prices. Combine with `NOT NULL` to enforce: `price NUMERIC NOT NULL CHECK (price > 0)`.
- **EXCLUDE**: prevents overlapping values using operators. `EXCLUDE USING gist (room_id WITH =, booking_period WITH &&)` prevents double-booking rooms. Requires appropriate index type (often GiST).

#### Imported: Partitioning

- Use for very large tables (>100M rows) where queries consistently filter on partition key (often time/date).
- Alternate use: use for tables where data maintenance tasks dictates e.g. data pruned or bulk replaced periodically
- **RANGE**: common for time-series (`PARTITION BY RANGE (created_at)`). Create partitions: `CREATE TABLE logs_2024_01 PARTITION OF logs FOR VALUES FROM ('2024-01-01') TO ('2024-02-01')`. **TimescaleDB** automates time-based or ID-based partitioning with retention policies and compression.
- **LIST**: for discrete values (`PARTITION BY LIST (region)`). Example: `FOR VALUES IN ('us-east', 'us-west')`.
- **HASH**: for even distribution when no natural key (`PARTITION BY HASH (user_id)`). Creates N partitions with modulus.
- **Constraint exclusion**: requires `CHECK` constraints on partitions for query planner to prune. Auto-created for declarative partitioning (PG10+).
- Prefer declarative partitioning or hypertables. Do NOT use table inheritance.
- **Limitations**: no global UNIQUE constraints—include partition key in PK/UNIQUE. FKs from partitioned tables not supported; use triggers.

#### Imported: Special Considerations

### Update-Heavy Tables

- **Separate hot/cold columns**—put frequently updated columns in separate table to minimize bloat.
- **Use `fillfactor=90`** to leave space for HOT updates that avoid index maintenance.
- **Avoid updating indexed columns**—prevents beneficial HOT updates.
- **Partition by update patterns**—separate frequently updated rows in a different partition from stable data.

### Insert-Heavy Workloads

- **Minimize indexes**—only create what you query; every index slows inserts.
- **Use `COPY` or multi-row `INSERT`** instead of single-row inserts.
- **UNLOGGED tables** for rebuildable staging data—much faster writes.
- **Defer index creation** for bulk loads—>drop index, load data, recreate indexes.
- **Partition by time/hash** to distribute load. **TimescaleDB** automates partitioning and compression of insert-heavy data.
- **Use a natural key for primary key** such as a (timestamp, device_id) if enforcing global uniqueness is important many insert-heavy tables don't need a primary key at all.
- If you do need a surrogate key, **Prefer `BIGINT GENERATED ALWAYS AS IDENTITY` over `UUID`**.

### Upsert-Friendly Design

- **Requires UNIQUE index** on conflict target columns—`ON CONFLICT (col1, col2)` needs exact matching unique index (partial indexes don't work).
- **Use `EXCLUDED.column`** to reference would-be-inserted values; only update columns that actually changed to reduce write overhead.
- **`DO NOTHING` faster** than `DO UPDATE` when no actual update needed.

### Safe Schema Evolution

- **Transactional DDL**: most DDL operations can run in transactions and be rolled back—`BEGIN; ALTER TABLE...; ROLLBACK;` for safe testing.
- **Concurrent index creation**: `CREATE INDEX CONCURRENTLY` avoids blocking writes but can't run in transactions.
- **Volatile defaults cause rewrites**: adding `NOT NULL` columns with volatile defaults (e.g., `now()`, `gen_random_uuid()`) rewrites entire table. Non-volatile defaults are fast.
- **Drop constraints before columns**: `ALTER TABLE DROP CONSTRAINT` then `DROP COLUMN` to avoid dependency issues.
- **Function signature changes**: `CREATE OR REPLACE` with different arguments creates overloads, not replacements. DROP old version if no overload desired.

#### Imported: Generated Columns

- `... GENERATED ALWAYS AS (<expr>) STORED` for computed, indexable fields. PG18+ adds `VIRTUAL` columns (computed on read, not stored).

#### Imported: Extensions

- **`pgcrypto`**: `crypt()` for password hashing.
- **`uuid-ossp`**: alternative UUID functions; prefer `pgcrypto` for new projects.
- **`pg_trgm`**: fuzzy text search with `%` operator, `similarity()` function. Index with GIN for `LIKE '%pattern%'` acceleration.
- **`citext`**: case-insensitive text type. Prefer expression indexes on `LOWER(col)` unless you need case-insensitive constraints.
- **`btree_gin`/`btree_gist`**: enable mixed-type indexes (e.g., GIN index on both JSONB and text columns).
- **`hstore`**: key-value pairs; mostly superseded by JSONB but useful for simple string mappings.
- **`timescaledb`**: essential for time-series—automated partitioning, retention, compression, continuous aggregates.
- **`postgis`**: comprehensive geospatial support beyond basic geometric types—essential for location-based applications.
- **`pgvector`**: vector similarity search for embeddings.
- **`pgaudit`**: audit logging for all database activity.

#### Imported: JSONB Guidance

- Prefer `JSONB` with **GIN** index.
- Default: `CREATE INDEX ON tbl USING GIN (jsonb_col);` → accelerates:
  - **Containment** `jsonb_col @> '{"k":"v"}'`
  - **Key existence** `jsonb_col ? 'k'`, **any/all keys** `?\|`, `?&`
  - **Path containment** on nested docs
  - **Disjunction** `jsonb_col @> ANY(ARRAY['{"status":"active"}', '{"status":"pending"}'])`
- Heavy `@>` workloads: consider opclass `jsonb_path_ops` for smaller/faster containment-only indexes:
  - `CREATE INDEX ON tbl USING GIN (jsonb_col jsonb_path_ops);`
  - **Trade-off**: loses support for key existence (`?`, `?|`, `?&`) queries—only supports containment (`@>`)
- Equality/range on a specific scalar field: extract and index with B-tree (generated column or expression):
  - `ALTER TABLE tbl ADD COLUMN price INT GENERATED ALWAYS AS ((jsonb_col->>'price')::INT) STORED;`
  - `CREATE INDEX ON tbl (price);`
  - Prefer queries like `WHERE price BETWEEN 100 AND 500` (uses B-tree) over `WHERE (jsonb_col->>'price')::INT BETWEEN 100 AND 500` without index.
- Arrays inside JSONB: use GIN + `@>` for containment (e.g., tags). Consider `jsonb_path_ops` if only doing containment.
- Keep core relations in tables; use JSONB for optional/variable attributes.
- Use constraints to limit allowed JSONB values in a column e.g. `config JSONB NOT NULL CHECK(jsonb_typeof(config) = 'object')`
