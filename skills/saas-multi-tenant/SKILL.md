---
name: saas-multi-tenant
description: "SaaS Multi-Tenant Architecture workflow skill. Use this skill when the user needs Design and implement multi-tenant SaaS architectures with row-level security, tenant-scoped queries, shared-schema isolation, and safe cross-tenant admin patterns in PostgreSQL and TypeScript and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["multi-tenancy", "saas", "row-level-security", "postgresql", "tenant-isolation", "saas-multi-tenant", "design", "and"]
complexity: advanced
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# SaaS Multi-Tenant Architecture

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/saas-multi-tenant` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# SaaS Multi-Tenant Architecture

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Never Do This, Edge Cases, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The user is building a SaaS application where multiple customers share the same database
- The user asks about tenant isolation, row-level security, or data leakage prevention
- The user needs to scope every database query to a specific tenant without manual WHERE clauses
- The user asks about shared-schema vs schema-per-tenant vs database-per-tenant tradeoffs
- The user is implementing admin endpoints that must access data across tenants
- The user needs to add tenant_id columns to an existing single-tenant application

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

1. Determine the tenancy model. Ask the user about their scale expectations and isolation requirements. For most SaaS apps under 1000 tenants, shared-schema with a tenant_id column on every table is the correct default. Schema-per-tenant adds operational overhead (migrations run N times). Database-per-tenant is only justified when tenants have regulatory data residency requirements.
2. Add tenantid to every tenant-scoped table. The column must be NOT NULL, type UUID or TEXT, and included in every composite index. Never allow a tenant-scoped table to exist without this column — a missing tenantid is a data leak waiting to happen.
3. Set up PostgreSQL Row-Level Security (RLS). Create a policy on each tenant-scoped table that filters rows by currentsetting('app.currenttenant_id'). This acts as a database-level safety net — even if application code forgets a WHERE clause, RLS blocks cross-tenant reads.
4. Build tenant-aware middleware. At the start of every request, extract the tenantid from the authenticated session or JWT claims. Set it on the database connection using SET LOCAL app.currenttenant_id = '...' inside a transaction. Every subsequent query in that request inherits the tenant scope automatically.
5. Scope all ORM queries by tenant. If using Prisma, apply a global middleware that injects where: { tenantId } into every findMany, findFirst, update, and delete call. If using Drizzle, create a base query builder that includes the tenant filter. Never rely on developers remembering to add the filter manually.
6. Handle tenant-aware migrations. Every new table migration must include tenantid as a column. Write a linting rule or CI check that rejects any migration creating a table without tenantid unless the table is explicitly marked as global (e.g., plans, feature_flags).
7. Build cross-tenant admin routes separately. Admin endpoints that aggregate data across tenants must bypass RLS explicitly using SET LOCAL role = 'admin_bypass' or a dedicated database role. These routes must be protected by a separate admin authentication flow — never reuse tenant user sessions for admin access.

### Imported Workflow Notes

#### Imported: Core Workflow

1. Determine the tenancy model. Ask the user about their scale expectations and isolation requirements. For most SaaS apps under 1000 tenants, shared-schema with a `tenant_id` column on every table is the correct default. Schema-per-tenant adds operational overhead (migrations run N times). Database-per-tenant is only justified when tenants have regulatory data residency requirements.

2. Add `tenant_id` to every tenant-scoped table. The column must be `NOT NULL`, type `UUID` or `TEXT`, and included in every composite index. Never allow a tenant-scoped table to exist without this column — a missing `tenant_id` is a data leak waiting to happen.

3. Set up PostgreSQL Row-Level Security (RLS). Create a policy on each tenant-scoped table that filters rows by `current_setting('app.current_tenant_id')`. This acts as a database-level safety net — even if application code forgets a WHERE clause, RLS blocks cross-tenant reads.

4. Build tenant-aware middleware. At the start of every request, extract the `tenant_id` from the authenticated session or JWT claims. Set it on the database connection using `SET LOCAL app.current_tenant_id = '...'` inside a transaction. Every subsequent query in that request inherits the tenant scope automatically.

5. Scope all ORM queries by tenant. If using Prisma, apply a global middleware that injects `where: { tenantId }` into every `findMany`, `findFirst`, `update`, and `delete` call. If using Drizzle, create a base query builder that includes the tenant filter. Never rely on developers remembering to add the filter manually.

6. Handle tenant-aware migrations. Every new table migration must include `tenant_id` as a column. Write a linting rule or CI check that rejects any migration creating a table without `tenant_id` unless the table is explicitly marked as global (e.g., `plans`, `feature_flags`).

7. Build cross-tenant admin routes separately. Admin endpoints that aggregate data across tenants must bypass RLS explicitly using `SET LOCAL role = 'admin_bypass'` or a dedicated database role. These routes must be protected by a separate admin authentication flow — never reuse tenant user sessions for admin access.

8. Implement tenant provisioning. When a new customer signs up, create their tenant record, seed default data (roles, settings, onboarding state), and assign the founding user. Wrap this in a database transaction so partial provisioning never leaves orphan records.

#### Imported: Never Do This

1. **Never query a tenant-scoped table without a `tenant_id` filter.** Even if your ORM middleware handles it, raw SQL queries bypass middleware entirely. Every raw query must include `WHERE tenant_id = $1` or rely on RLS. A single unscoped `SELECT * FROM invoices` leaks every customer's billing data.

2. **Never store `tenant_id` only in the application session without enforcing it at the database level.** Application-layer filtering is a suggestion. RLS is enforcement. If a bug in your middleware skips the tenant filter, only RLS prevents the data leak. Run both layers.

3. **Never use auto-incrementing integer IDs for tenant-scoped resources.** Sequential IDs (`invoice #1042`) let attackers enumerate other tenants' resources by incrementing the ID. Use UUIDs for all tenant-scoped primary keys. Reserve integer IDs for internal-only tables.

