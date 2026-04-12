---
name: linux-troubleshooting
description: "Linux Troubleshooting Workflow workflow skill. Use this skill when the user needs Linux system troubleshooting workflow for diagnosing and resolving system issues, performance problems, and service failures and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: design
tags: ["linux-troubleshooting", "linux", "system", "troubleshooting", "for", "diagnosing", "and", "resolving"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Linux Troubleshooting Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/linux-troubleshooting` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Linux Troubleshooting Workflow

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Quality Gates.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Diagnosing system performance issues
- Troubleshooting service failures
- Investigating network problems
- Resolving disk space issues
- Debugging application errors
- Use when the request clearly matches the imported source intent: Linux system troubleshooting workflow for diagnosing and resolving system issues, performance problems, and service failures.

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

1. bash-linux - Linux commands
2. devops-troubleshooter - Troubleshooting
3. Check system uptime
4. Review recent changes
5. Identify symptoms
6. Gather error messages
7. Document findings

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Initial Assessment

#### Skills to Invoke
- `bash-linux` - Linux commands
- `devops-troubleshooter` - Troubleshooting

#### Actions
1. Check system uptime
2. Review recent changes
3. Identify symptoms
4. Gather error messages
5. Document findings

#### Commands
```bash
uptime
hostnamectl
cat /etc/os-release
dmesg | tail -50
```

#### Copy-Paste Prompts
```
Use @bash-linux to gather system information
```

### Phase 2: Resource Analysis

#### Skills to Invoke
- `bash-linux` - Resource commands
- `performance-engineer` - Performance analysis

#### Actions
1. Check CPU usage
2. Analyze memory
3. Review disk space
4. Monitor I/O
5. Check network

#### Commands
```bash
top -bn1 | head -20
free -h
df -h
iostat -x 1 5
```

#### Copy-Paste Prompts
```
Use @performance-engineer to analyze system resources
```

### Phase 3: Process Investigation

#### Skills to Invoke
- `bash-linux` - Process commands
- `server-management` - Process management

#### Actions
1. List running processes
2. Identify resource hogs
3. Check process status
4. Review process trees
5. Analyze strace output

#### Commands
```bash
ps aux --sort=-%cpu | head -10
pstree -p
lsof -p PID
strace -p PID
```

#### Copy-Paste Prompts
```
Use @server-management to investigate processes
```

### Phase 4: Log Analysis

#### Skills to Invoke
- `bash-linux` - Log commands
- `error-detective` - Error detection

#### Actions
1. Check system logs
2. Review application logs
3. Search for errors
4. Analyze log patterns
5. Correlate events

#### Commands
```bash
journalctl -xe
tail -f /var/log/syslog
grep -i error /var/log/*
```

#### Copy-Paste Prompts
```
Use @error-detective to analyze log files
```

### Phase 5: Network Diagnostics

#### Skills to Invoke
- `bash-linux` - Network commands
- `network-engineer` - Network troubleshooting

#### Actions
1. Check network interfaces
2. Test connectivity
3. Analyze connections
4. Review firewall rules
5. Check DNS resolution

#### Commands
```bash
ip addr show
ss -tulpn
curl -v http://target
dig domain
```

#### Copy-Paste Prompts
```
Use @network-engineer to diagnose network issues
```

### Phase 6: Service Troubleshooting

#### Skills to Invoke
- `server-management` - Service management
- `systematic-debugging` - Debugging

#### Actions
1. Check service status
2. Review service logs
3. Test service restart
4. Verify dependencies
5. Check configuration

#### Commands
```bash
systemctl status service
journalctl -u service -f
systemctl restart service
```

#### Copy-Paste Prompts
```
Use @systematic-debugging to troubleshoot service issues
```

### Phase 7: Resolution

#### Skills to Invoke
- `incident-responder` - Incident response
- `bash-pro` - Fix implementation

#### Actions
1. Implement fix
2. Verify resolution
3. Monitor stability
4. Document solution
5. Create prevention plan

#### Copy-Paste Prompts
```
Use @incident-responder to implement resolution
```

#### Imported: Related Workflow Bundles

- `os-scripting` - OS scripting
- `bash-scripting` - Bash scripting
- `cloud-devops` - DevOps

#### Imported: Overview

Specialized workflow for diagnosing and resolving Linux system issues including performance problems, service failures, network issues, and resource constraints.

#### Imported: Quality Gates

- [ ] Root cause identified
- [ ] Fix verified
- [ ] Monitoring in place
- [ ] Documentation complete

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @linux-troubleshooting to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/linux-troubleshooting/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/linux-troubleshooting/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @linux-troubleshooting using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/linux-troubleshooting`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting Checklist

- [ ] System information gathered
- [ ] Resources analyzed
- [ ] Logs reviewed
- [ ] Network tested
- [ ] Services verified
- [ ] Issue resolved
- [ ] Documentation created

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
