# Free Tool Review Criteria

Use this rubric when reviewing a free tool as an engineering-as-marketing asset. The goal is not to award points for activity; it is to determine whether the tool deserves to exist as a useful product surface.

## 1. User Value

Pass if most of the following are true:
- The target user and decision context are specific.
- The tool returns a meaningful answer, estimate, score, comparison, or artifact in one session.
- A user would still benefit even if they never speak to sales.
- The output is specific enough to influence a real choice.

Fail signals:
- Output is generic advice dressed up as personalization.
- The tool mostly collects information and returns little value.
- The "result" is just a CTA to book a demo.

## 2. Differentiation and Credibility

Pass if:
- The logic, model, benchmark, or data source is defensible.
- Assumptions are disclosed where relevant.
- The tool reflects real domain expertise, not generic template content.

Fail signals:
- Hidden formulas drive high-stakes recommendations with no explanation.
- Claims imply precision the model cannot support.
- Near-identical alternatives already exist and this one adds no new value.

## 3. Search and Discoverability Readiness

Pass if:
- The landing page clearly explains what the tool does, for whom, and what output to expect.
- Important explanatory content is available as crawlable text.
- The page is not dependent on fragile rendering for basic comprehension.
- Result explanations are useful enough to earn links, bookmarks, or sharing.

Fail signals:
- The page is mostly a shell around client-side interactions.
- Tool states cannot be understood without executing brittle JavaScript.
- The plan depends on many thin variants or low-value programmatic pages.

## 4. JavaScript and UX Execution Risk

Pass if:
- Inputs, labels, and result summaries remain understandable when rendering is delayed.
- Slow interactions, layout shift, or blocking scripts are treated as launch risks.
- Error handling exists for invalid input, missing dependencies, or empty states.

Fail signals:
- Critical result text only appears after complex client-side execution with no fallback explanation.
- Large layout shifts or delayed interactions make the tool frustrating.
- Validation errors are unclear or silent.

## 5. Conversion Design

Pass if:
- The primary CTA matches the value produced by the tool.
- Users can access core value before a conversion ask in most cases.
- Optional capture points feel like a next step, not a toll gate.

Fail signals:
- Email capture happens before any credible output.
- Multiple CTAs compete with the tool experience.
- The tool is obviously a disguised lead form.

## 6. Measurement and Analytics

Pass if:
- The team can distinguish visit, tool start, result generation, export/share, and lead creation.
- Lead creation uses a recommended event such as `generate_lead` where applicable.
- Funnel drop-off can be diagnosed without mixing usage and conversion events.

Fail signals:
- Only pageviews are tracked.
- The team uses vague custom event names that obscure meaning.
- No event exists for the moment a useful result is produced.

## 7. Structured Data and SERP Eligibility

Check whether structured data is appropriate, not mandatory.

Pass if:
- The team understands whether the page qualifies for software-related markup.
- Structured data reflects the real on-page experience.
- Markup is treated as supporting metadata, not as the growth strategy.

Fail signals:
- Markup is added to compensate for weak content.
- The markup describes capabilities the user cannot actually access.

## 8. Privacy, Consent, and Trust

Pass if:
- Only necessary data is collected.
- Contact capture is clearly optional unless truly required.
- Email follow-up expectations are stated.
- Sensitive inputs are justified and handled carefully.

Fail signals:
- The tool collects excessive personal or company data for a simple calculation.
- Follow-up flows are unclear or overly aggressive.
- Trust depends on hidden retention or sharing assumptions.

## 9. Recommended Dispositions

### Launch
Use when the tool is clearly useful, technically credible, measurable, and conversion-safe.

### Revise
Use when the core idea is strong but blocked by one or two major issues such as weak output explanation, poor CTA timing, or rendering/indexability risk.

### Pilot
Use when the tool has promise but assumptions, benchmarks, or demand fit still need validation with a narrower audience.

### Reject
Use when utility is weak, the idea is mostly SEO-first, or conversion depends on gating instead of value.

## Quick Review Prompt

Use this structure in your review notes:
1. Target user and decision
2. Immediate value before signup
3. Output quality and credibility
4. Discoverability and rendering risk
5. Conversion design
6. Measurement plan
7. Privacy/trust concerns
8. Final disposition: launch, revise, pilot, or reject
