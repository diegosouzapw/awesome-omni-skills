---
name: scanning-tools-v2
description: "Security Scanning Tools workflow skill. Use this skill when the user needs Master essential security scanning tools for network discovery, vulnerability assessment, web application testing, wireless security, and compliance validation. This skill covers tool selection, configuration, and practical usage across different scanning categories and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["scanning-tools-v2", "scanning-tools", "master", "essential", "security", "scanning", "tools", "for"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "zebbern"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Security Scanning Tools

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/scanning-tools` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Security Scanning Tools

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Prerequisites, Outputs and Deliverables, Constraints and Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Master essential security scanning tools for network discovery, vulnerability assessment, web application testing, wireless security, and compliance validation. This skill covers tool selection, configuration, and....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Comprehensive CVE detection
2. Compliance checks (PCI-DSS, HIPAA, CIS)
3. Custom scan templates
4. Credentialed scanning for deeper analysis
5. Regular plugin updates
6. Set browser proxy to 127.0.0.1:8080
7. Import Burp CA certificate for HTTPS

### Imported Workflow Notes

#### Imported: Core Workflow

### Phase 1: Network Scanning Tools

#### Nmap (Network Mapper)

Primary tool for network discovery and security auditing:

```bash
# Host discovery
nmap -sn 192.168.1.0/24              # Ping scan (no port scan)
nmap -sL 192.168.1.0/24              # List scan (DNS resolution)
nmap -Pn 192.168.1.100               # Skip host discovery

# Port scanning techniques
nmap -sS 192.168.1.100               # TCP SYN scan (stealth)
nmap -sT 192.168.1.100               # TCP connect scan
nmap -sU 192.168.1.100               # UDP scan
nmap -sA 192.168.1.100               # ACK scan (firewall detection)

# Port specification
nmap -p 80,443 192.168.1.100         # Specific ports
nmap -p- 192.168.1.100               # All 65535 ports
nmap -p 1-1000 192.168.1.100         # Port range
nmap --top-ports 100 192.168.1.100   # Top 100 common ports

# Service and OS detection
nmap -sV 192.168.1.100               # Service version detection
nmap -O 192.168.1.100                # OS detection
nmap -A 192.168.1.100                # Aggressive (OS, version, scripts)

# Timing and performance
nmap -T0 192.168.1.100               # Paranoid (slowest, IDS evasion)
nmap -T4 192.168.1.100               # Aggressive (faster)
nmap -T5 192.168.1.100               # Insane (fastest)

# NSE Scripts
nmap --script=vuln 192.168.1.100     # Vulnerability scripts
nmap --script=http-enum 192.168.1.100  # Web enumeration
nmap --script=smb-vuln* 192.168.1.100  # SMB vulnerabilities
nmap --script=default 192.168.1.100  # Default script set

# Output formats
nmap -oN scan.txt 192.168.1.100      # Normal output
nmap -oX scan.xml 192.168.1.100      # XML output
nmap -oG scan.gnmap 192.168.1.100    # Grepable output
nmap -oA scan 192.168.1.100          # All formats
```

#### Masscan

High-speed port scanning for large networks:

```bash
# Basic scanning
masscan -p80 192.168.1.0/24 --rate=1000
masscan -p80,443,8080 192.168.1.0/24 --rate=10000

# Full port range
masscan -p0-65535 192.168.1.0/24 --rate=5000

# Large-scale scanning
masscan 0.0.0.0/0 -p443 --rate=100000 --excludefile exclude.txt

# Output formats
masscan -p80 192.168.1.0/24 -oG results.gnmap
masscan -p80 192.168.1.0/24 -oJ results.json
masscan -p80 192.168.1.0/24 -oX results.xml

# Banner grabbing
masscan -p80 192.168.1.0/24 --banners
```

### Phase 2: Vulnerability Scanning Tools

#### Nessus

Enterprise-grade vulnerability assessment:

```bash
# Start Nessus service
sudo systemctl start nessusd

