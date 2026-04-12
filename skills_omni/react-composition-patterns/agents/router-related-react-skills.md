# Router: Related React Skills

Use this note when the task starts in composition architecture but drifts into a neighboring specialization.

## Stay in `@react-composition-patterns` when

- the main issue is component API shape
- boolean props or mode branches are the smell
- the task is about choosing among children, lifted state, context, compound components, render props, or hooks
- the work centers on reusable component architecture

## Hand off to another skill when

- **Performance is primary** -> `@react-best-practices`
- **Accessibility review is primary** -> `@accessibility`
- **Testing strategy is primary** -> `@testing`
- **Broader design-system governance is primary** -> `@design-system`

## Handoff note template

```text
The task started as a React composition-patterns problem, but the current bottleneck is <specialization>. Preserve the API-shape findings and continue with <target-skill>.
```
