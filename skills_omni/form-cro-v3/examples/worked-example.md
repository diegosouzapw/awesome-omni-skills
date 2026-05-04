# Worked Example: Demo Request Form CRO Review

## Scenario

A B2B SaaS company has a demo request form with these fields on one page:

1. First name
2. Last name
3. Work email
4. Phone number
5. Company name
6. Company size
7. Job title
8. Country
9. Product interest
10. Free-text use case
11. Consent checkbox

Observed issues:

- Mobile completion is 38% lower than desktop.
- Many sessions reach the phone field and then abandon.
- Validation errors appear in a summary at the top only after submit.
- The form uses placeholders as the main visible instruction for several fields.
- The CTA says `Submit`.
- Analytics can measure page view and successful submit, but not form start or failed attempts.

## Example Output

### 1. Goal and Constraints

- **Primary business goal:** create qualified demo requests for the sales team.
- **Hard constraints:** consent must remain; sales still needs company context.
- **Optimization principle:** improve completion without lowering lead usefulness.

### 2. Funnel Diagnosis

Current measurable funnel:

- page view
- successful submit

Missing instrumentation that should be added or requested:

- form start
- first field interaction
- validation error occurrence
- submit attempt
- success
- abandonment by device class

Initial risk assessment:

- The biggest measurable blind spot is the gap between page view and success.
- Mobile underperformance suggests input friction, poor keyboard matching, or high typing burden.
- Phone and company-size questions are likely acting as qualification friction.

### 3. Prioritized Findings

#### High Priority

1. **Phone field likely creates avoidable friction early in the flow.**
   - Many users abandon around this field.
   - If sales can follow up first by email, phone should be optional or deferred.

2. **Error recovery is weak.**
   - Users only see a summary after submit.
   - They must scan back through the form to find the exact problem.

3. **Placeholder-led labeling reduces clarity and accessibility.**
   - Once the user starts typing, the cue disappears.
   - This is especially harmful in long mobile forms.

#### Medium Priority

4. **CTA is generic.**
   - `Submit` does not reinforce the user outcome.

5. **Instrumentation is insufficient for before/after evaluation.**
   - The team cannot confirm whether changes improve start-to-submit conversion or just page traffic quality.

### 4. Recommended Changes

#### A. Reorder and reduce immediate friction

- Move `Work email` and `Company name` earlier.
- Make `Phone number` optional or move it below the main business-context questions.
- Evaluate whether `Company size` can become optional or a later follow-up question.

**Expected effect:** lower abandonment in the early-middle part of the form, especially on mobile.

#### B. Replace placeholder-only fields with visible labels

**Before**

```html
<input name="email" placeholder="Work email">
<input name="phone" placeholder="Phone number">
```

**After**

```html
<label for="email">Work email</label>
<input id="email" name="email" type="email" autocomplete="email" inputmode="email">

<label for="tel">Phone number (optional)</label>
<input id="tel" name="tel" type="tel" autocomplete="tel" inputmode="tel">
```

**Expected effect:** better clarity, autofill support, and mobile entry.

#### C. Improve validation and recovery

- Show field-level errors next to or associated with the relevant field.
- Preserve all entered values after a failed submit.
- Move focus to the first error after a submission failure.

**Example error rewrite**

- Weak: `Invalid input`
- Better: `Enter a valid work email address, for example name@company.com`

**Expected effect:** fewer failed retries and lower frustration on long or mobile sessions.

#### D. Strengthen CTA and expectation setting

- Change CTA from `Submit` to `Request demo`.
- Add brief reassurance such as `We’ll contact you within 1 business day.` if operationally true.

**Expected effect:** clearer outcome and reduced uncertainty.

#### E. Add minimum viable instrumentation

Recommend tracking these events:

- `demo_form_view`
- `demo_form_start`
- `demo_form_submit_attempt`
- `demo_form_validation_error`
- `demo_form_submit_success`

Recommended dimensions:

- device class
- page variant
- error field name

**Expected effect:** enables before/after measurement rather than opinion-based iteration.

### 5. Suggested Priority Order

1. Fix labels, semantic attributes, and validation recovery.
2. Revisit field order and optionality for phone/company size.
3. Update CTA and expectation-setting copy.
4. Add instrumentation for start, attempt, and validation errors.

### 6. Success Metrics

Measure before vs after for at least:

- form start rate
- submit success rate
- mobile completion rate
- validation error rate per attempt
- abandonment rate around phone and company-size interactions

### 7. Non-Goals for This Pass

- No redesign of sales qualification rules beyond field timing and necessity.
- No backend CRM workflow changes.
- No signup/account flow work.

## Why This Example Is Useful

This example shows the expected shape of a strong Form CRO deliverable:

- clear business goal
- measurable diagnosis
- field-level implementation detail
- accessibility and recovery improvements
- prioritized recommendations
- explicit success metrics
