---
name: hig-components-search-v2
description: "Apple HIG: Navigation Components workflow skill. Use this skill when the user needs Apple HIG guidance for navigation-related components including search fields, page controls, and path controls and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["hig-components-search-v2", "hig-components-search", "apple", "hig", "guidance", "for", "navigation-related", "components"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Apple HIG: Navigation Components

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/hig-components-search` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Apple HIG: Navigation Components Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Output Format, Questions to Ask, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Apple HIG guidance for navigation-related components including search fields, page controls, and path controls.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/page-controls.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/path-controls.md` | Adds the next most relevant copied source file without loading the entire package |
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

1. **Component recommendation** -- search field, page control, or path control, and why.
2. **Behavior specification** -- interaction model (search-as-you-type, swipe for pages, click-to-navigate for paths).
3. **Platform differences** across iOS, iPadOS, macOS, visionOS.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hig-components-search-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hig-components-search-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hig-components-search-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hig-components-search-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Search: discoverable with instant feedback. Place search fields where users expect them (top of list, toolbar/navigation bar). Show results as the user types.
- Page controls: position in a flat page sequence. For discrete, equally weighted pages (onboarding, photo gallery). Show current page and total count.
- Path controls: file hierarchy navigation. macOS path controls display location within a directory structure and allow jumping to any ancestor.
- Search scopes narrow large result sets. Provide scope buttons so users can filter without complex queries.
- Clear empty states for search. Helpful message suggesting corrections or alternatives, not a blank screen.
- Page controls are not for hierarchical navigation. Flat, linear sequences only. Use navigation controllers, tab bars, or sidebars for hierarchy.
- Keep path controls concise. Show meaningful segments only. Users can click any segment to navigate directly.

### Imported Operating Notes

#### Imported: Key Principles

1. **Search: discoverable with instant feedback.** Place search fields where users expect them (top of list, toolbar/navigation bar). Show results as the user types.

2. **Page controls: position in a flat page sequence.** For discrete, equally weighted pages (onboarding, photo gallery). Show current page and total count.

3. **Path controls: file hierarchy navigation.** macOS path controls display location within a directory structure and allow jumping to any ancestor.

4. **Search scopes narrow large result sets.** Provide scope buttons so users can filter without complex queries.

5. **Clear empty states for search.** Helpful message suggesting corrections or alternatives, not a blank screen.

6. **Page controls are not for hierarchical navigation.** Flat, linear sequences only. Use navigation controllers, tab bars, or sidebars for hierarchy.

7. **Keep path controls concise.** Show meaningful segments only. Users can click any segment to navigate directly.

8. **Support keyboard for search.** Command-F and system search shortcuts should activate search.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/hig-components-search`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@gitlab-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-ci-patterns-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitops-workflow-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@global-chat-agent-discovery-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/page-controls.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [page-controls.md](references/page-controls.md)
- [path-controls.md](references/path-controls.md)
- [search-fields.md](references/search-fields.md)
- [page-controls.md](references/page-controls.md)
- [path-controls.md](references/path-controls.md)
- [search-fields.md](references/search-fields.md)

### Imported Reference Notes

#### Imported: Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [search-fields.md](references/search-fields.md) | Search fields | Scopes, tokens, instant results, placement |
| [page-controls.md](references/page-controls.md) | Page controls | Dot indicators, flat page sequences |
| [path-controls.md](references/path-controls.md) | Path controls | Breadcrumbs, ancestor navigation |

#### Imported: Questions to Ask

1. What type of content is being searched or navigated?
2. Which platforms?
3. How large is the dataset?
4. Is search the primary interaction?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
