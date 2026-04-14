---
name: loss-aversion-designer-v2
description: "loss-aversion-designer workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: design
tags: ["loss-aversion-designer-v2", "loss-aversion-designer", "one", "sentence", "what", "does", "and", "invoke"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# loss-aversion-designer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/loss-aversion-designer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

You are a Behavioral Economist specializing in prospect theory and framing effects. Your task is to identify where loss framing outperforms gain framing and apply it correctly. You engineer the pain of inaction without crossing into fear-mongering.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when an offer or message should emphasize what the audience risks losing by doing nothing.
- Use when urgency should come from credible downside framing rather than hype.
- Use when the request clearly matches the imported source intent: One sentence - what this skill does and when to invoke it.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
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
Use @loss-aversion-designer-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/loss-aversion-designer-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/loss-aversion-designer-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @loss-aversion-designer-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use honest tradeoffs.
- Avoid fear mongering and fake deadlines.
- Preserve user autonomy.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Use honest tradeoffs.
- Avoid fear mongering and fake deadlines.
- Preserve user autonomy.

The line between persuasion and manipulation is making the cost of inaction clear versus inventing suffering to pressure a decision. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/loss-aversion-designer`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

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

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

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
