---
name: macos-menubar-tuist-app
description: "macos-menubar-tuist-app workflow skill. Use this skill when the user needs Build, refactor, or review SwiftUI macOS menubar apps that use Tuist and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["macos-menubar-tuist-app", "build", "refactor", "review", "swiftui", "macos", "menubar", "apps"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# macos-menubar-tuist-app

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/macos-menubar-tuist-app` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# macos-menubar-tuist-app Build and maintain macOS menubar apps with a Tuist-first workflow and stable launch scripts. Preserve strict architecture boundaries so networking, state, and UI remain testable and predictable.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Completion Checklist, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When working on LSUIElement menubar utilities built with Tuist and SwiftUI.
- When you need Tuist manifests, launch scripts, or architecture guidance for a menubar app.
- Project.swift: app target, settings, resources, Info.plist keys
- Sources/Model.swift: API/domain models and decoding
- Sources/Client.swift: requests, response mapping, transport concerns
- Sources/Store.swift: observable state, refresh policy, filtering, caching

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

1. Confirm Tuist ownership
2. Verify Tuist.swift and Project.swift (or workspace manifests) exist.
3. Read existing run scripts before changing launch behavior.
4. Probe backend behavior before coding assumptions
5. Use curl to verify endpoint shape, auth requirements, and pagination behavior.
6. If endpoint ignores limit/page, implement full-list handling with local trimming in the store.
7. Implement layers from bottom to top

### Imported Workflow Notes

#### Imported: Workflow

1. Confirm Tuist ownership
- Verify `Tuist.swift` and `Project.swift` (or workspace manifests) exist.
- Read existing run scripts before changing launch behavior.

2. Probe backend behavior before coding assumptions
- Use `curl` to verify endpoint shape, auth requirements, and pagination behavior.
- If endpoint ignores `limit/page`, implement full-list handling with local trimming in the store.

3. Implement layers from bottom to top
- Define/adjust models first.
- Add or update client request/decoding logic.
- Update store refresh, filtering, and cache policy.
- Wire views last.

4. Keep app wiring minimal
- Keep app entry focused on scene/menu wiring and dependency injection.
- Avoid embedding business logic in `App` or menu scene declarations.

5. Standardize launch ergonomics
- Ensure run script restarts an existing instance before relaunching.
- Ensure run script does not open Xcode as a side effect.
- Use `tuist generate --no-open` when generation is required.
- When the run script builds the generated project, prefer `TUIST_SKIP_UPDATE_CHECK=1 tuist xcodebuild build ...` instead of invoking raw `xcodebuild` directly.

#### Imported: Completion Checklist

- Preserve menubar-only behavior unless explicitly changed.
- Keep network and state logic out of SwiftUI view bodies.
- Keep Tuist manifests and run scripts aligned with actual build/run flow.
- Run the validation matrix for touched areas.
- Report concrete commands run and outcomes.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @macos-menubar-tuist-app to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/macos-menubar-tuist-app/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/macos-menubar-tuist-app/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @macos-menubar-tuist-app using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the app menubar-only unless explicitly told otherwise. Use LSUIElement = true by default.
- Keep transport and decoding logic outside views. Do not call networking from SwiftUI view bodies.
- Keep state transitions in a store layer (@Observable or equivalent), not in row/view presentation code.
- Keep model decoding resilient to API drift: optional fields, safe fallbacks, and defensive parsing.
- Treat Tuist manifests as the source of truth. Do not rely on hand-edited generated Xcode artifacts.
- Prefer script-based launch for local iteration when tuist run is unreliable for macOS target/device resolution.
- Prefer tuist xcodebuild build over raw xcodebuild in local run scripts when building generated projects.

### Imported Operating Notes

#### Imported: Core Rules

- Keep the app menubar-only unless explicitly told otherwise. Use `LSUIElement = true` by default.
- Keep transport and decoding logic outside views. Do not call networking from SwiftUI view bodies.
- Keep state transitions in a store layer (`@Observable` or equivalent), not in row/view presentation code.
- Keep model decoding resilient to API drift: optional fields, safe fallbacks, and defensive parsing.
- Treat Tuist manifests as the source of truth. Do not rely on hand-edited generated Xcode artifacts.
- Prefer script-based launch for local iteration when `tuist run` is unreliable for macOS target/device resolution.
- Prefer `tuist xcodebuild build` over raw `xcodebuild` in local run scripts when building generated projects.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/macos-menubar-tuist-app`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Failure Patterns and Fix Direction

- `tuist run` cannot resolve the macOS destination:
Use run/stop scripts as canonical local run path.

- Menu UI is laggy or inconsistent after refresh:
Move derived state and filtering into the store; keep views render-only.

- API payload changes break decode:
Relax model decoding with optional fields and defaults, then surface missing data safely in UI.

- Feature asks for quick UI patch:
Trace root cause in model/client/store before changing row/menu presentation.

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

#### Imported: Validation Matrix

Run validations after edits:

```bash
TUIST_SKIP_UPDATE_CHECK=1 tuist xcodebuild build -scheme <TargetName> -configuration Debug
```

If launch workflow changed:

```bash
./run-menubar.sh
```

If shell scripts changed:

```bash
bash -n run-menubar.sh
bash -n stop-menubar.sh
./run-menubar.sh
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
