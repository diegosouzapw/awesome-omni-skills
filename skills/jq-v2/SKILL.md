---
name: jq-v2
description: "jq \u2014 JSON Querying and Transformation workflow skill. Use this skill when the user needs Expert jq usage for JSON querying, filtering, transformation, and pipeline integration. Practical patterns for real shell workflows and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["jq", "json", "shell", "cli", "data-transformation", "bash", "jq-v2", "expert"]
complexity: advanced
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "kostakost2"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# jq — JSON Querying and Transformation

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/jq` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# jq — JSON Querying and Transformation

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Security & Safety Notes, Common Pitfalls.

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
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
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
Use @jq-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/jq-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/jq-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @jq-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/jq`, fails to mention provenance, or does not use the support pack at all.
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