4. **Never let tenant users access admin aggregation endpoints.** A route like `GET /admin/metrics` that queries across all tenants must never be reachable with a regular tenant JWT. Use a separate authentication mechanism (API key, admin role claim with a different issuer) for cross-tenant routes.

5. **Never run migrations with RLS enabled on the migration connection.** The migration user needs to create tables, add columns, and modify policies. If RLS is active on the migration connection, `ALTER TABLE` commands may silently fail or affect only the "current tenant's" view. Use a dedicated superuser or `bypassrls` role for migrations.

6. **Never share connection pools across tenants when using `SET LOCAL`.** If you use `SET LOCAL app.current_tenant_id` inside a transaction, that setting is scoped to the transaction. But if a previous request's transaction was not properly committed or rolled back, the connection returns to the pool with stale tenant context. Always `RESET app.current_tenant_id` in the cleanup path.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @saas-multi-tenant to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @saas-multi-tenant against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @saas-multi-tenant for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @saas-multi-tenant using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: PostgreSQL RLS Policy for Tenant Isolation

```sql
-- Enable RLS on the table
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects FORCE ROW LEVEL SECURITY;

-- Policy: users can only see rows where tenant_id matches the session variable
CREATE POLICY tenant_isolation ON projects
  USING (tenant_id = current_setting('app.current_tenant_id')::uuid);

-- Policy for INSERT: new rows must match the current tenant
CREATE POLICY tenant_insert ON projects
  FOR INSERT
  WITH CHECK (tenant_id = current_setting('app.current_tenant_id')::uuid);
```

### Example 2: Express Middleware That Sets Tenant Context per Request

```typescript
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function tenantMiddleware(req, res, next) {
  const tenantId = req.auth?.tenantId; // extracted from JWT during auth
  if (!tenantId) return res.status(403).json({ error: "No tenant context" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    // Use set_config — SET LOCAL does not accept bind placeholders ($1)
    await client.query("SELECT set_config('app.current_tenant_id', $1, true)", [tenantId]);
    req.db = client;
    req.tenantId = tenantId;

    // Cleanup on response finish — guarantees release even if handler skips next()
    res.on("finish", async () => {
      try { await client.query("COMMIT"); } catch { await client.query("ROLLBACK"); }
      client.release();
    });

    next();
  } catch (err) {
    await client.query("ROLLBACK").catch(() => {});
    client.release();
    next(err);
  }
}
```

### Example 3: Prisma Middleware for Automatic Tenant Scoping

