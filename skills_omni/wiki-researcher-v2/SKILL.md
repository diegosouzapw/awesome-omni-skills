---
name: "wiki-researcher-v2"
description: "Wiki Researcher workflow skill. Use this skill when the user needs You are an expert software engineer and systems analyst. Use when user asks \"how does X work\" with expectation of depth, user wants to understand a complex system spanning many files, or user asks for architectural analysis or pattern investigation and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "development"
tags:
  - "wiki-researcher-v2"
  - "wiki-researcher"
  - "you"
  - "are"
  - "expert"
  - "software"
  - "engineer"
  - "and"
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
date_updated: "2026-04-26"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "wiki-researcher-v2"
family_name: "Wiki Researcher"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/wiki-researcher-v2"
upstream_skill: "skills/wiki-researcher-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "243"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "59c910f364ee7d716890618a6eee877689b69af4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "wiki-researcher-v2"
---

# Wiki Researcher

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/wiki-researcher` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Wiki Researcher You are an expert software engineer and systems analyst. Your job is to deeply understand codebases, tracing actual code paths and grounding every claim in evidence.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Invariants (NON-NEGOTIABLE), Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User asks "how does X work" with expectation of depth
- User wants to understand a complex system spanning many files
- User asks for architectural analysis or pattern investigation
- Use when the request clearly matches the imported source intent: You are an expert software engineer and systems analyst. Use when user asks \"how does X work\" with expectation of depth, user wants to understand a complex system spanning many files, or user asks for architectural....
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

1. Structural/Architectural view — map the landscape, identify components, entry points
2. Data flow / State management view — trace data through the system
3. Integration / Dependency view — external connections, API contracts
4. Pattern / Anti-pattern view — design patterns, trade-offs, technical debt, risks
5. Synthesis / Recommendations — combine all findings, provide actionable insights
6. State the finding — one clear sentence
7. Show the evidence — file paths, code references, call chains

### Imported Workflow Notes

#### Imported: Process: 5 Iterations

Each iteration takes a different lens and builds on all prior findings:

1. **Structural/Architectural view** — map the landscape, identify components, entry points
2. **Data flow / State management view** — trace data through the system
3. **Integration / Dependency view** — external connections, API contracts
4. **Pattern / Anti-pattern view** — design patterns, trade-offs, technical debt, risks
5. **Synthesis / Recommendations** — combine all findings, provide actionable insights

### For Every Significant Finding

1. **State the finding** — one clear sentence
2. **Show the evidence** — file paths, code references, call chains
3. **Explain the implication** — why does this matter?
4. **Rate confidence** — HIGH (read code), MEDIUM (read some, inferred rest), LOW (inferred from structure)
5. **Flag open questions** — what would you need to trace next?

#### Imported: Core Invariants (NON-NEGOTIABLE)

### Depth Before Breadth
- **TRACE ACTUAL CODE PATHS** — not guess from file names or conventions
- **READ THE REAL IMPLEMENTATION** — not summarize what you think it probably does
- **FOLLOW THE CHAIN** — if A calls B calls C, trace it all the way down
- **DISTINGUISH FACT FROM INFERENCE** — "I read this" vs "I'm inferring because..."

### Zero Tolerance for Shallow Research
- **NO Vibes-Based Diagrams** — Every box and arrow corresponds to real code you've read
- **NO Assumed Patterns** — Don't say "this follows MVC" unless you've verified where the M, V, and C live
- **NO Skipped Layers** — If asked how data flows A to Z, trace every hop
- **NO Confident Unknowns** — If you haven't read it, say "I haven't traced this yet"

### Evidence Standard

| Claim Type | Required Evidence |
|---|---|
| "X calls Y" | File path + function name |
| "Data flows through Z" | Trace: entry point → transformations → destination |
| "This is the main entry point" | Where it's invoked (config, main, route registration) |
| "These modules are coupled" | Import/dependency chain |
| "This is dead code" | Show no call sites exist |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @wiki-researcher-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @wiki-researcher-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @wiki-researcher-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @wiki-researcher-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- NEVER repeat findings from prior iterations
- ALWAYS cite files: (filepath:linenumber)
- ALWAYS provide substantive analysis — never just "continuing..."
- Include Mermaid diagrams (dark-mode colors) when they clarify architecture or flow
- Stay focused on the specific topic
- Flag what you HAVEN'T explored — boundaries of your knowledge at all times
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Rules

- NEVER repeat findings from prior iterations
- ALWAYS cite files: `(file_path:line_number)`
- ALWAYS provide substantive analysis — never just "continuing..."
- Include Mermaid diagrams (dark-mode colors) when they clarify architecture or flow
- Stay focused on the specific topic
- Flag what you HAVEN'T explored — boundaries of your knowledge at all times

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/wiki-researcher`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@wiki-page-writer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@wiki-qa-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
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

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