# Access web interface
# https://localhost:8834

# Command-line (nessuscli)
nessuscli scan --create --name "Internal Scan" --targets 192.168.1.0/24
nessuscli scan --list
nessuscli scan --launch <scan_id>
nessuscli report --format pdf --output report.pdf <scan_id>
```

Key Nessus features:
- Comprehensive CVE detection
- Compliance checks (PCI-DSS, HIPAA, CIS)
- Custom scan templates
- Credentialed scanning for deeper analysis
- Regular plugin updates

#### OpenVAS (Greenbone)

Open-source vulnerability scanning:

```bash
# Install OpenVAS
sudo apt install openvas
sudo gvm-setup

# Start services
sudo gvm-start

# Access web interface (Greenbone Security Assistant)
# https://localhost:9392

# Command-line operations
gvm-cli socket --xml "<get_version/>"
gvm-cli socket --xml "<get_tasks/>"

# Create and run scan
gvm-cli socket --xml '
<create_target>
  <name>Test Target</name>
  <hosts>192.168.1.0/24</hosts>
</create_target>'
```

### Phase 3: Web Application Scanning Tools

#### Burp Suite

Comprehensive web application testing:

```
# Proxy configuration
1. Set browser proxy to 127.0.0.1:8080
2. Import Burp CA certificate for HTTPS
3. Add target to scope

# Key modules:
- Proxy: Intercept and modify requests
- Spider: Crawl web applications
- Scanner: Automated vulnerability detection
- Intruder: Automated attacks (fuzzing, brute-force)
- Repeater: Manual request manipulation
- Decoder: Encode/decode data
- Comparer: Compare responses
```

Core testing workflow:
1. Configure proxy and scope
2. Spider the application
3. Analyze sitemap
4. Run active scanner
5. Manual testing with Repeater/Intruder
6. Review findings and generate report

#### OWASP ZAP

Open-source web application scanner:

```bash
# Start ZAP
zaproxy

# Automated scan from CLI
zap-cli quick-scan https://target.com

# Full scan
zap-cli spider https://target.com
zap-cli active-scan https://target.com

# Generate report
zap-cli report -o report.html -f html

# API mode
zap.sh -daemon -port 8080 -config api.key=<your_key>
```

ZAP automation:
```bash
# Docker-based scanning
docker run -t owasp/zap2docker-stable zap-full-scan.py \
  -t https://target.com -r report.html

# Baseline scan (passive only)
docker run -t owasp/zap2docker-stable zap-baseline.py \
  -t https://target.com -r report.html
```

#### Nikto

Web server vulnerability scanner:

```bash
# Basic scan
nikto -h https://target.com

# Scan specific port
nikto -h target.com -p 8080

# Scan with SSL
nikto -h target.com -ssl

# Multiple targets
nikto -h targets.txt

# Output formats
nikto -h target.com -o report.html -Format html
nikto -h target.com -o report.xml -Format xml
nikto -h target.com -o report.csv -Format csv

# Tuning options
nikto -h target.com -Tuning 123456789  # All tests
nikto -h target.com -Tuning x          # Exclude specific tests
```

### Phase 4: Wireless Scanning Tools

#### Aircrack-ng Suite

Wireless network penetration testing:

```bash
# Check wireless interface
airmon-ng

# Enable monitor mode
sudo airmon-ng start wlan0

# Scan for networks
sudo airodump-ng wlan0mon

# Capture specific network
sudo airodump-ng -c <channel> --bssid <target_bssid> -w capture wlan0mon

# Deauthentication attack
sudo aireplay-ng -0 10 -a <bssid> wlan0mon

# Crack WPA handshake
aircrack-ng -w wordlist.txt -b <bssid> capture*.cap

# Crack WEP
aircrack-ng -b <bssid> capture*.cap
```

#### Kismet

Passive wireless detection:

```bash
# Start Kismet
kismet

# Specify interface
kismet -c wlan0

# Access web interface
# http://localhost:2501

