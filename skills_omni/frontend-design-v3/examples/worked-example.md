# Worked Example: Turning a Generic Frontend Request into a Production-Grade Response

## Input Request

```text
Redesign our project management dashboard so it feels less generic and more premium. Keep it responsive and accessible.
```

## Weak Response Pattern

```text
I updated the dashboard with a modern layout, new colors, rounded cards, hover effects, and cleaner spacing.
```

Why this is weak:
- it describes surface styling, not product-level design decisions
- it gives no semantic or responsiveness plan
- it does not mention interaction states or accessibility gates
- it does not explain what makes the result distinctive rather than template-like

## Strong Response Pattern

```text
Design direction:
- Shift the dashboard from uniform card repetition to a clearer hierarchy: command area first, high-signal metrics second, and supporting project activity below.
- Use a restrained visual language: fewer accent surfaces, stronger typography contrast, and sharper grouping between operational controls and read-only analytics.
- Keep the interface premium by reducing visual noise rather than adding more decoration.

Structural decisions:
- Preserve semantic landmarks for global navigation, workspace navigation, main content, and supporting panels.
- Keep metric groups as lists, project data as actual tabular or structured collection content, and controls as native buttons and links.
- Treat quick actions, filters, and saved views as distinct interaction zones so keyboard users can move predictably.

Responsive behavior:
- Summary cards adapt by container width instead of assuming a full-page grid.
- Filter controls wrap into grouped rows before collapsing into stacked controls.
- Dense side panels reduce secondary metadata first, rather than shrinking primary actions below usable size.

Accessibility requirements:
- Visible focus treatment on all controls, including icon actions in cards and table rows.
- Hover affordances are backed by persistent labels or visible actions where needed.
- Reduced-motion users get minimal transitions with no loss of state clarity.
- Status colors are not the only signal for project health or alert states.

CSS/system approach:
- Add or refine tokens for panel spacing, type contrast, surface elevation, and focus styling.
- Keep component styles in predictable layers to avoid dashboard-specific overrides spreading across the app.
- Avoid decorative shadows or blur effects on every repeated card because they increase visual noise and rendering cost.

Validation notes:
- Check the dashboard at narrow content widths, zoomed views, keyboard-only navigation, and long project names.
- Confirm that chart panels, filters, and action menus still work when embedded in narrower workspace layouts.
```

## Before / After Behavior

### Before
- every card has similar visual weight
- controls blend into data panels
- responsiveness mostly depends on page-level breakpoints
- premium feel is attempted through extra decoration
- accessibility is unspecified

### After
- hierarchy is intentional and task-driven
- controls and data regions are clearly separated
- components adapt to local width constraints
- distinctiveness comes from consistent typography, grouping, and interaction tone
- accessibility and responsiveness are explicit acceptance criteria

## Reusable Template

Use this response shape when the prompt is vague:

```text
1. State the intended design direction.
2. Explain the structural/semantic decisions.
3. Describe responsive behavior at the component level.
4. List accessibility requirements that will not be traded away.
5. Describe the CSS/system strategy needed to keep the result maintainable.
6. End with concrete validation conditions.
```
