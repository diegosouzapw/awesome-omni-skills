---
name: claimable-postgres-v2
description: "Claimable Postgres workflow skill. Use this skill when the user needs Provision instant temporary Postgres databases via Claimable Postgres by Neon (pg.new). No login or credit card required. Use for quick Postgres environments and throwaway DATABASE_URL for prototyping and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["claimable-postgres-v2", "claimable-postgres", "provision", "instant", "temporary", "postgres", "databases", "via"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-19"
date_updated: "2026-04-19"
---

# Claimable Postgres

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/claimable-postgres` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Claimable Postgres Instant Postgres databases for local development, demos, prototyping, and test environments. No account required. Databases expire after 72 hours unless claimed to a Neon account.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Which Method?, REST API, CLI, SDK, Vite Plugin, Claiming.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use this skill when tackling tasks related to its primary domain or functionality as described above.
- Use when the request clearly matches the imported source intent: Provision instant temporary Postgres databases via Claimable Postgres by Neon (pg.new). No login or credit card required. Use for quick Postgres environments and throwaway DATABASE_URL for prototyping.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm intent: If the request is ambiguous, confirm the user wants a temporary, no-signup database. Skip this if they explicitly asked for a quick or temporary database.
2. Provision: POST to https://pg.new/api/v1/database with {"ref": "agent-skills"}.
3. Parse response: Extract connectionstring, claimurl, and expires_at from the JSON response.
4. Write .env: Write DATABASEURL=<connectionstring> to the project's .env (or the user's preferred file and key). Do not overwrite an existing key without confirmation.
5. Seed (if needed): If the user has a seed SQL file, run it against the new database:
6. Report: Tell the user where the connection string was written, which key was used, and share the claim URL. Remind them: the database works now; claim within 72 hours to keep it permanently.
7. Optional: Offer a quick connection test (e.g. SELECT 1).

### Imported Workflow Notes

#### Imported: Agent Workflow

### API path

1. **Confirm intent:** If the request is ambiguous, confirm the user wants a temporary, no-signup database. Skip this if they explicitly asked for a quick or temporary database.
2. **Provision:** POST to `https://pg.new/api/v1/database` with `{"ref": "agent-skills"}`.
3. **Parse response:** Extract `connection_string`, `claim_url`, and `expires_at` from the JSON response.
4. **Write .env:** Write `DATABASE_URL=<connection_string>` to the project's `.env` (or the user's preferred file and key). Do not overwrite an existing key without confirmation.
5. **Seed (if needed):** If the user has a seed SQL file, run it against the new database:
   ```bash
   psql "$DATABASE_URL" -f seed.sql
   ```
6. **Report:** Tell the user where the connection string was written, which key was used, and share the claim URL. Remind them: the database works now; claim within 72 hours to keep it permanently.
7. **Optional:** Offer a quick connection test (e.g. `SELECT 1`).

### CLI path

1. **Check .env:** Check the target `.env` for an existing `DATABASE_URL` (or chosen key). If present, do not run. Offer remove, `--env`, or `--key` and get confirmation.
2. **Confirm intent:** If the request is ambiguous, confirm the user wants a temporary, no-signup database. Skip this if they explicitly asked for a quick or temporary database.
3. **Gather options:** Use defaults unless context suggests otherwise (e.g., user mentions a custom env file, seed SQL, or logical replication).
4. **Run:** Execute with `@latest --yes` plus the confirmed options. Always use `@latest` to avoid stale cached versions. `--yes` skips interactive prompts that would stall the agent.
   ```bash
   npx get-db@latest --yes --ref agent-skills --env .env.local --seed ./schema.sql
   ```
5. **Verify:** Confirm the connection string was written to the intended file.
6. **Report:** Tell the user where the connection string was written, which key was used, and that a claim URL is in the env file. Remind them: the database works now; claim within 72 hours to keep it permanently.
7. **Optional:** Offer a quick connection test (e.g. `SELECT 1`).

### Output Checklist

Always report:

- Where the connection string was written (e.g. `.env`)
- Which variable key was used (`DATABASE_URL` or custom key)
- The claim URL (from `.env` or API response)
- That unclaimed databases are temporary (72 hours)

#### Imported: Which Method?

- **REST API**: Returns structured JSON. No runtime dependency beyond `curl`. Preferred when the agent needs predictable output and error handling.
- **CLI** (`npx get-db@latest --yes`): Provisions and writes `.env` in one command. Convenient when Node.js is available and the user wants a simple setup.
- **SDK** (`get-db/sdk`): Scripts or programmatic provisioning in Node.js.
- **Vite plugin** (`vite-plugin-db`): Auto-provisions on `vite dev` if `DATABASE_URL` is missing. Use when the user has a Vite project.
- **Browser**: User cannot run CLI or API. Direct to https://pg.new.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @claimable-postgres-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @claimable-postgres-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @claimable-postgres-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @claimable-postgres-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

```bash
curl -s -X POST "https://pg.new/api/v1/database" \
  -H "Content-Type: application/json" \
  -d '{"ref": "agent-skills"}'
```

Parse `connection_string` and `claim_url` from the JSON response. Write `connection_string` to the project's `.env` as `DATABASE_URL`.

