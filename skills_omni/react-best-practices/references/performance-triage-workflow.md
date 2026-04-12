# Performance Triage Workflow

Use this worksheet before making React or Next.js performance changes.

## 1. Define the symptom

Pick the primary problem:

- poor LCP
- poor CLS
- poor INP or interaction lag
- slow TTFB
- hydration mismatch or flicker
- oversized client bundle
- request waterfall
- rerender churn
- stale or ineffective caching

Write down the route, component, or user flow affected.

## 2. Capture a baseline

Record at least one concrete signal before editing:

- Lighthouse result
- route timing
- Web Vitals measurement
- bundle size comparison
- server log timing
- deployment observability signal

Do not claim improvement without a before/after comparison.

## 3. Classify the bottleneck

### A. Request waterfall

Common clues:

- nested awaits
- dependent work treated as sequential when it is actually independent
- slow page despite fast individual requests
- one large loading state for the entire route

Start with:

- hoist fetches earlier
- await later
- isolate slower regions behind Suspense

### B. Oversized client boundary

Common clues:

- route or layout marked `use client`
- large serialized props
- bundle growth after adding small interactive UI
- heavy hydration cost

Start with:

- remove `use client` from broad parents
- keep only interactive leaves client-side
- move data shaping to the server

### C. Caching or rendering mode issue

Common clues:

- repeated slow requests
- unexpected dynamic behavior
- stale data after optimization

Start with:

- define whether data is static, revalidated, request-specific, or user-specific
- inspect dynamic inputs and invalidation assumptions

### D. Hydration mismatch

Common clues:

- server/client mismatch warnings
- flicker after first paint
- render uses `window`, `localStorage`, `Date.now()`, or random values

Start with:

- make render deterministic
- move browser-only logic into effects or client-only leaves

### E. Rerender churn

Common clues:

- parent changes trigger wide subtree updates
- many effects cause follow-up renders
- `memo` added without impact

Start with:

- remove unnecessary effects
- localize state
- stabilize only proven expensive subtrees

## 4. Choose the narrowest safe change

Preferred order:

1. architectural boundary fix
2. data flow or waterfall fix
3. caching/revalidation fix
4. targeted bundle split
5. targeted rerender optimization
6. low-level JavaScript micro-optimization

## 5. Verify after the change

Check both:

- correctness: rendering, data freshness, auth, no hydration breakage
- performance: target metric or symptom improved

## 6. Hand off cleanly

Record:

- baseline
- likely cause
- change made
- evidence
- remaining risk
- what to monitor after deploy
