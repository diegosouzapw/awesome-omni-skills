---
name: odoo-qweb-templates
description: "Odoo QWeb Templates workflow skill. Use this skill when the user needs Expert in Odoo QWeb templating for PDF reports, email templates, and website pages. Covers t-if, t-foreach, t-field, and report actions and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["odoo-qweb-templates", "expert", "odoo", "qweb", "templating", "for", "pdf", "reports"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Odoo QWeb Templates

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/odoo-qweb-templates` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Odoo QWeb Templates

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating a custom PDF report (invoice, delivery slip, certificate).
- Building a QWeb email template triggered by workflow actions.
- Designing Odoo website pages with dynamic content.
- Debugging QWeb rendering errors (t-if, t-foreach issues).
- Use when the request clearly matches the imported source intent: Expert in Odoo QWeb templating for PDF reports, email templates, and website pages. Covers t-if, t-foreach, t-field, and report actions.
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

QWeb is Odoo's primary templating engine, used for PDF reports, website pages, and email templates. This skill generates correct, well-structured QWeb XML with proper directives, translation support, and report action bindings.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-qweb-templates` and describe the report or template needed.
2. **Generate**: Receive a complete `ir.actions.report` record and QWeb template.
3. **Debug**: Paste a broken template to identify and fix rendering issues.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-qweb-templates to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @odoo-qweb-templates against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @odoo-qweb-templates for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @odoo-qweb-templates using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Custom PDF Report

```xml
<!-- Report Action -->
<record id="action_report_patient_card" model="ir.actions.report">
    <field name="name">Patient Card</field>
    <field name="model">hospital.patient</field>
    <field name="report_type">qweb-pdf</field>
    <field name="report_name">hospital_management.report_patient_card</field>
    <field name="binding_model_id" ref="model_hospital_patient"/>
</record>

<!-- QWeb Template -->
<template id="report_patient_card">
    <t t-call="web.html_container">
        <t t-foreach="docs" t-as="doc">
            <t t-call="web.external_layout">
                <div class="page">
                    <h2>Patient Card</h2>
                    <table class="table table-bordered">
                        <tr>
                            <td><strong>Name:</strong></td>
                            <td><t t-field="doc.name"/></td>
                        </tr>
                        <tr>
                            <td><strong>Doctor:</strong></td>
                            <td><t t-field="doc.doctor_id.name"/></td>
                        </tr>
                        <tr>
                            <td><strong>Status:</strong></td>
                            <td><t t-field="doc.state"/></td>
                        </tr>
                    </table>
                </div>
            </t>
        </t>
    </t>
</template>
```

### Example 2: Conditional Rendering

```xml
<!-- Show a warning block only if the patient is not confirmed -->
<t t-if="doc.state == 'draft'">
    <div class="alert alert-warning">
        <strong>Warning:</strong> This patient has not been confirmed yet.
    </div>
</t>
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Use t-field for model fields — Odoo auto-formats dates, monetary values, and booleans correctly.
- ✅ Do: Use t-out (Odoo 15+) for safe HTML output of non-field strings. Use t-esc only on Odoo 14 and below (it HTML-escapes output).
- ✅ Do: Call web.external_layout for PDF reports to automatically include the company header, footer, and logo.
- ✅ Do: Use _lt() (lazy translation) for translatable string literals inside Python report helpers, not inline t-esc.
- ❌ Don't: Use raw Python expressions inside QWeb — compute values in the model or a report getreport_values() helper.
- ❌ Don't: Forget t-as when using t-foreach; without it, you can't access the current record in the loop body.
- ❌ Don't: Use t-esc where you intend to render HTML content — it will escape the tags and print them as raw text.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use `t-field` for model fields — Odoo auto-formats dates, monetary values, and booleans correctly.
- ✅ **Do:** Use `t-out` (Odoo 15+) for safe HTML output of non-field strings. Use `t-esc` only on Odoo 14 and below (it HTML-escapes output).
- ✅ **Do:** Call `web.external_layout` for PDF reports to automatically include the company header, footer, and logo.
- ✅ **Do:** Use `_lt()` (lazy translation) for translatable string literals inside Python report helpers, not inline `t-esc`.
- ❌ **Don't:** Use raw Python expressions inside QWeb — compute values in the model or a report `_get_report_values()` helper.
- ❌ **Don't:** Forget `t-as` when using `t-foreach`; without it, you can't access the current record in the loop body.
- ❌ **Don't:** Use `t-esc` where you intend to render HTML content — it will escape the tags and print them as raw text.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/odoo-qweb-templates`, fails to mention provenance, or does not use any copied source files at all.
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

- Does not cover **website controller routing** for dynamic QWeb pages — that requires Python `http.route` knowledge.
- **Email template** QWeb has different variable scope than report QWeb (`object` vs `docs`) — this skill primarily focuses on PDF reports.
- QWeb JavaScript (used in Kanban/Form widgets) is a different engine; this skill covers **server-side QWeb only**.
- Does not cover **wkhtmltopdf configuration** for PDF rendering issues (page size, margins, header/footer overlap).
