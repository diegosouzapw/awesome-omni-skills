---
name: outlook-calendar-automation
description: "Outlook Calendar Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Outlook Calendar tasks via Rube MCP (Composio): create events, manage attendees, find meeting times, and handle invitations. Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["outlook-calendar-automation", "automate", "outlook", "calendar", "tasks", "via", "rube", "mcp"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Outlook Calendar Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/outlook-calendar-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Outlook Calendar Automation via Rube MCP Automate Outlook Calendar operations through Composio's Outlook toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Outlook Calendar tasks via Rube MCP (Composio): create events, manage attendees, find meeting times, and handle invitations. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit outlook
3. If connection is not ACTIVE, follow the returned auth link to complete Microsoft OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. OUTLOOKLISTCALENDARS - List available calendars [Optional]
6. OUTLOOKCALENDARCREATE_EVENT - Create the event [Required]
7. subject: Event title

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `outlook`
3. If connection is not ACTIVE, follow the returned auth link to complete Microsoft OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create Calendar Events

**When to use**: User wants to schedule a new event on their Outlook calendar

**Tool sequence**:
1. `OUTLOOK_LIST_CALENDARS` - List available calendars [Optional]
2. `OUTLOOK_CALENDAR_CREATE_EVENT` - Create the event [Required]

**Key parameters**:
- `subject`: Event title
- `start_datetime`: ISO 8601 start time (e.g., '2025-01-03T10:00:00')
- `end_datetime`: ISO 8601 end time (must be after start)
- `time_zone`: IANA or Windows timezone (e.g., 'America/New_York', 'Pacific Standard Time')
- `attendees_info`: Array of email strings or attendee objects
- `body`: Event description (plain text or HTML)
- `is_html`: Set true if body contains HTML
- `location`: Physical location string
- `is_online_meeting`: Set true for Teams meeting link
- `online_meeting_provider`: 'teamsForBusiness' for Teams integration
- `show_as`: 'free', 'tentative', 'busy', 'oof'

**Pitfalls**:
- start_datetime must be chronologically before end_datetime
- time_zone is required and must be a valid IANA or Windows timezone name
- Adding attendees can trigger invitation emails immediately
- To generate a Teams meeting link, set BOTH is_online_meeting=true AND online_meeting_provider='teamsForBusiness'
- user_id defaults to 'me'; use email or UUID for other users' calendars

### 2. List and Search Events

**When to use**: User wants to find events on their calendar

**Tool sequence**:
1. `OUTLOOK_GET_MAILBOX_SETTINGS` - Get user timezone for accurate queries [Prerequisite]
2. `OUTLOOK_LIST_EVENTS` - Search events with filters [Required]
3. `OUTLOOK_GET_EVENT` - Get full details for a specific event [Optional]
4. `OUTLOOK_GET_CALENDAR_VIEW` - Get events active during a time window [Alternative]

**Key parameters**:
- `filter`: OData filter string (e.g., "start/dateTime ge '2024-07-01T00:00:00Z'")
- `select`: Array of properties to return
- `orderby`: Sort criteria (e.g., ['start/dateTime desc'])
- `top`: Results per page (1-999)
- `timezone`: Display timezone for results
- `start_datetime`/`end_datetime`: For CALENDAR_VIEW time window (UTC with Z suffix)

**Pitfalls**:
- OData filter datetime values require single quotes and Z suffix
- Use 'start/dateTime' for event start filtering, NOT 'receivedDateTime' (that is for emails)
- 'createdDateTime' supports orderby/select but NOT filtering
- Pagination: follow @odata.nextLink until all pages are collected
- CALENDAR_VIEW is better for "what's on my calendar today" queries (includes spanning events)
- LIST_EVENTS is better for keyword/category filtering
- Response events have start/end nested as start.dateTime and end.dateTime

### 3. Update Events

**When to use**: User wants to modify an existing calendar event

**Tool sequence**:
1. `OUTLOOK_LIST_EVENTS` - Find the event to update [Prerequisite]
2. `OUTLOOK_UPDATE_CALENDAR_EVENT` - Update the event [Required]

**Key parameters**:
- `event_id`: Unique event identifier (from LIST_EVENTS)
- `subject`: New event title (optional)
- `start_datetime`/`end_datetime`: New times (optional)
- `time_zone`: Timezone for new times
- `attendees`: Updated attendee list (replaces existing if provided)
- `body`: Updated description with contentType and content
- `location`: Updated location

**Pitfalls**:
- UPDATE merges provided fields with existing event; unspecified fields are preserved
- Providing attendees replaces the ENTIRE attendee list; include all desired attendees
- Providing categories replaces the ENTIRE category list
- Updating times may trigger re-sends to attendees
- event_id is required; obtain from LIST_EVENTS first

### 4. Delete Events and Decline Invitations

**When to use**: User wants to remove an event or decline a meeting invitation

**Tool sequence**:
1. `OUTLOOK_DELETE_EVENT` - Delete an event [Optional]
2. `OUTLOOK_DECLINE_EVENT` - Decline a meeting invitation [Optional]

**Key parameters**:
- `event_id`: Event to delete or decline
- `send_notifications`: Send cancellation notices to attendees (default true)
- `comment`: Reason for declining (for DECLINE_EVENT)
- `proposedNewTime`: Suggest alternative time when declining

