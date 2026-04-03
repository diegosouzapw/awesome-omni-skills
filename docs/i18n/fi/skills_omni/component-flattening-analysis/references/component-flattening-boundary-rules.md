# Component Flattening Boundary Rules (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇪🇸 [es](../../../../es/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇩🇪 [de](../../../../de/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇮🇹 [it](../../../../it/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇮🇳 [in](../../../../in/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇹🇭 [th](../../../../th/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇮🇩 [id](../../../../id/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇳🇴 [no](../../../../no/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇩🇰 [da](../../../../da/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇮🇱 [he](../../../../he/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-flattening-analysis/references/component-flattening-boundary-rules.md)

---


Use these rules before calling a file "orphaned" or recommending a move.

## Classification order

Review candidate files in this order:

1. Is it a package or feature entrypoint?
2. Is it a barrel or re-export surface?
3. Is it a route, layout, page, or composition shell?
4. Is it framework bootstrap or registration code?
5. Is it shared utility code?
6. Is it true misplaced implementation?
7. If unclear, mark `needs manual review`.

## Usually keep in place

These files often belong at a parent or root level even when child folders exist:

- `index.ts`, `index.js`, or other barrel files
- package entry files referenced by package `exports`
- route shells, layouts, pages, and top-level composition components
- framework bootstrap files
- feature entrypoints that intentionally coordinate child components
- compatibility re-export files preserved for public imports

## Usually consider moving

These files are stronger candidates for flattening or extraction:

- implementation classes used only by one child component
- parent-level helpers that are really shared utilities
- validators, formatters, mappers, and constants mixed into a parent implementation area without clear ownership
- domain logic grouped in a parent folder only because structure drift accumulated over time

## Labels to use

- `misplaced implementation`
- `shared utility`
- `public API surface`
- `composition / route / layout shell`
- `bootstrap / framework entrypoint`
- `needs manual review`

## Red flags that require manual review

Mark `needs manual review` when any of these apply:

- dynamic imports or generated routes depend on file location
- imports are mostly alias-based and unresolved
- the file is externally consumed through published paths
- package `exports` or monorepo boundaries are involved
- framework registration or decorators imply location-sensitive behavior
- the file mixes entrypoint and implementation responsibilities

## Rule of thumb

A parent-level file is not automatically wrong. It is only a flattening candidate when moving it improves cohesion without breaking intentional API, routing, bootstrap, or packaging behavior.
