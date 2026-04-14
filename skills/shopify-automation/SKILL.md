---
name: shopify-automation
description: "Shopify Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Shopify tasks via Rube MCP (Composio): products, orders, customers, inventory, collections. Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["shopify-automation", "automate", "shopify", "tasks", "via", "rube", "mcp", "composio"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Shopify Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/shopify-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Shopify Automation via Rube MCP Automate Shopify operations through Composio's Shopify toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Shopify tasks via Rube MCP (Composio): products, orders, customers, inventory, collections. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit shopify
3. If connection is not ACTIVE, follow the returned auth link to complete Shopify OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. SHOPIFYGETPRODUCTS / SHOPIFYGETPRODUCTS_PAGINATED - List products [Optional]
6. SHOPIFYGETPRODUCT - Get single product details [Optional]
7. SHOPIFYBULKCREATE_PRODUCTS - Create products in bulk [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `shopify`
3. If connection is not ACTIVE, follow the returned auth link to complete Shopify OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Manage Products

**When to use**: User wants to list, search, create, or manage products

**Tool sequence**:
1. `SHOPIFY_GET_PRODUCTS` / `SHOPIFY_GET_PRODUCTS_PAGINATED` - List products [Optional]
2. `SHOPIFY_GET_PRODUCT` - Get single product details [Optional]
3. `SHOPIFY_BULK_CREATE_PRODUCTS` - Create products in bulk [Optional]
4. `SHOPIFY_GET_PRODUCTS_COUNT` - Get product count [Optional]

**Key parameters**:
- `product_id`: Product ID for single retrieval
- `title`: Product title
- `vendor`: Product vendor
- `status`: 'active', 'draft', or 'archived'

**Pitfalls**:
- Paginated results require cursor-based pagination for large catalogs
- Product variants are nested within the product object

### 2. Manage Orders

**When to use**: User wants to list, search, or inspect orders

**Tool sequence**:
1. `SHOPIFY_GET_ORDERS_WITH_FILTERS` - List orders with filters [Required]
2. `SHOPIFY_GET_ORDER` - Get single order details [Optional]
3. `SHOPIFY_GET_FULFILLMENT` - Get fulfillment details [Optional]
4. `SHOPIFY_GET_FULFILLMENT_EVENTS` - Track fulfillment events [Optional]

**Key parameters**:
- `status`: Order status filter ('any', 'open', 'closed', 'cancelled')
- `financial_status`: Payment status filter
- `fulfillment_status`: Fulfillment status filter
- `order_id`: Order ID for single retrieval
- `created_at_min`/`created_at_max`: Date range filters

**Pitfalls**:
- Order IDs are numeric; use string format for API calls
- Default order listing may not include all statuses; specify 'any' for all

### 3. Manage Customers

**When to use**: User wants to list or search customers

**Tool sequence**:
1. `SHOPIFY_GET_ALL_CUSTOMERS` - List all customers [Required]

**Key parameters**:
- `limit`: Number of customers per page
- `since_id`: Pagination cursor

**Pitfalls**:
- Customer data includes order count and total spent
- Large customer lists require pagination

### 4. Manage Collections

**When to use**: User wants to manage product collections

**Tool sequence**:
1. `SHOPIFY_GET_SMART_COLLECTIONS` - List smart collections [Optional]
2. `SHOPIFY_GET_SMART_COLLECTION_BY_ID` - Get collection details [Optional]
3. `SHOPIFY_CREATE_SMART_COLLECTIONS` - Create a smart collection [Optional]
4. `SHOPIFY_ADD_PRODUCT_TO_COLLECTION` - Add product to collection [Optional]
5. `SHOPIFY_GET_PRODUCTS_IN_COLLECTION` - List products in collection [Optional]

**Key parameters**:
- `collection_id`: Collection ID
- `product_id`: Product ID for adding to collection
- `rules`: Smart collection rules for automatic inclusion

**Pitfalls**:
- Smart collections auto-populate based on rules; manual collections use custom collections API
- Collection count endpoints provide approximate counts

### 5. Manage Inventory

**When to use**: User wants to check or manage inventory levels

**Tool sequence**:
1. `SHOPIFY_GET_INVENTORY_LEVELS` / `SHOPIFY_RETRIEVES_A_LIST_OF_INVENTORY_LEVELS` - Check stock [Required]
2. `SHOPIFY_LIST_LOCATION` - List store locations [Optional]

**Key parameters**:
- `inventory_item_ids`: Inventory item IDs to check
- `location_ids`: Location IDs to filter by

**Pitfalls**:
- Inventory is tracked per variant per location
- Location IDs are required for multi-location stores

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Shopify connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `shopify`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @shopify-automation to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/shopify-automation/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/shopify-automation/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @shopify-automation using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/shopify-automation`, fails to mention provenance, or does not use the support pack at all.
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
| List products | SHOPIFY_GET_PRODUCTS | (filters) |
| Get product | SHOPIFY_GET_PRODUCT | product_id |
| Products paginated | SHOPIFY_GET_PRODUCTS_PAGINATED | limit, page_info |
| Bulk create | SHOPIFY_BULK_CREATE_PRODUCTS | products |
| Product count | SHOPIFY_GET_PRODUCTS_COUNT | (none) |
| List orders | SHOPIFY_GET_ORDERS_WITH_FILTERS | status, financial_status |
| Get order | SHOPIFY_GET_ORDER | order_id |
| List customers | SHOPIFY_GET_ALL_CUSTOMERS | limit |
| Shop details | SHOPIFY_GET_SHOP_DETAILS | (none) |
| Validate access | SHOPIFY_VALIDATE_ACCESS | (none) |
| Smart collections | SHOPIFY_GET_SMART_COLLECTIONS | (none) |
| Products in collection | SHOPIFY_GET_PRODUCTS_IN_COLLECTION | collection_id |
| Inventory levels | SHOPIFY_GET_INVENTORY_LEVELS | inventory_item_ids |
| Locations | SHOPIFY_LIST_LOCATION | (none) |
| Fulfillment | SHOPIFY_GET_FULFILLMENT | order_id, fulfillment_id |
| GraphQL | SHOPIFY_GRAPH_QL_QUERY | query |
| Bulk query | SHOPIFY_BULK_QUERY_OPERATION | query |

#### Imported: Common Patterns

### Pagination

- Use `limit` and `page_info` cursor for paginated results
- Check response for `next` link header
- Continue until no more pages available

### GraphQL Queries

For advanced operations:
```
1. Call SHOPIFY_GRAPH_QL_QUERY with custom query
2. Parse response from data object
```

#### Imported: Known Pitfalls

**API Versioning**:
- Shopify REST API has versioned endpoints
- Some features require specific API versions

**Rate Limits**:
- REST API: 2 requests/second for standard plans
- GraphQL: 1000 cost points per second

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
