# SEO Audit Review Criteria

Use this rubric while evaluating evidence and drafting findings. It is designed to keep audits consistent, scoped, and defensible.

## 1. Evidence Standard

A strong finding usually includes all of the following:

- **Observed state**: what was seen on the page, template, crawl sample, or report.
- **Affected scope**: one URL, one template, one site section, or sitewide.
- **Mechanism**: how the issue can affect crawling, indexing, canonical selection, rendering, or search appearance.
- **Proof source**: public HTML, rendered HTML, response headers, sitemap contents, internal links, Search Console state, or supplied exports.
- **Next validation step**: what would confirm the root cause or verify recovery.

Avoid findings that only say performance dropped or rankings fell without a technical mechanism.

## 2. Severity Calibration

Use severity based on **scope x business importance x confidence**.

### Critical
Use when important pages or templates are effectively prevented from discovery, indexing, or correct canonical selection.

Typical patterns:
- robots rules block required crawling paths
- noindex applied across key templates
- canonicals point major landing pages elsewhere
- migration redirects fail on important URL sets
- server behavior returns non-200 responses for priority content

### High
Use when discoverability or index quality is materially suppressed, but not a complete blocker.

Typical patterns:
- widespread duplicate clusters with ambiguous canonicals
- key pages buried with weak internal linking
- rendering issues hide important content or links on major templates
- sitemap and canonical conflicts affect large page groups

### Medium
Use when the issue matters but has narrower scope, lower confidence, or lower direct impact.

Typical patterns:
- title duplication across secondary templates
- moderate click-depth issues
- structured data gaps on pages where eligibility matters but indexing is intact

### Low
Use for hygiene issues or localized defects with limited organic consequence.

### Monitor
Use when there is a plausible risk but the evidence is not yet sufficient to confirm impact.

## 3. Review Criteria by Issue Family

## Crawlability

Check:
- Are important URLs reachable through HTML links?
- Are there crawl traps from facets, parameters, calendars, or infinite spaces?
- Do robots rules block assets or paths needed for understanding pages?
- Are redirects or status codes interrupting discovery paths?

Evidence that strengthens the finding:
- robots.txt excerpts
- sample internal-link paths
- response-code samples
- sample orphan URLs or very deep URLs

Do not overstate:
- A URL not ranking is not proof of a crawl block.

## Indexation

Check:
- Can sampled URLs be indexed in principle: 200 status, indexable directives, self-consistent canonical signal?
- Are important pages excluded due to duplication, noindex, soft-404 behavior, or low-value templates?
- Are XML sitemaps listing only canonical, indexable URLs?

Evidence that strengthens the finding:
- page-level directive samples
- canonical clusters
- Search Console page indexing states if supplied
- sitemap-to-page mismatch examples

Do not overstate:
- Indexation loss is not always caused by robots.txt.

## Canonicalization and Duplication

Check:
- Does each important page declare a sensible canonical target?
- Do canonicals conflict with redirects, hreflang, pagination patterns, or internal linking?
- Are duplicate route variants created by parameters, sort orders, or alternate paths?

Evidence that strengthens the finding:
- side-by-side canonical samples
- duplicate URL pairs or clusters
- self-canonical presence/absence by template
- canonical target returning redirect or non-200

Do not overstate:
- A canonical is a strong signal, not an absolute guarantee.

## Rendering and JavaScript SEO

Check:
- Are critical content, links, metadata, canonicals, or structured data present in raw HTML, rendered HTML, or both?
- Does client-side rendering delay or omit important crawl/index signals?
- Are links real crawlable anchors or only interaction-driven elements?

Evidence that strengthens the finding:
- raw vs rendered comparisons
- missing anchor examples
- altered head elements after hydration
- blocked or delayed loaded content samples

Do not overstate:
- JavaScript alone is not an issue; missing critical output is.

## Internal Linking and Architecture

Check:
- Do priority pages receive internal links from relevant sections?
- Is click depth reasonable for high-value pages?
- Are there orphaned URLs or template islands?
- Does navigation concentrate authority on the wrong pages?

Evidence that strengthens the finding:
- representative click paths
- orphan examples
- depth comparisons across templates
- navigation/link module samples

## On-Page Signals and Content Quality

Check:
- Do titles and headings help differentiate pages?
- Is the content sufficiently unique and useful for the query intent it targets?
- Are there thin or near-duplicate templates competing with each other?

Evidence that strengthens the finding:
- title/heading duplication samples
- repeated body-content patterns
- low-differentiation template examples

Do not overstate:
- E-E-A-T is not a binary checklist; focus on observable quality and trust signals.

## Structured Data

Check:
- Is the markup valid and aligned with visible page content?
- Are required properties present for the intended schema type?
- Is the chosen schema type appropriate for the page purpose?

Evidence that strengthens the finding:
- markup snippets
- validation output summaries
- visible-content mismatch examples

Do not overstate:
- Valid markup does not guarantee a rich result.

## Performance and Mobile Usability

Check:
- Do performance or mobile issues materially affect crawling, rendering, or access to important content?
- Are key templates impaired on mobile-first presentation?

Evidence that strengthens the finding:
- template-level screenshots or summaries
- repeated layout/interaction failures
- field or lab metrics only when tied to business pages

Do not overstate:
- Not every poor metric is a top-priority SEO defect.

## 4. Recommended Finding Structure

Use this pattern:

1. **Issue**
2. **Severity**
3. **Affected scope**
4. **Evidence**
5. **Likely cause**
6. **SEO impact**
7. **Confidence**
8. **Next validation step**

## 5. Quality Checks Before Finalizing the Audit

Ask:
- Did I separate confirmed defects from hypotheses?
- Did I explain why the issue matters for search behavior, not just why it is technically imperfect?
- Did I state the size of the problem clearly?
- Did I avoid unsupported claims about penalties or algorithm impacts?
- Did I prioritize sitewide blockers before local enhancements?
- Did I include at least one next validation step for major findings?
