---
name: swiftui-performance-audit-v2
description: "SwiftUI Performance Audit workflow skill. Use this skill when the user needs Audit SwiftUI performance issues from code review and profiling evidence and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["swiftui-performance-audit-v2", "swiftui-performance-audit", "audit", "swiftui", "performance", "issues", "review", "and"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# SwiftUI Performance Audit

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/swiftui-performance-audit` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SwiftUI Performance Audit

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 1. Intake, 2. Code-First Review, 3. Guide the User to Profile, 4. Analyze and Diagnose, 5. Remediate, Outputs.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user reports slow rendering, janky scrolling, layout thrash, or high CPU in SwiftUI.
- When you need a code-first audit plus Instruments guidance if profiling evidence is required.
- Use when the request clearly matches the imported source intent: Audit SwiftUI performance issues from code review and profiling evidence.
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

1. Classify the symptom: slow rendering, janky scrolling, high CPU, memory growth, hangs, or excessive view updates.
2. If code is available, start with a code-first review using references/code-smells.md.
3. If code is not available, ask for the smallest useful slice: target view, data flow, reproduction steps, and deployment target.
4. If code review is inconclusive or runtime evidence is required, guide the user through profiling with references/profiling-intake.md.
5. Summarize likely causes, evidence, remediation, and validation steps using references/report-template.md.
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview, playbook, and source summary before loading any upstream support files.

### Imported Workflow Notes

#### Imported: Workflow

1. Classify the symptom: slow rendering, janky scrolling, high CPU, memory growth, hangs, or excessive view updates.
2. If code is available, start with a code-first review using `references/code-smells.md`.
3. If code is not available, ask for the smallest useful slice: target view, data flow, reproduction steps, and deployment target.
4. If code review is inconclusive or runtime evidence is required, guide the user through profiling with `references/profiling-intake.md`.
5. Summarize likely causes, evidence, remediation, and validation steps using `references/report-template.md`.

#### Imported: 6. Verify

Ask the user to re-run the same capture and compare with baseline metrics.
Summarize the delta (CPU, frame drops, memory peak) if provided.

#### Imported: 1. Intake

Collect:
- Target view or feature code.
- Symptoms and exact reproduction steps.
- Data flow: `@State`, `@Binding`, environment dependencies, and observable models.
- Whether the issue shows up on device or simulator, and whether it was observed in Debug or Release.

Ask the user to classify the issue if possible:
- CPU spike or battery drain
- Janky scrolling or dropped frames
- High memory or image pressure
- Hangs or unresponsive interactions
- Excessive or unexpectedly broad view updates

For the full profiling intake checklist, read `references/profiling-intake.md`.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @swiftui-performance-audit-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/swiftui-performance-audit-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/swiftui-performance-audit-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @swiftui-performance-audit-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick start

Use this skill to diagnose SwiftUI performance issues from code first, then request profiling evidence when code review alone cannot explain the symptoms.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/swiftui-performance-audit`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/code-smells.md` |
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

#### Imported: References

- Profiling intake and collection checklist: `references/profiling-intake.md`
- Common code smells and remediation patterns: `references/code-smells.md`
- Audit output template: `references/report-template.md`
- Add Apple documentation and WWDC resources under `references/` as they are supplied by the user.
- Optimizing SwiftUI performance with Instruments: `references/optimizing-swiftui-performance-instruments.md`
- Understanding and improving SwiftUI performance: `references/understanding-improving-swiftui-performance.md`
- Understanding hangs in your app: `references/understanding-hangs-in-your-app.md`
- Demystify SwiftUI performance (WWDC23): `references/demystify-swiftui-performance-wwdc23.md`

#### Imported: 2. Code-First Review

Focus on:
- Invalidation storms from broad observation or environment reads.
- Unstable identity in lists and `ForEach`.
- Heavy derived work in `body` or view builders.
- Layout thrash from complex hierarchies, `GeometryReader`, or preference chains.
- Large image decode or resize work on the main thread.
- Animation or transition work applied too broadly.

Use `references/code-smells.md` for the detailed smell catalog and fix guidance.

Provide:
- Likely root causes with code references.
- Suggested fixes and refactors.
- If needed, a minimal repro or instrumentation suggestion.

#### Imported: 3. Guide the User to Profile

If code review does not explain the issue, ask for runtime evidence:
- A trace export or screenshots of the SwiftUI timeline and Time Profiler call tree.
- Device/OS/build configuration.
- The exact interaction being profiled.
- Before/after metrics if the user is comparing a change.

Use `references/profiling-intake.md` for the exact checklist and collection steps.

#### Imported: 4. Analyze and Diagnose

- Map the evidence to the most likely category: invalidation, identity churn, layout thrash, main-thread work, image cost, or animation cost.
- Prioritize problems by impact, not by how easy they are to explain.
- Distinguish code-level suspicion from trace-backed evidence.
- Call out when profiling is still insufficient and what additional evidence would reduce uncertainty.

#### Imported: 5. Remediate

Apply targeted fixes:
- Narrow state scope and reduce broad observation fan-out.
- Stabilize identities for `ForEach` and lists.
- Move heavy work out of `body` into derived state updated from inputs, model-layer precomputation, memoized helpers, or background preprocessing. Use `@State` only for view-owned state, not as an ad hoc cache for arbitrary computation.
- Use `equatable()` only when equality is cheaper than recomputing the subtree and the inputs are truly value-semantic.
- Downsample images before rendering.
- Reduce layout complexity or use fixed sizing where possible.

Use `references/code-smells.md` for examples, Observation-specific fan-out guidance, and remediation patterns.

#### Imported: Outputs

Provide:
- A short metrics table (before/after if available).
- Top issues (ordered by impact).
- Proposed fixes with estimated effort.

Use `references/report-template.md` when formatting the final audit.
