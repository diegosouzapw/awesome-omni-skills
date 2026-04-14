---
name: os-scripting-v2
description: "OS/Shell Scripting Troubleshooting Workflow Bundle workflow skill. Use this skill when the user needs Operating system and shell scripting troubleshooting workflow for Linux, macOS, and Windows. Covers bash scripting, system administration, debugging, and automation and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["os-scripting-v2", "os-scripting", "operating", "system", "and", "shell", "scripting", "troubleshooting"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# OS/Shell Scripting Troubleshooting Workflow Bundle

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/os-scripting` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# OS/Shell Scripting Troubleshooting Workflow Bundle

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Debugging shell script errors
- Creating production-ready bash scripts
- Troubleshooting system issues
- Automating system administration tasks
- Managing processes and services
- Configuring system resources

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

1. bash-linux - Linux bash patterns
2. bash-pro - Professional bash scripting
3. bash-defensive-patterns - Defensive scripting
4. Identify operating system and version
5. Check available tools and commands
6. Verify permissions and access
7. Assess system resources

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Environment Assessment

#### Skills to Invoke
- `bash-linux` - Linux bash patterns
- `bash-pro` - Professional bash scripting
- `bash-defensive-patterns` - Defensive scripting

#### Actions
1. Identify operating system and version
2. Check available tools and commands
3. Verify permissions and access
4. Assess system resources
5. Review logs and error messages

#### Diagnostic Commands
```bash
# System information
uname -a
cat /etc/os-release
hostnamectl

# Resource usage
top
htop
df -h
free -m

# Process information
ps aux
pgrep -f pattern
lsof -i :port

# Network status
netstat -tulpn
ss -tulpn
ip addr show
```

#### Copy-Paste Prompts
```
Use @bash-linux to diagnose system performance issues
```

### Phase 2: Script Analysis

#### Skills to Invoke
- `bash-defensive-patterns` - Defensive scripting
- `shellcheck-configuration` - ShellCheck linting
- `bats-testing-patterns` - Bats testing

#### Actions
1. Run ShellCheck for linting
2. Analyze script structure
3. Identify potential issues
4. Check error handling
5. Verify variable usage

#### ShellCheck Usage
```bash
# Install ShellCheck
sudo apt install shellcheck  # Debian/Ubuntu
brew install shellcheck      # macOS

# Run ShellCheck
shellcheck script.sh
shellcheck -f gcc script.sh

# Fix common issues
# - Use quotes around variables
# - Check exit codes
# - Handle errors properly
```

#### Copy-Paste Prompts
```
Use @shellcheck-configuration to lint and fix shell scripts
```

### Phase 3: Debugging

#### Skills to Invoke
- `systematic-debugging` - Systematic debugging
- `debugger` - Debugging specialist
- `error-detective` - Error pattern detection

#### Actions
1. Enable debug mode
2. Add logging statements
3. Trace execution flow
4. Isolate failing sections
5. Test components individually

#### Debug Techniques
```bash
# Enable debug mode
set -x  # Print commands
set -e  # Exit on error
set -u  # Exit on undefined variable
set -o pipefail  # Pipeline failure detection

# Add logging
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" >> /var/log/script.log
}

# Trap errors
trap 'echo "Error on line $LINENO"' ERR

# Test sections
bash -n script.sh  # Syntax check
bash -x script.sh  # Trace execution
```

#### Copy-Paste Prompts
```
Use @systematic-debugging to trace and fix shell script errors
```

### Phase 4: Script Development

#### Skills to Invoke
- `bash-pro` - Professional scripting
- `bash-defensive-patterns` - Defensive patterns
- `linux-shell-scripting` - Shell scripting

#### Actions
1. Design script structure
2. Implement functions
3. Add error handling
4. Include input validation
5. Add help documentation

#### Script Template
```bash
#!/usr/bin/env bash
set -euo pipefail

# Constants
readonly SCRIPT_NAME=$(basename "$0")
readonly SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)

# Logging
log() {
    local level="$1"
    shift
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [$level] $*" >&2
}

info() { log "INFO" "$@"; }
warn() { log "WARN" "$@"; }
error() { log "ERROR" "$@"; exit 1; }

# Usage
usage() {
    cat <<EOF
Usage: $SCRIPT_NAME [OPTIONS]

Options:
    -h, --help      Show this help message
    -v, --verbose   Enable verbose output
    -d, --debug     Enable debug mode

Examples:
    $SCRIPT_NAME --verbose
    $SCRIPT_NAME -d
EOF
}

