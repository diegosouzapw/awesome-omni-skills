# Contact Verification and Routing Checklist (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/lead-enrichment/references/contact-verification-and-routing-checklist.md)

---


Use this before routing contacts to CRM or outbound systems.

## Verification checks

- [ ] Email syntax valid
- [ ] Domain has valid MX / mail handling
- [ ] Verification result is recent enough for policy
- [ ] Catch-all status evaluated
- [ ] Role-account status evaluated
- [ ] Risk classification assigned

## Eligibility checks

- [ ] Suppression / opt-out state known
- [ ] Do-not-contact rules applied
- [ ] Workflow use case allows outreach to this record class
- [ ] No stronger first-party value would be overwritten incorrectly

## Routing outcomes

### Route to approved outbound

Use only if:

- verification is recent
- not suppressed
- not invalid
- not high-risk beyond policy

### Route to CRM only

Use if:

- useful for account intelligence or future review
- not approved for direct outreach yet

### Hold for manual review

Use if:

- provider disagreement is material
- verification is borderline
- title/company match appears inconsistent

### Reject

Use if:

- invalid
- suppressed
- disallowed by policy
- no defensible provenance for key routing fields
