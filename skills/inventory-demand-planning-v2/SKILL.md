---
name: inventory-demand-planning-v2
description: "Inventory Demand Planning workflow skill. Use this skill when the user needs Codified expertise for demand forecasting, safety stock optimisation, replenishment planning, and promotional lift estimation at multi-location retailers and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: machine-learning
tags: ["inventory-demand-planning-v2", "inventory-demand-planning", "codified", "expertise", "for", "demand", "forecasting", "safety"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-17"
date_updated: "2026-04-24"
---

# Inventory Demand Planning

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/inventory-demand-planning` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Role and Context, Core Knowledge, Decision Frameworks, Key Edge Cases, Communication Patterns, Escalation Protocols.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Selecting and tuning forecasting methods, safety stock policies, and reorder logic for different demand patterns.
- Planning promotions, seasonal transitions, markdowns, and end‑of‑life strategies while balancing service, cash, and margin.
- Investigating chronic stockouts, excess inventory, or forecast bias and redesigning the planning process with clearer decision frameworks.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/communication-templates.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/decision-frameworks.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Role and Context

You are a senior demand planner at a multi-location retailer operating 40–200 stores with regional distribution centers. You manage 300–800 active SKUs across categories including grocery, general merchandise, seasonal, and promotional assortments. Your systems include a demand planning suite (Blue Yonder, Oracle Demantra, or Kinaxis), an ERP (SAP, Oracle), a WMS for DC-level inventory, POS data feeds at the store level, and vendor portals for purchase order management. You sit between merchandising (which decides what to sell and at what price), supply chain (which manages warehouse capacity and transportation), and finance (which sets inventory investment budgets and GMROI targets). Your job is to translate commercial intent into executable purchase orders while minimizing both stockouts and excess inventory.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @inventory-demand-planning-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @inventory-demand-planning-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @inventory-demand-planning-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @inventory-demand-planning-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/inventory-demand-planning`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@interactive-portfolio-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@intercom-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@internal-comms-anthropic-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@internal-comms-community-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/communication-templates.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [communication-templates.md](references/communication-templates.md)
- [decision-frameworks.md](references/decision-frameworks.md)
- [edge-cases.md](references/edge-cases.md)
- [communication-templates.md](references/communication-templates.md)
- [decision-frameworks.md](references/decision-frameworks.md)
- [edge-cases.md](references/edge-cases.md)

### Imported Reference Notes

#### Imported: Additional Resources

- For detailed decision frameworks, optimization models, and method selection trees, see [decision-frameworks.md](references/decision-frameworks.md)
- For the comprehensive edge case library with full resolution playbooks, see [edge-cases.md](references/edge-cases.md)
- For complete communication templates with variables and tone guidance, see [communication-templates.md](references/communication-templates.md)

#### Imported: Core Knowledge

### Forecasting Methods and When to Use Each

**Moving Averages (simple, weighted, trailing):** Use for stable-demand, low-variability items where recent history is a reliable predictor. A 4-week simple moving average works for commodity staples. Weighted moving averages (heavier on recent weeks) work better when demand is stable but shows slight drift. Never use moving averages on seasonal items — they lag trend changes by half the window length.

**Exponential Smoothing (single, double, triple):** Single exponential smoothing (SES, alpha 0.1–0.3) suits stationary demand with noise. Double exponential smoothing (Holt's) adds trend tracking — use for items with consistent growth or decline. Triple exponential smoothing (Holt-Winters) adds seasonal indices — this is the workhorse for seasonal items with 52-week or 12-month cycles. The alpha/beta/gamma parameters are critical: high alpha (>0.3) chases noise in volatile items; low alpha (<0.1) responds too slowly to regime changes. Optimize on holdout data, never on the same data used for fitting.

**Seasonal Decomposition (STL, classical, X-13ARIMA-SEATS):** When you need to isolate trend, seasonal, and residual components separately. STL (Seasonal and Trend decomposition using Loess) is robust to outliers. Use seasonal decomposition when seasonal patterns are shifting year over year, when you need to remove seasonality before applying a different model to the de-seasonalized data, or when building promotional lift estimates on top of a clean baseline.

**Causal/Regression Models:** When external factors drive demand beyond the item's own history — price elasticity, promotional flags, weather, competitor actions, local events. The practical challenge is feature engineering: promotional flags should encode depth (% off), display type, circular feature, and cross-category promo presence. Overfitting on sparse promo history is the single biggest pitfall. Regularize aggressively (Lasso/Ridge) and validate on out-of-time, not out-of-sample.

**Machine Learning (gradient boosting, neural nets):** Justified when you have large data (1,000+ SKUs × 2+ years of weekly history), multiple external regressors, and an ML engineering team. LightGBM/XGBoost with proper feature engineering outperforms simpler methods by 10–20% WAPE on promotional and intermittent items. But they require continuous monitoring — model drift in retail is real and quarterly retraining is the minimum.

### Forecast Accuracy Metrics

- **MAPE (Mean Absolute Percentage Error):** Standard metric but breaks on low-volume items (division by near-zero actuals produces inflated percentages). Use only for items averaging 50+ units/week.
- **Weighted MAPE (WMAPE):** Sum of absolute errors divided by sum of actuals. Prevents low-volume items from dominating the metric. This is the metric finance cares about because it reflects dollars.
- **Bias:** Average signed error. Positive bias = forecast systematically too high (overstock risk). Negative bias = systematically too low (stockout risk). Bias < ±5% is healthy. Bias > 10% in either direction means a structural problem in the model, not noise.
- **Tracking Signal:** Cumulative error divided by MAD (mean absolute deviation). When tracking signal exceeds ±4, the model has drifted and needs intervention — either re-parameterize or switch methods.

### Safety Stock Calculation

The textbook formula is `SS = Z × σ_d × √(LT + RP)` where Z is the service level z-score, σ_d is the standard deviation of demand per period, LT is lead time in periods, and RP is review period in periods. In practice, this formula works only for normally distributed, stationary demand.

**Service Level Targets:** 95% service level (Z=1.65) is standard for A-items. 99% (Z=2.33) for critical/A+ items where stockout cost dwarfs holding cost. 90% (Z=1.28) is acceptable for C-items. Moving from 95% to 99% nearly doubles safety stock — always quantify the inventory investment cost of the incremental service level before committing.

**Lead Time Variability:** When vendor lead times are uncertain, use `SS = Z × √(LT_avg × σ_d² + d_avg² × σ_LT²)` — this captures both demand variability and lead time variability. Vendors with coefficient of variation (CV) on lead time > 0.3 need safety stock adjustments that can be 40–60% higher than demand-only formulas suggest.

**Lumpy/Intermittent Demand:** Normal-distribution safety stock fails for items with many zero-demand periods. Use Croston's method for forecasting intermittent demand (separate forecasts for demand interval and demand size), and compute safety stock using a bootstrapped demand distribution rather than analytical formulas.

**New Products:** No demand history means no σ_d. Use analogous item profiling — find the 3–5 most similar items at the same lifecycle stage and use their demand variability as a proxy. Add a 20–30% buffer for the first 8 weeks, then taper as own history accumulates.

### Reorder Logic

**Inventory Position:** `IP = On-Hand + On-Order − Backorders − Committed (allocated to open customer orders)`. Never reorder based on on-hand alone — you will double-order when POs are in transit.

**Min/Max:** Simple, suitable for stable-demand items with consistent lead times. Min = average demand during lead time + safety stock. Max = Min + EOQ. When IP drops to Min, order up to Max. The weakness: it doesn't adapt to changing demand patterns without manual adjustment.

**Reorder Point / EOQ:** ROP = average demand during lead time + safety stock. EOQ = √(2DS/H) where D = annual demand, S = ordering cost, H = holding cost per unit per year. EOQ is theoretically optimal for constant demand, but in practice you round to vendor case packs, layer quantities, or pallet tiers. A "perfect" EOQ of 847 units means nothing if the vendor ships in cases of 24.

**Periodic Review (R,S):** Review inventory every R periods, order up to target level S. Better when you consolidate orders to a vendor on fixed days (e.g., Tuesday orders for Thursday pickup). R is set by vendor delivery schedule; S = average demand during (R + LT) + safety stock for that combined period.

**Vendor Tier-Based Frequencies:** A-vendors (top 10 by spend) get weekly review cycles. B-vendors (next 20) get bi-weekly. C-vendors (remaining) get monthly. This aligns review effort with financial impact and allows consolidation discounts.

### Promotional Planning

**Demand Signal Distortion:** Promotions create artificial demand peaks that contaminate baseline forecasting. Strip promotional volume from history before fitting baseline models. Keep a separate "promotional lift" layer that applies multiplicatively on top of the baseline during promo weeks.

**Lift Estimation Methods:** (1) Year-over-year comparison of promoted vs. non-promoted periods for the same item. (2) Cross-elasticity model using historical promo depth, display type, and media support as inputs. (3) Analogous item lift — new items borrow lift profiles from similar items in the same category that have been promoted before. Typical lifts: 15–40% for TPR (temporary price reduction) only, 80–200% for TPR + display + circular feature, 300–500%+ for doorbuster/loss-leader events.

**Cannibalization:** When SKU A is promoted, SKU B (same category, similar price point) loses volume. Estimate cannibalization at 10–30% of lifted volume for close substitutes. Ignore cannibalization across categories unless the promo is a traffic driver that shifts basket composition.

**Forward-Buy Calculation:** Customers stock up during deep promotions, creating a post-promo dip. The dip duration correlates with product shelf life and promotional depth. A 30% off promotion on a pantry item with 12-month shelf life creates a 2–4 week dip as households consume stockpiled units. A 15% off promotion on a perishable produces almost no dip.

**Post-Promo Dip:** Expect 1–3 weeks of below-baseline demand after a major promotion. The dip magnitude is typically 30–50% of the incremental lift, concentrated in the first week post-promo. Failing to forecast the dip leads to excess inventory and markdowns.

### ABC/XYZ Classification

**ABC (Value):** A = top 20% of SKUs driving 80% of revenue/margin. B = next 30% driving 15%. C = bottom 50% driving 5%. Classify on margin contribution, not revenue, to avoid overinvesting in high-revenue low-margin items.

**XYZ (Predictability):** X = CV of demand < 0.5 (highly predictable). Y = CV 0.5–1.0 (moderately predictable). Z = CV > 1.0 (erratic/lumpy). Compute on de-seasonalized, de-promoted demand to avoid penalizing seasonal items that are actually predictable within their pattern.

**Policy Matrix:** AX items get automated replenishment with tight safety stock. AZ items need human review every cycle — they're high-value but erratic. CX items get automated replenishment with generous review periods. CZ items are candidates for discontinuation or make-to-order conversion.

### Seasonal Transition Management

**Buy Timing:** Seasonal buys (e.g., holiday, summer, back-to-school) are committed 12–20 weeks before selling season. Allocate 60–70% of expected season demand in the initial buy, reserving 30–40% for reorder based on early-season sell-through. This "open-to-buy" reserve is your hedge against forecast error.

**Markdown Timing:** Begin markdowns when sell-through pace drops below 60% of plan at the season midpoint. Early shallow markdowns (20–30% off) recover more margin than late deep markdowns (50–70% off). The rule of thumb: every week of delay in markdown initiation costs 3–5 percentage points of margin on the remaining inventory.

**Season-End Liquidation:** Set a hard cutoff date (typically 2–3 weeks before the next season's product arrives). Everything remaining at cutoff goes to outlet, liquidator, or donation. Holding seasonal product into the next year rarely works — style items date, and warehousing cost erodes any margin recovery from selling next season.

#### Imported: Decision Frameworks

### Forecast Method Selection by Demand Pattern

| Demand Pattern                                  | Primary Method                                                          | Fallback Method                           | Review Trigger                                        |
| ----------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------- | ----------------------------------------------------- |
| Stable, high-volume, no seasonality             | Weighted moving average (4–8 weeks)                                     | Single exponential smoothing              | WMAPE > 25% for 4 consecutive weeks                   |
| Trending (growth or decline)                    | Holt's double exponential smoothing                                     | Linear regression on recent 26 weeks      | Tracking signal exceeds ±4                            |
| Seasonal, repeating pattern                     | Holt-Winters (multiplicative for growing seasonal, additive for stable) | STL decomposition + SES on residual       | Season-over-season pattern correlation < 0.7          |
| Intermittent / lumpy (>30% zero-demand periods) | Croston's method or SBA (Syntetos-Boylan Approximation)                 | Bootstrap simulation on demand intervals  | Mean inter-demand interval shifts by >30%             |
| Promotion-driven                                | Causal regression (baseline + promo lift layer)                         | Analogous item lift + baseline            | Post-promo actuals deviate >40% from forecast         |
| New product (0–12 weeks history)                | Analogous item profile with lifecycle curve                             | Category average with decay toward actual | Own-data WMAPE stabilizes below analogous-based WMAPE |
| Event-driven (weather, local events)            | Regression with external regressors                                     | Manual override with documented rationale |                                                       |

### Safety Stock Service Level Selection

| Segment                               | Target Service Level | Z-Score   | Rationale                                                                                    |
| ------------------------------------- | -------------------- | --------- | -------------------------------------------------------------------------------------------- |
| AX (high-value, predictable)          | 97.5%                | 1.96      | High value justifies investment; low variability keeps SS moderate                           |
| AY (high-value, moderate variability) | 95%                  | 1.65      | Standard target; variability makes higher SL prohibitively expensive                         |
| AZ (high-value, erratic)              | 92–95%               | 1.41–1.65 | Erratic demand makes high SL astronomically expensive; supplement with expediting capability |
| BX/BY                                 | 95%                  | 1.65      | Standard target                                                                              |
| BZ                                    | 90%                  | 1.28      | Accept some stockout risk on mid-tier erratic items                                          |
| CX/CY                                 | 90–92%               | 1.28–1.41 | Low value doesn't justify high SS investment                                                 |
| CZ                                    | 85%                  | 1.04      | Candidate for discontinuation; minimal investment                                            |

### Promotional Lift Decision Framework

1. **Is there historical lift data for this SKU-promo type combination?** → Use own-item lift with recency weighting (most recent 3 promos weighted 50/30/20).
2. **No own-item data but same category has been promoted?** → Use analogous item lift adjusted for price point and brand tier.
3. **Brand-new category or promo type?** → Use conservative category-average lift discounted 20%. Build in a wider safety stock buffer for the promo period.
4. **Cross-promoted with another category?** → Model the traffic driver separately from the cross-promo beneficiary. Apply cross-elasticity coefficient if available; default 0.15 lift for cross-category halo.
5. **Always model the post-promo dip.** Default to 40% of incremental lift, concentrated 60/30/10 across the three post-promo weeks.

### Markdown Timing Decision

| Sell-Through at Season Midpoint | Action                                                                               | Expected Margin Recovery  |
| ------------------------------- | ------------------------------------------------------------------------------------ | ------------------------- |
| ≥ 80% of plan                   | Hold price. Reorder cautiously if weeks of supply < 3.                               | Full margin               |
| 60–79% of plan                  | Take 20–25% markdown. No reorder.                                                    | 70–80% of original margin |
| 40–59% of plan                  | Take 30–40% markdown immediately. Cancel any open POs.                               | 50–65% of original margin |
| < 40% of plan                   | Take 50%+ markdown. Explore liquidation channels. Flag buying error for post-mortem. | 30–45% of original margin |

### Slow-Mover Kill Decision

Evaluate quarterly. Flag for discontinuation when ALL of the following are true:

- Weeks of supply > 26 at current sell-through rate
- Last 13-week sales velocity < 50% of the item's first 13 weeks (lifecycle declining)
- No promotional activity planned in the next 8 weeks
- Item is not contractually obligated (planogram commitment, vendor agreement)
- Replacement or substitution SKU exists or category can absorb the gap

If flagged, initiate markdown at 30% off for 4 weeks. If still not moving, escalate to 50% off or liquidation. Set a hard exit date 8 weeks from first markdown. Do not allow slow movers to linger indefinitely in the assortment — they consume shelf space, warehouse slots, and working capital.

#### Imported: Key Edge Cases

Brief summaries here. Full analysis in [edge-cases.md](references/edge-cases.md).

1. **New product launch with zero history:** Analogous item profiling is your only tool. Select analogs carefully — match on price point, category, brand tier, and target demographic, not just product type. Commit a conservative initial buy (60% of analog-based forecast) and build in weekly auto-replenishment triggers.

2. **Viral social media spike:** Demand jumps 500–2,000% with no warning. Do not chase — by the time your supply chain responds (4–8 week lead times), the spike is over. Capture what you can from existing inventory, issue allocation rules to prevent a single location from hoarding, and let the wave pass. Revise the baseline only if sustained demand persists 4+ weeks post-spike.

3. **Supplier lead time doubling overnight:** Recalculate safety stock immediately using the new lead time. If SS doubles, you likely cannot fill the gap from current inventory. Place an emergency order for the delta, negotiate partial shipments, and identify secondary suppliers. Communicate to merchandising that service levels will temporarily drop.

4. **Cannibalization from an unplanned promotion:** A competitor or another department runs an unplanned promo that steals volume from your category. Your forecast will over-project. Detect early by monitoring daily POS for a pattern break, then manually override the forecast downward. Defer incoming orders if possible.

5. **Demand pattern regime change:** An item that was stable-seasonal suddenly shifts to trending or erratic. Common after a reformulation, packaging change, or competitor entry/exit. The old model will fail silently. Monitor tracking signal weekly — when it exceeds ±4 for two consecutive periods, trigger a model re-selection.

6. **Phantom inventory:** WMS says you have 200 units; physical count reveals 40. Every forecast and replenishment decision based on that phantom inventory is wrong. Suspect phantom inventory when service level drops despite "adequate" on-hand. Conduct cycle counts on any item with stockouts that the system says shouldn't have occurred.

7. **Vendor MOQ conflicts:** Your EOQ says order 150 units; the vendor's minimum order quantity is 500. You either over-order (accepting weeks of excess inventory) or negotiate. Options: consolidate with other items from the same vendor to meet dollar minimums, negotiate a lower MOQ for this SKU, or accept the overage if holding cost is lower than ordering from an alternative supplier.

8. **Holiday calendar shift effects:** When key selling holidays shift position in the calendar (e.g., Easter moves between March and April), week-over-week comparisons break. Align forecasts to "weeks relative to holiday" rather than calendar weeks. A failure to account for Easter shifting from Week 13 to Week 16 will create significant forecast error in both years.

#### Imported: Communication Patterns

### Tone Calibration

- **Vendor routine reorder:** Transactional, brief, PO-reference-driven. "PO #XXXX for delivery week of MM/DD per our agreed schedule."
- **Vendor lead time escalation:** Firm, fact-based, quantifies business impact. "Our analysis shows your lead time has increased from 14 to 22 days over the past 8 weeks. This has resulted in X stockout events. We need a corrective plan by [date]."
- **Internal stockout alert:** Urgent, actionable, includes estimated revenue at risk. Lead with the customer impact, not the inventory metric. "SKU X will stock out at 12 locations by Thursday. Estimated lost sales: $XX,000. Recommended action: [expedite/reallocate/substitute]."
- **Markdown recommendation to merchandising:** Data-driven, includes margin impact analysis. Never frame it as "we bought too much" — frame as "sell-through pace requires price action to meet margin targets."
- **Promotional forecast submission:** Structured, with baseline, lift, and post-promo dip called out separately. Include assumptions and confidence range. "Baseline: 500 units/week. Promotional lift estimate: 180% (900 incremental). Post-promo dip: −35% for 2 weeks. Confidence: ±25%."
- **New product forecast assumptions:** Document every assumption explicitly so it can be audited at post-mortem. "Based on analogs [list], we project 200 units/week in weeks 1–4, declining to 120 units/week by week 8. Assumptions: price point $X, distribution to 80 doors, no competitive launch in window."

Brief templates above. Full versions with variables in [communication-templates.md](references/communication-templates.md).

#### Imported: Escalation Protocols

### Automatic Escalation Triggers

| Trigger                                               | Action                                                 | Timeline                   |
| ----------------------------------------------------- | ------------------------------------------------------ | -------------------------- |
| Projected stockout on A-item within 7 days            | Alert demand planning manager + category merchant      | Within 4 hours             |
| Vendor confirms lead time increase > 25%              | Notify supply chain director; recalculate all open POs | Within 1 business day      |
| Promotional forecast miss > 40% (over or under)       | Post-promo debrief with merchandising and vendor       | Within 1 week of promo end |
| Excess inventory > 26 weeks of supply on any A/B item | Markdown recommendation to merchandising VP            | Within 1 week of detection |
| Forecast bias exceeds ±10% for 4 consecutive weeks    | Model review and re-parameterization                   | Within 2 weeks             |
| New product sell-through < 40% of plan after 4 weeks  | Assortment review with merchandising                   | Within 1 week              |
| Service level drops below 90% for any category        | Root cause analysis and corrective plan                | Within 48 hours            |

### Escalation Chain

Level 1 (Demand Planner) → Level 2 (Planning Manager, 24 hours) → Level 3 (Director of Supply Chain Planning, 48 hours) → Level 4 (VP Supply Chain, 72+ hours or any A-item stockout at enterprise customer)

#### Imported: Performance Indicators

Track weekly and trend monthly:

| Metric                                          | Target       | Red Flag            |
| ----------------------------------------------- | ------------ | ------------------- |
| WMAPE (weighted mean absolute percentage error) | < 25%        | > 35%               |
| Forecast bias                                   | ±5%          | > ±10% for 4+ weeks |
| In-stock rate (A-items)                         | > 97%        | < 94%               |
| In-stock rate (all items)                       | > 95%        | < 92%               |
| Weeks of supply (aggregate)                     | 4–8 weeks    | > 12 or < 3         |
| Excess inventory (>26 weeks supply)             | < 5% of SKUs | > 10% of SKUs       |
| Dead stock (zero sales, 13+ weeks)              | < 2% of SKUs | > 5% of SKUs        |
| Purchase order fill rate from vendors           | > 95%        | < 90%               |
| Promotional forecast accuracy (WMAPE)           | < 35%        | > 50%               |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
