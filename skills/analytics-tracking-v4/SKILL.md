---
name: analytics-tracking-v4
description: "Analytics Tracking & Measurement Strategy workflow skill. Use this skill when the user needs Design, audit, and improve analytics tracking systems that produce reliable, decision-ready data and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["analytics-tracking-v4", "analytics-tracking", "design", "audit", "and", "improve", "analytics", "tracking"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Analytics Tracking & Measurement Strategy

## Overview

This public intake copy packages `plugins/antigravity-bundle-marketing-growth/skills/analytics-tracking` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Analytics Tracking & Measurement Strategy You are an expert in analytics implementation and measurement design. Your goal is to ensure tracking produces trustworthy signals that directly support decisions across marketing, product, and growth. You do not track everything. You do not optimize dashboards without fixing instrumentation. You do not treat GA4 numbers as truth unless validated. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Phase 1: Context & Decision Definition, Event Model Design, Conversion Strategy, GA4 & GTM (Implementation Guidance), UTM & Attribution Discipline, Validation & Debugging.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Design, audit, and improve analytics tracking systems that produce reliable, decision-ready data.
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Phase 1: Context & Decision Definition

(Proceed only after scoring)

### 1. Business Context

* What decisions will this data inform?
* Who uses the data (marketing, product, leadership)?
* What actions will be taken based on insights?

---

### 2. Current State

* Tools in use (GA4, GTM, Mixpanel, Amplitude, etc.)
* Existing events and conversions
* Known issues or distrust in data

---

### 3. Technical & Compliance Context

* Tech stack and rendering model
* Who implements and maintains tracking
* Privacy, consent, and regulatory constraints

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @analytics-tracking-v4 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/analytics-tracking-v4/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/analytics-tracking-v4/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @analytics-tracking-v4 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- What you need to know
- What action you’ll take
- What signal proves it
- cosmetic clicks
- redundant events
- UI noise
- intent

### Imported Operating Notes

#### Imported: Core Principles (Non-Negotiable)

### 1. Track for Decisions, Not Curiosity

If no decision depends on it, **don’t track it**.

---

### 2. Start with Questions, Work Backwards

Define:

* What you need to know
* What action you’ll take
* What signal proves it

Then design events.

---

### 3. Events Represent Meaningful State Changes

Avoid:

* cosmetic clicks
* redundant events
* UI noise

Prefer:

* intent
* completion
* commitment

---

### 4. Data Quality Beats Volume

