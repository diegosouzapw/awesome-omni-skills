# Deliverability Audit Runbook

Use this runbook before launch, after major changes, or when inbox placement degrades.

## Preflight checklist

### Authentication and alignment

- SPF record exists and authorizes the actual sending services
- DKIM signing is enabled for each sending domain
- DMARC record is published and monitored
- Authentication is aligned with the visible sender domain where applicable
- Any technical uncertainty is escalated to the email infrastructure owner

### Sender experience and policy checks

- Unsubscribe or removal path is clear and tested
- High-volume or bulk-like sending behavior has appropriate sender controls
- Complaint handling is monitored
- Tracking domains and links are reviewed before rollout changes

### List and traffic quality

- Addresses are verified before send
- High-risk, stale, or unknown records are excluded
- Suppressions are synced across all sending systems
- Ramp plans avoid sudden unexplained volume jumps

## Monitoring checklist

Review these regularly during launch and scale-up:

- bounce rate
- complaint or spam-rate indicators
- unsubscribe rate
- positive reply quality
- authentication pass/fail signals
- segment-level performance changes after list or copy updates

## Incident response: spam-folder placement

### Symptoms

- placement drops after scale-up
- Gmail or Yahoo performance declines first
- replies and conversions fall even when sequence logic is unchanged

### Checks

1. Did volume jump suddenly?
2. Did the audience broaden to lower-confidence data?
3. Did links, tracking, templates, or sending domains change?
4. Are SPF, DKIM, and DMARC still passing as expected?
5. Is unsubscribe handling easy and functioning?
6. Did complaint indicators increase?

### Immediate containment

- pause scaling
- reduce to highest-confidence segments
- remove risky first-touch elements if recently added
- coordinate with technical owners for auth/header review

## Incident response: bounce spike

### Symptoms

- hard bounces rise quickly after a new import or enrichment pass

### Checks

1. How old is the data?
2. Was verification rerun before launch?
3. Were catch-all or guessed addresses included?
4. Did suppressions fail to propagate after previous bounces?

### Immediate containment

- stop sends to affected data source
- re-verify and split records by confidence
- reconcile suppression state everywhere

## Scaling gate

Do not recommend volume expansion until all of the following are true:

- authentication and policy checks are complete
- complaint and unsubscribe handling is stable
- bounce rate is controlled
- list quality is acceptable
- positive reply quality is strong enough to justify more volume
