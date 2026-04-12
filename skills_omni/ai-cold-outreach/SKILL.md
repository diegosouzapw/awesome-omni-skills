---
name: "ai-cold-outreach"
description: "AI cold outreach workflow skill. Use this skill when a user needs to design, audit, or improve an AI-assisted cold email program across targeting, personalization, deliverability, compliance intake, sequencing, reply handling, and measurement. Use it for strategy, copy, workflow design, troubleshooting, and operating guidance around tools such as Instantly, Smartlead, Clay, and similar outreach stacks. Do not use it for hands-on DNS/email-auth implementation, legal advice, or general software architecture."
version: "0.0.1"
category: "development"
tags:
  - "ai-cold-outreach"
  - "cold-email"
  - "deliverability"
  - "outreach-automation"
  - "email-sequences"
  - "personalization"
  - "lead-enrichment"
  - "sales-ops"
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
family_id: "ai-cold-outreach"
family_name: "AI Cold Outreach"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/ai-cold-outreach"
upstream_skill: "skills/ai-cold-outreach"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "ai-cold-outreach"
---

# AI Cold Outreach

## Overview

Use this skill to plan, audit, and improve an AI-assisted cold outreach program from signal detection through reply handling and conversion.

It is designed for operational guidance, not code implementation. It helps an agent:

- define ICP, offer, and campaign goals
- run compliance and data-handling intake before launch
- assess deliverability readiness and list hygiene
- design enrichment, personalization, sequencing, and reply-routing workflows
- draft and critique cold emails and follow-ups
- troubleshoot low replies, spam placement, bounce spikes, unsubscribe failures, and poor meeting conversion
- produce a reviewable workflow packet with local checklists, examples, and handoff boundaries

This skill preserves the original upstream intent while replacing the earlier import-oriented framing with a cleaner execution workflow that is safer and more useful for operators.

> **Important:** This skill provides operational guidance, not legal advice. Jurisdiction-specific outreach rules, privacy-law interpretation, and implementation of email infrastructure should be reviewed with legal, compliance, or technical specialists as appropriate.

## When to Use This Skill

Use this skill when the user needs to:

- build a cold outreach motion using AI for research, personalization, or reply handling
- improve reply quality, meeting rate, or pipeline conversion from outbound email
- diagnose deliverability, spam-folder placement, bounce rate, or unsubscribe issues
- design an outreach workflow using tools such as Clay, Instantly, Smartlead, Apollo, or similar platforms
- create or review email sequences, first-line personalization logic, or low-friction CTAs
- set up measurement and experimentation for subject lines, hooks, offers, segments, or sequence structure
- evaluate list quality, enrichment workflows, suppression handling, or cross-tool hygiene

Do **not** use this skill when the primary request is:

- DNS, SPF, DKIM, DMARC, mailbox, or sending-platform implementation work
- legal determination of lawful basis, consent requirements, or jurisdiction-specific email rules
- general CRM engineering, webhook coding, or automation debugging
- software architecture, code review, or security engineering outside the outreach workflow itself

If the request drifts there, use the handoff guidance in `agents/handoff-router.md`.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| New outreach program | `examples/intake-questionnaire.md` | Captures ICP, offer, compliance, infrastructure, and metrics before recommendations |
| Pre-launch review | `references/compliance-checklist-cold-outreach.md` | Forces compliance and suppression questions before copy or scaling |
| Deliverability audit | `references/deliverability-audit-runbook.md` | Organizes authentication, unsubscribe, spam-rate, and bounce checks |
| Data quality review | `references/list-hygiene-and-suppression-playbook.md` | Prevents bad lists, stale data, and suppression-sync failures |
| KPI or reporting setup | `references/outreach-metrics-scorecard.md` | Shifts focus from opens to reply quality and business outcomes |
| A/B testing or iteration | `references/experimentation-template.md` | Keeps experiments controlled, comparable, and safe |
| Troubleshooting active issues | `examples/troubleshooting-decision-tree.md` | Speeds diagnosis of spam, bounce, reply, and conversion problems |
| Scope or ownership questions | `agents/handoff-router.md` | Routes technical, legal, CRM, or sales-process work to the right specialist |

## Workflow

1. **Confirm the goal and scope**
   - Identify whether the user wants strategy, copy, troubleshooting, workflow design, or audit support.
   - Clarify what success means: positive replies, meetings, show rate, pipeline, or deliverability recovery.
   - Confirm whether this skill should stay at the strategy/workflow layer or hand off to technical/legal specialists.

