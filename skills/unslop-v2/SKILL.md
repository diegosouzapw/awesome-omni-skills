---
name: unslop-v2
description: "unslop \u2014 Strip AI Writing Patterns via CLI workflow skill. Use this skill when the user needs Post-process AI-generated text through the unslop CLI to strip AI writing patterns before publishing and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: communication
tags: ["writing", "content-quality", "ai-writing", "text-processing", "cli", "publishing", "unslop-v2", "unslop"]
complexity: intermediate
risk: caution
tools: ["claude-code", "cursor", "gemini-cli", "codex-cli", "antigravity", "opencode"]
source: community
author: "MohamedAbdallah-14"
date_added: "2026-04-26"
date_updated: "2026-04-26"
---

# unslop — Strip AI Writing Patterns via CLI

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/unslop` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# unslop — Strip AI Writing Patterns via CLI

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations, Security & Safety Notes.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When you have AI-generated text ready to publish and want a final cleanup pass
- When working in a shell pipeline where text quality needs to be enforced automatically
- When writing commit hooks or CI steps that validate content before it ships
- When you need reproducible text normalization across multiple runs
- Use when the request clearly matches the imported source intent: Post-process AI-generated text through the unslop CLI to strip AI writing patterns before publishing.
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

1. Install once: bash pipx install unslop # or uv tool install unslop Verify: bash unslop --version
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Setup

Install once:

```bash
pipx install unslop
# or
uv tool install unslop
```

Verify:

```bash
unslop --version
```

#### Imported: Overview

unslop is a CLI tool that post-processes text to remove AI writing patterns programmatically. Unlike skills that ask the agent to avoid AI-isms, unslop runs as a deterministic pipeline step: pipe text in, get clean text out. Use it as a final pass before committing docs, publishing posts, or sending any AI-generated content to production.

The `--deterministic` flag makes output reproducible — same input always produces same output. The `--stdin` flag reads from stdin, enabling shell pipeline composition.

#### Imported: How It Works

### Step 1: Pipe Text Through unslop

Standard cleanup (may vary slightly between runs):

```bash
echo "This leverages cutting-edge AI to deliver robust solutions." | unslop --stdin
```

Deterministic cleanup (same input → same output every run):

```bash
echo "This leverages cutting-edge AI to deliver robust solutions." | unslop --stdin --deterministic
```

### Step 2: Use in Shell Pipelines

Pipe the output of any command through unslop:

```bash
cat draft.md | unslop --stdin --deterministic > clean.md
```

Or chain with other tools:

```bash
cat draft.md | unslop --stdin --deterministic | pbcopy   # macOS: copy clean text to clipboard
```

### Step 3: Integrate into Commit Hooks or CI

Add to a pre-commit hook or CI step to enforce quality gates on any generated content before it ships:

```bash
# In .git/hooks/pre-commit or a CI script
CONTENT=$(cat docs/changelog.md)
CLEANED=$(echo "$CONTENT" | unslop --stdin --deterministic)
if [ "$CONTENT" != "$CLEANED" ]; then
  echo "Changelog contains AI writing patterns. Run: cat docs/changelog.md | unslop --stdin --deterministic > docs/changelog.md"
  exit 1
fi
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @unslop-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @unslop-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @unslop-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @unslop-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Clean a Draft Document

```bash
cat blog-post-draft.md | unslop --stdin --deterministic > blog-post-final.md
```

### Example 2: Inline Cleanup During Writing

```bash
# Write content, pipe through unslop, write result back
cat README.md | unslop --stdin > README.clean.md && mv README.clean.md README.md
```

### Example 3: Validate Before Submitting a PR

```bash
# Check if any generated docs need cleanup
for f in docs/*.md; do
  ORIGINAL=$(cat "$f")
  CLEANED=$(echo "$ORIGINAL" | unslop --stdin --deterministic)
  [ "$ORIGINAL" != "$CLEANED" ] && echo "Needs cleanup: $f"
done
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Use --deterministic in CI and automation to ensure reproducible output
- ✅ Run on the final draft, not intermediate iterations
- ✅ Combine with the avoid-ai-writing skill for both generation-time guidance and post-processing
- ❌ Don't run on code files — unslop targets prose, not source code
- ❌ Don't skip review after unslop: automated cleanup can occasionally change meaning; read the output
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Use `--deterministic` in CI and automation to ensure reproducible output
- ✅ Run on the final draft, not intermediate iterations
- ✅ Combine with the `avoid-ai-writing` skill for both generation-time guidance and post-processing
- ❌ Don't run on code files — unslop targets prose, not source code
- ❌ Don't skip review after unslop: automated cleanup can occasionally change meaning; read the output

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/unslop`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ab-test-setup-v4` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@analytics-tracking-v4` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@app-store-optimization-v4` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@content-creator-v4` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- Processes prose only — not code, JSON, or structured data
- Does not catch factual errors or substantive writing issues
- Some replacements may not fit every context; review the output before publishing
- Requires Python tooling such as `pipx` or `uv` for standalone CLI installation

#### Imported: Security & Safety Notes

- unslop reads from stdin and writes to stdout — no file system side effects by default
- `--deterministic` mode is local and does not make LLM API calls
- Default LLM mode may use `ANTHROPIC_API_KEY` or the Claude CLI; use `--deterministic` for sensitive local files and CI gates
- Safe to run in CI pipelines and commit hooks when pinned to deterministic mode
