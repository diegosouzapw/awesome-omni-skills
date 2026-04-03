# Decision Matrix Template (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/create-rfc/references/decision-matrix-template.md) · 🇪🇸 [es](../../../../es/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇫🇷 [fr](../../../../fr/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇩🇪 [de](../../../../de/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇮🇹 [it](../../../../it/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇷🇺 [ru](../../../../ru/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇯🇵 [ja](../../../../ja/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇰🇷 [ko](../../../../ko/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇸🇦 [ar](../../../../ar/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇮🇳 [hi](../../../../hi/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇮🇳 [in](../../../../in/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇹🇭 [th](../../../../th/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇻🇳 [vi](../../../../vi/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇮🇩 [id](../../../../id/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇲🇾 [ms](../../../../ms/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇳🇱 [nl](../../../../nl/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇵🇱 [pl](../../../../pl/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇸🇪 [sv](../../../../sv/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇳🇴 [no](../../../../no/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇩🇰 [da](../../../../da/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇫🇮 [fi](../../../../fi/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇵🇹 [pt](../../../../pt/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇷🇴 [ro](../../../../ro/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇭🇺 [hu](../../../../hu/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇧🇬 [bg](../../../../bg/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇸🇰 [sk](../../../../sk/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇮🇱 [he](../../../../he/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇵🇭 [phi](../../../../phi/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇨🇿 [cs](../../../../cs/skills_omni/create-rfc/references/decision-matrix-template.md) · 🇹🇷 [tr](../../../../tr/skills_omni/create-rfc/references/decision-matrix-template.md)

---


Use this template when the RFC needs a transparent comparison across weighted criteria.

## Scoring guidance

- Choose a simple scale such as 1-5.
- Define whether a higher score is always better.
- Keep weights simple and explain them briefly.
- Do not pretend the matrix is objective truth; it is a tool to support discussion.

## Template

| Criterion | Weight | Option A | Option B | Option C | Notes |
| --- | ---: | ---: | ---: | ---: | --- |
| Reliability | 5 |  |  |  |  |
| Operational complexity | 4 |  |  |  |  |
| Cost | 4 |  |  |  |  |
| Migration risk | 5 |  |  |  |  |
| Time to value | 3 |  |  |  |  |
| Security / compliance | 5 |  |  |  |  |

## Weighted totals

| Option | Weighted total | Summary |
| --- | ---: | --- |
| Option A |  |  |
| Option B |  |  |
| Option C |  |  |

## Interpretation prompts

- Which option wins on must-have criteria?
- Which option has the best total score?
- Are there any criteria where a lower-scoring total still hides an unacceptable risk?
- Does the recommendation match the matrix? If not, explain why.
