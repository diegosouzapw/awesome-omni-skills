---
name: clickup-automation-v2
description: "ClickUp Automation via Rube MCP workflow skill. Use this skill when the user needs Automate ClickUp project management including tasks, spaces, folders, lists, comments, and team operations via Rube MCP (Composio). Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["clickup-automation-v2", "clickup-automation", "automate", "clickup", "project", "management", "including", "tasks"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# ClickUp Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/clickup-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# ClickUp Automation via Rube MCP Automate ClickUp project management workflows including task creation and updates, workspace hierarchy navigation, comments, and team member management through Composio's ClickUp toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate ClickUp project management including tasks, spaces, folders, lists, comments, and team operations via Rube MCP (Composio). Always search tools first for current schemas.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. Verify Rube MCP is available by confirming RUBESEARCHTOOLS responds
2. Call RUBEMANAGECONNECTIONS with toolkit clickup
3. If connection is not ACTIVE, follow the returned auth link to complete ClickUp OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. CLICKUPGETAUTHORIZEDTEAMSWORKSPACES - Get workspace/team IDs [Prerequisite]
6. CLICKUPGETSPACES - List spaces in the workspace [Prerequisite]
7. CLICKUPGETFOLDERS - List folders in a space [Prerequisite]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `clickup`
3. If connection is not ACTIVE, follow the returned auth link to complete ClickUp OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create and Manage Tasks

**When to use**: User wants to create tasks, subtasks, update task properties, or list tasks in a ClickUp list.

**Tool sequence**:
1. `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` - Get workspace/team IDs [Prerequisite]
2. `CLICKUP_GET_SPACES` - List spaces in the workspace [Prerequisite]
3. `CLICKUP_GET_FOLDERS` - List folders in a space [Prerequisite]
4. `CLICKUP_GET_FOLDERLESS_LISTS` - Get lists not inside folders [Optional]
5. `CLICKUP_GET_LIST` - Validate list and check available statuses [Prerequisite]
6. `CLICKUP_CREATE_TASK` - Create a task in the target list [Required]
7. `CLICKUP_CREATE_TASK` (with `parent`) - Create subtask under a parent task [Optional]
8. `CLICKUP_UPDATE_TASK` - Modify task status, assignees, dates, priority [Optional]
9. `CLICKUP_GET_TASK` - Retrieve full task details [Optional]
10. `CLICKUP_GET_TASKS` - List all tasks in a list with filters [Optional]
11. `CLICKUP_DELETE_TASK` - Permanently remove a task [Optional]

**Key parameters for CLICKUP_CREATE_TASK**:
- `list_id`: Target list ID (integer, required)
- `name`: Task name (string, required)
- `description`: Detailed task description
- `status`: Must exactly match (case-sensitive) a status name configured in the target list
- `priority`: 1 (Urgent), 2 (High), 3 (Normal), 4 (Low)
- `assignees`: Array of user IDs (integers)
- `due_date`: Unix timestamp in milliseconds
- `parent`: Parent task ID string for creating subtasks
- `tags`: Array of tag name strings
- `time_estimate`: Estimated time in milliseconds

**Pitfalls**:
- `status` is case-sensitive and must match an existing status in the list; use `CLICKUP_GET_LIST` to check available statuses
- `due_date` and `start_date` are Unix timestamps in **milliseconds**, not seconds
- Subtask `parent` must be a task (not another subtask) in the same list
- `notify_all` triggers watcher notifications; set to false for bulk operations
- Retries can create duplicates; track created task IDs to avoid re-creation
- `custom_item_id` for milestones (ID 1) is subject to workspace plan quotas

### 2. Navigate Workspace Hierarchy

**When to use**: User wants to browse or manage the ClickUp workspace structure (Workspaces > Spaces > Folders > Lists).

**Tool sequence**:
1. `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` - List all accessible workspaces [Required]
2. `CLICKUP_GET_SPACES` - List spaces within a workspace [Required]
3. `CLICKUP_GET_SPACE` - Get details for a specific space [Optional]
4. `CLICKUP_GET_FOLDERS` - List folders in a space [Required]
5. `CLICKUP_GET_FOLDER` - Get details for a specific folder [Optional]
6. `CLICKUP_CREATE_FOLDER` - Create a new folder in a space [Optional]
7. `CLICKUP_GET_FOLDERLESS_LISTS` - List lists not inside any folder [Required]
8. `CLICKUP_GET_LIST` - Get list details including statuses and custom fields [Optional]

