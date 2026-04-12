---
name: "perf-astro"
description: "Astro Performance Playbook workflow skill. Use this skill when a user needs Astro-specific performance improvements for Core Web Vitals and strong Lighthouse outcomes using Astro-native techniques first. Covers image and LCP optimization, hydration control, CSS and font loading, and cautious use of optional integrations such as astro-critters or @playform/compress. Do NOT use for non-Astro sites, or as a substitute for a deep Lighthouse audit workflow."
version: "0.0.1"
category: "frontend"
tags:
  - "perf-astro"
  - "astro"
  - "performance"
  - "core-web-vitals"
  - "lighthouse"
  - "lcp"
  - "hydration"
  - "images"
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
family_id: "perf-astro"
family_name: "Astro Performance Playbook"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/perf-astro"
upstream_skill: "skills/perf-astro"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "perf-astro"
---

# Astro Performance Playbook

## Overview

Use this skill when the task is to improve the runtime performance of an **Astro site** using Astro-native controls first: reduce unnecessary client-side JavaScript, optimize images and likely LCP elements, load fonts intentionally, avoid render-blocking CSS where possible, and verify changes with before/after evidence.

This skill is for **implementation and tuning**, not for a full standalone audit. It helps operators make safe Astro-specific changes that improve metrics such as **LCP**, **CLS**, and **INP**, while still supporting strong Lighthouse scores when appropriate.

Prefer Astro's built-in performance model before adding integrations. Optional tools such as `astro-critters` or `@playform/compress` can help in some projects, but they are **not** the default starting point.

## When to Use This Skill

Use this skill when:

- You are working on an **Astro** site and need to improve page-load or interaction performance.
- The likely bottleneck is one of these Astro-relevant areas:
  - oversized or poorly prioritized hero/LCP images
  - too many hydrated islands or overly aggressive `client:load`
  - render-blocking CSS or font loading issues
  - third-party scripts hurting startup or interaction latency
  - optional compression or critical-CSS tooling that needs careful validation
- The user wants implementation guidance to reach **better Core Web Vitals** or a stronger Lighthouse result without optimizing blindly for score alone.
- You need a practical workflow for diagnosis, code changes, preview validation, and handoff notes.

Do **not** use this skill when:

- The site is **not Astro**. Route to a broader web performance skill.
- The task is primarily a **deep Lighthouse audit, report interpretation, or performance budget program**. Route to `perf-lighthouse`.
- The task is mainly about **generic Core Web Vitals interpretation** across platforms. Route to `core-web-vitals` or `perf-web-optimization`.
- The main problem is unrelated framework debugging, infrastructure, CDN, or server tuning beyond Astro implementation scope.

## Operating Table

| Situation | Start here | What to inspect first | Typical fix |
| --- | --- | --- | --- |
| Poor LCP on landing page | `references/astro-lcp-image-checklist.md` | Actual LCP element, image dimensions, loading strategy, discovery path | Use Astro image optimization, set dimensions, avoid lazy-loading the hero, add priority hints only if discovery is delayed |
| Good static HTML but heavy JS / poor INP | `references/astro-hydration-directives-guide.md` | All components using `client:*`, bundle ownership, third-party widgets | Move from `client:load` to `client:idle`, `client:visible`, or `client:media`; remove unnecessary hydration |
| Fonts block rendering or cause CLS | `references/astro-font-loading-options.md` | Font source, fallback behavior, display strategy, network dependency | Prefer self-hosting where feasible, subset fonts, use intentional `font-display`, validate CLS |
| CSS feels heavy or first render is delayed | `references/astro-performance-workflow.md` | Global CSS size, component styles, duplicated rules, generated output | Reduce CSS scope, rely on Astro defaults first, test critical-CSS tooling only if justified |
| Compression or critical-CSS plugin is being considered | `references/optional-integrations-critters-compress.md` | Whether Astro-native fixes were already tried, build regressions, style drift | Add plugin only after baseline evidence, validate before/after output and rendering |
| Third-party scripts dominate startup or interactions | `references/astro-performance-workflow.md` | Script timing, tag placement, user-criticality, hydration interactions | Defer, lazy-load, gate by interaction, or remove non-essential scripts |

## Workflow

1. **Confirm scope and baseline**
   - Verify the site is Astro.
   - Clarify whether the user wants implementation changes, not just an audit.
   - Record the current symptom: poor LCP, CLS, INP, heavy JS, font issues, or weak Lighthouse performance.

