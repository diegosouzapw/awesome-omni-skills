# Troubleshooting Playbook

## State resets after refactor

**Symptoms:** Child state disappears, selected items reset, inputs clear after wrapping or rearranging components.

**Check:** Tree position, keys, conditional branches, nested component definitions.

**Recovery:** Preserve position when state should survive. Add keys only for intentional resets.

## Context is missing or always defaulted

**Symptoms:** Compound subcomponents throw, provider seems ignored, consumers read fallback values.

**Check:** Provider placement, duplicate context imports, mismatched root/subcomponent usage.

**Recovery:** Add a strict `useXContext()` hook that throws outside the provider and centralize exports.

## `cloneElement` / `Children` implementation is brittle

**Symptoms:** Refs break, props collide, order matters too much, unsupported child shapes fail.

**Check:** Whether the API depends on child type inspection or prop injection.

**Recovery:** Replace with explicit subcomponents, context, render prop, or custom hook.

## Accessibility broke during abstraction

**Symptoms:** Roles disappeared, keyboard behavior fails, focus handling regressed.

**Check:** Native element usage, state attributes, controlled relationships, interaction model.

**Recovery:** Rebuild against the accessibility checklist and pattern guidance before continuing.

## React 19 migration confusion

**Symptoms:** Team members disagree on refs, provider syntax, or `useContext()` vs `use()`.

**Check:** Actual target React version and compatibility surface.

**Recovery:** Normalize the codebase guidance using the React 19 migration notes and update examples consistently.
