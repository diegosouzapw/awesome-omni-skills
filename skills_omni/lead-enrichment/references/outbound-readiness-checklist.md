# Outbound Readiness Checklist

Use this before handing enriched records to SDR or cold outreach workflows.

## Data readiness

- [ ] Required audience fields are present
- [ ] Emails were verified within the required recency window
- [ ] Catch-all records are segmented
- [ ] Risky or unverifiable records are segmented or excluded
- [ ] Role-based addresses are removed or deprioritized
- [ ] Suppression and opt-out lists are synced
- [ ] Prior disqualifications are respected

## Sender readiness

- [ ] Sending domain authentication is configured
- [ ] SPF is valid
- [ ] DKIM is valid
- [ ] DMARC is configured
- [ ] Complaint and bounce monitoring are in place
- [ ] Inbox or domain warmup expectations are understood by the owner

## Segmentation and control

- [ ] High-risk segments are isolated from standard sends
- [ ] Daily volume limits are defined by the outbound owner
- [ ] Market, geography, and persona filters match the intended campaign
- [ ] Personalization fields are present only where they meet quality expectations

## Go / no-go prompts

Do not hand off if any of these are true:

- suppression handling is unclear
- verification is stale
- authenticated sender setup is unknown
- catch-all share is too high for the intended campaign
- the segment contains unsupported or noncompliant records
