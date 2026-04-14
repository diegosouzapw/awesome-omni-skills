---
name: tailwind-patterns
description: "Tailwind CSS Patterns (v4 - 2025) workflow skill. Use this skill when the user needs Tailwind CSS v4 principles. CSS-first configuration, container queries, modern patterns, design token architecture and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["tailwind-patterns", "tailwind", "css", "principles", "css-first", "configuration", "container", "queries"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Tailwind CSS Patterns (v4 - 2025)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/tailwind-patterns` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Tailwind CSS Patterns (v4 - 2025) > Modern utility-first CSS with CSS-native configuration.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 1. Tailwind v4 Architecture, 2. CSS-Based Configuration, 3. Container Queries (v4 Native), 4. Responsive Design, 5. Dark Mode, 6. Modern Layout Patterns.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use this skill when configuring Tailwind v4, using CSS-first theme and design tokens, or implementing container queries and modern Tailwind patterns.
- Use when the request clearly matches the imported source intent: Tailwind CSS v4 principles. CSS-first configuration, container queries, modern patterns, design token architecture.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: 1. Tailwind v4 Architecture

### What Changed from v3

| v3 (Legacy) | v4 (Current) |
|-------------|--------------|
| `tailwind.config.js` | CSS-based `@theme` directive |
| PostCSS plugin | Oxide engine (10x faster) |
| JIT mode | Native, always-on |
| Plugin system | CSS-native features |
| `@apply` directive | Still works, discouraged |

### v4 Core Concepts

| Concept | Description |
|---------|-------------|
| **CSS-first** | Configuration in CSS, not JavaScript |
| **Oxide Engine** | Rust-based compiler, much faster |
| **Native Nesting** | CSS nesting without PostCSS |
| **CSS Variables** | All tokens exposed as `--*` vars |

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @tailwind-patterns to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/tailwind-patterns/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/tailwind-patterns/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @tailwind-patterns using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Principle - Implementation
- Purge unused - Automatic in v4
- Avoid dynamism - No template string classes
- Use Oxide - Default in v4, 10x faster
- Cache builds - CI/CD caching
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: 12. Performance Principles

| Principle | Implementation |
|-----------|----------------|
| **Purge unused** | Automatic in v4 |
| **Avoid dynamism** | No template string classes |
| **Use Oxide** | Default in v4, 10x faster |
| **Cache builds** | CI/CD caching |

---

