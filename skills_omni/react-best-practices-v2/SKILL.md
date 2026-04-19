---
name: "react-best-practices-v2"
description: "Vercel React Best Practices workflow skill. Use this skill when the user needs a practical performance optimization workflow for React and Next.js applications, especially when reviewing rendering strategy, caching behavior, bundle pressure, asset loading, or production measurement, and the operator should preserve provenance and use the packaged runbook, guardrails, and inspection script before merging or handing off."
version: "0.0.1"
category: "frontend"
tags:
  - "react-best-practices-v2"
  - "react-best-practices"
  - "react"
  - "nextjs"
  - "performance"
  - "caching"
  - "core-web-vitals"
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
date_added: "2026-03-27"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "react-best-practices-v2"
family_name: "Vercel React Best Practices"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/react-best-practices-v2"
upstream_skill: "skills/react-best-practices-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "react-best-practices-v2"
---

# Vercel React Best Practices

## Overview

This skill curates the upstream `react-best-practices` workflow into an operator-ready execution path for React and Next.js performance work.

Keep the original intent: improve performance without cargo-cult optimizations, preserve provenance, and stay aligned with modern React and Next.js guidance. The upgraded workflow adds sharper activation boundaries, App Router vs Pages Router decision points, measurable validation, and compact local support files that help operators inspect a repository and document safe remediation.

Use this skill for performance-sensitive work in React or Next.js when the task involves one or more of these concerns:

- route or component slowness
- excessive client-side JavaScript
- cache or revalidation confusion
- hydration mismatch risk
- image, font, or third-party script regressions
- code review of React or Next.js performance changes
- performance validation before deploy or handoff

Ask one clarifying question before changing code if any of these are unclear:

- Is this App Router or Pages Router?
- Is the problem seen locally, in preview, or in production?
- Is the target symptom slow initial load, slow navigation, stale data, hydration mismatch, or poor Core Web Vitals?

## When to Use This Skill

Activate this skill when the request is primarily about React or Next.js performance behavior, rendering strategy, loading behavior, or cache-aware delivery.

### Good fit

- Writing or refactoring Next.js pages, layouts, or route segments with performance goals
- Reviewing `use client` boundaries or deciding what should stay server-side
- Fixing slow LCP, CLS, INP, hydration mismatch, or bundle growth
- Reviewing image, font, script, or lazy-loading decisions
- Investigating stale data caused by caching or revalidation assumptions
- Preparing a performance-focused PR review, deployment review, or handoff note

### Usually not the right skill

- Pure styling or design-system work with no performance concern
- Accessibility audits as the main objective
- Security reviews unrelated to frontend performance behavior
- CI/CD pipeline design unrelated to frontend build or deploy verification
- Generic React bugs with no rendering, loading, or cache dimension

If the request drifts into testing strategy, accessibility, security hardening, or deployment platform design, hand off to a more specific skill after capturing any performance findings already confirmed.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| You do not know the routing model | Inspect for `app/` vs `pages/`, then open `references/nextjs-performance-guardrails.md` | App Router and Pages Router have different rendering and caching defaults |
| Existing repo needs a quick read-only scan | Run `bash scripts/inspect-nextjs-performance.sh <repo-root>` | Surfaces likely hotspots before deep manual review |
| User reports slow first load or high JS cost | Check `use client` spread, top-level imports, images, fonts, and scripts | Large client boundaries and heavy top-level imports are common regressions |
| User reports stale production data | Review cache expectation, revalidation path, and route rendering mode | Many fixes fail because freshness intent was never stated clearly |
| User reports hydration mismatch | Check browser-only APIs, non-deterministic values, and client/server markup divergence | Hydration bugs often appear after server-first refactors |
| You need a concrete review flow | Use `examples/performance-review-runbook.md` | Gives scenario-based steps and expected observations |
| You need a quick decision matrix | Use `references/nextjs-performance-guardrails.md` | Maps symptoms to safe checks and likely primitives |

## Workflow

1. **Confirm the target symptom and success metric.**
   - Examples: better LCP on `/products/[id]`, lower client JS on the home route, reduced CLS from font swaps, correct freshness for dashboard data.
   - Do not start with blanket memoization or lazy loading.

2. **Identify execution context.**
   - Determine whether the codebase uses App Router, Pages Router, or both.
   - Confirm whether the environment is local, preview, or production.
   - Record whether the issue is route-specific, component-specific, or global.

3. **Capture the intended rendering and freshness model before editing.**
   - For App Router, decide whether the target should be static, revalidated, or fully dynamic.
   - For Pages Router, confirm whether the route uses static generation, server-side rendering, or client fetching.
   - Write down the expected freshness window and invalidation path.

4. **Run the read-only inspection first.**
   - Use:
     ```bash
     bash scripts/inspect-nextjs-performance.sh .
     ```
   - Treat the output as triage, not proof. Confirm each finding manually in code.

5. **Review architecture before micro-optimizing.**
   - In App Router, prefer Server Components by default.
   - Add `use client` only where interactivity, browser APIs, or client-only hooks are required.
   - Split large client trees into a server shell plus small client islands when possible.
   - Move data fetching out of client effects when framework-native server loading is available.

6. **Check first-party optimization primitives.**
   - Images: prefer `next/image`, correct sizing, and careful priority usage.
   - Fonts: prefer `next/font`; reduce unnecessary variants.
   - Scripts: justify each third-party script and use the least aggressive loading strategy that works.
   - Lazy loading: use for heavy optional client code, not as a substitute for bad architecture.

