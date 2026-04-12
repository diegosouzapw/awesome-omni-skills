---
name: "lead-enrichment"
description: "Lead enrichment workflow skill. Use this skill when a user needs to design or audit enrichment waterfalls, define ICP scoring, improve contact data quality, normalize CRM fields, verify outreach readiness, or choose providers such as Clay, Apollo, ZoomInfo, Hunter, or similar tools. Do not use it for software implementation, scraping workarounds, or jurisdiction-specific legal advice."
version: "0.0.1"
category: "development"
tags:
  - "lead-enrichment"
  - "data-enrichment"
  - "clay"
  - "icp-scoring"
  - "waterfall-enrichment"
  - "contact-verification"
  - "crm-hygiene"
  - "data-quality"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "lead-enrichment"
family_name: "Lead Enrichment Skill"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/lead-enrichment"
upstream_skill: "skills/lead-enrichment"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "lead-enrichment"
---

# Lead Enrichment Skill

## Overview

Use this skill to plan, audit, or improve B2B lead enrichment workflows that combine provider waterfalls, ICP scoring, contact verification, CRM writeback rules, and outreach-readiness checks.

This skill preserves the upstream intent of the imported lead-enrichment workflow, but reorganizes it into an operator-friendly execution kit. It is designed for agents helping with workflow design, decision support, QA, and handoff readiness rather than code implementation.

The main outcome should be one or more of the following:

- an enrichment workflow design
- a provider waterfall recommendation
- an ICP scoring framework with calibration notes
- a CRM field-mapping and overwrite policy
- a verification and outbound-readiness gate
- a troubleshooting packet for coverage, duplicates, cost, or deliverability issues

## When to Use This Skill

Use this skill when the user wants to:

- build or repair a lead enrichment waterfall
- design a Clay table for enrichment, scoring, and routing
- compare providers such as Clay, Apollo, ZoomInfo, Hunter, Dropcontact, Findymail, or similar enrichment tools
- define or recalibrate ICP scoring based on firmographic, technographic, and intent signals
- improve contact data quality, deduplication, freshness, and CRM hygiene
- set verification thresholds before outbound outreach
- reduce bounce risk by adding sender-readiness and suppression checks
- document compliance-related operating controls such as lawful basis, minimization, provenance, retention, or approved-provider review

Do not use this skill when the task is primarily:

- software implementation, API coding, browser automation, or system architecture
- scraping or bypassing platform/provider terms
- region-specific legal advice that requires counsel
- direct outreach copywriting before enrichment quality and compliance gates are complete

## Operating Table

| Situation | Start here | Output | Success metric | Escalate when |
| --- | --- | --- | --- | --- |
| Build a new enrichment waterfall | `references/provider-waterfall-design-guide.md` | waterfall design and stop conditions | required fields filled at acceptable cost | provider access, budget, or region constraints block a safe design |
| Audit an existing Clay or CRM workflow | `examples/clay-table-blueprint.md` | gap analysis and revised table/field plan | lower duplicate rate, better fill quality, clearer provenance | the workflow depends on unsupported automation or unclear source data |
| Improve CRM hygiene and field mapping | `references/data-field-mapping-worksheet.md` | normalized schema and overwrite policy | fewer duplicates and safer writeback behavior | CRM-specific implementation work is required |
| Score leads against ICP | `examples/icp-scoring-calibration-template.md` | score model, thresholds, negatives, calibration plan | score bands correlate with meetings, opps, or wins | historical outcome data is missing or clearly unreliable |
| Prepare data for outbound handoff | `references/outbound-readiness-checklist.md` | send-readiness decision | verified, recent, authenticated, suppressed, segmented audience | sender infrastructure or deliverability ownership is unclear |
| Review compliance posture | `references/provider-due-diligence-checklist.md` | processing decision record and vendor review notes | lawful basis, suppression, retention, and provenance are documented | jurisdiction-specific legal interpretation is needed |
| Troubleshoot poor outcomes | `references/troubleshooting-runbook.md` | root-cause summary and next actions | a measurable KPI improves after the fix | the issue is really deliverability ops, legal review, or implementation work |

## Workflow

