---
name: seo-programmatic-v2
description: "Programmatic SEO Analysis & Planning workflow skill. Use this skill when the user needs Plan and audit programmatic SEO pages generated at scale from structured data. Use when designing templates, URL systems, internal linking, quality gates, and index-bloat safeguards for pages at scale and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: business
tags: ["seo-programmatic-v2", "seo-programmatic", "plan", "and", "audit", "programmatic", "seo", "pages"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Programmatic SEO Analysis & Planning

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/seo-programmatic` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Programmatic SEO Analysis & Planning Build and audit SEO pages generated at scale from structured data sources. Enforces quality gates to prevent thin content penalties and index bloat.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Data Source Assessment, Template Engine Planning, URL Pattern Strategy, Internal Linking Automation, Thin Content Safeguards, Canonical Strategy.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the user wants programmatic SEO planning or review.
- Use when designing templates, data-driven pages, or scalable URL systems.
- Use when preventing thin content and index bloat across large page sets.
- Use when the request clearly matches the imported source intent: Plan and audit programmatic SEO pages generated at scale from structured data. Use when designing templates, URL systems, internal linking, quality gates, and index-bloat safeguards for pages at scale.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

#### Imported: Data Source Assessment

Evaluate the data powering programmatic pages:
- **CSV/JSON files**: Row count, column uniqueness, missing values
- **API endpoints**: Response structure, data freshness, rate limits
- **Database queries**: Record count, field completeness, update frequency
- Data quality checks:
  - Each record must have enough unique attributes to generate distinct content
  - Flag duplicate or near-duplicate records (>80% field overlap)
  - Verify data freshness; stale data produces stale pages

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @seo-programmatic-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @seo-programmatic-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @seo-programmatic-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @seo-programmatic-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/seo-programmatic`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@seo-fundamentals-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@seo-geo-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@seo-hreflang-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@seo-images-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Index Bloat Prevention

- **Noindex low-value pages**: Pages that don't meet quality gates
- **Pagination**: Noindex paginated results beyond page 1 (or use rel=next/prev)
- **Faceted navigation**: Noindex filtered views, canonical to base category
- **Crawl budget**: For sites with >10k programmatic pages, monitor crawl stats in Search Console
- **Thin page consolidation**: Merge records with insufficient data into aggregated pages
- **Regular audits**: Monthly review of indexed page count vs intended count

#### Imported: Template Engine Planning

Design templates that produce unique, valuable pages:
- **Variable injection points**: Title, H1, body sections, meta description, schema
- **Content blocks**: Static (shared across pages) vs dynamic (unique per page)
- **Conditional logic**: Show/hide sections based on data availability
- **Supplementary content**: Related items, contextual tips, user-generated content
- Template review checklist:
  - Each page must read as a standalone, valuable resource
  - No "mad-libs" patterns (just swapping city/product names in identical text)
  - Dynamic sections must add genuine information, not just keyword variations

#### Imported: URL Pattern Strategy

### Common Patterns
- `/tools/[tool-name]`: Tool/product directory pages
- `/[city]/[service]`: Location + service pages
- `/integrations/[platform]`: Integration landing pages
- `/glossary/[term]`: Definition/reference pages
- `/templates/[template-name]`: Downloadable template pages

### URL Rules
- Lowercase, hyphenated slugs derived from data
- Logical hierarchy reflecting site architecture
- No duplicate slugs; enforce uniqueness at generation time
- Keep URLs under 100 characters
- No query parameters for primary content URLs
- Consistent trailing slash usage (match existing site pattern)

#### Imported: Internal Linking Automation

- **Hub/spoke model**: Category hub pages linking to individual programmatic pages
- **Related items**: Auto-link to 3-5 related pages based on data attributes
- **Breadcrumbs**: Generate BreadcrumbList schema from URL hierarchy
- **Cross-linking**: Link between programmatic pages sharing attributes (same category, same city, same feature)
- **Anchor text**: Use descriptive, varied anchor text. Avoid exact-match keyword repetition
- Link density: 3-5 internal links per 1000 words (match seo-content guidelines)

#### Imported: Thin Content Safeguards

### Quality Gates

| Metric | Threshold | Action |
|--------|-----------|--------|
| Pages without content review | 100+ | ⚠️ WARNING: require content audit before publishing |
| Pages without justification | 500+ | 🛑 HARD STOP: require explicit user approval and thin content audit |
| Unique content per page | <40% | ❌ Flag as thin content (likely penalty risk) |
| Word count per page | <300 | ⚠️ Flag for review (may lack sufficient value) |

### Scaled Content Abuse: Enforcement Context (2025-2026)

Google's Scaled Content Abuse policy (introduced March 2024) saw major enforcement escalation in 2025:

- **June 2025:** Wave of manual actions targeting websites with AI-generated content at scale
- **August 2025:** SpamBrain spam update enhanced pattern detection for AI-generated link schemes and content farms
- **Result:** Google reported 45% reduction in low-quality, unoriginal content in search results post-March 2024 enforcement

**Enhanced quality gates for programmatic pages:**
- **Content differentiation:** ≥30-40% of content must be genuinely unique between any two programmatic pages (not just city/keyword string replacement)
- **Human review:** Minimum 5-10% sample review of generated pages before publishing
- **Progressive rollout:** Publish in batches of 50-100 pages. Monitor indexing and rankings for 2-4 weeks before expanding. Never publish 500+ programmatic pages simultaneously without explicit quality review.
- **Standalone value test:** Each page should pass: "Would this page be worth publishing even if no other similar pages existed?"
- **Site reputation abuse:** If publishing programmatic content under a high-authority domain (not your own), this may trigger site reputation abuse penalties. Google began enforcing this aggressively in November 2024.

> **Recommendation:** The WARNING gate at `<40% unique content` remains appropriate. Consider a HARD STOP at `<30%` unique content to prevent scaled content abuse risk.

### Safe Programmatic Pages (OK at scale)
✅ Integration pages (with real setup docs, API details, screenshots)
✅ Template/tool pages (with downloadable content, usage instructions)
✅ Glossary pages (200+ word definitions with examples, related terms)
✅ Product pages (unique specs, reviews, comparison data)
✅ Data-driven pages (unique statistics, charts, analysis per record)

### Penalty Risk (avoid at scale)
❌ Location pages with only city name swapped in identical text
❌ "Best [tool] for [industry]" without industry-specific value
❌ "[Competitor] alternative" without real comparison data
❌ AI-generated pages without human review and unique value-add
❌ Pages where >60% of content is shared template boilerplate

### Uniqueness Calculation
Unique content % = (words unique to this page) / (total words on page) × 100

Measure against all other pages in the programmatic set. Shared headers, footers, and navigation are excluded from the calculation. Template boilerplate text IS included.

#### Imported: Canonical Strategy

- Every programmatic page must have a self-referencing canonical tag
- Parameter variations (sort, filter, pagination) canonical to the base URL
- Paginated series: canonical to page 1 or use rel=next/prev
- If programmatic pages overlap with manual pages, the manual page is canonical
- No canonical to a different domain unless intentional cross-domain setup

#### Imported: Sitemap Integration

- Auto-generate sitemap entries for all programmatic pages
- Split at 50,000 URLs per sitemap file (protocol limit)
- Use sitemap index if multiple sitemap files needed
- `<lastmod>` reflects actual data update timestamp (not generation time)
- Exclude noindexed programmatic pages from sitemap
- Register sitemap in robots.txt
- Update sitemap dynamically as new records are added to data source

#### Imported: Output

### Programmatic SEO Score: XX/100

### Assessment Summary
| Category | Status | Score |
|----------|--------|-------|
| Data Quality | ✅/⚠️/❌ | XX/100 |
| Template Uniqueness | ✅/⚠️/❌ | XX/100 |
| URL Structure | ✅/⚠️/❌ | XX/100 |
| Internal Linking | ✅/⚠️/❌ | XX/100 |
| Thin Content Risk | ✅/⚠️/❌ | XX/100 |
| Index Management | ✅/⚠️/❌ | XX/100 |

### Critical Issues (fix immediately)
### High Priority (fix within 1 week)
### Medium Priority (fix within 1 month)
### Low Priority (backlog)

### Recommendations
- Data source improvements
- Template modifications
- URL pattern adjustments
- Quality gate compliance actions

#### Imported: Error Handling

| Scenario | Action |
|----------|--------|
| URL unreachable | Report connection error with status code. Suggest verifying URL accessibility and checking for authentication requirements. |
| No programmatic pages detected | Inform user that no template-generated or data-driven page patterns were found. Suggest checking if pages use client-side rendering or if the URL points to the correct section. |
| Thin content threshold exceeded | Trigger quality gate warning. Report the unique content percentage and flag pages below 40% uniqueness. Require user acknowledgment before proceeding. |
| Quality gate violation | Halt analysis at the HARD STOP threshold (500+ pages without justification or <30% unique content). Present findings and require explicit user approval to continue. |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
