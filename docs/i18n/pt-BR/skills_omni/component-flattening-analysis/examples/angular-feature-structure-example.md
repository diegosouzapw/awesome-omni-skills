# Angular Feature Structure Example (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇪🇸 [es](../../../../es/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇩🇪 [de](../../../../de/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇮🇹 [it](../../../../it/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇮🇳 [in](../../../../in/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇹🇭 [th](../../../../th/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇮🇩 [id](../../../../id/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇳🇴 [no](../../../../no/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇩🇰 [da](../../../../da/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇮🇱 [he](../../../../he/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-flattening-analysis/examples/angular-feature-structure-example.md)

---


## Before

```text
src/app/orders/
├── orders.routes.ts
├── orders.component.ts
├── order-formatters.ts
├── create/
│   ├── create-order.component.ts
│   └── create-order.service.ts
└── history/
    └── order-history.component.ts
```

## Analysis

- `orders.routes.ts` is a routing surface, not orphaned implementation.
- `orders.component.ts` may be the feature shell component.
- `order-formatters.ts` is a strong shared-code candidate.
- `create/` and `history/` represent meaningful feature-area leaves.

## Recommendation

- Keep `orders.routes.ts` in place.
- Keep `orders.component.ts` if it acts as the feature shell.
- Move `order-formatters.ts` into a clearer shared location if desired:

```text
src/app/orders/
├── orders.routes.ts
├── orders.component.ts
├── shared/
│   └── order-formatters.ts
├── create/
│   ├── create-order.component.ts
│   └── create-order.service.ts
└── history/
    └── order-history.component.ts
```

## Avoid

- collapsing `create/` and `history/` into the parent merely to reduce nesting
- treating routing files as hierarchy violations
- flattening across Angular feature boundaries without architectural intent
