# Layout.astro Performance Patterns

Use these patterns selectively.

## Pattern 1: Keep the head lean

- include only essential metadata and resources
- avoid preloading many assets by default
- add font and image hints only when they solve a verified problem

## Pattern 2: Delay non-critical scripts

```html
<script>
  let loaded = false;
  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    // Load analytics here.
  }
  ['scroll', 'click', 'touchstart'].forEach((eventName) => {
    document.addEventListener(eventName, loadAnalytics, { once: true, passive: true });
  });
  setTimeout(loadAnalytics, 5000);
</script>
```

Use this only for non-critical scripts that can wait.

## Pattern 3: Avoid blanket preload usage

Instead of preloading every candidate asset, verify which resource is delaying first render or LCP.

## Pattern 4: Validate layout stability

When changing fonts or media:

- keep dimensions explicit
- test small and large viewports
- check for layout shift during load and hydration
