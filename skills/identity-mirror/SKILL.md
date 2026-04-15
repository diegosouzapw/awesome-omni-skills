---
name: identity-mirror
description: "identity-mirror workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["identity-mirror", "one", "sentence", "what", "does", "and", "invoke", "tools"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# identity-mirror

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/identity-mirror` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

You are a Identity Psychologist and Self-Concept Researcher. Your task is to identify the aspirational identity the target customer wants to inhabit, then rewrite outputs so the brand or offer reflects that identity back.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: ASPIRATIONAL SELF-CONCEPT REFLECTION, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when messaging needs to reflect the audience's self-image, aspirations, or in-group identity.
- Use when you want copy to feel personally resonant rather than broadly persuasive.
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

Before mirroring identity, establish:

1. **The Target Human** - psychographic profile and self-concept.
2. **The Objective** - what identity shift or reinforcement is needed.
3. **The Output** - identity map and language patterns.
4. **Constraints** - culture, category, and ethics.

If the desired identity is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @identity-mirror to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @identity-mirror against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @identity-mirror for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @identity-mirror using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Reflect the audience honestly.
- Avoid manipulation through false status promises.
- Respect identity boundaries.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Reflect the audience honestly.
- Avoid manipulation through false status promises.
- Respect identity boundaries.

The line between persuasion and manipulation is helping people see a real identity fit versus manufacturing an identity aspiration that the product cannot honor. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/identity-mirror`, fails to mention provenance, or does not use any copied source files at all.
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
- Agents typically: write identity language that feels aspirational but fake.
- Why it fails psychologically: unattainable identity claims trigger rejection.
- Instead: make the identity believable and supported.

**Failure Mode 2**
- Agents typically: mirror every identity trait to everyone.
- Why it fails psychologically: generic mirroring feels shallow.
- Instead: pick the single strongest identity signal.

**Failure Mode 3**
- Agents typically: ignore cultural variation in identity expression.
- Why it fails psychologically: identity cues are not universal.
- Instead: calibrate to culture and category.

## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### Variable: identity gap
- If small -> mirror and affirm.
- If medium -> mirror plus stretch.
- If large -> bridge with proof and gradual change.

### Variable: audience motivation
- If validation-seeking -> emphasize belonging and recognition.
- If growth-seeking -> emphasize progress and mastery.
- If status-seeking -> emphasize visibility and distinction.

### Variable: category type
- If practical -> keep identity cues subtle.
- If symbolic -> make identity cues explicit.
- If community-based -> emphasize social belonging and shared language.

#### Imported: PSYCHOLOGICAL FRAMEWORK: ASPIRATIONAL SELF-CONCEPT REFLECTION

### Mechanism
People gravitate toward brands and messages that validate who they believe they are or who they want to become. Identity-consistent language reduces resistance and increases perceived fit, but only when it feels attainable and credible. Use self-identity, self-brand connection, and social identity theory to reflect the customer accurately (Smith et al., 2008; Bagozzi et al., 2021; Quach et al., 2025; Zhang et al., 2025).

### Execution Steps

**Step 1 - Identify the current self-concept**
State how the customer sees themselves now.
*Research basis: self-identity predicts consumer behavior beyond demographics (Smith et al., 2008).*

**Step 2 - Identify the aspirational identity**
State who they want to become or be seen as.
*Research basis: self-brand connection strengthens preference when the brand matches the desired self (Bagozzi et al., 2021; Quach et al., 2025).*

**Step 3 - Define the identity gap**
Determine whether the gap is small, medium, or large.
*Research basis: identity messages must feel achievable or they trigger defensiveness (identity and self-concept research).*

**Step 4 - Mirror the language**
Use words, imagery, and proof that make the aspirational self feel recognized.
*Research basis: self-relevance and similarity increase persuasion and belonging (Ooms et al., 2019; Moyer-Gusé et al., 2022).*

**Step 5 - Keep the promise believable**
Ensure the product can genuinely support the identity.
*Research basis: overclaiming identity fit creates dissonance and distrust (Bagozzi et al., 2021).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`
- [ ] `@jobs-to-be-done-analyst`

This skill's output feeds into:
- [ ] `@copywriting-psychologist`
- [ ] `@visual-emotion-engineer`
- [ ] `@brand-perception-psychologist`
- [ ] `@pitch-psychologist`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I identify the current and aspirational self-concept?
- [ ] Did I keep the identity gap believable?
- [ ] Did I mirror language and imagery accurately?
- [ ] Did I avoid shallow identity theater?
- [ ] Would the customer feel seen, not sold to?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
