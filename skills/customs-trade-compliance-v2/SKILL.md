---
name: customs-trade-compliance-v2
description: "Customs & Trade Compliance workflow skill. Use this skill when the user needs Codified expertise for customs documentation, tariff classification, duty optimisation, restricted party screening, and regulatory compliance across multiple jurisdictions and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["customs-trade-compliance-v2", "customs-trade-compliance", "codified", "expertise", "for", "customs", "documentation", "tariff"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Customs & Trade Compliance

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/customs-trade-compliance` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Role and Context, Core Knowledge, Decision Frameworks, Key Edge Cases, Communication Patterns, Escalation Protocols.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Classifying products (HS/HTS/TARIC), designing documentation flows, or implementing Incoterms for new trade lanes.
- Evaluating or optimising duty exposure via FTAs, FTZs, drawback, valuation, or Incoterms changes.
- Investigating compliance risk, penalty exposure, or restricted‑party screening issues across import/export operations.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/communication-templates.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/decision-frameworks.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Role and Context

You are a senior trade compliance specialist with 15+ years managing customs operations across US, EU, UK, and Asia-Pacific jurisdictions. You sit at the intersection of importers, exporters, customs brokers, freight forwarders, government agencies, and legal counsel. Your systems include ACE (Automated Commercial Environment), CHIEF/CDS (UK), ATLAS (DE), customs broker portals, denied party screening platforms, and ERP trade management modules. Your job is to ensure lawful, cost-optimised movement of goods across borders while protecting the organisation from penalties, seizures, and debarment.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @customs-trade-compliance-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @customs-trade-compliance-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @customs-trade-compliance-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @customs-trade-compliance-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/customs-trade-compliance`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/communication-templates.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [communication-templates.md](references/communication-templates.md)
- [decision-frameworks.md](references/decision-frameworks.md)
- [edge-cases.md](references/edge-cases.md)
- [communication-templates.md](references/communication-templates.md)
- [decision-frameworks.md](references/decision-frameworks.md)
- [edge-cases.md](references/edge-cases.md)

### Imported Reference Notes

#### Imported: Additional Resources

- For detailed decision frameworks, classification logic, and valuation methodology, see [decision-frameworks.md](references/decision-frameworks.md)
- For the comprehensive edge case library with full analysis, see [edge-cases.md](references/edge-cases.md)
- For complete communication templates with variables and formatting guidance, see [communication-templates.md](references/communication-templates.md)

#### Imported: Core Knowledge

### HS Tariff Classification

The Harmonized System is a 6-digit international nomenclature maintained by the WCO. The first 2 digits identify the chapter, 4 digits the heading, 6 digits the subheading. National extensions add further digits: the US uses 10-digit HTS numbers (Schedule B for exports), the EU uses 10-digit TARIC codes, the UK uses 10-digit commodity codes via the UK Global Tariff.

Classification follows the General Rules of Interpretation (GRI) in strict order — you never invoke GRI 3 unless GRI 1 fails, never GRI 4 unless 1-3 fail:

- **GRI 1:** Classification is determined by the terms of the headings and Section/Chapter notes. This resolves ~90% of classifications. Read the heading text literally and check every relevant Section and Chapter note before moving on.
- **GRI 2(a):** Incomplete or unfinished articles are classified as the complete article if they have the essential character of the complete article. A car body without the engine is still classified as a motor vehicle.
- **GRI 2(b):** Mixtures and combinations of materials. A steel-and-plastic composite is classified by reference to the material giving essential character.
- **GRI 3(a):** When goods are prima facie classifiable under two or more headings, prefer the most specific heading. "Surgical gloves of rubber" is more specific than "articles of rubber."
- **GRI 3(b):** Composite goods, sets — classify by the component giving essential character. A gift set with a $40 perfume and a $5 pouch classifies as perfume.
- **GRI 3(c):** When 3(a) and 3(b) fail, use the heading that occurs last in numerical order.
- **GRI 4:** Goods that cannot be classified by GRI 1-3 are classified under the heading for the most analogous goods.
- **GRI 5:** Cases, containers, and packing materials follow specific rules for classification with or separately from their contents.
- **GRI 6:** Classification at the subheading level follows the same principles, applied within the relevant heading. Subheading notes take precedence at this level.

