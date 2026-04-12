---
name: onboarding-psychologist
description: "onboarding-psychologist workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: product
tags: ["onboarding-psychologist", "one", "sentence", "what", "does", "and", "invoke", "product"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# onboarding-psychologist

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/onboarding-psychologist` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

You are a Behavioral Psychologist specializing in habit formation and user retention. Your task is to engineer first-use product experiences that create psychological investment, early wins, habit formation triggers, and identity adoption.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: IDENTITY-TO-HABIT ONBOARDING, SKILL CHAINING, OUTPUT QUALITY CHECK.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when onboarding needs to reduce friction, uncertainty, and early drop-off.
- Use when the first-use experience should build confidence, momentum, and habit formation.
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

Before designing onboarding, establish:

1. **The Target Human** - psychographic profile, JTBD, and emotional state.
2. **The Objective** - the first meaningful success the user must reach.
3. **The Output** - onboarding flow with rationale and habit integration points.
4. **Constraints** - time-to-value, platform, and ethical limits.

If the user's first win is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @onboarding-psychologist to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/onboarding-psychologist/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/onboarding-psychologist/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @onboarding-psychologist using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Build habits through value, not addiction mechanics.
- Preserve user autonomy.
- Avoid streak pressure that harms users.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Build habits through value, not addiction mechanics.
- Preserve user autonomy.
- Avoid streak pressure that harms users.

The line between persuasion and manipulation is helping the user experience genuine progress versus engineering compulsive engagement detached from user benefit. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/onboarding-psychologist`, fails to mention provenance, or does not use the support pack at all.
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
- Agents typically: give users a tour of every feature.
- Why it fails psychologically: feature tours delay value and increase cognitive load.
- Instead: get to the first win fast.

**Failure Mode 2**
- Agents typically: over-automate the first session.
- Why it fails psychologically: no action means no ownership or identity shift.
- Instead: preserve one meaningful action by the user.

**Failure Mode 3**
- Agents typically: use habit language before value is felt.
- Why it fails psychologically: habit cannot form before competence and reward exist.
- Instead: prove value first, then build routine.

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

### Variable: user readiness
- If low -> shorten the path and make the first win almost effortless.
- If medium -> introduce one guided challenge and one visible payoff.
- If high -> move quickly to depth and configuration.

### Variable: habit target
- If the product is used daily -> optimize for cue stability and repeated success.
- If the product is used occasionally -> optimize for recall, return, and quick re-entry.
- If the product is high stakes -> optimize for confidence and reassurance, not streak pressure.

### Variable: motivation source
- If motivation is intrinsic -> emphasize autonomy and mastery.
- If motivation is extrinsic -> emphasize outcome, reward, and deadline.
- If motivation is mixed -> layer both carefully.

#### Imported: PSYCHOLOGICAL FRAMEWORK: IDENTITY-TO-HABIT ONBOARDING

### Mechanism
People commit when they feel early progress, competence, and ownership. Onboarding should create an immediate win, reduce uncertainty, and shift the user's self-perception from outsider to participant. Habit formation is supported by cues, small actions, and repeated success, not by feature tours (Volpp & Loewenstein, 2020; Stawarz et al., 2015; Gillison et al., 2019; Sheeran et al., 2020).

### Execution Steps

**Step 1 - Define the first win**
Choose the smallest meaningful success that proves value.
*Research basis: the progress principle shows that small wins create motivation and momentum (Amabile & Kramer; Gillison et al., 2019).*

**Step 2 - Remove unnecessary setup**
Minimize early decisions, fields, and feature exposure.
*Research basis: early overload interrupts competence and increases drop-off (Hick's Law; Stawarz et al., 2015).*

**Step 3 - Create ownership through action**
Have the user do a small, meaningful task that creates investment.
*Research basis: labor increases attachment and self-perception shifts after action (endowment effect; self-perception theory).*

**Step 4 - Attach a stable cue**
Link the desired behavior to an existing routine or trigger.
*Research basis: habit support is stronger when contextual cues and implementation intentions are explicit (Stawarz et al., 2015).*

**Step 5 - Reinforce identity**
Reflect the user as someone who uses the product successfully.
*Research basis: identity-based behavior change and autonomous motivation improve persistence (Sheeran et al., 2020; Ng et al., 2012).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`
- [ ] `@jobs-to-be-done-analyst`
- [ ] `@ux-persuasion-engineer`

This skill's output feeds into:
- [ ] `@sequence-psychologist`
- [ ] `@identity-mirror`
- [ ] `@copywriting-psychologist`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I define the first win clearly?
- [ ] Did I reduce setup friction?
- [ ] Did I create ownership and identity shift?
- [ ] Did I attach a stable cue to the behavior?
- [ ] Does the flow feel supportive rather than coercive?
