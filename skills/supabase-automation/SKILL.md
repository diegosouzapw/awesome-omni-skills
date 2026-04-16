---
name: supabase-automation
description: "Supabase Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Supabase database queries, table management, project administration, storage, edge functions, and SQL execution via Rube MCP (Composio). Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["supabase-automation", "automate", "supabase", "database", "queries", "table", "management", "project"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# Supabase Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/supabase-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Supabase Automation via Rube MCP Automate Supabase operations including database queries, table schema inspection, SQL execution, project and organization management, storage buckets, edge functions, and service health monitoring through Composio's Supabase toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Supabase database queries, table management, project administration, storage, edge functions, and SQL execution via Rube MCP (Composio). Always search tools first for current schemas.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Verify Rube MCP is available by confirming RUBESEARCHTOOLS responds
2. Call RUBEMANAGECONNECTIONS with toolkit supabase
3. If connection is not ACTIVE, follow the returned auth link to complete Supabase authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. SUPABASELISTALLPROJECTS - List projects to find the target projectref [Prerequisite]
6. SUPABASELISTTABLES - List all tables and views in the database [Prerequisite]
7. SUPABASEGETTABLE_SCHEMAS - Get detailed column types, constraints, and relationships [Prerequisite for writes]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `supabase`
3. If connection is not ACTIVE, follow the returned auth link to complete Supabase authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Query and Manage Database Tables

**When to use**: User wants to read data from tables, inspect schemas, or perform CRUD operations

**Tool sequence**:
1. `SUPABASE_LIST_ALL_PROJECTS` - List projects to find the target project_ref [Prerequisite]
2. `SUPABASE_LIST_TABLES` - List all tables and views in the database [Prerequisite]
3. `SUPABASE_GET_TABLE_SCHEMAS` - Get detailed column types, constraints, and relationships [Prerequisite for writes]
4. `SUPABASE_SELECT_FROM_TABLE` - Query rows with filtering, sorting, and pagination [Required for reads]
5. `SUPABASE_BETA_RUN_SQL_QUERY` - Execute arbitrary SQL for complex queries, inserts, updates, or deletes [Required for writes]

**Key parameters for SELECT_FROM_TABLE**:
- `project_ref`: 20-character lowercase project reference
- `table`: Table or view name to query
- `select`: Comma-separated column list (supports nested selections and JSON paths like `profile->avatar_url`)
- `filters`: Array of filter objects with `column`, `operator`, `value`
- `order`: Sort expression like `created_at.desc`
- `limit`: Max rows to return (minimum 1)
- `offset`: Rows to skip for pagination

**PostgREST filter operators**:
- `eq`, `neq`: Equal / not equal
- `gt`, `gte`, `lt`, `lte`: Comparison operators
- `like`, `ilike`: Pattern matching (case-sensitive / insensitive)
- `is`: IS check (for null, true, false)
- `in`: In a list of values
- `cs`, `cd`: Contains / contained by (arrays)
- `fts`, `plfts`, `phfts`, `wfts`: Full-text search variants

**Key parameters for RUN_SQL_QUERY**:
- `ref`: Project reference (20 lowercase letters, pattern `^[a-z]{20}$`)
- `query`: Valid PostgreSQL SQL statement
- `read_only`: Boolean to force read-only transaction (safer for SELECTs)

**Pitfalls**:
- `project_ref` must be exactly 20 lowercase letters (a-z only, no numbers or hyphens)
- `SELECT_FROM_TABLE` is read-only; use `RUN_SQL_QUERY` for INSERT, UPDATE, DELETE operations
- For PostgreSQL array columns (text[], integer[]), use `ARRAY['item1', 'item2']` or `'{"item1", "item2"}'` syntax, NOT JSON array syntax `'["item1", "item2"]'`
- SQL identifiers that are case-sensitive must be double-quoted in queries
- Complex DDL operations may timeout (~60 second limit); break into smaller queries
- ERROR 42P01 "relation does not exist" usually means unquoted case-sensitive identifiers
- ERROR 42883 "function does not exist" means you are calling non-standard helpers; prefer information_schema queries

### 2. Manage Projects and Organizations

**When to use**: User wants to list projects, inspect configurations, or manage organizations

**Tool sequence**:
1. `SUPABASE_LIST_ALL_ORGANIZATIONS` - List all organizations (IDs and names) [Required]
2. `SUPABASE_GETS_INFORMATION_ABOUT_THE_ORGANIZATION` - Get detailed org info by slug [Optional]
3. `SUPABASE_LIST_MEMBERS_OF_AN_ORGANIZATION` - List org members with roles and MFA status [Optional]
4. `SUPABASE_LIST_ALL_PROJECTS` - List all projects with metadata [Required]
5. `SUPABASE_GETS_PROJECT_S_POSTGRES_CONFIG` - Get database configuration [Optional]
6. `SUPABASE_GETS_PROJECT_S_AUTH_CONFIG` - Get authentication configuration [Optional]
7. `SUPABASE_GET_PROJECT_API_KEYS` - Get API keys (sensitive -- handle carefully) [Optional]
8. `SUPABASE_GETS_PROJECT_S_SERVICE_HEALTH_STATUS` - Check service health [Optional]

