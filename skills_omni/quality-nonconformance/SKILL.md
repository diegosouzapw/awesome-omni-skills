---
name: "quality-nonconformance"
description: "Quality & Non-Conformance Management workflow skill. Use this skill when the user needs codified expertise for quality control, nonconformance investigation, root cause analysis, corrective action, and supplier quality management in regulated manufacturing, with clear review criteria, evidence expectations, and provenance-aware handoff discipline."
version: "0.0.1"
category: "development"
tags:
  - "quality-nonconformance"
  - "quality"
  - "nonconformance"
  - "capa"
  - "root-cause"
  - "supplier-quality"
  - "regulated-manufacturing"
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
date_added: "2026-04-15"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "quality-nonconformance"
family_name: "Quality & Non-Conformance Management"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/quality-nonconformance"
upstream_skill: "skills/quality-nonconformance"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "quality-nonconformance"
---

# Quality & Non-Conformance Management

## Overview

Use this skill to review, structure, or improve nonconformance handling in regulated manufacturing environments where product disposition, investigation quality, CAPA escalation, supplier controls, and closure evidence matter.

This skill is designed for analysis and review work, not for issuing legal or regulatory sign-off. It helps the operator:

- distinguish immediate containment from deeper investigation
- decide whether an issue should remain an NCR/nonconformance or escalate to CAPA
- assess whether supplier escalation is required
- judge whether a closure package is evidence-based or too weak to accept
- preserve provenance and decision rationale before merge, handoff, or audit preparation

The workflow is intentionally risk-based. It should be applied only after identifying the governing quality framework for the record under review.

## When to Use This Skill

Use this skill when the task involves one or more of the following:

- reviewing a nonconforming product event, deviation, NCR, or MRB packet
- deciding whether a case needs containment only, formal investigation, CAPA escalation, supplier action, or reopening
- checking whether root-cause claims are supported by objective evidence
- evaluating whether repeated defects indicate a broader process, validation, measurement, or supplier-control problem
- assessing closure quality for CAPA, SCAR, rework, concession, or deviation records
- preparing a review packet for quality leadership, audit response, or cross-functional handoff

Do not use this skill as a substitute for:

- legal advice
- formal regulatory reporting decisions that require authorized personnel
- product release authority
- changing approved procedures without controlled change management

Before using detailed criteria, identify the applicable regime, for example:

- FDA medical device / QMSR-harmonized device context
- pharma or biopharma quality system using ICH / GxP expectations
- aerospace, automotive, or internal QMS controls
- internal quality review with no direct regulated submission impact

If the governing framework is unknown, stop and ask for it before prescribing record content or closure standards.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| New case intake | Confirm product, lot/serial scope, location, release status, and distribution status | You cannot judge severity, containment, or reporting impact without scope |
| Regulated review | Identify governing regime, risk class, market status, and who owns release/disposition authority | Terms and evidence expectations differ by context |
| Suspect nonconforming product | Separate containment and disposition from root-cause work | Teams often jump to RCA before securing inventory or documenting control |
| Recurrent or high-risk issue | Check trend history, complaints, prior NCRs, prior CAPAs, validation status, and detectability weakness | Recurrence often means the problem is systemic, not isolated |
| Supplier-linked event | Check supplier status, item criticality, inspection history, prior SCARs, and quality agreement references | Supplier events may require more than return-to-vendor handling |
| Weak investigation | Test whether evidence supports the claimed root cause, or only a plausible story | Premature closure is a common failure mode |
| Closure review | Use `references/review-criteria.md` | Provides decision criteria for NCR vs CAPA vs supplier escalation vs reopen |
| Training or audit prep | Use `examples/review-example.md` | Shows a realistic NCR-to-CAPA review with weak vs acceptable closure logic |

## Workflow

### 1) Establish the review frame

Start by collecting the minimum context needed to make a safe judgment:

