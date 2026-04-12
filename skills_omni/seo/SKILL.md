---
name: "seo"
description: "SEO optimization workflow skill. Use this skill when the user needs crawlability, indexing, canonicalization, metadata, structured data, sitemap, or hreflang improvements for search visibility. Use when asked to improve SEO, optimize for search, fix meta tags, add structured data, troubleshoot indexing, or clean up sitemap and canonical issues. Do not use this skill for accessibility remediation, performance tuning, link-building strategy, or broad multi-area audits; route those to the appropriate adjacent skills."
version: "0.0.1"
category: "business"
tags:
  - "seo"
  - "technical-seo"
  - "structured-data"
  - "metadata"
  - "canonical"
  - "sitemap"
  - "hreflang"
  - "search-console"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "seo"
family_name: "SEO optimization"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/seo"
upstream_skill: "skills/seo"
upstream_author: "web-quality-skills"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "seo"
---

# SEO optimization

## Overview

Use this skill to improve search visibility through technical SEO work that can be verified in page markup, HTTP responses, sitemaps, and Google Search Console.

This skill is strongest for:

- crawl and index control
- canonicalization and duplicate URL cleanup
- title and meta description improvements
- structured data implementation and validation
- sitemap quality and submission checks
- multilingual and multi-regional hreflang fixes

Treat **Google Search Central** and **Google Search Console** as the primary operational authorities. Use Lighthouse only as a secondary local linting aid, not as the final source of truth for production SEO decisions.

This skill preserves the intent of the imported source while updating execution guidance to current best practices. In particular:

- do **not** use `robots.txt` as a deindexing mechanism
- do **not** rely on `rel="prev"` / `rel="next"` as a Google indexing signal
- do **not** assume valid Schema.org markup guarantees rich results
- do require before/after evidence when making SEO changes

## When to Use This Skill

Use this skill when the request is primarily about search engine discoverability and search-result presentation.

### Use this skill for

- "Improve SEO" for a specific site, section, template, or page type
- fixing missing, duplicate, vague, or conflicting title tags and meta descriptions
- troubleshooting why a page is not indexed or why Google selected a different canonical
- adding or repairing canonical tags, robots directives, sitemap entries, or hreflang clusters
- adding structured data that matches visible page content and is relevant to supported Google search features
- validating that key pages are crawlable, indexable, canonicalized correctly, and represented cleanly in sitemaps

### Do not use this skill for

- accessibility remediation; use `@web-accessibility`
- page speed and Core Web Vitals tuning; use `@core-web-vitals`
- broad multi-area website audits spanning UX, accessibility, performance, analytics, and SEO; use `@web-quality-audit`
- content strategy, editorial planning, or link-building campaigns
- security remediation beyond SEO-relevant crawl/index implications

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| A page is missing from Google | `references/search-console-indexing-troubleshooting.md` | Guides URL Inspection, indexing-state interpretation, and next checks |
| Canonical conflicts or duplicate URLs | `references/seo-workflow-playbook.md` | Gives a repeatable canonical review flow and consistency checks |
| Sitemap cleanup or validation | `references/sitemap-qa-checklist.md` | Prevents submitting redirects, noindex pages, or non-canonicals |
| Structured data work | `references/structured-data-validation-playbook.md` | Separates schema validity from rich-result eligibility |
| International SEO issues | `references/hreflang-implementation-checklist.md` | Covers reciprocal hreflang, self-references, and canonical alignment |
| Reviewer evidence packet | `examples/search-console-evidence-template.md` | Standardizes before/after proof for handoff or PR review |
| Safe evidence collection | `scripts/collect_seo_evidence.sh` | Collects non-destructive page, header, robots, and sitemap clues |
| Skill routing or handoff | `agents/seo-router.md` | Clarifies when to switch to adjacent skills |

## Workflow

1. **Confirm scope and route correctly.**
   - Identify whether the task is about indexing, snippets, structured data, canonicalization, sitemaps, or international targeting.
   - If the real issue is performance, accessibility, or a full-site quality review, hand off early.

