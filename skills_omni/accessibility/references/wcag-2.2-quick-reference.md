# WCAG 2.2 quick reference for product teams

This file is a practical audit aid, not a substitute for the WCAG specification.

Default delivery target for most product work: **WCAG 2.2 Level AA**.

## Common issue areas

| Area | Common defects | Typical WCAG mapping | How to test |
| --- | --- | --- | --- |
| Semantics | Missing headings, landmarks, mislabeled controls | 1.3.1, 2.4.1, 2.4.6, 4.1.2 | Inspect DOM, accessibility tree, keyboard, screen reader spot check |
| Images and icons | Missing alt, decorative images announced, unnamed icon buttons | 1.1.1, 4.1.2 | Inspect accessible names and announcements |
| Keyboard | Mouse-only activation, traps, broken composite widgets | 2.1.1, 2.1.2, 2.1.4 | Full keyboard traversal and activation test |
| Focus | No visible focus, weak focus, obscured focus, focus loss | 2.4.7, 2.4.11, 2.4.13 | Tab through interactive elements in realistic states |
| Contrast | Low text contrast, weak icon/control contrast | 1.4.3, 1.4.11 | Use contrast tooling and visual review |
| Forms | Missing labels, unclear instructions, unannounced errors | 3.3.1, 3.3.2, 3.3.3, 4.1.2 | Submit invalid states and review announcements |
| Dynamic updates | Silent toasts, route changes, over-noisy live regions | 4.1.3 | Trigger updates and verify announcements |
| Touch/mobile | Small targets, cramped controls | 2.5.8 | Test on touch-sized viewport |
| Auth and repeated entry | Memory-based steps, re-entering known data | 3.3.7, 3.3.8 | Review sign-in, MFA, checkout, account flows |

## Recommended audit order

1. Headings, landmarks, page title, language
2. Keyboard reachability and activation
3. Focus visibility and focus order
4. Accessible names and labels
5. Form errors and recovery
6. Dialogs and custom widgets
7. Dynamic updates and route changes
8. Zoom, reflow, contrast, reduced motion
9. Touch targets and mobile interaction
10. Authentication and repeated-entry checks

## Evidence to capture for each issue

- affected URL, route, template, or component
- user impact and who is blocked or burdened
- WCAG mapping
- reproduction steps
- suggested remediation
- validation status after fix

## Reminder

Axe and Lighthouse are useful for discovery and regression detection, but they do not prove conformance on their own.
