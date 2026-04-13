---
name: freshservice-automation-v2
description: "Freshservice Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Freshservice ITSM tasks via Rube MCP (Composio): create/update tickets, bulk operations, service requests, and outbound emails. Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["freshservice-automation-v2", "freshservice-automation", "automate", "freshservice", "itsm", "tasks", "via", "rube"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Freshservice Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/freshservice-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Freshservice Automation via Rube MCP Automate Freshservice IT Service Management operations through Composio's Freshservice toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Freshservice ITSM tasks via Rube MCP (Composio): create/update tickets, bulk operations, service requests, and outbound emails. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit freshservice
3. If connection is not ACTIVE, follow the returned auth link to complete Freshservice authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. FRESHSERVICELISTTICKETS - List tickets with optional filtering and pagination [Required]
6. FRESHSERVICEGETTICKET - Get detailed information for a specific ticket [Optional]
7. filter: Predefined filter ('all_tickets', 'deleted', 'spam', 'watching')

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `freshservice`
3. If connection is not ACTIVE, follow the returned auth link to complete Freshservice authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. List and Search Tickets

**When to use**: User wants to find, list, or search for tickets

**Tool sequence**:
1. `FRESHSERVICE_LIST_TICKETS` - List tickets with optional filtering and pagination [Required]
2. `FRESHSERVICE_GET_TICKET` - Get detailed information for a specific ticket [Optional]

**Key parameters for listing**:
- `filter`: Predefined filter ('all_tickets', 'deleted', 'spam', 'watching')
- `updated_since`: ISO 8601 timestamp to get tickets updated after this time
- `order_by`: Sort field ('created_at', 'updated_at', 'status', 'priority')
- `order_type`: Sort direction ('asc' or 'desc')
- `page`: Page number (1-indexed)
- `per_page`: Results per page (1-100, default 30)
- `include`: Additional fields ('requester', 'stats', 'description', 'conversations', 'assets')

**Key parameters for get**:
- `ticket_id`: Unique ticket ID or display_id
- `include`: Additional fields to include

**Pitfalls**:
- By default, only tickets created within the past 30 days are returned
- Use `updated_since` to retrieve older tickets
- Each `include` value consumes additional API credits
- `page` is 1-indexed; minimum value is 1
- `per_page` max is 100; default is 30
- Ticket IDs can be the internal ID or the display_id shown in the UI

### 2. Create a Ticket

**When to use**: User wants to log a new incident or request

**Tool sequence**:
1. `FRESHSERVICE_CREATE_TICKET` - Create a new ticket [Required]

**Key parameters**:
- `subject`: Ticket subject line (required)
- `description`: HTML description of the ticket (required)
- `status`: Ticket status - 2 (Open), 3 (Pending), 4 (Resolved), 5 (Closed) (required)
- `priority`: Ticket priority - 1 (Low), 2 (Medium), 3 (High), 4 (Urgent) (required)
- `email`: Requester's email address (provide either email or requester_id)
- `requester_id`: User ID of the requester
- `type`: Ticket type ('Incident' or 'Service Request')
- `source`: Channel - 1 (Email), 2 (Portal), 3 (Phone), 4 (Chat), 5 (Twitter), 6 (Facebook)
- `impact`: Impact level - 1 (Low), 2 (Medium), 3 (High)
- `urgency`: Urgency level - 1 (Low), 2 (Medium), 3 (High), 4 (Critical)

**Pitfalls**:
- `subject`, `description`, `status`, and `priority` are all required
- Either `email` or `requester_id` must be provided to identify the requester
- Status and priority use numeric codes, not string names
- Description supports HTML formatting
- If email does not match an existing contact, a new contact is created

### 3. Bulk Update Tickets

**When to use**: User wants to update multiple tickets at once

**Tool sequence**:
1. `FRESHSERVICE_LIST_TICKETS` - Find tickets to update [Prerequisite]
2. `FRESHSERVICE_BULK_UPDATE_TICKETS` - Update multiple tickets [Required]

**Key parameters**:
- `ids`: Array of ticket IDs to update (required)
- `update_fields`: Dictionary of fields to update (required)
  - Allowed keys: 'subject', 'description', 'status', 'priority', 'responder_id', 'group_id', 'type', 'tags', 'custom_fields'

