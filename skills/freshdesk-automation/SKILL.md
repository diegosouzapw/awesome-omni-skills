---
name: freshdesk-automation
description: "Freshdesk Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Freshdesk helpdesk operations including tickets, contacts, companies, notes, and replies via Rube MCP (Composio). Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["freshdesk-automation", "automate", "freshdesk", "helpdesk", "operations", "including", "tickets", "contacts"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Freshdesk Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/freshdesk-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Freshdesk Automation via Rube MCP Automate Freshdesk customer support workflows including ticket management, contact and company operations, notes, replies, and ticket search through Composio's Freshdesk toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Freshdesk helpdesk operations including tickets, contacts, companies, notes, and replies via Rube MCP (Composio). Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit freshdesk
3. If connection is not ACTIVE, follow the returned auth link to complete Freshdesk authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. FRESHDESKSEARCHCONTACTS - Find requester by email to get requester_id [Optional]
6. FRESHDESKLISTTICKET_FIELDS - Check available custom fields and statuses [Optional]
7. FRESHDESKCREATETICKET - Create a new ticket with subject, description, requester info [Required]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `freshdesk`
3. If connection is not ACTIVE, follow the returned auth link to complete Freshdesk authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create and Manage Tickets

**When to use**: User wants to create a new support ticket, update an existing ticket, or view ticket details.

**Tool sequence**:
1. `FRESHDESK_SEARCH_CONTACTS` - Find requester by email to get requester_id [Optional]
2. `FRESHDESK_LIST_TICKET_FIELDS` - Check available custom fields and statuses [Optional]
3. `FRESHDESK_CREATE_TICKET` - Create a new ticket with subject, description, requester info [Required]
4. `FRESHDESK_UPDATE_TICKET` - Modify ticket status, priority, assignee, or other fields [Optional]
5. `FRESHDESK_VIEW_TICKET` - Retrieve full ticket details by ID [Optional]

**Key parameters for FRESHDESK_CREATE_TICKET**:
- `subject`: Ticket subject (required)
- `description`: HTML content of the ticket (required)
- `email`: Requester email (at least one requester identifier required)
- `requester_id`: User ID of requester (alternative to email)
- `status`: 2=Open, 3=Pending, 4=Resolved, 5=Closed (default 2)
- `priority`: 1=Low, 2=Medium, 3=High, 4=Urgent (default 1)
- `source`: 1=Email, 2=Portal, 3=Phone, 7=Chat (default 2)
- `responder_id`: Agent ID to assign the ticket to
- `group_id`: Group to assign the ticket to
- `tags`: Array of tag strings
- `custom_fields`: Object with `cf_<field_name>` keys

**Pitfalls**:
- At least one requester identifier is required: `requester_id`, `email`, `phone`, `facebook_id`, `twitter_id`, or `unique_external_id`
- If `phone` is provided without `email`, then `name` becomes mandatory
- `description` supports HTML formatting
- `attachments` field expects multipart/form-data format, not file paths or URLs
- Custom field keys must be prefixed with `cf_` (e.g., `cf_reference_number`)
- Status and priority are integers, not strings

### 2. Search and Filter Tickets

**When to use**: User wants to find tickets by status, priority, date range, agent, or custom fields.

**Tool sequence**:
1. `FRESHDESK_GET_TICKETS` - List tickets with simple filters (status, priority, agent) [Required]
2. `FRESHDESK_GET_SEARCH` - Advanced ticket search with query syntax [Required]
3. `FRESHDESK_VIEW_TICKET` - Get full details for specific tickets from results [Optional]
4. `FRESHDESK_LIST_TICKET_FIELDS` - Check available fields for search queries [Optional]

**Key parameters for FRESHDESK_GET_TICKETS**:
- `status`: Filter by status integer (2=Open, 3=Pending, 4=Resolved, 5=Closed)
- `priority`: Filter by priority integer (1-4)
- `agent_id`: Filter by assigned agent
- `requester_id`: Filter by requester
- `email`: Filter by requester email
- `created_since`: ISO 8601 timestamp
- `page` / `per_page`: Pagination (default 30 per page)
- `sort_by` / `sort_order`: Sort field and direction

**Key parameters for FRESHDESK_GET_SEARCH**:
- `query`: Query string like `"status:2 AND priority:3"` or `"(created_at:>'2024-01-01' AND tag:'urgent')"`
- `page`: Page number (1-10, max 300 total results)

