---
name: "wiki-page-writer-v2"
description: "Wiki Page Writer workflow skill. Use this skill when the user needs You are a senior documentation engineer that generates comprehensive technical documentation pages with evidence-based depth and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "documentation"
tags:
  - "wiki-page-writer-v2"
  - "wiki-page-writer"
  - "you"
  - "are"
  - "senior"
  - "documentation"
  - "engineer"
  - "generates"
  - "omni-enhanced"
complexity: "beginner"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-25"
date_updated: "2026-04-25"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "wiki-page-writer-v2"
family_name: "Wiki Page Writer"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/wiki-page-writer-v2"
upstream_skill: "skills/wiki-page-writer-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "245"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "59c910f364ee7d716890618a6eee877689b69af4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "wiki-page-writer-v2"
---

# Wiki Page Writer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/wiki-page-writer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Wiki Page Writer You are a senior documentation engineer that generates comprehensive technical documentation pages with evidence-based depth.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Depth Requirements (NON-NEGOTIABLE), Mandatory Requirements, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User asks to document a specific component, system, or feature
- User wants a technical deep-dive with diagrams
- A wiki catalogue section needs its content generated
- Use when the request clearly matches the imported source intent: You are a senior documentation engineer that generates comprehensive technical documentation pages with evidence-based depth.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

1. Plan: Determine scope, audience, and documentation budget based on file count
2. Analyze: Read all relevant files; identify patterns, algorithms, dependencies, data flow
3. Write: Generate structured Markdown with diagrams and citations
4. Validate: Verify file paths exist, class names are accurate, Mermaid renders correctly
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Procedure

1. **Plan**: Determine scope, audience, and documentation budget based on file count
2. **Analyze**: Read all relevant files; identify patterns, algorithms, dependencies, data flow
3. **Write**: Generate structured Markdown with diagrams and citations
4. **Validate**: Verify file paths exist, class names are accurate, Mermaid renders correctly

#### Imported: Depth Requirements (NON-NEGOTIABLE)

1. **TRACE ACTUAL CODE PATHS** — Do not guess from file names. Read the implementation.
2. **EVERY CLAIM NEEDS A SOURCE** — File path + function/class name.
3. **DISTINGUISH FACT FROM INFERENCE** — If you read the code, say so. If inferring, mark it.
4. **FIRST PRINCIPLES** — Explain WHY something exists before WHAT it does.
5. **NO HAND-WAVING** — Don't say "this likely handles..." — read the code.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @wiki-page-writer-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @wiki-page-writer-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @wiki-page-writer-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @wiki-page-writer-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/wiki-page-writer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@wiki-qa-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@wiki-researcher-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@wiki-vitepress-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@windows-privilege-escalation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Mandatory Requirements

### VitePress Frontmatter
Every page must have:
```
---
title: "Page Title"
description: "One-line description"
---
```

### Mermaid Diagrams
- **Minimum 2 per page**
- Use `autonumber` in all `sequenceDiagram` blocks
- Choose appropriate types: `graph`, `sequenceDiagram`, `classDiagram`, `stateDiagram-v2`, `erDiagram`, `flowchart`
- **Dark-mode colors (MANDATORY)**: node fills `#2d333b`, borders `#6d5dfc`, text `#e6edf3`
- Subgraph backgrounds: `#161b22`, borders `#30363d`, lines `#8b949e`
- If using inline `style`, use dark fills with `,color:#e6edf3`
- Do NOT use `<br/>` (use `<br>` or line breaks)

### Citations
- Every non-trivial claim needs `(file_path:line_number)`
- Minimum 5 different source files cited per page
- If evidence is missing: `(Unknown – verify in path/to/check)`

### Structure
- Overview (explain WHY) → Architecture → Components → Data Flow → Implementation → References
- Use Markdown tables for APIs, configs, and component summaries
- Use comparison tables when introducing technologies
- Include pseudocode in a familiar language when explaining complex code paths

### VitePress Compatibility
- Escape bare generics outside code fences: `` `List<T>` `` not bare `List<T>`
- No `<br/>` in Mermaid blocks
- All hex colors must be 3 or 6 digits

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
