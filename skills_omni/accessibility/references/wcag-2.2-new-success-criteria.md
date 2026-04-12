# WCAG 2.2 additions that commonly affect audits

WCAG 2.2 keeps WCAG 2.1 structure but adds criteria that often affect modern product work.

## Criteria to remember during audits

### 2.4.11 Focus Appearance

Focus indicators must be sufficiently perceivable. A barely visible outline may not be enough.

### 2.4.13 Focus Not Obscured (Minimum)

Focused elements should not be hidden by sticky headers, footers, or overlays.

### 2.5.7 Dragging Movements

Where dragging is required, provide a simpler pointer alternative unless exempt.

### 2.5.8 Target Size (Minimum)

Small touch targets may fail even when they look acceptable on desktop.

### 3.3.7 Redundant Entry

Do not force users to re-enter information already provided in the same process unless necessary.

### 3.3.8 Accessible Authentication (Minimum)

Authentication should not rely on memory tests or transcription tasks without accessible alternatives.

## Practical implications

- review sticky headers and drawers during keyboard testing
- inspect focus indicators in real themes and states
- test touch-heavy UIs on mobile-sized layouts
- review sign-in, MFA, checkout, and profile flows
- flag cross-functional dependencies early when auth or security design constrains the fix
