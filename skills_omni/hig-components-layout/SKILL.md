---
name: "hig-components-layout"
description: "Apple HIG: Layout and Navigation Components workflow skill. Use this skill when the user needs Apple Human Interface Guidelines for layout and navigation components and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "frontend"
tags:
  - "hig-components-layout"
  - "apple"
  - "human"
  - "interface"
  - "guidelines"
  - "for"
  - "layout"
  - "and"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "hig-components-layout"
family_name: "Apple HIG: Layout and Navigation Components"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/hig-components-layout"
upstream_skill: "skills/hig-components-layout"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "hig-components-layout"
---

# Apple HIG: Layout and Navigation Components

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/hig-components-layout` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Apple HIG: Layout and Navigation Components Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Navigation Pattern Selection, Layout Adaptation Checklist, Output Format, Questions to Ask, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Apple Human Interface Guidelines for layout and navigation components.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/boxes.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/column-views.md` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: Navigation Pattern Selection

| App Structure | Recommended Pattern | Platform Adaptation |
|---|---|---|
| 3-5 peer top-level sections | Tab Bar | iPhone: bottom tab bar. iPad: sidebar (`.sidebarAdaptable`, iPadOS 18+). Mac: sidebar or toolbar tabs |
| Deep hierarchical content | Sidebar + NavigationSplitView | iPhone: single column stack. iPad: two/three columns. Mac: full multi-column |
| Deep file/folder tree | Column View | Mac: Finder-style. iPad: adaptable. iPhone: push navigation |
| Flat list with detail | Split View (two column) | iPhone: push/pop stack. iPad/Mac: primary + detail columns |
| Document-based with inspectors | Window + Panels | Mac: main window with inspector. iPad: sheet or popover |
| Spatial app with tools | Window + Ornaments | visionOS: ornaments on window. Other platforms: toolbars |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hig-components-layout to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hig-components-layout against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hig-components-layout for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hig-components-layout using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Organize hierarchically. Structure information from broad categories to specific details. Sidebars for top-level sections, lists for browsable items, detail views for individual content.
- Use standard navigation patterns. Tab bars for flat navigation between peer sections (iPhone). Sidebars for deep hierarchical navigation (iPad, Mac). Match the pattern to the information architecture and platform.
- Adapt to screen size. Three-column on iPad collapses to single-column on iPhone. Use size classes and adaptive APIs (NavigationSplitView) for automatic adaptation.
- Support multitasking on iPad. Respond gracefully to Split View, Slide Over, and Stage Manager. Test at every split ratio and size class transition.
- Maintain spatial consistency on visionOS. Windows, volumes, and ornaments in shared space. Position predictably. Use ornaments for toolbars and controls without occluding content.
- Use scroll views for overflow content. Enable paging for discrete content units. Support pull-to-refresh where appropriate. Respect safe areas.
- Keep navigation predictable. Users should always know where they are, how they got there, and how to go back. Use back buttons, breadcrumbs, and clear section titles.

### Imported Operating Notes

#### Imported: Key Principles

1. **Organize hierarchically.** Structure information from broad categories to specific details. Sidebars for top-level sections, lists for browsable items, detail views for individual content.

2. **Use standard navigation patterns.** Tab bars for flat navigation between peer sections (iPhone). Sidebars for deep hierarchical navigation (iPad, Mac). Match the pattern to the information architecture and platform.

3. **Adapt to screen size.** Three-column on iPad collapses to single-column on iPhone. Use size classes and adaptive APIs (NavigationSplitView) for automatic adaptation.

4. **Support multitasking on iPad.** Respond gracefully to Split View, Slide Over, and Stage Manager. Test at every split ratio and size class transition.

5. **Maintain spatial consistency on visionOS.** Windows, volumes, and ornaments in shared space. Position predictably. Use ornaments for toolbars and controls without occluding content.

6. **Use scroll views for overflow content.** Enable paging for discrete content units. Support pull-to-refresh where appropriate. Respect safe areas.

7. **Keep navigation predictable.** Users should always know where they are, how they got there, and how to go back. Use back buttons, breadcrumbs, and clear section titles.

8. **Prefer system components.** UINavigationController, UISplitViewController, NavigationSplitView, and TabView provide built-in adaptivity, accessibility, and state restoration.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/hig-components-layout`, fails to mention provenance, or does not use any copied source files at all.
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
| `references` | copied reference notes, guides, or background material from upstream | `references/boxes.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [boxes.md](references/boxes.md)
- [column-views.md](references/column-views.md)
- [lists-and-tables.md](references/lists-and-tables.md)
- [ornaments.md](references/ornaments.md)
- [boxes.md](references/boxes.md)
- [column-views.md](references/column-views.md)

### Imported Reference Notes

#### Imported: Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [sidebars.md](references/sidebars.md) | Sidebars | Source lists, selection state, collapsible sections, iPad/Mac patterns |
| [column-views.md](references/column-views.md) | Column Views | Finder-style browsing, progressive disclosure through columns |
| [outline-views.md](references/outline-views.md) | Outline Views | Expandable hierarchies, disclosure triangles, tree structures |
| [split-views.md](references/split-views.md) | Split Views | Two/three column layouts, NavigationSplitView, adaptive collapse |
| [tab-views.md](references/tab-views.md) | Tab Views | Segmented tabs, page-style tabs, macOS tab grouping |
| [tab-bars.md](references/tab-bars.md) | Tab Bars | Bottom tab bars (iOS), badge counts, max tab count |
| [scroll-views.md](references/scroll-views.md) | Scroll Views | Paging, scroll indicators, content insets, pull-to-refresh |
| [windows.md](references/windows.md) | Windows | macOS/visionOS window management, sizing, full-screen, restoration |
| [panels.md](references/panels.md) | Panels | Inspector panels, utility panels, floating panels, macOS conventions |
| [lists-and-tables.md](references/lists-and-tables.md) | Lists and Tables | Plain/grouped/inset-grouped styles, swipe actions, section headers |
| [boxes.md](references/boxes.md) | Boxes | Content grouping containers, labeled boxes, macOS grouping |
| [ornaments.md](references/ornaments.md) | Ornaments | visionOS toolbar attachments, positioning, visibility |

#### Imported: Layout Adaptation Checklist

- [ ] **Compact width (iPhone portrait):** Navigation collapses to single stack? Tab bars visible?
- [ ] **Regular width (iPad landscape, Mac):** Navigation expands to sidebar + detail? Space used well?
- [ ] **Multitasking (iPad):** Adapts at every split ratio? Works in Slide Over?
- [ ] **Accessibility:** Supports Dynamic Type at all sizes? VoiceOver order logical?
- [ ] **Orientation:** Content reflows between portrait and landscape?
- [ ] **visionOS:** Windows positioned ergonomically? Ornaments accessible? Depth meaningful?

#### Imported: Output Format

1. **Recommended navigation pattern** with rationale for the app's information architecture.
2. **Layout hierarchy** from root container down (e.g., TabView > NavigationSplitView > List > Detail).
3. **Platform adaptation** across targeted platforms and size classes.
4. **Size class behavior** at each transition.

#### Imported: Questions to Ask

1. What is the app's information architecture? (Sections, hierarchy depth, top-level categories?)
2. How many top-level sections?
3. Which platforms?
4. Need multitasking on iPad?
5. SwiftUI or UIKit?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