> **Remember:** Tailwind v4 is CSS-first. Embrace CSS variables, container queries, and native features. The config file is now optional.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/tailwind-patterns`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: 2. CSS-Based Configuration

### Theme Definition

```
@theme {
  /* Colors - use semantic names */
  --color-primary: oklch(0.7 0.15 250);
  --color-surface: oklch(0.98 0 0);
  --color-surface-dark: oklch(0.15 0 0);
  
  /* Spacing scale */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### When to Extend vs Override

| Action | Use When |
|--------|----------|
| **Extend** | Adding new values alongside defaults |
| **Override** | Replacing default scale entirely |
| **Semantic tokens** | Project-specific naming (primary, surface) |

---

#### Imported: 3. Container Queries (v4 Native)

### Breakpoint vs Container

| Type | Responds To |
|------|-------------|
| **Breakpoint** (`md:`) | Viewport width |
| **Container** (`@container`) | Parent element width |

### Container Query Usage

| Pattern | Classes |
|---------|---------|
| Define container | `@container` on parent |
| Container breakpoint | `@sm:`, `@md:`, `@lg:` on children |
| Named containers | `@container/card` for specificity |

### When to Use

| Scenario | Use |
|----------|-----|
| Page-level layouts | Viewport breakpoints |
| Component-level responsive | Container queries |
| Reusable components | Container queries (context-independent) |

---

#### Imported: 4. Responsive Design

### Breakpoint System

| Prefix | Min Width | Target |
|--------|-----------|--------|
| (none) | 0px | Mobile-first base |
| `sm:` | 640px | Large phone / small tablet |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Laptop |
| `xl:` | 1280px | Desktop |
| `2xl:` | 1536px | Large desktop |

### Mobile-First Principle

1. Write mobile styles first (no prefix)
2. Add larger screen overrides with prefixes
3. Example: `w-full md:w-1/2 lg:w-1/3`

---

#### Imported: 5. Dark Mode

### Configuration Strategies

| Method | Behavior | Use When |
|--------|----------|----------|
| `class` | `.dark` class toggles | Manual theme switcher |
| `media` | Follows system preference | No user control |
| `selector` | Custom selector (v4) | Complex theming |

### Dark Mode Pattern

| Element | Light | Dark |
|---------|-------|------|
| Background | `bg-white` | `dark:bg-zinc-900` |
| Text | `text-zinc-900` | `dark:text-zinc-100` |
| Borders | `border-zinc-200` | `dark:border-zinc-700` |

---

#### Imported: 6. Modern Layout Patterns

### Flexbox Patterns

| Pattern | Classes |
|---------|---------|
| Center (both axes) | `flex items-center justify-center` |
| Vertical stack | `flex flex-col gap-4` |
| Horizontal row | `flex gap-4` |
| Space between | `flex justify-between items-center` |
| Wrap grid | `flex flex-wrap gap-4` |

### Grid Patterns

| Pattern | Classes |
|---------|---------|
| Auto-fit responsive | `grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]` |
| Asymmetric (Bento) | `grid grid-cols-3 grid-rows-2` with spans |
| Sidebar layout | `grid grid-cols-[auto_1fr]` |

> **Note:** Prefer asymmetric/Bento layouts over symmetric 3-column grids.

---

#### Imported: 7. Modern Color System

### OKLCH vs RGB/HSL

| Format | Advantage |
|--------|-----------|
| **OKLCH** | Perceptually uniform, better for design |
| **HSL** | Intuitive hue/saturation |
| **RGB** | Legacy compatibility |

### Color Token Architecture

| Layer | Example | Purpose |
|-------|---------|---------|
| **Primitive** | `--blue-500` | Raw color values |
| **Semantic** | `--color-primary` | Purpose-based naming |
| **Component** | `--button-bg` | Component-specific |

---

#### Imported: 8. Typography System

### Font Stack Pattern

| Type | Recommended |
|------|-------------|
| Sans | `'Inter', 'SF Pro', system-ui, sans-serif` |
| Mono | `'JetBrains Mono', 'Fira Code', monospace` |
| Display | `'Outfit', 'Poppins', sans-serif` |

### Type Scale

| Class | Size | Use |
|-------|------|-----|
| `text-xs` | 0.75rem | Labels, captions |
| `text-sm` | 0.875rem | Secondary text |
| `text-base` | 1rem | Body text |
| `text-lg` | 1.125rem | Lead text |
| `text-xl`+ | 1.25rem+ | Headings |

---

#### Imported: 9. Animation & Transitions

### Built-in Animations

| Class | Effect |
|-------|--------|
| `animate-spin` | Continuous rotation |
| `animate-ping` | Attention pulse |
| `animate-pulse` | Subtle opacity pulse |
| `animate-bounce` | Bouncing effect |

### Transition Patterns

| Pattern | Classes |
|---------|---------|
| All properties | `transition-all duration-200` |
| Specific | `transition-colors duration-150` |
| With easing | `ease-out` or `ease-in-out` |
| Hover effect | `hover:scale-105 transition-transform` |

---

#### Imported: 10. Component Extraction

### When to Extract

| Signal | Action |
|--------|--------|
| Same class combo 3+ times | Extract component |
| Complex state variants | Extract component |
| Design system element | Extract + document |

### Extraction Methods

| Method | Use When |
|--------|----------|
| **React/Vue component** | Dynamic, JS needed |
| **@apply in CSS** | Static, no JS needed |
| **Design tokens** | Reusable values |

---

#### Imported: 11. Anti-Patterns

| Don't | Do |
|-------|-----|
| Arbitrary values everywhere | Use design system scale |
| `!important` | Fix specificity properly |
| Inline `style=` | Use utilities |
| Duplicate long class lists | Extract component |
| Mix v3 config with v4 | Migrate fully to CSS-first |
| Use `@apply` heavily | Prefer components |

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
