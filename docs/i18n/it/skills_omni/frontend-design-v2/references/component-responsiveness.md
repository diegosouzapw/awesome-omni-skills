# Component Responsiveness (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇪🇸 [es](../../../../es/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇫🇷 [fr](../../../../fr/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇩🇪 [de](../../../../de/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇮🇹 [it](../../../../it/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇷🇺 [ru](../../../../ru/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇯🇵 [ja](../../../../ja/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇰🇷 [ko](../../../../ko/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇸🇦 [ar](../../../../ar/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇮🇳 [hi](../../../../hi/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇮🇳 [in](../../../../in/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇹🇭 [th](../../../../th/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇻🇳 [vi](../../../../vi/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇮🇩 [id](../../../../id/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇲🇾 [ms](../../../../ms/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇳🇱 [nl](../../../../nl/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇵🇱 [pl](../../../../pl/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇸🇪 [sv](../../../../sv/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇳🇴 [no](../../../../no/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇩🇰 [da](../../../../da/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇫🇮 [fi](../../../../fi/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇵🇹 [pt](../../../../pt/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇷🇴 [ro](../../../../ro/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇭🇺 [hu](../../../../hu/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇧🇬 [bg](../../../../bg/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇸🇰 [sk](../../../../sk/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇮🇱 [he](../../../../he/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇵🇭 [phi](../../../../phi/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇨🇿 [cs](../../../../cs/skills_omni/frontend-design-v2/references/component-responsiveness.md) · 🇹🇷 [tr](../../../../tr/skills_omni/frontend-design-v2/references/component-responsiveness.md)

---


Use responsive behavior at two levels:

- **Viewport-level:** for major page layout changes
- **Container-level:** for reusable modules living in different parent widths

## Prefer Container Queries For

- cards
n- side panels
- dashboard tiles
- feature modules
- media/text split blocks
- toolbar and summary rows

## Why

Viewport breakpoints alone fail when a component is placed in:
- sidebars
- split panes
- nested grids
- resizable dashboards
- CMS regions with unpredictable width

## Practical Pattern

1. Give the component a query container.
2. Define compact, medium, and expanded internal layouts.
3. Let text wrap naturally before forcing hard truncation.
4. Adjust spacing, alignment, and density based on component width.

## Design Guidance

- Adapt hierarchy, not just dimensions.
- Move from multi-column to stacked layouts when the container shrinks.
- Shorten secondary metadata before hiding primary content.
- Keep critical actions visible.

## Avoid

- assuming every component is full-width
- shrinking text until the layout fits
- hiding important functionality on small screens
- using only viewport breakpoints for reusable modules

## Mobile Safety

Do not disable zoom with viewport settings. Small-screen adaptation should preserve readability and user control.
