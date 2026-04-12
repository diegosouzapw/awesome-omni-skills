# Troubleshooting Hydration and Rendering

## Problem: Hydration mismatch

### Common causes

- `Date.now()` or `new Date()` used during render
- `Math.random()` used during render
- locale or timezone formatting differs between server and client
- `window`, `document`, or `localStorage` accessed during render
- conditional render paths differ between server and client
- browser-only measurements used to produce initial markup

### Safe fixes

- pass a stable value from the server instead of generating one during render
- move browser-only reads into `useEffect` or a smaller client-only component
- render a deterministic placeholder until client state is available
- isolate truly intentional divergence narrowly

### Avoid

- papering over broad mismatch issues with `suppressHydrationWarning`

## Problem: First paint flickers

### Common causes

- initial server markup is immediately replaced by client-only state
- theme, locale, viewport, or storage-derived values are resolved too late
- an entire route is client-rendered unnecessarily

### Safe fixes

- reduce client-only rendering scope
- make the server markup match the first client render where possible
- use a stable initial fallback rather than rendering incompatible output

## Problem: Unexpected dynamic rendering

### Common causes

- request-specific inputs force dynamic behavior
- headers, cookies, or auth state are used higher in the tree than expected
- caching assumptions do not match route behavior

### Safe fixes

- move request-bound logic to the narrowest necessary scope
- revisit whether the route should be static, revalidated, or dynamic
- avoid treating personalized data as shared cacheable content

## Problem: Streaming does not help perceived speed

### Common causes

- one blocking dependency still gates the whole route
- Suspense boundary is too high or too low in the tree
- all useful UI waits behind one slow operation

### Safe fixes

- start independent work earlier
- split slow regions behind meaningful boundaries
- verify that fallback UI is actually useful to users
