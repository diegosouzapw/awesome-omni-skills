---
name: data-storytelling-v2
description: "Data Storytelling workflow skill. Use this skill when the user needs Transform raw data into compelling narratives that drive decisions and inspire action and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["data-storytelling-v2", "data-storytelling", "transform", "raw", "data", "compelling", "narratives", "drive"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# Data Storytelling

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/data-storytelling` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Data Storytelling Transform raw data into compelling narratives that drive decisions and inspire action.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Story Frameworks, The Hook, The Context, The Insight, The Solution.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to data storytelling
- You need a different domain or tool outside this scope
- Presenting analytics to executives
- Creating quarterly business reviews
- Building investor presentations
- Writing data-driven reports

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

#### Imported: Core Concepts

### 1. Story Structure

```
Setup → Conflict → Resolution

Setup: Context and baseline
Conflict: The problem or opportunity
Resolution: Insights and recommendations
```

### 2. Narrative Arc

```
1. Hook: Grab attention with surprising insight
2. Context: Establish the baseline
3. Rising Action: Build through data points
4. Climax: The key insight
5. Resolution: Recommendations
6. Call to Action: Next steps
```

### 3. Three Pillars

| Pillar        | Purpose  | Components                       |
| ------------- | -------- | -------------------------------- |
| **Data**      | Evidence | Numbers, trends, comparisons     |
| **Narrative** | Meaning  | Context, causation, implications |
| **Visuals**   | Clarity  | Charts, diagrams, highlights     |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @data-storytelling-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @data-storytelling-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @data-storytelling-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @data-storytelling-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Start with the "so what" - Lead with insight
- Use the rule of three - Three points, three comparisons
- Show, don't tell - Let data speak
- Make it personal - Connect to audience goals
- End with action - Clear next steps
- Don't data dump - Curate ruthlessly
- Don't bury the insight - Front-load key findings

### Imported Operating Notes

#### Imported: Best Practices

### Do's

- **Start with the "so what"** - Lead with insight
- **Use the rule of three** - Three points, three comparisons
- **Show, don't tell** - Let data speak
- **Make it personal** - Connect to audience goals
- **End with action** - Clear next steps

### Don'ts

- **Don't data dump** - Curate ruthlessly
- **Don't bury the insight** - Front-load key findings
- **Don't use jargon** - Match audience vocabulary
- **Don't show methodology first** - Context, then method
- **Don't forget the narrative** - Numbers need meaning

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/data-storytelling`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: The Problem

Analysis of churned customers reveals a pattern:

- 73% churned within first 90 days
- Common factor: < 3 support interactions
- Low feature adoption in first month

## Related Skills

- `@customer-support-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@customs-trade-compliance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@daily-gift-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@daily-news-report-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Resources

- [Storytelling with Data (Cole Nussbaumer)](https://www.storytellingwithdata.com/)
- [The Pyramid Principle (Barbara Minto)](https://www.amazon.com/Pyramid-Principle-Logic-Writing-Thinking/dp/0273710516)
- [Resonate (Nancy Duarte)](https://www.duarte.com/resonate/)

#### Imported: Story Frameworks

### Framework 1: The Problem-Solution Story

```markdown
# Customer Churn Analysis

#### Imported: The Hook

"We're losing $2.4M annually to preventable churn."

#### Imported: The Context

- Current churn rate: 8.5% (industry average: 5%)
- Average customer lifetime value: $4,800
- 500 customers churned last quarter

#### Imported: The Insight

[Show engagement curve visualization]
Customers who don't engage in the first 14 days
are 4x more likely to churn.

#### Imported: The Solution

1. Implement 14-day onboarding sequence
2. Proactive outreach at day 7
3. Feature adoption tracking

#### Imported: Call to Action

Approve $50K budget for onboarding automation.
```

### Framework 2: The Trend Story

```markdown
# Q4 Performance Analysis

#### Imported: Where We Started

Q3 ended with $1.2M MRR, 15% below target.
Team morale was low after missed goals.

#### Imported: What Changed

[Timeline visualization]

- Oct: Launched self-serve pricing
- Nov: Reduced friction in signup
- Dec: Added customer success calls

#### Imported: The Transformation