- product or process affected
- lot, batch, serial, or unit scope
- where affected material is now located
- whether any product was released or distributed
- detection point: incoming, in-process, final release, complaint, service, audit, or stability/monitoring
- applicable quality system or regulatory context
- assigned record owner and disposition authority

If any of these are missing, call out the gap before concluding anything.

### 2) Control the nonconformance before investigating cause

Treat containment and disposition as a distinct stage.

Check whether the record shows:

- identification of affected material or records
- segregation or administrative control where practical
- hold status and access restriction
- preliminary scope assessment
- documented disposition path or hold-for-investigation status
- rework or reinspection requirements if applicable
- authorized approval for the chosen disposition under local procedure

Common disposition paths include:

- use as is
- rework
- repair
- return to supplier
- scrap
- concession or deviation
- hold for investigation

Do not accept a packet that explains root cause in detail but cannot clearly show what happened to the affected product.

If product has already shipped, add review of traceability, customer impact, field status, and whether separate reporting or market action processes must be considered by authorized personnel.

### 3) Triage risk and decide investigation depth

Scale the investigation to risk rather than applying the same depth everywhere.

Review at least these factors:

- severity of potential impact
- occurrence or recurrence pattern
- detectability and control weakness
- distribution status
- complaint, adverse event, or reportability linkage
- multi-lot, multi-line, or multi-site scope
- confidence in the available data

Also test for bias:

- blaming operator error before checking system factors
- blaming the supplier before checking incoming controls and specifications
- accepting the first plausible cause without ranking evidence
- closing because action was completed, not because effectiveness was demonstrated

Document why the chosen level of investigation is proportionate.

### 4) Investigate cause using evidence, not just narrative

A good investigation distinguishes:

- symptom: what failed
- containment: how exposure was controlled
- direct cause: what immediately produced the event
- root cause: why the system allowed it
- contributing factors: conditions that increased likelihood or reduced detection

Minimum evidence checks:

- compare actual records, not recollections alone
- review recent trend data and prior similar events
- check change history, maintenance, calibration, setup, tooling, and environment where relevant
- review inspection method adequacy and measurement-system confidence
- for supplier events, review specifications, quality agreements, inspection plans, and supplier change visibility
- for repeated process defects, review process validation or continued process verification evidence instead of defaulting to retraining

Be cautious with conclusions such as "operator error," "supplier issue," or "isolated incident" unless corroborated by records.

### 5) Decide NCR only vs CAPA escalation

Not every NCR requires CAPA, but some should not remain local.

Typical escalation triggers include:

- recurrence after prior correction
- high-severity or patient/customer safety impact
- distributed product or complaint linkage
- evidence of broader process or system failure
- validation failure or loss of validated state
- repeated supplier escapes or ineffective SCAR history
- multi-lot or multi-line impact
- poor detectability suggesting controls are weak
- prior closure later shown to be ineffective

If one or more of these are present, require a clear rationale if the issue is *not* escalated.

Use `references/review-criteria.md` when you need a compact decision aid during live review.

### 6) Review supplier implications explicitly

When a nonconformance involves purchased material, outsourced processing, or supplier-provided services, check more than the defect itself.

Review whether the packet addresses:

- approved supplier status
- criticality of the supplied item or service
- quality agreement or communicated specification clarity
- incoming acceptance method and whether it was capable of detection
- supplier history and prior SCARs
- whether the issue indicates supplier qualification, oversight, or change-notification weakness

A supplier-caused defect does not automatically prove supplier-only root cause. Internal receiving controls, specification quality, and escalation timeliness may also be involved.

### 7) Define corrective action and verification expectations

Corrective actions should match the verified cause and risk.

Weak actions often include:

- retraining only, without evidence the knowledge gap was primary
- updating a form without changing the failing control
- adding inspection where process weakness remains unaddressed
- closing immediately after implementation with no effectiveness window

Stronger action plans usually specify:

- what process, control, specification, equipment, supplier control, or workflow will change
- who owns implementation
- what records will prove implementation
- how effectiveness will be measured
- what time window or production volume will be reviewed
- what would trigger reopen or further escalation

### 8) Judge closure quality

Do not accept closure based only on completed tasks.

A credible closure shows:

- implemented actions match the defined cause and scope
- impacted documents, training, controls, or supplier requirements were updated as needed
- verification or validation was completed where required
- effectiveness was checked over a defined period or sample
- no significant unintended consequences were introduced
- management or quality leadership visibility occurred when risk or recurrence justified it

If recurrence occurs after closure, reopen the logic chain:

- was the root cause truly demonstrated?
- was containment scope too narrow?
- was the monitoring window too short?
- did changes create new failure modes?
- was the issue systemic but treated as local?

## Troubleshooting

### The record jumps straight to root cause with poor containment evidence
- Ask where all suspect inventory, WIP, and released units are.
- Require product control status before accepting detailed RCA.
- Check whether affected documentation and traceability records were also controlled.

### The investigation concludes "operator error" with no corroboration
- Ask for objective evidence: training records, work-instruction clarity, human factors, error-proofing status, supervision, and recurrence history.
- Review process design, tooling, inspection detectability, and workload/context before accepting a person-only explanation.

### The same defect recurs after retraining
- Treat training-only correction as suspect.
- Review process capability, validation status, setup controls, maintenance, environmental conditions, measurement system, and recent changes.
- Escalate if recurrence indicates the process is not in a controlled state.

### Supplier repeated the same defect after SCAR closure
- Review supplier qualification, prior similar escapes, process-change visibility, incoming sampling adequacy, and whether the specification was unambiguous.
- Consider requalification, tighter controls, or supplier status escalation if evidence shows repeated ineffectiveness.

### Multiple plausible causes remain open
- Rank hypotheses by evidence strength.
- Keep containment active while confidence is low.
- Prefer targeted data collection over premature closure.

### Product was already distributed before detection
- Expand review to traceability, customer impact, complaint linkage, field status, and whether separate reporting or market action review is required by authorized functions.
- Do not let the NCR close as a purely internal event if distribution materially changes risk.

### CAPA was closed, but the defect returned
- Recheck whether the issue should have been treated as systemic.
- Verify effectiveness criteria, monitoring duration, and whether the action changed the actual control point.
- Review for unintended consequences or incomplete implementation.

## Examples

For a worked example of NCR review, CAPA escalation logic, supplier considerations, and weak vs acceptable closure rationale, see:

- `examples/review-example.md`

Use the example to compare the packet you are reviewing against a realistic good-enough standard rather than an abstract checklist.

## Additional Resources

- `references/review-criteria.md` — compact review matrix for disposition, CAPA triggers, supplier escalation, and closure evidence
- FDA QMSR overview: https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/quality-management-system-regulation-qmsr
- 21 CFR 820.90 Nonconforming product: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-820/section-820.90
- 21 CFR 820.100 CAPA: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-820/section-820.100
- 21 CFR 820.50 Purchasing controls: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-820/section-820.50
- FDA Process Validation guidance: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/process-validation-general-principles-and-practices
- ICH Q9(R1) Quality Risk Management: https://database.ich.org/sites/default/files/ICH_Q9-R1_Guideline_Step4_2023_0118.pdf
- ICH Q10 Pharmaceutical Quality System: https://database.ich.org/sites/default/files/Q10_Guideline.pdf

Use primary sources for final policy interpretation. This skill helps structure review judgment; it does not replace approved procedures or authorized quality/regulatory decisions.

## Related Skills

Use a different or additional skill when the work shifts into:

- complaint handling or post-market surveillance
- regulatory reporting assessment
- process validation protocol design or statistical study design
- supplier qualification or audit program design
- change control or document-control execution
- detailed manufacturing process engineering outside the nonconformance workflow
