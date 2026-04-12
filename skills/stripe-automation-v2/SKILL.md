---
name: stripe-automation-v2
description: "Stripe Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Stripe tasks via Rube MCP (Composio): customers, charges, subscriptions, invoices, products, refunds. Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["stripe-automation-v2", "stripe-automation", "automate", "stripe", "tasks", "via", "rube", "mcp"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Stripe Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/stripe-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Stripe Automation via Rube MCP Automate Stripe payment operations through Composio's Stripe toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Stripe tasks via Rube MCP (Composio): customers, charges, subscriptions, invoices, products, refunds. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit stripe
3. If connection is not ACTIVE, follow the returned auth link to complete Stripe connection
4. Confirm connection status shows ACTIVE before running any workflows
5. STRIPESEARCHCUSTOMERS - Search customers by email/name [Optional]
6. STRIPELISTCUSTOMERS - List all customers [Optional]
7. STRIPECREATECUSTOMER - Create a new customer [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `stripe`
3. If connection is not ACTIVE, follow the returned auth link to complete Stripe connection
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Manage Customers

**When to use**: User wants to create, update, search, or list Stripe customers

**Tool sequence**:
1. `STRIPE_SEARCH_CUSTOMERS` - Search customers by email/name [Optional]
2. `STRIPE_LIST_CUSTOMERS` - List all customers [Optional]
3. `STRIPE_CREATE_CUSTOMER` - Create a new customer [Optional]
4. `STRIPE_POST_CUSTOMERS_CUSTOMER` - Update a customer [Optional]

**Key parameters**:
- `email`: Customer email
- `name`: Customer name
- `description`: Customer description
- `metadata`: Key-value metadata pairs
- `customer`: Customer ID for updates (e.g., 'cus_xxx')

**Pitfalls**:
- Stripe allows duplicate customers with the same email; search first to avoid duplicates
- Customer IDs start with 'cus_'

### 2. Manage Charges and Payments

**When to use**: User wants to create charges, payment intents, or view charge history

**Tool sequence**:
1. `STRIPE_LIST_CHARGES` - List charges with filters [Optional]
2. `STRIPE_CREATE_PAYMENT_INTENT` - Create a payment intent [Optional]
3. `STRIPE_CONFIRM_PAYMENT_INTENT` - Confirm a payment intent [Optional]
4. `STRIPE_POST_CHARGES` - Create a direct charge [Optional]
5. `STRIPE_CAPTURE_CHARGE` - Capture an authorized charge [Optional]

**Key parameters**:
- `amount`: Amount in smallest currency unit (e.g., cents for USD)
- `currency`: Three-letter ISO currency code (e.g., 'usd')
- `customer`: Customer ID
- `payment_method`: Payment method ID
- `description`: Charge description

**Pitfalls**:
- Amounts are in smallest currency unit (100 = $1.00 for USD)
- Currency codes must be lowercase (e.g., 'usd' not 'USD')
- Payment intents are the recommended flow over direct charges

### 3. Manage Subscriptions

**When to use**: User wants to create, list, update, or cancel subscriptions

**Tool sequence**:
1. `STRIPE_LIST_SUBSCRIPTIONS` - List subscriptions [Optional]
2. `STRIPE_POST_CUSTOMERS_CUSTOMER_SUBSCRIPTIONS` - Create subscription [Optional]
3. `STRIPE_RETRIEVE_SUBSCRIPTION` - Get subscription details [Optional]
4. `STRIPE_UPDATE_SUBSCRIPTION` - Modify subscription [Optional]

**Key parameters**:
- `customer`: Customer ID
- `items`: Array of price items (price_id and quantity)
- `subscription`: Subscription ID for retrieval/update (e.g., 'sub_xxx')

**Pitfalls**:
- Subscriptions require a valid customer with a payment method
- Price IDs (not product IDs) are used for subscription items
- Cancellation can be immediate or at period end

### 4. Manage Invoices

**When to use**: User wants to create, list, or search invoices

**Tool sequence**:
1. `STRIPE_LIST_INVOICES` - List invoices [Optional]
2. `STRIPE_SEARCH_INVOICES` - Search invoices [Optional]
3. `STRIPE_CREATE_INVOICE` - Create an invoice [Optional]

**Key parameters**:
- `customer`: Customer ID for invoice
- `collection_method`: 'charge_automatically' or 'send_invoice'
- `days_until_due`: Days until invoice is due

**Pitfalls**:
- Invoices auto-finalize by default; use `auto_advance: false` for draft invoices

### 5. Manage Products and Prices

**When to use**: User wants to list or search products and their pricing

**Tool sequence**:
1. `STRIPE_LIST_PRODUCTS` - List products [Optional]
2. `STRIPE_SEARCH_PRODUCTS` - Search products [Optional]
3. `STRIPE_LIST_PRICES` - List prices [Optional]
4. `STRIPE_GET_PRICES_SEARCH` - Search prices [Optional]

**Key parameters**:
- `active`: Filter by active/inactive status
- `query`: Search query for search endpoints

**Pitfalls**:
- Products and prices are separate objects; a product can have multiple prices
- Price IDs (e.g., 'price_xxx') are used for subscriptions and checkout

### 6. Handle Refunds

**When to use**: User wants to issue refunds on charges

**Tool sequence**:
1. `STRIPE_LIST_REFUNDS` - List refunds [Optional]
2. `STRIPE_POST_CHARGES_CHARGE_REFUNDS` - Create a refund [Optional]
3. `STRIPE_CREATE_REFUND` - Create refund via payment intent [Optional]

**Key parameters**:
- `charge`: Charge ID for refund
- `amount`: Partial refund amount (omit for full refund)
- `reason`: Refund reason ('duplicate', 'fraudulent', 'requested_by_customer')

**Pitfalls**:
- Refunds can take 5-10 business days to appear on customer statements
- Amount is in smallest currency unit

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Stripe connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `stripe`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @stripe-automation-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/stripe-automation-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/stripe-automation-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @stripe-automation-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/stripe-automation`, fails to mention provenance, or does not use the support pack at all.
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
| Create customer | STRIPE_CREATE_CUSTOMER | email, name |
| Search customers | STRIPE_SEARCH_CUSTOMERS | query |
| Update customer | STRIPE_POST_CUSTOMERS_CUSTOMER | customer, fields |
| List charges | STRIPE_LIST_CHARGES | customer, limit |
| Create payment intent | STRIPE_CREATE_PAYMENT_INTENT | amount, currency |
| Confirm payment | STRIPE_CONFIRM_PAYMENT_INTENT | payment_intent |
| List subscriptions | STRIPE_LIST_SUBSCRIPTIONS | customer |
| Create subscription | STRIPE_POST_CUSTOMERS_CUSTOMER_SUBSCRIPTIONS | customer, items |
| Update subscription | STRIPE_UPDATE_SUBSCRIPTION | subscription, fields |
| List invoices | STRIPE_LIST_INVOICES | customer |
| Create invoice | STRIPE_CREATE_INVOICE | customer |
| Search invoices | STRIPE_SEARCH_INVOICES | query |
| List products | STRIPE_LIST_PRODUCTS | active |
| Search products | STRIPE_SEARCH_PRODUCTS | query |
| List prices | STRIPE_LIST_PRICES | product |
| Search prices | STRIPE_GET_PRICES_SEARCH | query |
| List refunds | STRIPE_LIST_REFUNDS | charge |
| Create refund | STRIPE_CREATE_REFUND | charge, amount |
| Payment methods | STRIPE_LIST_CUSTOMER_PAYMENT_METHODS | customer |
| Checkout session | STRIPE_CREATE_CHECKOUT_SESSION | line_items |
| List payment intents | STRIPE_LIST_PAYMENT_INTENTS | customer |

#### Imported: Common Patterns

### Amount Formatting

Stripe uses smallest currency unit:
- USD: $10.50 = 1050 cents
- EUR: 10.50 = 1050 cents
- JPY: 1000 = 1000 (no decimals)

### Pagination

- Use `limit` parameter (max 100)
- Check `has_more` in response
- Pass `starting_after` with last object ID for next page
- Continue until `has_more` is false

#### Imported: Known Pitfalls

**Amount Units**:
- Always use smallest currency unit (cents for USD/EUR)
- Zero-decimal currencies (JPY, KRW) use the amount directly

**ID Prefixes**:
- Customers: `cus_`, Charges: `ch_`, Subscriptions: `sub_`
- Invoices: `in_`, Products: `prod_`, Prices: `price_`
- Payment Intents: `pi_`, Refunds: `re_`
