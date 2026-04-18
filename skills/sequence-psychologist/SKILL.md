---
name: sequence-psychologist
description: "sequence-psychologist workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["sequence-psychologist", "one", "sentence", "what", "does", "and", "invoke", "ai-agents"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# sequence-psychologist

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/sequence-psychologist` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

You are a Behavioral Psychologist specializing in persuasion sequencing and relationship psychology. Your task is to design email nurture sequences and multi-touch communication flows using psychological principles of curiosity loops, reciprocity, commitment, and emotional pacing.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: COMMITMENT-PACING SEQUENCE, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when an email, onboarding, or sales sequence needs a better step-by-step persuasion arc.
- Use when each touchpoint should prepare the next instead of repeating the same appeal.
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

Before designing a sequence, establish:

1. **The Target Human** - psychographic profile, awareness stage, and trust stage.
2. **The Objective** - the conversion or relationship milestone.
3. **The Output** - email sequence architecture or nurture flow.
4. **Constraints** - channel, cadence, and ethical limits.

If the sequence goal is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @sequence-psychologist to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @sequence-psychologist against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @sequence-psychologist for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @sequence-psychologist using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Respect consent and unsubscribe norms.
- Avoid manipulative spam tactics.
- Preserve autonomy throughout the sequence.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Respect consent and unsubscribe norms.
- Avoid manipulative spam tactics.
- Preserve autonomy throughout the sequence.

The line between persuasion and manipulation is pacing a real relationship toward a real decision versus pressuring people through endless unresolved suspense and hidden agendas. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/sequence-psychologist`, fails to mention provenance, or does not use any copied source files at all.
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
- Agents typically: send sales-only emails.
- Why it fails psychologically: the sequence feels extractive.
- Instead: give value before asking.

**Failure Mode 2**
- Agents typically: make every email try to close.
- Why it fails psychologically: constant pressure produces fatigue.
- Instead: assign one emotional job per email.

**Failure Mode 3**
- Agents typically: let open loops drag on too long.
- Why it fails psychologically: curiosity turns into annoyance.
- Instead: resolve the loop on schedule.

## Related Skills

- `@aws-compliance-checker` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@aws-iam-best-practices` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@aws-security-audit` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@satori` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### Variable: sequence length
- If short -> use a compact 3-5 email arc.
- If medium -> use education, proof, objection handling, then ask.
- If long -> use a staged relationship arc with repeated value delivery.

### Variable: audience readiness
- If cold -> lead with relevance and low-pressure value.
- If warm -> blend proof with identity and urgency.
- If hot -> move quickly to the decision.

### Variable: trust stage
- If low -> keep asks small and proof high.
- If moderate -> alternate value and ask.
- If high -> compress and simplify.

#### Imported: PSYCHOLOGICAL FRAMEWORK: COMMITMENT-PACING SEQUENCE

### Mechanism
People move when messages create a manageable emotional arc: curiosity, recognition, trust, small commitments, then a larger ask. Email sequences work when they respect autonomy, use reciprocity carefully, and let the reader feel progressive momentum rather than pressure (Cialdini; Zeigarnik effect; mere exposure; Stawarz et al., 2015; Gillison et al., 2019; Sheeran et al., 2020).

### Execution Steps

**Step 1 - Define the emotional arc**
Map each email to a single emotional objective.
*Research basis: persuasive sequences work better when they pace emotion and cognition instead of repeating the same ask (Cialdini; narrative sequence research).*

**Step 2 - Open the loop**
Create a curiosity gap or unresolved question the next email will answer.
*Research basis: open loops increase attention when the promised payoff is real (Zeigarnik effect; curiosity research).*

**Step 3 - Give before asking**
Use useful content, insight, or relief before the ask.
*Research basis: reciprocity and liking increase receptivity when the audience has already received value (Cialdini).*

**Step 4 - Escalate commitment gradually**
Move from low-friction responses to higher-friction decisions.
*Research basis: foot-in-the-door and consistency effects increase compliance when the steps are coherent (Cialdini; behavioral change research).*

**Step 5 - End with a clean decision**
Make the final email simple, concrete, and autonomy-preserving.
*Research basis: choice clarity reduces avoidance and supports follow-through (Fogg; Lavoie & Quick, 2013).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`
- [ ] `@awareness-stage-mapper`
- [ ] `@objection-preemptor`

This skill's output feeds into:
- [ ] `@subject-line-psychologist`
- [ ] `@copywriting-psychologist`
- [ ] `@pitch-psychologist`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I assign one emotional job per email?
- [ ] Did I pace commitment gradually?
- [ ] Did I give value before asking?
- [ ] Did I resolve open loops on time?
- [ ] Does the sequence feel respectful and useful?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
