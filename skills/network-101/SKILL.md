---
name: network-101
description: "Network 101 workflow skill. Use this skill when the user needs Configure and test common network services (HTTP, HTTPS, SNMP, SMB) for penetration testing lab environments. Enable hands-on practice with service enumeration, log analysis, and security testing against properly configured target systems and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["network-101", "configure", "and", "test", "common", "network", "services", "http"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "zebbern"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Network 101

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/network-101` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Network 101

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Inputs/Prerequisites, Outputs/Deliverables, Constraints.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Configure and test common network services (HTTP, HTTPS, SNMP, SMB) for penetration testing lab environments. Enable hands-on practice with service enumeration, log analysis, and security testing against properly....
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

1. Open IIS Manager (Internet Information Services)
2. Right-click Sites → Add Website
3. Configure site name and physical path
4. Bind to IP address and port 80
5. Open Server Manager → Add Features
6. Select SNMP Service
7. Configure community strings in Services → SNMP Service → Properties

### Imported Workflow Notes

#### Imported: Core Workflow

### 1. Configure HTTP Server (Port 80)

Set up a basic HTTP web server for testing:

**Windows IIS Setup:**
1. Open IIS Manager (Internet Information Services)
2. Right-click Sites → Add Website
3. Configure site name and physical path
4. Bind to IP address and port 80

**Linux Apache Setup:**

```bash
# Install Apache
sudo apt update && sudo apt install apache2

# Start service
sudo systemctl start apache2
sudo systemctl enable apache2

# Create test page
echo "<html><body><h1>Test Page</h1></body></html>" | sudo tee /var/www/html/index.html

# Verify service
curl http://localhost
```

**Configure Firewall for HTTP:**

```bash
# Linux (UFW)
sudo ufw allow 80/tcp

# Windows PowerShell
New-NetFirewallRule -DisplayName "HTTP" -Direction Inbound -Protocol TCP -LocalPort 80 -Action Allow
```

### 2. Configure HTTPS Server (Port 443)

Set up secure HTTPS with SSL/TLS:

**Generate Self-Signed Certificate:**

```bash
# Linux - Generate certificate
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /etc/ssl/private/apache-selfsigned.key \
  -out /etc/ssl/certs/apache-selfsigned.crt

# Enable SSL module
sudo a2enmod ssl
sudo systemctl restart apache2
```

**Configure Apache for HTTPS:**

```bash
# Edit SSL virtual host
sudo nano /etc/apache2/sites-available/default-ssl.conf

# Enable site
sudo a2ensite default-ssl
sudo systemctl reload apache2
```

**Verify HTTPS Setup:**

```bash
# Check port 443 is open
nmap -p 443 192.168.1.1

# Test SSL connection
openssl s_client -connect 192.168.1.1:443

# Check certificate
curl -kv https://192.168.1.1
```

### 3. Configure SNMP Service (Port 161)

Set up SNMP for enumeration practice:

**Linux SNMP Setup:**

```bash
# Install SNMP daemon
sudo apt install snmpd snmp

# Configure community strings
sudo nano /etc/snmp/snmpd.conf

# Add these lines:
# rocommunity public
# rwcommunity private

# Restart service
sudo systemctl restart snmpd
```

**Windows SNMP Setup:**
1. Open Server Manager → Add Features
2. Select SNMP Service
3. Configure community strings in Services → SNMP Service → Properties

**SNMP Enumeration Commands:**

```bash
# Basic SNMP walk
snmpwalk -c public -v1 192.168.1.1

# Enumerate system info
snmpwalk -c public -v1 192.168.1.1 1.3.6.1.2.1.1

# Get running processes
snmpwalk -c public -v1 192.168.1.1 1.3.6.1.2.1.25.4.2.1.2

# SNMP check tool
snmp-check 192.168.1.1 -c public

# Brute force community strings
onesixtyone -c /usr/share/seclists/Discovery/SNMP/common-snmp-community-strings.txt 192.168.1.1
```

### 4. Configure SMB Service (Port 445)

Set up SMB file shares for enumeration:

**Windows SMB Share:**
1. Create folder to share
2. Right-click → Properties → Sharing → Advanced Sharing
3. Enable sharing and set permissions
4. Configure NTFS permissions

**Linux Samba Setup:**

```bash
# Install Samba
sudo apt install samba

# Create share directory
sudo mkdir -p /srv/samba/share
sudo chmod 777 /srv/samba/share

# Configure Samba
sudo nano /etc/samba/smb.conf

