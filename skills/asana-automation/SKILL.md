---
name: asana-automation
description: "Asana Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Asana tasks via Rube MCP (Composio): tasks, projects, sections, teams, workspaces. Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["asana-automation", "automate", "asana", "tasks", "via", "rube", "mcp", "composio"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Asana Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/asana-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Asana Automation via Rube MCP Automate Asana operations through Composio's Asana toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Asana tasks via Rube MCP (Composio): tasks, projects, sections, teams, workspaces. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit asana
3. If connection is not ACTIVE, follow the returned auth link to complete Asana OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. ASANAGETMULTIPLE_WORKSPACES - Get workspace ID [Prerequisite]
6. ASANASEARCHTASKSINWORKSPACE - Search tasks [Optional]
7. ASANAGETTASKSFROMA_PROJECT - List project tasks [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `asana`
3. If connection is not ACTIVE, follow the returned auth link to complete Asana OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Manage Tasks

**When to use**: User wants to create, search, list, or organize tasks

**Tool sequence**:
1. `ASANA_GET_MULTIPLE_WORKSPACES` - Get workspace ID [Prerequisite]
2. `ASANA_SEARCH_TASKS_IN_WORKSPACE` - Search tasks [Optional]
3. `ASANA_GET_TASKS_FROM_A_PROJECT` - List project tasks [Optional]
4. `ASANA_CREATE_A_TASK` - Create a new task [Optional]
5. `ASANA_GET_A_TASK` - Get task details [Optional]
6. `ASANA_CREATE_SUBTASK` - Create a subtask [Optional]
7. `ASANA_GET_TASK_SUBTASKS` - List subtasks [Optional]

**Key parameters**:
- `workspace`: Workspace GID (required for search/creation)
- `projects`: Array of project GIDs to add task to
- `name`: Task name
- `notes`: Task description
- `assignee`: Assignee (user GID or email)
- `due_on`: Due date (YYYY-MM-DD)

**Pitfalls**:
- Workspace GID is required for most operations; get it first
- Task GIDs are returned as strings, not integers
- Search is workspace-scoped, not project-scoped

### 2. Manage Projects and Sections

**When to use**: User wants to create projects, manage sections, or organize tasks

**Tool sequence**:
1. `ASANA_GET_WORKSPACE_PROJECTS` - List workspace projects [Optional]
2. `ASANA_GET_A_PROJECT` - Get project details [Optional]
3. `ASANA_CREATE_A_PROJECT` - Create a new project [Optional]
4. `ASANA_GET_SECTIONS_IN_PROJECT` - List sections [Optional]
5. `ASANA_CREATE_SECTION_IN_PROJECT` - Create a new section [Optional]
6. `ASANA_ADD_TASK_TO_SECTION` - Move task to section [Optional]
7. `ASANA_GET_TASKS_FROM_A_SECTION` - List tasks in section [Optional]

**Key parameters**:
- `project_gid`: Project GID
- `name`: Project or section name
- `workspace`: Workspace GID for creation
- `task`: Task GID for section assignment
- `section`: Section GID

**Pitfalls**:
- Projects belong to workspaces; workspace GID is needed for creation
- Sections are ordered within a project
- DUPLICATE_PROJECT creates a copy with optional task inclusion

### 3. Manage Teams and Users

**When to use**: User wants to list teams, team members, or workspace users

**Tool sequence**:
1. `ASANA_GET_TEAMS_IN_WORKSPACE` - List workspace teams [Optional]
2. `ASANA_GET_USERS_FOR_TEAM` - List team members [Optional]
3. `ASANA_GET_USERS_FOR_WORKSPACE` - List all workspace users [Optional]
4. `ASANA_GET_CURRENT_USER` - Get authenticated user [Optional]
5. `ASANA_GET_MULTIPLE_USERS` - Get multiple user details [Optional]

**Key parameters**:
- `workspace_gid`: Workspace GID
- `team_gid`: Team GID

**Pitfalls**:
- Users are workspace-scoped
- Team membership requires the team GID

### 4. Parallel Operations

**When to use**: User needs to perform bulk operations efficiently

**Tool sequence**:
1. `ASANA_SUBMIT_PARALLEL_REQUESTS` - Execute multiple API calls in parallel [Required]

**Key parameters**:
- `actions`: Array of action objects with method, path, and data

**Pitfalls**:
- Each action must be a valid Asana API call
- Failed individual requests do not roll back successful ones

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Asana connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `asana`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @asana-automation to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/asana-automation/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/asana-automation/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @asana-automation using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/asana-automation`, fails to mention provenance, or does not use the support pack at all.
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
| List workspaces | ASANA_GET_MULTIPLE_WORKSPACES | (none) |
| Search tasks | ASANA_SEARCH_TASKS_IN_WORKSPACE | workspace, text |
| Create task | ASANA_CREATE_A_TASK | workspace, name, projects |
| Get task | ASANA_GET_A_TASK | task_gid |
| Create subtask | ASANA_CREATE_SUBTASK | parent, name |
| List subtasks | ASANA_GET_TASK_SUBTASKS | task_gid |
| Project tasks | ASANA_GET_TASKS_FROM_A_PROJECT | project_gid |
| List projects | ASANA_GET_WORKSPACE_PROJECTS | workspace |
| Create project | ASANA_CREATE_A_PROJECT | workspace, name |
| Get project | ASANA_GET_A_PROJECT | project_gid |
| Duplicate project | ASANA_DUPLICATE_PROJECT | project_gid |
| List sections | ASANA_GET_SECTIONS_IN_PROJECT | project_gid |
| Create section | ASANA_CREATE_SECTION_IN_PROJECT | project_gid, name |
| Add to section | ASANA_ADD_TASK_TO_SECTION | section, task |
| Section tasks | ASANA_GET_TASKS_FROM_A_SECTION | section_gid |
| List teams | ASANA_GET_TEAMS_IN_WORKSPACE | workspace_gid |
| Team members | ASANA_GET_USERS_FOR_TEAM | team_gid |
| Workspace users | ASANA_GET_USERS_FOR_WORKSPACE | workspace_gid |
| Current user | ASANA_GET_CURRENT_USER | (none) |
| Parallel requests | ASANA_SUBMIT_PARALLEL_REQUESTS | actions |

#### Imported: Common Patterns

### ID Resolution

**Workspace name -> GID**:
```
1. Call ASANA_GET_MULTIPLE_WORKSPACES
2. Find workspace by name
3. Extract gid field
```

**Project name -> GID**:
```
1. Call ASANA_GET_WORKSPACE_PROJECTS with workspace GID
2. Find project by name
3. Extract gid field
```

### Pagination

- Asana uses cursor-based pagination with `offset` parameter
- Check for `next_page` in response
- Pass `offset` from `next_page.offset` for next request

#### Imported: Known Pitfalls

**GID Format**:
- All Asana IDs are strings (GIDs), not integers
- GIDs are globally unique identifiers

**Workspace Scoping**:
- Most operations require a workspace context
- Tasks, projects, and users are workspace-scoped
