---
name: red-team-tools-v2
description: "Red Team Tools and Methodology workflow skill. Use this skill when the user needs Implement proven methodologies and tool workflows from top security researchers for effective reconnaissance, vulnerability discovery, and bug bounty hunting. Automate common tasks while maintaining thorough coverage of attack surfaces and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["red-team-tools-v2", "red-team-tools", "implement", "proven", "methodologies", "and", "tool", "workflows"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "zebbern"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Red Team Tools and Methodology

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/red-team-tools` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

> AUTHORIZED USE ONLY: Use this skill only for authorized security assessments, defensive validation, or controlled educational environments. # Red Team Tools and Methodology

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Inputs/Prerequisites, Outputs/Deliverables, Constraints.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Implement proven methodologies and tool workflows from top security researchers for effective reconnaissance, vulnerability discovery, and bug bounty hunting. Automate common tasks while maintaining thorough coverage....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. File Uploads - Test for injection, XXE, SSRF, shell upload
2. Content Types - Filter Burp for multipart forms
3. APIs - Look for hidden methods, lack of auth
4. Profile Sections - Stored XSS, custom fields
5. Integrations - SSRF through third parties
6. Error Pages - Exotic injection points
7. How does the app pass data? (Params, API, Hybrid)

### Imported Workflow Notes

#### Imported: Core Workflow

### 1. Project Tracking and Acquisitions

Set up reconnaissance tracking:

```bash
# Create project structure
mkdir -p target/{recon,vulns,reports}
cd target

# Find acquisitions using Crunchbase
# Search manually for subsidiary companies

# Get ASN for targets
amass intel -org "Target Company" -src

# Alternative ASN lookup
curl -s "https://bgp.he.net/search?search=targetcompany&commit=Search"
```

### 2. Subdomain Enumeration

Comprehensive subdomain discovery:

```bash
# Create wildcards file
echo "target.com" > wildcards

# Run Amass passively
amass enum -passive -d target.com -src -o amass_passive.txt

# Run Amass actively
amass enum -active -d target.com -src -o amass_active.txt

# Use Subfinder
subfinder -d target.com -silent -o subfinder.txt

# Asset discovery
cat wildcards | assetfinder --subs-only | anew domains.txt

# Alternative subdomain tools
findomain -t target.com -o

# Generate permutations with dnsgen
cat domains.txt | dnsgen - | httprobe > permuted.txt

# Combine all sources
cat amass_*.txt subfinder.txt | sort -u > all_subs.txt
```

### 3. Live Host Discovery

Identify responding hosts:

```bash
# Check which hosts are live with httprobe
cat domains.txt | httprobe -c 80 --prefer-https | anew hosts.txt

# Use httpx for more details
cat domains.txt | httpx -title -tech-detect -status-code -o live_hosts.txt

# Alternative with massdns
massdns -r resolvers.txt -t A -o S domains.txt > resolved.txt
```

### 4. Technology Fingerprinting

Identify technologies for targeted attacks:

```bash
# Whatweb scanning
whatweb -i hosts.txt -a 3 -v > tech_stack.txt

# Nuclei technology detection
nuclei -l hosts.txt -t technologies/ -o tech_nuclei.txt

# Wappalyzer (if available)
# Browser extension for manual review
```

### 5. Content Discovery

Find hidden endpoints and files:

```bash
# Directory bruteforce with ffuf
ffuf -ac -v -u https://target.com/FUZZ -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt

# Historical URLs from Wayback
waybackurls target.com | tee wayback.txt

# Find all URLs with gau
gau target.com | tee all_urls.txt

# Parameter discovery
cat all_urls.txt | grep "=" | sort -u > params.txt

# Generate custom wordlist from historical data
cat all_urls.txt | unfurl paths | sort -u > custom_wordlist.txt
```

### 6. Application Analysis (Jason Haddix Method)

**Heat Map Priority Areas:**

1. **File Uploads** - Test for injection, XXE, SSRF, shell upload
2. **Content Types** - Filter Burp for multipart forms
3. **APIs** - Look for hidden methods, lack of auth
4. **Profile Sections** - Stored XSS, custom fields
5. **Integrations** - SSRF through third parties
6. **Error Pages** - Exotic injection points

**Analysis Questions:**
- How does the app pass data? (Params, API, Hybrid)
- Where does the app talk about users? (UID, UUID endpoints)
- Does the site have multi-tenancy or user levels?
- Does it have a unique threat model?
- How does the site handle XSS/CSRF?
- Has the site had past writeups/exploits?

### 7. Automated XSS Hunting

```bash
# ParamSpider for parameter extraction
python3 paramspider.py --domain target.com -o params.txt

# Filter with Gxss
cat params.txt | Gxss -p test

