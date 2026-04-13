---
name: todoist-automation-v2
description: "Todoist Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Todoist task management, projects, sections, filtering, and bulk operations via Rube MCP (Composio). Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["todoist-automation-v2", "todoist-automation", "automate", "todoist", "task", "management", "projects", "sections"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Todoist Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/todoist-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Todoist Automation via Rube MCP Automate Todoist operations including task creation and management, project organization, section management, filtering, and bulk task workflows through Composio's Todoist toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Todoist task management, projects, sections, filtering, and bulk operations via Rube MCP (Composio). Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit todoist
3. If connection is not ACTIVE, follow the returned auth link to complete Todoist OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. TODOISTGETALL_PROJECTS - List projects to find the target project ID [Prerequisite]
6. TODOISTGETALL_SECTIONS - List sections within a project for task placement [Optional]
7. TODOISTCREATETASK - Create a single task with content, due date, priority, labels [Required]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `todoist`
3. If connection is not ACTIVE, follow the returned auth link to complete Todoist OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create and Manage Tasks

**When to use**: User wants to create, update, complete, reopen, or delete tasks

**Tool sequence**:
1. `TODOIST_GET_ALL_PROJECTS` - List projects to find the target project ID [Prerequisite]
2. `TODOIST_GET_ALL_SECTIONS` - List sections within a project for task placement [Optional]
3. `TODOIST_CREATE_TASK` - Create a single task with content, due date, priority, labels [Required]
4. `TODOIST_BULK_CREATE_TASKS` - Create multiple tasks in one request [Alternative]
5. `TODOIST_UPDATE_TASK` - Modify task properties (content, due date, priority, labels) [Optional]
6. `TODOIST_CLOSE_TASK` - Mark a task as completed [Optional]
7. `TODOIST_REOPEN_TASK` - Restore a previously completed task [Optional]
8. `TODOIST_DELETE_TASK` - Permanently remove a task [Optional]

**Key parameters for CREATE_TASK**:
- `content`: Task title (supports markdown and hyperlinks)
- `description`: Additional notes (do NOT put due dates here)
- `project_id`: Alphanumeric project ID; omit to add to Inbox
- `section_id`: Alphanumeric section ID for placement within a project
- `parent_id`: Task ID for creating subtasks
- `priority`: 1 (normal) to 4 (urgent) -- note: Todoist UI shows p1=urgent, API p4=urgent
- `due_string`: Natural language date like `"tomorrow at 3pm"`, `"every Friday at 9am"`
- `due_date`: Specific date `YYYY-MM-DD` format
- `due_datetime`: Specific date+time in RFC3339 `YYYY-MM-DDTHH:mm:ssZ`
- `labels`: Array of label name strings
- `duration` + `duration_unit`: Task duration (e.g., `30` + `"minute"`)

**Pitfalls**:
- Only one `due_*` field can be used at a time (except `due_lang` which can accompany any)
- Do NOT embed due dates in `content` or `description` -- use `due_string` field
- Do NOT embed duration phrases like "for 30 minutes" in `due_string` -- use `duration` + `duration_unit`
- `priority` in API: 1=normal, 4=urgent (opposite of Todoist UI display where p1=urgent)
- Task IDs can be numeric or alphanumeric; use the format returned by the API
- `CLOSE_TASK` marks complete; `DELETE_TASK` permanently removes -- they are different operations

### 2. Manage Projects

**When to use**: User wants to list, create, update, or inspect projects

**Tool sequence**:
1. `TODOIST_GET_ALL_PROJECTS` - List all projects with metadata [Required]
2. `TODOIST_GET_PROJECT` - Get details for a specific project by ID [Optional]
3. `TODOIST_CREATE_PROJECT` - Create a new project with name, color, view style [Optional]
4. `TODOIST_UPDATE_PROJECT` - Modify project properties [Optional]

**Key parameters**:
- `name`: Project name (required for creation)
- `color`: Todoist palette color (e.g., `"blue"`, `"red"`, `"green"`, `"charcoal"`)
- `view_style`: `"list"` or `"board"` layout
- `parent_id`: Parent project ID for creating sub-projects
- `is_favorite` / `favorite`: Boolean to mark as favorite
- `project_id`: Required for update and get operations

**Pitfalls**:
- Projects with similar names can lead to selecting the wrong project_id; always verify
- `CREATE_PROJECT` uses `favorite` while `UPDATE_PROJECT` uses `is_favorite` -- different field names
- Use the project `id` returned by API, not the `v2_id`, for downstream operations
- Alphanumeric/URL-style project IDs may cause HTTP 400 in some tools; use numeric ID if available

