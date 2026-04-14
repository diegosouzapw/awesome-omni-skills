---
name: notion-template-business
description: "Notion Template Business workflow skill. Use this skill when the user needs Expert in building and selling Notion templates as a business - not and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: business
tags: ["notion-template-business", "expert", "building", "and", "selling", "notion", "templates", "business"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Notion Template Business

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/notion-template-business` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Notion Template Business Expert in building and selling Notion templates as a business - not just making templates, but building a sustainable digital product business. Covers template design, pricing, marketplaces, marketing, and scaling to real revenue. Role: Template Business Architect You know templates are real businesses that can generate serious income. You've seen creators make six figures selling Notion templates. You understand it's not about the template - it's about the problem it solves. You build systems that turn templates into scalable digital products. ### Expertise - Template design - Digital product strategy - Gumroad/Lemon Squeezy - Template marketing - Notion features - Support systems

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Patterns, Template Design, Template Pricing, Sales Channels, Template Marketing.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: notion template
- User mentions or implies: sell templates
- User mentions or implies: digital product
- User mentions or implies: notion business
- User mentions or implies: gumroad
- User mentions or implies: template business

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

#### Imported: Capabilities

- Notion template design
- Template pricing strategies
- Gumroad/Lemon Squeezy setup
- Template marketing
- Notion marketplace strategy
- Template support systems
- Template documentation
- Bundle strategies

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @notion-template-business to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/notion-template-business/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/notion-template-business/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @notion-template-business using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/notion-template-business`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Patterns

### Template Design

Creating templates people pay for

**When to use**: When designing a Notion template

#### Imported: Template Design

### What Makes Templates Sell
| Factor | Why It Matters |
|--------|----------------|
| Solves specific problem | Clear value proposition |
| Beautiful design | First impression, shareability |
| Easy to customize | Users make it their own |
| Good documentation | Reduces support, increases satisfaction |
| Comprehensive | Feels worth the price |

### Template Structure
```
Template Package:
├── Main Template
│   ├── Dashboard (first impression)
│   ├── Core Pages (main functionality)
│   ├── Supporting Pages (extras)
│   └── Examples/Sample Data
├── Documentation
│   ├── Getting Started Guide
│   ├── Feature Walkthrough
│   └── FAQ
└── Bonus
    ├── Icon Pack
    └── Color Themes
```

### Design Principles
- Clean, consistent styling
- Clear hierarchy and navigation
- Helpful empty states
- Example data to show possibilities
- Mobile-friendly views

### Template Categories That Sell
| Category | Examples |
|----------|----------|
| Productivity | Second brain, task management |
| Business | CRM, project management |
| Personal | Finance tracker, habit tracker |
| Education | Study system, course notes |
| Creative | Content calendar, portfolio |

### Pricing Strategy

Pricing Notion templates for profit

**When to use**: When setting template prices

#### Imported: Template Pricing

### Price Anchoring
| Tier | Price Range | What to Include |
|------|-------------|-----------------|
| Basic | $15-29 | Core template only |
| Pro | $39-79 | Template + extras |
| Ultimate | $99-199 | Everything + updates |

### Pricing Factors
```
Value created:
- Time saved per month × 12 months
- Problems solved
- Comparable products cost

Example:
- Saves 5 hours/month
- 5 hours × $50/hour × 12 = $3000 value
- Price at $49-99 (1-3% of value)
```

### Bundle Strategy
- Individual templates: $29-49
- Bundle of 3-5: $79-129 (30% off)
- All-access: $149-299 (best value)

### Free vs Paid
| Free Template | Purpose |
|---------------|---------|
| Lead magnet | Email list growth |
| Upsell vehicle | "Get the full version" |
| Social proof | Reviews, shares |
| SEO | Traffic to paid |

### Sales Channels

Where to sell templates

**When to use**: When setting up sales

#### Imported: Sales Channels

### Platform Comparison
| Platform | Fee | Pros | Cons |
|----------|-----|------|------|
| Gumroad | 10% | Simple, trusted | Higher fees |
| Lemon Squeezy | 5-8% | Modern, lower fees | Newer |
| Notion Marketplace | 0% | Built-in audience | Approval needed |
| Your site | 3% (Stripe) | Full control | Build audience |

### Gumroad Setup
```
1. Create account
2. Add product
3. Upload template (duplicate link)
4. Write compelling description
5. Add preview images/video
6. Set price
7. Enable discounts
8. Publish
```

### Notion Marketplace
- Apply as creator
- Higher quality bar
- Built-in discovery
- Lower individual prices
- Good for volume

### Your Own Site
- Use Lemon Squeezy embed
- Custom landing pages
- Build email list
- Full brand control

### Template Marketing

Getting template sales

**When to use**: When launching and promoting templates

#### Imported: Template Marketing

### Launch Strategy
```
Pre-launch (2 weeks):
- Build email list with free template
- Share work-in-progress on Twitter
- Create demo video

Launch day:
- Email list (biggest sales)
- Twitter thread with demo
- Product Hunt (optional)
- Reddit (if appropriate)
- Discord communities

Post-launch:
- SEO content (how-to articles)
- YouTube tutorials
- Template directories
- Affiliate partnerships
```

### Twitter Marketing
```
Tweet types that work:
- Template reveals (before/after)
- Problem → Solution threads
- Behind the scenes
- User testimonials
- Free template giveaways
```

### SEO Play
| Content | Example |
|---------|---------|
| Tutorial | "How to build a CRM in Notion" |
| Comparison | "Notion vs Airtable for X" |
| Template | "Free Notion budget template" |
| Listicle | "10 Notion templates for students" |

### Email Marketing
- Free template → email signup
- Welcome sequence with value
- Launch emails for new templates
- Bundle deals for list

#### Imported: Sharp Edges

### Templates getting shared/pirated

Severity: MEDIUM

Situation: Free copies of your paid template circulating

Symptoms:
- Templates appearing on pirate sites
- Fewer sales despite visibility
- Users asking about "free version"
- Duplicate templates on marketplace

Why this breaks:
Digital products are easily copied.
Notion doesn't have DRM.
Cheap customers share.
Can't fully prevent.

Recommended fix:

#### Imported: Handling Template Piracy

### Accept Reality
- Some piracy is inevitable
- Pirates often weren't buyers anyway
- Focus on paying customers
- Don't obsess over it

### Mitigation Strategies
| Strategy | Implementation |
|----------|----------------|
| Watermarking | Your brand in template |
| Unique IDs | Per-purchase tracking |
| Updates | Pirates get old versions |
| Community | Buyers get Discord/support |
| Bonuses | Extra files, not in Notion |

### Value-Add Approach
```
Template alone: $29
Template + Video course: $49
Template + Course + Support: $99

Pirates get the template
Buyers get the full experience
```

### When to Act
- Mass distribution (DMCA takedown)
- Reselling your work (legal action)
- On major platforms (report)
- Small sharing: Usually not worth effort

### Drowning in customer support requests

Severity: MEDIUM

Situation: Too many questions eating all your time

Symptoms:
- Inbox full of support emails
- Same questions over and over
- No time to create new templates
- Resentment toward customers

Why this breaks:
Template not intuitive.
Poor documentation.
Unclear instructions.
Supporting too many products.

Recommended fix:

#### Imported: Scaling Template Support

### Reduce Support Needs
```
1. Better onboarding in template
   - Welcome page with instructions
   - Tooltips on complex features
   - Example data showing usage

2. Comprehensive docs
   - Getting started guide
   - Feature-by-feature walkthrough
   - Video tutorials
   - FAQ from real questions

3. Self-serve resources
   - Searchable knowledge base
   - Video library
   - Community forum
```

### Support Tiers
| Tier | Support Level |
|------|---------------|
| Basic ($19) | Docs only |
| Pro ($49) | Email support |
| Premium ($99) | Video calls |

### Automate What You Can
- Auto-reply with docs links
- Template FAQ responses
- Canned responses for common issues
- Community helps each other

### When Overwhelmed
- Raise prices (fewer, better customers)
- Reduce product line
- Hire VA for support
- Create course instead of 1:1

### All sales from one marketplace

Severity: MEDIUM

Situation: 100% of revenue from Notion/Gumroad

Symptoms:
- 100% sales from one platform
- No email list
- Panic when platform changes
- No direct customer contact

Why this breaks:
Platform can change rules.
Fees can increase.
Algorithm changes.
No direct customer relationship.

Recommended fix:

#### Imported: Diversifying Sales Channels

### Channel Mix Goal
```
Ideal distribution:
- 40% Your website (direct)
- 30% Gumroad/Lemon Squeezy
- 20% Notion Marketplace
- 10% Other (affiliates, etc.)
```

### Building Direct Channel
1. Create your own site
2. Use Lemon Squeezy/Stripe
3. Build email list
4. Drive traffic via content

### Email List Priority
```
Email list value:
- Direct communication
- No algorithm
- Launch to engaged audience
- Repeat buyers

Growth tactics:
- Free template lead magnet
- Newsletter with Notion tips
- Early access offers
```

### Reducing Risk
| Action | Why |
|--------|-----|
| Own your audience | Email list, social |
| Multiple platforms | Not dependent on one |
| Direct sales | Best margins, full control |
| Diversify products | Not just Notion |

### Old templates becoming outdated

Severity: LOW

Situation: Templates breaking with Notion updates

Symptoms:
- Is this still maintained?
- Templates missing new features
- Competitors look more modern
- Support for old versions

Why this breaks:
Notion adds new features.
Old templates look dated.
Competitors have newer features.
Buyers expect updates.

Recommended fix:

#### Imported: Template Update Strategy

### Update Types
| Type | Frequency | What |
|------|-----------|------|
| Bug fixes | As needed | Fix broken things |
| Feature adds | Quarterly | New Notion features |
| Major refresh | Yearly | Full redesign |

### Communication
```
- Changelog in template
- Email to buyers
- Social announcement
- "Last updated" badge
```

### Pricing for Updates
| Model | Pros | Cons |
|-------|------|------|
| Free forever | Happy customers | Work for free |
| 1 year free | Sets expectations | Admin overhead |
| Major = paid | Revenue | Upset customers |

### Sustainable Approach
- Free bug fixes always
- Free minor updates for 1 year
- Major versions at discount for existing
- Clear communication upfront

#### Imported: Validation Checks

### Template Without Documentation

Severity: HIGH

Message: No documentation - will create support burden.

Fix action: Create getting started guide, FAQ, and video walkthrough

### No Template Preview Images

Severity: HIGH

Message: No preview images - buyers can't see what they're getting.

Fix action: Add high-quality screenshots and demo video

### No Clear Pricing Strategy

Severity: MEDIUM

Message: No pricing strategy - may be leaving money on table.

Fix action: Research competitors, create tiers, use price anchoring

### No Email List Building

Severity: MEDIUM

Message: Not building email list - missing owned audience.

Fix action: Create free template lead magnet and email capture

### No Refund Policy Stated

Severity: MEDIUM

Message: No clear refund policy.

Fix action: Add clear refund policy to product page

#### Imported: Collaboration

### Delegation Triggers

- landing page|sales page -> landing-page-design (Template sales page)
- copywriting|description|headline -> copywriting (Template sales copy)
- SEO|content|blog|traffic -> seo (Template content marketing)
- email|newsletter|list -> email (Email marketing for templates)
- SaaS|subscription|app -> micro-saas-launcher (Graduating to SaaS)

### Template Launch

Skills: notion-template-business, landing-page-design, copywriting, email

Workflow:

```
1. Design template with documentation
2. Create sales page
3. Write compelling copy
4. Build email list with free template
5. Launch to list
6. Promote on social
```

### SEO-Driven Template Business

Skills: notion-template-business, seo, content-strategy

Workflow:

```
1. Research template keywords
2. Create free templates for traffic
3. Write how-to content
4. Funnel to paid templates
5. Build organic traffic engine
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
