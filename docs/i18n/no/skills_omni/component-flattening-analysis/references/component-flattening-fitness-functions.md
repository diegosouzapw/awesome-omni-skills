# Component Flattening Fitness Functions (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇪🇸 [es](../../../../es/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇩🇪 [de](../../../../de/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇮🇹 [it](../../../../it/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇮🇳 [in](../../../../in/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇹🇭 [th](../../../../th/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇮🇩 [id](../../../../id/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇳🇴 [no](../../../../no/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇩🇰 [da](../../../../da/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇮🇱 [he](../../../../he/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-flattening-analysis/references/component-flattening-fitness-functions.md)

---


Use these patterns after cleanup to prevent regressions. Keep rule scope narrow so valid entrypoints are not flagged.

## Semgrep-style ideas

### 1. Flag implementation files in forbidden parent roots

Use only when your repo has a clear convention such as `src/features/<feature>/` containing only entrypoints and child folders.

Example concept:

- target implementation files in feature roots
- exclude `index.*`, `Page.*`, `Layout.*`, `route.*`, `main.*`, and other explicit entrypoints
- exclude compatibility re-export files

### 2. Flag deep imports that bypass intended public surfaces

Useful after extracting shared code or stabilizing barrels.

Example concept:

- disallow imports from internal implementation paths across sibling features
- allow imports through the documented public entrypoint only

## Lint/import ideas

- enable unresolved import detection
- consider restricted import patterns for internal paths
- enforce consistent use of public entrypoints where the architecture requires it

## Anti-noise guidance

Do not enforce blanket rules like "all parent-level files are invalid."

Instead:

- scope to implementation file patterns
- exempt route/layout/bootstrap/entrypoint files
- exempt barrels and package-export files
- start in warning mode until false positives are understood

## Adoption plan

1. Fix current hierarchy issues first.
2. Add one narrow rule.
3. Observe false positives.
4. Refine exclusions.
5. Only then consider making the rule blocking.
