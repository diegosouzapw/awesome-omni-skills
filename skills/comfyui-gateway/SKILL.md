---
name: comfyui-gateway
description: "ComfyUI Gateway workflow skill. Use this skill when the user needs REST API gateway for ComfyUI servers. Workflow management, job queuing, webhooks, caching, auth, rate limiting, and image delivery (URL + base64) and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["comfyui", "api-gateway", "image-generation", "typescript", "comfyui-gateway", "rest", "api", "gateway"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-14"
date_updated: "2026-04-24"
---

# ComfyUI Gateway

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/comfyui-gateway` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# ComfyUI Gateway

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Architecture Overview, Components, 2. Configure, 3. Initialize, Or Separately:.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user mentions "comfyui" or related topics
- When the user mentions "comfy ui" or related topics
- When the user mentions "stable diffusion api gateway" or related topics
- When the user mentions "gateway comfyui" or related topics
- When the user mentions "api gateway imagens" or related topics
- When the user mentions "queue imagens" or related topics

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/integration.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/troubleshooting.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. cd comfyui-gateway npm install npx tsx src/cli/index.ts add-workflow ./workflows/sdxlrealismv1.json \ --id sdxlrealismv1 --schema ./workflows/sdxlrealismv1.schema.json npm run dev ` GET /workflows → list all workflows POST /workflows → register new workflow GET /workflows/:id → workflow details + input schema PUT /workflows/:id → update workflow DELETE /workflows/:id → remove workflow Workflows are ComfyUI JSON with {{placeholder}} tokens.
2. The gateway resolves these at runtime using the job's inputs and params: json { "3": { "classtype": "KSampler", "inputs": { "seed": "{{seed}}", "steps": "{{steps}}", "cfg": "{{cfg}}", "samplername": "{{sampler}}", "scheduler": "normal", "denoise": 1, "model": ["4", 0], "positive": ["6", 0], "negative": ["7", 0], "latentimage": ["5", 0] } }, "6": { "classtype": "CLIPTextEncode", "inputs": { "text": "{{prompt}}", "clip": ["4", 1] } } } Each workflow has an inputSchema` (Zod) that validates what the client sends.
3. Three production-ready workflow templates are included:
4. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
5. Read the overview and provenance files before loading any copied upstream support files.
6. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
7. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.

### Imported Workflow Notes

#### Imported: 1. Install

cd comfyui-gateway
npm install

#### Imported: 4. Add A Workflow

npx tsx src/cli/index.ts add-workflow ./workflows/sdxl_realism_v1.json \
  --id sdxl_realism_v1 --schema ./workflows/sdxl_realism_v1.schema.json

#### Imported: 5. Start (Api + Worker In One Process)

npm run dev

#### Imported: Workflows (Crud)

```
GET    /workflows            → list all workflows
POST   /workflows            → register new workflow
GET    /workflows/:id        → workflow details + input schema
PUT    /workflows/:id        → update workflow
DELETE /workflows/:id        → remove workflow
```

#### Imported: Workflow Templates

Workflows are ComfyUI JSON with `{{placeholder}}` tokens. The gateway resolves
these at runtime using the job's `inputs` and `params`:

```json
{
  "3": {
    "class_type": "KSampler",
    "inputs": {
      "seed": "{{seed}}",
      "steps": "{{steps}}",
      "cfg": "{{cfg}}",
      "sampler_name": "{{sampler}}",
      "scheduler": "normal",
      "denoise": 1,
      "model": ["4", 0],
      "positive": ["6", 0],
      "negative": ["7", 0],
      "latent_image": ["5", 0]
    }
  },
  "6": {
    "class_type": "CLIPTextEncode",
    "inputs": {
      "text": "{{prompt}}",
      "clip": ["4", 1]
    }
  }
}
```

Each workflow has an `inputSchema` (Zod) that validates what the client sends.

#### Imported: Bundled Workflows

Three production-ready workflow templates are included:

#### Imported: Overview

REST API gateway for ComfyUI servers. Workflow management, job queuing, webhooks, caching, auth, rate limiting, and image delivery (URL + base64).

#### Imported: How It Works

A production-grade REST API gateway that transforms any ComfyUI server into a universal,
secure, and scalable service. Supports workflow templates with placeholders, job queuing
with priorities, webhook callbacks, result caching, and multiple storage backends.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @comfyui-gateway to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @comfyui-gateway against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @comfyui-gateway for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @comfyui-gateway using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

