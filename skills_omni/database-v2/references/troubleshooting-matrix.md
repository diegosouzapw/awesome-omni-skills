# Database Troubleshooting Matrix

Use this when the request begins with symptoms instead of a clean design diff.

| Symptom | Likely review focus | Ask for | Common safe direction |
| --- | --- | --- | --- |
| Query became slow after release | execution plan, index fit, row estimates, changed predicates | query text, plan output, affected indexes, row counts | validate plan, confirm index-query alignment, refresh stats or redesign query/index pair |
| Writes block or deadlocks appear during migration | lock scope, transaction size, migration ordering, concurrent writers | migration SQL, transaction boundaries, application write patterns, timing | split migration, reduce lock duration, reorder changes, avoid peak-time blocking operations |
| New constraint fails in production | historical data quality, staged enforcement, writer compatibility | failing rows, migration definition, old/new app behavior | add compatibility phase, backfill, validate, then enforce |
| Restore completed but service is broken | restore completeness, credentials, extensions, app compatibility, validation gap | restore logs, object inventory, app errors, target recovery definition | validate dependencies, rerun post-restore checks, ensure restored state matches app/runtime expectations |
| Data disappears after pod restart | ephemeral storage, workload identity, PVC wiring, storage class assumptions | manifests, mounted volumes, PVC status, workload kind | require persistent volumes and stateful deployment review |
| Migration works locally but fails in CI/prod | version drift, permissions, data volume, engine settings, migration ordering | engine version, migration history, target data shape, permissions | compare environments, verify drift, add preflight checks, split risky operations |
| Index created but CPU or write cost spikes | write amplification, unnecessary indexes, poor selectivity | workload pattern, before/after metrics, index definition | remove or redesign index, validate benefit against write cost |
| Document validation starts rejecting writes | mixed document shapes, rollout sequencing, partial updates | validation rules, sample legacy docs, write paths | loosen transition, backfill, update writers, re-enable strict validation later |

## Triage order

1. Confirm engine and runtime.
2. Ask what changed immediately before the symptom.
3. Ask for one concrete artifact: SQL, plan, manifest, migration, validation rule, or restore log.
4. Separate data-correctness risk from performance or availability symptoms.
5. Recommend the smallest safe next action that increases evidence.

## Evidence expectations by symptom

### Slow query
- query text
- execution plan
- affected indexes
- cardinality assumptions

### Deadlock or blocking
- transaction boundaries
- lock-holding statements
- concurrent workload pattern
- deployment timing

### Failed restore
- source backup type
- target environment
- object/role/extension expectations
- post-restore validation result

### Storage durability issue
- workload kind
- volume definition
- PVC binding status
- storage class behavior

## Unsafe shortcuts to reject
- "just add an index" with no plan evidence
- "just disable the constraint" with no data-correctness plan
- "restore succeeded" with no application validation
- "pod restarted fine in dev" as proof of durable storage
