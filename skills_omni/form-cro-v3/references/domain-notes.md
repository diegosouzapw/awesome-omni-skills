# Form CRO Domain Notes

Use this file during implementation review when you need compact, source-aligned checks that are too detailed for the main skill.

## 1) Semantic Field Setup Quick Check

For each form control, verify:

- a visible label is programmatically associated with the control
- the control uses an appropriate HTML input `type`
- `autocomplete` is present when the field maps to a known user data category
- `inputmode` is set when it improves mobile keyboard choice
- `required` is used only when the field is actually mandatory
- supporting help or error text is associated via `aria-describedby` when needed
- related controls are grouped with `fieldset` and `legend`

Why it matters:

- better autofill success
- faster completion on mobile
- fewer avoidable validation errors
- better screen-reader comprehension

## 2) Common High-Friction Fields

| Field type | Frequent failure mode | Better default |
|---|---|---|
| Phone | strict mask rejects valid formats or pasted values | prefer `type="tel"`, `inputmode="tel"`, minimal formatting assumptions |
| Email | vague validation or placeholder-only label | use `type="email"`, explicit label, clear domain/work-email requirement if relevant |
| Name | forcing awkward splits or over-validating characters | collect only the granularity the business really needs |
| Address | no autofill support, too many lines, poor country handling | use sensible `autocomplete` tokens and avoid unnecessary segmentation |
| Date | custom pickers or format mismatch on mobile | use native-friendly approaches where practical and explain expected format |
| Numeric IDs / ZIP / postal code | numeric keyboard mismatch or invalid assumptions about length | set `inputmode` intentionally and avoid country-specific assumptions unless scoped |
| Free-text details | no guidance on what useful input looks like | provide short, specific helper text |

## 3) Autocomplete Tokens Worth Checking

Use standards-based tokens where applicable. Common examples include:

- `name`
- `given-name`
- `family-name`
- `organization`
- `email`
- `tel`
- `street-address`
- `address-line1`
- `address-line2`
- `address-level1`
- `address-level2`
- `postal-code`
- `country`

Operator note:

- Use tokens that match the actual field purpose.
- Do not assign misleading tokens to “game” autofill.
- Stable structure and good labels help browser heuristics too.

## 4) Validation and Error-Recovery Checklist

Check whether the form:

- prevents obvious avoidable errors without over-constraining entry
- shows errors near the affected field
- uses actionable wording instead of generic failure text
- preserves user-entered values after failure
- moves the user toward the first unresolved problem after submit
- keeps frontend and backend validation rules aligned
- avoids inaccessible color-only error states

Good error wording pattern:

- bad: `Invalid input`
- better: `Enter a phone number including area code`
- better when policy matters: `Use your work email address so we can route your request to the correct team`

## 5) Trust and Consent Checks

Review whether the form clearly states:

- why the information is being collected
- what happens after submission
- response timing or next-step expectations
- whether a field is optional
- any legally required consent or disclosure language

Avoid:

- vague promises like `We'll be in touch soon` when a clearer timeframe is possible
- consent bundled in a way that obscures the primary action
- pre-checked consent where policy does not allow it

## 6) Multi-Step Form Checks

Use extra scrutiny when the form spans steps.

- Is the step split based on user understanding, not internal org structure?
- Are surprise requirements revealed too late?
- Does each step feel finishable on mobile?
- Is progress indication accurate?
- Can users recover without losing prior entries?

## 7) Mobile-Focused Review Prompts

While testing on mobile, ask:

- Did the keyboard match the expected input?
- Was paste easy?
- Did autocomplete help or get in the way?
- Did helper text remain visible while typing?
- Were the error messages obvious without zooming or scrolling excessively?
- Was the primary action visible and understandable?

## 8) Source Notes

These notes are aligned to guidance from:

- MDN form semantics, labels, input types, and autocomplete documentation: https://developer.mozilla.org/
- web.dev form best practices and user input guidance: https://web.dev/
- W3C WAI and WCAG guidance on labels, instructions, and error identification: https://www.w3.org/WAI/
- GOV.UK Design System form patterns and validation principles: https://design-system.service.gov.uk/

Use primary documentation for implementation details when changing production code.
