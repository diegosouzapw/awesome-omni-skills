---
name: "react-best-practices"
description: "Vercel React Best Practices workflow skill. Use this skill when writing, reviewing, debugging, or refactoring React or Next.js code where the goal is measurable performance improvement or regression prevention. Apply it to Core Web Vitals, bundle size, hydration cost, request waterfalls, rendering strategy, caching, and client/server boundary decisions. Do not use it for component API design or composition architecture; use react-composition-patterns for that scope."
version: "0.0.1"
category: "development"
tags:
  - "react-best-practices"
  - "react"
  - "nextjs"
  - "performance"
  - "core-web-vitals"
  - "bundle-optimization"
  - "server-components"
  - "vercel"
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
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "react-best-practices"
family_name: "Vercel React Best Practices"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/react-best-practices"
upstream_skill: "skills/react-best-practices"
upstream_author: "vercel"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "react-best-practices"
---

# Vercel React Best Practices

## Overview

This skill packages the upstream React and Next.js performance guidance associated with Vercel engineering into an execution-oriented workflow for agents.

Use it when the task is not just "make this code nicer," but specifically to improve or protect a measurable performance outcome such as:

- better LCP, CLS, INP, TTFB, or hydration behavior
- less client JavaScript shipped to the browser
- fewer request waterfalls and less blocking rendering work
- better Server Component and Client Component boundaries
- safer caching and revalidation behavior in modern Next.js

The original upstream intent is preserved: this is a React and Next.js performance optimization skill organized around high-impact rules such as eliminating waterfalls, reducing bundle size, improving server-side behavior, and avoiding unnecessary rerenders.

This enhanced version makes the skill more operational for agents: baseline first, diagnose the likely bottleneck, apply the narrowest safe change, verify the result, and record what still needs human review.

## When to Use This Skill

Use this skill when one or more of these are true:

- You are reviewing React or Next.js code for performance regressions.
- You are refactoring a page, route, or component to reduce load time or JavaScript cost.
- You need to decide whether logic belongs in a Server Component or a Client Component.
- A page is slow because data fetching is sequential or blocked behind a render waterfall.
- Hydration fails, flickers, or produces server/client mismatch warnings.
- Bundle size grew because broad `use client` boundaries or heavy browser-only libraries were introduced.
- You need to improve LCP or CLS through image, font, rendering, or JavaScript changes.
- You need to verify that a proposed optimization actually changed a metric rather than just changing code shape.

Do **not** use this skill when the main task is:

- component API design or composition patterns
- design system structure
- accessibility remediation as the primary objective
- general debugging unrelated to performance
- backend architecture that does not materially affect React or Next.js rendering behavior

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Need to scope the optimization | `references/performance-triage-workflow.md` | Forces a baseline, symptom, likely cause, change plan, and verification path before editing |
| Unsure whether code should stay server-side or client-side | `references/nextjs-performance-decision-matrix.md` | Helps narrow `use client`, reduce serialized props, and choose caching/rendering strategy |
| Investigating a large client bundle or rerender churn | `references/bundle-and-rerender-audit-checklist.md` | Gives a repeatable audit sequence before cargo-cult memoization or dynamic imports |
| Hydration mismatch, flicker, or unexpected dynamic rendering | `references/troubleshooting-hydration-and-rendering.md` | Covers common server/client divergence causes and safe remedies |
| Need proof that an optimization worked | `references/core-web-vitals-verification.md` | Connects changes to Web Vitals, bundle inspection, and runtime verification |
| Need a concrete refactor pattern | `examples/server-vs-client-boundary-refactor.md` | Shows how to keep only interactive leaves on the client |
| Need to remove a request waterfall | `examples/fix-request-waterfall-with-suspense.md` | Demonstrates early work start, Suspense boundaries, and streaming-friendly structure |
| Need to reduce initial JS safely | `examples/reduce-bundle-size-with-dynamic-imports.md` | Shows dynamic imports as a targeted tool, not a substitute for architecture fixes |
| Need routing or handoff guidance | `agents/performance-router.md` | Helps switch to adjacent skills when the task is mainly accessibility, testing, debugging, or architecture |

## Workflow

1. **Define the performance goal before changing code.**  
   Identify the concrete symptom or target metric: LCP, CLS, INP, TTFB, bundle size, hydration cost, client rerenders, or server waterfall latency.

