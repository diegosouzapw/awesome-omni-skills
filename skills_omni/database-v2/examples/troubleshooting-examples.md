# Troubleshooting Response Examples

## Example 1: Slow query after release

**Prompt:** "This query became slow after deployment. We added an index already."

**Strong response pattern:**
- ask for the exact query and execution plan
- verify whether the filter and sort shape match the index
- ask whether row counts or data distribution changed
- avoid proposing more indexes before plan evidence exists

**Weak response pattern:**
- "Add another composite index" with no plan review

## Example 2: Migration deadlocks in production

**Prompt:** "The migration passed in staging but deadlocked in production during writes."

**Strong response pattern:**
- ask for the migration statements and transaction boundaries
- ask what concurrent write path was active
- check whether the migration should be split into smaller steps
- recommend reducing lock duration and avoiding peak-time execution

**Weak response pattern:**
- "Retry until it works"

## Example 3: Restore succeeded but service is broken

**Prompt:** "Restore completed successfully, but the app still errors on startup."

**Strong response pattern:**
- ask what 'successful' means: file import, point-in-time recovery, or full application validation
- check roles, extensions, secrets, schema version, and application compatibility
- require post-restore validation steps, not just tool exit status

**Weak response pattern:**
- "If the restore command exited 0, the database is fine"

## Example 4: Data disappears after restart

**Prompt:** "The database pod restarted and the data vanished."

**Strong response pattern:**
- inspect volume type and PVC binding
- verify whether the workload is using durable storage
- check for `emptyDir` or other ephemeral mounts
- require stateful runtime review before further approval

**Weak response pattern:**
- "Increase the restart limit"

## Example 5: New validation rule breaks document writes

**Prompt:** "After enabling schema validation, some writes fail for older users."

**Strong response pattern:**
- ask for legacy document examples and the validation rule
- identify mixed document shapes and partial-update behavior
- recommend transition-safe rollout with backfill before strict enforcement

**Weak response pattern:**
- "Disable validation permanently"
