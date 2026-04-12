---
name: skill-writer-v2
description: "Skill Writer workflow skill. Use this skill when the user needs Create and improve agent skills following the Agent Skills specification. Use when asked to create, write, or update skills and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["skill-writer-v2", "skill-writer", "create", "and", "improve", "following", "the", "specification"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Skill Writer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/skill-writer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Skill Writer Use this as the single canonical workflow for skill creation and improvement. Primary success condition: maximize high-value input coverage before authoring so the resulting skill has minimal blind spots. Load only the path(s) required for the task: | Task | Read | |------|------| | Set skill class and required dimensions | references/mode-selection.md | | Apply writing constraints for depth vs concision | references/design-principles.md | | Select structure pattern for this skill | references/skill-patterns.md | | Select workflow orchestration pattern for process-heavy skills | references/workflow-patterns.md | | Select output format pattern for deterministic quality | references/output-patterns.md | | Choose workflow path and required outputs | references/mode-selection.md | | Load representative synthesis examples by skill type | references/examples/*.md | | Synthesize external/local sources with depth gates | references/synthesis-path.md | | Author or update SKILL.md and supporting files | references/authoring-path.md | | Optimize skill description and trigger precision | references/description-optimization.md | | Iterate using positive/negative/fix examples | references/iteration-path.md | | Evaluate behavior and compare baseline vs with-skill (opt-in quantitative) | references/evaluation-path.md | | Register and validate skill changes | references/registration-validation.md |

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Output format.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Collect and score relevant sources with provenance.
- Apply trust and safety rules when ingesting external content.
- Produce source-backed decisions and coverage/gap status.
- Load one or more profiles from references/examples/*.md when the skill is hybrid.
- Enforce baseline source pack for skill-authoring workflows.
- Enforce depth gates before moving to authoring.

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

1. Resolve target skill path and intended operation (create, update, synthesize, iterate).
2. Read references/mode-selection.md and select the required path(s).
3. Classify the skill (workflow-process, integration-documentation, security-review, skill-authoring, generic).
4. Ask one direct question if class or depth requirements are ambiguous; otherwise state explicit assumptions.
5. Write or update SKILL.md in imperative voice with trigger-rich description.
6. Create focused reference files and scripts only when justified.
7. Follow references/skill-patterns.md, references/workflow-patterns.md, and

### Imported Workflow Notes

#### Imported: Step 1: Resolve target and path

1. Resolve target skill path and intended operation (`create`, `update`, `synthesize`, `iterate`).
2. Read `references/mode-selection.md` and select the required path(s).
3. Classify the skill (`workflow-process`, `integration-documentation`, `security-review`, `skill-authoring`, `generic`).
4. Ask one direct question if class or depth requirements are ambiguous; otherwise state explicit assumptions.

#### Imported: Step 4: Author or update skill artifacts

Read `references/authoring-path.md`.

1. Write or update `SKILL.md` in imperative voice with trigger-rich description.
2. Create focused reference files and scripts only when justified.
3. Follow `references/skill-patterns.md`, `references/workflow-patterns.md`, and
   `references/output-patterns.md` for structure and output determinism.
4. For authoring/generator skills, include transformed examples in references:
   - happy-path
   - secure/robust variant
   - anti-pattern + corrected version

#### Imported: Step 5: Optimize description quality

Read `references/description-optimization.md`.

1. Validate should-trigger and should-not-trigger query sets.
2. Reduce false positives and false negatives with targeted description edits.
3. Keep trigger language generic across Codex and Claude.

#### Imported: Step 6: Evaluate outcomes

Read `references/evaluation-path.md`.

1. Run a lightweight qualitative check by default (recommended).
2. For integration/documentation and skill-authoring skills, include the concise depth rubric from `references/evaluation-path.md`.
3. Run deeper eval playbook and quantitative baseline-vs-with-skill only when requested or risk warrants it.
4. Record outcomes and unresolved risks.

#### Imported: Step 7: Register and validate

Read `references/registration-validation.md`.

1. Apply repository registration steps.
2. Run quick validation with strict depth gates.
3. Reject shallow outputs that fail depth gates or required artifact checks.

#### Imported: Output format

Return:

1. `Summary`
2. `Changes Made`
3. `Validation Results`
4. `Open Gaps`

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @skill-writer-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/skill-writer-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/skill-writer-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @skill-writer-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/skill-writer`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



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
