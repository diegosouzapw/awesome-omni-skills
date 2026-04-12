---
name: "accessibility"
description: "Accessibility (a11y) workflow skill. Use this skill when the user needs to audit and improve web accessibility against WCAG 2.2, usually targeting Level AA. Use when asked to improve accessibility, run an a11y audit, address keyboard or screen reader issues, fix focus management, improve form accessibility, or make a web UI accessible. Do not use for SEO, performance-only work, or broad multi-domain site reviews better handled by web-quality-audit."
version: "0.0.1"
category: "frontend"
tags:
  - "accessibility"
  - "a11y"
  - "wcag"
  - "wcag-2.2"
  - "keyboard"
  - "screen-reader"
  - "focus"
  - "forms"
  - "aria"
  - "frontend"
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
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "accessibility"
family_name: "Accessibility (a11y)"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/accessibility"
upstream_skill: "skills/accessibility"
upstream_author: "web-quality-skills"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "accessibility"
---

# Accessibility (a11y)

## Overview

Use this skill to audit, remediate, and verify web accessibility issues in websites and web applications.

The default working baseline is **WCAG 2.2**, usually targeting **Level AA** unless the user, contract, regulator, or organizational standard explicitly requires a different target. This skill is execution-oriented: it helps an agent scope the audit, test representative journeys, identify user-impacting issues, recommend safer fixes, and package evidence for review.

This skill is primarily for:

- keyboard accessibility
- screen reader support
- semantic HTML and ARIA correctness
- accessible names, labels, and form errors
- focus management in dialogs, menus, tabs, and SPA route changes
- contrast, zoom, reflow, motion, and touch target checks

This skill is **not** a claim of legal compliance by itself. Passing Lighthouse, axe, or a small spot check is not equivalent to confirmed WCAG conformance.

## When to Use This Skill

Use this skill when the user asks to:

- improve accessibility or make a page/app accessible
- run an a11y audit on one or more pages, templates, or components
- fix keyboard navigation, focus order, focus visibility, or focus loss
- improve screen reader output, labels, landmarks, headings, or live regions
- remediate inaccessible forms, validation, or error handling
- review custom widgets such as dialogs, tabs, accordions, menus, or comboboxes
- verify accessibility of a key journey such as sign-in, checkout, search, filtering, or account settings

Do **not** use this skill when:

- the request is primarily SEO-related rather than accessibility-related
- the issue is primarily performance or loading behavior without an accessibility concern
- the user wants a broad multi-area site review across accessibility, performance, SEO, and quality together
- the work is about non-web document remediation unless the user explicitly wants web UI guidance only
- the request is a pure visual redesign without accessibility validation or remediation

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| New audit on an existing app | `references/manual-test-matrix.md` | Gives a structured sequence for automated and manual verification |
| Need quick baseline on WCAG target | `references/wcag-2.2-quick-reference.md` | Maps common defects to WCAG 2.2 checks and test methods |
| Need to review custom widgets | `references/component-patterns.md` | Points to native-first choices and APG patterns for risky components |
| SPA or async UI behaves poorly with assistive tech | `references/spa-focus-and-announcements.md` | Covers route-change focus, status messages, and live-region restraint |
| Need a handoff-ready report | `examples/a11y-audit-report-template.md` | Standardizes issue evidence, user impact, and validation status |
| Need example fixes | `examples/component-remediation-examples.md` | Shows before/after remediations for common defects |
| Need workflow boundaries | `agents/accessibility-router.md` | Helps route to adjacent skills when the task is not mainly accessibility |
| Need a quick printable checklist | `scripts/print_a11y_test_matrix.py` | Prints the bundled test flow without editing source files |

## Workflow

1. **Confirm scope and success criteria**
   - Identify the target pages, templates, components, or user journeys.
   - Confirm whether the practical target is WCAG 2.2 AA.
   - Record constraints such as browser support, design-system ownership, release timing, and whether the app is SPA-like.

2. **Inventory the highest-risk flows**
   - Prioritize login, sign-up, checkout, search, filtering, forms, navigation, dialogs, tables/grids, and any custom widgets.
   - Prefer auditing representative templates and key user journeys over checking only the homepage.

3. **Run automated checks for fast issue discovery**
   - Use browser tooling, Lighthouse, or axe-based tooling if available in the working environment.
   - Treat automated results as discovery signals, not proof of accessibility.
   - Capture findings with affected URL/component, rule name, and screenshot or reproduction note.

4. **Perform manual keyboard and focus testing**
   - Tab through the page and confirm all interactive controls are reachable and usable.
   - Verify visible focus, logical focus order, no keyboard traps, and expected Enter/Space behavior.
   - Check new WCAG 2.2 concerns such as focus appearance and focus not being obscured by sticky UI.

