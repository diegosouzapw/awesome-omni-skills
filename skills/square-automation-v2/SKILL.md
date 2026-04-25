---
name: square-automation-v2
description: "Square Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Square tasks via Rube MCP (Composio): payments, orders, invoices, locations. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["square-automation-v2", "square-automation", "automate", "square", "tasks", "via", "rube", "mcp"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Square Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/square-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Square Automation via Rube MCP Automate Square payment processing, order management, and invoicing through Composio's Square toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Square tasks via Rube MCP (Composio): payments, orders, invoices, locations. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit square
3. If connection is not ACTIVE, follow the returned auth link to complete Square OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. SQUARELISTPAYMENTS - Retrieve payments with optional filters [Required]
6. SQUARECANCELPAYMENT - Cancel a pending payment if needed [Optional]
7. begintime / endtime: RFC 3339 timestamps for date range filtering

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `square`
3. If connection is not ACTIVE, follow the returned auth link to complete Square OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. List and Monitor Payments

**When to use**: User wants to view payment history or check payment status

**Tool sequence**:
1. `SQUARE_LIST_PAYMENTS` - Retrieve payments with optional filters [Required]
2. `SQUARE_CANCEL_PAYMENT` - Cancel a pending payment if needed [Optional]

**Key parameters**:
- `begin_time` / `end_time`: RFC 3339 timestamps for date range filtering
- `sort_order`: 'ASC' or 'DESC' for chronological ordering
- `cursor`: Pagination cursor from previous response
- `location_id`: Filter payments by specific location

**Pitfalls**:
- Timestamps must be RFC 3339 format (e.g., '2024-01-01T00:00:00Z')
- Pagination required for large result sets; follow `cursor` until absent
- Only pending payments can be cancelled; completed payments require refunds
- `SQUARE_CANCEL_PAYMENT` requires exact `payment_id` from list results

### 2. Search and Manage Orders

**When to use**: User wants to find orders by criteria or update order details

**Tool sequence**:
1. `SQUARE_LIST_LOCATIONS` - Get location IDs for filtering [Prerequisite]
2. `SQUARE_SEARCH_ORDERS` - Search orders with filters [Required]
3. `SQUARE_RETRIEVE_ORDER` - Get full details of a specific order [Optional]
4. `SQUARE_UPDATE_ORDER` - Modify order state or details [Optional]

**Key parameters**:
- `location_ids`: Array of location IDs to search within (required for search)
- `query`: Search filter object with date ranges, states, fulfillment types
- `order_id`: Specific order ID for retrieve/update operations
- `cursor`: Pagination cursor for search results

**Pitfalls**:
- `location_ids` is required for SEARCH_ORDERS; get IDs from LIST_LOCATIONS first
- Order states include: OPEN, COMPLETED, CANCELED, DRAFT
- UPDATE_ORDER requires the current `version` field to prevent conflicts
- Search results are paginated; follow `cursor` until absent

### 3. Manage Locations

**When to use**: User wants to view business locations or get location details

**Tool sequence**:
1. `SQUARE_LIST_LOCATIONS` - List all business locations [Required]

**Key parameters**:
- No required parameters; returns all accessible locations
- Response includes `id`, `name`, `address`, `status`, `timezone`

**Pitfalls**:
- Location IDs are required for most other Square operations (orders, payments)
- Always cache location IDs after first retrieval to avoid redundant calls
- Inactive locations may still appear in results; check `status` field

### 4. Invoice Management

**When to use**: User wants to list, view, or cancel invoices

**Tool sequence**:
1. `SQUARE_LIST_LOCATIONS` - Get location ID for filtering [Prerequisite]
2. `SQUARE_LIST_INVOICES` - List invoices for a location [Required]
3. `SQUARE_GET_INVOICE` - Get detailed invoice information [Optional]
4. `SQUARE_CANCEL_INVOICE` - Cancel a scheduled or unpaid invoice [Optional]

**Key parameters**:
- `location_id`: Required for listing invoices
- `invoice_id`: Required for get/cancel operations
- `cursor`: Pagination cursor for list results
- `limit`: Number of results per page

**Pitfalls**:
- `location_id` is required for LIST_INVOICES; resolve via LIST_LOCATIONS first
- Only SCHEDULED, UNPAID, or PARTIALLY_PAID invoices can be cancelled
- CANCEL_INVOICE requires the invoice `version` to prevent race conditions
- Cancelled invoices cannot be uncancelled

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Square connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `square`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @square-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @square-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @square-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @square-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/square-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@skill-rails-upgrade-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@skill-router-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@skill-seekers-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@skill-sentinel-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List payments | SQUARE_LIST_PAYMENTS | begin_time, end_time, location_id, cursor |
| Cancel payment | SQUARE_CANCEL_PAYMENT | payment_id |
| Search orders | SQUARE_SEARCH_ORDERS | location_ids, query, cursor |
| Get order | SQUARE_RETRIEVE_ORDER | order_id |
| Update order | SQUARE_UPDATE_ORDER | order_id, version |
| List locations | SQUARE_LIST_LOCATIONS | (none) |
| List invoices | SQUARE_LIST_INVOICES | location_id, cursor |
| Get invoice | SQUARE_GET_INVOICE | invoice_id |
| Cancel invoice | SQUARE_CANCEL_INVOICE | invoice_id, version |

#### Imported: Common Patterns

### ID Resolution

**Location name -> Location ID**:
```
1. Call SQUARE_LIST_LOCATIONS
2. Find location by name in response
3. Extract id field (e.g., 'L1234ABCD')
```

**Order lookup**:
```
1. Call SQUARE_SEARCH_ORDERS with location_ids and query filters
2. Extract order_id from results
3. Use order_id for RETRIEVE_ORDER or UPDATE_ORDER
```

### Pagination

- Check response for `cursor` field
- Pass cursor value in next request's `cursor` parameter
- Continue until `cursor` is absent or empty
- Use `limit` to control page size

### Date Range Filtering

- Use RFC 3339 format: `2024-01-01T00:00:00Z`
- For payments: `begin_time` and `end_time` parameters
- For orders: Use query filter with date_time_filter
- All timestamps are in UTC

#### Imported: Known Pitfalls

**ID Formats**:
- Location IDs are alphanumeric strings (e.g., 'L1234ABCD')
- Payment IDs and Order IDs are longer alphanumeric strings
- Always resolve location names to IDs before other operations

**Versioning**:
- UPDATE_ORDER and CANCEL_INVOICE require current `version` field
- Fetch the resource first to get its current version
- Version mismatch returns a 409 Conflict error

**Rate Limits**:
- Square API has per-endpoint rate limits
- Implement backoff for bulk operations
- Pagination should include brief delays for large datasets

**Response Parsing**:
- Responses may nest data under `data` key
- Money amounts are in smallest currency unit (cents for USD)
- Parse defensively with fallbacks for optional fields

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
