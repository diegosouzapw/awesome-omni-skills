---
name: "file-uploads"
description: "File Uploads & Storage workflow skill. Use this skill when the user needs expert handling of file uploads and cloud storage workflows across S3-compatible stores, including presigned URLs, multipart uploads, browser CORS, integrity checks, and asynchronous post-upload processing."
version: "0.0.1"
category: "devops"
tags:
  - "file-uploads"
  - "s3"
  - "cloudflare-r2"
  - "presigned-urls"
  - "multipart-uploads"
  - "cors"
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
date_added: "2026-04-15"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "file-uploads"
family_name: "File Uploads & Storage"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/file-uploads"
upstream_skill: "skills/file-uploads"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "file-uploads"
---

# File Uploads & Storage

## Overview

Use this skill when designing, reviewing, or debugging file upload pipelines that target object storage such as Amazon S3 or Cloudflare R2.

The upstream intent is preserved: prefer direct-to-storage uploads, do not trust client metadata, handle large files safely, and keep workflow provenance intact when adapting the implementation. This enhanced version adds production guidance for short-lived presigned access, multipart behavior, browser CORS, integrity checks, stale upload cleanup, and event-driven post-upload processing.

Core stance:
- Prefer direct browser-to-object-store uploads over proxying large files through the app server.
- Treat file type, size, and integrity as server-enforced policy, not UI hints.
- Use multipart uploads for large or resumable transfers.
- Move scanning, optimization, and derivative generation to asynchronous post-upload workers.
- Assume provider differences matter even across S3-compatible APIs.

## When to Use

Use this skill when the task involves one or more of the following:
- Designing an upload flow for web or mobile clients.
- Generating presigned URLs or presigned POST policies.
- Supporting large uploads, resumable uploads, or multipart transfers.
- Debugging browser CORS failures during direct-to-storage upload.
- Adding integrity verification, malware scanning, image optimization, or event-driven post-processing.
- Migrating or comparing Amazon S3 and Cloudflare R2 behavior.

Do **not** use this skill as the primary guide when:
- The task is only local filesystem upload handling with no object storage.
- The user needs legal/compliance advice for retention or data classification policy.
- The main problem is CDN delivery, signed downloads, or media streaming rather than upload ingestion.

## Workflow

1. **Classify the upload path**
   - Identify client type: browser, mobile, backend worker, or trusted internal service.
   - Identify file classes: image, video, document, archive, or arbitrary binary.
   - Record maximum object size, expected upload frequency, and whether resumability is required.
   - Decide whether upload should be direct-to-storage or server-mediated. Default to direct-to-storage unless content must transit an application-controlled processor first.

2. **Define server-enforced upload policy**
   - Enforce allowed MIME families, extension rules, and maximum size on the server that issues upload credentials.
   - Bind uploads to a controlled key prefix such as `tenant/<id>/uploads/<uuid>`.
   - Prefer generated object keys over trusting client filenames.
   - Set short presigned lifetimes and scope them to the exact method, bucket, key, and required headers.
   - If the flow needs browser form upload constraints, use a presigned POST policy with explicit content-length and key-prefix restrictions.

3. **Choose the transport strategy**
   - Use single-request upload only for modest object sizes where restart cost is acceptable.
   - Use multipart upload for large files, unstable networks, or resume support.
   - Never buffer large uploads fully in memory on the app server.
   - If uploads must pass through your service, stream them; do not read entire bodies before forwarding.

4. **Prepare browser and storage configuration**
   - Configure bucket CORS explicitly for the real frontend origin, method set, and required headers.
   - Ensure the browser sends exactly the headers the presign step accounted for.
   - Avoid ACL-dependent designs; modern S3 Object Ownership defaults often reject ACL-bearing uploads.
   - Confirm whether the provider requires special multipart behavior or has eventing differences before implementation.

5. **Implement integrity and metadata handling**
   - Treat client-provided MIME type as advisory and validate again after upload when needed.
   - Prefer checksum-aware upload flows where supported; do not assume ETag equals file hash, especially for multipart objects.
   - Store trusted metadata deliberately: uploader ID, original filename, content type decision, upload timestamp, and checksum if available.
   - Keep metadata size and sensitivity under control; do not place secrets in object metadata.

6. **Complete and verify the upload lifecycle**
   - For multipart flows, track upload ID, part numbers, retries, and completion state.
   - Abort or garbage-collect stale multipart uploads.
   - After completion, verify the object exists at the expected key with expected size and, where applicable, checksum.
   - Return a stable application record rather than exposing raw storage internals everywhere.

7. **Run asynchronous post-upload processing**
   - Trigger scanning, media optimization, thumbnail generation, transcoding, or document extraction from storage events or explicit queue jobs.
   - Design workers for at-least-once delivery; make processing idempotent.
   - Write derivatives to separate prefixes such as `derived/` or `thumbnails/` rather than mutating the original object in place.
   - Persist processing state in application storage so retries and operator inspection are possible.

