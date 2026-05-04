---
name: "form-cro-v3"
description: "Form Conversion Rate Optimization (Form CRO) workflow skill. Use this skill when the user needs optimize any form that is NOT signup or account registration \u2014 including lead capture, contact, demo request, application, survey, quote, and checkout forms \u2014 while preserving the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "fullstack-web"
tags:
  - "form-cro-v3"
  - "form-cro"
  - "form-optimization"
  - "conversion"
  - "lead-forms"
  - "checkout"
  - "accessibility"
  - "validation"
  - "autocomplete"
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
license: "SEE-UPSTREAM-REPOSITORY"
date_added: "2026-04-27"
date_updated: "2026-05-04"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "form-cro-v3"
family_name: "Form Conversion Rate Optimization (Form CRO)"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/form-cro-v3"
upstream_skill: "skills/form-cro-v3"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "form-cro-v3"
---

# Form Conversion Rate Optimization (Form CRO)

## Overview

Use this skill to improve completion rate and submission quality for forms that are **not** signup or account-registration flows.

This skill preserves the upstream intent: optimize forms without blindly removing fields, without treating conversion as copy-only work, and without breaking business usefulness, accessibility, autofill, or measurement.

Treat Form CRO as a combined **UX + implementation + instrumentation** workflow:

- diagnose where users drop off
- reduce unnecessary friction
- preserve semantic HTML and progressive enhancement
- make validation recoverable and accessible
- improve mobile entry speed
- measure the effect of changes

## When to Use

Use this skill when the user needs help with any of the following:

- lead capture forms
- contact forms
- demo request forms
- quote request forms
- application forms
- survey forms
- checkout forms
- multi-step or long single-page forms with noticeable abandonment
- forms that feel slow, confusing, error-prone, or hard to complete on mobile
- forms with low start-to-submit conversion and available analytics or session evidence

Use this skill especially when the operator can inspect or change one or more of these layers:

- field list and field order
- labels, help text, and submit CTA copy
- validation behavior and error recovery
- semantic HTML attributes
- mobile input behavior
- analytics events or funnel tracking
- step structure, review step, or progressive disclosure

## Do Not Use

Do **not** use this skill as the primary workflow for:

- account creation or registration forms
- login, password reset, MFA, or authentication-specific UX
- backend anti-fraud or identity verification redesign
- payment processor internals or unsupported platform-specific checkout APIs
- legal/compliance policy decisions that need specialist review
- experiments that cannot be measured at all

If the task is mainly signup or registration optimization, route to the more appropriate signup-focused skill instead of forcing this workflow.

## Success Criteria

A good Form CRO pass should improve one or more of these measurable outcomes **without reducing required data quality**:

- higher form start rate
- higher completion/submission rate
- lower abandonment at a known step or field cluster
- fewer validation failures per submission attempt
- faster median completion time
- better mobile completion rate
- fewer duplicate or low-quality submissions caused by unclear design

## Workflow

1. **Define the form type, business goal, and hard constraints.**
   - Identify the form category: lead, contact, demo, quote, application, survey, or checkout.
   - Separate required business/legal fields from "nice to have" fields.
   - Confirm whether the operator may change markup, copy, validation, analytics, or only content.

2. **Map the current funnel before changing anything.**
   - Identify measurable stages such as `view -> start -> field interaction -> validation error -> submit attempt -> success`.
   - Look for device splits, especially mobile vs desktop.
   - If analytics are weak, use available evidence such as event logs, screenshots, recordings, support tickets, or QA notes.

3. **Inspect form semantics and implementation quality.**
   - Confirm it uses a real HTML `<form>` with proper labels and submit behavior.
   - Check field names, stable identifiers, input types, `autocomplete`, `inputmode`, and error messaging.
   - Verify that validation does not erase entered values after failure.
   - Open `references/domain-notes.md` for the field and validation matrix while reviewing markup.

4. **Prioritize friction by severity, not by taste.**
   - Find blockers first: broken submit path, hidden required fields, inaccessible errors, poor mobile keyboard choice, impossible validation rules.
   - Then find high-likelihood conversion drags: unclear labels, over-collection, redundant questions, premature mandatory fields, weak trust signals.
   - Distinguish between issues that hurt all users and issues limited to a specific form type or device.

5. **Propose narrowly scoped changes with a rationale.**
   - For each change, state the expected benefit, affected metric, and implementation risk.
   - Prefer reversible changes that preserve semantics and user data.
   - Avoid removing fields that are operationally required unless the user explicitly approves the tradeoff.

6. **Optimize field behavior and flow.**
   - Use native input types and autofill-friendly attributes.
   - Reduce typing effort through better defaults, grouping, conditional reveal, or clearer examples.
   - For long forms, decide whether a single page, stepper, or hybrid review flow is best.

7. **Improve validation and error recovery.**
   - Make validation specific, visible, and tied to the field.
   - Preserve previous input after an error or server-side rejection.
   - Move users directly to actionable fixes instead of forcing a full restart.

8. **Tune mobile entry and perceived effort.**
   - Match the mobile keyboard to the expected value.
   - Keep labels visible; do not rely on placeholders as the only instruction.
   - Reduce awkward scrolling, dense field clusters, and accidental taps near the submit CTA.

9. **Define instrumentation for the recommended changes.**
   - Ensure the revised flow can measure starts, field-level friction, submit attempts, and success.
   - Add or recommend event naming that supports before/after comparison.
   - If implementation is out of scope, explicitly list the events needed for validation.

10. **Deliver the CRO plan with evidence and safeguards.**
   - Provide prioritized findings, proposed changes, expected effect, and follow-up metrics.
   - Include accessibility and semantic implementation notes.
   - If helpful, model the output after `examples/worked-example.md`.

