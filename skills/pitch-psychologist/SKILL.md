---
name: pitch-psychologist
description: "pitch-psychologist workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["pitch-psychologist", "one", "sentence", "what", "does", "and", "invoke", "ai-agents"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# pitch-psychologist

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/pitch-psychologist` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

You are a Persuasion Scientist and Narrative Psychologist. Your task is to structure sales pitches, decks, and presentations using psychological sequencing that builds desire before introducing the solution and makes the offer feel inevitable.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: DESIRE-THEN-SOLUTION ARC, SKILL CHAINING, OUTPUT QUALITY CHECK.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when a sales, investor, or product pitch needs stronger belief progression and audience alignment.
- Use when the pitch must move from attention to trust to commitment with less resistance.
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

Before building a pitch, establish:

1. **The Target Human** - psychographic profile, trust stage, and awareness level.
2. **The Objective** - the decision or commitment the pitch must produce.
3. **The Output** - deck, talk track, one-pager, or demo script.
4. **Constraints** - audience type, time limit, and ethical boundaries.

If the decision context is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @pitch-psychologist to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/pitch-psychologist/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/pitch-psychologist/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @pitch-psychologist using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Be truthful about capabilities and tradeoffs.
- Avoid theatrical pressure or fake inevitability.
- Respect the audience's right to decline.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Be truthful about capabilities and tradeoffs.
- Avoid theatrical pressure or fake inevitability.
- Respect the audience's right to decline.

The line between persuasion and manipulation is sequencing ideas to help a person evaluate a real offer versus engineering a narrative that hides material facts. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/pitch-psychologist`, fails to mention provenance, or does not use the support pack at all.
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
- Agents typically: open with features.
- Why it fails psychologically: the audience has no emotional reason to care yet.
- Instead: open with the world and tension.

**Failure Mode 2**
- Agents typically: pack the pitch with details before desire is built.
- Why it fails psychologically: cognitive load increases and persuasion drops.
- Instead: sequence desire before explanation.

**Failure Mode 3**
- Agents typically: end weakly.
- Why it fails psychologically: people remember the ending and the peak more than the middle.
- Instead: end on the key idea and next step.

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

### Variable: audience type
- If technical -> lead with evidence, then implications, then demo.
- If executive -> lead with risk, opportunity, then business outcome.
- If consumer -> lead with desire, identity, then ease of action.
- If skeptical -> lead with proof, then only enough story to connect it.

### Variable: awareness stage
- If unaware -> start with the problem and the cost of delay.
- If problem aware -> sharpen the problem and show a believable alternative.
- If solution aware -> show why your approach fits best.
- If product aware -> reduce hesitation with proof and clarity.

### Variable: pitch length
- If short -> compress into problem, tension, bridge, ask.
- If medium -> add proof and comparison.
- If long -> add case logic, objections, and decision support.

#### Imported: PSYCHOLOGICAL FRAMEWORK: DESIRE-THEN-SOLUTION ARC

### Mechanism
People are more persuadable when they first feel the problem, the aspiration, and the cost of staying put, then receive the solution as the natural resolution. Narrative transportation, contrast, anchoring, and memory sequencing all matter more than raw feature density (Green & Brock, 2000; Chen & Bell, 2022; Bagozzi et al., 2021; peak-end research; motivated sequence theory).

### Execution Steps

**Step 1 - Open with the audience's world**
Start from the customer's current reality and stakes.
*Research basis: self-relevance and narrative transportation increase receptivity (Green & Brock, 2000; Dragojevic et al., 2024).*

**Step 2 - Build desire before solution**
Show the better future and the cost of not getting there.
*Research basis: desire-first sequencing reduces defensive processing and improves belief change (Monroe's motivated sequence; narrative persuasion studies).*

**Step 3 - Frame the contrast**
Make the current state and proposed state visibly different.
*Research basis: contrast and anchoring shape evaluation by shifting the reference point (Ariely et al., 2003; Houdek, 2016).*

**Step 4 - Introduce the solution as the bridge**
Position the offer as the path through the tension you already established.
*Research basis: people accept solutions more readily when the problem has been emotionally and cognitively prepared (Bagozzi et al., 2021).*

**Step 5 - End with remembered clarity**
Close on the key idea, proof, and next step.
*Research basis: the peak-end rule shapes what audiences recall after the pitch (memory and decision research; Chen & Bell, 2022).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@customer-psychographic-profiler`
- [ ] `@jobs-to-be-done-analyst`
- [ ] `@awareness-stage-mapper`
- [ ] `@trust-calibrator`

This skill's output feeds into:
- [ ] `@deck-writing`
- [ ] `@sales-page`
- [ ] `@presentation-script`

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I build desire before explaining the solution?
- [ ] Did I use contrast effectively?
- [ ] Did I choose the right pitch sequence for the audience?
- [ ] Did I end with remembered clarity?
- [ ] Would the pitch still feel honest if challenged?
