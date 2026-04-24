---
name: snowflake-development
description: "Snowflake Development workflow skill. Use this skill when the user needs Comprehensive Snowflake development assistant covering SQL best practices, data pipeline design (Dynamic Tables, Streams, Tasks, Snowpipe), Cortex AI functions, Cortex Agents, Snowpark Python, dbt integration, performance tuning, and security hardening and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["snowflake-development", "comprehensive", "snowflake", "development", "assistant", "covering", "sql", "best"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# Snowflake Development

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/snowflake-development` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Snowflake Development You are a Snowflake development expert. Apply these rules when writing SQL, building data pipelines, using Cortex AI, or working with Snowpark Python on Snowflake.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: SQL Best Practices, Data Pipelines, Cortex AI, Snowpark Python, dbt on Snowflake, Performance.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user asks for help with Snowflake SQL, data pipelines, Cortex AI, or Snowpark Python.
- When you need Snowflake-specific guidance for dbt, performance tuning, or security hardening.
- Use when the request clearly matches the imported source intent: Comprehensive Snowflake development assistant covering SQL best practices, data pipeline design (Dynamic Tables, Streams, Tasks, Snowpipe), Cortex AI functions, Cortex Agents, Snowpark Python, dbt integration,....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: SQL Best Practices

### Naming and Style

- Use `snake_case` for all identifiers. Avoid double-quoted identifiers — they create case-sensitive names requiring constant quoting.
- Use CTEs (`WITH` clauses) over nested subqueries.
- Use `CREATE OR REPLACE` for idempotent DDL.
- Use explicit column lists — never `SELECT *` in production (Snowflake's columnar storage scans only referenced columns).

### Stored Procedures — Colon Prefix Rule

In SQL stored procedures (BEGIN...END blocks), variables and parameters **must** use the colon `:` prefix inside SQL statements. Without it, Snowflake raises "invalid identifier" errors.

BAD:
```sql
CREATE PROCEDURE my_proc(p_id INT) RETURNS STRING LANGUAGE SQL AS
BEGIN
    LET result STRING;
    SELECT name INTO result FROM users WHERE id = p_id;
    RETURN result;
END;
```

GOOD:
```sql
CREATE PROCEDURE my_proc(p_id INT) RETURNS STRING LANGUAGE SQL AS
BEGIN
    LET result STRING;
    SELECT name INTO :result FROM users WHERE id = :p_id;
    RETURN result;
END;
```

### Semi-Structured Data

- VARIANT, OBJECT, ARRAY for JSON/Avro/Parquet/ORC.
- Access nested fields: `src:customer.name::STRING`. Always cast: `src:price::NUMBER(10,2)`.
- VARIANT null vs SQL NULL: JSON `null` is stored as `"null"`. Use `STRIP_NULL_VALUE = TRUE` on load.
- Flatten arrays: `SELECT f.value:name::STRING FROM my_table, LATERAL FLATTEN(input => src:items) f;`

### MERGE for Upserts

```sql
MERGE INTO target t USING source s ON t.id = s.id
WHEN MATCHED THEN UPDATE SET t.name = s.name, t.updated_at = CURRENT_TIMESTAMP()
WHEN NOT MATCHED THEN INSERT (id, name, updated_at) VALUES (s.id, s.name, CURRENT_TIMESTAMP());
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @snowflake-development to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @snowflake-development against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @snowflake-development for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @snowflake-development using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/snowflake-development`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@seo-programmatic` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@seo-schema` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@seo-sitemap` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@seo-snippet-hunter` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Data Pipelines

### Choosing Your Approach

| Approach | When to Use |
|----------|-------------|
| Dynamic Tables | Declarative transformations. **Default choice.** Define the query, Snowflake handles refresh. |
| Streams + Tasks | Imperative CDC. Use for procedural logic, stored procedure calls. |
| Snowpipe | Continuous file loading from S3/GCS/Azure. |

### Dynamic Tables

```sql
CREATE OR REPLACE DYNAMIC TABLE cleaned_events
    TARGET_LAG = '5 minutes'
    WAREHOUSE = transform_wh
    AS
    SELECT event_id, event_type, user_id, event_timestamp
    FROM raw_events
    WHERE event_type IS NOT NULL;
```

Key rules:
- Set `TARGET_LAG` progressively: tighter at top, looser at bottom.
- Incremental DTs **cannot** depend on Full refresh DTs.
- `SELECT *` breaks on schema changes — use explicit column lists.
- Change tracking must stay enabled on base tables.
- Views cannot sit between two Dynamic Tables.

### Streams and Tasks

```sql
CREATE OR REPLACE STREAM raw_stream ON TABLE raw_events;

CREATE OR REPLACE TASK process_events
    WAREHOUSE = transform_wh
    SCHEDULE = 'USING CRON 0 */1 * * * America/Los_Angeles'
    WHEN SYSTEM$STREAM_HAS_DATA('raw_stream')
    AS INSERT INTO cleaned_events SELECT ... FROM raw_stream;

