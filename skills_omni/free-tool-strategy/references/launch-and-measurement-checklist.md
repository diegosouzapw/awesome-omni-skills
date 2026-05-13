# Launch and Measurement Checklist

Use this checklist before approving a launch, relaunch, or major revision of a free tool.

## A. Strategy Readiness

- [ ] The target user and job-to-be-done are documented in one sentence.
- [ ] The tool solves a problem relevant to the company’s product, service, or category authority.
- [ ] Success criteria are defined beyond traffic alone.
- [ ] The team has decided whether the goal is awareness, qualified leads, product signups, or a combination.

## B. Page and UX Readiness

- [ ] The page explains what the tool does before requiring interaction.
- [ ] Time to first useful result is short enough to preserve intent.
- [ ] Inputs are limited to what the tool genuinely needs.
- [ ] Output is actionable, not generic or decorative.
- [ ] Error states and empty states still help the user proceed.
- [ ] Mobile usage is acceptable for the target audience.

## C. Search and Technical Discoverability

- [ ] The page can be crawled and is intended to be indexed.
- [ ] Important explanatory content is visible without relying on fragile rendering patterns alone.
- [ ] The title and page description communicate the task clearly.
- [ ] The page is not built around scaled low-value variations of the same concept.
- [ ] The page remains useful even if rankings are limited.
- [ ] Performance is good enough that responsiveness does not undermine completion.

## D. Trust and Conversion Design

- [ ] Users can evaluate the tool’s value before a gate, or the gate is clearly justified.
- [ ] Any form asks only for information proportional to the value exchange.
- [ ] Follow-up expectations are stated clearly near submission.
- [ ] Limitations, assumptions, or data freshness are disclosed where they affect interpretation.
- [ ] The tool does not rely on deceptive urgency, hidden defaults, or confusing consent patterns.

## E. Event Model

Define only the events needed to answer whether the tool works.

Minimum recommended funnel:

1. `tool_landing_view`
2. `tool_started`
3. `tool_completed`
4. `result_primary_action` — copy, export, save, share, or equivalent
5. `lead_form_view` — if a form exists
6. `lead_submitted`
7. `qualified_outcome` — if downstream CRM or product linkage exists

For each event, document:

- trigger condition
- event name
- key properties
- owner
- reporting destination

## F. Reporting Questions

The launch is measurable if the team can answer these questions within a week or two:

- What percentage of landing visitors start the tool?
- What percentage of starters complete it?
- Which inputs or states correlate with abandonment?
- What percentage of completers take the next meaningful action?
- How many leads were generated?
- Are those leads better, worse, or equal in quality versus other channels?

## G. Post-Launch Review Cadence

### First 72 hours

- [ ] Confirm page availability and basic analytics flow.
- [ ] Spot-check event firing for core steps.
- [ ] Review obvious UX failures or broken states.

### First 2 weeks

- [ ] Review start-to-complete conversion.
- [ ] Review qualitative trust issues from users or internal reviewers.
- [ ] Compare lead rate against expectation.
- [ ] Check whether traffic sources align with the intended audience.

### First 30–45 days

- [ ] Review lead quality, not just volume.
- [ ] Decide whether to expand, refine, reposition, or retire the tool.
- [ ] Document learnings for future free-tool launches.

## Common Go / No-Go Mistakes

Do not approve launch when:

- the tool exists mainly to target keywords rather than solve a real task
- the page has no owner for analytics review
- lead capture is prioritized over user value
- output trustworthiness is uncertain
- the team cannot explain what success should look like after launch
