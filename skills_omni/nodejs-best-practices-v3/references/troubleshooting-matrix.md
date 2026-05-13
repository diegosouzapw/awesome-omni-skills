# Node.js Troubleshooting Matrix

Use this matrix when the entry point is a symptom rather than a design question.

| Symptom | Likely Causes | What to Review | Recommended Action |
|---|---|---|---|
| Latency spikes with high CPU | Event-loop blocking work, large JSON transforms, compression/crypto inline, regex backtracking | Hot request handlers, sync APIs, heavy transforms, profiling evidence | Move CPU-heavy work off the request path; replace sync calls; bound expensive operations |
| Requests hang or fail unpredictably | Missing timeouts, connection pool exhaustion, unresolved promises, retry storms | Outbound HTTP/database calls, retry wrappers, promise lifecycles | Add explicit timeouts; bound retries; inspect pool settings; fail fast on stuck work |
| Good throughput at first, then gradual memory growth | Retained listeners, caches without eviction, unclosed streams, long-lived closures | Cache policy, event emitter usage, stream lifecycle, request-scoped state | Add bounds/eviction; remove stale listeners; close streams; reduce retained object graphs |
| CI passes but production breaks after deploy | Runtime drift, non-reproducible installs, environment assumptions, native addon mismatch | Node versions, lockfile usage, CI install command, image build path | Align runtime major versions; use reproducible installs; validate config at startup |
| Logs exist but incidents are hard to trace | Unstructured logs, missing correlation IDs, lost async context | Logging format, request/job context propagation, AsyncLocalStorage usage | Standardize structured logs and preserve correlation context across async work |
| Worker or queue consumers duplicate work | Non-idempotent retry behavior, ack timing issues, shutdown races | Retry policy, message ack/commit sequence, shutdown hooks | Make processing idempotent where possible; review ack order; drain gracefully on shutdown |
| Large uploads or downloads destabilize the service | Buffering entire payloads, no backpressure, memory-heavy transforms | Stream handling, body parsing, buffering code paths | Prefer streaming paths; enforce limits; respect backpressure |
| Security review finds broad package trust or hidden risk | Excessive dependencies, weak audit handling, unclear publisher trust | Dependency graph, lockfile discipline, update policy, package necessity | Remove unnecessary packages; review trust/provenance; upgrade selectively and intentionally |

## Fast Review Prompts

When using this matrix, ask:

- Is this failure more likely CPU-bound, I/O-bound, or lifecycle-related?
- Does the current design rely on implicit defaults rather than explicit control?
- Can the issue be reduced by removing complexity instead of adding another library?
- What is the smallest change that lowers risk without forcing a rewrite?
