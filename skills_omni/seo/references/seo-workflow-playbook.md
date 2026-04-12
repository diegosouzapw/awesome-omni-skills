# SEO workflow playbook

Use this playbook for technical SEO work that must be evidence-based and reviewable.

## 1. Define the target

Record:

- target URL or template
- page type
- expected canonical URL
- target locale, if relevant
- whether the issue is indexing, snippets, schema, sitemap, canonicalization, or hreflang

## 2. Capture baseline evidence

Before changing anything, collect:

- HTTP status code
- key response headers
- canonical tag
- meta robots tag
- page title and meta description
- visible H1
- structured data types found
- whether the URL appears in the sitemap
- whether `robots.txt` blocks crawling
- Search Console evidence if available

Use `examples/search-console-evidence-template.md`.

## 3. Diagnose the control plane

Check the relationship between:

- redirects
- canonicals
- meta robots or X-Robots-Tag
- internal links
- sitemap entries
- hreflang targets

Look for conflicting signals.

## 4. Apply the smallest safe fix

Examples:

- fix template-generated duplicate titles
- replace conflicting canonical targets
- remove non-canonical URLs from sitemaps
- add `noindex` to a thin utility page that should stay crawlable
- add Product or BreadcrumbList markup only where visible content supports it

## 5. Validate after change

Re-check live output for:

- correct canonical
- correct robots directives
- correct title and description
- correct schema output
- correct sitemap behavior
- correct hreflang cluster behavior where applicable

## 6. Prepare handoff notes

Include:

- what changed
- what evidence improved immediately
- what still depends on recrawl, reindexing, or enhancement reprocessing
- any unresolved CMS or platform limitations

## Canonical consistency checklist

A preferred canonical URL should usually be the same URL used in:

- self-canonical tag
- internal navigation links
- breadcrumb links
- XML sitemap entries
- hreflang alternate sets
- primary redirect destination for variants

If these disagree, fix the cluster before expecting stable canonical selection.