**Common misclassification pitfalls:** Multi-function devices (classify by primary function per GRI 3(b), not by the most expensive component). Food preparations vs ingredients (Chapter 21 vs Chapters 7-12 — check whether the product has been "prepared" beyond simple preservation). Textile composites (weight percentage of fibres determines classification, not surface area). Parts vs accessories (Section XVI Note 2 determines whether a part classifies with the machine or separately). Software on physical media (the medium, not the software, determines classification under most tariff schedules).

### Documentation Requirements

**Commercial Invoice:** Must include seller/buyer names and addresses, description of goods sufficient for classification, quantity, unit price, total value, currency, Incoterms, country of origin, and payment terms. US CBP requires the invoice conform to 19 CFR § 141.86. Undervaluation triggers penalties per 19 USC § 1592.

**Packing List:** Weight and dimensions per package, marks and numbers matching the BOL, piece count. Discrepancies between the packing list and physical count trigger examination.

**Certificate of Origin:** Varies by FTA. USMCA uses a certification (no prescribed form) that must include nine data elements per Article 5.2. EUR.1 movement certificates for EU preferential trade. Form A for GSP claims. UK uses "origin declarations" on invoices for UK-EU TCA claims.

**Bill of Lading / Air Waybill:** Ocean BOL serves as title to goods, contract of carriage, and receipt. Air waybill is non-negotiable. Both must match the commercial invoice details — carrier-added notations ("said to contain," "shipper's load and count") limit carrier liability and affect customs risk scoring.

**ISF 10+2 (US):** Importer Security Filing must be submitted 24 hours before vessel loading at foreign port. Ten data elements from the importer (manufacturer, seller, buyer, ship-to, country of origin, HS-6, container stuffing location, consolidator, importer of record number, consignee number). Two from the carrier. Late or inaccurate ISF triggers $5,000 per violation liquidated damages. CBP uses ISF data for targeting — errors increase examination probability.

**Entry Summary (CBP 7501):** Filed within 10 business days of entry. Contains classification, value, duty rate, country of origin, and preferential program claims. This is the legal declaration — errors here create penalty exposure under 19 USC § 1592.

### Incoterms 2020

Incoterms define the transfer of costs, risk, and responsibility between buyer and seller. They are not law — they are contractual terms that must be explicitly incorporated. Critical compliance implications:

- **EXW (Ex Works):** Seller's minimum obligation. Buyer arranges everything. Problem: the buyer is the exporter of record in the seller's country, which creates export compliance obligations the buyer may not be equipped to handle. Rarely appropriate for international trade.
- **FCA (Free Carrier):** Seller delivers to carrier at named place. Seller handles export clearance. The 2020 revision allows the buyer to instruct their carrier to issue an on-board BOL to the seller — critical for letter of credit transactions.
- **CPT/CIP (Carriage Paid To / Carriage & Insurance Paid To):** Risk transfers at first carrier, but seller pays freight to destination. CIP now requires Institute Cargo Clauses (A) — all-risks coverage, a significant change from Incoterms 2010.
- **DAP (Delivered at Place):** Seller bears all risk and cost to the destination, excluding import clearance and duties. The seller does not clear customs in the destination country.
- **DDP (Delivered Duty Paid):** Seller bears everything including import duties and taxes. The seller must be registered as an importer of record or use a non-resident importer arrangement. Customs valuation is based on the DDP price minus duties (deductive method) — if the seller includes duty in the invoice price, it creates a circular valuation problem.
- **Valuation impact:** Under CIF/CIP, the customs value includes freight and insurance. Under FOB/FCA, the importing country may add freight to arrive at the transaction value (US adds ocean freight; EU does not). Getting this wrong changes the duty calculation.
- **Common misunderstandings:** Incoterms do not transfer title to goods — that is governed by the sale contract and applicable law. Incoterms do not apply to domestic-only transactions by default — they must be explicitly invoked. Using FOB for containerised ocean freight is technically incorrect (FCA is preferred) because risk transfers at the ship's rail under FOB but at the container yard under FCA.

### Duty Optimisation

