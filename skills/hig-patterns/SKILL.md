---
name: hig-patterns
description: "Apple HIG: Interaction Patterns workflow skill. Use this skill when the user needs Apple Human Interface Guidelines interaction and UX patterns and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["hig-patterns", "apple", "human", "interface", "guidelines", "interaction", "and", "patterns"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# Apple HIG: Interaction Patterns

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/hig-patterns` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Apple HIG: Interaction Patterns Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Pattern Selection Guide, Output Format, Questions to Ask, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Apple Human Interface Guidelines interaction and UX patterns.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/charting-data.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/collaboration-and-sharing.md` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: Pattern Selection Guide

| User Goal | Recommended Pattern | Avoid |
|---|---|---|
| First app experience | Brief onboarding (max 3 screens) + progressive disclosure | Long tutorials, mandatory sign-up |
| Waiting for content | Skeleton screens or progress indicators | Blocking spinners with no context |
| Confirming destructive action | Undo support | Excessive "Are you sure?" dialogs |
| Collecting user input | Inline validation, smart defaults, autofill | Modal forms for simple inputs |
| Requesting permissions | Contextual, just-in-time with explanation | Requesting all permissions at launch |
| Providing feedback | Haptics + visual indicator | Silent actions with no confirmation |
| Organizing preferences | In-app settings for frequent items | Burying all settings in system Settings app |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hig-patterns to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hig-patterns against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hig-patterns for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hig-patterns using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Minimize modality. Use modality only when it is critical to get attention, a task must be completed or abandoned, or saving changes is essential. Prefer non-modal alternatives.
- Provide clear feedback. Every action should produce visible, audible, or haptic response. Activity indicators for indeterminate waits, progress bars for determinate, haptics for physical confirmation.
- Support undo over confirmation dialogs. Destructive actions should be reversible when possible. Undo is almost always better than "Are you sure?"
- Launch quickly. Display a launch screen that transitions seamlessly into the first screen. No splash screens with logos. Restore previous state.
- Defer sign-in. Let users explore before requiring account creation. Support Sign in with Apple and passkeys.
- Keep onboarding brief. Three screens max. Let users skip. Teach through progressive disclosure and contextual hints.
- Use progressive disclosure. Show essentials first, let users drill into details. Don't overwhelm with every option on one screen.

### Imported Operating Notes

#### Imported: Key Principles

1. **Minimize modality.** Use modality only when it is critical to get attention, a task must be completed or abandoned, or saving changes is essential. Prefer non-modal alternatives.

2. **Provide clear feedback.** Every action should produce visible, audible, or haptic response. Activity indicators for indeterminate waits, progress bars for determinate, haptics for physical confirmation.

3. **Support undo over confirmation dialogs.** Destructive actions should be reversible when possible. Undo is almost always better than "Are you sure?"

4. **Launch quickly.** Display a launch screen that transitions seamlessly into the first screen. No splash screens with logos. Restore previous state.

5. **Defer sign-in.** Let users explore before requiring account creation. Support Sign in with Apple and passkeys.

6. **Keep onboarding brief.** Three screens max. Let users skip. Teach through progressive disclosure and contextual hints.

7. **Use progressive disclosure.** Show essentials first, let users drill into details. Don't overwhelm with every option on one screen.

8. **Respect user attention.** Consolidate notifications, minimize interruptions, give users control over alerts. Never use notifications for marketing.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/hig-patterns`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@github-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-issue-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-workflow-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/charting-data.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [charting-data.md](references/charting-data.md)
- [collaboration-and-sharing.md](references/collaboration-and-sharing.md)
- [drag-and-drop.md](references/drag-and-drop.md)
- [entering-data.md](references/entering-data.md)
- [charting-data.md](references/charting-data.md)
- [collaboration-and-sharing.md](references/collaboration-and-sharing.md)

### Imported Reference Notes

#### Imported: Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [charting-data.md](references/charting-data.md) | Charting Data | Data visualization patterns, accessible charts, interactive elements |
| [collaboration-and-sharing.md](references/collaboration-and-sharing.md) | Collaboration & Sharing | Share sheets, activity views, collaborative editing, SharePlay |
| [drag-and-drop.md](references/drag-and-drop.md) | Drag and Drop | Drag sources, drop targets, spring loading, multi-item drag, visual feedback |
| [entering-data.md](references/entering-data.md) | Entering Data | Text fields, pickers, steppers, input validation, keyboard types, autofill |
| [feedback.md](references/feedback.md) | Feedback | Alerts, action sheets, haptic patterns, sound feedback, visual indicators |
| [file-management.md](references/file-management.md) | File Management | Document browser, file providers, iCloud integration, document lifecycle |
| [going-full-screen.md](references/going-full-screen.md) | Going Full Screen | Full-screen transitions, immersive content, exiting full screen |
| [launching.md](references/launching.md) | Launching | Launch screens, state restoration, cold vs warm launch |
| [live-viewing-apps.md](references/live-viewing-apps.md) | Live Viewing Apps | Live content display, real-time updates, Live Activities, Dynamic Island |
| [loading.md](references/loading.md) | Loading | Activity indicators, progress views, skeleton screens, lazy loading, placeholders |
| [managing-accounts.md](references/managing-accounts.md) | Managing Accounts | Sign in with Apple, passkeys, account creation, credential autofill, account deletion |
| [managing-notifications.md](references/managing-notifications.md) | Managing Notifications | Permission requests, grouping, actionable notifications, provisional delivery |
| [modality.md](references/modality.md) | Modality | Sheets, alerts, popovers, full-screen modals, when to use each |
| [multitasking.md](references/multitasking.md) | Multitasking | iPad Split View, Slide Over, Stage Manager, responsive layout, size class transitions |
| [offering-help.md](references/offering-help.md) | Offering Help | Contextual tips, onboarding hints, help menus, support links |
| [onboarding.md](references/onboarding.md) | Onboarding | Welcome screens, feature highlights, progressive onboarding, skip options |
| [playing-audio.md](references/playing-audio.md) | Playing Audio | Audio sessions, background audio, Now Playing, audio routing, interruptions |
| [playing-haptics.md](references/playing-haptics.md) | Playing Haptics | Core Haptics, UIFeedbackGenerator, haptic patterns, custom haptics |
| [playing-video.md](references/playing-video.md) | Playing Video | Video player controls, picture-in-picture, AirPlay, full-screen video |
| [printing.md](references/printing.md) | Printing | Print dialogs, page setup, AirPrint integration |
| [ratings-and-reviews.md](references/ratings-and-reviews.md) | Ratings & Reviews | SKStoreReviewController, timing, frequency limits, in-app feedback |
| [searching.md](references/searching.md) | Searching | Search bars, suggestions, scoped search, results display, recents |
| [settings.md](references/settings.md) | Settings | In-app vs Settings app, preference organization, toggles, defaults |
| [undo-and-redo.md](references/undo-and-redo.md) | Undo and Redo | Shake to undo, undo/redo stack, multi-level undo |
| [workouts.md](references/workouts.md) | Workouts | Workout sessions, live metrics, Always On display, summaries, HealthKit |

#### Imported: Output Format

1. **Recommended pattern with rationale**, citing the relevant reference file.
2. **Step-by-step implementation** covering each screen or state.
3. **Platform variations** for targeted platforms.
4. **Common pitfalls** that violate HIG for this pattern.

#### Imported: Questions to Ask

1. Where in the app does this pattern appear? What comes before and after?
2. Which platforms?
3. Designing from scratch or improving an existing flow?
4. Does this involve sensitive actions? (Destructive operations, payments, permissions)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
