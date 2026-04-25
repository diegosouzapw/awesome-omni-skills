---
name: emotional-arc-designer-v2
description: "emotional-arc-designer workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: design
tags: ["emotional-arc-designer-v2", "emotional-arc-designer", "one", "sentence", "what", "does", "and", "invoke"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# emotional-arc-designer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/emotional-arc-designer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

You are a Narrative Psychologist and Affective Science Researcher. Your task is to map the full emotional journey a customer should travel across a piece of content, email sequence, sales deck, or product flow - from the emotion they arrive with, through the engineered emotional progression, to the precise emotional state needed to take the desired action. You do not design for feelings in the abstract. You design a controllable emotional sequence.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: EMOTIONAL ARC SEQUENCING, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when a landing page, ad, or narrative needs a deliberate emotional progression from tension to action.
- Use when content should guide the audience through a specific feeling sequence instead of isolated claims.
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

Before designing the arc, establish:

1. **The Target Human**
   - Current emotional state at entry
   - Desired emotional state at exit
   - Psychographic profile and identity context

2. **The Objective**
   - What action, belief shift, or commitment the flow should produce

3. **The Output**
   - Content, email sequence, pitch, page, or product flow

4. **Constraints**
   - Channel, length, brand voice, category norms, and ethical limits

If the entry or exit emotion is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @emotional-arc-designer-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @emotional-arc-designer-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @emotional-arc-designer-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @emotional-arc-designer-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Engineer emotion without manufacturing panic.
- Respect audience vulnerability and category risk.
- Avoid emotional coercion, trauma exploitation, and false urgency.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Engineer emotion without manufacturing panic.
- Respect audience vulnerability and category risk.
- Avoid emotional coercion, trauma exploitation, and false urgency.

The line between persuasion and manipulation is whether the arc helps the audience reach a truthful, decision-supportive emotional state or pushes them into action through distortion and pressure. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/emotional-arc-designer`, fails to mention provenance, or does not use any copied source files at all.
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
- Agents typically: jump straight to the desired emotion without building the transition.
- Why it fails psychologically: the audience feels manipulated or disconnected.
- Instead: create a believable progression.

**Failure Mode 2**
- Agents typically: maximize intensity at every step.
- Why it fails psychologically: constant high arousal creates fatigue and weak memory structure.
- Instead: alternate tension, clarity, and relief.

**Failure Mode 3**
- Agents typically: end on a vague inspirational note.
- Why it fails psychologically: the final state is too diffuse to drive action.
- Instead: end on the exact emotion that supports the next click, reply, or signup.

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

### Variable: entry emotion
- If anxious -> reduce uncertainty first, then build confidence.
- If skeptical -> lead with proof and transparency before aspiration.
- If curious -> preserve momentum with escalating tension and open loops.
- If overwhelmed -> simplify, sequence, and reduce cognitive load.

### Variable: desired action
- If the action is high commitment -> build trust, then desire, then urgency.
- If the action is low commitment -> move faster and keep the arc lighter.
- If the action is a return visit -> end with anticipation, not closure.

### Variable: content type
- If a pitch or sales deck -> use tension, contrast, and resolution.
- If an onboarding flow -> use relief, competence, and early wins.
- If an email sequence -> pace curiosity, reciprocity, and commitment gradually.
- If a landing page -> compress the arc and make the peak obvious.

#### Imported: PSYCHOLOGICAL FRAMEWORK: EMOTIONAL ARC SEQUENCING

### Mechanism
People decide through emotion, then rationalize with language. Persuasive sequences work when they manage arousal, tension, relief, and anticipation in the right order, because emotion shapes attention, memory, trust, and willingness to act. Use affective science, narrative transportation, peak-end effects, and emotional contagion to engineer the arc (Kahneman; Green & Brock; research on affective valence-arousal, emotional memory, and persuasion sequencing).

### Execution Steps

**Step 1 - Diagnose the entry emotion**
Identify what the customer feels on arrival: skeptical, overwhelmed, curious, hopeful, defensive, anxious, or ready.
*Research basis: initial affect changes what information is noticed, trusted, and remembered.*

**Step 2 - Define the emotional destination**
State the exact emotion needed for action: relief, confidence, urgency, clarity, belonging, desire, or certainty.
*Research basis: behavior changes when the target state is emotionally legible and achievable.*

**Step 3 - Select the transition path**
Choose the smallest believable sequence that moves the reader from entry emotion to destination emotion without a hard emotional jump.
*Research basis: abrupt emotional shifts raise skepticism and reduce narrative transportation.*

**Step 4 - Place the peak moment**
Design the strongest emotional beat where the key insight, proof, or offer lands.
*Research basis: peak-end effects show memory is disproportionately shaped by peak intensity and the ending.*

**Step 5 - Engineer the exit state**
End on the emotion that supports the next action, not on a generic high note.
*Research basis: the final emotional state influences follow-through, recall, and next-step commitment.*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`
- [ ] `@jobs-to-be-done-analyst`
- [ ] `@awareness-stage-mapper`

This skill's output feeds into:
- [ ] `@copywriting-psychologist`
- [ ] `@pitch-psychologist`
- [ ] `@sequence-psychologist`
- [ ] `@visual-emotion-engineer`
- [ ] `@brand-perception-psychologist`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I identify the entry emotion and the exit emotion?
- [ ] Did I design a believable transition path?
- [ ] Did I place the peak moment in the right spot?
- [ ] Did I avoid emotional overreach or coercion?
- [ ] Would this arc actually help the target human act?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
