# Prioritization Scorecard

Use this scorecard to compare candidate extraction slices consistently.

## Scoring Model

Score each dimension from **1 to 5**.

- **1** = poor / high risk / unclear
- **3** = moderate / mixed
- **5** = strong / low risk / clear

Suggested weighted formula:

```text
Priority Score =
  (Business Value x 3) +
  (Seam Clarity x 3) +
  (Data Ownership Clarity x 3) +
  (Team Readiness x 2) +
  (Observability Readiness x 1)
  - (Coupling Risk x 3)
  - (Rollback Complexity x 2)
  - (Compliance Sensitivity x 1)
```

Adjust weights if the organization has stronger regulatory or operational constraints.

## Dimensions

### Positive factors
- **Business Value** — customer, revenue, reliability, or speed impact
- **Seam Clarity** — confidence in the boundary as a coherent capability
- **Data Ownership Clarity** — confidence that reads/writes can be owned cleanly
- **Team Readiness** — owning team exists and can support the slice
- **Observability Readiness** — metrics, logs, alerts, and runbooks are feasible

### Negative factors
- **Coupling Risk** — degree of code, runtime, or workflow entanglement
- **Rollback Complexity** — difficulty of safe reversal after cutover
- **Compliance Sensitivity** — privacy, audit, or regulatory burden that slows safe change

## Worksheet

| Candidate | Value | Seam | Data | Team | Observability | Coupling Risk | Rollback | Compliance | Score | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | | | | | |

## Interpretation

- **Strong first-slice candidate:** high score, low data ambiguity, manageable rollback
- **Good later candidate:** high value but blocked by data, platform, or ownership gaps
- **Defer candidate:** high coupling, unclear ownership, or likely distributed-monolith risk

## Tie-Breakers

When total scores are close, prefer the candidate that:

1. proves deployability sooner
2. reduces coupling materially
3. has a clearer owning team
4. can be rolled back safely
5. creates reusable migration patterns for later phases
