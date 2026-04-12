---
name: jira-automation-v2
description: "Jira Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Jira tasks via Rube MCP (Composio): issues, projects, sprints, boards, comments, users. Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["jira-automation-v2", "jira-automation", "automate", "jira", "tasks", "via", "rube", "mcp"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Jira Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/jira-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Jira Automation via Rube MCP Automate Jira operations through Composio's Jira toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Jira tasks via Rube MCP (Composio): issues, projects, sprints, boards, comments, users. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit jira
3. If connection is not ACTIVE, follow the returned auth link to complete Jira OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. JIRASEARCHFORISSUESUSINGJQLPOST - Search with JQL query [Required]
6. JIRAGETISSUE - Get full details of a specific issue [Optional]
7. jql: JQL query string (e.g., project = PROJ AND status = "In Progress")

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `jira`
3. If connection is not ACTIVE, follow the returned auth link to complete Jira OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Search and Filter Issues

**When to use**: User wants to find issues using JQL or browse project issues

**Tool sequence**:
1. `JIRA_SEARCH_FOR_ISSUES_USING_JQL_POST` - Search with JQL query [Required]
2. `JIRA_GET_ISSUE` - Get full details of a specific issue [Optional]

**Key parameters**:
- `jql`: JQL query string (e.g., `project = PROJ AND status = "In Progress"`)
- `maxResults`: Max results per page (default 50, max 100)
- `startAt`: Pagination offset
- `fields`: Array of field names to return
- `issueIdOrKey`: Issue key like 'PROJ-123' for GET_ISSUE

**Pitfalls**:
- JQL field names are case-sensitive and must match Jira configuration
- Custom fields use IDs like `customfield_10001`, not display names
- Results are paginated; check `total` vs `startAt + maxResults` to continue

### 2. Create and Edit Issues

**When to use**: User wants to create new issues or update existing ones

**Tool sequence**:
1. `JIRA_GET_ALL_PROJECTS` - List projects to find project key [Prerequisite]
2. `JIRA_GET_FIELDS` - Get available fields and their IDs [Prerequisite]
3. `JIRA_CREATE_ISSUE` - Create a new issue [Required]
4. `JIRA_EDIT_ISSUE` - Update fields on an existing issue [Optional]
5. `JIRA_ASSIGN_ISSUE` - Assign issue to a user [Optional]

**Key parameters**:
- `project`: Project key (e.g., 'PROJ')
- `issuetype`: Issue type name (e.g., 'Bug', 'Story', 'Task')
- `summary`: Issue title
- `description`: Issue description (Atlassian Document Format or plain text)
- `issueIdOrKey`: Issue key for edits

**Pitfalls**:
- Issue types and required fields vary by project; use GET_FIELDS to check
- Custom fields require exact field IDs, not display names
- Description may need Atlassian Document Format (ADF) for rich content

### 3. Manage Sprints and Boards

**When to use**: User wants to work with agile boards, sprints, and backlogs

**Tool sequence**:
1. `JIRA_LIST_BOARDS` - List all boards [Prerequisite]
2. `JIRA_LIST_SPRINTS` - List sprints for a board [Required]
3. `JIRA_MOVE_ISSUE_TO_SPRINT` - Move issue to a sprint [Optional]
4. `JIRA_CREATE_SPRINT` - Create a new sprint [Optional]

**Key parameters**:
- `boardId`: Board ID from LIST_BOARDS
- `sprintId`: Sprint ID for move operations
- `name`: Sprint name for creation
- `startDate`/`endDate`: Sprint dates in ISO format

**Pitfalls**:
- Boards and sprints are specific to Jira Software (not Jira Core)
- Only one sprint can be active at a time per board

### 4. Manage Comments

**When to use**: User wants to add or view comments on issues

**Tool sequence**:
1. `JIRA_LIST_ISSUE_COMMENTS` - List existing comments [Optional]
2. `JIRA_ADD_COMMENT` - Add a comment to an issue [Required]

**Key parameters**:
- `issueIdOrKey`: Issue key like 'PROJ-123'
- `body`: Comment body (supports ADF for rich text)

**Pitfalls**:
- Comments support ADF (Atlassian Document Format) for formatting
- Mentions use account IDs, not usernames

### 5. Manage Projects and Users

**When to use**: User wants to list projects, find users, or manage project roles

**Tool sequence**:
1. `JIRA_GET_ALL_PROJECTS` - List all projects [Optional]
2. `JIRA_GET_PROJECT` - Get project details [Optional]
3. `JIRA_FIND_USERS` / `JIRA_GET_ALL_USERS` - Search for users [Optional]
4. `JIRA_GET_PROJECT_ROLES` - List project roles [Optional]
5. `JIRA_ADD_USERS_TO_PROJECT_ROLE` - Add user to role [Optional]

**Key parameters**:
- `projectIdOrKey`: Project key
- `query`: Search text for FIND_USERS
- `roleId`: Role ID for role operations

**Pitfalls**:
- User operations use account IDs (not email or display name)
- Project roles differ from global permissions

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Jira connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `jira`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @jira-automation-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/jira-automation-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/jira-automation-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @jira-automation-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/jira-automation`, fails to mention provenance, or does not use the support pack at all.
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
| Search issues (JQL) | JIRA_SEARCH_FOR_ISSUES_USING_JQL_POST | jql, maxResults |
| Get issue | JIRA_GET_ISSUE | issueIdOrKey |
| Create issue | JIRA_CREATE_ISSUE | project, issuetype, summary |
| Edit issue | JIRA_EDIT_ISSUE | issueIdOrKey, fields |
| Assign issue | JIRA_ASSIGN_ISSUE | issueIdOrKey, accountId |
| Add comment | JIRA_ADD_COMMENT | issueIdOrKey, body |
| List comments | JIRA_LIST_ISSUE_COMMENTS | issueIdOrKey |
| List projects | JIRA_GET_ALL_PROJECTS | (none) |
| Get project | JIRA_GET_PROJECT | projectIdOrKey |
| List boards | JIRA_LIST_BOARDS | (none) |
| List sprints | JIRA_LIST_SPRINTS | boardId |
| Move to sprint | JIRA_MOVE_ISSUE_TO_SPRINT | sprintId, issues |
| Create sprint | JIRA_CREATE_SPRINT | name, boardId |
| Find users | JIRA_FIND_USERS | query |
| Get fields | JIRA_GET_FIELDS | (none) |
| List filters | JIRA_LIST_FILTERS | (none) |
| Project roles | JIRA_GET_PROJECT_ROLES | projectIdOrKey |
| Project versions | JIRA_GET_PROJECT_VERSIONS | projectIdOrKey |

#### Imported: Common Patterns

### JQL Syntax

**Common operators**:
- `project = "PROJ"` - Filter by project
- `status = "In Progress"` - Filter by status
- `assignee = currentUser()` - Current user's issues
- `created >= -7d` - Created in last 7 days
- `labels = "bug"` - Filter by label
- `priority = High` - Filter by priority
- `ORDER BY created DESC` - Sort results

**Combinators**:
- `AND` - Both conditions
- `OR` - Either condition
- `NOT` - Negate condition

### Pagination

- Use `startAt` and `maxResults` parameters
- Check `total` in response to determine remaining pages
- Continue until `startAt + maxResults >= total`

#### Imported: Known Pitfalls

**Field Names**:
- Custom fields use IDs like `customfield_10001`
- Use JIRA_GET_FIELDS to discover field IDs and names
- Field names in JQL may differ from API field names

**Authentication**:
- Jira Cloud uses account IDs, not usernames
- Site URL must be configured correctly in the connection
