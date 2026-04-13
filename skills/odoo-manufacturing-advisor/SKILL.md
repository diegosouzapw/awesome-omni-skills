---
name: odoo-manufacturing-advisor
description: "Odoo Manufacturing Advisor workflow skill. Use this skill when the user needs Expert guide for Odoo Manufacturing: Bills of Materials (BoM), Work Centers, routings, MRP planning, and production order workflows and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["odoo-manufacturing-advisor", "expert", "guide", "for", "odoo", "manufacturing", "bills", "materials"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Odoo Manufacturing Advisor

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/odoo-manufacturing-advisor` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Odoo Manufacturing Advisor

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating or structuring Bills of Materials for finished goods.
- Setting up Work Centers with capacity and efficiency settings.
- Running an MRP to automatically generate purchase and production orders from demand.
- Troubleshooting production order discrepancies or component availability issues.
- Use when the request clearly matches the imported source intent: Expert guide for Odoo Manufacturing: Bills of Materials (BoM), Work Centers, routings, MRP planning, and production order workflows.
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

This skill helps you configure and optimize Odoo Manufacturing (MRP). It covers Bills of Materials (BoM), Work Centers, routing operations, production order lifecycle, and Material Requirements Planning (MRP) runs to ensure you never run short of materials.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-manufacturing-advisor` and describe your manufacturing scenario.
2. **Configure**: Receive step-by-step instructions for BoM setup, routing, and MRP configuration.
3. **Plan**: Get guidance on running MRP and interpreting procurement messages.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-manufacturing-advisor to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/odoo-manufacturing-advisor/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/odoo-manufacturing-advisor/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @odoo-manufacturing-advisor using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Create a Bill of Materials

```text
Menu: Manufacturing → Products → Bills of Materials → New

Product: Finished Widget v2
BoM Type: Manufacture This Product
Quantity: 1 (produce 1 unit per BoM)

Components Tab:
  - Raw Plastic Sheet  | Qty: 0.5  | Unit: kg
  - Steel Bolt M6      | Qty: 4    | Unit: Units
  - Rubber Gasket      | Qty: 1    | Unit: Units

Operations Tab (requires "Work Orders" enabled in MFG Settings):
  - Operation: Injection Molding | Work Center: Press A   | Duration: 30 min
  - Operation: Assembly          | Work Center: Line 1    | Duration: 15 min
```

> **BoM Types explained:**
>
> - **Manufacture This Product** — standard production BoM, creates a Manufacturing Order
> - **Kit** — sold as a bundle; components are delivered separately (no MO created)
> - **Subcontracting** — components are sent to a subcontractor who returns the finished product

### Example 2: Configure a Work Center

```text
Menu: Manufacturing → Configuration → Work Centers → New

Work Center: CNC Machine 1
Working Hours: Standard 40h/week
Time Efficiency: 85%      (machine downtime factored in; 85% = 34 effective hrs/week)
Capacity: 2               (can run 2 production operations simultaneously)
OEE Target: 90%           (Overall Equipment Effectiveness KPI target)
Costs per Hour: $75.00    (used for manufacturing cost reporting)
```

### Example 3: Run the MRP Scheduler

```text
The MRP scheduler runs automatically via a daily cron job.
To trigger it manually:

Menu: Inventory → Operations → Replenishment → Run Scheduler
(or Manufacturing → Planning → Replenishment in some versions)

After running, review procurement exceptions:
Menu: Inventory → Operations → Replenishment

Message Types:
  "Replenish"   — Stock is below minimum; needs a PO or MO
  "Reschedule"  — An order's scheduled date conflicts with demand
  "Cancel"      — Demand no longer exists; the order can be cancelled
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Do: Enable Work Orders in Manufacturing Settings to use routing and time-tracking per operation.
- ✅ Do: Use BoM with variants (via product attributes) for products that come in multiple configurations (color, size, voltage) — avoids duplicate BoMs.
- ✅ Do: Set Lead Times on components (vendor lead time + security lead time) so MRP schedules purchase orders in advance.
- ✅ Do: Use Scrap Orders when discarding defective components during production — never adjust stock manually.
- ❌ Don't: Manually create purchase orders for MRP-managed items — override MRP suggestions only when justified.
- ❌ Don't: Confuse Kit BoM with Manufacture This Product — a Kit never creates a Manufacturing Order.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Enable **Work Orders** in Manufacturing Settings to use routing and time-tracking per operation.
- ✅ **Do:** Use **BoM with variants** (via product attributes) for products that come in multiple configurations (color, size, voltage) — avoids duplicate BoMs.
- ✅ **Do:** Set **Lead Times** on components (vendor lead time + security lead time) so MRP schedules purchase orders in advance.
- ✅ **Do:** Use **Scrap Orders** when discarding defective components during production — never adjust stock manually.
- ❌ **Don't:** Manually create purchase orders for MRP-managed items — override MRP suggestions only when justified.
- ❌ **Don't:** Confuse **Kit** BoM with **Manufacture This Product** — a Kit never creates a Manufacturing Order.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/odoo-manufacturing-advisor`, fails to mention provenance, or does not use the support pack at all.
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

- This skill targets **Odoo Manufacturing (mrp)** module. **Maintenance**, **PLM** (Product Lifecycle Management), and **Quality** modules are separate Enterprise modules not covered here.
- **Subcontracting** workflows (sending components to a third-party manufacturer) have additional receipt and valuation steps not fully detailed here.
- **Lot/serial number traceability** in production (tracking which lot was consumed per MO) adds complexity; test with small batches before full rollout.
- MRP calculations assume demand comes from **Sale Orders** and **Reordering Rules** — forecasts from external systems require custom integration.
