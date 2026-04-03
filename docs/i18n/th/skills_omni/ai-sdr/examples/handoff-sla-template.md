# Handoff SLA Template (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-sdr/examples/handoff-sla-template.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-sdr/examples/handoff-sla-template.md)

---


Use this template to define response-time expectations once the AI SDR routes a prospect to a human.

## Example SLA table

| Event | Target owner | Target response time | Escalation if missed |
| --- | --- | --- | --- |
| Positive reply requesting details | SDR or AE queue | within 1 business hour | notify sales manager |
| Positive reply requesting meeting | SDR or AE queue | within 30 minutes during business hours | notify queue owner |
| Compliance-sensitive reply | legal, security, or designated reviewer | same business day | notify operations lead |
| Opt-out or removal request | suppression owner | as soon as possible under policy | notify compliance owner |
| Neutral follow-up request | SDR queue | within 1 business day | notify sales operations |

## Minimum fields to define

- who owns each queue
- business-hours assumption
- after-hours behavior
- escalation contact
- where the SLA timestamp is stored
- who reviews SLA misses weekly

## Notes

A fast AI SDR handoff is not enough if ownership is unclear. Every routed class needs one accountable human owner.
