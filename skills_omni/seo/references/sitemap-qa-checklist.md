# Sitemap QA checklist

Use this checklist before generating, shipping, or submitting XML sitemaps.

## Include only URLs that are

- canonical
- indexable
- HTTP 200
- not blocked by `robots.txt`
- not marked `noindex`
- not redirecting
- not soft-404
- not obvious duplicates

## Verify generation quality

- sitemap uses absolute URLs
- URL encoding is valid
- `lastmod` is accurate when provided
- large sets are split appropriately
- sitemap index is used where needed
- `robots.txt` points to the sitemap when appropriate

## Search Console follow-up

If Search Console is available:

- inspect sitemap processing status
- note warnings and errors
- sample excluded URLs from submitted sets
- compare sitemap coverage against Page Indexing states

## Common cleanup actions

Remove from sitemap:

- parameter duplicates
- pagination duplicates that should not be canonical entries
- redirecting legacy URLs
- staging or preview URLs
- filtered search-result URLs
- pages intentionally excluded from indexing
