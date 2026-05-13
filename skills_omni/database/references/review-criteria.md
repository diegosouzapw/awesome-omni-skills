# Database Review Criteria

Use this reference during live review work. It is intentionally compact and decision-oriented.

## 1. Migration Risk Classification

Classify each migration before suggesting deployment:

### Low risk
- additive nullable column
- new table or collection with no active dependency
- non-blocking metadata change on the target engine
- index creation already known to be online or otherwise operationally safe in context

### Medium risk
- backfill required but can be chunked safely
- new constraint added after data cleanup
- index build with meaningful write amplification or storage cost
- changes that require application and schema rollout ordering

### High risk
- table rewrite or long lock potential
- dropping or renaming columns used by live code
- changing data type on large hot tables
- uniqueness enforcement on data that may already violate assumptions
- large historical backfills without rate limiting or observability

### Review questions
- Is the change backward compatible across old and new application versions?
- Can it be staged with expand-and-contract?
- What is the rollback path if deployment fails halfway?
- What evidence exists for expected execution time and lock profile?
- Will replicas, CDC, or downstream analytics be affected?

## 2. Performance Triage Checklist

Use this before proposing tuning changes.

### Gather first
- exact query text
- relevant parameters or representative literals
- schema for involved tables or collections
- current indexes
- estimated table size and cardinality
- planner output or equivalent runtime evidence

### Review criteria
- Does filtering align with the leading index columns?
- Does ordering require an additional sort that an index could avoid?
- Is the query scanning far more rows than it returns?
- Are statistics likely stale?
- Is projection wider than necessary?
- Is a join exploding row counts?
- Is the issue query shape, schema design, or workload saturation?

### Safe review posture
- Prefer read-only diagnostics first.
- Do not promise performance gains without before/after measurements.
- Separate hypothesis from evidence.

## 3. Backup and Restore Readiness

A backup strategy is only credible if restoration is proven.

### Minimum review criteria
- backup type is known
- retention window matches business requirements
- restore owner is named
- restore procedure exists
- last restore rehearsal date is known
- measured restore time is compared against RTO
- point-in-time recovery requirement is explicit where relevant

### Findings language
- "Backups exist, but restore readiness is unproven."
- "Recovery objective is documented, but no recent restore rehearsal was supplied."
- "Restore duration exceeds stated RTO; operational gap remains."

## 4. MongoDB / NoSQL Design Review

Review schema and indexes against access patterns, not generic normalization goals.

### Positive signals
- document shape matches main read and write flows
- indexes map to actual predicates and sorts
- bounded arrays or controlled document growth
- denormalization is intentional and justified by workload

### Anti-pattern warnings
- unbounded arrays causing document bloat
- many indexes with unclear query benefit
- indexes that do not match predicate order or sort usage
- hot documents updated excessively
- embedding data that changes independently at high frequency

### Review questions
- What are the top read paths?
- What are the top write paths?
- Are queries covered by existing indexes?
- Does document growth threaten size or update efficiency?
- Are consistency expectations realistic for the chosen model?

## 5. Data Pipeline and dbt Quality Gates

Treat analytics reliability as a first-class database concern.

### Minimum gates
- source freshness thresholds are defined for key inputs
- uniqueness, non-null, and relationship tests exist where expected
- incremental model assumptions are explicit
- late-arriving and duplicate data behavior is known
- critical business metrics have reconciliation checks

### Review questions
- What happens when upstream data is delayed?
- Which tests fail fast versus only detect drift later?
- Are business invariants tested, or only structural properties?
- Is lineage clear enough to assess blast radius?

## 6. Output Pattern for Database Reviews

Use this structure when responding:
1. Scope and system context
2. Findings
3. Risk level
4. Recommended next action
5. Verification steps
6. Residual risks or missing evidence

If evidence is missing, explicitly say what is needed instead of filling gaps with assumptions.
