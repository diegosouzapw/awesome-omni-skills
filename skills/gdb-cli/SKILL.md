---
name: gdb-cli
description: "GDB Debugging Assistant workflow skill. Use this skill when the user needs GDB debugging assistant for AI agents - analyze core dumps, debug live processes, investigate crashes and deadlocks with source code correlation and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["debugging", "gdb", "core-dump", "crash-analysis", "c", "gdb-cli", "assistant", "for"]
complexity: advanced
risk: caution
tools: ["claude-code", "cursor", "gemini-cli", "codex-cli", "antigravity", "opencode"]
source: community
author: "Cerdore"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# GDB Debugging Assistant

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/gdb-cli` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# GDB Debugging Assistant

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, How It Works, Common Debugging Patterns, Security & Safety Notes, Links.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Analyze core dumps or crash dumps
- Debug running processes with GDB attach
- Investigate crashes, deadlocks, or memory issues
- Get intelligent debugging assistance with source code context
- Debug multi-threaded applications
- The task is unrelated to C/C++ debugging

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

A GDB debugging skill designed for AI agents. Combines **source code analysis** with **runtime state inspection** using gdb-cli to provide intelligent debugging assistance for C/C++ programs.

#### Imported: Prerequisites

```bash
# Install gdb-cli
pip install gdb-cli

# Or from GitHub
pip install git+https://github.com/Cerdore/gdb-cli.git

# Verify GDB has Python support
gdb -nx -q -batch -ex "python print('OK')"
```

**Requirements:**
- Python 3.6.8+
- GDB 9.0+ with Python support enabled
- Linux OS

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @gdb-cli to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/gdb-cli/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/gdb-cli/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @gdb-cli using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Core Dump Analysis

```bash
# Load core dump
gdb-cli load --binary ./myapp --core /tmp/core.1234

# Get crash location
gdb-cli bt -s a1b2c3 --full

# Examine crash frame
gdb-cli locals-cmd -s a1b2c3 --frame 0
```

### Example 2: Live Process Debugging

```bash
# Attach to stuck server
gdb-cli attach --pid 12345

# Check all threads
gdb-cli threads -s b2c3d4

# Get all backtraces
gdb-cli thread-apply -s b2c3d4 bt --all
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Always read source code before drawing conclusions from variable values
- Use --range for pagination on large thread counts or deep backtraces
- Use ptype to understand complex data structures before examining values
- Check all threads for multi-threaded issues
- Cross-reference types with source code definitions
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- Always read source code before drawing conclusions from variable values
- Use `--range` for pagination on large thread counts or deep backtraces
- Use `ptype` to understand complex data structures before examining values
- Check all threads for multi-threaded issues
- Cross-reference types with source code definitions

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/gdb-cli`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: How It Works

### Step 1: Initialize Debug Session

**For core dump analysis:**
```bash
gdb-cli load --binary <binary_path> --core <core_path> [--gdb-path <gdb_path>]
```

**For live process debugging:**
```bash
gdb-cli attach --pid <pid> [--binary <binary_path>]
```

**Output:** A session_id like `"session_id": "a1b2c3"`. Store this for subsequent commands.

### Step 2: Gather Initial Information

```bash
SESSION="<session_id>"

# List all threads
gdb-cli threads -s $SESSION

# Get backtrace (with local variables)
gdb-cli bt -s $SESSION --full

# Get registers
gdb-cli registers -s $SESSION
```

### Step 3: Correlate Source Code (CRITICAL)

For each frame in the backtrace:
1. **Extract frame info**: `{file}:{line} in {function}`
2. **Read source context**: Get ±20 lines around the crash point
3. **Get local variables**: `gdb-cli locals-cmd -s $SESSION --frame <N>`
4. **Analyze**: Correlate code logic with variable values

**Example correlation:**
```
Frame #0: process_data() at src/worker.c:87
Source code shows:
  85: Node* node = get_node(id);
  86: if (node == NULL) return;
  87: node->data = value;  <- Crash here

Variables show:
  node = 0x0 (NULL)

Analysis: The NULL check on line 86 didn't catch the issue.
```

### Step 4: Deep Investigation

```bash
# Examine variables
gdb-cli eval-cmd -s $SESSION "variable_name"
gdb-cli eval-cmd -s $SESSION "ptr->field"
gdb-cli ptype -s $SESSION "struct_name"

# Memory inspection
gdb-cli memory -s $SESSION "0x7fffffffe000" --size 64

# Disassembly
gdb-cli disasm -s $SESSION --count 20

# Check all threads (for deadlock analysis)
gdb-cli thread-apply -s $SESSION bt --all

# View shared libraries
gdb-cli sharedlibs -s $SESSION
```

### Step 5: Session Management

```bash
# List active sessions
gdb-cli sessions

# Check session status
gdb-cli status -s $SESSION

# Stop session (cleanup)
gdb-cli stop -s $SESSION
```

#### Imported: Common Debugging Patterns

### Pattern: Null Pointer Dereference

**Indicators:**
- Crash on memory access instruction
- Pointer variable is 0x0

**Investigation:**
```bash
gdb-cli registers -s $SESSION  # Check RIP
gdb-cli eval-cmd -s $SESSION "ptr"  # Check pointer value
```

### Pattern: Deadlock

**Indicators:**
- Multiple threads stuck in lock functions
- `pthread_mutex_lock` in backtrace

**Investigation:**
```bash
gdb-cli thread-apply -s $SESSION bt --all
# Look for circular wait patterns
```

### Pattern: Memory Corruption

**Indicators:**
- Crash in malloc/free
- Garbage values in variables

**Investigation:**
```bash
gdb-cli memory -s $SESSION "&variable" --size 128
gdb-cli registers -s $SESSION
```

#### Imported: Security & Safety Notes

- This skill requires GDB access to processes and core dumps
- Attaching to processes may require appropriate permissions (sudo, ptrace_scope)
- Core dumps may contain sensitive data - handle with care
- Only debug processes you have authorization to analyze

#### Imported: Links

- **Repository**: https://github.com/Cerdore/gdb-cli
- **PyPI**: https://pypi.org/project/gdb-cli/
- **Documentation**: https://github.com/Cerdore/gdb-cli#readme
