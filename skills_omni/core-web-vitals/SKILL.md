---
name: "core-web-vitals"
description: "Core Web Vitals optimization workflow skill. Use this skill when the user needs targeted improvement of LCP, INP, or CLS using a field-first workflow with lab reproduction, root-cause analysis, safe remediation, and post-release validation. Use when asked to improve Core Web Vitals, fix LCP, reduce CLS, optimize INP, investigate Search Console CWV regressions, or diagnose layout shifts or interaction lag tied to page experience. Do NOT use this skill for general web performance tuning without a CWV target, Lighthouse-only auditing, or framework-specific optimization that is not anchored to LCP, INP, or CLS outcomes."
version: "0.0.1"
category: "frontend"
tags:
  - "core-web-vitals"
  - "lcp"
  - "inp"
  - "cls"
  - "crux"
  - "search-console"
  - "rum"
  - "performance"
  - "page-experience"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
  - "chrome-devtools"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "core-web-vitals"
family_name: "Core Web Vitals optimization"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/core-web-vitals"
upstream_skill: "skills/core-web-vitals"
upstream_author: "web-quality-skills"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "core-web-vitals"
---

# Core Web Vitals optimization

## Overview

Use this skill to improve the three Core Web Vitals metrics:

- **LCP** — Largest Contentful Paint
- **INP** — Interaction to Next Paint
- **CLS** — Cumulative Layout Shift

This skill is for **metric-specific remediation**, not generic performance advice. The default operating model is:

1. confirm the problem in **field data** when available
2. reproduce representative failures in **lab tooling**
3. identify the metric-specific root cause
4. apply the smallest safe fix
5. validate locally and after release

Treat field data as the source of truth for whether a real-user CWV problem exists. Use lab data to diagnose and verify fixes.

## When to Use This Skill

Use this skill when:

- Search Console reports **Poor** or **Needs improvement** URLs for Core Web Vitals.
- CrUX or RUM data shows weak **LCP**, **INP**, or **CLS** at the 75th percentile.
- Users report slow page load of hero content, delayed interaction response, or unexpected layout movement.
- The request is explicitly to improve **LCP**, **INP**, **CLS**, **page experience**, or **layout stability**.
- You need a repeatable workflow that separates field diagnosis, lab reproduction, remediation, and validation.

Do **not** use this skill when:

- The task is broad bundle reduction, caching, or payload optimization without a CWV target. Use `@perf-web-optimization`.
- The task is primarily a Lighthouse audit walkthrough or score interpretation. Use `@perf-lighthouse`.
- The task is Astro-specific optimization not anchored to LCP, INP, or CLS outcomes. Use `@perf-astro`.
- The request is general frontend debugging with no evidence that CWV is the real problem.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Search Console says URLs are failing CWV | `references/field-vs-lab-triage.md` | Prevents treating grouped field reports like isolated lab failures |
| LCP is failing | `references/lcp-runbook.md` | Organizes fixes by TTFB, discovery, transfer, and render delay |
| INP is failing | `references/inp-runbook.md` | Focuses on long tasks, yielding, rendering cost, and third-party impact |
| CLS is failing | `references/cls-runbook.md` | Covers reserved space, post-load shifts, fonts, and SPA patterns |
| You need production measurement | `examples/web-vitals-rum-snippet.js` | Adds RUM instrumentation with attribution-friendly reporting |
| You need a structured investigation packet | `examples/cwv-investigation-template.md` | Standardizes evidence, root cause, fix, and validation notes |
| Search Console still shows poor URLs after deploy | `references/search-console-validation.md` | Explains reporting lag and grouped URL validation behavior |
| The task drifts beyond CWV-specific work | `agents/perf-router.md` | Routes safely to adjacent performance skills |

## Workflow

1. **Confirm scope and metric ownership**
   - Identify whether the task is really about LCP, INP, CLS, or a broader performance issue.
   - Record affected page types, environments, devices, and traffic segments.

2. **Gather field evidence first**
   - Check Search Console, CrUX, or existing RUM.
   - Note whether the issue is page-level, template-level, or URL-group-level.
   - Use the 75th percentile, not isolated best-case samples.

3. **Choose the right measurement source**
   - Use field tools to confirm user impact.
   - Use lab tools such as Chrome DevTools and Lighthouse for reproducible diagnosis.
   - Do not claim success from a good lab run alone if field data is still poor.

4. **Reproduce representative failures in lab**
   - Use throttling, representative devices, and realistic navigation or interaction flows.
   - Capture traces, screenshots, waterfalls, and any layout-shift or long-task evidence.

5. **Identify the metric-specific root cause**
   - For **LCP**, determine whether the problem is mostly TTFB, late resource discovery, slow transfer, or render delay.
   - For **INP**, determine whether the problem is input delay, long handler work, post-input rendering, hydration cost, or third-party interference.
   - For **CLS**, determine whether shifts come from media without reserved space, ads/embeds, injected content, fonts, or post-load SPA behavior.

