# Worked Example: Direct Browser Upload with Post-Processing

This example shows a practical default design for user-uploaded images or documents.

## Scenario

- Frontend origin: `https://app.example.com`
- Storage: S3-compatible object store
- File class: user image uploads
- Max size: 10 MB
- Requirement: upload should bypass the application server for the file body
- Post-processing: malware scan and thumbnail generation

## Step 1: Browser asks for upload authorization

```http
POST /api/uploads/presign
Content-Type: application/json
Authorization: Bearer <session>

{
  "filename": "profile-photo.png",
  "content_type": "image/png",
  "size_bytes": 2193841
}
```

## Step 2: Server validates and returns upload details

Server-side decisions:
- Confirms authenticated user may upload.
- Enforces size limit (`<= 10 MB`).
- Restricts media class to allowed image types.
- Generates object key under a controlled prefix.
- Returns short-lived signed upload instructions.

```json
{
  "upload_id": "upl_01JV7Y7P7Q2Y8K9M3N4D5E6F7G",
  "object_key": "tenant/42/uploads/2026/03/27/7f3a1c4d-profile-photo.png",
  "upload_url": "https://storage.example.com/tenant/42/uploads/2026/03/27/7f3a1c4d-profile-photo.png?...signed...",
  "expires_in_seconds": 300,
  "required_headers": {
    "Content-Type": "image/png"
  },
  "max_size_bytes": 10485760
}
```

Expected behavior:
- The client may upload only this object with this method and header set.
- The client cannot reuse the response as a general-purpose bucket credential.

## Step 3: Browser uploads directly to storage

```http
PUT https://storage.example.com/tenant/42/uploads/2026/03/27/7f3a1c4d-profile-photo.png?...signed...
Content-Type: image/png

<binary file bytes>
```

Expected result:
- Object store returns success.
- Browser never handles long-lived storage credentials.
- Application server does not proxy the file body.

## Step 4: Browser or server finalizes application state

Pattern A: browser notifies server after upload

```http
POST /api/uploads/complete
Content-Type: application/json
Authorization: Bearer <session>

{
  "upload_id": "upl_01JV7Y7P7Q2Y8K9M3N4D5E6F7G"
}
```

Server behavior:
- Verifies the object exists at the expected key.
- Confirms size is within policy.
- Records upload metadata in the application database.
- Marks status as `uploaded`.

Example completion record:

```json
{
  "upload_id": "upl_01JV7Y7P7Q2Y8K9M3N4D5E6F7G",
  "object_key": "tenant/42/uploads/2026/03/27/7f3a1c4d-profile-photo.png",
  "status": "uploaded",
  "size_bytes": 2193841,
  "content_type": "image/png"
}
```

## Step 5: Asynchronous post-upload processing

A storage event or queue message triggers workers.

Worker stages:
1. Scan original object.
2. If clean, generate thumbnail.
3. Write derivative to a separate prefix.
4. Update application record.

Example final application state:

```json
{
  "upload_id": "upl_01JV7Y7P7Q2Y8K9M3N4D5E6F7G",
  "status": "processed",
  "original_key": "tenant/42/uploads/2026/03/27/7f3a1c4d-profile-photo.png",
  "thumbnail_key": "tenant/42/derived/thumbnails/7f3a1c4d-profile-photo_256w.webp",
  "scan_status": "clean"
}
```

## Failure Branches

### Failure A: Browser gets a CORS error

Symptoms:
- Upload fails in browser.
- Storage upload works from server-side tools.

Operator response:
- Check allowed origins, methods, and headers in bucket CORS.
- Confirm browser request headers match presigned expectations.

### Failure B: Completion endpoint says object not found

Symptoms:
- Browser claims upload succeeded.
- Server cannot verify object at expected key.

Operator response:
- Confirm client used the returned key exactly.
- Check for upload to the wrong region/endpoint.
- Check whether a signed header mismatch caused a failed upload that the UI did not surface clearly.

### Failure C: Worker processes the same event twice

Symptoms:
- Duplicate thumbnails or duplicate database updates.

Operator response:
- Make worker idempotent.
- Use deterministic derivative keys.
- Gate processing on current application status and object identity.

## When to adapt this example

Adapt this pattern when:
- Files are larger than practical single-request uploads: switch to multipart.
- The content must be transformed before storage: use a controlled server or worker ingestion path.
- The upload source is a trusted backend service: presigned flows may be unnecessary if service credentials are already narrowly scoped.
