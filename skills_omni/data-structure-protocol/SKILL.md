---
name: "data-structure-protocol"
description: "Data Structure Protocol (DSP) workflow skill. Use this skill when the user needs Give agents persistent structural memory of a codebase \\u2014 navigate dependencies, track public APIs, and understand why connections exist without re-reading the whole repo and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "ai-agents"
tags:
  - "data-structure-protocol"
  - "give"
  - "persistent"
  - "structural"
  - "memory"
  - "codebase"
  - "navigate"
  - "dependencies"
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
date_added: "2026-04-14"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "data-structure-protocol"
family_name: "Data Structure Protocol (DSP)"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/data-structure-protocol"
upstream_skill: "skills/data-structure-protocol"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "data-structure-protocol"
---

# Data Structure Protocol (DSP)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/data-structure-protocol` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Data Structure Protocol (DSP) LLM coding agents lose context between tasks. On large codebases they spend most of their tokens on "orientation" — figuring out where things live, what depends on what, and what is safe to change. DSP solves this by externalizing the project's structural map into a persistent, queryable graph stored in a .dsp/ directory next to the code. DSP is NOT documentation for humans and NOT an AST dump. It captures three things: meaning (why an entity exists), boundaries (what it imports and exposes), and reasons (why each connection exists). This is enough for an agent to navigate, refactor, and generate code without loading the entire source tree into the context window.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, How It Works, Integration, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The project has a .dsp/ directory (DSP is already set up)
- The user asks to set up DSP, bootstrap, or map a project's structure
- Creating, modifying, or deleting code files in a DSP-tracked project (to keep the graph updated)
- Navigating project structure, understanding dependencies, or finding specific modules
- The user mentions DSP, dsp-cli, .dsp, or structure mapping
- Performing impact analysis before a refactor or dependency replacement

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

#### Imported: Core Concepts

### Code = graph

DSP models the codebase as a directed graph. Nodes are **entities**, edges are **imports** and **shared/exports**.

Two entity kinds exist:
- **Object**: any "thing" that isn't a function (module/file/class/config/resource/external dependency)
- **Function**: an exported function/method/handler/pipeline

### Identity by UID, not by file path

Every entity gets a stable UID: `obj-<8hex>` for objects, `func-<8hex>` for functions. File paths are attributes that can change; UIDs survive renames, moves, and reformatting.

For entities inside a file, the UID is anchored with a comment marker in source code:

```js
// @dsp func-7f3a9c12
export function calculateTotal(items) { ... }
```

```python
# @dsp obj-e5f6g7h8
class UserService:
```

### Every connection has a "why"

When an import is recorded, DSP stores a short reason explaining *why* that dependency exists. This lives in the `exports/` reverse index of the imported entity. A dependency graph without reasons tells you *what imports what*; reasons tell you **what is safe to change and who will break**.

### Storage format

Each entity gets a small directory under `.dsp/`:

```
.dsp/
├── TOC                        # ordered list of all entity UIDs from root
├── obj-a1b2c3d4/
│   ├── description            # source path, kind, purpose (1-3 sentences)
│   ├── imports                # UIDs this entity depends on (one per line)
│   ├── shared                 # UIDs of public API / exported entities
│   └── exports/               # reverse index: who imports this and why
│       ├── <importer_uid>     # file content = "why" text
│       └── <shared_uid>/
│           ├── description    # what is exported
│           └── <importer_uid> # why this specific export is imported
└── func-7f3a9c12/
    ├── description
    ├── imports
    └── exports/
```

Everything is plain text. Diffable. Reviewable. No database needed.

### Full import coverage

Every file or artifact that is imported anywhere must be represented in `.dsp` as an Object — code, images, styles, configs, JSON, wasm, everything. External dependencies (npm packages, stdlib, etc.) are recorded as `kind: external` but their internals are never analyzed.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @data-structure-protocol to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @data-structure-protocol against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @data-structure-protocol for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @data-structure-protocol using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Setting up DSP and documenting a module

```bash
python dsp-cli.py --root . init

python dsp-cli.py --root . create-object "src/app.ts" "Main application entrypoint"
# Output: obj-a1b2c3d4

python dsp-cli.py --root . create-function "src/app.ts#start" "Starts the HTTP server" --owner obj-a1b2c3d4
# Output: func-7f3a9c12

python dsp-cli.py --root . create-shared obj-a1b2c3d4 func-7f3a9c12

python dsp-cli.py --root . add-import obj-a1b2c3d4 obj-deadbeef "HTTP routing"
```

### Example 2: Navigating the graph before making changes

```bash
python dsp-cli.py --root . search "authentication"
python dsp-cli.py --root . get-entity obj-a1b2c3d4
python dsp-cli.py --root . get-children obj-a1b2c3d4 --depth 2
python dsp-cli.py --root . get-recipients obj-a1b2c3d4
python dsp-cli.py --root . get-path obj-a1b2c3d4 func-7f3a9c12
```

### Example 3: Impact analysis before replacing a library

