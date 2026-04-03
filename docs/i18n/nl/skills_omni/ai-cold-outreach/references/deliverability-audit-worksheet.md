# Deliverability Audit Worksheet (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-cold-outreach/references/deliverability-audit-worksheet.md)

---


Use this worksheet before launch, after major changes, and whenever inbox placement worsens.

## 1. Campaign identity

- Campaign name:
- Owner:
- Sending platform:
- Target geography:
- Audience type:
- Planned daily volume:
- Domain(s) in use:
- Mailboxes in use:

## 2. Go / no-go launch checks

Mark each item:

- [ ] Sending domain ownership is confirmed
- [ ] Mailbox owner or admin is identified
- [ ] SPF record exists
- [ ] DKIM signing is enabled
- [ ] DMARC record exists
- [ ] From domain alignment is understood
- [ ] Reply mailbox is monitored
- [ ] Unsubscribe / suppression process exists
- [ ] Contact list was verified recently
- [ ] Bounce and complaint owner is assigned

If any item is missing, do not recommend scale.

## 3. Authentication checks

### SPF
- Record present?
- Includes the actual sending service?
- Any known forwarding caveats?
- Notes:

### DKIM
- Signing enabled?
- Selector known?
- Failing or missing signatures observed?
- Notes:

### DMARC
- Record present?
- Policy level: `none` / `quarantine` / `reject`
- Reporting mailbox configured?
- Alignment issues known?
- Notes:

### Domain alignment
- Visible From domain:
- Envelope/mail-from domain:
- DKIM signing domain:
- Alignment confidence: high / medium / low

### PTR / reverse DNS
- Managed by sending provider?
- Any mismatch or unknown ownership?
- Notes:

## 4. Message hygiene checks

- [ ] First touch has no unnecessary links
- [ ] First touch has no images
- [ ] First touch has no attachments
- [ ] Only one CTA appears per email
- [ ] Sender identity is clear
- [ ] Claims are specific and supportable
- [ ] Unsubscribe path is defined for the campaign type

## 5. List quality checks

- Source of contacts:
- Date of last verification:
- Verification tool or method:
- Catch-all handling policy:
- Suppression list source(s):
- High-risk segments or imports:

## 6. Monitoring checks

- Bounce rate monitor exists
- Complaint / spam-rate monitor exists
- Reply-owner assigned
- Unsubscribe-owner assigned
- Gmail Postmaster / equivalent reviewed if available
- DMARC aggregate reports reviewed if policy is tightening

## 7. Incident triggers

Pause or reduce volume if any of these occur:

- bounce rate rises above internal safe range
- spam complaints increase materially
- Gmail/Yahoo placement degrades sharply
- unsubscribes are not being processed reliably
- authentication breaks after a platform or DNS change

## 8. Summary

- Overall status: go / revise / pause
- Highest-risk issue:
- Immediate next action:
- Escalation owner:
