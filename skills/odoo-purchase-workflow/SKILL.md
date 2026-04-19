---
name: odoo-purchase-workflow
description: "Odoo Purchase Workflow workflow skill. Use this skill when the user needs Expert guide for Odoo Purchase: RFQ \u2192 PO \u2192 Receipt \u2192 Vendor Bill workflow, purchase agreements, vendor price lists, and 3-way matching and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["odoo-purchase-workflow", "expert", "guide", "for", "odoo", "purchase", "rfq", "receipt"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Odoo Purchase Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/odoo-purchase-workflow` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Odoo Purchase Workflow

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Setting up the purchase flow for a new Odoo instance.
- Implementing purchase order approval workflows (2-level approval).
- Configuring vendor price lists with quantity-based discounts.
- Troubleshooting billing/receipt mismatches in 3-way matching.
- Use when the request clearly matches the imported source intent: Expert guide for Odoo Purchase: RFQ → PO → Receipt → Vendor Bill workflow, purchase agreements, vendor price lists, and 3-way matching.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

This skill guides you through the complete Odoo Purchase workflow — from sending a Request for Quotation (RFQ) to receiving goods and matching the vendor bill. It also covers purchase agreements, vendor price lists on products, automated reordering, and 3-way matching controls.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-purchase-workflow` and describe your purchasing scenario.
2. **Configure**: Receive exact Odoo menu paths and field-by-field configuration.
3. **Troubleshoot**: Describe a billing or receiving issue and get a root cause diagnosis.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-purchase-workflow to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @odoo-purchase-workflow against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @odoo-purchase-workflow for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @odoo-purchase-workflow using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Standard RFQ → PO → Receipt → Bill Flow

```text
Step 1: Create RFQ
  Menu: Purchase → Orders → Requests for Quotation → New
  Vendor: Acme Supplies
  Add product lines with quantity and unit price

Step 2: Send RFQ to Vendor
  Click "Send by Email" → Vendor receives PDF with RFQ details

Step 3: Confirm as Purchase Order
  Click "Confirm Order" → Status changes to "Purchase Order"

Step 4: Receive Goods
  Click "Receive Products" → Validate received quantities
  (partial receipts are supported; PO stays open for remaining qty)

Step 5: Match Vendor Bill (3-Way Match)
  Click "Create Bill" → Bill pre-filled from PO quantities
  Verify: PO qty = Received qty = Billed qty
  Post Bill → Register Payment
```

### Example 2: Enable 2-Level Purchase Approval

```text
Menu: Purchase → Configuration → Settings

Purchase Order Approval:
  ☑ Purchase Order Approval
  Minimum Order Amount: $5,000

Result:
  Orders ≤ $5,000  → Confirm directly to PO
  Orders > $5,000  → Status: "Waiting for Approval"
                     A purchase manager must click "Approve"
```

### Example 3: Vendor Price List (Quantity Breaks on a Product)

```text
Vendor price lists are configured per product, not as a global menu.

Menu: Inventory → Products → [Select Product] → Purchase Tab
  → Vendor Pricelist section → Add a line

Vendor: Acme Supplies
Currency: USD
Price:    $12.00
Min. Qty: 1

Add another line for quantity discount:
Min. Qty: 100 → Price: $10.50   (12.5% discount)
Min. Qty: 500 → Price:  $9.00   (25% discount)

Result: Odoo automatically selects the right price on a PO
based on the ordered quantity for this vendor.
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Enable Purchase Order Approval for orders above your company's approval threshold.
- ✅ Do: Use Purchase Agreements (Blanket Orders) for recurring vendors with pre-negotiated annual contracts.
- ✅ Do: Set a vendor lead time on products (Purchase tab) so Odoo can schedule arrival dates accurately.
- ✅ Do: Set the Bill Control policy to "Based on received quantities" (not ordered qty) for accurate 3-way matching.
- ❌ Don't: Confirm a PO before prices are agreed — use Draft/RFQ status to negotiate first.
- ❌ Don't: Post a vendor bill without linking it to a receipt — bypassing 3-way matching creates accounting discrepancies.
- ❌ Don't: Delete a PO that has received quantities — archive it instead to preserve the stock and accounting trail.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Enable **Purchase Order Approval** for orders above your company's approval threshold.
- ✅ **Do:** Use **Purchase Agreements (Blanket Orders)** for recurring vendors with pre-negotiated annual contracts.
- ✅ **Do:** Set a **vendor lead time** on products (Purchase tab) so Odoo can schedule arrival dates accurately.
- ✅ **Do:** Set the **Bill Control** policy to "Based on received quantities" (not ordered qty) for accurate 3-way matching.
- ❌ **Don't:** Confirm a PO before prices are agreed — use Draft/RFQ status to negotiate first.
- ❌ **Don't:** Post a vendor bill without linking it to a receipt — bypassing 3-way matching creates accounting discrepancies.
- ❌ **Don't:** Delete a PO that has received quantities — archive it instead to preserve the stock and accounting trail.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/odoo-purchase-workflow`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@monte-carlo-monitor-creation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monte-carlo-prevent` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monte-carlo-push-ingestion` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monte-carlo-validation-notebook` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Limitations

- Does not cover **subcontracting purchase flows** — those require the Manufacturing module and subcontracting BoM type.
- **EDI-based order exchange** (automated PO import/export) requires custom integration — use `@odoo-edi-connector` for that.
- Vendor pricelist currency conversion depends on the active **currency rate** in Odoo; rates must be kept current for accuracy.
- The **2-level approval** is a binary threshold; more complex approval matrices (department-based, multi-tier) require custom development or the Approvals app.
