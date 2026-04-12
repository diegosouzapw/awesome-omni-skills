---
name: "sales-motion-design"
description: "Sales motion design workflow skill. Use this skill when a user needs to choose between PLG, hybrid, sales-assisted, or sales-led motion; diagnose low activation or weak free-to-paid conversion; design a trial, freemium, demo-first, or value-before-purchase path; or define when product signals should trigger human sales help. Do not use it for technical implementation, CRM automation buildout, code review, or legal/compliance review."
version: "0.0.1"
category: "business"
tags:
  - "sales-motion-design"
  - "plg"
  - "product-led-growth"
  - "sales-led"
  - "hybrid-gtm"
  - "pql"
  - "ttfv"
  - "freemium"
  - "free-trial"
  - "go-to-market"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
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
family_id: "sales-motion-design"
family_name: "Sales Motion Design"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/sales-motion-design"
upstream_skill: "skills/sales-motion-design"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "sales-motion-design"
---

# Sales Motion Design

## Overview

Use this skill to choose, diagnose, or redesign a go-to-market motion around how prospects experience value before purchase.

This skill helps an operator:

- choose between **pure PLG**, **PLG + sales hybrid**, **sales-assisted PLG**, and **sales-led**
- define a measurable **activation event**, **value moment**, and **time-to-first-value (TTFV)**
- decide between **freemium**, **free trial**, **reverse trial**, **interactive demo**, **sandbox**, or other value-before-purchase experiences
- define **product-qualified lead (PQL)** signals and when human sales involvement adds value
- troubleshoot common motion failures such as low activation, weak free-to-paid conversion, early sales assist, poor segmentation, or high CAC/payback pressure

This is a **strategy and operating workflow** skill, not an implementation skill. It preserves the upstream skill intent while making the workflow safer, more diagnostic, and more usable for agents.

## When to Use This Skill

Use this skill when the user needs help with decisions such as:

- "Should we be PLG, hybrid, or sales-led?"
- "Our free users sign up but do not activate."
- "Our trial converts poorly and we do not know why."
- "We have product usage, but we do not know when sales should engage."
- "We want to shorten time-to-first-value."
- "We need a value-before-purchase experience that proves the product before a contract."
- "Founder-led sales is no longer enough; what should we evolve into next?"
- "Enterprise interest exists, but deals stall in procurement, security, or rollout."

Also use when the request references:

- PLG or product-led growth
- sales-led motion
- hybrid motion or product-led sales
- free trial, reverse trial, freemium, self-serve, demo-first
- activation, value moment, onboarding, TTFV
- PQL, product signals, usage-based qualification
- agent-assisted sales research or AI-assisted qualification with human review

## When Not to Use / Handoff Boundaries

Do **not** use this skill as the primary skill when the real task is:

- implementing onboarding flows, analytics events, CRM workflows, billing, or product instrumentation
- writing or reviewing application code
- designing software architecture or APIs
- producing outbound copy at scale without a separate outreach or messaging skill
- building pricing models without broader pricing context
- giving legal, privacy, procurement, or compliance advice
- claiming benchmark certainty where the user lacks segment-specific evidence

Hand off when needed to:

- pricing strategy skills for packaging and monetization design
- analytics or RevOps skills for instrumentation and dashboard implementation
- outbound or SDR skills for campaign execution
- technical implementation skills for onboarding, product changes, CRM integrations, or automation

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Choosing an initial motion | `references/motion-selection-worksheet.md` | Forces segmentation, buyer/user split, ACV, complexity, and assumptions before recommending PLG or sales-led |
| Diagnosing activation or TTFV problems | `references/activation-and-ttfv-scorecard.md` | Defines value moment, activation event, and bottlenecks before changing funnel tactics |
| Adding sales assist to product usage | `references/pql-definition-template.md` | Prevents vague PQLs and premature rep outreach |
| Reviewing CAC, payback, and operating metrics | `references/kpi-formulas-and-review-cadence.md` | Keeps the conversation formula-driven instead of benchmark-driven |
| Choosing between freemium and trial | `references/trial-vs-freemium-decision-guide.md` | Clarifies tradeoffs, fit conditions, and warning signs |
| Planning experiments | `references/experiment-backlog-template.md` | Turns advice into testable changes with stop/continue criteria |
| Routing adjacent work | `agents/handoff-router.md` | Helps the operator hand off cleanly when the task drifts |

## Required Inputs / Discovery Questions

Before recommending a motion, gather or estimate the following.

