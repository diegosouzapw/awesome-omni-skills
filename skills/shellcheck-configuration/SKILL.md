---
name: shellcheck-configuration
description: "ShellCheck Configuration and Static Analysis workflow skill. Use this skill when the user needs Master ShellCheck static analysis configuration and usage for shell script quality. Use when setting up linting infrastructure, fixing code issues, or ensuring script portability and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["shellcheck-configuration", "master", "shellcheck", "static", "analysis", "configuration", "and", "usage"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# ShellCheck Configuration and Static Analysis

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/shellcheck-configuration` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# ShellCheck Configuration and Static Analysis Comprehensive guidance for configuring and using ShellCheck to improve shell script quality, catch common pitfalls, and enforce best practices through static code analysis.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: ShellCheck Fundamentals, Configuration Files, Common ShellCheck Error Codes, Integration Patterns, Handling ShellCheck Violations, Performance Optimization.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to shellcheck configuration and static analysis
- You need a different domain or tool outside this scope
- Setting up linting for shell scripts in CI/CD pipelines
- Analyzing existing shell scripts for issues
- Understanding ShellCheck error codes and warnings
- Configuring ShellCheck for specific project requirements

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

#### Imported: ShellCheck Fundamentals

### What is ShellCheck?

ShellCheck is a static analysis tool that analyzes shell scripts and detects problematic patterns. It supports:
- Bash, sh, dash, ksh, and other POSIX shells
- Over 100 different warnings and errors
- Configuration for target shell and flags
- Integration with editors and CI/CD systems

### Installation

```bash
# macOS with Homebrew
brew install shellcheck

# Ubuntu/Debian
apt-get install shellcheck

# From source
git clone https://github.com/koalaman/shellcheck.git
cd shellcheck
make build
make install

# Verify installation
shellcheck --version
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @shellcheck-configuration to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/shellcheck-configuration/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/shellcheck-configuration/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @shellcheck-configuration using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Practical Configuration Examples

### Minimal Configuration (Strict POSIX)

```bash
#!/bin/bash
# Configure for maximum portability

shellcheck \
  --shell=sh \
  --external-sources \
  --check-sourced \
  script.sh
```

### Development Configuration (Bash with Relaxed Rules)

```bash
#!/bin/bash
# Configure for Bash development

shellcheck \
  --shell=bash \
  --exclude=SC1091,SC2119 \
  --enable=all \
  script.sh
```

### CI/CD Integration Configuration

```bash
#!/bin/bash
set -Eeuo pipefail

# Analyze all shell scripts and fail on issues
find . -type f -name "*.sh" | while read -r script; do
    echo "Checking: $script"
    shellcheck \
        --shell=bash \
        --format=gcc \
        --exclude=SC1091 \
        "$script" || exit 1
done
```

### .shellcheckrc for Project

```
# Shell dialect to analyze against
shell=bash

# Enable optional checks
enable=avoid-nullary-conditions,require-variable-braces,check-unassigned-uppercase

# Disable specific warnings
# SC1091: Not following sourced files (many false positives)
disable=SC1091

# SC2119: Use function_name instead of function_name -- (arguments)
disable=SC2119

# External files to source for context
external-sources=true
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Run ShellCheck in CI/CD - Catch issues before merging
- Configure for your target shell - Don't analyze bash as sh
- Document exclusions - Explain why violations are suppressed
- Address violations - Don't just disable warnings
- Enable strict mode - Use --enable=all with careful exclusions
- Update regularly - Keep ShellCheck current for new checks
- Use pre-commit hooks - Catch issues locally before pushing

### Imported Operating Notes

#### Imported: Best Practices

1. **Run ShellCheck in CI/CD** - Catch issues before merging
2. **Configure for your target shell** - Don't analyze bash as sh
3. **Document exclusions** - Explain why violations are suppressed
4. **Address violations** - Don't just disable warnings
5. **Enable strict mode** - Use `--enable=all` with careful exclusions
6. **Update regularly** - Keep ShellCheck current for new checks
7. **Use pre-commit hooks** - Catch issues locally before pushing
8. **Integrate with editors** - Get real-time feedback during development

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/shellcheck-configuration`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Resources

- **ShellCheck GitHub**: https://github.com/koalaman/shellcheck
- **ShellCheck Wiki**: https://www.shellcheck.net/wiki/
- **Error Code Reference**: https://www.shellcheck.net/

#### Imported: Configuration Files

### .shellcheckrc (Project Level)

Create `.shellcheckrc` in your project root:

```
# Specify target shell
shell=bash

# Enable optional checks
enable=avoid-nullary-conditions
enable=require-variable-braces

# Disable specific warnings
disable=SC1091
disable=SC2086
```

### Environment Variables

```bash
# Set default shell target
export SHELLCHECK_SHELL=bash

# Enable strict mode
export SHELLCHECK_STRICT=true

# Specify configuration file location
export SHELLCHECK_CONFIG=~/.shellcheckrc
```

#### Imported: Common ShellCheck Error Codes

### SC1000-1099: Parser Errors
```bash
# SC1004: Backslash continuation not followed by newline
echo hello\
world  # Error - needs line continuation

# SC1008: Invalid data for operator `=='
if [[ $var =  "value" ]]; then  # Space before ==
    true
fi
```

### SC2000-2099: Shell Issues

```bash
# SC2009: Consider using pgrep or pidof instead of grep|grep
ps aux | grep -v grep | grep myprocess  # Use pgrep instead

# SC2012: Use `ls` only for viewing. Use `find` for reliable output
for file in $(ls -la)  # Better: use find or globbing

