# Validation Matrix (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/coding-guidelines/references/validation-matrix.md) · 🇪🇸 [es](../../../../es/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇫🇷 [fr](../../../../fr/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇩🇪 [de](../../../../de/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇮🇹 [it](../../../../it/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇷🇺 [ru](../../../../ru/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇯🇵 [ja](../../../../ja/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇰🇷 [ko](../../../../ko/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇸🇦 [ar](../../../../ar/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇮🇳 [hi](../../../../hi/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇮🇳 [in](../../../../in/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇹🇭 [th](../../../../th/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇻🇳 [vi](../../../../vi/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇮🇩 [id](../../../../id/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇲🇾 [ms](../../../../ms/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇳🇱 [nl](../../../../nl/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇵🇱 [pl](../../../../pl/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇸🇪 [sv](../../../../sv/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇳🇴 [no](../../../../no/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇩🇰 [da](../../../../da/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇫🇮 [fi](../../../../fi/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇵🇹 [pt](../../../../pt/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇷🇴 [ro](../../../../ro/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇭🇺 [hu](../../../../hu/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇧🇬 [bg](../../../../bg/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇸🇰 [sk](../../../../sk/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇮🇱 [he](../../../../he/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇵🇭 [phi](../../../../phi/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇨🇿 [cs](../../../../cs/skills_omni/coding-guidelines/references/validation-matrix.md) · 🇹🇷 [tr](../../../../tr/skills_omni/coding-guidelines/references/validation-matrix.md)

---


Use the narrowest relevant validation the repository already supports.

| Change type | Expected validation |
| --- | --- |
| Bug fix | Reproduction test or failing case first, then targeted regression checks |
| Small feature | Focused tests for new behavior, plus narrow lint/typecheck as relevant |
| Refactor | Before/after behavior checks, targeted tests, lint/typecheck if used locally |
| Dependency update | Targeted regression checks, lockfile consistency, dependency scanning when available |
| Config change | Narrow config validation, affected tests, and environment-specific sanity checks |
| Container change | Build validation if available, affected tests, and image/config scanning when available |
| IaC change | Format/validate/plan-equivalent checks if supported, plus config/security scanning when available |
| Test-only change | Run the affected tests and confirm the tests assert meaningful behavior |

## Notes

- Start small. Expand validation only when risk or repository policy requires it.
- Do not claim a full green build if you only ran targeted checks.
- If baseline validation is already failing, say so explicitly.
