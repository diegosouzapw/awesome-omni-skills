---
name: agents-md-v2
description: "Maintaining AGENTS.md workflow skill. Use this skill when the user needs This skill should be used when the user asks to \"create AGENTS.md\", \"update AGENTS.md\", \"maintain agent docs\", \"set up CLAUDE.md\", or needs to keep agent instructions concise. Enforces research-backed best practices for minimal, high-signal agent documentation and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["agents-md-v2", "agents-md", "should", "used", "the", "user", "asks", "create"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Maintaining AGENTS.md

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/agents-md` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Maintaining AGENTS.md AGENTS.md is the canonical agent-facing documentation. Keep it minimal—agents are capable and don't need hand-holding. Target under 60 lines; never exceed 100. Instruction-following quality degrades as document length increases.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Before Writing, Required Sections, Package Manager, Commit Attribution, Optional Sections, Anti-Patterns.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The user asks to create, update, or audit AGENTS.md or CLAUDE.md.
- The project needs concise, high-signal agent instructions derived from the actual toolchain and repo layout.
- Existing agent documentation is too long, duplicated, or drifting away from real project conventions.
- Use when the request clearly matches the imported source intent: This skill should be used when the user asks to "create AGENTS.md", "update AGENTS.md", "maintain agent docs", "set up CLAUDE.md", or needs to keep agent instructions concise. Enforces research-backed best practices....
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

1. Create AGENTS.md at project root
2. Create symlink: ln -s AGENTS.md CLAUDE.md
3. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
4. Read the overview, playbook, and source summary before loading any upstream support files.
5. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
6. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
7. Validate the result against the checklist, rubric, and expected evidence for the task.

### Imported Workflow Notes

#### Imported: File Setup

1. Create `AGENTS.md` at project root
2. Create symlink: `ln -s AGENTS.md CLAUDE.md`

#### Imported: Before Writing

Analyze the project to understand what belongs in the file:

1. **Package manager** — Check for lock files (`pnpm-lock.yaml`, `yarn.lock`, `package-lock.json`, `uv.lock`, `poetry.lock`)
2. **Linter/formatter configs** — Look for `.eslintrc`, `biome.json`, `ruff.toml`, `.prettierrc`, etc. (don't duplicate these in AGENTS.md)
3. **CI/build commands** — Check `Makefile`, `package.json` scripts, CI configs for canonical commands
4. **Monorepo indicators** — Check for `pnpm-workspace.yaml`, `nx.json`, Cargo workspace, or subdirectory `package.json` files
5. **Existing conventions** — Check for existing CONTRIBUTING.md, docs/, or README patterns

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @agents-md-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/agents-md-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/agents-md-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @agents-md-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: File-Scoped Commands

| Task | Command |
|------|---------|
| Typecheck | `pnpm tsc --noEmit path/to/file.ts` |
| Lint | `pnpm eslint path/to/file.ts` |
| Test | `pnpm jest path/to/file.test.ts` |
```

### Commit Attribution
Always include this section. Agents should use their own identity:
```markdown

#### Imported: Example Structure

```markdown
# Agent Instructions

#### Imported: File-Scoped Commands

| Task | Command |
|------|---------|
| Typecheck | `pnpm tsc --noEmit path/to/file.ts` |
| Lint | `pnpm eslint path/to/file.ts` |
| Test | `pnpm jest path/to/file.test.ts` |

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Headers + bullets — No paragraphs
- Code blocks — For commands and templates
- Reference, don't embed — Point to existing docs: "See CONTRIBUTING.md for setup" or "Follow patterns in src/api/routes/"
- No filler — No intros, conclusions, or pleasantries
- Trust capabilities — Omit obvious context
- Prefer file-scoped commands — Per-file test/lint/typecheck commands over project-wide builds
- Don't duplicate linters — Code style lives in linter configs, not AGENTS.md

### Imported Operating Notes

#### Imported: Writing Rules

- **Headers + bullets** — No paragraphs
- **Code blocks** — For commands and templates
- **Reference, don't embed** — Point to existing docs: "See `CONTRIBUTING.md` for setup" or "Follow patterns in `src/api/routes/`"
- **No filler** — No intros, conclusions, or pleasantries
- **Trust capabilities** — Omit obvious context
- **Prefer file-scoped commands** — Per-file test/lint/typecheck commands over project-wide builds
- **Don't duplicate linters** — Code style lives in linter configs, not AGENTS.md

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/agents-md`, fails to mention provenance, or does not use the support pack at all.
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

### Imported Reference Notes

#### Imported: Required Sections

### Package Manager
Which tool and key commands only:
```markdown

#### Imported: Package Manager

Use **pnpm**: `pnpm install`, `pnpm dev`, `pnpm test`
```

### File-Scoped Commands
Per-file commands are faster and cheaper than full project builds. Always include when available:
```markdown

#### Imported: Commit Attribution

AI commits MUST include:
```
Co-Authored-By: (the agent model's name and attribution byline)
```
Example: `Co-Authored-By: Claude Sonnet 4 <noreply@example.com>`
```

### Key Conventions
Project-specific patterns agents must follow. Keep brief.

#### Imported: Optional Sections

Add only if truly needed:
- API route patterns (show template, not explanation)
- CLI commands (table format)
- File naming conventions
- Project structure hints (point to critical files, flag legacy code to avoid)
- Monorepo overrides (subdirectory `AGENTS.md` files override root)

#### Imported: Anti-Patterns

Omit these:
- "Welcome to..." or "This document explains..."
- "You should..." or "Remember to..."
- Linter/formatter rules already in config files (`.eslintrc`, `biome.json`, `ruff.toml`)
- Listing installed skills or plugins (agents discover these automatically)
- Full project-wide build commands when file-scoped alternatives exist
- Obvious instructions ("run tests", "write clean code")
- Explanations of why (just say what)
- Long prose paragraphs

#### Imported: Package Manager

Use **pnpm**: `pnpm install`, `pnpm dev`

#### Imported: Commit Attribution

AI commits MUST include:
```
Co-Authored-By: (the agent model's name and attribution byline)
```

#### Imported: API Routes

[Template code block]

#### Imported: CLI

| Command | Description |
|---------|-------------|
| `pnpm cli sync` | Sync data |
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
