---
name: market-sizing-analysis
description: "Market Sizing Analysis workflow skill. Use this skill when the user needs Comprehensive market sizing methodologies for calculating Total Addressable Market (TAM), Serviceable Available Market (SAM), and Serviceable Obtainable Market (SOM) for startup opportunities and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["market-sizing-analysis", "comprehensive", "market", "sizing", "methodologies", "for", "calculating", "total"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# Market Sizing Analysis

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/market-sizing-analysis` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Market Sizing Analysis Comprehensive market sizing methodologies for calculating Total Addressable Market (TAM), Serviceable Available Market (SAM), and Serviceable Obtainable Market (SOM) for startup opportunities.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Three-Methodology Framework, Industry-Specific Considerations, Presenting Market Sizing, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on market sizing analysis tasks or workflows
- Needing guidance, best practices, or checklists for market sizing analysis
- The task is unrelated to market sizing analysis
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: Comprehensive market sizing methodologies for calculating Total Addressable Market (TAM), Serviceable Available Market (SAM), and Serviceable Obtainable Market (SOM) for startup opportunities.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/data-sources.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `examples/saas-market-sizing.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. What problem is being solved?
6. Who are the target customers?
7. What's the product/service category?

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Step-by-Step Process

### Step 1: Define the Market

Clearly specify what market is being measured.

**Questions to answer:**
- What problem is being solved?
- Who are the target customers?
- What's the product/service category?
- What's the geographic scope?
- What's the time horizon?

**Example:**
- Problem: E-commerce companies struggle with email marketing automation
- Customers: E-commerce stores with >$1M annual revenue
- Category: AI-powered email marketing software
- Geography: North America initially, global expansion
- Horizon: 3-5 year opportunity

### Step 2: Gather Data Sources

Identify credible data for calculations.

**Top-Down Sources:**
- Industry research reports (Gartner, Forrester, IDC)
- Government statistics (Census, BLS, trade associations)
- Public company filings and earnings
- Market research firms (Statista, CB Insights, PitchBook)

**Bottom-Up Sources:**
- Customer interviews and surveys
- Sales data and CRM records
- Industry databases (LinkedIn, ZoomInfo, Crunchbase)
- Competitive intelligence
- Academic research

**Value Theory Sources:**
- Customer problem quantification
- Time/cost studies
- ROI case studies
- Pricing research and willingness-to-pay surveys

### Step 3: Calculate TAM

Apply chosen methodology to determine total market.

**For Top-Down:**
1. Find total category size from research
2. Document data source and year
3. Apply growth rate if needed
4. Validate with multiple sources

**For Bottom-Up:**
1. Count total potential customers
2. Calculate average annual revenue per customer
3. Multiply to get TAM
4. Break down by segment

**For Value Theory:**
1. Quantify total addressable customer base
2. Calculate value per customer
3. Estimate pricing based on value
4. Multiply for TAM

### Step 4: Calculate SAM

Narrow TAM to serviceable addressable market.

**Apply Filters:**
- Geographic constraints (regions you can serve)
- Product limitations (features you currently have)
- Customer requirements (size, industry, use case)
- Distribution channel access
- Regulatory or compliance restrictions

**Formula:**
```
SAM = TAM × (% matching all filters)
```

**Example:**
- TAM: $10B global email marketing
- Geographic filter: 40% (North America)
- Product filter: 30% (e-commerce focus)
- Feature filter: 60% (need AI capabilities)
- SAM = $10B × 0.40 × 0.30 × 0.60 = $720M

### Step 5: Calculate SOM

Determine realistic obtainable market share.

**Consider:**
- Current market share of competitors
- Typical market share for new entrants (2-5%)
- Resources available (funding, team, time)
- Go-to-market effectiveness
- Competitive advantages
- Time to achieve (3-5 years typically)

**Conservative Approach:**
```
SOM (Year 3) = SAM × 2%
SOM (Year 5) = SAM × 5%
```

**Example:**
- SAM: $720M
- Year 3 SOM: $720M × 2% = $14.4M
- Year 5 SOM: $720M × 5% = $36M

### Step 6: Validate and Triangulate

Cross-check using multiple methods.

**Validation Techniques:**
1. Compare top-down and bottom-up results (should be within 30%)
2. Check against public company revenues in space
3. Validate customer count assumptions
4. Sense-check pricing assumptions
5. Review with industry experts
6. Compare to similar market categories

**Red Flags:**
- TAM that's too small (< $1B for VC-backed startups)
- TAM that's too large (unsupported by data)
- SOM that's too aggressive (> 10% in 5 years for new entrant)
- Inconsistency between methodologies (> 50% difference)

#### Imported: Overview

Market sizing provides the foundation for startup strategy, fundraising, and business planning. Calculate market opportunity using three complementary methodologies: top-down (industry reports), bottom-up (customer segment calculations), and value theory (willingness to pay).

#### Imported: Core Concepts

### The Three-Tier Market Framework

**TAM (Total Addressable Market)**
- Total revenue opportunity if achieving 100% market share
- Defines the universe of potential customers
- Used for long-term vision and market validation
- Example: All email marketing software revenue globally

**SAM (Serviceable Available Market)**
- Portion of TAM targetable with current product/service
- Accounts for geographic, segment, or capability constraints
- Represents realistic addressable opportunity
- Example: AI-powered email marketing for e-commerce in North America

**SOM (Serviceable Obtainable Market)**
- Realistic market share achievable in 3-5 years
- Accounts for competition, resources, and market dynamics
- Used for financial projections and fundraising
- Example: 2-5% of SAM based on competitive landscape

### When to Use Each Methodology

**Top-Down Analysis**
- Use when established market research exists
- Best for mature, well-defined markets
- Validates market existence and growth
- Starts with industry reports and narrows down

**Bottom-Up Analysis**
- Use when targeting specific customer segments
- Best for new or niche markets
- Most credible for investors
- Builds from customer data and pricing

**Value Theory**
- Use when creating new market categories
- Best for disruptive innovations
- Estimates based on value creation
- Calculates willingness to pay for problem solution

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @market-sizing-analysis to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @market-sizing-analysis against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @market-sizing-analysis for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @market-sizing-analysis using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

To perform market sizing analysis:

1. **Define the market** - Problem, customers, category, geography
2. **Choose methodology** - Bottom-up (preferred) or top-down + triangulation
3. **Gather data** - Industry reports, customer data, competitive intelligence
4. **Calculate TAM** - Apply methodology formula
5. **Narrow to SAM** - Apply product, geographic, segment filters
6. **Estimate SOM** - 2-5% realistic capture rate
7. **Validate** - Cross-check with alternative methods
8. **Document** - Show methodology, sources, assumptions
9. **Present** - Structure for audience (investors, strategy, operations)

For detailed step-by-step guidance on each methodology, reference the files in `references/` directory. For complete worked examples, see `examples/` directory.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/market-sizing-analysis`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Common Mistakes to Avoid

**Mistake 1: Confusing TAM with SAM**
- Don't claim entire market as addressable
- Apply realistic product/geographic constraints
- Be honest about serviceable market

**Mistake 2: Overly Aggressive SOM**
- New entrants rarely capture > 5% in 5 years
- Account for competition and resources
- Show realistic ramp timeline

**Mistake 3: Using Only Top-Down**
- Investors prefer bottom-up validation
- Top-down alone lacks credibility
- Always triangulate with multiple methods

**Mistake 4: Cherry-Picking Data**
- Use consistent, recent data sources
- Don't mix methodologies inappropriately
- Document all assumptions clearly

**Mistake 5: Ignoring Market Dynamics**
- Account for market growth/decline
- Consider competitive intensity
- Factor in switching costs and barriers

## Related Skills

- `@llm-application-dev-ai-assistant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@llm-application-dev-langchain-agent` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@llm-application-dev-prompt-optimize` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@llm-evaluation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/data-sources.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/saas-market-sizing.md` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [data-sources.md](references/data-sources.md)
- [saas-market-sizing.md](examples/saas-market-sizing.md)
- [saas-market-sizing.md](examples/saas-market-sizing.md)
- [data-sources.md](references/data-sources.md)

### Imported Reference Notes

#### Imported: Additional Resources

### Reference Files

For detailed methodologies and frameworks:
- **`references/methodology-deep-dive.md`** - Comprehensive guide to each methodology with step-by-step worksheets
- **`references/data-sources.md`** - Curated list of market research sources, databases, and tools
- **`references/industry-templates.md`** - Specific templates for SaaS, marketplace, consumer, B2B, and fintech markets

### Example Files

Working examples with complete calculations:
- **`examples/saas-market-sizing.md`** - Complete TAM/SAM/SOM for a B2B SaaS product
- **`examples/marketplace-sizing.md`** - Marketplace platform market opportunity calculation
- **`examples/value-theory-example.md`** - Value-based market sizing for disruptive innovation

Use these examples as templates for your own market sizing analysis. Each includes real numbers, data sources, and assumptions documented clearly.

#### Imported: Three-Methodology Framework

### Methodology 1: Top-Down Analysis

Start with total market size and narrow to addressable segments.

**Process:**
1. Identify total market category from research reports
2. Apply geographic filters (target regions)
3. Apply segment filters (target industries/customers)
4. Calculate competitive positioning adjustments

**Formula:**
```
TAM = Total Market Category Size
SAM = TAM × Geographic % × Segment %
SOM = SAM × Realistic Capture Rate (2-5%)
```

**When to use:** Established markets with available research (e.g., SaaS, fintech, e-commerce)

**Strengths:** Quick, uses credible data, validates market existence

**Limitations:** May overestimate for new categories, less granular

### Methodology 2: Bottom-Up Analysis

Build market size from customer segment calculations.

**Process:**
1. Define target customer segments
2. Estimate number of potential customers per segment
3. Determine average revenue per customer
4. Calculate realistic penetration rates

**Formula:**
```
TAM = Σ (Segment Size × Annual Revenue per Customer)
SAM = TAM × (Segments You Can Serve / Total Segments)
SOM = SAM × Realistic Penetration Rate (Year 3-5)
```

**When to use:** B2B, niche markets, specific customer segments

**Strengths:** Most credible for investors, granular, defensible

**Limitations:** Requires detailed customer research, time-intensive

### Methodology 3: Value Theory

Calculate based on value created and willingness to pay.

**Process:**
1. Identify problem being solved
2. Quantify current cost of problem (time, money, inefficiency)
3. Calculate value of solution (savings, gains, efficiency)
4. Estimate willingness to pay (typically 10-30% of value)
5. Multiply by addressable customer base

**Formula:**
```
Value per Customer = Problem Cost × % Solved by Solution
Price per Customer = Value × Willingness to Pay % (10-30%)
TAM = Total Potential Customers × Price per Customer
SAM = TAM × % Meeting Buy Criteria
SOM = SAM × Realistic Adoption Rate
```

**When to use:** New categories, disruptive innovations, unclear existing markets

**Strengths:** Shows value creation, works for new markets

**Limitations:** Requires assumptions, harder to validate

#### Imported: Industry-Specific Considerations

### SaaS Markets

**Key Metrics:**
- Number of potential businesses in target segment
- Average contract value (ACV)
- Typical market penetration rates
- Expansion revenue potential

**TAM Calculation:**
```
TAM = Total Target Companies × Average ACV × (1 + Expansion Rate)
```

### Marketplace Markets

**Key Metrics:**
- Gross Merchandise Value (GMV) of category
- Take rate (% of GMV you capture)
- Total transactions or users

**TAM Calculation:**
```
TAM = Total Category GMV × Expected Take Rate
```

### Consumer Markets

**Key Metrics:**
- Total addressable users/households
- Average revenue per user (ARPU)
- Engagement frequency

**TAM Calculation:**
```
TAM = Total Users × ARPU × Purchase Frequency per Year
```

### B2B Services

**Key Metrics:**
- Number of target companies by size/industry
- Average project value or retainer
- Typical buying frequency

**TAM Calculation:**
```
TAM = Total Target Companies × Average Deal Size × Deals per Year
```

#### Imported: Presenting Market Sizing

### For Investors

**Structure:**
1. Market definition and problem scope
2. TAM/SAM/SOM with methodology
3. Data sources and assumptions
4. Growth projections and drivers
5. Competitive landscape context

**Key Points:**
- Lead with bottom-up calculation (most credible)
- Show triangulation with top-down
- Explain conservative assumptions
- Link to revenue projections
- Highlight market growth rate

### For Strategy

**Structure:**
1. Addressable customer segments
2. Prioritization by opportunity size
3. Entry strategy by segment
4. Expected penetration timeline
5. Resource requirements

**Key Points:**
- Focus on SAM and SOM
- Show segment-level detail
- Connect to go-to-market plan
- Identify expansion opportunities
- Discuss competitive positioning

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
