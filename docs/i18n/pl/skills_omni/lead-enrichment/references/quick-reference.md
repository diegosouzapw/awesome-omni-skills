# Quick Reference & Questions to Ask (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/lead-enrichment/references/quick-reference.md) · 🇪🇸 [es](../../../../es/skills_omni/lead-enrichment/references/quick-reference.md) · 🇫🇷 [fr](../../../../fr/skills_omni/lead-enrichment/references/quick-reference.md) · 🇩🇪 [de](../../../../de/skills_omni/lead-enrichment/references/quick-reference.md) · 🇮🇹 [it](../../../../it/skills_omni/lead-enrichment/references/quick-reference.md) · 🇷🇺 [ru](../../../../ru/skills_omni/lead-enrichment/references/quick-reference.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/lead-enrichment/references/quick-reference.md) · 🇯🇵 [ja](../../../../ja/skills_omni/lead-enrichment/references/quick-reference.md) · 🇰🇷 [ko](../../../../ko/skills_omni/lead-enrichment/references/quick-reference.md) · 🇸🇦 [ar](../../../../ar/skills_omni/lead-enrichment/references/quick-reference.md) · 🇮🇳 [hi](../../../../hi/skills_omni/lead-enrichment/references/quick-reference.md) · 🇮🇳 [in](../../../../in/skills_omni/lead-enrichment/references/quick-reference.md) · 🇹🇭 [th](../../../../th/skills_omni/lead-enrichment/references/quick-reference.md) · 🇻🇳 [vi](../../../../vi/skills_omni/lead-enrichment/references/quick-reference.md) · 🇮🇩 [id](../../../../id/skills_omni/lead-enrichment/references/quick-reference.md) · 🇲🇾 [ms](../../../../ms/skills_omni/lead-enrichment/references/quick-reference.md) · 🇳🇱 [nl](../../../../nl/skills_omni/lead-enrichment/references/quick-reference.md) · 🇵🇱 [pl](../../../../pl/skills_omni/lead-enrichment/references/quick-reference.md) · 🇸🇪 [sv](../../../../sv/skills_omni/lead-enrichment/references/quick-reference.md) · 🇳🇴 [no](../../../../no/skills_omni/lead-enrichment/references/quick-reference.md) · 🇩🇰 [da](../../../../da/skills_omni/lead-enrichment/references/quick-reference.md) · 🇫🇮 [fi](../../../../fi/skills_omni/lead-enrichment/references/quick-reference.md) · 🇵🇹 [pt](../../../../pt/skills_omni/lead-enrichment/references/quick-reference.md) · 🇷🇴 [ro](../../../../ro/skills_omni/lead-enrichment/references/quick-reference.md) · 🇭🇺 [hu](../../../../hu/skills_omni/lead-enrichment/references/quick-reference.md) · 🇧🇬 [bg](../../../../bg/skills_omni/lead-enrichment/references/quick-reference.md) · 🇸🇰 [sk](../../../../sk/skills_omni/lead-enrichment/references/quick-reference.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/lead-enrichment/references/quick-reference.md) · 🇮🇱 [he](../../../../he/skills_omni/lead-enrichment/references/quick-reference.md) · 🇵🇭 [phi](../../../../phi/skills_omni/lead-enrichment/references/quick-reference.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/lead-enrichment/references/quick-reference.md) · 🇨🇿 [cs](../../../../cs/skills_omni/lead-enrichment/references/quick-reference.md) · 🇹🇷 [tr](../../../../tr/skills_omni/lead-enrichment/references/quick-reference.md)

---


## Quick Reference

### Decision Framework: Which Waterfall to Build

```
Budget < $200/mo?
  -> Apollo free + Hunter free + Snov.io ($39)
  -> Manual verification with MillionVerifier

Budget $200-$1,000/mo?
  -> Clay Starter ($149) + Apollo Starter ($99) + FindyMail ($49)
  -> Automated waterfall in Clay

Budget $1,000-$5,000/mo?
  -> Clay Explorer ($349) + Apollo + ZoomInfo ($833/mo at $10K/yr)
  -> Full waterfall + intent scoring + Clay AI columns

Budget > $5,000/mo?
  -> Clay Pro ($800) + ZoomInfo + Bombora + Clearbit
  -> Enterprise waterfall + real-time intent routing + full automation
```

### Enrichment Checklist (Pre-Campaign)

1. [ ] Import leads to Clay or enrichment platform
2. [ ] Pre-filter: remove invalid domains, wrong industries, wrong geo
3. [ ] Run waterfall: primary > secondary > tertiary > LinkedIn
4. [ ] Verify all emails (confidence threshold >0.85)
5. [ ] Segment catch-all addresses into separate pool
6. [ ] Calculate ICP scores (firmographic + technographic + intent)
7. [ ] Route hot leads (>85 score) to SDR for immediate outreach
8. [ ] Route warm leads (70-84) to automated sequence
9. [ ] Push enriched data to CRM with source attribution
10. [ ] Set re-enrichment reminder at 90 days

### Key Metrics to Track

| Metric | Target | Frequency |
|---|---|---|
| Email coverage after waterfall | >85% | Per batch |
| Verified email rate | >90% of found | Per batch |
| Bounce rate on sends | <2% | Per campaign |
| ICP qualification rate | >50% of enriched | Per batch |
| Credits per qualified lead | <50 credits | Monthly |
| Cost per verified lead | <$1.00 | Monthly |
| Enrichment-to-meeting rate | >2% | Monthly |

---

## Questions to Ask

- What CRM do you use? (HubSpot, Salesforce, Pipedrive, other)
- How many leads per month need enrichment?
- What is your average deal size? (determines justified spend)
- Which enrichment providers do you already pay for?
- Are you selling in the US, EU, or globally? (compliance implications)
- What outreach tool sends the emails?
- Do you have intent data today?
- What is your current email bounce rate?
- Who owns enrichment operationally? (RevOps, Growth, Sales?)
- One-time list building or ongoing continuous enrichment?

---