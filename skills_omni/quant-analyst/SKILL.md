---
name: "quant-analyst"
description: "quant-analyst workflow skill. Use this skill when the user needs Build financial models, backtest trading strategies, and analyze market data. Implements risk metrics, portfolio optimization, and statistical arbitrage and the operator should rely on the packaged workflow, review references, example, and provenance before merging or handing off."
version: "0.0.1"
category: "data-ai"
tags:
  - "quant-analyst"
  - "build"
  - "financial"
  - "models"
  - "backtest"
  - "trading"
  - "strategies"
  - "and"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "quant-analyst"
family_name: "quant-analyst"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/quant-analyst"
upstream_skill: "skills/quant-analyst"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "quant-analyst"
---

# quant-analyst

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/quant-analyst` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it for quant research and review tasks such as:
- building or reviewing financial models
- backtesting trading strategies
- analyzing market and event data
- computing risk metrics
- evaluating portfolio optimization outputs
- reviewing statistical arbitrage or factor research

Keep the upstream workflow, copied support files, and provenance visible. Treat outputs as research, diagnostics, and scenario analysis rather than personalized investment advice or live trading instructions.

For higher-confidence execution, use:
- `references/review-criteria.md` for a compact review rubric
- `references/troubleshooting-patterns.md` for quant-specific diagnostic patterns
- `examples/review-example.md` for a worked review example

## When to Use This Skill

Use this skill when the task is primarily a **quant research or quant workflow review** problem.

### Use it for

- Reviewing whether a backtest is methodologically credible
- Checking for look-ahead bias, survivorship bias, revised-data contamination, or leakage
- Evaluating point-in-time data joins between prices, fundamentals, and events
- Assessing whether train/validation/test splits are time-safe and walk-forward aware
- Reviewing risk metrics such as drawdown, Sharpe, turnover, exposure, and concentration
- Examining optimizer setup, constraints, feasibility, and sensitivity
- Turning a naive strategy summary into a more decision-useful research report
- Preserving provenance from imported workflow files while improving operational quality

### Do not use it for

- Personalized investment advice or recommendations to buy, sell, or short a specific asset
- Broker-specific order routing or live execution playbooks
- Legal, tax, accounting, or compliance sign-off
- Pure data engineering tasks with little quant judgment involved
- Production deployment design, monitoring infrastructure, or exchange connectivity

If the request drifts into data pipelines, deployment, or general financial education, route to a more suitable skill if available.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First review of a dataset, model, or backtest | `references/review-criteria.md` | Gives a compact rubric for leakage, timing integrity, realism, constraints, and reproducibility |
| Suspicious or unstable results | `references/troubleshooting-patterns.md` | Helps diagnose common quant failure modes without unsafe shortcuts |
| Need a concrete response pattern | `examples/review-example.md` | Shows how to critique a strategy proposal and present findings clearly |
| Provenance or import lineage matters | `metadata.json` and `ORIGIN.md` | Confirms source, copied path, and editorial history before handoff |
| Routine execution | `SKILL.md` | Keeps the operator focused on the smallest safe workflow that materially changes the outcome |

## Workflow

1. **Clarify the research question**
   - Identify the asset universe, horizon, target variable, rebalance cadence, and decision context.
   - Ask whether the task is exploratory research, a comparison study, or a decision-support review.
   - State known limits up front: missing data, unavailable timestamps, limited history, or execution assumptions.

2. **Validate data timing and point-in-time availability**
   - Confirm what each timestamp means: observation time, publication time, exchange close, or vendor load time.
   - Normalize time zones and trading calendar assumptions before joining series.
   - Check whether fundamentals, macro data, or event data may include revised values or delayed publication.
   - Prefer point-in-time safe joins, including backward-looking as-of logic when event data and market data live on different clocks.
   - Explicitly ask: could this dataset contain survivorship filtering, revised-history contamination, or post-event timestamps?

3. **Define the evaluation design before modeling**
   - Use time-ordered train/validation/test windows unless a cross-sectional design is clearly justified.
   - Separate research, tuning, and final evaluation.
   - Fit scalers, imputers, encoders, and feature selection only on training windows.
   - Prefer walk-forward or rolling evaluation when market nonstationarity matters.
   - Treat a single aggregate performance metric as insufficient evidence.

4. **Review strategy logic and feature realism**
   - Verify that signals are available when trades are assumed to occur.
   - Check holding period, rebalance frequency, and turnover implications.
   - Ask whether the strategy depends on unrealistic fills, unlimited borrow, or unbounded liquidity.
   - Label outputs as **exploratory** if costs, slippage, turnover, or capacity are not modeled.

5. **Evaluate backtest realism**
   - Require explicit assumptions for fees, slippage, spread, latency where relevant, liquidity, borrow constraints, leverage, and position caps.
   - Report not only return metrics but also drawdown, turnover, concentration, exposure drift, and regime sensitivity.
   - Distinguish between paper performance and decision-useful evidence.
   - If assumptions are weak, say so directly rather than presenting precise but fragile metrics.

6. **Assess portfolio optimization carefully**
   - State the objective, inputs, and all constraints before interpreting weights.
   - Check feasibility, concentration, leverage, turnover, and shorting assumptions.
   - Do not accept optimizer outputs just because a solver returned a solution.
   - Ask how sensitive the solution is to expected returns, covariance estimation, and constraint changes.

7. **Capture reproducibility artifacts**
   - Record data snapshot dates, source names, symbols/universe rules, time windows, and parameter settings.
   - If randomization or simulation is used, log seeds or generator configuration.
   - Preserve enough information for another reviewer to reproduce or challenge the result.
   - Only escalate to containerized or tightly pinned environments if dependency drift or solver instability is blocking reliable reruns.

8. **Produce a bounded conclusion**
   - Summarize what is supported, what is only exploratory, and what still needs validation.
   - Highlight the most material methodological risks.
   - Keep conclusions framed as research findings, not trade recommendations.

## Imported Workflow Notes

### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

### Imported: Focus Areas

- Trading strategy development and backtesting
- Risk metrics such as VaR, Sharpe ratio, and max drawdown
- Portfolio optimization including Markowitz and Black-Litterman style workflows
- Time series analysis and forecasting
- Options pricing and Greeks
- Statistical arbitrage and pairs trading

Use the imported focus areas as scope signals, but apply the review discipline above before endorsing any output.

## Troubleshooting

Use the compact patterns below first, then open `references/troubleshooting-patterns.md` when deeper diagnosis is needed.

### 1. Backtest performance looks improbably strong

**Symptom**
- Extremely high Sharpe, near-perfect hit rate, or immediate reaction to events with no realistic delay

**Likely cause**
- Look-ahead bias, timestamp misalignment, forward fills across event boundaries, or leakage in preprocessing

**What to check**
- Whether joined features were actually available before the trade decision
- Whether transforms were fit on full-sample data
- Whether event timestamps were aligned with release time rather than calendar date alone

**Safe next step**
- Rebuild the evaluation with point-in-time joins and time-ordered splits; downgrade prior conclusions until the issue is resolved

### 2. Strong in-sample results collapse out of sample

**Symptom**
- Tuned strategy performs well in development but degrades sharply in later windows

**Likely cause**
- Overfitting, unstable factor exposure, or regime change

**What to check**
- Number of tuning decisions made
- Rolling metrics, rolling exposures, and parameter stability
- Whether the holdout was truly untouched during design

**Safe next step**
- Simplify the strategy, rerun with walk-forward validation, and report regime sensitivity rather than masking instability with one full-period metric

### 3. Optimizer returns extreme or infeasible weights

**Symptom**
- Concentrated allocations, unstable weights, solver errors, or weights that violate practical limits

**Likely cause**
- Ill-conditioned covariance estimates, incompatible constraints, missing turnover controls, or unrealistic expected return inputs

**What to check**
- Constraint set, bounds, leverage assumptions, covariance quality, and sensitivity to small input changes

**Safe next step**
- Tighten the problem formulation, add practical constraints, and present feasibility and sensitivity checks before treating the output as usable

## Examples

### Example 1: Review a strategy proposal

**User request**
> Review my earnings-surprise strategy backtest. I bought stocks with positive surprise on the announcement date and got a Sharpe of 3.1.

**Good operator response pattern**
- Ask when the surprise data became available relative to the trade timestamp.
- Check whether the join between earnings events and price bars is point-in-time safe.
- Ask whether the strategy uses survivorship-biased universe filters.
- Require slippage, transaction costs, turnover, and liquidity assumptions.
- Reframe the Sharpe ratio as exploratory until those checks pass.

See `examples/review-example.md` for a full worked example.

### Example 2: Review an optimizer output

**User request**
> My mean-variance optimizer suggests 65% in one asset and 35% in another. Is this good?

**Good operator response pattern**
- Ask for the objective, covariance method, return estimates, and constraints.
- Check feasibility, concentration, leverage, turnover, and shorting rules.
- Request sensitivity analysis under slightly changed expected returns and covariance assumptions.
- Present the weights as model output, not as a recommendation.

## Additional Resources

- `references/review-criteria.md` - detailed review rubric for quant datasets, backtests, and optimization outputs
- `references/troubleshooting-patterns.md` - deeper diagnostic patterns for common quant failure modes
- `examples/review-example.md` - worked example of a leakage-aware strategy review
- `metadata.json` - imported source metadata
- `ORIGIN.md` - provenance and editorial history

## Related Skills

Route to another skill when the task is mainly:
- data cleaning or pipeline construction rather than quant judgment
- statistical model implementation without trading or portfolio context
- visualization/reporting only
- deployment, monitoring, or production MLOps concerns

Stay with `quant-analyst` when the hard part is judging whether market data analysis, backtesting, or portfolio logic is methodologically credible and decision-useful.
