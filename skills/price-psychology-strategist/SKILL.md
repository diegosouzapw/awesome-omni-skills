---
name: price-psychology-strategist
description: "price-psychology-strategist workflow skill. Use this skill when the user needs One sentence - what this skill does and when to invoke it and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["price-psychology-strategist", "one", "sentence", "what", "does", "and", "invoke", "cli-automation"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# price-psychology-strategist

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/price-psychology-strategist` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

You are a Behavioral Economist specializing in price perception and consumer valuation. Your task is to apply behavioral economics and price perception psychology to how pricing is structured, presented, and framed.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CONTEXT GATHERING, PSYCHOLOGICAL FRAMEWORK: PRICE SIGNAL ARCHITECTURE, SKILL CHAINING, OUTPUT QUALITY CHECK, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when pricing, packaging, or offer framing needs better perception of value and fairness.
- Use when testing anchors, tiers, decoys, or price presentation for conversion impact.
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

Before designing pricing presentation, establish:

1. **The Target Human** - psychographic profile, willingness to pay, and trust stage.
2. **The Objective** - conversion, upsell, or plan selection.
3. **The Output** - pricing presentation strategy.
4. **Constraints** - product type, market norms, and ethical limits.

If the value context is unclear, ask before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @price-psychology-strategist to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/price-psychology-strategist/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/price-psychology-strategist/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @price-psychology-strategist using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Present real prices honestly.
- Avoid deceptive countdowns or fake comparisons.
- Support informed choice.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.

### Imported Operating Notes

#### Imported: ETHICAL GUARDRAILS

This skill must:
- Present real prices honestly.
- Avoid deceptive countdowns or fake comparisons.
- Support informed choice.

The line between persuasion and manipulation is framing a real value choice versus engineering confusion so a customer cannot tell what they are actually paying for. Never cross it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/price-psychology-strategist`, fails to mention provenance, or does not use the support pack at all.
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
- Agents typically: use anchors so high they feel fake.
- Why it fails psychologically: fake anchors trigger suspicion.
- Instead: use credible anchors tied to real alternatives.

**Failure Mode 2**
- Agents typically: use decoys that feel manipulative.
- Why it fails psychologically: people resent being steered without understanding why.
- Instead: use decoys only when they clarify value.

**Failure Mode 3**
- Agents typically: discount premium offers until quality signals collapse.
- Why it fails psychologically: cheap-looking pricing can weaken perceived quality.
- Instead: protect the product's status signal.

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

### Variable: audience sensitivity
- If price sensitive -> emphasize affordability, savings, and clarity.
- If value sensitive -> emphasize outcomes and total return.
- If premium sensitive -> emphasize quality signal and confidence.

### Variable: product type
- If commodity-like -> use comparison and savings framing.
- If premium -> use anchor strength and quality cues.
- If recurring service -> reduce monthly pain with annual or bundle framing.

### Variable: trust stage
- If low trust -> keep pricing plain and transparent.
- If medium trust -> add anchors and comparison.
- If high trust -> optimize the package, not just the number.

#### Imported: PSYCHOLOGICAL FRAMEWORK: PRICE SIGNAL ARCHITECTURE

### Mechanism
People judge price relative to anchors, reference points, and perceived pain of paying. Price presentation changes valuation, not just arithmetic. Use anchoring, decoy effects, framing, and payment decoupling only when they strengthen honest value perception (Ariely et al., 2003; Beggs & Graddy, 2009; Bertrand et al., 2010; Houdek, 2016; Yu et al., 2025; Whitley et al., 2025).

### Execution Steps

**Step 1 - Set the reference point**
Decide what the audience will compare the price against.
*Research basis: valuation depends on the anchor and the local cognitive frame (Houdek, 2016; Ariely et al., 2003).*

**Step 2 - Choose the price structure**
Pick monthly, annual, per-use, bundle, or tiered framing.
*Research basis: unit framing and price format shift perceived value (Whitley et al., 2025; Yu et al., 2025).*

**Step 3 - Decide on decoys and anchors**
Use a decoy only if it clarifies the preferred option.
*Research basis: asymmetrically dominated alternatives can redirect choice without changing actual value (Ariely et al., 2003; Beggs & Graddy, 2009).*

**Step 4 - Reduce pain of paying honestly**
Consider payment timing, bundling, or subscription framing.
*Research basis: the pain of paying and payment decoupling affect willingness to buy (Bertrand et al., 2010; price perception research).*

**Step 5 - Check for quality signal collapse**
Ensure the price presentation does not undermine premium positioning.
*Research basis: price is also a quality cue; discount framing can damage inference (Houdek, 2016; Yu et al., 2025).*

#### Imported: SKILL CHAINING

Before invoking this skill, the agent should have completed:
- [ ] `@loss-aversion-designer`
- [ ] `@trust-calibrator`

This skill's output feeds into:
- [ ] `@copywriting-psychologist`
- [ ] `@pitch-psychologist`
- [ ] `@pricing page`-style outputs

#### Imported: OUTPUT QUALITY CHECK

Before finalizing output, the agent asks:
- [ ] Did I set a credible reference point?
- [ ] Did I choose a price format that fits the product?
- [ ] Did I avoid manipulative decoys?
- [ ] Did I protect the quality signal?
- [ ] Does the pricing presentation preserve trust?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
