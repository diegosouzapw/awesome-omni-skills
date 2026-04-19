# Quant Troubleshooting Patterns

Use this reference when results are suspicious, unstable, or difficult to interpret. Each pattern is written to support safe review, not to force a strategy to look better.

## Pattern 1: Improbably good backtest from timestamp leakage

### Symptom
- Sharpe ratio is unusually high for the market and horizon
- Hit rate looks implausibly stable
- Strategy appears to react to earnings, macro releases, or news with no operational delay
- Backtest behaves much better than any later paper or holdout result

### Likely causes
- Event timestamps were aligned by date instead of true release time
- Features were joined using exact matches that accidentally included future records
- Forward fill crossed a release boundary
- Scaling, winsorization, or feature selection used the full dataset
- Revised or cleaned historical data created hindsight advantages

### Checks
- Inspect a few rows around event boundaries by hand
- Verify whether timestamps refer to publication, filing acceptance, observation, or end-of-day mark
- Confirm join direction and tolerance for event-to-price merges
- Verify that every transform was fit only on the training window
- Check whether the dataset provider publishes revised history

### Safe next steps
- Rebuild joins using point-in-time safe logic
- Replace full-sample preprocessing with training-window-only transforms
- Re-run on a later untouched holdout
- Downgrade the original result to exploratory until the timing issue is resolved

## Pattern 2: Strong development results collapse in walk-forward testing

### Symptom
- Performance is strong in research windows and weak in later windows
- A strategy works only in one historical regime
- Factor exposures drift materially over time
- Small specification changes sharply reduce performance

### Likely causes
- Overfitting from repeated tuning
- Regime dependence or structural break
- Feature relationships are unstable
- The holdout period was implicitly used during model design
- The strategy depends on a market microstructure condition that no longer holds

### Checks
- Plot rolling return, drawdown, and turnover metrics
- Inspect rolling coefficients, betas, or feature importance where applicable
- Count how many model choices were made after seeing results
- Compare behavior across subperiods, sectors, volatility regimes, or rate environments
- Check whether the strategy survives simpler specifications

### Safe next steps
- Simplify the model and reduce degrees of freedom
- Use explicit walk-forward validation and report variation across windows
- Recast the conclusion as regime-conditional if the edge is not stable
- Avoid hiding instability behind a single full-sample score

## Pattern 3: Optimizer outputs are extreme, unstable, or infeasible

### Symptom
- Weights are concentrated in a few names
- Tiny input changes lead to large swings in allocation
- Solver reports infeasibility or numerical problems
- Output violates practical portfolio limits even if the math solved

### Likely causes
- No meaningful concentration or turnover controls
- Expected return estimates are noisy or overfit
- Covariance matrix is ill-conditioned or poorly estimated
- Constraints conflict with each other
- The problem formulation omits market realities such as leverage, borrow, or lot-size assumptions

### Checks
- Review the exact objective and every constraint
- Test whether the covariance estimate is stable across windows
- Perturb expected returns slightly and inspect weight sensitivity
- Confirm whether long-only, leverage, sector, turnover, and position bounds were encoded
- Separate mathematical feasibility from practical usability

### Safe next steps
- Add practical bounds and turnover controls
- Re-estimate risk inputs more robustly if justified
- Report concentration and sensitivity alongside headline performance
- Do not present weights as recommendations without feasibility and robustness checks

## Pattern 4: Results change across reruns without obvious code changes

### Symptom
- Simulations, resamples, or optimizers produce materially different outputs on rerun
- Teammates cannot reproduce summary metrics
- Backtest changes when data is re-pulled later

### Likely causes
- Uncontrolled randomness
- Dataset refreshes or vendor backfills
- Implicit dependency changes
- Non-deterministic optimization settings

### Checks
- Check random seed or generator usage
- Record data extraction date and provider version if available
- Compare package versions or solver versions
- Verify that symbol universe and filters did not drift

### Safe next steps
- Freeze a reproducibility packet: data snapshot date, config, parameters, windows, and randomness settings
- Re-run on the same frozen inputs before analyzing methodological changes
- Escalate to a pinned environment only if dependency drift is materially affecting review quality

## Pattern 5: Turnover or costs erase the apparent edge

### Symptom
- Gross returns look attractive but net returns do not
- Intraday or high-frequency rebalancing produces unrealistic paper gains
- Capacity falls apart once position size increases

### Likely causes
- Spread and slippage were ignored
- Rebalance cadence is too aggressive for the market traded
- Capacity assumptions are inconsistent with observed volume or borrow availability

### Checks
- Compare gross and net results
- Inspect turnover by period and by holding bucket
- Review spread, slippage, and liquidity assumptions for the traded universe
- Ask whether the strategy depends on fills unavailable at size

### Safe next steps
- Reclassify the result as exploratory if realistic cost inputs are unavailable
- Test coarser rebalance schedules or stricter liquidity filters
- Present capacity caveats explicitly instead of burying them in footnotes

## Review posture reminder

When a quant result looks unusually good, the default response should be: verify timing, leakage, realism, and reproducibility before treating the result as evidence.
