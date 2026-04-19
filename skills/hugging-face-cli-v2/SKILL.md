---
name: hugging-face-cli-v2
description: "hugging-face-cli workflow skill. Use this skill when the user needs Use the Hugging Face Hub CLI (hf) to download, upload, and manage models, datasets, and Spaces and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["hugging-face-cli-v2", "hugging-face-cli", "use", "the", "hugging", "face", "hub", "cli"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# hugging-face-cli

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/hugging-face-cli` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

Install by downloading the installer script first, reviewing it, and then running it locally. Example: curl -LsSf https://hf.co/cli/install.sh -o /tmp/hf-install.sh && less /tmp/hf-install.sh && bash /tmp/hf-install.sh

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Common options, Mounting repos as local filesystems, Tips, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use this skill when you need the hf CLI for Hub authentication, downloads, uploads, repo management, or basic compute operations.
- The Hugging Face Hub CLI tool hf is available.
- IMPORTANT: The hf command replaces the deprecated huggingface-cli command.
- Use hf --help to view available functions.
- Note that auth commands are now all under hf auth e.g.
- Generated with huggingface_hub v1.8.0.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

#### Imported: Common options

- `--format` — Output format: `--format json` (or `--json`) or `--format table` (default).
- `-q / --quiet` — Minimal output.
- `--revision` — Git revision id which can be a branch name, a tag, or a commit hash.
- `--token` — Use a User Access Token. Prefer setting `HF_TOKEN` env var instead of passing `--token`.
- `--type` — The type of repository (model, dataset, or space).

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hugging-face-cli-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hugging-face-cli-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hugging-face-cli-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hugging-face-cli-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Commands

- `hf download REPO_ID` — Download files from the Hub. `[--type CHOICE --revision TEXT --include TEXT --exclude TEXT --cache-dir TEXT --local-dir TEXT --force-download --dry-run --quiet --max-workers INTEGER]`
- `hf env` — Print information about the environment.
- `hf sync` — Sync files between local directory and a bucket. `[--delete --ignore-times --ignore-sizes --plan TEXT --apply TEXT --dry-run --include TEXT --exclude TEXT --filter-from TEXT --existing --ignore-existing --verbose --quiet]`
- `hf upload REPO_ID` — Upload a file or a folder to the Hub. Recommended for single-commit uploads. `[--type CHOICE --revision TEXT --private --include TEXT --exclude TEXT --delete TEXT --commit-message TEXT --commit-description TEXT --create-pr --every FLOAT --quiet]`
- `hf upload-large-folder REPO_ID LOCAL_PATH` — Upload a large folder to the Hub. Recommended for resumable uploads. `[--type CHOICE --revision TEXT --private --include TEXT --exclude TEXT --num-workers INTEGER --no-report --no-bars]`
- `hf version` — Print information about the hf version.

### `hf auth` — Manage authentication (login, logout, etc.).

- `hf auth list` — List all stored access tokens.
- `hf auth login` — Login using a token from huggingface.co/settings/tokens. `[--add-to-git-credential --force]`
- `hf auth logout` — Logout from a specific token. `[--token-name TEXT]`
- `hf auth switch` — Switch between access tokens. `[--token-name TEXT --add-to-git-credential]`
- `hf auth whoami` — Find out which huggingface.co account you are logged in as. `[--format CHOICE]`

### `hf buckets` — Commands to interact with buckets.

- `hf buckets cp SRC` — Copy a single file to or from a bucket. `[--quiet]`
- `hf buckets create BUCKET_ID` — Create a new bucket. `[--private --exist-ok --quiet]`
- `hf buckets delete BUCKET_ID` — Delete a bucket. `[--yes --missing-ok --quiet]`
- `hf buckets info BUCKET_ID` — Get info about a bucket. `[--quiet]`
- `hf buckets list` — List buckets or files in a bucket. `[--human-readable --tree --recursive --format CHOICE --quiet]`
- `hf buckets move FROM_ID TO_ID` — Move (rename) a bucket to a new name or namespace.
- `hf buckets remove ARGUMENT` — Remove files from a bucket. `[--recursive --yes --dry-run --include TEXT --exclude TEXT --quiet]`
- `hf buckets sync` — Sync files between local directory and a bucket. `[--delete --ignore-times --ignore-sizes --plan TEXT --apply TEXT --dry-run --include TEXT --exclude TEXT --filter-from TEXT --existing --ignore-existing --verbose --quiet]`

### `hf cache` — Manage local cache directory.

- `hf cache list` — List cached repositories or revisions. `[--cache-dir TEXT --revisions --filter TEXT --format CHOICE --quiet --sort CHOICE --limit INTEGER]`
- `hf cache prune` — Remove detached revisions from the cache. `[--cache-dir TEXT --yes --dry-run]`
- `hf cache rm TARGETS` — Remove cached repositories or revisions. `[--cache-dir TEXT --yes --dry-run]`
- `hf cache verify REPO_ID` — Verify checksums for a single repo revision from cache or a local directory. `[--type CHOICE --revision TEXT --cache-dir TEXT --local-dir TEXT --fail-on-missing-files --fail-on-extra-files]`

### `hf collections` — Interact with collections on the Hub.

- `hf collections add-item COLLECTION_SLUG ITEM_ID ITEM_TYPE` — Add an item to a collection. `[--note TEXT --exists-ok]`
- `hf collections create TITLE` — Create a new collection on the Hub. `[--namespace TEXT --description TEXT --private --exists-ok]`
- `hf collections delete COLLECTION_SLUG` — Delete a collection from the Hub. `[--missing-ok]`
- `hf collections delete-item COLLECTION_SLUG ITEM_OBJECT_ID` — Delete an item from a collection. `[--missing-ok]`
- `hf collections info COLLECTION_SLUG` — Get info about a collection on the Hub. Output is in JSON format.
- `hf collections list` — List collections on the Hub. `[--owner TEXT --item TEXT --sort CHOICE --limit INTEGER --format CHOICE --quiet]`
- `hf collections update COLLECTION_SLUG` — Update a collection's metadata on the Hub. `[--title TEXT --description TEXT --position INTEGER --private --theme TEXT]`
- `hf collections update-item COLLECTION_SLUG ITEM_OBJECT_ID` — Update an item in a collection. `[--note TEXT --position INTEGER]`

### `hf datasets` — Interact with datasets on the Hub.

- `hf datasets info DATASET_ID` — Get info about a dataset on the Hub. Output is in JSON format. `[--revision TEXT --expand TEXT]`
- `hf datasets list` — List datasets on the Hub. `[--search TEXT --author TEXT --filter TEXT --sort CHOICE --limit INTEGER --expand TEXT --format CHOICE --quiet]`
- `hf datasets parquet DATASET_ID` — List parquet file URLs available for a dataset. `[--subset TEXT --split TEXT --format CHOICE --quiet]`
- `hf datasets sql SQL` — Execute a raw SQL query with DuckDB against dataset parquet URLs. `[--format CHOICE]`

### `hf discussions` — Manage discussions and pull requests on the Hub.

- `hf discussions close REPO_ID NUM` — Close a discussion or pull request. `[--comment TEXT --yes --type CHOICE]`
- `hf discussions comment REPO_ID NUM` — Comment on a discussion or pull request. `[--body TEXT --body-file PATH --type CHOICE]`
- `hf discussions create REPO_ID --title TEXT` — Create a new discussion or pull request on a repo. `[--body TEXT --body-file PATH --pull-request --type CHOICE]`
- `hf discussions diff REPO_ID NUM` — Show the diff of a pull request. `[--type CHOICE]`
- `hf discussions info REPO_ID NUM` — Get info about a discussion or pull request. `[--comments --diff --no-color --type CHOICE --format CHOICE]`
- `hf discussions list REPO_ID` — List discussions and pull requests on a repo. `[--status CHOICE --kind CHOICE --author TEXT --limit INTEGER --type CHOICE --format CHOICE --quiet]`
- `hf discussions merge REPO_ID NUM` — Merge a pull request. `[--comment TEXT --yes --type CHOICE]`
- `hf discussions rename REPO_ID NUM NEW_TITLE` — Rename a discussion or pull request. `[--type CHOICE]`
- `hf discussions reopen REPO_ID NUM` — Reopen a closed discussion or pull request. `[--comment TEXT --yes --type CHOICE]`

### `hf endpoints` — Manage Hugging Face Inference Endpoints.

- `hf endpoints catalog deploy --repo TEXT` — Deploy an Inference Endpoint from the Model Catalog. `[--name TEXT --accelerator TEXT --namespace TEXT]`
- `hf endpoints catalog list` — List available Catalog models.
- `hf endpoints delete NAME` — Delete an Inference Endpoint permanently. `[--namespace TEXT --yes]`
- `hf endpoints deploy NAME --repo TEXT --framework TEXT --accelerator TEXT --instance-size TEXT --instance-type TEXT --region TEXT --vendor TEXT` — Deploy an Inference Endpoint from a Hub repository. `[--namespace TEXT --task TEXT --min-replica INTEGER --max-replica INTEGER --scale-to-zero-timeout INTEGER --scaling-metric CHOICE --scaling-threshold FLOAT]`
- `hf endpoints describe NAME` — Get information about an existing endpoint. `[--namespace TEXT]`
- `hf endpoints list` — Lists all Inference Endpoints for the given namespace. `[--namespace TEXT --format CHOICE --quiet]`
- `hf endpoints pause NAME` — Pause an Inference Endpoint. `[--namespace TEXT]`
- `hf endpoints resume NAME` — Resume an Inference Endpoint. `[--namespace TEXT --fail-if-already-running]`
- `hf endpoints scale-to-zero NAME` — Scale an Inference Endpoint to zero. `[--namespace TEXT]`
- `hf endpoints update NAME` — Update an existing endpoint. `[--namespace TEXT --repo TEXT --accelerator TEXT --instance-size TEXT --instance-type TEXT --framework TEXT --revision TEXT --task TEXT --min-replica INTEGER --max-replica INTEGER --scale-to-zero-timeout INTEGER --scaling-metric CHOICE --scaling-threshold FLOAT]`

### `hf extensions` — Manage hf CLI extensions.

- `hf extensions exec NAME` — Execute an installed extension.
- `hf extensions install REPO_ID` — Install an extension from a public GitHub repository. `[--force]`
- `hf extensions list` — List installed extension commands. `[--format CHOICE --quiet]`
- `hf extensions remove NAME` — Remove an installed extension.
- `hf extensions search` — Search extensions available on GitHub (tagged with 'hf-extension' topic). `[--format CHOICE --quiet]`

### `hf jobs` — Run and manage Jobs on the Hub.

- `hf jobs cancel JOB_ID` — Cancel a Job `[--namespace TEXT]`
- `hf jobs hardware` — List available hardware options for Jobs
- `hf jobs inspect JOB_IDS` — Display detailed information on one or more Jobs `[--namespace TEXT]`
- `hf jobs logs JOB_ID` — Fetch the logs of a Job. `[--follow --tail INTEGER --namespace TEXT]`
- `hf jobs ps` — List Jobs. `[--all --namespace TEXT --filter TEXT --format TEXT --quiet]`
- `hf jobs run IMAGE COMMAND` — Run a Job. `[--env TEXT --secrets TEXT --label TEXT --volume TEXT --env-file TEXT --secrets-file TEXT --flavor CHOICE --timeout TEXT --detach --namespace TEXT]`
- `hf jobs scheduled delete SCHEDULED_JOB_ID` — Delete a scheduled Job. `[--namespace TEXT]`
- `hf jobs scheduled inspect SCHEDULED_JOB_IDS` — Display detailed information on one or more scheduled Jobs `[--namespace TEXT]`
- `hf jobs scheduled ps` — List scheduled Jobs `[--all --namespace TEXT --filter TEXT --format TEXT --quiet]`
- `hf jobs scheduled resume SCHEDULED_JOB_ID` — Resume (unpause) a scheduled Job. `[--namespace TEXT]`
- `hf jobs scheduled run SCHEDULE IMAGE COMMAND` — Schedule a Job. `[--suspend --concurrency --env TEXT --secrets TEXT --label TEXT --volume TEXT --env-file TEXT --secrets-file TEXT --flavor CHOICE --timeout TEXT --namespace TEXT]`
- `hf jobs scheduled suspend SCHEDULED_JOB_ID` — Suspend (pause) a scheduled Job. `[--namespace TEXT]`
- `hf jobs scheduled uv run SCHEDULE SCRIPT` — Run a UV script (local file or URL) on HF infrastructure `[--suspend --concurrency --image TEXT --flavor CHOICE --env TEXT --secrets TEXT --label TEXT --volume TEXT --env-file TEXT --secrets-file TEXT --timeout TEXT --namespace TEXT --with TEXT --python TEXT]`
- `hf jobs stats` — Fetch the resource usage statistics and metrics of Jobs `[--namespace TEXT]`
- `hf jobs uv run SCRIPT` — Run a UV script (local file or URL) on HF infrastructure `[--image TEXT --flavor CHOICE --env TEXT --secrets TEXT --label TEXT --volume TEXT --env-file TEXT --secrets-file TEXT --timeout TEXT --detach --namespace TEXT --with TEXT --python TEXT]`

### `hf models` — Interact with models on the Hub.

- `hf models info MODEL_ID` — Get info about a model on the Hub. Output is in JSON format. `[--revision TEXT --expand TEXT]`
- `hf models list` — List models on the Hub. `[--search TEXT --author TEXT --filter TEXT --num-parameters TEXT --sort CHOICE --limit INTEGER --expand TEXT --format CHOICE --quiet]`

### `hf papers` — Interact with papers on the Hub.

- `hf papers info PAPER_ID` — Get info about a paper on the Hub. Output is in JSON format.
- `hf papers list` — List daily papers on the Hub. `[--date TEXT --week TEXT --month TEXT --submitter TEXT --sort CHOICE --limit INTEGER --format CHOICE --quiet]`
- `hf papers read PAPER_ID` — Read a paper as markdown.
- `hf papers search QUERY` — Search papers on the Hub. `[--limit INTEGER --format CHOICE --quiet]`

### `hf repos` — Manage repos on the Hub.

- `hf repos branch create REPO_ID BRANCH` — Create a new branch for a repo on the Hub. `[--revision TEXT --type CHOICE --exist-ok]`
- `hf repos branch delete REPO_ID BRANCH` — Delete a branch from a repo on the Hub. `[--type CHOICE]`
- `hf repos create REPO_ID` — Create a new repo on the Hub. `[--type CHOICE --space-sdk TEXT --private --public --protected --exist-ok --resource-group-id TEXT --flavor TEXT --storage TEXT --sleep-time INTEGER --secrets TEXT --secrets-file TEXT --env TEXT --env-file TEXT]`
- `hf repos delete REPO_ID` — Delete a repo from the Hub. This is an irreversible operation. `[--type CHOICE --missing-ok]`
- `hf repos delete-files REPO_ID PATTERNS` — Delete files from a repo on the Hub. `[--type CHOICE --revision TEXT --commit-message TEXT --commit-description TEXT --create-pr]`
- `hf repos duplicate FROM_ID` — Duplicate a repo on the Hub (model, dataset, or Space). `[--type CHOICE --private --public --protected --exist-ok --flavor TEXT --storage TEXT --sleep-time INTEGER --secrets TEXT --secrets-file TEXT --env TEXT --env-file TEXT]`
- `hf repos move FROM_ID TO_ID` — Move a repository from a namespace to another namespace. `[--type CHOICE]`
- `hf repos settings REPO_ID` — Update the settings of a repository. `[--gated CHOICE --private --public --protected --type CHOICE]`
- `hf repos tag create REPO_ID TAG` — Create a tag for a repo. `[--message TEXT --revision TEXT --type CHOICE]`
- `hf repos tag delete REPO_ID TAG` — Delete a tag for a repo. `[--yes --type CHOICE]`
- `hf repos tag list REPO_ID` — List tags for a repo. `[--type CHOICE]`

### `hf skills` — Manage skills for AI assistants.

- `hf skills add` — Download a skill and install it for an AI assistant. `[--claude --codex --cursor --opencode --global --dest PATH --force]`
- `hf skills preview` — Print the generated SKILL.md to stdout.

### `hf spaces` — Interact with spaces on the Hub.

- `hf spaces dev-mode SPACE_ID` — Enable or disable dev mode on a Space. `[--stop]`
- `hf spaces hot-reload SPACE_ID` — Hot-reload any Python file of a Space without a full rebuild + restart. `[--local-file TEXT --skip-checks --skip-summary]`
- `hf spaces info SPACE_ID` — Get info about a space on the Hub. Output is in JSON format. `[--revision TEXT --expand TEXT]`
- `hf spaces list` — List spaces on the Hub. `[--search TEXT --author TEXT --filter TEXT --sort CHOICE --limit INTEGER --expand TEXT --format CHOICE --quiet]`

### `hf webhooks` — Manage webhooks on the Hub.

- `hf webhooks create --watch TEXT` — Create a new webhook. `[--url TEXT --job-id TEXT --domain CHOICE --secret TEXT]`
- `hf webhooks delete WEBHOOK_ID` — Delete a webhook permanently. `[--yes]`
- `hf webhooks disable WEBHOOK_ID` — Disable an active webhook.
- `hf webhooks enable WEBHOOK_ID` — Enable a disabled webhook.
- `hf webhooks info WEBHOOK_ID` — Show full details for a single webhook as JSON.
- `hf webhooks list` — List all webhooks for the current user. `[--format CHOICE --quiet]`
- `hf webhooks update WEBHOOK_ID` — Update an existing webhook. Only provided options are changed. `[--url TEXT --watch TEXT --domain CHOICE --secret TEXT]`

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/hugging-face-cli`, fails to mention provenance, or does not use any copied source files at all.
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
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Mounting repos as local filesystems

To mount Hub repositories or buckets as local filesystems — no download, no copy, no waiting — use `hf-mount`. Files are fetched on demand. GitHub: https://github.com/huggingface/hf-mount

Install by downloading the installer locally, reviewing it, and then running it. Example:
`curl -fsSL https://raw.githubusercontent.com/huggingface/hf-mount/main/install.sh -o /tmp/hf-mount-install.sh && less /tmp/hf-mount-install.sh && sh /tmp/hf-mount-install.sh`

Some command examples:
- `hf-mount start repo openai-community/gpt2 /tmp/gpt2` — mount a repo (read-only)
- `hf-mount start --hf-token $HF_TOKEN bucket myuser/my-bucket /tmp/data` — mount a bucket (read-write)
- `hf-mount status` / `hf-mount stop /tmp/data` — list or unmount

#### Imported: Tips

- Use `hf <command> --help` for full options, descriptions, usage, and real-world examples
- Authenticate with `HF_TOKEN` env var (recommended) or with `--token`

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
