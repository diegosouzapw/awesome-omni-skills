# File Uploads Domain Notes

This reference complements `SKILL.md` with provider-specific details that are useful during implementation and debugging.

## S3 vs R2 Quick Matrix

| Topic | Amazon S3 | Cloudflare R2 | Operator note |
|---|---|---|---|
| Presigned upload model | Standard presigned URL and presigned POST patterns | S3-compatible presigned patterns supported for common upload flows | Keep signed method, path, and headers exact on the client |
| Presigned lifetime practice | Use short expiry for browser uploads | Same operational guidance | Prefer minutes, not hours, for user-driven uploads |
| Browser CORS | Explicit bucket CORS required for browser direct upload | Explicit bucket CORS still matters for browser flows | CORS failures often happen before the object upload is attempted |
| ACL behavior | Object Ownership defaults can break ACL-bearing uploads | Avoid ACL assumptions in portable flows | Prefer ownership/policy-based access models |
| Multipart upload | Standard multipart upload for large files | Multipart supported with compatibility caveats | Use multipart for large/resumable uploads, not single-shot PUT |
| Multipart part sizing | Common S3 multipart rules apply | R2 commonly requires consistent non-final part sizes | Keep client part sizing stable across parts unless the final part differs |
| ETag meaning | Not a universal content hash, especially for multipart | Same caveat | Do not use ETag as integrity proof |
| Checksum strategy | Prefer explicit checksum-aware workflows where available | Verify actual supported checksum path in your chosen SDK/client | Treat integrity as a first-class design decision |
| Stale multipart cleanup | Lifecycle-based cleanup is common | Cleanup still required | Abandoned browser sessions can leave billable state behind |
| Event delivery | Design for at-least-once and retries | Design for at-least-once and retries | Idempotent processing is required |
| Error interpretation | `AccessDenied`, signature mismatch, CORS, invalid part/order are common | Similar classes appear with provider-specific wording | Log canonical request context and part state for diagnosis |

## Presigned Access Notes

- Presigned URLs are authorization artifacts, not general credentials.
- Keep expiry short and scope them to one object key or one constrained key pattern.
- If you sign headers such as `Content-Type`, the client must send the same value.
- If browser uploads need stronger constraints like content-length range or key-prefix restrictions, a presigned POST policy may be more appropriate than a bare PUT URL.

## Browser CORS Checklist

Check all of the following when direct upload from browsers fails:
- Exact frontend origin is allowed.
- Required methods are allowed.
- Required request headers are allowed.
- Exposed response headers are configured if the frontend reads them.
- The browser request matches the method and headers assumed during presigning.

## Multipart Notes

Use multipart when:
- Files are large enough that restart cost is painful.
- Mobile or browser networks are unstable.
- Parallel part upload would materially reduce completion time.
- Resume support is required.

Track at minimum:
- upload ID
- object key
- part number list
- retry count or failure state
- completion timestamp

Operational reminder:
- Incompatibilities are often not about whether multipart exists, but about part-size assumptions, completion ordering, and how the client records completed parts.

## Integrity Notes

Do not rely on these assumptions:
- `ETag == MD5(file)`
- client MIME claim is trustworthy
- object presence alone proves correct upload

Prefer:
- explicit checksum support where available
- object size verification
- post-upload type inspection for sensitive workflows
- application-level recording of expected object identity

## Event-Driven Processing Notes

Storage events should trigger downstream work such as scanning, optimization, or derivative generation, but never assume exactly-once delivery.

Recommended protections:
- idempotency key based on object identity or upload record
- deterministic derivative paths
- retry-safe workers
- clear split between original objects and processed outputs

## Common Failure Classes

### `AccessDenied`
Likely causes:
- ACL header incompatible with bucket ownership mode
- presigned request does not match actual request
- key prefix not permitted by signing policy

### Signature mismatch
Likely causes:
- client changed a signed header
- wrong method used
- URL expired
- path/key was altered after signing

### Multipart completion failure
Likely causes:
- missing uploaded part record
- incorrect part order
- stale upload ID
- inconsistent client state after retries

### Browser-only failure while server-side tools work
Likely causes:
- CORS configuration
- preflight header mismatch
- browser adding headers not accounted for during signing