2. **Capture a baseline.**  
   Record what is currently slow or broken. Use existing app telemetry, local measurements, Lighthouse, route-level timing, Web Vitals reporting, bundle inspection, or deployment observability if available.

3. **Classify the bottleneck.**  
   Decide which class of problem you are dealing with:
   - request waterfall
   - oversized client boundary
   - unnecessary client-side fetching
   - stale or ineffective caching
   - hydration mismatch
   - expensive rerender path
   - image/font/render blocking issue

4. **Check the server/client boundary first.**  
   In modern Next.js, prefer Server Components by default. Ask:
   - Does this code really need browser APIs, local state, refs, or client hooks?
   - Can data fetching, shaping, and expensive computation stay on the server?
   - Can only an interactive leaf become a Client Component?
   - Are large or unstable props being serialized across the boundary?

5. **Choose the smallest change that matches the bottleneck.**
   - For waterfalls: start independent async work early, await late, and add Suspense boundaries where streaming helps.
   - For bundle size: remove unnecessary client boundaries first, then lazy-load truly optional heavy code.
   - For rerenders: remove effect-driven churn, reduce lifted state, and only memoize proven expensive subtrees.
   - For caching: determine whether data is static, revalidated, request-specific, or user-specific before adding cache behavior.
   - For hydration: make server and client renders deterministic, and move browser-only reads out of server render paths.

6. **Apply safe, narrow edits.**  
   Prefer reversible changes with clear behavioral intent. Avoid broad rewrites unless the root cause clearly requires one.

7. **Verify both correctness and performance.**  
   Confirm that the app still renders correctly, that cache semantics remain safe, and that the target metric or symptom actually improved.

8. **Document tradeoffs and handoff notes.**  
   Record:
   - baseline symptom or metric
   - suspected cause
   - changes made
   - risks or non-goals
   - evidence of improvement
   - what should be checked after deployment

## Best Practices

### Prioritize by likely impact

Use the upstream category ordering as the default optimization order unless evidence suggests otherwise:

| Priority | Category | Impact | Typical questions |
| --- | --- | --- | --- |
| 1 | Eliminating waterfalls | Critical | Are independent requests being serialized? Is one blocking render path delaying the whole route? |
| 2 | Bundle size optimization | Critical | Are broad client boundaries or heavy libraries increasing initial JS? |
| 3 | Server-side performance | High | Can work stay on the server? Is caching or deduplication missing? |
| 4 | Client-side data fetching | Medium-high | Is the browser doing work that could be done earlier or once? |
| 5 | Re-render optimization | Medium | Are updates caused by lifted state, effects, or unstable props rather than real expensive work? |
| 6 | Rendering performance | Medium | Are images, fonts, SVGs, long lists, or hydration patterns hurting paint timing? |
| 7 | JavaScript performance | Low-medium | Is there repeated expensive computation in hot paths? |
| 8 | Advanced patterns | Low | Does a specialized pattern help after the higher-impact issues are addressed? |

### Do / Don't guidance

#### Server and client boundaries

- **Do** default to Server Components in App Router code.
- **Do** move data fetching, shaping, and expensive transforms to the server when possible.
- **Do** keep `use client` boundaries as small as possible.
- **Don't** wrap large route trees in `use client` just because one child is interactive.
- **Don't** pass oversized or unstable objects across the server/client boundary unless necessary.

#### Waterfalls and async work

- **Do** start independent async work early.
- **Do** use Suspense boundaries to stream slower regions when appropriate.
- **Do** distinguish independent fetches from truly dependent fetches.
- **Don't** assume `Promise.all()` alone fixes a slow page if one render path still blocks the route.

#### Bundle optimization

- **Do** remove unnecessary client JavaScript before adding more code splitting.
- **Do** dynamically import optional heavy UI such as charts, editors, maps, or browser-only integrations.
- **Do** inspect whether a library is in the critical path before splitting it.
- **Don't** use dynamic import to hide a broad client-boundary mistake.

#### Caching and data freshness

- **Do** decide whether data is static, periodically revalidated, request-specific, or user-specific before adding caching.
- **Do** verify invalidation and revalidation behavior after optimization.
- **Don't** apply cache-like optimizations blindly to personalized or sensitive responses.
- **Don't** describe data as cached unless you can explain what invalidates it.

