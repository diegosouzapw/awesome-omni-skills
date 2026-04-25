---
name: pagerduty-automation-v2
description: "PagerDuty Automation via Rube MCP workflow skill. Use this skill when the user needs Automate PagerDuty tasks via Rube MCP (Composio): manage incidents, services, schedules, escalation policies, and on-call rotations. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["pagerduty-automation-v2", "pagerduty-automation", "automate", "pagerduty", "tasks", "via", "rube", "mcp"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# PagerDuty Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/pagerduty-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# PagerDuty Automation via Rube MCP Automate PagerDuty incident management and operations through Composio's PagerDuty toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate PagerDuty tasks via Rube MCP (Composio): manage incidents, services, schedules, escalation policies, and on-call rotations. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit pagerduty
3. If connection is not ACTIVE, follow the returned auth link to complete PagerDuty authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. PAGERDUTYFETCHINCIDENT_LIST - List incidents with filters [Required]
6. PAGERDUTYRETRIEVEINCIDENTBYINCIDENT_ID - Get specific incident details [Optional]
7. PAGERDUTYCREATEINCIDENT_RECORD - Create a new incident [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `pagerduty`
3. If connection is not ACTIVE, follow the returned auth link to complete PagerDuty authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Manage Incidents

**When to use**: User wants to create, update, acknowledge, or resolve incidents

**Tool sequence**:
1. `PAGERDUTY_FETCH_INCIDENT_LIST` - List incidents with filters [Required]
2. `PAGERDUTY_RETRIEVE_INCIDENT_BY_INCIDENT_ID` - Get specific incident details [Optional]
3. `PAGERDUTY_CREATE_INCIDENT_RECORD` - Create a new incident [Optional]
4. `PAGERDUTY_UPDATE_INCIDENT_BY_ID` - Update incident status or assignment [Optional]
5. `PAGERDUTY_POST_INCIDENT_NOTE_USING_ID` - Add a note to an incident [Optional]
6. `PAGERDUTY_SNOOZE_INCIDENT_BY_DURATION` - Snooze an incident for a period [Optional]

**Key parameters**:
- `statuses[]`: Filter by status ('triggered', 'acknowledged', 'resolved')
- `service_ids[]`: Filter by service IDs
- `urgencies[]`: Filter by urgency ('high', 'low')
- `title`: Incident title (for creation)
- `service`: Service object with `id` and `type` (for creation)
- `status`: New status for update operations

**Pitfalls**:
- Incident creation requires a `service` object with both `id` and `type: 'service_reference'`
- Status transitions follow: triggered -> acknowledged -> resolved
- Cannot transition from resolved back to triggered directly
- `PAGERDUTY_UPDATE_INCIDENT_BY_ID` requires the incident ID as a path parameter
- Snooze duration is in seconds; the incident re-triggers after the snooze period

### 2. Inspect Incident Alerts and Analytics

**When to use**: User wants to review alerts within an incident or analyze incident metrics

**Tool sequence**:
1. `PAGERDUTY_GET_ALERTS_BY_INCIDENT_ID` - List alerts for an incident [Required]
2. `PAGERDUTY_GET_INCIDENT_ALERT_DETAILS` - Get details of a specific alert [Optional]
3. `PAGERDUTY_FETCH_INCIDENT_ANALYTICS_BY_ID` - Get incident analytics/metrics [Optional]

**Key parameters**:
- `incident_id`: The incident ID
- `alert_id`: Specific alert ID within the incident
- `statuses[]`: Filter alerts by status

**Pitfalls**:
- An incident can have multiple alerts; each alert has its own status
- Alert IDs are scoped to the incident
- Analytics data includes response times, engagement metrics, and resolution times

### 3. Manage Services

**When to use**: User wants to create, update, or list services

**Tool sequence**:
1. `PAGERDUTY_RETRIEVE_LIST_OF_SERVICES` - List all services [Required]
2. `PAGERDUTY_RETRIEVE_SERVICE_BY_ID` - Get service details [Optional]
3. `PAGERDUTY_CREATE_NEW_SERVICE` - Create a new technical service [Optional]
4. `PAGERDUTY_UPDATE_SERVICE_BY_ID` - Update service configuration [Optional]
5. `PAGERDUTY_CREATE_INTEGRATION_FOR_SERVICE` - Add an integration to a service [Optional]
6. `PAGERDUTY_CREATE_BUSINESS_SERVICE` - Create a business service [Optional]
7. `PAGERDUTY_UPDATE_BUSINESS_SERVICE_BY_ID` - Update a business service [Optional]

**Key parameters**:
- `name`: Service name
- `escalation_policy`: Escalation policy object with `id` and `type`
- `alert_creation`: Alert creation mode ('create_alerts_and_incidents' or 'create_incidents')
- `status`: Service status ('active', 'warning', 'critical', 'maintenance', 'disabled')

**Pitfalls**:
- Creating a service requires an existing escalation policy
- Business services are different from technical services; they represent business-level groupings
- Service integrations define how alerts are created (email, API, events)
- Disabling a service stops all incident creation for that service

### 4. Manage Schedules and On-Call

**When to use**: User wants to view or manage on-call schedules and rotations

**Tool sequence**:
1. `PAGERDUTY_GET_SCHEDULES` - List all schedules [Required]
2. `PAGERDUTY_RETRIEVE_SCHEDULE_BY_ID` - Get specific schedule details [Optional]
3. `PAGERDUTY_CREATE_NEW_SCHEDULE_LAYER` - Create a new schedule [Optional]
4. `PAGERDUTY_UPDATE_SCHEDULE_BY_ID` - Update an existing schedule [Optional]
5. `PAGERDUTY_RETRIEVE_ONCALL_LIST` - View who is currently on-call [Optional]
6. `PAGERDUTY_CREATE_SCHEDULE_OVERRIDES_CONFIGURATION` - Create temporary overrides [Optional]
7. `PAGERDUTY_DELETE_SCHEDULE_OVERRIDE_BY_ID` - Remove an override [Optional]
8. `PAGERDUTY_RETRIEVE_USERS_BY_SCHEDULE_ID` - List users in a schedule [Optional]
9. `PAGERDUTY_PREVIEW_SCHEDULE_OBJECT` - Preview schedule changes before saving [Optional]

**Key parameters**:
- `schedule_id`: Schedule identifier
- `time_zone`: Schedule timezone (e.g., 'America/New_York')
- `schedule_layers`: Array of rotation layer configurations
- `since`/`until`: Date range for on-call queries (ISO 8601)
- `override`: Override object with user, start, and end times

**Pitfalls**:
- Schedule layers define rotation order; multiple layers can overlap
- Overrides are temporary and take precedence over the normal schedule
- `since` and `until` are required for on-call queries to scope the time range
- Time zones must be valid IANA timezone strings
- Preview before saving complex schedule changes to verify correctness

### 5. Manage Escalation Policies

**When to use**: User wants to create or modify escalation policies

**Tool sequence**:
1. `PAGERDUTY_FETCH_ESCALATION_POLICES_LIST` - List all escalation policies [Required]
2. `PAGERDUTY_GET_ESCALATION_POLICY_BY_ID` - Get policy details [Optional]
3. `PAGERDUTY_CREATE_ESCALATION_POLICY` - Create a new policy [Optional]
4. `PAGERDUTY_UPDATE_ESCALATION_POLICY_BY_ID` - Update an existing policy [Optional]
5. `PAGERDUTY_AUDIT_ESCALATION_POLICY_RECORDS` - View audit trail for a policy [Optional]

**Key parameters**:
- `name`: Policy name
- `escalation_rules`: Array of escalation rule objects
- `num_loops`: Number of times to loop through rules before stopping (0 = no loop)
- `escalation_delay_in_minutes`: Delay between escalation levels

**Pitfalls**:
- Each escalation rule requires at least one target (user, schedule, or team)
- `escalation_delay_in_minutes` defines how long before escalating to the next level
- Setting `num_loops` to 0 means the policy runs once and stops
- Deleting a policy fails if services still reference it

### 6. Manage Teams

**When to use**: User wants to create or manage PagerDuty teams

**Tool sequence**:
1. `PAGERDUTY_CREATE_NEW_TEAM_WITH_DETAILS` - Create a new team [Required]

**Key parameters**:
- `name`: Team name
- `description`: Team description

**Pitfalls**:
- Team names must be unique within the account
- Teams are used to scope services, escalation policies, and schedules

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active PagerDuty connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `pagerduty`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @pagerduty-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @pagerduty-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @pagerduty-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @pagerduty-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/pagerduty-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@odoo-hr-payroll-setup-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-inventory-optimizer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-l10n-compliance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-manufacturing-advisor-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List incidents | PAGERDUTY_FETCH_INCIDENT_LIST | statuses[], service_ids[] |
| Get incident | PAGERDUTY_RETRIEVE_INCIDENT_BY_INCIDENT_ID | incident_id |
| Create incident | PAGERDUTY_CREATE_INCIDENT_RECORD | title, service |
| Update incident | PAGERDUTY_UPDATE_INCIDENT_BY_ID | incident_id, status |
| Add incident note | PAGERDUTY_POST_INCIDENT_NOTE_USING_ID | incident_id, content |
| Snooze incident | PAGERDUTY_SNOOZE_INCIDENT_BY_DURATION | incident_id, duration |
| Get incident alerts | PAGERDUTY_GET_ALERTS_BY_INCIDENT_ID | incident_id |
| Incident analytics | PAGERDUTY_FETCH_INCIDENT_ANALYTICS_BY_ID | incident_id |
| List services | PAGERDUTY_RETRIEVE_LIST_OF_SERVICES | (none) |
| Get service | PAGERDUTY_RETRIEVE_SERVICE_BY_ID | service_id |
| Create service | PAGERDUTY_CREATE_NEW_SERVICE | name, escalation_policy |
| Update service | PAGERDUTY_UPDATE_SERVICE_BY_ID | service_id |
| List schedules | PAGERDUTY_GET_SCHEDULES | (none) |
| Get schedule | PAGERDUTY_RETRIEVE_SCHEDULE_BY_ID | schedule_id |
| Get on-call | PAGERDUTY_RETRIEVE_ONCALL_LIST | since, until |
| Create schedule override | PAGERDUTY_CREATE_SCHEDULE_OVERRIDES_CONFIGURATION | schedule_id |
| List escalation policies | PAGERDUTY_FETCH_ESCALATION_POLICES_LIST | (none) |
| Create escalation policy | PAGERDUTY_CREATE_ESCALATION_POLICY | name, escalation_rules |
| Create team | PAGERDUTY_CREATE_NEW_TEAM_WITH_DETAILS | name, description |

#### Imported: Common Patterns

### ID Resolution

**Service name -> Service ID**:
```
1. Call PAGERDUTY_RETRIEVE_LIST_OF_SERVICES
2. Find service by name in response
3. Extract id field
```

**Schedule name -> Schedule ID**:
```
1. Call PAGERDUTY_GET_SCHEDULES
2. Find schedule by name in response
3. Extract id field
```

### Incident Lifecycle

```
1. Incident triggered (via API, integration, or manual creation)
2. On-call user notified per escalation policy
3. User acknowledges -> status: 'acknowledged'
4. User resolves -> status: 'resolved'
```

### Pagination

- PagerDuty uses offset-based pagination
- Check response for `more` boolean field
- Use `offset` and `limit` parameters
- Continue until `more` is false

#### Imported: Known Pitfalls

**ID Formats**:
- All PagerDuty IDs are alphanumeric strings (e.g., 'P1234AB')
- Service references require `type: 'service_reference'`
- User references require `type: 'user_reference'`

**Status Transitions**:
- Incidents: triggered -> acknowledged -> resolved (forward only)
- Services: active, warning, critical, maintenance, disabled

**Rate Limits**:
- PagerDuty API enforces rate limits per account
- Implement exponential backoff on 429 responses
- Bulk operations should be spaced out

**Response Parsing**:
- Response data may be nested under `data` or `data.data`
- Parse defensively with fallback patterns
- Pagination uses `offset`/`limit`/`more` pattern

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