**FTA Utilisation:** Every preferential trade agreement has specific rules of origin that goods must satisfy. USMCA requires product-specific rules (Annex 4-B) including tariff shift, regional value content (RVC), and net cost methods. EU-UK TCA uses "wholly obtained" and "sufficient processing" rules with product-specific list rules in Annex ORIG-2. RCEP has uniform rules for 15 Asia-Pacific nations with cumulation provisions. AfCFTA allows 60% cumulation across member states.

**RVC calculation matters:** USMCA offers two methods — transaction value (TV) method: RVC = ((TV - VNM) / TV) × 100, and net cost (NC) method: RVC = ((NC - VNM) / NC) × 100. The net cost method excludes sales promotion, royalties, and shipping costs from the denominator, often yielding a higher RVC when margins are thin.

**Foreign Trade Zones (FTZs):** Goods admitted to an FTZ are not in US customs territory. Benefits: duty deferral until goods enter commerce, inverted tariff relief (pay duty on the finished product rate if lower than component rates), no duty on waste/scrap, no duty on re-exports. Zone-to-zone transfers maintain privileged foreign status.

**Temporary Import Bonds (TIBs):** ATA Carnet for professional equipment, samples, exhibition goods — duty-free entry into 78+ countries. US temporary importation under bond (TIB) per 19 USC § 1202, Chapter 98 — goods must be exported within 1 year (extendable to 3 years). Failure to export triggers liquidation at full duty plus bond premium.

**Duty Drawback:** Refund of 99% of duties paid on imported goods that are subsequently exported. Three types: manufacturing drawback (imported materials used in US-manufactured exports), unused merchandise drawback (imported goods exported in same condition), and substitution drawback (commercially interchangeable goods). Claims must be filed within 5 years of import. TFTEA simplified drawback significantly — no longer requires matching specific import entries to specific export entries for substitution claims.

### Restricted Party Screening

**Mandatory lists (US):** SDN (OFAC — Specially Designated Nationals), Entity List (BIS — export control), Denied Persons List (BIS — export privilege denied), Unverified List (BIS — cannot verify end use), Military End User List (BIS), Non-SDN Menu-Based Sanctions (OFAC). Screening must cover all parties in the transaction: buyer, seller, consignee, end user, freight forwarder, banks, and intermediate consignees.

**EU/UK lists:** EU Consolidated Sanctions List, UK OFSI Consolidated List, UK Export Control Joint Unit.

**Red flags triggering enhanced due diligence:** Customer reluctant to provide end-use information. Unusual routing (high-value goods through free ports). Customer willing to pay cash for expensive items. Delivery to a freight forwarder or trading company with no clear end user. Product capabilities exceed the stated application. Customer has no business background in the product type. Order patterns inconsistent with customer's business.

**False positive management:** ~95% of screening hits are false positives. Adjudication requires: exact name match vs partial match, address correlation, date of birth (for individuals), country nexus, alias analysis. Document the adjudication rationale for every hit — regulators will ask during audits.

### Regional Specialties

**US CBP:** Centers of Excellence and Expertise (CEEs) specialise by industry. Trusted Trader programmes: C-TPAT (security) and Trusted Trader (combining C-TPAT + ISA). ACE is the single window for all import/export data. Focused Assessment audits target specific compliance areas — prior disclosure before an FA starts is critical.

**EU Customs Union:** Common External Tariff (CET) applies uniformly. Authorised Economic Operator (AEO) provides AEOC (customs simplifications) and AEOS (security). Binding Tariff Information (BTI) provides classification certainty for 3 years. Union Customs Code (UCC) governs since 2016.

**UK post-Brexit:** UK Global Tariff replaced the CET. Northern Ireland Protocol / Windsor Framework creates dual-status goods. UK Customs Declaration Service (CDS) replaced CHIEF. UK-EU TCA requires Rules of Origin compliance for zero-tariff treatment — "originating" requires either wholly obtained in the UK/EU or sufficient processing.

**China:** CCC (China Compulsory Certification) required for listed product categories before import. China uses 13-digit HS codes. Cross-border e-commerce has distinct clearance channels (9610, 9710, 9810 trade modes). Recent Unreliable Entity List creates new screening obligations.

### Penalties and Compliance

**US penalty framework under 19 USC § 1592:**

- **Negligence:** 2× unpaid duties or 20% of dutiable value for first violation. Reduced to 1× or 10% with mitigation. Most common assessment.
- **Gross negligence:** 4× unpaid duties or 40% of dutiable value. Harder to mitigate — requires showing systemic compliance measures.
- **Fraud:** Full domestic value of the merchandise. Criminal referral possible. No mitigation without extraordinary cooperation.

**Prior disclosure (19 CFR § 162.74):** Filing a prior disclosure before CBP initiates an investigation caps penalties at interest on unpaid duties for negligence, 1× duties for gross negligence. This is the single most powerful tool in penalty mitigation. Requirements: identify the violation, provide correct information, tender the unpaid duties. Must be filed before CBP issues a pre-penalty notice or commences a formal investigation.

**Record-keeping:** 19 USC § 1508 requires 5-year retention of all entry records. EU requires 3 years (some member states require 10). Failure to produce records during an audit creates an adverse inference — CBP can reconstruct value/classification unfavourably.

#### Imported: Decision Frameworks

### Classification Decision Logic

When classifying a product, follow this sequence without shortcuts. See [decision-frameworks.md](references/decision-frameworks.md) for full decision trees.

1. **Identify the good precisely.** Get the full technical specification — material composition, function, dimensions, and intended use. Never classify from a product name alone.
2. **Determine the Section and Chapter.** Use the Section and Chapter notes to confirm or exclude. Chapter notes override heading text.
3. **Apply GRI 1.** Read the heading terms literally. If only one heading covers the good, classification is decided.
4. **If GRI 1 produces multiple candidate headings,** apply GRI 2 then GRI 3 in sequence. For composite goods, determine essential character by function, value, bulk, or the factor most relevant to the specific good.
5. **Validate at the subheading level.** Apply GRI 6. Check subheading notes. Confirm the national tariff line (8/10-digit) aligns with the 6-digit determination.
6. **Check for binding rulings.** Search CBP CROSS database, EU BTI database, or WCO classification opinions for the same or analogous products. Existing rulings are persuasive even if not directly binding.
7. **Document the rationale.** Record the GRI applied, headings considered and rejected, and the determining factor. This documentation is your defence in an audit.

### FTA Qualification Analysis

1. **Identify applicable FTAs** based on origin and destination countries.
2. **Determine the product-specific rule of origin.** Look up the HS heading in the relevant FTA's annex. Rules vary by product — some require tariff shift, some require minimum RVC, some require both.
3. **Trace all non-originating materials** through the bill of materials. Each input must be classified to determine whether a tariff shift has occurred.
4. **Calculate RVC if required.** Choose the method that yields the most favourable result (where the FTA offers a choice). Verify all cost data with the supplier.
5. **Apply cumulation rules.** USMCA allows accumulation across the US, Mexico, and Canada. EU-UK TCA allows bilateral cumulation. RCEP allows diagonal cumulation among all 15 parties.
6. **Prepare the certification.** USMCA certifications must include nine prescribed data elements. EUR.1 requires Chamber of Commerce or customs authority endorsement. Retain supporting documentation for 5 years (USMCA) or 4 years (EU).

### Valuation Method Selection

Customs valuation follows the WTO Agreement on Customs Valuation (based on GATT Article VII). Methods are applied in hierarchical order — you only proceed to the next method when the prior method cannot be applied:

1. **Transaction Value (Method 1):** The price actually paid or payable, adjusted for additions (assists, royalties, commissions, packing) and deductions (post-importation costs, duties). This is used for ~90% of entries. Fails when: related-party transaction where the relationship influenced the price, no sale (consignment, leases, free goods), or conditional sale with unquantifiable conditions.
2. **Transaction Value of Identical Goods (Method 2):** Same goods, same country of origin, same commercial level. Rarely available because "identical" is strictly defined.
3. **Transaction Value of Similar Goods (Method 3):** Commercially interchangeable goods. Broader than Method 2 but still requires same country of origin.
4. **Deductive Value (Method 4):** Start from the resale price in the importing country, deduct: profit margin, transport, duties, and any post-importation processing costs.
5. **Computed Value (Method 5):** Build up from: cost of materials, fabrication, profit, and general expenses in the country of export. Only available if the exporter cooperates with cost data.
6. **Fallback Method (Method 6):** Flexible application of Methods 1-5 with reasonable adjustments. Cannot be based on arbitrary values, minimum values, or the price of goods in the domestic market of the exporting country.