5. **Perform manual semantic and screen reader spot checks**
   - Review headings, landmarks, accessible names, labels, descriptions, error associations, and status messaging.
   - Spot-check with an available screen reader if possible; otherwise inspect the accessibility tree and exposed names/roles/states.
   - Verify that UI meaning matches what assistive technologies receive.

6. **Check responsive and perceptual accessibility**
   - Verify zoom and reflow at 200% and, where relevant, 400% or narrow viewport conditions.
   - Check contrast for text, controls, icons, and focus indicators.
   - Check reduced motion handling and touch target size where mobile interaction matters.

7. **Audit forms and transactional flows carefully**
   - Confirm labels, instructions, required state, autocomplete where appropriate, grouped controls, inline errors, summary errors, and focus handling on submit.
   - Review WCAG 2.2 concerns such as redundant entry and accessible authentication.

8. **Remediate with native semantics first**
   - Replace custom clickable `div` or `span` elements with native controls when possible.
   - Add ARIA only when native HTML cannot express the needed behavior.
   - For complex widgets, follow APG keyboard and state models exactly enough to meet user expectations.

9. **Re-test changed areas and adjacent regressions**
   - Re-run automated checks on affected routes/components.
   - Re-run manual keyboard, focus, and announcement checks on the changed journey.
   - Verify that fixes did not introduce duplicate announcements, focus jumps, or hidden content problems.

10. **Package evidence and residual risk**
   - For each issue, record: affected location, user impact, WCAG mapping, reproduction steps, recommended fix, implementation status, and validation result.
   - Separate confirmed fixes from open risks, design dependencies, or cross-functional decisions.
   - Do not state “WCAG compliant” unless the evidence and review scope truly justify that claim.

## Audit Coverage Checklist

Use this as the minimum coverage set for most audits:

- page title, language, headings, landmarks, and skip link presence
- keyboard access to all interactive controls
- visible focus and logical focus order
- focus not hidden by sticky headers, drawers, or overlays
- accessible names for links, buttons, inputs, iframes, and custom controls
- native labels and instructions for forms
- error identification, association, and recovery guidance
- dialog open/close behavior, initial focus, escape support, and return focus
- tabs/accordions/menus/comboboxes follow expected keyboard models
- dynamic updates announced appropriately without noisy overuse of live regions
- text contrast, non-text contrast, and focus indicator visibility
- zoom/reflow and responsive reading/interaction
- reduced motion support where motion is meaningful
- target size and spacing where touch interaction matters
- authentication and repeated-entry flows reviewed for WCAG 2.2 concerns

## Conformance Notes

- **Level A** is the minimum baseline, not the usual delivery target.
- **Level AA** is the normal target for product and engineering work.
- **Level AAA** is selective and should be adopted where practical, not assumed globally.
- Some organizations or jurisdictions may still cite WCAG 2.1 or local standards explicitly. If so, keep the user’s stated requirement, but still review relevant WCAG 2.2 additions when they materially improve usability.

## Examples

### Example 1: Focused audit request

```text
Use @accessibility to audit the sign-in, password reset, and checkout flows against WCAG 2.2 AA. Prioritize keyboard navigation, focus management, accessible names, form errors, and screen reader announcements. Return findings with affected route, user impact, WCAG mapping, and recommended fixes.
```

### Example 2: Print the bundled test matrix

```bash
python3 skills/accessibility/scripts/print_a11y_test_matrix.py
```

Expected result: a concise manual and automated verification checklist that can be pasted into working notes or a PR review comment.

### Example 3: Ask for component remediation help

```text
Use @accessibility to review our custom modal, tabs, and combobox components. Prefer native HTML if possible. If custom behavior is still required, map each component to the appropriate APG pattern and list any keyboard, focus, naming, or state-management defects.
```

### Example 4: Request a handoff-ready report

```text
Use @accessibility to audit the search and filtering journey. Deliver the output using the local audit report template, and mark each issue as automated-only, manually confirmed, fixed, or still at risk.
```

## Best Practices

### Do

- Prefer **semantic HTML first**: native buttons, links, form controls, headings, lists, tables, and landmarks before adding ARIA.
- Use **ARIA only when necessary** and only when the required role, name, state, and keyboard behavior are implemented correctly.
- Test **representative journeys and templates**, not just one page.
- Combine **automated checks with manual verification**.
- Verify **focus visibility, focus order, and focus restoration** whenever overlays, route changes, or async updates occur.
- Ensure every interactive control has a clear **accessible name**.
- Connect form errors and help text to fields with valid semantic associations.
- Keep live-region announcements **minimal, purposeful, and non-repetitive**.
- Record evidence in a way that another reviewer can reproduce.

### Don't

