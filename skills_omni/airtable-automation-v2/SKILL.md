---
name: "airtable-automation-v2"
description: "Airtable Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Airtable tasks via Rube MCP (Composio): records, bases, tables, fields, views. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "cli-automation"
tags:
  - "airtable-automation-v2"
  - "airtable-automation"
  - "automate"
  - "airtable"
  - "tasks"
  - "via"
  - "rube"
  - "mcp"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-15"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "airtable-automation-v2"
family_name: "Airtable Automation via Rube MCP"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/airtable-automation-v2"
upstream_skill: "skills/airtable-automation-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "37"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "8fab9480d35a3f46aca4c7314a9d34bd60d77f92"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "airtable-automation-v2"
---

# Airtable Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/airtable-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Airtable Automation via Rube MCP Automate Airtable operations through Composio's Airtable toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Airtable tasks via Rube MCP (Composio): records, bases, tables, fields, views. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit airtable
3. If connection is not ACTIVE, follow the returned auth link to complete Airtable auth
4. Confirm connection status shows ACTIVE before running any workflows
5. AIRTABLELISTBASES - Discover available bases [Prerequisite]
6. AIRTABLEGETBASE_SCHEMA - Inspect table structure [Prerequisite]
7. AIRTABLELISTRECORDS - List/filter records [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `airtable`
3. If connection is not ACTIVE, follow the returned auth link to complete Airtable auth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create and Manage Records

**When to use**: User wants to create, read, update, or delete records

**Tool sequence**:
1. `AIRTABLE_LIST_BASES` - Discover available bases [Prerequisite]
2. `AIRTABLE_GET_BASE_SCHEMA` - Inspect table structure [Prerequisite]
3. `AIRTABLE_LIST_RECORDS` - List/filter records [Optional]
4. `AIRTABLE_CREATE_RECORD` / `AIRTABLE_CREATE_RECORDS` - Create records [Optional]
5. `AIRTABLE_UPDATE_RECORD` / `AIRTABLE_UPDATE_MULTIPLE_RECORDS` - Update records [Optional]
6. `AIRTABLE_DELETE_RECORD` / `AIRTABLE_DELETE_MULTIPLE_RECORDS` - Delete records [Optional]

**Key parameters**:
- `baseId`: Base ID (starts with 'app', e.g., 'appXXXXXXXXXXXXXX')
- `tableIdOrName`: Table ID (starts with 'tbl') or table name
- `fields`: Object mapping field names to values
- `recordId`: Record ID (starts with 'rec') for updates/deletes
- `filterByFormula`: Airtable formula for filtering
- `typecast`: Set true for automatic type conversion

**Pitfalls**:
- pageSize capped at 100; uses offset pagination; changing filters between pages can skip/duplicate rows
- CREATE_RECORDS hard limit of 10 records per request; chunk larger imports
- Field names are CASE-SENSITIVE and must match schema exactly
- 422 UNKNOWN_FIELD_NAME when field names are wrong; 403 for permission issues
- INVALID_MULTIPLE_CHOICE_OPTIONS may require typecast=true

### 2. Search and Filter Records

**When to use**: User wants to find specific records using formulas

**Tool sequence**:
1. `AIRTABLE_GET_BASE_SCHEMA` - Verify field names and types [Prerequisite]
2. `AIRTABLE_LIST_RECORDS` - Query with filterByFormula [Required]
3. `AIRTABLE_GET_RECORD` - Get full record details [Optional]

**Key parameters**:
- `filterByFormula`: Airtable formula (e.g., `{Status}='Done'`)
- `sort`: Array of sort objects
- `fields`: Array of field names to return
- `maxRecords`: Max total records across all pages
- `offset`: Pagination cursor from previous response

**Pitfalls**:
- Field names in formulas must be wrapped in `{}` and match schema exactly
- String values must be quoted: `{Status}='Active'` not `{Status}=Active`
- 422 INVALID_FILTER_BY_FORMULA for bad syntax or non-existent fields
- Airtable rate limit: ~5 requests/second per base; handle 429 with Retry-After

### 3. Manage Fields and Schema

**When to use**: User wants to create or modify table fields

**Tool sequence**:
1. `AIRTABLE_GET_BASE_SCHEMA` - Inspect current schema [Prerequisite]
2. `AIRTABLE_CREATE_FIELD` - Create a new field [Optional]
3. `AIRTABLE_UPDATE_FIELD` - Rename/describe a field [Optional]
4. `AIRTABLE_UPDATE_TABLE` - Update table metadata [Optional]

**Key parameters**:
- `name`: Field name
- `type`: Field type (singleLineText, number, singleSelect, etc.)
- `options`: Type-specific options (choices for select, precision for number)
- `description`: Field description

**Pitfalls**:
- UPDATE_FIELD only changes name/description, NOT type/options; create a replacement field and migrate
- Computed fields (formula, rollup, lookup) cannot be created via API
- 422 when type options are missing or malformed

### 4. Manage Comments

**When to use**: User wants to view or add comments on records

**Tool sequence**:
1. `AIRTABLE_LIST_COMMENTS` - List comments on a record [Required]

**Key parameters**:
- `baseId`: Base ID
- `tableIdOrName`: Table identifier
- `recordId`: Record ID (17 chars, starts with 'rec')
- `pageSize`: Comments per page (max 100)

**Pitfalls**:
- Record IDs must be exactly 17 characters starting with 'rec'

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Airtable connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `airtable`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @airtable-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @airtable-automation-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @airtable-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @airtable-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/airtable-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List bases | AIRTABLE_LIST_BASES | (none) |
| Get schema | AIRTABLE_GET_BASE_SCHEMA | baseId |
| List records | AIRTABLE_LIST_RECORDS | baseId, tableIdOrName |
| Get record | AIRTABLE_GET_RECORD | baseId, tableIdOrName, recordId |
| Create record | AIRTABLE_CREATE_RECORD | baseId, tableIdOrName, fields |
| Create records | AIRTABLE_CREATE_RECORDS | baseId, tableIdOrName, records |
| Update record | AIRTABLE_UPDATE_RECORD | baseId, tableIdOrName, recordId, fields |
| Update records | AIRTABLE_UPDATE_MULTIPLE_RECORDS | baseId, tableIdOrName, records |
| Delete record | AIRTABLE_DELETE_RECORD | baseId, tableIdOrName, recordId |
| Create field | AIRTABLE_CREATE_FIELD | baseId, tableIdOrName, name, type |
| Update field | AIRTABLE_UPDATE_FIELD | baseId, tableIdOrName, fieldId |
| Update table | AIRTABLE_UPDATE_TABLE | baseId, tableIdOrName, name |
| List comments | AIRTABLE_LIST_COMMENTS | baseId, tableIdOrName, recordId |

#### Imported: Common Patterns

### Airtable Formula Syntax

**Comparison**:
- `{Status}='Done'` - Equals
- `{Priority}>1` - Greater than
- `{Name}!=''` - Not empty

**Functions**:
- `AND({A}='x', {B}='y')` - Both conditions
- `OR({A}='x', {A}='y')` - Either condition
- `FIND('test', {Name})>0` - Contains text
- `IS_BEFORE({Due Date}, TODAY())` - Date comparison

**Escape rules**:
- Single quotes in values: double them (`{Name}='John''s Company'`)

### Pagination

- Set `pageSize` (max 100)
- Check response for `offset` string
- Pass `offset` to next request unchanged
- Keep filters/sorts/view stable between pages

#### Imported: Known Pitfalls

**ID Formats**:
- Base IDs: `appXXXXXXXXXXXXXX` (17 chars)
- Table IDs: `tblXXXXXXXXXXXXXX` (17 chars)
- Record IDs: `recXXXXXXXXXXXXXX` (17 chars)
- Field IDs: `fldXXXXXXXXXXXXXX` (17 chars)

**Batch Limits**:
- CREATE_RECORDS: max 10 per request
- UPDATE_MULTIPLE_RECORDS: max 10 per request
- DELETE_MULTIPLE_RECORDS: max 10 per request

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