7. **Only then consider React-specific render tuning.**
   - Investigate state placement, prop churn, broad context updates, and expensive child trees first.
   - Use `memo` or `useMemo` only when measurement or code structure shows a real payoff.
   - Do not wrap nearly everything in memoization as a default response.

8. **Validate safely.**
   - Prefer narrow, reversible changes.
   - Rebuild and rerun the relevant local checks.
   - Compare route behavior before and after.
   - For production-sensitive work, define what must be verified in preview or production metrics.

9. **Document deploy and rollback notes.**
   - Record what changed, why the chosen rendering/cache mode is correct, and what symptom should improve.
   - If a change touches caching, note how to verify stale-content recovery and what fallback action to take if freshness becomes wrong after deploy.

## Troubleshooting

### Slow initial render or poor LCP

Likely causes:
- Large client component boundary near the route root
- Heavy imports in `app/layout.*`, route entry files, or shared providers
- Unoptimized hero image or incorrectly prioritized assets
- Early third-party script execution

Checks:
- Search for broad `use client` usage in layouts, templates, and top-level pages
- Check whether the LCP image uses `next/image` with correct sizing
- Check whether fonts are loaded through `next/font`
- Review third-party scripts and whether they load before interaction

Safe remediations:
- Move non-interactive UI back to server-rendered components
- Split heavy widgets behind client islands or lazy loading
- Replace plain `<img>` with `next/image` where appropriate
- Delay or remove non-essential third-party scripts

### Stale data in preview or production

Likely causes:
- Cache expectation was never made explicit
- Revalidation settings do not match freshness needs
- Route became static or dynamic unintentionally
- Operator expects deploy-time behavior to invalidate runtime caches automatically

Checks:
- Write down the required freshness window
- Review fetch caching behavior and route-level rendering assumptions
- Check whether the route should be static, revalidated, or dynamic
- Confirm how invalidation or refresh is expected to happen operationally

Safe remediations:
- Align route or fetch behavior with the intended freshness model
- Prefer the smallest change that corrects freshness without making the whole route unnecessarily dynamic
- Add handoff notes describing how to verify the fix after deploy

### Hydration mismatch after refactor

Likely causes:
- Browser-only APIs used during server render
- Non-deterministic values like time, random output, or locale-sensitive formatting without coordination
- Different markup paths on server and client

Checks:
- Search for `window`, `document`, storage APIs, or time-based rendering in shared components
- Compare server and client branches for divergent markup
- Check whether a component should be isolated behind a client boundary instead of partially executing on both sides

Safe remediations:
- Move browser-only logic into client components or effects where appropriate
- Make initial render deterministic
- Keep server markup and client hydration paths aligned

### High re-render count or sluggish interaction

Likely causes:
- State lifted too high
- Broad context updates
- Expensive child tree under frequently changing props
- Memoization added without addressing prop instability

Checks:
- Identify the smallest subtree that actually depends on the changing state
- Review whether a provider wraps too much of the tree
- Look for unstable object or function props passed into expensive children
- Confirm that the expensive work is real before adding memoization

Safe remediations:
- Move state closer to where it is used
- Split expensive children from frequently updated parents
- Narrow context scope
- Add memoization only after structural fixes or measured need

### Bundle regression after adding a feature

Likely causes:
- Heavy client-only dependency imported at route root or shared layout
- Entire route tree converted to `use client`
- Optional widgets loaded eagerly

Checks:
- Review recent imports in layouts, route entries, and shared providers
- Identify feature code that could be deferred or isolated
- Check whether the dependency is needed during first render

Safe remediations:
- Push the dependency deeper into a smaller client island
- Lazy-load optional or below-the-fold widgets
- Keep the route shell server-rendered where possible

### CLS or visual instability

Likely causes:
- Images without stable dimensions
- Font swaps or too many font variants
- Late-loading embeds or scripts changing layout

Checks:
- Confirm image sizing strategy
- Check font loading path and variant count
- Review late DOM injection from third-party code

Safe remediations:
- Provide stable image dimensions or fill containers correctly
- Use `next/font` and reduce variants
- Reserve space for embeds where practical

## Examples

### Example 1: Review an App Router product route with poor LCP

Use `examples/performance-review-runbook.md`, scenario 1.

Expected pattern:
- confirm route is App Router
- inspect whether `app/products/[id]/page.*` or shared layout became client-heavy
- verify hero image handling and third-party script timing
- narrow changes to the route and record measurable validation criteria

### Example 2: Investigate stale dashboard data after deploy

Use `examples/performance-review-runbook.md`, scenario 2.

Expected pattern:
- document freshness expectation first
- inspect cache and rendering assumptions
- avoid turning the whole route dynamic unless required
- add post-deploy verification and rollback notes

## Additional Resources

- `references/nextjs-performance-guardrails.md` — compact operator matrix for routing mode, cache intent, optimization primitives, and Core Web Vitals interpretation.
- Official references to consult when needed:
  - Next.js documentation
  - React documentation
  - Vercel Speed Insights
  - Vercel Analytics
  - web.dev Core Web Vitals guidance

## Related Skills

Hand off when the primary task becomes:
- accessibility auditing rather than performance analysis
- test strategy or test automation design
- security review of browser code or third-party dependencies
- deployment platform configuration outside the frontend performance path
- visual design or styling with no rendering, loading, or cache concern

## Provenance Note

This skill preserves the identity and intent of the upstream community skill while improving its execution quality for operators. Keep provenance explicit in review notes when using imported upstream material or adapting rule guidance into repository-specific remediation.
