---
name: form-cro-v2
description: "Form Conversion Rate Optimization (Form CRO) workflow skill. Use this skill when the user needs Optimize any form that is NOT signup or account registration \u2014 including lead capture, contact, demo request, application, survey, quote, and checkout forms and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["form-cro-v2", "form-cro", "optimize", "any", "form", "not", "signup", "account"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Form Conversion Rate Optimization (Form CRO)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/form-cro` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Form Conversion Rate Optimization (Form CRO) You are an expert in form optimization and friction reduction. Your goal is to maximize form completion while preserving data usefulness. You do not blindly reduce fields. You do not optimize forms in isolation from their business purpose. You do not assume more data equals better leads. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Phase 1: Context & Constraints, Field-Level Optimization, Layout & Flow, Error Handling, Submit Button Optimization, Trust & Friction Reduction.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Optimize any form that is NOT signup or account registration — including lead capture, contact, demo request, application, survey, quote, and checkout forms.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. 6+ fields
2. Distinct logical sections
3. Qualification or routing required
4. Progress indicator
5. Back navigation
6. Save progress
7. One topic per step

### Imported Workflow Notes

#### Imported: Multi-Step Forms

### Use When

* 6+ fields
* Distinct logical sections
* Qualification or routing required

### Best Practices

* Progress indicator
* Back navigation
* Save progress
* One topic per step

---

#### Imported: Phase 1: Context & Constraints

### 1. Form Type

* Lead capture
* Contact
* Demo / sales request
* Application
* Survey / feedback
* Quote / estimate
* Checkout (non-account)

---

### 2. Business Context

* What happens after submission?
* Which fields are actually used?
* What qualifies as a “good” submission?
* Any legal or compliance constraints?

---

### 3. Current Performance

* Completion rate
* Field-level drop-off (if available)
* Mobile vs desktop split
* Known abandonment points

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @form-cro-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/form-cro-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/form-cro-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @form-cro-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- 3 fields → baseline
- 4–6 fields → −10–25%
- 7+ fields → −25–50%+
- not used
- not acted upon
- not required legally
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Core Principles (Non-Negotiable)

### 1. Every Field Has a Cost

Each required field reduces completion.

Rule of thumb:

* 3 fields → baseline
* 4–6 fields → −10–25%
* 7+ fields → −25–50%+

Fields must **earn their place**.

---

### 2. Data Collection ≠ Data Usage

If a field is:

* not used
* not acted upon
* not required legally

→ it is friction, not value.

---

### 3. Reduce Cognitive Load First

