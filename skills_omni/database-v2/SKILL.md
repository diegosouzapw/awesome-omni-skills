---
name: "database-v2"
slug: "database-v2"
description: "Database Workflow Bundle workflow skill. Use this skill when the user needs database development and operations workflow covering SQL, NoSQL, database design, migrations, optimization, and data engineering, while preserving upstream workflow context, copied support files, and provenance before merge or handoff."
version: "0.0.1"
category: "backend"
tags:
  - "database-v2"
  - "database"
  - "sql"
  - "nosql"
  - "migrations"
  - "performance"
  - "schema-review"
  - "operations"
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
date_added: "2026-04-16"
date_updated: "2026-05-04"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "database-v2"
family_name: "Database Workflow Bundle"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/database-v2"
upstream_skill: "skills/database-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "database-v2"
---

# Database Workflow Bundle

## Overview

Use this skill to review, plan, or guide database work that may affect:
- data correctness
- schema compatibility
- migration safety
- query performance
- operational reliability
- backup and restore readiness
- stateful runtime behavior in containers or Kubernetes

This skill is for database change analysis and operational review, not for blind execution. Use it when the task requires judgment across application code, schema or model changes, migration order, runtime behavior, and rollback risk.

If this copy came from an imported upstream workflow, preserve provenance markers, copied support files, and origin notes unless the user explicitly asks for cleanup.

## When to Use

Activate this skill when the request includes one or more of the following:
- SQL schema changes, indexes, constraints, views, or query rewrites
- NoSQL collection or document model changes
- migration creation, ordering, rollback, or drift review
- slow query investigation or execution-plan review
- backup, restore, retention, or recovery-readiness checks
- database deployment in Docker, Kubernetes, or other stateful runtimes
- data pipeline or batch-load changes that can affect integrity or performance

Do **not** use this skill as the primary workflow when the task is only:
- basic CRUD application coding with no schema or runtime impact
- generic infrastructure work unrelated to persistence
- pure analytics or BI interpretation with no database design or operations decision

## Activation Boundary

Before doing deep review, confirm these inputs:
1. **Engine and version:** PostgreSQL, MySQL-compatible, MongoDB, or another named engine.
2. **Change type:** schema/model, migration, query, operational config, restore, or performance issue.
3. **Execution context:** local dev, CI, production, managed service, container, or Kubernetes.
4. **Risk surface:** destructive DDL, backfill, lock risk, storage change, credential handling, or restore dependency.
5. **Evidence available:** migration files, schema diff, EXPLAIN output, logs, manifests, backup procedure, or incident symptoms.

If the request does not provide these, ask for them before approving or proposing high-risk changes.

## Workflow

1. **Classify the database task**
   - Identify the engine, version, workload type, and whether the change is relational, document-oriented, or runtime-operational.
   - Separate design review from execution review. A good schema idea can still be unsafe to deploy.

2. **Map the change surface**
   - List all touched artifacts: schema files, migrations, ORM models, queries, indexes, manifests, secrets references, backup jobs, restore docs, or pipeline configs.
   - Check whether application code and database changes are coupled and require ordering.

3. **Review correctness and compatibility**
   - For relational systems, check keys, nullability, uniqueness, foreign-key behavior, default values, and backward compatibility.
   - For document databases, check document shape, validation rules, query paths, index coverage, and write amplification risk.
   - Flag assumptions about existing data quality before recommending stricter constraints.

4. **Review migration and rollout safety**
   - Identify destructive or locking operations: table rewrites, large index builds, column type changes, mass updates, or collection-wide rewrites.
   - Require a deployment order when code depends on new columns, indexes, or document fields.
   - Check for rollback reality. Many schema changes are only partially reversible once data has changed.

5. **Review performance and operational evidence**
   - Use execution plans, index usage, cardinality assumptions, or query shape evidence instead of intuition.
   - For runtime changes, inspect persistence settings, volume claims, storage classes, restart behavior, readiness, and backup integration.
   - Confirm that maintenance operations such as analyze, vacuum, compaction, or statistics refresh are considered when relevant.

6. **Review recovery and safety controls**
   - Check whether backup, restore, and retention expectations are named for the affected data.
   - Verify credential handling, least-privilege access, and query safety controls.
   - Reject changes that increase injection risk, hide destructive behavior, or assume untested restore paths.

7. **Produce the decision**
   - Return one of: approve, approve with conditions, needs evidence, or unsafe as proposed.
   - State the reason in engine-specific terms.
   - List required follow-ups: test data validation, EXPLAIN output, migration split, restore rehearsal, or storage-class confirmation.

## Review Focus by Domain

### Relational databases

Prioritize:
- primary and foreign key integrity
- nullability and default semantics
- uniqueness and duplicate prevention
- online vs blocking DDL risk
- index selectivity and maintenance cost
- query plan evidence for performance claims
- data backfill ordering and idempotency

### Document databases

Prioritize:
- document growth and update patterns
- required vs optional fields
- schema validation compatibility
- index support for actual query predicates and sort paths
- hot-document or hot-partition risk
- migration strategy for mixed old/new document shapes

### Stateful runtime and Kubernetes

