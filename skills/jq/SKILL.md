---
name: jq
description: "jq \u2014 JSON Querying and Transformation workflow skill. Use this skill when the user needs Expert jq usage for JSON querying, filtering, transformation, and pipeline integration. Practical patterns for real shell workflows and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["jq", "json", "shell", "cli", "data-transformation", "bash", "expert", "usage"]
complexity: advanced
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "kostakost2"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# jq — JSON Querying and Transformation

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/jq` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# jq — JSON Querying and Transformation

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Security & Safety Notes, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when parsing JSON output from APIs, CLI tools (AWS, GitHub, kubectl, docker), or log files
- Use when transforming JSON structure (rename keys, flatten arrays, group records)
- Use when the user needs jq inside a bash script or one-liner
- Use when explaining what a complex jq expression does
- Use when the request clearly matches the imported source intent: Expert jq usage for JSON querying, filtering, transformation, and pipeline integration. Practical patterns for real shell workflows.
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

`jq` is the standard CLI tool for querying and reshaping JSON. This skill covers practical, expert-level usage: filtering deeply nested data, transforming structures, aggregating values, and composing `jq` into shell pipelines. Every example is copy-paste ready for real workflows.

#### Imported: How It Works

`jq` takes a filter expression and applies it to JSON input. Filters compose with pipes (`|`), and `jq` handles arrays, objects, strings, numbers, booleans, and `null` natively.

### Basic Selection

```bash
# Extract a field
echo '{"name":"alice","age":30}' | jq '.name'
# "alice"

# Nested access
echo '{"user":{"email":"a@b.com"}}' | jq '.user.email'

# Array index
echo '[10, 20, 30]' | jq '.[1]'
# 20

# Array slice
echo '[1,2,3,4,5]' | jq '.[2:4]'
# [3, 4]

# All array elements
echo '[{"id":1},{"id":2}]' | jq '.[]'
```

### Filtering with `select`

```bash
# Keep only matching elements
echo '[{"role":"admin"},{"role":"user"},{"role":"admin"}]' \
  | jq '[.[] | select(.role == "admin")]'

# Numeric comparison
curl -s https://api.github.com/repos/owner/repo/issues \
  | jq '[.[] | select(.comments > 5)]'

# Test a field exists and is non-null
jq '[.[] | select(.email != null)]'

# Combine conditions
jq '[.[] | select(.active == true and .score >= 80)]'
```

### Mapping and Transformation

```bash
# Extract a field from every array element
echo '[{"name":"alice","age":30},{"name":"bob","age":25}]' \
  | jq '[.[] | .name]'
# ["alice", "bob"]

# Shorthand: map()
jq 'map(.name)'

# Build a new object per element
jq '[.[] | {user: .name, years: .age}]'

# Add a computed field
jq '[.[] | . + {senior: (.age > 28)}]'

# Rename keys
jq '[.[] | {username: .name, email_address: .email}]'
```

### Aggregation and Reduce

```bash
# Sum all values
echo '[1, 2, 3, 4, 5]' | jq 'add'
# 15

# Sum a field across objects
jq '[.[].price] | add'

# Count elements
jq 'length'

# Max / min
jq 'max_by(.score)'
jq 'min_by(.created_at)'

# reduce: custom accumulator
echo '[1,2,3,4,5]' | jq 'reduce .[] as $x (0; . + $x)'
# 15

# Group by field
jq 'group_by(.department)'

# Count per group
jq 'group_by(.status) | map({status: .[0].status, count: length})'
```

### String Interpolation and Formatting

```bash
# String interpolation
jq -r '.[] | "\(.name) is \(.age) years old"'

# Format as CSV (no header)
jq -r '.[] | [.name, .age, .email] | @csv'

# Format as TSV
jq -r '.[] | [.name, .score] | @tsv'

# URL-encode a value
jq -r '.query | @uri'

# Base64 encode
jq -r '.data | @base64'
```

### Working with Keys and Paths

```bash
# List all top-level keys
jq 'keys'

# Check if key exists
jq 'has("email")'

# Delete a key
jq 'del(.password)'

# Delete nested keys from every element
jq '[.[] | del(.internal_id, .raw_payload)]'

# Recursive descent: find all values for a key anywhere in tree
jq '.. | .id? // empty'

