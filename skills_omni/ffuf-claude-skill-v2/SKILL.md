---
name: "ffuf-claude-skill-v2"
description: "Use when you need authorized web fuzzing with ffuf for content discovery, endpoint enumeration, virtual host or parameter fuzzing, response filtering, and structured result capture while preserving upstream workflow intent, copied support files, and provenance before review, merge, or handoff."
version: "0.0.1"
category: "fullstack-web"
tags:
  - "ffuf-claude-skill-v2"
  - "ffuf-claude-skill"
  - "web"
  - "fuzzing"
  - "ffuf"
  - "content-discovery"
  - "directory-busting"
  - "endpoint-enumeration"
  - "parameter-fuzzing"
  - "vhost-fuzzing"
  - "fullstack-web"
  - "omni-enhanced"
complexity: "beginner"
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
date_updated: "2026-05-04"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "ffuf-claude-skill-v2"
family_name: "Ffuf Claude Skill"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/ffuf-claude-skill-v2"
upstream_skill: "skills/ffuf-claude-skill-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "ffuf-claude-skill-v2"
---

# Ffuf Claude Skill

## Overview

This skill preserves the upstream ffuf-focused workflow while making it operational for real execution.

Use it when you need to run or guide **authorized** web fuzzing with `ffuf`: content discovery, directory or file busting, endpoint enumeration, virtual host fuzzing, parameter fuzzing, header-based fuzzing, or wordlist-driven probing. It is also appropriate when the operator must keep provenance visible and preserve upstream workflow intent, copied support files, and review context before merge or handoff.

This skill does **not** authorize scanning by itself. Only use it against targets you are explicitly permitted to test.

## When to Use

Use this skill when:

- You need `ffuf`-based discovery against a web application or HTTP service.
- The user asks for directory, file, endpoint, parameter, header, or vhost fuzzing.
- You need to move from a noisy first pass to controlled filtering and matching.
- You need reproducible ffuf commands and machine-readable output such as JSON or JSONL.
- You must preserve upstream workflow intent and provenance in the deliverable.

Do **not** use this skill when:

- The target is not clearly authorized for testing.
- The task requires exploitation, credential attacks, or unsafe load generation outside the approved scope.
- A browser-driven workflow is more appropriate than wordlist-based HTTP fuzzing.

## Workflow

1. **Confirm authorization and scope**
   - Verify the target hostnames, ports, paths, rate limits, and time window.
   - Confirm whether recursive discovery, subdomain/vhost probing, or parameter fuzzing is allowed.
   - Prefer the narrowest test that satisfies the request.

2. **Establish a low-noise baseline**
   - Inspect one or more normal responses first with `curl` or an equivalent safe HTTP request.
   - Note common status codes, body sizes, words, and line counts for missing resources or redirects.
   - Identify whether the application returns soft 200s, wildcard routing, CDN error templates, or enforced redirects.

3. **Choose a focused ffuf mode**
   - Path discovery: fuzz `FUZZ` in the URL path.
   - File/extension discovery: use `-e` for a small extension set.
   - Vhost fuzzing: fuzz the `Host` header while sending traffic to a known IP or base host.
   - Parameter fuzzing: fuzz parameter names or values in query strings, headers, or bodies.
   - Raw request mode: use `-request` when a precise HTTP request must be replayed.

4. **Run a constrained first pass**
   - Start with a small or targeted wordlist.
   - Bound runtime with request rate, timeout, or recursion controls when needed.
   - Prefer autocalibration and explicit filters instead of accepting raw output at face value.
   - Capture output in JSON or JSONL for later review.

5. **Refine matcher and filter logic**
   - Use matchers such as status, size, words, or lines when you know what success looks like.
   - Use filters to remove known false positives, wildcard responses, or framework noise.
   - Re-run with narrower conditions until the result set is small enough to inspect manually.

6. **Escalate carefully when needed**
   - Add recursion only when the target and scope allow it.
   - Limit recursion depth and stop conditions to avoid runaway jobs.
   - Use replay proxying only when the request stream needs manual inspection in another tool.

