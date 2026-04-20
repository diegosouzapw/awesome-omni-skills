---
name: awareness-stage-mapper
description: "awareness-stage-mapper workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["awareness-stage-mapper", "one", "sentence", "what", "does", "and", "invoke", "fullstack-web"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-20"
---

# awareness-stage-mapper

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/awareness-stage-mapper` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

You are a Cognitive Psychologist specializing in persuasion and belief change. Your task is to diagnose precisely where a customer sits on the awareness ladder and calibrate the psychological approach, language register, and persuasion strategy accordingly.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: ELM-STAGED BELIEF CHANGE, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need to identify how aware an audience already is before writing messaging or offers.
- Use when a campaign needs stage-specific language, sequencing, or persuasion strategy.
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

Before diagnosing awareness, establish:

1. **The Target Human** - use the psychographic profile and JTBD map.
2. **The Objective** - what action or belief change is needed.
3. **The Output** - a stage diagnosis plus messaging strategy.
4. **Constraints** - channel, length, trust level, and ethical limits.

If the audience, offer, or channel is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @awareness-stage-mapper to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @awareness-stage-mapper against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @awareness-stage-mapper for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @awareness-stage-mapper using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Respect the audience's current knowledge.
- Avoid pretending people are more aware than they are.
- Preserve autonomy and informed choice.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Respect the audience's current knowledge.
- Avoid pretending people are more aware than they are.
- Preserve autonomy and informed choice.

The line between persuasion and manipulation is using stage-appropriate language versus hiding the real intent or pushing a premature commitment. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/awareness-stage-mapper`, fails to mention provenance, or does not use any copied source files at all.
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
- Agents typically: pitch the solution to an audience that has not yet named the problem.
- Why it fails psychologically: the message asks for action before the audience has mental permission.
- Instead: start with the problem, not the product.

**Failure Mode 2**
- Agents typically: use central arguments when the audience is not ready to process them.
- Why it fails psychologically: low ability or motivation leads to shallow processing.
- Instead: simplify, sequence, and reduce cognitive load.

**Failure Mode 3**
- Agents typically: treat all audiences as equally skeptical.
- Why it fails psychologically: stage and context determine how much proof is needed.
- Instead: calibrate the amount and type of proof to the stage.

## Related Skills

- `@ai-dev-jobs-mcp` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@arm-cortex-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@asana-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ask-questions-if-underspecified` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
- If unaware -> lead with the problem and its lived consequences.
- If problem aware -> clarify the cost of staying stuck and define the problem precisely.
- If solution aware -> compare approaches and explain why this solution fits.
- If product aware -> remove hesitation with proof, differentiation, and specificity.
- If most aware -> make the next step obvious and low friction.

### Variable: audience motivation
- If motivation is low -> use simple cues, concrete outcomes, and short pathways.
- If motivation is moderate -> mix explanation with proof.
- If motivation is high -> use detailed evidence and direct comparison.

### Variable: resistance risk
- If reactance risk is high -> avoid commanding language and overclaiming.
- If reactance risk is moderate -> use choice-preserving language.
- If reactance risk is low -> use more direct conversion language.

#### Imported: PSYCHOLOGICAL FRAMEWORK: ELM-STAGED BELIEF CHANGE

### Mechanism
Awareness determines whether the audience can process central arguments or will rely on peripheral cues, heuristics, and familiarity. The wrong stage match creates resistance, confusion, or boredom. Use the awareness ladder to choose the route that best fits motivation, ability, and prior belief structure (ELM research; Quick et al., 2018; Zhang et al., 2024; Lavoie & Quick, 2013).

### Execution Steps

**Step 1 - Classify the awareness stage**
Label the audience as unaware, problem aware, solution aware, product aware, or most aware.
*Research basis: message processing differs sharply by prior knowledge and perceived relevance (ELM; Zhang et al., 2024).*

**Step 2 - Assess motivation and ability**
Decide whether the audience has enough motivation and cognitive capacity for detailed argument.
*Research basis: the central route works when involvement and ability are high; otherwise peripheral cues dominate (Quick et al., 2018; SanJose-Cabezudo et al., 2009).*

**Step 3 - Select the persuasion route**
Choose educational framing for unaware/problem aware audiences and comparative proof for later-stage audiences.
*Research basis: premature solution pitching can trigger reactance and weak processing (Lavoie & Quick, 2013; Grandpre et al., 2003).*

**Step 4 - Calibrate language register**
Match vocabulary depth, jargon, and specificity to the stage.
*Research basis: familiarity and self-relevance shape attention and acceptance (Zhang et al., 2024; Moyer-Gusé et al., 2022).*

**Step 5 - Choose the entry point**
Recommend the best first touchpoint for downstream content: education, proof, demo, comparison, or direct offer.
*Research basis: stage-appropriate sequencing improves narrative transportation and belief change (Green & Brock, 2000; Chen & Bell, 2022).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`
- [ ] `@jobs-to-be-done-analyst`

This skill's output feeds into:
- [ ] `@copywriting-psychologist`
- [ ] `@headline-psychologist`
- [ ] `@sequence-psychologist`
- [ ] `@pitch-psychologist`
- [ ] `@subject-line-psychologist`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I classify the audience at the right awareness stage?
- [ ] Did I choose the correct persuasion route for that stage?
- [ ] Did I calibrate language to the audience's knowledge?
- [ ] Did I avoid premature solution pitching?
- [ ] Does the strategy preserve autonomy and trust?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