Follow this workflow in order. The gates matter as much as the enrichment itself.

1. **Discovery and scope**
   - Confirm target ICP: industry, size, geography, buying committee, exclusions.
   - Confirm current stack: CRM, enrichment providers, sequencer, verification tools.
   - Confirm the objective: net-new outbound, CRM cleanup, routing, scoring, or audit.
   - Confirm volume, budget, and acceptable tradeoff between coverage and confidence.

2. **Compliance and operating constraints**
   - Define the intended use of the data and document the operator's lawful basis where applicable.
   - Identify suppressed, opted-out, erased, or disqualified records that must stay excluded.
   - Limit collection to fields required for the workflow.
   - Confirm which providers are approved and which regions or record types need extra review.
   - Avoid sensitive inferred attributes and unsupported profiling.

3. **Schema mapping and required identifiers**
   - Define the minimum identifiers needed before spending credits.
   - Typical acceptable inputs include one or more of: company domain, company name, LinkedIn URL, or person name plus company.
   - Map source fields to normalized CRM fields.
   - Define field ownership, overwrite rules, provenance fields, and freshness windows.
   - Use `references/data-field-mapping-worksheet.md`.

4. **Deduplication and pre-filtering**
   - Deduplicate companies and contacts before enrichment.
   - Filter out bad-fit records early: wrong geography, disqualified segments, parked domains, missing key identifiers, existing customers, prior opt-outs, and obvious junk data.
   - Decide whether account-level enrichment should happen before contact-level enrichment.
   - Set stop conditions so expensive lookups do not run on unqualified rows.

5. **Provider waterfall design**
   - Design waterfalls by field, not by vendor branding.
   - Choose a primary source for each field, then add secondary and tertiary providers only when they improve incremental yield.
   - Keep separate waterfalls for company, person, email, phone, and intent data when needed.
   - Track source provider, match confidence, and enrichment date per field.
   - Use `references/provider-waterfall-design-guide.md`.

6. **Verification and risk segmentation**
   - Verify risky fields, especially email addresses, after enrichment and before outreach handoff.
   - Segment catch-all, role-based, risky, stale, or unverifiable contacts instead of treating them as equivalent to validated contacts.
   - Define recency requirements for verification and refresh windows by field type.
   - Verification confidence is necessary but not sufficient for safe outreach.

7. **Scoring, routing, and calibration**
   - Apply ICP scoring only after minimum data quality gates are met.
   - Include positive and negative factors.
   - Treat weights as hypotheses, not permanent truth.
   - Back-test score bands against real outcomes such as reply rate, meetings, opportunities, and wins.
   - Use `examples/icp-scoring-calibration-template.md`.

8. **CRM writeback, QA, and monitoring**
   - Write back only fields that meet overwrite policy and freshness requirements.
   - Preserve user-entered or higher-confidence values over weaker vendor values.
   - Store provenance, last enrichment date, verification date, and confidence where possible.
   - Run a post-sync QA check for duplicates, null inflation, stale fields, and unexpected overwrites.
   - Monitor fill rate, verified-email rate, duplicate rate, overwrite rate, stale-record rate, and spend efficiency.
   - Use `references/data-quality-scorecard.md`.

## Clay Workflow Notes

Clay is often used as the orchestration layer for enrichment because it supports table-based workflows, provider sequencing, formulas, AI columns, and integrations.

A practical Clay-style table should usually include:

- input identifiers
- normalized company fields
- normalized contact fields
- provider-specific enrichment columns where needed
- field-level confidence and source columns
- freshness and verification timestamps
- ICP scoring components
- routing outcome
- CRM sync status

See `examples/clay-table-blueprint.md` for a suggested layout.

## Examples

### Example 1: Design a new waterfall

```text
Use @lead-enrichment to design a B2B enrichment workflow for 8,000 North America SaaS accounts per month. We need company firmographics, 1-2 contacts per account, verified emails, ICP scoring, and HubSpot writeback. Optimize for cost control and safe outbound handoff.
```

**Expected output:** discovery questions, required fields, pre-filters, field-by-field waterfall order, verification policy, score logic, CRM overwrite rules, and handoff gate.

