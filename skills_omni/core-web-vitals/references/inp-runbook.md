# INP runbook

Use this runbook when Interaction to Next Paint is the primary failing metric.

## What INP includes

INP reflects the latency from user input to the next painted response. It can be worsened by:

- input delay before handlers run
- long processing in handlers
- expensive rendering after logic completes

## Common root-cause buckets

| Symptom | Likely cause | Evidence to collect |
| --- | --- | --- |
| Click feels ignored at first | main-thread blocking | long tasks before handler start |
| Click starts work but finishes late | handler duration | heavy synchronous code in event callbacks |
| State updates are fast but paint is slow | rendering cost | layout, style recalc, rendering after state change |
| Only low-end devices are bad | CPU pressure | throttled trace, device segmentation |
| Regression after adding vendors | third-party cost | script attribution, task timing around interactions |

## Fix patterns

### A. Main thread is blocked

Prefer:

- splitting long tasks
- yielding between chunks of work
- moving CPU-intensive work off the main thread when feasible

Use `scheduler.yield()` where supported, or chunk work with safe fallbacks.

### B. Event handler does too much

Prefer:

- immediate visual feedback first
- moving analytics or logging out of the critical path
- reducing synchronous parsing, filtering, or serialization in the handler

### C. Rendering after input is expensive

Prefer:

- reducing DOM work
- avoiding full-tree rerenders
- memoization where justified
- smaller state updates and less layout thrash

### D. Third-party scripts interfere

Prefer:

- delaying non-critical tags
- loading widgets on demand
- reviewing whether a tag must run during the interaction path

## requestIdleCallback guidance

`requestIdleCallback` can be useful for non-urgent work, but it is not the primary responsiveness fix. Default first to reducing critical-path work and chunking tasks.

## Evidence checklist

Capture:

- trace around the slow interaction
- long tasks overlapping the interaction
- third-party script activity
- whether hydration or route transition is involved
- device assumptions used for reproduction

## Safe validation

After changes, verify:

- lower interaction latency in trace
- no broken interaction behavior
- no delayed side effects users actually depend on
- no hidden accessibility regressions in interactive flows