**Pitfalls**:
- Deletion with send_notifications=true sends cancellation emails
- Declining supports proposing a new time with start/end in ISO 8601 format
- Deleting a recurring event master deletes all occurrences
- sendResponse in DECLINE_EVENT controls whether the organizer is notified

### 5. Find Available Meeting Times

**When to use**: User wants to find optimal meeting slots across multiple people

**Tool sequence**:
1. `OUTLOOK_FIND_MEETING_TIMES` - Get meeting time suggestions [Required]
2. `OUTLOOK_GET_SCHEDULE` - Check free/busy for specific people [Alternative]

**Key parameters**:
- `attendees`: Array of attendee objects with email and type
- `meetingDuration`: ISO 8601 duration (e.g., 'PT1H' for 1 hour, 'PT30M' for 30 min)
- `timeConstraint`: Time slots to search within
- `minimumAttendeePercentage`: Minimum confidence threshold (0-100)
- `Schedules`: Email array for GET_SCHEDULE
- `StartTime`/`EndTime`: Time window for schedule lookup (max 62 days)

**Pitfalls**:
- FIND_MEETING_TIMES searches within work hours by default; use activityDomain='unrestricted' for 24/7
- Time constraint time slots require dateTime and timeZone for both start and end
- GET_SCHEDULE period cannot exceed 62 days
- Meeting suggestions respect attendee availability but may return suboptimal times for complex groups

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Outlook connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `outlook`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @outlook-calendar-automation to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/outlook-calendar-automation/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/outlook-calendar-automation/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @outlook-calendar-automation using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/outlook-calendar-automation`, fails to mention provenance, or does not use the support pack at all.
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
| Create event | OUTLOOK_CALENDAR_CREATE_EVENT | subject, start_datetime, end_datetime, time_zone |
| List events | OUTLOOK_LIST_EVENTS | filter, select, top, timezone |
| Get event details | OUTLOOK_GET_EVENT | event_id |
| Calendar view | OUTLOOK_GET_CALENDAR_VIEW | start_datetime, end_datetime |
| Update event | OUTLOOK_UPDATE_CALENDAR_EVENT | event_id, subject, start_datetime |
| Delete event | OUTLOOK_DELETE_EVENT | event_id, send_notifications |
| Decline event | OUTLOOK_DECLINE_EVENT | event_id, comment |
| Find meeting times | OUTLOOK_FIND_MEETING_TIMES | attendees, meetingDuration |
| Get schedule | OUTLOOK_GET_SCHEDULE | Schedules, StartTime, EndTime |
| List calendars | OUTLOOK_LIST_CALENDARS | user_id |
| Mailbox settings | OUTLOOK_GET_MAILBOX_SETTINGS | select |

#### Imported: Common Patterns

### Event ID Resolution

```
1. Call OUTLOOK_LIST_EVENTS with time-bound filter
2. Find target event by subject or other criteria
3. Extract event id (e.g., 'AAMkAGI2TAAA=')
4. Use in UPDATE, DELETE, or GET_EVENT calls
```

### OData Filter Syntax for Calendar

**Time range filter**:
```
filter: "start/dateTime ge '2024-07-01T00:00:00Z' and start/dateTime le '2024-07-31T23:59:59Z'"
```

**Subject contains**:
```
filter: "contains(subject, 'Project Review')"
```

**Combined**:
```
filter: "contains(subject, 'Review') and categories/any(c:c eq 'Work')"
```

### Timezone Handling

- Get user timezone: `OUTLOOK_GET_MAILBOX_SETTINGS` with select=['timeZone']
- Use consistent timezone in filter datetime values
- Calendar View requires UTC timestamps with Z suffix
- LIST_EVENTS filter accepts timezone in datetime values

### Online Meeting Creation

```
1. Set is_online_meeting: true
2. Set online_meeting_provider: 'teamsForBusiness'
3. Create event with OUTLOOK_CALENDAR_CREATE_EVENT
4. Teams join link available in response onlineMeeting field
5. Or retrieve via OUTLOOK_GET_EVENT for the full join URL
```

#### Imported: Known Pitfalls

**DateTime Formats**:
- ISO 8601 format required: '2025-01-03T10:00:00'
- Calendar View requires UTC with Z: '2025-01-03T10:00:00Z'
- Filter values need single quotes: "'2025-01-03T00:00:00Z'"
- Timezone mismatches shift event boundaries; always resolve user timezone first

**OData Filter Errors**:
- 400 Bad Request usually indicates filter syntax issues
- Not all event properties support filtering (createdDateTime does not)
- Retry with adjusted syntax/bounds on 400 errors
- Valid filter fields: start/dateTime, end/dateTime, subject, categories, isAllDay

**Attendee Management**:
- Adding attendees triggers invitation emails
- Updating attendees replaces the full list; include all desired attendees
- Attendee types: 'required', 'optional', 'resource'
- Calendar delegation affects which calendars are accessible

**Response Structure**:
- Events nested at response.data.value
- Event times at event.start.dateTime and event.end.dateTime
- Calendar View may nest at data.results[i].response.data.value
- Parse defensively with fallbacks for different nesting levels