[Before/after comparison chart]
| Metric | Q3 | Q4 | Change |
|----------------|--------|--------|--------|
| Trial → Paid | 8% | 15% | +87% |
| Time to Value | 14 days| 5 days | -64% |
| Expansion Rate | 2% | 8% | +300% |

#### Imported: Key Insight

Self-serve + high-touch creates compound growth.
Customers who self-serve AND get a success call
have 3x higher expansion rate.

#### Imported: Going Forward

Double down on hybrid model.
Target: $1.8M MRR by Q2.
```

### Framework 3: The Comparison Story

```markdown
# Market Opportunity Analysis

#### Imported: The Question

Should we expand into EMEA or APAC first?

#### Imported: The Comparison

[Side-by-side market analysis]

### EMEA

- Market size: $4.2B
- Growth rate: 8%
- Competition: High
- Regulatory: Complex (GDPR)
- Language: Multiple

### APAC

- Market size: $3.8B
- Growth rate: 15%
- Competition: Moderate
- Regulatory: Varied
- Language: Multiple

#### Imported: The Analysis

[Weighted scoring matrix visualization]

| Factor      | Weight | EMEA Score | APAC Score |
| ----------- | ------ | ---------- | ---------- |
| Market Size | 25%    | 5          | 4          |
| Growth      | 30%    | 3          | 5          |
| Competition | 20%    | 2          | 4          |
| Ease        | 25%    | 2          | 3          |
| **Total**   |        | **2.9**    | **4.1**    |

#### Imported: The Recommendation

APAC first. Higher growth, less competition.
Start with Singapore hub (English, business-friendly).
Enter EMEA in Year 2 with localization ready.

#### Imported: Risk Mitigation

- Timezone coverage: Hire 24/7 support
- Cultural fit: Local partnerships
- Payment: Multi-currency from day 1
```

#### Imported: Visualization Techniques

### Technique 1: Progressive Reveal

```markdown
Start simple, add layers:

Slide 1: "Revenue is growing" [single line chart]
Slide 2: "But growth is slowing" [add growth rate overlay]
Slide 3: "Driven by one segment" [add segment breakdown]
Slide 4: "Which is saturating" [add market share]
Slide 5: "We need new segments" [add opportunity zones]
```

### Technique 2: Contrast and Compare

```markdown
Before/After:
┌─────────────────┬─────────────────┐
│ BEFORE │ AFTER │
│ │ │
│ Process: 5 days│ Process: 1 day │
│ Errors: 15% │ Errors: 2% │
│ Cost: $50/unit │ Cost: $20/unit │
└─────────────────┴─────────────────┘

This/That (emphasize difference):
┌─────────────────────────────────────┐
│ CUSTOMER A vs B │
│ ┌──────────┐ ┌──────────┐ │
│ │ ████████ │ │ ██ │ │
│ │ $45,000 │ │ $8,000 │ │
│ │ LTV │ │ LTV │ │
│ └──────────┘ └──────────┘ │
│ Onboarded No onboarding │
└─────────────────────────────────────┘
```

### Technique 3: Annotation and Highlight

```python
import matplotlib.pyplot as plt
import pandas as pd

fig, ax = plt.subplots(figsize=(12, 6))

# Plot the main data
ax.plot(dates, revenue, linewidth=2, color='#2E86AB')

# Add annotation for key events
ax.annotate(
    'Product Launch\n+32% spike',
    xy=(launch_date, launch_revenue),
    xytext=(launch_date, launch_revenue * 1.2),
    fontsize=10,
    arrowprops=dict(arrowstyle='->', color='#E63946'),
    color='#E63946'
)

# Highlight a region
ax.axvspan(growth_start, growth_end, alpha=0.2, color='green',
           label='Growth Period')

# Add threshold line
ax.axhline(y=target, color='gray', linestyle='--',
           label=f'Target: ${target:,.0f}')

