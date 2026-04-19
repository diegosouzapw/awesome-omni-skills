# Next.js Performance Guardrails

Use this file as a compact decision aid during triage, review, and deploy verification.

## 1) Routing mode: identify the baseline first

| Question | If yes | If no | Why it matters |
| --- | --- | --- | --- |
| Does the repo use `app/` route segments? | Treat App Router as the primary model | Check for `pages/` behavior | App Router defaults and optimization paths differ from Pages Router |
| Does the route require browser APIs or live interaction at render time? | Add a small Client Component boundary only where required | Keep rendering server-first | Smaller client boundaries reduce shipped JS |
| Is the route using legacy Pages Router data methods? | Review `getStaticProps`, `getServerSideProps`, and client fetch patterns | Use App Router guidance instead | Mixing assumptions causes stale-data and rendering confusion |

Primary sources:
- Next.js docs: https://nextjs.org/docs
- Server and Client Components: https://nextjs.org/docs/app/building-your-application/rendering/server-components

## 2) Rendering and freshness matrix

### App Router

| Need | Likely model | Check before changing code | Tradeoff |
| --- | --- | --- | --- |
| Fast route with content that rarely changes | Static generation or cached fetches | Confirm that delayed freshness is acceptable | Best latency, least runtime work |
| Content can be slightly stale but must refresh predictably | Revalidated data | Write down freshness window and invalidation path | Good balance of speed and freshness |
| Request-specific or truly live content | Dynamic rendering | Confirm that per-request work is justified | Freshest data, higher runtime cost |

### Pages Router

| Need | Likely model | Check before changing code | Tradeoff |
| --- | --- | --- | --- |
| Mostly static content | `getStaticProps` | Confirm rebuild/revalidation expectations | Fast delivery, stale until rebuilt or revalidated |
| Request-time data | `getServerSideProps` | Confirm server cost is acceptable | Fresh per request, more runtime overhead |
| User-specific browser-only state | Client fetch after render | Confirm it does not block critical content | Simpler personalization, weaker first render |

Primary sources:
- Next.js docs: https://nextjs.org/docs
- Caching and revalidating: https://nextjs.org/docs/app/building-your-application/data-fetching/caching

## 3) Client boundary guardrails

| Symptom | Likely issue | Check | Safer response |
| --- | --- | --- | --- |
| Large JS bundle on first load | `use client` too high in the tree | Inspect `app/layout.*`, route entries, providers | Split into server shell plus client islands |
| Slow interaction after route loads | Heavy client dependency under a broad boundary | Review top-level imports and optional widgets | Lazy-load optional features or move them deeper |
| Hydration mismatch | Shared component uses browser-only behavior | Search for `window`, `document`, storage, random, date logic | Move browser-only logic into client code and keep first render deterministic |

Primary sources:
- Server and Client Components: https://nextjs.org/docs/app/building-your-application/rendering/server-components
- React learn: https://react.dev/learn

## 4) Asset optimization checks

### Images

| Check | What good looks like | Risk if missed |
| --- | --- | --- |
| Main content image uses `next/image` where appropriate | Correct sizing, responsive behavior, careful priority usage | Poor LCP, unexpected layout shift |
| Remote images are configured intentionally | Host patterns are explicit and expected | Broken image optimization or unsafe assumptions |
| Dimensions or fill behavior are stable | Layout does not jump after image load | CLS regression |

Primary source:
- Next.js image optimization: https://nextjs.org/docs/app/building-your-application/optimizing/images

### Fonts

| Check | What good looks like | Risk if missed |
| --- | --- | --- |
| Fonts use `next/font` | Fonts are self-hosted and loaded predictably | Extra network trips and layout shift |
| Font variants are limited | Only needed weights/styles are shipped | Unnecessary transfer and render instability |

Primary source:
- Next.js font optimization: https://nextjs.org/docs/app/building-your-application/optimizing/fonts

### Scripts

| Check | What good looks like | Risk if missed |
| --- | --- | --- |
| Third-party scripts are justified | Only scripts with clear product value remain | Hidden main-thread and network cost |
| Loading strategy is minimal | Script does not block initial route unnecessarily | Worse LCP and INP |

Primary source:
- Next.js script optimization: https://nextjs.org/docs/app/building-your-application/optimizing/scripts

### Lazy loading

| Use it when | Avoid using it as | Why |
| --- | --- | --- |
| A widget is optional, below the fold, or client-heavy | A blanket fix for architecture problems | It reduces initial cost but does not correct oversized client boundaries |

Primary sources:
- Next.js lazy loading: https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading
- MDN lazy loading: https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading

## 5) React tuning guardrails

| Tempting fix | Better first question | Why |
| --- | --- | --- |
| Add `memo` everywhere | Is state too high, are props unstable, or is context too broad? | Structural fixes often beat blanket memoization |
| Add `useMemo` for cheap values | Is there actually expensive work or a referential stability need? | Overuse adds complexity without measurable gain |
| Add more effects for data flow | Can framework loading or render logic handle this instead? | Effects are often the wrong place for primary data loading |

Primary sources:
- React memo: https://react.dev/reference/react/memo
- React useMemo: https://react.dev/reference/react/useMemo
- React learn: https://react.dev/learn

## 6) Core Web Vitals interpretation

| Metric | What it usually indicates | Common checks |
| --- | --- | --- |
| LCP | Slow main content render or heavy critical assets | Hero image handling, route JS cost, render path, third-party scripts |
| INP | Slow responsiveness after interaction | Main-thread pressure, heavy client logic, broad re-renders |
| CLS | Unstable layout during load | Image dimensions, font swaps, late embeds or injected content |

Use field data when possible. Lab tests help reproduce issues, but deploy decisions should not rely on "it feels faster" alone.

Primary sources:
- Vercel Speed Insights: https://vercel.com/docs/speed-insights
- Vercel Analytics: https://vercel.com/docs/analytics
- web.dev Core Web Vitals: https://web.dev/articles/vitals

## 7) Deployment and rollback notes

Before merging or handing off a performance change, record:

- target route or component
- intended rendering mode
- intended freshness behavior
- expected metric or symptom improvement
- how to verify in preview or production
- what to revert or narrow if data becomes stale, hydration breaks, or user interaction regresses