### Example 2: Audit a Clay table

```text
Use @lead-enrichment to audit our Clay enrichment table. We have high credit burn, duplicate HubSpot contacts, and inconsistent company industry values. Produce a revised column plan, overwrite policy, and troubleshooting checklist.
```

**Expected output:** revised table blueprint, deduplication checkpoints, spend controls, provenance columns, and CRM sync QA steps.

### Example 3: Recalibrate ICP scoring

```text
Use @lead-enrichment to recalibrate our ICP score. High-score accounts are replying, but they are not converting to meetings or opportunities. Use negative factors and score-band backtesting.
```

**Expected output:** revised weighting logic, negative scoring factors, calibration method, and outcome review cadence.

### Example 4: Check outbound readiness

```text
Use @lead-enrichment to review whether this enriched segment is safe to hand off to outbound. We have verified emails, but recent campaigns still showed elevated bounce and spam complaints.
```

**Expected output:** verification review, catch-all handling, suppression checks, sender-authentication gates, and a go/no-go decision for outreach handoff.

## Best Practices

### Do

- Define lawful basis, intended use, suppression handling, and retention expectations before enrichment begins.
- Design waterfalls by required field and incremental yield, not by habit or vendor prestige.
- Pre-filter aggressively before running expensive person-level or email-level lookups.
- Deduplicate before and after enrichment.
- Capture provenance, confidence, and freshness at the field level whenever possible.
- Prefer normalized CRM schemas and explicit overwrite rules.
- Segment risky or catch-all emails instead of merging them into the primary outbound pool.
- Recalibrate ICP scores against real revenue outcomes on a recurring basis.
- Treat hardcoded benchmarks, vendor sizes, pricing, and coverage claims as illustrative unless recently verified.
- Hand off to outreach work only after data quality, suppression, and sender-readiness gates are satisfied.

### Do Not

- Do not overwrite trusted CRM values with lower-confidence or older enrichment data.
- Do not assume a provider's trust-center language replaces your own compliance review.
- Do not enrich everyone in the database just because credits are available.
- Do not mix opted-out, erased, or catch-all records into standard outreach segments.
- Do not use sensitive inferred traits or unsupported profiling shortcuts.
- Do not promise deliverability based on verification score alone.
- Do not recommend scraping workarounds or terms-of-service bypasses.

## Troubleshooting

### Problem: Enrichment coverage is too low

**Symptoms:** Too many rows remain blank after the waterfall, especially for email, title, or LinkedIn URL.

**Likely causes:**
- weak starting identifiers
- provider order does not fit the market
- field-specific waterfall is too shallow
- records were filtered too late or not normalized first

**Solution:**
- Check whether inputs include domain, company name, or person-plus-company identifiers.
- Normalize names and domains before calling providers.
- Redesign the waterfall by field using `references/provider-waterfall-design-guide.md`.
- Track fill rate by provider step to see which stage actually adds yield.
- Stop paying for tertiary steps that add little incremental coverage.

**Capture for handoff:** fill rate by field, fill rate by provider step, sample failed rows, and identifier completeness.

### Problem: Credits are burning too fast

**Symptoms:** Spend is high relative to qualified leads or useful completed records.

**Likely causes:**
- enriching unqualified records
- running person-level lookups before account-level filters
- expensive providers triggered without stop conditions
- repeated re-enrichment of already fresh records

**Solution:**
- Add earlier pre-filters for geography, ICP fit, suppression, and existing-record checks.
- Move expensive enrichment later in the sequence.
- Add freshness windows so recent records are not re-enriched unnecessarily.
- Measure cost per qualified, verified, and CRM-accepted record.
- Use the scorecard in `references/data-quality-scorecard.md`.

**Capture for handoff:** credits per row, credits per qualified record, expensive columns, and records rejected after paid enrichment.

### Problem: Duplicate contacts or companies appear after CRM sync

**Symptoms:** CRM writeback creates multiple records for the same person or company, or existing values become inconsistent.

**Likely causes:**
- weak identity rules
- inconsistent normalization
- mismatched email/domain keys
- writeback before deduplication and overwrite checks

