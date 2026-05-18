---
name: squirrel
description: "Squirrel \u2014 Full-Cycle Software Development Skill workflow skill. Use this skill when the user needs Full-cycle AI coding skill: plans, builds, tests, lints, fixes bugs, and writes production-grade docs. Auto-detects project state and adapts its 8-phase pipeline and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["development", "testing", "planning", "code-review", "documentation", "ci-cd", "squirrel", "full-cycle"]
complexity: intermediate
risk: caution
tools: ["cursor", "antigravity", "opencode", "codex-cli", "claude-code", "gemini-cli"]
source: community
author: "flyingsquirrel_"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# Squirrel — Full-Cycle Software Development Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/squirrel` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Squirrel — Full-Cycle Software Development Skill

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Platform Compatibility, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when starting a new project from scratch (greenfield)
- Use when improving an existing codebase (in-progress or mature)
- Use when fixing bugs, adding features, or refactoring
- Use when adding tests, linting, or CI/CD to a project
- Use when writing production-grade documentation
- Use when the user says "build me", "fix this", "squirrel this project", or any multi-step development task

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

Squirrel is a full-cycle AI coding skill that works across 9 AI coding agents. It auto-detects project state (greenfield, in-progress, or mature) and adapts its 8-phase engineering pipeline accordingly. Instead of a one-size-fits-all workflow, it figures out where the project actually is and jumps in at exactly the right point.

#### Imported: How It Works

### Step 0: Detect Mode

Squirrel classifies the project directory:

| Signal | Mode | Entry Point |
|--------|------|-------------|
| Empty directory | Greenfield | All 8 phases from scratch |
| Source files, no tests/docs | In-Progress | Audit first, then improve |
| Source + tests + CI + README | Mature | Targeted improvements |
| "fix this bug / add feature" | Targeted | Scoped work only |

### The 8-Phase Pipeline

1. **Discover** — Understand the project (audit existing code or gather requirements)
2. **Plan** — Concrete task list with dependencies and done-criteria
3. **Build** — Write or modify code (parallel sub-agents when supported)
4. **Test** — Run existing tests, write new ones, 70%+ coverage target
5. **Bug Hunt** — Static analysis + manual review
6. **Polish** — Lint, format, type check, remove dead code
7. **Document** — README + inline docs (update existing, don't overwrite)
8. **Ship** — Final checklist: tests green, no secrets, CI configured

### Failure Recovery (3-Strike Rule)

1. **Strike 1:** Fix the specific error. Run tests. Move on.
2. **Strike 2:** Re-read the code. Try a different approach.
3. **Strike 3:** STOP. Revert. Document what failed. Ask the user.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @squirrel to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @squirrel against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @squirrel for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @squirrel using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Build a REST API

```text
> build me a REST API for a todo app with TypeScript and Express
```

Squirrel auto-detects greenfield mode and runs all 8 phases.

### Example 2: Fix a bug

```text
> fix this bug in src/auth/login.py
```

Squirrel enters targeted mode — abbreviated audit, scoped fix, verify.

### Example 3: Improve existing project

```text
> squirrel this project — add tests, fix lint errors, write README
```

Squirrel audits the existing codebase, then applies phases 4-8.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Respects existing code — matches naming conventions, test framework, import style, and architecture
- Reads 2-3 similar files before writing a new one
- Never suppresses type errors with as any or @ts-ignore
- Never deletes failing tests to "pass"
- Never leaves code in a broken state
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- Respects existing code — matches naming conventions, test framework, import style, and architecture
- Reads 2-3 similar files before writing a new one
- Never suppresses type errors with `as any` or `@ts-ignore`
- Never deletes failing tests to "pass"
- Never leaves code in a broken state

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/squirrel`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-criminal-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-especialista-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agent-memory-systems-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Platform Compatibility

Squirrel works on: Claude Code, Codex, Cursor, Antigravity, Gemini CLI, GitHub Copilot, Windsurf, OpenCode, Aider (9 total).

Install with:

```bash
# Universal installer
npx skills add flyingsquirrel0419/squirrel-skill

```

#### Imported: Limitations

- Does not replace environment-specific validation or expert review
- CI/CD templates are starting points, not drop-in guarantees
- Parallel sub-agent execution depends on platform support
