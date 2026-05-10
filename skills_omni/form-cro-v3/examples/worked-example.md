# Worked Example: Demo Request Form CRO Review

## Scenario

A B2B software site has a **demo request** form with lower-than-expected mobile completion.

### Current form fields

1. Full name
2. Work email
3. Company name
4. Phone number
5. Company size
6. Country
7. Free-text message
8. Marketing consent checkbox

### Reported problems

- mobile users drop off heavily at the phone field
- users often trigger validation errors on phone and company size
- sales wants to keep company name and work email
- legal requires consent language to remain clear and reviewable
- analytics exist for form start and submit, but not per-field errors

## Step 1: Define success

Primary success metric:

- increase valid demo requests submitted

Guardrail metrics:

- no drop in lead quality accepted by sales
- no increase in invalid or duplicate submissions
- no new accessibility defects

## Step 2: Friction audit findings

### UX findings

- Phone is visually presented as required even though sales says it is optional.
- Company size uses a long dropdown with vague ranges.
- Consent text is dense and visually merged with the submit action.
- Submit button says `Submit`, which does not reinforce the value exchange.

### Implementation findings

- Several inputs rely on placeholders more than labels.
- Phone field uses a rigid formatting mask that rejects pasted international numbers.
- Error messages are generic: `Invalid field`.
- `autocomplete` is missing on name, email, organization, phone, and country.
- Mobile keyboard for phone is not optimized.

## Step 3: Proposed changes

### Keep

- Full name
- Work email
- Company name
- Company size
- Country
- Message
- Consent

### Change

1. **Phone**
   - make clearly optional in label text
   - remove rigid mask if backend can normalize or validate more flexibly
   - use `type="tel"` and `inputmode="tel"`
   - show field-specific guidance only on validation failure

2. **Labels and semantics**
   - add explicit labels for all controls
   - add `autocomplete` tokens where applicable
   - attach help and error text with `aria-describedby` where needed

3. **Company size**
   - rewrite options into clearer, mutually exclusive ranges
   - keep the list short and meaningful

4. **Consent and trust copy**
   - visually separate consent from the main CTA
   - add a short expectation statement such as response timing

5. **Submit action**
   - change button text from `Submit` to `Request demo`

## Step 4: Example before/after

### Before

```html
<input placeholder="Full name">
<input placeholder="Work email">
<input placeholder="Company">
<input placeholder="Phone">
<select>
  <option>1-10</option>
  <option>10-50</option>
  <option>50-500</option>
  <option>500+</option>
</select>
<textarea placeholder="Message"></textarea>
<label><input type="checkbox"> I agree to receive updates and communications...</label>
<button>Submit</button>
```

### After

```html
<label for="full-name">Full name</label>
<input id="full-name" name="fullName" autocomplete="name" required>

<label for="work-email">Work email</label>
<input id="work-email" name="email" type="email" autocomplete="email" required>

<label for="company">Company name</label>
<input id="company" name="company" autocomplete="organization" required>

<label for="phone">Phone (optional)</label>
<input id="phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" aria-describedby="phone-help">
<p id="phone-help">Include country code if outside our primary market.</p>

<label for="company-size">Company size</label>
<select id="company-size" name="companySize" required>
  <option value="">Select one</option>
  <option>1–9 employees</option>
  <option>10–49 employees</option>
  <option>50–249 employees</option>
  <option>250+ employees</option>
</select>

<label for="country">Country</label>
<input id="country" name="country" autocomplete="country-name" required>

<label for="message">What would you like to discuss?</label>
<textarea id="message" name="message" aria-describedby="message-help"></textarea>
<p id="message-help">Share your goals, timeline, or current tools if helpful.</p>

<p>We use this information to prepare your demo. A specialist replies within 1 business day.</p>

<label for="consent">
  <input id="consent" type="checkbox" name="consent">
  I agree to receive follow-up communications as described in the privacy notice.
</label>

<button type="submit">Request demo</button>
```

## Step 5: Measurement plan

Baseline to capture before release:

- form starts
- form submissions
- valid submissions accepted by backend
- mobile completion rate
- phone-field validation error rate
- company-size selection error rate

Expected outcomes:

- lower mobile abandonment on phone field
- fewer generic validation loops
- improved clarity on optional versus required information
- stable or improved lead quality because qualifying fields were preserved

## Step 6: Handoff note example

Use wording like this in a handoff:

> Optimized the demo request form for completion quality rather than raw field reduction. Kept sales-critical fields, clarified phone as optional, improved semantic input setup, removed a high-friction formatting mask, strengthened trust copy, and changed the CTA to reflect the actual action. Post-release monitoring should compare mobile completion, valid submission rate, and downstream lead quality against baseline.

## Why this example matters

This example demonstrates the core rule of this skill: **do not optimize forms by stripping information blindly**. Reduce friction first, protect trust and accessibility, and measure the effect using both conversion and quality outcomes.
