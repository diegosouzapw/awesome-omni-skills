---
name: "react-component-performance"
description: "React Component Performance workflow skill. Use this skill when the user needs diagnose slow React components and suggest targeted performance fixes, and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "frontend"
tags:
  - "react-component-performance"
  - "diagnose"
  - "slow"
  - "react"
  - "components"
  - "performance"
  - "profiler"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "react-component-performance"
family_name: "React Component Performance"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/react-component-performance"
upstream_skill: "skills/react-component-performance"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "react-component-performance"
---

# React Component Performance

## Overview

This skill preserves the intent of the upstream community workflow while making it more operational for real React performance investigations.

Use it to diagnose a slow React component or interaction, identify the dominant cause, and propose the smallest targeted fix that can be validated with measurement. The default posture is **profile first, change one thing at a time, and re-measure**.

Prefer structural fixes before blanket memoization:
- keep transient state local
- remove unnecessary Effects
- keep rendering pure
- simplify props passed into expensive children
- reduce DOM and list size when volume is the real bottleneck

Keep provenance visible if you are using this as part of an imported or reviewed upstream workflow.

## When to Use This Skill

Use this skill when:
- a React component, interaction, or screen feels slow and the user wants targeted fixes
- you need to diagnose excessive re-renders, expensive renders, typing lag, or list/scroll lag
- the right answer depends on distinguishing React render work from browser layout/paint/network work
- you need a profiler-driven workflow instead of generic advice like “add `memo` everywhere”
- you must preserve the upstream workflow and provenance while improving the operator guidance

Do **not** use this skill as the primary workflow when:
- the issue is mainly server latency, API throughput, or network waterfalls
- the slowdown is clearly outside React, such as CSS/layout thrash, large paints, or long-running non-React scripts; in that case, escalate to browser performance tooling after confirming React is not the main bottleneck
- the request is about bundle size, code splitting, or asset delivery rather than component render behavior

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| A component re-renders too often | React DevTools Profiler | Shows which components re-rendered, how often, and why guessing is unsafe |
| A component render is individually expensive | React DevTools Profiler Ranked chart | Helps target the highest self-time or total-time work first |
| Typing feels laggy while results update | Check urgent vs non-urgent updates | May need structural reduction first, then `startTransition` or `useDeferredValue` |
| `memo` did not help | Inspect prop identity and parent behavior | A single always-new object or function can defeat memoization |
| Repeated commits follow one interaction | Audit Effects and derived state | Unnecessary Effects commonly trigger extra renders and update loops |
| Large list or table is slow | Check row count, keys, and virtualization | Windowing often beats micro-optimizing every row |
| Rows remount or lose state | Inspect keys and tree shape | Unstable keys create remounts, state resets, and extra work |
| React does not appear dominant | Browser Performance panel | Use when layout, paint, scripting, or network dominates instead of React rendering |
| You need quick decision support | `references/domain-notes.md` | Contains symptom-to-fix guardrails and measurement cues |
| You need a concrete before/after model | `examples/worked-example.md` | Shows a realistic profiling workflow and targeted code changes |

## Workflow

1. **Confirm the symptom**
   - Identify the slow interaction precisely: initial render, typing, click response, filtering, scrolling, tab switch, modal open, or route change.
   - Reproduce it in a production-like build when possible. Development mode behavior can exaggerate costs and mislead optimization decisions.

2. **Profile before changing code**
   - Open React DevTools Profiler.
   - Record only the slow interaction.
   - Review:
     - which components rendered
     - which components rendered repeatedly
     - which components had the highest self time or total time
     - whether props, state, or context caused the render
   - If React time is not the dominant cost, switch to the browser Performance panel.

3. **Classify the bottleneck**
   Use the profiler result to decide which class of problem you have:
   - **render frequency**: too many commits or too many components updating
   - **render cost**: one or a few components are individually expensive
   - **effect churn**: an interaction causes extra commits because Effects derive state or synchronize unnecessarily
   - **list volume**: too many rows are mounted or updated
   - **interaction scheduling**: urgent UI updates are blocked by non-urgent heavy work

4. **Choose the smallest high-value fix**
   Prefer these in roughly this order:
   - move state closer to where it is used
   - remove unnecessary Effects and derived state stored in state
   - simplify props flowing into expensive children
   - keep rendering pure and avoid work during render that can be avoided or cached
   - use `memo` only when the child is expensive and often receives the same props
   - use `useMemo` for expensive calculations or to preserve values passed to memoized children
   - use `useCallback` mainly when stable function identity matters
   - virtualize long lists when row count is the real problem
   - use `startTransition` or `useDeferredValue` when non-urgent updates should not block urgent interactions

5. **Apply one change at a time**
   - Avoid stacking several optimizations before re-measuring.
   - Record exactly what changed and why.
   - If using memoization, confirm that props are actually stable enough for it to work.

6. **Re-profile and compare**
   - Capture the same interaction again.
   - Compare render count, commit count, and expensive component times against the baseline.
   - Keep the change only if it reduces real cost or improves responsiveness.

