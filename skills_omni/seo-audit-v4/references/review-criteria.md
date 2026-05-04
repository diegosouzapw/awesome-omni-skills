# SEO Audit Review Criteria

Use this matrix to match the reported symptom to the right evidence and avoid misclassifying ranking, crawl, indexation, and rendering issues.

## Symptom-to-Evidence Matrix

| Symptom | Primary evidence to check | What it usually means | Validation steps | Source note |
|---|---|---|---|---|
| Important URL is missing from search and not indexed | URL Inspection result, Page Indexing report, sitemap presence | Usually an indexation decision, not automatically a crawl failure | Confirm live URL status, inspect indexation state, compare healthy vs affected URL, check sitemap/internal links | Google Search Console and indexation guidance |
| `Blocked by robots.txt` or disallowed crawling | robots.txt rules, crawl behavior, affected path pattern | Google cannot crawl blocked URLs, so many downstream signals cannot be confirmed | Verify exact matching rule, test whether important assets or pages are unintentionally blocked, assess pattern scope | robots exclusion protocol / Google robots guidance |
| `Crawled - currently not indexed` at scale | Page Indexing trend, sample URL inspections, content similarity, internal links | Often quality duplication, weak distinct value, render incompleteness, or low-priority URL patterns | Compare healthy and affected templates, inspect rendered content, assess link prominence, determine whether the URLs deserve indexing | Google indexing guidance |
| `Discovered - currently not indexed` | Discovery state, crawl demand, server health, internal links | URL is known but not yet crawled at useful depth; may involve crawl efficiency, server load, or low priority | Check server reliability, internal linking depth, sitemap quality, and whether URL patterns are high-value or noisy | Google crawling and host-load concepts |
| Google-selected canonical differs from user-declared canonical | URL Inspection canonical fields, redirects, internal links, sitemap, hreflang | Tag alone is weaker than a consistent signal cluster | Compare duplicate candidates, check redirect/canonical consistency, inspect internal links and sitemap targets | Google canonicalization guidance |
| Page looks complete in browser but indexed content is incomplete | Rendered HTML vs initial HTML, blocked resources, link extraction | Usually a rendering/discoverability gap rather than pure ranking | Check whether critical text, links, metadata, and structured data exist before/after rendering; inspect delayed hydration patterns | Google JavaScript SEO guidance |
| Large soft 404 population | Search Console exclusion state, sample page usefulness, content uniqueness | URL returns success status but appears empty, expired, placeholder, or low-value | Review content depth, page intent match, thin template generation, and whether stale pages should exist | Google soft 404 guidance |
| Rich result loss or ineligibility | Structured data validity, policy compliance, page content parity | Markup may be invalid, unsupported for that experience, or policy-ineligible | Confirm required fields, content parity, and whether the feature still has current search support | Google structured data/rich result guidance |
| Mobile indexing mismatch | Mobile rendering parity, metadata parity, content differences | Mobile-first indexing evaluates the mobile experience representation | Compare mobile-visible content, links, structured data, and metadata against desktop; inspect blocked resources or hidden content | Google mobile-first guidance |
| Organic decline after migration | Redirect mapping, final status codes, canonical targets, internal links, sitemap updates | Migration mechanics may be breaking URL consolidation or discovery | Validate top templates and high-value URLs, identify redirect chains/loops, check canonical and internal link alignment | Google site move and URL handling guidance |
| Coverage decline during outages | 5xx errors, timeouts, crawl stats, incident timing | Server instability can reduce crawl efficiency and confidence | Check whether important sections return intermittent server errors; prioritize reliability before optimization | HTTP/server behavior and Google crawl health guidance |
| Poor CWV visibility or UX concern | Field performance data, template patterns, rendering behavior | Performance can affect experience and some search systems, but does not explain every ranking loss | Use field data where available, identify template-level regressions, and frame CWV as one signal among others; use INP rather than FID framing | Current Core Web Vitals guidance |

## Review Heuristics

### 1. Separate crawl, index, and rank
A page can be:

- crawlable but not indexed,
- indexed but not ranking well,
- discoverable only after rendering,
- canonicalized away despite a self-referencing tag.

Do not treat these as the same problem.

### 2. Compare affected URLs with a control URL
For any meaningful diagnosis, compare:

- one affected URL,
- one healthy URL from the same template or intent class,
- one likely duplicate or competing canonical when relevant.

This reduces speculative recommendations.

### 3. Favor pattern-level findings over isolated anomalies
Escalate an issue when it affects:

- a key template family,
- a high-value business section,
- a recurring exclusion state,
- a post-launch or post-migration pattern.

Do not over-prioritize one-off anomalies unless the page is business-critical.

### 4. Treat Search Console states as diagnostic clues, not standalone verdicts
Examples:

- `Alternate page with proper canonical tag` may be expected or may indicate over-consolidation.
- `Soft 404` may reflect genuinely weak pages, not just status-code mistakes.
- `Crawled - currently not indexed` often needs content and pattern review, not only technical checks.

### 5. Canonical strength is cumulative
Declared canonical is only one signal. Stronger conflicting signals can include:

- redirects to another URL,
- internal links favoring a different version,
- sitemap inclusion mismatch,
- parameterized duplicates,
- near-identical content clusters,
- hreflang inconsistency.

### 6. Rendering diagnosis must inspect what Google can actually use
Check whether the page exposes, in a timely and stable way:

- primary text,
- navigation links,
- product or article entities,
- metadata,
- structured data,
- pagination or faceted discovery links.

If essential elements appear only after fragile client-side execution, treat that as a real audit risk.

## Prioritization Model

Use this lightweight model in your audit output:

- **Critical** — Blocks crawling/indexing or causes widespread canonical misassignment on important pages.
- **High** — Strongly degrades discovery, rendering, mobile parity, or migration stability for valuable sections.
- **Medium** — Material quality, duplication, performance, or markup issue with measurable but not existential impact.
- **Low** — Limited-scope issue, weak evidence, or low-value URL pattern.

Confidence bands:

- **High** — Multiple evidence sources agree and affected pattern is clear.
- **Medium** — Evidence is directionally strong but incomplete.
- **Low** — Plausible explanation, but more data is required.

## Reporting Rules

In every major finding, include:

1. exact symptom,
2. evidence source,
3. affected scope,
4. likely cause,
5. confidence level,
6. next validation or remediation action.

Avoid these common mistakes:

- claiming Google will reindex on a specific timeline,
- promising rankings after fixes,
- calling every excluded URL a defect,
- prescribing bulk canonical or redirect changes without pattern validation,
- using outdated CWV language that centers FID instead of INP.
