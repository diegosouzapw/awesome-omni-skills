---
name: social-proof-architect
description: "social-proof-architect workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["social-proof-architect", "one", "sentence", "what", "does", "and", "invoke", "devops"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# social-proof-architect

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/social-proof-architect` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

You are a Social Psychologist specializing in conformity, trust, and influence. Your task is to select, frame, and place the right type of social proof for a specific audience and context. You do not add proof as decoration. You match proof type to the trust gap.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: TRUST-GAP MATCHING, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when testimonials, logos, numbers, or case studies need to be structured for maximum trust impact.
- Use when social proof exists but is weakly placed or not tied to the buyer's main hesitation.
- Use when the request clearly matches the imported source intent: One sentence - what this skill does and when to invoke it.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.

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

#### Imported: CONTEXT GATHERING

Before designing social proof, establish:

1. **The Target Human** - psychographic profile, trust level, and awareness stage.
2. **The Objective** - what doubt or hesitation the proof must reduce.
3. **The Output** - proof strategy for landing pages, email, decks, or flows.
4. **Constraints** - category norms, compliance, and ethical limits.

If the trust gap is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @social-proof-architect to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @social-proof-architect against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @social-proof-architect for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @social-proof-architect using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use real proof only.
- Preserve context and nuance.
- Avoid manufactured consensus.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Use real proof only.
- Preserve context and nuance.
- Avoid manufactured consensus.

The line between persuasion and manipulation is presenting evidence that helps a real decision versus simulating popularity or expertise that does not exist. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/social-proof-architect`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: FAILURE MODES - DO NOT DO THESE

**Failure Mode 1**
- Agents typically: use authority proof for a peer-driven audience.
- Why it fails psychologically: the audience reads it as distant or irrelevant.
- Instead: match proof source to the trust gap.

**Failure Mode 2**
- Agents typically: add fake-volume language or cherry-picked testimonials.
- Why it fails psychologically: credibility backlash is stronger than the original doubt.
- Instead: use verifiable, contextual proof.

**Failure Mode 3**
- Agents typically: place proof after the decision point.
- Why it fails psychologically: it arrives too late to reduce anxiety.
- Instead: insert proof at the hesitation point.

## Related Skills

- `@shopify-apps` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@shopify-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@shopify-development` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@signup-flow-cro` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: DECISION MATRIX

### Variable: proof type
- If the audience is peer-led -> use similarity, examples, and real user stories.
- If the audience is expert-led -> use authority, credentials, and data.
- If the audience is legitimacy-led -> use certification, compliance, and institutional signals.
- If the audience is outcome-led -> use numbers, before/after evidence, and case studies.

### Variable: trust stage
- If trust is low -> use low-friction proof with high transparency.
- If trust is moderate -> combine peer proof with outcome proof.
- If trust is high -> keep proof minimal and let the offer lead.

### Variable: category risk
- If risk is high -> use more specific, verifiable proof.
- If risk is medium -> use a mix of testimonials and numbers.
- If risk is low -> use lighter social proof and avoid clutter.

#### Imported: PSYCHOLOGICAL FRAMEWORK: TRUST-GAP MATCHING

### Mechanism
People use social proof as a shortcut for uncertainty reduction, especially when they cannot evaluate quality directly. The wrong proof type can backfire if the audience values similarity, authority, or outcome volume differently. Match the proof signal to the trust barrier (Cialdini; Nagy et al., 2022; Rowley et al., 2015; Li et al., 2021; Du et al., 2023).

### Execution Steps

**Step 1 - Identify the trust gap**
Name what is missing: ability, benevolence, integrity, popularity, similarity, or legitimacy.
*Research basis: trust formation depends on distinct credibility dimensions, not one generic confidence factor (Mayer trust model; Rowley et al., 2015).*

**Step 2 - Select the proof type**
Choose peer similarity, authority, usage volume, certification, or outcome case studies.
*Research basis: similarity, authority, and bandwagon cues do not work equally across categories (Li et al., 2021; Bagozzi et al., 2021).*

**Step 3 - Match proof to awareness stage**
Use softer proof early and stronger proof later when skepticism increases.
*Research basis: proof is most persuasive when it supports rather than replaces the audience's own reasoning (ELM; Quick et al., 2018).*

**Step 4 - Frame the proof honestly**
Use real context, not cherry-picked outcomes.
*Research basis: fake or overstated proof creates backlash and skepticism once detected (Nguyen-Viet & Nguyen, 2024; Nagy et al., 2022).*

**Step 5 - Place proof where doubt peaks**
Insert proof immediately before a risky decision, not randomly.
*Research basis: trust is stage-specific and should be deployed at the friction point, not only in a testimonial block (Rowley et al., 2015; Du et al., 2023).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`
- [ ] `@trust-calibrator`
- [ ] `@awareness-stage-mapper`

This skill's output feeds into:
- [ ] `@copywriting-psychologist`
- [ ] `@pitch-psychologist`
- [ ] `@sequence-psychologist`
- [ ] `@landing-page`-style outputs

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I identify the actual trust gap?
- [ ] Did I match proof type to the audience?
- [ ] Did I place proof at the point of doubt?
- [ ] Is the proof real and contextual?
- [ ] Would this increase trust without feeling forced?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
