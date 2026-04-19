---
name: hig-components-content
description: "Apple HIG: Content Components workflow skill. Use this skill when the user needs Apple Human Interface Guidelines for content display components and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["hig-components-content", "apple", "human", "interface", "guidelines", "for", "content", "display"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Apple HIG: Content Components

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/hig-components-content` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Apple HIG: Content Components Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Component Selection Guide, Output Format, Questions to Ask, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Apple Human Interface Guidelines for content display components.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/activity-views.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/charts.md` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: Component Selection Guide

| Content Need | Recommended Component | Platform Notes |
|---|---|---|
| Visualizing quantitative data | Charts (Swift Charts) | iOS 16+, macOS 13+, watchOS 9+ |
| Browsing a grid or list of items | Collection View | Compositional layout for complex arrangements |
| Displaying a single image | Image View | Support aspect ratio fitting; provide accessibility description |
| Selecting an image via drag or browse | Image Well | macOS primarily; use image pickers on iOS |
| Selecting a color | Color Well | Triggers system color picker; macOS, iOS 14+ |
| Showing web content inline | Web View (WKWebView) | Use SFSafariViewController for external browsing |
| Sharing content to other apps | Activity View | System share sheet with configurable activity types |
| Content card (image + text) | Lockup | Primarily tvOS; adaptable to other platforms |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hig-components-content to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hig-components-content against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hig-components-content for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hig-components-content using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Adapt to different sizes and contexts. Content components must work across screen sizes, orientations, and multitasking configurations. Use Auto Layout and size classes.
- Make content accessible. Charts need audio graph support. Images need alt text. Collections need proper VoiceOver navigation order. All content components need labels and descriptions.
- Maintain visual hierarchy. Use spacing, sizing, and grouping to establish clear information hierarchy. Primary content should be visually prominent.
- Use system components first. Evaluate UICollectionView, SwiftUI Charts, WKWebView before building custom. System components come with built-in accessibility and platform adaptation.
- Respect platform conventions. A collection on tvOS uses large lockups with parallax. The same collection on iOS uses compact cells with touch targets. On visionOS, content gains depth and hover effects.
- Handle empty states. Show a meaningful empty state with guidance on how to populate it, not a blank screen.
- Optimize for performance. Use lazy loading, cell reuse, pagination, and prefetching for large datasets.

### Imported Operating Notes

#### Imported: Key Principles

1. **Adapt to different sizes and contexts.** Content components must work across screen sizes, orientations, and multitasking configurations. Use Auto Layout and size classes.

2. **Make content accessible.** Charts need audio graph support. Images need alt text. Collections need proper VoiceOver navigation order. All content components need labels and descriptions.

3. **Maintain visual hierarchy.** Use spacing, sizing, and grouping to establish clear information hierarchy. Primary content should be visually prominent.

4. **Use system components first.** Evaluate UICollectionView, SwiftUI Charts, WKWebView before building custom. System components come with built-in accessibility and platform adaptation.

5. **Respect platform conventions.** A collection on tvOS uses large lockups with parallax. The same collection on iOS uses compact cells with touch targets. On visionOS, content gains depth and hover effects.

6. **Handle empty states.** Show a meaningful empty state with guidance on how to populate it, not a blank screen.

7. **Optimize for performance.** Use lazy loading, cell reuse, pagination, and prefetching for large datasets.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/hig-components-content`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@github-issue-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-workflow-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-ci-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/activity-views.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [activity-views.md](references/activity-views.md)
- [charts.md](references/charts.md)
- [collections.md](references/collections.md)
- [color-wells.md](references/color-wells.md)
- [activity-views.md](references/activity-views.md)
- [charts.md](references/charts.md)

### Imported Reference Notes

#### Imported: Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [charts.md](references/charts.md) | Charts | Swift Charts, bar/line/area/point marks, chart accessibility, audio graphs |
| [collections.md](references/collections.md) | Collections | Grid/list layouts, compositional layout, selection, reordering, diffable data sources |
| [image-views.md](references/image-views.md) | Image Views | Aspect ratio handling, content modes, SF Symbol images, accessibility |
| [image-wells.md](references/image-wells.md) | Image Wells | Drag-and-drop image selection, macOS-specific, placeholder content |
| [color-wells.md](references/color-wells.md) | Color Wells | Color selection UI, system color picker, custom color spaces |
| [web-views.md](references/web-views.md) | Web Views | WKWebView, SFSafariViewController, navigation controls, content restrictions |
| [activity-views.md](references/activity-views.md) | Activity Views | Share sheets, activity items, custom activities, action extensions |
| [lockups.md](references/lockups.md) | Lockups | Image+text elements, tvOS card layouts, focus effects, shelf layouts |

#### Imported: Output Format

1. **Component recommendation with rationale**, referencing the relevant HIG reference file.
2. **Configuration guidance** -- key properties and setup.
3. **Accessibility requirements** for the recommended component.
4. **Platform-specific notes** for targeted platforms.

#### Imported: Questions to Ask

1. What type of content? (Quantitative data, images, web content, browsable collection, share action?)
2. Which platforms?
3. Static or dynamic content?
4. How much content? (Few items vs hundreds/thousands affects component choice and optimization.)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
