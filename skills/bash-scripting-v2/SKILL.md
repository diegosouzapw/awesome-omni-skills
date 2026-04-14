---
name: bash-scripting-v2
description: "Bash Scripting Workflow workflow skill. Use this skill when the user needs Bash scripting workflow for creating production-ready shell scripts with defensive patterns, error handling, and testing and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["bash-scripting-v2", "bash-scripting", "bash", "scripting", "for", "creating", "production-ready", "shell"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Bash Scripting Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/bash-scripting` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Bash Scripting Workflow

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Script Template, Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating automation scripts
- Writing system administration tools
- Building deployment scripts
- Developing backup solutions
- Creating CI/CD scripts
- Use when the request clearly matches the imported source intent: Bash scripting workflow for creating production-ready shell scripts with defensive patterns, error handling, and testing.

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

1. bash-pro - Professional scripting
2. bash-defensive-patterns - Defensive patterns
3. Define script purpose
4. Identify inputs/outputs
5. Plan error handling
6. Design logging strategy
7. Document requirements

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Script Design

#### Skills to Invoke
- `bash-pro` - Professional scripting
- `bash-defensive-patterns` - Defensive patterns

#### Actions
1. Define script purpose
2. Identify inputs/outputs
3. Plan error handling
4. Design logging strategy
5. Document requirements

#### Copy-Paste Prompts
```
Use @bash-pro to design production-ready bash script
```

### Phase 2: Script Structure

#### Skills to Invoke
- `bash-pro` - Script structure
- `bash-defensive-patterns` - Safety patterns

#### Actions
1. Add shebang and strict mode
2. Create usage function
3. Implement argument parsing
4. Set up logging
5. Add cleanup handlers

#### Copy-Paste Prompts
```
Use @bash-defensive-patterns to implement strict mode and error handling
```

### Phase 3: Core Implementation

#### Skills to Invoke
- `bash-linux` - Linux commands
- `linux-shell-scripting` - Shell scripting

#### Actions
1. Implement main functions
2. Add input validation
3. Create helper functions
4. Handle edge cases
5. Add progress indicators

#### Copy-Paste Prompts
```
Use @bash-linux to implement system commands
```

### Phase 4: Error Handling

#### Skills to Invoke
- `bash-defensive-patterns` - Error handling
- `error-handling-patterns` - Error patterns

#### Actions
1. Add trap handlers
2. Implement retry logic
3. Create error messages
4. Set up exit codes
5. Add rollback capability

#### Copy-Paste Prompts
```
Use @bash-defensive-patterns to add comprehensive error handling
```

### Phase 5: Logging

#### Skills to Invoke
- `bash-pro` - Logging patterns

#### Actions
1. Create logging function
2. Add log levels
3. Implement timestamps
4. Configure log rotation
5. Add debug mode

#### Copy-Paste Prompts
```
Use @bash-pro to implement structured logging
```

### Phase 6: Testing

#### Skills to Invoke
- `bats-testing-patterns` - Bats testing
- `shellcheck-configuration` - ShellCheck

#### Actions
1. Write Bats tests
2. Run ShellCheck
3. Test edge cases
4. Verify error handling
5. Test with different inputs

#### Copy-Paste Prompts
```
Use @bats-testing-patterns to write script tests
```

```
Use @shellcheck-configuration to lint bash script
```

### Phase 7: Documentation

#### Skills to Invoke
- `documentation-templates` - Documentation

#### Actions
1. Add script header
2. Document functions
3. Create usage examples
4. List dependencies
5. Add troubleshooting section

#### Copy-Paste Prompts
```
Use @documentation-templates to document bash script
```

#### Imported: Related Workflow Bundles

- `os-scripting` - OS scripting
- `linux-troubleshooting` - Linux troubleshooting
- `cloud-devops` - DevOps automation

#### Imported: Overview

Specialized workflow for creating robust, production-ready bash scripts with defensive programming patterns, comprehensive error handling, and automated testing.

#### Imported: Script Template

```bash
#!/usr/bin/env bash
set -euo pipefail

readonly SCRIPT_NAME=$(basename "$0")
readonly SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }
error() { log "ERROR: $*" >&2; exit 1; }

usage() { cat <<EOF
Usage: $SCRIPT_NAME [OPTIONS]
Options:
    -h, --help      Show help
    -v, --verbose   Verbose output
EOF
}

main() {
    log "Script started"
    # Implementation
    log "Script completed"
}

main "$@"
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @bash-scripting-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/bash-scripting-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/bash-scripting-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @bash-scripting-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/bash-scripting`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Quality Gates

- [ ] ShellCheck passes
- [ ] Bats tests pass
- [ ] Error handling works
- [ ] Logging functional
- [ ] Documentation complete

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
