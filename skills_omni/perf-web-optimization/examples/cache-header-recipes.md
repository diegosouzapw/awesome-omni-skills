# Example: Cache Header Recipes

## Goal

Apply safer cache rules by resource type and verify them with narrow requests.

## Example policies

### HTML

```http
Cache-Control: no-cache
```

### Fingerprinted JS/CSS

```http
Cache-Control: public, max-age=31536000, immutable
```

### API requiring revalidation

```http
Cache-Control: private, max-age=0, must-revalidate
```

## Verification

```bash
curl -I https://example.com/
curl -I https://example.com/assets/app.abcd1234.js
curl -I --compressed https://example.com/assets/app.abcd1234.js
```

## What to look for

- HTML is not treated like an immutable static file
- hashed assets are long-lived and immutable
- text assets return `Content-Encoding: br` or `gzip` where expected
- the CDN did not silently change the intended policy
