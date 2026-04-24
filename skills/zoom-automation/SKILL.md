---
name: zoom-automation
description: "Zoom Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Zoom meeting creation, management, recordings, webinars, and participant tracking via Rube MCP (Composio). Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["zoom-automation", "automate", "zoom", "meeting", "creation", "management", "recordings", "webinars"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# Zoom Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/zoom-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Zoom Automation via Rube MCP Automate Zoom operations including meeting scheduling, webinar management, cloud recording retrieval, participant tracking, and usage reporting through Composio's Zoom toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Zoom meeting creation, management, recordings, webinars, and participant tracking via Rube MCP (Composio). Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit zoom
3. If connection is not ACTIVE, follow the returned auth link to complete Zoom OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. ZOOMGETUSER - Verify authenticated user and check license type [Prerequisite]
6. ZOOMCREATEA_MEETING - Create the meeting with topic, time, duration, and settings [Required]
7. ZOOMGETAMEETING - Retrieve full meeting details including joinurl [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `zoom`
3. If connection is not ACTIVE, follow the returned auth link to complete Zoom OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create and Schedule Meetings

**When to use**: User wants to create a new Zoom meeting with specific time, duration, and settings

**Tool sequence**:
1. `ZOOM_GET_USER` - Verify authenticated user and check license type [Prerequisite]
2. `ZOOM_CREATE_A_MEETING` - Create the meeting with topic, time, duration, and settings [Required]
3. `ZOOM_GET_A_MEETING` - Retrieve full meeting details including join_url [Optional]
4. `ZOOM_UPDATE_A_MEETING` - Modify meeting settings or reschedule [Optional]
5. `ZOOM_ADD_A_MEETING_REGISTRANT` - Register participants for registration-enabled meetings [Optional]

**Key parameters**:
- `userId`: Always use `"me"` for user-level apps
- `topic`: Meeting subject line
- `type`: `1` (instant), `2` (scheduled), `3` (recurring no fixed time), `8` (recurring fixed time)
- `start_time`: ISO 8601 format (`yyyy-MM-ddTHH:mm:ssZ` for UTC or `yyyy-MM-ddTHH:mm:ss` with timezone field)
- `timezone`: Timezone ID (e.g., `"America/New_York"`)
- `duration`: Duration in minutes
- `settings__auto_recording`: `"none"`, `"local"`, or `"cloud"`
- `settings__waiting_room`: Boolean to enable waiting room
- `settings__join_before_host`: Boolean (disabled when waiting room is enabled)
- `settings__meeting_invitees`: Array of invitee objects with email addresses

**Pitfalls**:
- `start_time` must be in the future; Zoom stores and returns times in UTC regardless of input timezone
- If no `start_time` is set for type `2`, it becomes an instant meeting that expires after 30 days
- The `join_url` for participants and `start_url` for host come from the create response - persist these
- `start_url` expires in 2 hours (or 90 days for `custCreate` users)
- Meeting creation is rate-limited to 100 requests/day
- Setting names use double underscores for nesting (e.g., `settings__host_video`)

### 2. List and Manage Meetings

**When to use**: User wants to view upcoming, live, or past meetings

**Tool sequence**:
1. `ZOOM_LIST_MEETINGS` - List meetings by type (scheduled, live, upcoming, previous) [Required]
2. `ZOOM_GET_A_MEETING` - Get detailed info for a specific meeting [Optional]
3. `ZOOM_UPDATE_A_MEETING` - Modify meeting details [Optional]

**Key parameters**:
- `userId`: Use `"me"` for authenticated user
- `type`: `"scheduled"` (default), `"live"`, `"upcoming"`, `"upcoming_meetings"`, `"previous_meetings"`
- `page_size`: Records per page (default 30)
- `next_page_token`: Pagination token from previous response
- `from` / `to`: Date range filters

**Pitfalls**:
- `ZOOM_LIST_MEETINGS` excludes instant meetings and only shows unexpired scheduled meetings
- For past meetings, use `type: "previous_meetings"`
- Pagination: always follow `next_page_token` until empty to get complete results
- Token expiration: `next_page_token` expires after 15 minutes
- Meeting IDs can exceed 10 digits; store as long integers, not standard integers

### 3. Manage Recordings

**When to use**: User wants to list, retrieve, or delete cloud recordings

**Tool sequence**:
1. `ZOOM_LIST_ALL_RECORDINGS` - List all cloud recordings for a user within a date range [Required]
2. `ZOOM_GET_MEETING_RECORDINGS` - Get recordings for a specific meeting [Optional]
3. `ZOOM_DELETE_MEETING_RECORDINGS` - Move recordings to trash or permanently delete [Optional]
4. `ZOOM_LIST_ARCHIVED_FILES` - List archived meeting/webinar files [Optional]

**Key parameters**:
- `userId`: Use `"me"` for authenticated user
- `from` / `to`: Date range in `yyyy-mm-dd` format (max 1 month range)
- `meetingId`: Meeting ID or UUID for specific recording retrieval
- `action`: `"trash"` (recoverable) or `"delete"` (permanent) for deletion
- `include_fields`: Set to `"download_access_token"` to get JWT for downloading recordings
- `trash`: Set `true` to list recordings from trash

**Pitfalls**:
- Date range maximum is 1 month; API auto-adjusts `from` if range exceeds this
- Cloud Recording must be enabled on the account
- UUIDs starting with `/` or containing `//` must be double URL-encoded
- `ZOOM_DELETE_MEETING_RECORDINGS` defaults to `"trash"` action (recoverable); `"delete"` is permanent
- Download URLs require the OAuth token in the Authorization header for passcode-protected recordings
- Requires Pro plan or higher

### 4. Get Meeting Participants and Reports

**When to use**: User wants to see who attended a past meeting or get usage statistics

**Tool sequence**:
1. `ZOOM_GET_PAST_MEETING_PARTICIPANTS` - List attendees of a completed meeting [Required]
2. `ZOOM_GET_A_MEETING` - Get meeting details and registration info for upcoming meetings [Optional]
3. `ZOOM_GET_DAILY_USAGE_REPORT` - Get daily usage statistics (meetings, participants, minutes) [Optional]
4. `ZOOM_GET_A_MEETING_SUMMARY` - Get AI-generated meeting summary [Optional]

**Key parameters**:
- `meetingId`: Meeting ID (latest instance) or UUID (specific occurrence)
- `page_size`: Records per page (default 30)
- `next_page_token`: Pagination token for large participant lists

**Pitfalls**:
- `ZOOM_GET_PAST_MEETING_PARTICIPANTS` only works for completed meetings on paid plans
- Solo meetings (no other participants) return empty results
- UUID encoding: UUIDs starting with `/` or containing `//` must be double-encoded
- Always paginate with `next_page_token` until empty to avoid dropping attendees
- `ZOOM_GET_A_MEETING_SUMMARY` requires a paid plan with AI Companion enabled; free accounts get 400 errors
- `ZOOM_GET_DAILY_USAGE_REPORT` has a Heavy rate limit; avoid frequent calls

### 5. Manage Webinars

**When to use**: User wants to list webinars or register participants for webinars

**Tool sequence**:
1. `ZOOM_LIST_WEBINARS` - List scheduled or upcoming webinars [Required]
2. `ZOOM_GET_A_WEBINAR` - Get detailed webinar information [Optional]
3. `ZOOM_ADD_A_WEBINAR_REGISTRANT` - Register a participant for a webinar [Optional]

**Key parameters**:
- `userId`: Use `"me"` for authenticated user
- `type`: `"scheduled"` (default) or `"upcoming"`
- `page_size`: Records per page (default 30)
- `next_page_token`: Pagination token

**Pitfalls**:
- Webinar features require Pro plan or higher with Webinar add-on
- Free/basic accounts cannot use webinar tools
- Only shows unexpired webinars
- Registration must be enabled on the webinar for `ZOOM_ADD_A_WEBINAR_REGISTRANT` to work

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Zoom connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `zoom`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas
- Most features require a paid Zoom account (Pro plan or higher)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @zoom-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @zoom-automation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @zoom-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @zoom-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/zoom-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-web-experience-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| Create meeting | `ZOOM_CREATE_A_MEETING` | `userId`, `topic`, `start_time`, `type` |
| Get meeting details | `ZOOM_GET_A_MEETING` | `meetingId` |
| Update meeting | `ZOOM_UPDATE_A_MEETING` | `meetingId`, fields to update |
| List meetings | `ZOOM_LIST_MEETINGS` | `userId`, `type`, `page_size` |
| Get user info | `ZOOM_GET_USER` | `userId` |
| List recordings | `ZOOM_LIST_ALL_RECORDINGS` | `userId`, `from`, `to` |
| Get recording | `ZOOM_GET_MEETING_RECORDINGS` | `meetingId` |
| Delete recording | `ZOOM_DELETE_MEETING_RECORDINGS` | `meetingId`, `action` |
| Past participants | `ZOOM_GET_PAST_MEETING_PARTICIPANTS` | `meetingId`, `page_size` |
| Daily usage report | `ZOOM_GET_DAILY_USAGE_REPORT` | date params |
| Meeting summary | `ZOOM_GET_A_MEETING_SUMMARY` | `meetingId` |
| List webinars | `ZOOM_LIST_WEBINARS` | `userId`, `type` |
| Get webinar | `ZOOM_GET_A_WEBINAR` | webinar ID |
| Register for meeting | `ZOOM_ADD_A_MEETING_REGISTRANT` | `meetingId`, participant details |
| Register for webinar | `ZOOM_ADD_A_WEBINAR_REGISTRANT` | webinar ID, participant details |
| List archived files | `ZOOM_LIST_ARCHIVED_FILES` | `from`, `to` |

#### Imported: Common Patterns

### ID Resolution
- **User ID**: Always use `"me"` for user-level apps to refer to the authenticated user
- **Meeting ID**: Numeric ID (store as long integer); use for latest instance
- **Meeting UUID**: Use for specific occurrence of recurring meetings; double-encode if starts with `/` or contains `//`
- **Occurrence ID**: Use with recurring meetings to target a specific occurrence

### Pagination
Most Zoom list endpoints use token-based pagination:
- Follow `next_page_token` until it is empty or missing
- Token expires after 15 minutes
- Set explicit `page_size` (default 30, varies by endpoint)
- Do not use `page_number` (deprecated on many endpoints)

### Time Handling
- Zoom stores all times in UTC internally
- Provide `timezone` field alongside `start_time` for local time input
- Use ISO 8601 format: `yyyy-MM-ddTHH:mm:ssZ` (UTC) or `yyyy-MM-ddTHH:mm:ss` (with timezone field)
- Date-only fields use `yyyy-mm-dd` format

#### Imported: Known Pitfalls

### Plan Requirements
- Most recording and participant features require Pro plan or higher
- Webinar features require Webinar add-on
- AI meeting summaries require AI Companion feature enabled
- Archived files require "Meeting and Webinar Archiving" enabled by Zoom Support

### Rate Limits
- Meeting creation: 100 requests/day, 100 updates per meeting in 24 hours
- `ZOOM_GET_PAST_MEETING_PARTICIPANTS`: Moderate throttle; add delays for batch processing
- `ZOOM_GET_DAILY_USAGE_REPORT`: Heavy rate limit
- `ZOOM_GET_A_MEETING`, `ZOOM_GET_MEETING_RECORDINGS`: Light rate limit
- `ZOOM_LIST_MEETINGS`, `ZOOM_LIST_ALL_RECORDINGS`: Medium rate limit

### Parameter Quirks
- Nested settings use double underscore notation (e.g., `settings__waiting_room`)
- `start_url` expires in 2 hours; renew via API if needed
- `join_before_host` is automatically disabled when `waiting_room` is `true`
- Recurring meeting fields (`recurrence__*`) only apply to type `3` and `8`
- `password` field has max 10 characters with alphanumeric and `@`, `-`, `_`, `*` only

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
