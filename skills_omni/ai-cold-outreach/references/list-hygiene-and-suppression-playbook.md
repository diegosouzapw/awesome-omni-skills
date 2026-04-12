# List Hygiene and Suppression Playbook

Use this playbook before import, before launch, and after any complaint, bounce, or unsubscribe incident.

## Pre-send list QA

- deduplicate by person, company, and email where appropriate
- remove invalid or unverifiable records
- flag role accounts according to campaign policy
- review record age and stale-source risk
- confirm required segmentation fields are present
- exclude bounced, unsubscribed, complained-about, and do-not-contact records

## Verification expectations

Before a record enters a sequence, confirm:

- email status is verified or high-confidence per team policy
- verification is recent enough for the send window
- guessed or catch-all records are handled intentionally, not by accident

## Suppression reconciliation

Check every system that may hold outreach state:

- CRM
- sequencer / sending platform
- enrichment tables
- spreadsheets or CSV workflows
- reply-routing tools

For each system, answer:

- does it ingest suppression updates?
- can it export records without suppression flags?
- who owns reconciliation if state diverges?

## High-risk failure modes

### Stale enrichment

Symptoms:
- bounce spikes after using older lists
- personalization refers to outdated org changes

Response:
- re-verify contacts
- refresh key context fields before launch

### Re-imported suppressions

Symptoms:
- previously unsubscribed contacts reappear in new campaigns

Response:
- enforce master suppression before imports
- audit CSV and enrichment workflows for bypass paths

### Low-quality personalization inputs

Symptoms:
- AI-generated hooks sound specific but are factually wrong

Response:
- restrict AI prompts to validated fields
- remove unsupported claims from copy generation

## Minimum operator output

When reviewing list quality, the agent should summarize:

1. source systems used
2. verification status assumptions
3. suppression owner and source of truth
4. major list-quality risks
5. whether the segment is safe to launch, rework, or pause
