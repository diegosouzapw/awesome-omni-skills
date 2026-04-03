# Security Headers Verification (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/best-practices/references/security-headers-verification.md) · 🇪🇸 [es](../../../../es/skills_omni/best-practices/references/security-headers-verification.md) · 🇫🇷 [fr](../../../../fr/skills_omni/best-practices/references/security-headers-verification.md) · 🇩🇪 [de](../../../../de/skills_omni/best-practices/references/security-headers-verification.md) · 🇮🇹 [it](../../../../it/skills_omni/best-practices/references/security-headers-verification.md) · 🇷🇺 [ru](../../../../ru/skills_omni/best-practices/references/security-headers-verification.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/best-practices/references/security-headers-verification.md) · 🇯🇵 [ja](../../../../ja/skills_omni/best-practices/references/security-headers-verification.md) · 🇰🇷 [ko](../../../../ko/skills_omni/best-practices/references/security-headers-verification.md) · 🇸🇦 [ar](../../../../ar/skills_omni/best-practices/references/security-headers-verification.md) · 🇮🇳 [hi](../../../../hi/skills_omni/best-practices/references/security-headers-verification.md) · 🇮🇳 [in](../../../../in/skills_omni/best-practices/references/security-headers-verification.md) · 🇹🇭 [th](../../../../th/skills_omni/best-practices/references/security-headers-verification.md) · 🇻🇳 [vi](../../../../vi/skills_omni/best-practices/references/security-headers-verification.md) · 🇮🇩 [id](../../../../id/skills_omni/best-practices/references/security-headers-verification.md) · 🇲🇾 [ms](../../../../ms/skills_omni/best-practices/references/security-headers-verification.md) · 🇳🇱 [nl](../../../../nl/skills_omni/best-practices/references/security-headers-verification.md) · 🇵🇱 [pl](../../../../pl/skills_omni/best-practices/references/security-headers-verification.md) · 🇸🇪 [sv](../../../../sv/skills_omni/best-practices/references/security-headers-verification.md) · 🇳🇴 [no](../../../../no/skills_omni/best-practices/references/security-headers-verification.md) · 🇩🇰 [da](../../../../da/skills_omni/best-practices/references/security-headers-verification.md) · 🇫🇮 [fi](../../../../fi/skills_omni/best-practices/references/security-headers-verification.md) · 🇵🇹 [pt](../../../../pt/skills_omni/best-practices/references/security-headers-verification.md) · 🇷🇴 [ro](../../../../ro/skills_omni/best-practices/references/security-headers-verification.md) · 🇭🇺 [hu](../../../../hu/skills_omni/best-practices/references/security-headers-verification.md) · 🇧🇬 [bg](../../../../bg/skills_omni/best-practices/references/security-headers-verification.md) · 🇸🇰 [sk](../../../../sk/skills_omni/best-practices/references/security-headers-verification.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/best-practices/references/security-headers-verification.md) · 🇮🇱 [he](../../../../he/skills_omni/best-practices/references/security-headers-verification.md) · 🇵🇭 [phi](../../../../phi/skills_omni/best-practices/references/security-headers-verification.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/best-practices/references/security-headers-verification.md) · 🇨🇿 [cs](../../../../cs/skills_omni/best-practices/references/security-headers-verification.md) · 🇹🇷 [tr](../../../../tr/skills_omni/best-practices/references/security-headers-verification.md)

---


Use this reference to verify modern web security headers without overclaiming coverage.

## Priority order

1. `Strict-Transport-Security`
2. `Content-Security-Policy`
3. `X-Content-Type-Options`
4. `Referrer-Policy`
5. `Permissions-Policy`
6. `X-Frame-Options` only as legacy back-compat support when relevant

## Verification commands

```bash
curl -I https://example.com
curl -sSI https://example.com | tr -d '\r'
```

Review the response for headers such as:

```text
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'; frame-ancestors 'self'; object-src 'none'; base-uri 'self'
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
X-Frame-Options: DENY
```

## Notes

### HSTS

- Recommend only on HTTPS sites.
- Be careful with `includeSubDomains` if subdomains are not consistently HTTPS.
- Do not recommend `preload` casually.

### CSP

- Prefer response headers.
- Nonce- or hash-based patterns are stronger than permissive inline allowlists.
- `Report-Only` is useful during rollout.

### X-Content-Type-Options

- `nosniff` helps enforce MIME expectations for scripts and styles.

### Referrer-Policy

- `strict-origin-when-cross-origin` is a reasonable default in many apps.

### Permissions-Policy

- Deny unused powerful features by default.
- Grant narrowly only when the app requires them.

### X-Frame-Options

- Useful for legacy support, but `frame-ancestors` in CSP is the modern primary control.

### Do not recommend as a modern baseline

```text
X-XSS-Protection: 1; mode=block
```

This header is deprecated and should not be treated as a primary modern mitigation.