2. **Run intake before recommending tactics**
   - Gather ICP, segments, offer, current stack, target geographies, data sources, volume targets, current metrics, and constraints.
   - Ask whether the program is new, recovering from poor deliverability, or scaling an existing motion.
   - Use `examples/intake-questionnaire.md` if the user provides incomplete context.

3. **Check compliance and data-handling readiness**
   - Ask what jurisdictions are involved and whether the team has approved outreach to those audiences.
   - Confirm ownership of suppression lists and opt-out handling across CRM, sequencer, enrichment, and any downstream exports.
   - Verify that the operator understands this skill is not a substitute for legal review.
   - Use `references/compliance-checklist-cold-outreach.md`.

4. **Assess infrastructure and policy readiness**
   - Check whether sending domains and mailboxes are ready before discussing scale.
   - Ask whether SPF, DKIM, and DMARC are configured and monitored, and whether unsubscribe handling is easy to use and tested.
   - Confirm that list quality, complaint monitoring, bounce control, and removal handling are in place before launch.
   - Use `references/deliverability-audit-runbook.md`.

5. **Define audience, signals, and enrichment logic**
   - Identify trigger signals, segmentation rules, firmographic filters, role targeting, and exclusions.
   - Decide which signals imply timing urgency and which simply improve relevance.
   - Review how enrichment and verification happen before records enter a sending sequence.
   - Use `references/list-hygiene-and-suppression-playbook.md`.

6. **Draft messaging and sequence structure**
   - Build the first-touch email around a specific observation, credible proof, and low-friction CTA.
   - Keep first touches concise and avoid links, images, and attachment-heavy formats unless the operator has a justified exception.
   - Design follow-ups with angle changes instead of repeating the opener.
   - Preserve the upstream three-line framework where useful, but adapt it to the user’s context.

7. **Define launch controls and guardrails**
   - Confirm send pacing, mailbox allocation, QA checks, suppression sync, deduplication, and verification freshness.
   - Make sure unsubscribe, complaint, and bounce handling are treated as launch blockers, not nice-to-haves.
   - Require measurement guardrails before increasing volume.

8. **Measure with business and risk metrics**
   - Prioritize positive reply rate, qualified meeting rate, show rate, bounce rate, complaint rate, unsubscribe rate, and pipeline contribution.
   - Treat open rate cautiously because tracking is noisy and privacy protections distort it.
   - Use `references/outreach-metrics-scorecard.md`.

9. **Iterate through controlled experiments**
   - Test one variable at a time: subject line, first-line hook, CTA, offer framing, or segment definition.
   - Define the hypothesis, sample, guardrails, and stop conditions before launching changes.
   - Use `references/experimentation-template.md`.

10. **Troubleshoot and hand off deliberately**
   - Use the decision tree and troubleshooting section to isolate list quality, authentication, targeting, copy, or process failures.
   - Hand off implementation, legal review, CRM automation, or sales-process redesign when the issue exceeds this skill’s scope.

## Before Starting

Before building or optimizing any cold outreach program, gather:

1. **ICP definition** - title, company size, geography, industry, buying triggers, and exclusions
2. **Offer clarity** - what outcome is promised, for whom, and why it matters now
3. **Current state** - greenfield build, low-performance optimization, or deliverability recovery
4. **Volume and pacing goals** - daily and weekly targets, plus acceptable ramp speed
5. **Tooling** - CRM, enrichment, verification, sequencer, routing, and reporting tools already in use
6. **Data provenance** - where contact data comes from, how old it is, and who owns suppression logic
7. **Compliance posture** - approved geographies, privacy-review status, sender identity requirements, and opt-out handling
8. **Success metrics** - positive replies, meetings, show rate, SQLs, pipeline, or other downstream outcomes
9. **Review ownership** - who handles infrastructure changes, legal signoff, sales follow-up, and exception handling

If the user cannot answer these questions, slow down and fill the gaps before prescribing scale or tooling changes.

## Workflow Notes: Outreach System Stages

The original upstream skill described a six-stage system. Keep that structure, but apply stronger operational controls around compliance, deliverability, and measurement.

### 1. Signal detection

Use signals to decide **who** to contact and **why now**. Prefer signals tied to active change or likely buying motion, such as:

- hiring activity
- funding or expansion events
- technology changes
- category research or intent activity
- leadership changes
- product launches or organizational restructuring

Signal quality matters more than sheer list size. A smaller, timely segment usually outperforms a broad static list.

### 2. Enrichment and verification

Enrichment should add context and routeability, not just more fields. Collect only the data needed for:

- ICP filtering
- personalization
- segmentation
- follow-up routing
- contact verification

