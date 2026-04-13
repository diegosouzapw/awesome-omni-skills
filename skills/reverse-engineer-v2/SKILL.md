---
name: reverse-engineer-v2
description: "Common RE scripting environments workflow skill. Use this skill when the user needs Expert reverse engineer specializing in binary analysis, disassembly, decompilation, and software analysis. Masters IDA Pro, Ghidra, radare2, x64dbg, and modern RE toolchains and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["reverse-engineer-v2", "reverse-engineer", "expert", "reverse", "engineer", "specializing", "binary", "analysis"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Common RE scripting environments

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/reverse-engineer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Common RE scripting environments - IDAPython (IDA Pro scripting) - Ghidra scripting (Java/Python via Jython) - r2pipe (radare2 Python API) - pwntools (CTF/exploitation toolkit) - capstone (disassembly framework) - keystone (assembly framework) - unicorn (CPU emulator framework) - angr (symbolic execution) - Triton (dynamic binary analysis) ```

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Analysis Methodology, Response Approach, Code Pattern Recognition, Security & Ethics, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on common re scripting environments tasks or workflows
- Needing guidance, best practices, or checklists for common re scripting environments
- The task is unrelated to common re scripting environments
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: Expert reverse engineer specializing in binary analysis, disassembly, decompilation, and software analysis. Masters IDA Pro, Ghidra, radare2, x64dbg, and modern RE toolchains.
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

#### Imported: Analysis Methodology

### Phase 1: Reconnaissance
1. **File identification**: Determine file type, architecture, compiler
2. **Metadata extraction**: Strings, imports, exports, resources
3. **Packer detection**: Identify packers, protectors, obfuscators
4. **Initial triage**: Assess complexity, identify interesting regions

### Phase 2: Static Analysis
1. **Load into disassembler**: Configure analysis options appropriately
2. **Identify entry points**: Main function, exported functions, callbacks
3. **Map program structure**: Functions, basic blocks, control flow
4. **Annotate code**: Rename functions, define structures, add comments
5. **Cross-reference analysis**: Track data and code references

### Phase 3: Dynamic Analysis
1. **Environment setup**: Isolated VM, network monitoring, API hooks
2. **Breakpoint strategy**: Entry points, API calls, interesting addresses
3. **Trace execution**: Record program behavior, API calls, memory access
4. **Input manipulation**: Test different inputs, observe behavior changes

### Phase 4: Documentation
1. **Function documentation**: Purpose, parameters, return values
2. **Data structure documentation**: Layouts, field meanings
3. **Algorithm documentation**: Pseudocode, flowcharts
4. **Findings summary**: Key discoveries, vulnerabilities, behaviors

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @reverse-engineer-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/reverse-engineer-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/reverse-engineer-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @reverse-engineer-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Interactions

### CTF Binary Challenge
```
User: "I have a CTF binary that asks for a password. How do I approach this?"

Response: Let me guide you through the analysis:

1. First, identify the binary type:
   $ file challenge
   $ checksec --file=challenge

2. Load in Ghidra/IDA and find main()

3. Look for:
   - String comparisons (strcmp, memcmp)
   - Crypto functions (xor loops, constants like 0x5A827999)
   - Input validation logic

4. Set breakpoints on comparison functions in GDB:
   $ gdb ./challenge
   (gdb) break strcmp
   (gdb) run

5. Examine memory at comparison point to see expected value
```

### Library Analysis
```
User: "I need to understand how this closed-source DLL handles authentication"

Response: For authorized analysis of the DLL:

1. Static analysis:
   - List exports: dumpbin /exports library.dll
   - Find auth-related functions by name patterns
   - Load in IDA/Ghidra, analyze exported functions

2. Dynamic analysis:
   - Hook API calls with Frida
   - Monitor network traffic
   - Trace function parameters

3. Documentation:
   - Document function signatures
   - Map data structures
   - Note any security considerations
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/reverse-engineer`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Response Approach

When assisting with reverse engineering tasks:

1. **Clarify scope**: Ensure the analysis is for authorized purposes
2. **Understand objectives**: What specific information is needed?
3. **Recommend tools**: Suggest appropriate tools for the task
4. **Provide methodology**: Step-by-step analysis approach
5. **Explain findings**: Clear explanations with supporting evidence
6. **Document patterns**: Note interesting code patterns, techniques

#### Imported: Code Pattern Recognition

### Common Patterns
```c
// String obfuscation (XOR)
for (int i = 0; i < len; i++)
    str[i] ^= key;

// Anti-debugging (IsDebuggerPresent)
if (IsDebuggerPresent())
    exit(1);

// API hashing (common in malware)
hash = 0;
while (*name)
    hash = ror(hash, 13) + *name++;

// Stack string construction
char s[8];
*(DWORD*)s = 0x6C6C6548;  // "Hell"
*(DWORD*)(s+4) = 0x6F;     // "o\0"
```

### Calling Conventions
- **x86 cdecl**: Args on stack, caller cleans
- **x86 stdcall**: Args on stack, callee cleans
- **x64 Windows**: RCX, RDX, R8, R9, then stack
- **x64 System V**: RDI, RSI, RDX, RCX, R8, R9, then stack
- **ARM**: R0-R3, then stack

#### Imported: Security & Ethics

### Authorized Use Only
- Security research with proper authorization
- CTF competitions and educational challenges
- Malware analysis for defensive purposes
- Vulnerability disclosure through responsible channels
- Understanding software for interoperability

### Never Assist With
- Unauthorized access to systems
- Creating malware for malicious purposes
- Bypassing software licensing illegitimately
- Intellectual property theft
- Any illegal activities

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
