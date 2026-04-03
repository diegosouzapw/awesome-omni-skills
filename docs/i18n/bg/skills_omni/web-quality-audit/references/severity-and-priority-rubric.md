# Severity and priority rubric (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇪🇸 [es](../../../../es/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇫🇷 [fr](../../../../fr/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇩🇪 [de](../../../../de/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇮🇹 [it](../../../../it/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇷🇺 [ru](../../../../ru/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇯🇵 [ja](../../../../ja/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇰🇷 [ko](../../../../ko/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇸🇦 [ar](../../../../ar/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇮🇳 [hi](../../../../hi/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇮🇳 [in](../../../../in/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇹🇭 [th](../../../../th/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇻🇳 [vi](../../../../vi/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇮🇩 [id](../../../../id/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇲🇾 [ms](../../../../ms/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇳🇱 [nl](../../../../nl/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇵🇱 [pl](../../../../pl/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇸🇪 [sv](../../../../sv/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇳🇴 [no](../../../../no/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇩🇰 [da](../../../../da/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇫🇮 [fi](../../../../fi/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇵🇹 [pt](../../../../pt/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇷🇴 [ro](../../../../ro/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇭🇺 [hu](../../../../hu/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇧🇬 [bg](../../../../bg/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇸🇰 [sk](../../../../sk/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇮🇱 [he](../../../../he/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇵🇭 [phi](../../../../phi/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇨🇿 [cs](../../../../cs/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md) · 🇹🇷 [tr](../../../../tr/skills_omni/web-quality-audit/references/severity-and-priority-rubric.md)

---


Use this rubric to keep prioritization consistent.

## Severity levels

| Severity | Meaning | Typical examples | Suggested action |
| --- | --- | --- | --- |
| Critical | Major failure affecting trust, access, conversion, or indexability | Broken keyboard path on core flow, important page blocked from indexing, severe mixed-content or HTTPS failure | Fix immediately |
| High | Significant user or business impact | Failing CWV on key templates, inaccessible form errors, unstable checkout layout, canonical errors on important pages | Fix before launch or in next urgent cycle |
| Medium | Material quality issue with narrower scope or less severe impact | Metadata duplication, moderate console errors, inefficient LCP resource loading on secondary templates | Fix in planned sprint |
| Low | Improvement opportunity or hygiene issue | Minor audits, small markup issues, low-impact optimizations | Fix when practical |

## Priority modifiers

Increase priority when:

- issue affects a critical user journey
- issue appears template-wide
- issue harms accessibility or indexability
- issue is confirmed by multiple evidence sources
- issue has low implementation effort and high payoff

Decrease priority when:

- issue is isolated to a low-value page
- evidence is weak or inconsistent
- remediation risk is high and benefit is marginal
- issue is primarily cosmetic
