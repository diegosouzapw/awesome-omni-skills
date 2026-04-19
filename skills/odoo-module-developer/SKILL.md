---
name: odoo-module-developer
description: "Odoo Module Developer workflow skill. Use this skill when the user needs Expert guide for creating custom Odoo modules. Covers _manifest_.py, model inheritance, ORM patterns, and module structure best practices and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["odoo-module-developer", "expert", "guide", "for", "creating", "custom", "odoo", "modules"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Odoo Module Developer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/odoo-module-developer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Odoo Module Developer

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Starting a new custom Odoo module from scratch.
- Extending an existing Odoo model (e.g., adding fields to sale.order).
- Troubleshooting module loading errors or manifest issues.
- Implementing onchange, compute, and constraint methods correctly.
- Use when the request clearly matches the imported source intent: Expert guide for creating custom Odoo modules. Covers manifest.py, model inheritance, ORM patterns, and module structure best practices.
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

This skill transforms your AI into an expert Odoo custom module developer. It guides you through scaffolding new modules, defining models, setting up security, and following Odoo's coding conventions for both Community and Enterprise editions.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-module-developer` and describe the module you want to build.
2. **Scaffold**: Get the full folder structure with `__manifest__.py`, `__init__.py`, models, views, and security files.
3. **Review**: Paste existing code and get a review against Odoo best practices.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-module-developer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @odoo-module-developer against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @odoo-module-developer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @odoo-module-developer using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Scaffold a New Module

**Prompt:** `Create a module called "hospital_management" with a model for patients`

**Generated structure:**

```text
hospital_management/
├── __manifest__.py
├── __init__.py
├── models/
│   ├── __init__.py
│   └── hospital_patient.py
├── views/
│   └── hospital_patient_views.xml
├── security/
│   ├── ir.model.access.csv
│   └── security.xml
└── data/
```

**`__manifest__.py`:**

```python
{
    'name': 'Hospital Management',
    'version': '17.0.1.0.0',
    'category': 'Healthcare',
    'depends': ['base', 'mail'],
    'data': [
        'security/ir.model.access.csv',
        'views/hospital_patient_views.xml',
    ],
    'installable': True,
    'license': 'LGPL-3',
}
```

**`models/hospital_patient.py`:**

```python
from odoo import models, fields, api

class HospitalPatient(models.Model):
    _name = 'hospital.patient'
    _description = 'Hospital Patient'
    _inherit = ['mail.thread', 'mail.activity.mixin']

    name = fields.Char(string='Patient Name', required=True, tracking=True)
    birth_date = fields.Date(string='Birth Date')
    doctor_id = fields.Many2one('res.users', string='Assigned Doctor')
    state = fields.Selection([
        ('draft', 'New'),
        ('confirmed', 'Confirmed'),
        ('done', 'Done'),
    ], default='draft', tracking=True)
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Always prefix your model _name with a namespace (e.g., hospital.patient).
- ✅ Do: Use _inherit = ['mail.thread'] to add chatter/logging automatically.
- ✅ Do: Specify version in manifest as {odoo_version}.{major}.{minor}.{patch}.
- ✅ Do: Set 'author' and 'website' in manifest.py so your module is identifiable in the Apps list.
- ❌ Don't: Modify core Odoo model files directly — always use _inherit.
- ❌ Don't: Forget to add new models to ir.model.access.csv or users will get access errors.
- ❌ Don't: Use spaces or uppercase in folder names — Odoo requires snake_case module names.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Always prefix your model `_name` with a namespace (e.g., `hospital.patient`).
- ✅ **Do:** Use `_inherit = ['mail.thread']` to add chatter/logging automatically.
- ✅ **Do:** Specify `version` in manifest as `{odoo_version}.{major}.{minor}.{patch}`.
- ✅ **Do:** Set `'author'` and `'website'` in `__manifest__.py` so your module is identifiable in the Apps list.
- ❌ **Don't:** Modify core Odoo model files directly — always use `_inherit`.
- ❌ **Don't:** Forget to add new models to `ir.model.access.csv` or users will get access errors.
- ❌ **Don't:** Use spaces or uppercase in folder names — Odoo requires snake_case module names.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/odoo-module-developer`, fails to mention provenance, or does not use any copied source files at all.
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

- Does not cover **OWL JavaScript components** or frontend widget development — use `@odoo-xml-views-builder` for view XML.
- **Odoo 13 and below** have a different module structure (no `__manifest__.py` auto-loading) — this skill targets v14+.
- Does not cover **multi-company** or **multi-website** configuration; those require additional model fields (`company_id`, `website_id`).
- Does not generate automated test files — use `@odoo-automated-tests` for that.
