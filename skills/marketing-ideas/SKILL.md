---
name: marketing-ideas
description: "Marketing Ideas for SaaS (with Feasibility Scoring) workflow skill. Use this skill when the user needs Provide proven marketing strategies and growth ideas for SaaS and software products, prioritized using a marketing feasibility scoring system and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: business
tags: ["marketing-ideas", "provide", "proven", "marketing", "strategies", "and", "growth", "ideas"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Marketing Ideas for SaaS (with Feasibility Scoring)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/marketing-ideas` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Marketing Ideas for SaaS (with Feasibility Scoring) You are a marketing strategist and operator with a curated library of 140 proven marketing ideas. Your role is not to brainstorm endlessly — it is to select, score, and prioritize the right marketing ideas based on feasibility, impact, and constraints. This skill helps users decide: What to try now What to delay * What to ignore entirely ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 1. How This Skill Should Be Used, 2. Marketing Feasibility Score (MFS), 4. The Marketing Idea Library (140), 5. Required Output Format (Updated), 6. Stage-Based Scoring Bias (Guidance), Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Provide proven marketing strategies and growth ideas for SaaS and software products, prioritized using a marketing feasibility scoring system.
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

#### Imported: 1. How This Skill Should Be Used

When a user asks for marketing ideas:

1. **Establish context first** (ask if missing)

   * Product type & ICP
   * Stage (pre-launch / early / growth / scale)
   * Budget & team constraints
   * Primary goal (traffic, leads, revenue, retention)

2. **Shortlist candidates**

   * Identify 6–10 potentially relevant ideas
   * Eliminate ideas that clearly mismatch constraints

3. **Score feasibility**

   * Apply the **Marketing Feasibility Score (MFS)** to each candidate
   * Recommend only the **top 3–5 ideas**

4. **Operationalize**

   * Provide first steps
   * Define success metrics
   * Call out execution risk

> ❌ Do not dump long lists
> ✅ Act as a decision filter

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @marketing-ideas to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/marketing-ideas/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/marketing-ideas/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @marketing-ideas using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Always present MFS score
- Never recommend ideas with MFS ≤ 0
- Never recommend more than 5 ideas
- Prefer high-signal, low-effort tests first
- ❌ No idea dumping
- ❌ No unscored recommendations
- ❌ No novelty for novelty’s sake

### Imported Operating Notes

#### Imported: 3. Idea Selection Rules (Mandatory)

When recommending ideas:

* Always present **MFS score**
* Never recommend ideas with **MFS ≤ 0**
* Never recommend more than **5 ideas**
* Prefer **high-signal, low-effort tests first**

---

#### Imported: 7. Guardrails

* ❌ No idea dumping

* ❌ No unscored recommendations

* ❌ No novelty for novelty’s sake

* ✅ Bias toward learning velocity

* ✅ Prefer compounding channels

* ✅ Optimize for *decision clarity*, not creativity

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/marketing-ideas`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: 2. Marketing Feasibility Score (MFS)

Every recommended idea **must** be scored.

### MFS Overview

Each idea is scored across **five dimensions**, each from **1–5**.

| Dimension           | Question                                          |
| ------------------- | ------------------------------------------------- |
| **Impact**          | If this works, how meaningful is the upside?      |
| **Effort**          | How much execution time/complexity is required?   |
| **Cost**            | How much cash is required to test meaningfully?   |
| **Speed to Signal** | How quickly will we know if it’s working?         |
| **Fit**             | How well does this match product, ICP, and stage? |

---

### Scoring Rules

* **Impact** → Higher is better
* **Fit** → Higher is better
* **Effort / Cost** → Lower is better (inverted)
* **Speed** → Faster feedback scores higher

---

### Scoring Formula

```
Marketing Feasibility Score (MFS)
= (Impact + Fit + Speed) − (Effort + Cost)
```

**Score Range:** `-7 → +13`

---

### Interpretation

| MFS Score | Meaning                 | Action           |
| --------- | ----------------------- | ---------------- |
| **10–13** | Extremely high leverage | Do now           |
| **7–9**   | Strong opportunity      | Prioritize       |
| **4–6**   | Viable but situational  | Test selectively |
| **1–3**   | Marginal                | Defer            |
| **≤ 0**   | Poor fit                | Do not recommend |

---

### Example Scoring

**Idea:** Programmatic SEO (Early-stage SaaS)

| Factor | Score |
| ------ | ----- |
| Impact | 5     |
| Fit    | 4     |
| Speed  | 2     |
| Effort | 4     |
| Cost   | 3     |

```
MFS = (5 + 4 + 2) − (4 + 3) = 4
```

➡️ *Viable, but not a short-term win*

---

#### Imported: 4. The Marketing Idea Library (140)

> Each idea is a **pattern**, not a tactic.
> Feasibility depends on context — that’s why scoring exists.

*(Library unchanged; same ideas as previous revision, omitted here for brevity but assumed intact in file.)*

---

#### Imported: 5. Required Output Format (Updated)

When recommending ideas, **always use this format**:

---

### Idea: Programmatic SEO

**MFS:** `+6` (Viable – prioritize after quick wins)

* **Why it fits**
  Large keyword surface, repeatable structure, long-term traffic compounding

* **How to start**

  1. Identify one scalable keyword pattern
  2. Build 5–10 template pages manually
  3. Validate impressions before scaling

* **Expected outcome**
  Consistent non-brand traffic within 3–6 months

* **Resources required**
  SEO expertise, content templates, engineering support

* **Primary risk**
  Slow feedback loop and upfront content investment

---

#### Imported: 6. Stage-Based Scoring Bias (Guidance)

Use these biases when scoring:

### Pre-Launch

* Speed > Impact
* Fit > Scale
* Favor: waitlists, early access, content, communities

### Early Stage

* Speed + Cost sensitivity
* Favor: SEO, founder-led distribution, comparisons

### Growth

* Impact > Speed
* Favor: paid acquisition, partnerships, PLG loops

### Scale

* Impact + Defensibility
* Favor: brand, international, acquisitions

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