2. **Capture baseline evidence before editing.**
   - Record the target URL, page type, environment, and expected canonical URL.
   - Inspect live HTML and response headers.
   - Check `robots.txt`, meta robots, canonical tag, sitemap inclusion, and current structured data.
   - If available, capture Search Console evidence using URL Inspection, Page Indexing, Sitemaps, and Enhancements reports.
   - Use the template in `examples/search-console-evidence-template.md`.

3. **Identify the dominant SEO failure mode.**
   - Crawl blocked
   - Indexed incorrectly
   - Duplicate/canonical conflict
   - Poor snippet/title/description alignment
   - Structured data missing/invalid/ineligible
   - Sitemap quality issue
   - hreflang or language-targeting issue

4. **Apply the smallest safe change that resolves the root cause.**
   - Prefer template-level fixes over one-off page edits when the issue is systemic.
   - Keep canonical, internal links, redirects, hreflang, and sitemap entries aligned.
   - Add structured data only when it matches visible page content.

5. **Validate locally and against Google-facing rules.**
   - Re-check the rendered HTML and headers.
   - For structured data, run both Schema.org validation and Rich Results Test when the type is supported by Google.
   - For sitemaps, confirm included URLs are canonical, indexable, and return 200.

6. **Deploy and verify post-change evidence.**
   - Re-run safe checks.
   - If Search Console is available, inspect the URL again and monitor relevant reports.
   - Document what changed, what improved, and what still depends on recrawl or reprocessing.

7. **Prepare reviewer handoff.**
   - Attach before/after evidence.
   - Note any unresolved constraints such as delayed reindexing, unsupported schema types, or upstream CMS limitations.

## Implementation Guidance

### Crawl and index controls

Use the right control for the right job.

| Need | Primary mechanism | Notes |
| --- | --- | --- |
| Reduce crawler access to areas | `robots.txt` | Controls crawling, not guaranteed deindexing |
| Prevent indexing of HTML pages | `<meta name="robots" content="noindex">` | Page must usually be crawlable to process `noindex` |
| Prevent indexing of non-HTML files | `X-Robots-Tag: noindex` | Useful for PDFs and similar assets |
| Consolidate duplicates | canonical tags plus redirects where appropriate | Keep all canonical signals consistent |
| Limit snippet behavior | robots snippet directives or `data-nosnippet` | Use for specific display control edge cases |

**Example: robots.txt**

```text
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://example.com/sitemap.xml
```

**Example: meta robots**

```html
<meta name="robots" content="index,follow,max-image-preview:large" />
<meta name="robots" content="noindex,follow" />
```

**Example: X-Robots-Tag for non-HTML assets**

```text
X-Robots-Tag: noindex
```

### Canonicalization and duplicate URLs

Canonical signals should agree across the whole stack.

- preferred pages should usually self-canonicalize
- non-preferred variants should redirect when practical
- internal links should point to canonical URLs
- sitemap entries should list canonical URLs only
- hreflang targets should use canonical URLs
- avoid conflicts between `noindex`, canonical tags, redirects, and internal linking

**Canonical example**

```html
<link rel="canonical" href="https://example.com/products/blue-widget" />
```

Avoid outdated pagination advice. For paginated collections, focus on:

- crawlable navigation links
- sensible self-canonicals or page-specific canonicals according to actual content intent
- strong internal linking to important destination pages
- avoiding accidental duplication through filter and parameter combinations

### Titles, descriptions, and visible-content alignment

Titles and meta descriptions are strong optimization levers, but they are hints, not guarantees.

**Better title example**

```html
<title>Blue Widgets for Sale | Example Store</title>
```

**Better description example**

```html
<meta name="description" content="Shop blue widgets with current pricing, specifications, and shipping details from Example Store." />
```

Practical guidance:

- make each title distinct and specific to the page intent
- keep titles and descriptions aligned with visible page content
- avoid boilerplate-heavy or near-duplicate metadata across templates
- use snippet controls only for a concrete reason, not by default

