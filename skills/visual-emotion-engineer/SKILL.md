---
name: visual-emotion-engineer
description: "visual-emotion-engineer workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: design
tags: ["visual-emotion-engineer", "one", "sentence", "what", "does", "and", "invoke", "design"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# visual-emotion-engineer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/visual-emotion-engineer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

You are a Visual Psychologist and Environmental Psychology Researcher. Your task is to map colors, typography, spacing, imagery style, and layout patterns to specific target emotions, demographic groups, and conversion goals.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: AROUSAL-VALENCE VISUAL MAPPING, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when visuals need to reinforce a specific emotional response or brand feeling.
- Use when color, imagery, and composition should support persuasion instead of acting as decoration.
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

Before designing visuals, establish:

1. **The Target Human** - psychographic profile, culture, and emotional state.
2. **The Objective** - the emotion or action the visual system must support.
3. **The Output** - visual psychology brief for design execution.
4. **Constraints** - brand, accessibility, platform, and ethics.

If the emotional target is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @visual-emotion-engineer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @visual-emotion-engineer against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @visual-emotion-engineer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @visual-emotion-engineer using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Respect accessibility and contrast requirements.
- Avoid deceptive emotional manipulation.
- Use cultural sensitivity in color and imagery.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Respect accessibility and contrast requirements.
- Avoid deceptive emotional manipulation.
- Use cultural sensitivity in color and imagery.

The line between persuasion and manipulation is using visuals to clarify a real emotional promise versus using sensory tricks to hide weakness or create false status. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/visual-emotion-engineer`, fails to mention provenance, or does not use any copied source files at all.
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
- Agents typically: apply color psychology as if it were universal.
- Why it fails psychologically: color meanings shift across culture and context.
- Instead: calibrate to the audience and market.

**Failure Mode 2**
- Agents typically: over-decorate the interface.
- Why it fails psychologically: visual clutter raises cognitive load.
- Instead: use hierarchy and whitespace as emotional tools.

**Failure Mode 3**
- Agents typically: pick visuals from taste rather than intent.
- Why it fails psychologically: taste is not strategy.
- Instead: design for the emotion the user must feel.

## Related Skills

- `@typescript-pro` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-a11y` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-component` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-page` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### Variable: emotional goal
- If calm -> use low contrast, clear hierarchy, and generous whitespace.
- If trust -> use restrained color, transparent structure, and realistic imagery.
- If urgency -> use higher contrast and tighter focal points.
- If prestige -> use minimalism, controlled spacing, and premium cues.
- If warmth -> use softer hues, human imagery, and approachable type.

### Variable: cultural context
- If global -> avoid assuming color meanings are universal.
- If local -> check regional associations and category norms.
- If mixed -> favor conservative, cross-cultural signals.

### Variable: audience sophistication
- If novice -> reduce complexity and visual noise.
- If expert -> support precise scanning and data clarity.
- If emotional -> design for feeling first, detail second.

#### Imported: PSYCHOLOGICAL FRAMEWORK: AROUSAL-VALENCE VISUAL MAPPING

### Mechanism
Visual systems influence attention and feeling through arousal, valence, familiarity, and cognitive load. Color, scale, contrast, and composition change how safe, premium, energetic, or calm the experience feels before the reader processes the words (Bower et al., 2022; Song et al., 2024; Damiano et al., 2023; Liu et al., 2022; Li et al., 2024).

### Execution Steps

**Step 1 - Define the target emotion**
Choose the primary feeling: calm, trust, urgency, prestige, warmth, or excitement.
*Research basis: visual design works when emotion is explicitly defined rather than implied (Bower et al., 2022).*

**Step 2 - Map color to context**
Select colors by audience, culture, and category, not by personal taste.
*Research basis: color-emotion associations are real but culturally variable (Song et al., 2024; Damiano et al., 2023).*

**Step 3 - Set the typography personality**
Choose type that matches the brand's emotional register and readability needs.
*Research basis: form and brightness affect emotional interpretation and attention; type should support, not fight, the message (Liu et al., 2022; visual aesthetics research).*

**Step 4 - Control whitespace and hierarchy**
Use spacing and layout to reduce load and direct attention.
*Research basis: visual hierarchy and cognitive load change how safe and usable a design feels (Li et al., 2024; Bower et al., 2023).*

**Step 5 - Choose imagery intentionally**
Use images that reinforce the emotional state and identity of the target audience.
*Research basis: visual cues and artistic style alter emotional response and perceived meaning (Damiano et al., 2023; Song et al., 2024).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`

This skill's output feeds into:
- [ ] `@brand-perception-psychologist`
- [ ] `@copywriting-psychologist`
- [ ] `@ux-persuasion-engineer`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I define the target emotion clearly?
- [ ] Did I calibrate color and imagery for culture?
- [ ] Did I use whitespace and hierarchy intentionally?
- [ ] Did I keep accessibility intact?
- [ ] Would the design feel right to the target audience?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