Validate addresses before sending. Treat stale, guessed, or low-confidence emails as risk.

### 3. Personalization

Use AI to turn verified context into:

- a relevant first-line observation
- a plausible pain or priority hypothesis
- segment-aware proof
- a CTA matched to buying temperature

Do not let AI invent facts about a prospect. Personalization quality falls apart when the input data is thin or unverified.

### 4. Sequencing

Sequence design should answer:

- how many touches
- what each touch tries to achieve
- when to stop
- how reply states change routing
- what happens when there is no engagement

Use follow-ups to introduce new context, proof, or framing. Repeating the same ask degrades trust.

### 5. Sending and deliverability operations

Inbox placement depends on sender reputation, authentication, complaint control, and list quality more than copy folklore.

At minimum, the operator should verify:

- authenticated sending setup exists and passes checks
- unsubscribe handling is present and tested where required
- spam and complaint signals are monitored
- bounce and invalid-recipient controls are active
- suppression state is synchronized across tools

### 6. Reply handling and conversion

Not all replies are wins. Separate:

- positive replies
- qualified interest
- objections
- referrals
- not interested / removal requests
- auto-replies

AI can help classify and draft responses, but unclear or risky replies should go to a human.

## Examples

### Example 1: Intake for a new outbound program

```text
Use @ai-cold-outreach to design a cold outbound workflow for a B2B SaaS company selling to VP Sales at 50-500 person companies in the US and UK. Start by running the intake questionnaire, then identify compliance questions, deliverability prerequisites, segmentation logic, and a 5-touch sequence structure.
```

**Expected output:** A structured intake summary, risk notes, proposed workflow stages, launch prerequisites, and sequence outline.

### Example 2: Deliverability audit request

```text
Use @ai-cold-outreach to audit our outreach program. Symptoms: Gmail spam-folder placement increased after ramping volume, unsubscribe rate is rising, and bounce rate is 4.1%. Start with the deliverability audit runbook and list-hygiene playbook, then summarize likely causes, immediate containment steps, and what to verify with our technical team.
```

**Expected output:** A diagnosis covering complaint risk, list quality, unsubscribe handling, authentication checks, and a prioritized remediation plan.

### Example 3: Rewrite a weak opener

```text
Rewrite this cold email using the three-line framework and a low-friction CTA. Keep it under 90 words, remove generic language, and only use claims supported by the provided account notes.
```

**Expected output:** A concise email draft plus a brief rationale for the hook, proof, and CTA choices.

### Example 4: Set up controlled experimentation

```text
Use @ai-cold-outreach to propose an A/B test for our first-touch email. Hold audience, offer, and send window constant. Test only the hook style, define guardrail metrics, and tell us when to stop the test early.
```

**Expected output:** A one-variable experiment plan using `references/experimentation-template.md`.

## Best Practices

### Do

- start with ICP, offer, geography, and compliance questions before drafting copy
- treat suppression handling and unsubscribe propagation as core workflow requirements
- validate contact quality before sending, especially when data is enriched from multiple tools
- use SPF, DKIM, and DMARC readiness as part of preflight review, not postmortem cleanup
- prioritize positive reply rate, qualified meetings, bounce rate, complaints, and unsubscribes over vanity metrics
- keep first-touch emails short, specific, and grounded in real account context
- test one variable at a time with clear stop and continue rules
- document assumptions, exceptions, and required handoffs explicitly

### Don't

- treat this skill as legal advice or override counsel with workflow shortcuts
- assume warming alone fixes deliverability problems
- rely on open rate as the primary success metric
- scale volume before verifying list quality, suppression sync, and complaint handling
- let AI invent company facts, customer proof, or urgency triggers
- send to bounced, unsubscribed, complained-about, or do-not-contact records from any tool export
- mix technical implementation guidance with outreach strategy unless the user explicitly wants a scoped handoff

## Troubleshooting

### Problem: Spam-folder placement increases after ramp

**Symptoms:** Gmail or Yahoo placement worsens after increasing sends; reply volume drops; complaint or unsubscribe signals rise; copy did not obviously change.

**Likely causes:**
- complaint rate increased as volume expanded
- SPF, DKIM, or DMARC alignment is incomplete or failing
- unsubscribe handling is missing, hard to use, or not honored promptly
- list quality fell as segments widened
- tracking, links, or domain changes altered message reputation

