# Privacy and Data Handling (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇪🇸 [es](../../../../es/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇫🇷 [fr](../../../../fr/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇩🇪 [de](../../../../de/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇮🇹 [it](../../../../it/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇷🇺 [ru](../../../../ru/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇯🇵 [ja](../../../../ja/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇰🇷 [ko](../../../../ko/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇸🇦 [ar](../../../../ar/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇮🇳 [hi](../../../../hi/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇮🇳 [in](../../../../in/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇹🇭 [th](../../../../th/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇻🇳 [vi](../../../../vi/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇮🇩 [id](../../../../id/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇲🇾 [ms](../../../../ms/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇳🇱 [nl](../../../../nl/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇵🇱 [pl](../../../../pl/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇸🇪 [sv](../../../../sv/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇳🇴 [no](../../../../no/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇩🇰 [da](../../../../da/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇫🇮 [fi](../../../../fi/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇵🇹 [pt](../../../../pt/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇷🇴 [ro](../../../../ro/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇭🇺 [hu](../../../../hu/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇧🇬 [bg](../../../../bg/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇸🇰 [sk](../../../../sk/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇮🇱 [he](../../../../he/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇵🇭 [phi](../../../../phi/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇨🇿 [cs](../../../../cs/skills_omni/expansion-retention/references/privacy-and-data-handling.md) · 🇹🇷 [tr](../../../../tr/skills_omni/expansion-retention/references/privacy-and-data-handling.md)

---


Retention analysis often combines product telemetry, support data, billing events, and stakeholder information. Handle this data conservatively.

## Required boundaries

- use approved internal systems only
- minimize customer-level data copied into prompts, notes, or documents
- prefer aggregated, redacted, or pseudonymized examples
- limit access to people who need it for the task
- avoid exporting production data into unapproved tools

## Practical guidance for agents

Prefer:

- cohort summaries instead of raw account dumps
- redacted account examples instead of full transcripts
- role labels instead of named individuals when possible
- counts, trends, and percentages over sensitive raw records

Avoid:

- copying full support transcripts by default
- pasting billing details or payment identifiers into prompts
- sharing stakeholder personal details beyond what is necessary
- advising scraping or personal monitoring to detect champion changes

## Escalate when needed

Escalate to the user or an approved reviewer when:

- permissions are missing
- data classification is unclear
- regional privacy or consent rules are material to the recommendation
- the task appears to require legal interpretation
