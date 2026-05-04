---
name: "form-cro"
description: "Form Conversion Rate Optimization (Form CRO) workflow skill. Use this skill when the user needs Optimize any form that is NOT signup or account registration \u2014 including lead capture, contact, demo request, application, survey, quote, and checkout forms and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "fullstack-web"
tags:
  - "form-cro"
  - "forms"
  - "conversion"
  - "ux"
  - "checkout"
  - "lead-gen"
  - "accessibility"
  - "analytics"
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
license: "Unknown"
date_added: "2026-04-15"
date_updated: "2026-05-04"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "form-cro"
family_name: "Form Conversion Rate Optimization (Form CRO)"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/form-cro"
upstream_skill: "skills/form-cro"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "form-cro"
---

# Form Conversion Rate Optimization (Form CRO)

## Overview

Use this skill to optimize forms that are **not** signup or account-registration flows, including:
- lead capture forms
- contact forms
- demo request forms
- quote/request-for-pricing forms
- booking or appointment forms
- application forms
- survey forms
- donation forms
- checkout and purchase-supporting forms

Preserve upstream workflow, copied support files, and provenance during implementation or handoff.

This skill is for improving **completion rate, completion quality, and recovery from friction** without reducing necessary data quality, accessibility, consent clarity, or instrumentation.

Core stance:
- optimize for the form's business job first
- remove or defer fields only when they do not justify their friction
- treat validation, mobile usability, and error recovery as conversion issues
- instrument the form as a measurable funnel, not a black box
- preserve user input whenever possible during failures and retries

## When to Use

Use this skill when the user needs to:
- audit or improve a low-converting non-registration form
- reduce abandonment on a contact, quote, demo, checkout, or application flow
- simplify fields, labels, layout, validation, or submit behavior
- decide whether a form should stay single-step or become multi-step
- improve mobile completion, autofill, accessibility, or error recovery
- add form analytics so optimization can be measured instead of guessed

Do **not** use this skill as the primary workflow for:
- signup or account-registration optimization
- identity, legal, or compliance interpretation beyond UX implementation
- payment gateway integration redesign unrelated to form UX
- deceptive patterns such as forced opt-ins, disguised consent, or hidden costs

## Inputs

Collect as many of these as possible before changing the form:
- form URL, component file, or design artifact
- form type and business goal
- current fields and which are required
- traffic source or user intent, if known
- device split, especially mobile share
- baseline metrics: view rate, start rate, completion rate, error rate, abandonment point
- validation rules and backend constraints
- legal/compliance requirements for required fields, consent, and disclosures
- analytics already in place

If data is missing, proceed with a structured heuristic audit and clearly label assumptions.

## Output Format

Return results in a concrete operator-ready format.

Your default output should contain these sections in order:
1. **Form Summary** — form type, business goal, audience, and main friction hypothesis
2. **Observed Issues** — prioritized list of conversion blockers with severity
3. **Recommended Changes** — field, layout, validation, mobile, trust, and measurement changes
4. **Implementation Notes** — exact copy, markup, behavior, or analytics details to change
5. **Measurement Plan** — events, funnel stages, and success metrics
6. **Risks / Tradeoffs** — what data could be lost, what legal or operational checks are needed
7. **Next Step** — the smallest safe change set to ship first

When reviewing an existing form, prefer a table like this:

| Area | Current behavior | Problem | Recommendation | Expected impact |
|---|---|---|---|---|
| Fields | Phone + company mandatory | High friction for low-intent leads | Make optional or defer | Higher starts and completions |
| Validation | Errors only after submit | Late recovery | Add inline validation for format-sensitive fields | Lower error abandonment |
| Mobile | Email keyboard not triggered | Slower entry | Use correct input type and autocomplete | Faster completion |

When rewriting or implementing, end with a **ship-ready change list** containing only actionable items.

## Workflow

1. **Define the form's job**
   - Identify the primary business outcome.
   - Identify the user's immediate goal.
   - Distinguish essential data from "nice to have" enrichment.
   - Check whether downstream teams truly use each field.

2. **Map the current friction path**
   - List visible fields, optional fields, hidden fields, consent blocks, and submit states.
   - Note where users must think, search memory, switch context, or fear commitment.
   - Identify likely abandonment points: first screen, validation, captcha, long text, payment, or unclear CTA.
   - Review desktop and mobile separately.

3. **Reduce or defer unnecessary data collection**
   - Remove fields that are not used or not needed at this stage.
   - Convert some required fields to optional if they are helpful but non-essential.
   - Defer advanced qualification until after the main conversion.
   - Consolidate duplicated questions.
   - Prefer smart defaults, autofill, and inferred values where appropriate.

4. **Improve structure, labels, and flow**
   - Prefer a simple single-column layout.
   - Keep labels persistent and close to fields; do not rely on placeholder-only labeling.
   - Group related fields with clear headings.
   - Use field-level help only where users are likely to hesitate.
   - Choose single-step unless the form is long enough that chunking clearly reduces cognitive load.

5. **Tune validation and error recovery**
   - Decide deliberately between browser-native and custom validation behavior.
   - Validate format-sensitive fields early enough to prevent wasted effort.
   - Show errors near the affected field using specific, corrective language.
   - Preserve entered values after errors and retries.
   - Move focus to a clear summary or first failing field when submission fails.

