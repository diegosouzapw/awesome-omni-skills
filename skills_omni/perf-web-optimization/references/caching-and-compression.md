# Caching and Compression

Use this reference when repeat visits are slow, assets re-download unexpectedly, or transfer sizes seem larger than expected.

## Cache policy by resource type

### HTML documents

Use revalidation-focused semantics unless the deployment model clearly justifies something else.

```http
Cache-Control: no-cache
```

This allows reuse with validation rather than treating HTML as permanently fresh.

### Fingerprinted JS/CSS assets

Use aggressive immutable caching only when filenames are content-hashed or versioned.

```http
Cache-Control: public, max-age=31536000, immutable
```

### Images and fonts

If filenames are fingerprinted or deployment semantics are equivalent, cache aggressively.

```http
Cache-Control: public, max-age=31536000, immutable
```

If not fingerprinted, use a shorter policy that matches update frequency.

### API responses

Choose based on sensitivity and freshness.

Examples:

```http
Cache-Control: private, max-age=0, must-revalidate
```

```http
Cache-Control: public, s-maxage=60, stale-while-revalidate=30
```

Apply only if the API and CDN model support those semantics.

## Compression

Verify that text assets are compressed in transit.

- Brotli is preferred when supported.
- Gzip is still useful where Brotli is unavailable.
- Binary formats such as most images generally do not benefit the same way from HTTP content compression.

## Validation commands

```bash
curl -I https://example.com/
curl -I https://example.com/assets/app.abcd1234.js
curl -I --compressed https://example.com/assets/app.abcd1234.js
```

Inspect:

- `Cache-Control`
- `ETag` or `Last-Modified` where relevant
- `Content-Encoding`
- CDN-specific cache headers if the environment adds them

## Common mistakes

- setting `immutable` on non-versioned filenames
- assuming the CDN preserved origin cache headers without verifying
- caching HTML like a fingerprinted static asset
- forgetting to verify compression on production responses
