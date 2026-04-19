# React Component Performance Domain Notes

Use this file as a quick decision aid after you have reproduced the slowdown and captured a React DevTools Profiler trace.

## Symptom-to-Fix Matrix

| Symptom | Likely cause | How to measure | Candidate fix to test next | Caveats | Sources |
| --- | --- | --- | --- | --- | --- |
| A child re-renders whenever the parent updates | Parent state is too high or child props are always new | React Profiler: inspect why the child rendered; compare prop identity for objects/functions | Move state closer to where it is used; simplify props; only then test `memo` plus stable props | `memo` is ineffective if any significant prop changes every render | React DevTools, `memo`, `useCallback`, `useMemo` |
| `memo` provides little or no improvement | Child is cheap, props are unstable, or parent updates still force work | Re-profile before/after; inspect whether props are actually equal between renders | Remove unnecessary memoization or stabilize only the props that matter | Memoization adds comparison overhead and code complexity | `memo`, `useCallback`, `useMemo` |
| One interaction produces multiple commits | Effect derives state from props or causes a follow-up update | React Profiler commit sequence; inspect Effects in the affected subtree | Remove unnecessary Effect; compute derived value during render if cheap | Effects should synchronize with external systems, not mirror ordinary data flow | You Might Not Need an Effect, Synchronizing with Effects |
| Render time is high for a single component | Expensive calculation or transformation in render | Ranked chart or self time in Profiler | Use `useMemo` for expensive derived work if inputs are stable; reduce repeated work in render | Do not add `useMemo` for cheap calculations | `useMemo`, React DevTools |
| Typing is laggy while results update | Urgent input updates are coupled to expensive non-urgent rendering | Record typing interaction; confirm input and heavy result updates happen together | Reduce unnecessary work first, then test `useDeferredValue` or `startTransition` for the expensive follow-up update | Do not transition the controlled input state itself | `useDeferredValue`, `startTransition`, INP |
| Scrolling or rendering a large list is slow | Too many rows mounted or updated | Count rendered rows; inspect Profiler around list updates | Virtualize/window the list; then consider row-level optimization | Virtualization is common best practice, not React core | web.dev virtualization guidance |
| Rows remount, flicker, or lose state | Unstable keys or index keys in a dynamic list | Inspect keys and whether row identity changes during filter/reorder | Use stable semantic keys; preserve tree shape where possible | Key fixes can improve correctness and performance together | Rendering Lists, Preserving and Resetting State |
| Profiler shows little React cost but the page is still slow | Layout, paint, scripting, or third-party code dominates | Browser Performance panel | Switch from React-specific optimization to broader frontend performance analysis | This skill is not the right primary tool once React is no longer dominant | Chrome DevTools Performance overview |

## Guardrails

### Prefer structural fixes before memoization
Test these before spreading hooks everywhere:
- keep transient state local
- split expensive children away from fast-changing state
- remove unnecessary Effects
- simplify props instead of passing large object graphs
- keep rendering pure

Why: modern React guidance emphasizes that good component design often removes the need for aggressive memoization.

### When `memo` is worth trying
Usually only when all are true:
1. the component re-renders often
2. it is meaningfully expensive to render
3. it often receives the same props
4. you can keep relevant props stable
5. the profiler shows improvement after the change

### When `useMemo` is worth trying
Usually when:
- a calculation is measurably expensive, or
- the memoized value is passed to a memoized child and identity stability matters

### When `useCallback` is worth trying
Usually when:
- a stable function prop matters for a memoized child, or
- a hook dependency would otherwise trigger avoidable recalculation or resubscription

### Custom comparison functions on `memo`
Treat as a last resort.
- They increase maintenance burden.
- They can cost more than the render they skip.
- They are easy to get wrong when props evolve.

## Tool Boundary: React Profiler vs Browser Performance Panel

### Use React DevTools Profiler when you need to know:
- which React components rendered
- how often they rendered
- why they rendered
- which components were expensive in React terms

### Use the browser Performance panel when you need to know:
- whether layout or paint dominates
- whether long tasks or third-party scripts block interaction
- whether work outside React is the real bottleneck

## Fast Triage Checklist

1. Reproduce the problem in a production-like build.
2. Record the exact interaction in React Profiler.
3. Decide whether the issue is frequency, cost, Effect churn, list size, or scheduling.
4. Apply one fix only.
5. Re-measure.
6. Escalate to browser tools if React is not the dominant cost.

## Source Notes

Primary references:
- React DevTools: https://react.dev/learn/react-developer-tools
- `memo`: https://react.dev/reference/react/memo
- `useMemo`: https://react.dev/reference/react/useMemo
- `useCallback`: https://react.dev/reference/react/useCallback
- You Might Not Need an Effect: https://react.dev/learn/you-might-not-need-an-effect
- Synchronizing with Effects: https://react.dev/learn/synchronizing-with-effects
- `startTransition`: https://react.dev/reference/react/startTransition
- `useDeferredValue`: https://react.dev/reference/react/useDeferredValue
- Rendering Lists: https://react.dev/learn/rendering-lists
- Preserving and Resetting State: https://react.dev/learn/preserving-and-resetting-state
- Virtualize large lists with `react-window`: https://web.dev/articles/virtualize-long-lists-react-window
- Chrome DevTools Performance overview: https://developer.chrome.com/docs/devtools/performance/overview
