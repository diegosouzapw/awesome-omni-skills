---
name: posix-shell-pro
description: "posix-shell-pro workflow skill. Use this skill when the user needs Expert in strict POSIX sh scripting for maximum portability across Unix-like systems. Specializes in shell scripts that run on any POSIX-compliant shell (dash, ash, sh, bash --posix) and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["posix-shell-pro", "expert", "strict", "posix", "scripting", "for", "maximum", "portability"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# posix-shell-pro

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/posix-shell-pro` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Focus Areas, POSIX Constraints, Approach, Compatibility & Portability, Readability & Maintainability, Safety & Security Patterns.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on posix shell pro tasks or workflows
- Needing guidance, best practices, or checklists for posix shell pro
- The task is unrelated to posix shell pro
- You need a different domain or tool outside this scope
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.

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

#### Imported: Focus Areas

- Strict POSIX compliance for maximum portability
- Shell-agnostic scripting that works on any Unix-like system
- Defensive programming with portable error handling
- Safe argument parsing without bash-specific features
- Portable file operations and resource management
- Cross-platform compatibility (Linux, BSD, Solaris, AIX, macOS)
- Testing with dash, ash, and POSIX mode validation
- Static analysis with ShellCheck in POSIX mode
- Minimalist approach using only POSIX-specified features
- Compatibility with legacy systems and embedded environments

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @posix-shell-pro to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @posix-shell-pro against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @posix-shell-pro for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @posix-shell-pro using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/posix-shell-pro`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@odoo-rpc-api` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-sales-crm-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-security-rules` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-shopify-integration` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: References & Further Reading

### POSIX Standards & Specifications
- [POSIX Shell Command Language](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html) - Official POSIX.1-2024 specification
- [POSIX Utilities](https://pubs.opengroup.org/onlinepubs/9699919799/idx/utilities.html) - Complete list of POSIX-mandated utilities
- [Autoconf Portable Shell Programming](https://www.gnu.org/software/autoconf/manual/autoconf.html#Portable-Shell) - Comprehensive portability guide from GNU

### Portability & Best Practices
- [Rich's sh (POSIX shell) tricks](http://www.etalabs.net/sh_tricks.html) - Advanced POSIX shell techniques
- [Suckless Shell Style Guide](https://suckless.org/coding_style/) - Minimalist POSIX sh patterns
- [FreeBSD Porter's Handbook - Shell](https://docs.freebsd.org/en/books/porters-handbook/makefiles/#porting-shlibs) - BSD portability considerations

### Tools & Testing
- [checkbashisms](https://manpages.debian.org/testing/devscripts/checkbashisms.1.en.html) - Detect bash-specific constructs

#### Imported: POSIX Constraints

- No arrays (use positional parameters or delimited strings)
- No `[[` conditionals (use `[` test command only)
- No process substitution `<()` or `>()`
- No brace expansion `{1..10}`
- No `local` keyword (use function-scoped variables carefully)
- No `declare`, `typeset`, or `readonly` for variable attributes
- No `+=` operator for string concatenation
- No `${var//pattern/replacement}` substitution
- No associative arrays or hash tables
- No `source` command (use `.` for sourcing files)

#### Imported: Approach

- Always use `#!/bin/sh` shebang for POSIX shell
- Use `set -eu` for error handling (no `pipefail` in POSIX)
- Quote all variable expansions: `"$var"` never `$var`
- Use `[ ]` for all conditional tests, never `[[`
- Implement argument parsing with `while` and `case` (no `getopts` for long options)
- Create temporary files safely with `mktemp` and cleanup traps
- Use `printf` instead of `echo` for all output (echo behavior varies)
- Use `. script.sh` instead of `source script.sh` for sourcing
- Implement error handling with explicit `|| exit 1` checks
- Design scripts to be idempotent and support dry-run modes
- Use `IFS` manipulation carefully and restore original value
- Validate inputs with `[ -n "$var" ]` and `[ -z "$var" ]` tests
- End option parsing with `--` and use `rm -rf -- "$dir"` for safety
- Use command substitution `$()` instead of backticks for readability
- Implement structured logging with timestamps using `date`
- Test scripts with dash/ash to verify POSIX compliance

#### Imported: Compatibility & Portability

- Use `#!/bin/sh` to invoke the system's POSIX shell
- Test on multiple shells: dash (Debian/Ubuntu default), ash (Alpine/BusyBox), bash --posix
- Avoid GNU-specific options; use POSIX-specified flags only
- Handle platform differences: `uname -s` for OS detection
- Use `command -v` instead of `which` (more portable)
- Check for command availability: `command -v cmd >/dev/null 2>&1 || exit 1`
- Provide portable implementations for missing utilities
- Use `[ -e "$file" ]` for existence checks (works on all systems)
- Avoid `/dev/stdin`, `/dev/stdout` (not universally available)
- Use explicit redirection instead of `&>` (bash-specific)

#### Imported: Readability & Maintainability

- Use descriptive variable names in UPPER_CASE for exports, lower_case for locals
- Add section headers with comment blocks for organization
- Keep functions under 50 lines; extract complex logic
- Use consistent indentation (spaces only, typically 2 or 4)
- Document function purpose and parameters in comments
- Use meaningful names: `validate_input` not `check`
- Add comments for non-obvious POSIX workarounds
- Group related functions with descriptive headers
- Extract repeated code into functions
- Use blank lines to separate logical sections

#### Imported: Safety & Security Patterns

- Quote all variable expansions to prevent word splitting
- Validate file permissions before operations: `[ -r "$file" ] || exit 1`
- Sanitize user input before using in commands
- Validate numeric input: `case $num in *[!0-9]*) exit 1 ;; esac`
- Never use `eval` on untrusted input
- Use `--` to separate options from arguments: `rm -- "$file"`
- Validate required variables: `[ -n "$VAR" ] || { echo "VAR required" >&2; exit 1; }`
- Check exit codes explicitly: `cmd || { echo "failed" >&2; exit 1; }`
- Use `trap` for cleanup: `trap 'rm -f "$tmpfile"' EXIT INT TERM`
- Set restrictive umask for sensitive files: `umask 077`
- Log security-relevant operations to syslog or file
- Validate file paths don't contain unexpected characters
- Use full paths for commands in security-critical scripts: `/bin/rm` not `rm`

#### Imported: Performance Optimization

- Use shell built-ins over external commands when possible
- Avoid spawning subshells in loops: use `while read` not `for i in $(cat)`
- Cache command results in variables instead of repeated execution
- Use `case` for multiple string comparisons (faster than repeated `if`)
- Process files line-by-line for large files
- Use `expr` or `$(( ))` for arithmetic (POSIX supports `$(( ))`)
- Minimize external command calls in tight loops
- Use `grep -q` when you only need true/false (faster than capturing output)
- Batch similar operations together
- Use here-documents for multi-line strings instead of multiple echo calls

#### Imported: Documentation Standards

- Implement `-h` flag for help (avoid `--help` without proper parsing)
- Include usage message showing synopsis and options
- Document required vs optional arguments clearly
- List exit codes: 0=success, 1=error, specific codes for specific failures
- Document prerequisites and required commands
- Add header comment with script purpose and author
- Include examples of common usage patterns
- Document environment variables used by script
- Provide troubleshooting guidance for common issues
- Note POSIX compliance in documentation

#### Imported: Working Without Arrays

Since POSIX sh lacks arrays, use these patterns:

- **Positional Parameters**: `set -- item1 item2 item3; for arg; do echo "$arg"; done`
- **Delimited Strings**: `items="a:b:c"; IFS=:; set -- $items; IFS=' '`
- **Newline-Separated**: `items="a\nb\nc"; while IFS= read -r item; do echo "$item"; done <<EOF`
- **Counters**: `i=0; while [ $i -lt 10 ]; do i=$((i+1)); done`
- **Field Splitting**: Use `cut`, `awk`, or parameter expansion for string splitting

#### Imported: Portable Conditionals

Use `[ ]` test command with POSIX operators:

- **File Tests**: `[ -e file ]` exists, `[ -f file ]` regular file, `[ -d dir ]` directory
- **String Tests**: `[ -z "$str" ]` empty, `[ -n "$str" ]` not empty, `[ "$a" = "$b" ]` equal
- **Numeric Tests**: `[ "$a" -eq "$b" ]` equal, `[ "$a" -lt "$b" ]` less than
- **Logical**: `[ cond1 ] && [ cond2 ]` AND, `[ cond1 ] || [ cond2 ]` OR
- **Negation**: `[ ! -f file ]` not a file
- **Pattern Matching**: Use `case` not `[[ =~ ]]`

#### Imported: CI/CD Integration

- **Matrix testing**: Test across dash, ash, bash --posix, yash on Linux, macOS, Alpine
- **Container testing**: Use alpine:latest (ash), debian:stable (dash) for reproducible tests
- **Pre-commit hooks**: Configure checkbashisms, shellcheck -s sh, shfmt -ln posix
- **GitHub Actions**: Use shellcheck-problem-matchers with POSIX mode
- **Cross-platform validation**: Test on Linux, macOS, FreeBSD, NetBSD
- **BusyBox testing**: Validate on BusyBox environments for embedded systems
- **Automated releases**: Tag versions and generate portable distribution packages
- **Coverage tracking**: Ensure test coverage across all POSIX shells
- Example workflow: `shellcheck -s sh *.sh && shfmt -ln posix -d *.sh && checkbashisms *.sh`

#### Imported: Embedded Systems & Limited Environments

- **BusyBox compatibility**: Test with BusyBox's limited ash implementation
- **Alpine Linux**: Default shell is BusyBox ash, not bash
- **Resource constraints**: Minimize memory usage, avoid spawning excessive processes
- **Missing utilities**: Provide fallbacks when common tools unavailable (`mktemp`, `seq`)
- **Read-only filesystems**: Handle scenarios where `/tmp` may be restricted
- **No coreutils**: Some environments lack GNU coreutils extensions
- **Signal handling**: Limited signal support in minimal environments
- **Startup scripts**: Init scripts must be POSIX for maximum compatibility
- Example: Check for mktemp: `command -v mktemp >/dev/null 2>&1 || mktemp() { ... }`

#### Imported: Migration from Bash to POSIX sh

- **Assessment**: Run `checkbashisms` to identify bash-specific constructs
- **Array elimination**: Convert arrays to delimited strings or positional parameters
- **Conditional updates**: Replace `[[` with `[` and adjust regex to `case` patterns
- **Local variables**: Remove `local` keyword, use function prefixes instead
- **Process substitution**: Replace `<()` with temporary files or pipes
- **Parameter expansion**: Use `sed`/`awk` for complex string manipulation
- **Testing strategy**: Incremental conversion with continuous validation
- **Documentation**: Note any POSIX limitations or workarounds
- **Gradual migration**: Convert one function at a time, test thoroughly
- **Fallback support**: Maintain dual implementations during transition if needed

#### Imported: Quality Checklist

- Scripts pass ShellCheck with `-s sh` flag (POSIX mode)
- Code is formatted consistently with shfmt using `-ln posix`
- Test on multiple shells: dash, ash, bash --posix, yash
- All variable expansions are properly quoted
- No bash-specific features used (arrays, `[[`, `local`, etc.)
- Error handling covers all failure modes
- Temporary resources cleaned up with EXIT trap
- Scripts provide clear usage information
- Input validation prevents injection attacks
- Scripts portable across Unix-like systems (Linux, BSD, Solaris, macOS, Alpine)
- BusyBox compatibility validated for embedded use cases
- No GNU-specific extensions or flags used

#### Imported: Output

- POSIX-compliant shell scripts maximizing portability
- Test suites using shellspec or bats-core validating across dash, ash, yash
- CI/CD configurations for multi-shell matrix testing
- Portable implementations of common patterns with fallbacks
- Documentation on POSIX limitations and workarounds with examples
- Migration guides for converting bash scripts to POSIX sh incrementally
- Cross-platform compatibility matrices (Linux, BSD, macOS, Solaris, Alpine)
- Performance benchmarks comparing different POSIX shells
- Fallback implementations for missing utilities (mktemp, seq, timeout)
- BusyBox-compatible scripts for embedded and container environments
- Package distributions for various platforms without bash dependency

#### Imported: Essential Tools

### Static Analysis & Formatting
- **ShellCheck**: Static analyzer with `-s sh` for POSIX mode validation
- **shfmt**: Shell formatter with `-ln posix` option for POSIX syntax
- **checkbashisms**: Detects bash-specific constructs in scripts (from devscripts)
- **Semgrep**: SAST with POSIX-specific security rules
- **CodeQL**: Security scanning for shell scripts

### POSIX Shell Implementations for Testing
- **dash**: Debian Almquist Shell - lightweight, strict POSIX compliance (primary test target)
- **ash**: Almquist Shell - BusyBox default, embedded systems
- **yash**: Yet Another Shell - strict POSIX conformance validation
- **posh**: Policy-compliant Ordinary Shell - Debian policy compliance
- **osh**: Oil Shell - modern POSIX-compatible shell with better error messages
- **bash --posix**: GNU Bash in POSIX mode for compatibility testing

### Testing Frameworks
- **bats-core**: Bash testing framework (works with POSIX sh)
- **shellspec**: BDD-style testing that supports POSIX sh
- **shunit2**: xUnit-style framework with POSIX sh support
- **sharness**: Test framework used by Git (POSIX-compatible)

#### Imported: Common Pitfalls to Avoid

- Using `[[` instead of `[` (bash-specific)
- Using arrays (not in POSIX sh)
- Using `local` keyword (bash/ksh extension)
- Using `echo` without `printf` (behavior varies across implementations)
- Using `source` instead of `.` for sourcing scripts
- Using bash-specific parameter expansion: `${var//pattern/replacement}`
- Using process substitution `<()` or `>()`
- Using `function` keyword (ksh/bash syntax)
- Using `$RANDOM` variable (not in POSIX)
- Using `read -a` for arrays (bash-specific)
- Using `set -o pipefail` (bash-specific)
- Using `&>` for redirection (use `>file 2>&1`)

#### Imported: Advanced Techniques

- **Error Trapping**: `trap 'echo "Error at line $LINENO" >&2; exit 1' EXIT; trap - EXIT` on success
- **Safe Temp Files**: `tmpfile=$(mktemp) || exit 1; trap 'rm -f "$tmpfile"' EXIT INT TERM`
- **Simulating Arrays**: `set -- item1 item2 item3; for arg; do process "$arg"; done`
- **Field Parsing**: `IFS=:; while read -r user pass uid gid; do ...; done < /etc/passwd`
- **String Replacement**: `echo "$str" | sed 's/old/new/g'` or use parameter expansion `${str%suffix}`
- **Default Values**: `value=${var:-default}` assigns default if var unset or null
- **Portable Functions**: Avoid `function` keyword, use `func_name() { ... }`
- **Subshell Isolation**: `(cd dir && cmd)` changes directory without affecting parent
- **Here-documents**: `cat <<'EOF'` with quotes prevents variable expansion
- **Command Existence**: `command -v cmd >/dev/null 2>&1 && echo "found" || echo "missing"`

#### Imported: POSIX-Specific Best Practices

- Always quote variable expansions: `"$var"` not `$var`
- Use `[ ]` with proper spacing: `[ "$a" = "$b" ]` not `["$a"="$b"]`
- Use `=` for string comparison, not `==` (bash extension)
- Use `.` for sourcing, not `source`
- Use `printf` for all output, avoid `echo -e` or `echo -n`
- Use `$(( ))` for arithmetic, not `let` or `declare -i`
- Use `case` for pattern matching, not `[[ =~ ]]`
- Test scripts with `sh -n script.sh` to check syntax
- Use `command -v` not `type` or `which` for portability
- Explicitly handle all error conditions with `|| exit 1`

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
