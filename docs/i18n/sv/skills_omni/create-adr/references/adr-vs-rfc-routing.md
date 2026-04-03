# ADR vs RFC vs Technical Design Doc (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇪🇸 [es](../../../../es/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇫🇷 [fr](../../../../fr/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇩🇪 [de](../../../../de/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇮🇹 [it](../../../../it/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇷🇺 [ru](../../../../ru/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇯🇵 [ja](../../../../ja/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇰🇷 [ko](../../../../ko/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇸🇦 [ar](../../../../ar/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇮🇳 [hi](../../../../hi/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇮🇳 [in](../../../../in/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇹🇭 [th](../../../../th/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇻🇳 [vi](../../../../vi/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇮🇩 [id](../../../../id/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇲🇾 [ms](../../../../ms/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇳🇱 [nl](../../../../nl/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇵🇱 [pl](../../../../pl/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇸🇪 [sv](../../../../sv/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇳🇴 [no](../../../../no/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇩🇰 [da](../../../../da/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇫🇮 [fi](../../../../fi/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇵🇹 [pt](../../../../pt/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇷🇴 [ro](../../../../ro/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇭🇺 [hu](../../../../hu/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇧🇬 [bg](../../../../bg/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇸🇰 [sk](../../../../sk/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇮🇱 [he](../../../../he/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇵🇭 [phi](../../../../phi/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇨🇿 [cs](../../../../cs/skills_omni/create-adr/references/adr-vs-rfc-routing.md) · 🇹🇷 [tr](../../../../tr/skills_omni/create-adr/references/adr-vs-rfc-routing.md)

---


Use this guide before drafting anything.

## Choose an ADR when

- the decision has already been made or is being finalized
- the team needs a durable historical record
- future engineers will need to understand why the choice was made
- the artifact should be short, stable, and link to deeper material when necessary

## Choose an RFC when

- the decision is still open
- the team needs comparison, review, or approval
- stakeholders are still debating options
- the document is expected to change during feedback

## Choose a Technical Design Doc when

- the decision is already known, but implementation details are not
- the main need is architecture shape, interfaces, rollout, migrations, or execution planning
- the document needs operational detail beyond a concise decision record

## Fast routing table

| If the user says... | Use |
| --- | --- |
| "Help me decide" | RFC |
| "We decided; document it" | ADR |
| "Plan how to implement this" | Technical design doc |

## Warning signs that an ADR is the wrong tool

- unresolved option scoring
- approval-seeking tone
- long implementation sections
- detailed rollout plan
- task lists and milestones

If those dominate the draft, route away from ADR creation.
