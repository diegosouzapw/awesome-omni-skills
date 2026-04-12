---
name: memory-forensics-v2
description: "Memory Forensics workflow skill. Use this skill when the user needs Comprehensive techniques for acquiring, analyzing, and extracting artifacts from memory dumps for incident response and malware analysis and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: tools
tags: ["memory-forensics-v2", "memory-forensics", "comprehensive", "techniques", "for", "acquiring", "analyzing", "and"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Memory Forensics

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/memory-forensics` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Memory Forensics Comprehensive techniques for acquiring, analyzing, and extracting artifacts from memory dumps for incident response and malware analysis.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Memory Acquisition, Volatility 3 Framework, Data Structures, Detection Patterns, YARA Integration, String Analysis.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on memory forensics tasks or workflows
- Needing guidance, best practices, or checklists for memory forensics
- The task is unrelated to memory forensics
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: Comprehensive techniques for acquiring, analyzing, and extracting artifacts from memory dumps for incident response and malware analysis.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Analysis Workflows

### Malware Analysis Workflow

```bash
# 1. Initial process survey
vol -f memory.raw windows.pstree > processes.txt
vol -f memory.raw windows.pslist > pslist.txt

# 2. Network connections
vol -f memory.raw windows.netscan > network.txt

# 3. Detect injection
vol -f memory.raw windows.malfind > malfind.txt

# 4. Analyze suspicious processes
vol -f memory.raw windows.dlllist --pid <PID>
vol -f memory.raw windows.handles --pid <PID>

# 5. Dump suspicious executables
vol -f memory.raw windows.pslist --pid <PID> --dump

# 6. Extract strings from dumps
strings -a pid.<PID>.exe > strings.txt

# 7. YARA scanning
vol -f memory.raw windows.yarascan --yara-rules malware.yar
```

### Incident Response Workflow

```bash
# 1. Timeline of events
vol -f memory.raw windows.timeliner > timeline.csv

# 2. User activity
vol -f memory.raw windows.cmdline
vol -f memory.raw windows.consoles

# 3. Persistence mechanisms
vol -f memory.raw windows.registry.printkey \
    --key "Software\Microsoft\Windows\CurrentVersion\Run"

# 4. Services
vol -f memory.raw windows.svcscan

# 5. Scheduled tasks
vol -f memory.raw windows.scheduled_tasks

# 6. Recent files
vol -f memory.raw windows.filescan | grep -i "recent"
```

#### Imported: Memory Acquisition

### Live Acquisition Tools

#### Windows
```powershell
# WinPmem (Recommended)
winpmem_mini_x64.exe memory.raw

# DumpIt
DumpIt.exe

# Belkasoft RAM Capturer
# GUI-based, outputs raw format

# Magnet RAM Capture
# GUI-based, outputs raw format
```

#### Linux
```bash
# LiME (Linux Memory Extractor)
sudo insmod lime.ko "path=/tmp/memory.lime format=lime"

# /dev/mem (limited, requires permissions)
sudo dd if=/dev/mem of=memory.raw bs=1M

# /proc/kcore (ELF format)
sudo cp /proc/kcore memory.elf
```

#### macOS
```bash
# osxpmem
sudo ./osxpmem -o memory.raw

# MacQuisition (commercial)
```

### Virtual Machine Memory

```bash
# VMware: .vmem file is raw memory
cp vm.vmem memory.raw

# VirtualBox: Use debug console
vboxmanage debugvm "VMName" dumpvmcore --filename memory.elf

# QEMU
virsh dump <domain> memory.raw --memory-only

# Hyper-V
# Checkpoint contains memory state
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @memory-forensics-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/memory-forensics-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/memory-forensics-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @memory-forensics-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Minimize footprint: Use lightweight acquisition tools
- Document everything: Record time, tool, and hash of capture
- Verify integrity: Hash memory dump immediately after capture
- Chain of custody: Maintain proper forensic handling
- Start broad: Get overview before deep diving
- Cross-reference: Use multiple plugins for same data
- Timeline correlation: Correlate memory findings with disk/network

### Imported Operating Notes

#### Imported: Best Practices

### Acquisition Best Practices

1. **Minimize footprint**: Use lightweight acquisition tools
2. **Document everything**: Record time, tool, and hash of capture
3. **Verify integrity**: Hash memory dump immediately after capture
4. **Chain of custody**: Maintain proper forensic handling

### Analysis Best Practices

1. **Start broad**: Get overview before deep diving
2. **Cross-reference**: Use multiple plugins for same data
3. **Timeline correlation**: Correlate memory findings with disk/network
4. **Document findings**: Keep detailed notes and screenshots
5. **Validate results**: Verify findings through multiple methods

### Common Pitfalls

- **Stale data**: Memory is volatile, analyze promptly
- **Incomplete dumps**: Verify dump size matches expected RAM
- **Symbol issues**: Ensure correct symbol files for OS version
- **Smear**: Memory may change during acquisition
- **Encryption**: Some data may be encrypted in memory

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/memory-forensics`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



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

#### Imported: Volatility 3 Framework

### Installation and Setup

```bash
# Install Volatility 3
pip install volatility3

# Install symbol tables (Windows)
# Download from https://downloads.volatilityfoundation.org/volatility3/symbols/

# Basic usage
vol -f memory.raw <plugin>

# With symbol path
vol -f memory.raw -s /path/to/symbols windows.pslist
```

### Essential Plugins

#### Process Analysis
```bash
# List processes
vol -f memory.raw windows.pslist

# Process tree (parent-child relationships)
vol -f memory.raw windows.pstree

# Hidden process detection
vol -f memory.raw windows.psscan

# Process memory dumps
vol -f memory.raw windows.memmap --pid <PID> --dump

# Process environment variables
vol -f memory.raw windows.envars --pid <PID>

# Command line arguments
vol -f memory.raw windows.cmdline
```

#### Network Analysis
```bash
# Network connections
vol -f memory.raw windows.netscan

# Network connection state
vol -f memory.raw windows.netstat
```

#### DLL and Module Analysis
```bash
# Loaded DLLs per process
vol -f memory.raw windows.dlllist --pid <PID>

# Find hidden/injected DLLs
vol -f memory.raw windows.ldrmodules

# Kernel modules
vol -f memory.raw windows.modules

# Module dumps
vol -f memory.raw windows.moddump --pid <PID>
```

#### Memory Injection Detection
```bash
# Detect code injection
vol -f memory.raw windows.malfind

# VAD (Virtual Address Descriptor) analysis
vol -f memory.raw windows.vadinfo --pid <PID>

# Dump suspicious memory regions
vol -f memory.raw windows.vadyarascan --yara-rules rules.yar
```

#### Registry Analysis
```bash
# List registry hives
vol -f memory.raw windows.registry.hivelist

# Print registry key
vol -f memory.raw windows.registry.printkey --key "Software\Microsoft\Windows\CurrentVersion\Run"

# Dump registry hive
vol -f memory.raw windows.registry.hivescan --dump
```

#### File System Artifacts
```bash
# Scan for file objects
vol -f memory.raw windows.filescan

# Dump files from memory
vol -f memory.raw windows.dumpfiles --pid <PID>

# MFT analysis
vol -f memory.raw windows.mftscan
```

### Linux Analysis

```bash
# Process listing
vol -f memory.raw linux.pslist

# Process tree
vol -f memory.raw linux.pstree

# Bash history
vol -f memory.raw linux.bash

# Network connections
vol -f memory.raw linux.sockstat

# Loaded kernel modules
vol -f memory.raw linux.lsmod

# Mount points
vol -f memory.raw linux.mount

# Environment variables
vol -f memory.raw linux.envars
```

### macOS Analysis

```bash
# Process listing
vol -f memory.raw mac.pslist

# Process tree
vol -f memory.raw mac.pstree

# Network connections
vol -f memory.raw mac.netstat

# Kernel extensions
vol -f memory.raw mac.lsmod
```

#### Imported: Data Structures

### Windows Process Structures

```c
// EPROCESS (Executive Process)
typedef struct _EPROCESS {
    KPROCESS Pcb;                    // Kernel process block
    EX_PUSH_LOCK ProcessLock;
    LARGE_INTEGER CreateTime;
    LARGE_INTEGER ExitTime;
    // ...
    LIST_ENTRY ActiveProcessLinks;   // Doubly-linked list
    ULONG_PTR UniqueProcessId;       // PID
    // ...
    PEB* Peb;                        // Process Environment Block
    // ...
} EPROCESS;

// PEB (Process Environment Block)
typedef struct _PEB {
    BOOLEAN InheritedAddressSpace;
    BOOLEAN ReadImageFileExecOptions;
    BOOLEAN BeingDebugged;           // Anti-debug check
    // ...
    PVOID ImageBaseAddress;          // Base address of executable
    PPEB_LDR_DATA Ldr;              // Loader data (DLL list)
    PRTL_USER_PROCESS_PARAMETERS ProcessParameters;
    // ...
} PEB;
```

### VAD (Virtual Address Descriptor)

```c
typedef struct _MMVAD {
    MMVAD_SHORT Core;
    union {
        ULONG LongFlags;
        MMVAD_FLAGS VadFlags;
    } u;
    // ...
    PVOID FirstPrototypePte;
    PVOID LastContiguousPte;
    // ...
    PFILE_OBJECT FileObject;
} MMVAD;

// Memory protection flags
#define PAGE_EXECUTE           0x10
#define PAGE_EXECUTE_READ      0x20
#define PAGE_EXECUTE_READWRITE 0x40
#define PAGE_EXECUTE_WRITECOPY 0x80
```

#### Imported: Detection Patterns

### Process Injection Indicators

```python
# Malfind indicators
# - PAGE_EXECUTE_READWRITE protection (suspicious)
# - MZ header in non-image VAD region
# - Shellcode patterns at allocation start

# Common injection techniques
# 1. Classic DLL Injection
#    - VirtualAllocEx + WriteProcessMemory + CreateRemoteThread

# 2. Process Hollowing
#    - CreateProcess (SUSPENDED) + NtUnmapViewOfSection + WriteProcessMemory

# 3. APC Injection
#    - QueueUserAPC targeting alertable threads

# 4. Thread Execution Hijacking
#    - SuspendThread + SetThreadContext + ResumeThread
```

### Rootkit Detection

```bash
# Compare process lists
vol -f memory.raw windows.pslist > pslist.txt
vol -f memory.raw windows.psscan > psscan.txt
diff pslist.txt psscan.txt  # Hidden processes

# Check for DKOM (Direct Kernel Object Manipulation)
vol -f memory.raw windows.callbacks

# Detect hooked functions
vol -f memory.raw windows.ssdt  # System Service Descriptor Table

# Driver analysis
vol -f memory.raw windows.driverscan
vol -f memory.raw windows.driverirp
```

### Credential Extraction

```bash
# Dump hashes (requires hivelist first)
vol -f memory.raw windows.hashdump

# LSA secrets
vol -f memory.raw windows.lsadump

# Cached domain credentials
vol -f memory.raw windows.cachedump

# Mimikatz-style extraction
# Requires specific plugins/tools
```

#### Imported: YARA Integration

### Writing Memory YARA Rules

```yara
rule Suspicious_Injection
{
    meta:
        description = "Detects common injection shellcode"

    strings:
        // Common shellcode patterns
        $mz = { 4D 5A }
        $shellcode1 = { 55 8B EC 83 EC }  // Function prologue
        $api_hash = { 68 ?? ?? ?? ?? 68 ?? ?? ?? ?? E8 }  // Push hash, call

    condition:
        $mz at 0 or any of ($shellcode*)
}

rule Cobalt_Strike_Beacon
{
    meta:
        description = "Detects Cobalt Strike beacon in memory"

    strings:
        $config = { 00 01 00 01 00 02 }
        $sleep = "sleeptime"
        $beacon = "%s (admin)" wide

    condition:
        2 of them
}
```

### Scanning Memory

```bash
# Scan all process memory
vol -f memory.raw windows.yarascan --yara-rules rules.yar

# Scan specific process
vol -f memory.raw windows.yarascan --yara-rules rules.yar --pid 1234

# Scan kernel memory
vol -f memory.raw windows.yarascan --yara-rules rules.yar --kernel
```

#### Imported: String Analysis

### Extracting Strings

```bash
# Basic string extraction
strings -a memory.raw > all_strings.txt

# Unicode strings
strings -el memory.raw >> all_strings.txt

# Targeted extraction from process dump
vol -f memory.raw windows.memmap --pid 1234 --dump
strings -a pid.1234.dmp > process_strings.txt

# Pattern matching
grep -E "(https?://|[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})" all_strings.txt
```

### FLOSS for Obfuscated Strings

```bash
# FLOSS extracts obfuscated strings
floss malware.exe > floss_output.txt

# From memory dump
floss pid.1234.dmp
```