### 3. Manage Sections

**When to use**: User wants to organize tasks within projects using sections

**Tool sequence**:
1. `TODOIST_GET_ALL_PROJECTS` - Find the target project ID [Prerequisite]
2. `TODOIST_GET_ALL_SECTIONS` - List existing sections to avoid duplicates [Prerequisite]
3. `TODOIST_CREATE_SECTION` - Create a new section in a project [Required]
4. `TODOIST_UPDATE_SECTION` - Rename an existing section [Optional]
5. `TODOIST_DELETE_SECTION` - Permanently remove a section [Optional]

**Key parameters**:
- `project_id`: Required -- the project to create the section in
- `name`: Section name (required for creation)
- `order`: Integer position within the project (lower values appear first)
- `section_id`: Required for update and delete operations

**Pitfalls**:
- `CREATE_SECTION` requires `project_id` and `name` -- omitting project_id causes a 400 error
- HTTP 400 "project_id is invalid" can occur if alphanumeric ID is used; prefer numeric ID
- Deleting a section may move or regroup its tasks in non-obvious ways
- Response may include both `id` and `v2_id`; store and reuse the correct identifier consistently
- Always check existing sections first to avoid creating duplicates

### 4. Search and Filter Tasks

**When to use**: User wants to find tasks by criteria, view today's tasks, or get completed task history

**Tool sequence**:
1. `TODOIST_GET_ALL_TASKS` - Fetch incomplete tasks with optional filter query [Required]
2. `TODOIST_GET_TASK` - Get full details of a specific task by ID [Optional]
3. `TODOIST_GET_COMPLETED_TASKS_BY_COMPLETION_DATE` - Retrieve completed tasks within a date range [Optional]
4. `TODOIST_LIST_FILTERS` - List user's custom saved filters [Optional]

**Key parameters for GET_ALL_TASKS**:
- `filter`: Todoist filter syntax string
  - Keywords: `today`, `tomorrow`, `overdue`, `no date`, `recurring`, `subtask`
  - Priority: `p1` (urgent), `p2`, `p3`, `p4` (normal)
  - Projects: `#ProjectName` (must exist in account)
  - Labels: `@LabelName` (must exist in account)
  - Date ranges: `7 days`, `-7 days`, `due before: YYYY-MM-DD`, `due after: YYYY-MM-DD`
  - Search: `search: keyword` for content text search
  - Operators: `&` (AND), `|` (OR), `!` (NOT)
- `ids`: List of specific task IDs to retrieve

**Key parameters for GET_COMPLETED_TASKS_BY_COMPLETION_DATE**:
- `since`: Start date in RFC3339 format (e.g., `2024-01-01T00:00:00Z`)
- `until`: End date in RFC3339 format
- `project_id`, `section_id`, `parent_id`: Optional filters
- `cursor`: Pagination cursor from previous response
- `limit`: Max results per page (default 50)

**Pitfalls**:
- `GET_ALL_TASKS` returns ONLY incomplete tasks; use `GET_COMPLETED_TASKS_BY_COMPLETION_DATE` for completed ones
- Filter terms must reference ACTUAL EXISTING entities; arbitrary text causes HTTP 400 errors
- Do NOT use `completed`, `!completed`, or `completed after` in GET_ALL_TASKS filter -- causes 400 error
- `GET_COMPLETED_TASKS_BY_COMPLETION_DATE` limits date range to approximately 3 months between `since` and `until`
- Search uses `search: keyword` syntax within the filter, not a separate parameter

### 5. Bulk Task Creation

**When to use**: User wants to scaffold a project with multiple tasks at once

**Tool sequence**:
1. `TODOIST_GET_ALL_PROJECTS` - Find target project ID [Prerequisite]
2. `TODOIST_GET_ALL_SECTIONS` - Find section IDs for task placement [Optional]
3. `TODOIST_BULK_CREATE_TASKS` - Create multiple tasks in a single request [Required]

**Key parameters**:
- `tasks`: Array of task objects, each requiring at minimum `content`
- Each task object supports: `content`, `description`, `project_id`, `section_id`, `parent_id`, `priority`, `labels`, `due` (object with `string`, `date`, or `datetime`), `duration`, `order`

