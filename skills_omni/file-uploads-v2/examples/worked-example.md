# Worked Example: Private-First User Uploads to Object Storage

## Scenario

A product team needs users to upload profile images and short PDF attachments.

### Requirements
- Maximum image size: 15 MB
- Maximum PDF size: 30 MB
- Storage backend: S3 in production, Cloudflare R2 in one staging environment
- Application servers should not proxy file bodies
- Uploaded files must remain private until validation completes
- Images should be optimized after upload
- PDFs should be stored only after type validation passes
- Failed or abandoned uploads should not create long-term storage waste

## Recommended Design

### 1. Upload session creation
Application endpoint:
- authenticates the user
- checks quota and allowed file category
- chooses the object key
- decides single-request or multipart path
- returns the minimum upload instructions required by the client

Example generated keys:
- `users/42/uploads/images/2026-03-27/original-8f2a.png`
- `users/42/uploads/pdfs/2026-03-27/original-22ab.pdf`

### 2. Upload path selection
- Files up to 25 MB: single-request presigned upload
- Files above 25 MB: multipart upload

Expected result:
- 8 MB image uses one presigned request
- 28 MB PDF uses multipart upload

### 3. Validation policy
For every completed upload, the backend validates:
- extension policy
- declared MIME type
- file signature / magic bytes
- size

Decision examples:
- `.png` + `image/png` + PNG signature => continue processing
- `.pdf` + `application/pdf` + ZIP signature => reject and delete or quarantine

### 4. Post-upload processing
For images:
- verify dimensions and file signature
- optimize into a derivative such as WebP
- write processed asset under a separate key
- mark database record as `ready`

For PDFs:
- verify signature
- if accepted, mark metadata record as `ready`
- if rejected, delete or quarantine and mark as `rejected`

### 5. Exposure rules
- Raw uploads remain private.
- Processed assets are exposed only through approved application URLs or short-lived presigned download URLs.
- No public bucket access is enabled unless a requirement explicitly demands public objects.

### 6. Cleanup controls
- Incomplete multipart uploads are aborted on failed sessions when possible.
- Lifecycle rules expire abandoned multipart parts.
- Rejected uploads are deleted or moved to a bounded-retention quarantine prefix.

## Expected Good Outcome

A user uploads `avatar.png`.

Observed behavior:
1. App returns a short-lived presigned upload instruction.
2. Browser uploads directly to object storage.
3. Backend validates the completed object.
4. Image optimizer writes `avatar.webp` to a processed-assets location.
5. UI shows status transition from `processing` to `ready`.

## Expected Bad Outcome and Correct Response

A user uploads `report.pdf` with MIME `application/pdf`, but content is actually a ZIP file.

Correct response:
- backend flags extension/MIME/signature mismatch
- upload is rejected or quarantined
- object is not published
- audit log records uploader identity, key, and rejection reason

## Review Questions for Operators

- Is the object key server-generated and tenant-scoped?
- Are presigned URLs short-lived?
- Are raw uploads private by default?
- Is multipart cleanup explicitly handled?
- Does validation treat extension, MIME, and signature as separate signals?
- Is post-upload processing asynchronous rather than in the request path?
- Are R2 multipart behaviors tested separately if R2 is in scope?
