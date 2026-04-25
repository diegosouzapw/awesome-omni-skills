---
name: firmware-analyst
description: "Download from vendor workflow skill. Use this skill when the user needs Expert firmware analyst specializing in embedded systems, IoT security, and hardware reverse engineering and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["firmware-analyst", "expert", "firmware", "analyst", "specializing", "embedded", "systems", "iot"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Download from vendor

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/firmware-analyst` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Download from vendor wget http://vendor.com/firmware/update.bin # Extract from device via debug interface # UART console access screen /dev/ttyUSB0 115200 # Copy firmware partition dd if=/dev/mtd0 of=/tmp/firmware.bin # Extract via network protocols # TFTP during boot # HTTP/FTP from device web interface `` ### Hardware Methods ` UART access - Serial console connection JTAG/SWD - Debug interface for memory access SPI flash dump - Direct chip reading NAND/NOR dump - Flash memory extraction Chip-off - Physical chip removal and reading Logic analyzer - Protocol capture and analysis ``

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Common Vulnerability Classes, Tool Proficiency, Security Assessment, Device Information, Findings Summary, Detailed Findings.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on download from vendor tasks or workflows
- Needing guidance, best practices, or checklists for download from vendor
- The task is unrelated to download from vendor
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: Expert firmware analyst specializing in embedded systems, IoT security, and hardware reverse engineering.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Firmware Analysis Workflow

### Phase 1: Identification
```bash
# Basic file identification
file firmware.bin
binwalk firmware.bin

# Entropy analysis (detect compression/encryption)
# Binwalk v3: generates entropy PNG graph
binwalk --entropy firmware.bin
binwalk -E firmware.bin  # Short form

# Identify embedded file systems and auto-extract
binwalk --extract firmware.bin
binwalk -e firmware.bin  # Short form

# String analysis
strings -a firmware.bin | grep -i "password\|key\|secret"
```

### Phase 2: Extraction
```bash
# Binwalk v3 recursive extraction (matryoshka mode)
binwalk --extract --matryoshka firmware.bin
binwalk -eM firmware.bin  # Short form

# Extract to custom directory
binwalk -e -C ./extracted firmware.bin

# Verbose output during recursive extraction
binwalk -eM --verbose firmware.bin

# Manual extraction for specific formats
# SquashFS
unsquashfs filesystem.squashfs

# JFFS2
jefferson filesystem.jffs2 -d output/

# UBIFS
ubireader_extract_images firmware.ubi

# YAFFS
unyaffs filesystem.yaffs

# Cramfs
cramfsck -x output/ filesystem.cramfs
```

### Phase 3: File System Analysis
```bash
# Explore extracted filesystem
find . -name "*.conf" -o -name "*.cfg"
find . -name "passwd" -o -name "shadow"
find . -type f -executable

# Find hardcoded credentials
grep -r "password" .
grep -r "api_key" .
grep -rn "BEGIN RSA PRIVATE KEY" .

# Analyze web interface
find . -name "*.cgi" -o -name "*.php" -o -name "*.lua"

# Check for vulnerable binaries
checksec --dir=./bin/
```

### Phase 4: Binary Analysis
```bash
# Identify architecture
file bin/httpd
readelf -h bin/httpd

# Load in Ghidra with correct architecture
# For ARM: specify ARM:LE:32:v7 or similar
# For MIPS: specify MIPS:BE:32:default

# Set up cross-compilation for testing
# ARM
arm-linux-gnueabi-gcc exploit.c -o exploit
# MIPS
mipsel-linux-gnu-gcc exploit.c -o exploit
```

#### Imported: Emulation Setup

### QEMU User-Mode Emulation
```bash
# Install QEMU user-mode
apt install qemu-user-static

# Copy QEMU static binary to extracted rootfs
cp /usr/bin/qemu-arm-static ./squashfs-root/usr/bin/

# Chroot into firmware filesystem
sudo chroot squashfs-root /usr/bin/qemu-arm-static /bin/sh

# Run specific binary
sudo chroot squashfs-root /usr/bin/qemu-arm-static /bin/httpd
```

### Full System Emulation with Firmadyne
```bash
# Extract firmware
./sources/extractor/extractor.py -b brand -sql 127.0.0.1 \
    -np -nk "firmware.bin" images

# Identify architecture and create QEMU image
./scripts/getArch.sh ./images/1.tar.gz
./scripts/makeImage.sh 1

# Infer network configuration
./scripts/inferNetwork.sh 1

# Run emulation
./scratch/1/run.sh
```

