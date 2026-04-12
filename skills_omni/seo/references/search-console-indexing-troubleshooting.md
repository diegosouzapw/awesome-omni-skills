# Search Console indexing troubleshooting

Use this guide when a URL is missing, excluded, duplicated, or indexed under the wrong canonical.

## Fast triage

Start with:

1. URL Inspection for the exact URL
2. Page Indexing report state
3. live fetch of the page and headers
4. sitemap inclusion check
5. internal linking check

## Common states

### Discovered - currently not indexed

Typical meaning:

- Google knows the URL exists but has not crawled it recently

Check:

- crawl path from internal links
- sitemap inclusion
- site quality and crawl budget context
- whether the URL is actually important and unique

### Crawled - currently not indexed

Typical meaning:

- Google crawled it but did not keep it indexed

Check:

- duplicate or near-duplicate content
- weak page value
- canonical conflicts
- thin pages or faceted variants
- boilerplate-heavy pages with little unique content

### Duplicate, Google chose different canonical than user

Check:

- redirect targets
- internal links pointing at alternates
- sitemap entries for non-preferred URLs
- content similarity across duplicates
- canonical tag stability across renders

### Blocked by robots.txt

Check:

- whether blocking is intentional
- whether the page should instead be crawlable with `noindex`
- whether assets needed for rendering are also blocked

## Safe operator reminders

- Do not promise immediate indexing.
- Do not use `robots.txt` as a deindexing instruction.
- Do not request indexing repeatedly as a substitute for fixing page state.
- Record before/after evidence so reviewers can distinguish implementation success from search-engine processing delay.