```bash

#### Imported: Integration Examples

Read `references/integration.md` for ready-to-use examples with:
- curl commands for every endpoint
- n8n webhook workflow
- Supabase Edge Function caller
- Claude Code / Claude.ai integration
- Python requests client
- JavaScript fetch client

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Provide clear, specific context about your project and requirements
- Review all suggestions before applying them to production code
- Combine with other complementary skills for comprehensive analysis
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: Best Practices

- Provide clear, specific context about your project and requirements
- Review all suggestions before applying them to production code
- Combine with other complementary skills for comprehensive analysis

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/comfyui-gateway`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

Read `references/troubleshooting.md` for detailed guidance on:
- ComfyUI not reachable (firewall, wrong port, Docker networking)
- OOM errors (reduce resolution, batch, or steps)
- Slow generation (GPU utilization, queue depth, model loading)
- Webhook failures (DNS, SSL, timeout, domain allowlist)
- Redis connection issues (fallback to in-memory)
- Storage permission errors (local path, S3 credentials)

## Related Skills

- `@bullmq-specialist` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@burp-suite-testing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@burpsuite-project-parser` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@business-analyst` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/integration.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [integration.md](references/integration.md)
- [troubleshooting.md](references/troubleshooting.md)
- [integration.md](references/integration.md)
- [troubleshooting.md](references/troubleshooting.md)

### Imported Reference Notes

#### Imported: Cli Reference

```bash
npx tsx src/cli/index.ts init                    # Create dirs, .env.example
npx tsx src/cli/index.ts add-workflow <file>      # Register workflow template
  --id <id> --name <name> --schema <schema.json>
npx tsx src/cli/index.ts list-workflows           # Show registered workflows
npx tsx src/cli/index.ts run                      # Start API server
npx tsx src/cli/index.ts worker                   # Start job worker
npx tsx src/cli/index.ts health                   # Check ComfyUI connectivity
```

#### Imported: Architecture Overview

```
┌─────────────┐     ┌──────────────────────────────────┐     ┌──────────┐
│   Clients    │────▶│        ComfyUI Gateway           │────▶│ ComfyUI  │
│ (curl, n8n,  │     │                                  │     │ Server   │
│  Claude,     │     │  ┌─────────┐  ┌──────────────┐  │     │ (local/  │
│  Lovable,    │     │  │ Fastify │  │ BullMQ Queue │  │     │  remote) │
│  Supabase)   │     │  │ API     │──│ (or in-mem)  │  │     └──────────┘
│              │◀────│  └─────────┘  └──────────────┘  │
│              │     │  ┌─────────┐  ┌──────────────┐  │     ┌──────────┐
│              │     │  │ Auth +  │  │ Storage      │  │────▶│ S3/MinIO │
│              │     │  │ RateL.  │  │ (local/S3)   │  │     │(optional)│
│              │     │  └─────────┘  └──────────────┘  │     └──────────┘
└─────────────┘     └──────────────────────────────────┘
```

#### Imported: Components

| Component | Purpose | File(s) |
|-----------|---------|---------|
| **API Gateway** | REST endpoints, validation, CORS | `src/api/` |
| **Worker** | Processes jobs, talks to ComfyUI | `src/worker/` |
| **ComfyUI Client** | HTTP + WebSocket to ComfyUI | `src/comfyui/` |
| **Workflow Manager** | Template storage, placeholder rendering | `src/workflows/` |
| **Storage Provider** | Local disk + S3-compatible | `src/storage/` |
| **Cache** | Hash-based deduplication | `src/cache/` |
| **Notifier** | Webhook with HMAC signing | `src/notifications/` |
| **Auth** | API key + JWT + rate limiting | `src/auth/` |
| **DB** | SQLite (better-sqlite3) or Postgres | `src/db/` |
| **CLI** | Init, add-workflow, run, worker | `src/cli/` |

#### Imported: 2. Configure

cp .env.example .env

#### Imported: 3. Initialize

npx tsx src/cli/index.ts init

#### Imported: Or Separately:

npm run start:api   # API only
npm run start:worker # Worker only
```

#### Imported: Environment Variables

All configuration is via `.env` — nothing is hardcoded:

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | API server port |
| `HOST` | `0.0.0.0` | API bind address |
| `COMFYUI_URL` | `http://127.0.0.1:8188` | ComfyUI server URL |
| `COMFYUI_TIMEOUT_MS` | `300000` | Max wait for ComfyUI (5min) |
| `API_KEYS` | `""` | Comma-separated API keys (`key:role`) |
| `JWT_SECRET` | `""` | JWT signing secret (empty = JWT disabled) |
| `REDIS_URL` | `""` | Redis URL (empty = in-memory queue) |
| `DATABASE_URL` | `./data/gateway.db` | SQLite path or Postgres URL |
| `STORAGE_PROVIDER` | `local` | `local` or `s3` |
| `STORAGE_LOCAL_PATH` | `./data/outputs` | Local output directory |
| `S3_ENDPOINT` | `""` | S3/MinIO endpoint |
| `S3_BUCKET` | `""` | S3 bucket name |
| `S3_ACCESS_KEY` | `""` | S3 access key |
| `S3_SECRET_KEY` | `""` | S3 secret key |
| `S3_REGION` | `us-east-1` | S3 region |
| `WEBHOOK_SECRET` | `""` | HMAC signing secret for webhooks |
| `WEBHOOK_ALLOWED_DOMAINS` | `*` | Comma-separated allowed callback domains |
| `MAX_CONCURRENCY` | `1` | Parallel jobs per GPU |
| `MAX_IMAGE_SIZE` | `2048` | Maximum dimension (width or height) |
| `MAX_BATCH_SIZE` | `4` | Maximum batch size |
| `CACHE_ENABLED` | `true` | Enable result caching |
| `CACHE_TTL_SECONDS` | `86400` | Cache TTL (24h) |
| `RATE_LIMIT_MAX` | `100` | Requests per window |
| `RATE_LIMIT_WINDOW_MS` | `60000` | Rate limit window (1min) |
| `LOG_LEVEL` | `info` | Pino log level |
| `PRIVACY_MODE` | `false` | Redact prompts from logs |
| `CORS_ORIGINS` | `*` | Allowed CORS origins |
| `NODE_ENV` | `development` | Environment |

#### Imported: Health & Capabilities

```
GET /health
→ { ok: true, version, comfyui: { reachable, url, models? }, uptime }

GET /capabilities
→ { workflows: [...], maxSize, maxBatch, formats, storageProvider }
```

#### Imported: Jobs

```
POST   /jobs                 → create job (returns jobId immediately)
GET    /jobs/:jobId          → status + progress + outputs
GET    /jobs/:jobId/logs     → sanitized execution logs
POST   /jobs/:jobId/cancel   → request cancellation
GET    /jobs                 → list jobs (filters: status, workflowId, after, before, limit)
```

#### Imported: Outputs

```
GET    /outputs/:jobId       → list output files + metadata
GET    /outputs/:jobId/:file → download/stream file
```

#### Imported: Job Lifecycle

```
queued → running → succeeded
                 → failed
                 → canceled
```

1. Client POSTs to `/jobs` with workflowId + inputs
2. Gateway validates, checks cache, checks idempotency
3. If cache hit → returns existing outputs immediately (status: `cache_hit`)
4. Otherwise → enqueues job, returns `jobId` + `pollUrl`
5. Worker picks up job, renders workflow template, submits to ComfyUI
6. Worker polls ComfyUI for progress (or listens via WebSocket)
7. On completion → downloads outputs, stores them, updates DB
8. If callbackUrl → sends signed webhook POST
9. Client polls `/jobs/:jobId` or receives webhook

#### Imported: Security Model

- **API Keys**: `X-API-Key` header; keys configured via `API_KEYS` env var as `key1:admin,key2:user`
- **JWT**: Optional; when `JWT_SECRET` is set, accepts `Authorization: Bearer <token>`
- **Roles**: `admin` (full CRUD on workflows + jobs), `user` (create jobs, read own jobs)
- **Rate Limiting**: Per key + per IP, configurable window and max
- **Webhook Security**: HMAC-SHA256 signature in `X-Signature` header
- **Callback Allowlist**: Only approved domains receive webhooks
- **Privacy Mode**: When enabled, prompts are redacted from logs and DB
- **Idempotency**: `metadata.requestId` prevents duplicate processing
- **CORS**: Configurable allowed origins
- **Input Validation**: Zod schemas on every endpoint; max size/batch enforced

#### Imported: Comfyui Integration

The gateway communicates with ComfyUI via its native HTTP API:

| ComfyUI Endpoint | Gateway Usage |
|------------------|---------------|
| `POST /prompt` | Submit rendered workflow |
| `GET /history/{id}` | Poll job completion |
| `GET /view?filename=...` | Download generated images |
| `GET /object_info` | Discover available nodes/models |
| `WS /ws?clientId=...` | Real-time progress (optional) |

The client auto-detects ComfyUI version and adapts:
- Tries WebSocket first for progress, falls back to polling
- Handles both `/history` response formats
- Detects OOM errors and classifies them with recommendations

