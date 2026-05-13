---
name: "file-uploads-v2"
description: "File Uploads & Storage workflow skill. Use this skill when the user needs expert handling of file uploads and cloud storage, especially S3-style object storage, presigned URLs, multipart uploads, and upload security controls. Preserve upstream workflow intent, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "devops"
tags:
  - "file-uploads-v2"
  - "file-uploads"
  - "uploads"
  - "s3"
  - "cloudflare-r2"
  - "presigned-urls"
  - "multipart-uploads"
  - "object-storage"
  - "upload-security"
  - "omni-enhanced"
complexity: "intermediate"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
license: "Unknown"
date_added: "2026-04-16"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "file-uploads-v2"
family_name: "File Uploads & Storage"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/file-uploads-v2"
upstream_skill: "skills/file-uploads-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "file-uploads-v2"
---

# File Uploads & Storage

## Overview

This skill curates the upstream `file-uploads` workflow into a safer, more operational guide for designing, reviewing, or debugging file upload systems.

It is optimized for S3-style object storage workflows, especially:
- direct client uploads using presigned URLs
- multipart uploads for large files
- server-side validation and post-upload processing
- Amazon S3 and Cloudflare R2 storage policy differences
- controls that reduce upload abuse, accidental exposure, and orphaned storage costs

Preserve upstream intent and provenance when editing, but use this guide as the execution baseline.

## When to Use

Use this skill when the task involves one or more of these conditions:
- users upload files to object storage such as S3 or Cloudflare R2
- the system should avoid proxying large files through the application server
- presigned upload or download URLs need to be designed, reviewed, or tightened
- multipart upload behavior, retries, or cleanup needs debugging
- file validation must distinguish extension, declared MIME type, and actual file signature
- the workflow includes post-upload processing such as image optimization, virus scanning, or metadata extraction
- bucket exposure, ACL usage, lifecycle cleanup, or encryption settings need review

Do **not** use this skill as the primary guide when:
- the problem is only local filesystem upload handling with no object storage
- the task is a full malware-analysis pipeline design beyond upload gatekeeping
- the main issue is CDN caching, media transcoding, or database blob storage architecture

## Workflow

1. **Define the upload contract before choosing an API shape**
   - Identify allowed file classes, maximum size, retention period, and who may read the object.
   - Decide whether uploads are private-by-default or intentionally public.
   - Separate small-file and large-file paths early; do not force all uploads through one code path.

2. **Prefer direct-to-object-store uploads for user content**
   - Have the application issue a short-lived presigned URL or multipart upload session.
   - Keep the application server responsible for authorization, naming rules, and metadata policy, not for streaming large bodies.
   - Avoid server proxy uploads unless you need inline inspection that cannot happen asynchronously.

3. **Constrain what the client is allowed to upload**
   - Bind the object key or key prefix to the authenticated user or tenant.
   - Require expected `Content-Type` only as a hint, not as trustable proof.
   - Apply size limits, expiration limits, and if possible bucket-policy conditions such as signature age and network restrictions.
   - For browser uploads, return only the minimum fields needed to complete the upload.

4. **Validate the file in layers**
   - Treat filename extension, declared MIME type, and file signature as separate checks.
   - Reject files that fail policy even if one signal looks correct.
   - Normalize filenames for display; never trust user-provided names as storage keys.
   - If the file becomes executable or renderable by downstream systems, validate even more strictly.

5. **Use multipart upload for large objects**
   - Default to multipart for large or unstable-network uploads.
   - Track upload state so parts can be retried safely.
   - Complete or abort unfinished multipart uploads; do not leave abandoned parts accumulating storage cost.
   - For R2, keep non-final parts at a uniform size to avoid provider-specific multipart errors.

6. **Process after upload, not during upload, when possible**
   - Store the object privately first.
   - Trigger scanning, image optimization, thumbnail generation, or metadata extraction asynchronously.
   - Publish or expose the asset only after validation and processing succeed.
   - Record processing status so the application can distinguish `uploaded`, `processing`, `ready`, and `rejected`.

7. **Review storage guardrails and exposure settings**
   - On S3, prefer Block Public Access enabled unless public reads are an explicit requirement.
   - Prefer bucket-owner control models; do not build new flows that depend on object ACLs.
   - Confirm encryption, retention, and lifecycle rules match the data class.
   - Ensure download URLs are also short-lived when content is private.