**Pitfalls**:
- `FRESHDESK_GET_SEARCH` query must be enclosed in double quotes
- Query string limited to 512 characters
- Maximum 10 pages (300 results) from search endpoints
- Date fields in queries use UTC format YYYY-MM-DD
- Use `null` keyword to find tickets with empty fields (e.g., `"agent_id:null"`)
- `FRESHDESK_LIST_ALL_TICKETS` takes no parameters and returns all tickets (use GET_TICKETS for filtering)

### 3. Reply to and Add Notes on Tickets

**When to use**: User wants to send a reply to a customer, add internal notes, or view conversation history.

**Tool sequence**:
1. `FRESHDESK_VIEW_TICKET` - Verify ticket exists and check current state [Prerequisite]
2. `FRESHDESK_REPLY_TO_TICKET` - Send a public reply to the requester [Required]
3. `FRESHDESK_ADD_NOTE_TO_TICKET` - Add a private or public note [Required]
4. `FRESHDESK_LIST_ALL_TICKET_CONVERSATIONS` - View all messages and notes on a ticket [Optional]
5. `FRESHDESK_UPDATE_CONVERSATIONS` - Edit an existing note [Optional]

**Key parameters for FRESHDESK_REPLY_TO_TICKET**:
- `ticket_id`: Ticket ID (integer, required)
- `body`: Reply content, supports HTML (required)
- `cc_emails` / `bcc_emails`: Additional recipients (max 50 total across to/cc/bcc)
- `from_email`: Override sender email if multiple support emails configured
- `user_id`: Agent ID to reply on behalf of

**Key parameters for FRESHDESK_ADD_NOTE_TO_TICKET**:
- `ticket_id`: Ticket ID (integer, required)
- `body`: Note content, supports HTML (required)
- `private`: true for agent-only visibility, false for public (default true)
- `notify_emails`: Only accepts agent email addresses, not external contacts

**Pitfalls**:
- There are two reply tools: `FRESHDESK_REPLY_TO_TICKET` (more features) and `FRESHDESK_REPLY_TICKET` (simpler); both work
- `FRESHDESK_ADD_NOTE_TO_TICKET` defaults to private (agent-only); set `private: false` for public notes
- `notify_emails` in notes only accepts agent emails, not customer emails
- Only notes can be edited via `FRESHDESK_UPDATE_CONVERSATIONS`; incoming replies cannot be edited

### 4. Manage Contacts and Companies

**When to use**: User wants to create, search, or manage customer contacts and company records.

**Tool sequence**:
1. `FRESHDESK_SEARCH_CONTACTS` - Search contacts by email, phone, or company [Required]
2. `FRESHDESK_GET_CONTACTS` - List contacts with filters [Optional]
3. `FRESHDESK_IMPORT_CONTACT` - Bulk import contacts from CSV [Optional]
4. `FRESHDESK_SEARCH_COMPANIES` - Search companies by custom fields [Required]
5. `FRESHDESK_GET_COMPANIES` - List all companies [Optional]
6. `FRESHDESK_CREATE_COMPANIES` - Create a new company [Optional]
7. `FRESHDESK_UPDATE_COMPANIES` - Update company details [Optional]
8. `FRESHDESK_LIST_COMPANY_FIELDS` - Check available company fields [Optional]

**Key parameters for FRESHDESK_SEARCH_CONTACTS**:
- `query`: Search string like `"email:'user@example.com'"` (required)
- `page`: Pagination (1-10, max 30 per page)

**Key parameters for FRESHDESK_CREATE_COMPANIES**:
- `name`: Company name (required)
- `domains`: Array of domain strings for auto-association with contacts
- `health_score`: "Happy", "Doing okay", or "At risk"
- `account_tier`: "Basic", "Premium", or "Enterprise"
- `industry`: Standard industry classification

