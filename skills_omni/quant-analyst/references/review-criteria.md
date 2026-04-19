# Quant Review Criteria

Use this rubric when reviewing a dataset, backtest, forecast, or portfolio construction result. The goal is not to maximize the number of metrics shown. The goal is to determine whether the result is methodologically credible and decision-useful.

## 1. Data timing and point-in-time integrity

Check all of the following:

- **Timestamp meaning is explicit**: each timestamp is identified as observation time, market close, publication time, filing acceptance time, or vendor ingestion time.
- **Time zone handling is explicit**: timestamps are normalized and compared in a consistent market clock.
- **Frequency alignment is deliberate**: intraday, daily, and event data are not mixed casually.
- **Joins are point-in-time safe**: event or fundamentals data are joined to prices using logic that does not peek forward.
- **Revisions risk is disclosed**: macro, fundamentals, and analyst datasets may later revise history.
- **Universe construction is documented**: survivorship bias is considered if the universe is based on current membership only.

Review prompts:
- Could any field contain values not actually known at the time of the trade decision?
- Are there forward fills that cross information boundaries?
- If event data are joined to prices, should this be a backward-looking as-of join rather than an exact join?

## 2. Evaluation design and leakage prevention

Check all of the following:

- **Train/validation/test is ordered by time** unless a different design is explicitly justified.
- **Preprocessing is fit only on training windows**: scaling, imputation, encoding, and feature selection are not fit on the full sample.
- **Tuning is separated from final evaluation**: the holdout is not reused during model selection.
- **Walk-forward or rolling validation is used** when regime instability matters.
- **Cross-sectional and time-series logic are not confused**.

Review prompts:
- Was any transformation computed using future observations?
- Did repeated tuning effectively leak holdout information into the final model choice?
- Are results reported only as one full-period score, hiding instability across windows?

## 3. Strategy realism and execution frictions

Check all of the following:

- **Trade timing is explicit**: signal time, order time, and assumed fill time are distinguishable.
- **Transaction costs are modeled or explicitly omitted**.
- **Slippage and spread assumptions are stated**.
- **Turnover is reported**.
- **Liquidity or capacity limits are discussed**.
- **Borrow and shorting assumptions are stated** when relevant.
- **Rebalance schedule is explicit**.

Interpretation rule:
- If costs, slippage, turnover, or liquidity assumptions are missing, label the result **exploratory**, not decision-ready.

## 4. Risk and portfolio construction quality

Check all of the following:

- **Objective is stated**: return maximization, risk minimization, tracking error control, utility, or another target.
- **Constraints are stated**: long-only, leverage, sector limits, turnover caps, position caps, exposure limits, or shorting rules.
- **Feasibility is checked** before interpreting weights.
- **Concentration is reported**.
- **Sensitivity is reviewed** under changed expected returns or covariance assumptions.
- **Risk metrics extend beyond headline return**: drawdown, volatility, turnover, exposure drift, and concentration are included where relevant.

Red flags:
- Solver output is treated as valid without checking whether the problem formulation matches market reality.
- Tiny changes in inputs produce dramatically different weights.
- The portfolio result is dominated by one unstable estimate.

## 5. Reproducibility and traceability

Check all of the following:

- **Dataset snapshot date or extraction date is recorded**.
- **Universe definition is recorded**.
- **Evaluation windows are recorded**.
- **Hyperparameters and config values are recorded**.
- **Random seed or generator setup is recorded** when simulation or randomization is used.
- **Package or environment details are available** when reruns depend on fragile stacks or solvers.
- **Known limitations are captured** in the review output.

Minimum reproducibility packet:
- source names
- snapshot date
- symbols/universe rules
- time windows
- key assumptions
- parameters
- randomness control details if used

## 6. Reporting standard

A good quant review should end with these sections:

1. **What appears supported**
2. **Major methodological risks**
3. **What is still exploratory**
4. **What additional validation is needed**
5. **Reproducibility notes**

## Quick disposition guide

- **Pass with caveats**: methodology mostly holds, but assumptions and limits are clearly disclosed.
- **Exploratory only**: signal may be interesting, but realism or leakage controls are incomplete.
- **Do not rely on result yet**: point-in-time integrity, leakage prevention, or feasibility checks are missing.
