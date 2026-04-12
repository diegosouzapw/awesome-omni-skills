---
name: "expansion-retention"
description: "Expansion & Retention Systems workflow skill. Use this skill when a user needs to reduce churn, improve gross or net revenue retention, design expansion motions, operationalize customer success, diagnose onboarding drop-off, or structure renewal and win-back programs. Also use when the request mentions churn, retention, upsell, cross-sell, NRR, GRR, renewal risk, customer health, product-qualified accounts, land-and-expand, or closed-lost reactivation. Do not use this skill for software implementation, code review, or architecture work."
version: "0.0.1"
category: "development"
tags:
  - "expansion-retention"
  - "churn"
  - "retention"
  - "nrr"
  - "grr"
  - "customer-success"
  - "renewals"
  - "upsell"
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
family_id: "expansion-retention"
family_name: "Expansion & Retention Systems"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/expansion-retention"
upstream_skill: "skills/expansion-retention"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "expansion-retention"
---

# Expansion & Retention Systems

## Overview

Use this skill to design or diagnose post-sale systems that improve retention, reduce churn, and grow revenue from existing customers.

It is most useful when the user needs a practical operating plan across metrics, segmentation, onboarding, health scoring, expansion triggers, renewals, and closed-lost reactivation. The emphasis is operational: identify where revenue is leaking or expanding, map the trigger-to-action workflow, and produce a playbook the team can run.

This skill preserves the upstream GTM intent while tightening the workflow around measurable baselines, cohort analysis, safer automation, and clearer handoff boundaries.

Do **not** use this skill for product implementation details, application code, CRM automation coding, or architecture design. Route those tasks to the appropriate technical skill after this skill defines the business workflow.

## When to Use This Skill

Use this skill when one or more of these conditions is true:

- Net revenue retention is below target or trending down.
- Gross retention is weak and the team needs to determine whether onboarding, adoption, or pricing is the main problem.
- Churn appears acceptable in aggregate, but specific cohorts, plans, or customer segments are underperforming.
- The team wants to create usage-based upsell, cross-sell, or renewal triggers.
- Customer success work is inconsistent, founder-led, or not yet operationalized.
- Early-life churn is high in the first 30 to 90 days.
- Health scores exist but are noisy, not trusted, or not predictive.
- Renewals are slipping late because proof of value, stakeholder coverage, or risk visibility is weak.
- The company wants a closed-lost or win-back motion with guardrails.

Do **not** use this skill when the primary need is:

- application or data-pipeline implementation
- code review or debugging
- CRM workflow programming
- security architecture or compliance legal advice

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Need a retention baseline | `references/retention-metrics-scorecard.md` | Establishes common metric definitions and prevents the team from optimizing on anecdotes |
| Blended metrics look fine but outcomes feel off | `references/cohort-analysis-worksheet.md` | Forces analysis by cohort, segment, plan, and lifecycle stage |
| Health score exists but is not trusted | `references/health-score-design-guide.md` | Rebuilds the score from predictive, explainable, action-linked signals |
| Expansion motion is ad hoc | `references/trigger-playbook-matrix.md` | Converts usage or account signals into owner, SLA, and intervention rules |
| First 90-day churn is high | `references/onboarding-milestone-map.md` | Shifts focus to activation and time-to-value before upsell work |
| Renewals go red too late | `references/renewal-readiness-checklist.md` | Adds a 180/120/90/60/30-day operating cadence |
| Win-back or automated outreach is planned | `references/outreach-compliance-guardrails.md` | Adds consent, suppression, transparency, and deliverability checks |
| Need a quick diagnosis prompt | `examples/churn-diagnostic-prompt.md` | Provides a reusable intake prompt for selecting the right playbook branch |
| Need to review an expansion trigger | `examples/expansion-trigger-review.md` | Shows how to validate signal quality and false positives before scale |
| Need a renewal-risk writeup | `examples/renewal-risk-review.md` | Demonstrates how to summarize risk, evidence, and escalation clearly |

## Workflow

1. **Confirm the objective and routing boundary**  
   Determine whether the user is trying to reduce churn, increase expansion revenue, improve NRR, fix onboarding, operationalize renewals, or reactivate closed-lost accounts. If the task drifts into implementation, route to a technical skill after producing the business workflow.

2. **Collect baseline inputs before prescribing actions**  
   Ask for or estimate current GRR, NRR, logo churn, revenue churn, cohort retention, time-to-value, segment mix, pricing model, renewal motion, and available telemetry. If data is missing, state assumptions explicitly.

3. **Segment before diagnosing**  
   Break the problem down by customer segment, plan, ACV band, lifecycle stage, acquisition channel, and months-since-start. Avoid relying on one blended churn or NRR number.

4. **Choose the primary failure mode**  
   Use the baseline and cohort view to decide which branch matters most:
   - early-life churn and activation failure
   - ongoing adoption decay
   - weak renewal readiness
   - poor expansion timing or offer design
   - health-score quality problems
   - closed-lost reactivation opportunity

5. **Select the correct operating playbook**  
   - If **GRR is weak**, stabilize retention before optimizing upsell.
   - If **churn concentrates in the first 30 to 90 days**, prioritize onboarding milestones and time-to-value.
   - If **usage is healthy but expansion lags**, inspect trigger quality, buyer readiness, and proof of value.
   - If **renewals slip late**, implement renewal-readiness checkpoints and evidence capture.
   - If **health scores are noisy**, redesign the signal set and validate against historical outcomes.

6. **Design trigger-to-action systems**  
   For each lifecycle stage, define:
   - signal or event
   - threshold or pattern
   - owner
   - channel
   - SLA
   - expected action
   - evidence of success or false positive

7. **Add measurement and review loops**  
   For any playbook, specify how outcomes will be reviewed: retention by cohort, trigger conversion, intervention response rate, expansion rate, renewal save rate, and false-positive rate for alerts.

8. **Apply safety and compliance guardrails**  
   If the workflow uses behavioral profiling, contact data, automated outreach, or win-back sequences, include data-minimization, lawful-processing, unsubscribe, suppression, and transparency checks.

9. **Produce the deliverable**  
   Return a concise operating plan that includes:
   - current-state diagnosis
   - metric baseline or assumptions
   - prioritized interventions
   - trigger matrix
   - ownership and cadence
   - review checkpoints
   - risks and dependencies

## Discovery Questions

Use these questions early. Skip only when the user has already provided the answer.

### Metric baseline

1. What are your current GRR and NRR, and how are you calculating them?
2. What do logo churn and revenue churn look like by month or quarter?
3. Where does churn concentrate: first 30 days, first 90 days, at renewal, or after downgrade signals?
4. What percent of expansion comes from seats, usage, modules, services, or price increases?

### Segmentation and lifecycle

5. How do you segment customers today: SMB, mid-market, enterprise, self-serve, or another model?
6. Which segments, plans, or acquisition cohorts retain best and worst?
7. What is the pricing model: seat-based, usage-based, hybrid, flat-rate, or contract-based?
8. What are the key lifecycle stages and exit criteria for each stage?

### Customer success and telemetry

9. What systems do you use for CRM, product analytics, support, billing, and customer success?
10. Do you already have a health score? If yes, which signals and weights are included?
11. Which usage, support, relationship, and financial events can you observe reliably today?
12. Who owns renewals, expansion, onboarding, and at-risk interventions?

### Problem-specific triage

13. If churn is the issue, what are the top stated reasons: low usage, no champion, product gaps, price, procurement, competitor, or unclear value?
14. If expansion is the issue, what behaviors currently precede successful upsells or cross-sells?
15. If renewals are slipping, when does formal renewal preparation begin today?
16. If closed-lost reactivation is in scope, what lost reasons are tracked and what has changed since loss?

If the user does not know, infer cautiously and label the result as a first-pass operating hypothesis.

## Decision Rules

Use these rules to avoid optimizing the wrong layer.

