---
name: seo-competitor-pages
description: "Competitor Comparison & Alternatives Pages workflow skill. Use this skill when the user needs > and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: business
tags: ["seo-competitor-pages", "business", "agents", "assets", "examples", "references", "scripts"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Competitor Comparison & Alternatives Pages

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/seo-competitor-pages` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Competitor Comparison & Alternatives Pages Create high-converting comparison and alternatives pages that target competitive intent keywords with accurate, structured content.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Page Types, Comparison Table Generation, Schema Markup Recommendations, Keyword Targeting, Conversion-Optimized Layouts, Internal Linking.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when creating X vs Y comparison pages or alternatives pages.
- Use when targeting competitor-intent keywords with SEO landing pages.
- Use when the user needs structured comparison content, feature matrices, or conversion-oriented competitor pages.
- Use when the request clearly matches the imported source intent: >.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

#### Imported: Page Types

### 1. "X vs Y" Comparison Pages
- Direct head-to-head comparison between two products/services
- Balanced feature-by-feature analysis
- Clear verdict or recommendation with justification
- Target keyword: `[Product A] vs [Product B]`

### 2. "Alternatives to X" Pages
- List of alternatives to a specific product/service
- Each alternative with brief summary, pros/cons, best-for use case
- Target keyword: `[Product] alternatives`, `best alternatives to [Product]`

### 3. "Best [Category] Tools" Roundup Pages
- Curated list of top tools/services in a category
- Ranking criteria clearly stated
- Target keyword: `best [category] tools [year]`, `top [category] software`

### 4. Comparison Table Pages
- Feature matrix with multiple products in columns
- Sortable/filterable if interactive
- Target keyword: `[category] comparison`, `[category] comparison chart`

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @seo-competitor-pages to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/seo-competitor-pages/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/seo-competitor-pages/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @seo-competitor-pages using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Accuracy: All competitor information must be verifiable from public sources
- No defamation: Never make false or misleading claims about competitors
- Cite sources: Link to competitor websites, review sites, or documentation
- Timely updates: Review and update when competitors release major changes
- Disclose affiliation: Clearly state which product is yours
- Balanced presentation: Acknowledge competitor strengths honestly
- Pricing accuracy: Include "as of [date]" disclaimers on all pricing data

### Imported Operating Notes

#### Imported: Fairness Guidelines

- **Accuracy**: All competitor information must be verifiable from public sources
- **No defamation**: Never make false or misleading claims about competitors
- **Cite sources**: Link to competitor websites, review sites, or documentation
- **Timely updates**: Review and update when competitors release major changes
- **Disclose affiliation**: Clearly state which product is yours
- **Balanced presentation**: Acknowledge competitor strengths honestly
- **Pricing accuracy**: Include "as of [date]" disclaimers on all pricing data
- **Feature verification**: Test competitor features where possible, cite documentation otherwise

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/seo-competitor-pages`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Comparison Table Generation

### Feature Matrix Layout
```
| Feature          | Your Product | Competitor A | Competitor B |
|------------------|:------------:|:------------:|:------------:|
| Feature 1        | ✅           | ✅           | ❌           |
| Feature 2        | ✅           | ⚠️ Partial   | ✅           |
| Feature 3        | ✅           | ❌           | ❌           |
| Pricing (from)   | $X/mo        | $Y/mo        | $Z/mo        |
| Free Tier        | ✅           | ❌           | ✅           |
```

### Data Accuracy Requirements
- All feature claims must be verifiable from public sources
- Pricing must be current (include "as of [date]" note)
- Update frequency: review quarterly or when competitors ship major changes
- Link to source for each competitor data point where possible

#### Imported: Schema Markup Recommendations

### Product Schema with AggregateRating
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[Product Name]",
  "description": "[Product Description]",
  "brand": {
    "@type": "Brand",
    "name": "[Brand Name]"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[Rating]",
    "reviewCount": "[Count]",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

### SoftwareApplication (for software comparisons)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "[Software Name]",
  "applicationCategory": "[Category]",
  "operatingSystem": "[OS]",
  "offers": {
    "@type": "Offer",
    "price": "[Price]",
    "priceCurrency": "USD"
  }
}
```

### ItemList (for roundup pages)
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best [Category] Tools [Year]",
  "itemListOrder": "https://schema.org/ItemListOrderDescending",
  "numberOfItems": "[Count]",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "[Product Name]",
      "url": "[Product URL]"
    }
  ]
}
```

#### Imported: Keyword Targeting

### Comparison Intent Patterns
| Pattern | Example | Search Volume Signal |
|---------|---------|---------------------|
| `[A] vs [B]` | "Slack vs Teams" | High |
| `[A] alternative` | "Figma alternatives" | High |
| `[A] alternatives [year]` | "Notion alternatives 2026" | High |
| `best [category] tools` | "best project management tools" | High |
| `[A] vs [B] for [use case]` | "AWS vs Azure for startups" | Medium |
| `[A] review [year]` | "Monday.com review 2026" | Medium |
| `[A] vs [B] pricing` | "HubSpot vs Salesforce pricing" | Medium |
| `is [A] better than [B]` | "is Notion better than Confluence" | Medium |

### Title Tag Formulas
- X vs Y: `[A] vs [B]: [Key Differentiator] ([Year])`
- Alternatives: `[N] Best [A] Alternatives in [Year] (Free & Paid)`
- Roundup: `[N] Best [Category] Tools in [Year], Compared & Ranked`

### H1 Patterns
- Match title tag intent
- Include primary keyword naturally
- Keep under 70 characters

#### Imported: Conversion-Optimized Layouts

### CTA Placement
- **Above fold**: Brief comparison summary with primary CTA
- **After comparison table**: "Try [Your Product] free" CTA
- **Bottom of page**: Final recommendation with CTA
- Avoid aggressive CTAs in competitor description sections (reduces trust)

### Social Proof Sections
- Customer testimonials relevant to comparison criteria
- G2/Capterra/TrustPilot ratings (with source links)
- Case studies showing migration from competitor
- "Switched from [Competitor]" stories

### Pricing Highlights
- Clear pricing comparison table
- Highlight value advantages (not just lowest price)
- Include hidden costs (setup fees, per-user pricing, overage charges)
- Link to full pricing page

### Trust Signals
- "Last updated [date]" timestamp
- Author with relevant expertise
- Methodology disclosure (how comparisons were conducted)
- Disclosure of own product affiliation

#### Imported: Internal Linking

- Link to your own product/service pages from comparison sections
- Cross-link between related comparison pages (e.g., "A vs B" links to "A vs C")
- Link to feature-specific pages when discussing individual features
- Breadcrumb: Home > Comparisons > [This Page]
- Related comparisons section at bottom of page
- Link to case studies and testimonials mentioned in the comparison

#### Imported: Output

### Comparison Page Template
- `COMPARISON-PAGE.md`: Ready-to-implement page structure with sections
- Feature matrix table
- Content outline with word count targets (minimum 1,500 words)

### Schema Markup
- `comparison-schema.json`: Product/SoftwareApplication/ItemList JSON-LD

### Keyword Strategy
- Primary and secondary keywords
- Related long-tail opportunities
- Content gaps vs existing competitor pages

### Recommendations
- Content improvements for existing comparison pages
- New comparison page opportunities
- Schema markup additions
- Conversion optimization suggestions

#### Imported: Error Handling

| Scenario | Action |
|----------|--------|
| Competitor URL unreachable | Report which competitor URLs failed. Proceed with available data and note gaps in the comparison. |
| Insufficient competitor data (pricing, features unavailable) | Flag missing data points clearly. Use "Not publicly available" in comparison tables rather than guessing. |
| No product/service overlap found | Report that the products serve different markets. Suggest alternative competitors that share feature overlap, or pivot to a category roundup format. |
