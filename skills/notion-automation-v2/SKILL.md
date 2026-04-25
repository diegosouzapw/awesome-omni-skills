---
name: notion-automation-v2
description: "Notion Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Notion tasks via Rube MCP (Composio): pages, databases, blocks, comments, users. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["notion-automation-v2", "notion-automation", "automate", "notion", "tasks", "via", "rube", "mcp"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Notion Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/notion-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Notion Automation via Rube MCP Automate Notion operations through Composio's Notion toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Notion tasks via Rube MCP (Composio): pages, databases, blocks, comments, users. Always search tools first for current schemas.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. Verify Rube MCP is available by confirming RUBESEARCHTOOLS responds
2. Call RUBEMANAGECONNECTIONS with toolkit notion
3. If connection is not ACTIVE, follow the returned auth link to complete Notion OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. NOTIONSEARCHNOTION_PAGE - Find parent page or existing page [Prerequisite]
6. NOTIONCREATENOTION_PAGE - Create a new page under a parent [Optional]
7. NOTIONRETRIEVEPAGE - Get page metadata/properties [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `notion`
3. If connection is not ACTIVE, follow the returned auth link to complete Notion OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create and Manage Pages

**When to use**: User wants to create, update, or archive Notion pages

**Tool sequence**:
1. `NOTION_SEARCH_NOTION_PAGE` - Find parent page or existing page [Prerequisite]
2. `NOTION_CREATE_NOTION_PAGE` - Create a new page under a parent [Optional]
3. `NOTION_RETRIEVE_PAGE` - Get page metadata/properties [Optional]
4. `NOTION_UPDATE_PAGE` - Update page properties, title, icon, cover [Optional]
5. `NOTION_ARCHIVE_NOTION_PAGE` - Soft-delete (archive) a page [Optional]

**Key parameters**:
- `query`: Search text for SEARCH_NOTION_PAGE
- `parent_id`: Parent page or database ID
- `page_id`: Page ID for retrieval/update/archive
- `properties`: Page property values matching parent schema

**Pitfalls**:
- RETRIEVE_PAGE returns only metadata/properties, NOT body content; use FETCH_BLOCK_CONTENTS for page body
- ARCHIVE_NOTION_PAGE is a soft-delete (sets archived=true), not permanent deletion
- Broad searches can look incomplete unless has_more/next_cursor is fully paginated

### 2. Query and Manage Databases

**When to use**: User wants to query database rows, insert entries, or update records

**Tool sequence**:
1. `NOTION_SEARCH_NOTION_PAGE` - Find the database by name [Prerequisite]
2. `NOTION_FETCH_DATABASE` - Inspect schema and properties [Prerequisite]
3. `NOTION_QUERY_DATABASE` / `NOTION_QUERY_DATABASE_WITH_FILTER` - Query rows [Required]
4. `NOTION_INSERT_ROW_DATABASE` - Add new entries [Optional]
5. `NOTION_UPDATE_ROW_DATABASE` - Update existing entries [Optional]

**Key parameters**:
- `database_id`: Database ID (from search or URL)
- `filter`: Filter object matching Notion filter syntax
- `sorts`: Array of sort objects
- `start_cursor`: Pagination cursor from previous response
- `properties`: Property values matching database schema for inserts/updates

**Pitfalls**:
- 404 object_not_found usually means wrong database_id or the database is not shared with the integration
- Results are paginated; ignoring has_more/next_cursor silently truncates reads
- Schema mismatches or missing required properties cause 400 validation_error
- Formula and read-only fields cannot be set via INSERT_ROW_DATABASE
- Property names in filters must match schema exactly (case-sensitive)

### 3. Manage Blocks and Page Content

**When to use**: User wants to read, append, or modify content blocks in a page

**Tool sequence**:
1. `NOTION_FETCH_BLOCK_CONTENTS` - Read child blocks of a page [Required]
2. `NOTION_ADD_MULTIPLE_PAGE_CONTENT` - Append blocks to a page [Optional]
3. `NOTION_APPEND_TEXT_BLOCKS` - Append text-only blocks [Optional]
4. `NOTION_REPLACE_PAGE_CONTENT` - Replace all page content [Optional]
5. `NOTION_DELETE_BLOCK` - Remove a specific block [Optional]

**Key parameters**:
- `block_id` / `page_id`: Target page or block ID
- `content_blocks`: Array of block objects (NOT child_blocks)
- `text`: Plain text content for APPEND_TEXT_BLOCKS

**Pitfalls**:
- Use `content_blocks` parameter, NOT `child_blocks` -- the latter fails validation
- ADD_MULTIPLE_PAGE_CONTENT fails on archived pages; unarchive via UPDATE_PAGE first
- Created blocks are in response.data.results; persist block IDs for later edits
- DELETE_BLOCK is archival (archived=true), not permanent deletion

### 4. Manage Database Schema

**When to use**: User wants to create databases or modify their structure

**Tool sequence**:
1. `NOTION_FETCH_DATABASE` - Inspect current schema [Prerequisite]
2. `NOTION_CREATE_DATABASE` - Create a new database [Optional]
3. `NOTION_UPDATE_SCHEMA_DATABASE` - Modify database properties [Optional]

**Key parameters**:
- `parent_id`: Parent page ID for new databases
- `title`: Database title
- `properties`: Property definitions with types and options
- `database_id`: Database ID for schema updates

**Pitfalls**:
- Cannot change property types via UPDATE_SCHEMA; must create new property and migrate data
- Formula, rollup, and relation properties have complex configuration requirements

### 5. Manage Users and Comments

**When to use**: User wants to list workspace users or manage comments on pages

**Tool sequence**:
1. `NOTION_LIST_USERS` - List all workspace users [Optional]
2. `NOTION_GET_ABOUT_ME` - Get current authenticated user [Optional]
3. `NOTION_CREATE_COMMENT` - Add a comment to a page [Optional]
4. `NOTION_FETCH_COMMENTS` - List comments on a page [Optional]

**Key parameters**:
- `page_id`: Page ID for comments (also called `discussion_id`)
- `rich_text`: Comment content as rich text array

**Pitfalls**:
- Comments are linked to pages, not individual blocks
- User IDs from LIST_USERS are needed for people-type property filters

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Notion connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `notion`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @notion-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @notion-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @notion-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @notion-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/notion-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@n8n-validation-expert-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@n8n-workflow-patterns-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@nanobanana-ppt-skills-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@native-data-fetching-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| Search pages/databases | NOTION_SEARCH_NOTION_PAGE | query |
| Create page | NOTION_CREATE_NOTION_PAGE | parent_id, properties |
| Get page metadata | NOTION_RETRIEVE_PAGE | page_id |
| Update page | NOTION_UPDATE_PAGE | page_id, properties |
| Archive page | NOTION_ARCHIVE_NOTION_PAGE | page_id |
| Duplicate page | NOTION_DUPLICATE_PAGE | page_id |
| Get page blocks | NOTION_FETCH_BLOCK_CONTENTS | block_id |
| Append blocks | NOTION_ADD_MULTIPLE_PAGE_CONTENT | page_id, content_blocks |
| Append text | NOTION_APPEND_TEXT_BLOCKS | page_id, text |
| Replace content | NOTION_REPLACE_PAGE_CONTENT | page_id, content_blocks |
| Delete block | NOTION_DELETE_BLOCK | block_id |
| Query database | NOTION_QUERY_DATABASE | database_id, filter, sorts |
| Query with filter | NOTION_QUERY_DATABASE_WITH_FILTER | database_id, filter |
| Insert row | NOTION_INSERT_ROW_DATABASE | database_id, properties |
| Update row | NOTION_UPDATE_ROW_DATABASE | page_id, properties |
| Get database schema | NOTION_FETCH_DATABASE | database_id |
| Create database | NOTION_CREATE_DATABASE | parent_id, title, properties |
| Update schema | NOTION_UPDATE_SCHEMA_DATABASE | database_id, properties |
| List users | NOTION_LIST_USERS | (none) |
| Create comment | NOTION_CREATE_COMMENT | page_id, rich_text |
| List comments | NOTION_FETCH_COMMENTS | page_id |

#### Imported: Common Patterns

### ID Resolution

**Page/Database name -> ID**:
```
1. Call NOTION_SEARCH_NOTION_PAGE with query=name
2. Paginate with has_more/next_cursor until found
3. Extract id from matching result
```

**Database schema inspection**:
```
1. Call NOTION_FETCH_DATABASE with database_id
2. Extract properties object for field names and types
3. Use exact property names in queries and inserts
```

### Pagination

- Set `page_size` for results per page (max 100)
- Check response for `has_more` boolean
- Pass `start_cursor` or `next_cursor` in next request
- Continue until `has_more` is false

### Notion Filter Syntax

**Single filter**:
```json
{"property": "Status", "select": {"equals": "Done"}}
```

**Compound filter**:
```json
{"and": [
  {"property": "Status", "select": {"equals": "In Progress"}},
  {"property": "Assignee", "people": {"contains": "user-id"}}
]}
```

#### Imported: Known Pitfalls

**Integration Sharing**:
- Pages and databases must be shared with the Notion integration to be accessible
- Title queries can return 0 when the item is not shared with the integration

**Property Types**:
- Property names are case-sensitive and must match schema exactly
- Formula, rollup, and created_time fields are read-only
- Select/multi-select values must match existing options unless creating new ones

**Response Parsing**:
- Response data may be nested under `data_preview` or `data.results`
- Parse defensively with fallbacks for different nesting levels

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
