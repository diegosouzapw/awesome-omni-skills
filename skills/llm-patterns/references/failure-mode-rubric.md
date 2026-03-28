# Failure Mode Rubric

| Failure mode | Expected behavior | Operator signal |
| :----------- | :---------------- | :-------------- |
| Tool timeout | Retry or fallback only if idempotent | Timeout event is logged |
| Schema validation failure | Reject and request regeneration | Validation artifact exists |
| Interrupted task | Resume or fail with explicit state | Task state is queryable |
| Sensitive write requested | Stop for confirmation | Approval state is visible |
