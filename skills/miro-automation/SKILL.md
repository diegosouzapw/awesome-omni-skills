---
name: miro-automation
description: "Miro Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Miro tasks via Rube MCP (Composio): boards, items, sticky notes, frames, sharing, connectors. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["miro-automation", "automate", "miro", "tasks", "via", "rube", "mcp", "composio"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Miro Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/miro-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Miro Automation via Rube MCP Automate Miro whiteboard operations through Composio's Miro toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Miro tasks via Rube MCP (Composio): boards, items, sticky notes, frames, sharing, connectors. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit miro
3. If connection is not ACTIVE, follow the returned auth link to complete Miro OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. MIROGETBOARDS2 - List all accessible boards [Required]
6. MIROGETBOARD - Get detailed info for a specific board [Optional]
7. query: Search term to filter boards by name

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `miro`
3. If connection is not ACTIVE, follow the returned auth link to complete Miro OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. List and Browse Boards

**When to use**: User wants to find boards or get board details

**Tool sequence**:
1. `MIRO_GET_BOARDS2` - List all accessible boards [Required]
2. `MIRO_GET_BOARD` - Get detailed info for a specific board [Optional]

**Key parameters**:
- `query`: Search term to filter boards by name
- `sort`: Sort by 'default', 'last_modified', 'last_opened', 'last_created', 'alphabetically'
- `limit`: Number of results per page (max 50)
- `offset`: Pagination offset
- `board_id`: Specific board ID for detailed retrieval

**Pitfalls**:
- Pagination uses offset-based approach, not cursor-based
- Maximum 50 boards per page; iterate with offset for full list
- Board IDs are long alphanumeric strings; always resolve by search first

### 2. Create Boards and Items

**When to use**: User wants to create a new board or add items to an existing board

**Tool sequence**:
1. `MIRO_CREATE_BOARD` - Create a new empty board [Optional]
2. `MIRO_CREATE_STICKY_NOTE_ITEM` - Add sticky notes to a board [Optional]
3. `MIRO_CREATE_FRAME_ITEM2` - Add frames to organize content [Optional]
4. `MIRO_CREATE_ITEMS_IN_BULK` - Add multiple items at once [Optional]

**Key parameters**:
- `name` / `description`: Board name and description (for CREATE_BOARD)
- `board_id`: Target board ID (required for all item creation)
- `data`: Content object with `content` field for sticky note text
- `style`: Styling object with `fillColor` for sticky note color
- `position`: Object with `x` and `y` coordinates
- `geometry`: Object with `width` and `height`

**Pitfalls**:
- `board_id` is required for ALL item operations; resolve via GET_BOARDS2 first
- Sticky note colors use hex codes (e.g., '#FF0000') in the `fillColor` field
- Position coordinates use the board's coordinate system (origin at center)
- BULK create has a maximum items-per-request limit; check current schema
- Frame items require `geometry` with both width and height

### 3. Browse and Manage Board Items

**When to use**: User wants to view, find, or organize items on a board

**Tool sequence**:
1. `MIRO_GET_BOARD_ITEMS` - List all items on a board [Required]
2. `MIRO_GET_CONNECTORS2` - List connections between items [Optional]

**Key parameters**:
- `board_id`: Target board ID (required)
- `type`: Filter by item type ('sticky_note', 'shape', 'text', 'frame', 'image', 'card')
- `limit`: Number of items per page
- `cursor`: Pagination cursor from previous response

**Pitfalls**:
- Results are paginated; follow `cursor` until absent for complete item list
- Item types must match Miro's predefined types exactly
- Large boards may have thousands of items; use type filtering to narrow results
- Connectors are separate from items; use GET_CONNECTORS2 for relationship data

### 4. Share and Collaborate on Boards

**When to use**: User wants to share a board with team members or manage access