**Pitfalls**:
- `FRESHDESK_SEARCH_CONTACTS` requires exact matches; partial/regex searches are not supported
- `FRESHDESK_SEARCH_COMPANIES` cannot search by standard `name` field; use custom fields or `created_at`
- Company custom fields do NOT use the `cf_` prefix (unlike ticket custom fields)
- `domains` on companies enables automatic contact-to-company association by email domain
- Contact search queries require string values in single quotes inside double-quoted query

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Freshdesk connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `freshdesk`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @freshdesk-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @freshdesk-automation against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @freshdesk-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @freshdesk-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/freshdesk-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@daily-gift` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@design-taste-frontend` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| Create ticket | `FRESHDESK_CREATE_TICKET` | `subject`, `description`, `email`, `priority` |
| Update ticket | `FRESHDESK_UPDATE_TICKET` | `ticket_id`, `status`, `priority` |
| View ticket | `FRESHDESK_VIEW_TICKET` | `ticket_id` |
| List tickets | `FRESHDESK_GET_TICKETS` | `status`, `priority`, `page`, `per_page` |
| List all tickets | `FRESHDESK_LIST_ALL_TICKETS` | (none) |
| Search tickets | `FRESHDESK_GET_SEARCH` | `query`, `page` |
| Reply to ticket | `FRESHDESK_REPLY_TO_TICKET` | `ticket_id`, `body`, `cc_emails` |
| Reply (simple) | `FRESHDESK_REPLY_TICKET` | `ticket_id`, `body` |
| Add note | `FRESHDESK_ADD_NOTE_TO_TICKET` | `ticket_id`, `body`, `private` |
| List conversations | `FRESHDESK_LIST_ALL_TICKET_CONVERSATIONS` | `ticket_id`, `page` |
| Update note | `FRESHDESK_UPDATE_CONVERSATIONS` | `conversation_id`, `body` |
| Search contacts | `FRESHDESK_SEARCH_CONTACTS` | `query`, `page` |
| List contacts | `FRESHDESK_GET_CONTACTS` | `email`, `company_id`, `page` |
| Import contacts | `FRESHDESK_IMPORT_CONTACT` | `file`, `name_column_index`, `email_column_index` |
| Create company | `FRESHDESK_CREATE_COMPANIES` | `name`, `domains`, `industry` |
| Update company | `FRESHDESK_UPDATE_COMPANIES` | `company_id`, `name`, `domains` |
| Search companies | `FRESHDESK_SEARCH_COMPANIES` | `query`, `page` |
| List companies | `FRESHDESK_GET_COMPANIES` | `page` |
| List ticket fields | `FRESHDESK_LIST_TICKET_FIELDS` | (none) |
| List company fields | `FRESHDESK_LIST_COMPANY_FIELDS` | (none) |

#### Imported: Common Patterns

### ID Resolution
Always resolve display values to IDs before operations:
- **Requester email -> requester_id**: `FRESHDESK_SEARCH_CONTACTS` with `"email:'user@example.com'"`
- **Company name -> company_id**: `FRESHDESK_GET_COMPANIES` and match by name (search by name not supported)
- **Agent name -> agent_id**: Not directly available; use agent_id from ticket responses or admin configuration

### Pagination
Freshdesk uses page-based pagination:
- `FRESHDESK_GET_TICKETS`: `page` (starting at 1) and `per_page` (max 100)
- `FRESHDESK_GET_SEARCH`: `page` (1-10, 30 results per page, max 300 total)
- `FRESHDESK_SEARCH_CONTACTS`: `page` (1-10, 30 per page)
- `FRESHDESK_LIST_ALL_TICKET_CONVERSATIONS`: `page` and `per_page` (max 100)

#### Imported: Known Pitfalls

### ID Formats
- Ticket IDs, contact IDs, company IDs, agent IDs, and group IDs are all integers
- There are no string-based IDs in Freshdesk

### Rate Limits
- Freshdesk enforces per-account API rate limits based on plan tier
- Bulk operations should be paced to avoid 429 responses
- Search endpoints are limited to 300 total results (10 pages of 30)

### Parameter Quirks
- Status values: 2=Open, 3=Pending, 4=Resolved, 5=Closed (integers, not strings)
- Priority values: 1=Low, 2=Medium, 3=High, 4=Urgent (integers, not strings)
- Source values: 1=Email, 2=Portal, 3=Phone, 7=Chat, 9=Feedback Widget, 10=Outbound Email
- Ticket custom fields use `cf_` prefix; company custom fields do NOT
- `description` in tickets supports HTML formatting
- Search query strings must be in double quotes with string values in single quotes
- `FRESHDESK_LIST_ALL_TICKETS` returns all tickets with no filter parameters

### Response Structure
- Ticket details include nested objects for requester, assignee, and conversation data
- Search results are paginated with a maximum of 300 results across 10 pages
- Conversation lists include both replies and notes in chronological order

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
