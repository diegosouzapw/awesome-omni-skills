# Performance Review Runbook

Use these scenarios as templates for a real review. Copy the structure, not the exact findings.

---

## Scenario 1: App Router product detail route has poor LCP

### Input context

- Framework: Next.js with `app/`
- Reported symptom: product route feels slow on first load
- Target route: `app/products/[id]/page.tsx`
- Production note: marketing added a reviews widget and tracking script recently

### Review steps

1. Confirm the route is App Router and identify whether the route shell is server-rendered.
2. Run:
   ```bash
   bash scripts/inspect-nextjs-performance.sh .
   ```
3. Review whether `app/products/[id]/page.tsx` or `app/layout.tsx` contains `use client`.
4. Check for heavy imports near the route root or shared layout.
5. Check whether the hero image uses `next/image` with stable sizing.
6. Check whether reviews or recommendation widgets are loaded eagerly.
7. Check third-party scripts for aggressive loading strategy.
8. Define a measurable success criterion before changing code.

### Expected observations

- The route shell should usually remain server-rendered.
- A reviews widget may be a better fit for a smaller client island or lazy-loaded module.
- A plain `<img>` hero asset or incorrect image sizing is a likely LCP contributor.
- A third-party script in shared layout can affect unrelated routes.

### Resulting recommendations

- Keep the route shell server-first.
- Move the reviews widget into a smaller client boundary.
- Replace the hero image implementation with `next/image` if appropriate and ensure stable sizing.
- Delay non-critical third-party scripts.
- Validate with route-focused metrics after deploy or in preview where available.

### Example handoff note

- Route reviewed: `/products/[id]`
- Main changes: narrowed client boundary, delayed reviews widget, corrected image handling
- Expected improvement: better LCP on product detail route and lower initial client JS
- Verify after deploy: route-level vitals trend and no hydration warnings
- Rollback note: if reviews fail to render correctly, revert widget isolation before changing route rendering mode

---

## Scenario 2: Dashboard data is stale after deploy

### Input context

- Framework: Next.js with `app/`
- Reported symptom: dashboard still shows old account numbers after backend updates
- Target route: `app/dashboard/page.tsx`
- Current team assumption: deploy should have refreshed everything automatically

### Review steps

1. Write down the real freshness requirement.
   - Example: "dashboard data should update within 60 seconds" or "must be current on every request."
2. Identify whether the route is intended to be static, revalidated, or dynamic.
3. Review fetch behavior and route-level rendering assumptions.
4. Confirm how invalidation is expected to happen operationally.
5. Avoid changing the whole route to dynamic until the required freshness is explicit.
6. Define post-change verification steps for preview and production.

### Expected observations

- The route may have a cache model that does not match the freshness requirement.
- The team may be treating deploys as a cache invalidation strategy when runtime freshness needs a different control.
- Only part of the route may need fresher behavior.

### Resulting recommendations

- Align the data-loading path with the required freshness window.
- Keep as much of the route cached as possible if only one section needs fresher data.
- Document how operators should confirm freshness after deploy.
- Add a rollback note in case the route becomes unnecessarily dynamic and server cost spikes.

### Example handoff note

- Route reviewed: `/dashboard`
- Main issue: cache expectation and runtime freshness requirement did not match
- Main change: adjusted data-loading strategy to match documented freshness target
- Verify after deploy: backend change appears within expected window and route latency remains acceptable
- Rollback note: if server cost or latency regresses, narrow the dynamic portion instead of reverting to stale global caching

---

## Scenario 3: Re-render complaints lead to pressure for blanket memoization

### Input context

- Framework: React or Next.js
- Reported symptom: typing in a filter box feels laggy
- Team proposal: wrap all child components in `memo`

### Review steps

1. Identify the state that changes during typing.
2. Find the smallest subtree that actually depends on that state.
3. Check whether broad context or parent state is forcing large child trees to update.
4. Review whether expensive child components receive unstable props.
5. Only then test whether memoization is justified.

### Expected observations

- State is often lifted too high.
- Large child trees may not need to re-render on each keystroke.
- Blanket memoization usually increases complexity without fixing the main architecture issue.

### Resulting recommendations

- Move filter state closer to the input and results list.
- Split unrelated panels away from the frequently updated subtree.
- Add memoization only to measured hotspots with stable props.

### Example handoff note

- Component reviewed: product filter panel
- Main issue: state scope was too broad
- Main change: narrowed state ownership and isolated unrelated children
- Verify after deploy: typing responsiveness improves and no stale UI appears