#### Rerender optimization

- **Do** remove unnecessary Effects and effect-triggered state loops first.
- **Do** keep state as local as practical.
- **Do** use memoization only when expensive rendering or computation is actually being repeated.
- **Do** use transitions for non-urgent UI updates when interaction responsiveness matters.
- **Don't** add `memo` or `useMemo` everywhere as a default performance fix.

#### Hydration and rendering correctness

- **Do** keep server-rendered output deterministic.
- **Do** move browser-only access such as `window`, `localStorage`, or viewport reads into client-only code or effects.
- **Do** treat `suppressHydrationWarning` as a narrow escape hatch.
- **Don't** use time-dependent or random values during render unless the divergence is intentional and safely isolated.

#### Images and fonts

- **Do** inspect hero images, intrinsic sizing, and loading priority when LCP or CLS is poor.
- **Do** use platform-native image and font optimization features where available.
- **Don't** spend time micro-optimizing React renders while obvious LCP offenders remain unresolved.

## Examples

### Example 1: Narrow a broad client boundary

Prompt:

```text
Use @react-best-practices to review this Next.js App Router route. The page is marked 'use client', bundle size increased, and only the search box is interactive. Propose the smallest refactor that keeps data fetching on the server and leaves only the interactive leaf on the client. Include how to verify the improvement.
```

Expected outcome:

- route/page returns to a Server Component by default
- data fetching and shaping move to the server path
- only the search box or other interactive leaf remains client-side
- verification includes bundle impact and regression checks

See: [examples/server-vs-client-boundary-refactor.md](examples/server-vs-client-boundary-refactor.md)

### Example 2: Fix a request waterfall with Suspense

Prompt:

```text
Use @react-best-practices to inspect this page for sequential data loading. Identify which requests are independent, start them earlier, and suggest Suspense boundaries so the page can stream useful content sooner.
```

Expected outcome:

- independent async work is started earlier
- sequential waits are removed where possible
- slow subtrees are isolated behind Suspense boundaries
- explanation includes why the previous structure felt slow

See: [examples/fix-request-waterfall-with-suspense.md](examples/fix-request-waterfall-with-suspense.md)

### Example 3: Reduce initial JS without masking the root cause

Prompt:

```text
Use @react-best-practices to reduce initial JavaScript on this route. Check whether the heavy chart library really needs to be in the first render path, and only use dynamic import if the component is optional or below the fold.
```

Expected outcome:

- audit first checks for unnecessary client boundaries
- heavy optional UI is split from the critical path
- loading behavior is explicit and user-safe
- result does not claim success without verifying initial JS reduction

See: [examples/reduce-bundle-size-with-dynamic-imports.md](examples/reduce-bundle-size-with-dynamic-imports.md)

### Example 4: Fix a hydration mismatch safely

Prompt:

```text
Use @react-best-practices to diagnose this hydration error. The component reads localStorage and Date.now() during render and flickers on first paint. Suggest a fix that preserves correctness and explain whether suppressHydrationWarning is appropriate.
```

Expected outcome:

- browser-only reads move out of the server render path
- nondeterministic render values are stabilized
- hydration becomes deterministic or the divergence is intentionally isolated
- `suppressHydrationWarning` is avoided unless there is a narrow justified case

See: [examples/fix-hydration-mismatch.md](examples/fix-hydration-mismatch.md)

## Troubleshooting

### Problem: The route is slow even after using `Promise.all()`

**Symptoms:** Requests are technically parallelized, but the page still feels blocked, TTFB remains high, or the user sees one large loading delay.

**Solution:** Check whether one render path still blocks the route, whether independent work starts too late, and whether a Suspense boundary could stream slower UI separately. Revisit `references/performance-triage-workflow.md` and `examples/fix-request-waterfall-with-suspense.md`.

### Problem: Initial bundle size is too large

**Symptoms:** Route-level JavaScript grows significantly, hydration is heavy, or performance regresses after adding interactive features.

**Solution:** First inspect whether `use client` was placed too high in the tree. Move fetch logic and data shaping back to the server if possible. Only then consider dynamic imports for optional heavy code. Use `references/bundle-and-rerender-audit-checklist.md` and `examples/server-vs-client-boundary-refactor.md`.

