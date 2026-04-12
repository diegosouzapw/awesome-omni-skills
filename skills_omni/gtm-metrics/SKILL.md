---
name: "gtm-metrics"
description: "GTM Metrics, Dashboards & Measurement for AI Products workflow skill. Use this skill when a user needs to define GTM metrics, design a decision-oriented dashboard, evaluate funnel and pipeline efficiency, reconcile conflicting KPI definitions, measure retention and expansion, or track AI product unit economics. Also use it when the request mentions CAC, LTV, NRR, TTFV, pipeline coverage, attribution, revenue latency, data health, funnel metrics, or AI cost of revenue. This skill covers metric selection, metric governance, dashboard design, weekly review cadence, attribution boundaries, and AI-specific measurement guardrails. Do not use it for BI implementation, warehouse engineering, code review, or software architecture."
version: "0.0.1"
category: "development"
tags:
  - "gtm-metrics"
  - "dashboard"
  - "attribution"
  - "pipeline"
  - "cac"
  - "nrr"
  - "ttfv"
  - "ai-unit-economics"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "gtm-metrics"
family_name: "GTM Metrics, Dashboards & Measurement for AI Products"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/gtm-metrics"
upstream_skill: "skills/gtm-metrics"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "gtm-metrics"
---

# GTM Metrics, Dashboards & Measurement for AI Products

## Overview

This skill helps an operator design and review GTM measurement systems for AI products without drifting into technical implementation.

It preserves the original skill intent: choose the right GTM metrics, structure dashboards by audience and decision horizon, review pipeline and retention health, handle attribution carefully, and add AI-specific cost and margin measurement where standard SaaS reporting is incomplete.

Use this skill as a measurement design and operating-cadence package, not as a BI build guide. The goal is to help teams answer:

- Which metrics matter for this business model and GTM motion?
- Which system is the source of truth for each KPI?
- Which dashboard should each audience see?
- Which thresholds should trigger action?
- How much can we trust attribution, CRM data, and AI gross margin calculations?

The support pack adds reusable templates for metric definitions, dashboard specs, weekly scorecards, data quality audits, attribution choices, and AI unit economics.

## When to Use This Skill

Use this skill when the task is about measurement design, dashboard logic, KPI governance, or operating cadence.

### Use it when

- A founder, revenue leader, PM, or RevOps lead asks which GTM metrics to track.
- The team needs a dashboard for board, executive, or operator use.
- Pipeline coverage, slippage, win rate, CAC, payback, or revenue latency need interpretation.
- Metrics disagree across CRM, billing, BI, and product analytics tools.
- The team wants to measure TTFV, activation, retention, NRR, or cohort expansion.
- An AI product needs explicit cost-of-revenue or unit-economics tracking.
- Attribution is being revisited and the team needs a practical, privacy-aware model choice.
- The operator needs a weekly GTM review structure with owners, thresholds, and action logging.

### Do not use it when

- The task is to implement dashboards in SQL, BI tools, or a warehouse.
- The request is mainly about software architecture, ETL design, instrumentation code, or CRM admin work.
- The work is primarily pricing strategy, outbound campaign design, or CS playbook creation unless measurement design is the main need.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Choosing metrics for the first time | `references/metric-dictionary-template.md` | Forces explicit metric definitions, owners, filters, and source-of-truth assignment before dashboarding |
| Designing a dashboard | `references/dashboard-spec-template.md` | Converts a metric list into a role-based decision dashboard with thresholds and review cadence |
| Running weekly GTM inspection | `references/weekly-gtm-scorecard-template.md` | Creates a repeatable operating rhythm instead of ad hoc status reporting |
| Auditing CRM / KPI trustworthiness | `references/data-health-audit-worksheet.md` | Applies standard data quality dimensions before relying on benchmarks or forecast conclusions |
| Choosing attribution approach | `references/attribution-decision-tree.md` | Helps select a model while documenting lookback windows and limits |
| Measuring AI cost and margin | `references/ai-unit-economics-worksheet.md` | Makes AI cost buckets explicit so margin and ROAI are not overstated |
| Diagnosing retention or NRR confusion | `examples/cohort-retention-review-example.md` | Shows why cohort views often explain what topline NRR hides |
| Reconciling conflicting KPIs | `examples/metrics-reconciliation-example.md` | Walks through source-of-truth and definition alignment across tools |
| Handoff to adjacent skills | `agents/router-note-related-skills.md` | Keeps routing disciplined when the task drifts into pricing, SDR, retention, or technical analytics |

