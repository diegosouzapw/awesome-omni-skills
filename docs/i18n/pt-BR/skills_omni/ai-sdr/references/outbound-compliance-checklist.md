# Outbound Compliance Checklist (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-sdr/references/outbound-compliance-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-sdr/references/outbound-compliance-checklist.md)

---


Use this checklist to frame operational review before launching or expanding AI SDR outreach.

## Important note

This file is not legal advice. It is a practical review aid for operators. If obligations are unclear for a region, channel, or audience, escalate to qualified legal or compliance reviewers.

## Review questions

### 1. Geography and channel

Document:

- target countries or regions
- channels in scope: email, LinkedIn, SMS, phone, mixed
- whether the workflow is expanding into a new region or channel

### 2. Sender identification and opt-out handling

Confirm that the workflow has:

- accurate sender identification
- non-deceptive message framing
- a working opt-out process
- suppression handling that takes effect promptly
- ownership for suppression list maintenance

### 3. Third-party accountability

If using vendors or contractors, confirm:

- who is accountable for outreach behavior
- who owns suppression and deletion requests
- who reviews vendor claims about compliance
- how incidents are escalated

### 4. Regional review triggers

Escalate for review if any of the following are true:

- launching into a new country or region
- changing channel from email to SMS or phone
- enriching with additional personal data fields
- automating customer-facing replies beyond approved templates
- sending on behalf of multiple brands or domains

### 5. Message transparency and AI use

For customer-facing AI workflows, review whether:

- escalation to a human is possible
- sensitive messages require approval
- records of rules and approvals are retained
- the operator should disclose AI assistance under applicable policy or law

### 6. Opt-out and suppression operations

Document:

- where opt-outs are received
- how quickly suppression is applied
- whether suppression syncs across tools
- who verifies that re-enrollment is blocked

## No-launch blockers

Treat these as blockers until resolved:

- unclear opt-out process
- no owner for suppression handling
- unclear sender identity
- unresolved regional review questions
- customer-facing automation with no escalation path
- vendor assurances accepted without internal review

## Output expected from the operator

Produce a short review note with:

- region and channel in scope
- known obligations to verify
- open questions for review
- owner for suppression, escalation, and incident handling
- launch recommendation: go, no-go, or go-with-conditions
