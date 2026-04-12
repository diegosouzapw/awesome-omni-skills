---
name: "social-selling"
description: "Social selling workflow skill. Use this skill when a user needs a policy-safe LinkedIn or social-selling strategy to improve profile positioning, build a content-to-conversation workflow, organize Sales Navigator prospecting, create personalized DM sequences, or attribute social activity to pipeline. Do not use it for scraping, prohibited automation, fake engagement, or technical implementation work."
version: "0.0.1"
category: "development"
tags:
  - "social-selling"
  - "linkedin"
  - "sales-navigator"
  - "dm-outreach"
  - "content-to-pipeline"
  - "employee-advocacy"
  - "crm-attribution"
  - "social-prospecting"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
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
family_id: "social-selling"
family_name: "Social Selling Skill"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/social-selling"
upstream_skill: "skills/social-selling"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "social-selling"
---

# Social Selling Skill

## Overview

Use this skill to design or improve a social-selling system that turns LinkedIn presence and social engagement into qualified conversations and measurable pipeline.

It covers:

- buyer-facing LinkedIn profile optimization
- Sales Navigator workflow design
- content-to-conversation planning
- personalized connection and DM sequences
- employee advocacy coordination
- CRM attribution for social-sourced opportunities

This enhanced version preserves the upstream intent while tightening operational guidance, removing unsupported claims, and adding policy-safe guardrails.

## When to Use This Skill

Use this skill when the user asks for help with:

- LinkedIn profile optimization for selling
- social prospecting and relationship-based outreach
- Sales Navigator list design, saved searches, and alert review
- converting content engagement into conversations or meetings
- founder-led, AE-led, or team-based social selling workflows
- employee advocacy and company-page support for pipeline generation
- CRM tagging and attribution for social-sourced opportunities

Typical triggers:

- “Help me improve my LinkedIn for sales.”
- “Build a LinkedIn DM sequence.”
- “How should we use Sales Navigator?”
- “Our content gets engagement but not meetings.”
- “We want a social selling playbook for the team.”

### Do not use this skill for

Do not use this skill to:

- set up scraping, browser automation, account rotation, or policy-evasion workflows
- recommend fake engagement pods or deceptive identity tactics
- blast generic bulk DMs without personalization and stop rules
- perform software implementation, code review, or architecture work
- replace dedicated CRM ops, brand strategy, or cold outbound skills when those become the dominant task

## Operating Table

| Situation | Start here | Output |
| --- | --- | --- |
| Profile is weak or unclear | `references/profile-audit-worksheet.md` | Rewrite inputs for headline, About, proof, Featured, CTA |
| Sales Navigator process is ad hoc | `references/sales-navigator-setup-checklist.md` | ICP fields, lists, saved searches, alerts, review cadence |
| Content gets visibility but not conversations | `references/content-to-conversation-tracker.md` | Post-to-engagement-to-DM tracking loop |
| Team is unsure how to measure success | `references/crm-attribution-taxonomy.md` | Source labels, stage definitions, required CRM fields |
| Outreach risk or automation questions arise | `references/platform-policy-and-automation-guardrails.md` | Safer boundaries and escalation notes |
| Funnel conversion is underperforming | `references/social-selling-troubleshooting-matrix.md` | Stage-based diagnosis and corrective actions |
| Need a worked plan | `examples/founder-led-social-selling-plan.md` or `examples/ae-social-selling-plan.md` | Role-specific weekly operating model |
| Need routing guidance | `agents/openai.yaml` | Invocation hints and handoff boundaries |

## Workflow

1. **Clarify scope and success criteria**  
   Ask for ICP, offer, average sales cycle, current LinkedIn activity, available tools, and target outcome.

2. **Choose the operating motion**  
   Identify whether this is primarily:
   - founder-led selling
   - AE/SDR-led prospecting
   - team advocacy
   - content-led demand creation
   - measurement and attribution cleanup

3. **Audit the current funnel by stage**  
   Review the system in order:
   - profile and positioning
   - prospect selection
   - content themes and CTAs
   - engagement behavior
   - connection and DM sequence
   - meeting conversion
   - CRM attribution

4. **Fix positioning before scaling activity**  
   If the profile, credibility, offer clarity, or CTA are weak, address those before recommending more outreach volume.

