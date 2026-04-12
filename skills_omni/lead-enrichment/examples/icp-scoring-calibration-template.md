# ICP Scoring Calibration Template

Use this template to test whether score bands predict outcomes.

## 1. Current scoring model

- Firmographic weight:
- Technographic weight:
- Intent weight:
- Negative factors:

## 2. Current score bands

| Band | Definition | Current action |
| --- | --- | --- |
| 85-100 | | |
| 70-84 | | |
| 50-69 | | |
| Below 50 | | |

## 3. Historical backtest table

| Score band | Records | Reply rate | Meeting rate | Opportunity rate | Win rate | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| 85-100 | | | | | | |
| 70-84 | | | | | | |
| 50-69 | | | | | | |
| Below 50 | | | | | | |

## 4. Calibration prompts

- Which high-score records fail to convert, and why?
- Which low-score records unexpectedly convert?
- Are intent inputs stale or too noisy?
- Are firmographic ranges too broad?
- Are negative factors missing?
- Are account and contact scores being confused?

## 5. Candidate negative factors

- prior opt-out
- recent disqualification
- non-target geography
- role mismatch
- competitor lock-in
- stale activity or stale intent
- weak identifier confidence

## 6. Revision plan

- Keep:
- Reduce weight on:
- Increase weight on:
- Add negative factor:
- Review again on:
