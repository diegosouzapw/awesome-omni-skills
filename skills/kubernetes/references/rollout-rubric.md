# Kubernetes Rollout Rubric

| Check | Pass condition | Notes |
| :---- | :------------- | :---- |
| Probe realism | Startup, readiness, and liveness match the real app lifecycle | |
| Traffic wiring | Labels, selectors, ports, and namespaces align end to end | |
| Resource safety | Requests, limits, and disruption settings are explicit | |
| Rollback readiness | Operator knows when to pause, undo, or revert | |
| Validation path | `kubectl` checks for health are listed before apply | |
