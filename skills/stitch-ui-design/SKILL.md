---
name: stitch-ui-design
description: "Stitch UI Design Prompting workflow skill. Use this skill when the user needs Expert guidance for crafting effective prompts in Google Stitch, the AI-powered UI design tool by Google Labs. This skill helps create precise, actionable prompts that generate high-quality UI designs for web and mobile applications and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["stitch-ui-design", "expert", "guidance", "for", "crafting", "effective", "prompts", "google"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# Stitch UI Design Prompting

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/stitch-ui-design` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Stitch UI Design Prompting Expert guidance for crafting effective prompts in Google Stitch, the AI-powered UI design tool by Google Labs. This skill helps create precise, actionable prompts that generate high-quality UI designs for web and mobile applications.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: What is Google Stitch?, Prompt Structure Template, Iteration Strategies, Common Use Cases, Anti-Patterns to Avoid, Tips for Better Results.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Expert guidance for crafting effective prompts in Google Stitch, the AI-powered UI design tool by Google Labs. This skill helps create precise, actionable prompts that generate high-quality UI designs for web and....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/advanced-techniques.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/prompt-examples.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. HTML/CSS - Clean, semantic markup for web projects
2. Figma - "Paste to Figma" for design system integration
3. Code snippets - Component-level exports for frameworks
4. Verify responsive breakpoints
5. Check color contrast for accessibility
6. Ensure interactive states are defined
7. Review component naming and structure

### Imported Workflow Notes

#### Imported: Design-to-Code Workflow

### Export Options

Stitch provides multiple export formats:

1. **HTML/CSS** - Clean, semantic markup for web projects
2. **Figma** - "Paste to Figma" for design system integration
3. **Code snippets** - Component-level exports for frameworks

### Best Practices for Export

**Before exporting:**
- Verify responsive breakpoints
- Check color contrast for accessibility
- Ensure interactive states are defined
- Review component naming and structure

**After export:**
- Refactor generated code for production standards
- Add proper semantic HTML tags
- Implement accessibility attributes (ARIA labels, alt text)
- Optimize images and assets
- Add animations and micro-interactions

#### Imported: Integration with Development Workflow

### Stitch → Figma → Code
1. Generate UI in Stitch with detailed prompts
2. Export to Figma for design system integration
3. Hand off to developers with design specs
4. Implement with production-ready code

### Stitch → HTML → Framework
1. Generate and refine UI in Stitch
2. Export HTML/CSS code
3. Convert to React/Vue/Svelte components
4. Integrate into application codebase

### Rapid Prototyping
1. Create multiple screen variations quickly
2. Test with users or stakeholders
3. Iterate based on feedback
4. Finalize design for development

#### Imported: What is Google Stitch?

Google Stitch is an experimental AI UI generator powered by Gemini 2.5 Flash that transforms text prompts and visual references into functional UI designs. It supports:

- Text-to-UI generation from natural language prompts
- Image-to-UI conversion from sketches, wireframes, or screenshots
- Multi-screen app flows and responsive layouts
- Export to HTML/CSS, Figma, and code
- Iterative refinement with variants and annotations

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @stitch-ui-design to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @stitch-ui-design against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @stitch-ui-design for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @stitch-ui-design using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Color palette (primary colors, accent colors)
- Design style (minimalist, modern, playful, professional, glassmorphic)
- Typography preferences (if any)
- Spacing and density (compact, spacious, balanced)
- Onboarding screen with goal selection
- Home dashboard with daily stats and activity rings
- Workout library with category filters

### Imported Operating Notes

#### Imported: Core Prompting Principles

### 1. Be Specific and Detailed

Generic prompts yield generic results. Specific prompts with clear requirements produce tailored, professional designs.

**Poor prompt:**
```
Create a dashboard
```

**Effective prompt:**
```
Member dashboard with course modules grid, progress tracking bar,
and community feed sidebar using purple theme and card-based layout
```

**Why it works:** Specifies components (modules, progress, feed), layout structure (grid, sidebar), visual style (purple theme, cards), and context (member dashboard).

### 2. Define Visual Style and Theme

Always include color schemes, design aesthetics, and visual direction to avoid generic AI outputs.

**Components to specify:**
- Color palette (primary colors, accent colors)
- Design style (minimalist, modern, playful, professional, glassmorphic)
- Typography preferences (if any)
- Spacing and density (compact, spacious, balanced)

**Example:**
```
E-commerce product page with hero image gallery, add-to-cart CTA,
reviews section, and related products carousel. Use clean minimalist
design with sage green accents and generous white space.
```

### 3. Structure Multi-Screen Flows Clearly

For apps with multiple screens, list each screen as bullet points before generation.

**Approach:**
```
Fitness tracking app with:
- Onboarding screen with goal selection
- Home dashboard with daily stats and activity rings
- Workout library with category filters
- Profile screen with achievements and settings
```

Stitch will ask for confirmation before generating multiple screens, ensuring alignment with your vision.

### 4. Specify Platform and Responsive Behavior

Indicate whether the design is for mobile, tablet, desktop, or responsive web.

**Examples:**
```
Mobile app login screen (iOS style) with email/password fields and social auth buttons