People abandon forms more from **thinking** than typing.

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/form-cro`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Phase 0: Form Health & Friction Index (Required)

Before giving recommendations, calculate the **Form Health & Friction Index**.

### Purpose

This index answers:

> **Is this form structurally capable of converting well?**

It prevents:

* premature redesigns
* gut-feel field removal
* optimization without measurement
* “just make it shorter” mistakes

---

#### Imported: 🔢 Form Health & Friction Index

### Total Score: **0–100**

This is a **diagnostic score**, not a KPI.

---

### Scoring Categories & Weights

| Category                     | Weight  |
| ---------------------------- | ------- |
| Field Necessity & Efficiency | 30      |
| Value–Effort Balance         | 20      |
| Cognitive Load & Clarity     | 20      |
| Error Handling & Recovery    | 15      |
| Trust & Friction Reduction   | 10      |
| Mobile Usability             | 5       |
| **Total**                    | **100** |

---

### Category Definitions

#### 1. Field Necessity & Efficiency (0–30)

* Every required field is justified
* No unused or “nice-to-have” fields
* No duplicated or inferable data

---

#### 2. Value–Effort Balance (0–20)

* Clear value proposition before the form
* Effort required matches perceived reward
* Commitment level fits traffic intent

---

#### 3. Cognitive Load & Clarity (0–20)

* Clear labels and instructions
* Logical field order
* Minimal decision fatigue

---

#### 4. Error Handling & Recovery (0–15)

* Inline validation
* Helpful error messages
* No data loss on errors

---

#### 5. Trust & Friction Reduction (0–10)

* Privacy reassurance
* Objection handling
* Social proof where appropriate

---

#### 6. Mobile Usability (0–5)

* Touch-friendly
* Proper keyboards
* No horizontal scrolling or cramped fields

---

### Health Bands (Required)

| Score  | Verdict                  | Interpretation                   |
| ------ | ------------------------ | -------------------------------- |
| 85–100 | **High-Performing**      | Optimize incrementally           |
| 70–84  | **Usable with Friction** | Clear optimization opportunities |
| 55–69  | **Conversion-Limited**   | Structural issues present        |
| <55    | **Broken**               | Redesign before testing          |

If verdict is **Broken**, stop and recommend structural fixes first.

---

#### Imported: Field-Level Optimization

### Email

* Single field (no confirmation)
* Inline validation
* Typo correction
* Correct mobile keyboard

---

### Name

* Single “Name” field by default
* Split only if operationally required

---

### Phone

* Optional unless critical
* Explain why if required
* Auto-format and support country codes

---

### Company / Organization

* Auto-suggest when possible
* Infer from email domain
* Enrich after submission if feasible

---

### Job Title / Role

* Dropdown if segmentation matters
* Optional by default

---

### Free-Text Fields

* Optional unless essential
* Clear guidance on length/purpose
* Expand on focus

---

### Selects & Checkboxes

* Radio buttons if <5 options
* Searchable selects if long
* Clear “Other” handling

---

#### Imported: Layout & Flow

### Field Order

1. Easiest first (email, name)
2. Commitment-building fields
3. Sensitive or high-effort fields last

---

### Labels & Placeholders

* Labels must always be visible
* Placeholders are examples only
* Avoid label-as-placeholder anti-pattern

---

### Single vs Multi-Column

* Default to single column
* Multi-column only for closely related fields

---

#### Imported: Error Handling

### Inline Validation

* After field interaction, not keystroke
* Clear visual feedback
* Do not clear input on error

---

### Error Messaging

* Specific
* Human
* Actionable

Bad: “Invalid input”
Good: “Please enter a valid email ([name@company.com](mailto:name@company.com))”

---

#### Imported: Submit Button Optimization

### Copy

Avoid: Submit, Send
Prefer: Action + Outcome

Examples:

* “Get My Quote”
* “Request Demo”
* “Download the Guide”

---

### States

* Disabled + loading on submit
* Clear success message
* Next-step expectations

---

#### Imported: Trust & Friction Reduction

* Privacy reassurance near submit
* Expected response time
* Testimonials (when appropriate)
* Security badges only if relevant

---

#### Imported: Mobile Optimization (Mandatory)

* ≥44px touch targets
* Correct keyboard types
* Autofill support
* Single column
* Sticky submit button (where helpful)

---

#### Imported: Measurement (Required)

### Key Metrics

* Form view → start
* Start → completion
* Field-level drop-off
* Error rate by field
* Time to complete
* Device split

### Track:

* First field focus
* Field completion
* Validation errors
* Submit attempts
* Successful submissions

---

#### Imported: Output Format

### Form Health Summary

* Form Health & Friction Index score
* Primary bottlenecks
* Structural vs tactical issues

---

### Form Audit

For each issue:

* **Issue**
* **Impact**
* **Fix**
* **Priority**

---

### Recommended Form Design

* Required fields (with justification)
* Optional fields
* Field order
* Copy (labels, help text, CTA)
* Error messages
* Layout notes

---

### Test Hypotheses

Clearly stated A/B test ideas with expected outcome

---

#### Imported: Experiment Boundaries

Do **not** test:

* legal requirements
* core qualification fields without alignment
* multiple variables at once

---

#### Imported: Questions to Ask (If Needed)

1. What is the current completion rate?
2. Which fields are actually used?
3. Do you have field-level analytics?
4. What happens after submission?
5. Are there compliance constraints?
6. Mobile vs desktop traffic split?

---
