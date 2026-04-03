# Deliverability Readiness Checklist (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-sdr/references/deliverability-readiness-checklist.md)

---


Use this checklist before recommending an AI SDR email launch or scale-up.

## 1. Sender identity and authentication

Confirm all of the following are defined:

- sending domains identified
- mailbox owners identified
- SPF configured
- DKIM configured
- DMARC configured
- authentication alignment reviewed
- TLS supported by sending path

If any of the above is unknown, treat the program as not ready for scale.

## 2. Recipient-friendly controls

Confirm:

- unsubscribe process exists
- one-click unsubscribe support is planned where applicable
- suppression list process exists
- opt-out requests are routed and honored promptly
- complaint monitoring exists

## 3. List and data hygiene

Check:

- source lists are documented
- duplicates are controlled
- role accounts and weak-fit records are handled intentionally
- invalid or risky addresses are filtered
- bounce handling process exists

## 4. Volume discipline

Check:

- launch begins with a narrow ICP slice
- volume increases are staged
- mailbox-level and domain-level monitoring exists
- complaint and bounce spikes trigger pause conditions

Do not recommend aggressive scale on day one.

## 5. Monitoring metrics

Track at minimum:

- delivery rate
- bounce rate
- complaint rate
- unsubscribe rate
- positive reply rate
- handoff time to human

## 6. Pause conditions

Pause launch or expansion when any of the following occurs:

- authentication breaks or cannot be verified
- complaint trend worsens materially
- bounce rate spikes materially
- unsubscribe handling fails
- mailbox/domain reputation deteriorates

## Review packet evidence

Ask the operator to provide:

- sender domains in scope
- mailbox count and owners
- authentication status summary
- unsubscribe and suppression process summary
- recent deliverability metrics if any
- pilot volume plan

## Notes

This checklist is a strategic readiness aid, not a substitute for deliverability engineering or legal review.