# Add share:
# [public]
#    path = /srv/samba/share
#    browsable = yes
#    guest ok = yes
#    read only = no

# Restart service
sudo systemctl restart smbd
```

**SMB Enumeration Commands:**

```bash
# List shares anonymously
smbclient -L //192.168.1.1 -N

# Connect to share
smbclient //192.168.1.1/share -N

# Enumerate with smbmap
smbmap -H 192.168.1.1

# Full enumeration
enum4linux -a 192.168.1.1

# Check for vulnerabilities
nmap --script smb-vuln* 192.168.1.1
```

### 5. Analyze Service Logs

Review logs for security analysis:

**HTTP/HTTPS Logs:**

```bash
# Apache access log
sudo tail -f /var/log/apache2/access.log

# Apache error log
sudo tail -f /var/log/apache2/error.log

# Windows IIS logs
# Location: C:\inetpub\logs\LogFiles\W3SVC1\
```

**Parse Log for Credentials:**

```bash
# Search for POST requests
grep "POST" /var/log/apache2/access.log

# Extract user agents
awk '{print $12}' /var/log/apache2/access.log | sort | uniq -c
```

#### Imported: Purpose

Configure and test common network services (HTTP, HTTPS, SNMP, SMB) for penetration testing lab environments. Enable hands-on practice with service enumeration, log analysis, and security testing against properly configured target systems.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @network-101 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @network-101 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @network-101 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @network-101 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Complete HTTP Lab Setup

```bash
# Install and configure
sudo apt install apache2
sudo systemctl start apache2

# Create login page
cat << 'EOF' | sudo tee /var/www/html/login.html
<html>
<body>
<form method="POST" action="login.php">
Username: <input type="text" name="user"><br>
Password: <input type="password" name="pass"><br>
<input type="submit" value="Login">
</form>
</body>
</html>
EOF

# Allow through firewall
sudo ufw allow 80/tcp
```

### Example 2: SNMP Testing Setup

```bash
# Quick SNMP configuration
sudo apt install snmpd
echo "rocommunity public" | sudo tee -a /etc/snmp/snmpd.conf
sudo systemctl restart snmpd

# Test enumeration
snmpwalk -c public -v1 localhost
```

### Example 3: SMB Anonymous Access

```bash
# Configure anonymous share
sudo apt install samba
sudo mkdir /srv/samba/anonymous
sudo chmod 777 /srv/samba/anonymous

# Test access
smbclient //localhost/anonymous -N
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/network-101`, fails to mention provenance, or does not use any copied source files at all.
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
| Port not accessible | Check firewall rules (ufw, iptables, Windows Firewall) |
| Service not starting | Check logs with `journalctl -u service-name` |
| SNMP timeout | Verify UDP 161 is open, check community string |
| SMB access denied | Verify share permissions and user credentials |
| HTTPS certificate error | Accept self-signed cert or add to trusted store |
| Cannot connect remotely | Bind service to 0.0.0.0 instead of localhost |

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

### Essential Ports

| Service | Port | Protocol |
|---------|------|----------|
| HTTP | 80 | TCP |
| HTTPS | 443 | TCP |
| SNMP | 161 | UDP |
| SMB | 445 | TCP |
| NetBIOS | 137-139 | TCP/UDP |

### Service Verification Commands

```bash
# Check HTTP
curl -I http://target

# Check HTTPS
curl -kI https://target

# Check SNMP
snmpwalk -c public -v1 target

# Check SMB
smbclient -L //target -N
```

### Common Enumeration Tools

| Tool | Purpose |
|------|---------|
| nmap | Port scanning and scripts |
| nikto | Web vulnerability scanning |
| snmpwalk | SNMP enumeration |
| enum4linux | SMB/NetBIOS enumeration |
| smbclient | SMB connection |
| gobuster | Directory brute forcing |

#### Imported: Inputs/Prerequisites

- Windows Server or Linux system for hosting services
- Kali Linux or similar for testing
- Administrative access to target system
- Basic networking knowledge (IP addressing, ports)
- Firewall access for port configuration

#### Imported: Outputs/Deliverables

- Configured HTTP/HTTPS web server
- SNMP service with accessible communities
- SMB file shares with various permission levels
- Captured logs for analysis
- Documented enumeration results

#### Imported: Constraints

- Self-signed certificates trigger browser warnings
- SNMP v1/v2c communities transmit in cleartext
- Anonymous SMB access is often disabled by default
- Firewall rules must allow inbound connections
- Lab environments should be isolated from production
