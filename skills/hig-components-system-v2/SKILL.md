---
name: hig-components-system-v2
description: "Apple HIG: System Experiences workflow skill. Use this skill when the user needs Apple HIG guidance for system experience components: widgets, live activities, notifications, complications, home screen quick actions, top shelf, watch faces, app clips, and app shortcuts and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["hig-components-system-v2", "hig-components-system", "apple", "hig", "guidance", "for", "system", "experience"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-24"
---

# Apple HIG: System Experiences

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/hig-components-system` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Apple HIG: System Experiences Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Output Format, Questions to Ask, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Apple HIG guidance for system experience components: widgets, live activities, notifications, complications, home screen quick actions, top shelf, watch faces, app clips, and app shortcuts.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/app-clips.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/app-shortcuts.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Output Format

1. **System experience recommendation** -- which surface best fits the use case.
2. **Content strategy** -- what to display, priority, what to omit.
3. **Update frequency** -- refresh rate including system budget constraints.
4. **Size/family variants** -- which to support and how layout adapts.
5. **Deep link behavior** -- where tapping takes the user.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hig-components-system-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hig-components-system-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hig-components-system-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hig-components-system-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Glanceable, immediate value. System experiences bring your app's most important content to surfaces the user sees without launching your app. Design for seconds of attention.
- Respect platform context. A Lock Screen widget has different constraints than a Home Screen widget. A complication is far smaller than a top shelf item.
- Show relevant information, not everything. Display the most useful subset, updated appropriately.
- Support multiple sizes with distinct layouts. Each size should be a thoughtful design, not a scaled version of another.
- Deep-link on tap. Take users to the relevant content, not the app's root screen.
- Track events with a clear start and end. Deliveries, scores, timers, rides. Design for both Dynamic Island and Lock Screen.
- Stay updated and timely. Stale data undermines trust. End promptly when the event concludes.

### Imported Operating Notes

#### Imported: Key Principles

### General

1. **Glanceable, immediate value.** System experiences bring your app's most important content to surfaces the user sees without launching your app. Design for seconds of attention.

2. **Respect platform context.** A Lock Screen widget has different constraints than a Home Screen widget. A complication is far smaller than a top shelf item.

### Widgets

3. **Show relevant information, not everything.** Display the most useful subset, updated appropriately.

4. **Support multiple sizes with distinct layouts.** Each size should be a thoughtful design, not a scaled version of another.

5. **Deep-link on tap.** Take users to the relevant content, not the app's root screen.

### Live Activities

6. **Track events with a clear start and end.** Deliveries, scores, timers, rides. Design for both Dynamic Island and Lock Screen.

7. **Stay updated and timely.** Stale data undermines trust. End promptly when the event concludes.

### Notifications

8. **Respect user attention.** Only send notifications for information users genuinely care about. No promotional or low-value notifications.

9. **Actionable and self-contained.** Include enough context to understand and act without opening the app. Support notification actions. Use threading and grouping.

### Complications

10. **Focused data on the watch face.** Design for the smallest useful representation. Support multiple families. Budget updates wisely.

### Home Screen Quick Actions

11. **3-4 most common tasks.** Short titles, optional subtitles, relevant SF Symbol icons.

### Top Shelf

12. **tvOS showcase.** Feature content that entices: new episodes, featured items, recent content.

### App Clips

13. **Instant, focused functionality within a strict size budget.** Load quickly without App Store download. Only what's needed for the immediate task, then offer full app install.

### App Shortcuts

14. **Surface key actions to Siri and Spotlight.** Define shortcuts for frequent tasks. Use natural, conversational trigger phrases.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/hig-components-system`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@gitlab-ci-patterns-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitops-workflow-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@global-chat-agent-discovery-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gmail-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/app-clips.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [app-clips.md](references/app-clips.md)
- [app-shortcuts.md](references/app-shortcuts.md)
- [complications.md](references/complications.md)
- [home-screen-quick-actions.md](references/home-screen-quick-actions.md)
- [app-clips.md](references/app-clips.md)
- [app-shortcuts.md](references/app-shortcuts.md)

### Imported Reference Notes

#### Imported: Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [widgets.md](references/widgets.md) | Widgets | Glanceable info, sizes, deep linking, timeline |
| [live-activities.md](references/live-activities.md) | Live Activities | Real-time tracking, Dynamic Island, Lock Screen |
| [notifications.md](references/notifications.md) | Notifications | Attention, actions, grouping, content |
| [complications.md](references/complications.md) | Complications | Watch face data, families, budgeted updates |
| [home-screen-quick-actions.md](references/home-screen-quick-actions.md) | Quick actions | Haptic Touch, common tasks, SF Symbols |
| [top-shelf.md](references/top-shelf.md) | Top shelf | Featured content, showcase |
| [app-clips.md](references/app-clips.md) | App Clips | Instant use, lightweight, focused task, NFC/QR |
| [watch-faces.md](references/watch-faces.md) | Watch faces | Custom complications, face sharing |
| [app-shortcuts.md](references/app-shortcuts.md) | App Shortcuts | Siri, Spotlight, voice triggers |

#### Imported: Questions to Ask

1. What information needs to surface outside the app?
2. Which platform?
3. How frequently does the data update?
4. What is the primary glanceable need?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
