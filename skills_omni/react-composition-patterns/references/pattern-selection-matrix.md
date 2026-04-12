# Pattern Selection Matrix

Use this matrix before implementing or refactoring a component API.

## Decision ladder

Default escalation path:

1. plain props
2. `children` / composition
3. lifted state
4. custom hook
5. context provider
6. compound components
7. render prop when caller-controlled rendering is required

## Matrix

| Symptom or goal | Prefer | Why | Avoid by default |
| --- | --- | --- | --- |
| One component wraps arbitrary content | `children` | Simple containment and specialization | Context or render props |
| A parent needs to control a small piece of child layout | `children` or explicit slots | Keeps API small and readable | Deep prop configuration |
| Two or three siblings need shared state | Lift state up | Keeps ownership obvious | App-wide provider |
| Many descendants need coordinated state/actions | Context | Avoids repetitive prop threading | Repeated prop drilling when the subtree is large |
| Headless primitive with named parts | Compound components + context | Gives expressive API with shared state | Child inspection and cloning |
| Caller needs full control over rendering output | Render prop or custom hook | Parent owns behavior, caller owns render | Over-constrained subcomponent API |
| Reusable behavior without structural opinion | Custom hook | Separates behavior from markup | Context if state is not shared |
| A component has many booleans representing divergent modes | Split components or explicit variants | Reduces branching and invalid prop combinations | More booleans |
| Need to inject props into arbitrary children | Reconsider API; prefer context or explicit subcomponents | Child mutation is fragile | `cloneElement` by default |

## Quick rules

- Start with the simplest pattern that preserves clarity.
- Prefer explicit APIs over magical child rewriting.
- Introduce context only when multiple descendants truly benefit.
- Use render props when inversion of rendering control is the point, not as a universal pattern.
- If the abstraction is harder to explain than the original component, it may be too abstract.