```typescript
import { PrismaClient } from "@prisma/client";

// Tables that do NOT have tenant_id (global tables)
const GLOBAL_TABLES = new Set(["Plan", "FeatureFlag", "SystemConfig"]);

function createTenantPrisma(tenantId: string): PrismaClient {
  const prisma = new PrismaClient();

  prisma.$use(async (params, next) => {
    if (GLOBAL_TABLES.has(params.model ?? "")) return next(params);

    // Initialize args.where — Prisma passes undefined args for calls like findMany()
    params.args = params.args ?? {};
    params.args.where = params.args.where ?? {};

    // Inject tenant filter on reads (skip findUnique — it only accepts unique-field selectors)
    if (["findMany", "findFirst", "count", "aggregate"].includes(params.action)) {
      params.args.where = { ...params.args.where, tenantId };
    }

    // Inject tenant_id on creates
    if (["create", "createMany"].includes(params.action)) {
      params.args.data = params.args.data ?? {};
      if (params.action === "createMany") {
        params.args.data = params.args.data.map((d: any) => ({ ...d, tenantId }));
      } else {
        params.args.data = { ...params.args.data, tenantId };
      }
    }

    // Scope updates and deletes
    if (["update", "updateMany", "delete", "deleteMany"].includes(params.action)) {
      params.args.where = { ...params.args.where, tenantId };
    }

    return next(params);
  });

  return prisma;
}
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Create a tenants table as the single source of truth. Every tenantid foreign key in every table points back to tenants.id. Include columns for name, slug (for subdomain routing), planid, createdat, and deletedat. This table is the root of your entire data model.
- Index tenantid as the first column in every composite index. PostgreSQL uses leftmost prefix matching for composite indexes. An index on (tenantid, createdat) serves both "all items for tenant X" and "items for tenant X sorted by date." An index on (createdat, tenant_id) only helps date-range queries across all tenants.
- Use subdomains or path prefixes for tenant routing. acme.yourapp.com or yourapp.com/org/acme — both work. Map the subdomain or path to a tenant_id lookup at the edge (middleware or reverse proxy). This lookup should be cached (Redis or in-memory with 60s TTL) since it runs on every single request.
- Separate tenant-scoped tables from global tables explicitly. Maintain a list (code constant or database table) of which tables are global (no tenant_id) and which are tenant-scoped. Use this list in your ORM middleware, your migration linter, and your data export job. If a table isn't in either list, the CI check should fail.
- Test with at least 3 tenants in your seed data. A single tenant in development hides every multi-tenancy bug. Two tenants hides bugs where the first tenant's data leaks to the second but not vice versa. Three tenants catches ordering and filtering bugs that only appear with multiple peers.
- Rate-limit and quota per tenant, not globally. A global rate limit of 1000 requests/minute means one noisy tenant can exhaust the quota for everyone. Implement per-tenant rate limiting using a Redis key pattern like ratelimit:{tenant_id}:{endpoint} with a sliding window counter.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Create a `tenants` table as the single source of truth.** Every `tenant_id` foreign key in every table points back to `tenants.id`. Include columns for `name`, `slug` (for subdomain routing), `plan_id`, `created_at`, and `deleted_at`. This table is the root of your entire data model.

2. **Index `tenant_id` as the first column in every composite index.** PostgreSQL uses leftmost prefix matching for composite indexes. An index on `(tenant_id, created_at)` serves both "all items for tenant X" and "items for tenant X sorted by date." An index on `(created_at, tenant_id)` only helps date-range queries across all tenants.

3. **Use subdomains or path prefixes for tenant routing.** `acme.yourapp.com` or `yourapp.com/org/acme` — both work. Map the subdomain or path to a `tenant_id` lookup at the edge (middleware or reverse proxy). This lookup should be cached (Redis or in-memory with 60s TTL) since it runs on every single request.

4. **Separate tenant-scoped tables from global tables explicitly.** Maintain a list (code constant or database table) of which tables are global (no `tenant_id`) and which are tenant-scoped. Use this list in your ORM middleware, your migration linter, and your data export job. If a table isn't in either list, the CI check should fail.

5. **Test with at least 3 tenants in your seed data.** A single tenant in development hides every multi-tenancy bug. Two tenants hides bugs where the first tenant's data leaks to the second but not vice versa. Three tenants catches ordering and filtering bugs that only appear with multiple peers.

6. **Rate-limit and quota per tenant, not globally.** A global rate limit of 1000 requests/minute means one noisy tenant can exhaust the quota for everyone. Implement per-tenant rate limiting using a Redis key pattern like `ratelimit:{tenant_id}:{endpoint}` with a sliding window counter.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/saas-multi-tenant`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@professional-proofreader` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@programmatic-seo` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@progressive-estimation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@progressive-web-app` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Edge Cases

1. **Tenant deletion and data retention.** When a tenant cancels their subscription, you cannot simply `DELETE FROM tenants WHERE id = $1`. Foreign key cascades may time out on large datasets. Instead, soft-delete the tenant (set `deleted_at`), revoke all user sessions, then run a background job that deletes tenant data in batches over hours or days.

2. **Tenant data export for GDPR/compliance.** When a tenant requests a full data export, you need to query every tenant-scoped table for that `tenant_id` and package it. Build a registry of all tenant-scoped tables (parse your migration files or maintain a manifest) so the export job doesn't miss tables added after the export feature was built.

3. **Shared resources between tenants.** Some features require shared state — e.g., a marketplace where Tenant A's products are visible to Tenant B's users. These tables need a different RLS policy: read access is public (no tenant filter), but write access is still scoped to the owning tenant. Model these as `owner_tenant_id` instead of `tenant_id`.

4. **Tenant-aware background jobs.** When a cron job or queue worker processes tasks, there is no HTTP request to extract `tenant_id` from. The job payload must include `tenant_id`, and the worker must set the database session variable before processing. Never run background jobs without tenant context — they will either fail on RLS or bypass it entirely.

5. **Connection pool exhaustion with schema-per-tenant.** If you use one PostgreSQL schema per tenant and each schema requires its own connection pool, 500 tenants means 500 pools. This exhausts `max_connections` fast. Use a connection pooler like PgBouncer in transaction mode, or switch to shared-schema before hitting this wall.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
