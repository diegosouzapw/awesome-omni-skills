# Worked Review Example

## Scenario

**Company:** Infrastructure monitoring SaaS

**Idea:** A free incident cost calculator for engineering leaders. Users enter team size, hourly cost assumptions, monthly incident volume, and average time to resolution. The tool estimates annual incident cost and highlights where faster detection or response could reduce spend.

**Business goal:** Attract engineering managers and platform leaders who may later evaluate the company’s monitoring product.

## Step 1: Problem and audience

**Target user:** Engineering manager or platform lead responsible for reliability and team efficiency.

**User problem:** They need a quick way to estimate the business impact of incidents so they can justify improvement work.

**Assessment:** Strong. The problem is concrete, recurring, and adjacent to budget ownership.

## Step 2: Strategic fit

**Fit with company offering:** Strong. A monitoring product is directly connected to incident reduction and operational visibility.

**Traffic quality expectation:** Likely good. The audience is narrow and commercially relevant.

**Assessment:** Strong candidate for product-adjacent demand generation.

## Step 3: Search integrity

**Searchable task:** Plausible interest around incident cost, downtime cost, reliability ROI, and monitoring business case queries.

**People-first test:** Pass. Even without rankings, the tool would still be useful in outbound content, customer conversations, and community sharing.

**Thin-content risk:** Low if the page explains assumptions and result interpretation clearly.

## Step 4: UX and trust review

**Good design choices:**

- only a few inputs are required
- output can include both cost estimate and improvement scenarios
- assumptions can be displayed openly

**Risks:**

- if formulas are hidden, users may distrust the result
- if the tool asks for too many operational details, completion rate may fall

**Recommendation:** Show assumptions inline and offer adjustable defaults.

## Step 5: Lead-capture review

**Bad option:** Require email before showing the estimate.

**Better option:** Show the estimate immediately, then offer:

- downloadable summary by email
- saved scenario comparison
- optional follow-up content for reliability planning

**Reasoning:** The estimate itself is the proof of value. Gating first would damage trust.

## Step 6: Measurement plan

Recommended events:

- `tool_landing_view`
- `tool_started`
- `tool_completed`
- `scenario_adjusted`
- `summary_requested`
- `lead_submitted`

Key review questions after launch:

- Are users completing the estimate?
- Are they adjusting assumptions, indicating real engagement?
- Do summary requests correlate with better lead quality?

## Final recommendation

**Decision:** Build a scoped MVP

**Why:**

- clear user pain
- strong alignment to the company’s product category
- trustworthy value can be delivered without aggressive gating
- measurable path from usage to lead capture

**Launch risks:**

1. unrealistic default assumptions make the result feel manipulative
2. too much explanatory copy slows the user before interaction
3. the sales handoff may overreact to every submission rather than filtering for fit

**Next actions:**

1. define the minimum viable formula and assumptions
2. design an ungated first-result experience
3. specify event tracking before implementation
4. prepare a short interpretation section explaining what the estimate means and does not mean
5. review the page again using `references/review-criteria.md`

## Contrast Example: Reject Case

**Idea:** “Incident meme generator” to attract engineers on social media.

**Why reject:**

- weak connection to buyer intent
- novelty exceeds utility
- hard to connect usage to qualified pipeline
- likely to create attention without strategic leverage