# Detect hidden networks
# Kismet passively collects all beacon frames
# including those from hidden SSIDs
```

### Phase 5: Malware and Exploit Scanning

#### ClamAV

Open-source antivirus scanning:

```bash
# Update virus definitions
sudo freshclam

# Scan directory
clamscan -r /path/to/scan

# Scan with verbose output
clamscan -r -v /path/to/scan

# Move infected files
clamscan -r --move=/quarantine /path/to/scan

# Remove infected files
clamscan -r --remove /path/to/scan

# Scan specific file types
clamscan -r --include='\.exe$|\.dll$' /path/to/scan

# Output to log
clamscan -r -l scan.log /path/to/scan
```

#### Metasploit Vulnerability Validation

Validate vulnerabilities with exploitation:

```bash
# Start Metasploit
msfconsole

# Database setup
msfdb init
db_status

# Import Nmap results
db_import /path/to/nmap_scan.xml

# Vulnerability scanning
use auxiliary/scanner/smb/smb_ms17_010
set RHOSTS 192.168.1.0/24
run

# Auto exploitation
vulns                           # View vulnerabilities
analyze                         # Suggest exploits
```

### Phase 6: Cloud Security Scanning

#### Prowler (AWS)

AWS security assessment:

```bash
# Install Prowler
pip install prowler

# Basic scan
prowler aws

# Specific checks
prowler aws -c iam s3 ec2

# Compliance framework
prowler aws --compliance cis_aws

# Output formats
prowler aws -M html json csv

# Specific region
prowler aws -f us-east-1

# Assume role
prowler aws -R arn:aws:iam::123456789012:role/ProwlerRole
```

#### ScoutSuite (Multi-cloud)

Multi-cloud security auditing:

```bash
# Install ScoutSuite
pip install scoutsuite

# AWS scan
scout aws

# Azure scan
scout azure --cli

# GCP scan
scout gcp --user-account

# Generate report
scout aws --report-dir ./reports
```

### Phase 7: Compliance Scanning

#### Lynis

Security auditing for Unix/Linux:

```bash
# Run audit
sudo lynis audit system

# Quick scan
sudo lynis audit system --quick

# Specific profile
sudo lynis audit system --profile server

# Output report
sudo lynis audit system --report-file /tmp/lynis-report.dat

# Check specific section
sudo lynis show profiles
sudo lynis audit system --tests-from-group malware
```

#### OpenSCAP

Security compliance scanning:

```bash
# List available profiles
oscap info /usr/share/xml/scap/ssg/content/ssg-<distro>-ds.xml

# Run scan with profile
oscap xccdf eval --profile xccdf_org.ssgproject.content_profile_pci-dss \
  --report report.html \
  /usr/share/xml/scap/ssg/content/ssg-rhel8-ds.xml

# Generate fix script
oscap xccdf generate fix \
  --profile xccdf_org.ssgproject.content_profile_pci-dss \
  --output remediation.sh \
  /usr/share/xml/scap/ssg/content/ssg-rhel8-ds.xml
```

### Phase 8: Scanning Methodology

Structured scanning approach:

1. **Planning**
   - Define scope and objectives
   - Obtain proper authorization
   - Select appropriate tools

2. **Discovery**
   - Host discovery (Nmap ping sweep)
   - Port scanning
   - Service enumeration

3. **Vulnerability Assessment**
   - Automated scanning (Nessus/OpenVAS)
   - Web application scanning (Burp/ZAP)
   - Manual verification

4. **Analysis**
   - Correlate findings
   - Eliminate false positives
   - Prioritize by severity

5. **Reporting**
   - Document findings
   - Provide remediation guidance
   - Executive summary

### Phase 9: Tool Selection Guide

Choose the right tool for each scenario:

| Scenario | Recommended Tools |
|----------|-------------------|
| Network Discovery | Nmap, Masscan |
| Vulnerability Assessment | Nessus, OpenVAS |
| Web App Testing | Burp Suite, ZAP, Nikto |
| Wireless Security | Aircrack-ng, Kismet |
| Malware Detection | ClamAV, YARA |
| Cloud Security | Prowler, ScoutSuite |
| Compliance | Lynis, OpenSCAP |
| Protocol Analysis | Wireshark, tcpdump |

### Phase 10: Reporting and Documentation

Generate professional reports:

```bash
# Nmap XML to HTML
xsltproc nmap-output.xml -o report.html

