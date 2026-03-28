## Release Readiness Matrix

| Stage | Evidence | Blocker if missing |
| :---- | :------- | :----------------- |
| Manifest review | Labels, selectors, ports, probes reviewed | Yes |
| Staging rollout | Pods become Ready and Service has endpoints | Yes |
| Traffic validation | Internal and external routes succeed | Yes |
| Rollback drill | Team knows `rollout undo` or revert path | No |
