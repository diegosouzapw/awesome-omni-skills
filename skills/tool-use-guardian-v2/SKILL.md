---
name: tool-use-guardian-v2
description: "Tool Use Guardian workflow skill. Use this skill when the user needs FREE \u2014 Intelligent tool-call reliability wrapper. Monitors, retries, fixes, and learns from tool failures. Auto-recovers from truncated JSON, timeouts, rate limits, and mid-chain failures and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["reliability", "tool-use", "error-handling", "retries", "recovery", "agent-infrastructure", "tool-use-guardian-v2", "tool-use-guardian"]
complexity: beginner
risk: safe
tools: ["cursor", "antigravity", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "christopherlhammer11-ai"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Tool Use Guardian

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/tool-use-guardian` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Tool Use Guardian

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Links, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when tool calls return truncated or malformed JSON
- Use when APIs timeout or rate-limit your agent mid-task
- Use when a multi-step chain breaks partway through
- Use when you need automatic retry logic without writing it yourself
- Use for any agent workflow that depends on external tool reliability
- Use when the request clearly matches the imported source intent: FREE — Intelligent tool-call reliability wrapper. Monitors, retries, fixes, and learns from tool failures. Auto-recovers from truncated JSON, timeouts, rate limits, and mid-chain failures.

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

1. bash npx skills add christopherlhammer11-ai/tool-use-guardian
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Install

```bash
npx skills add christopherlhammer11-ai/tool-use-guardian
```

#### Imported: Overview

The reliability wrapper every AI agent needs. Monitors tool calls, auto-retries failures, fixes truncated responses, and learns which tools are unreliable — so you never lose your chain of thought.

Free forever. Built by the Genesis Agent Marketplace.

#### Imported: How It Works

### Step 1: Pre-Call Validation

Before every tool call, Guardian validates:
- Required parameters are present and correctly typed
- The tool is not marked as "unreliable" from previous failures
- Request size is within known limits

### Step 2: Failure Classification

When a tool call fails, Guardian classifies the failure into one of 9 categories:

| Failure Type | Recovery Action |
|---|---|
| Truncated JSON | Re-fetch with pagination or smaller chunks |
| API Timeout | Retry once with simpler request, then decompose |
| Rate Limit (429) | Exponential backoff, max 3 retries |
| Auth Expired | Flag for user intervention |
| Mid-chain Break | Resume from last successful checkpoint |
| Error-as-200 | Detect `{"error": "..."}` disguised as success |
| Schema Mismatch | Attempt auto-coercion, warn if lossy |
| Network Failure | Retry with jitter, max 2 attempts |
| Unknown Error | Log full context, escalate to user |

### Step 3: Chain Protection

For multi-step tool chains, Guardian maintains checkpoints. If step 4 of 7 fails, it resumes from step 4 — never restarts from scratch.

### Step 4: Learning

Guardian tracks failure patterns per tool. After 3+ failures of the same type, it marks the tool as unreliable and suggests alternatives.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @tool-use-guardian-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @tool-use-guardian-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @tool-use-guardian-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @tool-use-guardian-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Let Guardian wrap all external tool calls automatically
- ✅ Review Guardian's reliability reports to identify flaky tools
- ✅ Use checkpoint recovery for long chains
- ❌ Don't disable retry logic for rate-limited APIs
- ❌ Don't ignore repeated failure warnings
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Let Guardian wrap all external tool calls automatically
- ✅ Review Guardian's reliability reports to identify flaky tools
- ✅ Use checkpoint recovery for long chains
- ❌ Don't disable retry logic for rate-limited APIs
- ❌ Don't ignore repeated failure warnings

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/tool-use-guardian`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@threejs-lighting-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@threejs-loaders-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@threejs-materials-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@threejs-postprocessing-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Links

- **Repo:** https://github.com/christopherlhammer11-ai/tool-use-guardian
- **Marketplace:** https://genesis-node-api.vercel.app
- **Browse skills:** https://genesis-marketplace.vercel.app

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