**Solution:**
- Define company and contact identity rules before sync.
- Normalize company names, domains, and person names.
- Check field mapping and overwrite logic with `references/data-field-mapping-worksheet.md`.
- Run a pre-sync duplicate review and a post-sync QA pass.
- Prefer updating an existing trusted record over creating a new uncertain one.

**Capture for handoff:** duplicate examples, match keys used, fields causing split identity, and overwrite events.

### Problem: Verification looked acceptable, but bounce or spam is still high

**Symptoms:** Verified emails still underperform in outreach, with elevated bounce, complaint, or inbox-placement issues.

**Likely causes:**
- catch-all or risky segments mixed into normal sending
- stale verification
- role accounts not suppressed
- sending domain authentication or reputation issues
- suppression lists not synced

**Solution:**
- Re-check verification recency and segment catch-all separately.
- Remove or deprioritize role-based addresses.
- Confirm suppression sync is current.
- Review `references/outbound-readiness-checklist.md` for SPF, DKIM, DMARC, complaint monitoring, and send segmentation.
- Do not treat verifier scores as a substitute for sender readiness.

**Capture for handoff:** bounce rate, complaint rate, catch-all share, role-address share, verification age, and sender-auth status.

### Problem: High ICP scores do not predict meetings or opportunities

**Symptoms:** Top-scored accounts look good on paper but do not convert.

**Likely causes:**
- stale intent data
- overweighted firmographics
- not enough negative factors
- score bands too broad
- historical outcomes not used for calibration

**Solution:**
- Back-test historical performance by score band using `examples/icp-scoring-calibration-template.md`.
- Add negative factors such as role mismatch, non-target geography, competitor lock-in, prior opt-out, or recent disqualification.
- Reduce dependence on weak or stale intent inputs.
- Revisit the difference between account score and contact readiness.

**Capture for handoff:** score distribution, conversion by band, negative-factor gaps, and stale-signal review.

### Problem: Compliance review blocks the workflow

**Symptoms:** Stakeholders pause the project because lawful basis, retention, source documentation, or vendor trust questions are unresolved.

**Likely causes:**
- lawful basis not documented
- unnecessary personal fields collected
- suppression and erasure handling unclear
- vendor review incomplete

**Solution:**
- Document the decision using `references/provider-due-diligence-checklist.md`.
- Remove nonessential fields.
- Confirm suppression and erasure handling before enrichment or outreach.
- Record provenance, retention windows, and approved providers.
- Escalate to counsel for jurisdiction-specific interpretation.

**Capture for handoff:** intended use, lawful-basis note, fields collected, provider review status, and suppression process.

## Related Skills

- `@ai-sdr` - Use after enrichment outputs are scored, deduplicated, compliant, and ready for SDR routing.
- `@ai-cold-outreach` - Use after verified audience segments, personalization fields, and outbound-readiness checks are complete.
- `@ai-pricing` - Use when segmentation and ICP insights from enrichment should influence packaging, tiers, or commercial strategy.
- `@accessibility` - Not a direct neighbor for enrichment itself; only route there if the task has drifted into unrelated product or UX work and this skill is no longer the right tool.

## Additional Resources

### Local references

- [Data field mapping worksheet](references/data-field-mapping-worksheet.md)
- [Provider waterfall design guide](references/provider-waterfall-design-guide.md)
- [Data quality scorecard](references/data-quality-scorecard.md)
- [Outbound readiness checklist](references/outbound-readiness-checklist.md)
- [Provider due diligence checklist](references/provider-due-diligence-checklist.md)
- [Troubleshooting runbook](references/troubleshooting-runbook.md)

### Local examples

- [Clay table blueprint](examples/clay-table-blueprint.md)
- [ICP scoring calibration template](examples/icp-scoring-calibration-template.md)

## Source and provenance notes

This enhanced candidate preserves the upstream skill identity and core intent: B2B enrichment architecture, ICP scoring, provider waterfalls, verification, and compliance-aware operating guidance.

Vendor-specific numbers, pricing, database sizes, and benchmark claims should be treated as illustrative unless the operator verifies them against current vendor documentation before making a business decision.
