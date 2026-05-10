---
name: "database"
slug: "database"
description: "Database Workflow Bundle workflow skill. Use this skill when the user needs database development and operations workflow covering SQL, NoSQL, database design, migrations, optimization, and data engineering, and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "backend"
tags:
  - "database"
  - "sql"
  - "nosql"
  - "schema-design"
  - "migrations"
  - "performance"
  - "backup-restore"
  - "data-engineering"
  - "review"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
license: "Unknown"
date_added: "2026-04-14"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "database"
family_name: "Database Workflow Bundle"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/database"
upstream_skill: "skills/database"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "database"
---

# Database Workflow Bundle

## Overview

This skill preserves the upstream database workflow while making it more useful for real engineering review and execution.

Use it when the work involves one or more of these areas:
- relational schema design
- NoSQL schema and index design
- migration planning, validation, and rollout safety
- query performance diagnosis
- backup and restore readiness
- data pipelines, freshness, and data-quality controls

This skill is especially appropriate when you must keep provenance intact while still delivering a technically credible review, remediation plan, or implementation path.

## When to Use

Use this skill when the request is about database work that has operational consequences, not just syntax help.

Activate it for tasks such as:
- reviewing a schema change before implementation
- planning or validating a migration
- diagnosing slow queries or degraded throughput
- checking whether indexing matches access patterns
- evaluating backup, restore, or rollback readiness
- reviewing ETL, CDC, or analytics-model reliability
- assessing data-quality controls such as tests, freshness, and invariants

Do not use this skill as the primary workflow when:
- the user only wants a single SQL statement with no operational context
- the problem is purely application-layer and does not require database judgment
- the request is about vendor billing, licensing, or account administration rather than database engineering

## Workflow

1. **Confirm scope and provenance**
   - Identify the database type: PostgreSQL, MySQL, MongoDB, warehouse, or mixed stack.
   - Confirm whether the task is design, migration, performance, operations, or data-pipeline review.
   - Preserve upstream workflow files, copied support files, and provenance anchors before proposing edits.
   - Separate facts from assumptions: engine version, table sizes, write rate, read patterns, RPO/RTO, deployment constraints.

2. **Classify the change or incident**
   - Decide whether this is primarily a schema-design issue, migration-risk issue, query-plan issue, restore-readiness issue, or data-quality issue.
   - For multi-part requests, split the work into tracks instead of treating all database problems as one class.
   - Identify blast radius: single table/collection, cross-service dependency, replication impact, analytics downstream impact.

3. **Gather concrete evidence before recommending action**
   - For SQL performance: collect the exact query shape, parameters if relevant, indexes, row counts, and planner output.
   - For migrations: inspect versioned artifacts, checksums or validation status, preconditions, and rollout ordering.
   - For operations: confirm backup format, retention, restore procedure, and whether restore testing has actually been performed.
   - For NoSQL: map access patterns, document shapes, cardinality, and index coverage.
   - For data engineering: inspect source freshness, test failures, lineage, and late-arriving or duplicate-data behavior.

4. **Review safety before suggesting execution**
   - Prefer reversible or staged changes.
   - Call out locking risk, backfill cost, replication lag, index build impact, and storage amplification.
   - Distinguish safe read-only diagnostics from write-affecting commands.
   - If the environment is production-like, avoid proposing destructive commands without explicit rollback and restore guidance.

5. **Produce a structured recommendation**
   - State the current issue in operational terms.
   - Provide the likely cause with evidence.
   - Recommend the smallest high-confidence next action.
   - Include validation criteria: what should improve, what should remain unchanged, and how to detect failure early.
   - If uncertainty remains, list the exact missing evidence instead of guessing.

6. **Add deployment and verification guidance**
   - For schema changes: define ordering, compatibility assumptions, and post-deploy verification.
   - For performance changes: compare before/after latency, rows scanned, buffer usage, or index utilization.
   - For restore readiness: require a restore test, not just backup existence.
   - For data pipelines: verify tests, freshness thresholds, and reconciliation checks.

7. **Document residual risk and handoff**
   - Record unresolved risks such as long-running locks, large backfills, skewed partitions, or stale statistics.
   - Make it clear whether the recommendation is ready for implementation, needs DBA review, or requires a rehearsal in staging.
   - Keep provenance and upstream context intact in the final handoff.

## Examples

### Example 1: Migration review

