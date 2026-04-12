# hreflang implementation checklist

Use this checklist for multilingual or multi-regional pages.

## Each locale cluster should have

- a self-referencing hreflang entry
- reciprocal links between alternates
- valid locale codes
- canonical tags that point to the same locale URL, not a different locale
- a reasonable `x-default` target when a fallback page exists

## Verify for every alternate

- URL returns 200
- URL is indexable
- language declaration is present in HTML where appropriate
- page is discoverable through links or sitemap
- content is actually localized, not only machine-swapped boilerplate

## Common failure patterns

- one locale references another but no return tag exists
- canonical points all locales to a single language version
- invalid region code or malformed hreflang value
- alternates listed in hreflang but blocked or `noindex`

## Review note

If search engines show the wrong locale, inspect canonicalization first, then hreflang reciprocity, then discoverability and language signals.