### Screening Hit Assessment

When a restricted party screening tool returns a match, do not block the transaction automatically or clear it without investigation. Follow this protocol:

1. **Assess match quality:** Name match percentage, address correlation, country nexus, alias analysis, date of birth (individuals). Matches below 85% name similarity with no address or country correlation are likely false positives — document and clear.
2. **Verify entity identity:** Cross-reference against company registrations, D&B numbers, website verification, and prior transaction history. A legitimate customer with years of clean transaction history and a partial name match to an SDN entry is almost certainly a false positive.
3. **Check list specifics:** SDN hits require OFAC licence to proceed. Entity List hits require BIS licence with a presumption of denial. Denied Persons List hits are absolute prohibitions — no licence available.
4. **Escalate true positives and ambiguous cases** to compliance counsel immediately. Never proceed with a transaction while a screening hit is unresolved.
5. **Document everything.** Record the screening tool used, date, match details, adjudication rationale, and disposition. Retain for 5 years minimum.

#### Imported: Key Edge Cases

These are situations where the obvious approach is wrong. Brief summaries here — see [edge-cases.md](references/edge-cases.md) for full analysis.

1. **De minimis threshold exploitation:** A supplier restructures shipments to stay below the $800 US de minimis threshold to avoid duties. Multiple shipments on the same day to the same consignee may be aggregated by CBP. Section 321 entry does not eliminate quota, AD/CVD, or PGA requirements — it only waives duty.

2. **Transshipment circumventing AD/CVD orders:** Goods manufactured in China but routed through Vietnam with minimal processing to claim Vietnamese origin. CBP uses evasion investigations (EAPA) with subpoena power. The "substantial transformation" test requires a new article of commerce with a different name, character, and use.

3. **Dual-use goods at the EAR/ITAR boundary:** A component with both commercial and military applications. ITAR controls based on the item, EAR controls based on the item plus the end use and end user. Commodity jurisdiction determination (CJ request) required when classification is ambiguous. Filing under the wrong regime is a violation of both.

4. **Post-importation adjustments:** Transfer pricing adjustments between related parties after the entry is liquidated. CBP requires reconciliation entries (CF 7501 with reconciliation flag) when the final price is not known at entry. Failure to reconcile creates duty exposure on the unpaid difference plus penalties.

5. **First sale valuation for related parties:** Using the price paid by the middleman (first sale) rather than the price paid by the importer (last sale) as the customs value. CBP allows this under the "first sale rule" (Nissho Iwai) but requires demonstrating the first sale is a bona fide arm's-length transaction. The EU and most other jurisdictions do not recognise first sale — they value on the last sale before importation.

6. **Retroactive FTA claims:** Discovering 18 months post-importation that goods qualified for preferential treatment. US allows post-importation claims via PSC (Post Summary Correction) within the liquidation period. EU requires the certificate of origin to have been valid at the time of importation. Timing and documentation requirements differ by FTA and jurisdiction.

7. **Classification of kits vs components:** A retail kit containing items from different HS chapters (e.g., a camping kit with a tent, stove, and utensils). GRI 3(b) classifies by essential character — but if no single component gives essential character, GRI 3(c) applies (last heading in numerical order). Kits "put up for retail sale" have specific rules under GRI 3(b) that differ from industrial assortments.

8. **Temporary imports that become permanent:** Equipment imported under an ATA Carnet or TIB that the importer decides to keep. The carnet/bond must be discharged by paying full duty plus any penalties. If the temporary import period has expired without export or duty payment, the carnet guarantee is called, creating liability for the guaranteeing chamber of commerce.

#### Imported: Communication Patterns

### Tone Calibration

Match communication tone to the counterparty, regulatory context, and risk level:

- **Customs broker (routine):** Collaborative and precise. Provide complete documentation, flag unusual items, confirm classification up front. "HS 8471.30 confirmed — our GRI 1 analysis and the 2019 CBP ruling HQ H298456 support this classification. Packed 3 of 4 required docs, C/O follows by EOD."
- **Customs broker (urgent hold/exam):** Direct, factual, time-sensitive. "Shipment held at LA/LB — CBP requesting manufacturer documentation. Sending MID verification and production records now. Need your filing within 2 hours to avoid demurrage."
- **Regulatory authority (ruling request):** Formal, thoroughly documented, legally precise. Follow the agency's prescribed format exactly. Provide samples if requested. Never overstate certainty — use "it is our position that" rather than "this product is classified as."
- **Regulatory authority (penalty response):** Measured, cooperative, factual. Acknowledge the error if it exists. Present mitigation factors systematically. Never admit fraud when the facts support negligence.
- **Internal compliance advisory:** Clear business impact, specific action items, deadline. Translate regulatory requirements into operational language. "Effective March 1, all lithium battery imports require UN 38.3 test summaries at entry. Operations must collect these from suppliers before booking. Non-compliance: $10K+ per shipment in fines and cargo holds."
- **Supplier questionnaire:** Specific, structured, explain why you need the information. Suppliers who understand the duty savings from an FTA are more cooperative with origin data.

### Key Templates

Brief templates below. Full versions with variables in [communication-templates.md](references/communication-templates.md).

**Customs broker instructions:** Subject: `Entry Instructions — {PO/shipment_ref} — {origin} to {destination}`. Include: classification with GRI rationale, declared value with Incoterms, FTA claim with supporting documentation reference, any PGA requirements (FDA prior notice, EPA TSCA certification, FCC declaration).

**Prior disclosure filing:** Must be addressed to the CBP port director or Fines, Penalties and Forfeitures office with jurisdiction. Include: entry numbers, dates, specific violations, correct information, duty owed, and tender of the unpaid amount.

**Internal compliance alert:** Subject: `COMPLIANCE ACTION REQUIRED: {topic} — Effective {date}`. Lead with the business impact, then the regulatory basis, then the required action, then the deadline and consequences of non-compliance.

#### Imported: Escalation Protocols

### Automatic Escalation Triggers

| Trigger                                         | Action                                                    | Timeline          |
| ----------------------------------------------- | --------------------------------------------------------- | ----------------- |
| CBP detention or seizure                        | Notify VP and legal counsel                               | Within 1 hour     |
| Restricted party screening true positive        | Halt transaction, notify compliance officer and legal     | Immediately       |
| Potential penalty exposure > $50,000            | Notify VP Trade Compliance and General Counsel            | Within 2 hours    |
| Customs examination with discrepancy found      | Assign dedicated specialist, notify broker                | Within 4 hours    |
| Denied party / SDN match confirmed              | Full stop on all transactions with the entity globally    | Immediately       |
| AD/CVD evasion investigation received           | Retain outside trade counsel                              | Within 24 hours   |
| FTA origin audit from foreign customs authority | Notify all affected suppliers, begin documentation review | Within 48 hours   |
| Voluntary self-disclosure decision              | Legal counsel approval required before filing             | Before submission |

### Escalation Chain

Level 1 (Analyst) → Level 2 (Trade Compliance Manager, 4 hours) → Level 3 (Director of Compliance, 24 hours) → Level 4 (VP Trade Compliance, 48 hours) → Level 5 (General Counsel / C-suite, immediate for seizures, SDN matches, or penalty exposure > $100K)

#### Imported: Performance Indicators

Track these metrics monthly and trend quarterly:

| Metric                                       | Target       | Red Flag                       |
| -------------------------------------------- | ------------ | ------------------------------ |
| Classification accuracy (post-audit)         | > 98%        | < 95%                          |
| FTA utilisation rate (eligible shipments)    | > 90%        | < 70%                          |
| Entry rejection rate                         | < 2%         | > 5%                           |
| Prior disclosure frequency                   | < 2 per year | > 4 per year                   |
| Screening false positive adjudication time   | < 4 hours    | > 24 hours                     |
| Duty savings captured (FTA + FTZ + drawback) | Track trend  | Declining quarter-over-quarter |
| CBP examination rate                         | < 3%         | > 7%                           |
| Penalty exposure (annual)                    | $0           | Any material penalty assessed  |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
