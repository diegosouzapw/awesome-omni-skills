# Performance Router

Use this routing note when the task starts in React or Next.js performance work but shifts scope.

## Stay in this skill when

- the main question is rendering performance
- the change centers on server/client boundaries
- the issue is bundle size, hydration, waterfalls, or cache behavior
- the requested output is a performance-focused refactor or review

## Hand off when the main task becomes

### Accessibility

Route to `@accessibility` when the primary issue is semantic HTML, focus order, keyboard handling, announcements, or screen-reader behavior.

### Component architecture or composition

Route to `@react-composition-patterns` when the main decision is API design, component boundaries, slot patterns, or reuse strategy rather than performance.

### Testing and regression safety

Route to `@frontend-testing` when the user needs test harnesses, performance regression guards, or broader test strategy more than refactor guidance.

### General debugging

Route to `@debugging` when the issue is not primarily a React or Next.js performance pattern.

### Security review

Route to `@security-review` when the change affects auth, server actions, user-specific caching, secret handling, or other security-sensitive behavior.

## Handoff format

When handing off, include:

- the route or component affected
- baseline symptom or metric
- what performance hypothesis was tested
- what changed already
- any remaining correctness or deployment risks
