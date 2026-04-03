# React Component Flattening Example (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇪🇸 [es](../../../../es/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇩🇪 [de](../../../../de/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇮🇹 [it](../../../../it/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇮🇳 [in](../../../../in/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇹🇭 [th](../../../../th/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇮🇩 [id](../../../../id/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇳🇴 [no](../../../../no/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇩🇰 [da](../../../../da/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇮🇱 [he](../../../../he/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-flattening-analysis/examples/react-component-flattening-example.md)

---


## Before

```text
src/features/checkout/
├── CheckoutPage.tsx
├── CheckoutForm.tsx
├── CheckoutValidator.ts
├── components/
│   ├── PaymentSection.tsx
│   └── AddressSection.tsx
└── hooks/
    └── useCheckout.ts
```

## Analysis

- `CheckoutPage.tsx` is probably the composition shell for the route.
- `CheckoutForm.tsx` may be either a valid root component or misplaced implementation depending on how it is consumed.
- `CheckoutValidator.ts` looks like shared utility logic rather than page-level composition.
- `components/` and `hooks/` are already leaf implementation areas.

## Safer recommendation

Do **not** flatten `components/` into the root just because the root also has code.

Instead:

- keep `CheckoutPage.tsx` if it is the route or composition shell
- move `CheckoutValidator.ts` into `shared/` if multiple files use it
- evaluate `CheckoutForm.tsx` by consumer graph:
  - keep it at root if it is the main feature-level component
  - move it under `components/` if it is just an implementation detail

## After

```text
src/features/checkout/
├── CheckoutPage.tsx
├── index.ts
├── shared/
│   └── CheckoutValidator.ts
├── components/
│   ├── CheckoutForm.tsx
│   ├── PaymentSection.tsx
│   └── AddressSection.tsx
└── hooks/
    └── useCheckout.ts
```

## Key lesson

A parent-level React file is not automatically misplaced. Composition shells and public exports are often correct at the feature root.
