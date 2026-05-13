# Database Review Criteria

Use this checklist when you need deeper review detail than the main skill should carry.

## 1. Relational schema review

Approve only when the reviewer can answer:
- What enforces uniqueness and referential integrity?
- Do new `NOT NULL`, `CHECK`, `UNIQUE`, or foreign-key rules match existing data?
- Will column type or default changes rewrite large tables or break old application code?
- Is the migration backward compatible during rolling deployment?
- Is a new index aligned with real filter and sort patterns rather than assumed benefit?

Escalate when you see:
- destructive rename/drop behavior without compatibility strategy
- table-wide updates with no batching or lock discussion
- foreign keys added to dirty historical data without validation plan
- performance claims with no plan output or query evidence

## 2. Document-model review

Approve only when the reviewer can answer:
- Which fields are required, optional, deprecated, or mixed-shape during rollout?
- Do validation rules allow a safe transition for legacy documents?
- Which queries need indexes, and do those indexes match actual predicates and sort paths?
- Could document growth, nested arrays, or repeated updates create write amplification or hot documents?

Escalate when you see:
- immediate validation tightening against legacy data
- index proposals with no query-path evidence
- document rewrites that assume a full backfill is cheap or safe

## 3. Migration safety review

Require explicit answers for:
- forward order of operations
- rollback reality after data mutation
- lock risk and expected execution time
- backfill strategy and idempotency
- interaction with application versions running before, during, and after deployment

Typical safer pattern:
1. add compatible schema
2. deploy writers/readers that tolerate both shapes
3. backfill gradually
4. validate
5. enforce stricter constraint
6. remove deprecated path later

## 4. Performance evidence review

Prefer evidence over instinct.

Ask for:
- execution plan output for important queries
- expected row counts and selectivity assumptions
- existing and proposed indexes
- sort, join, and aggregation hotspots
- statistics freshness and maintenance notes where relevant

Do not approve broad statements such as "this index will make it faster" without query-shape evidence.

## 5. Backup and restore readiness

Check:
- what data set must be recoverable
- backup frequency and retention expectation
- restore target: full, partial, point-in-time, or environment rebuild
- post-restore validation steps
- dependency recovery: roles, extensions, secrets, application compatibility

Red flag: backup is discussed but restore has never been described or tested.

## 6. Kubernetes and container runtime review

Check:
- durable storage instead of ephemeral `emptyDir` for persistent databases
- correct workload identity model for stateful software
- PVC and StorageClass behavior, including capacity and expansion assumptions
- restart semantics and readiness behavior
- backup integration outside of pod lifetime assumptions

Red flag: database persistence depends on a pod-local filesystem or an unnamed default storage assumption.

## 7. Query safety and access review

Check:
- parameterized queries or equivalent safe query construction
- least-privilege database roles
- bounded bulk updates and deletes
- explicit safeguards for ad hoc maintenance statements

Red flag: dynamic SQL assembled from untrusted input or production maintenance steps with no scope guard.

## Decision guide

- **Approve**: evidence is sufficient and risk is controlled.
- **Approve with conditions**: concept is acceptable but requires named follow-ups before deployment.
- **Needs evidence**: the change may be valid, but performance, data-shape, or operational proof is missing.
- **Unsafe as proposed**: correctness, durability, or recoverability risks are unresolved.