# Dalfox for XSS testing
cat params.txt | dalfox pipe --mining-dict params.txt -o xss_results.txt

# Alternative workflow
waybackurls target.com | grep "=" | qsreplace '"><script>alert(1)</script>' | while read url; do
    curl -s "$url" | grep -q 'alert(1)' && echo "$url"
done > potential_xss.txt
```

### 8. Vulnerability Scanning

```bash
# Nuclei comprehensive scan
nuclei -l hosts.txt -t ~/nuclei-templates/ -o nuclei_results.txt

# Check for common CVEs
nuclei -l hosts.txt -t cves/ -o cve_results.txt

# Web vulnerabilities
nuclei -l hosts.txt -t vulnerabilities/ -o vuln_results.txt
```

### 9. API Enumeration

**Wordlists for API fuzzing:**

```bash
# Enumerate API endpoints
ffuf -u https://target.com/api/FUZZ -w /usr/share/seclists/Discovery/Web-Content/api/api-endpoints.txt

# Test API versions
ffuf -u https://target.com/api/v1/FUZZ -w api_wordlist.txt
ffuf -u https://target.com/api/v2/FUZZ -w api_wordlist.txt

# Check for hidden methods
for method in GET POST PUT DELETE PATCH; do
    curl -X $method https://target.com/api/users -v
done
```

### 10. Automated Recon Script

```bash
#!/bin/bash
domain=$1

if [[ -z $domain ]]; then
    echo "Usage: ./recon.sh <domain>"
    exit 1
fi

mkdir -p "$domain"

# Subdomain enumeration
echo "[*] Enumerating subdomains..."
subfinder -d "$domain" -silent > "$domain/subs.txt"

# Live host discovery
echo "[*] Finding live hosts..."
cat "$domain/subs.txt" | httpx -title -tech-detect -status-code > "$domain/live.txt"

# URL collection
echo "[*] Collecting URLs..."
cat "$domain/live.txt" | waybackurls > "$domain/urls.txt"

# Nuclei scanning
echo "[*] Running Nuclei..."
nuclei -l "$domain/live.txt" -o "$domain/nuclei.txt"

echo "[+] Recon complete!"
```

#### Imported: Purpose

Implement proven methodologies and tool workflows from top security researchers for effective reconnaissance, vulnerability discovery, and bug bounty hunting. Automate common tasks while maintaining thorough coverage of attack surfaces.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @red-team-tools-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @red-team-tools-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @red-team-tools-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @red-team-tools-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Quick Subdomain Recon

```bash
subfinder -d target.com | httpx -title | tee results.txt
```

### Example 2: XSS Hunting Pipeline

```bash
waybackurls target.com | grep "=" | qsreplace "test" | httpx -silent | dalfox pipe
```

### Example 3: Comprehensive Scan

```bash
# Full recon chain
amass enum -d target.com | httpx | nuclei -t ~/nuclei-templates/
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/red-team-tools`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

| Issue | Solution |
|-------|----------|
| Rate limited | Use proxy rotation, reduce concurrency |
| Too many results | Focus on specific technology stacks |
| False positives | Manually verify findings before reporting |
| Missing subdomains | Combine multiple enumeration sources |
| API key errors | Verify keys in config files |
| Tools not found | Install Go tools with `go install` |

## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### Essential Tools

| Tool | Purpose |
|------|---------|
| Amass | Subdomain enumeration |
| Subfinder | Fast subdomain discovery |
| httpx/httprobe | Live host detection |
| ffuf | Content discovery |
| Nuclei | Vulnerability scanning |
| Burp Suite | Manual testing |
| Dalfox | XSS automation |
| waybackurls | Historical URL mining |

### Key API Endpoints to Check

```
/api/v1/users
/api/v1/admin
/api/v1/profile
/api/users/me
/api/config
/api/debug
/api/swagger
/api/graphql
```

### XSS Filter Testing

```html
<!-- Test encoding handling -->
<h1><img><table>
<script>
%3Cscript%3E
%253Cscript%253E
%26lt;script%26gt;
```

#### Imported: Inputs/Prerequisites

- Target scope definition (domains, IP ranges, applications)
- Linux-based attack machine (Kali, Ubuntu)
- Bug bounty program rules and scope
- Tool dependencies installed (Go, Python, Ruby)
- API keys for various services (Shodan, Censys, etc.)

#### Imported: Outputs/Deliverables

- Comprehensive subdomain enumeration
- Live host discovery and technology fingerprinting
- Identified vulnerabilities and attack vectors
- Automated recon pipeline outputs
- Documented findings for reporting

#### Imported: Constraints

- Respect program scope boundaries
- Avoid DoS or fuzzing on production without permission
- Rate limit requests to avoid blocking
- Some tools may generate false positives
- API keys required for full functionality of some tools
