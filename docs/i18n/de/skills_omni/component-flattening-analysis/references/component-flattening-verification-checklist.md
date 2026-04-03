# Component Flattening Verification Checklist (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-flattening-analysis/references/component-flattening-verification-checklist.md)

---


Use this checklist before and after file moves.

## Before changes

- [ ] Scope is limited to one feature, namespace, or module family
- [ ] Candidate files were classified by role, not just by path depth
- [ ] Public entrypoints and barrels were identified
- [ ] Path aliases and resolver rules were reviewed
- [ ] Package boundaries or published import paths were documented
- [ ] Dynamic imports, lazy loading, and route conventions were checked
- [ ] A rollback checkpoint exists

## During changes

- [ ] File moves are narrow and intentional
- [ ] Imports were updated in moved files
- [ ] Downstream consumers were updated
- [ ] Barrel exports and re-exports were updated
- [ ] Alias-based imports were revalidated
- [ ] Compatibility re-exports were added if required

## After changes

Run the smallest relevant repository commands.

- [ ] Typecheck passed
- [ ] Lint passed
- [ ] Affected unit tests passed
- [ ] Affected integration tests passed if applicable
- [ ] Build passed for the affected app/package
- [ ] Unresolved import checks passed
- [ ] Barrel or public export validation passed
- [ ] Route or lazy-loading behavior was smoke tested if applicable

## Minimum evidence to report

Include these in the final response when possible:

- commands run
- affected files moved
- imports/exports updated
- verification status
- known risks or deferred follow-up
