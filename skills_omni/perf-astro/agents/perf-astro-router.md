# perf-astro Router Note

Use `perf-astro` when the task is Astro-specific implementation tuning.

## Stay in this skill when

- the work is about Astro images, fonts, CSS, hydration, or optional Astro-oriented integrations
- the user needs code changes and validation steps for an Astro project

## Hand off when

- the task becomes a deep Lighthouse audit or score interpretation workflow -> `perf-lighthouse`
- the work is broader than Astro and includes generic frontend or platform tuning -> `perf-web-optimization`
- the user needs deeper field-vs-lab metric analysis -> `core-web-vitals`
- accessibility issues become first-order concerns during performance changes -> `accessibility`

## Operator note

When handing off, preserve:

- the page or template optimized
- the dominant bottleneck identified
- the changes already attempted
- before/after evidence
- any unresolved regressions or tradeoffs