6. **Apply the smallest safe fix**
   - Prefer narrow changes that are easy to verify and revert.
   - Avoid broad speculative rewrites unless the evidence supports them.
   - Keep before/after evidence for every fix candidate.

7. **Validate locally before release**
   - Re-run traces and compare against the original evidence.
   - Confirm the exact target symptom improved, not just adjacent metrics.
   - Check for regressions in accessibility, SEO-critical markup, and user-visible behavior.

8. **Deploy safely and monitor recovery**
   - Roll out using normal release controls.
   - Monitor RUM, CrUX, and Search Console over time.
   - Keep notes on what changed, what improved in lab, and what still awaits field confirmation.

## Core Web Vitals thresholds

| Metric | What it measures | Good | Needs improvement | Poor |
| --- | --- | --- | --- | --- |
| **LCP** | Loading performance | ≤ 2.5s | 2.5s–4.0s | > 4.0s |
| **INP** | Interaction responsiveness | ≤ 200ms | 200ms–500ms | > 500ms |
| **CLS** | Visual stability | ≤ 0.1 | 0.1–0.25 | > 0.25 |

Core Web Vitals are evaluated on **field data**, typically at the **75th percentile**.

## Measurement tools

### Field vs lab

| Tool | Best for | What it cannot tell you alone |
| --- | --- | --- |
| Search Console | Site-level and grouped URL CWV status | Exact local root cause on a single run |
| CrUX API | Field distributions for origins and eligible URLs | Detailed trace-level debugging |
| RUM with `web-vitals` | Your users, your pages, attribution, segmentation | Controlled reproduction without lab tools |
| Lighthouse | Fast synthetic audit and hint generation | Whether real users are passing at the 75th percentile |
| Chrome DevTools Performance panel | Trace-level diagnosis of long tasks, render delay, and layout shifts | Population-wide field performance |

See also: [Field vs lab triage](references/field-vs-lab-triage.md).

## Metric runbooks

### LCP: diagnose by subpart

LCP usually improves when you identify which part is actually slow:

| LCP symptom | Likely subpart | Typical fixes |
| --- | --- | --- |
| Page starts late | TTFB | caching, CDN, backend work, reduce redirects |
| Hero discovered late | resource discovery delay | move resource into initial HTML, preload carefully, avoid JS-only discovery |
| Hero downloads slowly | resource load duration | reduce bytes, compress, correct dimensions, modern formats |
| Hero discovered and downloaded but appears late | element render delay | reduce render-blocking CSS/JS, unblock fonts, reduce hydration or client rendering delay |

**High-value LCP rules:**

- Do **not** lazy-load the likely LCP image.
- Use `fetchpriority="high"` on the actual hero image when appropriate.
- Preload only when discovery would otherwise be delayed.
- Ensure the LCP element is present in initial HTML when possible.
- If the LCP element is text, investigate CSS and font render delay, not only image bytes.

See: [LCP runbook](references/lcp-runbook.md).

### INP: optimize end-to-end interaction latency

INP includes:

- input delay
- processing duration
- presentation delay

**High-value INP rules:**

- Remove or split long tasks on the main thread.
- Keep event handlers focused on immediate user-visible work.
- Yield during heavy processing when work can be chunked.
- Defer non-urgent analytics or secondary side effects.
- Reduce expensive rendering after input.
- Investigate third-party tags, chat widgets, and hydration cost.

Prefer reducing work and yielding over relying on `requestIdleCallback` as a universal fix.

See: [INP runbook](references/inp-runbook.md).

### CLS: eliminate unexpected movement

CLS often comes from:

- images or media without width/height or `aspect-ratio`
- ads or embeds that resize after load
- banners or notices inserted above existing content
- font swaps with mismatched metrics
- route transitions or post-load SPA content changes

**High-value CLS rules:**

- Reserve space before content loads.
- Do not inject new content above visible content unless triggered by user action and handled carefully.
- Use DevTools layout-shift diagnostics for post-load movement.
- Treat field-only CLS as a strong signal for post-load or user-flow-specific shifts.

See: [CLS runbook](references/cls-runbook.md).

## Examples

### Example 1: Start a field-first CWV investigation

```text
Use @core-web-vitals to investigate poor LCP on the product detail page. Start by separating field and lab evidence, identify the LCP element and subpart causing delay, then propose the smallest safe fix and a validation plan.
```

### Example 2: Add production RUM instrumentation

```bash
cat skills/core-web-vitals/examples/web-vitals-rum-snippet.js
```

Expected outcome: a production-safe example for reporting LCP, INP, and CLS with attribution-friendly fields.

### Example 3: Investigate using a repeatable packet

```bash
cat skills/core-web-vitals/examples/cwv-investigation-template.md
```

Expected outcome: a reusable report template covering page, metric, evidence, root cause, fix, validation, and rollout notes.

### Example 4: Profile a suspected INP regression

```bash
cat skills/core-web-vitals/examples/devtools-cwv-investigation-prompt.md
```

Expected outcome: a focused checklist for collecting traces, long-task evidence, interaction timing, screenshots, and layout-shift details in DevTools.

