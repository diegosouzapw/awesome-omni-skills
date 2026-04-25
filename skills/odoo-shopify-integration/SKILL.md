---
name: odoo-shopify-integration
description: "Odoo \u2194 Shopify Integration workflow skill. Use this skill when the user needs Connect Odoo with Shopify: sync products, inventory, orders, and customers using the Shopify API and Odoo's external API or connector modules and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["odoo-shopify-integration", "connect", "odoo", "shopify", "sync", "products", "inventory", "orders"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Odoo ↔ Shopify Integration

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/odoo-shopify-integration` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Odoo ↔ Shopify Integration

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Data Flow Architecture, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Selling on Shopify while managing inventory in Odoo.
- Automatically creating Odoo sales orders from Shopify purchases.
- Keeping Odoo stock levels in sync with Shopify product availability.
- Mapping Shopify product variants to Odoo product templates.
- Use when the request clearly matches the imported source intent: Connect Odoo with Shopify: sync products, inventory, orders, and customers using the Shopify API and Odoo's external API or connector modules.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

This skill guides you through integrating Odoo with Shopify — syncing your product catalog, real-time inventory levels, incoming orders, and customer data. It covers both using the official Odoo Shopify connector (Enterprise) and building a custom integration via Shopify REST + Odoo XMLRPC APIs.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-shopify-integration` and describe your sync scenario.
2. **Design**: Receive the data flow architecture and field mapping.
3. **Build**: Get code snippets for the Shopify webhook receiver and Odoo API caller.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-shopify-integration to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @odoo-shopify-integration against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @odoo-shopify-integration for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @odoo-shopify-integration using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Push an Odoo Sale Order for a Shopify Order (Python)

```python
import xmlrpc.client, requests

# Odoo connection
odoo_url = "https://myodoo.example.com"
db, uid, pwd = "my_db", 2, "api_key"
models = xmlrpc.client.ServerProxy(f"{odoo_url}/xmlrpc/2/object")

def create_odoo_order_from_shopify(shopify_order):
    # Find or create customer
    partner = models.execute_kw(db, uid, pwd, 'res.partner', 'search_read',
        [[['email', '=', shopify_order['customer']['email']]]],
        {'fields': ['id'], 'limit': 1}
    )
    partner_id = partner[0]['id'] if partner else models.execute_kw(
        db, uid, pwd, 'res.partner', 'create', [{
            'name': shopify_order['customer']['first_name'] + ' ' + shopify_order['customer']['last_name'],
            'email': shopify_order['customer']['email'],
        }]
    )

    # Create Sale Order
    order_id = models.execute_kw(db, uid, pwd, 'sale.order', 'create', [{
        'partner_id': partner_id,
        'client_order_ref': f"Shopify #{shopify_order['order_number']}",
        'order_line': [(0, 0, {
            'product_id': get_odoo_product_id(line['sku']),
            'product_uom_qty': line['quantity'],
            'price_unit': float(line['price']),
        }) for line in shopify_order['line_items']],
    }])
    return order_id

def get_odoo_product_id(sku):
    result = models.execute_kw(db, uid, pwd, 'product.product', 'search_read',
        [[['default_code', '=', sku]]], {'fields': ['id'], 'limit': 1})
    return result[0]['id'] if result else False
```

### Example 2: Shopify Webhook for Real-Time Orders

```python
from flask import Flask, request
app = Flask(__name__)

@app.route('/webhook/shopify/orders', methods=['POST'])
def shopify_order_webhook():
    shopify_order = request.json
    order_id = create_odoo_order_from_shopify(shopify_order)
    return {"odoo_order_id": order_id}, 200
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Use Shopify's webhook system for real-time order sync instead of polling.
- ✅ Do: Match products using SKU / Internal Reference as the unique key between both systems.
- ✅ Do: Validate Shopify webhook HMAC signatures before processing any payload.
- ❌ Don't: Sync inventory from both systems simultaneously without a "master system" — pick one as the source of truth.
- ❌ Don't: Use Shopify product IDs as the key — use SKUs which are stable across platforms.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use Shopify's **webhook system** for real-time order sync instead of polling.
- ✅ **Do:** Match products using **SKU / Internal Reference** as the unique key between both systems.
- ✅ **Do:** Validate Shopify webhook HMAC signatures before processing any payload.
- ❌ **Don't:** Sync inventory from both systems simultaneously without a "master system" — pick one as the source of truth.
- ❌ **Don't:** Use Shopify product IDs as the key — use SKUs which are stable across platforms.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/odoo-shopify-integration`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@odoo-rpc-api` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-sales-crm-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-security-rules` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-upgrade-advisor` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Data Flow Architecture

```
SHOPIFY                          ODOO
--------                         ----
Product Catalog <──────sync──────  Product Templates + Variants
Inventory Level <──────sync──────  Stock Quants (real-time)
New Order       ───────push──────> Sale Order (auto-confirmed)
Customer        ───────push──────> res.partner (created if new)
Fulfillment     <──────push──────  Delivery Order validated
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
