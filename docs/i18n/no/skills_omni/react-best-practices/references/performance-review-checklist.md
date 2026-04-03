# React and Next.js Performance Review Checklist (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/references/performance-review-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/references/performance-review-checklist.md)

---


Use this checklist when reviewing a PR, refactor, or optimization proposal.

## 1. Classify the main symptom

Choose the primary problem before suggesting fixes:

- slow initial route load
- large client bundle
- hydration mismatch or flicker
- sequential data fetching
- excessive rerenders or interaction lag
- production-only slowness

Do not mix unrelated optimizations into one recommendation unless they share the same root cause.

## 2. Server vs client boundary review

- Is this code in the Next.js App Router?
- Does the file use `use client`?
- If yes, does the entire file truly need client execution?
- Can non-interactive logic remain on the server?
- Are large objects being serialized into Client Component props?
- Can child interactivity be isolated into a smaller client boundary?

## 3. Data fetching review

- Are independent requests started in parallel?
- Is there an accidental waterfall from nested `await` usage?
- Is data fetched on the server when possible?
- Would Suspense or streaming improve the path?
- Are cache or revalidation assumptions explicit?

## 4. Bundle review

- Did a new `use client` boundary expand the bundle unexpectedly?
- Are barrel imports pulling in more than needed?
- Could `next/dynamic` defer a heavy interactive dependency?
- Are third-party libraries loaded only when necessary?
- Is `next/image` appropriate for important images?
- Is `next/script` preferable to a plain script tag for third-party code?

## 5. Hydration review

- Does the initial server output match the initial client render?
- Are browser-only APIs accessed during render?
- Are time-dependent or random values rendered too early?
- Is `suppressHydrationWarning` being used narrowly and intentionally?

## 6. Re-render review

- Is expensive work repeated on the client unnecessarily?
- Are effects doing work that belongs in event handlers or render derivation?
- Are unstable props or dependencies defeating memoization?
- Can state be narrowed or lifted differently to reduce churn?
- Can work move to the server instead of being memoized?

## 7. Measurement review

Capture at least one form of evidence:

- bundle analysis output
- Web Vitals or Speed Insights snapshot
- local reproduction notes with route and timing context
- platform observability or runtime traces

## 8. Handoff packet

Before closing review, record:

- the primary symptom
- the suspected root cause
- the exact change made or proposed
- how it was verified
- what remains unmeasured or risky
