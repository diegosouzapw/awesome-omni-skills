---
name: odoo-ecommerce-configurator-v3
description: "Odoo eCommerce Configurator workflow skill. Use this skill when the user needs Expert guide for Odoo eCommerce and Website: product catalog, payment providers, shipping methods, SEO, and order-to-fulfillment workflow and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["odoo-ecommerce-configurator-v3", "odoo-ecommerce-configurator", "expert", "guide", "for", "odoo", "ecommerce", "and"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Odoo eCommerce Configurator

## Overview

This public intake copy packages `plugins/antigravity-bundle-odoo-erp/skills/odoo-ecommerce-configurator` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Odoo eCommerce Configurator

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Launching an Odoo eCommerce store for the first time.
- Integrating a payment provider (Stripe, PayPal, Adyen).
- Configuring shipping rates with carrier integration (UPS, FedEx, DHL).
- Optimizing product pages for SEO with Odoo Website tools.
- Use when the request clearly matches the imported source intent: Expert guide for Odoo eCommerce and Website: product catalog, payment providers, shipping methods, SEO, and order-to-fulfillment workflow.
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

This skill helps you set up and optimize an Odoo-powered online store. It covers product publishing, payment gateway integration, shipping carrier configuration, cart and checkout customization, and the workflow from online order to warehouse fulfillment.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-ecommerce-configurator` and describe your store scenario.
2. **Configure**: Receive step-by-step Odoo eCommerce setup with menu paths.
3. **Optimize**: Get SEO, conversion, and catalog best practices.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-ecommerce-configurator-v3 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/odoo-ecommerce-configurator-v3/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/odoo-ecommerce-configurator-v3/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @odoo-ecommerce-configurator-v3 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Publish a Product to the Website

```text
Menu: Website → eCommerce → Products → Select Product

Fields to complete for a great product listing:
  Name:               Ergonomic Mesh Office Chair  (keyword-rich)
  Internal Reference: CHAIR-MESH-001               (required for inventory)
  Sales Price:        $299.00
  Website Description (website tab): 150–300 words of unique content

Publishing:
  Toggle "Published" in the top-right corner of the product form
  or via: Website → Go to Website → Toggle "Published" button

SEO (website tab → SEO section):
  Page Title:       Ergonomic Mesh Chair | Office Chairs | YourStore
  Meta Description: Discover the most comfortable ergonomic mesh office
                    chair, designed for all-day support...  (≤160 chars)

Website tab:
  Can be Sold: YES
  Website:     yourstore.com  (if running multiple websites)
```

### Example 2: Configure Stripe Payment Provider

```text
Menu: Website → Configuration → Payment Providers → Stripe → Configure
(or: Accounting → Configuration → Payment Providers → Stripe)

State: Test  (use Test mode until fully validated, then switch to Enabled)

Credentials (from your Stripe Dashboard → Developers → API Keys):
  Publishable Key: pk_live_XXXXXXXX
  Secret Key:      sk_live_XXXXXXXX  (store securely; never expose client-side)

Payment Journal: Bank (USD)
Capture Mode:    Automatic  (charge card immediately on order confirmation)
                 or Manual  (authorize only; charge later on fulfillment)

Webhook:
  Add Odoo's webhook URL in Stripe Dashboard → Webhooks
  URL: https://yourstore.com/payment/stripe/webhook
  Events: payment_intent.succeeded, payment_intent.payment_failed
```

### Example 3: Set Up Flat Rate Shipping with Free Threshold

```text
Menu: Inventory → Configuration → Delivery Methods → New

Name: Standard Shipping (3–5 business days)
Provider: Fixed Price
Delivery Product: [Shipping] Standard  (used for invoicing)

Pricing:
  Price: $9.99
  ☑ Free if order amount is above: $75.00

Availability:
  Countries: United States
  States: All states

Publish to website:
  ☑ Published  (visible to customers at checkout)
```

### Example 4: Set Up Abandoned Cart Recovery

```text
Menu: Email Marketing → Mailing Lists → (create a list if needed)

For automated abandoned cart emails in Odoo 16/17:
Menu: Marketing → Marketing Automation → New Campaign

Trigger: Odoo record updated
Model: eCommerce Cart (sale.order with state = 'draft')
Filter: Cart not updated in 1 hour AND not confirmed

Actions:
  1. Wait 1 hour
  2. Send Email: "You left something behind!"  (use a recovery email template)
  3. Wait 24 hours
  4. Send Email: "Last chance — items selling fast"

Note: Some Odoo hosting plans may require "Email Marketing" app enabled.
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Do: Use Product Variants (color, size) instead of duplicate products — cleaner catalog and shared inventory tracking.
- ✅ Do: Enable HTTPS (SSL certificate) via your hosting provider and set HSTS in Website → Settings → Security.
- ✅ Do: Set up Abandoned Cart Recovery using Marketing Automation or a scheduled email sequence.
- ✅ Do: Add a Stripe webhook so Odoo is notified of payment events in real time — without it, failed payments may not update correctly.
- ❌ Don't: Leave the payment provider in Test mode in production — no real charges will be processed.
- ❌ Don't: Publish products without an Internal Reference (SKU) — it breaks inventory tracking and order fulfillment.
- ❌ Don't: Use the same Stripe key for Test and Production environments — always rotate to live keys before going live.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use **Product Variants** (color, size) instead of duplicate products — cleaner catalog and shared inventory tracking.
- ✅ **Do:** Enable **HTTPS** (SSL certificate) via your hosting provider and set HSTS in Website → Settings → Security.
- ✅ **Do:** Set up **Abandoned Cart Recovery** using Marketing Automation or a scheduled email sequence.
- ✅ **Do:** Add a **Stripe webhook** so Odoo is notified of payment events in real time — without it, failed payments may not update correctly.
- ❌ **Don't:** Leave the payment provider in **Test mode** in production — no real charges will be processed.
- ❌ **Don't:** Publish products without an **Internal Reference (SKU)** — it breaks inventory tracking and order fulfillment.
- ❌ **Don't:** Use the same Stripe key for Test and Production environments — always rotate to live keys before going live.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-odoo-erp/skills/odoo-ecommerce-configurator`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Limitations

- **Carrier integration** (live UPS/FedEx rate calculation) requires the specific carrier connector module (e.g., `delivery_ups`) and a carrier account API key.
- Does not cover **multi-website** configuration — running separate storefronts with different pricelists and languages requires Enterprise.
- **B2B eCommerce** (customer login required, custom catalog and prices per customer) has additional configuration steps not fully covered here.
- Odoo eCommerce does not support **subscription billing** natively — that requires the Enterprise **Subscriptions** module.
