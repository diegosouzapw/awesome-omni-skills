# Manual accessibility test matrix

Use this matrix after basic automated scanning.

## Core matrix

| Test area | What to do | Pass signal | Common failure |
| --- | --- | --- | --- |
| Keyboard reachability | Tab and Shift+Tab through the interface | Every interactive element is reachable | Hidden controls, dead-end focus, mouse-only widgets |
| Keyboard activation | Use Enter and Space where appropriate | Controls activate as expected | Custom controls only respond to click |
| Focus visibility | Track focus across all interactive states | Focus is always visible and distinct | Outline removed, too faint, clipped |
| Focus order | Follow visual and task order | Order is logical and predictable | Focus jumps to unrelated areas |
| Skip link | Tab from page start | Skip link appears and works | No bypass for repeated nav |
| Dialogs | Open, navigate, close, and return | Initial focus, contained workflow, return focus | Focus escapes or disappears |
| Forms | Trigger validation errors and recover | Labels, instructions, errors, and correction flow are clear | Placeholder-only labels, silent errors |
| Headings and landmarks | Navigate by structure | Page regions and hierarchy are coherent | Missing or skipped heading structure |
| Screen reader spot check | Navigate key tasks with available AT | Names, roles, states, and status messages make sense | Wrong names, silent updates, duplicate announcements |
| Zoom/reflow | Test at 200% and narrow viewport | Content remains usable without two-dimensional scrolling where not expected | Clipped text, overlapping controls |
| Contrast | Review text, icons, controls, focus ring | Visual distinctions remain clear | Low-contrast text or weak focus ring |
| Reduced motion | Enable reduced motion preference | Non-essential motion is reduced | Large motion persists |
| Touch targets | Test likely touch controls | Targets are usable without precision tapping | Tiny or crowded tap targets |

## Minimum journey coverage

Run the matrix on:

- homepage or dashboard
- primary navigation
- one content-heavy page
- one form-heavy page
- one transactional flow
- one custom-widget-heavy surface

## Screen reader spot-check suggestions

Use any available screen reader and verify:

- page title announced sensibly
- heading navigation is useful
- buttons and links have meaningful names
- form fields announce label, role, state, and error text
- route changes or major updates are announced or focused appropriately

## Notes

Do not treat one screen reader or one browser as exhaustive certification. Use spot checks to find real issues and communicate residual risk clearly.
