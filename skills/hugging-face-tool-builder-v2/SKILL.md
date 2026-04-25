---
name: hugging-face-tool-builder-v2
description: "Hugging Face API Tool Builder workflow skill. Use this skill when the user needs Your purpose is now is to create reusable command line scripts and utilities for using the Hugging Face API, allowing chaining, piping and intermediate processing where helpful. You can access the API directly, as well as use the hf command line tool and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["hugging-face-tool-builder-v2", "hugging-face-tool-builder", "your", "purpose", "now", "create", "reusable", "command"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Hugging Face API Tool Builder

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/hugging-face-tool-builder` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Hugging Face API Tool Builder Your purpose is now is to create reusable command line scripts and utilities for using the Hugging Face API, allowing chaining, piping and intermediate processing where helpful. You can access the API directly, as well as use the hf command line tool. Model and Dataset cards can be accessed from repositories directly.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Sample Scripts, High Level Endpoints, Accessing the API, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need reusable CLI scripts around the Hugging Face API or hf command line tool.
- You want shell-friendly utilities that support chaining, piping, and intermediate processing.
- You are automating repeated Hub tasks and need a composable interface instead of ad hoc API calls.
- Use when the request clearly matches the imported source intent: Your purpose is now is to create reusable command line scripts and utilities for using the Hugging Face API, allowing chaining, piping and intermediate processing where helpful. You can access the API directly, as well....
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

#### Imported: Sample Scripts

Paths below are relative to this skill directory.

Reference examples:
- `references/hf_model_papers_auth.sh` — uses `HF_TOKEN` automatically and chains trending → model metadata → model card parsing with fallbacks; it demonstrates multi-step API usage plus auth hygiene for gated/private content.
- `references/find_models_by_paper.sh` — optional `HF_TOKEN` usage via `--token`, consistent authenticated search, and a retry path when arXiv-prefixed searches are too narrow; it shows resilient query strategy and clear user-facing help.
- `references/hf_model_card_frontmatter.sh` — uses the `hf` CLI to download model cards, extracts YAML frontmatter, and emits NDJSON summaries (license, pipeline tag, tags, gated prompt flag) for easy filtering.

Baseline examples (ultra-simple, minimal logic, raw JSON output with `HF_TOKEN` header):
- `references/baseline_hf_api.sh` — bash
- `references/baseline_hf_api.py` — python
- `references/baseline_hf_api.tsx` — typescript executable

Composable utility (stdin → NDJSON):
- `references/hf_enrich_models.sh` — reads model IDs from stdin, fetches metadata per ID, emits one JSON object per line for streaming pipelines.

Composability through piping (shell-friendly JSON output):
- `references/baseline_hf_api.sh 25 | jq -r '.[].id' | references/hf_enrich_models.sh | jq -s 'sort_by(.downloads) | reverse | .[:10]'`
- `references/baseline_hf_api.sh 50 | jq '[.[] | {id, downloads}] | sort_by(.downloads) | reverse | .[:10]'`
- `printf '%s\n' openai/gpt-oss-120b meta-llama/Meta-Llama-3.1-8B | references/hf_model_card_frontmatter.sh | jq -s 'map({id, license, has_extra_gated_prompt})'`

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hugging-face-tool-builder-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hugging-face-tool-builder-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hugging-face-tool-builder-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hugging-face-tool-builder-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Using the HF command line tool

The `hf` command line tool gives you further access to Hugging Face repository content and infrastructure.

```bash
❯ hf --help
Usage: hf [OPTIONS] COMMAND [ARGS]...

  Hugging Face Hub CLI

Options:
  --help                Show this message and exit.

Commands:
  auth                 Manage authentication (login, logout, etc.).
  cache                Manage local cache directory.
  download             Download files from the Hub.
  endpoints            Manage Hugging Face Inference Endpoints.
  env                  Print information about the environment.
  jobs                 Run and manage Jobs on the Hub.
  repo                 Manage repos on the Hub.
  repo-files           Manage files in a repo on the Hub.
  upload               Upload a file or a folder to the Hub.
  upload-large-folder  Upload a large folder to the Hub.
  version              Print information about the hf version.
```

The `hf` CLI command has replaced the now deprecated `huggingface_hub` CLI command.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Scripts must take a --help command line argument to describe their inputs and outputs
- Non-destructive scripts should be tested before handing over to the User
- Shell scripts are preferred, but use Python or TSX if complexity or user need requires it.
- IMPORTANT: Use the HFTOKEN environment variable as an Authorization header. For example: curl -H "Authorization: Bearer ${HFTOKEN}" https://huggingface.co/api/. This provides higher rate limits and appropriate authorization for data access.
- Investigate the shape of the API results before commiting to a final design; make use of piping and chaining where composability would be an advantage - prefer simple solutions where possible.
- Share usage examples once complete.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Script Rules

Make sure to follow these rules:
 - Scripts must take a `--help` command line argument to describe their inputs and outputs
 - Non-destructive scripts should be tested before handing over to the User
 - Shell scripts are preferred, but use Python or TSX if complexity or user need requires it.
 - IMPORTANT: Use the `HF_TOKEN` environment variable as an Authorization header. For example: `curl -H "Authorization: Bearer ${HF_TOKEN}" https://huggingface.co/api/`. This provides higher rate limits and appropriate authorization for data access.
 - Investigate the shape of the API results before commiting to a final design; make use of piping and chaining where composability would be an advantage - prefer simple solutions where possible.
 - Share usage examples once complete.

Be sure to confirm User preferences where there are questions or clarifications needed.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/hugging-face-tool-builder`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: High Level Endpoints

The following are the main API endpoints available at `https://huggingface.co`

```
/api/datasets
/api/models
/api/spaces
/api/collections
/api/daily_papers
/api/notifications
/api/settings
/api/whoami-v2
/api/trending
/oauth/userinfo
```

#### Imported: Accessing the API

The API is documented with the OpenAPI standard at `https://huggingface.co/.well-known/openapi.json`.

**IMPORTANT:** DO NOT ATTEMPT to read `https://huggingface.co/.well-known/openapi.json` directly as it is too large to process.

**IMPORTANT** Use `jq` to query and extract relevant parts. For example,

 Command to Get All 160 Endpoints

```bash
curl -s "https://huggingface.co/.well-known/openapi.json" | jq '.paths | keys | sort'
```

Model Search Endpoint Details

```bash
curl -s "https://huggingface.co/.well-known/openapi.json" | jq '.paths["/api/models"]'
```

You can also query endpoints to see the shape of the data. When doing so constrain results to low numbers to make them easy to process, yet representative.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
