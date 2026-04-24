---
name: interactive-portfolio-v2
description: "Interactive Portfolio workflow skill. Use this skill when the user needs Expert in building portfolios that actually land jobs and clients - and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["interactive-portfolio-v2", "interactive-portfolio", "expert", "building", "portfolios", "actually", "land", "jobs"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-17"
date_updated: "2026-04-24"
---

# Interactive Portfolio

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/interactive-portfolio` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Interactive Portfolio Expert in building portfolios that actually land jobs and clients - not just showing work, but creating memorable experiences. Covers developer portfolios, designer portfolios, creative portfolios, and portfolios that convert visitors into opportunities. Role: Portfolio Experience Designer You know a portfolio isn't a resume - it's a first impression that needs to convert. You balance creativity with usability. You understand that hiring managers spend 30 seconds on each portfolio. You make those 30 seconds count. You help people stand out without being gimmicky. ### Expertise - Portfolio UX - Project presentation - Personal branding - Conversion optimization - Creative coding - Memorable experiences

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Patterns, Portfolio Architecture, Project Showcase, Developer Portfolio, Portfolio Interactivity.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: portfolio
- User mentions or implies: personal website
- User mentions or implies: showcase work
- User mentions or implies: developer portfolio
- User mentions or implies: designer portfolio
- User mentions or implies: creative portfolio

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Capabilities

- Portfolio architecture
- Project showcase design
- Interactive case studies
- Personal branding for devs/designers
- Contact conversion
- Portfolio performance
- Work presentation
- Testimonial integration

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @interactive-portfolio-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @interactive-portfolio-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @interactive-portfolio-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @interactive-portfolio-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/interactive-portfolio`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@intercom-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@internal-comms-anthropic-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@internal-comms-community-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@internal-comms-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Patterns

### Portfolio Architecture

Structure that works for portfolios

**When to use**: When planning portfolio structure

#### Imported: Portfolio Architecture

### The 30-Second Test
In 30 seconds, visitors should know:
1. Who you are
2. What you do
3. Your best work
4. How to contact you

### Essential Sections
| Section | Purpose | Priority |
|---------|---------|----------|
| Hero | Hook + identity | Critical |
| Work/Projects | Prove skills | Critical |
| About | Personality + story | Important |
| Contact | Convert interest | Critical |
| Testimonials | Social proof | Nice to have |
| Blog/Writing | Thought leadership | Optional |

### Navigation Patterns
```
Option 1: Single page scroll
- Best for: Designers, creatives
- Works well with animations
- Mobile friendly

Option 2: Multi-page
- Best for: Lots of projects
- Individual case study pages
- Better for SEO

Option 3: Hybrid
- Main sections on one page
- Detailed case studies separate
- Best of both worlds
```

### Hero Section Formula
```
[Your name]
[What you do in one line]
[One line that differentiates you]
[CTA: View Work / Contact]
```

### Project Showcase

How to present work effectively

**When to use**: When building project sections

#### Imported: Project Showcase

### Project Card Elements
| Element | Purpose |
|---------|---------|
| Thumbnail | Visual hook |
| Title | What it is |
| One-liner | What you did |
| Tech/tags | Quick scan |
| Results | Proof of impact |

### Case Study Structure
```
1. Hero image/video
2. Project overview (2-3 sentences)
3. The challenge
4. Your role
5. Process highlights
6. Key decisions
7. Results/impact
8. Learnings (optional)
9. Links (live, GitHub, etc.)
```

### Showing Impact
| Instead of | Write |
|------------|-------|
| "Built a website" | "Increased conversions 40%" |
| "Designed UI" | "Reduced user drop-off 25%" |
| "Developed features" | "Shipped to 50K users" |

### Visual Presentation
- Device mockups for web/mobile
- Before/after comparisons
- Process artifacts (wireframes, etc.)
- Video walkthroughs for complex work
- Hover effects for engagement

### Developer Portfolio Specifics

What works for dev portfolios

**When to use**: When building developer portfolio

