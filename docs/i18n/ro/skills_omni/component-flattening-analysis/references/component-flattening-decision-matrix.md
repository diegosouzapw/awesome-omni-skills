# Component Flattening Decision Matrix (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇪🇸 [es](../../../../es/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇩🇪 [de](../../../../de/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇮🇹 [it](../../../../it/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇮🇳 [in](../../../../in/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇹🇭 [th](../../../../th/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇮🇩 [id](../../../../id/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇳🇴 [no](../../../../no/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇩🇰 [da](../../../../da/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇮🇱 [he](../../../../he/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-flattening-analysis/references/component-flattening-decision-matrix.md)

---


Use this matrix to compare strategies for each affected namespace or feature.

## Strategies

- **Consolidate down**: merge nested implementation into the parent because the parent is the real coherent component
- **Split up**: move parent implementation into clearer leaf modules because the parent mixes distinct responsibilities
- **Extract shared code**: move common logic into a shared utility area or shared submodule
- **No move**: retain the current structure because the parent-level file is intentional

## Scoring dimensions

Score each dimension as `low`, `medium`, or `high` impact.

| Dimension | Consolidate down | Split up | Extract shared code | No move |
| --- | --- | --- | --- | --- |
| Cohesion improvement | Good when child code is tightly related | Good when parent responsibilities are mixed | Good when common logic is reused | Best when structure is already intentional |
| API churn risk | Medium if public imports point to children | Medium to high if many new paths appear | Low to medium | Lowest |
| Alias / barrel rewrite effort | Medium | High | Medium | None |
| Lazy loading / routing risk | Medium if boundaries collapse | Medium to high | Low to medium | Lowest |
| Test impact | Low to medium | Medium to high | Medium | None |
| Migration effort | Low to medium | High | Medium | None |
| Best fit | Small related nested modules | Distinct functional areas | Shared validators/constants/helpers | Intentional shells or entrypoints |

## Selection guidance

### Prefer consolidate down when

- child modules are small and tightly related
- the parent is already the true user-facing component
- route or package boundaries are not tied to the child structure
- consumer impact is manageable

### Prefer split up when

- the parent contains clearly different behaviors
- keeping everything at the root harms comprehension
- each responsibility can become a stable leaf module
- the team accepts a broader refactor and verification effort

### Prefer extract shared code when

- root-level files are mostly validators, formatters, constants, or mappers
- multiple leaf modules consume the same helper logic
- you want better ownership without collapsing unrelated modules

### Prefer no move when

- the file is a barrel, public API, route shell, layout, bootstrap file, or package export surface
- moving it would mainly satisfy aesthetics rather than improve cohesion
- the public import path is more important than local folder purity

## Required output sentence

When recommending a strategy, include this sentence pattern:

> Recommended because it improves cohesion with the least harmful impact on imports, API surface, routing, and verification scope.
