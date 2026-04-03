# Risk Rating Guidance (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇪🇸 [es](../../../../es/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇫🇷 [fr](../../../../fr/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇩🇪 [de](../../../../de/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇮🇹 [it](../../../../it/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇷🇺 [ru](../../../../ru/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇯🇵 [ja](../../../../ja/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇰🇷 [ko](../../../../ko/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇸🇦 [ar](../../../../ar/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇮🇳 [hi](../../../../hi/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇮🇳 [in](../../../../in/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇹🇭 [th](../../../../th/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇻🇳 [vi](../../../../vi/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇮🇩 [id](../../../../id/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇲🇾 [ms](../../../../ms/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇳🇱 [nl](../../../../nl/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇵🇱 [pl](../../../../pl/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇸🇪 [sv](../../../../sv/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇳🇴 [no](../../../../no/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇩🇰 [da](../../../../da/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇫🇮 [fi](../../../../fi/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇵🇹 [pt](../../../../pt/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇷🇴 [ro](../../../../ro/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇭🇺 [hu](../../../../hu/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇧🇬 [bg](../../../../bg/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇸🇰 [sk](../../../../sk/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇮🇱 [he](../../../../he/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇵🇭 [phi](../../../../phi/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇨🇿 [cs](../../../../cs/skills_omni/security-threat-model/references/risk-rating-guidance.md) · 🇹🇷 [tr](../../../../tr/skills_omni/security-threat-model/references/risk-rating-guidance.md)

---


Use short qualitative ratings.

## Likelihood

- **Low**: requires unlikely preconditions, strong existing controls, or hard-to-reach entry points
- **Medium**: plausible with some effort or partial access
- **High**: realistic from the attacker starting position with limited friction

## Impact

- **Low**: minor information exposure or limited operational effect
- **Medium**: meaningful confidentiality, integrity, or availability harm to one component or user slice
- **High**: tenant break, sensitive data exposure, auth bypass, build compromise, or major service disruption

## Priority

Use likelihood and impact together, then adjust for strong evidenced controls or assumption sensitivity.

Examples:

- pre-auth remote code execution on an internet-facing service: often High or Critical
- token leakage in CI with package publish access: often High
- noisy low-sensitivity info leak with limited reach: often Low

## Rating Rule

Do not overfit precision. A short, defensible explanation is better than false numeric certainty.
