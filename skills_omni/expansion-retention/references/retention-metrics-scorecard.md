# Retention Metrics Scorecard

Use this worksheet before recommending tactics.

## Core formulas

### Gross Revenue Retention (GRR)

```text
GRR = (Starting recurring revenue - contraction - churn) / Starting recurring revenue × 100
```

Use GRR to measure how well existing revenue is retained before expansion is counted.

### Net Revenue Retention (NRR)

```text
NRR = (Starting recurring revenue + expansion - contraction - churn) / Starting recurring revenue × 100
```

Use NRR to measure whether the installed base is shrinking, stable, or growing before adding new customers.

### Logo churn

```text
Logo churn = Customers lost during period / Customers at start of period × 100
```

### Revenue churn

```text
Revenue churn = Recurring revenue lost during period / Starting recurring revenue × 100
```

### Expansion contribution

```text
Expansion contribution = Expansion revenue / Starting recurring revenue × 100
```

### Time to value (TTV)

Measure the elapsed time from contract start or signup to the first meaningful customer outcome.

## Baseline collection prompts

- What period are you measuring: month, quarter, or year?
- What revenue base is used in the calculation?
- Are downgrades separated from churn?
- Are one-time services excluded from recurring retention metrics?
- Can you split results by segment, plan, and cohort?
- What is the current median time to first value?

## Interpretation notes

- Weak GRR usually means retention systems need work before expansion systems are scaled.
- Strong NRR can hide churn in smaller segments if expansion from a few accounts masks losses.
- Revenue churn and logo churn should be reviewed together; one without the other can mislead.
- TTV is often the fastest diagnostic for first-90-day churn.

## Output template

```text
Period:
Starting recurring revenue:
Expansion:
Contraction:
Churn:
GRR:
NRR:
Logo churn:
Revenue churn:
Median TTV:
Largest weak segment:
Primary hypothesis:
```
