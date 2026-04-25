---
name: linear-automation-v2
description: "Linear Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Linear tasks via Rube MCP (Composio): issues, projects, cycles, teams, labels. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["linear-automation-v2", "linear-automation", "automate", "linear", "tasks", "via", "rube", "mcp"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-17"
date_updated: "2026-04-24"
---

# Linear Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/linear-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Linear Automation via Rube MCP Automate Linear operations through Composio's Linear toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Linear tasks via Rube MCP (Composio): issues, projects, cycles, teams, labels. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit linear
3. If connection is not ACTIVE, follow the returned auth link to complete Linear OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. LINEARGETALLLINEARTEAMS - Get team IDs [Prerequisite]
6. LINEARLISTLINEAR_STATES - Get workflow states for a team [Prerequisite]
7. LINEARCREATELINEAR_ISSUE - Create a new issue [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `linear`
3. If connection is not ACTIVE, follow the returned auth link to complete Linear OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Manage Issues

**When to use**: User wants to create, search, update, or list Linear issues

**Tool sequence**:
1. `LINEAR_GET_ALL_LINEAR_TEAMS` - Get team IDs [Prerequisite]
2. `LINEAR_LIST_LINEAR_STATES` - Get workflow states for a team [Prerequisite]
3. `LINEAR_CREATE_LINEAR_ISSUE` - Create a new issue [Optional]
4. `LINEAR_SEARCH_ISSUES` / `LINEAR_LIST_LINEAR_ISSUES` - Find issues [Optional]
5. `LINEAR_GET_LINEAR_ISSUE` - Get issue details [Optional]
6. `LINEAR_UPDATE_ISSUE` - Update issue properties [Optional]

**Key parameters**:
- `team_id`: Team ID (required for creation)
- `title`: Issue title
- `description`: Issue description (Markdown supported)
- `state_id`: Workflow state ID
- `assignee_id`: Assignee user ID
- `priority`: 0 (none), 1 (urgent), 2 (high), 3 (medium), 4 (low)
- `label_ids`: Array of label IDs

**Pitfalls**:
- Team ID is required when creating issues; use GET_ALL_LINEAR_TEAMS first
- State IDs are team-specific; use LIST_LINEAR_STATES with the correct team
- Priority uses integer values 0-4, not string names

### 2. Manage Projects

**When to use**: User wants to create or update Linear projects

**Tool sequence**:
1. `LINEAR_LIST_LINEAR_PROJECTS` - List existing projects [Optional]
2. `LINEAR_CREATE_LINEAR_PROJECT` - Create a new project [Optional]
3. `LINEAR_UPDATE_LINEAR_PROJECT` - Update project details [Optional]

**Key parameters**:
- `name`: Project name
- `description`: Project description
- `team_ids`: Array of team IDs associated with the project
- `state`: Project state (e.g., 'planned', 'started', 'completed')

**Pitfalls**:
- Projects span teams; they can be associated with multiple teams

### 3. Manage Cycles

**When to use**: User wants to work with Linear cycles (sprints)

**Tool sequence**:
1. `LINEAR_GET_ALL_LINEAR_TEAMS` - Get team ID [Prerequisite]
2. `LINEAR_GET_CYCLES_BY_TEAM_ID` / `LINEAR_LIST_LINEAR_CYCLES` - List cycles [Required]

**Key parameters**:
- `team_id`: Team ID for cycle operations
- `number`: Cycle number

**Pitfalls**:
- Cycles are team-specific; always scope by team_id

### 4. Manage Labels and Comments

**When to use**: User wants to create labels or comment on issues

**Tool sequence**:
1. `LINEAR_CREATE_LINEAR_LABEL` - Create a new label [Optional]
2. `LINEAR_CREATE_LINEAR_COMMENT` - Comment on an issue [Optional]
3. `LINEAR_UPDATE_LINEAR_COMMENT` - Edit a comment [Optional]

**Key parameters**:
- `name`: Label name
- `color`: Label color (hex)
- `issue_id`: Issue ID for comments
- `body`: Comment body (Markdown)

**Pitfalls**:
- Labels can be team-scoped or workspace-scoped
- Comment body supports Markdown formatting

### 5. Custom GraphQL Queries

**When to use**: User needs advanced queries not covered by standard tools

**Tool sequence**:
1. `LINEAR_RUN_QUERY_OR_MUTATION` - Execute custom GraphQL [Required]

**Key parameters**:
- `query`: GraphQL query or mutation string
- `variables`: Variables for the query

**Pitfalls**:
- Requires knowledge of Linear's GraphQL schema
- Rate limits apply to GraphQL queries

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Linear connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `linear`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @linear-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @linear-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @linear-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @linear-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/linear-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@base-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@impress-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List teams | LINEAR_GET_ALL_LINEAR_TEAMS | (none) |
| Create issue | LINEAR_CREATE_LINEAR_ISSUE | team_id, title, description |
| Search issues | LINEAR_SEARCH_ISSUES | query |
| List issues | LINEAR_LIST_LINEAR_ISSUES | team_id, filters |
| Get issue | LINEAR_GET_LINEAR_ISSUE | issue_id |
| Update issue | LINEAR_UPDATE_ISSUE | issue_id, fields |
| List states | LINEAR_LIST_LINEAR_STATES | team_id |
| List projects | LINEAR_LIST_LINEAR_PROJECTS | (none) |
| Create project | LINEAR_CREATE_LINEAR_PROJECT | name, team_ids |
| Update project | LINEAR_UPDATE_LINEAR_PROJECT | project_id, fields |
| List cycles | LINEAR_LIST_LINEAR_CYCLES | team_id |
| Get cycles | LINEAR_GET_CYCLES_BY_TEAM_ID | team_id |
| Create label | LINEAR_CREATE_LINEAR_LABEL | name, color |
| Create comment | LINEAR_CREATE_LINEAR_COMMENT | issue_id, body |
| Update comment | LINEAR_UPDATE_LINEAR_COMMENT | comment_id, body |
| List users | LINEAR_LIST_LINEAR_USERS | (none) |
| Current user | LINEAR_GET_CURRENT_USER | (none) |
| Run GraphQL | LINEAR_RUN_QUERY_OR_MUTATION | query, variables |

#### Imported: Common Patterns

### ID Resolution

**Team name -> Team ID**:
```
1. Call LINEAR_GET_ALL_LINEAR_TEAMS
2. Find team by name in response
3. Extract id field
```

**State name -> State ID**:
```
1. Call LINEAR_LIST_LINEAR_STATES with team_id
2. Find state by name
3. Extract id field
```

### Pagination

- Linear tools return paginated results
- Check for pagination cursors in responses
- Pass cursor to next request for additional pages

#### Imported: Known Pitfalls

**Team Scoping**:
- Issues, states, and cycles are team-specific
- Always resolve team_id before creating issues

**Priority Values**:
- 0 = No priority, 1 = Urgent, 2 = High, 3 = Medium, 4 = Low
- Use integer values, not string names

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