7. **Document tradeoffs and boundaries**
   - Note what was measured.
   - Note the chosen fix and why alternatives were rejected.
   - Call out any library-specific or framework-specific assumptions.

## Diagnostic Heuristics

### Frequent re-renders
Common causes:
- state lifted too high
- parent component updating broad subtrees unnecessarily
- unstable object, array, or function props
- context updates affecting too much UI
- Effects that set state after render

Usually test next:
- colocate state
- split expensive children from fast-changing state
- pass simpler props
- stabilize values only where profiler evidence justifies it

### Expensive individual render
Common causes:
- heavy derived calculations inside render
- large subtree generation
- repeated sorting/filtering/mapping for the same inputs
- expensive formatting or transformation repeated each render

Usually test next:
- move or cache expensive derived work with `useMemo` if it is measurably expensive
- reduce work done on every render
- isolate expensive children behind stable props and targeted `memo`

### Effect-driven extra commits
Common causes:
- deriving state from props in an Effect
- syncing local state to other state when not needed
- update loops from Effects that run after every change

Usually test next:
- compute derived values during render if cheap
- keep Effects for external synchronization, not ordinary data transformation
- remove state that merely mirrors other state

### Typing or clicking feels laggy
Common causes:
- urgent input update coupled with heavy filtering/rendering
- large result list updating on every keystroke
- broad parent state updates

Usually test next:
- reduce avoidable render work first
- then use `useDeferredValue` for expensive downstream values or `startTransition` for non-urgent updates
- do not put the controlled input state itself inside a transition

### Large list or scroll lag
Common causes:
- rendering too many rows at once
- unstable keys causing remounts
- heavy row components updating together

Usually test next:
- virtualize the list
- fix keys
- memoize rows only if rows are expensive and props can stay stable

## Troubleshooting

### `memo` changed nothing
Check:
- does the component often receive identical props?
- are you passing inline objects, arrays, or functions?
- is the parent forcing broad subtree updates anyway?
- is the component cheap enough that memoization overhead is not worth it?

Action:
- stabilize only the prop identities that matter
- simplify props before adding more hooks
- avoid custom comparison functions unless profiling proves they are cheaper than the skipped render work

### Profiler shows multiple commits for one interaction
Check:
- Effects that set state based on props or other state
- redundant synchronization between two pieces of state
- code that could run during render or in the event handler instead of in an Effect

Action:
- remove unnecessary Effect-driven state
- keep Effects for external systems only

### Filtering a list is slow
Check:
- whether filtering/sorting is recomputed on every keystroke
- whether the entire list is mounted
- whether row keys are stable

Action:
- memoize expensive derived collections if inputs are stable and the calculation is measurably costly
- defer non-urgent updates when appropriate
- virtualize if many rows are rendered

### Rows lose state or remount unexpectedly
Check:
- index keys in dynamic lists
- keys derived from unstable values
- tree shape changes that unintentionally remount components

Action:
- use stable semantic keys
- preserve identity for rows that should persist across filtering/reordering

### Browser feels slow but React profiler looks normal
Check:
- layout, paint, long tasks, or third-party scripts in the browser Performance panel
- oversized DOM, animations, expensive CSS, or non-React work

Action:
- treat this as a boundary condition for this skill and switch to broader frontend performance diagnosis

## Examples

See `examples/worked-example.md` for a complete before/after scenario that covers:
- profiler-first diagnosis
- unnecessary Effect removal
- unstable prop fixes
- targeted memoization
- deferred updates for expensive filtering
- virtualization as the next step when list size dominates

## Additional Resources

- React Developer Tools and Profiler: https://react.dev/learn/react-developer-tools
- `React.memo`: https://react.dev/reference/react/memo
- `useMemo`: https://react.dev/reference/react/useMemo
- `useCallback`: https://react.dev/reference/react/useCallback
- You Might Not Need an Effect: https://react.dev/learn/you-might-not-need-an-effect
- Synchronizing with Effects: https://react.dev/learn/synchronizing-with-effects
- Keeping Components Pure: https://react.dev/learn/keeping-components-pure
- `startTransition`: https://react.dev/reference/react/startTransition
- `useDeferredValue`: https://react.dev/reference/react/useDeferredValue
- Rendering Lists: https://react.dev/learn/rendering-lists
- Preserving and Resetting State: https://react.dev/learn/preserving-and-resetting-state
- Virtualizing large lists with `react-window`: https://web.dev/articles/virtualize-long-lists-react-window
- Chrome DevTools Performance panel overview: https://developer.chrome.com/docs/devtools/performance/overview

## Related Skills

Use a different or additional skill when the task shifts to:
- browser rendering, layout, paint, and main-thread analysis beyond React
- bundle size or code-splitting optimization
- API latency and server performance
- virtualization library selection or large-data UI architecture

## Provenance Notes

This enhanced skill preserves the original community intent: diagnose slow React components and suggest targeted performance fixes. The upgraded workflow narrows activation, makes the measurement steps explicit, and adds guardrails so operators do not over-apply memoization or treat React as the cause of every UI slowdown.