## Workflow

1. **Clarify the business context first.**
   Capture GTM motion, pricing model, sales cycle, customer segment, stage, and primary value event. Do not start from a benchmark table alone.

2. **Define the measurement objective.**
   Decide whether the job is board reporting, executive inspection, operator workflow, benchmark comparison, attribution review, retention diagnosis, or AI unit-economics review.

3. **Choose the primary value metric and supporting KPI families.**
   Start from customer value and business model, then map supporting leading and lagging metrics. Keep the list narrow enough to drive decisions.

4. **Assign a source of truth for each metric family.**
   Typical pattern:
   - CRM for stage and pipeline metrics
   - billing / finance for revenue metrics
   - product analytics for usage and activation metrics
   - support / CS systems for service-related signals
   Document any exceptions.

5. **Write metric definitions before using them in executive review.**
   For each KPI, define:
   - formula
n   - grain
   - time window
   - timezone
   - inclusion and exclusion rules
   - owner
   - refresh cadence
   - source system
   Use `references/metric-dictionary-template.md`.

6. **Check data health before trusting conclusions.**
   Audit completeness, accuracy, consistency, timeliness, validity, and uniqueness. If quality is poor, pause benchmark comparisons and forecast confidence claims.

7. **Design dashboards by decision horizon.**
   Use a tiered model:
   - **Board:** few monthly metrics, mostly lagging and efficiency focused
   - **Executive:** weekly operating metrics with targets and trends
   - **Operator:** daily workflow metrics tied to immediate action
   Use `references/dashboard-spec-template.md`.

8. **Map metrics to actions and thresholds.**
   Every metric should answer: what decision does this support, what threshold matters, who owns the response, and how quickly should the team react?

9. **Add motion-specific and AI-specific metrics only where justified.**
   - PLG: activation, PQL conversion, usage depth, TTFV
   - sales-led: coverage, velocity, stage conversion, slippage
   - hybrid / agent-led: source quality, qualification efficiency, human-to-AI leverage
   - AI products: inference cost, vendor API cost, retrieval/storage, review operations, support load, gross margin after AI costs

10. **Treat attribution as directional, not ledger-grade truth.**
    Document the conversion event, touchpoint rules, lookback window, and model limitations. Compare models in parallel if budget decisions depend on them.

11. **Review retention and expansion by cohort.**
    Do not rely only on aggregate NRR or overall churn. Segment by signup month, plan, segment, and acquisition motion.

12. **Run the weekly review cadence.**
    Use a fixed scorecard, inspect changes versus target and trend, assign actions with owners and dates, and record open risks.

13. **Document assumptions and unresolved gaps.**
    If definitions are provisional, costs are partially allocated, or attribution is modeled, state that explicitly in the final output.

## Metric Selection Framework

Start with business model and motion, then choose a small metric stack.

### 1. Core questions

Ask before recommending KPIs:

1. What is the primary customer value event?
2. What GTM motion is dominant: PLG, sales-led, hybrid, or agent-led?
3. What pricing model applies: seat-based, usage-based, outcome-based, or hybrid?
4. Which decision is most urgent right now: growth, efficiency, retention, forecast accuracy, or margin?
5. Which systems are trusted enough to act on today?

### 2. Suggested KPI layers

- **North-star / value layer:** one primary value metric or a very small board set
- **Commercial outcome layer:** ARR/MRR, net new ARR, NRR, CAC payback, pipeline efficiency
- **Leading indicator layer:** activation, meeting conversion, speed-to-lead, pipeline created, usage depth
- **Reliability layer:** data health, definition quality, refresh recency, attribution confidence

### 3. Benchmark caution

Benchmarks in this skill are heuristics, not universal standards. Stage, segment, ACV, pricing model, and data quality matter more than broad median figures. If the business context is unclear, compare trends first and external benchmarks second.

