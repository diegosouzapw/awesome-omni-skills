# Development Domain Notes

Use this note when the main workflow reaches a specific delivery or debugging decision.

## 1. Pull Request and Review Readiness

| Question | Preferred answer | Why |
| --- | --- | --- |
| Is the change bundled with unrelated cleanup? | No | Smaller diffs are easier to review and safer to roll back. |
| Can the reviewer see what behavior changed? | Yes, through tests, screenshots, sample requests, or logs | Review quality drops when behavior is only implied. |
| Are risky changes called out explicitly? | Yes | Reviewers need to focus on contract, migration, auth, and rollout risk. |
| Is there an unverified area? | State it directly | Hidden gaps cause false merge confidence. |

Minimum PR-ready notes:
- purpose of the change
- affected components
- validation performed
- config or migration impact
- known risks or follow-up work

## 2. API Contract Sequencing

Use this sequence when frontend, backend, or mobile consumers share an API.

| Situation | Safer sequence |
| --- | --- |
| Additive field or endpoint | Ship backend support first, then adopt in clients |
| Renaming or removing a field | Support old and new forms temporarily, migrate clients, then remove old behavior later |
| Validation becomes stricter | Confirm existing clients still pass before enforcing |
| Auth behavior changes | Update contract docs and test both authorized and unauthorized paths |

Check end-to-end:
- request field names and types
- nullable vs required fields
- error payload shape
- pagination/filter defaults
- auth headers and credentials behavior
- generated client freshness if code generation exists

## 3. Compose and Local Runtime Parity

When a change works outside containers but fails in Compose, compare these areas:

| Area | What to inspect |
| --- | --- |
| Environment | Missing or differently named variables, secret mounting, default values |
| Network | Service hostnames, ports, dependency names, DNS assumptions |
| Volumes | Local mounts shadowing built files, permissions, stale caches |
| Startup order | App starts before database, queue, or mock dependency is ready |
| Entrypoint | Wrong working directory, shell form issues, missing executable |

Quick parity checks:
- Does the same command run locally and in the container?
- Is the container using the code you think it is using?
- Are required dependencies healthy before the app starts?
- Did a bind mount overwrite build artifacts or installed modules?

## 4. CORS Diagnosis Checklist

Browser-only failures often mean CORS or credential handling issues.

Check:
1. exact frontend origin
2. backend `Access-Control-Allow-Origin` behavior
3. credential usage and `Access-Control-Allow-Credentials`
4. allowed methods and headers
5. whether a preflight `OPTIONS` request is failing
6. whether redirects or auth middleware intercept the preflight path

Common mistake patterns:
- wildcard origin with credentials
- preflight route not handled
- custom auth header not allowed
- frontend calling a different origin than expected
- reverse proxy stripping CORS headers

## 5. Kubernetes Probe Triage

If a pod starts but traffic still fails, inspect readiness and liveness behavior.

| Symptom | Likely checks |
| --- | --- |
| Pod restarts repeatedly | Liveness probe too strict, crash during startup, wrong port or path |
| Pod is running but receives no traffic | Readiness probe failing, app not listening yet, dependency not ready |
| Works locally but not in cluster | Environment differences, service DNS, secret/config values, resource constraints |

Probe triage order:
1. pod events
2. container logs
3. actual listening port/path
4. startup duration versus probe timing
5. dependency reachability

## 6. Validation Strategy by Change Type

| Change type | Minimum validation |
| --- | --- |
| UI-only bug fix | relevant UI test or manual reproduction before/after |
| Backend-only logic fix | targeted unit/integration test and representative request |
| Shared API change | backend tests plus one real client path |
| Container/runtime fix | build + startup + health verification |
| Deployment fix | manifest/config review plus environment-specific verification evidence |

Do not report validation as complete if one layer remains untested and could still invalidate the change.