**Pitfalls**:
- Each task in the array must have at least the `content` field
- The `due` field in bulk create is an object with nested fields (`string`, `date`, `datetime`, `lang`) -- different structure from CREATE_TASK's flat fields
- All tasks can target different projects/sections within the same batch

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Todoist connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `todoist`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @todoist-automation-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/todoist-automation-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/todoist-automation-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @todoist-automation-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/todoist-automation`, fails to mention provenance, or does not use the support pack at all.
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
| List all projects | `TODOIST_GET_ALL_PROJECTS` | (none) |
| Get project | `TODOIST_GET_PROJECT` | `project_id` |
| Create project | `TODOIST_CREATE_PROJECT` | `name`, `color`, `view_style` |
| Update project | `TODOIST_UPDATE_PROJECT` | `project_id`, `name`, `color` |
| List sections | `TODOIST_GET_ALL_SECTIONS` | `project_id` |
| Create section | `TODOIST_CREATE_SECTION` | `project_id`, `name`, `order` |
| Update section | `TODOIST_UPDATE_SECTION` | `section_id`, `name` |
| Delete section | `TODOIST_DELETE_SECTION` | `section_id` |
| Get all tasks | `TODOIST_GET_ALL_TASKS` | `filter`, `ids` |
| Get task | `TODOIST_GET_TASK` | `task_id` |
| Create task | `TODOIST_CREATE_TASK` | `content`, `project_id`, `due_string`, `priority` |
| Bulk create tasks | `TODOIST_BULK_CREATE_TASKS` | `tasks` (array) |
| Update task | `TODOIST_UPDATE_TASK` | `task_id`, `content`, `due_string` |
| Complete task | `TODOIST_CLOSE_TASK` | `task_id` |
| Reopen task | `TODOIST_REOPEN_TASK` | `task_id` |
| Delete task | `TODOIST_DELETE_TASK` | `task_id` |
| Completed tasks | `TODOIST_GET_COMPLETED_TASKS_BY_COMPLETION_DATE` | `since`, `until` |
| List filters | `TODOIST_LIST_FILTERS` | `sync_token` |

#### Imported: Common Patterns

### ID Resolution
Always resolve human-readable names to IDs before operations:
- **Project name -> Project ID**: `TODOIST_GET_ALL_PROJECTS`, match by `name` field
- **Section name -> Section ID**: `TODOIST_GET_ALL_SECTIONS` with `project_id`
- **Task content -> Task ID**: `TODOIST_GET_ALL_TASKS` with `filter` or `search: keyword`

### Pagination
- `TODOIST_GET_ALL_TASKS`: Returns all matching incomplete tasks (no pagination needed)
- `TODOIST_GET_COMPLETED_TASKS_BY_COMPLETION_DATE`: Uses cursor-based pagination; follow `cursor` from response until no more results
- `TODOIST_GET_ALL_PROJECTS` and `TODOIST_GET_ALL_SECTIONS`: Return all results (no pagination)

### Due Date Handling
- Natural language: Use `due_string` (e.g., `"tomorrow at 3pm"`, `"every Monday"`)
- Specific date: Use `due_date` in `YYYY-MM-DD` format
- Specific datetime: Use `due_datetime` in RFC3339 format (`YYYY-MM-DDTHH:mm:ssZ`)
- Only use ONE due field at a time (except `due_lang` which can accompany any)
- Recurring tasks: Use natural language in `due_string` (e.g., `"every Friday at 9am"`)

#### Imported: Known Pitfalls

### ID Formats
- Task IDs can be numeric (`"2995104339"`) or alphanumeric (`"6X4Vw2Hfmg73Q2XR"`)
- Project IDs similarly vary; prefer the format returned by the API
- Some tools accept only numeric IDs; if 400 error occurs, try fetching the numeric `id` via GET_PROJECT
- Response objects may contain both `id` and `v2_id`; use `id` for API operations

### Priority Inversion
- API priority: 1 = normal, 4 = urgent
- Todoist UI display: p1 = urgent, p4 = normal
- This is inverted; always clarify with the user which convention they mean

### Filter Syntax
- Filter terms must reference real entities in the user's account
- `#NonExistentProject` or `@NonExistentLabel` will cause HTTP 400
- Use `search: keyword` for text search, not bare keywords
- Combine with `&` (AND), `|` (OR), `!` (NOT)
- `completed` filters do NOT work on GET_ALL_TASKS endpoint

### Rate Limits
- Todoist API has rate limits; batch operations should use `BULK_CREATE_TASKS` where possible
- Space out rapid sequential requests to avoid throttling

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
