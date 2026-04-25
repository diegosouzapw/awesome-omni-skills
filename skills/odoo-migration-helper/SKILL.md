---
name: odoo-migration-helper
description: "Odoo Migration Helper workflow skill. Use this skill when the user needs Step-by-step guide for migrating Odoo custom modules between versions (v14\u2192v15\u2192v16\u2192v17). Covers API changes, deprecated methods, and view migration and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["odoo-migration-helper", "step-by-step", "guide", "for", "migrating", "odoo", "custom", "modules"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Odoo Migration Helper

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/odoo-migration-helper` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Odoo Migration Helper

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Key Migration Changes by Version, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Upgrading a custom module from Odoo 14/15/16 to a newer version.
- Getting a checklist of things to check before running odoo-upgrade.
- Fixing deprecation warnings after a version upgrade.
- Understanding what changed between two specific Odoo versions.
- Use when the request clearly matches the imported source intent: Step-by-step guide for migrating Odoo custom modules between versions (v14→v15→v16→v17). Covers API changes, deprecated methods, and view migration.
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

Migrating Odoo modules between major versions requires careful handling of API changes, deprecated methods, renamed fields, and new view syntax. This skill guides you through the migration process systematically, covering the most common breaking changes between versions.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-migration-helper`, specify your source and target versions, and paste your module code.
2. **Analyze**: Receive a list of breaking changes with before/after code fixes.
3. **Validate**: Get a migration checklist specific to your module's features.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-migration-helper to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @odoo-migration-helper against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @odoo-migration-helper for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @odoo-migration-helper using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Migrate `attrs` visibility to Odoo 17

```xml
<!-- v16 — domain-based attrs -->
<field name="discount" attrs="{'invisible': [('product_type', '!=', 'service')]}"/>
<field name="discount" attrs="{'required': [('state', '=', 'sale')]}"/>

<!-- v17 — inline Python expressions -->
<field name="discount" invisible="product_type != 'service'"/>
<field name="discount" required="state == 'sale'"/>
```

### Example 2: Migrate Chatter block

```xml
<!-- v16 -->
<div class="oe_chatter">
    <field name="message_follower_ids"/>
    <field name="activity_ids"/>
    <field name="message_ids"/>
</div>

<!-- v17 -->
<chatter/>
```

### Example 3: Migrate website_published flag (v15 → v16)

```python
# v15
record.website_published = True

# v16+
record.is_published = True
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Test with --update=your_module on each version before pushing to production.
- ✅ Do: Use the official Odoo Upgrade Guide to get an automated pre-upgrade analysis report.
- ✅ Do: Check OCA migration notes and the module's HISTORY.rst for community modules.
- ✅ Do: Run npm run validate after migration to catch manifest or frontmatter issues early.
- ❌ Don't: Skip intermediate versions — go v14→v15→v16→v17 sequentially; never jump.
- ❌ Don't: Forget to update version in manifest.py (e.g., 17.0.1.0.0).
- ❌ Don't: Assume OCA modules are migration-ready; check their GitHub branch for the target version.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Test with `--update=your_module` on each version before pushing to production.
- ✅ **Do:** Use the official [Odoo Upgrade Guide](https://upgrade.odoo.com/) to get an automated pre-upgrade analysis report.
- ✅ **Do:** Check OCA migration notes and the module's `HISTORY.rst` for community modules.
- ✅ **Do:** Run `npm run validate` after migration to catch manifest or frontmatter issues early.
- ❌ **Don't:** Skip intermediate versions — go v14→v15→v16→v17 sequentially; never jump.
- ❌ **Don't:** Forget to update `version` in `__manifest__.py` (e.g., `17.0.1.0.0`).
- ❌ **Don't:** Assume OCA modules are migration-ready; check their GitHub branch for the target version.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/odoo-migration-helper`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Key Migration Changes by Version

### Odoo 16 → 17

| Topic | Old (v16) | New (v17) |
|---|---|---|
| View visibility | `attrs="{'invisible': [...]}"` | `invisible="condition"` |
| Chatter | `<div class="oe_chatter">` | `<chatter/>` |
| Required/Readonly | `attrs="{'required': [...]}"` | `required="condition"` |
| Python minimum | 3.10 | 3.10+ |
| JS modules | Legacy `define(['web.core'])` | ES module `import` syntax |

### Odoo 15 → 16

| Topic | Old (v15) | New (v16) |
|---|---|---|
| Website published flag | `website_published = True` | `is_published = True` |
| Mail aliases | `alias_domain` on company | Moved to `mail.alias.domain` model |
| Report render | `_render_qweb_pdf()` | `_render_qweb_pdf()` (same, but signature changed) |
| Accounting move | `account.move.line` grouping | Line aggregation rules updated |
| Email threading | `mail_thread_id` | Deprecated; use `message_ids` |

#### Imported: Limitations

- Covers **v14 through v17** only — does not address v13 or older (pre-manifest era has fundamentally different module structure).
- The **Odoo.sh automated upgrade** path has additional steps not covered here; refer to Odoo.sh documentation.
- **Enterprise-specific modules** (e.g., `account_accountant`, `sign`) may have undocumented breaking changes; test on a staging environment with Enterprise license.
- JavaScript OWL component migration (v15 Legacy → v16 OWL) is a complex topic not fully covered by this skill.
