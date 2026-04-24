---
name: loss-aversion-designer
description: "loss-aversion-designer workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: design
tags: ["loss-aversion-designer", "one", "sentence", "what", "does", "and", "invoke", "design"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# loss-aversion-designer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/loss-aversion-designer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

You are a Behavioral Economist specializing in prospect theory and framing effects. Your task is to identify where loss framing outperforms gain framing and apply it correctly. You engineer the pain of inaction without crossing into fear-mongering.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when an offer or message should emphasize what the audience risks losing by doing nothing.
- Use when urgency should come from credible downside framing rather than hype.
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

Before framing, establish:

1. **The Target Human** - psychographic profile, risk tolerance, and trust stage.
2. **The Objective** - the behavior or belief that framing must change.
3. **The Output** - framing strategy for copy, UX, email, or pricing.
4. **Constraints** - category norms, deadlines, and ethical limits.

If the reference point is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @loss-aversion-designer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @loss-aversion-designer against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @loss-aversion-designer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @loss-aversion-designer using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use honest tradeoffs.
- Avoid fear mongering and fake deadlines.
- Preserve user autonomy.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Use honest tradeoffs.
- Avoid fear mongering and fake deadlines.
- Preserve user autonomy.

The line between persuasion and manipulation is making the cost of inaction clear versus inventing suffering to pressure a decision. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/loss-aversion-designer`, fails to mention provenance, or does not use any copied source files at all.
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
- Agents typically: use loss framing everywhere.
- Why it fails psychologically: audiences adapt and begin to ignore the threat.
- Instead: use loss framing only where the reference point supports it.

**Failure Mode 2**
- Agents typically: overdo fear and scarcity language.
- Why it fails psychologically: people disengage or defend against the message.
- Instead: keep the consequence specific and proportionate.

**Failure Mode 3**
- Agents typically: frame losses that are not actually credible.
- Why it fails psychologically: fake threat destroys trust.
- Instead: frame real, observable costs of delay or inaction.

## Related Skills

- `@lightning-factory-explainer` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linear-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linear-claude-skill` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linkedin-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: PSYCHOLOGICAL FRAMEWORK: REFERENCE-POINT FRAMING

### Mechanism
People evaluate outcomes relative to a reference point, not in absolute terms. Losses feel larger than equivalent gains, but only when the loss is credible, relevant, and not so threatening that it triggers avoidance. Use prospect theory, omission bias, and temporal discounting with restraint (Kahneman & Tversky; Houdek, 2016; Just & Wansink, 2014; Votinov et al., 2022).

### Execution Steps

**Step 1 - Set the reference point**
Identify what the audience currently sees as normal.
*Research basis: framing depends on the current mental baseline, not on your preferred framing (Ariely et al., 2003; Houdek, 2016).*

**Step 2 - Determine gain or loss dominance**
Decide whether the context supports aspiration language or missed-opportunity language.
*Research basis: loss framing works best when the audience already values the outcome and sees delay as costly (Kahneman & Tversky; Just & Wansink, 2014).*

**Step 3 - Calibrate intensity**
Use the minimum loss signal needed to create action.
*Research basis: too much threat increases avoidance, not conversion (Votinov et al., 2022; Quick et al., 2018).*

**Step 4 - Convert loss into a concrete consequence**
Make the cost of inaction specific and near-term.
*Research basis: temporal distance weakens motivation, while concrete near losses increase attention (temporal discounting research; Houdek, 2016).*

**Step 5 - Keep the frame honest**
Use real tradeoffs, not invented panic.
*Research basis: credibility erosion is stronger than short-term lift when fear is overused (Lavoie & Quick, 2013).*

#### Imported: DECISION MATRIX

### Variable: audience risk tolerance
- If low -> use cautious loss framing with reassurance.
- If medium -> use balanced gain/loss framing.
- If high -> stronger loss framing may be acceptable if credible.

### Variable: category trust
- If trust is low -> keep loss framing light and evidence-backed.
- If trust is moderate -> pair loss with proof and comparison.
- If trust is high -> a stronger missed-opportunity frame can work.

### Variable: time horizon
- If the consequence is immediate -> use direct loss language.
- If the consequence is delayed -> translate it into near-term operational pain.
- If the consequence is uncertain -> avoid heavy loss framing.

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`
- [ ] `@awareness-stage-mapper`
- [ ] `@trust-calibrator`

This skill's output feeds into:
- [ ] `@copywriting-psychologist`
- [ ] `@sequence-psychologist`
- [ ] `@price-psychology-strategist`
- [ ] `@scarcity-urgency-psychologist`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I set a credible reference point?
- [ ] Did I choose loss framing only where it fits?
- [ ] Did I keep the consequence concrete and proportional?
- [ ] Did I avoid fear mongering?
- [ ] Does the frame preserve credibility and autonomy?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
