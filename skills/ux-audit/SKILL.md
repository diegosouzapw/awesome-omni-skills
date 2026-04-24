---
name: ux-audit
description: "UX Audit workflow skill. Use this skill when the user needs Audit screens against Nielsen's heuristics and mobile UX best practices using the StyleSeed Toss design language as the implementation context and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: design
tags: ["ux", "audit", "usability", "mobile", "styleseed", "ux-audit", "screens", "nielsen"]
complexity: beginner
risk: safe
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "bitjaru"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# UX Audit

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/ux-audit` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# UX Audit

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Audit Framework, Output, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when a screen feels awkward even though the code and styling seem correct
- Use when evaluating a flow before or after implementation
- Use when reviewing a mobile-first product for usability regressions
- Use when you want findings framed as user experience problems with remediation
- Use when the request clearly matches the imported source intent: Audit screens against Nielsen's heuristics and mobile UX best practices using the StyleSeed Toss design language as the implementation context.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: Overview

Part of [StyleSeed](https://github.com/bitjaru/styleseed), this skill audits usability rather than just visuals. It uses Nielsen's 10 heuristics plus modern mobile UX expectations to find issues in navigation, feedback, recovery, hierarchy, and cognitive load.

#### Imported: Audit Framework

Review the target against:
- visibility of system status
- match between system and real-world language
- user control and freedom
- consistency and standards
- error prevention
- recognition rather than recall
- flexibility and efficiency
- aesthetic and minimalist design
- recovery from errors
- help, onboarding, and empty-state guidance

Add mobile-specific checks for reachability, touch ergonomics, input burden, and thumb-friendly action placement.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ux-audit to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ux-audit against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ux-audit for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ux-audit using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Judge the experience from the user's point of view, not the implementer's
- Separate high-severity flow blockers from minor polish issues
- Include recovery and state-management guidance, not only layout comments
- Tie recommendations back to concrete UI changes
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- Judge the experience from the user's point of view, not the implementer's
- Separate high-severity flow blockers from minor polish issues
- Include recovery and state-management guidance, not only layout comments
- Tie recommendations back to concrete UI changes

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/ux-audit`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@tmux` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@todoist-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tool-design` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tool-use-guardian` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Additional Resources

- [StyleSeed repository](https://github.com/bitjaru/styleseed)
- [Source skill](https://github.com/bitjaru/styleseed/blob/main/seeds/toss/.claude/skills/ux-audit/SKILL.md)

#### Imported: Output

Return:
1. A prioritized issue list
2. The heuristic violated by each issue
3. Why the issue matters to real users
4. Specific remediation suggestions for the page, component, or flow

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
