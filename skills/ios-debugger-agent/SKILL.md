---
name: ios-debugger-agent
description: "iOS Debugger Agent workflow skill. Use this skill when the user needs Debug the current iOS project on a booted simulator with XcodeBuildMCP and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["ios-debugger-agent", "debug", "the", "ios", "project", "booted", "simulator", "xcodebuildmcp"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# iOS Debugger Agent

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/ios-debugger-agent` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# iOS Debugger Agent

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: UI Interaction & Debugging, Logs & Console Output, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user asks to run, debug, or inspect an iOS app on a simulator.
- When you need simulator UI interaction, screenshots, or runtime logs via XcodeBuildMCP.
- Use when the request clearly matches the imported source intent: Debug the current iOS project on a booted simulator with XcodeBuildMCP.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `agents/openai.yaml` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `agents/openai.yaml` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Call mcp_XcodeBuildMCPlistsims and select the simulator with state Booted.
2. If none are booted, ask the user to boot one (do not boot automatically unless asked).
3. Call mcpXcodeBuildMCPsession-set-defaults with:
4. projectPath or workspacePath (whichever the repo uses)
5. scheme for the current app
6. simulatorId from the booted device
7. Optional: configuration: "Debug", useLatestOS: true

### Imported Workflow Notes

#### Imported: Core Workflow

Follow this sequence unless the user asks for a narrower action.

### 1) Discover the booted simulator
- Call `mcp__XcodeBuildMCP__list_sims` and select the simulator with state `Booted`.
- If none are booted, ask the user to boot one (do not boot automatically unless asked).

### 2) Set session defaults
- Call `mcp__XcodeBuildMCP__session-set-defaults` with:
  - `projectPath` or `workspacePath` (whichever the repo uses)
  - `scheme` for the current app
  - `simulatorId` from the booted device
  - Optional: `configuration: "Debug"`, `useLatestOS: true`

### 3) Build + run (when requested)
- Call `mcp__XcodeBuildMCP__build_run_sim`.
- **If the build fails**, check the error output and retry (optionally with `preferXcodebuild: true`) or escalate to the user before attempting any UI interaction.
- **After a successful build**, verify the app launched by calling `mcp__XcodeBuildMCP__describe_ui` or `mcp__XcodeBuildMCP__screenshot` before proceeding to UI interaction.
- If the app is already built and only launch is requested, use `mcp__XcodeBuildMCP__launch_app_sim`.
- If bundle id is unknown:
  1) `mcp__XcodeBuildMCP__get_sim_app_path`
  2) `mcp__XcodeBuildMCP__get_app_bundle_id`

#### Imported: Overview

Use XcodeBuildMCP to build and run the current project scheme on a booted iOS simulator, interact with the UI, and capture logs. Prefer the MCP tools for simulator control, logs, and view inspection.

#### Imported: UI Interaction & Debugging

Use these when asked to inspect or interact with the running app.

- **Describe UI**: `mcp__XcodeBuildMCP__describe_ui` before tapping or swiping.
- **Tap**: `mcp__XcodeBuildMCP__tap` (prefer `id` or `label`; use coordinates only if needed).
- **Type**: `mcp__XcodeBuildMCP__type_text` after focusing a field.
- **Gestures**: `mcp__XcodeBuildMCP__gesture` for common scrolls and edge swipes.
- **Screenshot**: `mcp__XcodeBuildMCP__screenshot` for visual confirmation.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ios-debugger-agent to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ios-debugger-agent against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ios-debugger-agent for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ios-debugger-agent using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/ios-debugger-agent`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

- If build fails, ask whether to retry with `preferXcodebuild: true`.
- If the wrong app launches, confirm the scheme and bundle id.
- If UI elements are not hittable, re-run `describe_ui` after layout changes.

## Related Skills

- `@base` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@image-studio` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/openai.yaml` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [openai.yaml](agents/openai.yaml)
- [openai.yaml](agents/openai.yaml)

### Imported Reference Notes

#### Imported: Logs & Console Output

- Start logs: `mcp__XcodeBuildMCP__start_sim_log_cap` with the app bundle id.
- Stop logs: `mcp__XcodeBuildMCP__stop_sim_log_cap` and summarize important lines.
- For console output, set `captureConsole: true` and relaunch if required.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
