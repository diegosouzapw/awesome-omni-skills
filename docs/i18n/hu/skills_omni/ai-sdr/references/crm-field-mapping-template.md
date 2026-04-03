# CRM Field Mapping Template (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-sdr/references/crm-field-mapping-template.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-sdr/references/crm-field-mapping-template.md)

---


Use this template to map AI SDR decisions into explicit CRM state transitions.

## Purpose

Avoid ambiguous routing, duplicate ownership, and inconsistent lifecycle updates.

## Core fields to define

| Field | Definition | Allowed values | Owner |
| --- | --- | --- | --- |
| Lifecycle stage | Global funnel stage |  |  |
| Lead status | Current outreach or qualification state |  |  |
| AI qualification band | Score or band used by the workflow |  |  |
| Reply class | Positive, neutral, objection, negative, compliance-sensitive |  |  |
| Disqualification reason | Why a lead is excluded |  |  |
| Current owner | Human owner of next action |  |  |
| Handoff timestamp | When AI routed to human |  |  |
| SLA due timestamp | When follow-up is due |  |  |
| Suppression status | Whether the lead must not be contacted |  |  |

## State transition table

| Trigger | AI action | CRM update | New owner | SLA |
| --- | --- | --- | --- | --- |
| Tier 1 fit, no disqualifier | enroll or queue for review |  |  |  |
| Positive reply | route to human |  |  |  |
| Neutral reply | approved follow-up or review |  |  |  |
| Objection reply | route by playbook |  |  |  |
| Negative reply | suppress |  |  |  |
| Compliance-sensitive reply | escalate |  |  |  |

## Duplicate and sync review

Document:

- which system is source of truth
- how duplicates are detected
- whether multiple tools can create or update the same record
- which events should never create a new record

## Minimum launch condition

Do not scale until each reply class maps to:

- one state transition
- one owner
- one SLA expectation
