# QA Sampling Playbook (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇪🇸 [es](../../../../es/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇩🇪 [de](../../../../de/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇮🇹 [it](../../../../it/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇮🇳 [in](../../../../in/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇹🇭 [th](../../../../th/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇮🇩 [id](../../../../id/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇳🇴 [no](../../../../no/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇩🇰 [da](../../../../da/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇮🇱 [he](../../../../he/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/lead-enrichment/examples/qa-sampling-playbook.md)

---


Use this before broad rollout of a new or revised enrichment workflow.

## Sample size

Start with a manual review sample large enough to include:

- different segments
- multiple providers
- records that passed and failed routing
- edge cases such as catch-all or conflicting-provider results

## QA checks

For each sampled record, review:

- company-domain correctness
- person-to-company match
- title accuracy
- whether the selected email is defensible
- whether verification class matches actual risk
- whether suppression state is respected
- whether route decision matches policy

## Record issues by type

| Issue type | Example | Action |
| --- | --- | --- |
| Wrong identity | wrong person at right company | tighten identity matching |
| Wrong company | title belongs to another org | strengthen domain/linkedin checks |
| Stale title | former role returned | prefer fresher source or re-verify |
| False confidence | marked safe but risky in context | tighten routing policy |
| Governance gap | no source or timestamp | add provenance columns |

## Exit criteria

Do not scale volume until:

- key fields are accurate enough for the use case
- routing mistakes are understood and reduced
- provenance is visible for important fields
- suppression and exclusion handling is verified
