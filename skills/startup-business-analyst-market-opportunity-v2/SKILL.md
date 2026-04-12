---
name: startup-business-analyst-market-opportunity-v2
description: "Market Opportunity Analysis workflow skill. Use this skill when the user needs 'Generate comprehensive market opportunity analysis with TAM/SAM/SOM and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["startup-business-analyst-market-opportunity-v2", "startup-business-analyst-market-opportunity", "generate", "comprehensive", "market", "opportunity", "analysis", "tam"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Market Opportunity Analysis

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/startup-business-analyst-market-opportunity` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Market Opportunity Analysis Generate a comprehensive market opportunity analysis for a startup, including Total Addressable Market (TAM), Serviceable Available Market (SAM), and Serviceable Obtainable Market (SOM) calculations using both bottom-up and top-down methodologies.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Instructions for Claude, Tips for Best Results, Notes.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on market opportunity analysis tasks or workflows
- Needing guidance, best practices, or checklists for market opportunity analysis
- The task is unrelated to market opportunity analysis
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: 'Generate comprehensive market opportunity analysis with TAM/SAM/SOM.
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

### Step 1: Gather Context

Ask the user for essential information:
- **Product/Service Description:** What problem is being solved?
- **Target Customers:** Who is the ideal customer? (industry, size, geography)
- **Business Model:** How does pricing work? (subscription, transaction, etc.)
- **Stage:** What stage is the company? (pre-launch, seed, Series A)
- **Geography:** Initial target market (US, North America, Global)

### Step 2: Activate market-sizing-analysis Skill

The market-sizing-analysis skill provides comprehensive methodologies. Reference it for:
- Bottom-up calculation frameworks
- Top-down validation approaches
- Industry-specific templates
- Data source recommendations

### Step 3: Conduct Bottom-Up Analysis

**For B2B/SaaS:**
1. Define customer segments (company size, industry, use case)
2. Estimate number of companies in each segment
3. Determine average contract value (ACV) per segment
4. Calculate TAM: Σ (Segment Size × ACV)

**For Consumer/Marketplace:**
1. Define target user demographics
2. Estimate total addressable users
3. Determine average revenue per user (ARPU)
4. Calculate TAM: Total Users × ARPU × Frequency

**For Transactions/E-commerce:**
1. Estimate total transaction volume (GMV)
2. Determine take rate or margin
3. Calculate TAM: Total GMV × Take Rate

### Step 4: Gather Market Data

Use available tools to research:
- **WebSearch:** Find industry reports, market size estimates, public company data
- **Cite all sources** with URLs and publication dates
- **Document assumptions** clearly

Recommended data sources (from skill):
- Government data (Census, BLS)
- Industry reports (Gartner, Forrester, Statista)
- Public company filings (10-K reports)
- Trade associations
- Academic research

### Step 5: Top-Down Validation

Validate bottom-up calculation:
1. Find total market category size from research
2. Apply geographic filters
3. Apply segment/product filters
4. Compare to bottom-up TAM (should be within 30%)

If variance > 30%, investigate and explain differences.

### Step 6: Calculate SAM

Apply realistic filters to narrow TAM:
- **Geographic:** Regions actually serviceable
- **Product Capability:** Features needed to serve
- **Market Readiness:** Customers ready to adopt
- **Addressable Switching:** Can reach and convert

Formula:
```
SAM = TAM × Geographic % × Product Fit % × Market Readiness %
```

### Step 7: Estimate SOM

Calculate realistic obtainable market share:

**Conservative Approach (Recommended):**
- Year 3: 2-3% of SAM
- Year 5: 4-6% of SAM

**Consider:**
- Competitive intensity
- Available resources (funding, team)
- Go-to-market effectiveness
- Differentiation strength

### Step 8: Create Market Sizing Report

Generate a comprehensive markdown report with:

**Section 1: Executive Summary**
- Market opportunity in one paragraph
- TAM/SAM/SOM headline numbers

**Section 2: Market Definition**
- Problem being solved
- Target customer profile
- Geographic scope
- Time horizon

**Section 3: Bottom-Up Analysis**
- Customer segment breakdown
- Segment sizing with sources
- TAM calculation with formula
- Assumptions documented

**Section 4: Top-Down Validation**
- Industry category and size
- Filter application
- Validated TAM
- Comparison to bottom-up

**Section 5: SAM Calculation**
- Filters applied with rationale
- SAM formula and result
- Segment-level breakdown

**Section 6: SOM Projection**
- Market share assumptions
- Year 3 and Year 5 estimates
- Customer count implications
- Revenue projections

**Section 7: Market Growth**
- Industry growth rate (CAGR)
- Key growth drivers
- 5-year market evolution

**Section 8: Validation and Sanity Checks**
- Public company comparisons
- Customer count validation
- Competitive context

**Section 9: Investment Thesis**
- Market opportunity assessment
- Key positives and risks
- Venture-scale potential
- Next steps

### Step 9: Save Report

Offer to save the report as a markdown file:
- Suggest filename: `market-opportunity-analysis-YYYY-MM-DD.md`
- Use Write tool to create file
- Confirm file location with user

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @startup-business-analyst-market-opportunity-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/startup-business-analyst-market-opportunity-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/startup-business-analyst-market-opportunity-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @startup-business-analyst-market-opportunity-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: What This Command Does

This command guides through an interactive market sizing process to:
1. Define the target market and customer segments
2. Gather relevant market data
3. Calculate TAM using bottom-up methodology
4. Validate with top-down analysis
5. Narrow to SAM with appropriate filters
6. Estimate realistic SOM (3-5 year opportunity)
7. Present findings in a formatted report

#### Imported: Example Usage

```
User: /market-opportunity

Claude: I'll help you create a comprehensive market opportunity analysis. Let me start by gathering some context.

What product or service are you analyzing?
→ "AI-powered email marketing for e-commerce companies"

Who are your target customers?
→ "E-commerce companies with $1M+ annual revenue in North America"

What's your pricing model?
→ "Subscription: $50-500/month based on email volume, average $300/month"

[Claude proceeds with analysis, gathering data, calculating TAM/SAM/SOM, and generating report]
```

#### Imported: Integration with Other Commands

This command pairs well with:
- `/financial-projections` - Use SOM to build revenue model
- `/business-case` - Include market sizing in business case

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/startup-business-analyst-market-opportunity`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Tips for Best Results

**Do:**
- Start with bottom-up (most credible)
- Always triangulate with top-down
- Cite all data sources
- Document every assumption
- Be conservative on SOM
- Compare to public company benchmarks
- Explain any data gaps or limitations

**Don't:**
- Rely solely on top-down
- Cherry-pick optimistic data
- Claim >10% SOM without strong justification
- Mix methodologies inappropriately
- Ignore competitive context
- Skip validation steps

#### Imported: Notes

- Market sizing typically takes 30-60 minutes for thorough analysis
- Quality depends on data availability - explain limitations
- Update annually as market evolves
- Conservative estimates build credibility with investors