# OpenVAS report export
gvm-cli socket --xml '<get_reports report_id="<id>" format_id="<pdf_format>"/>'

# Combine multiple scan results
# Use tools like Faraday, Dradis, or custom scripts

# Executive summary template:
# 1. Scope and methodology
# 2. Key findings summary
# 3. Risk distribution chart
# 4. Critical vulnerabilities
# 5. Remediation recommendations
# 6. Detailed technical findings
```

#### Imported: Purpose

Master essential security scanning tools for network discovery, vulnerability assessment, web application testing, wireless security, and compliance validation. This skill covers tool selection, configuration, and practical usage across different scanning categories.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @scanning-tools-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/scanning-tools-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/scanning-tools-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @scanning-tools-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/scanning-tools`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

### Scan Not Detecting Hosts

**Solutions:**
1. Try different discovery methods: `nmap -Pn` or `nmap -sn -PS/PA/PU`
2. Check firewall rules blocking ICMP
3. Use TCP SYN scan: `nmap -PS22,80,443`
4. Verify network connectivity

### Slow Scan Performance

**Solutions:**
1. Increase timing: `nmap -T4` or `-T5`
2. Reduce port range: `--top-ports 100`
3. Use Masscan for initial discovery
4. Disable DNS resolution: `-n`

### Web Scanner Missing Vulnerabilities

**Solutions:**
1. Authenticate to access protected areas
2. Increase crawl depth
3. Add custom injection points
4. Use multiple tools for coverage
5. Perform manual testing

## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Quick Reference

### Nmap Cheat Sheet

| Scan Type | Command |
|-----------|---------|
| Ping Scan | `nmap -sn <target>` |
| Quick Scan | `nmap -T4 -F <target>` |
| Full Scan | `nmap -p- <target>` |
| Service Scan | `nmap -sV <target>` |
| OS Detection | `nmap -O <target>` |
| Aggressive | `nmap -A <target>` |
| Vuln Scripts | `nmap --script=vuln <target>` |
| Stealth Scan | `nmap -sS -T2 <target>` |

### Common Ports Reference

| Port | Service |
|------|---------|
| 21 | FTP |
| 22 | SSH |
| 23 | Telnet |
| 25 | SMTP |
| 53 | DNS |
| 80 | HTTP |
| 443 | HTTPS |
| 445 | SMB |
| 3306 | MySQL |
| 3389 | RDP |

#### Imported: Prerequisites

### Required Environment
- Linux-based system (Kali Linux recommended)
- Network access to target systems
- Proper authorization for scanning activities

### Required Knowledge
- Basic networking concepts (TCP/IP, ports, protocols)
- Understanding of common vulnerabilities
- Familiarity with command-line interfaces

#### Imported: Outputs and Deliverables

1. **Network Discovery Reports** - Identified hosts, ports, and services
2. **Vulnerability Assessment Reports** - CVEs, misconfigurations, risk ratings
3. **Web Application Security Reports** - OWASP Top 10 findings
4. **Compliance Reports** - CIS benchmarks, PCI-DSS, HIPAA checks

#### Imported: Constraints and Limitations

### Legal Considerations
- Always obtain written authorization
- Respect scope boundaries
- Follow responsible disclosure practices
- Comply with local laws and regulations

### Technical Limitations
- Some scans may trigger IDS/IPS alerts
- Heavy scanning can impact network performance
- False positives require manual verification
- Encrypted traffic may limit analysis

### Best Practices
- Start with non-intrusive scans
- Gradually increase scan intensity
- Document all scanning activities
- Validate findings before reporting