## Recommended Dashboard Architecture

### Tier 1: Board dashboard

Use monthly. Keep to roughly 5-7 metrics.

Typical candidates:
- ARR / MRR and net new ARR waterfall
- NRR or GRR depending on stage
- CAC payback or growth efficiency metric
- pipeline coverage or forecast confidence
- burn multiple / cash efficiency
- AI gross margin or cost-of-revenue view if AI cost is material

### Tier 2: Executive operating dashboard

Use weekly. Keep to roughly 8-12 metrics.

Typical candidates:
- pipeline created and stage mix
- win rate by segment
- sales cycle length
- slippage rate
- CAC by channel or segment
- activation and TTFV
- NRR by cohort
- data health status
- attribution trend notes

### Tier 3: Operator dashboard

Use daily or near-real-time when needed.

Typical candidates:
- response times
- meetings booked
- stage movement aging
- PQL counts and conversion
- product usage thresholds
- AI workflow cost per action or per meeting

### Dashboard anti-patterns

Avoid:
- too many KPIs on one page
- metrics with no owner
- metrics with no written definition
- snapshots without trend lines
- benchmarks without local context
- mixing source systems without reconciliation notes
- presenting modeled attribution as exact truth

## Core Metric Families

### Revenue and efficiency

| Metric | Use carefully for | Notes |
| --- | --- | --- |
| ARR / MRR | recurring revenue tracking | Billing or finance should usually be source of truth |
| Net New ARR | growth decomposition | Separate new, expansion, contraction, churn |
| CAC | acquisition cost tracking | Define spend scope and customer counting rules |
| CAC Payback | growth efficiency | Make gross margin and revenue assumptions explicit |
| Magic Number | sales and marketing efficiency | Best as directional trend, not a sole investment decision |
| Burn Multiple | capital efficiency | Useful for board and executive contexts |

### Pipeline and funnel

| Metric | Use carefully for | Notes |
| --- | --- | --- |
| Pipeline Coverage | quota support | Directional only if stage hygiene is weak |
| Pipeline Velocity | speed and quality | Sensitive to stage definitions and close-date accuracy |
| Slippage Rate | forecast discipline | Requires strict definition of forecast population |
| Win Rate | sales effectiveness | Always segment by deal size, motion, and segment |
| Speed-to-Lead | inbound conversion readiness | Useful as a leading indicator |

### Retention and customer value

| Metric | Use carefully for | Notes |
| --- | --- | --- |
| TTFV | onboarding effectiveness | Define the value event explicitly |
| GRR / NRR | retention and expansion | Review by cohort and segment, not only in aggregate |
| Logo Churn | customer count retention | Pair with revenue churn for fuller picture |
| Expansion Revenue % | land-and-expand strength | Better interpreted with cohort context |

### AI product-specific

| Metric | Use carefully for | Notes |
| --- | --- | --- |
| AI Cost of Revenue | variable AI delivery cost | Include inference and other recurring service costs consistently |
| Cost per AI Action | unit cost trend | Useful for pricing and product efficiency |
| Gross Margin after AI | contribution quality | Define which AI and support costs count in COGS |
| ROAI | AI investment return | Do not use unless attribution and cost policy are documented |
| Committed vs. Consumed Revenue | usage pricing fit | Useful for usage-based products |

## Data Health and Metric Governance

No KPI should enter executive or board review without a written definition and an owner.

Minimum governance rules:

- assign one source of truth per metric family
- record formula and filters in one metric dictionary
- state refresh cadence and last-refresh expectation
- specify timezone and date logic
- define inclusion and exclusion rules
- identify the accountable owner
- review definitions whenever sales stages, pricing, or instrumentation changes

### Data health dimensions

Use these six dimensions during audits:

- **Completeness:** required fields populated
- **Accuracy:** values match trusted reality or enrichment sources
- **Consistency:** formats and category logic align across systems
- **Timeliness:** data is fresh enough for the decision window
- **Validity:** values conform to allowed rules and types
- **Uniqueness:** duplicates are controlled across contacts, accounts, and opportunities

