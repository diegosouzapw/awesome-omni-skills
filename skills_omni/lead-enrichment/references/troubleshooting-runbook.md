# Troubleshooting Runbook

## 1. Low enrichment coverage

Check:
- identifier completeness
- domain normalization
- provider order by field
- records filtered too late

Measure:
- fill rate by field
- fill rate by provider step
- share of rows missing minimum identifiers

## 2. High credit burn

Check:
- expensive columns running too early
- lack of pre-filters
- stale-data refresh running too often
- tertiary providers with weak incremental yield

Measure:
- cost per row
- cost per qualified record
- cost per verified contact

## 3. Duplicate CRM sync

Check:
- company identity rules
- contact identity rules
- overwrite logic
- post-sync QA coverage

Measure:
- duplicate rate before sync
- duplicate rate after sync
- records created vs updated

## 4. Good verification but poor deliverability

Check:
- catch-all mix
- role-address share
- verification age
- suppression sync
- sender authentication status

Measure:
- bounce rate
- complaint rate
- reply rate by segment

## 5. Score drift

Check:
- stale intent inputs
- too much weight on firmographics
- missing negatives
- score bands not calibrated to outcomes

Measure:
- meeting rate by score band
- opportunity rate by score band
- win rate by score band

## 6. Compliance rejection

Check:
- lawful basis note
- minimization
- approved-provider status
- retention and suppression controls

Measure:
- number of blocked fields
- number of blocked providers
- unresolved review questions
