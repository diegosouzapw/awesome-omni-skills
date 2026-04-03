# CLS playbook (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/core-web-vitals/references/cls-playbook.md) · 🇪🇸 [es](../../../../es/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇩🇪 [de](../../../../de/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇮🇹 [it](../../../../it/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇮🇳 [in](../../../../in/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇹🇭 [th](../../../../th/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇮🇩 [id](../../../../id/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇳🇴 [no](../../../../no/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇩🇰 [da](../../../../da/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇮🇱 [he](../../../../he/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/core-web-vitals/references/cls-playbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/core-web-vitals/references/cls-playbook.md)

---


## Good threshold

- Good: **0.1 or less**
- Needs improvement: **over 0.1 up to 0.25**
- Poor: **over 0.25**

## First question: what moved unexpectedly?

Confirm:

- which element shifted
- what caused it to shift
- whether the shift happened during load, hydration, route transition, or later UI insertion

## Common root causes

### Media without reserved space

Examples:

- images without dimensions
- videos or embeds without stable containers

Fixes:

- set `width` and `height`
- use `aspect-ratio`
- ensure responsive containers still reserve space

### Ads, embeds, or consent UI appearing late

Examples:

- cookie banners inserted at the top of the viewport
- ad slots collapsing when no ad is returned
- embeds resizing after load

Fixes:

- reserve space up front
- avoid collapsing reserved containers above the fold
- place late UI where it does not shift visible content

### Hydration and SPA transitions

Examples:

- skeleton differs from final content size
- route shell changes height after data arrives

Fixes:

- make placeholders match final layout dimensions
- reserve space for route content
- avoid inserting new top-of-page elements after navigation

### Font-related shifts

Examples:

- fallback font metrics differ from web font metrics
- text reflows after font swap

Fixes:

- use `font-display` intentionally
- adjust fallback metrics with CSS font metric overrides where needed

## Motion guidance

When animation is needed, prefer:

- `transform`
- `opacity`

Avoid animating layout-affecting properties when a non-layout alternative is feasible.
