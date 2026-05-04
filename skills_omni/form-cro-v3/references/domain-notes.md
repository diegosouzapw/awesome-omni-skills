# Form CRO Domain Notes

Use this reference while inspecting real form markup or reviewing implementation proposals.

## Common Field Matrix

| Field purpose | Recommended HTML | `autocomplete` | `inputmode` | Notes |
|---|---|---|---|---|
| Full name | `type="text"` | `name` | `text` | Prefer one field unless the business process truly requires splitting. |
| Given name | `type="text"` | `given-name` | `text` | Use only when downstream systems need separated names. |
| Family name | `type="text"` | `family-name` | `text` | Avoid forcing western-only naming assumptions. |
| Email | `type="email"` | `email` | `email` | Use a visible label; do not rely on placeholder-only instruction. |
| Phone | `type="tel"` | `tel` | `tel` | Accept human formatting where possible instead of over-restrictive masks. |
| Company / organization | `type="text"` | `organization` | `text` | Keep naming conventional for autofill compatibility. |
| Job title | `type="text"` | `organization-title` | `text` | Often optional for lead forms unless routing depends on it. |
| Street address | `type="text"` | `street-address` | `text` | Prefer semantically correct address fields when practical. |
| Address line 1 | `type="text"` | `address-line1` | `text` | Useful when checkout or shipping logic requires structured addresses. |
| Address line 2 | `type="text"` | `address-line2` | `text` | Keep optional in most flows. |
| City | `type="text"` | `address-level2` | `text` | Avoid unexplained abbreviations in labels. |
| State / region | `type="text"` or `select` | `address-level1` | `text` | Use `select` only when the list is short and familiar. |
| Postal code | `type="text"` | `postal-code` | `text` | Do not overfit validation to one country's format unless the flow is country-specific. |
| Country | `select` or combobox | `country` | n/a | Default intelligently when the context is known, but keep it editable. |
| Credit card name | `type="text"` | `cc-name` | `text` | Keep visible association with the payment section. |
| Card number | `type="text"` | `cc-number` | `numeric` | Preserve pasted values; avoid splitting unless required by a trusted component. |
| Card expiry | `type="text"` | `cc-exp` | `numeric` | Accept common entry patterns such as `MM/YY`. |
| Card security code | `type="text"` | `cc-csc` | `numeric` | Keep helper text brief and adjacent. |
| Coupon / promo code | `type="text"` | `off` when needed | `text` | Do not let promo UI overshadow the main conversion path. |
| Search-like short answer | `type="search"` or `text` | context-dependent | `search` or `text` | Only use where search semantics actually fit. |
| Numeric quantity / count | `type="number"` only if spinner semantics help | n/a | `numeric` | For IDs, ZIPs, or phone numbers, prefer `text` with appropriate input hints. |

## Validation and Error Recovery Rules

1. Use native constraints when they fit, but do not assume browser defaults alone are sufficient UX.
2. Keep labels visible even when examples or placeholders are present.
3. Associate each error with its field and explain how to fix it.
4. Preserve entered values after failed validation or failed server submission.
5. Move focus to the first actionable error after submit, especially on long forms.
6. Avoid rejecting valid human formatting unnecessarily, especially for phone numbers, addresses, and card entry patterns.
7. Do not make optional fields look required through styling or layout.
8. If server-side validation fails, return users to the same context with their previous inputs intact.

## Mobile Entry Notes

- Use `inputmode` to suggest the right keyboard even when `type` remains `text` for flexibility.
- Use `enterkeyhint` where supported to better match the next action such as `next`, `done`, or `send`.
- Keep field groups short on small screens; very dense layouts often increase abandonment.
- Ensure the primary CTA is easy to reach and does not compete with less important actions.
- Test whether any sticky headers, chat widgets, or promo bars obstruct labels, errors, or the submit button.

## Error-Recovery Checklist

Use this quick checklist before shipping a revised form:

- Can users identify which field failed without scanning the entire page?
- Does each error say what to do next?
- Is previously entered data preserved?
- Does keyboard focus land somewhere useful after failure?
- Are error states visible and understandable on mobile?
- Are screen-reader users informed of errors and field relationships?
- Can users recover from a server-side failure without restarting?

## CRO Review Heuristics by Form Type

### Lead / Demo
- Ask whether each field is needed before sales can respond.
- If qualification is necessary, see whether some questions can be deferred until after first contact.
- Clarify expected response timing near the CTA.

### Application
- Check save/resume expectations, timeout behavior, and section clarity.
- Long forms need stronger progress cues than short lead forms.

### Survey
- Required questions should be rare and justified.
- Repeated scale changes and inconsistent answer formats often hurt completion.

### Checkout
- Billing, shipping, and payment details should remain semantically correct for autofill.
- Late-stage failures are especially expensive; protect user progress aggressively.