2. **Build and inspect the current output**
   - Run a local build and preview.
   - Inspect the generated HTML, CSS, and JS bundles.
   - Identify which pages matter most, usually homepage, key landing pages, and high-traffic content templates.

3. **Identify the dominant bottleneck**
   - If the likely issue is **LCP**, identify the real LCP candidate first.
   - If the likely issue is **INP or JS cost**, inventory hydrated islands and third-party scripts.
   - If the likely issue is **CLS**, inspect image dimensions, font behavior, and layout shifts.
   - If the likely issue is **render delay**, inspect CSS, fonts, and synchronous scripts.

4. **Apply Astro-native optimizations first**
   - Use Astro image features and responsive image patterns.
   - Ensure above-the-fold media is not lazily delayed.
   - Reduce unnecessary client-side hydration.
   - Move non-critical components to more selective `client:*` directives.
   - Revisit font delivery and CSS scope before adding third-party plugins.

5. **Rebuild and validate locally**
   - Compare output and runtime behavior before and after changes.
   - Confirm no visual regressions, broken styles, or hydration failures.
   - Verify that the actual page bottleneck improved, not just a single score.

6. **Consider optional integrations only if needed**
   - Evaluate `astro-critters` or `@playform/compress` only after Astro-native changes.
   - Add them narrowly.
   - Validate their benefit against possible regressions such as duplicated CSS, unstable rendering, or negligible gains.

7. **Capture evidence and hand off cleanly**
   - Record what changed, why it changed, and what improved.
   - Note any remaining risks or follow-up work.
   - If deep audit interpretation is still needed, hand off to `perf-lighthouse` with the before/after evidence.

For a step-by-step operator checklist, use [references/astro-performance-workflow.md](references/astro-performance-workflow.md).

## Best Practices

### Do

- Start with the **actual bottleneck**, not a generic performance checklist.
- Prefer **Astro-native** image, CSS, font, and hydration controls before plugin-based optimization.
- Treat **LCP, CLS, and INP** as the real targets; use Lighthouse as supporting evidence.
- Identify the **real LCP element** before changing preload, fetch priority, or loading behavior.
- Keep above-the-fold images properly sized and discoverable early.
- Use `client:load` only when immediate interactivity is truly required.
- Review every hydrated island and justify why it must run on the client.
- Validate changes in a production-like preview before merge.
- Keep changes narrow and reversible.

### Don't

- Do not assume `astro-critters` is required for every Astro project.
- Do not preload every large asset; preload only where discovery timing is the problem.
- Do not lazy-load the likely LCP image.
- Do not treat an improved Lighthouse score as proof that field performance improved.
- Do not keep old font-loading snippets as a default without validating FOIT, FOUT, and CLS behavior.
- Do not add compression or critical-CSS plugins without checking for rendering regressions.
- Do not hydrate entire sections of a page when a small interactive island is enough.

## Examples

### Example 1: Baseline and preview the site

```bash
npm run build
npm run preview
```

Use this first to inspect the generated output and verify any change in a production-like preview.

See also: [examples/verification-commands.md](examples/verification-commands.md)

### Example 2: Improve a likely hero-image LCP path

```astro
---
import { Image } from 'astro:assets';
import hero from '../assets/hero.jpg';
---

<Image
  src={hero}
  alt="Product hero"
  widths={[640, 960, 1280]}
  sizes="(max-width: 768px) 100vw, 1280px"
  format="webp"
  loading="eager"
  fetchpriority="high"
/>
```

Use this pattern when the hero image is the likely LCP element and the browser needs early, properly sized image delivery. Do **not** copy this blindly to every image on the page.

See also: [examples/image-optimization-patterns.astro](examples/image-optimization-patterns.astro)

### Example 3: Reduce unnecessary hydration

```astro
<SearchBox client:load />
<NewsletterSignup client:visible />
<ThemeToggle client:idle />
```

This is a common improvement path when too many components hydrate on initial load. Move only components that do not need immediate startup execution.

See also: [examples/hydration-patterns.md](examples/hydration-patterns.md)

### Example 4: Record lightweight evidence before handoff

```bash
bash scripts/collect_perf_evidence.sh \
  --url http://127.0.0.1:4321 \
  --label homepage-tuning \
  --output ./.perf-evidence
```

