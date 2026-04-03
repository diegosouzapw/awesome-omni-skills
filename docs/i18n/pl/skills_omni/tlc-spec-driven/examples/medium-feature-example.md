# Medium Feature Example (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/examples/medium-feature-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/examples/medium-feature-example.md)

---


## Request

"Add a status filter to the orders page so users can show only pending, shipped, or canceled orders."

## Right-sized approach

- Scope: medium
- Required artifact: brief spec
- Design: inline unless patterns are unclear
- Tasks: may stay implicit if execution remains straightforward

## Example brief spec

```md
# Feature: Orders status filter

## Summary
Add a status filter control to the orders page.

## Scope
- In scope: pending, shipped, canceled filters
- Out of scope: saved filter presets, multi-filter combinations

## Acceptance Criteria
- Users can choose All, Pending, Shipped, or Canceled.
- The order list updates to reflect the selected filter.
- Existing default behavior remains unchanged when All is selected.
```

## Inline design note

- Reuse the existing list-filter pattern used on the invoices page.
- Keep filtering server-side if the page already depends on query params.

## Verification

- Add or update targeted tests for filter behavior.
- Manually confirm the control updates the order list and preserves All as default.
