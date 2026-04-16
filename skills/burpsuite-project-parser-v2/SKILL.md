---
name: burpsuite-project-parser-v2
description: "Burp Project Parser workflow skill. Use this skill when the user needs Searches and explores Burp Suite project files (.burp) from the command line. Use when searching response headers or bodies with regex patterns, extracting security audit findings, dumping proxy history or site map data, or analyzing HTTP traffic captured in a Burp project and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["burpsuite-project-parser-v2", "burpsuite-project-parser", "searches", "and", "explores", "burp", "suite", "project"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# Burp Project Parser

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/burpsuite-project-parser` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Burp Project Parser Search and extract data from Burp Suite project files using the burpsuite-project-file-parser extension.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Sub-Component Filters (USE THESE), Regex Search Operations, Other Operations, Output Limits (REQUIRED), Understanding Results.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Searching response headers or bodies with regex patterns
- Extracting security audit findings from Burp projects
- Dumping proxy history or site map data
- Analyzing HTTP traffic captured in a Burp project file
- Use when the request clearly matches the imported source intent: Searches and explores Burp Suite project files (.burp) from the command line. Use when searching response headers or bodies with regex patterns, extracting security audit findings, dumping proxy history or site map....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Identify scope - What are you looking for? (specific vuln type, endpoint, header pattern)
2. Search audit items first - Start with Burp's findings:
3. Check confidence scores - Filter for actionable findings:
4. Extract affected URLs - Get the attack surface:
5. Search raw traffic for context - Examine actual requests/responses:
6. Validate manually - Burp findings are indicators, not proof. Verify each one.
7. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.

### Imported Workflow Notes

#### Imported: Investigation Workflow

1. **Identify scope** - What are you looking for? (specific vuln type, endpoint, header pattern)

2. **Search audit items first** - Start with Burp's findings:
   ```bash
   {baseDir}/scripts/burp-search.sh project.burp auditItems | jq 'select(.severity == "High")'
   ```

3. **Check confidence scores** - Filter for actionable findings:
   ```bash
   ... | jq 'select(.confidence == "Certain" or .confidence == "Firm")'
   ```

4. **Extract affected URLs** - Get the attack surface:
   ```bash
   ... | jq -r '.url' | sort -u
   ```

5. **Search raw traffic for context** - Examine actual requests/responses:
   ```bash
   {baseDir}/scripts/burp-search.sh project.burp "responseBody='pattern'"
   ```

6. **Validate manually** - Burp findings are indicators, not proof. Verify each one.

#### Imported: Prerequisites

This skill **delegates parsing to Burp Suite Professional** - it does not parse .burp files directly.

**Required:**
1. **Burp Suite Professional** - Must be installed ([portswigger.net](https://portswigger.net/burp/pro))
2. **burpsuite-project-file-parser extension** - Provides CLI functionality

**Install the extension:**
1. Download from [github.com/BuffaloWill/burpsuite-project-file-parser](https://github.com/BuffaloWill/burpsuite-project-file-parser)
2. In Burp Suite: Extender → Extensions → Add
3. Select the downloaded JAR file

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @burpsuite-project-parser-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @burpsuite-project-parser-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @burpsuite-project-parser-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @burpsuite-project-parser-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

Search for CORS headers (with byte limit):
```bash
{baseDir}/scripts/burp-search.sh project.burp "responseHeader='.*Access-Control.*'" | head -c 50000
```

Get all high-severity findings (audit items are small, but still limit):
```bash
{baseDir}/scripts/burp-search.sh project.burp auditItems | jq -c 'select(.severity == "High")' | head -n 100
```

Extract just request URLs from proxy history:
```bash
{baseDir}/scripts/burp-search.sh project.burp proxyHistory.request.headers | jq -r '.request.url' | head -n 200
```

Search response bodies (MUST truncate body to 1000 chars):
```bash
{baseDir}/scripts/burp-search.sh project.burp "responseBody='.*password.*'" | \
  head -n 10 | jq -c '.body = (.body[:1000] + "...[TRUNCATED]")'
```

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/burpsuite-project-parser`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@beautiful-prose-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@behavioral-modes-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@bevy-ecs-expert-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@bill-gates-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Quick Reference

Use the wrapper script:
```bash
{baseDir}/scripts/burp-search.sh /path/to/project.burp [FLAGS]
```

The script uses environment variables for platform compatibility:
- `BURP_JAVA`: Path to Java executable
- `BURP_JAR`: Path to burpsuite_pro.jar

