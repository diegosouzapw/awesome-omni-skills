# Safety and Diagnostics

## Run Gate

Require these facts before a billable run:

- Public target or query.
- Selected Actor and route.
- Current input schema.
- Current pricing source.
- Explicit global result cap.
- Optional platform USD charge cap.
- Optional per-target cap.
- User approval for the external run.

Do not proceed when the target requires access bypass.
Do not place credentials in inputs, outputs, or examples.
Do not place the Apify run option `maxTotalChargeUsd` in Actor input JSON.

## Result Classification

Classify each row before analysis:

| Class | Common signal | Handling |
|:------|:--------------|:---------|
| Data | Expected tweet or profile identifier | Include in analysis |
| Diagnostic | `status` and `message` fields | Report separately |
| Filtered | Actor reports a filter reason | Exclude and count |
| Duplicate | Repeated stable identifier | Apply declared dedupe policy |
| Unavailable | Target visibility or availability marker | Report without inference |
| Partial | Run or target stopped before completion | Preserve partial status |

Never coerce diagnostic rows into empty profiles or posts.
Never hide partial, unavailable, or filtered counts.

## Audience Interpretation

Use stable user IDs when available.
Normalize handles before joining datasets.
Do not join on display names.

Keep these limits visible:

- Public relation data can be incomplete.
- Platform visibility can change between runs.
- A follow does not prove endorsement.
- Audience overlap does not prove shared intent.
- Verification status does not prove expertise.
- Profile fields can be stale or self-reported.

## Tweet Interpretation

Keep canonical post IDs and URLs.
Retain search terms for multi-query attribution.
Separate direct posts, replies, quotes, and reposts when relevant.

Do not infer sentiment from engagement counts alone.
Do not treat search ranking as population prevalence.
Do not claim exhaustive coverage without evidence.

## Retry Policy

Do not automatically retry a billable run.

Before retrying:

1. Inspect the run status and diagnostics.
2. Confirm whether partial results were already billed.
3. Correct the query, target, or input field.
4. Recalculate the result cap.
5. Request approval again.

## Delivery Checklist

- [ ] Name the Actor and route.
- [ ] State the total and per-target limits.
- [ ] Record retrieval time.
- [ ] Count data and diagnostic rows separately.
- [ ] Preserve source metadata.
- [ ] State dedupe behavior.
- [ ] Describe incomplete targets.
- [ ] Separate observations from interpretations.
- [ ] Link only to resulting Apify artifacts when authorized.