6. **Optimize mobile completion**
   - Use correct input types, autocomplete tokens, and inputmode values.
   - Trigger the right keyboard for email, phone, numeric, and URL fields.
   - Minimize long dropdowns and awkward date pickers when better patterns exist.
   - Keep tap targets comfortable and avoid layout shifts while typing.

7. **Reduce trust friction at the point of commitment**
   - Make the submit action explicit about what happens next.
   - Place reassurance near sensitive fields or the submit area.
   - Clarify privacy, pricing, response expectations, or card safety where relevant.
   - Remove ambiguous or overly aggressive CTA copy.

8. **Instrument the form as a funnel**
   - Track form viewed, started, field error, step progressed, submitted, success, and failure.
   - Capture the field or step causing errors without logging sensitive raw values.
   - Segment by device, traffic source, and major form variant.
   - Ensure success events reflect actual completion, not just button clicks.

9. **Ship the smallest meaningful test**
   - Prioritize changes with high impact and low implementation risk.
   - Avoid changing every variable at once if measurement matters.
   - Record hypotheses, expected effect, and rollback criteria.

## Examples

### Example 1: Lead capture form audit

**Input**
```text
Form type: B2B demo request
Fields: first name, last name, work email, phone, company, job title, company size, country, product interest, message
All fields required except message
Mobile traffic: 68%
Observed issue: high abandonment on first screen
```

**Output**
```text
Form Summary
- Goal: collect qualified demo requests
- Main friction hypothesis: too much required qualification before user commitment

Observed Issues
1. Too many required fields for top-of-funnel intent
2. Phone and company size create commitment anxiety
3. Mobile completion is slowed by long field list and likely keyboard switching

Recommended Changes
- Keep required: first name, last name, work email, company
- Make optional: phone, job title, company size, message
- Defer product interest to post-submit routing if possible
- Use single-column layout with persistent labels
- Add autocomplete and input types for name, email, tel, organization
- Change CTA from "Submit" to "Request demo"

Measurement Plan
- Track view, first interaction, validation error, submit attempt, success
- Track field_error events for email and phone format only
- Compare completion rate and qualified-meeting rate before/after
```

### Example 2: Checkout support form improvement

**Before**
```text
- Coupon code shown expanded by default
- Billing and shipping fields duplicated
- Errors appear only after submit at top of page
- Cardholder name and phone both required without explanation
```

**After**
```text
- Collapse coupon field behind an optional action
- Offer "billing same as shipping" by default when valid
- Show inline field errors and focus the first invalid field on submit
- Explain why phone is needed or make it optional if not operationally required
```

Expected result: fewer interruptions, faster completion, lower error-driven abandonment.

For a fuller worked example, open [`examples/worked-example.md`](examples/worked-example.md).

## Best Practices

Do:
- verify which fields are operationally necessary before removing or requiring them
- optimize around user intent and funnel stage
- keep labels visible at all times
- use explicit required/optional treatment consistently
- preserve user-entered values through validation and server-side failures
- instrument errors, starts, and completions as separate events
- review mobile behavior directly, not only desktop screenshots
- ensure error text explains how to fix the problem
- align CTA copy with the actual next step

Do not:
- remove fields that legal, payment, fulfillment, or routing systems actually require
- ask for sensitive information earlier than needed
- rely on placeholder text as the only label
- use vague error copy such as "invalid input" with no remedy
- fire success analytics on button click instead of confirmed completion
- collect sensitive raw values in analytics payloads
- force multi-step flow just because the form feels long without testing whether chunking helps
- use fear, deception, or hidden consent to lift apparent conversion

## Troubleshooting

**Symptoms:** High abandonment before first submit, especially on mobile.

**Solution:** Reduce visible required fields, shorten first-screen content, verify correct mobile keyboard/input semantics, and test whether one or two intimidating fields can be deferred.

**Symptoms:** Many submit attempts but low successful completion.

**Solution:** Audit validation timing, error clarity, and whether entered values are preserved after failure. Confirm that server-side errors are surfaced clearly and near relevant fields.

**Symptoms:** Users start the form but drop at a specific field.

**Solution:** Check whether the field is truly required, whether the label is ambiguous, whether formatting expectations are unclear, or whether the field introduces commitment anxiety.

**Symptoms:** Analytics says conversions are healthy, but backend completions are lower.

**Solution:** Verify that the success event is triggered only after confirmed completion, not on button click or optimistic client state.

**Symptoms:** Mobile users underperform desktop users by a wide margin.

**Solution:** Review keyboard types, autofill tokens, field spacing, dropdown usability, sticky footers, and any layout shifts caused by inline errors or virtual keyboard appearance.

**Symptoms:** Accessibility fixes seem to conflict with visual simplification.

**Solution:** Keep persistent labels, programmatic associations, descriptive errors, and logical focus order. Simplification should remove friction, not remove orientation.

## Additional Resources

- [`references/domain-notes.md`](references/domain-notes.md) — open this for decision tables on field reduction, step count, validation choice, semantic/mobile attributes, and analytics taxonomy.
- [`examples/worked-example.md`](examples/worked-example.md) — open this for a concrete before/after audit and implementation-style recommendation set.

## Related Skills

No related local skills were provided in the source context.