5. **Build a repeatable prospecting workflow**  
   Define ICP filters, account/lead lists, saved searches, alerts, and a review cadence. Keep CRM as the system of record for opportunity progress.

6. **Design the content-to-conversation path**  
   For each content theme, define:
   - audience pain or trigger
   - proof or point of view
   - low-friction CTA
   - follow-up trigger for comments or reactions

7. **Create personalized outreach sequences**  
   Use warm context whenever possible. Messages should reference an observed trigger, explain relevance, offer value, and include at most one clear next step.

8. **Set measurement and review cadence**  
   Track operator-controlled metrics first: acceptance, reply, meeting creation, opportunity creation, and influenced pipeline. Treat SSI as directional, not primary.

9. **Check policy safety and execution risk**  
   Remove recommendations that depend on scraping, prohibited automation, false urgency, or deceptive engagement tactics.

10. **Document next actions**  
    End with a concrete weekly plan, templates to personalize, CRM tracking rules, and the top 1–3 bottlenecks to fix first.

## Discovery Questions

Use these before producing recommendations:

1. Who is the ICP by title, company size, industry, and geography?
2. What offer is being sold, and what business problem does it solve?
3. Is the main goal awareness, conversations, meetings, opportunities, or influenced pipeline?
4. Is the motion founder-led, sales-led, or team advocacy?
5. What is the current posting cadence and engagement habit?
6. Is Sales Navigator available? If so, how is it being used today?
7. What proof assets already exist: case studies, customer quotes, demos, research, or frameworks?
8. What CRM is used, and are social sources tagged consistently?
9. Are there policy or compliance constraints on outreach?
10. Which stage is weakest today: profile, content, engagement, DM, meetings, or attribution?

## Operating Metrics

| Funnel stage | Primary metric | Secondary metric | Review cadence | Corrective action if weak |
| --- | --- | --- | --- | --- |
| Profile | profile visits to connection interest or inbound conversations | profile completeness and proof coverage | monthly | rewrite headline/About/Featured and clarify CTA |
| Prospecting | new qualified leads added to lists | alert relevance and list hygiene | weekly | tighten ICP filters and remove low-fit leads |
| Content | qualified engagement rate | comments from ICP, CTA responses | weekly | narrow topics, improve proof, lower CTA friction |
| Engagement | conversations started from comments or reactions | response quality from target buyers | weekly | improve comment relevance and consistency |
| DMs | reply rate from personalized outreach | acceptance rate, positive sentiment | weekly | strengthen context, reduce pitch pressure, add stop rules |
| Meetings | meetings booked from social interactions | meeting show rate | biweekly | improve transition timing and meeting ask clarity |
| Pipeline | opportunities created or influenced | source accuracy in CRM | monthly | tighten attribution taxonomy and handoff discipline |
| SSI | directional account health | sub-pillar trend | monthly | use as diagnostic only, not main KPI |

## Core Playbook

### 1. Profile optimization for selling

Use LinkedIn’s official profile guidance as the baseline. Optimize for buyer clarity, credibility, and next-step readiness.

Focus on:

- **Photo and banner:** professional, clear, and consistent with the offer
- **Headline:** buyer-facing positioning, not only job title
- **About:** problem, method, proof, and next step
- **Featured:** strongest proof assets or helpful conversion assets
- **Experience:** outcomes and relevance, not task lists
- **Recommendations and proof:** customer or peer credibility where available

Use `references/profile-audit-worksheet.md` to gather rewrite inputs before drafting copy.

### 2. Sales Navigator as a system, not a one-off search

Use Sales Navigator to create a repeatable workflow:

- define ICP fields
- create account lists and lead lists
- save key searches
- monitor alerts and trigger events
- review lead quality weekly
- log meetings and opportunity progress in CRM, not only in LinkedIn

Use `references/sales-navigator-setup-checklist.md` for setup and weekly review.

### 3. Content-to-conversation design

Content should not only “get reach.” It should help identify, warm, and convert the right buyers.

For each post or content series, define:

- who it is for
- what pain, decision, or trigger it addresses
- what proof or perspective it offers
- what low-friction CTA it uses
- what follow-up action happens when an ICP prospect engages