#### Imported: Developer Portfolio

### What Hiring Managers Look For
1. Code quality (GitHub link)
2. Real projects (not just tutorials)
3. Problem-solving ability
4. Communication skills
5. Technical depth

### Must-Haves
- GitHub profile link (cleaned up)
- Live project links
- Tech stack for each project
- Your specific contribution (for team projects)

### Project Selection
| Include | Avoid |
|---------|-------|
| Real problems solved | Tutorial clones |
| Side projects with users | Incomplete projects |
| Open source contributions | "Coming soon" |
| Technical challenges | Basic CRUD apps |

### Technical Showcase
```javascript
// Show code snippets that demonstrate:
- Clean architecture decisions
- Performance optimizations
- Clever solutions
- Testing approach
```

### Blog/Writing
- Technical deep dives
- Problem-solving stories
- Learning journeys
- Shows communication skills

### Portfolio Interactivity

Adding memorable interactive elements

**When to use**: When wanting to stand out

#### Imported: Portfolio Interactivity

### Levels of Interactivity
| Level | Example | Risk |
|-------|---------|------|
| Subtle | Hover effects, smooth scroll | Low |
| Medium | Scroll animations, transitions | Medium |
| High | 3D, games, custom cursors | High |

### High-Impact, Low-Risk
- Custom cursor on desktop
- Smooth page transitions
- Project card hover effects
- Scroll-triggered reveals
- Dark/light mode toggle

### Creative Ideas
```
- Terminal-style interface (for devs)
- OS desktop metaphor
- Game-like navigation
- Interactive timeline
- 3D workspace scene
- Generative art background
```

### The Balance
- Creativity shows skill
- But usability wins jobs
- Mobile must work perfectly
- Don't hide content behind interactions
- Have a "skip" option for complex intros

#### Imported: Sharp Edges

### Portfolio more complex than your actual work

Severity: MEDIUM

Situation: Spent 6 months on portfolio, have 2 projects to show

Symptoms:
- Been "working on portfolio" for months
- More excited about portfolio than projects
- Portfolio tech more impressive than work
- Afraid to launch

Why this breaks:
Procrastination disguised as work.
Portfolio IS a project, but not THE project.
Diminishing returns on polish.
Ship it and iterate.

Recommended fix:

#### Imported: Right-Sizing Your Portfolio

### The MVP Portfolio
| Element | MVP Version |
|---------|-------------|
| Hero | Name + title + one line |
| Projects | 3-4 best pieces |
| About | 2-3 paragraphs |
| Contact | Email + LinkedIn |

### Time Budget
```
Week 1: Design and structure
Week 2: Build core pages
Week 3: Add 3-4 projects
Week 4: Polish and launch
```

### The Truth
- Your portfolio is not your best project
- Shipping beats perfecting
- You can always iterate
- Better projects > better portfolio

### When to Stop
- Core pages work on mobile
- 3-4 solid projects showcased
- Contact form works
- Loads in < 3 seconds
- Ship it.

### Portfolio looks great on desktop, broken on mobile

Severity: HIGH

Situation: Recruiters check on phone, everything breaks

Symptoms:
- Looks great in browser DevTools
- Broken on actual phone
- Text too small
- Buttons hard to tap
- Navigation hidden

Why this breaks:
Built desktop-first.
Didn't test on real devices.
Complex interactions don't translate.
Forgot about thumb zones.

Recommended fix:

#### Imported: Mobile-First Portfolio

### Mobile Reality
- 60%+ traffic is mobile
- Recruiters browse on phones
- First impression = mobile impression

### Mobile Must-Haves
- Readable without zooming
- Tappable links (min 44px)
- Navigation works
- Projects load fast
- Contact easy to find

### Testing Checklist
```
[ ] iPhone Safari
[ ] Android Chrome
[ ] Tablet sizes
[ ] Slow 3G simulation
[ ] Real device (not just DevTools)
```

### Graceful Degradation
```css
/* Complex hover → simple tap */
@media (hover: none) {
  .hover-effect {
    /* Show content directly */
  }
}
```

