# Privacy and Data Minimization Worksheet (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-sdr/references/privacy-and-data-minimization-worksheet.md)

---


Use this worksheet before enabling enrichment-heavy AI SDR workflows.

## Purpose

This worksheet helps operators review whether prospect data collection and use are scoped to the workflow's actual need.

It is not legal advice.

## Worksheet

### 1. Workflow purpose

- What decision or action is this data used for?
- Is the action qualification, routing, personalization, suppression, or reporting?
- Can the workflow work with fewer fields?

### 2. Data inventory

List each field used by the workflow.

| Field | Source | Why needed | Used by which step | Keep, reduce, or remove |
| --- | --- | --- | --- | --- |
| Name |  |  |  |  |
| Job title |  |  |  |  |
| Company |  |  |  |  |
| Work email |  |  |  |  |
| Industry |  |  |  |  |
| Employee count |  |  |  |  |
| Tech stack |  |  |  |  |
| Funding or hiring signal |  |  |  |  |

Add rows only for fields actually used.

### 3. Minimization review

For each field, ask:

- Is this necessary for qualification or routing?
- Is this necessary for approved personalization?
- Would a lower-sensitivity substitute work?
- Does the model need this field, or only the human reviewer?

### 4. Access review

Document:

- which systems can see the full record
- which systems only need a subset
- whether the reply-classification or drafting step can use fewer fields
- whether any field is exposed by default rather than by need

### 5. Retention and deletion prompts

Document:

- how long records remain in active workflows
- when disqualified or opted-out records are suppressed or removed
- who owns deletion or retention review

### 6. Review triggers

Escalate if:

- new enrichment fields are added without clear workflow need
- the workflow begins inferring sensitive traits
- new regions are added
- vendors gain access to more personal data than before
- data is reused outside the original workflow purpose

## Recommended operator output

Create a one-page note that states:

- fields used
- fields removed or reduced
- systems that can access the fields
- retention owner
- unresolved questions for privacy or legal review
