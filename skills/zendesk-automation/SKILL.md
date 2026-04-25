---
name: zendesk-automation
description: "Zendesk Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Zendesk tasks via Rube MCP (Composio): tickets, users, organizations, replies. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["zendesk-automation", "automate", "zendesk", "tasks", "via", "rube", "mcp", "composio"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Zendesk Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/zendesk-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Zendesk Automation via Rube MCP Automate Zendesk operations through Composio's Zendesk toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Zendesk tasks via Rube MCP (Composio): tickets, users, organizations, replies. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit zendesk
3. If connection is not ACTIVE, follow the returned auth link to complete Zendesk auth
4. Confirm connection status shows ACTIVE before running any workflows
5. ZENDESKLISTZENDESK_TICKETS - List all tickets with pagination [Required]
6. ZENDESKGETZENDESKTICKETBY_ID - Get specific ticket details [Optional]
7. page: Page number (1-based)

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `zendesk`
3. If connection is not ACTIVE, follow the returned auth link to complete Zendesk auth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. List and Search Tickets

**When to use**: User wants to view, filter, or search support tickets

**Tool sequence**:
1. `ZENDESK_LIST_ZENDESK_TICKETS` - List all tickets with pagination [Required]
2. `ZENDESK_GET_ZENDESK_TICKET_BY_ID` - Get specific ticket details [Optional]

**Key parameters**:
- `page`: Page number (1-based)
- `per_page`: Results per page (max 100)
- `sort_by`: Sort field ('created_at', 'updated_at', 'priority', 'status')
- `sort_order`: 'asc' or 'desc'
- `ticket_id`: Ticket ID for single retrieval

**Pitfalls**:
- LIST uses `page`/`per_page` pagination, NOT offset-based; check `next_page` in response
- Maximum 100 results per page; iterate with page numbers until `next_page` is null
- Deleted tickets are not returned by LIST; use GET_BY_ID which returns status 'deleted'
- Ticket comments and audits are included in GET_BY_ID but not in LIST responses

### 2. Create and Update Tickets

**When to use**: User wants to create new tickets or modify existing ones

**Tool sequence**:
1. `ZENDESK_SEARCH_ZENDESK_USERS` - Find requester/assignee [Prerequisite]
2. `ZENDESK_CREATE_ZENDESK_TICKET` - Create a new ticket [Required]
3. `ZENDESK_UPDATE_ZENDESK_TICKET` - Update ticket fields [Optional]
4. `ZENDESK_DELETE_ZENDESK_TICKET` - Delete a ticket [Optional]

**Key parameters**:
- `subject`: Ticket subject line
- `description`: Ticket body (for creation; becomes first comment)
- `priority`: 'urgent', 'high', 'normal', 'low'
- `status`: 'new', 'open', 'pending', 'hold', 'solved', 'closed'
- `type`: 'problem', 'incident', 'question', 'task'
- `assignee_id`: Agent user ID to assign
- `requester_id`: Requester user ID
- `tags`: Array of tag strings
- `ticket_id`: Ticket ID (for update/delete)

**Pitfalls**:
- Tags on UPDATE REPLACE existing tags entirely; merge with current tags to preserve them
- Use `safe_update` with `updated_stamp` to prevent concurrent modification conflicts
- DELETE is permanent and irreversible; tickets cannot be recovered
- `description` is only used on creation; use REPLY_ZENDESK_TICKET to add comments after creation
- Closed tickets cannot be updated; create a follow-up ticket instead

### 3. Reply to Tickets

**When to use**: User wants to add comments or replies to tickets

**Tool sequence**:
1. `ZENDESK_GET_ZENDESK_TICKET_BY_ID` - Get current ticket state [Prerequisite]
2. `ZENDESK_REPLY_ZENDESK_TICKET` - Add a reply/comment [Required]

**Key parameters**:
- `ticket_id`: Ticket ID to reply to
- `body`: Reply text content
- `public`: Boolean; true for public reply, false for internal note
- `author_id`: Author user ID (defaults to authenticated user)

**Pitfalls**:
- Set `public: false` for internal notes visible only to agents
- Default is public reply which sends email to requester
- HTML is supported in body text
- Replying can also update ticket status simultaneously

### 4. Manage Users

**When to use**: User wants to find or create Zendesk users (agents, end-users)

**Tool sequence**:
1. `ZENDESK_SEARCH_ZENDESK_USERS` - Search for users [Required]
2. `ZENDESK_CREATE_ZENDESK_USER` - Create a new user [Optional]
3. `ZENDESK_GET_ABOUT_ME` - Get authenticated user info [Optional]

