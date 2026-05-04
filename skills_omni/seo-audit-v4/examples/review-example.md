# Worked SEO Audit Example

This example shows how to transform a vague SEO complaint into an evidence-led audit output.

## Scenario

**Business context:** Ecommerce site, product detail pages drive revenue.

**User complaint:**

```text
Organic traffic to product pages dropped after a frontend release two weeks ago.
Search Console shows many product URLs as "Crawled - currently not indexed".
Developers say the pages load fine in the browser.
```

**Available evidence:**

- Search Console property access
- Sample of 25 affected product URLs
- Sample of 10 healthy product URLs
- Release note: product description module moved to client-side rendering

## Good Audit Approach

### 1. Scope statement

```text
Audit scope: /products/ URL pattern on the primary ecommerce domain.
Objective: determine whether the post-release traffic decline is caused by crawl, indexation, rendering, canonical, or quality issues.
Constraint: no server logs available.
```

### 2. Evidence summary

```text
- Search Console Page Indexing shows a sharp increase in "Crawled - currently not indexed" beginning within 3 days of the release.
- URL Inspection on sampled affected URLs shows successful crawl but inconsistent rendered availability of core description content.
- Healthy product URLs retain substantial text in initial HTML and have stronger internal link visibility from category pages.
- Affected URLs return 200 status and self-referencing canonicals; no robots blocking was found.
```

### 3. Structured finding

**Finding:** Product detail pages rely too heavily on client-side rendering for primary descriptive content after the release.

**Why it matters:** Google can crawl these URLs, but if the pages expose weak or incomplete product content before or during rendering, they are more likely to be judged as low-value or deprioritized for indexation. This aligns with the observed increase in `Crawled - currently not indexed`.

**Evidence:**

- Timing of the exclusion increase aligns with the frontend release.
- Affected URLs expose substantially less descriptive text in initial HTML than healthy control URLs.
- Browser-visible content depends on client-side execution of the new module.
- No robots, noindex, or redirect issue explains the pattern.

**Affected scope:** Product detail page template for the `/products/` section; likely sitewide across newly rendered variants.

**Priority:** High

**Confidence:** Medium-High

**Recommended next action:** Validate that essential product text, internal links, and key metadata are available consistently without depending on delayed client-side execution. Re-test a controlled sample of affected URLs after template adjustment.

## What a Weak Audit Would Say

```text
Google probably has a crawling problem. Add more keywords, resubmit the sitemap, and wait for rankings to recover.
```

Why this is weak:

- Confuses crawl access with indexation quality.
- Does not use the release timing.
- Does not compare affected URLs with healthy controls.
- Promises recovery without evidence.
- Recommends generic actions that may not address the actual defect.

## Example Final Output Snippet

```text
Audit scope
- Product detail pages under /products/
- Focused on post-release indexation decline

Observed symptoms
- Sharp growth in "Crawled - currently not indexed"
- Organic traffic decline concentrated on product URLs

Key findings
1. High priority: primary product content now depends on client-side rendering
   - Evidence: affected URLs expose less useful initial HTML than healthy controls; timing matches release
   - Impact: likely reduces indexation confidence for important revenue pages
   - Confidence: Medium-High

2. Medium priority: internal link prominence to affected products appears weaker on category templates
   - Evidence: affected URLs are linked less consistently from category pages than healthy controls
   - Impact: may reduce discovery and reinforce low-priority treatment
   - Confidence: Medium

Prioritized remediation queue
- Confirm template parity for initial HTML and rendered content on product pages
- Validate internal linking consistency from category and related-product modules
- Re-inspect a representative URL set after changes

Confidence and evidence limits
- No server logs were available, so crawl-budget and host-load conclusions remain tentative
```

## Operator Takeaway

A good audit does not stop at the exclusion label. It uses timing, controls, template comparison, and evidence hierarchy to explain the most likely cause and to keep recommendations narrow and testable.
