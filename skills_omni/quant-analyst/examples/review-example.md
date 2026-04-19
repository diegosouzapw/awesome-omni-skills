# Worked Example: Reviewing a Naive Earnings Strategy Backtest

## User request

> I built a strategy that buys stocks with positive earnings surprise on the announcement date and holds for five trading days. The backtest from 2018 to 2024 has a Sharpe ratio of 3.1 and max drawdown under 6%. Can you review whether this is solid?

## Good review approach

### Step 1: Clarify the exact research design

Ask for:
- the source of earnings surprise data
- whether the event timestamp is actual release time or only calendar date
- the trade rule timing: same close, next open, next close, or intraday
- the universe definition and whether delisted names are included
- transaction cost, slippage, and borrow assumptions
- turnover and average holding count

### Step 2: Check point-in-time joins

Potential issue:
- If the strategy joins earnings surprise to daily prices only by ticker and date, the backtest may assume information was tradable before it was actually released.

Better framing:
- Event data should be joined to market data using point-in-time logic.
- If an earnings release occurs after market close, a same-day close fill is usually not credible.

### Step 3: Check evaluation design

Questions:
- Were train, validation, and test windows split by time?
- Was any threshold, filter, or surprise definition tuned after seeing broad performance results?
- Were ranking rules or sector filters adjusted repeatedly until Sharpe improved?

Expected upgrade:
- Replace a single full-period summary with walk-forward results across multiple windows.

### Step 4: Check realism

Questions:
- What are the turnover, slippage, spread, and fee assumptions?
- Is the strategy concentrated in small-cap names or illiquid earnings events?
- Does the five-day holding period create crowding or capacity concerns?

Interpretation rule:
- Without slippage and turnover analysis, the result should be treated as exploratory.

### Step 5: Produce a bounded review output

## Example review response

### Summary
The strategy may be interesting, but the current evidence is not yet decision-ready. The biggest risk is point-in-time leakage around earnings release timestamps. The reported Sharpe ratio should be treated as exploratory until event timing, walk-forward validation, and trading frictions are validated.

### What I would verify first
1. **Point-in-time joins**: confirm whether earnings releases after market close were traded only from the next session onward.
2. **Walk-forward evaluation**: show rolling or walk-forward performance rather than one aggregate score.
3. **Turnover and slippage**: quantify how much of the edge survives realistic execution assumptions.
4. **Universe integrity**: confirm delisted names and survivorship handling.
5. **Drawdown context**: compare drawdown, hit rate, and turnover by regime, not just over the full sample.

### Likely risk flags
- Calendar-date joins can create hidden look-ahead bias.
- Same-day execution after an after-hours release is usually not point-in-time safe.
- A Sharpe ratio above 3 with low drawdown in a simple event strategy deserves extra scrutiny.
- If the strategy has high turnover, slippage may erase much of the edge.

### Recommended next validation pass
- Rebuild the event-to-price alignment with point-in-time joins.
- Report walk-forward windows with net performance, turnover, and drawdown.
- Add liquidity filters and explicit slippage assumptions.
- Compare gross versus net returns and show sensitivity to higher cost assumptions.

### Bounded conclusion
At this stage, I would describe the result as **promising but not yet reliable for decision-making**. If the edge remains after point-in-time corrections, walk-forward testing, and realistic trading frictions, then it becomes more decision-useful.

## Why this example is good

It uses the right quant review vocabulary and structure:
- point-in-time joins
- walk-forward validation
- slippage
- turnover
- drawdown
- survivorship bias
- bounded conclusion rather than trade advice

## Bad response pattern to avoid

> A Sharpe of 3.1 is excellent. The strategy looks robust. You should consider deploying it.

Why this is bad:
- ignores timing integrity
- ignores turnover and slippage
- ignores leakage risk
- jumps from research to recommendation
- does not separate exploratory evidence from decision-useful analysis
