# Outbound Deliverability Basics (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇪🇸 [es](../../../../es/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇫🇷 [fr](../../../../fr/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇩🇪 [de](../../../../de/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇮🇹 [it](../../../../it/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇷🇺 [ru](../../../../ru/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇯🇵 [ja](../../../../ja/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇰🇷 [ko](../../../../ko/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇸🇦 [ar](../../../../ar/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇮🇳 [hi](../../../../hi/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇮🇳 [in](../../../../in/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇹🇭 [th](../../../../th/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇻🇳 [vi](../../../../vi/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇮🇩 [id](../../../../id/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇲🇾 [ms](../../../../ms/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇳🇱 [nl](../../../../nl/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇵🇱 [pl](../../../../pl/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇸🇪 [sv](../../../../sv/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇳🇴 [no](../../../../no/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇩🇰 [da](../../../../da/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇫🇮 [fi](../../../../fi/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇵🇹 [pt](../../../../pt/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇷🇴 [ro](../../../../ro/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇭🇺 [hu](../../../../hu/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇧🇬 [bg](../../../../bg/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇸🇰 [sk](../../../../sk/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇮🇱 [he](../../../../he/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇵🇭 [phi](../../../../phi/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇨🇿 [cs](../../../../cs/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md) · 🇹🇷 [tr](../../../../tr/skills_omni/solo-founder-gtm/references/outbound-deliverability-basics.md)

---


This is a GTM hygiene checklist, not a full deliverability manual.

## Before Sending Cold Outreach

- [ ] SPF is configured for the sending domain.
- [ ] DKIM is configured and passing.
- [ ] DMARC is configured.
- [ ] Sender identity is truthful and consistent.
- [ ] Unsubscribe handling exists and is tested.
- [ ] Suppression handling exists and is respected.
- [ ] Sending volume starts low and increases gradually.
- [ ] ICP targeting is narrow enough that the message is relevant.

## Common Failure Patterns

### Low reply rate, normal deliverability

Usually a targeting or message problem before a technical one.

### Bounces or spam placement

Check authentication, list quality, send volume, and domain reputation.

### Positive opens, no meaningful replies

The first line may be personalized, but the offer is generic or irrelevant.

## Practical Rules

- do not scale volume before message-market fit is visible
- do not treat warmup or tooling as proof of compliance or inbox placement
- keep outreach relevance higher than send volume
- if the founder cannot process replies and follow-up, reduce sending until they can

## Escalate When

Escalate to a dedicated deliverability or email operations skill if the problem requires mailbox-provider remediation, domain reputation recovery, or technical mail infrastructure debugging.
