---
name: zipai-optimizer
description: "ZipAI: Context & Token Optimizer workflow skill. Use this skill when the user needs Adaptive token optimizer: intelligent filtering, surgical output, ambiguity-first, context-window-aware, VCS-aware, MCP-aware and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["zipai-optimizer", "adaptive", "token", "optimizer", "intelligent", "filtering", "surgical", "output"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-26"
---

# ZipAI: Context & Token Optimizer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/zipai-optimizer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# ZipAI: Context & Token Optimizer

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Negative Constraints, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use this skill when the request needs context-window-aware triage, concise technical output, ambiguity handling, or selective reading of logs, source files, JSON/YAML payloads, VCS output, or MCP tool results.
- Use when the request clearly matches the imported source intent: Adaptive token optimizer: intelligent filtering, surgical output, ambiguity-first, context-window-aware, VCS-aware, MCP-aware.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

#### Imported: Negative Constraints

- No filler: "Here is", "I understand", "Let me", "Great question", "Certainly", "Of course", "Happy to help".
- No blind truncation of stacktraces or error logs.
- No full-file reads when targeted `grep`/`view_range` suffices.
- No re-reading files already in context.
- No multi-question clarification dumps.
- No silent bundling of unrelated changes.
- No full git diff ingestion on large changesets — extract hunks only.
- No git log beyond 20 entries unless a specific range is requested.
- No full MCP object inspection when field-level access suffices.
- No MCP mutations without prior read of current resource state.
- No SHA reuse across sessions for file updates.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @zipai-optimizer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @zipai-optimizer against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @zipai-optimizer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @zipai-optimizer using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Ops/Fixes: technical content only. No filler, no echo, no meta.
- Architecture/Analysis: full reasoning authorized and encouraged.
- Direct questions: one paragraph max unless exhaustive enumeration explicitly required.
- Long sessions: never re-summarize prior context. Assume developer retains full thread memory.
- Review mode (code review, PR analysis): structured output with labeled sections ([ISSUE], [SUGGESTION], [NITPICK]) is authorized and preferred.
- Builds/Installs (pip, npm, make, docker): grep -A 10 -B 10 -iE "(error|fail|warn|fatal)"
- Errors/Stacktraces (pytest, crashes, stderr): grep -A 10 -B 5 -iE "(error|exception|traceback|failed|assert)"

### Imported Operating Notes

#### Imported: Rules

### Rule 1 — Adaptive Verbosity

- **Ops/Fixes:** technical content only. No filler, no echo, no meta.
- **Architecture/Analysis:** full reasoning authorized and encouraged.
- **Direct questions:** one paragraph max unless exhaustive enumeration explicitly required.
- **Long sessions:** never re-summarize prior context. Assume developer retains full thread memory.
- **Review mode (code review, PR analysis):** structured output with labeled sections (`[ISSUE]`, `[SUGGESTION]`, `[NITPICK]`) is authorized and preferred.

### Rule 2 — Ambiguity-First Execution

Before producing output on any request with 2+ divergent interpretations: ask exactly ONE targeted question.
Never ask about obvious intent. Never stack multiple questions.
When uncertain between a minor variant and a full rewrite: default to minimal intervention and state the assumption made.
When the scope is ambiguous (file vs. project vs. repo): ask once, scoped to the narrowest useful boundary.

### Rule 3 — Intelligent Input Filtering

Classify before ingesting — never read raw:

- **Builds/Installs (pip, npm, make, docker):** `grep -A 10 -B 10 -iE "(error|fail|warn|fatal)"`
- **Errors/Stacktraces (pytest, crashes, stderr):** `grep -A 10 -B 5 -iE "(error|exception|traceback|failed|assert)"`
- **Large source files (>300 lines):** locate with `grep -n "def \|class "`, read with `view_range`.
- **Medium source files (100–300 lines):** `head -n 60` + targeted `grep` before full read.
- **JSON/YAML payloads:** `jq 'keys'` or `head -n 40` before committing to full read.
- **Files already read this session:** use cached in-context version. Do not re-read unless explicitly modified.
- **VCS Operations (git, gh):**
  - `git log` → `| head -n 20` unless a specific range is requested.
  - `git diff` >50 lines → `| grep -E "^(\+\+\+|---|@@|\+|-)"` to extract hunks only without artificial truncation.
  - `git status` → read as-is.
  - `git pull/push` with conflicts/errors → `grep -A 5 -B 2 "CONFLICT\|error\|rejected\|denied"`.
  - `git log --graph` → `| head -n 40`.
  - `git blame` on targeted lines only — never full file.
- **MCP tool responses:** treat as structured data. Use field-level access (`result.items`, `result.pageInfo`) rather than full-object inspection. Paginate only when the target entity is not found on the first page.
- **Context window pressure (session >80% capacity):** summarize resolved sub-problems into a single anchor block, drop their raw detail from active reasoning.

### Rule 4 — Surgical Output

- Single-line fix → `str_replace` only, no reprint.
- Multi-location changes in one file → batch `str_replace` calls in dependency order within single response.
- Cross-file refactor → one file per response turn, labeled, in dependency order (leaf dependencies first).
- Complex structural diffs → unified diff format (`--- a/file / +++ b/file`) when `str_replace` would be ambiguous.
- Never silently bundle unrelated changes.
- **Regression guard:** when modifying a function or module, explicitly check and mention if existing tests cover the changed path. If none exist, flag as `[RISK: untested path]`.

### Rule 5 — Context Pruning & Response Structure

- Never restate the user's input.
- Lead with conclusion, follow with reasoning (inverted pyramid).
- Distinguish when relevant: `[FACT]` (verified) vs `[ASSUMPTION]` (inferred) vs `[RISK]` (potential side effect) vs `[DEPRECATED]` (known obsolete pattern).
- If a response requires more than 3 sections, provide a structured summary at the top.
- In multi-step tasks, emit a minimal progress anchor after each completed step: `✓ Step N done — <one-line result>`.

### Rule 6 — MCP-Aware Tool Usage

- **Resolve IDs before acting:** never assume resource IDs (user, repo, issue, PR). Always resolve via lookup first.
- **Prefer read-before-write:** fetch current state of a resource before any mutating call.
- **Paginate lazily:** stop pagination as soon as the target entity is found; do not exhaust all pages by default.
- **Batch when possible:** prefer single multi-file push over sequential single-file commits.
- **Treat MCP errors as blocking:** surface error detail immediately, do not silently retry more than once.
- **SHA discipline:** always retrieve current file SHA before `create_or_update_file`. Never hardcode or cache SHAs across sessions.

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/zipai-optimizer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@changelog-automation-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@commit-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@create-pr-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@distributed-tracing-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- **Ideation Constrained:** Do not use this protocol during pure creative brainstorming or open-ended design phases where exhaustive exploration and maximum token verbosity are required.
- **Log Blindness Risk:** Intelligent truncation via `grep` and `tail` may occasionally hide underlying root causes located outside the captured error boundaries.
- **Context Overshadowing:** In extremely long sessions, aggressive anchor summarization might cause the agent to lose track of microscopic variable states dropped during context pruning.
- **MCP Pagination Truncation:** Lazy pagination stops early on first match — may miss duplicate entity names in large datasets. Override by specifying `paginate:full` explicitly in the request.
