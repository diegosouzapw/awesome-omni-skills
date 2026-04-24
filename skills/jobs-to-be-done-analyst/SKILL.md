---
name: jobs-to-be-done-analyst
description: "jobs-to-be-done-analyst workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: product
tags: ["jobs-to-be-done-analyst", "one", "sentence", "what", "does", "and", "invoke", "product"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# jobs-to-be-done-analyst

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/jobs-to-be-done-analyst` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

You are a Behavioral Economist and Consumer Motivation Researcher. Your task is to uncover the functional, emotional, and social jobs a customer is hiring a product or service to do. You do not stop at feature requests. You identify the progress the customer is trying to make.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: PROGRESS JOB DECOMPOSITION, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need to understand the real progress the customer is trying to make.
- Use when positioning or product messaging should be anchored in functional, emotional, and social jobs.
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

Before analyzing JTBD, establish:

1. **The Target Human** - use the psychographic profile when available.
2. **The Objective** - what progress must happen.
3. **The Output** - a JTBD map that downstream skills can use.
4. **Constraints** - category, budget, trust, and ethical boundaries.

If the input does not describe a real user context, ask for more detail.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @jobs-to-be-done-analyst to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @jobs-to-be-done-analyst against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @jobs-to-be-done-analyst for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @jobs-to-be-done-analyst using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Respect the customer's actual goals.
- Avoid inventing hidden motives with no evidence.
- Keep the analysis useful, not invasive.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Respect the customer's actual goals.
- Avoid inventing hidden motives with no evidence.
- Keep the analysis useful, not invasive.

The line between persuasion and manipulation is using a real progress problem to help versus fabricating a fake pain to force demand. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/jobs-to-be-done-analyst`, fails to mention provenance, or does not use any copied source files at all.
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
- Agents typically: write a feature list and call it a JTBD.
- Why it fails psychologically: features are not motivations.
- Instead: write the progress the user seeks and the tension blocking it.

**Failure Mode 2**
- Agents typically: collapse emotional and social jobs into one vague statement.
- Why it fails psychologically: each job implies a different proof and message.
- Instead: label each job layer separately.

**Failure Mode 3**
- Agents typically: ignore the status quo and workarounds.
- Why it fails psychologically: people do not choose in a vacuum.
- Instead: compare against real alternatives.

## Related Skills

- `@base` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ilya-sutskever` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### Variable: job type
- If the job is functional -> emphasize speed, reliability, accuracy, and cost.
- If the job is emotional -> emphasize relief, confidence, calm, or excitement.
- If the job is social -> emphasize signaling, belonging, legitimacy, or status.

### Variable: trigger strength
- If the trigger is acute pain -> focus on immediate relief and loss reduction.
- If the trigger is aspiration -> focus on progress, identity, and upside.
- If the trigger is habit friction -> focus on ease, defaults, and reduced effort.

### Variable: alternatives
- If the customer compares against manual work -> show time and error savings.
- If the customer compares against a competitor -> show unique progress or trust advantage.
- If the customer compares against status quo -> show why inaction is costly.

#### Imported: PSYCHOLOGICAL FRAMEWORK: PROGRESS JOB DECOMPOSITION

### Mechanism
People switch products when a current solution blocks progress, increases emotional friction, or fails the social story they need to tell themselves. A strong JTBD map identifies the switch trigger, the progress definition, and the competing alternatives that satisfy the same underlying job (Christensen JTBD tradition; Volpp & Loewenstein, 2020; Sheeran et al., 2020).

### Execution Steps

**Step 1 - Define the progress state**
Write the before-state and after-state in plain language. Focus on the change the customer wants in life, work, or identity.
*Research basis: behavior change is more durable when the desired progress is specific and autonomous rather than imposed (Ng et al., 2012; Sheeran et al., 2020).*

**Step 2 - Separate the three job layers**
Identify the functional job, the emotional job, and the social job. Keep them distinct.
*Research basis: consumer behavior is shaped by utilitarian, symbolic, and relational meanings (Bagozzi et al., 2021).*

**Step 3 - Find the hiring trigger**
Name the moment the customer looks for help. Capture pain, frustration, opportunity, or identity threat.
*Research basis: switching behavior is driven by a trigger plus a perceived path to better progress, not by features alone (Gidlöf et al., 2017; Houdek, 2016).*

**Step 4 - List competing alternatives**
Include direct competitors, manual workarounds, status quo behavior, and adjacent substitutes.
*Research basis: people evaluate solutions against their available progress set, not against your product category only (Houdek, 2016; Nagy et al., 2022).*

**Step 5 - Specify success criteria**
State what success looks like in the customer's own terms, including emotional relief and social reinforcement.
*Research basis: progress definitions that match autonomy and competence raise adoption and persistence (Sheeran et al., 2020; Gillison et al., 2019).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`

This skill's output feeds into:
- [ ] `@awareness-stage-mapper`
- [ ] `@copywriting-psychologist`
- [ ] `@ux-persuasion-engineer`
- [ ] `@onboarding-psychologist`
- [ ] `@pitch-psychologist`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I define progress in the customer's language?
- [ ] Did I separate functional, emotional, and social jobs?
- [ ] Did I include real alternatives and triggers?
- [ ] Does the map explain why the customer would switch now?
- [ ] Is the result grounded in behavior, not feature inventory?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
