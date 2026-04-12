# JavaScript Cost Triage

Use this reference when JavaScript seems to be delaying rendering, hydration, or interaction.

## Distinguish the problem first

### 1. Transfer-size problem

**Signals:** Large JS files over the network, slow downloads on constrained networks.

**Typical fixes:**
- reduce dependency weight
- split by route
- convert eager imports to dynamic imports where appropriate
- remove dead code and verify tree shaking

### 2. Parse/execute problem

**Signals:** Bundle downloads reasonably fast, but the main thread spends too long parsing or running scripts.

**Typical fixes:**
- ship less startup JS
- defer low-value code
- move non-essential work off the initial path
- trim expensive framework/client startup work

### 3. Hydration or client-rendering problem

**Signals:** HTML appears, then the page remains busy or unresponsive while client code hydrates.

**Typical fixes:**
- reduce client-only rendering
- hydrate fewer components initially
- split islands or route boundaries where the framework supports it
- remove unnecessary interactive wrappers

### 4. Third-party problem

**Signals:** Analytics, tag managers, chat widgets, A/B tools, or ads dominate early execution or network priority.

**Typical fixes:**
- defer non-essential third parties
- load on interaction or after a delay when acceptable
- remove redundant vendors
- sandbox or isolate heavy widgets where possible

## Safe examples

### React lazy loading

```javascript
const Chart = lazy(() => import('./Chart'))
```

### Dynamic import for non-critical logic

```javascript
button.addEventListener('click', async () => {
  const { openConfigurator } = await import('./configurator.js')
  openConfigurator()
})
```

### Delay a non-essential third party

```html
<script>
  function loadChatWidget() {
    if (window.__chatLoaded) return
    window.__chatLoaded = true
    var s = document.createElement('script')
    s.src = 'https://example-cdn.invalid/chat.js'
    s.async = true
    document.head.appendChild(s)
  }

  addEventListener('click', loadChatWidget, { once: true, passive: true })
  setTimeout(loadChatWidget, 5000)
</script>
```

Replace the URL with the real vendor only in the project that owns it.

## Investigation checklist

- compare route-level chunks, not just total bundle size
- look for duplicate libraries across chunks
- inspect long tasks during startup
- review third-party scripts separately from first-party code
- verify whether improvements affect transfer, execution, or both
