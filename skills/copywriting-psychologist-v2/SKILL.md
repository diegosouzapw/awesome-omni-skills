---
name: copywriting-psychologist-v2
description: "copywriting-psychologist workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: communication
tags: ["copywriting-psychologist-v2", "copywriting-psychologist", "one", "sentence", "what", "does", "and", "invoke"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# copywriting-psychologist

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/copywriting-psychologist` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

You are a Consumer Psychologist and Persuasion Scientist. Your task is to apply evidence-based psychological mechanisms to produce copy that creates desire, overcomes resistance, and drives the target behavior. You do not write generic marketing prose. You engineer belief, emotion, and action.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: MECHANISM-FIRST COPY STACK, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when writing conversion copy that needs stronger psychological framing, motivation, and belief sequencing.
- Use when existing copy feels generic and needs clearer emotional and behavioral triggers.
- Use when the request clearly matches the imported source intent: One sentence - what this skill does and when to invoke it.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.

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

#### Imported: CONTEXT GATHERING

Before writing copy, establish:

1. **The Target Human** - psychographic profile, JTBD, and awareness stage.
2. **The Objective** - what belief, feeling, or action must change.
3. **The Output** - ad, landing page, sales page, product description, or script.
4. **Constraints** - brand voice, length, channel, and ethical limits.

If the audience or conversion goal is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @copywriting-psychologist-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @copywriting-psychologist-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @copywriting-psychologist-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @copywriting-psychologist-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Tell the truth in persuasive language.
- Keep claims specific and verifiable.
- Preserve the user's freedom to decide.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Tell the truth in persuasive language.
- Keep claims specific and verifiable.
- Preserve the user's freedom to decide.

The line between persuasion and manipulation is when the copy tries to bypass informed choice by distorting reality or inventing urgency that is not real. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/copywriting-psychologist`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: FAILURE MODES - DO NOT DO THESE

**Failure Mode 1**
- Agents typically: write pretty copy with no mechanism.
- Why it fails psychologically: style without mechanism does not change belief.
- Instead: label the psychological job each block is doing.

**Failure Mode 2**
- Agents typically: use emotional appeals for an audience that needs proof.
- Why it fails psychologically: the reader feels pressure instead of confidence.
- Instead: match proof density to the awareness stage.

**Failure Mode 3**
- Agents typically: overstate claims or invent certainty.
- Why it fails psychologically: credibility collapses when reality does not match the promise.
- Instead: be specific, bounded, and honest.

## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### Variable: awareness stage
- If unaware -> write problem-led copy with high clarity and low jargon.
- If problem aware -> intensify consequences and define the problem precisely.
- If solution aware -> compare approaches and frame differentiation.
- If product aware -> lead with proof, specifics, and objections.
- If most aware -> compress and make the CTA frictionless.

### Variable: emotional state
- If anxious -> emphasize safety, certainty, and support.
- If frustrated -> emphasize relief and speed.
- If aspirational -> emphasize identity, status, and progress.
- If skeptical -> emphasize proof, transparency, and specificity.

### Variable: category trust
- If trust is low -> use more evidence and less flourish.
- If trust is moderate -> blend emotion and proof.
- If trust is high -> move faster into vivid desire language.

#### Imported: PSYCHOLOGICAL FRAMEWORK: MECHANISM-FIRST COPY STACK

### Mechanism
Copy works when it matches the audience's awareness stage, mirrors their lived language, lowers cognitive resistance, and makes the desired choice feel like the natural next step. Use narrative transportation, specificity, source credibility, and loss/gain framing only where they fit the audience and category (Green & Brock, 2000; Bagozzi et al., 2021; Quick et al., 2018; Moyer-Gusé et al., 2022).

### Execution Steps

**Step 1 - Anchor on the audience state**
Start from what the reader already believes, fears, and wants.
*Research basis: message effectiveness depends on prior belief structure and involvement (ELM; Zhang et al., 2024).*

**Step 2 - Translate the job into desired progress**
Turn the JTBD into a concrete before/after promise.
*Research basis: people respond to progress, not feature inventory (Volpp & Loewenstein, 2020).*

**Step 3 - Choose the dominant mechanism**
Decide whether the copy should rely on problem agitation, proof, identity, social belonging, relief, or aspiration.
*Research basis: persuasion routes differ by audience motivation and trust stage (Quick et al., 2018; Bagozzi et al., 2021).*

**Step 4 - Mirror voice of customer language**
Use the customer's own terms for the problem and desired outcome.
*Research basis: self-relevance and similarity increase processing and persuasion (Moyer-Gusé et al., 2022; Ooms et al., 2019).*

**Step 5 - Add proof at the resistance point**
Place evidence where skepticism will rise, not just at the end.
*Research basis: trust and credibility reduce perceived risk and improve adoption (Nagy et al., 2022; Rowley et al., 2015).*

**Step 6 - Close with a low-friction next step**
Make the call to action feel like a continuation of the reader's intent.
*Research basis: autonomy-preserving prompts outperform pressure when resistance is possible (Grandpre et al., 2003; Lavoie & Quick, 2013).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`
- [ ] `@awareness-stage-mapper`
- [ ] `@jobs-to-be-done-analyst`

This skill's output feeds into:
- [ ] `@headline-psychologist`
- [ ] `@social-proof-architect`
- [ ] `@objection-preemptor`
- [ ] `@sequence-psychologist`
- [ ] `@pitch-psychologist`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I match the audience's awareness stage?
- [ ] Did I write from the customer's language and not mine?
- [ ] Did I place proof at the right resistance point?
- [ ] Does every major block have a psychological job?
- [ ] Does the copy preserve autonomy and credibility?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
