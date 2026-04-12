# Security Headers and CSP Guide

Use this guide when reviewing or changing transport, response headers, cookie posture, and CSP.

## 1. Recommended modern header baseline

| Header / Control | Status | Notes |
| --- | --- | --- |
| `Strict-Transport-Security` | Recommended after HTTPS is stable | Deploy only after confirming HTTPS works consistently |
| `Content-Security-Policy` | Recommended | Prefer response header delivery |
| `X-Content-Type-Options: nosniff` | Recommended | Low-risk baseline hardening |
| `Referrer-Policy: strict-origin-when-cross-origin` | Common default recommendation | Adjust only if product needs differ |
| `Permissions-Policy` | Recommended where feature restrictions are known | Scope to actual app capabilities |
| `X-Frame-Options` | Legacy defense-in-depth | Prefer `frame-ancestors` in CSP as the modern control |
| `X-XSS-Protection` | Avoid as modern requirement | Deprecated and not a current baseline |

## 2. HTTPS and HSTS review

### Verify

- no `http://` asset URLs remain in rendered pages or config
- redirects to HTTPS are consistent
- secure cookies are only sent over HTTPS
- no mixed-content warnings appear in the browser console

### HSTS caution

Good baseline example after HTTPS is fully working:

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Add `preload` only if the deployment is truly ready for preload requirements.

## 3. CSP deployment patterns

### Starter CSP

Use when beginning a migration and the app already avoids most inline code.

```http
Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; object-src 'none'; base-uri 'self'; frame-ancestors 'self'; form-action 'self';
```

### Nonce-based CSP

Use when some inline scripts or styles still must exist during migration.

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-r4nd0m'; style-src 'self' 'nonce-r4nd0m'; img-src 'self' data: https:; connect-src 'self' https://api.example.com; object-src 'none'; base-uri 'self'; frame-ancestors 'self'; form-action 'self';
```

Rendered HTML example:

```html
<script nonce="r4nd0m">
  window.bootstrapData = { ok: true }
</script>
```

### Report-only rollout

Use when the app is likely to break and you need evidence before enforcement.

```http
Content-Security-Policy-Report-Only: default-src 'self'; script-src 'self' 'nonce-r4nd0m'; object-src 'none'; base-uri 'self'; frame-ancestors 'self';
```

## 4. Common CSP migration blockers

| Symptom | Likely cause | Safer fix |
| --- | --- | --- |
| Inline script blocked | missing nonce/hash | generate nonce server-side or move script into static asset |
| Inline style blocked | style block or style attribute use | move styles to stylesheet or use nonce temporarily |
| Third-party widget blocked | origin not allowed | allow only the exact required origin after review |
| Framing stops working | `frame-ancestors` too strict | explicitly allow only required embed origins |
| Form posts fail | `form-action` too strict | add only the required submit target |

## 5. Cookie review checklist

Inspect actual response headers and verify:

- `Secure` is present for cookies used over HTTPS
- `HttpOnly` is present for session/auth cookies where JS access is not needed
- `SameSite` is chosen deliberately
- `Domain` is omitted unless cross-subdomain sharing is required
- `Path` is not broader than necessary
- `__Host-` prefix is used where applicable for host-only secure cookies

### SameSite quick choice

- `Strict`: strongest CSRF resistance, but may break some cross-site return flows
- `Lax`: common default for many session flows
- `None`: requires `Secure`; use only for true cross-site needs

## 6. Validation steps

Use at least two of the following where possible:

- browser devtools network panel
- `curl -I https://example.com`
- Mozilla Observatory
- SecurityHeaders

Do not treat framework config alone as proof of deployment behavior.