For other methods (CLI, SDK, Vite plugin), see [Which Method?](#which-method) below.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/claimable-postgres`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@cc-skill-frontend-patterns-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@cc-skill-project-guidelines-example-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@cc-skill-security-review-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@cc-skill-strategic-compact-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: REST API

**Base URL:** `https://pg.new/api/v1`

### Create a database

```bash
curl -s -X POST "https://pg.new/api/v1/database" \
  -H "Content-Type: application/json" \
  -d '{"ref": "agent-skills"}'
```

| Parameter | Required | Description |
|-----------|----------|-------------|
| `ref` | Yes | Tracking tag that identifies who provisioned the database. Use `"agent-skills"` when provisioning through this skill. |
| `enable_logical_replication` | No | Enable logical replication (default: false, cannot be disabled once enabled) |

The `connection_string` returned by the API is a pooled connection URL. For a direct (non-pooled) connection (e.g. Prisma migrations), remove `-pooler` from the hostname. The CLI writes both pooled and direct URLs automatically.

**Response:**

```json
{
  "id": "019beb39-37fb-709d-87ac-7ad6198b89f7",
  "status": "UNCLAIMED",
  "neon_project_id": "gentle-scene-06438508",
  "connection_string": "postgresql://...",
  "claim_url": "https://pg.new/claim/019beb39-...",
  "expires_at": "2026-01-26T14:19:14.580Z",
  "created_at": "2026-01-23T14:19:14.580Z",
  "updated_at": "2026-01-23T14:19:14.580Z"
}
```

### Check status

```bash
curl -s "https://pg.new/api/v1/database/{id}"
```

Returns the same response shape. Status transitions: `UNCLAIMED` -> `CLAIMING` -> `CLAIMED`. After the database is claimed, `connection_string` returns `null`.

### Error responses

| Condition | HTTP | Message |
|-----------|------|---------|
| Missing or empty `ref` | 400 | `Missing referrer` |
| Invalid database ID | 400 | `Database not found` |
| Invalid JSON body | 500 | `Failed to create the database.` |

#### Imported: CLI

```bash
npx get-db@latest --yes
```

Provisions a database and writes the connection string to `.env` in one step. Always use `@latest` and `--yes` (skips interactive prompts that would stall the agent).

### Pre-run Check

Check if `DATABASE_URL` (or the chosen key) already exists in the target `.env`. The CLI exits without provisioning if it finds the key.

If the key exists, offer the user three options:

1. Remove or comment out the existing line, then rerun.
2. Use `--env` to write to a different file (e.g. `--env .env.local`).
3. Use `--key` to write under a different variable name.

Get confirmation before proceeding.

### Options

| Option | Alias | Description | Default |
|--------|-------|-------------|---------|
| `--yes` | `-y` | Skip prompts, use defaults | `false` |
| `--env` | `-e` | .env file path | `./.env` |
| `--key` | `-k` | Connection string env var key | `DATABASE_URL` |
| `--prefix` | `-p` | Prefix for generated public env vars | `PUBLIC_` |
| `--seed` | `-s` | Path to seed SQL file | none |
| `--logical-replication` | `-L` | Enable logical replication | `false` |
| `--ref` | `-r` | Referrer id (use `agent-skills` when provisioning through this skill) | none |

Alternative package managers: `yarn dlx get-db@latest`, `pnpm dlx get-db@latest`, `bunx get-db@latest`, `deno run -A get-db@latest`.

### Output

The CLI writes to the target `.env`:

```
DATABASE_URL=postgresql://...              # pooled (use for application queries)
DATABASE_URL_DIRECT=postgresql://...       # direct (use for migrations, e.g. Prisma)
PUBLIC_POSTGRES_CLAIM_URL=https://pg.new/claim/...
```

#### Imported: SDK

Use for scripts and programmatic provisioning flows.

```typescript
import { instantPostgres } from 'get-db';

const { databaseUrl, databaseUrlDirect, claimUrl, claimExpiresAt } = await instantPostgres({
  referrer: 'agent-skills',
  seed: { type: 'sql-script', path: './init.sql' },
});
```

Returns `databaseUrl` (pooled), `databaseUrlDirect` (direct, for migrations), `claimUrl`, and `claimExpiresAt` (Date object). The `referrer` parameter is required.

#### Imported: Vite Plugin

For Vite projects, `vite-plugin-db` auto-provisions a database on `vite dev` if `DATABASE_URL` is missing. Install with `npm install -D vite-plugin-db`. See the [Claimable Postgres docs](https://neon.com/docs/reference/claimable-postgres#vite-plugin) for configuration.

#### Imported: Claiming

Claiming is optional. The database works immediately without it. To optionally claim, the user opens the claim URL in a browser, where they sign in or create a Neon account to claim the database.

- **API/SDK:** Give the user the `claim_url` from the create response.
- **CLI:** `npx get-db@latest claim` reads the claim URL from `.env` and opens the browser automatically.

Users cannot claim into Vercel-linked orgs; they must choose another Neon org.

#### Imported: Defaults and Limits

| Parameter | Value |
|-----------|-------|
| Provider | AWS |
| Region | us-east-2 |
| Postgres | 17 |

Region cannot be changed for claimable databases. Unclaimed databases have stricter quotas. Claiming resets limits to free plan defaults.

| | Unclaimed | Claimed (Free plan) |
|---|-----------|---------------------|
| Storage | 100 MB | 512 MB |
| Transfer | 1 GB | ~5 GB |
| Branches | No | Yes |
| Expiration | 72 hours | None |

#### Imported: Auto-provisioning

If the agent needs a database to fulfill a task (e.g. "build me a todo app with a real database") and the user has not provided a connection string, provision one via the API and inform the user. Include the claim URL so they can keep it.

#### Imported: Safety and UX Notes

- Do not overwrite existing env vars. Check first, then use `--env` or `--key` (CLI) or skip writing (API) to avoid conflicts.
- Ask before running destructive seed SQL (`DROP`, `TRUNCATE`, mass `DELETE`).
- For production workloads, recommend standard Neon provisioning instead of temporary claimable databases.
- If users need long-term persistence, instruct them to open the claim URL right away.
- After writing credentials to an .env file, check that it's covered by .gitignore. If not, warn the user. Do not modify `.gitignore` without confirmation.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
