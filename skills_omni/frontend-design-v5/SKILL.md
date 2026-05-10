---
name: "frontend-design-v5"
description: "Design and implement distinctive, production-grade frontend interfaces. Use this skill when you need to shape component structure, states, responsive behavior, accessibility, motion, and performance in code instead of generating generic layouts."
version: "0.0.1"
category: "frontend"
tags:
  - "frontend-design-v5"
  - "frontend-design"
  - "design-systems"
  - "responsive-ui"
  - "accessibility"
  - "performance"
  - "progressive-enhancement"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
license: "Unknown"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-27"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "frontend-design-v5"
family_name: "Frontend Design (Distinctive, Production-Grade)"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/frontend-design-v5"
upstream_skill: "skills/frontend-design-v5"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "frontend-design-v5"
---

# Frontend Design (Distinctive, Production-Grade)

## Overview

Use this skill when the task is not just to "make a page" but to design and implement a polished frontend that:

- expresses a clear visual point of view
- turns design intent into semantic, maintainable code
- handles empty, loading, error, hover, focus, active, disabled, and success states
- responds well across viewport and container sizes
- stays keyboard- and screen-reader-accessible
- protects performance, motion safety, and debuggability

This skill preserves the upstream identity and intent while making it more operational for production work. It is for designer-engineer tasks where visual craft and engineering quality must both survive implementation.

## When to Use

Use this skill when the user asks for any of the following:

- a distinctive UI instead of a generic framework-looking page
- a frontend component or screen that must be both beautiful and shippable
- a redesign that needs clear hierarchy, spacing, interaction states, and responsiveness
- a feature implementation where accessibility, semantic structure, and performance matter
- translation of product or brand intent into real HTML, CSS, and interaction behavior

Do **not** use this skill as the primary workflow when the task is mainly:

- backend API design
- copywriting without UI changes
- visual asset creation in external design tools only
- broad product strategy with no implementation step
- pixel-perfect cloning of an existing proprietary design without permission

## Workflow

1. **Clarify the interface goal and constraints**
   - Identify the user task, primary content, critical actions, and success state.
   - Confirm platform constraints such as framework, design system, browser support, and delivery target.
   - Ask what must feel distinctive: typography, density, rhythm, color, motion, composition, or interaction model.

2. **Start from content structure and interaction model**
   - Define the semantic outline before styling: headings, landmarks, lists, forms, dialogs, navigation, and action grouping.
   - Prefer native elements first; only build custom widget behavior when native behavior is insufficient.
   - List all required states up front: empty, loading, loaded, error, validation, hover, focus, pressed, selected, disabled, and reduced-motion mode.

3. **Translate design intent into a component system**
   - Establish spacing, type scale, surface hierarchy, and emphasis rules.
   - Define reusable primitives and component variants instead of one-off styling.
   - Make the visual language intentional: avoid default gradients, shadows, rounded corners, or spacing patterns that do not support the product voice.

4. **Implement responsive structure with safe modern CSS**
   - Use semantic HTML and source order that still makes sense without CSS.
   - Prefer container queries for component-level adaptation and media queries for page- or viewport-level changes.
   - Use cascade layers deliberately so tokens, base styles, components, and utilities do not fight each other.
   - Treat newer effects as enhancements, not hard dependencies, unless the user explicitly accepts narrower support.

5. **Build accessibility in during implementation**
   - Preserve visible focus, keyboard order, label associations, contrast, and error messaging.
   - Respect `prefers-reduced-motion`; motion should support comprehension, never block it.
   - For custom interactive patterns, match expected keyboard and screen-reader behavior.

6. **Check performance and interaction quality**
   - Keep layout stable by reserving space for media and async content.
   - Avoid excessive DOM depth, expensive paint effects, and interaction handlers that block the main thread.
   - Verify that visual polish does not degrade input responsiveness, especially on lower-end devices.

7. **Review edge cases before handoff**
   - Test long text, short text, missing images, validation errors, extreme viewport sizes, zoom, and keyboard-only use.
   - Confirm that design intent survives loading and error states, not just the happy path.
   - If relevant, document any intentional progressive enhancement or fallback behavior.

8. **Return implementation with rationale**
   - Provide the code or change plan.
   - Summarize the design decisions, state coverage, accessibility considerations, and any known tradeoffs.
   - If the task remains partially unspecified, note which assumptions were made so the next operator can verify them.

## Best Practices