**Tool sequence**:
1. `MIRO_GET_BOARDS2` - Find the board to share [Prerequisite]
2. `MIRO_SHARE_BOARD` - Share the board with users [Required]
3. `MIRO_GET_BOARD_MEMBERS` - Verify current board members [Optional]

**Key parameters**:
- `board_id`: Board to share (required)
- `emails`: Array of email addresses to invite
- `role`: Access level ('viewer', 'commenter', 'editor')
- `message`: Optional invitation message

**Pitfalls**:
- Email addresses must be valid; invalid emails cause the entire request to fail
- Role must be one of the predefined values; case-sensitive
- Sharing with users outside the organization may require admin approval
- GET_BOARD_MEMBERS returns all members including the owner

### 5. Create Visual Connections

**When to use**: User wants to connect items on a board with lines or arrows

**Tool sequence**:
1. `MIRO_GET_BOARD_ITEMS` - Find items to connect [Prerequisite]
2. `MIRO_GET_CONNECTORS2` - View existing connections [Optional]

**Key parameters**:
- `board_id`: Target board ID
- `startItem`: Object with `id` of the source item
- `endItem`: Object with `id` of the target item
- `style`: Connector style (line type, color, arrows)

**Pitfalls**:
- Both start and end items must exist on the same board
- Item IDs are required for connections; resolve via GET_BOARD_ITEMS first
- Connector styles vary; check available options in schema
- Self-referencing connections (same start and end) are not allowed

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Miro connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `miro`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @miro-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @miro-automation against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @miro-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @miro-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/miro-automation`, fails to mention provenance, or does not use any copied source files at all.
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
| List boards | MIRO_GET_BOARDS2 | query, sort, limit, offset |
| Get board details | MIRO_GET_BOARD | board_id |
| Create board | MIRO_CREATE_BOARD | name, description |
| Add sticky note | MIRO_CREATE_STICKY_NOTE_ITEM | board_id, data, style, position |
| Add frame | MIRO_CREATE_FRAME_ITEM2 | board_id, data, geometry, position |
| Bulk add items | MIRO_CREATE_ITEMS_IN_BULK | board_id, items |
| Get board items | MIRO_GET_BOARD_ITEMS | board_id, type, cursor |
| Share board | MIRO_SHARE_BOARD | board_id, emails, role |
| Get members | MIRO_GET_BOARD_MEMBERS | board_id |
| Get connectors | MIRO_GET_CONNECTORS2 | board_id |

#### Imported: Common Patterns

### ID Resolution

**Board name -> Board ID**:
```
1. Call MIRO_GET_BOARDS2 with query=board_name
2. Find board by name in results
3. Extract id field
```

**Item lookup on board**:
```
1. Call MIRO_GET_BOARD_ITEMS with board_id and optional type filter
2. Find item by content or position
3. Extract item id for further operations
```

### Pagination

- Boards: Use `offset` and `limit` (offset-based)
- Board items: Use `cursor` and `limit` (cursor-based)
- Continue until no more results or cursor is absent
- Default page sizes vary by endpoint

### Coordinate System

- Board origin (0,0) is at the center
- Positive X is right, positive Y is down
- Items positioned by their center point
- Use `position: {x: 0, y: 0}` for center of board
- Frames define bounded areas; items inside inherit frame position

#### Imported: Known Pitfalls

**Board IDs**:
- Board IDs are required for virtually all operations
- Always resolve board names to IDs via GET_BOARDS2 first
- Do not hardcode board IDs; they vary by account

**Item Creation**:
- Each item type has different required fields
- Sticky notes need `data.content` for text
- Frames need `geometry.width` and `geometry.height`
- Position defaults to (0,0) if not specified; items may overlap

**Rate Limits**:
- Miro API has rate limits per token
- Bulk operations preferred over individual item creation
- Use MIRO_CREATE_ITEMS_IN_BULK for multiple items

**Response Parsing**:
- Response data may be nested under `data` key
- Item types determine which fields are present in response
- Parse defensively; optional fields may be absent

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
