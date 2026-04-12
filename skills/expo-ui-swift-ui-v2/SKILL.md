---
name: expo-ui-swift-ui-v2
description: "expo-ui-swift-ui workflow skill. Use this skill when the user needs expo-ui-swift-ui and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["expo-ui-swift-ui-v2", "expo-ui-swift-ui", "frontend", "agents", "assets", "examples", "references", "scripts"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# expo-ui-swift-ui

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/expo-ui-swift-ui` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

--- name: expo-ui-swift-ui description: @expo/ui/swift-ui package lets you use SwiftUI Views and modifiers in your app. --- > The instructions in this skill apply to SDK 55 only. For other SDK versions, refer to the Expo UI SwiftUI docs for that version for the most accurate information.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to build iOS-native UI in Expo using @expo/ui/swift-ui.
- The task involves selecting SwiftUI views or modifiers, wrapping trees in Host, or embedding React Native components with RNHostView.
- You are targeting Expo SDK 55 behavior for SwiftUI integration and extension guidance.
- Use when the request clearly matches the imported source intent: expo-ui-swift-ui.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

1. Expo UI's API mirrors SwiftUI's API. Use SwiftUI knowledge to decide which components or modifiers to use.
2. Components are imported from @expo/ui/swift-ui, modifiers from @expo/ui/swift-ui/modifiers.
3. When about to use a component, fetch its docs to confirm the API - https://docs.expo.dev/versions/v55.0.0/sdk/ui/swift-ui/{component-name}/index.md
4. When unsure about a modifier's API, refer to the docs - https://docs.expo.dev/versions/v55.0.0/sdk/ui/swift-ui/modifiers/index.md
5. Every SwiftUI tree must be wrapped in Host.
6. RNHostView is specifically for embedding RN components inside a SwiftUI tree. Example:
7. If a required modifier or View is missing in Expo UI, it can be extended via a local Expo module. See: https://docs.expo.dev/guides/expo-ui-swift-ui/extending/index.md. Confirm with the user before extending.

### Imported Workflow Notes

#### Imported: Installation

```bash
npx expo install @expo/ui
```

A native rebuild is required after installation (`npx expo run:ios`).

#### Imported: Instructions

- Expo UI's API mirrors SwiftUI's API. Use SwiftUI knowledge to decide which components or modifiers to use.
- Components are imported from `@expo/ui/swift-ui`, modifiers from `@expo/ui/swift-ui/modifiers`.
- When about to use a component, fetch its docs to confirm the API - https://docs.expo.dev/versions/v55.0.0/sdk/ui/swift-ui/{component-name}/index.md
- When unsure about a modifier's API, refer to the docs - https://docs.expo.dev/versions/v55.0.0/sdk/ui/swift-ui/modifiers/index.md
- Every SwiftUI tree must be wrapped in `Host`.
- `RNHostView` is specifically for embedding RN components inside a SwiftUI tree. Example:

```jsx
import { Host, VStack, RNHostView } from "@expo-ui/swift-ui";
import { Pressable } from "react-native";

<Host matchContents>
  <VStack>
    <RNHostView matchContents>
      // Here, `Pressable` is an RN component so it is wrapped in `RNHostView`.
      <Pressable />
    </RNHostView>
  </VStack>
</Host>;
```

- If a required modifier or View is missing in Expo UI, it can be extended via a local Expo module. See: https://docs.expo.dev/guides/expo-ui-swift-ui/extending/index.md. Confirm with the user before extending.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @expo-ui-swift-ui-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/expo-ui-swift-ui-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/expo-ui-swift-ui-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @expo-ui-swift-ui-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/expo-ui-swift-ui`, fails to mention provenance, or does not use the support pack at all.
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
