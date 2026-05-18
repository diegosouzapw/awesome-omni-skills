---
name: recursive-context-pruning-token-budgeting-v2
description: "Recursive Context Pruning & Token Budgeting workflow skill. Use this skill when the user needs Optimizes AI agent performance by pruning redundant context, managing token usage, and enforcing ultra-concise, direct-to-value responses and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["efficiency", "token-optimization", "brevity", "context-management", "recursive-context-pruning-token-budgeting-v2", "recursive-context-pruning-token-budgeting", "optimizes", "performance"]
complexity: intermediate
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "Kench001"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# Recursive Context Pruning & Token Budgeting

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/recursive-context-pruning-token-budgeting` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Recursive Context Pruning & Token Budgeting

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations, Security & Safety Notes, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when building multi-step agents to prevent repetition and "memory drift" in long conversations.
- Use when working with large document sets or codebases to avoid dumping entire files into the prompt.
- Use when you need purely functional output (code/logic) without "Sure! Here is your..." intros.
- Use when the request clearly matches the imported source intent: Optimizes AI agent performance by pruning redundant context, managing token usage, and enforcing ultra-concise, direct-to-value responses.
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

This skill implements a "Gatekeeper" logic to prevent context window bloat and unnecessary token expenditure. It ensures the agent only processes relevant data shards and adheres to an Atomic Precision protocol—delivering functional answers with zero conversational filler. By recursively summarizing state and stripping "bridge phrases," it maximizes the longevity and speed of long-running development workflows.

#### Imported: How It Works

### Step 1: Metadata Sharding

Scan the available data for headers, summaries, and key indicators. Create a "map" of the context rather than injecting the full source. Never pull the entire file into the prompt unless a specific, narrowed fragment is requested.

### Step 2: Token Budget Allocation

Calculate a "Safe Response Limit" based on the current context window. Allocate 30% for current logic processing, 20% for immediate output, and 50% for a future context buffer.

### Step 3: Atomic Output Filtering

Strip all "Bridge Phrases" (e.g., "I've updated the code," "Based on your request," "Sure"). Start the response immediately with the solution or the code block.

### Step 4: Ambiguity Check

Before executing Step 3, scan for missing critical variables (e.g., specific file names or environment types). If the prompt is too ambiguous, bypass the atomic output and generate exactly one concise question to resolve the blocker.

### Step 5: Abstractive Compression

Summarize the current turn into a "compressed state string" (e.g., `[Project: Feasify | State: Auth-Fixed | Remaining-Tasks: 2]`) to discard redundant conversational data before the next prompt.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @recursive-context-pruning-token-budgeting-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @recursive-context-pruning-token-budgeting-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @recursive-context-pruning-token-budgeting-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @recursive-context-pruning-token-budgeting-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Filtered Code Output (No Filler)

```text
User: "Update the Firebase config to use environment variables."
```

```javascript
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID
};
```

### Example 2: Essential Clarification

```text
User: "Deploy the function."
```

```text
"Specify environment: production or staging?"
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Direct Start: Place the code or answer at the very first character of the response.
- ✅ Summarize-as-you-go: Turn 10 pages of discussion into 5 bullet points for the next turn.
- ✅ Omit Signatures: Never end with "Let me know if you need more help."
- ❌ No Bridge Phrases: Avoid "Here is the code," "Sure," or "I can help with that."
- ❌ No Guessing: If input is missing, ask immediately rather than wasting tokens on a generic guess.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Direct Start:** Place the code or answer at the very first character of the response.
- ✅ **Summarize-as-you-go:** Turn 10 pages of discussion into 5 bullet points for the next turn.
- ✅ **Omit Signatures:** Never end with "Let me know if you need more help."
- ❌ **No Bridge Phrases:** Avoid "Here is the code," "Sure," or "I can help with that."
- ❌ **No Guessing:** If input is missing, ask immediately rather than wasting tokens on a generic guess.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/recursive-context-pruning-token-budgeting`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@production-audit-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@production-scheduling-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@quality-nonconformance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@react-best-practices-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- This skill does not replace environment-specific validation, testing, or expert review.
- Extreme brevity can occasionally hide important nuances; use concise inline comments (`// crucial step`) for critical notes.

#### Imported: Security & Safety Notes

- Never prune safety headers, environment-specific security constraints, or system-level instructions during the compression stage.
- Maintain original system instructions at the "Root" of the context to prevent context-loss-based jailbreaks.

#### Imported: Common Pitfalls

- **Problem:** The response is so brief it lacks the context needed for implementation.
  **Solution:** Use concise inline code comments instead of separate paragraphs of text.

- **Problem:** The agent loses the overarching goal due to over-compression.
  **Solution:** Always pin the "Primary Objective" to the top of every pruned prompt.