1. **What product is being sold?** SaaS, API, infrastructure, workflow tool, marketplace, service, or hybrid.
2. **Who experiences value first?** Individual user, team admin, operator, technical evaluator, executive buyer.
3. **Who signs the contract or approves spend?** Same person as the user, manager, finance, IT, procurement, security, committee.
4. **What is the typical contract size or ARPA/ACV?** If unknown, estimate a range.
5. **How much setup is required before value appears?** None, light setup, data import, integration, security review, services.
6. **How many stakeholders are usually involved?** One, few, or many.
7. **Can the prospect self-evaluate value without a human?** Yes fully, partly, or not reliably.
8. **What is the current motion today?** Founder-led, inbound sales, outbound sales, self-serve trial, freemium, hybrid, none.
9. **Where is the bottleneck?** Acquisition, activation, conversion, expansion, retention, payback, sales cycle.
10. **What evidence already exists?** Product analytics, CRM data, win/loss notes, customer interviews, pricing tests, cohort analysis.
11. **What assumptions must be made because data is missing?** Log them explicitly.

If the user cannot provide data, continue with assumptions but label confidence as **high**, **medium**, or **low**.

## Workflow

1. **Frame the decision**  
   Clarify whether the user needs motion selection, diagnosis, migration, or value-before-purchase design.

2. **Segment the context**  
   Use `references/motion-selection-worksheet.md` to classify:
   - price / ACV range
   - implementation complexity
   - buyer vs user split
   - stakeholder count
   - compliance or procurement burden
   - whether value can be self-evaluated

3. **Define the value path**  
   Identify:
   - the first meaningful value a user can experience
   - the activation event that proves that value was reached
   - the expected TTFV for the product type
   - the major blockers between sign-up and activation

4. **Choose a candidate motion**  
   Recommend one primary motion and, if useful, one secondary evolution path:
   - **Pure PLG** when value is fast, low-friction, and buyer/user often overlap
   - **PLG + sales hybrid** when product usage can qualify interest but human help improves expansion, procurement, rollout, or higher-ACV close rates
   - **Sales-assisted PLG** when try-before-buy matters but larger contracts require human support
   - **Sales-led** when complexity, stakeholder count, security, configuration, or contract value make self-serve insufficient

5. **Design the value-before-purchase experience**  
   Choose the lowest-friction mechanism that can prove value credibly:
   - freemium
   - free trial
   - reverse trial
   - interactive demo
   - sandbox
   - template/workflow starter
   - audit or assessment
   - workshop or guided pilot

6. **Define metrics and operating triggers**  
   Use `references/kpi-formulas-and-review-cadence.md` and `references/pql-definition-template.md` to define:
   - activation rate
   - TTFV
   - free-to-paid conversion
   - PQL rate
   - PQL-to-opportunity / PQL-to-close
   - CAC and payback
   - retention / expansion indicators
   - sales-engagement trigger and response SLA

7. **Write the recommendation with assumptions**  
   Produce a concise recommendation containing:
   - current diagnosis
   - selected motion and why
   - metrics to monitor
   - top 3 experiments
   - assumptions and confidence
   - explicit handoff boundaries if implementation work follows

8. **Plan experiments, not a large re-org**  
   Prioritize reversible tests before structural hiring or pricing changes. Use `references/experiment-backlog-template.md`.

## Motion Selection Heuristics

Use these heuristics as directional guidance, not universal law.

### Stronger indicators for Pure PLG

- low friction to first value
- user can evaluate value alone
- buyer and user are often the same person
- low-to-moderate ACV
- limited procurement/security review
- onboarding can be product-led
- broad or horizontal use case

### Stronger indicators for Hybrid

- product usage clearly predicts buying intent
- self-serve gets users to value, but team rollout or enterprise concerns need human help
- multiple users or departments emerge before purchase
- deals stall after product proof because of procurement, security, packaging, or expansion questions
- sales can add context-specific value instead of generic follow-up

### Stronger indicators for Sales-Led

- high ACV and longer sales cycle
- buyer is not the daily user
- multiple stakeholders or committee purchase
- implementation or integration is substantial
- security, legal, or procurement review is common
- product value is hard to prove without guided discovery or solution design

## Value-Before-Purchase Design

Choose the experience that lets the prospect experience credible value with the least unnecessary friction.

| Experience | Best when | Watch out for |
| --- | --- | --- |
| Freemium | marginal cost is manageable, product has natural upgrade triggers, user can realize value alone | free plan too generous, no upgrade pressure, vanity sign-ups |
| Free trial | value is obvious quickly and urgency improves conversion | trial starts before the user can realistically activate |
| Reverse trial | premium value is clear once experienced, but long-term free access still matters | confusion at downgrade moment |
| Interactive demo | UI or workflow needs explanation before sign-up | demo shows features but not user outcomes |
| Sandbox | product needs realistic data or environment to shine | setup burden too high, unrealistic sample data |
| Template / prebuilt workflow | workflow tools benefit from a fast starting point | template does not match real jobs-to-be-done |
| Audit / assessment | product analyzes an existing system or dataset | generated output feels generic or unverifiable |

