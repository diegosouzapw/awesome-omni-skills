# CLS runbook

Use this runbook when Cumulative Layout Shift is the primary failing metric.

## First question: is the shift load-time or post-load?

If Lighthouse looks fine but field data is poor, suspect post-load CLS.

## Common root-cause buckets

| Symptom | Likely cause | What to inspect |
| --- | --- | --- |
| Images shift content on load | missing dimensions | `width`, `height`, `aspect-ratio` |
| Ad or embed pushes content | no reserved slot | placeholder size, min-height, responsive container |
| Banner appears at top | injected content above viewport | consent UI, promo bars, announcements |
| Text moves when fonts load | metric mismatch | fallback font metrics, `size-adjust`, overrides |
| SPA route or hydration shifts layout | post-load rendering | route transitions, skeleton mismatch, deferred content |

## Fix patterns

### A. Media without reserved space

Prefer:

- explicit `width` and `height`
- CSS `aspect-ratio`
- stable containers that reserve expected dimensions

### B. Ads and embeds

Prefer:

- fixed or bounded slots
- placeholders with stable dimensions
- avoiding collapse/expand patterns that move existing content

### C. Top-of-page injections

Prefer:

- reserving banner space ahead of time
- placing non-critical notices below existing content where appropriate
- showing overlays without shifting layout when suitable

### D. Font-related shifts

Prefer:

- metric-compatible fallbacks
- `size-adjust`, `ascent-override`, `descent-override`, `line-gap-override` where justified
- testing real text blocks, not just synthetic samples

### E. Animation-induced shifts

Prefer:

- `transform` and `opacity`
- avoiding transitions on layout-triggering properties where movement is unexpected

## Evidence checklist

Capture:

- layout shift records from DevTools
- affected elements and their previous/current positions
- screenshots or recordings of the shift
- whether the shift occurred without recent user input
- route or component state involved

## Safe validation

After changes, verify:

- lower or eliminated layout-shift entries
- no hidden overlap or clipping from reserved-space fixes
- no new responsive bugs on smaller screens
