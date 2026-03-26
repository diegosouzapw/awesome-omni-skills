# Security Validation and Distribution

This document describes the security and distribution layer generated around each skill.

## Status

Implemented with optional enrichers.

The validator now produces:

- static security findings inside `skills/<skill>/metadata.json`
- security classification inside `dist/manifests/<skill>.json`
- per-skill archives in `dist/archives/`

## Security Scanners

### Static scanner

Always enabled during validation.

It scans:

- `SKILL.md`
- packaged markdown and text files
- packaged scripts

Current rule families:

- prompt injection and exfiltration patterns
- destructive shell commands
- privilege escalation signals
- suspicious credential or OS paths
- risky script primitives such as `shell=True`, `pickle.load`, `eval`, or unsafe `extractall`

### ClamAV

Optional.

Enable with:

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

When enabled and `clamscan` is available in `PATH`, the validator scans packaged files and records the result in skill metadata.

### VirusTotal

Optional.

Enable with:

```bash
VT_API_KEY=... npm run validate
```

Current behavior:

- hash lookup only
- no file upload during normal validation
- unknown files remain local-only

This keeps the standard build deterministic and avoids making CI depend on remote quota.

## Output Shape

Security data is emitted under:

```json
{
  "security": {
    "score": 100,
    "tier": "hardened",
    "status": "passed",
    "findings_count": 0,
    "findings": [],
    "signals": {
      "scanned_files": 3,
      "script_files": 0,
      "binary_like_files": 0
    },
    "scanners": {
      "static": { "enabled": true, "status": "completed" },
      "clamav": { "enabled": false, "status": "disabled" },
      "virustotal": { "enabled": false, "status": "disabled" }
    }
  }
}
```

The same security block is propagated into manifests and catalog views so CLI, API, and MCP can filter or rank by it.

## Archive Outputs

Each published skill now generates:

- `dist/archives/<skill>.zip`
- `dist/archives/<skill>.tar.gz`
- `dist/archives/<skill>.checksums.txt`

Verify them with:

```bash
npm run verify:archives
```

When signing keys are configured, detached `.sig` files are emitted beside the archives and checksum manifest.

## Optional Signing

Set a private key to enable detached signatures:

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Optional public key override:

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

If a public key is not provided, the build derives one with `openssl` and places it in `dist/signing/`.

## Current Limitations

- VirusTotal upload submission is intentionally not part of default validation
- signing is optional and local today, not enforced in CI
- broader hosted governance beyond the current auth, rate limit, and audit-log baseline is still pending
