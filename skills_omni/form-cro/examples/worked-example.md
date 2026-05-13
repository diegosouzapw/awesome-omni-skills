# Worked Example: Quote Request Form Optimization

## Scenario

A service business has a quote request form with low completion on mobile.

### Current form
- Full name
- Email
- Phone
- Company
- Service needed
- Budget range
- Timeline
- Project details
- How did you hear about us?
- Consent checkbox

### Current behavior
- All fields except "How did you hear about us?" are required
- Errors appear only after submit, at the top of the page
- Phone uses a plain text input
- Email has no autofill hint
- Submit button says "Submit"
- Analytics only track button clicks

### Known context
- Mobile traffic: 72%
- Business goal: generate qualified quote requests
- Operations team says email and service needed are essential; phone is useful but not mandatory
- Budget is helpful for sales prioritization, not necessary for first response

## Audit output

### 1. Form Summary
- Form type: quote request
- User intent: ask for help and learn next steps
- Main friction hypothesis: the form asks for too much commitment before trust is established, especially on mobile

### 2. Observed Issues

| Priority | Issue | Why it hurts conversion |
|---|---|---|
| High | Too many required fields | Users must commit detailed information before knowing response value |
| High | Error handling only after submit | Users discover problems late and may abandon rather than repair |
| High | Phone required without rationale | Creates contact anxiety and slows mobile completion |
| Medium | Generic CTA | Does not tell the user what happens next |
| Medium | Weak instrumentation | Team cannot distinguish starts, errors, attempts, and true completions |

### 3. Recommended Changes

#### Fields
- Keep required: full name, email, service needed, consent
- Make optional: phone, company, budget range, timeline, project details
- Keep referral source optional
- If sales insists on budget, collect it after the quote request is accepted or in a follow-up step only when justified

#### Layout and copy
- Use single-column layout
- Group fields as:
  1. Contact details
  2. Request details
  3. Consent and submit
- Change CTA from `Submit` to `Request a quote`
- Add reassurance near submit: `We will review your request and reply within 1 business day.`

#### Validation and recovery
- Validate email format inline or on blur with clear text
- Keep server-side validation as source of truth
- On failure, preserve all entered values
- Focus first invalid field after submit and show local error text

#### Mobile semantics
- Use `type="email" autocomplete="email"`
- Use `type="tel" autocomplete="tel"` for phone
- Use appropriate autocomplete tokens for name and organization
- Ensure error messages do not push the submit button off-screen unexpectedly

### 4. Implementation Notes

Example behavior changes:

**Before**
```text
Phone *
[____________]

Submit
```

**After**
```text
Phone (optional)
[____________]
We'll only call if email follow-up fails.

Request a quote
```

Example error copy:

**Bad**
```text
Invalid input
```

**Better**
```text
Enter a valid work email, for example name@company.com.
```

### 5. Measurement Plan

Track these events:
- `form_view`
- `form_start`
- `field_error` with `field_name` and `error_type`
- `submit_attempt`
- `form_success`
- `form_failure`

Primary success metrics:
- completion rate
- submit-success rate
- mobile completion rate

Secondary business metrics:
- qualified quote rate
- response-to-close rate
- lead quality review after reducing required fields

### 6. Risks / Tradeoffs
- Making phone optional may reduce immediate callback opportunities
- Removing budget from required fields may reduce early qualification data
- Sales or operations should confirm whether any field supports mandatory routing or compliance

### 7. Smallest Safe First Release
1. Make phone, company, budget, timeline, and project details optional
2. Add semantic input types and autocomplete
3. Improve error placement and preserve values on failure
4. Change CTA and add response expectation copy
5. Add proper funnel events

## Expected before/after outcome

### Before
- High first-submit failure
- Mobile users slowed by unnecessary required fields
- Analytics overreport success because button clicks are counted

### After
- Faster starts and completions
- Lower error-driven abandonment
- Better ability to judge whether conversion improved without harming lead quality