### Visitors don't know what to do next

Severity: MEDIUM

Situation: Great portfolio, zero contacts

Symptoms:
- Lots of views, no contacts
- People don't know you're available
- Contact page is afterthought
- No clear ask

Why this breaks:
No clear CTA.
Contact buried at bottom.
Multiple competing actions.
Assuming visitors will figure it out.

Recommended fix:

#### Imported: Portfolio CTAs

### Primary CTAs
| Goal | CTA |
|------|-----|
| Get hired | "Let's work together" |
| Freelance | "Start a project" |
| Network | "Say hello" |
| Specific role | "Hire me for [X]" |

### CTA Placement
```
Hero section: Main CTA
After projects: Secondary CTA
Footer: Final CTA
Floating: Optional persistent CTA
```

### Making Contact Easy
- Email link (mailto:)
- LinkedIn (opens new tab)
- Calendar link (Calendly)
- Simple contact form
- Copy email button

### What to Avoid
- Contact form only (people hate forms)
- Hidden contact info
- Too many options
- Vague CTAs ("Learn more")

### Portfolio shows old or irrelevant work

Severity: MEDIUM

Situation: Best work is 3 years old, newer work not shown

Symptoms:
- jQuery projects in 2024
- I did this in college
- Tech stack doesn't match target jobs
- Haven't touched portfolio in 2+ years

Why this breaks:
Haven't updated in years.
Newer work is "not ready."
Scared to remove old favorites.
Portfolio drift.

Recommended fix:

#### Imported: Portfolio Freshness

### Update Cadence
| Action | Frequency |
|--------|-----------|
| Add new project | When completed |
| Remove old project | Yearly review |
| Update copy | Every 6 months |
| Tech refresh | Every 1-2 years |

### Project Pruning
Keep if:
- Still proud of it
- Relevant to target jobs
- Shows important skills
- Has good results/story

Remove if:
- Embarrassed by code/design
- Tech is obsolete
- Not relevant to goals
- Better work exists

### Showing Growth
- Latest work first
- Date projects (or don't)
- Show evolution if relevant
- Archive instead of delete

#### Imported: Validation Checks

### No Clear Contact CTA

Severity: HIGH

Message: No clear way for visitors to contact you.

Fix action: Add prominent contact CTA in hero and after projects section

### Missing Mobile Viewport

Severity: HIGH

Message: Portfolio may not be mobile-responsive.

Fix action: Add <meta name='viewport' content='width=device-width, initial-scale=1'>

### Unoptimized Portfolio Images

Severity: MEDIUM

Message: Portfolio images may be slowing down load time.

Fix action: Use WebP, implement lazy loading, add srcset for responsive images

### Projects Missing Live Links

Severity: MEDIUM

Message: Projects should have live links or source code.

Fix action: Add live demo URLs and GitHub links where possible

### Projects Missing Impact/Results

Severity: LOW

Message: Projects don't show impact or results.

Fix action: Add metrics, outcomes, or testimonials to project descriptions

#### Imported: Collaboration

### Delegation Triggers

- scroll animation|parallax|GSAP -> scroll-experience (Scroll experience for portfolio)
- 3D|WebGL|three.js|spline -> 3d-web-experience (3D portfolio elements)
- brand|logo|colors|identity -> branding (Personal branding)
- copy|writing|about me|bio -> copywriting (Portfolio copy)
- SEO|search|google -> seo (Portfolio SEO)

### Developer Portfolio

Skills: interactive-portfolio, frontend, scroll-experience

Workflow:

```
1. Plan portfolio structure
2. Select 3-5 best projects
3. Design hero and project sections
4. Add subtle scroll animations
5. Implement and optimize
6. Launch and share
```

### Creative Portfolio

Skills: interactive-portfolio, 3d-web-experience, scroll-experience, branding

Workflow:

```
1. Define personal brand
2. Design unique experience
3. Build interactive elements
4. Showcase work creatively
5. Ensure mobile works
6. Launch
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
