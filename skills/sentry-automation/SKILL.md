---
name: sentry-automation
description: "Sentry Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Sentry tasks via Rube MCP (Composio): manage issues/events, configure alerts, track releases, monitor projects and teams. Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["sentry-automation", "automate", "sentry", "tasks", "via", "rube", "mcp", "composio"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Sentry Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/sentry-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Sentry Automation via Rube MCP Automate Sentry error tracking and monitoring operations through Composio's Sentry toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Sentry tasks via Rube MCP (Composio): manage issues/events, configure alerts, track releases, monitor projects and teams. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit sentry
3. If connection is not ACTIVE, follow the returned auth link to complete Sentry OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. SENTRYLISTANORGANIZATIONSISSUES - List issues across the organization [Required]
6. SENTRYGETORGANIZATIONISSUEDETAILS - Get detailed info on a specific issue [Optional]
7. SENTRYLISTANISSUESEVENTS - View individual error events for an issue [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `sentry`
3. If connection is not ACTIVE, follow the returned auth link to complete Sentry OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Investigate Issues

**When to use**: User wants to find, inspect, or triage error issues

**Tool sequence**:
1. `SENTRY_LIST_AN_ORGANIZATIONS_ISSUES` - List issues across the organization [Required]
2. `SENTRY_GET_ORGANIZATION_ISSUE_DETAILS` - Get detailed info on a specific issue [Optional]
3. `SENTRY_LIST_AN_ISSUES_EVENTS` - View individual error events for an issue [Optional]
4. `SENTRY_RETRIEVE_AN_ISSUE_EVENT` - Get full event details with stack trace [Optional]
5. `SENTRY_RETRIEVE_ISSUE_TAG_DETAILS` - Inspect tag distribution for an issue [Optional]

**Key parameters**:
- `organization_id_or_slug`: Organization identifier
- `issue_id`: Numeric issue ID
- `query`: Search query (e.g., `is:unresolved`, `assigned:me`, `browser:Chrome`)
- `sort`: Sort order (`date`, `new`, `freq`, `priority`)
- `statsPeriod`: Time window for stats (`24h`, `14d`, etc.)

**Pitfalls**:
- `organization_id_or_slug` is the org slug (e.g., 'my-org'), not the display name
- Issue IDs are numeric; do not confuse with event IDs which are UUIDs
- Query syntax uses Sentry's search format: `is:unresolved`, `assigned:me`, `!has:release`
- Events within an issue can have different stack traces; inspect individual events for details

### 2. Manage Project Issues

**When to use**: User wants to view issues scoped to a specific project

**Tool sequence**:
1. `SENTRY_RETRIEVE_ORGANIZATION_PROJECTS` - List projects to find project slug [Prerequisite]
2. `SENTRY_RETRIEVE_PROJECT_ISSUES_LIST` - List issues for a specific project [Required]
3. `SENTRY_RETRIEVE_ISSUE_EVENTS_BY_ID` - Get events for a specific issue [Optional]

**Key parameters**:
- `organization_id_or_slug`: Organization identifier
- `project_id_or_slug`: Project identifier
- `query`: Search filter string
- `statsPeriod`: Stats time window

**Pitfalls**:
- Project slugs are different from project display names
- Always resolve project names to slugs via RETRIEVE_ORGANIZATION_PROJECTS first
- Project-scoped issue lists may have different pagination than org-scoped lists

### 3. Configure Alert Rules

**When to use**: User wants to create or manage alert rules for a project

**Tool sequence**:
1. `SENTRY_RETRIEVE_ORGANIZATION_PROJECTS` - Find project for the alert [Prerequisite]
2. `SENTRY_RETRIEVE_PROJECT_RULES_BY_ORG_AND_PROJECT_ID` - List existing rules [Optional]
3. `SENTRY_CREATE_PROJECT_RULE_FOR_ALERTS` - Create a new alert rule [Required]
4. `SENTRY_CREATE_ORGANIZATION_ALERT_RULE` - Create org-level metric alert [Alternative]
5. `SENTRY_UPDATE_ORGANIZATION_ALERT_RULES` - Update existing alert rules [Optional]
6. `SENTRY_RETRIEVE_ALERT_RULE_DETAILS` - Inspect specific alert rule [Optional]
7. `SENTRY_GET_PROJECT_RULE_DETAILS` - Get project-level rule details [Optional]

**Key parameters**:
- `name`: Alert rule name
- `conditions`: Array of trigger conditions
- `actions`: Array of actions to perform when triggered
- `filters`: Array of event filters
- `frequency`: How often to trigger (in minutes)
- `actionMatch`: 'all', 'any', or 'none' for condition matching

**Pitfalls**:
- Project-level rules (CREATE_PROJECT_RULE) and org-level metric alerts (CREATE_ORGANIZATION_ALERT_RULE) are different
- Conditions, actions, and filters use specific JSON schemas; check Sentry docs for valid types
- `frequency` is in minutes; setting too low causes alert fatigue
- `actionMatch` defaults may vary; explicitly set to avoid unexpected behavior

### 4. Manage Releases

**When to use**: User wants to create, track, or manage release versions

**Tool sequence**:
1. `SENTRY_LIST_ORGANIZATION_RELEASES` - List existing releases [Optional]
2. `SENTRY_CREATE_RELEASE_FOR_ORGANIZATION` - Create a new release [Required]
3. `SENTRY_UPDATE_RELEASE_DETAILS_FOR_ORGANIZATION` - Update release metadata [Optional]
4. `SENTRY_CREATE_RELEASE_DEPLOY_FOR_ORG` - Record a deployment for a release [Optional]
5. `SENTRY_UPLOAD_RELEASE_FILE_TO_ORGANIZATION` - Upload source maps or files [Optional]

**Key parameters**:
- `version`: Release version string (e.g., '1.0.0', commit SHA)
- `projects`: Array of project slugs this release belongs to
- `dateReleased`: Release timestamp (ISO 8601)
- `environment`: Deployment environment name (e.g., 'production', 'staging')

**Pitfalls**:
- Release versions must be unique within an organization
- Releases can span multiple projects; use the `projects` array
- Deploying a release is separate from creating it; use CREATE_RELEASE_DEPLOY
- Source map uploads require the release to exist first

### 5. Monitor Organization and Teams

**When to use**: User wants to view org structure, teams, or member lists

**Tool sequence**:
1. `SENTRY_GET_ORGANIZATION_DETAILS` or `SENTRY_GET_ORGANIZATION_BY_ID_OR_SLUG` - Get org info [Required]
2. `SENTRY_LIST_TEAMS_IN_ORGANIZATION` - List all teams [Optional]
3. `SENTRY_LIST_ORGANIZATION_MEMBERS` - List org members [Optional]
4. `SENTRY_GET_PROJECT_LIST` - List all accessible projects [Optional]

**Key parameters**:
- `organization_id_or_slug`: Organization identifier
- `cursor`: Pagination cursor for large result sets

**Pitfalls**:
- Organization slugs are URL-safe identifiers, not display names
- Member lists may be paginated; follow cursor pagination
- Team and member visibility depends on the authenticated user's permissions

### 6. Manage Monitors (Cron Monitoring)

**When to use**: User wants to update cron job monitoring configuration

**Tool sequence**:
1. `SENTRY_UPDATE_A_MONITOR` - Update monitor configuration [Required]

**Key parameters**:
- `organization_id_or_slug`: Organization identifier
- `monitor_id_or_slug`: Monitor identifier
- `name`: Monitor display name
- `schedule`: Cron schedule expression or interval
- `checkin_margin`: Grace period in minutes for late check-ins
- `max_runtime`: Maximum expected runtime in minutes

**Pitfalls**:
- Monitor slugs are auto-generated from the name; use slug for API calls
- Schedule changes take effect immediately
- Missing check-ins trigger alerts after the margin period

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Sentry connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `sentry`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @sentry-automation to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/sentry-automation/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/sentry-automation/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @sentry-automation using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/sentry-automation`, fails to mention provenance, or does not use the support pack at all.
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
| List org issues | SENTRY_LIST_AN_ORGANIZATIONS_ISSUES | organization_id_or_slug, query |
| Get issue details | SENTRY_GET_ORGANIZATION_ISSUE_DETAILS | organization_id_or_slug, issue_id |
| List issue events | SENTRY_LIST_AN_ISSUES_EVENTS | issue_id |
| Get event details | SENTRY_RETRIEVE_AN_ISSUE_EVENT | organization_id_or_slug, event_id |
| List project issues | SENTRY_RETRIEVE_PROJECT_ISSUES_LIST | organization_id_or_slug, project_id_or_slug |
| List projects | SENTRY_RETRIEVE_ORGANIZATION_PROJECTS | organization_id_or_slug |
| Get org details | SENTRY_GET_ORGANIZATION_DETAILS | organization_id_or_slug |
| List teams | SENTRY_LIST_TEAMS_IN_ORGANIZATION | organization_id_or_slug |
| List members | SENTRY_LIST_ORGANIZATION_MEMBERS | organization_id_or_slug |
| Create alert rule | SENTRY_CREATE_PROJECT_RULE_FOR_ALERTS | organization_id_or_slug, project_id_or_slug |
| Create metric alert | SENTRY_CREATE_ORGANIZATION_ALERT_RULE | organization_id_or_slug |
| Create release | SENTRY_CREATE_RELEASE_FOR_ORGANIZATION | organization_id_or_slug, version |
| Deploy release | SENTRY_CREATE_RELEASE_DEPLOY_FOR_ORG | organization_id_or_slug, version |
| List releases | SENTRY_LIST_ORGANIZATION_RELEASES | organization_id_or_slug |
| Update monitor | SENTRY_UPDATE_A_MONITOR | organization_id_or_slug, monitor_id_or_slug |

#### Imported: Common Patterns

### ID Resolution

**Organization name -> Slug**:
```
1. Call SENTRY_GET_ORGANIZATION_DETAILS
2. Extract slug field from response
```

**Project name -> Slug**:
```
1. Call SENTRY_RETRIEVE_ORGANIZATION_PROJECTS
2. Find project by name, extract slug
```

### Pagination

- Sentry uses cursor-based pagination with `Link` headers
- Check response for cursor values
- Pass cursor in next request until no more pages

### Search Query Syntax

- `is:unresolved` - Unresolved issues
- `is:resolved` - Resolved issues
- `assigned:me` - Assigned to current user
- `assigned:team-slug` - Assigned to a team
- `!has:release` - Issues without a release
- `first-release:1.0.0` - Issues first seen in release
- `times-seen:>100` - Seen more than 100 times
- `browser:Chrome` - Filter by browser tag

#### Imported: Known Pitfalls

**ID Formats**:
- Organization: use slug (e.g., 'my-org'), not display name
- Project: use slug (e.g., 'my-project'), not display name
- Issue IDs: numeric integers
- Event IDs: UUIDs (32-char hex strings)

**Permissions**:
- API token scopes must match the operations being performed
- Organization-level operations require org-level permissions
- Project-level operations require project access

**Rate Limits**:
- Sentry enforces per-organization rate limits
- Implement backoff on 429 responses
- Bulk operations should be staggered