ax.set_title('Revenue Growth Story', fontsize=14, fontweight='bold')
ax.legend()
```

#### Imported: Presentation Templates

### Template 1: Executive Summary Slide

```
┌─────────────────────────────────────────────────────────────┐
│  KEY INSIGHT                                                │
│  ══════════════════════════════════════════════════════════│
│                                                             │
│  "Customers who complete onboarding in week 1              │
│   have 3x higher lifetime value"                           │
│                                                             │
├──────────────────────┬──────────────────────────────────────┤
│                      │                                      │
│  THE DATA            │  THE IMPLICATION                     │
│                      │                                      │
│  Week 1 completers:  │  ✓ Prioritize onboarding UX         │
│  • LTV: $4,500       │  ✓ Add day-1 success milestones     │
│  • Retention: 85%    │  ✓ Proactive week-1 outreach        │
│  • NPS: 72           │                                      │
│                      │  Investment: $75K                    │
│  Others:             │  Expected ROI: 8x                    │
│  • LTV: $1,500       │                                      │
│  • Retention: 45%    │                                      │
│  • NPS: 34           │                                      │
│                      │                                      │
└──────────────────────┴──────────────────────────────────────┘
```

### Template 2: Data Story Flow

```
Slide 1: THE HEADLINE
"We can grow 40% faster by fixing onboarding"

Slide 2: THE CONTEXT
Current state metrics
Industry benchmarks
Gap analysis

Slide 3: THE DISCOVERY
What the data revealed
Surprising finding
Pattern identification

Slide 4: THE DEEP DIVE
Root cause analysis
Segment breakdowns
Statistical significance

Slide 5: THE RECOMMENDATION
Proposed actions
Resource requirements
Timeline

Slide 6: THE IMPACT
Expected outcomes
ROI calculation
Risk assessment

Slide 7: THE ASK
Specific request
Decision needed
Next steps
```

### Template 3: One-Page Dashboard Story

```markdown
# Monthly Business Review: January 2024

#### Imported: THE HEADLINE

Revenue up 15% but CAC increasing faster than LTV

#### Imported: KEY METRICS AT A GLANCE

┌────────┬────────┬────────┬────────┐
│ MRR │ NRR │ CAC │ LTV │
│ $125K │ 108% │ $450 │ $2,200 │
│ ▲15% │ ▲3% │ ▲22% │ ▲8% │
└────────┴────────┴────────┴────────┘

#### Imported: WHAT'S WORKING

✓ Enterprise segment growing 25% MoM
✓ Referral program driving 30% of new logos
✓ Support satisfaction at all-time high (94%)

#### Imported: WHAT NEEDS ATTENTION

✗ SMB acquisition cost up 40%
✗ Trial conversion down 5 points
✗ Time-to-value increased by 3 days

#### Imported: ROOT CAUSE

[Mini chart showing SMB vs Enterprise CAC trend]
SMB paid ads becoming less efficient.
CPC up 35% while conversion flat.

#### Imported: RECOMMENDATION

1. Shift $20K/mo from paid to content
2. Launch SMB self-serve trial
3. A/B test shorter onboarding

#### Imported: NEXT MONTH'S FOCUS

- Launch content marketing pilot
- Complete self-serve MVP
- Reduce time-to-value to < 7 days
```

#### Imported: Writing Techniques

### Headlines That Work

```markdown
BAD: "Q4 Sales Analysis"
GOOD: "Q4 Sales Beat Target by 23% - Here's Why"

BAD: "Customer Churn Report"
GOOD: "We're Losing $2.4M to Preventable Churn"

BAD: "Marketing Performance"
GOOD: "Content Marketing Delivers 4x ROI vs. Paid"

Formula:
[Specific Number] + [Business Impact] + [Actionable Context]
```

### Transition Phrases

```markdown
Building the narrative:
• "This leads us to ask..."
• "When we dig deeper..."
• "The pattern becomes clear when..."
• "Contrast this with..."

Introducing insights:
• "The data reveals..."
• "What surprised us was..."
• "The inflection point came when..."
• "The key finding is..."

Moving to action:
• "This insight suggests..."
• "Based on this analysis..."
• "The implication is clear..."
• "Our recommendation is..."
```

### Handling Uncertainty

```markdown
Acknowledge limitations:
• "With 95% confidence, we can say..."
• "The sample size of 500 shows..."
• "While correlation is strong, causation requires..."
• "This trend holds for [segment], though [caveat]..."

Present ranges:
• "Impact estimate: $400K-$600K"
• "Confidence interval: 15-20% improvement"
• "Best case: X, Conservative: Y"
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
