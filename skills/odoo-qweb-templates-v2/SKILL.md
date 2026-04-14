---
name: odoo-qweb-templates-v2
description: "Odoo QWeb Templates workflow skill. Use this skill when the user needs Expert in Odoo QWeb templating for PDF reports, email templates, and website pages. Covers t-if, t-foreach, t-field, and report actions and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["odoo-qweb-templates-v2", "odoo-qweb-templates", "expert", "odoo", "qweb", "templating", "for", "pdf"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Odoo QWeb Templates

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/odoo-qweb-templates` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

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

QWeb is Odoo's primary templating engine, used for PDF reports, website pages, and email templates. This skill generates correct, well-structured QWeb XML with proper directives, translation support, and report action bindings.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-qweb-templates` and describe the report or template needed.
2. **Generate**: Receive a complete `ir.actions.report` record and QWeb template.
3. **Debug**: Paste a broken template to identify and fix rendering issues.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-qweb-templates-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/odoo-qweb-templates-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/odoo-qweb-templates-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @odoo-qweb-templates-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/odoo-qweb-templates`, fails to mention provenance, or does not use the support pack at all.
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

- Does not cover **website controller routing** for dynamic QWeb pages — that requires Python `http.route` knowledge.
- **Email template** QWeb has different variable scope than report QWeb (`object` vs `docs`) — this skill primarily focuses on PDF reports.
- QWeb JavaScript (used in Kanban/Form widgets) is a different engine; this skill covers **server-side QWeb only**.
- Does not cover **wkhtmltopdf configuration** for PDF rendering issues (page size, margins, header/footer overlap).