**Snippet-control examples**

```html
<meta name="robots" content="max-snippet:160,max-image-preview:large,max-video-preview:-1" />
<span data-nosnippet>Internal SKU: BW-18473</span>
```

### Structured data

Separate two questions:

1. **Is the schema syntactically and semantically valid?**
2. **Is the page eligible for a Google rich result or search enhancement?**

Those are not the same.

Use schema that:

- matches visible page content
- is accurate and not misleading
- is appropriate for the page type
- aligns with supported Google search features when the goal is search enhancement

See:

- `references/structured-data-validation-playbook.md`
- `examples/jsonld-patterns.md`

### Sitemaps

A sitemap is a discovery aid, not a place to dump every known URL.

Include only URLs that are:

- canonical
- indexable
- status `200`
- not blocked by `robots.txt`
- not `noindex`
- not soft-404 or redirecting

For large sites:

- split into sitemap files and use a sitemap index
- keep `lastmod` accurate
- validate post-deploy in Search Console when available

### International SEO

Use hreflang only when you truly have alternate localized versions.

Requirements:

- valid language or language-region codes
- reciprocal hreflang references
- self-referencing hreflang entries
- canonical alignment within each locale cluster
- an `x-default` target when it improves fallback behavior
- alternate pages discoverable through links or sitemaps

See `references/hreflang-implementation-checklist.md`.

## Examples

### Example 1: Collect safe baseline evidence for a page

```bash
bash scripts/collect_seo_evidence.sh https://example.com/products/blue-widget
```

Expected outcome:

- prints HTTP status and selected response headers
- extracts canonical and robots clues from the HTML
- reports whether `robots.txt` advertises a sitemap
- does not change server state

### Example 2: Ask the agent to troubleshoot an indexing issue

```text
Use @seo to diagnose why https://example.com/pricing is not indexed. Capture baseline evidence first, check robots, canonical, sitemap inclusion, and Search Console signals, then propose the smallest safe fix and the post-deploy verification steps.
```

### Example 3: Request structured data implementation with validation

```text
Use @seo to add Product and BreadcrumbList JSON-LD to the product template. Only include properties supported by visible content, validate with Schema.org rules, then verify rich-result eligibility separately.
```

### Example 4: Review sitemap quality before submission

```text
Use @seo to audit the XML sitemap for canonical-only, indexable, 200-status URLs and list any redirects, noindex URLs, duplicates, or blocked entries that should be removed.
```

## Best Practices

### Do

- capture before/after evidence for every SEO change
- verify the live rendered page, not only source templates
- use Search Console evidence when production access exists
- keep canonical, redirects, internal links, hreflang, and sitemaps mutually consistent
- treat Schema.org validation and Google rich-result eligibility as separate checks
- use template-level fixes for repeated metadata or markup defects
- keep metadata descriptive, specific, and aligned with visible content
- route performance, accessibility, and broad audits to adjacent skills

### Don't

- don't promise ranking gains or rich-result appearance
- don't use `robots.txt` as a deindexing mechanism
- don't block resources needed for rendering important content
- don't add schema that is invisible, inaccurate, or unsupported for the page type
- don't include redirects, duplicates, blocked URLs, or `noindex` pages in sitemaps
- don't create conflicting signals such as `noindex` plus canonical-to-index target without a clear reason
- don't treat Lighthouse as the main authority for production indexing or canonical decisions
- don't use rigid character-count rules as guarantees for titles or descriptions

## Troubleshooting

### Problem: Page is blocked by robots.txt but still appears in search

**Symptoms:** The URL shows up in results with limited snippet information, and `robots.txt` disallows crawling.

**Solution:** Remember that `robots.txt` controls crawling, not guaranteed deindexing. If the page must disappear from search, allow crawling long enough for a `noindex` directive to be seen, or use another supported removal path. Check Search Console URL Inspection and Page Indexing evidence before changing directives.

### Problem: URL is crawled or discovered but not indexed