### 1. Stabilize gross retention before over-optimizing expansion

If GRR is weak, especially from early churn or heavy contraction, do not start with aggressive upsell design. Fix onboarding, adoption, support friction, and renewal readiness first.

### 2. Prefer cohorts over blended averages

If the top-line retention number looks acceptable but the business still feels unstable, split by:

- start month or quarter
- segment
- pricing plan
- implementation path
- acquisition channel
- lifecycle stage

### 3. Treat health scores as models, not truths

Any health score should be explainable, predictive, and reviewable. Remove vanity signals that do not change decisions.

### 4. Treat triggers as hypotheses to validate

A usage threshold, feature-gate hit, or teammate invite is not automatically expansion-ready. Check whether the signal correlates with realized value and buying readiness.

### 5. Renewals start long before contract end

If a team waits until 30 to 60 days before renewal to collect ROI evidence or identify stakeholders, the operating system is already late.

## Examples

### Example 1: Diagnose a churn problem

```text
Use @expansion-retention to diagnose a churn problem for a B2B SaaS company. Start by estimating GRR, NRR, churn concentration by cohort, and first-90-day drop-off. Then recommend the highest-priority intervention branch and a weekly operating cadence.
```

**Expected output:** A diagnosis that distinguishes early churn from renewal churn, lists assumptions, and recommends a small set of measurable interventions.

### Example 2: Review an expansion trigger before rollout

```text
Use @expansion-retention to review our proposed upsell trigger: accounts that hit 80% of plan usage and invite at least 3 teammates in 14 days. Assess whether this should route to product, CS, or sales, and list false-positive risks.
```

**Expected output:** A trigger review with threshold critique, owner recommendation, test plan, and false-positive checks.

### Example 3: Build a renewal-readiness plan

```text
Use @expansion-retention to create a renewal-readiness workflow for enterprise customers with annual contracts. Include 180/120/90/60/30-day checkpoints, proof-of-value requirements, stakeholder coverage, and escalation criteria.
```

**Expected output:** A renewal operating cadence with ownership, evidence requirements, and risk escalation rules.

### Example 4: Re-engage closed-lost safely

```text
Use @expansion-retention to design a closed-lost reactivation motion for deals lost due to timing or product gaps. Include segmentation, outreach timing, and compliance guardrails for automated messaging.
```

**Expected output:** A segmented win-back plan with suppression and consent checks, not just a generic nurture sequence.

See also:
- [Churn diagnostic prompt](examples/churn-diagnostic-prompt.md)
- [Expansion trigger review example](examples/expansion-trigger-review.md)
- [Renewal risk review example](examples/renewal-risk-review.md)

## Best Practices

### Do

- Start with metric definitions and a baseline before prescribing tactics.
- Analyze churn and expansion by cohort, segment, plan, and lifecycle stage.
- Prioritize onboarding and activation when churn is concentrated early.
- Use health scores built from leading indicators that are explainable and action-linked.
- Validate expansion triggers against conversion outcomes and false positives.
- Create explicit ownership, SLAs, and escalation paths for renewals and save plays.
- Keep examples and thresholds as starting heuristics unless you have company-specific evidence.
- Document assumptions whenever the user lacks clean data.
- Minimize customer data use to what is required for the workflow.
- Include unsubscribe, suppression, and transparency controls for automated outreach.

### Don't

- Treat blended NRR as a complete diagnosis.
- Start with upsell tactics when gross retention is deteriorating.
- Use vanity metrics such as raw logins without relationship to retention or value.
- Assume one health-score formula works across all segments.
- Automate outreach from sensitive or low-confidence signals without review.
- Present unsupported benchmark percentages as universal fact.
- Recommend aggressive win-back sequences without deliverability and consent checks.
- Collapse product, CS, sales, and finance ownership into one ambiguous queue.

## Troubleshooting

### Problem: Overall retention looks acceptable, but the business still feels unstable

**Symptoms:** Leadership sees an acceptable blended NRR or churn number, but a segment keeps downgrading, support load is rising, or renewals still surprise the team.

