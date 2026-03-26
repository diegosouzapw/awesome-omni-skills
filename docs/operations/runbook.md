# System Runbook

This runbook is the operational guide for building, validating, serving, securing, and troubleshooting Omni Skills.

## 1. Local Development Cycle

Install dependencies:

```bash
npm install
```

Recommended local loop:

```bash
npm run validate
npm run taxonomy:report
npm run build
npm test
```

What each command does:

- `npm run validate` validates `SKILL.md`, regenerates `metadata.json`, and computes taxonomy, maturity, quality, and security metadata
- `npm run taxonomy:report` shows category drift suggestions without rewriting files
- `npm run build` regenerates catalog/manifests, archives, checksum manifests, verifies archives, and rebuilds `docs/CATALOG.md`
- `npm test` runs the smoke suite across CLI, API, MCP, sidecar, and archive flows

## 2. Skill Authoring and Taxonomy

Create a new skill from the template:

```bash
mkdir -p skills/my-skill
cp docs/contributors/skill-template.md skills/my-skill/SKILL.md
```

Check category normalization:

```bash
npx omni-skills recategorize
```

Apply suggested canonical categories:

```bash
npx omni-skills recategorize --write
```

## 3. Security Validation

Default validation always runs the static scanner.

It checks:

- prompt-injection and exfiltration patterns
- destructive shell commands
- suspicious paths and secrets
- risky script primitives

Enable optional ClamAV scanning:

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

Enable optional VirusTotal hash lookups:

```bash
VT_API_KEY=your-key npm run validate
```

Notes:

- VirusTotal is hash lookup only during normal validation
- unknown files are not uploaded by default
- ClamAV requires `clamscan` in `PATH`

## 4. Archive Generation and Verification

Archives are produced automatically by `npm run build`.

Outputs:

- `dist/archives/<skill>.zip`
- `dist/archives/<skill>.tar.gz`
- `dist/archives/<skill>.checksums.txt`

Verify generated archives:

```bash
npm run verify:archives
```

Enable detached signing during index generation:

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Optional public key override:

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

If no public key is supplied, the build derives one with `openssl` and places it in `dist/signing/`.

## 5. Installation Flows

Default install:

```bash
npx omni-skills
```

Install a specific skill:

```bash
npx omni-skills --cursor --skill omni-figma
```

Install via discovery:

```bash
npx omni-skills find figma --tool cursor --install --yes
```

Bundle install:

```bash
npx omni-skills --cursor --bundle essentials
```

## 6. Catalog and Discovery

Search published skills:

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

Useful filters:

- `--category`
- `--tool`
- `--risk`
- `--sort quality|best-practices|level|security|name`
- `--order asc|desc`
- `--min-quality`
- `--min-best-practices`
- `--min-level`
- `--min-security`
- `--validation-status`
- `--security-status`

## 7. API Operations

Start the API:

```bash
npx omni-skills api --port 3333
```

Key routes:

- `GET /healthz`
- `GET /openapi.json`
- `GET /v1/skills`
- `GET /v1/search`
- `GET /v1/skills/:id/archives`
- `GET /v1/skills/:id/download/archive?format=zip`
- `GET /v1/skills/:id/download/archive/checksums`

### Hosted API hardening

Enable bearer auth:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me npx omni-skills api --port 3333
```

Enable API key auth:

```bash
OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api --port 3333
```

Enable rate limiting:

```bash
OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills api --port 3333
```

Enable audit logging:

```bash
OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx omni-skills api --port 3333
```

Health stays open by design; catalog routes require auth when auth is enabled.

## 8. MCP Operations

Start MCP transports:

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
```

Local sidecar mode:

```bash
npx omni-skills mcp stream --local
```

### Hosted MCP hardening

The HTTP transports reuse the same auth and rate-limit env vars as the API.

Example:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx omni-skills mcp stream
```

Protected routes:

- `POST /mcp` for stream transport
- `GET /sse` and `POST /messages` for SSE transport

`/healthz` remains open.

## 9. A2A Operations

Start A2A:

```bash
npx omni-skills a2a --port 3335
```

Current endpoints:

- `GET /healthz`
- `GET /.well-known/agent.json`
- `POST /a2a/message/send`

The current A2A layer is a scaffold, not a task lifecycle engine.

## 10. Release Checklist

Recommended preflight:

```bash
npm run smoke
npm pack --dry-run
```

Full release-grade local pass:

```bash
npm run validate
npm run taxonomy:report
npm run build
npm run verify:archives
npm test
npm pack --dry-run
git diff --check
```

## 11. Troubleshooting

Catalog mismatch or stale metadata:

```bash
npm run build
```

Skill category looks wrong:

```bash
npx omni-skills recategorize
```

Archive verification fails:

- rebuild with `npm run build`
- rerun `npm run verify:archives`
- if signing is enabled, confirm the public key and `openssl` availability

API or MCP returns `401`:

- verify `OMNI_SKILLS_HTTP_BEARER_TOKEN` or `OMNI_SKILLS_HTTP_API_KEYS`
- include `Authorization: Bearer <token>` or `x-api-key`

API or MCP returns `429`:

- increase `OMNI_SKILLS_RATE_LIMIT_MAX`
- widen `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- reduce burst traffic from clients or probes
