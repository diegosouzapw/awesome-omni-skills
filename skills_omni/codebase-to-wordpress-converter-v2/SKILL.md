---
name: "codebase-to-wordpress-converter-v2"
description: "Codebase to WordPress Converter workflow skill. Use this skill when the user needs Expert skill for converting any codebase (React/HTML/Next.js) into a pixel-perfect, SEO-optimized, and dynamic WordPress theme and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "frontend"
tags:
  - "codebase-to-wordpress-converter-v2"
  - "codebase-to-wordpress-converter"
  - "expert"
  - "for"
  - "converting"
  - "any"
  - "codebase"
  - "react"
  - "omni-enhanced"
complexity: "intermediate"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-16"
date_updated: "2026-04-28"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "codebase-to-wordpress-converter-v2"
family_name: "Codebase to WordPress Converter"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/codebase-to-wordpress-converter-v2"
upstream_skill: "skills/codebase-to-wordpress-converter-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "263"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "96a8b32dc2a22bdb194119e570fe385417bd3d21"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "codebase-to-wordpress-converter-v2"
---

# Codebase to WordPress Converter

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/codebase-to-wordpress-converter` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Codebase to WordPress Converter

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Capabilities, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when converting a React (CRA/Vite/Next.js) or HTML project into a WordPress theme.
- Use when the client demands a 100% pixel-perfect match with the original source.
- Use when auditing an existing WordPress conversion for structural or SEO flaws.
- Use when you need to ensure technical SEO (Schema, Meta tags, Heading hierarchy) is preserved exactly.
- Use when the request clearly matches the imported source intent: Expert skill for converting any codebase (React/HTML/Next.js) into a pixel-perfect, SEO-optimized, and dynamic WordPress theme.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Rule: No fixes are allowed during this phase; only detection.
2. Replace static text with thetitle(), getfield(), or the_content().
3. Replace static paths with gettemplatedirectory_uri().
4. Layout Files (header.php / footer.php): Must include wphead() before </head> and wpfooter() before </body>.
5. Page Templates: Must call getheader() and getfooter().
6. registernavmenus() for dynamic navigation without breaking original HTML structure.
7. ✅ No UI change

### Imported Workflow Notes

#### Imported: Step-by-Step Guide

### 1. Discovery & Forensic Audit
Start by identifying all components in the source code. Create a UI Comparison table comparing the original source output against the target WordPress output.
- *Rule: No fixes are allowed during this phase; only detection.*

### 2. Strategic Field Mapping
Map static React/HTML content to dynamic WordPress functions:
- Replace static text with `the_title()`, `get_field()`, or `the_content()`.
- Replace static paths with `get_template_directory_uri()`.

### 3. Implementation of Core Hooks
Ensure every theme includes the foundational WordPress hooks correctly:
- **Layout Files (`header.php` / `footer.php`)**: Must include `wp_head()` before `</head>` and `wp_footer()` before `</body>`.
- **Page Templates**: Must call `get_header()` and `get_footer()`.
- `register_nav_menus()` for dynamic navigation without breaking original HTML structure.

### 4. Validation & Live Tracker
Maintain a live tracker of Total Issues, Fixed, and Remaining. Every fix must be followed by a confirmation:
- ✅ No UI change
- ✅ No DOM change
- ✅ No class change

#### Imported: Overview

This skill is designed for the high-fidelity conversion of static or React-based frontends into fully functional, CMS-driven WordPress themes. It acts as a **Senior WordPress Architect**, **React Expert**, and **QA Engineer** to ensure a 100% pixel-perfect match while integrating deep WordPress functionality like ACF, dynamic menus, and technical SEO preservation.

#### Imported: Core Capabilities

### Phased Conversion & Audit
The skill follows a strict 4-phase forensic process:
1.  **Phase 1: Forensic UI Comparison**: Side-by-side table audit of React components vs. WordPress templates to find discrepancies.
2.  **Phase 2: Full Audit**: Deep dive into UI, SEO, CMS Editability, Navigation, Functionality, and Performance.
3.  **Phase 3: Action Plan**: Tasks classified as **SAFE**, **RISKY**, or **BLOCKED** to prevent breaking the UI.
4.  **Phase 4: Iterative Fixing**: Executing one safe task at a time with validation after each step.

### Absolute UI Lock
Strict enforcement of non-negotiable rules:
- No alterations to layout, spacing, typography, or colors.
- Exact preservation of Tailwind or CSS class names.
- Zero changes to DOM structure or HTML nesting.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @codebase-to-wordpress-converter-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @codebase-to-wordpress-converter-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @codebase-to-wordpress-converter-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @codebase-to-wordpress-converter-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Navigation Conversion
```php
// WRONG: Static replacement that adds wrappers
wp_nav_menu(['theme_location' => 'primary']);

// CORRECT: Preserving original Tailwind classes and structure
wp_nav_menu([
    'theme_location' => 'primary',
    'container' => false,
    'items_wrap' => '<ul class="flex space-x-8">%3$s</ul>',
    'walker' => new Custom_Tailwind_Walker()
]);
```

### Example 2: Asset Pathing
```php
// Source: <img src="/images/logo.png" />
// WP Conversion:
<img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="Logo" />
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Use getpageby_path() for robust internal linking.
- ✅ Do: Implement ACF (Advanced Custom Fields) fallbacks in functions.php.
- ✅ Do: Keep the Tailwind configuration in the header.php to ensure global styles are active.
- ❌ Don't: Add "div" wrappers or rename classes to "clean up" the code.
- ❌ Don't: Use standard WordPress default styles if they conflict with the original design.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use `get_page_by_path()` for robust internal linking.
- ✅ **Do:** Implement ACF (Advanced Custom Fields) fallbacks in `functions.php`.
- ✅ **Do:** Keep the Tailwind configuration in the `header.php` to ensure global styles are active.
- ❌ **Don't:** Add "div" wrappers or rename classes to "clean up" the code.
- ❌ **Don't:** Use standard WordPress default styles if they conflict with the original design.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/codebase-to-wordpress-converter`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Additional Resources

- [ACF Documentation](https://www.advancedcustomfields.com/resources/)
- [Tailwind CSS in WordPress](https://tailwindcss.com/docs/installation)
- [WordPress Theme Handbook](https://developer.wordpress.org/themes/)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
