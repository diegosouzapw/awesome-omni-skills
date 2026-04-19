# Worked Review Example: NCR Escalated to CAPA

This example shows how to review a realistic nonconformance packet. It is illustrative and should be adapted to local procedures.

## Scenario input

**Product:** Sterile single-use tubing set  
**Detection point:** Final visual inspection  
**Issue:** Kink near bonded junction causing restricted flow  
**Affected scope initially identified:** Lot TS-240117, 1,200 units  
**Immediate finding:** 18 defects found during final inspection  
**Supplier involvement:** Tubing material supplied by Supplier A; bond fixture maintained internally  
**Distribution status:** 400 units from the lot already released to finished-goods warehouse; none shipped to customers yet  
**History:** Two prior NCRs in the previous 90 days for related flow restriction defects, both closed with operator retraining and added visual reminders  

## What a reviewer should confirm first

### Containment and product control
Acceptable review notes would confirm:

- lot TS-240117 placed on hold
- finished-goods warehouse stock blocked in ERP/QMS
- WIP from the same bonding line checked for exposure
- traceability to sublots and bonded-junction station confirmed
- no customer shipment yet

If the packet only says "quarantined affected units" with no counts or locations, containment is too weak.

## Initial disposition review

**Proposed by owner:** Rework affected units if kink can be visually identified; scrap units failing reinspection.

**Reviewer assessment:**
- Rework may be acceptable only if the method is defined and reevaluation confirms no performance impact.
- Because some units were already released internally and similar events recently recurred, the case should not be treated as a local one-off NCR.

## Investigation evidence reviewed

### Evidence set
- defect photos and samples from the current lot
- bond fixture maintenance record
- setup sheet revision history
- environmental monitoring and line clearance records
- training records for operators on the line
- incoming tubing CoC and receiving inspection results
- prior two NCRs for similar restriction defects
- complaint history for related flow issues
- in-process bond-force trend data for the last 4 months

### Key findings
- Operators were current on training; no unusual staffing deviation found.
- Bond-force trend showed increasing variability over 6 weeks.
- Preventive maintenance on the bonding fixture was overdue by 19 days.
- Supplier tubing dimension was within the incoming specification, but the specification tolerance was broad enough that low-end material combined with fixture drift increased kink susceptibility.
- Prior NCRs were closed with retraining only; no review of fixture capability or specification robustness had been done.

## Root-cause review

### Weak conclusion example
> Root cause is operator handling error during final assembly. Corrective action: retrain all operators and remind inspectors to look for kinks.

**Why this is weak**
- does not explain recurrence after prior retraining
- ignores overdue maintenance and bond-force drift
- treats final inspection as the main control instead of the process itself
- does not address specification interaction with supplier material variation

### Acceptable conclusion example
> The primary root cause is loss of process control at the bonding step due to overdue fixture maintenance and insufficient monitoring of bond-force variation. A contributing factor is that the tubing specification and incoming acceptance criteria did not adequately protect the process from low-end dimensional variation. Prior events were under-escalated and addressed with training only, so the systemic control weakness remained.

**Why this is acceptable**
- supported by maintenance, trend, and history records
- explains recurrence
- identifies both process and specification/control contributors
- shows why prior local action was ineffective

## NCR vs CAPA decision

**Reviewer decision:** Escalate to CAPA.

**Rationale:**
- repeated similar defect within 90 days
- prior correction ineffective
- released inventory affected, even though not yet shipped
- process control weakness indicated by trend and overdue maintenance
- specification/receiving controls may be insufficient
- issue crosses production, maintenance, and supplier-quality boundaries

A decision to keep this as NCR-only would require strong contrary evidence and is not credible here.

## Supplier review outcome

**Should a SCAR or supplier action be considered?** Yes, but not as the sole remedy.

**Reasoning:**
- Supplier material met the current incoming specification.
- However, the specification may be too broad for the validated process window.
- Internal process drift was also present.

**Reviewer expectation:**
- open supplier discussion or SCAR if specification clarification, tighter controls, or process-capability alignment is needed
- review whether quality agreement or drawing requirements need revision
- do not frame the issue as supplier fault alone

## Example corrective actions

### Weak action plan
- retrain operators
- add visual inspection reminder
- close in 7 days

### Better action plan
- restore and document fixture preventive maintenance compliance
- evaluate fixture capability and define bond-force monitoring limits
- assess whether process revalidation or documented re-verification is required
- tighten or justify tubing dimensional acceptance criteria with supplier-quality input
- revise receiving and in-process monitoring as needed
- review prior related lots for broader exposure
- train affected personnel on the updated control method after process changes are defined

## Effectiveness plan

**Acceptable reviewer expectation:**
- monitor bond-force trend and defect rate for the next 3 production lots or defined time window
- confirm zero repeat kink defects above threshold after maintenance restoration and control updates
- verify revised specification / receiving approach is implemented if changed
- review complaints, in-process defects, and final inspection findings at the end of the monitoring window

## Closure review: weak vs acceptable

### Weak closure rationale
> Actions completed. Operators retrained. No defects found in the next day’s sample. CAPA closed.

**Why reject it**
- implementation-only closure
- no meaningful effectiveness window
- no evidence that process drift or specification weakness was corrected

### Acceptable closure rationale
> Fixture maintenance interval was restored and closed-loop tracked. Bond-force monitoring limits were added to the line record, and three subsequent lots remained within limits with no kink defects observed at in-process or final inspection. Receiving criteria were updated for tubing dimensional review pending formal specification revision with Supplier A. Quality review of the prior two related NCRs concluded they were under-escalated, and management review was informed. CAPA effectiveness verified after 8 weeks with no recurrence.

**Why accept it**
- ties closure to verified causes
- includes implementation and effectiveness evidence
- addresses both internal process control and supplier/specification interface
- explains why recurrence risk is reduced

## Example reviewer output

A concise reviewer summary could read:

> The packet is not suitable for NCR-only closure. Containment of lot TS-240117 is acceptable, but recurrence, prior ineffective retraining-only corrections, overdue fixture maintenance, and process-trend evidence support CAPA escalation. Root cause should be revised from operator error to process-control loss with contributing specification/control factors. Supplier action may be required, but the event should not be framed as supplier-only. Closure should require defined effectiveness monitoring across subsequent lots and confirmation that maintenance, monitoring, and specification/control updates were implemented.
