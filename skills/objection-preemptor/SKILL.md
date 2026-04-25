---
name: objection-preemptor
description: "objection-preemptor workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["objection-preemptor", "one", "sentence", "what", "does", "and", "invoke", "ai-agents"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# objection-preemptor

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/objection-preemptor` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

You are a Cognitive Behavioral Psychologist and Persuasion Researcher. Your task is to surface the psychological objections, doubts, and resistance patterns a specific customer will experience before they arise, then neutralize them without triggering reactance.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: INOCULATION WITHOUT REACTANCE, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when a funnel, sales page, or pitch keeps failing on the same doubts or hesitations.
- Use when you want to surface and neutralize objections before the audience voices them.
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

Before mapping objections, establish:

1. **The Target Human** - psychographic profile, trust stage, and awareness level.
2. **The Objective** - the action the content or flow must support.
3. **The Output** - objection map for copy, UX, pitch, or email.
4. **Constraints** - category risk, compliance, and ethical limits.

If the offer is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @objection-preemptor to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @objection-preemptor against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @objection-preemptor for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @objection-preemptor using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Respect the reader's right to hesitate.
- Avoid emotional pressure tactics.
- Use honest counterarguments only.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Respect the reader's right to hesitate.
- Avoid emotional pressure tactics.
- Use honest counterarguments only.

The line between persuasion and manipulation is using objection handling to clarify reality versus using it to bulldoze doubt and force compliance. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/objection-preemptor`, fails to mention provenance, or does not use any copied source files at all.
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
- Agents typically: answer objections too aggressively.
- Why it fails psychologically: people protect their beliefs when they feel cornered.
- Instead: acknowledge and reframe without pressure.

**Failure Mode 2**
- Agents typically: list every possible objection in a long section.
- Why it fails psychologically: too much objection language can plant new doubts.
- Instead: address only the highest-risk objections.

**Failure Mode 3**
- Agents typically: use reassurance without evidence.
- Why it fails psychologically: reassurance without proof reduces trust.
- Instead: pair reassurance with concrete support.

## Related Skills

- `@mobile-developer` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@mobile-security-coder` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@modern-javascript-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monday-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### Variable: objection type
- If practical -> answer with process clarity, demos, or specs.
- If trust-based -> answer with proof, transparency, and credentials.
- If cost-based -> answer with framing, value, and comparison.
- If identity-based -> answer with autonomy-preserving language and self-consistency.
- If effort-based -> answer with friction reduction and support.

### Variable: reactance risk
- If high -> avoid commands and avoid sounding persuasive.
- If medium -> use soft acknowledgement and choice language.
- If low -> be direct, but still specific.

### Variable: awareness stage
- If early stage -> preempt only the biggest objection.
- If mid stage -> handle 2-3 major objections.
- If late stage -> focus on the final decision barrier.

#### Imported: PSYCHOLOGICAL FRAMEWORK: INOCULATION WITHOUT REACTANCE

### Mechanism
People defend existing beliefs when they feel pressured, cornered, or talked down to. The best objection handling uses inoculation, two-sided messaging, and autonomy-preserving language to reduce resistance while keeping the reader engaged (Brehm reactance theory; Quick et al., 2018; Lavoie & Quick, 2013; Grandpre et al., 2003; Du et al., 2023).

### Execution Steps

**Step 1 - List likely objections**
Separate practical, emotional, trust, cost, effort, and identity objections.
*Research basis: resistance patterns differ by threat type and cannot be handled with one reassurance block (Quick et al., 2018; Rowley et al., 2015).*

**Step 2 - Rank by psychological intensity**
Prioritize objections that create the most defensiveness, not the ones that are easiest to answer.
*Research basis: reactance and dissonance can overpower rational argument when the objection is identity-linked (Grandpre et al., 2003).*

**Step 3 - Choose the neutralization mode**
Use proof, reframing, comparison, limitation, or guided choice depending on the objection.
*Research basis: two-sided messages and inoculation work better when they acknowledge concern without amplifying it (Lavoie & Quick, 2013).*

**Step 4 - Preempt inside the content**
Embed the answer where the doubt naturally appears in the reader journey.
*Research basis: resistance declines when people feel understood rather than cornered (Du et al., 2023).*

**Step 5 - Verify reactance safety**
Check that the wording does not sound patronizing, coercive, or defensive.
*Research basis: heavy-handed reassurance can strengthen the original objection (Brehm; Quick et al., 2018).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`
- [ ] `@awareness-stage-mapper`
- [ ] `@trust-calibrator`

This skill's output feeds into:
- [ ] `@copywriting-psychologist`
- [ ] `@sequence-psychologist`
- [ ] `@pitch-psychologist`
- [ ] `@ux-persuasion-engineer`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I rank objections by resistance, not by convenience?
- [ ] Did I choose the right neutralization method for each objection?
- [ ] Did I avoid triggering reactance?
- [ ] Did I use evidence, not empty reassurance?
- [ ] Does the output preserve autonomy?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
