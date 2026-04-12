# Browser Compatibility and Baseline Guide

Use this guide when reviewing modernization, deprecated APIs, fallbacks, and browser support risk.

## 1. Start with support policy

Before recommending a change, define:

- supported browsers or browser families
- supported mobile platforms
- whether only evergreen browsers are in scope
- whether enterprise or embedded browsers matter

Without a support policy, compatibility guidance becomes guesswork.

## 2. Preferred review approach

### Do

- use MDN compatibility data
- use MDN Baseline as a quick interoperability signal
- use feature detection in JavaScript
- use `@supports` in CSS where appropriate
- use progressive enhancement

### Avoid

- primary reliance on UA sniffing
- adding polyfills without a concrete target requirement
- recommending protocol-relative URLs

## 3. Example patterns

### Feature detection

```javascript
if ('IntersectionObserver' in window) {
  enableObserver()
} else {
  loadFallback()
}
```

### CSS support detection

```css
@supports (display: grid) {
  .layout {
    display: grid;
  }
}

@supports not (display: grid) {
  .layout {
    display: flex;
  }
}
```

## 4. Deprecated or brittle patterns to review

- `document.write`
- synchronous XHR
- Application Cache
- broad UA-specific branching
- legacy event patterns without compatibility need

## 5. Polyfill decision rule

Add a polyfill only if all are true:

1. the feature is required for supported browsers
2. the lack of support is confirmed
3. progressive enhancement or fallback is insufficient
4. the added maintenance cost is acceptable

## 6. Validation evidence

Capture:

- affected feature
- target browsers impacted
- source used for compatibility decision
- chosen fallback or modernization path