## Best Practices

### Do

- Start with **field data** when available.
- Optimize the metric that is actually failing, not a nearby proxy.
- Keep fixes narrow, evidence-based, and reversible.
- Save before/after traces, screenshots, and metric notes.
- Verify that the changed resource or interaction is the one tied to the bad metric.
- Segment field data by page type, device class, and geography when possible.
- Re-check nearby regressions after the fix, especially accessibility and rendering behavior.

### Do not

- Treat a single Lighthouse score as proof that CWV is fixed.
- Lazy-load the likely LCP resource.
- Preload many assets speculatively; preloading the wrong resource can waste bandwidth.
- Assume `requestIdleCallback` alone fixes INP.
- Ignore post-load user flows when CLS is poor only in field data.
- Declare Search Console success immediately after deployment; reporting and validation are delayed.

## Troubleshooting

### Problem: LCP is still poor after image compression

**Symptoms:** Image bytes are lower, but field or lab LCP barely improves.

**Likely causes:** The real issue is late discovery, render-blocking CSS/JS, TTFB, or the LCP element is text rather than the image you optimized.

**Solution:** Identify the actual LCP element and break the metric into subparts. Confirm whether the resource is discovered early, whether it is lazy-loaded, and whether render delay remains after download. Use the [LCP runbook](references/lcp-runbook.md).

### Problem: INP regressed after adding analytics, chat, or tag-manager logic

**Symptoms:** Interactions feel delayed, especially on lower-end devices; traces show long tasks after input.

**Likely causes:** Third-party script execution, synchronous handler work, hydration contention, or heavy post-click side effects.

**Solution:** Capture a performance trace during the interaction, identify long tasks and third-party attribution, then defer or gate non-critical work. Keep the critical interaction path small. Use the [INP runbook](references/inp-runbook.md).

### Problem: CLS is low in Lighthouse but poor in CrUX or Search Console

**Symptoms:** Synthetic tests look stable, but field data still reports layout instability.

**Likely causes:** Post-load shifts, cookie banners, consent tools, A/B tests, SPA route transitions, ad resizing, or field-only user flows.

**Solution:** Reproduce realistic post-load flows in DevTools, inspect layout-shift records, and compare with RUM or grouped field data. Use the [CLS runbook](references/cls-runbook.md).

### Problem: Search Console still shows failing URLs after a fix shipped

**Symptoms:** The deployment is live, but Search Console remains in Poor or Needs improvement status.

**Likely causes:** Reporting lag, grouped URL behavior, insufficient field recovery volume, or the fix only helped a subset of affected pages.

**Solution:** Check release timing, group scope, and RUM. Keep evidence of what changed and monitor recovery before declaring success. Use [Search Console validation notes](references/search-console-validation.md).

### Problem: Lab runs look fine but users still complain

**Symptoms:** Lighthouse and local traces seem acceptable, yet field data or user reports remain poor.

**Likely causes:** Device mismatch, network mismatch, geography, authentication state, user-flow differences, post-load interactions, or third-party variability.

**Solution:** Re-test under representative throttling and device constraints, segment field data, and reproduce the exact user journey instead of only initial load. Start with [Field vs lab triage](references/field-vs-lab-triage.md).

## Related Skills

- `@perf-web-optimization` — broader web performance work that is not primarily CWV-specific
- `@perf-lighthouse` — synthetic audits, Lighthouse interpretation, and audit follow-up
- `@perf-astro` — Astro-specific performance tuning when framework behavior dominates
- `@accessibility` — when changes affect content stability, interaction affordances, or UX semantics beyond CWV

## Additional Resources

### Local support pack

- [Field vs lab triage](references/field-vs-lab-triage.md)
- [LCP runbook](references/lcp-runbook.md)
- [INP runbook](references/inp-runbook.md)
- [CLS runbook](references/cls-runbook.md)
- [Search Console validation notes](references/search-console-validation.md)
- [Framework fix patterns](references/framework-fixes.md)
- [RUM instrumentation example](examples/web-vitals-rum-snippet.js)
- [DevTools investigation checklist](examples/devtools-cwv-investigation-prompt.md)
- [CWV investigation template](examples/cwv-investigation-template.md)
- [Performance routing note](agents/perf-router.md)

### External references

- [Core Web Vitals overview](https://web.dev/articles/vitals)
- [Largest Contentful Paint](https://web.dev/articles/lcp)
- [Optimize LCP](https://web.dev/articles/optimize-lcp)
- [Interaction to Next Paint](https://web.dev/articles/inp)
- [Optimize INP](https://web.dev/articles/optimize-inp)
- [Cumulative Layout Shift](https://web.dev/articles/cls)
- [Optimize CLS](https://web.dev/articles/optimize-cls)
- [Chrome DevTools Performance panel](https://developer.chrome.com/docs/devtools/performance)
- [CrUX API](https://developer.chrome.com/docs/crux/api/)
- [web-vitals library](https://github.com/GoogleChrome/web-vitals)
