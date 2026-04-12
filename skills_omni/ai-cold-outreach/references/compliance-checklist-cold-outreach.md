# Compliance Checklist for Cold Outreach

Use this checklist before launch and during incident review.

> This is operational guidance, not legal advice. Confirm jurisdiction-specific requirements with qualified counsel or compliance owners.

## 1. Geography and audience intake

- Which countries or regions will receive outreach?
- Are any segments restricted pending legal approval?
- Does the team know whether contact records include personal data under applicable privacy rules?
- Is the target audience B2B only, or does it include sole traders / consumers in some markets?

## 2. Sender identity and message requirements

- Is the sender identity truthful and recognizable?
- Does the message avoid deceptive subject lines or misleading sender details?
- Is any required business identification information included where applicable?
- Is a valid business contact or physical mailing address process in place where applicable?

## 3. Lawful processing and transparency intake

- Has the organization documented its basis for processing contact data in the target jurisdictions?
- Is the privacy notice current and does it cover outreach-related processing where required?
- Is there an internal owner for data subject requests, suppression requests, or complaints?

## 4. Opt-out and suppression handling

- Is there a clear unsubscribe or removal path?
- Are opt-outs honored promptly across every system, not just the sequencer?
- Is there a master suppression list or equivalent source of truth?
- Are bounced, complained-about, unsubscribed, and do-not-contact records blocked from re-import?
- Are manual removals and CSV uploads covered by the same suppression rules?

## 5. Data minimization and hygiene

- Are only the fields needed for segmentation, personalization, and routing being processed?
- Is stale or low-confidence enrichment excluded from launch lists?
- Is there a retention or review policy for old outreach records?

## 6. Incident checks

Use this section if there is an unsubscribe, complaint, or cross-tool suppression failure.

- Pause sends to affected records or segments.
- Identify every system that stores contact state.
- Determine the source of truth for suppression.
- Verify whether exports, reimports, or sync failures bypassed suppression.
- Record the issue, containment action, owner, and required remediation.

## Minimum operator output

When using this skill, the agent should be able to summarize:

1. target geographies
2. compliance questions still open
3. opt-out and suppression owner
4. systems that must stay in sync
5. whether legal/compliance review is required before launch or scale-up
