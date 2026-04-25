---
name: startup-financial-modeling
description: "Startup Financial Modeling workflow skill. Use this skill when the user needs Build comprehensive 3-5 year financial models with revenue projections, cost structures, cash flow analysis, and scenario planning for early-stage startups and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["startup-financial-modeling", "build", "comprehensive", "year", "financial", "models", "revenue", "projections"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Startup Financial Modeling

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/startup-financial-modeling` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Startup Financial Modeling Build comprehensive 3-5 year financial models with revenue projections, cost structures, cash flow analysis, and scenario planning for early-stage startups.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Components, Financial Model Structure, Business Model Templates, Fundraising Integration, Common Pitfalls, Model Validation.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on startup financial modeling tasks or workflows
- Needing guidance, best practices, or checklists for startup financial modeling
- The task is unrelated to startup financial modeling
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: Build comprehensive 3-5 year financial models with revenue projections, cost structures, cash flow analysis, and scenario planning for early-stage startups.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Subscription pricing tiers
6. Annual vs. monthly contracts
7. Free trial or freemium approach

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Step-by-Step Process

### Step 1: Define Business Model

Clarify revenue model and pricing.

**SaaS Model:**
- Subscription pricing tiers
- Annual vs. monthly contracts
- Free trial or freemium approach
- Expansion revenue strategy

**Marketplace Model:**
- GMV projections
- Take rate (% of transactions)
- Buyer and seller economics
- Transaction frequency

**Transactional Model:**
- Transaction volume
- Revenue per transaction
- Frequency and seasonality

### Step 2: Build Revenue Projections

Use cohort-based methodology for accuracy.

**Monthly Customer Acquisition:**
Define new customers acquired each month.

**Retention Curve:**
Model customer retention over time.

**Typical SaaS Retention:**
- Month 1: 100%
- Month 3: 90%
- Month 6: 85%
- Month 12: 75%
- Month 24: 70%

**Revenue Calculation:**
For each cohort, calculate retained customers × ARPU for each month.

### Step 3: Model Cost Structure

Break down costs by category and behavior.

**Fixed vs. Variable:**
- Fixed: Salaries, software, rent
- Variable: Hosting, payment processing, support

**Scaling Assumptions:**
- COGS as % of revenue
- S&M as % of revenue (CAC payback)
- R&D growth rate
- G&A as % of total expenses

### Step 4: Create Hiring Plan

Model headcount growth by role and department.

**Inputs:**
- Starting headcount
- Hiring velocity by role
- Fully-loaded compensation by role
- Benefits and taxes (typically 1.3-1.4x salary)

**Example:**
```
Engineer: $150K salary × 1.35 = $202K fully-loaded
Sales Rep: $100K OTE × 1.30 = $130K fully-loaded
```

### Step 5: Project Cash Flow

Calculate monthly cash position and runway.

**Monthly Cash Flow:**
```
Beginning Cash
+ Revenue Collected (consider payment terms)
- Operating Expenses Paid
- CapEx
= Ending Cash
```

**Runway Calculation:**
```
If Ending Cash < 0:
  Funding Need = Negative Cash Balance
  Runway = 0
Else:
  Runway = Ending Cash / Average Monthly Burn
```

### Step 6: Calculate Key Metrics

Track metrics that matter for stage.

**Revenue Metrics:**
- MRR / ARR
- Growth rate (MoM, YoY)
- Revenue by segment or cohort

**Unit Economics:**
- CAC (Customer Acquisition Cost)
- LTV (Lifetime Value)
- CAC Payback Period
- LTV / CAC Ratio

**Efficiency Metrics:**
- Burn multiple (Net Burn / Net New ARR)
- Magic number (Net New ARR / S&M Spend)
- Rule of 40 (Growth % + Profit Margin %)

**Cash Metrics:**
- Monthly burn rate
- Runway (months)
- Cash efficiency

### Step 7: Scenario Analysis

Create three scenarios with different assumptions.

**Variable Assumptions:**
- Customer acquisition rate (±30%)
- Churn rate (±20%)
- Average contract value (±15%)
- CAC (±25%)

**Fixed Assumptions:**
- Pricing structure
- Core operating expenses
- Hiring plan (adjust timing, not roles)

#### Imported: Overview

Financial modeling provides the quantitative foundation for startup strategy, fundraising, and operational planning. Create realistic projections using cohort-based revenue modeling, detailed cost structures, and scenario analysis to support decision-making and investor presentations.

#### Imported: Core Components

### Revenue Model

**Cohort-Based Projections:**
Build revenue from customer acquisition and retention by cohort.

**Formula:**
```
MRR = Σ (Cohort Size × Retention Rate × ARPU)
ARR = MRR × 12
```

**Key Inputs:**
- Monthly new customer acquisitions
- Customer retention rates by month
- Average revenue per user (ARPU)
- Pricing and packaging assumptions
- Expansion revenue (upsells, cross-sells)

### Cost Structure

**Operating Expenses Categories:**

1. **Cost of Goods Sold (COGS)**
   - Hosting and infrastructure
   - Payment processing fees
   - Customer support (variable portion)
   - Third-party services per customer

2. **Sales & Marketing (S&M)**
   - Customer acquisition cost (CAC)
   - Marketing programs and advertising
   - Sales team compensation
   - Marketing tools and software

3. **Research & Development (R&D)**
   - Engineering team compensation
   - Product management
   - Design and UX
   - Development tools and infrastructure

4. **General & Administrative (G&A)**
   - Executive team
   - Finance, legal, HR
   - Office and facilities
   - Insurance and compliance

### Cash Flow Analysis

**Components:**
- Beginning cash balance
- Cash inflows (revenue, fundraising)
- Cash outflows (operating expenses, CapEx)
- Ending cash balance
- Monthly burn rate
- Runway (months of cash remaining)

**Formula:**
```
Runway = Current Cash Balance / Monthly Burn Rate
Monthly Burn = Monthly Revenue - Monthly Expenses
```

### Headcount Planning

**Role-Based Hiring Plan:**
Track headcount by department and role.

**Key Metrics:**
- Fully-loaded cost per employee
- Revenue per employee
- Headcount by department (% of total)

**Typical Ratios (Early-Stage SaaS):**
- Engineering: 40-50%
- Sales & Marketing: 25-35%
- G&A: 10-15%
- Customer Success: 5-10%

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @startup-financial-modeling to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @startup-financial-modeling against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @startup-financial-modeling for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @startup-financial-modeling using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

To create a startup financial model:

1. **Define business model** - Revenue drivers and pricing
2. **Project revenue** - Cohort-based with retention
3. **Model costs** - COGS, S&M, R&D, G&A by month
4. **Plan headcount** - Hiring by role and department
5. **Calculate cash flow** - Revenue - expenses = burn/runway
6. **Compute metrics** - CAC, LTV, burn multiple, runway
7. **Create scenarios** - Conservative, base, optimistic
8. **Validate assumptions** - Sanity check and benchmark
9. **Integrate fundraising** - Model funding rounds and milestones

For complete templates and formulas, reference the `references/` and `examples/` files.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/startup-financial-modeling`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@seo-plan` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@seo-programmatic` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@seo-schema` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@seo-sitemap` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Additional Resources

### Reference Files

For detailed model structures and advanced techniques:
- **`references/model-templates.md`** - Complete financial model templates by business model
- **`references/unit-economics.md`** - Deep dive on CAC, LTV, payback, and efficiency metrics
- **`references/fundraising-scenarios.md`** - Modeling funding rounds and dilution

### Example Files

Working financial models with formulas:
- **`examples/saas-financial-model.md`** - Complete 3-year SaaS model with cohort analysis
- **`examples/marketplace-model.md`** - Marketplace GMV and take rate projections
- **`examples/scenario-analysis.md`** - Three-scenario framework with sensitivities

#### Imported: Financial Model Structure

### Three-Scenario Framework

**Conservative Scenario (P10):**
- Slower customer acquisition
- Lower pricing or conversion
- Higher churn rates
- Extended sales cycles
- Used for cash management

**Base Scenario (P50):**
- Most likely outcomes
- Realistic assumptions
- Primary planning scenario
- Used for board reporting

**Optimistic Scenario (P90):**
- Faster growth
- Better unit economics
- Lower churn
- Used for upside planning

### Time Horizon

**Detailed Projections: 3 Years**
- Monthly detail for Year 1
- Monthly detail for Year 2
- Quarterly detail for Year 3

**High-Level Projections: Years 4-5**
- Annual projections
- Key metrics only
- Support long-term planning

#### Imported: Business Model Templates

### SaaS Financial Model

**Revenue Drivers:**
- New MRR (customers × ARPU)
- Expansion MRR (upsells)
- Contraction MRR (downgrades)
- Churned MRR (lost customers)

**Key Ratios:**
- Gross margin: 75-85%
- S&M as % revenue: 40-60% (early stage)
- CAC payback: < 12 months
- Net retention: 100-120%

**Example Projection:**
```
Year 1: $500K ARR, 50 customers, $100K MRR by Dec
Year 2: $2.5M ARR, 200 customers, $208K MRR by Dec
Year 3: $8M ARR, 600 customers, $667K MRR by Dec
```

### Marketplace Financial Model

**Revenue Drivers:**
- GMV (Gross Merchandise Value)
- Take rate (% of GMV)
- Net revenue = GMV × Take rate

**Key Ratios:**
- Take rate: 10-30% depending on category
- CAC for buyers vs. sellers
- Contribution margin: 60-70%

**Example Projection:**
```
Year 1: $5M GMV, 15% take rate = $750K revenue
Year 2: $20M GMV, 15% take rate = $3M revenue
Year 3: $60M GMV, 15% take rate = $9M revenue
```

### E-Commerce Financial Model

**Revenue Drivers:**
- Traffic (visitors)
- Conversion rate
- Average order value (AOV)
- Purchase frequency

**Key Ratios:**
- Gross margin: 40-60%
- Contribution margin: 20-35%
- CAC payback: 3-6 months

### Services / Agency Financial Model

**Revenue Drivers:**
- Billable hours or projects
- Hourly rate or project fee
- Utilization rate
- Team capacity

**Key Ratios:**
- Gross margin: 50-70%
- Utilization: 70-85%
- Revenue per employee

#### Imported: Fundraising Integration

### Funding Scenario Modeling

**Pre-Money Valuation:**
Based on metrics and comparables.

**Dilution:**
```
Post-Money = Pre-Money + Investment
Dilution % = Investment / Post-Money
```

**Use of Funds:**
Allocate funding to extend runway and achieve milestones.

**Example:**
```
Raise: $5M at $20M pre-money
Post-Money: $25M
Dilution: 20%

Use of Funds:
- Product Development: $2M (40%)
- Sales & Marketing: $2M (40%)
- G&A and Operations: $0.5M (10%)
- Working Capital: $0.5M (10%)
```

### Milestone-Based Planning

**Identify Key Milestones:**
- Product launch
- First $1M ARR
- Break-even on CAC
- Series A fundraise

**Funding Amount:**
Ensure runway to achieve next milestone + 6 months buffer.

#### Imported: Common Pitfalls

**Pitfall 1: Overly Optimistic Revenue**
- New startups rarely hit aggressive projections
- Use conservative customer acquisition assumptions
- Model realistic churn rates

**Pitfall 2: Underestimating Costs**
- Add 20% buffer to expense estimates
- Include fully-loaded compensation
- Account for software and tools

**Pitfall 3: Ignoring Cash Flow Timing**
- Revenue ≠ cash (payment terms)
- Expenses paid before revenue collected
- Model cash conversion carefully

**Pitfall 4: Static Headcount**
- Hiring takes time (3-6 months to fill roles)
- Ramp time for productivity (3-6 months)
- Account for attrition (10-15% annually)

**Pitfall 5: Not Scenario Planning**
- Single scenario is never accurate
- Always model conservative case
- Plan for what you'll do if base case fails

#### Imported: Model Validation

**Sanity Checks:**
- [ ] Revenue growth rate is achievable (3x in Year 2, 2x in Year 3)
- [ ] Unit economics are realistic (LTV/CAC > 3, payback < 18 months)
- [ ] Burn multiple is reasonable (< 2.0 in Year 2-3)
- [ ] Headcount scales with revenue (revenue per employee growing)
- [ ] Gross margin is appropriate for business model
- [ ] S&M spending aligns with CAC and growth targets

**Benchmark Against Peers:**
Compare key metrics to similar companies at similar stage.

**Investor Feedback:**
Share model with advisors or investors for feedback on assumptions.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
