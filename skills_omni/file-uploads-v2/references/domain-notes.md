# File Upload Domain Notes

Use this note when you need the provider-specific details that would clutter the main skill.

## S3 Modern Baseline

- **Encryption:** Amazon S3 automatically encrypts new objects at rest by default, but teams should still verify the chosen encryption mode and any compliance-specific requirements.
- **Object ownership:** Modern S3 defaults favor bucket-owner-enforced ownership with ACLs disabled. Avoid designing new systems around object ACL manipulation.
- **Public exposure:** Prefer all four Block Public Access settings unless public access is an explicit business requirement.

## Presigned URL Controls

Treat presigned URLs as bearer credentials.

### Good defaults
- Keep expiration short.
- Scope each URL to one object key or narrowly controlled prefix.
- Sign only the headers the client must send.
- Generate URLs from a server component that already performed authorization and quota checks.

### Useful policy constraints
- Signature age limits where supported by bucket policy.
- Source-network restrictions when traffic patterns are stable enough to support them.
- Content-length or upload-form constraints where your upload method supports them.

### Common mistakes
- Long-lived URLs embedded in logs or browser history.
- Reusing one URL for multiple uploads.
- Letting clients choose arbitrary object keys.

## Validation Signals Are Separate

Use all three signals when deciding whether to accept a file:
- **Extension**: useful for UI and coarse policy checks
- **Declared MIME type**: useful as a hint only
- **File signature / magic bytes**: strongest content clue, but still not a full trust boundary for complex formats

A file that passes only one of the three should not be considered safe.

## Checksum Notes

Checksums help confirm object integrity during upload and post-upload verification.

- Use checksums when your client and storage flow support them.
- Do not confuse integrity verification with file-type validation.
- Record checksum expectations alongside upload metadata when downstream processing depends on exact object identity.

## Multipart Upload Notes

### Use multipart when
- files are large
- client networks are unreliable
- resumable behavior matters
- retrying the full upload would be too expensive

### Operational controls
- Store upload session state so clients can retry parts safely.
- Abort failed multipart uploads explicitly.
- Add lifecycle cleanup for incomplete multipart uploads to control storage cost.

## S3 vs Cloudflare R2 Quick Comparison

| Topic | Amazon S3 | Cloudflare R2 |
|---|---|---|
| Presigned URL model | Standard S3-style presigned requests | S3-compatible presigned behavior for many workflows |
| ACL expectations | Prefer bucket-owner-enforced ownership; avoid ACL-dependent designs | S3-compatible surface, but review provider docs before assuming identical edge behavior |
| Multipart uploads | Mature multipart behavior; cleanup still required | Multipart supported, but non-final part sizing consistency matters more during implementation |
| Public access posture | Prefer Block Public Access unless intentionally public | Review bucket exposure and token strategy explicitly; do not assume S3 account-level guardrails exist the same way |
| Error debugging | Standard S3 error model and IAM/policy troubleshooting | S3-compatible API with provider-specific error wording and operational caveats |

## R2 Multipart Caution

When targeting Cloudflare R2:
- keep non-final parts at a consistent size
- verify the exact uploaded part list before completion
- test completion and retry logic against R2 directly, not only against S3-compatible local tooling

## MIME Serving Reminder

Even after a file is accepted, incorrect response `Content-Type` handling can create downstream issues.

- Serve files with deliberate content types.
- Prefer forced download behavior for risky file classes.
- Avoid rendering untrusted uploads inline unless you explicitly intend that behavior.

## Cleanup and Lifecycle Checklist

- Expire abandoned multipart uploads.
- Remove temporary originals if only processed derivatives should remain.
- Define retention for rejected or quarantined uploads.
- Ensure object keys and lifecycle prefixes match the actual application state model.
