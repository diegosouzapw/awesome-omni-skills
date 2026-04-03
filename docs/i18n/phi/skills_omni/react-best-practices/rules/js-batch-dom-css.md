# js-batch-dom-css.md (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/js-batch-dom-css.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/js-batch-dom-css.md)

---

---
title: Avoid Layout Thrashing
impact: MEDIUM
impactDescription: prevents forced synchronous layouts and reduces performance bottlenecks
tags: javascript, dom, css, performance, reflow, layout-thrashing
---

## Avoid Layout Thrashing

Avoid interleaving style writes with layout reads. When you read a layout property (like `offsetWidth`, `getBoundingClientRect()`, or `getComputedStyle()`) between style changes, the browser is forced to trigger a synchronous reflow.

**This is OK (browser batches style changes):**
```typescript
function updateElementStyles(element: HTMLElement) {
  // Each line invalidates style, but browser batches the recalculation
  element.style.width = '100px'
  element.style.height = '200px'
  element.style.backgroundColor = 'blue'
  element.style.border = '1px solid black'
}
```

**Incorrect (interleaved reads and writes force reflows):**
```typescript
function layoutThrashing(element: HTMLElement) {
  element.style.width = '100px'
  const width = element.offsetWidth  // Forces reflow
  element.style.height = '200px'
  const height = element.offsetHeight  // Forces another reflow
}
```

**Correct (batch writes, then read once):**
```typescript
function updateElementStyles(element: HTMLElement) {
  // Batch all writes together
  element.style.width = '100px'
  element.style.height = '200px'
  element.style.backgroundColor = 'blue'
  element.style.border = '1px solid black'
  
  // Read after all writes are done (single reflow)
  const { width, height } = element.getBoundingClientRect()
}
```

**Correct (batch reads, then writes):**
```typescript
function avoidThrashing(element: HTMLElement) {
  // Read phase - all layout queries first
  const rect1 = element.getBoundingClientRect()
  const offsetWidth = element.offsetWidth
  const offsetHeight = element.offsetHeight
  
  // Write phase - all style changes after
  element.style.width = '100px'
  element.style.height = '200px'
}
```

**Better: use CSS classes**
```css
.highlighted-box {
  width: 100px;
  height: 200px;
  background-color: blue;
  border: 1px solid black;
}
```
```typescript
function updateElementStyles(element: HTMLElement) {
  element.classList.add('highlighted-box')
  
  const { width, height } = element.getBoundingClientRect()
}
```

**React example:**
```tsx
// Incorrect: interleaving style changes with layout queries
function Box({ isHighlighted }: { isHighlighted: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (ref.current && isHighlighted) {
      ref.current.style.width = '100px'
      const width = ref.current.offsetWidth // Forces layout
      ref.current.style.height = '200px'
    }
  }, [isHighlighted])
  
  return <div ref={ref}>Content</div>
}

// Correct: toggle class
function Box({ isHighlighted }: { isHighlighted: boolean }) {
  return (
    <div className={isHighlighted ? 'highlighted-box' : ''}>
      Content
    </div>
  )
}
```

Prefer CSS classes over inline styles when possible. CSS files are cached by the browser, and classes provide better separation of concerns and are easier to maintain.

See [this gist](https://gist.github.com/paulirish/5d52fb081b3570c81e3a) and [CSS Triggers](https://csstriggers.com/) for more information on layout-forcing operations.
