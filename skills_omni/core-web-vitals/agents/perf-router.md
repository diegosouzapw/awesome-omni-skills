# Performance routing note

Use this routing note when the task stops being primarily about LCP, INP, or CLS.

## Stay in this skill when

- the main objective is to improve a Core Web Vital
- the evidence and fix are centered on LCP, INP, or CLS
- success will be judged mainly by CWV field recovery

## Hand off when

- the work becomes broad frontend performance tuning without a CWV target -> `@perf-web-optimization`
- the user mainly wants Lighthouse interpretation or audit triage -> `@perf-lighthouse`
- Astro-specific performance behavior dominates -> `@perf-astro`
- the main risk becomes UX/accessibility rather than CWV metrics alone -> `@accessibility`

## Handoff packet

When handing off, include:

- failing metric and evidence source
- pages or templates affected
- traces or screenshots already collected
- fixes already attempted
- remaining uncertainty