Responsive landing page that adapts from mobile (320px) to desktop (1440px)
with collapsible navigation
```

### 5. Include Functional Requirements

Describe interactive elements, states, and user flows to generate more complete designs.

**Elements to specify:**
- Button actions and CTAs
- Form fields and validation
- Navigation patterns
- Loading states
- Empty states
- Error handling

**Example:**
```
Checkout flow with:
- Cart summary with quantity adjusters
- Shipping address form with validation
- Payment method selection (cards, PayPal, Apple Pay)
- Order confirmation with tracking number
```

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/stitch-ui-design`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@stitch-design-taste` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@stitch-loop` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@stride-analysis-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@stripe-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/advanced-techniques.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [advanced-techniques.md](references/advanced-techniques.md)
- [prompt-examples.md](references/prompt-examples.md)
- [README.md](README.md)
- [advanced-techniques.md](references/advanced-techniques.md)
- [prompt-examples.md](references/prompt-examples.md)

### Imported Reference Notes

#### Imported: Prompt Structure Template

Use this template for comprehensive prompts:

```
[Screen/Component Type] for [User/Context]

Key Features:
- [Feature 1 with specific details]
- [Feature 2 with specific details]
- [Feature 3 with specific details]

Visual Style:
- [Color scheme]
- [Design aesthetic]
- [Layout approach]

Platform: [Mobile/Web/Responsive]
```

**Example:**
```
Dashboard for SaaS analytics platform

Key Features:
- Top metrics cards showing MRR, active users, churn rate
- Line chart for revenue trends (last 30 days)
- Recent activity feed with user actions
- Quick action buttons for reports and exports

Visual Style:
- Dark mode with blue/purple gradient accents
- Modern glassmorphic cards with subtle shadows
- Clean data visualization with accessible colors

Platform: Responsive web (desktop-first)
```

#### Imported: Iteration Strategies

### Refine with Annotations

Use Stitch's "annotate to edit" feature to make targeted changes without rewriting the entire prompt.

**Workflow:**
1. Generate initial design from prompt
2. Annotate specific elements that need changes
3. Describe modifications in natural language
4. Stitch updates only the annotated areas

**Example annotations:**
- "Make this button larger and use primary color"
- "Add more spacing between these cards"
- "Change this to a horizontal layout"

### Generate Variants

Request multiple variations to explore different design directions:

```
Generate 3 variants of this hero section:
1. Image-focused with minimal text
2. Text-heavy with supporting graphics
3. Video background with overlay content
```

### Progressive Refinement

Start broad, then add specificity in follow-up prompts:

**Initial:**
```
E-commerce homepage
```

**Refinement 1:**
```
Add featured products section with 4-column grid and hover effects
```

**Refinement 2:**
```
Update color scheme to earth tones (terracotta, sage, cream)
and add promotional banner at top
```

#### Imported: Common Use Cases

### Landing Pages

```
SaaS landing page for [product name]

Sections:
- Hero with headline, subheadline, CTA, and product screenshot
- Social proof with customer logos
- Features grid (3 columns) with icons
- Testimonials carousel
- Pricing table (3 tiers)
- FAQ accordion
- Footer with links and newsletter signup

Style: Modern, professional, trust-building
Colors: Navy blue primary, light blue accents, white background
```

### Mobile Apps

```
Food delivery app home screen

Components:
- Search bar with location selector
- Category chips (Pizza, Burgers, Sushi, etc.)
- Restaurant cards with image, name, rating, delivery time, and price range
- Bottom navigation (Home, Search, Orders, Profile)

Style: Vibrant, appetite-appealing, easy to scan
Colors: Orange primary, white background, food photography
Platform: iOS mobile (375px width)
```

### Dashboards

```
Admin dashboard for content management system

Layout:
- Left sidebar navigation with collapsible menu
- Top bar with search, notifications, and user profile
- Main content area with:
  - Stats overview (4 metric cards)
  - Recent posts table with actions
  - Activity timeline
  - Quick actions panel

Style: Clean, data-focused, professional
Colors: Neutral grays with blue accents
Platform: Desktop web (1440px)
```

### Forms and Inputs

```
Multi-step signup form for B2B platform

Steps:
1. Account details (company name, email, password)
2. Company information (industry, size, role)
3. Team setup (invite members)
4. Confirmation with success message

Features:
- Progress indicator at top
- Field validation with inline errors
- Back/Next navigation
- Skip option for step 3

Style: Minimal, focused, low-friction
Colors: White background, green for success states
```

#### Imported: Anti-Patterns to Avoid

### ❌ Vague Prompts
```
Make a nice website
```

### ✅ Specific Prompts
```
Portfolio website for photographer with full-screen image gallery,
project case studies, and contact form. Minimalist black and white
aesthetic with serif typography.
```

---

### ❌ Missing Context
```
Create a login page
```

### ✅ Context-Rich Prompts
```
Login page for healthcare portal with email/password fields,
"Remember me" checkbox, "Forgot password" link, and SSO options
(Google, Microsoft). Professional, trustworthy design with
blue medical theme.
```

---

### ❌ No Visual Direction
```
Design an app for task management
```

### ✅ Clear Visual Direction
```
Task management app with kanban board layout, drag-and-drop cards,
priority labels, and due date indicators. Modern, productivity-focused
design with purple/teal gradient accents and dark mode support.
```

#### Imported: Tips for Better Results

1. **Reference existing designs** - Upload screenshots or sketches as visual references alongside text prompts

2. **Use design terminology** - Terms like "hero section," "card layout," "glassmorphic," "bento grid" help Stitch understand your intent

3. **Specify interactions** - Describe hover states, click actions, and transitions for more complete designs

4. **Think in components** - Break complex screens into reusable components (header, card, form, etc.)

5. **Iterate incrementally** - Make small, focused changes rather than complete redesigns

6. **Test responsiveness** - Always verify designs at multiple breakpoints (mobile, tablet, desktop)

7. **Consider accessibility** - Mention color contrast, font sizes, and touch target sizes in prompts

8. **Leverage variants** - Generate multiple options to explore different design directions quickly

#### Imported: Conclusion

Effective Stitch prompts are specific, context-rich, and visually descriptive. By following these principles and templates, you can generate professional UI designs that serve as strong foundations for production applications.

**Remember:** Stitch is a starting point, not a final product. Use it to accelerate the design process, explore ideas quickly, and establish visual direction—then refine with human judgment and production standards.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