Fewer accurate events > many unreliable ones.

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-marketing-growth/skills/analytics-tracking`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Phase 0: Measurement Readiness & Signal Quality Index (Required)

Before adding or changing tracking, calculate the **Measurement Readiness & Signal Quality Index**.

### Purpose

This index answers:

> **Can this analytics setup produce reliable, decision-grade insights?**

It prevents:

* event sprawl
* vanity tracking
* misleading conversion data
* false confidence in broken analytics

---

#### Imported: 🔢 Measurement Readiness & Signal Quality Index

### Total Score: **0–100**

This is a **diagnostic score**, not a performance KPI.

---

### Scoring Categories & Weights

| Category                      | Weight  |
| ----------------------------- | ------- |
| Decision Alignment            | 25      |
| Event Model Clarity           | 20      |
| Data Accuracy & Integrity     | 20      |
| Conversion Definition Quality | 15      |
| Attribution & Context         | 10      |
| Governance & Maintenance      | 10      |
| **Total**                     | **100** |

---

### Category Definitions

#### 1. Decision Alignment (0–25)

* Clear business questions defined
* Each tracked event maps to a decision
* No events tracked “just in case”

---

#### 2. Event Model Clarity (0–20)

* Events represent **meaningful actions**
* Naming conventions are consistent
* Properties carry context, not noise

---

#### 3. Data Accuracy & Integrity (0–20)

* Events fire reliably
* No duplication or inflation
* Values are correct and complete
* Cross-browser and mobile validated

---

#### 4. Conversion Definition Quality (0–15)

* Conversions represent real success
* Conversion counting is intentional
* Funnel stages are distinguishable

---

#### 5. Attribution & Context (0–10)

* UTMs are consistent and complete
* Traffic source context is preserved
* Cross-domain / cross-device handled appropriately

---

#### 6. Governance & Maintenance (0–10)

* Tracking is documented
* Ownership is clear
* Changes are versioned and monitored

---

### Readiness Bands (Required)

| Score  | Verdict               | Interpretation                    |
| ------ | --------------------- | --------------------------------- |
| 85–100 | **Measurement-Ready** | Safe to optimize and experiment   |
| 70–84  | **Usable with Gaps**  | Fix issues before major decisions |
| 55–69  | **Unreliable**        | Data cannot be trusted yet        |
| <55    | **Broken**            | Do not act on this data           |

If verdict is **Broken**, stop and recommend remediation first.

---

#### Imported: Event Model Design

### Event Taxonomy

**Navigation / Exposure**

* page_view (enhanced)
* content_viewed
* pricing_viewed

**Intent Signals**

* cta_clicked
* form_started
* demo_requested

**Completion Signals**

* signup_completed
* purchase_completed
* subscription_changed

**System / State Changes**

* onboarding_completed
* feature_activated
* error_occurred

---

### Event Naming Conventions

**Recommended pattern:**

```
object_action[_context]
```

Examples:

* signup_completed
* pricing_viewed
* cta_hero_clicked
* onboarding_step_completed

Rules:

* lowercase
* underscores
* no spaces
* no ambiguity

---

### Event Properties (Context, Not Noise)

Include:

* where (page, section)
* who (user_type, plan)
* how (method, variant)

Avoid:

* PII
* free-text fields
* duplicated auto-properties

---

#### Imported: Conversion Strategy

### What Qualifies as a Conversion

A conversion must represent:

* real value
* completed intent
* irreversible progress

Examples:

* signup_completed
* purchase_completed
* demo_booked

Not conversions:

* page views
* button clicks
* form starts

---

### Conversion Counting Rules

* Once per session vs every occurrence
* Explicitly documented
* Consistent across tools

---

#### Imported: GA4 & GTM (Implementation Guidance)

*(Tool-specific, but optional)*

* Prefer GA4 recommended events
* Use GTM for orchestration, not logic
* Push clean dataLayer events
* Avoid multiple containers
* Version every publish

---

#### Imported: UTM & Attribution Discipline

### UTM Rules

* lowercase only
* consistent separators
* documented centrally
* never overwritten client-side

UTMs exist to **explain performance**, not inflate numbers.

---

#### Imported: Validation & Debugging

### Required Validation

* Real-time verification
* Duplicate detection
* Cross-browser testing
* Mobile testing
* Consent-state testing

### Common Failure Modes

* double firing
* missing properties
* broken attribution
* PII leakage
* inflated conversions

---

#### Imported: Privacy & Compliance

* Consent before tracking where required
* Data minimization
* User deletion support
* Retention policies reviewed

Analytics that violate trust undermine optimization.

---

#### Imported: Output Format (Required)

### Measurement Strategy Summary

* Measurement Readiness Index score + verdict
* Key risks and gaps
* Recommended remediation order

---

### Tracking Plan

| Event | Description | Properties | Trigger | Decision Supported |
| ----- | ----------- | ---------- | ------- | ------------------ |

---

### Conversions

| Conversion | Event | Counting | Used By |
| ---------- | ----- | -------- | ------- |

---

### Implementation Notes

* Tool-specific setup
* Ownership
* Validation steps

---

#### Imported: Questions to Ask (If Needed)

1. What decisions depend on this data?
2. Which metrics are currently trusted or distrusted?
3. Who owns analytics long term?
4. What compliance constraints apply?
5. What tools are already in place?

---
