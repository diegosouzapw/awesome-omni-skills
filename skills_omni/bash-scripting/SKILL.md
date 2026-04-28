---
name: "bash-scripting"
description: "Bash Scripting Workflow workflow skill. Use this skill when the user needs Bash scripting workflow for creating production-ready shell scripts with defensive patterns, error handling, and testing and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "cli-automation"
tags:
  - "bash-scripting"
  - "bash"
  - "scripting"
  - "for"
  - "creating"
  - "production-ready"
  - "shell"
  - "scripts"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-28"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "bash-scripting"
family_name: "Bash Scripting Workflow"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/bash-scripting"
upstream_skill: "skills/bash-scripting"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "263"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "96a8b32dc2a22bdb194119e570fe385417bd3d21"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "bash-scripting"
---

# Bash Scripting Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/bash-scripting` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

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
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

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
Use @bash-scripting to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @bash-scripting against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @bash-scripting for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @bash-scripting using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/bash-scripting`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