Examples of lower-friction CTAs:

- invite a comment with a specific view
- offer to send a resource in DM
- ask if the topic is relevant to their current priority
- invite a short exchange before offering a meeting

Use `references/content-to-conversation-tracker.md` to track which themes generate conversations instead of vanity engagement.

### 4. Personalized outreach and DM sequencing

Use message templates only as starting points. Every outbound touch should be personalized and relevant.

Good first-touch structure:

1. observed trigger or context
2. why it is relevant to them
3. one useful insight, question, or resource
4. one optional next step

Safe sequencing guidance:

- prefer warm context over cold interruption
- avoid links in the first message unless clearly expected and relevant
- stop after repeated non-response
- move non-responders into content nurture rather than pressure follow-up
- avoid deceptive urgency or false familiarity

### 5. Employee advocacy and company-page support

For teams, use personal profiles as the primary distribution engine and company pages as supporting credibility and brand infrastructure.

A simple rollout:

- identify a small pilot group of active employees
- optimize their profiles first
- define 3–5 approved content themes
- encourage original commentary rather than copy-paste resharing
- track participation and business outcomes, not just post counts

See `examples/employee-advocacy-rollout.md` for a phased example.

### 6. CRM attribution discipline

Social selling creates confusion when meetings are booked but source labels are inconsistent.

At minimum, define:

- first-touch source
- influence touch
- conversion touch
- meeting owner
- opportunity owner
- campaign or motion type

Use `references/crm-attribution-taxonomy.md` to standardize labels and required fields.

## Examples

### Example 1: Improve a founder’s LinkedIn selling system

```text
Use @social-selling to audit a founder-led LinkedIn motion. Review profile positioning, content themes, DM approach, and CRM attribution. Prioritize the top 3 changes most likely to increase qualified conversations without using prohibited automation.
```

**Expected output:** a profile rewrite brief, weekly content plan, DM sequence draft, and stage-based metric plan.

### Example 2: Build a Sales Navigator workflow for an AE

```text
Use @social-selling to create an AE social-selling workflow for mid-market SaaS. Define ICP filters, account and lead lists, saved searches, alert review cadence, outreach triggers, and CRM source labels.
```

**Expected output:** a weekly operating cadence, list criteria, outreach trigger library, and attribution checklist.

### Example 3: Diagnose why content does not create meetings

```text
Use @social-selling to troubleshoot a LinkedIn motion where posts get reactions but almost no DMs or meetings. Diagnose profile, CTA, engagement follow-up, and DM transition issues, then recommend the smallest high-impact fixes first.
```

**Expected output:** funnel diagnosis by stage, likely causes, and corrective actions.

### Example 4: Review support files before planning

```bash
printf '%s
' \
  references/profile-audit-worksheet.md \
  references/sales-navigator-setup-checklist.md \
  references/content-to-conversation-tracker.md \
  references/crm-attribution-taxonomy.md \
  references/platform-policy-and-automation-guardrails.md \
  references/social-selling-troubleshooting-matrix.md
```

**Expected output:** a concise file inventory to load before drafting the plan.

## Best Practices

### Do

- optimize positioning before increasing outreach activity
- personalize connection requests and DMs with real context
- use Sales Navigator with saved searches, lists, and review cadence
- track qualified conversations and pipeline impact, not only engagement
- use low-friction CTAs before jumping to a meeting ask
- maintain clear CRM source taxonomy for social-sourced opportunities
- treat SSI as a supporting indicator, not the main score to chase
- verify that any third-party tool use is compliant with platform terms, data handling rules, and company policy

### Don’t

- recommend scraping, fake accounts, or evasion-oriented automation
- rely on unsupported algorithm claims as if they are deterministic rules
- send generic message blasts at scale
- use manipulative urgency, hidden intent, or false personalization
- optimize only for impressions or vanity engagement
- treat company-page activity as a substitute for credible employee voices
- present unsourced benchmark numbers as guarantees

## Troubleshooting

### Problem: Profile gets views but few conversations

**Symptoms:** Profile visits increase, but connection requests, inbound DMs, or meeting requests stay low.  
**Likely causes:** Headline is role-centric, About lacks buyer relevance, proof is thin, or CTA is missing.  
**Solution:** Rework headline, About, Featured, and proof assets using `references/profile-audit-worksheet.md`. Make the next step obvious and low friction.