**Input**
```text
Add a NOT NULL column to a large orders table and deploy this afternoon.
```

**Good output**
```text
Risk: medium to high, depending on engine version and table size.

Review findings:
- A direct NOT NULL addition may trigger table rewrite or prolonged locking on some engines and versions.
- The change is not yet shown as a staged migration.
- No rollback or backfill plan is documented.

Recommended safer sequence:
1. Add the column as nullable.
2. Backfill in bounded batches.
3. Add application write path for the new field.
4. Validate null-free state.
5. Enforce NOT NULL in a separate migration.

Verification:
- No sustained lock waits above agreed threshold.
- Backfill completes without replica lag breach.
- Row counts with NULL in the new column remain at zero before constraint enforcement.
```

**Weak output**
```text
Run ALTER TABLE to add the column and then redeploy.
```

### Example 2: Query-performance review

**Input**
```sql
SELECT *
FROM orders
WHERE customer_id = 42
  AND created_at >= CURRENT_DATE - INTERVAL '30 days'
ORDER BY created_at DESC
LIMIT 50;
```

**Expected review focus**
```text
- Confirm whether an index supports filter plus ordering, such as (customer_id, created_at DESC).
- Inspect actual planner output before recommending changes.
- Check whether SELECT * causes avoidable heap access or wide-row transfer.
- Compare before/after latency and rows scanned after any index or query change.
```

### Example 3: Backup readiness review

**Input**
```text
Backups are enabled every night. Are we covered?
```

**Good output**
```text
Not enough evidence. Backup existence is not the same as recovery readiness.

Required checks:
- backup type and retention window
- restore procedure ownership
- last successful restore rehearsal
- point-in-time recovery requirements
- time to restore compared with RTO
```

For a fuller worked example, open [`examples/review-example.md`](examples/review-example.md).

## Best Practices

- **Do** treat migrations as version-controlled artifacts with validation before deployment.
- **Do** prefer expand-and-contract patterns for incompatible schema changes.
- **Do** use evidence from planner output, runtime metrics, and row counts before tuning queries.
- **Do** treat backup strategy as incomplete until restore testing succeeds.
- **Do** align MongoDB schema and indexing with real access patterns rather than abstract normalization rules.
- **Do** require explicit data-quality gates for analytics pipelines, including tests and freshness expectations.

- **Do not** assume an index helps without checking selectivity, ordering needs, and write cost.
- **Do not** recommend `SELECT *` in performance-sensitive paths when narrower projection is possible.
- **Do not** merge destructive migration guidance without rollback, restore, or containment steps.
- **Do not** equate a successful backup job with proven recoverability.
- **Do not** hide uncertainty; ask for explain plans, schema details, cardinality, and workload shape when missing.

## Troubleshooting

**Symptoms:** A migration looks simple in code review but causes deployment anxiety.

**Solution:** Check for hidden operational costs: table rewrite risk, long-lived locks, index build impact, backfill duration, replication lag, and whether the change is backward compatible across application versions.

**Symptoms:** A new index was added but the query is still slow.

**Solution:** Verify the query plan instead of assuming index usage. Check predicate selectivity, sort requirements, stale statistics, mismatched column order, and whether the query shape forces heap lookups or scans too many rows.

**Symptoms:** Backup jobs are green, but nobody is confident about recovery.

**Solution:** Ask for the most recent restore rehearsal, measured restore duration, point-in-time recovery procedure, and owner-responsible runbook. If none exist, mark restore readiness as unproven.

**Symptoms:** A MongoDB collection keeps growing and read performance degrades unpredictably.

**Solution:** Review access patterns, document growth, array usage, shard or partition strategy if relevant, and index fit. Look for anti-patterns such as unbounded arrays, over-denormalized hot documents, or indexes that do not match query predicates.

**Symptoms:** dbt or warehouse models pass sometimes and fail intermittently.

**Solution:** Check source freshness thresholds, late-arriving data behavior, uniqueness assumptions, incremental model predicates, and whether tests reflect business invariants rather than only schema constraints.

## Additional Resources

- [`references/review-criteria.md`](references/review-criteria.md) — Open this during real review work for migration-risk checks, performance triage, restore-readiness criteria, NoSQL anti-pattern review, and data-quality gates.
- [`examples/review-example.md`](examples/review-example.md) — Open this when you need a concrete example of weak vs strong database review output.

## Related Skills

No related local skills were provided in the source context.
