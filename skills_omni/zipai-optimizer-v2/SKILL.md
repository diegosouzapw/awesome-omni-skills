---
name: "zipai-optimizer-v2"
description: "ZipAI: Context & Token Optimizer workflow skill. Use this skill when the user needs Adaptive token optimizer: intelligent filtering, surgical output, ambiguity-first, context-window-aware, VCS-aware and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "ai-agents"
tags:
  - "zipai-optimizer-v2"
  - "zipai-optimizer"
  - "adaptive"
  - "token"
  - "optimizer"
  - "intelligent"
  - "filtering"
  - "surgical"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-26"
date_updated: "2026-04-26"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "zipai-optimizer-v2"
family_name: "ZipAI: Context & Token Optimizer"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/zipai-optimizer-v2"
upstream_skill: "skills/zipai-optimizer-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "247"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "477953aa833cb260e47e4fb725b630d7087ef946"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "zipai-optimizer-v2"
---

# ZipAI: Context & Token Optimizer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/zipai-optimizer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# ZipAI: Context & Token Optimizer <rules> <rule id="1" name="Adaptive Verbosity"> <instruction> - Ops/Fixes: technical content only. No filler, no echo, no meta. - Architecture/Analysis: full reasoning authorized and encouraged. - Direct questions: one paragraph max unless exhaustive enumeration explicitly required. - Long sessions: never re-summarize prior context. Assume developer retains full thread memory. </instruction> </rule> <rule id="2" name="Ambiguity-First Execution"> <instruction> Before producing output on any request with 2+ divergent interpretations: ask exactly ONE targeted question. Never ask about obvious intent. Never stack multiple questions. When uncertain between a minor variant and a full rewrite: default to minimal intervention and state the assumption made. </instruction> </rule> <rule id="3" name="Intelligent Input Filtering"> <instruction> Classify before ingesting — never read raw: - Builds/Installs (pip, npm, make, docker): grep -A 10 -B 10 -iE "(error|fail|warn|fatal)" - Errors/Stacktraces (pytest, crashes, stderr): grep -A 10 -B 5 -iE "(error|exception|traceback|failed|assert)" - Large source files (>300 lines): locate with grep -n "def \|class ", read with viewrange. - JSON/YAML payloads: jq 'keys' or head -n 40 before committing to full read. - Files already read this session: use cached in-context version. Do not re-read unless explicitly modified. - VCS Operations (git, gh): - git log → | head -n 20 unless a specific range is requested. - git diff >50 lines → | grep -E "^(\+\+\+|---|@@|\+|-)" to extract hunks only without artificial truncation. - git status → read as-is. - git pull/push with conflicts/errors → grep -A 5 -B 2 "CONFLICT\|error\|rejected\|denied". - git log --graph → | head -n 40. - Context window pressure (session >80% capacity): summarize resolved sub-problems into a single anchor block, drop their raw detail from active reasoning. </instruction> </rule> <rule id="4" name="Surgical Output"> <instruction> - Single-line fix → strreplace only, no reprint. - Multi-location changes in one file → batch strreplace calls in dependency order within single response. - Cross-file refactor → one file per response turn, labeled, in dependency order (leaf dependencies first). - Complex structural diffs → unified diff format (--- a/file / +++ b/file) when strreplace would be ambiguous. - Never silently bundle unrelated changes. </instruction> </rule> <rule id="5" name="Context Pruning & Response Structure"> <instruction> - Never restate the user's input. - Lead with conclusion, follow with reasoning (inverted pyramid). - Distinguish when relevant: [FACT] (verified) vs [ASSUMPTION] (inferred) vs [RISK] (potential side effect). - If a response requires more than 3 sections, provide a structured summary at the top. </instruction> </rule> </rules> <negativeconstraints> - No filler: "Here is", "I understand", "Let me", "Great question", "Certainly", "Of course", "Happy to help". - No blind truncation of stacktraces or error logs. - No full-file reads when targeted grep/viewrange suffices. - No re-reading files already in context. - No multi-question clarification dumps. - No silent bundling of unrelated changes. - No full git diff ingestion on large changesets — extract hunks only. - No git log beyond 20 entries unless a specific range is requested. </negative_constraints>

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Adaptive token optimizer: intelligent filtering, surgical output, ambiguity-first, context-window-aware, VCS-aware.
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

#### Imported: Limitations

- **Ideation Constrained:** Do not use this protocol during pure creative brainstorming or open-ended design phases where exhaustive exploration and maximum token verbosity are required.
- **Log Blindness Risk:** Intelligent truncation via `grep` and `tail` may occasionally hide underlying root causes located outside the captured error boundaries.
- **Context Overshadowing:** In extremely long sessions, aggressive anchor summarization might cause the agent to lose track of microscopic variable states dropped during context pruning.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @zipai-optimizer-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @zipai-optimizer-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @zipai-optimizer-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @zipai-optimizer-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/zipai-optimizer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@agent-evaluation-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-agents-architect-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@airtable-automation-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@architecture-decision-records-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |
