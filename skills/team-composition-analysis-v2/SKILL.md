---
name: team-composition-analysis-v2
description: "Team Composition Analysis workflow skill. Use this skill when the user needs Design optimal team structures, hiring plans, compensation strategies, and equity allocation for early-stage startups from pre-seed through Series A and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["team-composition-analysis-v2", "team-composition-analysis", "design", "optimal", "team", "structures", "hiring", "plans"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Team Composition Analysis

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/team-composition-analysis` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Team Composition Analysis Design optimal team structures, hiring plans, compensation strategies, and equity allocation for early-stage startups from pre-seed through Series A.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Team Structure by Stage, Role-by-Role Planning, Compensation Strategy, Equity Allocation, Organizational Design, Full-Time vs. Contract.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on team composition analysis tasks or workflows
- Needing guidance, best practices, or checklists for team composition analysis
- The task is unrelated to team composition analysis
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: Design optimal team structures, hiring plans, compensation strategies, and equity allocation for early-stage startups from pre-seed through Series A.
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

#### Imported: Overview

Build the right team at the right time with appropriate compensation and equity. Plan role-by-role hiring aligned with revenue milestones, budget constraints, and market benchmarks.

#### Imported: Team Structure by Stage

### Pre-Seed (0-$500K ARR)

**Team Size: 2-5 people**

**Core Roles:**
- Founders (2-3): Product, engineering, business
- First engineer (if needed)
- Contract roles: Design, marketing

**Focus:** Build and validate product-market fit

### Seed ($500K-$2M ARR)

**Team Size: 5-15 people**

**Key Hires:**
- Engineering lead + 2-3 engineers
- First sales/business development
- Product manager
- Marketing/growth lead

**Focus:** Scale product and prove repeatable sales

### Series A ($2M-$10M ARR)

**Team Size: 15-50 people**

**Department Build-Out:**
- Engineering (40%): 6-20 people
- Sales & Marketing (30%): 5-15 people
- Customer Success (10%): 2-5 people
- G&A (10%): 2-5 people
- Product (10%): 2-5 people

**Focus:** Scale revenue and build repeatable processes

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @team-composition-analysis-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @team-composition-analysis-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @team-composition-analysis-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @team-composition-analysis-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

To plan team composition:

1. **Identify stage** - Pre-seed, seed, or Series A
2. **Define roles** - What functions are needed now
3. **Prioritize hires** - Critical path for business goals
4. **Set compensation** - Base salary + equity by level
5. **Plan timeline** - Account for recruiting and ramp time
6. **Calculate budget** - Fully-loaded cost × headcount
7. **Design org chart** - Reporting structure and span of control
8. **Allocate equity** - Fair allocation that preserves pool

For detailed compensation benchmarks and hiring plan templates, see `references/` and `examples/`.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/team-composition-analysis`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
- **`references/compensation-benchmarks.md`** - Detailed salary data by role, level, and location
- **`references/equity-calculator.md`** - Equity sizing formulas and dilution scenarios

### Example Files
- **`examples/seed-stage-hiring-plan.md`** - Complete hiring plan for seed-stage SaaS company
- **`examples/org-chart-evolution.md`** - Organizational design from 5 to 50 people

#### Imported: Role-by-Role Planning

### Engineering Team

**Pre-Seed:**
- Founders write code
- 0-1 contract developers

**Seed:**
- Engineering Lead (first $150K-$180K)
- 2-3 Full-Stack Engineers ($120K-$150K)
- 1 Frontend or Backend Specialist ($130K-$160K)

**Series A:**
- VP Engineering ($180K-$250K + equity)
- 2-3 Senior Engineers ($150K-$180K)
- 3-5 Mid-Level Engineers ($120K-$150K)
- 1-2 Junior Engineers ($90K-$120K)
- 1 DevOps/Infrastructure ($140K-$170K)

### Sales & Marketing

**Pre-Seed:**
- Founders do sales
- Contract marketing help

**Seed:**
- First Sales Hire / Head of Sales ($120K-$150K + commission)
- Marketing/Growth Lead ($100K-$140K)
- SDR or BDR (if B2B) ($50K-$70K + commission)

**Series A:**
- VP Sales ($150K-$200K + commission + equity)
- 3-5 Account Executives ($80K-$120K + commission)
- 2-3 SDRs/BDRs ($50K-$70K + commission)
- Marketing Manager ($90K-$130K)
- Content/Demand Gen ($70K-$100K)

### Product Team

**Pre-Seed:**
- Founder as product lead

**Seed:**
- First Product Manager ($120K-$150K)
- Contract designer

**Series A:**
- Head of Product ($150K-$180K)
- 1-2 Product Managers ($120K-$150K)
- Product Designer ($100K-$140K)
- UX Researcher (optional) ($90K-$130K)

### Customer Success

**Pre-Seed:**
- Founders handle support

**Seed:**
- First CS hire (optional) ($60K-$90K)

**Series A:**
- CS Manager ($100K-$130K)
- 2-4 CS Representatives ($60K-$90K)
- Support Engineer (technical) ($80K-$120K)

### G&A (General & Administrative)

**Pre-Seed:**
- Contractors (accounting, legal)

**Seed:**
- Operations/Office Manager ($70K-$100K)
- Contract CFO

**Series A:**
- CFO or Finance Lead ($150K-$200K)
- Recruiter ($80K-$120K)
- Office Manager / EA ($60K-$90K)

#### Imported: Compensation Strategy

### Base Salary Benchmarks (US, 2024)

**Engineering:**
- Junior: $90K-$120K
- Mid-Level: $120K-$150K
- Senior: $150K-$180K
- Staff/Principal: $180K-$220K
- Engineering Manager: $160K-$200K
- VP Engineering: $180K-$250K

**Sales:**
- SDR/BDR: $50K-$70K base + $50K-$70K commission
- Account Executive: $80K-$120K base + $80K-$120K commission
- Sales Manager: $120K-$160K base + $80K-$120K commission
- VP Sales: $150K-$200K base + $150K-$200K commission

**Product:**
- Product Manager: $120K-$150K
- Senior PM: $150K-$180K
- Head of Product: $150K-$180K
- VP Product: $180K-$220K

**Marketing:**
- Marketing Manager: $90K-$130K
- Content/Demand Gen: $70K-$100K
- Head of Marketing: $130K-$170K
- VP Marketing: $150K-$200K

**Customer Success:**
- CS Representative: $60K-$90K
- CS Manager: $100K-$130K
- VP Customer Success: $140K-$180K

### Total Compensation Formula

```
Total Comp = Base Salary × 1.30 (benefits & taxes) + Equity Value
```

**Fully-Loaded Cost:**
- Base salary
- Payroll taxes (7.65% FICA)
- Benefits (health insurance, 401k): $10K-$15K per employee
- Other (workspace, equipment, software): $5K-$10K per employee

**Rule of Thumb:** Multiply base salary by 1.3-1.4 for fully-loaded cost

### Geographic Adjustments

**San Francisco / New York:** +20-30% above benchmarks
**Seattle / Boston / Los Angeles:** +10-20%
**Austin / Denver / Chicago:** +0-10%
**Remote / Other US Cities:** -10-20%
**International:** Varies widely by country

#### Imported: Equity Allocation

### Equity by Role and Stage

**Founders:**
- First founder: 40-60%
- Second founder: 20-40%
- Third founder: 10-20%
- Vesting: 4 years with 1-year cliff

**Early Employees (Pre-Seed):**
- First engineer: 0.5-2.0%
- First 5 employees: 0.25-1.0% each

**Seed Stage Hires:**
- VP/Head level: 0.5-1.5%
- Senior IC: 0.1-0.5%
- Mid-level: 0.05-0.25%
- Junior: 0.01-0.1%

**Series A Hires:**
- C-level (CTO, CFO): 1.0-3.0%
- VP level: 0.3-1.0%
- Director level: 0.1-0.5%
- Senior IC: 0.05-0.2%
- Mid-level: 0.01-0.1%
- Junior: 0.005-0.05%

### Equity Pool Sizing

**Option Pool by Round:**
- Pre-Seed: 10-15% reserved
- Seed: 10-15% top-up
- Series A: 10-15% top-up
- Series B+: 5-10% per round

**Pre-Funding Dilution:**
Investors often require option pool creation before investment, diluting founders.

**Example:**
```
Pre-money: $10M
Investors want 15% option pool post-money

Calculation:
Post-money: $15M ($10M + $5M investment)
Option pool: $2.25M (15% × $15M)
Founders diluted by pool creation before new money
```

#### Imported: Organizational Design

### Reporting Structure

**Pre-Seed:**
```
Founders (flat structure)
├── Contractors
└── First hires (report to founders)
```

**Seed:**
```
CEO
├── Engineering Lead (2-4 engineers)
├── Sales/Growth Lead (1-2 reps)
├── Product Manager
└── Operations
```

**Series A:**
```
CEO
├── CTO / VP Engineering (6-20 people)
│   ├── Engineering Manager(s)
│   └── Individual Contributors
├── VP Sales (5-15 people)
│   ├── Sales Manager
│   ├── Account Executives
│   └── SDRs
├── Head of Product (2-5 people)
│   ├── Product Managers
│   └── Designers
├── Head of Customer Success (2-5 people)
└── CFO / Finance Lead (2-5 people)
    ├── Recruiter
    └── Operations
```

### Span of Control

**Manager Ratios:**
- First-line managers: 4-8 direct reports
- Directors: 3-5 direct reports (managers)
- VPs: 3-5 direct reports (directors)
- CEO: 5-8 direct reports (executive team)

#### Imported: Full-Time vs. Contract

### Use Full-Time for:
- Core product development
- Sales (revenue-generating roles)
- Mission-critical operations
- Institutional knowledge roles

### Use Contractors for:
- Specialized short-term needs (legal, accounting)
- Variable workload (design, marketing campaigns)
- Skills outside core competency
- Testing role before FTE hire
- Geographic expansion before permanent presence

### Cost Comparison

**Full-Time:**
- Lower hourly cost
- Benefits and overhead
- Long-term commitment
- Cultural fit matters

**Contract:**
- Higher hourly rate ($75-$200/hour vs. $40-$100/hour FTE equivalent)
- No benefits or overhead
- Flexible engagement
- Easier to scale up/down

#### Imported: Hiring Velocity

### Realistic Timeline

**Role Opening to Hire:**
- Junior: 6-8 weeks
- Mid-Level: 8-12 weeks
- Senior: 12-16 weeks
- Executive: 16-24 weeks

**Time to Productivity:**
- Junior: 4-6 months
- Mid-Level: 2-4 months
- Senior: 1-3 months
- Executive: 3-6 months

### Planning Buffer

Always add 2-3 months buffer to hiring plans.

**Example:**
If need engineer by July 1:
- Start recruiting: April 1 (12 weeks)
- Productivity: September 1 (2 months ramp)

#### Imported: Budget Planning

### Compensation as % of Revenue

**Early Stage (Seed):**
- Total comp: 120-150% of revenue (burning cash to grow)
- Engineering: 50-60%
- Sales: 30-40%
- Other: 20-30%

**Growth Stage (Series A):**
- Total comp: 70-100% of revenue
- Engineering: 35-45%
- Sales: 25-35%
- Other: 20-30%

### Headcount Budget Formula

```
Total Comp Budget = Σ (Role Count × Fully-Loaded Cost × % of Year)

Example:
3 Engineers × $202K × 100% = $606K
2 AEs × $230K × 75% (mid-year start) = $345K
1 PM × $162K × 100% = $162K
Total: $1.1M
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
