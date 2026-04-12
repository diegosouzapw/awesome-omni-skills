# Astro Performance Workflow

Use this workflow when you need a practical sequence for Astro performance tuning.

## 1. Baseline

- Identify the page or template that matters most.
- Record the main complaint: slow hero load, heavy JS, layout shift, weak interaction latency, or broad Lighthouse regression.
- Build and preview the site before changing code.

```bash
npm run build
npm run preview
```

## 2. Inspect the current output

Check these first:

- generated HTML for resource discovery
- CSS size and whether large global styles are unavoidable
- hydrated components and their `client:*` directives
- third-party scripts loaded on first view
- likely LCP image or text block

## 3. Pick the dominant bottleneck

### If LCP is the problem

- identify the actual LCP element
- confirm it is not lazy-loaded if above the fold
- verify dimensions and responsive sizing
- prefer Astro image optimization
- use preload only if the browser discovers the resource too late

### If INP or JS cost is the problem

- inventory all hydrated islands
- justify every `client:load`
- move non-critical islands to `client:idle`, `client:visible`, or `client:media`
- review third-party widgets and analytics timing

### If CLS is the problem

- confirm images have stable dimensions
- review font loading and fallback behavior
- look for delayed content insertion or UI shifts after hydration

### If render delay is the problem

- inspect blocking CSS and font requests
- reduce startup scripts
- make sure non-essential scripts are deferred or delayed

## 4. Apply Astro-native fixes first

Prioritize these before adding plugins:

1. reduce hydration
2. optimize images
3. improve font strategy
4. reduce CSS scope or global payload
5. defer or remove third-party scripts

## 5. Validate

After each meaningful change:

- rebuild
- preview locally
- compare the relevant metric
- check for visual regressions
- note whether the change helped the real bottleneck

## 6. Optional integrations

Only after the steps above should you test:

- `astro-critters`
- `@playform/compress`

Use them only if they produce measurable gains without rendering instability.

## 7. Handoff notes

Record:

- pages changed
- components changed
- directives changed
- images/fonts/scripts affected
- before/after evidence
- unresolved risks or follow-ups