Use this to capture build metadata, a timestamp, and optional notes for before/after comparisons. Review the script first and adapt it to your local workflow as needed.

## Troubleshooting

### Problem: LCP is still poor after adding preload or `fetchpriority`

**Symptoms:** Lighthouse or page testing still reports slow LCP, even after adding image priority hints.

**Solution:** Verify that the image is actually the LCP element. Then check whether the browser is discovering it late because of component structure, delayed rendering, CSS background usage, or incorrect responsive sizing. Use Astro image optimization first. If the element is above the fold, do not lazy-load it. Add preload only when the image is discovered too late and only after confirming the URL and type are correct.

### Problem: The page ships too much JavaScript despite using Astro

**Symptoms:** Initial JS is larger than expected, interaction feels delayed, or Lighthouse reports high JavaScript execution time.

**Solution:** Inventory all hydrated components and review every `client:*` directive. Convert non-critical components from `client:load` to `client:idle`, `client:visible`, or `client:media` where appropriate. Remove hydration entirely for content that can remain static.

### Problem: INP is weak even though page load looks fast

**Symptoms:** Initial render is acceptable, but interactions lag or main-thread work spikes after load.

**Solution:** Look for over-hydrated islands, large client bundles, or third-party scripts executing soon after load. Delay non-critical widgets, reduce work done during startup, and isolate interactivity to the smallest possible island. Compare before/after interaction timing instead of relying only on load metrics.

### Problem: Fonts cause flashes, layout shifts, or unnecessary network delay

**Symptoms:** Text is invisible briefly, swaps jarringly, or layout shifts after fonts load.

**Solution:** Revisit the font strategy. Prefer self-hosting when feasible, subset the font payload, choose `font-display` intentionally, and ensure fallback metrics are reasonable. Validate CLS after changes. Avoid treating a single third-party font snippet as the universal default.

### Problem: Adding `astro-critters` or compression changed rendering unexpectedly

**Symptoms:** Styles differ between development and preview, some CSS appears duplicated or missing, or gains are too small to justify the added complexity.

**Solution:** Remove the integration temporarily and compare output. Confirm whether Astro-native CSS handling already provides sufficient results. Re-introduce the plugin only if there is a measurable benefit and no meaningful regression in rendering or maintainability.

### Problem: Lighthouse improved, but field performance did not

**Symptoms:** Lab results look better, but real-user complaints or field data remain unchanged.

**Solution:** Check whether the change targeted the wrong bottleneck or improved only synthetic conditions. Compare field-oriented evidence where available and review real page templates, device/network assumptions, and third-party runtime behavior. Use this skill for implementation changes, then hand off to a CWV or Lighthouse-specific skill if deeper analysis is required.

## Related Skills

- `@perf-lighthouse` - Use when the task is a deep audit, score interpretation, report analysis, or performance budgeting workflow.
- `@perf-web-optimization` - Use when the problem extends beyond Astro into broader frontend or platform optimization.
- `@core-web-vitals` - Use when the user needs deeper interpretation of LCP, CLS, INP, or field-vs-lab behavior.
- `@accessibility` - Use when performance work uncovers rendering, content, or interaction issues that require accessibility review.

## Additional Resources

### Local references

- [Astro performance workflow](references/astro-performance-workflow.md)
- [Hydration directives guide](references/astro-hydration-directives-guide.md)
- [LCP image checklist](references/astro-lcp-image-checklist.md)
- [Font loading options](references/astro-font-loading-options.md)
- [Optional integrations: astro-critters and @playform/compress](references/optional-integrations-critters-compress.md)

### Local examples

- [Layout performance patterns](examples/layout-astro-performance-patterns.md)
- [Image optimization patterns](examples/image-optimization-patterns.astro)
- [Hydration patterns](examples/hydration-patterns.md)
- [Verification commands](examples/verification-commands.md)

### Local helper files

- [Collect lightweight performance evidence](scripts/collect_perf_evidence.sh)
- [Routing note for adjacent skills](agents/perf-astro-router.md)

### External references

- Astro Docs: Performance
- Astro Docs: Images
- Astro Docs: Fonts
- Astro Docs: Directives Reference
- Lighthouse performance scoring guidance
- web.dev guidance for LCP, CLS, and INP
- MDN references for `rel="preload"`, lazy loading, and `fetchpriority`