8. **Operationalize observability and cleanup**
   - Log request correlation IDs, object keys, upload IDs, and error classes without exposing secrets.
   - Monitor presign failures, CORS failures, incomplete multipart counts, scan failures, and event-processing lag.
   - Define lifecycle cleanup for abandoned multipart uploads and temporary processing artifacts.
   - Review storage permissions regularly; minimize write scope and avoid broad bucket-wide credentials on clients.

## Examples

### Example 1: Direct browser upload via presigned URL

```text
Input
- Frontend origin: https://app.example.com
- File: avatar.png (2.1 MB)
- Target provider: S3
- Requirement: avoid app-server proxying
```

```text
Expected design
1. Browser asks application server for upload authorization.
2. Server validates user, file class, size limit, and target key prefix.
3. Server returns a short-lived presigned PUT URL for a generated key such as:
   tenant/42/uploads/8f0f2d7e-avatar.png
4. Browser uploads file directly to object storage using only the signed method and headers.
5. Browser notifies application server of completion, or server verifies object existence before creating DB state.
```

```json
Example response from presign endpoint
{
  "object_key": "tenant/42/uploads/8f0f2d7e-avatar.png",
  "upload_url": "https://bucket.s3.amazonaws.com/tenant/42/uploads/8f0f2d7e-avatar.png?...signed...",
  "expires_in_seconds": 300,
  "required_headers": {
    "Content-Type": "image/png"
  },
  "max_size_bytes": 5242880
}
```

### Example 2: Large upload requiring multipart

```text
Input
- File: product-demo.mp4 (9.4 GB)
- Network: unreliable browser clients
- Requirement: resumable upload with retry per part
```

```text
Expected design
- Application server creates multipart upload state.
- Client uploads numbered parts directly to storage using signed part URLs.
- Client retries failed parts independently.
- Server completes multipart upload only after all required parts are recorded.
- A lifecycle rule or scheduled cleanup aborts abandoned multipart uploads.
```

### Example 3: Unsafe design to avoid

```text
Before
- Browser uploads every file to the app server.
- App server buffers entire body in memory.
- App server forwards to S3 with long-lived credentials.
- Image resizing happens inline before HTTP response returns.
```

```text
After
- Browser uploads directly with a short-lived presigned URL.
- App server only authorizes and records the upload.
- Large files use multipart upload.
- Scanning and image optimization run asynchronously after object creation.
```

Open `examples/worked-example.md` for a full end-to-end worked flow with request/response shapes and failure handling.

## Best Practices

Do:
- Keep presigned URL or POST expirations short.
- Bind upload authorization to a specific key or key prefix under server control.
- Use generated storage keys and store the original filename separately if needed.
- Enforce upload size and allowed media classes before issuing credentials.
- Use multipart for large or resumable uploads.
- Configure CORS explicitly and test with the real frontend origin.
- Treat event-driven processors as idempotent because delivery may be duplicated.
- Clean up abandoned multipart sessions and temporary derivative artifacts.

Do not:
- Do not trust file extensions, browser MIME claims, or client-reported size alone.
- Do not expose long-lived object-store credentials to browsers or mobile apps.
- Do not assume ETag is a cryptographic content hash.
- Do not depend on ACLs unless the bucket ownership model explicitly supports them.
- Do not block user-facing requests on heavy scanning, optimization, or transcoding.
- Do not allow clients to choose arbitrary bucket names, object keys, or metadata without validation.

## Troubleshooting

**Symptoms:** Browser upload fails with a CORS error before the file is sent.

**Solution:** Verify bucket CORS allows the actual frontend origin, method, and request headers used by the browser. Ensure the presigned request and browser request match exactly on signed headers.

**Symptoms:** Upload works in one environment but fails with `AccessDenied` after adding an ACL header.

**Solution:** Remove ACL headers unless the bucket policy and ownership mode explicitly require them. Modern S3 Object Ownership settings often reject ACL-bearing uploads.

**Symptoms:** Large uploads succeed for small files but fail or restart repeatedly for multi-GB files.

**Solution:** Move to multipart upload, retry by part, and persist upload state so the client can resume. Avoid single-request uploads for large files on unreliable networks.

**Symptoms:** Post-upload worker processes the same file twice.

**Solution:** Treat storage events as at-least-once. Use idempotency keys based on bucket/key/version or your application upload record, and make derivative writes deterministic.

**Symptoms:** Integrity verification fails because the returned ETag does not match the local file hash.

**Solution:** Do not use ETag as a universal content hash, especially for multipart objects. Prefer explicit checksum fields or a separate application-managed hash process.

**Symptoms:** Storage costs grow from incomplete uploads even though users abandoned the page.

**Solution:** Add lifecycle cleanup or an explicit abort process for stale multipart uploads, and monitor incomplete multipart inventory.

## Additional Resources

- `references/domain-notes.md` — Open this when you need provider-specific S3 vs R2 implementation differences, edge cases, and debugging notes that are too detailed for the main workflow.
- `examples/worked-example.md` — Open this when you want a concrete presign-to-upload-to-post-process sequence with expected behavior and common failure branches.

## Related Skills

No related local skills were provided in the source context.