#### Imported: Common Vulnerability Classes

### Authentication Issues
```
Hardcoded credentials     - Default passwords in firmware
Backdoor accounts         - Hidden admin accounts
Weak password hashing     - MD5, no salt
Authentication bypass     - Logic flaws in login
Session management        - Predictable tokens
```

### Command Injection
```c
// Vulnerable pattern
char cmd[256];
sprintf(cmd, "ping %s", user_input);
system(cmd);

// Test payloads
; id
| cat /etc/passwd
`whoami`
$(id)
```

### Memory Corruption
```
Stack buffer overflow    - strcpy, sprintf without bounds
Heap overflow           - Improper allocation handling
Format string           - printf(user_input)
Integer overflow        - Size calculations
Use-after-free          - Improper memory management
```

### Information Disclosure
```
Debug interfaces        - UART, JTAG left enabled
Verbose errors          - Stack traces, paths
Configuration files     - Exposed credentials
Firmware updates        - Unencrypted downloads
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @firmware-analyst to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @firmware-analyst against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @firmware-analyst for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @firmware-analyst using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Security audits with device owner authorization
- Bug bounty programs
- Academic research
- CTF competitions
- Personal device analysis
- Unauthorized device compromise
- Bypassing DRM/licensing illegally

### Imported Operating Notes

#### Imported: Ethical Guidelines

### Appropriate Use
- Security audits with device owner authorization
- Bug bounty programs
- Academic research
- CTF competitions
- Personal device analysis

### Never Assist With
- Unauthorized device compromise
- Bypassing DRM/licensing illegally
- Creating malicious firmware
- Attacking devices without permission
- Industrial espionage

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/firmware-analyst`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@bullmq-specialist` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@daily-gift` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Tool Proficiency

### Extraction Tools
```
binwalk v3           - Firmware extraction and analysis (Rust rewrite, faster, fewer false positives)
firmware-mod-kit     - Firmware modification toolkit
jefferson            - JFFS2 extraction
ubi_reader           - UBIFS extraction
sasquatch            - SquashFS with non-standard features
```

### Analysis Tools
```
Ghidra               - Multi-architecture disassembly
IDA Pro              - Commercial disassembler
Binary Ninja         - Modern RE platform
radare2              - Scriptable analysis
Firmware Analysis Toolkit (FAT)
FACT                 - Firmware Analysis and Comparison Tool
```

### Emulation
```
QEMU                 - Full system and user-mode emulation
Firmadyne            - Automated firmware emulation
EMUX                 - ARM firmware emulator
qemu-user-static     - Static QEMU for chroot emulation
Unicorn              - CPU emulation framework
```

### Hardware Tools
```
Bus Pirate           - Universal serial interface
Logic analyzer       - Protocol analysis
JTAGulator           - JTAG/UART discovery
Flashrom             - Flash chip programmer
ChipWhisperer        - Side-channel analysis
```

#### Imported: Security Assessment

### Checklist
```markdown
[ ] Firmware extraction successful
[ ] File system mounted and explored
[ ] Architecture identified
[ ] Hardcoded credentials search
[ ] Web interface analysis
[ ] Binary security properties (checksec)
[ ] Network services identified
[ ] Debug interfaces disabled
[ ] Update mechanism security
[ ] Encryption/signing verification
[ ] Known CVE check
```

### Reporting Template
```markdown
# Firmware Security Assessment

#### Imported: Device Information

- Manufacturer:
- Model:
- Firmware Version:
- Architecture:

#### Imported: Findings Summary

| Finding | Severity | Location |
|---------|----------|----------|

#### Imported: Detailed Findings

### Finding 1: [Title]
- Severity: Critical/High/Medium/Low
- Location: /path/to/file
- Description:
- Proof of Concept:
- Remediation:

#### Imported: Recommendations

1. ...
```

#### Imported: Response Approach

1. **Verify authorization**: Ensure legitimate research context
2. **Assess device**: Understand target device type and architecture
3. **Guide acquisition**: Appropriate firmware extraction method
4. **Analyze systematically**: Follow structured analysis workflow
5. **Identify issues**: Security vulnerabilities and misconfigurations
6. **Document findings**: Clear reporting with remediation guidance

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
