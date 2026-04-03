# Qualification and Handoff Matrix (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-sdr/references/qualification-and-handoff-matrix.md)

---


Use this file to define how the AI SDR decides what to do next.

## 1. Qualification inputs

### Required signal categories

- target role or buying influence
- company fit
- contact validity
- exclusion check passed

### Optional signal categories

- intent or timing signal
- recent company change
- technology fit
- engagement signal
- referral or social proximity signal

## 2. Sample score bands

Adjust these to the operator's context.

| Score band | Meaning | Default action |
| --- | --- | --- |
| 80-100 | strong fit | eligible for enrollment or immediate human review depending on motion |
| 50-79 | partial fit | manual review before enrollment |
| 0-49 | weak fit | do not enroll; nurture or suppress |

## 3. Disqualifiers

Do not enroll by default when any of these apply:

- outside target geography
- competitor, partner, or blocked account
- student, job seeker, or non-buyer persona
- invalid or unverifiable contact data
- prior opt-out or complaint
- account already active in sales cycle
- obvious mismatch to ICP

## 4. Reply routing model

| Reply class | Meaning | Required action | Owner | Suggested SLA |
| --- | --- | --- | --- | --- |
| Positive | asks for details, demo, or call | route to human quickly | AE or SDR owner | as fast as possible; define internal target |
| Neutral | mild curiosity, unclear intent | approved follow-up or human review | SDR owner | same day |
| Objection | budget, timing, existing tool, authority | approved playbook response or human review | SDR or AE owner | same day |
| Negative | not interested, wrong person | suppress or close out respectfully | SDR / ops | prompt |
| Compliance-sensitive | opt-out, complaint, legal/privacy concern | stop outreach and escalate | ops / compliance | immediate |

## 5. CRM transitions

Map each action to a state change.

Example model:

| Event | CRM update |
| --- | --- |
| enrolled | set lifecycle stage and owner |
| positive reply | create task and update lead status |
| meeting accepted | move to meeting stage |
| disqualified | record reason code |
| opt-out | mark do-not-contact and suppress |
| objection | create follow-up task with reason |

## 6. Handoff design rules

- one owner per handoff
- one canonical CRM state per reply outcome
- one place to record suppression
- one clear SLA for positive replies

## 7. Failure signs

Review this matrix when:

- reps reject too many booked meetings
- multiple owners think someone else is following up
- CRM status does not reflect the actual conversation state
- opt-out or complaint handling is inconsistent

## 8. Output artifact

A good operator deliverable includes:

- qualification criteria
- disqualifiers
- reply classes
- owner mapping
- CRM transitions
- handoff SLA
