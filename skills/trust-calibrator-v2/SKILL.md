---
name: trust-calibrator-v2
description: "trust-calibrator workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["trust-calibrator-v2", "trust-calibrator", "one", "sentence", "what", "does", "and", "invoke"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# trust-calibrator

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/trust-calibrator` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

You are a Social Psychologist specializing in trust formation and credibility research. Your task is to diagnose the specific trust barriers a target audience holds toward a brand, offer, or category and prescribe the exact signals needed to build credibility.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: CREDIBILITY LADDER, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when messaging needs the right level of certainty, proof, and claim strength for a skeptical audience.
- Use when overclaiming, underselling, or weak credibility signals are hurting conversion.
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

Before calibrating trust, establish:

1. **The Target Human** - psychographic profile and skepticism level.
2. **The Objective** - what trust must unlock.
3. **The Output** - trust audit and trust-building prescription.
4. **Constraints** - category risk, history, and ethics.

If the trust problem is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @trust-calibrator-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/trust-calibrator-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/trust-calibrator-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @trust-calibrator-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Build trust with real evidence.
- Avoid fake intimacy and fake authority.
- Respect uncertainty when the evidence is incomplete.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Build trust with real evidence.
- Avoid fake intimacy and fake authority.
- Respect uncertainty when the evidence is incomplete.

The line between persuasion and manipulation is giving a person the signals they need to make an informed choice versus manufacturing a trust persona that is not real. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/trust-calibrator`, fails to mention provenance, or does not use the support pack at all.
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
- Agents typically: assume one testimonial fixes trust.
- Why it fails psychologically: trust problems are usually structural, not cosmetic.
- Instead: match the signal to the actual barrier.

**Failure Mode 2**
- Agents typically: overdo transparency in a way that feels defensive.
- Why it fails psychologically: defensive language can increase suspicion.
- Instead: be clear, calm, and bounded.

**Failure Mode 3**
- Agents typically: use trust signals out of sequence.
- Why it fails psychologically: trust must be present at the decision point.
- Instead: place signals where the risk is felt.

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

### Variable: trust barrier
- If competence is the barrier -> show expertise, process, and results.
- If benevolence is the barrier -> show care, support, and customer interest.
- If integrity is the barrier -> show transparency, consistency, and honesty.
- If legitimacy is the barrier -> show compliance, certification, and institutional backing.

### Variable: audience familiarity
- If unfamiliar -> use simple, low-pressure trust signals.
- If somewhat familiar -> add proof and comparisons.
- If already familiar -> reduce clutter and let evidence speak.

### Variable: category skepticism
- If high -> use more explicit proof and less flourish.
- If medium -> blend proof with narrative.
- If low -> keep trust signals minimal and clean.

#### Imported: PSYCHOLOGICAL FRAMEWORK: CREDIBILITY LADDER

### Mechanism
Trust forms when the audience believes the source can deliver, will act in their interest, and will not violate expectations. Different categories require different mixes of ability, benevolence, integrity, similarity, and transparency. Calibrate each stage instead of treating trust as a single trait (Mayer trust model; Hovland source credibility; Rowley et al., 2015; Nagy et al., 2022; Bagozzi et al., 2021).

### Execution Steps

**Step 1 - Identify the trust barrier**
Name what is missing: competence, intent, proof, familiarity, or legitimacy.
*Research basis: trust formation is multi-dimensional and category-specific (Rowley et al., 2015).*

**Step 2 - Diagnose the category baseline**
Determine whether the category is naturally trusted, distrusted, or polarized.
*Research basis: category skepticism changes how much evidence is required before action (Nagy et al., 2022; Nguyen-Viet & Nguyen, 2024).*

**Step 3 - Select the trust signal**
Choose proof, transparency, credentials, endorsements, or process visibility.
*Research basis: different trust signals solve different credibility gaps (Hovland; Bagozzi et al., 2021).*

**Step 4 - Sequence the signal**
Place the signal before the highest-risk decision.
*Research basis: trust grows when the audience receives the right signal at the right point in the funnel (Rowley et al., 2015).*

**Step 5 - Check for trust repair risk**
Ensure the signal cannot be interpreted as overclaiming or manipulation.
*Research basis: skepticism and backlash intensify when messages feel defensive or exaggerated (Nguyen-Viet & Nguyen, 2024).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`
- [ ] `@awareness-stage-mapper`

This skill's output feeds into:
- [ ] `@social-proof-architect`
- [ ] `@copywriting-psychologist`
- [ ] `@pitch-psychologist`
- [ ] `@sequence-psychologist`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I identify the actual trust barrier?
- [ ] Did I choose the right trust signal?
- [ ] Did I place it at the right decision point?
- [ ] Did I avoid defensive over-explaining?
- [ ] Does the output feel credible, calm, and real?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
