# Monorepo Component Sizing Example (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇪🇸 [es](../../../../es/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇩🇪 [de](../../../../de/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇮🇹 [it](../../../../it/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇮🇳 [in](../../../../in/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇹🇭 [th](../../../../th/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇮🇩 [id](../../../../id/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇳🇴 [no](../../../../no/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇩🇰 [da](../../../../da/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇮🇱 [he](../../../../he/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-identification-sizing/examples/monorepo-component-sizing-example.md)

---


## Request

Analyze this monorepo by workspace package first. Exclude generated code, vendored dependencies, tests, docs, and build output. Do not combine frontend and backend packages into a single recommendation until separate inventories are produced.

## Recommended approach

1. Identify workspace package roots from repository manifests.
2. Produce one inventory row per package.
3. Split results by family such as `apps/*`, `packages/*`, `services/*` if needed.
4. Flag shared libraries that distort ranking but are not extraction candidates on their own.
5. Only run a second pass inside the largest packages after package-level ranking is complete.

## Common pitfalls

- Treating every nested folder as a component before package boundaries are established
- Ranking frontend and backend packages together without subsystem segmentation
- Counting generated SDKs inside shared packages
- Interpreting a large shared utility package as an obvious extraction candidate without dependency analysis

## Example finding language

- `packages/reporting` is large enough to justify a second-pass subcomponent inventory.
- `packages/shared-ui` is large but may reflect legitimate cross-app reuse rather than a decomposition target.
- `services/billing-api` and `apps/web` should not be directly compared for extraction priority until frontend and backend inventories are separately reviewed.
