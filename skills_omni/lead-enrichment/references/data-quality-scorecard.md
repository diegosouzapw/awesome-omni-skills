# Data Quality Scorecard

Use this scorecard to measure enrichment quality beyond simple fill rate.

## Core metrics

| Metric | Formula | Why it matters | Suggested review threshold |
| --- | --- | --- | --- |
| Fill rate by field | populated records / eligible records | measures completeness | set field-specific targets |
| Verified-email rate | verified emails / email-populated records | measures outreach readiness | improve over time |
| Duplicate rate | duplicate records / total records | measures uniqueness and CRM hygiene | trend downward |
| Overwrite rate | overwritten fields / updated fields | measures writeback risk | investigate spikes |
| Stale-record rate | records beyond freshness window / total records | measures freshness | review by field type |
| Match-confidence distribution | records by confidence band | measures trustworthiness | avoid hidden low-confidence tails |
| Cost per qualified record | total enrichment cost / qualified records | measures spend efficiency | compare across workflows |
| Cost per verified contact | total enrichment cost / verified contacts | measures outbound value | compare across providers |

## Suggested freshness windows

These are operating examples, not universal laws.

| Field type | Suggested review window |
| --- | --- |
| Email verification | 7-30 days depending on usage |
| Job title | 30-60 days |
| Company headcount | 60-180 days |
| Industry | 90-180 days |
| Technographics | 30-90 days |
| Intent signals | as short as operationally possible |

## Confidence bands

Define bands before use.

| Band | Meaning | Action |
| --- | --- | --- |
| High | trusted for primary workflow | eligible for sync or routing |
| Medium | usable with caution | may require verification or human review |
| Low | weak confidence | do not overwrite trusted values |

## Weekly review questions

- Which fields improved coverage without degrading quality?
- Which provider step adds the most incremental yield?
- Which provider step adds cost without enough value?
- Are duplicates rising after sync?
- Are outreach failures concentrated in one segment or source?
- Are stale fields being re-used too long?