### Problem: Sales Navigator produces too many low-fit leads

**Symptoms:** Large lists, weak engagement, poor reply quality, or frequent disqualification.  
**Likely causes:** ICP filters are too broad, lead criteria are inconsistent, or lists are not reviewed.  
**Solution:** Tighten ICP fields, split lists by priority, save fewer high-signal searches, and run weekly hygiene using `references/sales-navigator-setup-checklist.md`.

### Problem: Content gets impressions or reactions but no conversations

**Symptoms:** Posts perform visibly but do not lead to DMs, comments from buyers, or meetings.  
**Likely causes:** Topics are broad, proof is weak, CTA is unclear, or no follow-up happens after engagement.  
**Solution:** Narrow content to buyer pain and decision moments, add proof or a stronger point of view, and track follow-up actions with `references/content-to-conversation-tracker.md`.

### Problem: Connection acceptance or DM reply rate is weak

**Symptoms:** Few accepted invites, ignored DMs, or negative reactions.  
**Likely causes:** Generic requests, premature pitch, too many asks, weak context, or excessive follow-up.  
**Solution:** Rewrite outreach around observed trigger, relevance, value, and one optional next step. Stop after repeated non-response and move contacts into nurture.

### Problem: Conversations do not convert into meetings

**Symptoms:** Prospects reply, but threads stall before a call or demo.  
**Likely causes:** Meeting ask comes too early, no clear transition, or the business issue is not yet concrete.  
**Solution:** Use a progressive transition: clarify the problem, confirm relevance, then offer a short conversation only when intent is visible.

### Problem: Social activity is happening but pipeline cannot be attributed

**Symptoms:** Team believes social is working, but CRM reports are unreliable or disputed.  
**Likely causes:** inconsistent source labels, unclear ownership, missing influence fields, or meetings logged informally.  
**Solution:** Standardize labels and required fields with `references/crm-attribution-taxonomy.md`, then audit recent meetings for consistency.

### Problem: Proposed automation introduces account or policy risk

**Symptoms:** The plan depends on scraping, browser automation, identity masking, or high-volume sending.  
**Likely causes:** outdated playbooks, unsafe vendor suggestions, or pressure to scale before fundamentals work.  
**Solution:** Replace risky tactics with native workflows, approved integrations, analytics, writing assistance, or manual high-quality outreach. Review `references/platform-policy-and-automation-guardrails.md` before recommending tools.

## Related Skills

- `@ai-cold-outreach` — use when the main task becomes outbound messaging strategy beyond social channels
- `@ai-sdr` — use when the work shifts toward SDR process, qualification, and outbound execution
- `@ai-pricing` — use when pricing and packaging become the main conversion blocker
- `@accessibility` — use when content clarity or communication accessibility becomes a separate deliverable

## Additional Resources

### Local references

- [Profile audit worksheet](references/profile-audit-worksheet.md)
- [Sales Navigator setup checklist](references/sales-navigator-setup-checklist.md)
- [Content-to-conversation tracker](references/content-to-conversation-tracker.md)
- [CRM attribution taxonomy](references/crm-attribution-taxonomy.md)
- [Platform policy and automation guardrails](references/platform-policy-and-automation-guardrails.md)
- [Social selling troubleshooting matrix](references/social-selling-troubleshooting-matrix.md)

### Worked examples

- [Founder-led social selling plan](examples/founder-led-social-selling-plan.md)
- [AE social selling plan](examples/ae-social-selling-plan.md)
- [Employee advocacy rollout](examples/employee-advocacy-rollout.md)

### Source notes

Use official LinkedIn help and policy pages as the primary source for platform guidance, and treat secondary sales/marketing guidance as operational framing rather than platform policy.

Key upstream themes preserved from the imported skill:

- profile optimization
- Sales Navigator workflow
- content-to-conversation sequencing
- DM sequencing
- team adoption and advocacy
- metrics and attribution

## Provenance Note

This skill preserves the upstream social-selling intent from the community source while replacing unsupported numeric claims and risky automation guidance with safer, evidence-aligned operating practices.