- **Do** begin with information hierarchy and task flow; **do not** start by decorating empty boxes.
- **Do** use semantic elements like `button`, `nav`, `main`, `dialog`, `form`, and proper headings when they fit; **do not** replace them with `div` wrappers by default.
- **Do** define all interaction states before styling final polish; **do not** ship a beautiful default state with broken loading, error, or disabled behavior.
- **Do** prefer component-level responsiveness with container queries where supported; **do not** solve every layout issue with viewport-only breakpoints.
- **Do** keep source order meaningful for assistive tech and narrow screens; **do not** rely on visual reordering that harms comprehension.
- **Do** preserve visible focus indicators; **do not** remove focus outlines without an equally strong replacement.
- **Do** use motion to explain transitions or spatial relationships; **do not** make motion mandatory for understanding the interface.
- **Do** verify color contrast and non-color affordances; **do not** communicate state by color alone.
- **Do** apply progressive enhancement for newer features; **do not** make optional visual effects the only path to core functionality.
- **Do** prefer reusable primitives and tokens; **do not** create one-off CSS that makes future maintenance fragile.

## Examples

### Example 1: Reframing a vague request into an implementable frontend plan

**Input**

```text
Make the pricing section look premium and modern.
```

**Expected working approach**

```text
1. Clarify whether the primary conversion is plan comparison or single-plan signup.
2. Define semantic structure: section > heading > plan list/cards > feature lists > CTA buttons.
3. Decide the visual signature: compact editorial layout, high contrast typography, restrained accent color, minimal decorative effects.
4. Specify states: monthly/yearly toggle, recommended plan, disabled CTA during checkout load, error banner, keyboard focus.
5. Implement component-level responsiveness so cards stack cleanly in narrow containers.
6. Check contrast, focus visibility, and reduced-motion handling for hover/selection transitions.
```

**Expected outcome**

```text
A pricing UI that has clear hierarchy, accessible plan selection, stable responsive behavior, and a distinctive visual direction instead of generic SaaS cards.
```

### Example 2: Converting a custom interaction into a safer production choice

**Input**

```text
Build a custom modal from scratch with divs and animated transforms.
```

**Better implementation choice**

```text
Use a semantic dialog pattern first, preserve focus management, provide Escape and close-button behavior, reserve animation as progressive enhancement, and ensure the dialog still works when reduced motion is requested.
```

**Expected outcome**

```text
A modal/dialog that remains usable with keyboard and assistive technology, while still supporting distinctive styling and optional motion.
```

For a fuller worked example, open [`examples/worked-example.md`](examples/worked-example.md).

## Troubleshooting

**Symptoms:** The layout looks correct at full-page width but breaks when the component is placed in a narrow sidebar or card grid.

**Solution:** The component is likely using viewport assumptions for a container problem. Rework responsive rules around the component's own available width. Use container queries where appropriate, simplify minimum widths, and verify that text wrapping and action grouping still work in constrained parents.

**Symptoms:** Styles become unpredictable after integrating with an existing codebase or utility framework.

**Solution:** Audit cascade order first. Separate tokens, reset/base styles, components, and utilities into deliberate layers. Reduce selector specificity instead of escalating it. Check whether framework utilities are overriding component intent and move fragile overrides into a clearer layer structure.

**Symptoms:** The interface feels polished visually but fails keyboard or screen-reader use.

**Solution:** Inspect semantic structure, focus order, labeling, and widget choice before tweaking ARIA. Replace custom controls with native elements when possible. If a custom pattern is necessary, implement the full expected behavior instead of only the visual shell.

**Symptoms:** Animations feel expensive, distracting, or uncomfortable.

**Solution:** Reduce simultaneous motion, animate transform/opacity where practical, and provide a meaningful reduced-motion path. Motion should reinforce hierarchy or continuity, not become decoration that slows interaction.

**Symptoms:** The page shifts during load or interactions feel sluggish.

**Solution:** Reserve space for images and async sections, reduce expensive visual effects, and inspect whether scripting or rendering work is blocking response. Favor simpler DOM and clearer state transitions over layered effects that hide performance issues.

**Symptoms:** A custom component looks distinctive but is hard to extend without regressions.

**Solution:** Pull shared spacing, typography, color, and state rules into reusable primitives. Split structure from variant styling. Distinctive design should come from intentional system decisions, not from unrepeatable one-off CSS.

For compact implementation guardrails, open [`references/domain-notes.md`](references/domain-notes.md).

## Additional Resources

- [`references/domain-notes.md`](references/domain-notes.md) — open this when you need a compact production reference for semantic structure, accessibility thresholds, container-vs-media query decisions, cascade layer ordering, progressive enhancement, and performance guardrails.
- [`examples/worked-example.md`](examples/worked-example.md) — open this when a task is underspecified and you need a concrete before/after example showing how to turn a vague UI request into a production-ready implementation plan.

## Related Skills

No related local skills were provided in the source context.
