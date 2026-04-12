---
name: odoo-shopify-integration-v2
description: "Odoo \u2194 Shopify Integration workflow skill. Use this skill when the user needs Connect Odoo with Shopify: sync products, inventory, orders, and customers using the Shopify API and Odoo's external API or connector modules and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["odoo-shopify-integration-v2", "odoo-shopify-integration", "connect", "odoo", "shopify", "sync", "products", "inventory"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Odoo ↔ Shopify Integration

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/odoo-shopify-integration` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Odoo ↔ Shopify Integration

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Data Flow Architecture.

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
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
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
Use @odoo-shopify-integration-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/odoo-shopify-integration-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/odoo-shopify-integration-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @odoo-shopify-integration-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/odoo-shopify-integration`, fails to mention provenance, or does not use the support pack at all.
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