7. **Interpret and report results**
   - Separate likely findings from baseline artifacts.
   - Keep the exact command, wordlist assumptions, filters, and output path.
   - Preserve provenance and note any upstream workflow details that were kept intact.

## Examples

### Basic path discovery

```bash
ffuf -u https://target.example/FUZZ -w wordlists/paths.txt -mc 200,204,301,302,307,401,403 -ac -json -o out/paths.json
```

Expected behavior:
- Sends requests for each wordlist entry in the `FUZZ` position.
- Uses autocalibration to reduce false positives.
- Stores structured output in `out/paths.json`.

### Extension-aware file discovery

```bash
ffuf -u https://target.example/FUZZ -w wordlists/common.txt -e .php,.txt,.bak -fc 404 -json -o out/files.json
```

Expected behavior:
- Tests each candidate with the listed extensions.
- Filters obvious 404 responses.
- Produces a result file suitable for review or post-processing.

### Virtual host fuzzing

```bash
ffuf -u https://target.example/ -H 'Host: FUZZ.target.example' -w wordlists/subdomains.txt -fs 4242 -json -o out/vhosts.json
```

Expected behavior:
- Reuses the same destination while fuzzing the `Host` header.
- Filters a known baseline response size of `4242` bytes.
- Highlights responses that differ from the default virtual host.

### Raw request replay with parameter fuzzing

```bash
ffuf -request request.txt -request-proto https -w wordlists/params.txt -mc all -fc 400,404 -json -o out/request-fuzz.json
```

Expected behavior:
- Replays the request template in `request.txt`.
- Fuzzes the `FUZZ` marker inside the saved request.
- Captures broad results while filtering obvious noise.

For a full progression from baseline to refined filtering, open [examples/worked-example.md](examples/worked-example.md).

## Best Practices

- **Do** verify authorization before sending any fuzzing traffic.
- **Do** start with a baseline request and learn the application's normal error behavior.
- **Do** use `-ac` or explicit filters when the target returns soft 200s or wildcard content.
- **Do** prefer small, context-appropriate wordlists before using larger generic lists.
- **Do** save output in JSON or JSONL when results will be reviewed, diffed, or handed off.
- **Do** record matcher/filter choices so another operator can reproduce the scan.
- **Do** bound recursive runs with depth or scope constraints.
- **Don't** treat every 200 response as a finding.
- **Don't** enable aggressive recursion on large targets without explicit approval.
- **Don't** fuzz broad parameter or header spaces unless the user requested it and scope allows it.
- **Don't** discard provenance if the workflow must remain traceable to the upstream source.

## Troubleshooting

**Symptoms:** Nearly every candidate appears valid, often with the same status code and very similar body size.

**Solution:** The application likely returns a soft match, wildcard route, or shared error template. Capture one or more known-bad requests, then use autocalibration or explicit filters such as response size, words, or lines to remove the baseline.

**Symptoms:** A raw request run fails immediately or returns malformed-request behavior.

**Solution:** Check that `request.txt` is a complete HTTP request, that the `FUZZ` marker is in the intended location, and that `-request-proto` matches the actual scheme. Re-test the raw request without fuzzing if needed.

**Symptoms:** Recursive discovery expands too far or takes much longer than expected.

**Solution:** Reduce scope, set recursion limits, narrow the wordlist, or disable recursion for the first pass. Only recurse into validated hits that materially improve coverage.

**Symptoms:** Vhost fuzzing shows inconsistent or confusing results.

**Solution:** Confirm DNS and routing assumptions, compare against a known baseline host response, and filter on stable traits such as size or words rather than status code alone.

**Symptoms:** Output is hard to compare between runs.

**Solution:** Use JSON or JSONL output, keep the command line with the result file, and keep filters stable between iterations unless you are deliberately changing the test design.

## Additional Resources

- [references/domain-notes.md](references/domain-notes.md) — Open for compact ffuf execution notes on matcher/filter strategy, autocalibration, recursion, raw requests, scraper behavior, output formats, and configuration details.
- [examples/worked-example.md](examples/worked-example.md) — Open when you need a concrete baseline-to-refinement walkthrough with commands and expected interpretation.

## Related Skills

No related local skills were provided in the source context.
