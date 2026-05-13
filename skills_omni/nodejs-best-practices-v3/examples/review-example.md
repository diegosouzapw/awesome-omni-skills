# Worked Review Example

## Scenario

Repository: internal image-processing API

- Node 22 in production, Node 20 in some CI jobs
- Express server accepts uploads and returns transformed images
- Uses `sharp`, outbound object storage calls, and a Redis-backed queue that is only partially used
- Logs are plain text with no request correlation

## Review Goal

Determine whether the current design is production-ready for moderate traffic growth.

## Findings

### Strengths

- Current production runtime is on a modern supported Node line
- Lockfile is present
- Upload size limits exist at the HTTP layer
- Some image processing has already been separated into queued jobs

### Critical Risks

1. **CPU-heavy image transforms still run inline on synchronous request paths**
   - Impact: event-loop contention and latency spikes under burst traffic
   - Why it matters in Node: request concurrency degrades when CPU-bound work blocks the single-threaded event loop
   - Recommendation: move all non-trivial transforms to background workers or another execution boundary

2. **Outbound storage calls have no explicit timeout policy**
   - Impact: hanging requests and resource exhaustion during downstream degradation
   - Recommendation: add explicit timeout and failure handling for all outbound calls

3. **Runtime drift between CI jobs and production**
   - Impact: subtle behavior mismatch and avoidable deployment surprises
   - Recommendation: align CI and production on the same Node major line

### Important Improvements

1. **Structured logging and request correlation are missing**
   - Recommendation: adopt structured logs and preserve request context across async boundaries

2. **Queue design is incomplete**
   - Recommendation: define which workloads are synchronous versus queued, then enforce that split consistently

3. **Validation is route-local and inconsistent**
   - Recommendation: centralize edge validation using explicit schemas

### Optional Refinements

- Reassess whether the current framework stack is still justified once upload and transform boundaries are simplified
- Review whether built-in test capabilities can reduce tooling sprawl for lower-level modules

## Final Recommendation

**Decision: Conditionally acceptable, but not ready for traffic growth without changes.**

The strongest recommendation is not a framework rewrite. The strongest recommendation is to remove CPU-heavy transforms from the request path, add explicit timeout control, and align runtime/version discipline. Those three changes lower outage risk more than stylistic refactoring would.

## Example Output Shape

```text
Decision: Conditionally acceptable
Priority 1:
- Remove CPU-heavy inline transforms from HTTP path
- Add outbound timeout policy
- Align CI and production runtime versions

Priority 2:
- Add structured logs with correlation
- Centralize request validation

Priority 3:
- Reassess framework weight after operational risks are reduced
```
