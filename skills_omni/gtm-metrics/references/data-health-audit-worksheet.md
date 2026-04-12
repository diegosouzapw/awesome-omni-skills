# Data Health Audit Worksheet

Use this worksheet before trusting pipeline, attribution, or benchmark analysis.

## Quality dimensions

Score each dimension from 1-5 or use a percentage threshold.

| Dimension | What to check | Example failures | Owner | Current status |
| --- | --- | --- | --- | --- |
| Completeness | Required fields populated | missing lead source, missing stage dates | | |
| Accuracy | Values reflect reality | wrong account owner, outdated ARR | | |
| Consistency | Same logic across systems | inconsistent stage naming | | |
| Timeliness | Data updated fast enough | stale close dates, old firmographics | | |
| Validity | Allowed values and formats | malformed dates, invalid picklists | | |
| Uniqueness | Duplicate control | duplicate accounts or contacts | | |

## Required object checks

### Accounts
- owner assigned
- segment assigned
- ICP fit or equivalent field populated
- duplicate resolution rule applied

### Contacts / leads
- lead source populated
- lifecycle stage valid
- response owner assigned
- enrichment freshness within policy

### Opportunities
- stage current
- amount current
- close date current
- next step present
- source attribution fields populated if used

## Threshold guidance

- **Strong:** quality supports executive decisions
- **Watch:** use with caveats and targeted remediation
- **Weak:** do not rely on for benchmark comparisons or precise forecasting

## Remediation log

| Issue | Root cause | Impacted metrics | Fix | Owner | Due date |
| --- | --- | --- | --- | --- | --- |
| | | | | | |
