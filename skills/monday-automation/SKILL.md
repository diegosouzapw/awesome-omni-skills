---
name: monday-automation
description: "Monday.com Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Monday.com work management including boards, items, columns, groups, subitems, and updates via Rube MCP (Composio). Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["monday-automation", "automate", "monday", "com", "work", "management", "including", "boards"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Monday.com Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/monday-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Monday.com Automation via Rube MCP Automate Monday.com work management workflows including board creation, item management, column value updates, group organization, subitems, and update/comment threads through Composio's Monday toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Monday.com work management including boards, items, columns, groups, subitems, and updates via Rube MCP (Composio). Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit monday
3. If connection is not ACTIVE, follow the returned auth link to complete Monday.com OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. MONDAYGETWORKSPACES - List available workspaces and resolve workspace ID [Prerequisite]
6. MONDAYLISTBOARDS - List existing boards to check for duplicates [Optional]
7. MONDAYCREATEBOARD - Create a new board with name, kind, and workspace [Required]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `monday`
3. If connection is not ACTIVE, follow the returned auth link to complete Monday.com OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create and Manage Boards

**When to use**: User wants to create a new board, list existing boards, or set up workspace structure.

**Tool sequence**:
1. `MONDAY_GET_WORKSPACES` - List available workspaces and resolve workspace ID [Prerequisite]
2. `MONDAY_LIST_BOARDS` - List existing boards to check for duplicates [Optional]
3. `MONDAY_CREATE_BOARD` - Create a new board with name, kind, and workspace [Required]
4. `MONDAY_CREATE_COLUMN` - Add columns to the new board [Optional]
5. `MONDAY_CREATE_GROUP` - Add groups to organize items [Optional]
6. `MONDAY_BOARDS` - Retrieve detailed board metadata [Optional]

**Key parameters**:
- `board_name`: Name for the new board (required)
- `board_kind`: "public", "private", or "share" (required)
- `workspace_id`: Numeric workspace ID; omit for default workspace
- `folder_id`: Folder ID; must be within `workspace_id` if both provided
- `template_id`: ID of accessible template to clone

**Pitfalls**:
- `board_kind` is required and must be one of: "public", "private", "share"
- If both `workspace_id` and `folder_id` are provided, the folder must exist within that workspace
- `template_id` must reference a template the authenticated user can access
- Board IDs are large integers; always use the exact value from API responses

### 2. Create and Manage Items

**When to use**: User wants to add tasks/items to a board, list existing items, or move items between groups.

**Tool sequence**:
1. `MONDAY_LIST_BOARDS` - Resolve board name to board ID [Prerequisite]
2. `MONDAY_LIST_GROUPS` - List groups on the board to get group_id [Prerequisite]
3. `MONDAY_LIST_COLUMNS` - Get column IDs and types for setting values [Prerequisite]
4. `MONDAY_CREATE_ITEM` - Create a new item with name and column values [Required]
5. `MONDAY_LIST_BOARD_ITEMS` - List all items on the board [Optional]
6. `MONDAY_MOVE_ITEM_TO_GROUP` - Move an item to a different group [Optional]
7. `MONDAY_ITEMS_PAGE` - Paginated item retrieval with filtering [Optional]

**Key parameters**:
- `board_id`: Board ID (required, integer)
- `item_name`: Item name, max 256 characters (required)
- `group_id`: Group ID string to place the item in (optional)
- `column_values`: JSON object or string mapping column IDs to values

**Pitfalls**:
- `column_values` must use column IDs (not titles); get them from `MONDAY_LIST_COLUMNS`
- Column value formats vary by type: status uses `{"index": 0}` or `{"label": "Done"}`, date uses `{"date": "YYYY-MM-DD"}`, people uses `{"personsAndTeams": [{"id": 123, "kind": "person"}]}`
- `item_name` has a 256-character maximum
- Subitem boards are NOT supported by `MONDAY_CREATE_ITEM`; use GraphQL via `MONDAY_CREATE_OBJECT`

### 3. Update Item Column Values

**When to use**: User wants to change status, date, text, or other column values on existing items.

**Tool sequence**:
1. `MONDAY_LIST_COLUMNS` or `MONDAY_COLUMNS` - Get column IDs and types [Prerequisite]
2. `MONDAY_LIST_BOARD_ITEMS` or `MONDAY_ITEMS_PAGE` - Find the target item ID [Prerequisite]
3. `MONDAY_CHANGE_SIMPLE_COLUMN_VALUE` - Update text, status, or dropdown with a string value [Required]
4. `MONDAY_UPDATE_ITEM` - Update complex column types (timeline, people, date) with JSON [Required]

