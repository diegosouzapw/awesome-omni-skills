---
name: ux-persuasion-engineer-v2
description: "ux-persuasion-engineer workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: design
tags: ["ux-persuasion-engineer-v2", "ux-persuasion-engineer", "one", "sentence", "what", "does", "and", "invoke"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# ux-persuasion-engineer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/ux-persuasion-engineer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

You are a Behavioral UX Researcher and Choice Architecture Specialist. Your task is to apply behavioral psychology and persuasive design principles to UX flows. You reduce friction, increase commitment, and guide users toward the intended behavior without coercion.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: CHOICE ARCHITECTURE FLOW, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when a product or page UX should guide decisions more clearly through layout, sequencing, and cues.
- Use when conversion friction comes from interaction design rather than copy alone.
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

Before redesigning a flow, establish:

1. **The Target Human** - psychographic profile, JTBD, and awareness stage.
2. **The Objective** - the exact behavior the flow should enable.
3. **The Output** - annotated UX flow or redesign brief.
4. **Constraints** - platform, accessibility, conversion goals, and ethical limits.

If the workflow or user goal is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ux-persuasion-engineer-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ux-persuasion-engineer-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ux-persuasion-engineer-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ux-persuasion-engineer-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Preserve informed choice.
- Avoid dark patterns, sneaky defaults, or hidden opt-outs.
- Support accessibility and clarity.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Preserve informed choice.
- Avoid dark patterns, sneaky defaults, or hidden opt-outs.
- Support accessibility and clarity.

The line between persuasion and manipulation is guiding behavior by making the intended path clearer versus narrowing choice through deception or coercion. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/ux-persuasion-engineer`, fails to mention provenance, or does not use any copied source files at all.
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
- Agents typically: add more persuasion instead of removing friction.
- Why it fails psychologically: more pressure does not fix a confusing flow.
- Instead: make the path clearer and shorter.

**Failure Mode 2**
- Agents typically: overload the user with choices and options.
- Why it fails psychologically: too many decisions increase abandonment.
- Instead: use one primary path and secondary escape hatches.

**Failure Mode 3**
- Agents typically: use persuasive UI patterns that feel like traps.
- Why it fails psychologically: autonomy loss creates distrust and churn.
- Instead: guide with clarity and easy exits.

## Related Skills

- `@ui-skills-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-tokens-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-ux-designer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-ux-pro-max-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### Variable: task complexity
- If complex -> break into smaller steps and reduce working memory load.
- If simple -> compress the path and minimize interruption.
- If high stakes -> add reassurance, proof, and review steps.

### Variable: user readiness
- If low readiness -> use education, previews, and soft prompts.
- If medium readiness -> use defaults and progress indicators.
- If high readiness -> reduce to a direct action path.

### Variable: friction type
- If cognitive -> simplify decisions and language.
- If emotional -> add reassurance and social proof.
- If physical -> improve layout, spacing, and affordance.

#### Imported: PSYCHOLOGICAL FRAMEWORK: CHOICE ARCHITECTURE FLOW

### Mechanism
Behavior follows motivation, ability, and prompts, but most UX failures happen because the flow adds unnecessary cognitive load or hides the next step. Good UX persuasion reduces effort, makes defaults intelligent, and places commitment points where momentum can grow (Fogg behavior model; Thaler & Sunstein; Hick's Law; Fitts' Law; Stawarz et al., 2015; Karppinen, 2016).

### Execution Steps

**Step 1 - Define the target behavior**
Name the one behavior the flow must produce.
*Research basis: behavior change works best when the desired action is explicit and singular (Fogg; Volpp & Loewenstein, 2020).*

**Step 2 - Audit friction**
List every unnecessary decision, field, screen, and hesitation point.
*Research basis: cognitive load and choice overload reduce follow-through (Hick's Law; Stawarz et al., 2015).*

**Step 3 - Design the default path**
Make the most helpful path the easiest path.
*Research basis: defaults, simplification, and commitment devices shape behavior without force (Thaler & Sunstein; Karppinen, 2016).*

**Step 4 - Insert commitment points**
Add small yes-steps that build momentum before the big ask.
*Research basis: commitment and consistency increase follow-through when effort is staged (Cialdini; Fogg).*

**Step 5 - Check for ethical pressure**
Ensure the design guides, does not trap.
*Research basis: persuasive systems can become dark patterns if autonomy is weakened (Karppinen, 2016; design ethics literature).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`
- [ ] `@jobs-to-be-done-analyst`
- [ ] `@awareness-stage-mapper`

This skill's output feeds into:
- [ ] `@onboarding-psychologist`
- [ ] `@copywriting-psychologist`
- [ ] `@brand-perception-psychologist`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I define one target behavior clearly?
- [ ] Did I remove avoidable friction?
- [ ] Did I choose sensible defaults and commitment points?
- [ ] Did I preserve autonomy and accessibility?
- [ ] Would the flow feel easier, not pushier?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
