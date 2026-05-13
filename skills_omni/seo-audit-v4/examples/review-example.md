# Worked Example: SEO Audit Finding Set

This example shows the expected quality bar for a scoped, evidence-based SEO audit.

## Scenario

A retailer reports a 35% drop in non-brand organic sessions to product pages two weeks after a platform redesign.

### Available inputs
- 25 sample product URLs
- robots.txt
- XML sitemap index and product sitemap
- exported HTML from old and new product templates
- Search Console page indexing summaries provided by the user

### Stated constraints
- No production changes during the audit
- No server log access
- Report should identify likely technical causes and priority order only

## Example audit output

### Scope and limitations

Scope covers the `/products/` section on the primary domain. Evidence includes supplied template exports, public URL checks, sitemap review, and Search Console summaries. No log access was available, so crawl-frequency conclusions remain limited.

### Executive summary

The strongest technical issue is a template-level canonical regression affecting product pages. Product URLs remain reachable and return 200, but many now declare category URLs as canonical targets. This likely suppresses product-page indexation and aligns with the timing of the traffic drop. Secondary issues include weaker internal linking to long-tail products and invalid product structured data on sampled pages.

### Top issues by severity

1. High — Product pages canonicalized to category URLs
2. Medium — Product sitemap includes URLs with conflicting canonical targets
3. Medium — Product structured data missing required price/availability fields on sampled pages
4. Low — Filter pages consume navigation prominence and dilute links to product detail pages

---

## Detailed findings

### Finding 1

**Issue:** Product pages canonicalized to category URLs

**Severity:** High

**Affected scope:** Sample indicates a template-level issue across the product detail page set; user estimates ~4,800 product URLs.

**Evidence:**
- Five sampled product URLs return HTTP 200 and are linked from category pages.
- Each sampled product page contains a canonical tag pointing to its parent category URL rather than to itself.
- The product sitemap lists the product URLs directly, creating a signal conflict.
- Search Console summaries supplied by the user show a rise in "Alternate page with proper canonical tag" for product URLs after the redesign.

**Likely cause:**
The redesigned product template appears to reuse the category canonical rule instead of emitting a self-referential canonical for unique product pages.

**SEO impact:**
Search engines may treat category pages as the preferred representative and exclude many product detail pages from independent indexing. This can reduce long-tail visibility and lower organic entrances to product pages.

**Confidence:** High

**Recommended next validation step:**
Confirm canonical generation logic on the product template, then recheck a wider sample of product URLs and resubmit representative pages for recrawl after correction.

### Finding 2

**Issue:** Product sitemap includes URLs that conflict with page-level canonical signals

**Severity:** Medium

**Affected scope:** Product sitemap entries sampled from the current sitemap export.

**Evidence:**
- Sampled sitemap entries list product URLs as canonical candidates.
- The live HTML of those same URLs points canonical to category URLs.
- No redirect explains the mismatch.

**Likely cause:**
Sitemap generation still assumes product URLs should be indexed, while page templates now emit conflicting canonical instructions.

**SEO impact:**
Conflicting signals can slow diagnosis and weaken confidence in which URLs should be indexed.

**Confidence:** High

**Recommended next validation step:**
Align sitemap inclusion rules with corrected canonical behavior and re-sample product URLs after deployment.

### Finding 3

**Issue:** Product structured data is incomplete on sampled templates

**Severity:** Medium

**Affected scope:** 8 of 10 sampled product pages.

**Evidence:**
- Product schema is present, but sampled pages omit price and availability fields.
- Visible page content includes both values, so the gap appears template-driven rather than content-driven.

**Likely cause:**
The schema template is not mapping commerce attributes consistently after redesign.

**SEO impact:**
This may reduce eligibility for rich product presentation, though it is not the primary cause of the reported traffic drop.

**Confidence:** Medium

**Recommended next validation step:**
Validate the structured data template against a larger sample and compare required fields with visible content outputs.

### Finding 4

**Issue:** Filter pages receive stronger navigation exposure than deeper product pages

**Severity:** Low

**Affected scope:** Category navigation on sampled template set.

**Evidence:**
- Category pages expose multiple filter combinations through crawlable links.
- Product pages deeper in the hierarchy receive fewer persistent links from navigation modules.

**Likely cause:**
Navigation emphasizes filtering and discovery tools over direct reinforcement of product detail pages.

**SEO impact:**
This may dilute crawl focus and internal link equity, but it is secondary to the canonical problem.

**Confidence:** Medium

**Recommended next validation step:**
Review link-module design and compare internal-link counts for category, filter, and product detail pages.

---

## Fix now / validate next / monitor

### Fix now
- Resolve product-page canonical logic.
- Reconcile sitemap entries with intended canonical targets.

### Validate next
- Check whether corrected canonicals change Search Console indexing states on a representative sample.
- Expand structured data validation across additional product templates.

### Monitor
- Organic entrances to product pages after technical corrections.
- Distribution of indexed product URLs versus category URLs.

## Why this is a strong example

- It states scope and limitations.
- It avoids claiming a penalty or algorithm hit.
- It ties each issue to evidence and affected scope.
- It separates the likely primary cause from secondary quality issues.
- It gives concrete next validation steps instead of vague advice.