**Pitfalls**:
- Bulk update performs sequential updates internally; large batches may take time
- All specified tickets receive the same field updates
- If one ticket update fails, others may still succeed; check response for individual results
- Cannot selectively update different fields per ticket in a single call
- Custom fields must use their internal field names, not display names

### 4. Create Ticket via Outbound Email

**When to use**: User wants to create a ticket by sending an outbound email notification

**Tool sequence**:
1. `FRESHSERVICE_CREATE_TICKET_OUTBOUND_EMAIL` - Create ticket with email notification [Required]

**Key parameters**:
- `email`: Requester's email address (required)
- `subject`: Email subject / ticket subject (required)
- `description`: HTML email body content
- `status`: Ticket status (2=Open, 3=Pending, 4=Resolved, 5=Closed)
- `priority`: Ticket priority (1=Low, 2=Medium, 3=High, 4=Urgent)
- `cc_emails`: Array of CC email addresses
- `email_config_id`: Email configuration ID for the sender address
- `name`: Requester name

**Pitfalls**:
- This creates a standard ticket via the /api/v2/tickets endpoint while sending an email
- If the email does not match an existing contact, a new contact is created with the provided name
- `email_config_id` determines which email address the notification appears to come from

### 5. Create Service Requests

**When to use**: User wants to submit a service catalog request

**Tool sequence**:
1. `FRESHSERVICE_CREATE_SERVICE_REQUEST` - Create a service request for a catalog item [Required]

**Key parameters**:
- `item_display_id`: Display ID of the catalog item (required)
- `email`: Requester's email address
- `quantity`: Number of items to request (default: 1)
- `custom_fields`: Custom field values for the service item form
- `parent_ticket_id`: Display ID of a parent ticket (for child requests)

**Pitfalls**:
- `item_display_id` can be found in Admin > Service Catalog > item URL (e.g., /service_catalog/items/1)
- Custom fields keys must match the service item form field names
- Quantity defaults to 1 if not specified
- Service requests follow the approval workflow defined for the catalog item

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Freshservice connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `freshservice`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @freshservice-automation-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/freshservice-automation-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/freshservice-automation-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @freshservice-automation-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/freshservice-automation`, fails to mention provenance, or does not use the support pack at all.
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
| List tickets | FRESHSERVICE_LIST_TICKETS | filter, updated_since, page, per_page |
| Get ticket | FRESHSERVICE_GET_TICKET | ticket_id, include |
| Create ticket | FRESHSERVICE_CREATE_TICKET | subject, description, status, priority, email |
| Bulk update | FRESHSERVICE_BULK_UPDATE_TICKETS | ids, update_fields |
| Outbound email ticket | FRESHSERVICE_CREATE_TICKET_OUTBOUND_EMAIL | email, subject, description |
| Service request | FRESHSERVICE_CREATE_SERVICE_REQUEST | item_display_id, email, quantity |

#### Imported: Common Patterns

### Status Code Reference

| Code | Status |
|------|--------|
| 2 | Open |
| 3 | Pending |
| 4 | Resolved |
| 5 | Closed |

### Priority Code Reference

| Code | Priority |
|------|----------|
| 1 | Low |
| 2 | Medium |
| 3 | High |
| 4 | Urgent |

### Pagination

- Use `page` (1-indexed) and `per_page` (max 100) parameters
- Increment `page` by 1 each request
- Continue until returned results count < `per_page`
- Default page size is 30

### Finding Tickets by Date Range

```
1. Call FRESHSERVICE_LIST_TICKETS with updated_since='2024-01-01T00:00:00Z'
2. Optionally add order_by='updated_at' and order_type='desc'
3. Paginate through results
```

#### Imported: Known Pitfalls

**Numeric Codes**:
- Status and priority use numeric values, not strings
- Source channel uses numeric codes (1-6)
- Impact and urgency use numeric codes (1-3 or 1-4)

**Date Filtering**:
- Default returns only tickets from the last 30 days
- Use `updated_since` parameter for older tickets
- Date format is ISO 8601 (e.g., '2024-01-01T00:00:00Z')

**Rate Limits**:
- Freshservice API has per-account rate limits
- Each `include` option consumes additional API credits
- Implement backoff on 429 responses

**Response Parsing**:
- Response data may be nested under `data` or `data.data`
- Parse defensively with fallback patterns
- Ticket IDs are numeric integers

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