**Key parameters**:
- `query`: Search string (matches name, email, phone, etc.)
- `name`: User's full name (required for creation)
- `email`: User's email address
- `role`: 'end-user', 'agent', or 'admin'
- `verified`: Whether email is verified

**Pitfalls**:
- User search is fuzzy; may return partial matches
- Creating a user with an existing email returns the existing user (upsert behavior)
- Agent and admin roles may require specific plan features

### 5. Manage Organizations

**When to use**: User wants to list, create, or manage organizations

**Tool sequence**:
1. `ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS` - List all organizations [Required]
2. `ZENDESK_GET_ZENDESK_ORGANIZATION` - Get specific organization [Optional]
3. `ZENDESK_CREATE_ZENDESK_ORGANIZATION` - Create organization [Optional]
4. `ZENDESK_UPDATE_ZENDESK_ORGANIZATION` - Update organization [Optional]
5. `ZENDESK_COUNT_ZENDESK_ORGANIZATIONS` - Get total count [Optional]

**Key parameters**:
- `name`: Organization name (unique, required for creation)
- `organization_id`: Organization ID for get/update
- `details`: Organization details text
- `notes`: Internal notes
- `domain_names`: Array of associated domains
- `tags`: Array of tag strings

**Pitfalls**:
- Organization names must be unique; duplicate names cause creation errors
- Tags on UPDATE REPLACE existing tags (same behavior as tickets)
- Domain names can be used for automatic user association

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Zendesk connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `zendesk`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @zendesk-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @zendesk-automation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @zendesk-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @zendesk-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/zendesk-automation`, fails to mention provenance, or does not use any copied source files at all.
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
- `@voice-agents` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List tickets | ZENDESK_LIST_ZENDESK_TICKETS | page, per_page, sort_by |
| Get ticket | ZENDESK_GET_ZENDESK_TICKET_BY_ID | ticket_id |
| Create ticket | ZENDESK_CREATE_ZENDESK_TICKET | subject, description, priority |
| Update ticket | ZENDESK_UPDATE_ZENDESK_TICKET | ticket_id, status, tags |
| Reply to ticket | ZENDESK_REPLY_ZENDESK_TICKET | ticket_id, body, public |
| Delete ticket | ZENDESK_DELETE_ZENDESK_TICKET | ticket_id |
| Search users | ZENDESK_SEARCH_ZENDESK_USERS | query |
| Create user | ZENDESK_CREATE_ZENDESK_USER | name, email |
| My profile | ZENDESK_GET_ABOUT_ME | (none) |
| List orgs | ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS | page, per_page |
| Get org | ZENDESK_GET_ZENDESK_ORGANIZATION | organization_id |
| Create org | ZENDESK_CREATE_ZENDESK_ORGANIZATION | name |
| Update org | ZENDESK_UPDATE_ZENDESK_ORGANIZATION | organization_id, name |
| Count orgs | ZENDESK_COUNT_ZENDESK_ORGANIZATIONS | (none) |

#### Imported: Common Patterns

### Pagination

**List endpoints**:
- Use `page` (1-based) and `per_page` (max 100)
- Check `next_page` URL in response; null means last page
- `count` field gives total results

### Ticket Lifecycle

```
new -> open -> pending -> solved -> closed
                  |          ^
                  v          |
                hold --------+
```

- `new`: Unassigned ticket
- `open`: Assigned, being worked on
- `pending`: Waiting for customer response
- `hold`: Waiting for internal action
- `solved`: Resolved, can be reopened
- `closed`: Permanently closed, cannot be modified

### User Search for Assignment

```
1. Call ZENDESK_SEARCH_ZENDESK_USERS with query (name or email)
2. Extract user ID from results
3. Use user ID as assignee_id in ticket creation/update
```

#### Imported: Known Pitfalls

**Tags Behavior**:
- Tags on update REPLACE all existing tags
- Always fetch current tags first and merge before updating
- Tags are lowercase, no spaces (use underscores)

**Safe Updates**:
- Use `safe_update: true` with `updated_stamp` (ISO 8601) to prevent conflicts
- Returns 409 if ticket was modified since the stamp

**Deletion**:
- Ticket deletion is permanent and irreversible
- Consider setting status to 'closed' instead of deleting
- Deleted tickets cannot be recovered via API

**Rate Limits**:
- Default: 400 requests per minute
- Varies by plan tier
- 429 responses include Retry-After header

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