-- Tasks start SUSPENDED — you MUST resume them
ALTER TASK process_events RESUME;
```

#### Imported: Cortex AI

### Function Reference

| Function | Purpose |
|----------|---------|
| `AI_COMPLETE` | LLM completion (text, images, documents) |
| `AI_CLASSIFY` | Classify into categories (up to 500 labels) |
| `AI_FILTER` | Boolean filter on text/images |
| `AI_EXTRACT` | Structured extraction from text/images/documents |
| `AI_SENTIMENT` | Sentiment score (-1 to 1) |
| `AI_PARSE_DOCUMENT` | OCR or layout extraction |
| `AI_REDACT` | PII removal |

**Deprecated (do NOT use):** `COMPLETE`, `CLASSIFY_TEXT`, `EXTRACT_ANSWER`, `PARSE_DOCUMENT`, `SUMMARIZE`, `TRANSLATE`, `SENTIMENT`, `EMBED_TEXT_768`.

### TO_FILE — Common Error Source

Stage path and filename are **SEPARATE** arguments:

```sql
-- BAD: TO_FILE('@stage/file.pdf')
-- GOOD:
TO_FILE('@db.schema.mystage', 'invoice.pdf')
```

### Use AI_CLASSIFY for Classification (Not AI_COMPLETE)

```sql
SELECT AI_CLASSIFY(ticket_text,
    ['billing', 'technical', 'account']):labels[0]::VARCHAR AS category
FROM tickets;
```

### Cortex Agents

```sql
CREATE OR REPLACE AGENT my_db.my_schema.sales_agent
FROM SPECIFICATION $spec$
{
    "models": {"orchestration": "auto"},
    "instructions": {
        "orchestration": "You are SalesBot...",
        "response": "Be concise."
    },
    "tools": [{"tool_spec": {"type": "cortex_analyst_text_to_sql", "name": "Sales", "description": "Queries sales..."}}],
    "tool_resources": {"Sales": {"semantic_model_file": "@stage/model.yaml"}}
}
$spec$;
```

Agent rules:
- Use `$spec$` delimiter (not `$$`).
- `models` must be an object, not an array.
- `tool_resources` is a separate top-level object, not nested inside tools.
- Do NOT include empty/null values in edit specs — clears existing values.
- Tool descriptions are the #1 quality factor.
- Never modify production agents directly — clone first.

#### Imported: Snowpark Python

```python
from snowflake.snowpark import Session
import os

session = Session.builder.configs({
    "account": os.environ["SNOWFLAKE_ACCOUNT"],
    "user": os.environ["SNOWFLAKE_USER"],
    "password": os.environ["SNOWFLAKE_PASSWORD"],
    "role": "my_role", "warehouse": "my_wh",
    "database": "my_db", "schema": "my_schema"
}).create()
```

- Never hardcode credentials.
- DataFrames are lazy — executed on `collect()`/`show()`.
- Do NOT use `collect()` on large DataFrames — process server-side.
- Use **vectorized UDFs** (10-100x faster) for batch/ML workloads instead of scalar UDFs.

#### Imported: dbt on Snowflake

Dynamic table materialization (streaming/near-real-time marts):
```sql
{{ config(materialized='dynamic_table', snowflake_warehouse='transforming', target_lag='1 hour') }}
```

Incremental materialization (large fact tables):
```sql
{{ config(materialized='incremental', unique_key='event_id') }}
```

Snowflake-specific configs (combine with any materialization):
```sql
{{ config(transient=true, copy_grants=true, query_tag='team_daily') }}
```

- Do NOT use `{{ this }}` without `{% if is_incremental() %}` guard.
- Use `dynamic_table` materialization for streaming/near-real-time marts.

#### Imported: Performance

- **Cluster keys**: Only multi-TB tables, on WHERE/JOIN/GROUP BY columns.
- **Search Optimization**: `ALTER TABLE t ADD SEARCH OPTIMIZATION ON EQUALITY(col);`
- **Warehouse sizing**: Start X-Small, scale up. `AUTO_SUSPEND = 60`, `AUTO_RESUME = TRUE`.
- **Separate warehouses** per workload.
- Estimate AI costs first: `SELECT SUM(AI_COUNT_TOKENS('claude-4-sonnet', text)) FROM table;`

#### Imported: Security

- Follow least-privilege RBAC. Use database roles for object-level grants.
- Audit ACCOUNTADMIN regularly: `SHOW GRANTS OF ROLE ACCOUNTADMIN;`
- Use network policies for IP allowlisting.
- Use masking policies for PII columns and row access policies for multi-tenant isolation.

#### Imported: Common Error Patterns

| Error | Cause | Fix |
|-------|-------|-----|
| "Object does not exist" | Wrong context or missing grants | Fully qualify names, check grants |
| "Invalid identifier" in proc | Missing colon prefix | Use `:variable_name` |
| "Numeric value not recognized" | VARIANT not cast | `src:field::NUMBER(10,2)` |
| Task not running | Forgot to resume | `ALTER TASK ... RESUME` |
| DT refresh failing | Schema change or tracking disabled | Use explicit columns, check change tracking |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