#### Imported: Cache Strategy

Cache key = SHA-256 of `workflowId + sorted(inputs) + sorted(params) + checkpoint`.
On cache hit, the gateway returns a "virtual" job with pre-existing outputs — no GPU
computation needed. Cache is stored alongside job data in the DB with configurable TTL.

#### Imported: Error Classification

| Error Code | Meaning | Retry? |
|------------|---------|--------|
| `COMFYUI_UNREACHABLE` | Cannot connect to ComfyUI | Yes (with backoff) |
| `COMFYUI_OOM` | Out of memory on GPU | No (reduce dimensions) |
| `COMFYUI_TIMEOUT` | Execution exceeded timeout | Maybe (increase timeout) |
| `COMFYUI_NODE_ERROR` | Node execution failed | No (check workflow) |
| `VALIDATION_ERROR` | Invalid inputs | No (fix request) |
| `WORKFLOW_NOT_FOUND` | Unknown workflowId | No (register workflow) |
| `RATE_LIMITED` | Too many requests | Yes (wait) |
| `AUTH_FAILED` | Invalid/missing credentials | No (fix auth) |
| `CACHE_HIT` | (Not an error) Served from cache | N/A |

#### Imported: 1. `Sdxl_Realism_V1` — Photorealistic Generation

- Checkpoint: SDXL base
- Optimized for: Portraits, landscapes, product shots
- Default: 1024x1024, 30 steps, cfg 7.0

#### Imported: 2. `Sprite_Transparent_Bg` — Game Sprites With Alpha

- Checkpoint: SD 1.5 or SDXL
- Optimized for: 2D game assets, transparent backgrounds
- Default: 512x512, 25 steps, cfg 7.5

#### Imported: 3. `Icon_512` — App Icons With Optional Upscale

- Checkpoint: SDXL base
- Optimized for: Square icons, clean edges
- Default: 512x512, 20 steps, cfg 6.0, optional 2x upscale

#### Imported: Observability

- **Structured Logs**: Pino JSON logs with `correlationId` on every request
- **Metrics**: Jobs queued/running/succeeded/failed, avg processing time, cache hit rate
- **Audit Log**: Admin actions (workflow CRUD, key management) logged with timestamp + actor

#### Imported: File Structure

```
comfyui-gateway/
├── SKILL.md
├── package.json
├── tsconfig.json
├── .env.example
├── src/
│   ├── api/
│   │   ├── server.ts          # Fastify setup + plugins
│   │   ├── routes/
│   │   │   ├── health.ts      # GET /health, /capabilities
│   │   │   ├── workflows.ts   # CRUD /workflows
│   │   │   ├── jobs.ts        # CRUD /jobs
│   │   │   └── outputs.ts     # GET /outputs
│   │   ├── middleware/
│   │   │   └── error-handler.ts
│   │   └── plugins/
│   │       ├── auth.ts        # API key + JWT
│   │       ├── rate-limit.ts
│   │       └── cors.ts
│   ├── worker/
│   │   └── processor.ts       # Job processor
│   ├── comfyui/
│   │   └── client.ts          # ComfyUI HTTP + WS client
│   ├── storage/
│   │   ├── index.ts           # Provider factory
│   │   ├── local.ts           # Local filesystem
│   │   └── s3.ts              # S3-compatible
│   ├── workflows/
│   │   └── manager.ts         # Template CRUD + rendering
│   ├── cache/
│   │   └── index.ts           # Hash-based cache
│   ├── notifications/
│   │   └── webhook.ts         # HMAC-signed callbacks
│   ├── auth/
│   │   └── index.ts           # Key/JWT validation + roles
│   ├── db/
│   │   ├── index.ts           # DB factory (SQLite/Postgres)
│   │   └── migrations.ts      # Schema creation
│   ├── cli/
│   │   └── index.ts           # CLI commands
│   ├── utils/
│   │   ├── config.ts          # Env loading + validation
│   │   ├── errors.ts          # Error classes
│   │   ├── logger.ts          # Pino setup
│   │   └── hash.ts            # SHA-256 hashing
│   └── index.ts               # Main entrypoint
├── config/
│   └── workflows/             # Bundled workflow templates
│       ├── sdxl_realism_v1.json
│       ├── sdxl_realism_v1.schema.json
│       ├── sprite_transparent_bg.json
│       ├── sprite_transparent_bg.schema.json
│       ├── icon_512.json
│       └── icon_512.schema.json
├── data/
│   ├── outputs/               # Generated images
│   ├── workflows/             # User-added wor

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