## Metrics and Scorecard

Prefer formulas and review cadence over brittle benchmark tables.

Track these core metrics:

- **Activation rate** = activated users / eligible new users
- **Median TTFV** = median time from first meaningful interaction to activation event
- **Free-to-paid conversion** = paid conversions / eligible free users or trials
- **PQL rate** = accounts meeting PQL criteria / eligible active accounts
- **PQL-to-opportunity** or **PQL-to-close** = downstream conversion after a product signal
- **CAC** = sales and marketing spend / new customers acquired in period
- **CAC payback** = CAC / monthly gross profit per customer or equivalent model used by the team
- **Expansion rate / NRR proxy** = revenue growth from existing customers relative to starting cohort
- **Retention / churn** by segment = whether the chosen motion is attracting the right customers

Use stage- and segment-specific targets. If exact targets are unknown, create red/yellow/green thresholds from the user's own baseline rather than inserting universal numbers.

## Examples

### Example 1: Choose a motion for a seed-stage SaaS

```text
Use @sales-motion-design to recommend a sales motion for a seed-stage workflow SaaS. Ask for ACV, setup complexity, buyer vs user, current activation rate, and whether enterprise deals stall after product usage. Return one primary motion, one backup path, three KPIs, and two experiments.
```

**Expected output shape:**
- recommended motion
- why it fits
- assumptions
- KPI scorecard
- next experiments

### Example 2: Diagnose low activation

```text
Use @sales-motion-design to diagnose why our sign-ups are high but activation is low. Define our value moment, activation event, TTFV, likely onboarding bottlenecks, and the highest-confidence fixes before changing pricing or hiring sales.
```

**Expected output shape:**
- activation diagnosis
- suspected blockers
- evidence needed
- recommended fixes
- what not to change yet

### Example 3: Define PQLs before hiring more reps

```text
Use @sales-motion-design to define PQL criteria for a hybrid motion. We have self-serve sign-ups and some enterprise expansion interest, but reps are contacting users too early. Propose trigger events, thresholds, owner, response SLA, and the specific value sales should add.
```

**Expected output shape:**
- PQL definition table
- bad trigger warnings
- sales timing guidance
- escalation path

### Example 4: Review support files first

```text
Review the motion-selection worksheet, activation scorecard, PQL template, KPI formulas, and experiment backlog. Then recommend the minimum set of files needed to answer a founder asking whether to move from founder-led sales to hybrid.
```

### Worked examples

- [Founder-led to hybrid example](examples/founder-led-to-hybrid-example.md)
- [Low activation diagnostic example](examples/low-activation-diagnostic-example.md)
- [Enterprise interest but no close example](examples/enterprise-interest-no-close-example.md)

## Best Practices

### Do

- start with customer, buyer, and segment clarity before naming a motion
- distinguish **user**, **buyer**, **admin**, and **economic decision-maker**
- define a product-specific **value moment** and **activation event**
- use PQLs only when product signals are meaningful and sales can add value
- keep recommendations reversible where possible; test before reorganizing teams
- label assumptions and confidence explicitly
- use benchmarks directionally and carefully, especially across segments
- preserve upstream intent while updating unsupported claims into evidence-based guidance
- keep AI-assisted sales activity truthful, reviewed by humans, and grounded in real product capabilities

### Don't

- recommend PLG just because self-serve sounds cheaper
- recommend sales-led just because enterprise buyers exist somewhere in the market
- measure sign-ups as success if activation is weak
- add sales touches before users have reached enough product value to understand the conversation
- define PQLs with vague criteria like "seems interested"
- present portfolio, vendor, or editorial benchmarks as guaranteed outcomes
- let AI generate outreach claims, ROI statements, or personalization details that a human has not verified
- collapse pricing, packaging, implementation, and motion design into one unsupported answer

## AI-Assisted Sales Safety Boundaries

AI can help with research, summarization, signal review, account preparation, draft generation, and experiment planning.

Require **human review before any external communication** that:

- makes claims about ROI, customer outcomes, or product capabilities
- uses personalized details about a prospect
- frames urgency, competitive comparison, or compliance status
- qualifies, disqualifies, or escalates a lead in a way that affects customer treatment

Never use AI in this workflow to:

- fabricate personalization or relationship context
- impersonate a person or pretend outreach was handwritten when it was not
- invent customer evidence, benchmarks, references, or product functionality
- pressure prospects with deceptive urgency or misleading claims

## Troubleshooting

### Problem: High sign-up volume but low activation

**Symptoms:** Many users enter the funnel, but few reach the value moment. Trial starts look healthy, while usage remains shallow.