**Key parameters**:
- `team_id`: Workspace ID from GET_AUTHORIZED_TEAMS_WORKSPACES (required for spaces)
- `space_id`: Space ID (required for folders and folderless lists)
- `folder_id`: Folder ID (required for GET_FOLDER)
- `list_id`: List ID (required for GET_LIST)
- `archived`: Boolean filter for archived/active items

**Pitfalls**:
- ClickUp hierarchy is: Workspace (Team) > Space > Folder > List > Task
- Lists can exist directly under Spaces (folderless) or inside Folders
- Must use `CLICKUP_GET_FOLDERLESS_LISTS` to find lists not inside folders; `CLICKUP_GET_FOLDERS` only returns folders
- `team_id` in ClickUp API refers to the Workspace ID, not a user group

### 3. Add Comments to Tasks

**When to use**: User wants to add comments, review existing comments, or manage comment threads on tasks.

**Tool sequence**:
1. `CLICKUP_GET_TASK` - Verify task exists and get task_id [Prerequisite]
2. `CLICKUP_CREATE_TASK_COMMENT` - Add a new comment to the task [Required]
3. `CLICKUP_GET_TASK_COMMENTS` - List existing comments on the task [Optional]
4. `CLICKUP_UPDATE_COMMENT` - Edit comment text, assignee, or resolution status [Optional]

**Key parameters for CLICKUP_CREATE_TASK_COMMENT**:
- `task_id`: Task ID string (required)
- `comment_text`: Comment content with ClickUp formatting support (required)
- `assignee`: User ID to assign the comment to (required)
- `notify_all`: true/false for watcher notifications (required)

**Key parameters for CLICKUP_GET_TASK_COMMENTS**:
- `task_id`: Task ID string (required)
- `start` / `start_id`: Pagination for older comments (max 25 per page)

**Pitfalls**:
- `CLICKUP_CREATE_TASK_COMMENT` requires all four fields: `task_id`, `comment_text`, `assignee`, and `notify_all`
- `assignee` on a comment assigns the comment (not the task) to that user
- Comments are paginated at 25 per page; use `start` (Unix ms) and `start_id` for older pages
- `CLICKUP_UPDATE_COMMENT` requires all four fields: `comment_id`, `comment_text`, `assignee`, `resolved`

### 4. Manage Team Members and Assignments

**When to use**: User wants to view workspace members, check seat utilization, or look up user details.

**Tool sequence**:
1. `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` - List workspaces and get team_id [Required]
2. `CLICKUP_GET_WORKSPACE_SEATS` - Check seat utilization (members vs guests) [Required]
3. `CLICKUP_GET_TEAMS` - List user groups within the workspace [Optional]
4. `CLICKUP_GET_USER` - Get details for a specific user (Enterprise only) [Optional]
5. `CLICKUP_GET_CUSTOM_ROLES` - List custom permission roles [Optional]

**Key parameters**:
- `team_id`: Workspace ID (required for all team operations)
- `user_id`: Specific user ID for GET_USER
- `group_ids`: Comma-separated group IDs to filter teams

**Pitfalls**:
- `CLICKUP_GET_WORKSPACE_SEATS` returns seat counts, not member details; distinguish members from guests
- `CLICKUP_GET_TEAMS` returns user groups, not workspace members; empty groups does not mean no members
- `CLICKUP_GET_USER` is only available on ClickUp Enterprise Plan
- Must repeat workspace seat queries for each workspace in multi-workspace setups

### 5. Filter and Query Tasks

**When to use**: User wants to find tasks with specific filters (status, assignee, dates, tags, custom fields).

**Tool sequence**:
1. `CLICKUP_GET_TASKS` - Filter tasks in a list with multiple criteria [Required]
2. `CLICKUP_GET_TASK` - Get full details for individual tasks [Optional]

**Key parameters for CLICKUP_GET_TASKS**:
- `list_id`: List ID (integer, required)
- `statuses`: Array of status strings to filter by
- `assignees`: Array of user ID strings
- `tags`: Array of tag name strings
- `due_date_gt` / `due_date_lt`: Unix timestamp in ms for date range
- `include_closed`: Boolean to include closed tasks
- `subtasks`: Boolean to include subtasks
- `order_by`: "id", "created", "updated", or "due_date"
- `page`: Page number starting at 0 (max 100 tasks per page)

