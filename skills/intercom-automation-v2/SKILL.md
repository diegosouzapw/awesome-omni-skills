---
name: intercom-automation-v2
description: "Intercom Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Intercom tasks via Rube MCP (Composio): conversations, contacts, companies, segments, admins. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["intercom-automation-v2", "intercom-automation", "automate", "intercom", "tasks", "via", "rube", "mcp"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-17"
date_updated: "2026-04-25"
---

# Intercom Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/intercom-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Intercom Automation via Rube MCP Automate Intercom operations through Composio's Intercom toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Intercom tasks via Rube MCP (Composio): conversations, contacts, companies, segments, admins. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit intercom
3. If connection is not ACTIVE, follow the returned auth link to complete Intercom OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. INTERCOMLISTALL_ADMINS - Get admin IDs for assignment [Prerequisite]
6. INTERCOMLISTCONVERSATIONS - List all conversations [Optional]
7. INTERCOMSEARCHCONVERSATIONS - Search with filters [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `intercom`
3. If connection is not ACTIVE, follow the returned auth link to complete Intercom OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Manage Conversations

**When to use**: User wants to create, list, search, or manage support conversations

**Tool sequence**:
1. `INTERCOM_LIST_ALL_ADMINS` - Get admin IDs for assignment [Prerequisite]
2. `INTERCOM_LIST_CONVERSATIONS` - List all conversations [Optional]
3. `INTERCOM_SEARCH_CONVERSATIONS` - Search with filters [Optional]
4. `INTERCOM_GET_CONVERSATION` - Get conversation details [Optional]
5. `INTERCOM_CREATE_CONVERSATION` - Create a new conversation [Optional]

**Key parameters**:
- `from`: Object with `type` ('user'/'lead') and `id` for conversation creator
- `body`: Message body (HTML supported)
- `id`: Conversation ID for retrieval
- `query`: Search query object with `field`, `operator`, `value`

**Pitfalls**:
- CREATE_CONVERSATION requires a contact (user/lead) as the `from` field, not an admin
- Conversation bodies support HTML; plain text is auto-wrapped in `<p>` tags
- Search query uses structured filter objects, not free-text search
- Conversation IDs are numeric strings

### 2. Reply and Manage Conversation State

**When to use**: User wants to reply to, close, reopen, or assign conversations

**Tool sequence**:
1. `INTERCOM_GET_CONVERSATION` - Get current state [Prerequisite]
2. `INTERCOM_REPLY_TO_CONVERSATION` - Add a reply [Optional]
3. `INTERCOM_ASSIGN_CONVERSATION` - Assign to admin/team [Optional]
4. `INTERCOM_CLOSE_CONVERSATION` - Close conversation [Optional]
5. `INTERCOM_REOPEN_CONVERSATION` - Reopen closed conversation [Optional]

**Key parameters**:
- `conversation_id` / `id`: Conversation ID
- `body`: Reply message body (HTML supported)
- `type`: Reply type ('admin' or 'user')
- `admin_id`: Admin ID for replies from admin, assignment, and close/reopen
- `assignee_id`: Admin or team ID for assignment
- `message_type`: 'comment' (default) or 'note' (internal)

**Pitfalls**:
- `admin_id` is REQUIRED for admin replies, close, reopen, and assignment operations
- Always fetch admin IDs first with LIST_ALL_ADMINS or IDENTIFY_AN_ADMIN
- Duplicate sends can occur on retry; implement idempotency checks
- Internal notes use `message_type: 'note'`; visible only to workspace members
- Closing requires an admin_id and optional body message

### 3. Manage Contacts

**When to use**: User wants to search, view, or manage contacts (users and leads)

**Tool sequence**:
1. `INTERCOM_SEARCH_CONTACTS` - Search contacts with filters [Required]
2. `INTERCOM_GET_A_CONTACT` - Get specific contact [Optional]
3. `INTERCOM_SHOW_CONTACT_BY_EXTERNAL_ID` - Look up by external ID [Optional]
4. `INTERCOM_LIST_CONTACTS` - List all contacts [Optional]
5. `INTERCOM_LIST_TAGS_ATTACHED_TO_A_CONTACT` - Get contact tags [Optional]
6. `INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_CONTACT` - Get contact segments [Optional]
7. `INTERCOM_DETACH_A_CONTACT` - Remove contact from company [Optional]

**Key parameters**:
- `contact_id`: Contact ID for retrieval
- `external_id`: External system ID for lookup
- `query`: Search filter object with `field`, `operator`, `value`
- `pagination`: Object with `per_page` and `starting_after` cursor

**Pitfalls**:
- SEARCH_CONTACTS uses structured query filters, not free-text; format: `{field, operator, value}`
- Supported operators: `=`, `!=`, `>`, `<`, `~` (contains), `!~` (not contains), `IN`, `NIN`
- Contact types are 'user' (identified) or 'lead' (anonymous)
- LIST_CONTACTS returns paginated results; use `starting_after` cursor for pagination
- External IDs are case-sensitive

### 4. Manage Admins and Teams

**When to use**: User wants to list workspace admins or identify specific admins

**Tool sequence**:
1. `INTERCOM_LIST_ALL_ADMINS` - List all admins and teams [Required]
2. `INTERCOM_IDENTIFY_AN_ADMIN` - Get specific admin details [Optional]

**Key parameters**:
- `admin_id`: Admin ID for identification

**Pitfalls**:
- LIST_ALL_ADMINS returns both admins and teams
- Admin IDs are required for conversation replies, assignment, close, and reopen
- Teams appear in the admins list with `type: 'team'`

### 5. View Segments and Counts

**When to use**: User wants to view segments or get aggregate counts

**Tool sequence**:
1. `INTERCOM_LIST_SEGMENTS` - List all segments [Optional]
2. `INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_CONTACT` - Segments for a contact [Optional]
3. `INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_COMPANIES` - Segments for a company [Optional]
4. `INTERCOM_GET_COUNTS` - Get aggregate counts [Optional]

**Key parameters**:
- `contact_id`: Contact ID for segment lookup
- `company_id`: Company ID for segment lookup
- `type`: Count type ('conversation', 'company', 'user', 'tag', 'segment')
- `count`: Sub-count type

**Pitfalls**:
- GET_COUNTS returns approximate counts, not exact numbers
- Segment membership is computed; changes may not reflect immediately

### 6. Manage Companies

**When to use**: User wants to list companies or manage company-contact relationships

**Tool sequence**:
1. `INTERCOM_LIST_ALL_COMPANIES` - List all companies [Required]
2. `INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_COMPANIES` - Get company segments [Optional]
3. `INTERCOM_DETACH_A_CONTACT` - Remove contact from company [Optional]

**Key parameters**:
- `company_id`: Company ID
- `contact_id`: Contact ID for detachment
- `page`: Page number for pagination
- `per_page`: Results per page

**Pitfalls**:
- Company-contact relationships are managed through contact endpoints
- DETACH_A_CONTACT removes the contact-company association, not the contact itself

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Intercom connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `intercom`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @intercom-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @intercom-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @intercom-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @intercom-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/intercom-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@instagram-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@interactive-portfolio-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@internal-comms-anthropic-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@internal-comms-community-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List conversations | INTERCOM_LIST_CONVERSATIONS | (pagination) |
| Search conversations | INTERCOM_SEARCH_CONVERSATIONS | query |
| Get conversation | INTERCOM_GET_CONVERSATION | id |
| Create conversation | INTERCOM_CREATE_CONVERSATION | from, body |
| Reply to conversation | INTERCOM_REPLY_TO_CONVERSATION | conversation_id, body, admin_id |
| Assign conversation | INTERCOM_ASSIGN_CONVERSATION | conversation_id, admin_id, assignee_id |
| Close conversation | INTERCOM_CLOSE_CONVERSATION | id, admin_id |
| Reopen conversation | INTERCOM_REOPEN_CONVERSATION | id, admin_id |
| Search contacts | INTERCOM_SEARCH_CONTACTS | query |
| Get contact | INTERCOM_GET_A_CONTACT | contact_id |
| Contact by external ID | INTERCOM_SHOW_CONTACT_BY_EXTERNAL_ID | external_id |
| List contacts | INTERCOM_LIST_CONTACTS | (pagination) |
| Contact tags | INTERCOM_LIST_TAGS_ATTACHED_TO_A_CONTACT | contact_id |
| Contact segments | INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_CONTACT | contact_id |
| Detach contact | INTERCOM_DETACH_A_CONTACT | contact_id, company_id |
| List admins | INTERCOM_LIST_ALL_ADMINS | (none) |
| Identify admin | INTERCOM_IDENTIFY_AN_ADMIN | admin_id |
| List segments | INTERCOM_LIST_SEGMENTS | (none) |
| Company segments | INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_COMPANIES | company_id |
| Get counts | INTERCOM_GET_COUNTS | type, count |
| List companies | INTERCOM_LIST_ALL_COMPANIES | page, per_page |

#### Imported: Common Patterns

### Search Query Filters

**Single filter**:
```json
{
  "field": "email",
  "operator": "=",
  "value": "user@example.com"
}
```

**Multiple filters (AND)**:
```json
{
  "operator": "AND",
  "value": [
    {"field": "role", "operator": "=", "value": "user"},
    {"field": "created_at", "operator": ">", "value": 1672531200}
  ]
}
```

**Supported fields for contacts**: email, name, role, created_at, updated_at, signed_up_at, last_seen_at, external_id

**Supported fields for conversations**: created_at, updated_at, source.type, state, open, read

### Pagination

- Most list endpoints use cursor-based pagination
- Check response for `pages.next` with `starting_after` cursor
- Pass cursor in `pagination.starting_after` for next page
- Continue until `pages.next` is null

### Admin ID Resolution

```
1. Call INTERCOM_LIST_ALL_ADMINS to get all admins
2. Find the desired admin by name or email
3. Use admin.id for replies, assignments, and state changes
```

#### Imported: Known Pitfalls

**Admin ID Requirement**:
- Admin ID is required for: reply (as admin), assign, close, reopen
- Always resolve admin IDs first with LIST_ALL_ADMINS

**HTML Content**:
- Conversation bodies are HTML
- Plain text is auto-wrapped in paragraph tags
- Sanitize HTML input to prevent rendering issues

**Idempotency**:
- Replies and conversation creation are not idempotent
- Duplicate sends can occur on retry or timeout
- Track message IDs to prevent duplicates

**Rate Limits**:
- Default: ~1000 requests per minute (varies by plan)
- 429 responses include rate limit headers
- Implement exponential backoff for retries

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
