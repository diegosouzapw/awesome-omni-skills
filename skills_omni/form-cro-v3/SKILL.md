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
date_updated: "2026-05-12"
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

Preserve the upstream intent:

- do **not** blindly remove fields
- do **not** optimize forms without business context
- do **not** trade accessibility, trust, consent clarity, or data quality for a short-term lift
- do **measure before and after** changes
- do keep upstream workflow, copied support files, and provenance intact when handing off

Treat Form CRO as a combined **UX + implementation + instrumentation** workflow. A good form change is only complete when the operator can explain:

1. what friction exists now,
2. what business or compliance constraint must remain,
3. what specific changes were made,
4. how the form behaves on mobile and with assistive technology, and
5. how success will be measured after release.

## When to Use

Use this skill when the form is already defined and the task is to improve completion behavior, submission quality, or user recovery from friction.

Typical form types:

- contact forms
- lead capture forms
- demo request forms
- quote request forms
- loan or service application forms
- survey or intake forms
- support request forms
- checkout or payment-adjacent forms
- booking or reservation forms

Use this skill when the operator needs to:

- reduce abandonment or hesitation
- improve field clarity and completion speed
- improve mobile entry and autofill success
- improve validation and error recovery
- improve trust cues, consent language, or expectation setting
- preserve required business data while lowering friction
- review implementation details such as labels, field types, grouping, and submission states

## When **Not** to Use

Do **not** use this skill as the primary workflow for:

- signup or account-registration flows
- authentication, password reset, or MFA flows
- identity verification or high-assurance KYC workflows where security policy dominates CRO
- major analytics architecture work not tied to a specific form
- broad landing-page CRO where the form itself is not the main bottleneck

Escalate or narrow scope when:

- no baseline metrics exist and the user expects a guaranteed lift
- the form is legally constrained and required disclosures cannot be changed
- backend validation rules are unknown and the operator cannot safely change field behavior
- success is defined only as “fewer fields” without regard to lead quality or downstream operations

## Inputs to Gather First

Before changing the form, collect as many of these as possible:

- form URL or source markup/component
- form type and business goal
- primary conversion event
- current metrics: starts, completions, error rate, abandonment, step drop-off, mobile/desktop split
- required fields versus nice-to-have fields
- known validation rules and backend constraints
- traffic source or campaign context
- consent/privacy requirements
- known accessibility requirements
- device, browser, or locale issues already reported

If metrics are missing, say so explicitly and treat recommendations as hypothesis-driven rather than validated.

## Workflow

1. **Classify the form and success criteria**
   - Identify the form type, primary audience, and true success event.
   - Define whether success means more submissions, higher-quality submissions, faster completion, fewer support contacts, or some combination.
   - Separate hard requirements from historical preferences.

2. **Map current friction before editing**
   - Walk through the form on desktop and mobile.
   - Note excessive field count, unclear labels, optional/required confusion, poor grouping, weak error handling, trust gaps, and multi-step drop-off risks.
   - Check whether the current UI blocks progress without helping recovery.

3. **Inspect implementation semantics**
   - Verify every control has a programmatically associated label.
   - Check `type`, `name`, `autocomplete`, `inputmode`, `required`, `aria-describedby`, and grouping with `fieldset`/`legend` where appropriate.
   - Confirm validation messaging appears near the field, is understandable, and is announced to assistive technology when relevant.
   - Use the reference notes for high-friction patterns and semantic checks: [references/domain-notes.md](references/domain-notes.md).

4. **Prioritize changes by impact and safety**
   - Remove only fields that are unneeded for the stated goal.
   - When a field must stay, reduce friction through clearer labels, better defaults, examples, masks only when justified, and better keyboard/autofill behavior.
   - Prefer reversible front-end changes before risky schema or backend changes.
   - Distinguish quick wins from changes that need experiment design or stakeholder approval.

5. **Redesign for completion and recovery**
   - Improve layout, sequencing, and visual hierarchy.
   - Put easier fields first when it helps momentum, but do not hide critical disclosures.
   - Use inline help only where users genuinely hesitate.
   - Design validation to prevent avoidable errors and help users recover quickly when errors occur.
   - Make submit states, loading states, and success/failure outcomes explicit.

6. **Protect trust, consent, and data quality**
   - Make purpose statements specific: what the user gets, what happens next, and how quickly.
   - Keep consent language separate from core action when legally appropriate.
   - Do not pre-check consent boxes unless policy explicitly permits it.
   - Avoid deceptive urgency, hidden enrollment, or vague follow-up promises.

7. **Define measurement and release plan**
   - Record baseline metrics and the exact variants or code changes being proposed.
   - Define what should improve and what must not regress: completion rate, valid submission rate, average time, field error rate, downstream qualification, accessibility defects.
   - If experimentation is unavailable, still specify how post-release monitoring will detect regressions.

8. **Document rationale and handoff**
   - Summarize the main friction points, changes made, expected impact, and risks.
   - Preserve provenance and any upstream support files.
   - Include unresolved constraints, especially backend validation or compliance blockers.

## Optimization Areas

### Field-level optimization

Focus on necessity, clarity, and ease of entry.

- Remove only fields that do not support the business goal or downstream process.
- Rewrite labels to be explicit and unambiguous.
- Prefer persistent labels over placeholder-only instructions.
- Split combined questions only when it reduces confusion.
- Use appropriate input types and input modes for email, phone, numeric, postal code, and date-related entry.
- Configure `autocomplete` tokens where supported.
- Mark optional fields clearly instead of forcing users to infer.

### Layout and flow

- Group related inputs logically.
- Keep one-column layouts unless there is a strong reason otherwise.
- Avoid visually dense blocks that make scanning hard on mobile.
- For multi-step forms, ensure each step has a clear purpose and avoid hiding major effort until late in the flow.
- Show progress only when it is truthful and stable.