Prioritize:
- persistent volume usage instead of ephemeral storage for durable data
- StatefulSet identity and storage behavior
- storage class defaults and expansion behavior
- resource requests and restart behavior
- backup hooks, snapshots, or external backup integration
- readiness/liveness probes that do not corrupt or thrash the database

## Examples

### Example 1: SQL migration review

```sql
-- proposed migration
ALTER TABLE orders ADD COLUMN customer_email TEXT NOT NULL;
```

Expected review outcome:
- **Status:** needs evidence / unsafe as proposed
- **Why:** existing rows will violate `NOT NULL` unless a valid backfill or default strategy exists
- **Safer direction:** add nullable column, backfill in controlled batches, validate data, then enforce `NOT NULL` in a later migration

### Example 2: Query optimization review

```sql
SELECT *
FROM events
WHERE account_id = 42
  AND created_at >= NOW() - INTERVAL '7 days'
ORDER BY created_at DESC
LIMIT 100;
```

Expected review outcome:
- ask for `EXPLAIN` or `EXPLAIN ANALYZE`
- verify whether an index supports both the filter and sort pattern
- avoid approving a rewrite based only on intuition or row-count guesses

### Example 3: Document-model change review

```json
{
  "change": "Make profile.phone required for all user documents",
  "current_state": "Field is missing in legacy documents",
  "deployment": "Validation rule enabled immediately"
}
```

Expected review outcome:
- **Status:** unsafe as proposed
- **Why:** legacy documents and partial-write paths may fail immediately
- **Safer direction:** audit missing-field population, backfill, update writers and readers, then tighten validation

### Example 4: Kubernetes storage review

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postgres
spec:
  template:
    spec:
      containers:
        - name: postgres
          image: postgres:latest
          volumeMounts:
            - name: data
              mountPath: /var/lib/postgresql/data
      volumes:
        - name: data
          emptyDir: {}
```

Expected review outcome:
- **Status:** unsafe as proposed
- **Why:** `emptyDir` is ephemeral and does not provide durable database storage
- **Safer direction:** require persistent storage and stateful deployment review before approval

For worked review samples, open:
- `examples/review-example.md`
- `examples/troubleshooting-examples.md`

## Best Practices

Do:
- require engine-specific evidence before approving performance claims
- separate logical correctness from deployment safety
- ask how existing data will satisfy new constraints or validation rules
- review rollback feasibility, not just forward migration syntax
- confirm persistence, backup, and restore expectations for operational changes
- preserve provenance if this skill was imported from an upstream workflow

Do not:
- approve destructive DDL without data-shape and rollback analysis
- assume a new index is free; check write cost and storage impact
- treat document databases as schema-free in production review
- accept ephemeral storage for persistent database workloads
- recommend credential embedding, unsafe dynamic SQL, or unbounded bulk updates without safeguards
- claim a restore strategy exists unless restore steps and dependencies are testable

## Troubleshooting

**Symptoms:** migration fails after adding a `NOT NULL` column or stricter constraint.

**Solution:** inspect existing rows first. Recommend a staged migration: add nullable structure, backfill safely, validate results, then enforce the constraint.

**Symptoms:** query is still slow after adding an index.

**Solution:** review the actual query plan. Check predicate order, sort requirements, row estimates, stale statistics, and whether the query shape matches the index.

**Symptoms:** deadlocks or blocked writes appear during deployment.

**Solution:** inspect migration ordering, lock scope, transaction size, and concurrent write paths. Split high-impact operations and avoid large blocking changes during peak load.

**Symptoms:** restore procedure completes, but the application still fails or data is incomplete.

**Solution:** verify dependent objects, credentials, extensions, point-in-time expectations, post-restore validation, and application version compatibility. A technically successful restore is not the same as a usable recovery.

**Symptoms:** database pod restarts and data disappears.

**Solution:** verify whether storage is ephemeral, whether the workload should be a StatefulSet, and whether persistent volume claims and storage classes are configured for durable state.

For condensed triage paths, open `references/troubleshooting-matrix.md`.

## Additional Resources

- `references/review-criteria.md` — open when you need a compact engine-aware checklist for schema, migration, performance, backup/restore, and Kubernetes storage review.
- `references/troubleshooting-matrix.md` — open when the task starts from symptoms such as slow queries, deadlocks, failed restores, migration drift, or storage misconfiguration.
- `examples/review-example.md` — open for a worked example of reviewing SQL, document-model, and storage-related changes.
- `examples/troubleshooting-examples.md` — open for symptom-to-decision examples that show what a strong operator response looks like.

## Output Template

Use this structure when reporting conclusions:

```text
Decision: approve | approve with conditions | needs evidence | unsafe as proposed
Engine/runtime: <name and version if known>
Change type: <schema | migration | query | operational | restore | pipeline>
Primary risks:
- ...
Evidence reviewed:
- ...
Required follow-ups:
- ...
Reasoning:
- ...
```

## Provenance Notes

If the skill was imported from an upstream repository:
- preserve origin markers and copied support files unless the user requests cleanup
- avoid rewriting provenance history during technical edits
- keep the review focused on the database workflow itself, not on hiding the import path