**Likely causes:**
- sign-up friction is lower than value-realization friction
- activation event is undefined or too hard to reach
- empty states, missing sample data, or too much setup
- the wrong audience is entering the funnel

**What to inspect:**
- median time from sign-up to first meaningful action
- drop-off points in onboarding
- whether new users understand what success looks like
- acquisition source quality by cohort

**Solution:** Define the activation event first, reduce setup burden, preload value where possible, and fix onboarding before changing pricing or adding reps.

### Problem: Strong activation but poor free-to-paid conversion

**Symptoms:** Users reach value, but few upgrade or start a sales conversation.

**Likely causes:**
- weak upgrade trigger or low packaging clarity
- free tier is too generous
n- pricing gap is confusing or too steep
- sales is not adding value after product proof

**What to inspect:**
- which features users hit before conversion stalls
- whether upgrade moments correspond to genuine friction
- conversion by segment, company size, and use case
- how often enterprise-oriented signals appear before churn

**Solution:** Tighten packaging around moments of real need, clarify upgrade paths, define PQL triggers if product signals exist, and test intermediate offers before overhauling the motion.

### Problem: Sales engages too early and suppresses self-serve trust

**Symptoms:** Product-qualified accounts ignore reps, self-serve conversion drops after outreach, or users complain that sales contacted them before they were ready.

**Likely causes:**
- PQL thresholds are too loose
- reps are optimized for activity, not timing or value-add
- users have not reached sufficient activation before contact
- sales message repeats what the product already showed

**What to inspect:**
- time between activation and sales touch
- downstream conversion by PQL threshold strength
- reasons for no-response or rejection
- whether sales can solve a real blocker such as rollout, procurement, or security

**Solution:** Raise the bar for PQLs, delay sales engagement until product intent is clearer, and require each sales touch to add context-specific value.

### Problem: Enterprise interest exists but deals do not close

**Symptoms:** Many serious conversations, pilots, or active users inside target accounts, but contracts stall.

**Likely causes:**
- no clear owner for procurement, security, or multi-threading
- enterprise packaging is missing key controls or assurances
- product proves value to users but not to the economic buyer
- implementation burden is hidden until late stage

**What to inspect:**
- loss reasons by stage
- who participates in late-stage calls
- requests for security, admin, billing, or rollout support
- whether the product has a credible pilot-to-production path

**Solution:** Shift from pure PLG toward sales-assisted or sales-led support for these segments, equip reps to navigate non-user stakeholders, and redesign the value-before-purchase path around buyer proof, not just user delight.

### Problem: CAC or payback is worsening while sales productivity is flat

**Symptoms:** More spend, longer cycles, weaker close rates, or increasing dependence on expensive sales effort.

**Likely causes:**
- poor segmentation
- hiring ahead of demand
- weak self-qualification or product proof
- too many low-fit leads reaching humans

**What to inspect:**
- conversion by segment and source
- rep time allocation
- self-serve activation quality
- whether product signals are being used to prioritize effort

**Solution:** Re-segment, improve qualification, increase value-before-purchase proof, and reduce human involvement where product evidence can do the work first.

## Related Skills

- `@ai-pricing` for pricing, packaging, and monetization design beyond motion selection
- `@ai-cold-outreach` for outreach execution after this skill defines the motion and guardrails
- `@ai-sdr` for SDR workflow design once PQLs, segmentation, and value-add criteria are clear
- analytics, RevOps, or implementation skills for instrumentation, CRM, and workflow buildout

## Additional Resources

### Local references

- [Motion selection worksheet](references/motion-selection-worksheet.md)
- [Activation and TTFV scorecard](references/activation-and-ttfv-scorecard.md)
- [PQL definition template](references/pql-definition-template.md)
- [KPI formulas and review cadence](references/kpi-formulas-and-review-cadence.md)
- [Trial vs freemium decision guide](references/trial-vs-freemium-decision-guide.md)
- [Experiment backlog template](references/experiment-backlog-template.md)
- [Agent handoff router](agents/handoff-router.md)

### Source notes

This enhanced skill preserves the upstream intent while replacing unsupported hard-number claims with safer guidance:

- use discovery and explicit assumptions before selecting a motion
- treat TTFV and activation as product-specific diagnostics
- define PQLs operationally before increasing sales involvement
- use CAC/payback formulas and segment-aware review cadence rather than universal benchmark promises
- keep AI-assisted sales activity within truthful, human-reviewed boundaries

Directional sources informing this curation include SBA guidance on market discovery and business planning, OpenView and Bessemer benchmark framing, HubSpot guidance on PQLs and CAC formulas, and OpenAI policy/model-spec guidance for AI-assisted communication safety.