**Pitfalls**:
- Only tasks whose home list matches `list_id` are returned; tasks in sublists are not included
- Date filters use Unix timestamps in milliseconds
- Status strings must match exactly; use URL encoding for spaces (e.g., "to%20do")
- Page numbering starts at 0; each page returns up to 100 tasks
- `custom_fields` filter accepts an array of JSON strings, not objects

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active ClickUp connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `clickup`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @clickup-automation-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/clickup-automation-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/clickup-automation-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @clickup-automation-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/clickup-automation`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Quick Reference

| Task | Tool Slug | Key Params |
|------|-----------|------------|
| List workspaces | `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` | (none) |
| List spaces | `CLICKUP_GET_SPACES` | `team_id` |
| Get space details | `CLICKUP_GET_SPACE` | `space_id` |
| List folders | `CLICKUP_GET_FOLDERS` | `space_id` |
| Get folder details | `CLICKUP_GET_FOLDER` | `folder_id` |
| Create folder | `CLICKUP_CREATE_FOLDER` | `space_id`, `name` |
| Folderless lists | `CLICKUP_GET_FOLDERLESS_LISTS` | `space_id` |
| Get list details | `CLICKUP_GET_LIST` | `list_id` |
| Create task | `CLICKUP_CREATE_TASK` | `list_id`, `name`, `status`, `assignees` |
| Update task | `CLICKUP_UPDATE_TASK` | `task_id`, `status`, `priority` |
| Get task | `CLICKUP_GET_TASK` | `task_id`, `include_subtasks` |
| List tasks | `CLICKUP_GET_TASKS` | `list_id`, `statuses`, `page` |
| Delete task | `CLICKUP_DELETE_TASK` | `task_id` |
| Add comment | `CLICKUP_CREATE_TASK_COMMENT` | `task_id`, `comment_text`, `assignee` |
| List comments | `CLICKUP_GET_TASK_COMMENTS` | `task_id`, `start`, `start_id` |
| Update comment | `CLICKUP_UPDATE_COMMENT` | `comment_id`, `comment_text`, `resolved` |
| Workspace seats | `CLICKUP_GET_WORKSPACE_SEATS` | `team_id` |
| List user groups | `CLICKUP_GET_TEAMS` | `team_id` |
| Get user details | `CLICKUP_GET_USER` | `team_id`, `user_id` |
| Custom roles | `CLICKUP_GET_CUSTOM_ROLES` | `team_id` |

#### Imported: Common Patterns

### ID Resolution
Always resolve names to IDs through the hierarchy:
- **Workspace name -> team_id**: `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` and match by name
- **Space name -> space_id**: `CLICKUP_GET_SPACES` with `team_id`
- **Folder name -> folder_id**: `CLICKUP_GET_FOLDERS` with `space_id`
- **List name -> list_id**: Navigate folders or use `CLICKUP_GET_FOLDERLESS_LISTS`
- **Task name -> task_id**: `CLICKUP_GET_TASKS` with `list_id` and match by name

### Pagination
- `CLICKUP_GET_TASKS`: Page-based with `page` starting at 0, max 100 tasks per page
- `CLICKUP_GET_TASK_COMMENTS`: Uses `start` (Unix ms) and `start_id` for cursor-based paging, max 25 per page
- Continue fetching until response returns fewer items than the page size

#### Imported: Known Pitfalls

### ID Formats
- Workspace/Team IDs are large integers
- Space, folder, and list IDs are integers
- Task IDs are alphanumeric strings (e.g., "9hz", "abc123")
- User IDs are integers
- Comment IDs are integers

### Rate Limits
- ClickUp enforces rate limits; bulk task creation can trigger 429 responses
- Honor `Retry-After` header when present
- Set `notify_all=false` for bulk operations to reduce notification load

### Parameter Quirks
- `team_id` in the API means Workspace ID, not a user group
- `status` on tasks is case-sensitive and list-specific
- Dates are Unix timestamps in **milliseconds** (multiply seconds by 1000)
- `priority` is an integer 1-4 (1=Urgent, 4=Low), not a string
- `CLICKUP_CREATE_TASK_COMMENT` marks `assignee` and `notify_all` as required
- To clear a task description, pass a single space `" "` to `CLICKUP_UPDATE_TASK`

### Hierarchy Rules
- Subtask parent must not itself be a subtask
- Subtask parent must be in the same list
- Lists can be folderless (directly in a Space) or inside a Folder
- Subitem boards are not supported by CLICKUP_CREATE_TASK

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
