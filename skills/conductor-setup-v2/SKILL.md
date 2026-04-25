---
name: conductor-setup-v2
description: "What to Create workflow skill. Use this skill when the user needs Configure a Rails project to work with Conductor (parallel coding agents) and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["conductor-setup-v2", "conductor-setup", "configure", "rails", "project", "work", "conductor", "parallel"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Shpigford"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# What to Create

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/conductor-setup` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

Set up this Rails project for Conductor, the Mac app for parallel coding agents.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 1. conductor.json (project root), 3. script/server (executable), 4. Update Rails Config Files, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to configure a Rails project so it runs correctly inside Conductor workspaces.
- The project should support parallel coding agents with isolated ports, Redis settings, and shared secrets.
- You want the standard conductor.json, bin/conductor-setup, and script/server scaffolding for a Rails repo.
- Use when the request clearly matches the imported source intent: Configure a Rails project to work with Conductor (parallel coding agents).
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

1. Create bin/conductor-setup if it doesn't already exist: bash #!/bin/bash set -e # Symlink .env from repo root (where secrets live, outside worktrees) [ -f "$CONDUCTORROOTPATH/.env" ] && ln -sf "$CONDUCTORROOTPATH/.env" .env # Symlink Rails master key [ -f "$CONDUCTORROOTPATH/config/master.key" ] && ln -sf "$CONDUCTORROOTPATH/config/master.key" config/master.key # Install dependencies bundle install npm install Make it executable with chmod +x bin/conductor-setup.
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: 2. bin/conductor-setup (executable)

Create `bin/conductor-setup` if it doesn't already exist:

```bash
#!/bin/bash
set -e

# Symlink .env from repo root (where secrets live, outside worktrees)
[ -f "$CONDUCTOR_ROOT_PATH/.env" ] && ln -sf "$CONDUCTOR_ROOT_PATH/.env" .env

# Symlink Rails master key
[ -f "$CONDUCTOR_ROOT_PATH/config/master.key" ] && ln -sf "$CONDUCTOR_ROOT_PATH/config/master.key" config/master.key

# Install dependencies
bundle install
npm install
```

Make it executable with `chmod +x bin/conductor-setup`.

#### Imported: 1. conductor.json (project root)

Create `conductor.json` in the project root if it doesn't already exist:

```json
{
  "scripts": {
    "setup": "bin/conductor-setup",
    "run": "script/server"
  }
}
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @conductor-setup-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @conductor-setup-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @conductor-setup-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @conductor-setup-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/conductor-setup`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@code-review-checklist-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@code-review-excellence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@code-reviewer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@code-simplifier-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 3. script/server (executable)

Create the `script` directory if needed, then create `script/server` if it doesn't already exist:

```bash
#!/bin/bash

# === Port Configuration ===
export PORT=${CONDUCTOR_PORT:-3000}
export VITE_RUBY_PORT=$((PORT + 1000))

# === Redis Isolation ===
if [ -n "$CONDUCTOR_WORKSPACE_NAME" ]; then
  HASH=$(printf '%s' "$CONDUCTOR_WORKSPACE_NAME" | cksum | cut -d' ' -f1)
  REDIS_DB=$((HASH % 16))
  export REDIS_URL="redis://localhost:6379/${REDIS_DB}"
fi

exec bin/dev
```

Make it executable with `chmod +x script/server`.

#### Imported: 4. Update Rails Config Files

For each of the following files, if they exist and contain Redis configuration, update them to use `ENV.fetch('REDIS_URL', ...)` or `ENV['REDIS_URL']` with a fallback:

### config/initializers/sidekiq.rb
If this file exists and configures Redis, update it to use:
```ruby
redis_url = ENV.fetch('REDIS_URL', 'redis://localhost:6379/0')
```

### config/cable.yml
If this file exists, update the development adapter to use:
```yaml
development:
  adapter: redis
  url: <%= ENV.fetch('REDIS_URL', 'redis://localhost:6379/1') %>
```

### config/environments/development.rb
If this file configures Redis for caching, update to use:
```ruby
config.cache_store = :redis_cache_store, { url: ENV.fetch('REDIS_URL', 'redis://localhost:6379/0') }
```

### config/initializers/rack_attack.rb
If this file exists and configures a Redis cache store, update to use:
```ruby
Rack::Attack.cache.store = ActiveSupport::Cache::RedisCacheStore.new(url: ENV.fetch('REDIS_URL', 'redis://localhost:6379/0'))
```

# Implementation Notes

- **Don't overwrite existing files**: Check if conductor.json, bin/conductor-setup, and script/server exist before creating them. If they exist, skip creation and inform the user.
- **Rails config updates**: Only modify Redis-related configuration. If a file doesn't exist or doesn't use Redis, skip it gracefully.
- **Create directories as needed**: Create `script/` directory if it doesn't exist.

# Verification

After creating the files:
1. Confirm all Conductor files exist and scripts are executable
2. Run `script/server` to verify it starts without errors
3. Check that Rails configs properly reference `ENV['REDIS_URL']` or `ENV.fetch('REDIS_URL', ...)`

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
