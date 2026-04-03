# Architecture Pre-mortem Example (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇪🇸 [es](../../../../es/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇩🇪 [de](../../../../de/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇮🇹 [it](../../../../it/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇮🇳 [in](../../../../in/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇹🇭 [th](../../../../th/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇮🇩 [id](../../../../id/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇳🇴 [no](../../../../no/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇩🇰 [da](../../../../da/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇮🇱 [he](../../../../he/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/the-fool/examples/architecture-premortem-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/the-fool/examples/architecture-premortem-example.md)

---


## User request

> Challenge our plan to migrate a monolith to microservices next quarter.

## Critique excerpt

**Steelmanned thesis:**  
You believe decomposing the monolith into independently deployable services will reduce release contention, improve fault isolation, and let multiple teams ship faster, and that the organization can absorb the migration cost next quarter.

**Mode used:**  
Find the Failure Modes

**Failure narrative 1: Migration Halfway House**  
- **Trigger:** Two services are extracted before deployment and ownership boundaries are stable.
- **Failure chain:** Teams now change both the monolith and new services for the same feature; synchronous dependencies grow; deployment coordination becomes harder than before.
- **Detection signal:** Shared release trains persist after the first extractions; cross-repo changes increase instead of decreasing.
- **Blast radius:** Engineering throughput, incident recovery, and ownership clarity all worsen.

**Failure narrative 2: Data Consistency Crisis**  
- **Trigger:** Business workflows assume immediate consistency across newly separated services.
- **Failure chain:** Event timing gaps create inventory errors and duplicate operations; customer support load spikes; trust drops.
- **Detection signal:** Reconciliation jobs and manual corrections increase during pilot rollout.
- **Blast radius:** Revenue leakage, support cost, and leadership confidence.

**Confidence:**  
MEDIUM

**Next validation action:**  
Validate one bounded-context pilot and measure whether release independence actually improves before broader decomposition.
