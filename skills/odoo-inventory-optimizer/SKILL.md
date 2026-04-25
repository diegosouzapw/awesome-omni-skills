---
name: odoo-inventory-optimizer
description: "Odoo Inventory Optimizer workflow skill. Use this skill when the user needs Expert guide for Odoo Inventory: stock valuation (FIFO/AVCO), reordering rules, putaway strategies, routes, and multi-warehouse configuration and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["odoo-inventory-optimizer", "expert", "guide", "for", "odoo", "inventory", "stock", "valuation"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Odoo Inventory Optimizer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/odoo-inventory-optimizer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Odoo Inventory Optimizer

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Choosing and configuring FIFO vs AVCO stock valuation.
- Setting up minimum stock reordering rules to avoid stockouts.
- Designing a multi-step warehouse flow (2-step receipt, 3-step delivery).
- Configuring putaway rules to direct products to specific storage locations.
- Troubleshooting negative stock, incorrect valuation, or missing moves.
- Use when the request clearly matches the imported source intent: Expert guide for Odoo Inventory: stock valuation (FIFO/AVCO), reordering rules, putaway strategies, routes, and multi-warehouse configuration.

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

This skill helps you configure and optimize Odoo Inventory for accuracy, efficiency, and traceability. It covers stock valuation methods, reordering rules, putaway strategies, warehouse routes, and multi-step flows (receive → quality → store).

#### Imported: How It Works

1. **Activate**: Mention `@odoo-inventory-optimizer` and describe your warehouse scenario.
2. **Configure**: Receive step-by-step configuration instructions with exact Odoo menu paths.
3. **Optimize**: Get recommendations for reordering rules and stock accuracy improvements.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-inventory-optimizer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @odoo-inventory-optimizer against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @odoo-inventory-optimizer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @odoo-inventory-optimizer using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Enable FIFO Stock Valuation

```text
Menu: Inventory → Configuration → Settings

Enable: Storage Locations
Enable: Multi-Step Routes
Costing Method: (set per Product Category, not globally)

Menu: Inventory → Configuration → Product Categories → Edit

  Category: All / Physical Goods
  Costing Method: First In First Out (FIFO)
  Inventory Valuation: Automated
  Account Stock Valuation: [Balance Sheet inventory account]
  Account Stock Input:   [Stock Received Not Billed]
  Account Stock Output:  [Stock Delivered Not Invoiced]
```

### Example 2: Set Up a Min/Max Reordering Rule

```text
Menu: Inventory → Operations → Replenishment → New

Product: Office Paper A4
Location: WH/Stock
Min Qty: 100   (trigger reorder when stock falls below this)
Max Qty: 500   (purchase up to this quantity)
Multiple Qty: 50  (always order in multiples of 50)
Route: Buy    (triggers a Purchase Order automatically)
       or Manufacture (triggers a Manufacturing Order)
```

### Example 3: Configure Putaway Rules

```text
Menu: Inventory → Configuration → Putaway Rules → New

Purpose: Direct products from WH/Input to specific bin locations

Rules:
  Product Category: Refrigerated Goods
    → Location: WH/Stock/Cold Storage

  Product: Laptop Model X
    → Location: WH/Stock/Electronics/Shelf A

  (leave Product blank to apply the rule to an entire category)

Result: When a receipt is validated, Odoo automatically suggests
the correct destination location per product or category.
```

### Example 4: Configure 3-Step Warehouse Delivery

```text
Menu: Inventory → Configuration → Warehouses → [Your Warehouse]

Outgoing Shipments: Pick + Pack + Ship (3 steps)

Operations created automatically:
  PICK  — Move goods from storage shelf to packing area
  PACK  — Package items and print shipping label
  OUT   — Hand off to carrier / mark as shipped
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Use Lots/Serial Numbers for high-value or regulated items (medical devices, electronics).
- ✅ Do: Run a physical inventory adjustment at least quarterly (Inventory → Operations → Physical Inventory) to correct drift.
- ✅ Do: Set reordering rules on fast-moving items so purchase orders are generated automatically.
- ✅ Do: Enable Putaway Rules on warehouses with multiple storage zones — it eliminates manual location selection errors.
- ❌ Don't: Switch stock valuation method (FIFO ↔ AVCO) after recording transactions — it produces incorrect historical cost data.
- ❌ Don't: Use "Update Quantity" to fix stock errors — always use Inventory Adjustments to maintain a proper audit trail.
- ❌ Don't: Mix product categories with different costing methods in the same storage location without understanding the valuation impact.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use **Lots/Serial Numbers** for high-value or regulated items (medical devices, electronics).
- ✅ **Do:** Run a **physical inventory adjustment** at least quarterly (Inventory → Operations → Physical Inventory) to correct drift.
- ✅ **Do:** Set reordering rules on fast-moving items so purchase orders are generated automatically.
- ✅ **Do:** Enable **Putaway Rules** on warehouses with multiple storage zones — it eliminates manual location selection errors.
- ❌ **Don't:** Switch stock valuation method (FIFO ↔ AVCO) after recording transactions — it produces incorrect historical cost data.
- ❌ **Don't:** Use "Update Quantity" to fix stock errors — always use Inventory Adjustments to maintain a proper audit trail.
- ❌ **Don't:** Mix product categories with different costing methods in the same storage location without understanding the valuation impact.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/odoo-inventory-optimizer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@mobile-developer` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@mobile-security-coder` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@modern-javascript-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monday-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- **Serial number tracking** at the individual unit level (SN per line) adds significant UI overhead; test performance with large volumes before enabling.
- Does not cover **landed costs** (import duties, freight allocation to product cost) — that requires the `stock_landed_costs` module.
- **Cross-warehouse stock transfers** have routing complexities (transit locations, intercompany invoicing) not fully covered here.
- Automated inventory valuation requires the **Accounting** module; Community Edition installations without it cannot post stock journal entries.
