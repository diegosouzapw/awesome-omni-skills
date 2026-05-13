# Form CRO Domain Notes

Use this reference when you need a quick decision aid during audits or implementation.

## 1) Field reduction heuristics

| Field type | Usually keep required when… | Usually make optional or defer when… | Notes |
|---|---|---|---|
| Email | Needed for follow-up or receipt | Rarely defer if the conversion depends on response | Prefer format validation; preserve value on failure |
| Phone | Immediate human contact is operationally required | Sales follow-up is helpful but not essential | Explain why it is needed if required |
| Company | Needed for B2B routing or qualification | User intent is early-stage and company is not required yet | Consider optional for top-of-funnel lead forms |
| Job title | Used only for scoring or enrichment | Qualification can happen later | Common defer candidate |
| Company size | Sales segmentation only | Not needed before first response | Often better post-submit or optional |
| Country/region | Needed for routing, tax, eligibility, or coverage | Not necessary to fulfill immediate request | Use searchable patterns if many choices |
| Free-text message | Needed because request varies greatly | Most needs can be captured with structured fields | Do not force long writing without clear benefit |
| Address | Needed for shipping, billing, or legal delivery | Estimate or inquiry can proceed without it | Split only when operationally necessary |
| Coupon code | Required by business flow | Optional discount path only | Often better hidden behind "Add code" |

## 2) Single-step vs multi-step decision guide

Choose **single-step** when most of these are true:
- total field count is modest
- user intent is strong and immediate
- fields are easy to understand
- qualification complexity is low
- mobile users should finish quickly

Choose **multi-step** when most of these are true:
- the form is legitimately long
- fields fall into clear logical groups
- later steps depend on earlier answers
- chunking reduces overload more than it adds navigation cost
- progress indication can remain honest and simple

Warning signs for unnecessary multi-step conversion loss:
- step 1 collects little value and only delays real work
- users cannot review earlier answers easily
- progress indicator overpromises or feels manipulative
- validation waits until later steps and causes backtracking

## 3) Validation strategy matrix

| Situation | Prefer native validation | Prefer custom validation | Why |
|---|---|---|---|
| Simple browser-supported constraints | Yes | Optional | Faster implementation, consistent basic behavior |
| Need custom error copy or placement | Sometimes | Yes | Better recovery and clearer guidance |
| Need accessible error summary + field messaging | Sometimes | Yes | More control over focus and announcements |
| Complex cross-field logic | No | Yes | Native behavior is insufficient |
| Mobile keyboard/autofill still needed | Yes | Yes | Semantics should remain regardless of validation style |

Implementation rules:
- Do not disable native behavior accidentally without replacing it.
- If using custom validation, preserve semantic input types and constraints where helpful.
- Show errors next to the field and optionally in a summary for long forms.
- Preserve all valid user-entered values after submit failure.

## 4) Semantic and mobile implementation checklist

Use this checklist during implementation review:

- Use persistent `<label>` elements associated to each control.
- Use `type="email"`, `type="tel"`, `type="url"`, and other semantic types correctly.
- Add `autocomplete` tokens where applicable, such as `name`, `given-name`, `family-name`, `email`, `tel`, `organization`, `street-address`, `postal-code`.
- Use `inputmode` when it improves keyboard behavior for numeric or decimal entry.
- Use `enterkeyhint` when supported to better match mobile submission flow.
- Mark required fields consistently in both text and programmatic state.
- Ensure inline error messages are associated to fields.
- Avoid placeholder-only instructions.
- Avoid long select menus when a better control exists.
- Prevent layout shifts when errors appear.
- Keep submit controls visible and tappable without obscuring fields.

## 5) Trust and commitment reduction prompts

Review these points near the CTA or sensitive fields:
- What happens after submit?
- How soon will the user hear back?
- Why is sensitive data needed?
- Is privacy or card security explained where anxiety is highest?
- Are optional marketing opt-ins separated from mandatory consent?

## 6) Measurement taxonomy

Minimum recommended funnel events:

| Event | Trigger | Properties to capture |
|---|---|---|
| form_view | Form is meaningfully displayed | form_id, form_type, page, device |
| form_start | First interaction with any field | form_id, device, traffic_source if available |
| form_step_view | A new step is shown | form_id, step_name, step_index |
| field_error | A field fails validation | form_id, field_name, error_type, step_name |
| submit_attempt | User attempts submit | form_id, step_name, has_errors |
| form_success | Confirmed successful completion | form_id, destination, value_band if relevant |
| form_failure | Server or unrecoverable client failure | form_id, failure_type |

Do not capture:
- full card data
- raw passwords
- sensitive free-text contents
- full personal identifiers unless explicitly approved and necessary

## 7) Prioritization order

If time is limited, usually prioritize in this order:
1. remove or relax unnecessary required fields
2. fix validation and error recovery
3. improve mobile input semantics and layout
4. clarify CTA and next-step expectations
5. instrument funnel and error events
6. test larger structural changes such as multi-step conversion
