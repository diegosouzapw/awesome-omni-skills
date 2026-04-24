---
name: file-uploads
description: "File Uploads & Storage workflow skill. Use this skill when the user needs Expert at handling file uploads and cloud storage. Covers S3, and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["file-uploads", "expert", "handling", "file", "uploads", "and", "cloud", "storage"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# File Uploads & Storage

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/file-uploads` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# File Uploads & Storage Expert at handling file uploads and cloud storage. Covers S3, Cloudflare R2, presigned URLs, multipart uploads, and image optimization. Knows how to handle large files without blocking. Role: File Upload Specialist Careful about security and performance. Never trusts file extensions. Knows that large uploads need special handling. Prefers presigned URLs over server proxying. ### Principles - Never trust client file type claims - Use presigned URLs for direct uploads - Stream large files, never buffer - Validate on upload, optimize after

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Sharp Edges, Validation Checks, Collaboration, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: file upload
- User mentions or implies: S3
- User mentions or implies: R2
- User mentions or implies: presigned URL
- User mentions or implies: multipart
- User mentions or implies: image upload

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Sharp Edges

### Trusting client-provided file type

Severity: CRITICAL

Situation: User uploads malware.exe renamed to image.jpg. You check
extension, looks fine. Store it. Serve it. Another user
downloads and executes it.

Symptoms:
- Malware uploaded as images
- Wrong content-type served

Why this breaks:
File extensions and Content-Type headers can be faked.
Attackers rename executables to bypass filters.

Recommended fix:

# CHECK MAGIC BYTES

import { fileTypeFromBuffer } from "file-type";

async function validateImage(buffer: Buffer) {
  const type = await fileTypeFromBuffer(buffer);
  
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  
  if (!type || !allowedTypes.includes(type.mime)) {
    throw new Error("Invalid file type");
  }
  
  return type;
}

// For streams
import { fileTypeFromStream } from "file-type";
const type = await fileTypeFromStream(readableStream);

### No upload size restrictions

Severity: HIGH

Situation: No file size limit. Attacker uploads 10GB file. Server runs
out of memory or disk. Denial of service. Or massive
storage bill.

Symptoms:
- Server crashes on large uploads
- Massive storage bills
- Memory exhaustion

Why this breaks:
Without limits, attackers can exhaust resources. Even
legitimate users might accidentally upload huge files.

Recommended fix:

# SET SIZE LIMITS

// Formidable
const form = formidable({
  maxFileSize: 10 * 1024 * 1024, // 10MB
});

// Multer
const upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 },
});

// Client-side early check
if (file.size > 10 * 1024 * 1024) {
  alert("File too large (max 10MB)");
  return;
}

// Presigned URL with size limit
const command = new PutObjectCommand({
  Bucket: BUCKET,
  Key: key,
  ContentLength: expectedSize, // Enforce size
});

### User-controlled filename allows path traversal

Severity: CRITICAL

Situation: User uploads file named "../../../etc/passwd". You use
filename directly. File saved outside upload directory.
System files overwritten.

Symptoms:
- Files outside upload directory
- System file access

Why this breaks:
User input should never be used directly in file paths.
Path traversal sequences can escape intended directories.

Recommended fix:

# SANITIZE FILENAMES

import path from "path";
import crypto from "crypto";

function safeFilename(userFilename: string): string {
  // Extract just the base name
  const base = path.basename(userFilename);
  
  // Remove any remaining path chars
  const sanitized = base.replace(/[^a-zA-Z0-9.-]/g, "_");
  
  // Or better: generate new name entirely
  const ext = path.extname(userFilename).toLowerCase();
  const allowed = [".jpg", ".png", ".pdf"];
  
  if (!allowed.includes(ext)) {
    throw new Error("Invalid extension");
  }
  
  return crypto.randomUUID() + ext;
}

// Never do this
const path = "uploads/" + req.body.filename; // DANGER!

// Do this
const path = "uploads/" + safeFilename(req.body.filename);

### Presigned URL shared or cached incorrectly

Severity: MEDIUM

Situation: Presigned URL for private file returned in API response.
Response cached by CDN. Anyone with cached URL can access
private file for hours.

Symptoms:
- Private files accessible via cached URLs
- Access after expiry

Why this breaks:
Presigned URLs grant temporary access. If cached or shared,
access extends beyond intended scope.

Recommended fix:

# CONTROL PRESIGNED URL DISTRIBUTION

// Short expiry for sensitive files
const url = await getSignedUrl(s3, command, {
  expiresIn: 300, // 5 minutes
});

// No-cache headers for presigned URL responses
return Response.json({ url }, {
  headers: {
    "Cache-Control": "no-store, max-age=0",
  },
});

// Or use CloudFront signed URLs for more control

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @file-uploads to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @file-uploads against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @file-uploads for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @file-uploads using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/file-uploads`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@daily-gift` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@design-taste-frontend` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Validation Checks

### Only checking file extension

Severity: CRITICAL

Message: Check magic bytes, not just extension

Fix action: Use file-type library to verify actual type

### User filename used directly in path

Severity: CRITICAL

Message: Sanitize filenames to prevent path traversal

Fix action: Use path.basename() and generate safe name

#### Imported: Collaboration

### Delegation Triggers

- image optimization CDN -> performance-optimization (Image delivery)
- storing file metadata -> postgres-wizard (Database schema)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
