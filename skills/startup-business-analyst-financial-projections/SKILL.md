---
name: startup-business-analyst-financial-projections
description: "Financial Projections workflow skill. Use this skill when the user needs 'Create detailed 3-5 year financial model with revenue, costs, cash and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["startup-business-analyst-financial-projections", "create", "detailed", "year", "financial", "model", "revenue", "costs"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Financial Projections

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/startup-business-analyst-financial-projections` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Financial Projections Create a comprehensive 3-5 year financial model with revenue projections, cost structure, headcount planning, cash flow analysis, and three-scenario modeling (conservative, base, optimistic) for startup financial planning and fundraising.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Instructions for Claude, Financial Model Best Practices, Notes, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on financial projections tasks or workflows
- Needing guidance, best practices, or checklists for financial projections
- The task is unrelated to financial projections
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: 'Create detailed 3-5 year financial model with revenue, costs, cash.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Instructions for Claude

When this command is invoked, follow these steps:

### Step 1: Gather Model Inputs

Ask the user for essential information:

**Business Model:**
- Revenue model (SaaS, marketplace, transaction, etc.)
- Pricing structure (tiers, average price)
- Target customer segments

**Starting Point:**
- Current MRR/ARR (if any)
- Current customer count
- Current team size
- Current cash balance

**Growth Assumptions:**
- Expected monthly customer acquisition
- Customer retention/churn rate
- Average contract value (ACV)
- Sales cycle length

**Cost Assumptions:**
- Gross margin or COGS %
- S&M budget or CAC target
- Current burn rate (if applicable)

**Funding:**
- Planned fundraising (amount, timing)
- Pre/post-money valuation

### Step 2: Activate startup-financial-modeling Skill

The startup-financial-modeling skill provides frameworks. Reference it for:
- Revenue modeling approaches
- Cost structure templates
- Headcount planning guidance
- Scenario analysis methods

### Step 3: Build Revenue Model

**Use Cohort-Based Approach:**

For each month, track:
1. New customers acquired
2. Existing customers retained (apply churn)
3. Revenue per cohort (customers × ARPU)
4. Expansion revenue (upsells)

**Formula:**
```
MRR (Month N) = Σ across all cohorts:
  (Cohort Size × Retention Rate × ARPU) + Expansion
```

**Project:**
- Monthly detail for Year 1-2
- Quarterly detail for Year 3
- Annual for Years 4-5

### Step 4: Model Cost Structure

Break down operating expenses:

**1. Cost of Goods Sold (COGS)**
- Hosting/infrastructure (% of revenue or fixed)
- Payment processing (% of revenue)
- Variable customer support
- Third-party services

Target gross margin:
- SaaS: 75-85%
- Marketplace: 60-70%
- E-commerce: 40-60%

**2. Sales & Marketing (S&M)**
- Sales team compensation
- Marketing programs
- Tools and software
- Target: 40-60% of revenue (early stage)

**3. Research & Development (R&D)**
- Engineering team
- Product management
- Design
- Target: 30-40% of revenue

**4. General & Administrative (G&A)**
- Executive team
- Finance, legal, HR
- Office and facilities
- Target: 15-25% of revenue

### Step 5: Plan Headcount

Create role-by-role hiring plan:

**Reference team-composition-analysis skill for:**
- Roles by stage
- Compensation benchmarks
- Hiring velocity assumptions

**For each role:**
- Title and department
- Start date (month/quarter)
- Base salary
- Fully-loaded cost (salary × 1.3-1.4)
- Equity grant

**Track departmental ratios:**
- Engineering: 40-50% of team
- Sales & Marketing: 25-35%
- G&A: 10-15%
- Product/CS: 10-15%

### Step 6: Calculate Cash Flow

Monthly cash flow projection:

```
Beginning Cash Balance
+ Cash Collected (revenue, consider payment terms)
- Operating Expenses
- CapEx
= Ending Cash Balance

Monthly Burn = Revenue - Expenses (if negative)
Runway = Cash Balance / Monthly Burn Rate
```

**Include Funding Events:**
- Timing of raises
- Amount raised
- Use of proceeds
- Impact on cash balance

### Step 7: Compute Key Metrics

Calculate monthly/quarterly:

**Unit Economics:**
- CAC (S&M spend / new customers)
- LTV (ARPU × margin% / churn rate)
- LTV:CAC ratio (target > 3.0)
- CAC payback period (target < 18 months)

**Efficiency Metrics:**
- Burn multiple (net burn / net new ARR) - target < 2.0
- Magic number (net new ARR / S&M spend) - target > 0.5
- Rule of 40 (growth% + margin%) - target > 40%

**Cash Metrics:**
- Monthly burn rate
- Runway in months
- Cash efficiency

### Step 8: Create Three Scenarios

Build conservative, base, and optimistic projections:

**Conservative (P10):**
- New customers: -30% vs. base
- Churn: +20% vs. base
- Pricing: -15% vs. base
- CAC: +25% vs. base

**Base (P50):**
- Most likely assumptions
- Primary planning scenario

**Optimistic (P90):**
- New customers: +30% vs. base
- Churn: -20% vs. base
- Pricing: +15% vs. base
- CAC: -25% vs. base

### Step 9: Generate Financial Model Report

Create comprehensive markdown report with tables:

**Section 1: Executive Summary**
- 3-5 year financial snapshot
- Key metrics at scale
- Funding requirements

**Section 2: Model Assumptions**
- Revenue model and pricing
- Growth assumptions
- Cost structure assumptions
- Headcount plan summary

**Section 3: Revenue Projections**
Monthly/quarterly tables showing:
```
| Month | New Customers | Total Customers | MRR | ARR | Growth % |
|-------|---------------|-----------------|-----|-----|----------|
```

**Section 4: Cost Breakdown**
```
| Department | Year 1 | Year 2 | Year 3 | % Revenue |
|------------|--------|--------|--------|-----------|
| COGS       | $X     | $Y     | $Z     | XX%       |
| S&M        | $X     | $Y     | $Z     | XX%       |
| R&D        | $X     | $Y     | $Z     | XX%       |
| G&A        | $X     | $Y     | $Z     | XX%       |
```

**Section 5: Headcount Plan**
```
| Department | Current | Year 1 | Year 2 | Year 3 |
|------------|---------|--------|--------|--------|
| Engineering| X       | Y      | Z      | W      |
```

**Section 6: Cash Flow Analysis**
```
| Quarter | Revenue | Expenses | Net Burn | Cash Balance | Runway |
|---------|---------|----------|----------|--------------|--------|
```

**Section 7: Key Metrics**
```
| Metric | Year 1 | Year 2 | Year 3 | Target |
|--------|--------|--------|--------|--------|
| CAC | $X | $Y | $Z | <$A |
| LTV | $X | $Y | $Z | >$B |
| Burn Multiple | X | Y | Z | <2.0 |
```

**Section 8: Scenario Analysis**
```
| Scenario | Year 3 ARR | Customers | Burn | Runway |
|----------|------------|-----------|------|--------|
| Conservative | $Xم | Y | $Z | W mo |
| Base | $X | Y | $Z | W mo |
| Optimistic | $X | Y | $Z | W mo |
```

**Section 9: Funding Requirements**
- Amount needed
- Use of proceeds breakdown
- Milestones to achieve
- Expected valuation impact

**Section 10: Validation**
- Sanity checks performed
- Benchmark comparisons
- Risk factors
- Assumptions to monitor

### Step 10: Save Model

Offer to save as markdown file:
- Suggest filename: `financial-projections-YYYY-MM-DD.md`
- Include note that user can convert to Excel/Sheets
- Provide formulas for key calculations

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @startup-business-analyst-financial-projections to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/startup-business-analyst-financial-projections/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/startup-business-analyst-financial-projections/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @startup-business-analyst-financial-projections using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: What This Command Does

This command builds a complete financial model including:
1. Cohort-based revenue projections
2. Detailed cost structure (COGS, S&M, R&D, G&A)
3. Headcount planning by role
4. Monthly cash flow analysis
5. Key metrics (CAC, LTV, burn rate, runway)
6. Three-scenario analysis

#### Imported: Integration with Other Commands

Pairs well with:
- `/market-opportunity` - Use SOM for revenue ceiling
- `/business-case` - Include projections in business case

#### Imported: Example Usage

```
User: /financial-projections

Claude: I'll create a comprehensive financial model for your startup. Let me gather the key inputs.

What's your business model?
→ "B2B SaaS, subscription-based"

Current state?
→ "$50K MRR, 100 customers, 5-person team, $500K cash"

Growth assumptions?
→ "Expect 15% MoM growth, 10% monthly churn, $500 ACV"

[Claude builds complete model with all sections]
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/startup-business-analyst-financial-projections`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Financial Model Best Practices

**Do:**
- Use cohort-based revenue model
- Include 3 scenarios
- Show monthly detail (Year 1-2)
- Calculate key metrics
- Validate against benchmarks
- Document all assumptions
- Show cash flow and runway
- Include fundraising milestones

**Don't:**
- Be overly optimistic on growth
- Underestimate costs
- Forget fully-loaded compensation
- Ignore cash timing
- Skip scenario analysis
- Use static headcount
- Forget to validate

#### Imported: Notes

- Model building takes 45-90 minutes
- Results in comprehensive planning tool
- Update monthly to track vs. actuals
- Share with investors and board
- Use for fundraising decks
- Basis for budget and hiring decisions

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
