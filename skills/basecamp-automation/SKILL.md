---
name: basecamp-automation
description: "Basecamp Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Basecamp project management, to-dos, messages, people, and to-do list organization via Rube MCP (Composio). Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["basecamp-automation", "automate", "basecamp", "project", "management", "to-dos", "messages", "people"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Basecamp Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/basecamp-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Basecamp Automation via Rube MCP Automate Basecamp operations including project management, to-do list creation, task management, message board posting, people management, and to-do group organization through Composio's Basecamp toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Basecamp project management, to-dos, messages, people, and to-do list organization via Rube MCP (Composio). Always search tools first for current schemas.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Verify Rube MCP is available by confirming RUBESEARCHTOOLS responds
2. Call RUBEMANAGECONNECTIONS with toolkit basecamp
3. If connection is not ACTIVE, follow the returned auth link to complete Basecamp OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. BASECAMPGETPROJECTS - List projects to find the target bucket_id [Prerequisite]
6. BASECAMPGETBUCKETS_TODOSETS - Get the to-do set within a project [Prerequisite]
7. BASECAMPGETBUCKETSTODOSETSTODOLISTS - List existing to-do lists to avoid duplicates [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `basecamp`
3. If connection is not ACTIVE, follow the returned auth link to complete Basecamp OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Manage To-Do Lists and Tasks

**When to use**: User wants to create to-do lists, add tasks, or organize work within a Basecamp project

**Tool sequence**:
1. `BASECAMP_GET_PROJECTS` - List projects to find the target bucket_id [Prerequisite]
2. `BASECAMP_GET_BUCKETS_TODOSETS` - Get the to-do set within a project [Prerequisite]
3. `BASECAMP_GET_BUCKETS_TODOSETS_TODOLISTS` - List existing to-do lists to avoid duplicates [Optional]
4. `BASECAMP_POST_BUCKETS_TODOSETS_TODOLISTS` - Create a new to-do list in a to-do set [Required for list creation]
5. `BASECAMP_GET_BUCKETS_TODOLISTS` - Get details of a specific to-do list [Optional]
6. `BASECAMP_POST_BUCKETS_TODOLISTS_TODOS` - Create a to-do item in a to-do list [Required for task creation]
7. `BASECAMP_CREATE_TODO` - Alternative tool for creating individual to-dos [Alternative]
8. `BASECAMP_GET_BUCKETS_TODOLISTS_TODOS` - List to-dos within a to-do list [Optional]

**Key parameters for creating to-do lists**:
- `bucket_id`: Integer project/bucket ID (from GET_PROJECTS)
- `todoset_id`: Integer to-do set ID (from GET_BUCKETS_TODOSETS)
- `name`: Title of the to-do list (required)
- `description`: HTML-formatted description (supports Rich text)

**Key parameters for creating to-dos**:
- `bucket_id`: Integer project/bucket ID
- `todolist_id`: Integer to-do list ID
- `content`: What the to-do is for (required)
- `description`: HTML details about the to-do
- `assignee_ids`: Array of integer person IDs
- `due_on`: Due date in `YYYY-MM-DD` format
- `starts_on`: Start date in `YYYY-MM-DD` format
- `notify`: Boolean to notify assignees (defaults to false)
- `completion_subscriber_ids`: Person IDs notified upon completion

**Pitfalls**:
- A project (bucket) can contain multiple to-do sets; selecting the wrong `todoset_id` creates lists in the wrong section
- Always check existing to-do lists before creating to avoid near-duplicate names
- Success payloads include user-facing URLs (`app_url`, `app_todos_url`); prefer returning these over raw IDs
- All IDs (`bucket_id`, `todoset_id`, `todolist_id`) are integers, not strings
- Descriptions support HTML formatting only, not Markdown

### 2. Post and Manage Messages

**When to use**: User wants to post messages to a project message board or update existing messages

**Tool sequence**:
1. `BASECAMP_GET_PROJECTS` - Find the target project and bucket_id [Prerequisite]
2. `BASECAMP_GET_MESSAGE_BOARD` - Get the message board ID for the project [Prerequisite]
3. `BASECAMP_CREATE_MESSAGE` - Create a new message on the board [Required]
4. `BASECAMP_POST_BUCKETS_MESSAGE_BOARDS_MESSAGES` - Alternative message creation tool [Fallback]
5. `BASECAMP_GET_MESSAGE` - Read a specific message by ID [Optional]
6. `BASECAMP_PUT_BUCKETS_MESSAGES` - Update an existing message [Optional]

**Key parameters**:
- `bucket_id`: Integer project/bucket ID
- `message_board_id`: Integer message board ID (from GET_MESSAGE_BOARD)
- `subject`: Message title (required)
- `content`: HTML body of the message
- `status`: Set to `"active"` to publish immediately
- `category_id`: Message type classification (optional)
- `subscriptions`: Array of person IDs to notify; omit to notify all project members

**Pitfalls**:
- `status="draft"` can produce HTTP 400; use `status="active"` as the reliable option
- `bucket_id` and `message_board_id` must belong to the same project; mismatches fail or misroute
- Message content supports HTML tags only; not Markdown
- Updates via `PUT_BUCKETS_MESSAGES` replace the entire body -- include the full corrected content, not just a diff
- Prefer `app_url` from the response for user-facing confirmation links
- Both `CREATE_MESSAGE` and `POST_BUCKETS_MESSAGE_BOARDS_MESSAGES` do the same thing; use CREATE_MESSAGE first and fall back to POST if it fails

### 3. Manage People and Access

**When to use**: User wants to list people, manage project access, or add new users

**Tool sequence**:
1. `BASECAMP_GET_PEOPLE` - List all people visible to the current user [Required]
2. `BASECAMP_GET_PROJECTS` - Find the target project [Prerequisite]
3. `BASECAMP_LIST_PROJECT_PEOPLE` - List people on a specific project [Required]
4. `BASECAMP_GET_PROJECTS_PEOPLE` - Alternative to list project members [Alternative]
5. `BASECAMP_PUT_PROJECTS_PEOPLE_USERS` - Grant or revoke project access [Required for access changes]

**Key parameters for PUT_PROJECTS_PEOPLE_USERS**:
- `project_id`: Integer project ID
- `grant`: Array of integer person IDs to add to the project
- `revoke`: Array of integer person IDs to remove from the project
- `create`: Array of objects with `name`, `email_address`, and optional `company_name`, `title` for new users
- At least one of `grant`, `revoke`, or `create` must be provided

**Pitfalls**:
- Person IDs are integers; always resolve names to IDs via GET_PEOPLE first
- `project_id` for people management is the same as `bucket_id` for other operations
- `LIST_PROJECT_PEOPLE` and `GET_PROJECTS_PEOPLE` are near-identical; use either
- Creating users via `create` also grants them project access in one step

### 4. Organize To-Dos with Groups

**When to use**: User wants to organize to-dos within a list into color-coded groups

**Tool sequence**:
1. `BASECAMP_GET_PROJECTS` - Find the target project [Prerequisite]
2. `BASECAMP_GET_BUCKETS_TODOLISTS` - Get the to-do list details [Prerequisite]
3. `BASECAMP_GET_TODOLIST_GROUPS` - List existing groups in a to-do list [Optional]
4. `BASECAMP_GET_BUCKETS_TODOLISTS_GROUPS` - Alternative group listing [Alternative]
5. `BASECAMP_POST_BUCKETS_TODOLISTS_GROUPS` - Create a new group in a to-do list [Required]
6. `BASECAMP_CREATE_TODOLIST_GROUP` - Alternative group creation tool [Alternative]

**Key parameters**:
- `bucket_id`: Integer project/bucket ID
- `todolist_id`: Integer to-do list ID
- `name`: Group title (required)
- `color`: Visual color identifier -- one of: `white`, `red`, `orange`, `yellow`, `green`, `blue`, `aqua`, `purple`, `gray`, `pink`, `brown`
- `status`: Filter for listing -- `"archived"` or `"trashed"` (omit for active groups)

**Pitfalls**:
- `POST_BUCKETS_TODOLISTS_GROUPS` and `CREATE_TODOLIST_GROUP` are near-identical; use either
- Color values must be from the fixed palette; arbitrary hex/rgb values are not supported
- Groups are sub-sections within a to-do list, not standalone entities

### 5. Browse and Inspect Projects

**When to use**: User wants to list projects, get project details, or explore project structure

**Tool sequence**:
1. `BASECAMP_GET_PROJECTS` - List all active projects [Required]
2. `BASECAMP_GET_PROJECT` - Get comprehensive details for a specific project [Optional]
3. `BASECAMP_GET_PROJECTS_BY_PROJECT_ID` - Alternative project detail retrieval [Alternative]

**Key parameters**:
- `status`: Filter by `"archived"` or `"trashed"`; omit for active projects
- `project_id`: Integer project ID for detailed retrieval

**Pitfalls**:
- Projects are sorted by most recently created first
- The response includes a `dock` array with tools (todoset, message_board, etc.) and their IDs
- Use the dock tool IDs to find `todoset_id`, `message_board_id`, etc. for downstream operations

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Basecamp connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `basecamp`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @basecamp-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @basecamp-automation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @basecamp-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @basecamp-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/basecamp-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-mgmt-apicenter-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-applicationinsights-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List projects | `BASECAMP_GET_PROJECTS` | `status` |
| Get project | `BASECAMP_GET_PROJECT` | `project_id` |
| Get project detail | `BASECAMP_GET_PROJECTS_BY_PROJECT_ID` | `project_id` |
| Get to-do set | `BASECAMP_GET_BUCKETS_TODOSETS` | `bucket_id`, `todoset_id` |
| List to-do lists | `BASECAMP_GET_BUCKETS_TODOSETS_TODOLISTS` | `bucket_id`, `todoset_id` |
| Get to-do list | `BASECAMP_GET_BUCKETS_TODOLISTS` | `bucket_id`, `todolist_id` |
| Create to-do list | `BASECAMP_POST_BUCKETS_TODOSETS_TODOLISTS` | `bucket_id`, `todoset_id`, `name` |
| Create to-do | `BASECAMP_POST_BUCKETS_TODOLISTS_TODOS` | `bucket_id`, `todolist_id`, `content` |
| Create to-do (alt) | `BASECAMP_CREATE_TODO` | `bucket_id`, `todolist_id`, `content` |
| List to-dos | `BASECAMP_GET_BUCKETS_TODOLISTS_TODOS` | `bucket_id`, `todolist_id` |
| List to-do groups | `BASECAMP_GET_TODOLIST_GROUPS` | `bucket_id`, `todolist_id` |
| Create to-do group | `BASECAMP_POST_BUCKETS_TODOLISTS_GROUPS` | `bucket_id`, `todolist_id`, `name`, `color` |
| Create to-do group (alt) | `BASECAMP_CREATE_TODOLIST_GROUP` | `bucket_id`, `todolist_id`, `name` |
| Get message board | `BASECAMP_GET_MESSAGE_BOARD` | `bucket_id`, `message_board_id` |
| Create message | `BASECAMP_CREATE_MESSAGE` | `bucket_id`, `message_board_id`, `subject`, `status` |
| Create message (alt) | `BASECAMP_POST_BUCKETS_MESSAGE_BOARDS_MESSAGES` | `bucket_id`, `message_board_id`, `subject` |
| Get message | `BASECAMP_GET_MESSAGE` | `bucket_id`, `message_id` |
| Update message | `BASECAMP_PUT_BUCKETS_MESSAGES` | `bucket_id`, `message_id` |
| List all people | `BASECAMP_GET_PEOPLE` | (none) |
| List project people | `BASECAMP_LIST_PROJECT_PEOPLE` | `project_id` |
| Manage access | `BASECAMP_PUT_PROJECTS_PEOPLE_USERS` | `project_id`, `grant`, `revoke`, `create` |

#### Imported: Common Patterns

### ID Resolution
Basecamp uses a hierarchical ID structure. Always resolve top-down:
- **Project (bucket_id)**: `BASECAMP_GET_PROJECTS` -- find by name, capture the `id`
- **To-do set (todoset_id)**: Found in project dock or via `BASECAMP_GET_BUCKETS_TODOSETS`
- **Message board (message_board_id)**: Found in project dock or via `BASECAMP_GET_MESSAGE_BOARD`
- **To-do list (todolist_id)**: `BASECAMP_GET_BUCKETS_TODOSETS_TODOLISTS`
- **People (person_id)**: `BASECAMP_GET_PEOPLE` or `BASECAMP_LIST_PROJECT_PEOPLE`
- Note: `bucket_id` and `project_id` refer to the same entity in different contexts

### Pagination
Basecamp uses page-based pagination on list endpoints:
- Response headers or body may indicate more pages available
- `GET_PROJECTS`, `GET_BUCKETS_TODOSETS_TODOLISTS`, and list endpoints return paginated results
- Continue fetching until no more results are returned

### Content Formatting
- All rich text fields use HTML, not Markdown
- Wrap content in `<div>` tags; use `<strong>`, `<em>`, `<ul>`, `<ol>`, `<li>`, `<a>` etc.
- Example: `<div><strong>Important:</strong> Complete by Friday</div>`

#### Imported: Known Pitfalls

### ID Formats
- All Basecamp IDs are integers, not strings or UUIDs
- `bucket_id` = `project_id` (same entity, different parameter names across tools)
- To-do set IDs, to-do list IDs, and message board IDs are found in the project's `dock` array
- Person IDs are integers; resolve names via `GET_PEOPLE` before operations

### Status Field
- `status="draft"` for messages can cause HTTP 400; always use `status="active"`
- Project/to-do list status filters: `"archived"`, `"trashed"`, or omit for active

### Content Format
- HTML only, never Markdown
- Updates replace the entire body, not a partial diff
- Invalid HTML tags may be silently stripped

### Rate Limits
- Basecamp API has rate limits; space out rapid sequential requests
- Large projects with many to-dos should be paginated carefully

### URL Handling
- Prefer `app_url` from API responses for user-facing links
- Do not reconstruct Basecamp URLs manually from IDs

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
