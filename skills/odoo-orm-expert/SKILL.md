---
name: odoo-orm-expert
description: "Odoo ORM Expert workflow skill. Use this skill when the user needs Master Odoo ORM patterns: search, browse, create, write, domain filters, computed fields, and performance-safe query techniques and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["odoo-orm-expert", "master", "odoo", "orm", "patterns", "search", "browse", "create"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Odoo ORM Expert

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/odoo-orm-expert` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Odoo ORM Expert

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Writing search(), browse(), create(), write(), or unlink() calls.
- Building complex domain filters for views or server actions.
- Implementing computed, stored, and related fields.
- Debugging slow queries or optimizing bulk operations.
- Use when the request clearly matches the imported source intent: Master Odoo ORM patterns: search, browse, create, write, domain filters, computed fields, and performance-safe query techniques.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

This skill teaches you Odoo's Object Relational Mapper (ORM) in depth. It covers reading/writing records, building domain filters, working with relational fields, and avoiding common performance pitfalls like N+1 queries.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-orm-expert` and describe what data operation you need.
2. **Get Code**: Receive correct, idiomatic Odoo ORM code with explanations.
3. **Optimize**: Ask for performance review on existing ORM code.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-orm-expert to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @odoo-orm-expert against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @odoo-orm-expert for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @odoo-orm-expert using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Search with Domain Filters

```python
# Find all confirmed sale orders for a specific customer, created this year
import datetime

start_of_year = datetime.date.today().replace(month=1, day=1).strftime('%Y-%m-%d')

orders = self.env['sale.order'].search([
    ('partner_id', '=', partner_id),
    ('state', '=', 'sale'),
    ('date_order', '>=', start_of_year),
], order='date_order desc', limit=50)

# Note: pass dates as 'YYYY-MM-DD' strings in domains,
# NOT as fields.Date objects — the ORM serializes them correctly.
```

### Example 2: Computed Field

```python
total_order_count = fields.Integer(
    string='Total Orders',
    compute='_compute_total_order_count',
    store=True
)

@api.depends('sale_order_ids')
def _compute_total_order_count(self):
    for record in self:
        record.total_order_count = len(record.sale_order_ids)
```

### Example 3: Safe Bulk Write (avoid N+1)

```python
# ✅ GOOD: One query for all records
partners = self.env['res.partner'].search([('country_id', '=', False)])
partners.write({'country_id': self.env.ref('base.us').id})

# ❌ BAD: Triggers a separate query per record
for partner in partners:
    partner.country_id = self.env.ref('base.us').id
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Use mapped(), filtered(), and sorted() on recordsets instead of Python loops.
- ✅ Do: Use sudo() sparingly and only when you understand the security implications.
- ✅ Do: Prefer search_count() over len(search(...)) when you only need a count.
- ✅ Do: Use with_context(...) to pass context values cleanly rather than modifying self.env.context directly.
- ❌ Don't: Call search() inside a loop — this is the #1 Odoo performance killer.
- ❌ Don't: Use raw SQL unless absolutely necessary; use ORM for all standard operations.
- ❌ Don't: Pass Python datetime/date objects directly into domain tuples — always stringify them as 'YYYY-MM-DD'.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use `mapped()`, `filtered()`, and `sorted()` on recordsets instead of Python loops.
- ✅ **Do:** Use `sudo()` sparingly and only when you understand the security implications.
- ✅ **Do:** Prefer `search_count()` over `len(search(...))` when you only need a count.
- ✅ **Do:** Use `with_context(...)` to pass context values cleanly rather than modifying `self.env.context` directly.
- ❌ **Don't:** Call `search()` inside a loop — this is the #1 Odoo performance killer.
- ❌ **Don't:** Use raw SQL unless absolutely necessary; use ORM for all standard operations.
- ❌ **Don't:** Pass Python `datetime`/`date` objects directly into domain tuples — always stringify them as `'YYYY-MM-DD'`.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/odoo-orm-expert`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@multi-agent-brainstorming` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@multi-agent-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@multi-agent-task-orchestrator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@multi-cloud-architecture` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- Does not cover **`cr.execute()` raw SQL** patterns in depth — use the Odoo performance tuner skill for SQL-level optimization.
- **Stored computed fields** can cause significant write overhead at scale; this skill does not cover partitioning strategies.
- Does not cover **transient models** (`models.TransientModel`) or wizard patterns.
- ORM behavior can differ slightly between Odoo SaaS and On-Premise due to config overrides.