### Problem: Dynamic import did not noticeably improve performance

**Symptoms:** A heavy component was split, but initial render still feels slow or Web Vitals barely changed.

**Solution:** Confirm that the split code was not still required on the critical path, and check whether most JavaScript cost comes from other client components. Dynamic import helps optional code; it does not fix an over-clientized route by itself.

### Problem: Hydration fails or the UI flickers on first paint

**Symptoms:** Hydration mismatch warnings, visible re-render after load, content differs between server and client, or browser-only state changes immediately after mount.

**Solution:** Look for `Date.now()`, `Math.random()`, locale/timezone differences, conditional rendering divergence, and `window` or `localStorage` access during render. Move browser-only logic into effects or smaller client-only components, and use `suppressHydrationWarning` only for narrow intentional mismatches. See `references/troubleshooting-hydration-and-rendering.md`.

### Problem: Expected caching but every request is still slow

**Symptoms:** Data refetches on every request, route behavior is unexpectedly dynamic, or repeated requests show no meaningful reuse.

**Solution:** Inspect whether request-specific data, cookies, headers, or other dynamic inputs are forcing dynamic rendering. Re-evaluate whether the route should be static, revalidated, or explicitly request-bound. Use `references/nextjs-performance-decision-matrix.md`.

### Problem: Data became stale after optimization

**Symptoms:** Performance improved, but users now see outdated content or invalidation is inconsistent.

**Solution:** Re-check the cache and revalidation model. Make sure freshness expectations are explicit and that invalidation strategy matches the data type. Never trade correctness for speed without documenting that decision.

### Problem: Added `memo` or `useMemo`, but nothing improved

**Symptoms:** The code is more complex, but renders are not materially cheaper or user-perceived responsiveness is unchanged.

**Solution:** Check whether the computation was actually expensive, whether props remain unstable, and whether the real issue is effect churn, lifted state, or unnecessary parent renders. Use `references/bundle-and-rerender-audit-checklist.md`.

### Problem: LCP or CLS is still poor after code-level cleanup

**Symptoms:** The app rerenders less, but the largest content still appears late or layout shifts remain visible.

**Solution:** Inspect hero images, dimensions, font loading, render-blocking JavaScript, and whether the LCP element is unnecessarily client-rendered. Use `references/core-web-vitals-verification.md` to verify with user-centric metrics.

## Additional Resources

- [Performance triage workflow](references/performance-triage-workflow.md)
- [Next.js performance decision matrix](references/nextjs-performance-decision-matrix.md)
- [Bundle and rerender audit checklist](references/bundle-and-rerender-audit-checklist.md)
- [Hydration and rendering troubleshooting guide](references/troubleshooting-hydration-and-rendering.md)
- [Core Web Vitals verification guide](references/core-web-vitals-verification.md)
- [Example: server vs client boundary refactor](examples/server-vs-client-boundary-refactor.md)
- [Example: fix request waterfall with Suspense](examples/fix-request-waterfall-with-suspense.md)
- [Example: reduce bundle size with dynamic imports](examples/reduce-bundle-size-with-dynamic-imports.md)
- [Example: fix hydration mismatch](examples/fix-hydration-mismatch.md)
- [Routing guide for adjacent skills](agents/performance-router.md)

## Related Skills

- `@react-composition-patterns` - Use when the main task is component API shape, composition, or architecture rather than performance.
- `@accessibility` - Use when the main issue is accessible rendering, semantics, focus management, or keyboard/screen-reader behavior.
- `@frontend-testing` - Use when performance changes need stronger automated regression coverage or reproduction harnesses.
- `@debugging` - Use when the task is primarily root-cause investigation outside React or Next.js performance patterns.
- `@security-review` - Use when the proposed change affects auth, server actions, sensitive data handling, or cache safety.

## Provenance and scope notes

This skill remains aligned to the upstream Vercel-oriented React and Next.js performance guidance and preserves its core category structure:

- eliminating waterfalls
- bundle size optimization
- server-side performance
- client-side data fetching
- rerender optimization
- rendering performance
- JavaScript performance
- advanced patterns

Where the upstream material included broader or repository-specific packaging notes, this enhanced version translates them into a direct agent workflow focused on diagnosis, safe refactoring, verification, and handoff.