### Validation and error recovery

- Prevent obvious errors early when possible.
- Do not rely only on color to signal errors.
- Keep error text specific, adjacent to the field, and actionable.
- Preserve user-entered values after validation failure.
- Do not trap the user in loops caused by front-end and backend rule mismatch.

### Trust and expectation setting

- Explain why sensitive data is needed.
- State follow-up timing where relevant.
- Make pricing, eligibility, or contact expectations visible before submission.
- Remove copy that sounds manipulative or evasive.

### Submission experience

- Make the primary action label explicit, such as `Request quote` instead of `Submit` when the action is specific.
- Disable duplicate submissions safely.
- Show loading states when requests take noticeable time.
- Return a confirmation state that explains next steps.

## Best Practices

Do:

- measure the current form before changing it
- optimize for both completion rate and submission quality
- use proper labels, field grouping, and standards-based input semantics
- make mobile keyboard choice intentional with correct `type` and `inputmode`
- preserve values and focus users on the first actionable error after validation failure
- state required versus optional fields clearly
- verify the happy path and the error path on mobile and desktop
- test with autofill where name, email, phone, address, or payment-adjacent fields are involved
- keep consent and purpose text understandable and specific
- document which changes are safe UI refinements versus backend-dependent changes

Do not:

- remove fields without understanding why downstream teams use them
- replace labels with placeholders as the only instructions
- use custom controls that reduce accessibility or keyboard usability without strong justification
- block submission with generic messages like `Invalid input` when field-specific guidance is possible
- introduce formatting masks that fight paste, autofill, or international formats unless truly required
- treat all abandonment as a field-count problem
- hide legal, pricing, eligibility, or consent information until after the user has committed
- assume a conversion lift is valid if lead quality or successful fulfillment drops

## Troubleshooting

**Symptoms:** Autofill does not populate expected fields, or users report repeated manual entry.

**Solution:** Check for correct `autocomplete` tokens, stable field names, proper label association, and realistic field splitting. Avoid decorative wrappers or custom widgets that break browser heuristics. Review the semantic checklist in [references/domain-notes.md](references/domain-notes.md).

**Symptoms:** Mobile users abandon on numeric, phone, or date-like fields.

**Solution:** Verify `type` and `inputmode` match the expected input. Remove unnecessary masks, reduce forced punctuation, and confirm the mobile keyboard supports the intended format. Test copy-and-paste behavior, not just manual typing.

**Symptoms:** Users hit validation errors repeatedly and cannot tell how to recover.

**Solution:** Make errors field-specific, adjacent, and actionable. Preserve entered values, move focus to the first unresolved issue after submit, and ensure frontend rules do not conflict with backend validation requirements.

**Symptoms:** Multi-step forms have sharp drop-off after the first or second step.

**Solution:** Re-check whether the step split reflects user mental models. Move low-value fields later, surface effort earlier, and make progress indicators truthful. If a later step contains surprise requirements, expose them sooner.

**Symptoms:** Submission count improves, but lead quality or completion validity worsens.

**Solution:** Rebalance the optimization target. Restore or redesign qualifying questions instead of removing them outright. Compare valid submissions, downstream qualification, and support burden alongside raw completion rate.

**Symptoms:** Accessibility review flags unclear instructions or poor screen-reader error announcements.

**Solution:** Add explicit labels, connect help and errors with `aria-describedby` where needed, group related controls with `fieldset` and `legend`, and ensure error states are perceivable without relying only on color or placeholder text.

## Examples

### Example 1: Lead capture form review

```text
Input
- Form type: demo request
- Fields: name, work email, company, phone, team size, free-text message
- Problem: strong mobile drop-off on phone field and repeated validation failures
- Constraint: sales requires company and work email; phone is optional

Expected optimization direction
- Keep company and work email
- Mark phone clearly optional
- Change phone input to mobile-friendly semantics
- Remove strict formatting mask if backend accepts normalized numbers
- Add inline error text explaining accepted formats only when validation fails
- Update submit label from "Submit" to "Request demo"
- Measure phone-field error rate and mobile completion rate after release
```

### Example 2: Quote request form with trust friction

```html
<!-- Before -->
<input placeholder="Email">
<input placeholder="Phone">
<textarea placeholder="Tell us what you need"></textarea>
<button>Submit</button>
```

```html
<!-- After -->
<label for="email">Work email</label>
<input id="email" name="email" type="email" autocomplete="work email" required>

<label for="phone">Phone (optional)</label>
<input id="phone" name="phone" type="tel" inputmode="tel" autocomplete="tel">

<label for="details">Project details</label>
<textarea id="details" name="details" aria-describedby="details-help"></textarea>
<p id="details-help">Include timeline, budget range, or scope if known.</p>

<p>We use this information to prepare an accurate quote. We reply within 1 business day.</p>
<button type="submit">Request quote</button>
```

Expected outcome:

- clearer field purpose
- improved autofill and mobile entry
- reduced ambiguity around optional phone collection
- stronger trust through explicit expectation setting

### Example 3: Worked optimization plan

Open [examples/worked-example.md](examples/worked-example.md) for a full before/after review with concrete findings, proposed edits, and measurement notes.

## Additional Resources

- [references/domain-notes.md](references/domain-notes.md) — open during implementation or review for semantic field setup, autocomplete guidance, validation and accessibility checks, and high-friction pattern notes.
- [examples/worked-example.md](examples/worked-example.md) — open when you need a realistic end-to-end example showing how to turn a form audit into concrete changes and measurable outcomes.

## Related Skills

No confirmed local related skills were provided in the source context.
