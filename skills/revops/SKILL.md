---
name: revops
description: "RevOps workflow skill. Use this skill when the user needs Design and improve revenue operations, lead lifecycle rules, scoring, routing, handoffs, and CRM process automation. Use when marketing, sales, and customer success workflows need clearer operational structure and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: business
tags: ["revops", "design", "and", "improve", "revenue", "operations", "lead", "lifecycle"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# RevOps

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/revops` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# RevOps You are an expert in revenue operations. Your goal is to help design and optimize the systems that connect marketing, sales, and customer success into a unified revenue engine.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Before Starting, Lead Lifecycle Framework, Lead Scoring, Lead Routing, Pipeline Stage Management, Data Hygiene & Enrichment.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the user needs lead scoring, routing, handoffs, or lifecycle definitions.
- Use when CRM process design and revenue-team coordination are the core problem.
- Use when marketing, sales, and customer success systems need operational alignment.
- Use when the request clearly matches the imported source intent: Design and improve revenue operations, lead lifecycle rules, scoring, routing, handoffs, and CRM process automation. Use when marketing, sales, and customer success workflows need clearer operational structure.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/automation-playbooks.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/lifecycle-definitions.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Lifecycle stage updates — Auto-advance stages when criteria are met
2. Task creation on handoff — Create follow-up task when MQL assigned to rep
3. SLA alerts — Notify manager if rep misses response time SLA
4. Deal stage triggers — Auto-send proposals, update forecasts, notify CS on close
5. MQL alert — Instant notification to assigned rep with lead context
6. Meeting booked — Notify AE when prospect books via scheduling tool
7. Lead activity digest — Daily summary of high-intent actions by active leads

### Imported Workflow Notes

#### Imported: CRM Automation Workflows

### Essential Automations

- **Lifecycle stage updates** — Auto-advance stages when criteria are met
- **Task creation on handoff** — Create follow-up task when MQL assigned to rep
- **SLA alerts** — Notify manager if rep misses response time SLA
- **Deal stage triggers** — Auto-send proposals, update forecasts, notify CS on close

### Marketing-to-Sales Automations

- **MQL alert** — Instant notification to assigned rep with lead context
- **Meeting booked** — Notify AE when prospect books via scheduling tool
- **Lead activity digest** — Daily summary of high-intent actions by active leads
- **Re-engagement trigger** — Alert sales when a dormant lead returns to site

### Calendar Scheduling Integration

- **Round-robin scheduling** — Distribute meetings evenly across team
- **Routing by criteria** — Send enterprise leads to senior AEs, SMB to junior reps
- **Pre-meeting enrichment** — Auto-populate CRM record before the call
- **No-show workflows** — Auto-follow-up if prospect misses meeting

**For platform-specific workflow recipes**: See [references/automation-playbooks.md](references/automation-playbooks.md)

---

#### Imported: Deal Desk Processes

### When You Need a Deal Desk

- ACV above **$25K** (or your threshold for non-standard deals)
- Non-standard payment terms (net-90, quarterly billing)
- Multi-year contracts with custom pricing
- Volume discounts beyond published tiers
- Custom legal terms or SLAs

### Approval Workflow Tiers

| Deal Size | Approval Required |
|-----------|-------------------|
| Standard pricing | Auto-approved |
| 10-20% discount | Sales manager |
| 20-40% discount | VP Sales |
| 40%+ discount or custom terms | Deal desk review |
| Multi-year / enterprise | Finance + Legal |

### Non-Standard Terms Handling

Document every exception. Track which non-standard terms get requested most — if everyone asks for the same exception, it should become standard. Review quarterly.

---

#### Imported: Before Starting

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists (or `.claude/product-marketing-context.md` in older setups), read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Gather this context (ask if not provided):

1. **GTM motion** — Product-led (PLG), sales-led, or hybrid?
2. **ACV range** — What's the average contract value?
3. **Sales cycle length** — Days from first touch to closed-won?
4. **Current stack** — CRM, marketing automation, scheduling, enrichment tools?
5. **Current state** — How are leads managed today? What's working and what's not?
6. **Goals** — Increase conversion? Reduce speed-to-lead? Fix handoff leaks? Build from scratch?

Work with whatever the user gives you. If they have a clear problem area, start there. Don't block on missing inputs — use what you have and note what would strengthen the solution.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @revops to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @revops against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @revops for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @revops using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ### Single Source of Truth One system of record for every lead and account.
- If data lives in multiple places, it will conflict.
- Pick a CRM as the canonical source and sync everything to it.
- ### Define Before Automate Get stage definitions, scoring criteria, and routing rules right on paper before building workflows.
- Automating a broken process just creates broken results faster.
- ### Measure Every Handoff Every handoff between teams is a potential leak.
- Marketing-to-sales, SDR-to-AE, AE-to-CS — each needs an SLA, a tracking mechanism, and someone accountable for follow-through.

### Imported Operating Notes

#### Imported: Core Principles

### Single Source of Truth
One system of record for every lead and account. If data lives in multiple places, it will conflict. Pick a CRM as the canonical source and sync everything to it.

### Define Before Automate
Get stage definitions, scoring criteria, and routing rules right on paper before building workflows. Automating a broken process just creates broken results faster.

### Measure Every Handoff
Every handoff between teams is a potential leak. Marketing-to-sales, SDR-to-AE, AE-to-CS — each needs an SLA, a tracking mechanism, and someone accountable for follow-through.

### Revenue Team Alignment
Marketing, sales, and customer success must agree on definitions. If marketing calls something an MQL but sales won't work it, the definition is wrong. Alignment meetings aren't optional.

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/revops`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/automation-playbooks.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [automation-playbooks.md](references/automation-playbooks.md)
- [lifecycle-definitions.md](references/lifecycle-definitions.md)
- [routing-rules.md](references/routing-rules.md)
- [scoring-models.md](references/scoring-models.md)
- [evals.json](evals/evals.json)
- [automation-playbooks.md](references/automation-playbooks.md)

### Imported Reference Notes

#### Imported: Lead Lifecycle Framework

### Stage Definitions

| Stage | Entry Criteria | Exit Criteria | Owner |
|-------|---------------|---------------|-------|
| **Subscriber** | Opts in to content (blog, newsletter) | Provides company info or shows engagement | Marketing |
| **Lead** | Identified contact with basic info | Meets minimum fit criteria | Marketing |
| **MQL** | Passes fit + engagement threshold | Sales accepts or rejects within SLA | Marketing |
| **SQL** | Sales accepts and qualifies via conversation | Opportunity created or recycled | Sales (SDR/AE) |
| **Opportunity** | Budget, authority, need, timeline confirmed | Closed-won or closed-lost | Sales (AE) |
| **Customer** | Closed-won deal | Expands, renews, or churns | CS / Account Mgmt |
| **Evangelist** | High NPS, referral activity, case study | Ongoing program participation | CS / Marketing |

### MQL Definition

An MQL requires both **fit** and **engagement**:

- **Fit score** — Does this person match your ICP? (company size, industry, role, tech stack)
- **Engagement score** — Have they shown buying intent? (pricing page, demo request, multiple visits)

Neither alone is sufficient. A perfect-fit company that never engages isn't an MQL. A student downloading every ebook isn't an MQL.

### MQL-to-SQL Handoff SLA

Define response times and document them:
- MQL alert sent to assigned rep
- Rep contacts within **4 hours** (business hours)
- Rep qualifies or rejects within **48 hours**
- Rejected MQLs go to recycling nurture with reason code

**For complete lifecycle stage templates and SLA examples**: See [references/lifecycle-definitions.md](references/lifecycle-definitions.md)

---

#### Imported: Lead Scoring

### Scoring Dimensions

**Explicit scoring (fit)** — Who they are:
- Company size, industry, revenue
- Job title, seniority, department
- Tech stack, geography

**Implicit scoring (engagement)** — What they do:
- Page visits (especially pricing, demo, case studies)
- Content downloads, webinar attendance
- Email engagement (opens, clicks)
- Product usage (for PLG)

**Negative scoring** — Disqualifying signals:
- Competitor email domains
- Student/personal email
- Unsubscribes, spam complaints
- Job title mismatches (intern, student)

### Building a Scoring Model

1. Define your ICP attributes and weight them
2. Identify high-intent behavioral signals from closed-won data
3. Set point values for each attribute and behavior
4. Set MQL threshold (typically 50-80 points on a 100-point scale)
5. Test against historical data — does the model correctly identify past wins?
6. Launch, measure, and recalibrate quarterly

### Common Scoring Mistakes

- Weighting content downloads too heavily (research ≠ buying intent)
- Not including negative scoring (lets bad leads through)
- Setting and forgetting (buyer behavior changes; recalibrate quarterly)
- Scoring all page visits equally (pricing page ≠ blog post)

**For detailed scoring templates and example models**: See [references/scoring-models.md](references/scoring-models.md)

---

#### Imported: Lead Routing

### Routing Methods

| Method | How It Works | Best For |
|--------|-------------|----------|
| **Round-robin** | Distribute evenly across reps | Equal territories, similar deal sizes |
| **Territory-based** | Assign by geography, vertical, or segment | Regional teams, industry specialists |
| **Account-based** | Named accounts go to named reps | ABM motions, strategic accounts |
| **Skill-based** | Route by deal complexity, product line, or language | Diverse product lines, global teams |

### Routing Rules Essentials

- Route to the **most specific match** first, then fall back to general
- Include a **fallback owner** — unassigned leads go cold fast and waste pipeline
- Round-robin should account for **rep capacity and availability** (PTO, quota attainment)
- Log every routing decision for audit and optimization

### Speed-to-Lead

Response time is the single biggest factor in lead conversion:
- Contact within **5 minutes** = 21x more likely to qualify (Lead Connect)
- After **30 minutes**, conversion drops by 10x
- After **24 hours**, the lead is effectively cold

Build routing rules that prioritize speed. Alert reps immediately. Escalate if SLA is missed.

**For routing decision trees and platform-specific setup**: See [references/routing-rules.md](references/routing-rules.md)

---

#### Imported: Pipeline Stage Management

### Pipeline Stages

| Stage | Required Fields | Exit Criteria |
|-------|----------------|---------------|
| **Qualified** | Contact info, company, source, fit score | Discovery call scheduled |
| **Discovery** | Pain points, current solution, timeline | Needs confirmed, demo scheduled |
| **Demo/Evaluation** | Technical requirements, decision makers | Positive evaluation, proposal requested |
| **Proposal** | Pricing, terms, stakeholder map | Proposal delivered and reviewed |
| **Negotiation** | Redlines, approval chain, close date | Terms agreed, contract sent |
| **Closed Won** | Signed contract, payment terms | Handoff to CS complete |
| **Closed Lost** | Loss reason, competitor (if any) | Post-mortem logged |

### Stage Hygiene

- **Required fields per stage** — Don't let reps advance a deal without filling in required data
- **Stale deal alerts** — Flag deals that sit in a stage beyond the average time (e.g., 2x average days)
- **Stage skip detection** — Alert when deals jump stages (Qualified → Proposal skipping Discovery)
- **Close date discipline** — Push dates must include a reason; no silent pushes

### Pipeline Metrics

| Metric | What It Tells You |
|--------|-------------------|
| Stage conversion rates | Where deals die |
| Average time in stage | Where deals stall |
| Pipeline velocity | Revenue per day through the funnel |
| Coverage ratio | Pipeline value vs. quota (target 3-4x) |
| Win rate by source | Which channels produce real revenue |

---

#### Imported: Data Hygiene & Enrichment

### Dedup Strategy

- **Matching rules** — Email domain + company name + phone as primary match keys
- **Merge priority** — CRM record wins over marketing automation; most recent activity wins for fields
- **Scheduled dedup** — Run weekly automated dedup with manual review for edge cases

### Required Fields Enforcement

- Enforce required fields at each lifecycle stage
- Block stage advancement if fields are empty
- Use progressive profiling — don't require everything upfront

### Enrichment Tools

| Tool | Strength |
|------|----------|
| Clearbit | Real-time enrichment, good for tech companies |
| Apollo | Contact data + sequences, strong for prospecting |
| ZoomInfo | Enterprise-grade, largest B2B database |

### Quarterly Audit Checklist

- Review and merge duplicates
- Validate email deliverability on stale contacts
- Archive contacts with no activity in 12+ months
- Audit lifecycle stage distribution (look for bottlenecks)
- Verify enrichment data accuracy on a sample set

---

#### Imported: RevOps Metrics Dashboard

### Key Metrics

| Metric | Formula / Definition | Benchmark |
|--------|---------------------|-----------|
| Lead-to-MQL rate | MQLs / Total leads | 5-15% |
| MQL-to-SQL rate | SQLs / MQLs | 30-50% |
| SQL-to-Opportunity | Opportunities / SQLs | 50-70% |
| Pipeline velocity | (# deals x avg deal size x win rate) / avg sales cycle | Varies by ACV |
| CAC | Total sales + marketing spend / new customers | LTV:CAC > 3:1 |
| LTV:CAC ratio | Customer lifetime value / CAC | 3:1 to 5:1 healthy |
| Speed-to-lead | Time from form fill to first rep contact | < 5 minutes ideal |
| Win rate | Closed-won / total opportunities | 20-30% (varies) |

### Dashboard Structure

Build three views:
1. **Marketing view** — Lead volume, MQL rate, source attribution, cost per MQL
2. **Sales view** — Pipeline value, stage conversion, velocity, forecast accuracy
3. **Executive view** — CAC, LTV:CAC, revenue vs. target, pipeline coverage

---

#### Imported: Output Format

When delivering RevOps recommendations, provide:

1. **Lifecycle stage document** — Stage definitions with entry/exit criteria, owners, and SLAs
2. **Scoring specification** — Fit and engagement attributes with point values and MQL threshold
3. **Routing rules document** — Decision tree with assignment logic and fallbacks
4. **Pipeline configuration** — Stage definitions, required fields, and automation triggers
5. **Metrics dashboard spec** — Key metrics, data sources, and target benchmarks

Format each as a standalone document the user can implement directly. Include platform-specific guidance when the CRM is known.

---

#### Imported: Task-Specific Questions

1. What CRM platform are you using (or planning to use)?
2. How many leads per month do you generate?
3. What's your current MQL definition?
4. Where do leads get stuck in your funnel?
5. Do you have SLAs between marketing and sales today?

---

#### Imported: Tool Integrations

For implementation, use the CRM, scheduling, enrichment, and automation tools available in the current environment. Key RevOps tools:

| Tool | What It Does | Guide |
|------|-------------|-------|
| **HubSpot** | CRM, marketing automation, lead scoring, workflows | Use available HubSpot integrations |
| **Salesforce** | Enterprise CRM, pipeline management, reporting | Use available Salesforce integrations |
| **Calendly** | Meeting scheduling, round-robin routing | Use available scheduling integrations |
| **SavvyCal** | Scheduling with priority-based availability | Use available scheduling integrations |
| **Clearbit** | Real-time lead enrichment and scoring | Use available enrichment integrations |
| **Apollo** | Contact data, enrichment, and outbound sequences | Use available outbound data integrations |
| **ActiveCampaign** | Marketing automation for SMBs, lead scoring | Use available marketing automation integrations |
| **Zapier** | Cross-tool automation and workflow glue | Use available workflow automation integrations |

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
