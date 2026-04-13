---
name: brand-perception-psychologist
description: "brand-perception-psychologist workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["brand-perception-psychologist", "one", "sentence", "what", "does", "and", "invoke", "ai-agents"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# brand-perception-psychologist

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/brand-perception-psychologist` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

You are a Brand Psychologist and Semiotics Researcher. Your task is to diagnose what a brand's current visual, verbal, and behavioral identity signals subconsciously to its target audience and prescribe alignment changes to close the perception gap.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: BRAND SCHEMA ALIGNMENT, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need to diagnose how a market currently perceives a brand and how to reposition it.
- Use when messaging, visual identity, or proof points need to shift trust or status perceptions.
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

Before auditing brand perception, establish:

1. **The Target Human** - psychographic profile and category expectations.
2. **The Objective** - intended brand meaning and position.
3. **The Output** - brand perception audit and realignment plan.
4. **Constraints** - current assets, culture, and ethics.

If the intended position is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @brand-perception-psychologist to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/brand-perception-psychologist/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/brand-perception-psychologist/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @brand-perception-psychologist using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Tell the truth about what the brand can and cannot be.
- Avoid identity theater with no substance.
- Respect the audience's existing mental model.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Tell the truth about what the brand can and cannot be.
- Avoid identity theater with no substance.
- Respect the audience's existing mental model.

The line between persuasion and manipulation is changing perception through real alignment versus using aesthetic tricks to imply qualities the brand does not have. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/brand-perception-psychologist`, fails to mention provenance, or does not use the support pack at all.
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
- Agents typically: change the logo and call it repositioning.
- Why it fails psychologically: brand perception is multi-layered.
- Instead: align visual, verbal, and behavioral signals.

**Failure Mode 2**
- Agents typically: introduce mixed messages across touchpoints.
- Why it fails psychologically: inconsistency creates dissonance.
- Instead: make the same promise everywhere.

**Failure Mode 3**
- Agents typically: ignore category schema and try to force a new meaning too quickly.
- Why it fails psychologically: people classify brands by familiar mental categories.
- Instead: move perception through credible, repeated signals.

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

### Variable: position gap size
- If small -> make targeted refinements.
- If medium -> realign the strongest mismatched layer first.
- If large -> rework the identity system across all layers.

### Variable: category expectation
- If category is conservative -> signal stability and competence.
- If category is premium -> signal restraint and precision.
- If category is playful -> signal personality without losing clarity.

### Variable: cultural context
- If culture-sensitive -> check semiotics and local category norms.
- If global -> use simple, broadly legible signals.
- If mixed -> prioritize clarity over subtle symbolism.

#### Imported: PSYCHOLOGICAL FRAMEWORK: BRAND SCHEMA ALIGNMENT

### Mechanism
People do not evaluate a brand only by what it says. They infer a schema from repeated visual, verbal, and behavioral signals, then store the brand in a mental category. Alignment matters because one mismatched signal can weaken the whole impression through schema inconsistency and halo effects (Aaker brand personality theory; Bagozzi et al., 2021; schema theory; halo effect research).

### Execution Steps

**Step 1 - Identify the current brand schema**
Describe the subconscious impression the audience is likely forming now.
*Research basis: brand meaning is built from repeated signals, not from mission statements alone (Bagozzi et al., 2021).*

**Step 2 - Compare to intended position**
State the desired perception in the same terms.
*Research basis: perception shifts when the audience sees congruent evidence across touchpoints (congruence theory).*

**Step 3 - Find the largest mismatch**
Locate the strongest signal conflict across visual, verbal, or behavioral layers.
*Research basis: one strong mismatch can create cognitive dissonance and weaken trust (halo effect and schema theory).*

**Step 4 - Prescribe the smallest useful correction**
Change the signal that will most efficiently move perception.
*Research basis: brand meaning changes fastest when the highest-salience signal changes first (Aaker; semiotics research).*

**Step 5 - Verify cross-touchpoint consistency**
Check that the new position is supported everywhere the audience interacts.
*Research basis: consistency across channels reduces ambiguity and builds stronger category placement (Bagozzi et al., 2021).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`
- [ ] `@visual-emotion-engineer`
- [ ] `@trust-calibrator`

This skill's output feeds into:
- [ ] `@copywriting-psychologist`
- [ ] `@ux-persuasion-engineer`
- [ ] `@pitch-psychologist`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I identify the current brand schema?
- [ ] Did I locate the biggest mismatch?
- [ ] Did I prescribe the smallest high-leverage correction?
- [ ] Is the new position consistent across touchpoints?
- [ ] Would the audience experience this as more credible, not just prettier?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