# Main function
main() {
    local verbose=false
    local debug=false

    while [[ $# -gt 0 ]]; do
        case "$1" in
            -h|--help)
                usage
                exit 0
                ;;
            -v|--verbose)
                verbose=true
                shift
                ;;
            -d|--debug)
                debug=true
                set -x
                shift
                ;;
            *)
                error "Unknown option: $1"
                ;;
        esac
    done

    info "Script started"
    # Your code here
    info "Script completed"
}

main "$@"
```

#### Copy-Paste Prompts
```
Use @bash-pro to create a production-ready backup script
```

```
Use @linux-shell-scripting to automate system maintenance tasks
```

### Phase 5: Testing

#### Skills to Invoke
- `bats-testing-patterns` - Bats testing framework
- `test-automator` - Test automation

#### Actions
1. Write Bats tests
2. Test edge cases
3. Test error conditions
4. Verify expected outputs
5. Run test suite

#### Bats Test Example
```bash
#!/usr/bin/env bats

@test "script returns success" {
    run ./script.sh
    [ "$status" -eq 0 ]
}

@test "script handles missing arguments" {
    run ./script.sh
    [ "$status" -ne 0 ]
    [ "$output" == *"Usage:"* ]
}

@test "script creates expected output" {
    run ./script.sh --output test.txt
    [ -f "test.txt" ]
}
```

#### Copy-Paste Prompts
```
Use @bats-testing-patterns to write tests for shell scripts
```

### Phase 6: System Troubleshooting

#### Skills to Invoke
- `devops-troubleshooter` - DevOps troubleshooting
- `incident-responder` - Incident response
- `server-management` - Server management

#### Actions
1. Identify symptoms
2. Check system logs
3. Analyze resource usage
4. Test connectivity
5. Verify configurations
6. Implement fixes

#### Troubleshooting Commands
```bash
# Check logs
journalctl -xe
tail -f /var/log/syslog
dmesg | tail

# Network troubleshooting
ping host
traceroute host
curl -v http://host
dig domain
nslookup domain

# Process troubleshooting
strace -p PID
lsof -p PID
iotop

# Disk troubleshooting
du -sh /*
find / -type f -size +100M
lsof | grep deleted
```

#### Copy-Paste Prompts
```
Use @devops-troubleshooter to diagnose server connectivity issues
```

```
Use @incident-responder to investigate system outage
```

### Phase 7: Automation

#### Skills to Invoke
- `workflow-automation` - Workflow automation
- `cicd-automation-workflow-automate` - CI/CD automation
- `linux-shell-scripting` - Shell scripting

#### Actions
1. Identify automation opportunities
2. Design automation workflows
3. Implement scripts
4. Schedule with cron/systemd
5. Monitor automation health

#### Cron Examples
```bash
# Edit crontab
crontab -e

# Backup every day at 2 AM
0 2 * * * /path/to/backup.sh

# Clean logs weekly
0 3 * * 0 /path/to/cleanup.sh

# Monitor disk space hourly
0 * * * * /path/to/monitor.sh
```

#### Systemd Timer Example
```ini
# /etc/systemd/system/backup.timer
[Unit]
Description=Daily backup timer

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```

#### Copy-Paste Prompts
```
Use @workflow-automation to create automated system maintenance workflow
```

#### Imported: Related Workflow Bundles

- `development` - Software development
- `cloud-devops` - Cloud and DevOps
- `security-audit` - Security testing
- `database` - Database operations

#### Imported: Overview

Comprehensive workflow for operating system troubleshooting, shell scripting, and system administration across Linux, macOS, and Windows. This bundle orchestrates skills for debugging system issues, creating robust scripts, and automating administrative tasks.

#### Imported: Quality Gates

Before completing workflow, verify:
- [ ] All scripts pass ShellCheck
- [ ] Tests pass with Bats
- [ ] Error handling implemented
- [ ] Logging configured
- [ ] Documentation complete
- [ ] Automation scheduled

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @os-scripting-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/os-scripting-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/os-scripting-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @os-scripting-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/os-scripting`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Common Troubleshooting Scenarios

### High CPU Usage
```bash
top -bn1 | head -20
ps aux --sort=-%cpu | head -10
pidstat 1 5
```

### Memory Issues
```bash
free -h
vmstat 1 10
cat /proc/meminfo
```

### Disk Space
```bash
df -h
du -sh /* 2>/dev/null | sort -h
find / -type f -size +500M 2>/dev/null
```

### Network Issues
```bash
ip addr show
ip route show
ss -tulpn
curl -v http://target
```

### Service Failures
```bash
systemctl status service-name
journalctl -u service-name -f
systemctl restart service-name
```

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

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
