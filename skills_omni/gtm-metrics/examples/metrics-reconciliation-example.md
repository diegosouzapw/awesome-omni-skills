# Metrics Reconciliation Example

## Scenario

The CRM shows pipeline coverage of 3.4x, while the BI dashboard shows 2.7x. Leadership wants to know which number is correct.

## Reconciliation checklist

1. Confirm the quota denominator in both reports.
2. Check whether both reports use the same opportunity stage set.
3. Check whether both use current quarter close date or created date.
4. Check whether duplicates or merged accounts were handled differently.
5. Check whether reopened opportunities are counted the same way.
6. Check timezone and refresh timing.

## Example root causes

- CRM report includes all open opportunities above a stage threshold.
- BI report excludes stale opportunities with old close dates.
- CRM refreshed in real time; BI refreshed overnight.
- Enterprise pilot opportunities are included in one report but not the other.

## Better final answer

- **Source of truth for pipeline stage and opportunity status:** CRM
- **Source of truth for executive coverage reporting:** BI model, because it applies stale-close-date hygiene rules
- **Required follow-up:** write one coverage definition, document excluded stale opportunities, align refresh notes, and label CRM coverage as raw operational view if retained

## Lesson

Do not ask which tool is “right” until the metric definition, time logic, and inclusion rules are aligned.