- Do not claim accessibility compliance based only on Lighthouse or axe results.
- Do not remove focus outlines globally.
- Do not rely on placeholder text as the only label.
- Do not use positive `tabindex` as a normal focus-order technique.
- Do not add ARIA roles to native elements when the native semantics already work.
- Do not implement custom widgets when a native element can satisfy the interaction.
- Do not announce every dynamic UI change through assertive live regions.
- Do not treat visual QA as proof that screen reader and keyboard behavior are correct.

### Practical remediation rules

1. If a custom control fails accessibility checks, first ask: **can this be a native element instead?**
2. If an issue involves focus, test the full lifecycle: **entry, movement, escape, and return**.
3. If an issue involves labels or names, inspect the **computed accessible name**, not just visible text.
4. If an issue involves async UI, verify both **announcement behavior** and **focus behavior**.
5. If a flow involves authentication, security friction, or repeated data entry, flag product/security dependencies early rather than assuming accessibility alone can approve the pattern.

## Troubleshooting

### Problem: A control looks correct visually but fails keyboard testing

**Symptoms:** Click works, but Tab cannot reach the control; Enter/Space does nothing; arrow-key navigation is inconsistent in composite widgets.
**Solution:** Replace the control with a native button, link, input, or summary/details pattern if possible. If it must stay custom, implement the correct role, state, and APG keyboard model. Remove positive `tabindex` ordering hacks and verify logical DOM order.

### Problem: Focus disappears after opening a modal or changing routes

**Symptoms:** Keyboard users lose their place; focus lands on the browser chrome or body; closing a dialog does not restore focus.
**Solution:** On open, move focus to a sensible element inside the dialog. Keep focus constrained only while the modal is active. Support Escape where appropriate. On close, return focus to the invoking control or another logical target. For SPA route changes, move focus to the main heading or main content container and verify sticky UI does not obscure the focused element.

### Problem: Screen reader users do not hear status changes or results updates

**Symptoms:** Filtering updates, toasts, validation messages, or route changes are visible but not announced.
**Solution:** Use restrained live-region patterns for meaningful status updates, and update the text content in a way assistive technologies will detect. Do not make every container live. For route changes, move focus deliberately and provide a clear page or region heading.

### Problem: Forms have labels, but users still cannot complete them reliably

**Symptoms:** Placeholder-only labeling, icon-only buttons, repeated IDs, missing grouped labels, errors not tied to fields, or unclear required/instruction text.
**Solution:** Use explicit labels, `fieldset`/`legend` for grouped controls, unique IDs, and clear instructions. Associate help and error text with the field. Focus the error summary or first invalid field appropriately after submit, then verify the reading order and announcements.

### Problem: Focus indicators are present but still fail usability checks

**Symptoms:** Focus is technically visible but too faint, too small, or hidden beneath sticky navigation or overlays.
**Solution:** Strengthen focus contrast and area, verify the indicator is visible on all states/themes, and test scroll behavior so focused elements are not obscured. Review WCAG 2.2 focus appearance and focus-not-obscured expectations during validation.

### Problem: Automated tools pass, but users still report accessibility failures

**Symptoms:** Lighthouse or axe scores look acceptable, but users report confusing navigation, unclear labels, or broken screen reader behavior.
**Solution:** Expand manual testing. Automated tools miss many context-dependent issues such as reading order, announcement quality, incorrect component behavior, and meaning conveyed only visually. Re-check key journeys using the manual test matrix and issue template.

## Related Skills

- `@web-quality-audit` - Use when the task expands into a broader site review across accessibility, performance, SEO, and general quality.
- `@core-web-vitals` - Use when the primary issue is performance rather than accessibility.
- `@seo` - Use when the request is about search visibility rather than accessibility.

## Additional Resources

### Local support pack

- [WCAG 2.2 quick reference for product teams](references/wcag-2.2-quick-reference.md)
- [WCAG 2.2 additions that commonly affect audits](references/wcag-2.2-new-success-criteria.md)
- [Manual accessibility test matrix](references/manual-test-matrix.md)
- [Component patterns and native-first guidance](references/component-patterns.md)
- [SPA focus and announcement guidance](references/spa-focus-and-announcements.md)
- [Audit report template](examples/a11y-audit-report-template.md)
- [Component remediation examples](examples/component-remediation-examples.md)
- [Key user journeys test plan example](examples/test-plan-key-user-journeys.md)
- [Accessibility routing guidance](agents/accessibility-router.md)
- [Print the bundled test matrix](scripts/print_a11y_test_matrix.py)

### External references

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [How to Meet WCAG 2.2 (Quick Reference)](https://www.w3.org/WAI/WCAG22/quickref/)
- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [MDN: ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [MDN: HTML: A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML)
- [MDN: Keyboard accessible](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Keyboard)
- [MDN: ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [MDN: Text labels and names](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names)
- [axe rule reference](https://dequeuniversity.com/rules/axe/)
- [Chrome Lighthouse accessibility audits](https://developer.chrome.com/docs/lighthouse/accessibility/)
