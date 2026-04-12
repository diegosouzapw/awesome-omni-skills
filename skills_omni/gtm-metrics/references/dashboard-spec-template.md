# Dashboard Spec Template

Use this template to turn a metric list into a decision-oriented dashboard.

## Dashboard identity

- **Dashboard name:**
- **Audience:** Board / Executive / Operator
- **Primary decisions supported:**
- **Review frequency:** Daily / Weekly / Monthly / Quarterly
- **Owner:**

## Design rules

- Keep only the metrics needed for the intended decisions.
- Show trend, target, and current status for every KPI.
- Avoid mixing sources without a reconciliation note.
- State last refresh time visibly.

## Metric table

| Metric | Why it is on this dashboard | Source of truth | Owner | Refresh cadence | Target | Threshold/action rule |
| --- | --- | --- | --- | --- | --- | --- |
| | | | | | | |

## Visual layout

### Section 1: Topline summary
- Which 3-5 metrics must be seen first?
- What trend period will be shown?
- What comparison is used: target, prior period, rolling average?

### Section 2: Diagnosis
- Which breakdowns help explain movement?
- Which segments or cohorts must be filterable?
- Which metrics should be paired to avoid misreading?

### Section 3: Action queue
- Which metrics trigger immediate owner follow-up?
- What notes or action log should be attached?

## Anti-pattern checks

- [ ] Fewer metrics than the team initially requested
- [ ] Every metric has a written definition
- [ ] Every metric has an owner
- [ ] Every metric has a target or threshold
- [ ] Trends are shown, not just snapshots
- [ ] Source-of-truth conflicts are documented
- [ ] The dashboard answers a decision, not just curiosity
