---
name: android-ui-verification-v2
description: "Android UI Verification Skill workflow skill. Use this skill when the user needs Automated end-to-end UI testing and verification on an Android Emulator using ADB and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["android-ui-verification-v2", "android", "verification", "automated", "end-to-end", "testing", "and", "emulator"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Android UI Verification Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/android_ui_verification` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Android UI Verification Skill This skill provides a systematic approach to testing React Native applications on an Android emulator using ADB commands. It allows for autonomous interaction, state verification, and visual regression checking.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 🛠 Prerequisites, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Verifying UI changes in React Native or Native Android apps.
- Autonomous debugging of layout issues or interaction bugs.
- Ensuring feature functionality when manual testing is too slow.
- Capturing automated screenshots for PR documentation.
- Use when the request clearly matches the imported source intent: Automated end-to-end UI testing and verification on an Android Emulator using ADB.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `scripts/verify_ui.sh` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `scripts/verify_ui.sh` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Tap: adb shell input tap <x> <y> (Use the center of the element bounds).
2. Swipe: adb shell input swipe <x1> <y1> <x2> <y2> <duration_ms> (Used for scrolling).
3. Text Input: adb shell input text "<message>" (Note: Limited support for special characters).
4. Key Events: adb shell input keyevent <code_id> (e.g., 66 for Enter).
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: 🚀 Workflow

### 1. Device Calibration
Before interacting, always verify the screen resolution to ensure tap coordinates are accurate.
```bash
adb shell wm size
```
*Note: Layouts are often scaled. Use the physical size returned as the base for coordinate calculations.*

### 2. UI Inspection (State Discovery)
Use the `uiautomator` dump to find the exact bounds of UI elements (buttons, inputs).
```bash
adb shell uiautomator dump /sdcard/view.xml && adb pull /sdcard/view.xml ./artifacts/view.xml
```
Search the `view.xml` for `text`, `content-desc`, or `resource-id`. The `bounds` attribute `[x1,y1][x2,y2]` defines the clickable area.

### 3. Interaction Commands
- **Tap**: `adb shell input tap <x> <y>` (Use the center of the element bounds).
- **Swipe**: `adb shell input swipe <x1> <y1> <x2> <y2> <duration_ms>` (Used for scrolling).
- **Text Input**: `adb shell input text "<message>"` (Note: Limited support for special characters).
- **Key Events**: `adb shell input keyevent <code_id>` (e.g., 66 for Enter).

### 4. Verification & Reporting
#### Visual Verification
Capture a screenshot after interaction to confirm UI changes.
```bash
adb shell screencap -p /sdcard/screen.png && adb pull /sdcard/screen.png ./artifacts/test_result.png
```

#### Analytical Verification
Monitor the JS console logs in real-time to detect errors or log successes.
```bash
adb logcat -d | grep "ReactNativeJS" | tail -n 20
```

#### Cleanup
Always store generated files in the `artifacts/` folder to satisfy project organization rules.

#### Imported: 🛠 Prerequisites

- Android Emulator running.
- `adb` installed and in PATH.
- Application in debug mode for logcat access.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @android-ui-verification-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @android-ui-verification-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @android-ui-verification-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @android-ui-verification-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Wait for Animations: Always add a short sleep (e.g., 1-2s) between interaction and verification.
- Center Taps: Calculate the arithmetic mean of [x1,y1][x2,y2] for the most reliable tap target.
- Log Markers: Use distinct log messages in the code (e.g., ✅ Action Successful) to make grep verification easy.
- Fail Fast: If a uiautomator dump fails or doesn't find the expected text, stop and troubleshoot rather than blind-tapping.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: 💡 Best Practices

- **Wait for Animations**: Always add a short sleep (e.g., 1-2s) between interaction and verification.
- **Center Taps**: Calculate the arithmetic mean of `[x1,y1][x2,y2]` for the most reliable tap target.
- **Log Markers**: Use distinct log messages in the code (e.g., `✅ Action Successful`) to make `grep` verification easy.
- **Fail Fast**: If a `uiautomator dump` fails or doesn't find the expected text, stop and troubleshoot rather than blind-tapping.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/android_ui_verification`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/verify_ui.sh` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [verify_ui.sh](scripts/verify_ui.sh)
- [verify_ui.sh](scripts/verify_ui.sh)

### Imported Reference Notes

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
