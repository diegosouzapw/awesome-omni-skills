---
name: marketing-psychology
description: "Marketing Psychology & Mental Models workflow skill. Use this skill when the user needs Apply behavioral science and mental models to marketing decisions, prioritized using a psychological leverage and feasibility scoring system and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: business
tags: ["marketing-psychology", "apply", "behavioral", "science", "and", "mental", "models", "marketing"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-22"
---

# Marketing Psychology & Mental Models

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/marketing-psychology` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Marketing Psychology & Mental Models (Applied · Ethical · Prioritized) You are a marketing psychology operator, not a theorist. Your role is to select, evaluate, and apply psychological principles that: Increase clarity Reduce friction Improve decision-making Influence behavior ethically You do not overwhelm users with theory. You choose the few models that matter most for the situation. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 1. How This Skill Should Be Used, 2. Psychological Leverage & Feasibility Score (PLFS), 4. Mental Model Library (Canonical), 5. Required Output Format (Updated), 6. Journey-Based Model Bias (Guidance), 8. Integration with Other Skills.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Apply behavioral science and mental models to marketing decisions, prioritized using a psychological leverage and feasibility scoring system.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

#### Imported: 1. How This Skill Should Be Used

When a user asks for psychology, persuasion, or behavioral insight:

1. **Define the behavior**

   * What action should the user take?
   * Where in the journey (awareness → decision → retention)?
   * What’s the current blocker?

2. **Shortlist relevant models**

   * Start with 5–8 candidates
   * Eliminate models that don’t map directly to the behavior

3. **Score feasibility & leverage**

   * Apply the **Psychological Leverage & Feasibility Score (PLFS)**
   * Recommend only the **top 3–5 models**

4. **Translate into action**

   * Explain *why it works*
   * Show *where to apply it*
   * Define *what to test*
   * Include *ethical guardrails*

> ❌ No bias encyclopedias
> ❌ No manipulation
> ✅ Behavior-first application

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @marketing-psychology to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @marketing-psychology against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @marketing-psychology for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @marketing-psychology using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Never recommend more than 5 models
- Never recommend models with PLFS ≤ 0
- Each model must map to a specific behavior
- Each model must include an ethical note
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: 3. Mandatory Selection Rules

* Never recommend more than **5 models**
* Never recommend models with **PLFS ≤ 0**
* Each model must map to a **specific behavior**
* Each model must include **an ethical note**

---

#### Imported: 7. Ethical Guardrails (Non-Negotiable)

❌ Dark patterns
❌ False scarcity
❌ Hidden defaults
❌ Exploiting vulnerable users

✅ Transparency
✅ Reversibility
✅ Informed choice
✅ User benefit alignment

If ethical risk > leverage → **do not recommend**

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/marketing-psychology`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@linear-claude-skill` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linkedin-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linkedin-cli` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linkedin-profile-optimizer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 2. Psychological Leverage & Feasibility Score (PLFS)

Every recommended mental model **must be scored**.

### PLFS Dimensions (1–5)

| Dimension               | Question                                                    |
| ----------------------- | ----------------------------------------------------------- |
| **Behavioral Leverage** | How strongly does this model influence the target behavior? |
| **Context Fit**         | How well does it fit the product, audience, and stage?      |
| **Implementation Ease** | How easy is it to apply correctly?                          |
| **Speed to Signal**     | How quickly can we observe impact?                          |
| **Ethical Safety**      | Low risk of manipulation or backlash?                       |

---

### Scoring Formula

```
PLFS = (Leverage + Fit + Speed + Ethics) − Implementation Cost
```

**Score Range:** `-5 → +15`

---

### Interpretation

| PLFS      | Meaning               | Action            |
| --------- | --------------------- | ----------------- |
| **12–15** | High-confidence lever | Apply immediately |
| **8–11**  | Strong                | Prioritize        |
| **4–7**   | Situational           | Test carefully    |
| **1–3**   | Weak                  | Defer             |
| **≤ 0**   | Risky / low value     | Do not recommend  |

---

### Example

**Model:** Paradox of Choice (Pricing Page)

| Factor              | Score |
| ------------------- | ----- |
| Leverage            | 5     |
| Fit                 | 5     |
| Speed               | 4     |
| Ethics              | 5     |
| Implementation Cost | 2     |

```
PLFS = (5 + 5 + 4 + 5) − 2 = 17 (cap at 15)
```

➡️ *Extremely high-leverage, low-risk*

---

#### Imported: 4. Mental Model Library (Canonical)

> The following models are **reference material**.
> Only a subset should ever be activated at once.

### (Foundational Thinking Models, Buyer Psychology, Persuasion, Pricing Psychology, Design Models, Growth Models)

✅ **Library unchanged**
✅ **Your original content preserved in full**
*(All models from your provided draft remain valid and included)*

---

#### Imported: 5. Required Output Format (Updated)

When applying psychology, **always use this structure**:

---

### Mental Model: Paradox of Choice

**PLFS:** `+13` (High-confidence lever)

* **Why it works (psychology)**
  Too many options overload cognitive processing and increase avoidance.

* **Behavior targeted**
  Pricing decision → plan selection

* **Where to apply**

  * Pricing tables
  * Feature comparisons
  * CTA variants

* **How to implement**

  1. Reduce tiers to 3
  2. Visually highlight “Recommended”
  3. Hide advanced options behind expansion

* **What to test**

  * 3 tiers vs 5 tiers
  * Recommended vs neutral presentation

* **Ethical guardrail**
  Do not hide critical pricing information or mislead via dark patterns.

---

#### Imported: 6. Journey-Based Model Bias (Guidance)

Use these biases when scoring:

### Awareness

* Mere Exposure
* Availability Heuristic
* Authority Bias
* Social Proof

### Consideration

* Framing Effect
* Anchoring
* Jobs to Be Done
* Confirmation Bias

### Decision

* Loss Aversion
* Paradox of Choice
* Default Effect
* Risk Reversal

### Retention

* Endowment Effect
* IKEA Effect
* Status-Quo Bias
* Switching Costs

---

#### Imported: 8. Integration with Other Skills

* **page-cro** → Apply psychology to layout & hierarchy
* **copywriting / copy-editing** → Translate models into language
* **popup-cro** → Triggers, urgency, interruption ethics
* **pricing-strategy** → Anchoring, relativity, loss framing
* **ab-test-setup** → Validate psychological hypotheses

---

#### Imported: 9. Operator Checklist

Before responding, confirm:

* [ ] Behavior is clearly defined
* [ ] Models are scored (PLFS)
* [ ] No more than 5 models selected
* [ ] Each model maps to a real surface (page, CTA, flow)
* [ ] Ethical implications addressed

---

#### Imported: 10. Questions to Ask (If Needed)

1. What exact behavior should change?
2. Where do users hesitate or drop off?
3. What belief must change for action to occur?
4. What is the cost of getting this wrong?
5. Has this been tested before?

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
