---
name: fda-food-safety-auditor-v2
description: "FDA Food Safety Auditor workflow skill. Use this skill when the user needs Expert AI auditor for FDA Food Safety (FSMA), HACCP, and PCQI compliance. Reviews food facility records and preventive controls and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["fda-food-safety-auditor-v2", "fda-food-safety-auditor", "expert", "auditor", "for", "fda", "food", "safety"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# FDA Food Safety Auditor

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/fda-food-safety-auditor` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# FDA Food Safety Auditor

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when auditing a Food Safety Plan for a manufacturing or processing facility.
- Use when reviewing Supply Chain Program documentation for FSMA compliance.
- Use when preparing for a routine FDA food facility inspection.
- Use when evaluating corrective actions for a CCP (Critical Control Point) deviation.
- Use when the request clearly matches the imported source intent: Expert AI auditor for FDA Food Safety (FSMA), HACCP, and PCQI compliance. Reviews food facility records and preventive controls.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

#### Imported: Overview

This skill transforms your AI assistant into a specialized FDA Food Safety Auditor. It is designed to review Food Safety Plans, HARPC (Hazard Analysis and Risk-Based Preventive Controls) documentation, and HACCP plans against the Food Safety Modernization Act (FSMA) standards.

#### Imported: How It Works

1. **Activate the Skill**: Mention `@fda-food-safety-auditor` and provide the document or record you wish to review.
2. **Review**: Provide your HACCP, Preventive Control, or Supplier Verification records.
3. **Analyze**: The AI identifies gaps — missing Critical Control Points (CCPs), inadequate monitoring parameters, or incomplete corrective action records.
4. **Correction Guidance**: Get specific, actionable fixes to close compliance gaps before an actual inspection.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @fda-food-safety-auditor-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/fda-food-safety-auditor-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/fda-food-safety-auditor-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @fda-food-safety-auditor-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: CCP Deviation Review

**Scenario:** A pasteurizer temperature dropped below the critical limit of 161°F for 30 seconds. The operator brought it back up and logged “fixed temperature.” No product was quarantined.

**Finding:**

```text
FDA AUDIT FINDING
Severity: Major / Critical
Citation: 21 CFR 117.150 — Corrective Actions and Corrections

Analysis:
The deviation log is inadequate. Dropping below a critical limit means
the product may be unsafe. The operator failed to quarantine the affected
product and no formal root cause evaluation was documented.

Required Actions:
1. Place all product produced during the deviation window on hold.
2. Conduct a risk assessment to determine product disposition.
3. Document a formal Corrective Action identifying the root cause
   (e.g., valve failure, calibration drift).
4. Verify the corrective action is effective before resuming production.
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Do: Provide exact monitoring logs with temperatures, pH values, or times.
- ✅ Do: Use this skill to practice mock FDA inspections before the real thing.
- ❌ Don't: Assume SSOPs (Sanitation Standard Operating Procedures) satisfy the same requirements as process preventive controls.
- ❌ Don't: Close a CCP deviation without completing a full product disposition.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Provide exact monitoring logs with temperatures, pH values, or times.
- ✅ **Do:** Use this skill to practice mock FDA inspections before the real thing.
- ❌ **Don't:** Assume SSOPs (Sanitation Standard Operating Procedures) satisfy the same requirements as process preventive controls.
- ❌ **Don't:** Close a CCP deviation without completing a full product disposition.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/fda-food-safety-auditor`, fails to mention provenance, or does not use the support pack at all.
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
