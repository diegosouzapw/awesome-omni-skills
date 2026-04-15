---
name: outlook-automation
description: "Outlook Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Outlook tasks via Rube MCP (Composio): emails, calendar, contacts, folders, attachments. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["outlook-automation", "automate", "outlook", "tasks", "via", "rube", "mcp", "composio"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Outlook Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/outlook-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Outlook Automation via Rube MCP Automate Microsoft Outlook operations through Composio's Outlook toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Outlook tasks via Rube MCP (Composio): emails, calendar, contacts, folders, attachments. Always search tools first for current schemas.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Verify Rube MCP is available by confirming RUBESEARCHTOOLS responds
2. Call RUBEMANAGECONNECTIONS with toolkit outlook
3. If connection is not ACTIVE, follow the returned auth link to complete Microsoft OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. OUTLOOKSEARCHMESSAGES - Search with KQL syntax across all folders [Required]
6. OUTLOOKGETMESSAGE - Get full message details [Optional]
7. OUTLOOKLISTOUTLOOK_ATTACHMENTS - List message attachments [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `outlook`
3. If connection is not ACTIVE, follow the returned auth link to complete Microsoft OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Search and Filter Emails

**When to use**: User wants to find specific emails across their mailbox

**Tool sequence**:
1. `OUTLOOK_SEARCH_MESSAGES` - Search with KQL syntax across all folders [Required]
2. `OUTLOOK_GET_MESSAGE` - Get full message details [Optional]
3. `OUTLOOK_LIST_OUTLOOK_ATTACHMENTS` - List message attachments [Optional]
4. `OUTLOOK_DOWNLOAD_OUTLOOK_ATTACHMENT` - Download attachment [Optional]

**Key parameters**:
- `query`: KQL search string (from:, to:, subject:, received:, hasattachment:)
- `from_index`: Pagination start (0-based)
- `size`: Results per page (max 25)
- `message_id`: Message ID (use hitId from search results)

**Pitfalls**:
- Only works with Microsoft 365/Enterprise accounts (not @hotmail.com/@outlook.com)
- Pagination relies on hitsContainers[0].moreResultsAvailable; stop only when false
- Use hitId from search results as message_id for downstream calls, not resource.id
- Index latency: very recent emails may not appear immediately
- Inline images appear as attachments; filter by mimetype for real documents

### 2. Query Emails in a Folder

**When to use**: User wants to list emails in a specific folder with OData filters

**Tool sequence**:
1. `OUTLOOK_LIST_MAIL_FOLDERS` - List mail folders to get folder IDs [Prerequisite]
2. `OUTLOOK_QUERY_EMAILS` - Query emails with structured filters [Required]

**Key parameters**:
- `folder`: Folder name ('inbox', 'sentitems', 'drafts') or folder ID
- `filter`: OData filter (e.g., `isRead eq false and importance eq 'high'`)
- `top`: Max results (1-1000)
- `orderby`: Sort field and direction
- `select`: Array of fields to return

**Pitfalls**:
- QUERY_EMAILS searches a SINGLE folder only; use SEARCH_MESSAGES for cross-folder search
- Custom folders require folder IDs, not display names; use LIST_MAIL_FOLDERS
- Always check response['@odata.nextLink'] for pagination
- Cannot filter by recipient or body content; use SEARCH_MESSAGES for that

### 3. Manage Calendar Events

**When to use**: User wants to list, search, or inspect calendar events

**Tool sequence**:
1. `OUTLOOK_LIST_EVENTS` - List events with filters [Optional]
2. `OUTLOOK_GET_CALENDAR_VIEW` - Get events in a time window [Optional]
3. `OUTLOOK_GET_EVENT` - Get specific event details [Optional]
4. `OUTLOOK_LIST_CALENDARS` - List available calendars [Optional]
5. `OUTLOOK_GET_SCHEDULE` - Get free/busy info [Optional]

**Key parameters**:
- `filter`: OData filter (use start/dateTime, NOT receivedDateTime)
- `start_datetime`/`end_datetime`: ISO 8601 for calendar view
- `timezone`: IANA timezone (e.g., 'America/New_York')
- `calendar_id`: Optional non-primary calendar ID
- `select`: Fields to return

**Pitfalls**:
- Use calendar event properties only (start/dateTime, end/dateTime), NOT email properties (receivedDateTime)
- Calendar view requires start_datetime and end_datetime
- Recurring events need `expand_recurring_events=true` to see individual occurrences
- Decline status is per-attendee via attendees[].status.response

### 4. Manage Contacts

**When to use**: User wants to list, create, or organize contacts

**Tool sequence**:
1. `OUTLOOK_LIST_CONTACTS` - List contacts [Optional]
2. `OUTLOOK_CREATE_CONTACT` - Create a new contact [Optional]
3. `OUTLOOK_GET_CONTACT_FOLDERS` - List contact folders [Optional]
4. `OUTLOOK_CREATE_CONTACT_FOLDER` - Create contact folder [Optional]

**Key parameters**:
- `givenName`/`surname`: Contact name
- `emailAddresses`: Array of email objects
- `displayName`: Full display name
- `contact_folder_id`: Optional folder for contacts

**Pitfalls**:
- Contact creation supports many fields but only givenName or surname is needed

### 5. Manage Mail Folders

**When to use**: User wants to organize mail folders

**Tool sequence**:
1. `OUTLOOK_LIST_MAIL_FOLDERS` - List top-level folders [Required]
2. `OUTLOOK_LIST_CHILD_MAIL_FOLDERS` - List subfolders [Optional]
3. `OUTLOOK_CREATE_MAIL_FOLDER` - Create a new folder [Optional]

**Key parameters**:
- `parent_folder_id`: Well-known name or folder ID
- `displayName`: New folder name
- `include_hidden_folders`: Show hidden folders

**Pitfalls**:
- Well-known folder names: 'inbox', 'sentitems', 'drafts', 'deleteditems', 'junkemail', 'archive'
- Custom folder operations require the folder ID, not display name

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Outlook connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `outlook`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @outlook-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @outlook-automation against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @outlook-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @outlook-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/outlook-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| Search emails | OUTLOOK_SEARCH_MESSAGES | query, from_index, size |
| Query folder | OUTLOOK_QUERY_EMAILS | folder, filter, top |
| Get message | OUTLOOK_GET_MESSAGE | message_id |
| List attachments | OUTLOOK_LIST_OUTLOOK_ATTACHMENTS | message_id |
| Download attachment | OUTLOOK_DOWNLOAD_OUTLOOK_ATTACHMENT | message_id, attachment_id |
| List folders | OUTLOOK_LIST_MAIL_FOLDERS | (none) |
| Child folders | OUTLOOK_LIST_CHILD_MAIL_FOLDERS | parent_folder_id |
| List events | OUTLOOK_LIST_EVENTS | filter, timezone |
| Calendar view | OUTLOOK_GET_CALENDAR_VIEW | start_datetime, end_datetime |
| Get event | OUTLOOK_GET_EVENT | event_id |
| List calendars | OUTLOOK_LIST_CALENDARS | (none) |
| Free/busy | OUTLOOK_GET_SCHEDULE | schedules, times |
| List contacts | OUTLOOK_LIST_CONTACTS | top, filter |
| Create contact | OUTLOOK_CREATE_CONTACT | givenName, emailAddresses |
| Contact folders | OUTLOOK_GET_CONTACT_FOLDERS | (none) |

#### Imported: Common Patterns

### KQL Search Syntax

**Property filters**:
- `from:user@example.com` - From sender
- `to:recipient@example.com` - To recipient
- `subject:invoice` - Subject contains
- `received>=2025-01-01` - Date filter
- `hasattachment:yes` - Has attachments

**Combinators**:
- `AND` - Both conditions
- `OR` - Either condition
- Parentheses for grouping

### OData Filter Syntax

**Email filters**:
- `isRead eq false` - Unread emails
- `importance eq 'high'` - High importance
- `hasAttachments eq true` - Has attachments
- `receivedDateTime ge 2025-01-01T00:00:00Z` - Date filter

**Calendar filters**:
- `start/dateTime ge '2025-01-01T00:00:00Z'` - Events after date
- `contains(subject, 'Meeting')` - Subject contains text

#### Imported: Known Pitfalls

**Account Types**:
- SEARCH_MESSAGES requires Microsoft 365/Enterprise accounts
- Personal accounts (@hotmail.com, @outlook.com) have limited API access

**Field Confusion**:
- Email properties (receivedDateTime) differ from calendar properties (start/dateTime)
- Do NOT use email fields in calendar queries or vice versa

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