```bash
python dsp-cli.py --root . find-by-source "lodash"
# Output: obj-11223344

python dsp-cli.py --root . get-recipients obj-11223344
# Shows every module that imports lodash and WHY — lets you systematically replace it
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Update DSP immediately when creating new files, adding imports, or changing public APIs
- ✅ Do: Always add a meaningful why reason when recording an import — this is where most of DSP's value lives
- ✅ Do: Use kind: external for third-party libraries without analyzing their internals
- ✅ Do: Keep descriptions minimal (1-3 sentences about purpose, not implementation)
- ✅ Do: Treat .dsp/ diffs like code diffs — review them, keep them accurate
- ❌ Don't: Touch .dsp/ for internal-only changes that don't affect purpose or dependencies
- ❌ Don't: Change an entity's UID on rename/move (use move-entity instead)

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Update DSP immediately when creating new files, adding imports, or changing public APIs
- ✅ **Do:** Always add a meaningful `why` reason when recording an import — this is where most of DSP's value lives
- ✅ **Do:** Use `kind: external` for third-party libraries without analyzing their internals
- ✅ **Do:** Keep descriptions minimal (1-3 sentences about purpose, not implementation)
- ✅ **Do:** Treat `.dsp/` diffs like code diffs — review them, keep them accurate
- ❌ **Don't:** Touch `.dsp/` for internal-only changes that don't affect purpose or dependencies
- ❌ **Don't:** Change an entity's UID on rename/move (use `move-entity` instead)
- ❌ **Don't:** Create UIDs for every local variable or helper — only file-level Objects and public/shared entities

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/data-structure-protocol`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@conductor-validator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@confluence-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@content-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@content-marketer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: References

- **Full architecture specification**: [ARCHITECTURE.md](https://github.com/k-kolomeitsev/data-structure-protocol/blob/main/ARCHITECTURE.md)
- **CLI source + reference docs**: [skills/data-structure-protocol](https://github.com/k-kolomeitsev/data-structure-protocol/tree/main/skills/data-structure-protocol)
- **Introduction article**: [article.md](https://github.com/k-kolomeitsev/data-structure-protocol/blob/main/article.md)

#### Imported: How It Works

### Initial Setup

The skill relies on a standalone Python CLI script `dsp-cli.py`. If it is missing from the project, download it:

```bash
curl -O https://raw.githubusercontent.com/k-kolomeitsev/data-structure-protocol/main/skills/data-structure-protocol/scripts/dsp-cli.py
```

Requires **Python 3.10+**. All commands use `python dsp-cli.py --root <project-root> <command>`.

### Bootstrap (initial mapping)

If `.dsp/` is empty, traverse the project from root entrypoint(s) via DFS on imports:

1. Identify root entrypoints (`package.json` main, framework entry, `main.py`, etc.)
2. Document the root file: `create-object`, `create-function` for each export, `create-shared`, `add-import` for all dependencies
3. Take the first non-external import, document it fully, descend into its imports
4. Backtrack when no unvisited local imports remain; continue until all reachable files are documented
5. External dependencies: `create-object --kind external`, add to TOC, but never descend into `node_modules`/`site-packages`/etc.

### Workflow Rules

- **Before changing code**: Find affected entities via `search`, `find-by-source`, or `read-toc`. Read their `description` and `imports` to understand context.
- **When creating a file/module**: Call `create-object`. For each exported function — `create-function` (with `--owner`). Register exports via `create-shared`.
- **When adding an import**: Call `add-import` with a brief `why`. For external deps — first `create-object --kind external` if the entity doesn't exist.
- **When removing import/export/file**: Call `remove-import`, `remove-shared`, `remove-entity`. Cascade cleanup is automatic.
- **When renaming/moving a file**: Call `move-entity`. UID does not change.
- **Don't touch DSP** if only internal implementation changed without affecting purpose or dependencies.

### Key Commands

| Category | Commands |
|----------|----------|
| **Create** | `init`, `create-object`, `create-function`, `create-shared`, `add-import` |
| **Update** | `update-description`, `update-import-why`, `move-entity` |
| **Delete** | `remove-import`, `remove-shared`, `remove-entity` |
| **Navigate** | `get-entity`, `get-children --depth N`, `get-parents --depth N`, `get-path`, `get-recipients`, `read-toc` |
| **Search** | `search <query>`, `find-by-source <path>` |
| **Diagnostics** | `detect-cycles`, `get-orphans`, `get-stats` |

### When to Update DSP

| Code Change | DSP Action |
|---|---|
| New file/module | `create-object` + `create-function` + `create-shared` + `add-import` |
| New import added | `add-import` (+ `create-object --kind external` if new dep) |
| Import removed | `remove-import` |
| Export added | `create-shared` (+ `create-function` if new) |
| Export removed | `remove-shared` |
| File renamed/moved | `move-entity` |
| File deleted | `remove-entity` |
| Purpose changed | `update-description` |
| Internal-only change | **No DSP update needed** |

#### Imported: Integration

This skill connects naturally to:
- **context-compression** — DSP reduces the need for compression by providing targeted retrieval instead of loading everything
- **context-optimization** — DSP is a structural optimization: agents pull minimal "context bundles" instead of raw source
- **architecture** — DSP captures architectural boundaries (imports/exports) that feed system design decisions

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
