# Sample Prioritization Matrix

| Candidate | Value | Seam | Data | Team | Observability | Coupling Risk | Rollback | Compliance | Score | Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Notifications | 4 | 5 | 5 | 4 | 4 | 2 | 2 | 1 | 31 | First extraction |
| Reporting | 3 | 3 | 3 | 3 | 3 | 3 | 2 | 2 | 16 | Later phase |
| Billing | 5 | 2 | 1 | 3 | 3 | 5 | 4 | 3 | 0 | Defer direct extraction |
| Customer Profile | 5 | 3 | 2 | 2 | 3 | 4 | 4 | 3 | 4 | Keep in monolith for now |

## Why Notifications Wins

Notifications is not the highest-value capability, but it is the best first move because it has:

- a clearer functional boundary
- lower data entanglement
- lower rollback complexity
- a team ready to own it
- a better chance of proving the migration path safely
