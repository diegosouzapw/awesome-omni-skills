# Example: Lightweight Context Map (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇪🇸 [es](../../../../es/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇩🇪 [de](../../../../de/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇮🇹 [it](../../../../it/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇮🇳 [in](../../../../in/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇹🇭 [th](../../../../th/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇮🇩 [id](../../../../id/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇳🇴 [no](../../../../no/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇩🇰 [da](../../../../da/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇮🇱 [he](../../../../he/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/domain-identification-grouping/examples/context-map-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/domain-identification-grouping/examples/context-map-example.md)

---


## Domain catalog

| Domain | Business capability | Owner/steward | Data ownership notes | Integration notes |
| --- | --- | --- | --- | --- |
| Ticketing | ticket lifecycle and support operations | Support Engineering | owns ticket status and assignment rules | publishes ticket events |
| Customer | customer profile and contracts | Customer Platform | owns customer profile and contract invariants | provides customer reference data |
| Reporting | analytics and business reports | Data Products | derived views only | consumes ticket and customer data |

## Relationships

| From domain | To domain | Relationship type | What flows across the boundary | Notes |
| --- | --- | --- | --- | --- |
| Ticketing | Customer | upstream/downstream | customer reference reads | ticket creation needs customer identity |
| Reporting | Ticketing | downstream consumer | report extracts, events, or replicated data | reporting should not own ticket policy |
| Reporting | Customer | downstream consumer | customer attributes for reports | treat as read-oriented dependency |
| Ticketing | Shared notification capability | infrastructure dependency | outbound notifications | not a business domain relationship |

## Open questions

- Should billing remain inside Customer or split into a separate Financial domain later?
- Are notification templates business-owned per domain or centrally managed?