**Key parameters**:
- `ref`: Project reference for project-specific tools
- `slug`: Organization slug (URL-friendly identifier) for org tools
- `services`: Array of services for health check: `auth`, `db`, `db_postgres_user`, `pg_bouncer`, `pooler`, `realtime`, `rest`, `storage`

**Pitfalls**:
- `LIST_ALL_ORGANIZATIONS` returns both `id` and `slug`; `LIST_MEMBERS_OF_AN_ORGANIZATION` expects `slug`, not `id`
- `GET_PROJECT_API_KEYS` returns live secrets -- NEVER log, display, or persist full key values
- `GETS_PROJECT_S_SERVICE_HEALTH_STATUS` requires a non-empty `services` array; empty array causes invalid_request error
- Config tools may return 401/403 if token lacks required scope; handle gracefully rather than failing the whole workflow

### 3. Inspect Database Schema

**When to use**: User wants to understand table structure, columns, constraints, or generate types

**Tool sequence**:
1. `SUPABASE_LIST_ALL_PROJECTS` - Find the target project [Prerequisite]
2. `SUPABASE_LIST_TABLES` - Enumerate all tables and views with metadata [Required]
3. `SUPABASE_GET_TABLE_SCHEMAS` - Get detailed schema for specific tables [Required]
4. `SUPABASE_GENERATE_TYPE_SCRIPT_TYPES` - Generate TypeScript types from schema [Optional]

**Key parameters for LIST_TABLES**:
- `project_ref`: Project reference
- `schemas`: Array of schema names to search (e.g., `["public"]`); omit for all non-system schemas
- `include_views`: Include views alongside tables (default true)
- `include_metadata`: Include row count estimates and sizes (default true)
- `include_system_schemas`: Include pg_catalog, information_schema, etc. (default false)

**Key parameters for GET_TABLE_SCHEMAS**:
- `project_ref`: Project reference
- `table_names`: Array of table names (max 20 per request); supports schema prefix like `public.users`, `auth.users`
- `include_relationships`: Include foreign key info (default true)
- `include_indexes`: Include index info (default true)
- `exclude_null_values`: Cleaner output by hiding null fields (default true)

**Key parameters for GENERATE_TYPE_SCRIPT_TYPES**:
- `ref`: Project reference
- `included_schemas`: Comma-separated schema names (default `"public"`)

**Pitfalls**:
- Table names without schema prefix assume `public` schema
- `row_count` and `size_bytes` from LIST_TABLES may be null for views or recently created tables; treat as unknown, not zero
- GET_TABLE_SCHEMAS has a max of 20 tables per request; batch if needed
- TypeScript types include all tables in specified schemas; cannot filter individual tables

### 4. Manage Edge Functions

**When to use**: User wants to list, inspect, or work with Supabase Edge Functions

**Tool sequence**:
1. `SUPABASE_LIST_ALL_PROJECTS` - Find the project reference [Prerequisite]
2. `SUPABASE_LIST_ALL_FUNCTIONS` - List all edge functions with metadata [Required]
3. `SUPABASE_RETRIEVE_A_FUNCTION` - Get detailed info for a specific function [Optional]

**Key parameters**:
- `ref`: Project reference
- Function slug for RETRIEVE_A_FUNCTION

**Pitfalls**:
- `LIST_ALL_FUNCTIONS` returns metadata only, not function code or logs
- `created_at` and `updated_at` may be epoch milliseconds; convert to human-readable timestamps
- These tools cannot create or deploy edge functions; they are read-only inspection tools
- Permission errors may occur without org/project admin rights

### 5. Manage Storage Buckets

**When to use**: User wants to list storage buckets or manage file storage

**Tool sequence**:
1. `SUPABASE_LIST_ALL_PROJECTS` - Find the project reference [Prerequisite]
2. `SUPABASE_LISTS_ALL_BUCKETS` - List all storage buckets [Required]

**Key parameters**:
- `ref`: Project reference