See [Platform Configuration](#platform-configuration) for setup instructions.

#### Imported: Sub-Component Filters (USE THESE)

**ALWAYS use sub-component filters instead of full dumps.** Full `proxyHistory` or `siteMap` can return gigabytes of data. Sub-component filters return only what you need.

### Available Filters

| Filter | Returns | Typical Size |
|--------|---------|--------------|
| `proxyHistory.request.headers` | Request line + headers only | Small (< 1KB/record) |
| `proxyHistory.request.body` | Request body only | Variable |
| `proxyHistory.response.headers` | Status + headers only | Small (< 1KB/record) |
| `proxyHistory.response.body` | Response body only | **LARGE - avoid** |
| `siteMap.request.headers` | Same as above for site map | Small |
| `siteMap.request.body` | | Variable |
| `siteMap.response.headers` | | Small |
| `siteMap.response.body` | | **LARGE - avoid** |

### Default Approach

**Start with headers, not bodies:**

```bash
# GOOD - headers only, safe to retrieve
{baseDir}/scripts/burp-search.sh project.burp proxyHistory.request.headers | head -c 50000
{baseDir}/scripts/burp-search.sh project.burp proxyHistory.response.headers | head -c 50000

# BAD - full records include bodies, can be gigabytes
{baseDir}/scripts/burp-search.sh project.burp proxyHistory  # NEVER DO THIS
```

**Only fetch bodies for specific URLs after reviewing headers, and ALWAYS truncate:**

```bash
# 1. First, find interesting URLs from headers
{baseDir}/scripts/burp-search.sh project.burp proxyHistory.response.headers | \
  jq -r 'select(.headers | test("text/html")) | .url' | head -n 20

# 2. Then search bodies with targeted regex - MUST truncate body to 1000 chars
{baseDir}/scripts/burp-search.sh project.burp "responseBody='.*specific-pattern.*'" | \
  head -n 10 | jq -c '.body = (.body[:1000] + "...[TRUNCATED]")'
```

**HARD RULE: Body content > 1000 chars must NEVER enter context.** If the user needs full body content, they must view it in Burp Suite's UI.

#### Imported: Regex Search Operations

### Search Response Headers
```bash
responseHeader='.*regex.*'
```
Searches all response headers. Output: `{"url":"...", "header":"..."}`

Example - find server signatures:
```bash
responseHeader='.*(nginx|Apache|Servlet).*' | head -c 50000
```

### Search Response Bodies
```bash
responseBody='.*regex.*'
```
**MANDATORY: Always truncate body content to 1000 chars max.** Response bodies can be megabytes each.

```bash
# REQUIRED format - always truncate .body field
{baseDir}/scripts/burp-search.sh project.burp "responseBody='.*<form.*action.*'" | \
  head -n 10 | jq -c '.body = (.body[:1000] + "...[TRUNCATED]")'
```

**Never retrieve full body content.** If you need to see more of a specific response, ask the user to open it in Burp Suite's UI.

#### Imported: Other Operations

### Extract Audit Items
```bash
auditItems
```
Returns all security findings. Output includes: name, severity, confidence, host, port, protocol, url.

**Note:** Audit items are small (no bodies) - safe to retrieve with `head -n 100`.

### Dump Proxy History (AVOID)
```bash
proxyHistory
```
**NEVER use this directly.** Use sub-component filters instead:
- `proxyHistory.request.headers`
- `proxyHistory.response.headers`

### Dump Site Map (AVOID)
```bash
siteMap
```
**NEVER use this directly.** Use sub-component filters instead.

#### Imported: Output Limits (REQUIRED)

**CRITICAL: Always check result size BEFORE retrieving data.** A broad search can return thousands of records, each potentially megabytes. This will overflow the context window.

### Step 1: Always Check Size First

Before any search, check BOTH record count AND byte size:

```bash
# Check record count AND total bytes - never skip this step
{baseDir}/scripts/burp-search.sh project.burp proxyHistory | wc -cl
{baseDir}/scripts/burp-search.sh project.burp "responseHeader='.*Server.*'" | wc -cl
{baseDir}/scripts/burp-search.sh project.burp auditItems | wc -cl
```

The `wc -cl` output shows: `<bytes> <lines>` (e.g., `524288 42` means 512KB across 42 records).

**Interpret the results - BOTH must pass:**

| Metric | Safe | Narrow search | Too broad | STOP |
|--------|------|---------------|-----------|------|
| **Lines** | < 50 | 50-200 | 200+ | 1000+ |
| **Bytes** | < 50KB | 50-200KB | 200KB+ | 1MB+ |

**A single 10MB response on one line will show high byte count but only 1 line - the byte check catches this.**

### Step 2: Refine Broad Searches

If count/size is too high:

1. **Use sub-component filters** (see table above):
   ```bash
   # Instead of: proxyHistory (gigabytes)
   # Use: proxyHistory.request.headers (kilobytes)
   ```

2. **Narrow regex patterns:**
   ```bash
   # Too broad (matches everything):
   responseHeader='.*'

   # Better - target specific headers:
   responseHeader='.*X-Frame-Options.*'
   responseHeader='.*Content-Security-Policy.*'
   ```

3. **Filter with jq before retrieving:**
   ```bash
   # Get only specific content types
   {baseDir}/scripts/burp-search.sh project.burp proxyHistory.response.headers | \
     jq -c 'select(.url | test("/api/"))' | head -n 50
   ```

### Step 3: Always Truncate Output

Even after narrowing, always pipe through truncation:

```bash
# ALWAYS use head -c to limit total bytes (max 50KB)
{baseDir}/scripts/burp-search.sh project.burp proxyHistory.request.headers | head -c 50000

# For body searches, truncate each JSON object's body field:
{baseDir}/scripts/burp-search.sh project.burp "responseBody='pattern'" | \
  head -n 20 | jq -c '.body = (.body | if length > 1000 then .[:1000] + "...[TRUNCATED]" else . end)'

# Limit both record count AND byte size:
{baseDir}/scripts/burp-search.sh project.burp auditItems | head -n 50 | head -c 50000
```

**Hard limits to enforce:**
- `head -c 50000` (50KB max) on ALL output
- **Truncate `.body` fields to 1000 chars - MANDATORY, no exceptions**
  ```bash
  jq -c '.body = (.body[:1000] + "...[TRUNCATED]")'
  ```

**Never run these without counting first AND truncating:**
- `proxyHistory` / `siteMap` (full dumps - always use sub-component filters)
- `responseBody='...'` searches (bodies can be megabytes each)
- Any broad regex like `.*` or `.+`

#### Imported: Understanding Results

### Severity vs Confidence

Burp reports both **severity** (High/Medium/Low) and **confidence** (Certain/Firm/Tentative). Use both when triaging:

| Combination | Meaning |
|-------------|---------|
| High + Certain | Likely real vulnerability, prioritize investigation |
| High + Tentative | Often a false positive, verify before reporting |
| Medium + Firm | Worth investigating, may need manual validation |

A "High severity, Tentative confidence" finding is frequently a false positive. Don't report findings based on severity alone.

### When Proxy History is Incomplete

Proxy history only contains what Burp captured. It may be missing traffic due to:
- **Scope filters** excluding domains
- **Intercept settings** dropping requests
- **Browser traffic** not routed through Burp proxy

If you don't find expected traffic, check Burp's scope and proxy settings in the original project.

### HTTP Body Encoding

Response bodies may be gzip compressed, chunked, or use non-UTF8 encoding. Regex patterns that work on plaintext may silently fail on encoded responses. If searches return fewer results than expected:
- Check if responses are compressed
- Try broader patterns or search headers first
- Use Burp's UI to inspect raw vs rendered response

#### Imported: Rationalizations to Reject

Common shortcuts that lead to missed vulnerabilities or false reports:

| Shortcut | Why It's Wrong |
|----------|----------------|
| "This regex looks good" | Verify on sample data first—encoding and escaping cause silent failures |
| "High severity = must fix" | Check confidence score too; Burp has false positives |
| "All audit items are relevant" | Filter by actual threat model; not every finding matters for every app |
| "Proxy history is complete" | May be filtered by Burp scope/intercept settings; you see only what Burp captured |
| "Burp found it, so it's a vuln" | Burp findings require manual verification—they indicate potential issues, not proof |

#### Imported: Output Format

All output is JSON, one object per line. Pipe to `jq` for formatting:
```bash
{baseDir}/scripts/burp-search.sh project.burp auditItems | jq .
```

Filter with grep:
```bash
{baseDir}/scripts/burp-search.sh project.burp auditItems | grep -i "sql injection"
```

#### Imported: Platform Configuration

The wrapper script requires two environment variables to locate Burp Suite's bundled Java and JAR file.

### macOS

```bash
export BURP_JAVA="/Applications/Burp Suite Professional.app/Contents/Resources/jre.bundle/Contents/Home/bin/java"
export BURP_JAR="/Applications/Burp Suite Professional.app/Contents/Resources/app/burpsuite_pro.jar"
```

### Windows

```powershell
$env:BURP_JAVA = "C:\Program Files\BurpSuiteProfessional\jre\bin\java.exe"
$env:BURP_JAR = "C:\Program Files\BurpSuiteProfessional\burpsuite_pro.jar"
```

### Linux

```bash
export BURP_JAVA="/opt/BurpSuiteProfessional/jre/bin/java"
export BURP_JAR="/opt/BurpSuiteProfessional/burpsuite_pro.jar"
```

Add these exports to your shell profile (`.bashrc`, `.zshrc`, etc.) for persistence.

### Manual Invocation

If not using the wrapper script, invoke directly:
```bash
"$BURP_JAVA" -jar -Djava.awt.headless=true "$BURP_JAR" \
  --project-file=/path/to/project.burp [FLAGS]
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
