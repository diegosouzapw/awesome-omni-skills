# Email Deliverability Runbook (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇪🇸 [es](../../../../es/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇩🇪 [de](../../../../de/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇮🇹 [it](../../../../it/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇮🇳 [in](../../../../in/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇹🇭 [th](../../../../th/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇮🇩 [id](../../../../id/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇳🇴 [no](../../../../no/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇩🇰 [da](../../../../da/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇮🇱 [he](../../../../he/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/solo-founder-gtm/references/email-deliverability-runbook.md)

---


Use this when outbound reply rates fall or spam placement increases.

## Check Authentication First

- SPF present and aligned
- DKIM enabled
- DMARC configured
- sending domain and reply handling are consistent

## Review Sending Behavior

- reduce volume if it increased sharply
- check bounce rate and complaint rate
- verify suppression lists are working
- confirm lists are targeted rather than broadly scraped

## Review Message Quality

- remove generic personalization
- avoid misleading subject lines
- reduce aggressive CTA density
- make sender identity and reason for contact clear

## Diagnosis Table

| Symptom | Likely cause | Safe fix |
| --- | --- | --- |
| high bounce rate | weak data quality or stale contacts | improve list quality, lower sends, remove weak records |
| good opens but few replies | weak targeting or generic value prop | tighten ICP, rewrite message around one pain point |
| spam placement | poor reputation, auth issues, sudden volume | fix auth, reduce volume, warm gradually |
| complaints or unsub spikes | misleading copy or bad fit | improve relevance, make opt-out obvious, suppress quickly |

## Escalate When

- domain reputation keeps deteriorating after fixes
- a provider flags the domain or mailbox
- complaint volume suggests a compliance issue rather than a copy issue
