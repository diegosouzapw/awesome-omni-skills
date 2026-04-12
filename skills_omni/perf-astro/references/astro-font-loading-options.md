# Astro Font Loading Options

Choose a font strategy based on rendering stability, payload size, and operational control.

## Preferred order

1. Self-host important fonts when feasible.
2. Subset fonts or use a smaller variable font payload where practical.
3. Choose `font-display` intentionally.
4. Validate text rendering and CLS after changes.

## Strategy options

### Option 1: Self-hosted fonts

Best when you want control over caching, availability, and payload shaping.

Use when:

- the font is central to branding
- you want fewer third-party dependencies
- you can manage assets in the repository or build pipeline

### Option 2: Third-party hosted fonts

Acceptable when convenience matters and the operational tradeoffs are understood.

Check:

- connection setup cost
- fallback behavior
- whether the font request blocks rendering too much
- whether a hosted integration or Astro-recommended path is available

## Validation checklist

- no major FOIT or disruptive FOUT
- CLS remains acceptable
- fallbacks keep layout stable enough
- payload is not excessive for the page

## Avoid

- assuming one old `media="print" onload` snippet is always the right answer
- loading too many font weights or styles by default
- ignoring fallback metrics and resulting layout shifts
