# Design Direction Summary Example (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇪🇸 [es](../../../../es/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇩🇪 [de](../../../../de/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇮🇹 [it](../../../../it/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇮🇳 [in](../../../../in/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇹🇭 [th](../../../../th/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇮🇩 [id](../../../../id/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇳🇴 [no](../../../../no/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇩🇰 [da](../../../../da/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇮🇱 [he](../../../../he/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/frontend-blueprint/examples/design-direction-summary-example.md)

---


## Project

Redesign a SaaS pricing page for a developer tools product.

## Approved Direction

- Mood: precise, premium, confident
- Visual tone: dark surfaces, restrained accent usage, generous spacing
- Key references applied:
  - Reference A: clear pricing hierarchy and billing toggle behavior
  - Reference B: stronger typography contrast and calmer card spacing
- Intentional departures:
  - use less visual noise than Reference A
  - improve contrast on secondary text and controls

## Token Candidates

- Primary brand: `#7c3aed`
- Accent: `#22c55e`
- Canvas: `#0b1020`
- Surface: `#121a2b`
- Text primary: `#f8fafc`
- Text secondary: `#94a3b8`
- Radius: medium-large
- Shadow: subtle, low blur on elevated cards
- Typography: strong heading sans, neutral body sans
- Motion: subtle hover only, disabled for reduced-motion

## Layout Notes

- 12-column marketing layout on wide screens
- stacked card layout on narrow screens
- pricing cards must still work inside narrower comparison layouts

## Approval

Approved for implementation in atomic steps:
1. token foundation
2. billing toggle and pricing cards
3. comparison table
4. FAQ and CTA
5. responsive and accessibility review
