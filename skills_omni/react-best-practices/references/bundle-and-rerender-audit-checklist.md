# Bundle and Rerender Audit Checklist

Use this checklist before adding memoization or dynamic imports.

## A. Client bundle audit

- Is `use client` placed on a broad page, layout, or wrapper?
- Can data fetching move to a Server Component?
- Can only the interactive leaf stay client-side?
- Are heavy third-party libraries loaded on first render?
- Is optional UI in the critical path unnecessarily?
- Are barrel imports or broad imports pulling in more code than needed?
- Are large props serialized from server to client unnecessarily?

## B. Rerender audit

- Is state lifted higher than necessary?
- Are effects causing follow-up renders that should be derived during render or handled in events?
- Are props unstable because new objects/functions are created every render?
- Is the expensive subtree actually expensive, or is memoization solving the wrong problem?
- Would a transition improve responsiveness for non-urgent updates?
- Are subscriptions broader than the UI really needs?

## C. Memoization decision

Use `memo` or `useMemo` only if all are true:

- the computation or subtree is meaningfully expensive
- it rerenders often enough to matter
- the inputs can be kept stable
- measurement or clear reasoning supports the tradeoff

## D. Dynamic import decision

Use dynamic import only if all are true:

- the code is not required for the first meaningful paint
- the component can tolerate deferred loading
- the loading state is acceptable
- the main issue is code delivery, not an architectural server/client mistake
