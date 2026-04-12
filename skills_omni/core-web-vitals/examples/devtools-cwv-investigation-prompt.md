# DevTools CWV investigation checklist

Use this checklist while recording a Chrome DevTools Performance trace.

## Before recording

- choose the exact page and user flow
- note device assumptions
- apply representative throttling if needed
- close unrelated noisy tabs and extensions when possible

## During recording

### For LCP

- capture navigation start through LCP
- identify the LCP element
- inspect resource discovery timing
- inspect network priority and render-blocking work

### For INP

- record the exact slow interaction
- mark when input occurs
- inspect long tasks before and after handler start
- inspect script, style, layout, and paint cost after input

### For CLS

- reproduce the visible shift
- inspect layout-shift entries
- identify shifted elements and triggering resources or DOM mutations
- test post-load flows, not just initial load

## Save with the trace

- page URL or template
- metric investigated
- screenshots if useful
- observed root-cause hypothesis
- proposed smallest safe fix
