---
name: hugging-face-community-evals-v2
description: "Overview workflow skill. Use this skill when the user needs Run local evaluations for Hugging Face Hub models with inspect-ai or lighteval and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: machine-learning
tags: ["hugging-face-community-evals-v2", "hugging-face-community-evals", "run", "local", "evaluations", "for", "hugging", "face"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# Overview

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/hugging-face-community-evals` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Overview

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Option A: inspect-ai with local inference providers path, Option B: inspect-ai on Local GPU, Option C: lighteval on Local GPU, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- inspect-ai with local inference
- lighteval with local inference
- choosing between vllm, Hugging Face Transformers, and accelerate
- smoke tests, task selection, and backend fallback strategy
- Hugging Face Jobs orchestration
- model-card or model-index edits

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `examples/.env.example` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `examples/USAGE_EXAMPLES.md` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: Option A: inspect-ai with local inference providers path

Best when the model is already supported by Hugging Face Inference Providers and you want the lowest local setup overhead.

```bash
uv run scripts/inspect_eval_uv.py \
  --model meta-llama/Llama-3.2-1B \
  --task mmlu \
  --limit 20
```

Use this path when:
- you want a quick local smoke test
- you do not need direct GPU control
- the task already exists in `inspect-evals`

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hugging-face-community-evals-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hugging-face-community-evals-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hugging-face-community-evals-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hugging-face-community-evals-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/hugging-face-community-evals`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@grafana-dashboards-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@graphql-architect-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@graphql-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@growth-engine-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/.env.example` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/inspect_eval_uv.py` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [.env.example](examples/.env.example)
- [USAGE_EXAMPLES.md](examples/USAGE_EXAMPLES.md)
- [inspect_eval_uv.py](scripts/inspect_eval_uv.py)
- [inspect_vllm_uv.py](scripts/inspect_vllm_uv.py)
- [lighteval_vllm_uv.py](scripts/lighteval_vllm_uv.py)
- [.env.example](examples/.env.example)

### Imported Reference Notes

#### Imported: Option B: inspect-ai on Local GPU

Best when you need to load the Hub model directly, use `vllm`, or fall back to Transformers for unsupported architectures.

Local GPU:

```bash
uv run scripts/inspect_vllm_uv.py \
  --model meta-llama/Llama-3.2-1B \
  --task gsm8k \
  --limit 20
```

Transformers fallback:

```bash
uv run scripts/inspect_vllm_uv.py \
  --model microsoft/phi-2 \
  --task mmlu \
  --backend hf \
  --trust-remote-code \
  --limit 20
```

#### Imported: Option C: lighteval on Local GPU

Best when the task is naturally expressed as a `lighteval` task string, especially Open LLM Leaderboard style benchmarks.

Local GPU:

```bash
uv run scripts/lighteval_vllm_uv.py \
  --model meta-llama/Llama-3.2-3B-Instruct \
  --tasks "leaderboard|mmlu|5,leaderboard|gsm8k|5" \
  --max-samples 20 \
  --use-chat-template
```

`accelerate` fallback:

```bash
uv run scripts/lighteval_vllm_uv.py \
  --model microsoft/phi-2 \
  --tasks "leaderboard|mmlu|5" \
  --backend accelerate \
  --trust-remote-code \
  --max-samples 20
```

# Remote Execution Boundary

This skill intentionally stops at **local execution and backend selection**.

If the user wants to:
- run these scripts on Hugging Face Jobs
- pick remote hardware
- pass secrets to remote jobs
- schedule recurring runs
- inspect / cancel / monitor jobs

then switch to the **`hugging-face-jobs`** skill and pass it one of these scripts plus the chosen arguments.

# Task Selection

`inspect-ai` examples:
- `mmlu`
- `gsm8k`
- `hellaswag`
- `arc_challenge`
- `truthfulqa`
- `winogrande`
- `humaneval`

`lighteval` task strings use `suite|task|num_fewshot`:
- `leaderboard|mmlu|5`
- `leaderboard|gsm8k|5`
- `leaderboard|arc_challenge|25`
- `lighteval|hellaswag|0`

Multiple `lighteval` tasks can be comma-separated in `--tasks`.

# Backend Selection

- Prefer `inspect_vllm_uv.py --backend vllm` for fast GPU inference on supported architectures.
- Use `inspect_vllm_uv.py --backend hf` when `vllm` does not support the model.
- Prefer `lighteval_vllm_uv.py --backend vllm` for throughput on supported models.
- Use `lighteval_vllm_uv.py --backend accelerate` as the compatibility fallback.
- Use `inspect_eval_uv.py` when Inference Providers already cover the model and you do not need direct GPU control.

# Hardware Guidance

| Model size | Suggested local hardware |
|---|---|
| `< 3B` | consumer GPU / Apple Silicon / small dev GPU |
| `3B - 13B` | stronger local GPU |
| `13B+` | high-memory local GPU or hand off to `hugging-face-jobs` |

For smoke tests, prefer cheaper local runs plus `--limit` or `--max-samples`.

# Troubleshooting

- CUDA or vLLM OOM:
  - reduce `--batch-size`
  - reduce `--gpu-memory-utilization`
  - switch to a smaller model for the smoke test
  - if necessary, hand off to `hugging-face-jobs`
- Model unsupported by `vllm`:
  - switch to `--backend hf` for `inspect-ai`
  - switch to `--backend accelerate` for `lighteval`
- Gated/private repo access fails:
  - verify `HF_TOKEN`
- Custom model code required:
  - add `--trust-remote-code`

# Examples

See:
- `examples/USAGE_EXAMPLES.md` for local command patterns
- `scripts/inspect_eval_uv.py`
- `scripts/inspect_vllm_uv.py`
- `scripts/lighteval_vllm_uv.py`

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