**Solution:**
1. Pause further volume increases.
2. Review `references/deliverability-audit-runbook.md`.
3. Check authentication pass status, complaint signals, unsubscribe behavior, and bounce mix.
4. Narrow the audience back to the highest-confidence segment.
5. Remove risky first-touch elements such as extra links or noisy template changes.
6. Escalate infrastructure checks to the technical owner if alignment or header issues are suspected.

### Problem: Bounce rate exceeds acceptable threshold

**Symptoms:** Hard bounces spike, mailbox reputation drops, and previously stable campaigns degrade after importing new data.

**Likely causes:**
- stale or unverified data
- guessed emails or weak waterfall logic
- catch-all domains being treated as safe
- deduplication failures or cross-tool data drift
- suppressions not syncing after previous bounces

**Solution:**
1. Stop sending to the affected segment.
2. Re-verify the list and separate verified, risky, unknown, and invalid records.
3. Review `references/list-hygiene-and-suppression-playbook.md`.
4. Reconcile bounce suppressions across CRM, sequencer, enrichment tables, and any CSV workflows.
5. Tighten record age and confidence requirements before re-launch.

### Problem: High opens or activity, but low replies

**Symptoms:** Opens look healthy, but replies remain weak; subject lines work better than body copy; prospects do not engage with the CTA.

**Likely causes:**
- the hook is generic or not tied to a live signal
- the message is about the sender, not the recipient
- CTA is too large for a cold interaction
- the segment is too broad even if the subject line gets attention
- opens are misleading because of tracking distortion

**Solution:**
1. De-emphasize open rate and inspect reply quality instead.
2. Rewrite the first line around a specific observation.
3. Reduce the ask to a low-friction CTA.
4. Test one variable at a time using `references/experimentation-template.md`.
5. Re-check whether the audience and trigger logic are strong enough to justify the message.

### Problem: Opt-outs or complaints are not honored across systems

**Symptoms:** Contacts unsubscribe in one tool but receive new outreach elsewhere; complaints rise; internal teams are unsure which system is the source of truth.

**Likely causes:**
- no master suppression process
- CRM and sequencer states are not synchronized
- exports/reimports bypass do-not-contact status
- webhook or sync failures are unnoticed
- unclear ownership of suppression reconciliation

**Solution:**
1. Treat this as a compliance and reputation incident.
2. Freeze sends to affected records or segments.
3. Reconcile suppression logic using `references/compliance-checklist-cold-outreach.md` and `references/list-hygiene-and-suppression-playbook.md`.
4. Define one source of truth and verify propagation rules across every system.
5. Escalate to legal/compliance or CRM owners if required.

### Problem: Replies are positive, but meetings do not convert

**Symptoms:** Prospects respond favorably, but few book, attend, or progress; pipeline impact stays low despite reply volume.

**Likely causes:**
- CTA creates too much friction
- the offer in the email does not match the meeting ask
- routing from reply to calendar or AE follow-up is slow
- qualification is weak, so replies are polite but low intent
- sequence promises insight, but handoff delivers a generic sales call

**Solution:**
1. Compare positive reply rate to qualified meeting rate and show rate using `references/outreach-metrics-scorecard.md`.
2. Reduce friction in the handoff path.
3. Align email promise, CTA, and meeting agenda.
4. Re-segment the campaign to improve lead quality.
5. Review sales follow-up timing and ownership.

## Related Skills

- `@ai-sdr` - for broader outbound and SDR workflow coordination beyond cold email execution
- `@ai-pricing` - when the issue is offer packaging, value framing, or commercial positioning
- `@ai-seo` - when demand capture or inbound alternatives should complement outreach
- use `agents/handoff-router.md` when technical implementation, legal review, CRM automation, or sales-process redesign becomes primary

## Additional Resources

### Local support pack

- [Compliance checklist](references/compliance-checklist-cold-outreach.md)
- [Deliverability audit runbook](references/deliverability-audit-runbook.md)
- [List hygiene and suppression playbook](references/list-hygiene-and-suppression-playbook.md)
- [Outreach metrics scorecard](references/outreach-metrics-scorecard.md)
- [Experimentation template](references/experimentation-template.md)
- [Intake questionnaire](examples/intake-questionnaire.md)
- [Troubleshooting decision tree](examples/troubleshooting-decision-tree.md)
- [Handoff router](agents/handoff-router.md)

### External primary guidance referenced by this skill

- Google bulk sender requirements
- Yahoo sender requirements
- SPF, DKIM, DMARC, and one-click unsubscribe RFCs
- FTC CAN-SPAM guidance
- EU and UK GDPR regulator guidance for personal data handling

These sources inform the workflow, but operators must still validate local implementation and legal interpretation with the appropriate specialists.
