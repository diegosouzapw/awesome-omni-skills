# Responsive Component Patterns (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇪🇸 [es](../../../../es/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇫🇷 [fr](../../../../fr/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇩🇪 [de](../../../../de/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇮🇹 [it](../../../../it/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇷🇺 [ru](../../../../ru/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇯🇵 [ja](../../../../ja/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇰🇷 [ko](../../../../ko/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇸🇦 [ar](../../../../ar/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇮🇳 [hi](../../../../hi/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇮🇳 [in](../../../../in/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇹🇭 [th](../../../../th/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇻🇳 [vi](../../../../vi/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇮🇩 [id](../../../../id/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇲🇾 [ms](../../../../ms/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇳🇱 [nl](../../../../nl/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇵🇱 [pl](../../../../pl/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇸🇪 [sv](../../../../sv/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇳🇴 [no](../../../../no/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇩🇰 [da](../../../../da/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇫🇮 [fi](../../../../fi/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇵🇹 [pt](../../../../pt/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇷🇴 [ro](../../../../ro/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇭🇺 [hu](../../../../hu/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇧🇬 [bg](../../../../bg/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇸🇰 [sk](../../../../sk/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇮🇱 [he](../../../../he/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇵🇭 [phi](../../../../phi/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇨🇿 [cs](../../../../cs/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md) · 🇹🇷 [tr](../../../../tr/skills_omni/frontend-design-v2/examples/responsive-component-patterns.md)

---


## Pattern 1: Analytics panel

Use container queries so the panel adapts inside a wide dashboard region or a narrow sidebar.

### Compact container
- stack title, summary, and action
- reduce secondary metadata
- move supporting actions below primary content

### Medium container
- allow two-column internal layout
- keep action row aligned with summary

### Expanded container
- introduce richer comparison layout
- restore secondary metadata and annotations

## Pattern 2: Feature card group

Avoid identical cards with fixed internals.

Instead:
- let card density vary by available width
- promote one card as the anchor
- reduce decorative assets in narrower containers
- keep headings readable before preserving illustration size

## Pattern 3: Media/text split block

At narrow widths:
- stack media and text
- shorten supporting copy
- keep CTA visible without forcing the media first

At wider widths:
- introduce asymmetry intentionally
- preserve reading order in the DOM even when the composition becomes more expressive
