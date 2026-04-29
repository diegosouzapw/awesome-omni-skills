---
name: "cal-com-automation"
description: "Cal.com Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Cal.com tasks via Rube MCP (Composio): manage bookings, check availability, configure webhooks, and handle teams. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "cli-automation"
tags:
  - "cal-com-automation"
  - "automate"
  - "cal"
  - "com"
  - "tasks"
  - "via"
  - "rube"
  - "mcp"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-14"
date_updated: "2026-04-28"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "cal-com-automation"
family_name: "Cal.com Automation via Rube MCP"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/cal-com-automation"
upstream_skill: "skills/cal-com-automation"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "263"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "96a8b32dc2a22bdb194119e570fe385417bd3d21"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "cal-com-automation"
---

# Cal.com Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/cal-com-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Cal.com Automation via Rube MCP Automate Cal.com scheduling operations through Composio's Cal toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Cal.com tasks via Rube MCP (Composio): manage bookings, check availability, configure webhooks, and handle teams. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit cal
3. If connection is not ACTIVE, follow the returned auth link to complete Cal.com authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. CALFETCHALL_BOOKINGS - List all bookings with filters [Required]
6. CALPOSTNEWBOOKINGREQUEST - Create a new booking [Optional]
7. status: Filter by booking status ('upcoming', 'recurring', 'past', 'cancelled', 'unconfirmed')

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `cal`
3. If connection is not ACTIVE, follow the returned auth link to complete Cal.com authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Manage Bookings

**When to use**: User wants to list, create, or review bookings

**Tool sequence**:
1. `CAL_FETCH_ALL_BOOKINGS` - List all bookings with filters [Required]
2. `CAL_POST_NEW_BOOKING_REQUEST` - Create a new booking [Optional]

**Key parameters for listing**:
- `status`: Filter by booking status ('upcoming', 'recurring', 'past', 'cancelled', 'unconfirmed')
- `afterStart`: Filter bookings after this date (ISO 8601)
- `beforeEnd`: Filter bookings before this date (ISO 8601)

**Key parameters for creation**:
- `eventTypeId`: Event type ID for the booking
- `start`: Booking start time (ISO 8601)
- `end`: Booking end time (ISO 8601)
- `name`: Attendee name
- `email`: Attendee email
- `timeZone`: Attendee timezone (IANA format)
- `language`: Attendee language code
- `metadata`: Additional metadata object

**Pitfalls**:
- Date filters use ISO 8601 format with timezone (e.g., '2024-01-15T09:00:00Z')
- `eventTypeId` must reference a valid, active event type
- Booking creation requires matching an available slot; check availability first
- Time zone must be a valid IANA timezone string (e.g., 'America/New_York')
- Status filter values are specific strings; invalid values return empty results

### 2. Check Availability

**When to use**: User wants to find free/busy times or available booking slots

**Tool sequence**:
1. `CAL_RETRIEVE_CALENDAR_BUSY_TIMES` - Get busy time blocks [Required]
2. `CAL_GET_AVAILABLE_SLOTS_INFO` - Get specific available slots [Required]

**Key parameters**:
- `dateFrom`: Start date for availability check (YYYY-MM-DD)
- `dateTo`: End date for availability check (YYYY-MM-DD)
- `eventTypeId`: Event type to check slots for
- `timeZone`: Timezone for the availability response
- `loggedInUsersTz`: Timezone of the requesting user

**Pitfalls**:
- Busy times show when the user is NOT available
- Available slots are specific to an event type's duration and configuration
- Date range should be reasonable (not months in advance) to get accurate results
- Timezone affects how slots are displayed; always specify explicitly
- Availability reflects calendar integrations (Google Calendar, Outlook, etc.)

### 3. Configure Webhooks

**When to use**: User wants to set up or manage webhook notifications for booking events

**Tool sequence**:
1. `CAL_RETRIEVE_WEBHOOKS_LIST` - List existing webhooks [Required]
2. `CAL_GET_WEBHOOK_BY_ID` - Get specific webhook details [Optional]
3. `CAL_UPDATE_WEBHOOK_BY_ID` - Update webhook configuration [Optional]
4. `CAL_DELETE_WEBHOOK_BY_ID` - Remove a webhook [Optional]

**Key parameters**:
- `id`: Webhook ID for GET/UPDATE/DELETE operations
- `subscriberUrl`: Webhook endpoint URL
- `eventTriggers`: Array of event types to trigger on
- `active`: Whether the webhook is active
- `secret`: Webhook signing secret