# Get all leaf paths
jq '[paths(scalars)]'
```

### Conditionals and Error Handling

```bash
# if-then-else
jq 'if .score >= 90 then "A" elif .score >= 80 then "B" else "C" end'

# Alternative operator: use fallback if null or false
jq '.nickname // .name'

# try-catch: skip errors instead of halting
jq '[.[] | try .nested.value catch null]'

# Suppress null output with // empty
jq '.[] | .optional_field // empty'
```

### Practical Shell Integration

```bash
# Read from file
jq '.users' data.json

# Compact output (no whitespace) for further piping
jq -c '.[]' records.json | while IFS= read -r record; do
  echo "Processing: $record"
done

# Pass a shell variable into jq
STATUS="active"
jq --arg s "$STATUS" '[.[] | select(.status == $s)]'

# Pass a number
jq --argjson threshold 42 '[.[] | select(.value > $threshold)]'

# Slurp multiple JSON lines into an array
jq -s '.' records.ndjson

# Multiple files: slurp all into one array
jq -s 'add' file1.json file2.json

# Null-safe pipeline from a command
kubectl get pods -o json | jq '.items[] | {name: .metadata.name, status: .status.phase}'

# GitHub CLI: extract PR numbers
gh pr list --json number,title | jq -r '.[] | "\(.number)\t\(.title)"'

# AWS CLI: list running instance IDs
aws ec2 describe-instances \
  | jq -r '.Reservations[].Instances[] | select(.State.Name=="running") | .InstanceId'

# Docker: show container names and images
docker inspect $(docker ps -q) | jq -r '.[] | "\(.Name)\t\(.Config.Image)"'
```

### Advanced Patterns

```bash
# Transpose an object of arrays to an array of objects
# Input: {"names":["a","b"],"scores":[10,20]}
jq '[.names, .scores] | transpose | map({name: .[0], score: .[1]})'

# Flatten one level
jq 'flatten(1)'

# Unique by field
jq 'unique_by(.email)'

# Sort, deduplicate and re-index
jq '[.[] | .name] | unique | sort'

# Walk: apply transformation to every node recursively
jq 'walk(if type == "string" then ascii_downcase else . end)'

# env: read environment variables inside jq
export API_KEY=secret
jq -n 'env.API_KEY'
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @jq to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @jq against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @jq for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @jq using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Always use -r (raw output) when passing jq results to shell variables or other commands to strip JSON string quotes
- Use --arg / --argjson to inject shell variables safely — never interpolate shell variables directly into filter strings
- Prefer map(f) over [.[] | f] for readability
- Use -c (compact) for newline-delimited JSON pipelines; omit it for human-readable debugging
- Test filters interactively with jq -n and literal input before embedding in scripts
- Use empty to drop unwanted elements rather than filtering to null
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

- Always use `-r` (raw output) when passing `jq` results to shell variables or other commands to strip JSON string quotes
- Use `--arg` / `--argjson` to inject shell variables safely — never interpolate shell variables directly into filter strings
- Prefer `map(f)` over `[.[] | f]` for readability
- Use `-c` (compact) for newline-delimited JSON pipelines; omit it for human-readable debugging
- Test filters interactively with `jq -n` and literal input before embedding in scripts
- Use `empty` to drop unwanted elements rather than filtering to `null`

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/jq`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@base` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@idor-testing` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Security & Safety Notes

- `jq` is read-only by design — it cannot write files or execute commands
- Avoid embedding untrusted JSON field values directly into shell commands; always quote or use `--arg`

#### Imported: Common Pitfalls

- **Problem:** `jq` outputs `null` instead of the expected value
  **Solution:** Check for typos in key names; use `keys` to inspect actual field names. Remember JSON is case-sensitive.

- **Problem:** Numbers are quoted as strings in the output
  **Solution:** Use `--argjson` instead of `--arg` when injecting numeric values.

- **Problem:** Filter works in the terminal but fails in a script
  **Solution:** Ensure the filter string uses single quotes in the shell to prevent variable expansion. Example: `jq '.field'` not `jq ".field"`.

- **Problem:** `add` returns `null` on an empty array
  **Solution:** Use `add // 0` or `add // ""` to provide a fallback default.

- **Problem:** Streaming large files is slow
  **Solution:** Use `jq --stream` or switch to `jstream`/`gron` for very large files.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
