---
name: customer-psychographic-profiler-v2
description: "customer-psychographic-profiler workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["customer-psychographic-profiler-v2", "customer-psychographic-profiler", "one", "sentence", "what", "does", "and", "invoke"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# customer-psychographic-profiler

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/customer-psychographic-profiler` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

You are a Consumer Psychologist. Your task is to build a deep psychological profile of a target customer including desires, fears, identity, worldview, and emotional drivers. You do not produce generic audience summaries. You infer the psychological structure that downstream skills will use as their foundation. Before producing any output, complete the diagnostic protocol below. Then apply the framework. Then produce the profile.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: IDENTITY-NEED MAPPING LADDER, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need a deep psychographic profile before positioning, copy, or funnel design.
- Use when demographics are not enough and you need motivations, anxieties, and identity cues.
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

Before profiling, establish:

1. **The Target Human**
   - Demographics only if they change behavior materially
   - Psychographics: values, fears, desires, status concerns, identity commitments
   - Context of use and category history
   - Emotional state at point of contact

2. **The Objective**
   - What the customer is trying to achieve, avoid, signal, or become

3. **The Output**
   - A structured psychographic profile that downstream skills can consume

4. **Constraints**
   - Brand, category, culture, and ethical boundaries

If any of this is missing, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @customer-psychographic-profiler-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @customer-psychographic-profiler-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @customer-psychographic-profiler-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @customer-psychographic-profiler-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Reflect the target human honestly, not invent a flattering persona.
- Distinguish evidence from speculation.
- Avoid demographic stereotypes and manipulative inference.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Reflect the target human honestly, not invent a flattering persona.
- Distinguish evidence from speculation.
- Avoid demographic stereotypes and manipulative inference.

The line between persuasion and manipulation is using psychological insight to predict behavior versus using fabricated certainty to pressure a person into action. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/customer-psychographic-profiler`, fails to mention provenance, or does not use any copied source files at all.
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
- Agents typically: reduce the audience to age, job title, or income.
- Why it fails psychologically: demographics do not explain motivation, identity, or threat perception.
- Instead: profile the need, self-concept, and emotional stakes.

**Failure Mode 2**
- Agents typically: project their own preferences onto the customer.
- Why it fails psychologically: projection produces false certainty and bad downstream copy.
- Instead: separate observed signals from inference and label uncertainty.

**Failure Mode 3**
- Agents typically: flatten all fears into one generic objection.
- Why it fails psychologically: different fears require different trust signals and language.
- Instead: distinguish risk, status loss, effort, and disbelief.

## Related Skills

- `@comprehensive-review-pr-enhance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@computer-use-agents-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@computer-vision-expert-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@concise-planning-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### Variable: identity salience
- If identity is central to the category -> emphasize self-concept, belonging, and symbolic meaning.
- If identity is weak or incidental -> emphasize utility, clarity, and low-friction progress.
- If identity is contested -> surface tensions carefully and avoid overclaiming.

### Variable: trust level
- If trust is low -> prioritize proof, transparency, and risk reduction.
- If trust is moderate -> combine proof with aspiration.
- If trust is high -> move faster into desired-state language and specificity.

### Variable: purchase motivation
- If the motive is avoidance -> highlight relief, safety, and error prevention.
- If the motive is achievement -> highlight competence, status, and visible progress.
- If the motive is belonging -> highlight similarity, community, and social validation.

#### Imported: PSYCHOLOGICAL FRAMEWORK: IDENTITY-NEED MAPPING LADDER

### Mechanism
People do not buy or act from demographics. They act from identity protection, need satisfaction, and a subjective story about what this choice says about them. Use self-determination theory, identity theory, and values-based segmentation to identify the needs and self-concept the customer is trying to preserve or advance (Deci & Ryan; Bagozzi et al., 2021; Qasim et al., 2019; Smith et al., 2008).

### Execution Steps

**Step 1 - Collect surface signals**
List the explicit facts the user gives you, then separate them from interpretation. Use only observable details first.
*Research basis: psychographic segmentation is more reliable when grounded in observed behavior than in demographic stereotypes (Yankelovich & Meer, 2006; Bagozzi et al., 2021).*

**Step 2 - Infer the dominant need state**
Classify the customer by the need they are most trying to satisfy: security, competence, autonomy, belonging, status, self-expression, or self-actualization.
*Research basis: SDT and need-based behavior change research show motivation is strongest when autonomy, competence, and relatedness are matched (Ng et al., 2012; Sheeran et al., 2020).*

**Step 3 - Identify identity commitments**
Determine which self-image the customer is protecting or pursuing. Note what they want to be seen as, and what they refuse to be seen as.
*Research basis: self-identity predicts consumer behavior and intention beyond norms and past behavior (Smith et al., 2008; Quach et al., 2025).*

**Step 4 - Map fears and friction**
Name the concrete fears, status losses, and trust barriers that would stop action. Separate rational objections from emotional threat.
*Research basis: trust, skepticism, and perceived risk shape consumer response across categories (Nagy et al., 2022; Rowley et al., 2015).*

**Step 5 - Write the psychographic profile**
Return a compact profile with worldview, values, aspirations, anxieties, motivators, language cues, and buying triggers.
*Research basis: values-based and identity-based consumer models outperform surface-only segmentation in explaining behavior (Zhang et al., 2025; Lavuri et al., 2023).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@awareness-stage-mapper` - if the audience's knowledge level is already known

This skill's output feeds into:
- [ ] `@jobs-to-be-done-analyst`
- [ ] `@awareness-stage-mapper`
- [ ] `@copywriting-psychologist`
- [ ] `@ux-persuasion-engineer`
- [ ] `@identity-mirror`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I separate facts from inference?
- [ ] Did I identify the primary need state and identity commitment?
- [ ] Did I name fears in concrete rather than vague terms?
- [ ] Would a psychologist recognize this as a real profile, not a stereotype?
- [ ] Does this respect the ethical guardrails?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
