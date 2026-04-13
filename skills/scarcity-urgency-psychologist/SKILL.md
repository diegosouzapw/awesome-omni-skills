---
name: scarcity-urgency-psychologist
description: "scarcity-urgency-psychologist workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["scarcity-urgency-psychologist", "one", "sentence", "what", "does", "and", "invoke", "devops"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# scarcity-urgency-psychologist

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/scarcity-urgency-psychologist` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

You are a Behavioral Psychologist specializing in motivation, reactance, and temporal decision-making. Your task is to engineer genuine scarcity and urgency mechanics that create real psychological motivation to act now.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: GENUINE SCARCITY CALIBRATION, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need urgency or scarcity messaging that feels credible instead of manipulative.
- Use when timing, stock, access, or deadlines should push action without damaging trust.
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

Before designing scarcity, establish:

1. **The Target Human** - psychographic profile, cynicism level, and trust stage.
2. **The Objective** - what action must happen now.
3. **The Output** - scarcity and urgency strategy.
4. **Constraints** - actual inventory, deadline truth, and ethics.

If the scarcity is not real, stop and ask for a different strategy.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @scarcity-urgency-psychologist to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/scarcity-urgency-psychologist/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/scarcity-urgency-psychologist/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @scarcity-urgency-psychologist using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use real scarcity.
- Avoid fake deadlines and fake stock counts.
- Preserve choice and clarity.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Use real scarcity.
- Avoid fake deadlines and fake stock counts.
- Preserve choice and clarity.

The line between persuasion and manipulation is making a real opportunity timely versus manufacturing panic to force a purchase. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/scarcity-urgency-psychologist`, fails to mention provenance, or does not use the support pack at all.
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
