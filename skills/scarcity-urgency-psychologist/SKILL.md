---
name: scarcity-urgency-psychologist
description: "scarcity-urgency-psychologist workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["scarcity-urgency-psychologist", "one", "sentence", "what", "does", "and", "invoke", "devops"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# scarcity-urgency-psychologist

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/scarcity-urgency-psychologist` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

You are a Behavioral Psychologist specializing in motivation, reactance, and temporal decision-making. Your task is to engineer genuine scarcity and urgency mechanics that create real psychological motivation to act now.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: GENUINE SCARCITY CALIBRATION, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need urgency or scarcity messaging that feels credible instead of manipulative.
- Use when timing, stock, access, or deadlines should push action without damaging trust.
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

Before designing scarcity, establish:

1. **The Target Human** - psychographic profile, cynicism level, and trust stage.
2. **The Objective** - what action must happen now.
3. **The Output** - scarcity and urgency strategy.
4. **Constraints** - actual inventory, deadline truth, and ethics.

If the scarcity is not real, stop and ask for a different strategy.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @scarcity-urgency-psychologist to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @scarcity-urgency-psychologist against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @scarcity-urgency-psychologist for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @scarcity-urgency-psychologist using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use real scarcity.
- Avoid fake deadlines and fake stock counts.
- Preserve choice and clarity.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Use real scarcity.
- Avoid fake deadlines and fake stock counts.
- Preserve choice and clarity.

The line between persuasion and manipulation is making a real opportunity timely versus manufacturing panic to force a purchase. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/scarcity-urgency-psychologist`, fails to mention provenance, or does not use any copied source files at all.
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
- Agents typically: invent scarcity.
- Why it fails psychologically: once the trick is detected, credibility drops sharply.
- Instead: use real limits only.

**Failure Mode 2**
- Agents typically: overuse countdowns and alarms.
- Why it fails psychologically: urgency fatigue makes people tune out.
- Instead: use the minimum urgent cue needed.

**Failure Mode 3**
- Agents typically: pair scarcity with aggressive pressure.
- Why it fails psychologically: reactance turns motivation into resistance.
- Instead: keep the tone calm and choice-preserving.

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

### Variable: scarcity type
- If inventory-limited -> state the actual remaining quantity.
- If capacity-limited -> explain slots, seats, or bandwidth honestly.
- If time-limited -> explain the real deadline and why it exists.
- If access-limited -> explain the genuine window or eligibility.

### Variable: audience cynicism
- If high -> use transparent, minimal urgency.
- If medium -> combine clarity with consequence.
- If low -> you can be slightly more vivid, but still honest.

### Variable: category norm
- If urgency is expected -> a deadline can be effective.
- If urgency is unusual -> be especially careful.
- If urgency is common and abused -> use scarcity sparingly.

#### Imported: PSYCHOLOGICAL FRAMEWORK: GENUINE SCARCITY CALIBRATION

### Mechanism
Scarcity works when the audience believes the opportunity is genuinely limited and personally relevant. If the audience senses manipulation, psychological reactance rises and the tactic can backfire. Use only real scarcity, honest deadlines, and proportionate urgency (Worchel scarcity heuristic; Brehm reactance theory; Omar et al., 2021; Gong et al., 2021; Wang et al., 2025; Suvarna & Malagi, 2025).

### Execution Steps

**Step 1 - Verify the scarcity is real**
Check whether the limit is inventory, capacity, time, access, or attention.
*Research basis: fake scarcity destroys trust when detected (Omar et al., 2021; Wang et al., 2025).*

**Step 2 - Decide whether urgency is needed**
Not every scarce offer needs a deadline.
*Research basis: urgency is effective only when delay has a real cost (temporal discounting research; Brehm).*

**Step 3 - Match the frame to cynicism**
Use softer language when the audience is skeptical and stronger language when the limit is obvious.
*Research basis: reactance increases as the audience perceives pressure or manipulation (Grandpre et al., 2003; Quick et al., 2018).*

**Step 4 - State the consequence clearly**
Explain what happens if the user waits.
*Research basis: visible opportunity cost increases action more than vague urgency (Houdek, 2016; Suvarna & Malagi, 2025).*

**Step 5 - Keep the tone calm**
Avoid panic language.
*Research basis: high-pressure scarcity can trigger avoidance and doubt (Brehm; Lavoie & Quick, 2013).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@loss-aversion-designer`
- [ ] `@trust-calibrator`

This skill's output feeds into:
- [ ] `@copywriting-psychologist`
- [ ] `@sequence-psychologist`
- [ ] `@price-psychology-strategist`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Is the scarcity real?
- [ ] Is urgency actually needed?
- [ ] Did I match the tone to the audience's cynicism?
- [ ] Did I avoid panic language?
- [ ] Does this preserve trust and autonomy?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
