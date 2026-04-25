---
name: startup-business-analyst-business-case
description: "Business Case Generator workflow skill. Use this skill when the user needs 'Generate comprehensive investor-ready business case document with and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["startup-business-analyst-business-case", "generate", "comprehensive", "investor-ready", "business", "case", "document", "tools"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Business Case Generator

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/startup-business-analyst-business-case` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Business Case Generator Generate a comprehensive, investor-ready business case document covering market opportunity, solution, competitive landscape, financial projections, team, risks, and funding ask for startup fundraising and strategic planning.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Instructions for Claude, Business Case Document Structure, Notes, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on business case generator tasks or workflows
- Needing guidance, best practices, or checklists for business case generator
- The task is unrelated to business case generator
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: 'Generate comprehensive investor-ready business case document with.
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
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Instructions for Claude

When this command is invoked, follow these steps:

### Step 1: Gather Context

Ask the user for key information:

**Company Basics:**
- Company name and elevator pitch
- Stage (pre-seed, seed, Series A)
- Problem being solved
- Target customers

**Audience:**
- Who will read this? (VCs, angels, strategic partners)
- What's the primary goal? (fundraising, partnership, internal planning)

**Available Materials:**
- Existing pitch deck or docs?
- Market sizing data?
- Financial model?
- Competitive analysis?

### Step 2: Activate Relevant Skills

Reference skills for comprehensive analysis:
- **market-sizing-analysis** - TAM/SAM/SOM calculations
- **startup-financial-modeling** - Financial projections
- **competitive-landscape** - Competitive analysis frameworks
- **team-composition-analysis** - Organization planning
- **startup-metrics-framework** - Key metrics and benchmarks

### Step 3: Structure the Business Case

Create a comprehensive document with these sections:

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @startup-business-analyst-business-case to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @startup-business-analyst-business-case against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @startup-business-analyst-business-case for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @startup-business-analyst-business-case using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: What This Command Does

Create a complete business case including:
1. Executive summary
2. Problem and market opportunity
3. Solution and product
4. Competitive analysis and differentiation
5. Financial projections
6. Go-to-market strategy
7. Team and organization
8. Risks and mitigation
9. Funding ask and use of proceeds

#### Imported: Integration with Other Commands

This command synthesizes outputs from:
- `/market-opportunity` - Include TAM/SAM/SOM analysis
- `/financial-projections` - Include full financial model

#### Imported: Example Usage

```
User: /business-case

Claude: I'll create a comprehensive business case document. Let me gather the key information first.

Company name and description?
→ "AcmeCorp - AI-powered email marketing for e-commerce"

Who is the audience?
→ "Series A investors"

What materials do you have?
→ "We have market sizing and financial model done"

[Claude creates comprehensive 15-20 page business case with all sections]
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Lead with customer problem
- Quantify everything
- Show, don't just tell (use data)
- Be realistic on projections
- Acknowledge risks honestly
- Cite all data sources
- Keep executive summary concise

### Imported Operating Notes

#### Imported: Best Practices

**Do:**
- Lead with customer problem
- Quantify everything
- Show, don't just tell (use data)
- Be realistic on projections
- Acknowledge risks honestly
- Cite all data sources
- Keep executive summary concise
- Focus on differentiation

**Don't:**
- Use jargon without explanation
- Make unsupported claims
- Ignore competition
- Be overly optimistic
- Skip the "why now"
- Forget to proofread
- Use generic templates without customization

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/startup-business-analyst-business-case`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Business Case Document Structure

### Section 1: Executive Summary (1-2 pages)

**Company Overview:**
- One-sentence description
- Founded, location, stage
- Team highlights

**Problem Statement:**
- Core problem being solved (2-3 sentences)
- Market pain quantified

**Solution:**
- How the product solves it (2-3 sentences)
- Key differentiation

**Market Opportunity:**
- TAM: $X.XB
- SAM: $X.XM
- SOM (Year 5): $X.XM

**Traction:**
- Current metrics (MRR, customers, growth rate)
- Key milestones achieved

**Financial Snapshot:**
```
| Metric | Current | Year 1 | Year 2 | Year 3 |
|--------|---------|--------|--------|--------|
| ARR | $X | $Y | $Z | $W |
| Customers | X | Y | Z | W |
| Team Size | X | Y | Z | W |
```

**Funding Ask:**
- Amount seeking
- Use of proceeds (top 3-4)
- Expected milestones

### Section 2: Problem & Market Opportunity (2-3 pages)

**The Problem:**
- Detailed problem description
- Who experiences this problem
- Current solutions and their limitations
- Cost of the problem (quantified)

**Market Landscape:**
- Industry overview
- Key trends driving opportunity
- Market growth rate and drivers

**Market Sizing:**
- TAM calculation and methodology
- SAM with filters applied
- SOM with assumptions
- Validation and data sources
- Comparison to public companies

**Target Customer Profile:**
- Primary segments
- Customer characteristics
- Decision-makers and buying process

### Section 3: Solution & Product (2-3 pages)

**Product Overview:**
- What it does (features and capabilities)
- How it works (architecture/approach)
- Key differentiators
- Technology advantages

**Value Proposition:**
- Benefits by customer segment
- ROI or value delivered
- Time to value

**Product Roadmap:**
- Current state
- Near-term (6 months)
- Medium-term (12-18 months)
- Vision (2-3 years)

**Intellectual Property:**
- Patents (filed, pending)
- Proprietary technology
- Data advantages
- Defensibility

### Section 4: Competitive Analysis (2 pages)

**Competitive Landscape:**
- Direct competitors
- Indirect competitors (alternatives)
- Adjacent players (potential entrants)

**Competitive Matrix:**
```
| Feature/Factor | Us | Comp A | Comp B | Comp C |
|----------------|----|---------| -------|--------|
| Feature 1 | ✓ | ✓ | ✗ | ✓ |
| Feature 2 | ✓ | ✗ | ✓ | ✗ |
| Pricing | $X | $Y | $Z | $W |
```

**Differentiation:**
- 3-5 key differentiators
- Why these matter to customers
- Defensibility of advantages

**Competitive Positioning:**
- Positioning map (2-3 dimensions)
- Market positioning statement

**Barriers to Entry:**
- What protects against competition
- Network effects, switching costs, etc.

### Section 5: Business Model & Go-to-Market (2 pages)

**Business Model:**
- Revenue model (subscriptions, transactions, etc.)
- Pricing strategy and tiers
- Customer acquisition approach
- Expansion revenue strategy

**Go-to-Market Strategy:**
- Customer acquisition channels
- Sales model (self-serve, sales-led, hybrid)
- Customer acquisition cost (CAC)
- Sales cycle and conversion rates

**Marketing Strategy:**
- Positioning and messaging
- Channel strategy
- Content and demand generation
- Partnerships and integrations

**Customer Success:**
- Onboarding approach
- Support model
- Retention strategy
- Net dollar retention target

### Section 6: Financial Projections (2-3 pages)

**Revenue Model:**
- Cohort-based projections
- Key assumptions
- Revenue breakdown by segment

**3-Year Financial Summary:**
```
| Metric | Year 1 | Year 2 | Year 3 |
|--------|--------|--------|--------|
| Revenue | $X.XM | $Y.YM | $Z.ZM |
| Gross Margin | XX% | XX% | XX% |
| Operating Expenses | $X.XM | $Y.YM | $Z.ZM |
| Net Income | ($X.XM) | ($Y.YM) | $Z.ZM |
| EBITDA Margin | (XX%) | (XX%) | XX% |
```

**Unit Economics:**
- CAC: $X,XXX
- LTV: $X,XXX
- LTV:CAC ratio: X.X
- CAC Payback: XX months
- Gross margin: XX%

**Key Metrics Trajectory:**
```
| Metric | Current | Year 1 | Year 2 | Year 3 |
|--------|---------|--------|--------|--------|
| MRR/ARR | $X | $Y | $Z | $W |
| Customers | X | Y | Z | W |
| Net Dollar Retention | XX% | XX% | XX% | XX% |
| Burn Multiple | X.X | X.X | X.X | X.X |
```

**Scenario Analysis:**
- Conservative, base, optimistic
- Key drivers and sensitivities

**Path to Profitability:**
- Break-even timeline
- Key milestones
- Unit economics at scale

### Section 7: Team & Organization (1-2 pages)

**Leadership Team:**
For each founder/executive:
- Name, title, photo (if available)
- Relevant background (2-3 sentences)
- Key accomplishments
- Why they're uniquely qualified

**Current Team:**
- Headcount by department
- Key hires and their backgrounds
- Advisory board

**Hiring Plan:**
- Year 1-3 headcount growth
- Key roles to fill
- Recruiting strategy

**Organization Evolution:**
```
Current (5 people) → Year 1 (15) → Year 2 (35) → Year 3 (60)
Engineering: 3 → 7 → 15 → 25
Sales & Marketing: 1 → 4 → 12 → 20
Other: 1 → 4 → 8 → 15
```

**Equity & Compensation:**
- Option pool sizing
- Compensation philosophy
- Retention strategy

### Section 8: Traction & Milestones (1 page)

**Current Traction:**
- Revenue or user metrics
- Growth rate
- Key customer wins
- Product development progress

**Milestones Achieved:**
- Product launches
- Funding rounds
- Team hires
- Customer acquisition
- Partnerships

**Upcoming Milestones (12-18 months):**
- Product milestones
- Revenue targets
- Customer goals
- Team goals
- Partnership goals

### Section 9: Risks & Mitigation (1 page)

**Market Risks:**
- Market size assumptions
- Competitive intensity
- Substitute adoption
- Mitigation strategies

**Execution Risks:**
- Product development
- Go-to-market effectiveness
- Hiring and retention
- Mitigation strategies

**Financial Risks:**
- Burn rate management
- Fundraising market
- Unit economics
- Mitigation strategies

**Regulatory/External Risks:**
- Compliance requirements
- Data privacy
- Economic conditions
- Mitigation strategies

### Section 10: Funding Request & Use of Proceeds (1 page)

**Funding Ask:**
- Amount seeking: $X.XM
- Structure: Equity, SAFE, convertible note
- Target valuation: $X.XM (if applicable)

**Use of Proceeds:**
```
Total Raise: $5.0M
- Product Development: $2.0M (40%)
  • Engineering team expansion
  • Infrastructure and tools
  • Product roadmap execution

- Sales & Marketing: $2.0M (40%)
  • Sales team hiring (5 AEs)
  • Marketing programs
  • Demand generation

- Operations & G&A: $0.5M (10%)
  • Finance/legal/HR
  • Office and facilities

- Working Capital: $0.5M (10%)
  • 6-month buffer
```

**Milestones to Achieve:**
- Revenue: $X.XM ARR (X% growth)
- Customer: XXX customers
- Product: Key features launched
- Team: XX employees
- Metric: Key metric targets

**Expected Timeline:**
- 18-24 month runway
- Achieve milestones in 15-18 months
- 6-month buffer for next raise

**Next Round:**
- Series A in 18-24 months
- Expected metrics at that time
- Target raise amount

---

### Step 4: Enhance with Visuals

Suggest including:
- Charts for market sizing (TAM funnel)
- Product screenshots or mockups
- Positioning maps
- Financial trend charts (revenue, customers, burn)
- Organization chart
- Timeline/roadmap
- Use of proceeds pie chart

### Step 5: Provide Additional Sections (Optional)

**If Relevant, Add:**
- Regulatory/Compliance section (for regulated industries)
- Technology Architecture (for deep tech)
- Clinical/Scientific Data (for biotech/health tech)
- Unit Economics Deep Dive (for complex business models)
- Strategic Partnerships (if material to strategy)

### Step 6: Create Executive Summary Slide

Provide one-page summary for quick review:
- Problem & Solution (3 bullets each)
- Market: TAM/SAM/SOM
- Traction: Key metrics
- Team: Founders
- Ask: Amount and use
- Contact information

### Step 7: Save Business Case

Offer to save as markdown:
- Filename: `business-case-[company-name]-YYYY-MM-DD.md`
- Suggest converting to PDF for sharing
- Provide tips for presentation format

#### Imported: Notes

- Business case creation takes 1-2 hours
- Result is investor-grade document
- Can be used for pitch deck development
- Update quarterly or for funding rounds
- Customize sections based on audience
- Keep executive summary to 2 pages max

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