**Solution:** Re-run the diagnosis by cohort, segment, plan, and lifecycle stage using `references/cohort-analysis-worksheet.md`. Look for concentration in early cohorts, a specific pricing model, or a handoff failure between onboarding and ongoing success.

### Problem: Churn is concentrated in the first 90 days

**Symptoms:** Users sign up or buy, but fail to activate, complete implementation, invite teammates, or realize value quickly.

**Solution:** Move to the onboarding branch. Use `references/onboarding-milestone-map.md` to define day 0, 7, 30, and 90 milestones, intervention rules for missed milestones, and segment-specific touch models. Delay major upsell work until activation is stable.

### Problem: Health score is noisy or not predictive

**Symptoms:** Healthy accounts churn, red accounts renew, or the score cannot explain why an account is at risk.

**Solution:** Rebuild the score using `references/health-score-design-guide.md`. Remove vanity inputs, separate leading and lagging indicators, and test the score against recent churn and expansion outcomes before automating actions.

### Problem: Expansion prompts are ignored

**Symptoms:** Users hit limits or feature gates, but upgrade conversion stays weak, outreach is ignored, or sales says leads are unqualified.

**Solution:** Inspect the trigger quality with `references/trigger-playbook-matrix.md` and the example in `examples/expansion-trigger-review.md`. Check whether the signal reflects realized value, whether the buyer is identifiable, and whether the offer matches the adoption pattern.

### Problem: Renewals go red too late

**Symptoms:** Contracts enter the final 30 to 60 days without clear ROI evidence, stakeholder coverage, or an owner for open risks.

**Solution:** Implement `references/renewal-readiness-checklist.md` and require structured reviews at 180/120/90/60/30 days. Track proof of value, stakeholder map completeness, product blockers, legal blockers, and executive escalation triggers.

### Problem: Automated outreach caused complaints or poor deliverability

**Symptoms:** Low engagement, unsubscribe spikes, spam complaints, or discomfort about profiling and contact sourcing.

**Solution:** Pause the campaign and review `references/outreach-compliance-guardrails.md`. Confirm audience sourcing, lawful basis where required, unsubscribe handling, suppression lists, content relevance, and whether the automation relies on sensitive or opaque profiling.

## Related Skills

- `@ai-pricing` - Use when retention or expansion issues are primarily caused by packaging, plan design, or pricing architecture.
- `@ai-cold-outreach` - Use when the problem shifts from customer lifecycle design to outbound messaging and campaign execution.
- `@ai-sdr` - Use when expansion qualification needs outbound-style sales development follow-up.
- `@accessibility` - Use only if post-sale retention work reveals product accessibility issues affecting adoption.

## Additional Resources

### Local support pack

- [Retention metrics scorecard](references/retention-metrics-scorecard.md)
- [Cohort analysis worksheet](references/cohort-analysis-worksheet.md)
- [Health score design guide](references/health-score-design-guide.md)
- [Trigger playbook matrix](references/trigger-playbook-matrix.md)
- [Onboarding milestone map](references/onboarding-milestone-map.md)
- [Renewal readiness checklist](references/renewal-readiness-checklist.md)
- [Outreach compliance guardrails](references/outreach-compliance-guardrails.md)
- [Churn diagnostic prompt](examples/churn-diagnostic-prompt.md)
- [Expansion trigger review example](examples/expansion-trigger-review.md)
- [Renewal risk review example](examples/renewal-risk-review.md)

### External provenance and reference notes

The enhanced workflow is aligned to common SaaS retention and expansion operating practice, especially around:

- NRR and GRR definitions and interpretation
- cohort-based retention analysis
- health-score design and validation
- usage-based qualification and expansion triggers
- onboarding and time-to-value focus for early churn
- renewal-readiness windows and evidence capture
- compliance guardrails for automated outreach and profiling

Where the original imported text used specific benchmark percentages, this enhanced version treats them as optional heuristics unless the operator has company data or approved external benchmarks to support them.
