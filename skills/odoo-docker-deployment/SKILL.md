---
name: odoo-docker-deployment
description: "Odoo Docker Deployment workflow skill. Use this skill when the user needs Production-ready Docker and docker-compose setup for Odoo with PostgreSQL, persistent volumes, environment-based configuration, and Nginx reverse proxy and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["odoo-docker-deployment", "production-ready", "docker", "and", "docker-compose", "setup", "for", "odoo"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Odoo Docker Deployment

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/odoo-docker-deployment` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Odoo Docker Deployment

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Spinning up a local Odoo development environment with Docker.
- Deploying Odoo to a VPS or cloud server (AWS, DigitalOcean, etc.).
- Troubleshooting Odoo container startup failures or database connection errors.
- Adding a reverse proxy with SSL to an existing Odoo Docker setup.
- Use when the request clearly matches the imported source intent: Production-ready Docker and docker-compose setup for Odoo with PostgreSQL, persistent volumes, environment-based configuration, and Nginx reverse proxy.
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

This skill provides a complete, production-ready Docker setup for Odoo, including PostgreSQL, persistent file storage, environment variable configuration, and an optional Nginx reverse proxy with SSL. It covers both development and production configurations.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-docker-deployment` and describe your deployment scenario.
2. **Generate**: Receive a complete `docker-compose.yml` and `odoo.conf` ready to run.
3. **Debug**: Describe your container error and get a diagnosis with a fix.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-docker-deployment to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @odoo-docker-deployment against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @odoo-docker-deployment for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @odoo-docker-deployment using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Production docker-compose.yml

```yaml
# Note: The top-level 'version' key is deprecated in Docker Compose v2+
# and can be safely omitted. Remove it to avoid warnings.

services:
  db:
    image: postgres:15
    restart: always
    environment:
      POSTGRES_DB: odoo
      POSTGRES_USER: odoo
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - odoo-net

  odoo:
    image: odoo:17.0
    restart: always
    depends_on:
      db:
        condition: service_healthy
    ports:
      - "8069:8069"
      - "8072:8072"   # Longpolling for live chat / bus
    environment:
      HOST: db
      USER: odoo
      PASSWORD: ${POSTGRES_PASSWORD}
    volumes:
      - odoo-web-data:/var/lib/odoo
      - ./addons:/mnt/extra-addons   # Custom modules
      - ./odoo.conf:/etc/odoo/odoo.conf
    networks:
      - odoo-net

volumes:
  postgres-data:
  odoo-web-data:

networks:
  odoo-net:
```

### Example 2: odoo.conf

```ini
[options]
admin_passwd = ${ODOO_MASTER_PASSWORD}    ; set via env or .env file
db_host = db
db_port = 5432
db_user = odoo
db_password = ${POSTGRES_PASSWORD}        ; set via env or .env file

; addons_path inside the official Odoo Docker image (Debian-based)
addons_path = /mnt/extra-addons,/usr/lib/python3/dist-packages/odoo/addons

logfile = /var/log/odoo/odoo.log
log_level = warn

; Worker tuning for a 4-core / 8GB server:
workers = 9                ; (CPU cores × 2) + 1
max_cron_threads = 2
limit_memory_soft = 1610612736   ; 1.5 GB — soft kill threshold
limit_memory_hard = 2147483648   ; 2.0 GB — hard kill threshold
limit_time_cpu = 600
limit_time_real = 1200
limit_request = 8192
```

### Example 3: Common Commands

```bash
# Start all services in background
docker compose up -d

# Stream Odoo logs in real time
docker compose logs -f odoo

# Restart Odoo only (not DB — avoids data risk)
docker compose restart odoo

# Stop all services
docker compose down

# Backup the database to a local SQL dump
docker compose exec db pg_dump -U odoo odoo > backup_$(date +%Y%m%d).sql

# Update a custom module without restarting the server
docker compose exec odoo odoo -d odoo --update my_module --stop-after-init
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Store all secrets in a .env file and reference them with ${VAR} — never hardcode passwords in docker-compose.yml.
- ✅ Do: Use dependson: condition: servicehealthy with a PostgreSQL healthcheck to prevent Odoo starting before the DB is ready.
- ✅ Do: Put Nginx in front of Odoo for SSL termination (Let's Encrypt / Certbot) — never expose Odoo directly on port 80/443.
- ✅ Do: Set workers = (CPU cores × 2) + 1 in odoo.conf — workers = 0 uses single-threaded mode and blocks all users.
- ❌ Don't: Expose port 5432 (PostgreSQL) to the public internet — keep it on the internal Docker network only.
- ❌ Don't: Use the latest or 17 Docker image tags in production — always pin to a specific patch-level tag (e.g., odoo:17.0).
- ❌ Don't: Mount odoo.conf and rely on it for secrets in CI/CD — use Docker secrets or environment variables instead.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Store all secrets in a `.env` file and reference them with `${VAR}` — never hardcode passwords in `docker-compose.yml`.
- ✅ **Do:** Use `depends_on: condition: service_healthy` with a PostgreSQL healthcheck to prevent Odoo starting before the DB is ready.
- ✅ **Do:** Put Nginx in front of Odoo for SSL termination (Let's Encrypt / Certbot) — never expose Odoo directly on port 80/443.
- ✅ **Do:** Set `workers = (CPU cores × 2) + 1` in `odoo.conf` — `workers = 0` uses single-threaded mode and blocks all users.
- ❌ **Don't:** Expose port 5432 (PostgreSQL) to the public internet — keep it on the internal Docker network only.
- ❌ **Don't:** Use the `latest` or `17` Docker image tags in production — always pin to a specific patch-level tag (e.g., `odoo:17.0`).
- ❌ **Don't:** Mount `odoo.conf` and rely on it for secrets in CI/CD — use Docker secrets or environment variables instead.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/odoo-docker-deployment`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@mobile-developer` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@mobile-security-coder` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@modern-javascript-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monday-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- This skill covers **self-hosted Docker deployments** — Odoo.sh (cloud-managed hosting) has a completely different deployment model.
- **Horizontal scaling** (multiple Odoo containers behind a load balancer) requires shared filestore (NFS or S3-compatible storage) not covered here.
- Does not include an Nginx configuration template — consult the [official Odoo Nginx docs](https://www.odoo.com/documentation/17.0/administration/install/deploy.html) for the full reverse proxy config.
- The `addons_path` inside the Docker image may change with new base image versions — always verify after upgrading the Odoo image.