## Form-Specific Guidance

### Lead / Contact / Demo Request

Focus on reducing uncertainty and unnecessary qualification friction.

- Ask only for data needed for the next business step.
- Prefer one clear goal over several competing CTAs.
- If sales qualification is required, consider delaying some questions until after the initial submit.
- Clarify response expectations such as "We reply within 1 business day."

### Quote Request

Focus on progressive disclosure and context.

- Collect just enough information to produce or route a quote.
- Use conditional sections instead of showing every possible option up front.
- Explain why specialized questions are being asked.

### Application Forms

Focus on resumability, clarity, and error recovery.

- Long forms need strong sectioning and clear progress.
- Preserve data aggressively after validation or timeout issues.
- Avoid hidden requirements discovered only at submission time.

### Survey Forms

Focus on completion momentum and respondent confidence.

- Keep answer formats consistent where possible.
- Avoid unnecessary required questions.
- Use branching only when it reduces effort more than it adds complexity.

### Checkout Forms

Focus on trust, speed, and recoverability.

- Minimize distractions near the transaction path.
- Use payment, address, and contact semantics correctly.
- Keep totals, fees, and shipping expectations visible.
- Never let validation failures wipe out critical checkout progress.

## Best Practices

### Do

- Do measure the current funnel before recommending redesigns.
- Do preserve semantic HTML forms and native browser capabilities.
- Do use specific `autocomplete` tokens where they fit the field.
- Do use appropriate `type`, `inputmode`, and `enterkeyhint` values for mobile entry.
- Do keep labels persistently visible and connect them programmatically to inputs.
- Do make error messages specific, local to the field, and easy to recover from.
- Do preserve user-entered values after validation or server-side failures.
- Do state the business tradeoff when suggesting field removal or deferral.
- Do separate required data from data that is merely convenient for internal teams.
- Do make every recommendation traceable to an expected metric impact.

### Do Not

- Do not optimize only for fewer fields; optimize for successful completion and usable submissions.
- Do not replace semantic form controls with custom widgets unless there is a strong reason.
- Do not use placeholders as the only label or instruction.
- Do not use vague validation like "Invalid input" when the actual fix can be stated.
- Do not clear the form after a failed submit.
- Do not break autofill by using unstable names, odd field splitting, or incorrect tokens.
- Do not hide key costs, commitments, or follow-up expectations near submission.
- Do not recommend A/B testing language if there is no practical way to measure outcomes.

## Examples

### Example 1: Lead Form Review

**Input**

```text
A B2B demo request form has 11 fields on one page. Mobile completion is much lower than desktop. Users often abandon after phone number and company size. Errors appear only at the top after submit.
```

**Expected output characteristics**

```text
- Identify the likely friction points by field and device context.
- Recommend which fields can be deferred or made optional.
- Replace top-only generic error handling with field-level recovery.
- Specify better mobile attributes for phone/email fields.
- Propose a funnel/event plan for before-vs-after measurement.
```

### Example 2: Markup-Level Fix

**Before**

```html
<input placeholder="Email" name="userEmail">
<input placeholder="Phone" name="phoneField">
<button>Send</button>
```

**After**

```html
<label for="email">Work email</label>
<input id="email" name="email" type="email" autocomplete="email" inputmode="email">

<label for="tel">Phone number</label>
<input id="tel" name="tel" type="tel" autocomplete="tel" inputmode="tel">

<button type="submit">Request demo</button>
```

**Why this is better**

```text
- Visible labels improve clarity and accessibility.
- Native types and autocomplete improve autofill and mobile entry.
- Stable, conventional field naming reduces implementation friction.
- CTA text matches the user outcome instead of generic "Send" wording.
```

### Example 3: Worked CRO Plan

Open `examples/worked-example.md` when the operator needs a concrete end-to-end example showing diagnosis, recommendation format, field-level fixes, and success metrics for a realistic form.

## Troubleshooting

**Symptoms:** The form already has decent copy, but completion is still poor.

**Solution:** Check implementation and measurement quality before rewriting text again. Common causes are wrong mobile keyboards, broken autofill, inaccessible validation, hidden required fields, or a missing distinction between start and submit in analytics.

**Symptoms:** Stakeholders want to remove many fields, but operations still need the data.

**Solution:** Reframe the problem as timing and necessity. Recommend deferring non-essential questions, using conditional reveal, or collecting follow-up information after submission instead of cutting critical data blindly.

**Symptoms:** Users see errors only after pressing submit.

**Solution:** Add clear field-level error association, preserve entered values, and move focus to the first actionable issue after failed submission. Ensure the error text explains the fix, not just the failure.

**Symptoms:** Mobile completion is much worse than desktop.

**Solution:** Audit `type`, `inputmode`, tap spacing, keyboard flow, field grouping, and step length. Check whether the form forces excessive typing or uses desktop-oriented layouts that become awkward on small screens.

**Symptoms:** Checkout or application users drop off late in the flow.

**Solution:** Review trust, transparency, and recoverability near the final step. Show costs, requirements, and next-step expectations clearly. Ensure users do not lose progress after server-side errors or payment/validation failures.

**Symptoms:** Autofill stopped working after a redesign.

**Solution:** Inspect field names, labels, `autocomplete` tokens, and custom components. Restore semantically correct input types and stable field identity before making visual changes.

## Additional Resources

- `references/domain-notes.md` — Open this during implementation or review for the field semantics matrix, validation guidance, mobile-entry attributes, and an error-recovery checklist.
- `examples/worked-example.md` — Open this when you need a concrete model for turning observations into a prioritized CRO recommendation set with measurable success criteria.

## Related Skills

No local related skills were provided in the source context. Do not invent them; route manually if the task turns out to be signup-specific or primarily analytics-platform-specific.