Practical guardrail:
- if data health is below a defensible threshold, do not present precise benchmark comparisons or high-confidence forecast claims

## Attribution Guidance

Attribution is useful, but not exact.

### Use these rules

- decide whether the question is about **source creation** or **influence**
- document the conversion event explicitly
- document the lookback window explicitly
- state which touches count and which do not
- compare at least two models when channel-budget decisions are large
- keep privacy and modeled-conversion limitations visible

### Safe attribution stance

Treat attribution as directional evidence. Do not promise exact agreement across CRM, analytics, and ad platforms.

Use `references/attribution-decision-tree.md` to choose among first-touch, last-touch, multi-touch, product-touch, or simpler source/influence splits.

## Weekly GTM Review Cadence

Use a fixed 30-45 minute weekly review.

Recommended sequence:

1. review 5-7 scorecard metrics versus target and trend
2. inspect pipeline created, stage movement, slippage, and risks
3. review leading indicators such as activation, meetings, reply rate, or speed-to-lead
4. identify deals, cohorts, or channels at risk
5. assign 2-3 actions with owners and deadlines
6. capture one deep-dive topic for the week

Use `references/weekly-gtm-scorecard-template.md` to keep the meeting action-oriented.

## Examples

### Example 1: Metric strategy kickoff

```text
Use @gtm-metrics to design a weekly executive dashboard for a hybrid AI product. Start by identifying GTM motion, pricing model, primary value event, and source-of-truth systems. Then produce: 1) metric dictionary, 2) dashboard spec, 3) weekly scorecard, and 4) major data health risks.
```

**Expected outcome:** A narrow KPI set with written definitions, owners, targets, and review cadence.

### Example 2: Resolve KPI mismatch across tools

```text
Use @gtm-metrics to reconcile why pipeline coverage in the CRM does not match the executive BI dashboard. Identify the source of truth, date logic, stage logic, inclusion rules, and attribution settings before recommending any metric.
```

**Expected outcome:** A reconciliation note, a corrected metric definition, and an explicit source-of-truth decision.

### Example 3: Cohort-based retention review

```text
Use @gtm-metrics to analyze NRR for an AI product where topline NRR is flat but the team believes expansion is strong. Segment by cohort, plan, and acquisition motion, then identify what the aggregate view hides.
```

**Expected outcome:** A cohort explanation of retention and expansion behavior, not just a topline benchmark comparison.

### Example 4: AI unit economics review

```text
Use @gtm-metrics to review AI gross margin for a usage-based product. Break out inference, retrieval/storage, third-party APIs, human review, and support costs, then show gross margin after AI by product line.
```

**Expected outcome:** A clearer cost policy and a margin view that does not understate AI cost of revenue.

### Example 5: Weekly operating packet

```text
Use @gtm-metrics to produce this week's GTM operating packet: scorecard, pipeline inspection notes, top leading indicators, data health status, attribution caveats, and 3 action items with owners.
```

**Expected outcome:** A concise review packet tied to decisions and follow-up actions.

## Best Practices

### Do

- Start with business model, GTM motion, and customer value before choosing metrics.
- Keep one written definition per KPI and one source-of-truth assignment per metric family.
- Separate board, executive, and operator dashboards by decision horizon.
- Use benchmarks as context, not as substitutes for segmentation and trend analysis.
- Review retention and expansion by cohort, not only in aggregate.
- Treat attribution as directional and privacy-constrained.
- Make AI cost buckets explicit before quoting gross margin or ROAI.
- Pause high-confidence interpretation when data quality is weak.
- Tie every dashboard metric to an owner, target, threshold, and action.

### Don’t

- Start from a generic 30-metric benchmark list.
- Mix CRM, billing, and analytics numbers without reconciliation notes.
- Present modeled attribution as exact financial truth.
- Report AI gross margin without documenting which costs are included.
- Use pipeline coverage alone as proof that bookings are healthy.
- Rely on aggregate NRR if cohort behavior differs by segment or motion.
- Put KPIs into executive review that have no written formula or owner.

## Troubleshooting

### Problem: Metrics do not match across CRM, BI, and analytics tools

