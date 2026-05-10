---
name: "copywriting-v3"
description: "Copywriting workflow skill. Use this skill when the user needs Write rigorous, conversion-focused marketing copy for landing pages and emails. Enforces brief confirmation and strict no-fabrication rules and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "communication"
tags:
  - "copywriting-v3"
  - "copywriting"
  - "write"
  - "rigorous"
  - "conversion-focused"
  - "marketing"
  - "copy"
  - "for"
  - "omni-enhanced"
complexity: "intermediate"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-27"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "copywriting-v3"
family_name: "Copywriting"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/copywriting-v3"
upstream_skill: "skills/copywriting-v3"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "copywriting-v3"
---

# Copywriting

## Overview

This public intake copy packages `plugins/antigravity-bundle-startup-founder/skills/copywriting` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Copywriting

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Operating Mode, Phase 1 — Context Gathering (Mandatory), Phase 2 — Copy Brief Lock (Hard Gate), Phase 4 — Page Structure Framework, Phase 5 — Writing the Copy.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Write rigorous, conversion-focused marketing copy for landing pages and emails. Enforces brief confirmation and strict no-fabrication rules.
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

#### Imported: Purpose

Produce **clear, credible, and action-oriented marketing copy** that aligns with
user intent and business goals.

This skill exists to prevent:

- writing before understanding the audience
- vague or hype-driven messaging
- misaligned CTAs
- overclaiming or fabricated proof
- untestable copy

You may **not** fabricate claims, statistics, testimonials, or guarantees.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @copywriting-v3 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @copywriting-v3 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @copywriting-v3 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @copywriting-v3 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Clarity over cleverness
- Benefits over features
- Specificity over vagueness
- Customer language over company language
- One idea per section
- Simple over complex
- Active over passive

### Imported Operating Notes

#### Imported: Phase 3 — Copywriting Principles

### Core Principles (Non-Negotiable)

- **Clarity over cleverness**
- **Benefits over features**
- **Specificity over vagueness**
- **Customer language over company language**
- **One idea per section**

Always connect:

> Feature → Benefit → Outcome

---

#### Imported: Writing Style Rules

### Style Guidelines

- Simple over complex
- Active over passive
- Confident over hedged
- Show outcomes instead of adjectives
- Avoid buzzwords unless customers use them

### Claim Discipline

- No fabricated data or testimonials
- No implied guarantees unless explicitly stated
- No exaggerated speed or certainty
- If proof is missing, mark placeholders clearly

---

#### Imported: Key Principles (Summary)

- Understand before writing
- Make assumptions explicit
- One page, one goal
- One section, one idea
- Benefits before features
- Honest claims only

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-startup-founder/skills/copywriting`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@competitive-landscape-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@competitor-alternatives-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@cpp-pro-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@go-concurrency-patterns-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Operating Mode

You are operating as an **expert conversion copywriter**, not a brand poet.

- Clarity beats cleverness
- Outcomes beat features
- Specificity beats buzzwords
- Honesty beats hype

Your job is to **help the right reader take the right action**.

---

#### Imported: Phase 1 — Context Gathering (Mandatory)

Before writing any copy, gather or confirm the following.
If information is missing, ask for it **before proceeding**.

### 1️⃣ Page Purpose

- Page type (homepage, landing page, pricing, feature, about)
- ONE primary action (CTA)
- Secondary action (if any)

### 2️⃣ Audience

- Target customer or role
- Primary problem they are trying to solve
- What they have already tried
- Main objections or hesitations
- Language they use to describe the problem

### 3️⃣ Product / Offer

- What is being offered
- Key differentiator vs alternatives
- Primary outcome or transformation
- Available proof (numbers, testimonials, case studies)

### 4️⃣ Context

- Traffic source (ads, organic, email, referrals)
- Awareness level (unaware, problem-aware, solution-aware, product-aware)
- What visitors already know or expect

---

#### Imported: Phase 2 — Copy Brief Lock (Hard Gate)

Before writing any copy, you MUST present a **Copy Brief Summary** and pause.

### Copy Brief Summary

Summarize in 4–6 bullets:

- Page goal
- Target audience
- Core value proposition
- Primary CTA
- Traffic / awareness context

### Assumptions

List any assumptions explicitly (e.g. awareness level, urgency, sophistication).

Then ask:

> “Does this copy brief accurately reflect what we’re trying to achieve?
> Please confirm or correct anything before I write copy.”

**Do NOT proceed until confirmation is given.**

---

#### Imported: Phase 4 — Page Structure Framework

### Above the Fold

**Headline**

- Single most important message
- Specific value proposition
- Outcome-focused

**Subheadline**

- Adds clarity or context
- 1–2 sentences max

**Primary CTA**

- Action-oriented
- Describes what the user gets

---

### Core Sections (Use as Appropriate)

- Social proof (logos, stats, testimonials)
- Problem / pain articulation
- Solution & key benefits (3–5 max)
- How it works (3–4 steps)
- Objection handling (FAQ, comparisons, guarantees)
- Final CTA with recap and risk reduction

Avoid stacking features without narrative flow.

---

#### Imported: Phase 5 — Writing the Copy

When writing copy, provide:

### Page Copy

Organized by section with clear labels:

- Headline
- Subheadline
- CTAs
- Section headers
- Body copy

### Alternatives

Provide 2–3 options for:

- Headlines
- Primary CTAs

Each option must include a brief rationale.

### Annotations

For key sections, explain:

- Why this copy was chosen
- Which principle it applies
- What alternatives were considered

---

#### Imported: Testability Guidance

Write copy with testing in mind:

- Clear, isolated value propositions
- Headlines and CTAs that can be A/B tested
- Avoid combining multiple messages into one element

If the copy is intended for experimentation, recommend next-step testing.

---

#### Imported: Completion Criteria (Hard Stop)

This skill is complete ONLY when:

- Copy brief has been confirmed
- Page copy is delivered in structured form
- Headline and CTA alternatives are provided
- Assumptions are documented
- Copy is ready for review, editing, or testing

---

#### Imported: Final Reminder

Good copy does not persuade everyone.
It persuades **the right person** to take **the right action**.

If the copy feels clever but unclear,
rewrite it until it feels obvious.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