**Pitfalls**:
- Webhook URLs must be publicly accessible HTTPS endpoints
- Event triggers include: 'BOOKING_CREATED', 'BOOKING_RESCHEDULED', 'BOOKING_CANCELLED', etc.
- Inactive webhooks do not fire; toggle `active` to enable/disable
- Webhook secrets are used for payload signature verification

### 4. Manage Teams

**When to use**: User wants to create, view, or manage teams and team event types

**Tool sequence**:
1. `CAL_GET_TEAMS_LIST` - List all teams [Required]
2. `CAL_GET_TEAM_INFORMATION_BY_TEAM_ID` - Get specific team details [Optional]
3. `CAL_CREATE_TEAM_IN_ORGANIZATION` - Create a new team [Optional]
4. `CAL_RETRIEVE_TEAM_EVENT_TYPES` - List event types for a team [Optional]

**Key parameters**:
- `teamId`: Team identifier
- `name`: Team name (for creation)
- `slug`: URL-friendly team identifier

**Pitfalls**:
- Team creation may require organization-level permissions
- Team event types are separate from personal event types
- Team slugs must be URL-safe and unique within the organization

### 5. Organization Management

**When to use**: User wants to view organization details

**Tool sequence**:
1. `CAL_GET_ORGANIZATION_ID` - Get the organization ID [Required]

**Key parameters**: (none required)

**Pitfalls**:
- Organization ID is needed for team creation and org-level operations
- Not all Cal.com accounts have organizations; personal plans may return errors

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Cal.com connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `cal`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @cal-com-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @cal-com-automation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @cal-com-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @cal-com-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/cal-com-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@burp-suite-testing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@burpsuite-project-parser` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@business-analyst` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@busybox-on-windows` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List bookings | CAL_FETCH_ALL_BOOKINGS | status, afterStart, beforeEnd |
| Create booking | CAL_POST_NEW_BOOKING_REQUEST | eventTypeId, start, end, name, email |
| Get busy times | CAL_RETRIEVE_CALENDAR_BUSY_TIMES | dateFrom, dateTo |
| Get available slots | CAL_GET_AVAILABLE_SLOTS_INFO | eventTypeId, dateFrom, dateTo |
| List webhooks | CAL_RETRIEVE_WEBHOOKS_LIST | (none) |
| Get webhook | CAL_GET_WEBHOOK_BY_ID | id |
| Update webhook | CAL_UPDATE_WEBHOOK_BY_ID | id, subscriberUrl, eventTriggers |
| Delete webhook | CAL_DELETE_WEBHOOK_BY_ID | id |
| List teams | CAL_GET_TEAMS_LIST | (none) |
| Get team | CAL_GET_TEAM_INFORMATION_BY_TEAM_ID | teamId |
| Create team | CAL_CREATE_TEAM_IN_ORGANIZATION | name, slug |
| Team event types | CAL_RETRIEVE_TEAM_EVENT_TYPES | teamId |
| Get org ID | CAL_GET_ORGANIZATION_ID | (none) |

#### Imported: Common Patterns

### Booking Creation Flow

```
1. Call CAL_GET_AVAILABLE_SLOTS_INFO to find open slots
2. Present available times to the user
3. Call CAL_POST_NEW_BOOKING_REQUEST with selected slot
4. Confirm booking creation response
```

### ID Resolution

**Team name -> Team ID**:
```
1. Call CAL_GET_TEAMS_LIST
2. Find team by name in response
3. Extract id field
```

### Webhook Setup

```
1. Call CAL_RETRIEVE_WEBHOOKS_LIST to check existing hooks
2. Create or update webhook with desired triggers
3. Verify webhook fires on test booking
```

#### Imported: Known Pitfalls

**Date/Time Formats**:
- Booking times: ISO 8601 with timezone (e.g., '2024-01-15T09:00:00Z')
- Availability dates: YYYY-MM-DD format
- Always specify timezone explicitly to avoid confusion

**Event Types**:
- Event type IDs are numeric integers
- Event types define duration, location, and booking rules
- Disabled event types cannot accept new bookings

**Permissions**:
- Team operations require team membership or admin access
- Organization operations require org-level permissions
- Webhook management requires appropriate access level

**Rate Limits**:
- Cal.com API has rate limits per API key
- Implement backoff on 429 responses

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