**Symptoms:** Pipeline, revenue, or attribution numbers differ by tool; different teams quote different values for the same KPI.
**Solution:** Assign one system of record per metric family, then reconcile formula, date field, timezone, grain, filters, inclusion rules, and attribution settings. Use `examples/metrics-reconciliation-example.md` and capture the final definition in `references/metric-dictionary-template.md`.

### Problem: Pipeline coverage looks healthy but bookings still miss

**Symptoms:** Coverage ratio appears strong, but close rates, slippage, or forecast attainment are poor.
**Solution:** Check stage-entry criteria, aging, duplicate accounts, qualification quality, segment mix, and stale close dates. Coverage is only directional if stage hygiene is weak. Audit pipeline inspection discipline before increasing spend.

### Problem: CAC payback is getting worse

**Symptoms:** CAC rises, payback lengthens, or channel spend increases without corresponding pipeline or conversion improvement.
**Solution:** Break results down by channel, segment, and motion. Compare spend efficiency against conversion velocity, win rate, and gross margin assumptions. Reduce spend in low-quality channels or fix conversion bottlenecks before scaling.

### Problem: NRR is flat but expansion feels strong

**Symptoms:** Expansion stories sound positive, but topline NRR remains unimpressive.
**Solution:** Review retention by cohort, plan, and motion. Aggregate NRR may hide churn in older cohorts or weak onboarding in newer ones. Use `examples/cohort-retention-review-example.md` to isolate what expansion is and is not offsetting.

### Problem: Attribution changes dramatically depending on the report

**Symptoms:** Channel ROI swings when the team switches tools or attribution models.
**Solution:** Verify whether the reports use different conversion events, object models, touchpoint rules, lookback windows, or privacy-driven modeled conversions. Document attribution assumptions and compare models in parallel rather than forcing false agreement.

### Problem: AI gross margin looks fine but cash burn worsens

**Symptoms:** Reported gross margin appears healthy while infrastructure or vendor spend is climbing quickly.
**Solution:** Rebuild the cost policy. Check whether inference, retrieval/storage, third-party APIs, safety review, or support costs were excluded from cost of revenue. Recalculate by product line or cohort using `references/ai-unit-economics-worksheet.md`.

### Problem: Dashboard usage is low even though the metrics are “good”

**Symptoms:** Stakeholders ignore the dashboard, ask for side spreadsheets, or debate definitions in meetings.
**Solution:** Reduce metric count, add trend and threshold context, assign owners, and make every metric decision-linked. A dashboard that does not change action is too broad or insufficiently governed.

## Related Skills

- `@ai-pricing` - Use when the primary problem is pricing design, packaging, or monetization strategy rather than measurement.
- `@ai-sdr` - Use when the work shifts from pipeline measurement into outbound execution or SDR workflow design.
- `@ai-cold-outreach` - Use when messaging, targeting, and campaign execution become the main task.
- `@accessibility` - Not normally adjacent, but route only if the request changes into UX accessibility work rather than GTM analytics.

See `agents/router-note-related-skills.md` for stricter handoff notes.

## Additional Resources

### Local support pack

- [Metric dictionary template](references/metric-dictionary-template.md)
- [Dashboard spec template](references/dashboard-spec-template.md)
- [Weekly GTM scorecard template](references/weekly-gtm-scorecard-template.md)
- [Data health audit worksheet](references/data-health-audit-worksheet.md)
- [Attribution decision tree](references/attribution-decision-tree.md)
- [AI unit economics worksheet](references/ai-unit-economics-worksheet.md)
- [Cohort retention review example](examples/cohort-retention-review-example.md)
- [Metrics reconciliation example](examples/metrics-reconciliation-example.md)
- [Related-skill router note](agents/router-note-related-skills.md)

### Practical reminders

- Benchmark numbers are stage- and context-sensitive.
- CRM hygiene can matter more than benchmark percentile comparisons.
- Attribution precision is inherently limited by configuration and privacy constraints.
- AI gross margin comparisons are unreliable unless cost allocation is documented consistently.
- If a KPI matters enough for weekly review, it matters enough to define in writing.
