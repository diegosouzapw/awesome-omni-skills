# Worked Database Review Example

## Scenario

A team proposes this change for PostgreSQL:
- add `status` column to a 120 million row `orders` table
- backfill from historical application events
- enforce `NOT NULL`
- deploy in a single release window

The team says: "It is just one extra column and should be safe."

## Weak Review

```text
Looks fine. Add the column, backfill it, and apply NOT NULL after testing.
```

Why this is weak:
- no lock or rewrite analysis
- no rollout sequencing
- no verification plan
- no rollback thinking
- no estimate of backfill operational cost

## Strong Review

```text
Scope:
PostgreSQL schema migration on a hot table with 120M rows. The proposal combines additive schema change, historical backfill, and constraint enforcement.

Risk assessment:
Medium to high.

Findings:
1. The additive column itself may be low risk, but the combined plan is not.
2. Historical backfill is the main operational hazard due to write amplification, lock contention, and possible replica lag.
3. Enforcing NOT NULL in the same release removes a safe checkpoint unless null-free state is validated first.
4. No rollback or stop condition is documented.

Recommended rollout:
1. Add `status` as nullable.
2. Update application writes so new rows populate `status`.
3. Backfill historical rows in bounded batches with observability on throughput, lock waits, and replica lag.
4. Validate that remaining NULL count is zero.
5. Enforce `NOT NULL` in a separate migration.

Verification:
- lock waits remain below the agreed threshold
- replica lag stays within operational limits
- batch backfill can be paused safely
- post-backfill query confirms zero NULL rows before constraint enforcement

Residual risks:
- backfill duration may exceed release window
- application code paths reading the new column were not reviewed
- exact rollback path for partially completed backfill not provided
```

## Expected Operator Behavior

A good database review should:
- separate the additive change from the hazardous parts
- identify the true risk driver
- recommend staged execution
- require measurable verification
- state missing evidence clearly

## Reusable Pattern

For future reviews, use this template:

```text
Scope:

Risk level:

Findings:
1.
2.
3.

Recommended next action:
1.
2.
3.

Verification:
- 
- 

Residual risks / missing evidence:
- 
- 
```