**Key parameters for MONDAY_CHANGE_SIMPLE_COLUMN_VALUE**:
- `board_id`: Board ID (integer, required)
- `item_id`: Item ID (integer, required)
- `column_id`: Column ID string (required)
- `value`: Simple string value (e.g., "Done", "Working on it")
- `create_labels_if_missing`: true to auto-create status/dropdown labels (default true)

**Key parameters for MONDAY_UPDATE_ITEM**:
- `board_id`: Board ID (integer, required)
- `item_id`: Item ID (integer, required)
- `column_id`: Column ID string (required)
- `value`: JSON object matching the column type schema
- `create_labels_if_missing`: false by default; set true for status/dropdown

**Pitfalls**:
- Use `MONDAY_CHANGE_SIMPLE_COLUMN_VALUE` for simple text/status/dropdown updates (string value)
- Use `MONDAY_UPDATE_ITEM` for complex types like timeline, people, date (JSON value)
- Column IDs are lowercase strings with underscores (e.g., "status_1", "date_2", "text"); get them from `MONDAY_LIST_COLUMNS`
- Status values can be set by label name ("Done") or index number ("1")
- `create_labels_if_missing` defaults differ: true for CHANGE_SIMPLE, false for UPDATE_ITEM

### 4. Work with Groups and Board Structure

**When to use**: User wants to organize items into groups, add columns, or inspect board structure.

**Tool sequence**:
1. `MONDAY_LIST_BOARDS` - Resolve board ID [Prerequisite]
2. `MONDAY_LIST_GROUPS` - List all groups on a board [Required]
3. `MONDAY_CREATE_GROUP` - Create a new group [Optional]
4. `MONDAY_LIST_COLUMNS` or `MONDAY_COLUMNS` - Inspect column structure [Required]
5. `MONDAY_CREATE_COLUMN` - Add a new column to the board [Optional]
6. `MONDAY_MOVE_ITEM_TO_GROUP` - Reorganize items across groups [Optional]

**Key parameters**:
- `board_id`: Board ID (required for all group/column operations)
- `group_name`: Name for new group (CREATE_GROUP)
- `column_type`: Must be a valid GraphQL enum token in snake_case (e.g., "status", "text", "long_text", "numbers", "date", "dropdown", "people")
- `title`: Column display title
- `defaults`: JSON string for status/dropdown labels, e.g., `'{"labels": ["To Do", "In Progress", "Done"]}'`

**Pitfalls**:
- `column_type` must be exact snake_case values; "person" is NOT valid, use "people"
- Group IDs are strings (e.g., "topics", "new_group_12345"), not integers
- `MONDAY_COLUMNS` accepts an array of `board_ids` and returns column metadata including settings
- `MONDAY_LIST_COLUMNS` is simpler and takes a single `board_id`

### 5. Manage Subitems and Updates

**When to use**: User wants to view subitems of a task or add comments/updates to items.

**Tool sequence**:
1. `MONDAY_LIST_BOARD_ITEMS` - Find parent item IDs [Prerequisite]
2. `MONDAY_LIST_SUBITEMS_BY_PARENT` - Retrieve subitems with column values [Required]
3. `MONDAY_CREATE_UPDATE` - Add a comment/update to an item [Optional]
4. `MONDAY_CREATE_OBJECT` - Create subitems via GraphQL mutation [Optional]

**Key parameters for MONDAY_LIST_SUBITEMS_BY_PARENT**:
- `parent_item_ids`: Array of parent item IDs (integer array, required)
- `include_column_values`: true to include column data (default true)
- `include_parent_fields`: true to include parent item info (default true)

**Key parameters for MONDAY_CREATE_OBJECT** (GraphQL):
- `query`: Full GraphQL mutation string
- `variables`: Optional variables object

