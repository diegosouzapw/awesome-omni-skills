# CLS patterns reference (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/core-web-vitals/references/cls-patterns.md) · 🇪🇸 [es](../../../../es/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇫🇷 [fr](../../../../fr/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇩🇪 [de](../../../../de/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇮🇹 [it](../../../../it/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇷🇺 [ru](../../../../ru/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇯🇵 [ja](../../../../ja/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇰🇷 [ko](../../../../ko/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇸🇦 [ar](../../../../ar/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇮🇳 [hi](../../../../hi/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇮🇳 [in](../../../../in/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇹🇭 [th](../../../../th/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇻🇳 [vi](../../../../vi/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇮🇩 [id](../../../../id/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇲🇾 [ms](../../../../ms/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇳🇱 [nl](../../../../nl/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇵🇱 [pl](../../../../pl/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇸🇪 [sv](../../../../sv/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇳🇴 [no](../../../../no/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇩🇰 [da](../../../../da/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇫🇮 [fi](../../../../fi/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇵🇹 [pt](../../../../pt/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇷🇴 [ro](../../../../ro/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇭🇺 [hu](../../../../hu/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇧🇬 [bg](../../../../bg/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇸🇰 [sk](../../../../sk/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇮🇱 [he](../../../../he/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇵🇭 [phi](../../../../phi/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇨🇿 [cs](../../../../cs/skills_omni/core-web-vitals/references/cls-patterns.md) · 🇹🇷 [tr](../../../../tr/skills_omni/core-web-vitals/references/cls-patterns.md)

---


CLS is about unexpected layout movement.

## High-frequency causes

### Images and media without reserved space

Use intrinsic `width` and `height` or a stable `aspect-ratio`.

### Ads, embeds, and iframes

Reserve a stable container before content loads. Avoid collapsing and expanding slots unpredictably.

### Injected UI above visible content

Common offenders:

- consent banners
- promo bars
- notifications
- personalization modules

Prefer overlays, reserved regions, or insertion below the viewport when appropriate.

### Hydration and SPA route transitions

Shifts often happen when placeholder layout does not match final rendered layout.

Check:

- route shell dimensions
- skeletons that do not match final content size
- late client-only content above the fold

### Font metric mismatch

`font-display` alone may not fully solve CLS.

If fallback and final fonts differ materially, use metric overrides such as:

- `size-adjust`
- `ascent-override`
- `descent-override`
- `line-gap-override`

### Animations affecting layout

Prefer `transform` and `opacity` when the goal is motion without document reflow.

## Debugging tips

- inspect layout shift records and source nodes
- distinguish initial-load shifts from post-load shifts
- check whether shifts follow route changes or user flows not covered by initial-page audits
- remember that expected user-initiated movement is handled differently from unexpected shifts