8. **Test failure paths, not only happy paths**
   - Expired presigned URL
   - oversized upload
   - wrong file type with a matching extension
   - interrupted multipart upload
   - object uploaded successfully but rejected by post-processing
   - retry after partial completion

## Examples

### Example 1: Direct browser upload with later processing

```text
Input scenario:
- Authenticated user uploads a 12 MB PNG avatar
- Storage backend: S3
- App requirement: private upload first, optimize after upload, publish only if processing succeeds

Expected flow:
1. Client asks application for an upload session.
2. Application verifies user quota and allowed type set.
3. Application returns a short-lived presigned PUT URL for key:
   users/42/uploads/2026-03-27/original-avatar.png
4. Client uploads directly to S3.
5. Application receives completion signal or client callback.
6. Background worker validates signature and dimensions, optimizes the image, and writes:
   users/42/assets/avatar.webp
7. Application marks avatar status as ready.

Expected outcome:
- Application server never proxies the 12 MB file body.
- Original upload stays private.
- Public or user-visible asset is the processed derivative, not the raw upload.
```

### Example 2: Reject misleading file type claims

```text
Input:
- Original filename: invoice.pdf
- Declared Content-Type: application/pdf
- File signature bytes indicate ZIP archive

Expected decision:
- Reject upload or quarantine for review.
- Record mismatch among extension, MIME, and signature.
- Do not rely on the `.pdf` suffix or browser-provided MIME.
```

### Example 3: Multipart upload boundary

```text
Decision rule example:
- Files <= 25 MB: single-request upload path
- Files > 25 MB: multipart upload path

Expected behavior:
- 8 MB image uses one presigned upload request.
- 400 MB video uses multipart upload with resumable part retries.
- Incomplete multipart uploads are cleaned by lifecycle policy or explicit abort logic.
```

Open `examples/worked-example.md` for a concrete end-to-end design review example.

## Best Practices

### Do
- Prefer short-lived presigned URLs over long-lived bearer access.
- Keep uploaded objects private until validation and processing finish.
- Generate storage keys on the server; do not trust client filenames as canonical keys.
- Validate extension, MIME, and file signature independently.
- Use multipart upload for large objects and unstable connections.
- Configure cleanup for incomplete multipart uploads.
- Apply least-privilege permissions to the component that creates presigned URLs.
- Log upload intent, object key, uploader identity, and post-processing result.

### Do Not
- Do not proxy all uploads through the application server by default.
- Do not trust `Content-Type` headers or filename extensions alone.
- Do not make buckets or objects public just to simplify downloads.
- Do not depend on object ACLs for new S3 designs when bucket-owner-enforced ownership is available.
- Do not keep presigned URLs valid longer than necessary.
- Do not expose raw user uploads directly if they still need validation or transformation.
- Do not forget to abort or expire incomplete multipart uploads.

## Troubleshooting

**Symptoms:** Upload works for small files but large uploads timeout or exhaust app memory.

**Solution:** Move large-file flows to direct object-store uploads and multipart upload. Avoid buffering bodies in the application server.

**Symptoms:** Attackers upload files whose extension looks allowed but content is different.

**Solution:** Validate file signature in addition to extension and MIME. Reject mismatches or quarantine them for asynchronous review.

**Symptoms:** Private objects are unexpectedly accessible.

**Solution:** Review bucket policy, public access settings, CDN origin configuration, and whether presigned download URLs are being cached or logged insecurely.

**Symptoms:** Storage costs rise even when users cancel uploads.

**Solution:** Check for incomplete multipart uploads. Add explicit abort logic and lifecycle cleanup rules for abandoned multipart parts.

**Symptoms:** Presigned uploads fail intermittently in production.

**Solution:** Verify URL expiration, signed headers, client clock skew, object key mismatches, and whether policy conditions such as signature age or source network restrictions are too strict.

**Symptoms:** Cloudflare R2 multipart completion fails while the same client works against S3.

**Solution:** Check provider-specific multipart constraints, especially consistent non-final part sizing and the exact part list submitted at completion.

## Additional Resources

- [references/domain-notes.md](references/domain-notes.md) — open for provider-specific rules, presigned URL constraints, checksum notes, and S3 vs R2 differences.
- [examples/worked-example.md](examples/worked-example.md) — open for a concrete architecture review with decisions, failure cases, and expected outcomes.

## Related Skills

No confirmed local related skills were provided in the source context.