**Pitfalls**:
- `LISTS_ALL_BUCKETS` returns bucket list only, not bucket contents or access policies
- For file uploads, `SUPABASE_RESUMABLE_UPLOAD_SIGN_OPTIONS_WITH_ID` handles CORS preflight for TUS resumable uploads only
- Direct file operations may require using `proxy_execute` with the Supabase storage API

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Supabase connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `supabase`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @supabase-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @supabase-automation against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @supabase-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @supabase-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/supabase-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@shellcheck-configuration` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@shodan-reconnaissance` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@shopify-apps` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@shopify-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Quick Reference

| Task | Tool Slug | Key Params |
|------|-----------|------------|
| List organizations | `SUPABASE_LIST_ALL_ORGANIZATIONS` | (none) |
| Get org info | `SUPABASE_GETS_INFORMATION_ABOUT_THE_ORGANIZATION` | `slug` |
| List org members | `SUPABASE_LIST_MEMBERS_OF_AN_ORGANIZATION` | `slug` |
| List projects | `SUPABASE_LIST_ALL_PROJECTS` | (none) |
| List tables | `SUPABASE_LIST_TABLES` | `project_ref`, `schemas` |
| Get table schemas | `SUPABASE_GET_TABLE_SCHEMAS` | `project_ref`, `table_names` |
| Query table | `SUPABASE_SELECT_FROM_TABLE` | `project_ref`, `table`, `select`, `filters` |
| Run SQL | `SUPABASE_BETA_RUN_SQL_QUERY` | `ref`, `query`, `read_only` |
| Generate TS types | `SUPABASE_GENERATE_TYPE_SCRIPT_TYPES` | `ref`, `included_schemas` |
| Postgres config | `SUPABASE_GETS_PROJECT_S_POSTGRES_CONFIG` | `ref` |
| Auth config | `SUPABASE_GETS_PROJECT_S_AUTH_CONFIG` | `ref` |
| Get API keys | `SUPABASE_GET_PROJECT_API_KEYS` | `ref` |
| Service health | `SUPABASE_GETS_PROJECT_S_SERVICE_HEALTH_STATUS` | `ref`, `services` |
| List edge functions | `SUPABASE_LIST_ALL_FUNCTIONS` | `ref` |
| Get edge function | `SUPABASE_RETRIEVE_A_FUNCTION` | `ref`, function slug |
| List storage buckets | `SUPABASE_LISTS_ALL_BUCKETS` | `ref` |
| List DB branches | `SUPABASE_LIST_ALL_DATABASE_BRANCHES` | `ref` |

#### Imported: Common Patterns

### ID Resolution
- **Project reference**: `SUPABASE_LIST_ALL_PROJECTS` -- extract `ref` field (20 lowercase letters)
- **Organization slug**: `SUPABASE_LIST_ALL_ORGANIZATIONS` -- use `slug` (not `id`) for downstream org tools
- **Table names**: `SUPABASE_LIST_TABLES` -- enumerate available tables before querying
- **Schema discovery**: `SUPABASE_GET_TABLE_SCHEMAS` -- inspect columns and constraints before writes

### Pagination
- `SUPABASE_SELECT_FROM_TABLE`: Uses `offset` + `limit` pagination. Increment offset by limit until fewer rows than limit are returned.
- `SUPABASE_LIST_ALL_PROJECTS`: May paginate for large accounts; follow cursors/pages until exhausted.
- `SUPABASE_LIST_TABLES`: May paginate for large databases.

### SQL Best Practices
- Always use `SUPABASE_GET_TABLE_SCHEMAS` or `SUPABASE_LIST_TABLES` before writing SQL
- Use `read_only: true` for SELECT queries to prevent accidental mutations
- Quote case-sensitive identifiers: `SELECT * FROM "MyTable"` not `SELECT * FROM MyTable`
- Use PostgreSQL array syntax for array columns: `ARRAY['a', 'b']` not `['a', 'b']`
- Break complex DDL into smaller statements to avoid timeouts

#### Imported: Known Pitfalls

### ID Formats
- Project references are exactly 20 lowercase letters (a-z): pattern `^[a-z]{20}$`
- Organization identifiers come as both `id` (UUID) and `slug` (URL-friendly string); tools vary in which they accept
- `LIST_MEMBERS_OF_AN_ORGANIZATION` requires `slug`, not `id`

### SQL Execution
- `BETA_RUN_SQL_QUERY` has ~60 second timeout for complex operations
- PostgreSQL array syntax required: `ARRAY['item']` or `'{"item"}'`, NOT JSON syntax `'["item"]'`
- Case-sensitive identifiers must be double-quoted in SQL
- ERROR 42P01: relation does not exist (check quoting and schema prefix)
- ERROR 42883: function does not exist (use information_schema instead of custom helpers)

### Sensitive Data
- `GET_PROJECT_API_KEYS` returns service-role keys -- NEVER expose full values
- Auth config tools exclude secrets but may still contain sensitive configuration
- Always mask or truncate API keys in output

### Schema Metadata
- `row_count` and `size_bytes` from `LIST_TABLES` can be null; do not treat as zero
- System schemas are excluded by default; set `include_system_schemas: true` to see them
- Views appear alongside tables unless `include_views: false`

### Rate Limits and Permissions
- Enrichment tools (API keys, configs) may return 401/403 without proper scopes; skip gracefully
- Large table listings may require pagination
- `GETS_PROJECT_S_SERVICE_HEALTH_STATUS` fails with empty `services` array -- always specify at least one

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