**Pitfalls**:
- Subitems can only be queried through their parent items
- To create subitems, use `MONDAY_CREATE_OBJECT` with a `create_subitem` GraphQL mutation
- `MONDAY_CREATE_UPDATE` is for adding comments/updates to items (Monday's "updates" feature), not for modifying item values
- `MONDAY_CREATE_OBJECT` is a raw GraphQL endpoint; ensure correct mutation syntax

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Monday.com connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `monday`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @monday-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @monday-automation against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @monday-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @monday-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/monday-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@lint-and-validate` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linux-shell-scripting` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linux-troubleshooting` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@llm-app-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List workspaces | `MONDAY_GET_WORKSPACES` | `kind`, `state`, `limit` |
| Create workspace | `MONDAY_CREATE_WORKSPACE` | `name`, `kind` |
| List boards | `MONDAY_LIST_BOARDS` | `limit`, `page`, `state` |
| Create board | `MONDAY_CREATE_BOARD` | `board_name`, `board_kind`, `workspace_id` |
| Get board metadata | `MONDAY_BOARDS` | `board_ids`, `board_kind` |
| List groups | `MONDAY_LIST_GROUPS` | `board_id` |
| Create group | `MONDAY_CREATE_GROUP` | `board_id`, `group_name` |
| List columns | `MONDAY_LIST_COLUMNS` | `board_id` |
| Get column metadata | `MONDAY_COLUMNS` | `board_ids`, `column_types` |
| Create column | `MONDAY_CREATE_COLUMN` | `board_id`, `column_type`, `title` |
| Create item | `MONDAY_CREATE_ITEM` | `board_id`, `item_name`, `column_values` |
| List board items | `MONDAY_LIST_BOARD_ITEMS` | `board_id` |
| Paginated items | `MONDAY_ITEMS_PAGE` | `board_id`, `limit`, `query_params` |
| Update column (simple) | `MONDAY_CHANGE_SIMPLE_COLUMN_VALUE` | `board_id`, `item_id`, `column_id`, `value` |
| Update column (complex) | `MONDAY_UPDATE_ITEM` | `board_id`, `item_id`, `column_id`, `value` |
| Move item to group | `MONDAY_MOVE_ITEM_TO_GROUP` | `item_id`, `group_id` |
| List subitems | `MONDAY_LIST_SUBITEMS_BY_PARENT` | `parent_item_ids` |
| Add comment/update | `MONDAY_CREATE_UPDATE` | `item_id`, `body` |
| Raw GraphQL mutation | `MONDAY_CREATE_OBJECT` | `query`, `variables` |

#### Imported: Common Patterns

### ID Resolution
Always resolve display names to IDs before operations:
- **Board name -> board_id**: `MONDAY_LIST_BOARDS` and match by name
- **Group name -> group_id**: `MONDAY_LIST_GROUPS` with `board_id`
- **Column title -> column_id**: `MONDAY_LIST_COLUMNS` with `board_id`
- **Workspace name -> workspace_id**: `MONDAY_GET_WORKSPACES` and match by name
- **Item name -> item_id**: `MONDAY_LIST_BOARD_ITEMS` or `MONDAY_ITEMS_PAGE`

### Pagination
Monday.com uses cursor-based pagination for items:
- `MONDAY_ITEMS_PAGE` returns a `cursor` in the response for the next page
- Pass the `cursor` to the next call; `board_id` and `query_params` are ignored when cursor is provided
- Cursors are cached for 60 minutes
- Maximum `limit` is 500 per page
- `MONDAY_LIST_BOARDS` and `MONDAY_GET_WORKSPACES` use page-based pagination with `page` and `limit`

### Column Value Formatting
Different column types require different value formats:
- **Status**: `{"index": 0}` or `{"label": "Done"}` or simple string "Done"
- **Date**: `{"date": "YYYY-MM-DD"}`
- **People**: `{"personsAndTeams": [{"id": 123, "kind": "person"}]}`
- **Text/Numbers**: Plain string or number
- **Timeline**: `{"from": "YYYY-MM-DD", "to": "YYYY-MM-DD"}`

#### Imported: Known Pitfalls

### ID Formats
- Board IDs and item IDs are large integers (e.g., 1234567890)
- Group IDs are strings (e.g., "topics", "new_group_12345")
- Column IDs are short strings (e.g., "status_1", "date4", "text")
- Workspace IDs are integers

### Rate Limits
- Monday.com GraphQL API has complexity-based rate limits
- Large boards with many columns increase query complexity
- Use `limit` parameter to reduce items per request if hitting limits

### Parameter Quirks
- `column_type` for CREATE_COLUMN must be exact snake_case enum values; "people" not "person"
- `column_values` in CREATE_ITEM accepts both JSON string and object formats
- `MONDAY_CHANGE_SIMPLE_COLUMN_VALUE` auto-creates missing labels by default; `MONDAY_UPDATE_ITEM` does not
- `MONDAY_CREATE_OBJECT` is a raw GraphQL interface; use it for operations without dedicated tools (e.g., create_subitem, delete_item, archive_board)

### Response Structure
- Board items are returned as arrays with `id`, `name`, and `state` fields
- Column values include both raw `value` (JSON) and rendered `text` (display string)
- Subitems are nested under parent items and cannot be queried independently

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
