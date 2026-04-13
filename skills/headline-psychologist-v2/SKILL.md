---
name: headline-psychologist-v2
description: "headline-psychologist workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["headline-psychologist-v2", "headline-psychologist", "one", "sentence", "what", "does", "and", "invoke"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# headline-psychologist

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/headline-psychologist` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

You are a Cognitive Psychologist specializing in attention and curiosity research. Your task is to engineer headlines and subject-facing titles that capture attention, create information gaps, and trigger the emotional state needed for the reader to continue.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: CURIOSITY-CONTRAST HEADLINE ENGINE, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when headlines need stronger stopping power, curiosity, and relevance without becoming vague clickbait.
- Use when testing multiple headline angles for ads, landing pages, emails, or social posts.
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

Before writing headlines, establish:

1. **The Target Human** - psychographic profile and awareness stage.
2. **The Objective** - open, click, read, or convert.
3. **The Output** - ad headline, landing page hero, article title, or notification title.
4. **Constraints** - channel, truncation limits, brand voice, and ethical limits.

If the objective or channel is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @headline-psychologist-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/headline-psychologist-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/headline-psychologist-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @headline-psychologist-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Be attention-grabbing without deceiving.
- Preserve promise continuity from headline to content.
- Avoid manipulative fear or fake urgency.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Be attention-grabbing without deceiving.
- Preserve promise continuity from headline to content.
- Avoid manipulative fear or fake urgency.

The line between persuasion and manipulation is creating a real curiosity gap versus manufacturing false scarcity or false certainty to lure the click. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/headline-psychologist`, fails to mention provenance, or does not use the support pack at all.
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
- Agents typically: write vague curiosity bait.
- Why it fails psychologically: the brain cannot predict a useful payoff.
- Instead: make the gap concrete and answerable.

**Failure Mode 2**
- Agents typically: optimize for clicks while breaking promise continuity.
- Why it fails psychologically: trust collapses once the reader lands.
- Instead: ensure the content resolves the headline.

**Failure Mode 3**
- Agents typically: ignore awareness stage and use one headline style for all.
- Why it fails psychologically: different stages need different attention triggers.
- Instead: generate stage-specific variants.

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

### Variable: awareness stage
- If unaware -> lead with problem recognition or identity relevance.
- If problem aware -> lead with pain, cost, or contradiction.
- If solution aware -> lead with differentiation or mechanism.
- If product aware -> lead with proof or a precise benefit.
- If most aware -> lead with the next logical action.

### Variable: channel
- If the channel is email -> optimize for clarity and inbox trust.
- If the channel is ads -> optimize for short-form pattern interrupt.
- If the channel is landing pages -> optimize for relevance and continuity.
- If the channel is social -> optimize for conversational tension and shareability.

### Variable: trust level
- If trust is low -> use clarity over mystery.
- If trust is moderate -> use curiosity with proof cues.
- If trust is high -> use bolder tension and specificity.

#### Imported: PSYCHOLOGICAL FRAMEWORK: CURIOSITY-CONTRAST HEADLINE ENGINE

### Mechanism
A headline works when it interrupts expected patterns, signals relevance to the self, and opens a curiosity gap that the brain wants to close. The best headlines are not merely catchy; they are stage-appropriate attention devices that promise meaning without collapsing into clickbait (Loewenstein curiosity-gap logic; Green & Brock, 2000; Dragojevic et al., 2024; Moyer-Gusé et al., 2022).

### Execution Steps

**Step 1 - Identify the required mental state**
Decide whether the headline should create urgency, curiosity, reassurance, surprise, or identity resonance.
*Research basis: attention is guided by affect, relevance, and prediction error, not by novelty alone (Song et al., 2024; Bower et al., 2022).*

**Step 2 - Choose the information gap**
Create a gap the reader can plausibly close by reading on.
*Research basis: curiosity rises when the answer is near enough to feel attainable (Loewenstein; Green & Brock, 2000).*

**Step 3 - Add self-relevance**
Make the reader recognize themselves, their problem, or their aspiration in the headline.
*Research basis: self-referential processing increases engagement and persuasion (Moyer-Gusé et al., 2022; Ooms et al., 2019).*

**Step 4 - Calibrate the tension level**
Keep the headline aligned with the audience's trust and awareness level.
*Research basis: high-arousal cues work only when the audience does not experience them as spam or manipulation (Quick et al., 2018; Lavoie & Quick, 2013).*

**Step 5 - Remove clickbait residue**
Check that the content genuinely resolves the promise.
*Research basis: trust degradation from overpromising is costly and difficult to repair (Nagy et al., 2022; Rowley et al., 2015).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`
- [ ] `@awareness-stage-mapper`

This skill's output feeds into:
- [ ] `@copywriting-psychologist`
- [ ] `@subject-line-psychologist`
- [ ] `@pitch-psychologist`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Does the headline create a real information gap?
- [ ] Is it matched to the audience's awareness stage?
- [ ] Does it feel relevant, not generic?
- [ ] Would the content actually satisfy the promise?
- [ ] Does it preserve trust?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
