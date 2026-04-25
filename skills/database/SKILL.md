---
name: database
description: "Database Workflow Bundle workflow skill. Use this skill when the user needs Database development and operations workflow covering SQL, NoSQL, database design, migrations, optimization, and data engineering and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["database", "development", "and", "operations", "covering", "sql", "nosql", "design"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-25"
---

# Database Workflow Bundle

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/database` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Database Workflow Bundle

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Designing database schemas
- Implementing database migrations
- Optimizing query performance
- Setting up data pipelines
- Managing database operations
- Implementing data quality

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

1. database-architect - Database architecture
2. database-design - Schema design
3. postgresql - PostgreSQL design
4. nosql-expert - NoSQL design
5. Gather requirements
6. Design schema
7. Define relationships

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Database Design

#### Skills to Invoke
- `database-architect` - Database architecture
- `database-design` - Schema design
- `postgresql` - PostgreSQL design
- `nosql-expert` - NoSQL design

#### Actions
1. Gather requirements
2. Design schema
3. Define relationships
4. Plan indexing strategy
5. Design for scalability

#### Copy-Paste Prompts
```
Use @database-architect to design database schema
```

```
Use @postgresql to design PostgreSQL schema
```

### Phase 2: Database Implementation

#### Skills to Invoke
- `prisma-expert` - Prisma ORM
- `database-migrations-sql-migrations` - SQL migrations
- `neon-postgres` - Serverless Postgres

#### Actions
1. Set up database connection
2. Configure ORM
3. Create migrations
4. Implement models
5. Set up seed data

#### Copy-Paste Prompts
```
Use @prisma-expert to set up Prisma ORM
```

```
Use @database-migrations-sql-migrations to create migrations
```

### Phase 3: Query Optimization

#### Skills to Invoke
- `database-optimizer` - Database optimization
- `sql-optimization-patterns` - SQL optimization
- `postgres-best-practices` - PostgreSQL optimization

#### Actions
1. Analyze slow queries
2. Review execution plans
3. Optimize indexes
4. Refactor queries
5. Implement caching

#### Copy-Paste Prompts
```
Use @database-optimizer to optimize database performance
```

```
Use @sql-optimization-patterns to optimize SQL queries
```

### Phase 4: Data Migration

#### Skills to Invoke
- `database-migration` - Database migration
- `framework-migration-code-migrate` - Code migration

#### Actions
1. Plan migration strategy
2. Create migration scripts
3. Test migration
4. Execute migration
5. Verify data integrity

#### Copy-Paste Prompts
```
Use @database-migration to plan database migration
```

### Phase 5: Data Pipeline Development

#### Skills to Invoke
- `data-engineer` - Data engineering
- `data-engineering-data-pipeline` - Data pipelines
- `airflow-dag-patterns` - Airflow workflows
- `dbt-transformation-patterns` - dbt transformations

#### Actions
1. Design data pipeline
2. Set up data ingestion
3. Implement transformations
4. Configure scheduling
5. Set up monitoring

#### Copy-Paste Prompts
```
Use @data-engineer to design data pipeline
```

```
Use @airflow-dag-patterns to create Airflow DAGs
```

### Phase 6: Data Quality

#### Skills to Invoke
- `data-quality-frameworks` - Data quality
- `data-engineering-data-driven-feature` - Data-driven features

#### Actions
1. Define quality metrics
2. Implement validation
3. Set up monitoring
4. Create alerts
5. Document standards

#### Copy-Paste Prompts
```
Use @data-quality-frameworks to implement data quality checks
```

### Phase 7: Database Operations

#### Skills to Invoke
- `database-admin` - Database administration
- `backup-automation` - Backup automation

#### Actions
1. Set up backups
2. Configure replication
3. Monitor performance
4. Plan capacity
5. Implement security

#### Copy-Paste Prompts
```
Use @database-admin to manage database operations
```

#### Imported: Database Technology Workflows

### PostgreSQL
```
Skills: postgresql, postgres-best-practices, neon-postgres, prisma-expert
```

### MongoDB
```
Skills: nosql-expert, azure-cosmos-db-py
```

### Redis
```
Skills: bullmq-specialist, upstash-qstash
```

### Data Warehousing
```
Skills: clickhouse-io, dbt-transformation-patterns
```

#### Imported: Related Workflow Bundles

- `development` - Application development
- `cloud-devops` - Infrastructure
- `ai-ml` - AI/ML data pipelines
- `testing-qa` - Data testing

#### Imported: Overview

Comprehensive database workflow for database design, development, optimization, migrations, and data engineering. Covers SQL, NoSQL, and modern data platforms.

#### Imported: Quality Gates

- [ ] Schema designed and reviewed
- [ ] Migrations tested
- [ ] Performance benchmarks met
- [ ] Backups configured
- [ ] Monitoring in place
- [ ] Documentation complete

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @database to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @database against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @database for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @database using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/database`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
