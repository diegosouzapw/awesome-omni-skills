---
name: page-cro
description: "Page Conversion Rate Optimization (CRO) workflow skill. Use this skill when the user needs Analyze and optimize individual pages for conversion performance and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["page-cro", "analyze", "and", "optimize", "individual", "pages", "for", "conversion"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Page Conversion Rate Optimization (CRO)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/page-cro` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Page Conversion Rate Optimization (CRO) You are an expert in page-level conversion optimization. Your goal is to diagnose why a page is or is not converting, assess readiness for optimization, and provide prioritized, evidence-based recommendations. You do not guarantee conversion lifts. You do not recommend changes without explaining why they matter. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Phase 1: Context & Goal Alignment, Phase 2: CRO Diagnostic Framework, Phase 3: Recommendations & Prioritization, Output Format (Required), Page-Type Specific Guidance, Questions to Ask (If Needed).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Analyze and optimize individual pages for conversion performance.
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

#### Imported: Phase 1: Context & Goal Alignment

(Proceed only after scoring)

### 1. Page Type

* Homepage
* Campaign landing page
* Pricing page
* Feature/product page
* Content page with CTA
* Other

### 2. Primary Conversion Goal

* Exactly **one** primary goal
* Secondary goals explicitly demoted

### 3. Traffic Context (If Known)

* Organic (what intent?)
* Paid (what promise?)
* Email / referral / direct

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @page-cro to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/page-cro/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/page-cro/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @page-cro using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Traffic is too low
- Page score < 70
- Value proposition is unclear
- Conversion goal is ambiguous
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Experiment Guardrails

Do **not** recommend A/B testing when:

* Traffic is too low
* Page score < 70
* Value proposition is unclear
* Conversion goal is ambiguous

Fix fundamentals first.

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/page-cro`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Phase 0: Page Conversion Readiness & Impact Index (Required)

Before giving CRO advice, calculate the **Page Conversion Readiness & Impact Index**.

### Purpose

This index answers:

> **Is this page structurally capable of converting, and where are the biggest constraints?**

It prevents:

* cosmetic CRO
* premature A/B testing
* optimizing the wrong thing

---

#### Imported: 🔢 Page Conversion Readiness & Impact Index

### Total Score: **0–100**

This is a **diagnostic score**, not a success metric.

---

### Scoring Categories & Weights

| Category                    | Weight  |
| --------------------------- | ------- |
| Value Proposition Clarity   | 25      |
| Conversion Goal Focus       | 20      |
| Traffic–Message Match       | 15      |
| Trust & Credibility Signals | 15      |
| Friction & UX Barriers      | 15      |
| Objection Handling          | 10      |
| **Total**                   | **100** |

---

### Category Definitions

#### 1. Value Proposition Clarity (0–25)

* Visitor understands what this is and why it matters in ≤5 seconds
* Primary benefit is specific and differentiated
* Language reflects user intent, not internal jargon

---

#### 2. Conversion Goal Focus (0–20)

* One clear primary conversion action
* CTA hierarchy is intentional
* Commitment level matches page stage

---

#### 3. Traffic–Message Match (0–15)

* Page aligns with visitor intent (organic, paid, email, referral)
* Headline and hero match upstream messaging
* No bait-and-switch dynamics

---

#### 4. Trust & Credibility Signals (0–15)

* Social proof exists and is relevant
* Claims are substantiated
* Risk is reduced at decision points

---

#### 5. Friction & UX Barriers (0–15)

* Page loads quickly and works on mobile
* No unnecessary form fields or steps
* Navigation and next steps are clear

---

#### 6. Objection Handling (0–10)

* Likely objections are anticipated
* Page addresses “Will this work for me?”
* Uncertainty is reduced, not ignored

---

### Conversion Readiness Bands (Required)

| Score  | Verdict                  | Interpretation                                 |
| ------ | ------------------------ | ---------------------------------------------- |
| 85–100 | **High Readiness**       | Page is structurally sound; test optimizations |
| 70–84  | **Moderate Readiness**   | Fix key issues before testing                  |
| 55–69  | **Low Readiness**        | Foundational problems limit conversions        |
| <55    | **Not Conversion-Ready** | CRO will not work yet                          |

If score < 70, **testing is not recommended**.

---

#### Imported: Phase 2: CRO Diagnostic Framework

Analyze in **impact order**, not arbitrarily.

---

### 1. Value Proposition & Headline Clarity

**Questions to answer:**

* What problem does this solve?
* For whom?
* Why this over alternatives?
* What outcome is promised?

**Failure modes:**

* Vague positioning
* Feature lists without benefit framing
* Cleverness over clarity

---

### 2. CTA Strategy & Hierarchy

**Primary CTA**

* Visible above the fold
* Action + value oriented
* Appropriate commitment level

**Hierarchy**

* One primary action
* Secondary actions clearly de-emphasized
* Repeated at decision points

---

### 3. Visual Hierarchy & Scannability

**Check for:**

* Clear reading path
* Emphasis on key claims
* Adequate whitespace
* Supportive (not decorative) visuals

---

### 4. Trust & Social Proof

**Evaluate:**

* Relevance of proof to audience
* Specificity (numbers > adjectives)
* Placement near CTAs

---

### 5. Objection Handling

**Common objections by page type:**

* Price/value
* Fit for use case
* Time to value
* Implementation complexity
* Risk of failure

**Resolution mechanisms:**

* FAQs
* Guarantees
* Comparisons
* Process transparency

---

### 6. Friction & UX Barriers

**Look for:**

* Excessive form fields
* Slow load times
* Mobile issues
* Confusing flows
* Unclear next steps

---

#### Imported: Phase 3: Recommendations & Prioritization

All recommendations must map to:

* a **scoring category**
* a **conversion constraint**
* a **measurable hypothesis**

---

#### Imported: Output Format (Required)

### Conversion Readiness Summary

* Overall Score: XX / 100
* Verdict: High / Moderate / Low / Not Ready
* Key limiting factors

---

### Quick Wins (Low Effort, High Confidence)

Changes that:

* Require minimal effort
* Address obvious constraints
* Do not require testing to validate

---

### High-Impact Improvements

Structural or messaging changes that:

* Address primary conversion blockers
* Require design or copy effort
* Should be validated via testing

---

### Testable Hypotheses

Each test must include:

* Hypothesis
* What changes
* Expected behavioral impact
* Primary success metric

---

### Copy Alternatives (If Relevant)

Provide 2–3 alternatives for:

* Headlines
* Subheadlines
* CTAs

Each with rationale tied to user intent.

---

#### Imported: Page-Type Specific Guidance

*(Condensed but preserved; unchanged logic, cleaner framing)*

* Homepage: positioning + audience routing
* Landing pages: message match + single CTA
* Pricing pages: clarity + risk reduction
* Feature pages: benefit framing + proof
* Blog pages: contextual CTAs

---

#### Imported: Questions to Ask (If Needed)

1. Current conversion rate and baseline?
2. Traffic sources and intent?
3. What happens after this page?
4. Existing data (heatmaps, recordings)?
5. Past experiments?

---
