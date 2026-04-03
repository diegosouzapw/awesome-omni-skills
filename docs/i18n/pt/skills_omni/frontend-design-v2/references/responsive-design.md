# Responsive Design (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/frontend-design-v2/references/responsive-design.md) · 🇪🇸 [es](../../../../es/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇫🇷 [fr](../../../../fr/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇩🇪 [de](../../../../de/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇮🇹 [it](../../../../it/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇷🇺 [ru](../../../../ru/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇯🇵 [ja](../../../../ja/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇰🇷 [ko](../../../../ko/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇸🇦 [ar](../../../../ar/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇮🇳 [hi](../../../../hi/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇮🇳 [in](../../../../in/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇹🇭 [th](../../../../th/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇻🇳 [vi](../../../../vi/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇮🇩 [id](../../../../id/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇲🇾 [ms](../../../../ms/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇳🇱 [nl](../../../../nl/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇵🇱 [pl](../../../../pl/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇸🇪 [sv](../../../../sv/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇳🇴 [no](../../../../no/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇩🇰 [da](../../../../da/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇫🇮 [fi](../../../../fi/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇵🇹 [pt](../../../../pt/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇷🇴 [ro](../../../../ro/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇭🇺 [hu](../../../../hu/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇧🇬 [bg](../../../../bg/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇸🇰 [sk](../../../../sk/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇮🇱 [he](../../../../he/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇵🇭 [phi](../../../../phi/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇨🇿 [cs](../../../../cs/skills_omni/frontend-design-v2/references/responsive-design.md) · 🇹🇷 [tr](../../../../tr/skills_omni/frontend-design-v2/references/responsive-design.md)

---


## Mobile-First: Write It Right

Start with base styles for mobile, use `min-width` queries to layer complexity. Desktop-first (`max-width`) means mobile loads unnecessary styles first.

## Breakpoints: Content-Driven

Don't chase device sizes—let content tell you where to break. Start narrow, stretch until design breaks, add breakpoint there. Three breakpoints usually suffice (640, 768, 1024px). Use `clamp()` for fluid values without breakpoints.

## Detect Input Method, Not Just Screen Size

**Screen size doesn't tell you input method.** A laptop with touchscreen, a tablet with keyboard—use pointer and hover queries:

```css
/* Fine pointer (mouse, trackpad) */
@media (pointer: fine) {
  .button { padding: 8px 16px; }
}

/* Coarse pointer (touch, stylus) */
@media (pointer: coarse) {
  .button { padding: 12px 20px; }  /* Larger touch target */
}

/* Device supports hover */
@media (hover: hover) {
  .card:hover { transform: translateY(-2px); }
}

/* Device doesn't support hover (touch) */
@media (hover: none) {
  .card { /* No hover state - use active instead */ }
}
```

**Critical**: Don't rely on hover for functionality. Touch users can't hover.

## Safe Areas: Handle the Notch

Modern phones have notches, rounded corners, and home indicators. Use `env()`:

```css
body {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

/* With fallback */
.footer {
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
}
```

**Enable viewport-fit** in your meta tag:
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

## Responsive Images: Get It Right

### srcset with Width Descriptors

```html
<img
  src="hero-800.jpg"
  srcset="
    hero-400.jpg 400w,
    hero-800.jpg 800w,
    hero-1200.jpg 1200w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Hero image"
>
```

**How it works**:
- `srcset` lists available images with their actual widths (`w` descriptors)
- `sizes` tells the browser how wide the image will display
- Browser picks the best file based on viewport width AND device pixel ratio

### Picture Element for Art Direction

When you need different crops/compositions (not just resolutions):

```html
<picture>
  <source media="(min-width: 768px)" srcset="wide.jpg">
  <source media="(max-width: 767px)" srcset="tall.jpg">
  <img src="fallback.jpg" alt="...">
</picture>
```

## Layout Adaptation Patterns

**Navigation**: Three stages—hamburger + drawer on mobile, horizontal compact on tablet, full with labels on desktop. **Tables**: Transform to cards on mobile using `display: block` and `data-label` attributes. **Progressive disclosure**: Use `<details>/<summary>` for content that can collapse on mobile.

## Testing: Don't Trust DevTools Alone

DevTools device emulation is useful for layout but misses:

- Actual touch interactions
- Real CPU/memory constraints
- Network latency patterns
- Font rendering differences
- Browser chrome/keyboard appearances

**Test on at least**: One real iPhone, one real Android, a tablet if relevant. Cheap Android phones reveal performance issues you'll never see on simulators.

---

**Avoid**: Desktop-first design. Device detection instead of feature detection. Separate mobile/desktop codebases. Ignoring tablet and landscape. Assuming all mobile devices are powerful.