# SC2015: Avoid using && and || instead of if-then-else
[[ -f "$file" ]] && echo "found" || echo "not found"  # Less clear

# SC2016: Expressions don't expand in single quotes
echo '$VAR'  # Literal $VAR, not variable expansion

# SC2026: This word is non-standard. Set POSIXLY_CORRECT
# when using with scripts for other shells
```

### SC2100-2199: Quoting Issues

```bash
# SC2086: Double quote to prevent globbing and word splitting
for i in $list; do  # Should be: for i in $list or for i in "$list"
    echo "$i"
done

# SC2115: Literal tilde in path not expanded. Use $HOME instead
~/.bashrc  # In strings, use "$HOME/.bashrc"

# SC2181: Check exit code directly with `if`, not indirectly in a list
some_command
if [ $? -eq 0 ]; then  # Better: if some_command; then

# SC2206: Quote to prevent word splitting or set IFS
array=( $items )  # Should use: array=( $items )
```

### SC3000-3999: POSIX Compliance Issues

```bash
# SC3010: In POSIX sh, use 'case' instead of 'cond && foo'
[[ $var == "value" ]] && do_something  # Not POSIX

# SC3043: In POSIX sh, use 'local' is undefined
function my_func() {
    local var=value  # Not POSIX in some shells
}
```

#### Imported: Integration Patterns

### Pre-commit Hook Configuration

```bash
#!/bin/bash
# .git/hooks/pre-commit

#!/bin/bash
set -e

# Find all shell scripts changed in this commit
git diff --cached --name-only | grep '\.sh$' | while read -r script; do
    echo "Linting: $script"

    if ! shellcheck "$script"; then
        echo "ShellCheck failed on $script"
        exit 1
    fi
done
```

### GitHub Actions Workflow

```yaml
name: ShellCheck

on: [push, pull_request]

jobs:
  shellcheck:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Run ShellCheck
        run: |
          sudo apt-get install shellcheck
          find . -type f -name "*.sh" -exec shellcheck {} \;
```

### GitLab CI Pipeline

```yaml
shellcheck:
  stage: lint
  image: koalaman/shellcheck-alpine
  script:
    - find . -type f -name "*.sh" -exec shellcheck {} \;
  allow_failure: false
```

#### Imported: Handling ShellCheck Violations

### Suppressing Specific Warnings

```bash
#!/bin/bash

# Disable warning for entire line
# shellcheck disable=SC2086
for file in $(ls -la); do
    echo "$file"
done

# Disable for entire script
# shellcheck disable=SC1091,SC2119

# Disable multiple warnings (format varies)
command_that_fails() {
    # shellcheck disable=SC2015
    [ -f "$1" ] && echo "found" || echo "not found"
}

# Disable specific check for source directive
# shellcheck source=./helper.sh
source helper.sh
```

### Common Violations and Fixes

#### SC2086: Double quote to prevent word splitting

```bash
# Problem
for i in $list; do done

# Solution
for i in $list; do done  # If $list is already quoted, or
for i in "${list[@]}"; do done  # If list is an array
```

#### SC2181: Check exit code directly

```bash
# Problem
some_command
if [ $? -eq 0 ]; then
    echo "success"
fi

# Solution
if some_command; then
    echo "success"
fi
```

#### SC2015: Use if-then instead of && ||

```bash
# Problem
[ -f "$file" ] && echo "exists" || echo "not found"

# Solution - clearer intent
if [ -f "$file" ]; then
    echo "exists"
else
    echo "not found"
fi
```

#### SC2016: Expressions don't expand in single quotes

```bash
# Problem
echo 'Variable value: $VAR'

# Solution
echo "Variable value: $VAR"
```

#### SC2009: Use pgrep instead of grep

```bash
# Problem
ps aux | grep -v grep | grep myprocess

# Solution
pgrep -f myprocess
```

#### Imported: Performance Optimization

### Checking Multiple Files

```bash
#!/bin/bash

# Sequential checking
for script in *.sh; do
    shellcheck "$script"
done

# Parallel checking (faster)
find . -name "*.sh" -print0 | \
    xargs -0 -P 4 -n 1 shellcheck
```

### Caching Results

```bash
#!/bin/bash

CACHE_DIR=".shellcheck_cache"
mkdir -p "$CACHE_DIR"

check_script() {
    local script="$1"
    local hash
    local cache_file

    hash=$(sha256sum "$script" | cut -d' ' -f1)
    cache_file="$CACHE_DIR/$hash"

    if [[ ! -f "$cache_file" ]]; then
        if shellcheck "$script" > "$cache_file" 2>&1; then
            touch "$cache_file.ok"
        else
            return 1
        fi
    fi

    [[ -f "$cache_file.ok" ]]
}

find . -name "*.sh" | while read -r script; do
    check_script "$script" || exit 1
done
```

#### Imported: Output Formats

### Default Format

```bash
shellcheck script.sh

# Output:
# script.sh:1:3: warning: foo is referenced but not assigned. [SC2154]
```

### GCC Format (for CI/CD)

```bash
shellcheck --format=gcc script.sh

# Output:
# script.sh:1:3: warning: foo is referenced but not assigned.
```

### JSON Format (for parsing)

```bash
shellcheck --format=json script.sh

# Output:
# [{"file": "script.sh", "line": 1, "column": 3, "level": "warning", "code": 2154, "message": "..."}]
```

### Quiet Format

```bash
shellcheck --format=quiet script.sh

# Returns non-zero if issues found, no output otherwise
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
