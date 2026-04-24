---
name: close-automation-v2
description: "Close CRM Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Close CRM tasks via Rube MCP (Composio): create leads, manage calls/SMS, handle tasks, and track notes. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["close-automation-v2", "close-automation", "automate", "close", "crm", "tasks", "via", "rube"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-24"
---

# Close CRM Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/close-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Close CRM Automation via Rube MCP Automate Close CRM operations through Composio's Close toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Close CRM tasks via Rube MCP (Composio): create leads, manage calls/SMS, handle tasks, and track notes. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit close
3. If connection is not ACTIVE, follow the returned auth link to complete Close API authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. CLOSECREATELEAD - Create a new lead in Close [Required]
6. name: Lead/company name
7. contacts: Array of contact objects associated with the lead

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `close`
3. If connection is not ACTIVE, follow the returned auth link to complete Close API authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create and Manage Leads

**When to use**: User wants to create new leads or manage existing lead records

**Tool sequence**:
1. `CLOSE_CREATE_LEAD` - Create a new lead in Close [Required]

**Key parameters**:
- `name`: Lead/company name
- `contacts`: Array of contact objects associated with the lead
- `custom`: Custom field values as key-value pairs
- `status_id`: Lead status ID

**Pitfalls**:
- Leads in Close represent companies/organizations, not individual people
- Contacts are nested within leads; create the lead first, then contacts are included
- Custom field keys use the custom field ID (e.g., 'custom.cf_XXX'), not display names
- Duplicate lead detection is not automatic; check before creating

### 2. Log Calls

**When to use**: User wants to log a phone call activity against a lead

**Tool sequence**:
1. `CLOSE_CREATE_CALL` - Log a call activity [Required]

**Key parameters**:
- `lead_id`: ID of the associated lead
- `contact_id`: ID of the contact called
- `direction`: 'outbound' or 'inbound'
- `status`: Call status ('completed', 'no-answer', 'busy', etc.)
- `duration`: Call duration in seconds
- `note`: Call notes

**Pitfalls**:
- lead_id is required; calls must be associated with a lead
- Duration is in seconds, not minutes
- Call direction affects reporting and analytics
- contact_id is optional but recommended for tracking

### 3. Send SMS Messages

**When to use**: User wants to send or log SMS messages through Close

**Tool sequence**:
1. `CLOSE_CREATE_SMS` - Send or log an SMS message [Required]

**Key parameters**:
- `lead_id`: ID of the associated lead
- `contact_id`: ID of the contact
- `direction`: 'outbound' or 'inbound'
- `text`: SMS message content
- `status`: Message status

**Pitfalls**:
- SMS functionality requires Close phone/SMS integration to be configured
- lead_id is required for all SMS activities
- Outbound SMS may require a verified sending number
- Message length limits may apply depending on carrier

### 4. Manage Tasks

**When to use**: User wants to create or manage follow-up tasks

**Tool sequence**:
1. `CLOSE_CREATE_TASK` - Create a new task [Required]

**Key parameters**:
- `lead_id`: Associated lead ID
- `text`: Task description
- `date`: Due date for the task
- `assigned_to`: User ID of the assignee
- `is_complete`: Whether the task is completed

**Pitfalls**:
- Tasks are associated with leads, not contacts
- Date format should follow ISO 8601
- assigned_to requires the Close user ID, not email or name
- Tasks without a date appear in the 'no due date' section

### 5. Manage Notes

**When to use**: User wants to add or retrieve notes on leads

**Tool sequence**:
1. `CLOSE_GET_NOTE` - Retrieve a specific note [Required]

**Key parameters**:
- `note_id`: ID of the note to retrieve

**Pitfalls**:
- Notes are associated with leads
- Note IDs are required for retrieval; search leads first to find note references
- Notes support plain text and basic formatting

### 6. Delete Activities

**When to use**: User wants to remove call records or other activities

**Tool sequence**:
1. `CLOSE_DELETE_CALL` - Delete a call activity [Required]

**Key parameters**:
- `call_id`: ID of the call to delete

**Pitfalls**:
- Deletion is permanent and cannot be undone
- Only the call creator or admin can delete calls
- Deleting a call removes it from all reports and timelines

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Close connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `close`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @close-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @close-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @close-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @close-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/close-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@calendly-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@canva-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@canvas-design-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@carrier-relationship-management-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| Create lead | CLOSE_CREATE_LEAD | name, contacts, custom |
| Log call | CLOSE_CREATE_CALL | lead_id, direction, status, duration |
| Send SMS | CLOSE_CREATE_SMS | lead_id, text, direction |
| Create task | CLOSE_CREATE_TASK | lead_id, text, date, assigned_to |
| Get note | CLOSE_GET_NOTE | note_id |
| Delete call | CLOSE_DELETE_CALL | call_id |

#### Imported: Common Patterns

### Lead and Contact Relationship

```
Close data model:
- Lead = Company/Organization
  - Contact = Person (nested within Lead)
  - Activity = Call, SMS, Email, Note (linked to Lead)
  - Task = Follow-up item (linked to Lead)
  - Opportunity = Deal (linked to Lead)
```

### ID Resolution

**Lead ID**:
```
1. Search for leads using the Close search API
2. Extract lead_id from results (format: 'lead_XXXXXXXXXXXXX')
3. Use lead_id in all activity creation calls
```

**Contact ID**:
```
1. Retrieve lead details to get nested contacts
2. Extract contact_id (format: 'cont_XXXXXXXXXXXXX')
3. Use in call/SMS activities for accurate tracking
```

### Activity Logging Pattern

```
1. Identify the lead_id and optionally contact_id
2. Create the activity (call, SMS, note) with lead_id
3. Include relevant metadata (duration, direction, status)
4. Create follow-up tasks if needed
```

#### Imported: Known Pitfalls

**ID Formats**:
- Lead IDs: 'lead_XXXXXXXXXXXXX'
- Contact IDs: 'cont_XXXXXXXXXXXXX'
- Activity IDs vary by type: 'acti_XXXXXXXXXXXXX', 'call_XXXXXXXXXXXXX'
- Custom field IDs: 'custom.cf_XXXXXXXXXXXXX'
- Always use the full ID string

**Rate Limits**:
- Close API has rate limits based on your plan
- Implement delays between bulk operations
- Monitor response headers for rate limit status
- 429 responses require backoff

**Custom Fields**:
- Custom fields are referenced by their API ID, not display name
- Different lead statuses may have different required custom fields
- Custom field types (text, number, date, dropdown) enforce value formats

**Data Integrity**:
- Leads are the primary entity; contacts and activities are linked to leads
- Deleting a lead may cascade to its contacts and activities
- Bulk operations should validate IDs before executing

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