**Symptoms:** Search Console shows states such as discovered currently not indexed or crawled currently not indexed.

**Solution:** Verify status code, rendered content quality, canonical target, internal links, and sitemap inclusion. Make sure the page is valuable, indexable, and not sending mixed signals through canonicals, duplication, or thin content. Re-inspect after deployment and document that recrawl timing is external.

### Problem: Google selected a different canonical than declared

**Symptoms:** URL Inspection reports a user-declared canonical that differs from the Google-selected canonical.

**Solution:** Review the whole canonical cluster: redirects, duplicate pages, parameter variants, internal links, sitemap entries, hreflang targets, and content similarity. Align all signals on the preferred URL and remove contradictory references to alternates.

### Problem: Structured data validates but no rich result appears

**Symptoms:** Schema passes syntax checks, but Search Console or rich-result testing does not show the expected enhancement.

**Solution:** Check whether the type is supported for Google search features, whether required and recommended properties are present, and whether the markup matches visible content. Passing Schema.org validation alone is not enough. Record any delay due to reprocessing.

### Problem: Submitted sitemap contains non-indexable URLs

**Symptoms:** Search Console sitemap reports warnings or indexing reports show many submitted URLs excluded.

**Solution:** Remove redirects, `noindex` pages, blocked URLs, duplicates, soft-404s, and non-canonical URLs from the sitemap. Rebuild using only canonical, indexable, status-200 URLs and resubmit if appropriate.

### Problem: Wrong language or regional page appears in search

**Symptoms:** Users in one locale are shown a different locale page, or alternates are not clustered correctly.

**Solution:** Check hreflang reciprocity, self-references, valid locale codes, canonical alignment, and `x-default` usage. Ensure each alternate URL is crawlable, indexable, and discoverable by links or sitemap.

### Problem: Google rewrote the title or snippet

**Symptoms:** Search results show title text or descriptions different from the provided metadata.

**Solution:** Review duplication, boilerplate, mismatch between metadata and visible content, and overlong or vague wording. Improve on-page heading and visible summary content as well as metadata; search snippets are generated dynamically and may still differ.

## Related Skills

- `@web-accessibility` - use when the main work is semantic HTML, alt-text correctness for accessibility, keyboard support, or broader a11y remediation
- `@core-web-vitals` - use when ranking concerns are tied mainly to loading, rendering, responsiveness, or page experience metrics
- `@web-quality-audit` - use when the request is a comprehensive website audit across multiple disciplines

## Additional Resources

### Local support pack

- [SEO workflow playbook](references/seo-workflow-playbook.md)
- [Search Console indexing troubleshooting](references/search-console-indexing-troubleshooting.md)
- [Sitemap QA checklist](references/sitemap-qa-checklist.md)
- [Structured data validation playbook](references/structured-data-validation-playbook.md)
- [hreflang implementation checklist](references/hreflang-implementation-checklist.md)
- [Page-type SEO matrix](examples/page-type-seo-matrix.md)
- [JSON-LD patterns](examples/jsonld-patterns.md)
- [Search Console evidence template](examples/search-console-evidence-template.md)
- [Safe evidence collection script](scripts/collect_seo_evidence.sh)
- [SEO router note](agents/seo-router.md)

### Primary external references

- Google Search Central: <https://developers.google.com/search/docs>
- SEO Starter Guide: <https://developers.google.com/search/docs/fundamentals/seo-starter-guide>
- Robots controls: <https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag>
- robots.txt guidance: <https://developers.google.com/search/docs/crawling-indexing/robots/intro>
- Canonicalization guidance: <https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls>
- Sitemaps guidance: <https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap>
- Structured data intro: <https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data>
- Google search feature gallery: <https://developers.google.com/search/docs/appearance/structured-data/search-gallery>
- Schema.org: <https://schema.org/>
- Schema.org validator: <https://validator.schema.org/>
- Rich Results Test: <https://search.google.com/test/rich-results>
- International and hreflang guidance: <https://developers.google.com/search/docs/specialty/international/localized-versions>
