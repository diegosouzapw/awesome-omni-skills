# Health Score Design Guide

Use this guide when a customer health score is missing, noisy, or not trusted.

## Design principles

A useful health score should be:

- **predictive** of churn, contraction, renewal, or expansion
- **timely** enough to act on before the outcome is locked in
- **explainable** to CS, sales, product, and leadership
- **segment-aware** rather than one-size-fits-all
- **action-linked** so each risk state maps to a next step

## Signal categories to consider

- product usage depth and frequency
- completion of core workflows
- onboarding milestone completion
- support volume and sentiment
- executive or champion engagement
- outcome attainment or ROI evidence
- billing and payment health
- renewal timing and unresolved blockers

## Avoid these common mistakes

- overweighting logins without tying them to value
- using only lagging indicators
- copying weights from another company without validation
- mixing data that updates daily with data that updates quarterly without care
- automating high-stakes actions from low-confidence signals

## Validation workflow

1. List candidate signals.
2. Mark each one as leading, lagging, or descriptive.
3. Check whether the signal existed before recent churn or expansion events.
4. Test whether the score would have flagged the right accounts in time.
5. Remove noisy inputs.
6. Recalibrate by segment.
7. Review quarterly or after major product or pricing changes.

## Minimal scorecard template

| Signal | Why it matters | Leading or lagging | Segment fit | Weight | Action if weak |
| --- | --- | --- | --- | --- | --- |
| Core workflow completion | Indicates realized value | Leading | SMB | 20% | onboarding assist |

## Precision check

Before automating, answer:

- Did recently churned accounts trend red in time?
- Did healthy accounts remain stable?
- Which signals create the most false alarms?
- Which actions will be triggered, and who owns them?
