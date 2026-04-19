---
name: server-management
description: "Server Management workflow skill. Use this skill when the user needs Server management principles and decision-making. Process management, monitoring strategy, and scaling decisions. Teaches thinking, not commands and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["server-management", "server", "management", "principles", "and", "decision-making", "process", "monitoring"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Server Management

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/server-management` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Server Management > Server management principles for production operations. > Learn to THINK, not memorize commands. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 4. Scaling Decisions, 8. Anti-Patterns, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Server management principles and decision-making. Process management, monitoring strategy, and scaling decisions. Teaches thinking, not commands.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Scenario - Tool
2. Node.js app - PM2 (clustering, reload)
3. Any app - systemd (Linux native)
4. Containers - Docker/Podman
5. Orchestration - Kubernetes, Docker Swarm
6. Goal - What It Means
7. Restart on crash - Auto-recovery

### Imported Workflow Notes

#### Imported: 1. Process Management Principles

### Tool Selection

| Scenario | Tool |
|----------|------|
| **Node.js app** | PM2 (clustering, reload) |
| **Any app** | systemd (Linux native) |
| **Containers** | Docker/Podman |
| **Orchestration** | Kubernetes, Docker Swarm |

### Process Management Goals

| Goal | What It Means |
|------|---------------|
| **Restart on crash** | Auto-recovery |
| **Zero-downtime reload** | No service interruption |
| **Clustering** | Use all CPU cores |
| **Persistence** | Survive server reboot |

---

#### Imported: 4. Scaling Decisions

### When to Scale

| Symptom | Solution |
|---------|----------|
| High CPU | Add instances (horizontal) |
| High memory | Increase RAM or fix leak |
| Slow response | Profile first, then scale |
| Traffic spikes | Auto-scaling |

### Scaling Strategy

| Type | When to Use |
|------|-------------|
| **Vertical** | Quick fix, single instance |
| **Horizontal** | Sustainable, distributed |
| **Auto** | Variable traffic |

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @server-management to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @server-management against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @server-management for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @server-management using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Category - Key Metrics
- Availability - Uptime, health checks
- Performance - Response time, throughput
- Errors - Error rate, types
- Resources - CPU, memory, disk
- Level - Response
- Critical - Immediate action

### Imported Operating Notes

#### Imported: 2. Monitoring Principles

### What to Monitor

| Category | Key Metrics |
|----------|-------------|
| **Availability** | Uptime, health checks |
| **Performance** | Response time, throughput |
| **Errors** | Error rate, types |
| **Resources** | CPU, memory, disk |

### Alert Severity Strategy

| Level | Response |
|-------|----------|
| **Critical** | Immediate action |
| **Warning** | Investigate soon |
| **Info** | Review daily |

### Monitoring Tool Selection

| Need | Options |
|------|---------|
| Simple/Free | PM2 metrics, htop |
| Full observability | Grafana, Datadog |
| Error tracking | Sentry |
| Uptime | UptimeRobot, Pingdom |

---

#### Imported: 3. Log Management Principles

### Log Strategy

| Log Type | Purpose |
|----------|---------|
| **Application logs** | Debug, audit |
| **Access logs** | Traffic analysis |
| **Error logs** | Issue detection |

### Log Principles

1. **Rotate logs** to prevent disk fill
2. **Structured logging** (JSON) for parsing
3. **Appropriate levels** (error/warn/info/debug)
4. **No sensitive data** in logs

---

#### Imported: 5. Health Check Principles

### What Constitutes Healthy

| Check | Meaning |
|-------|---------|
| **HTTP 200** | Service responding |
| **Database connected** | Data accessible |
| **Dependencies OK** | External services reachable |
| **Resources OK** | CPU/memory not exhausted |

### Health Check Implementation

- Simple: Just return 200
- Deep: Check all dependencies
- Choose based on load balancer needs

---

#### Imported: 6. Security Principles

| Area | Principle |
|------|-----------|
| **Access** | SSH keys only, no passwords |
| **Firewall** | Only needed ports open |
| **Updates** | Regular security patches |
| **Secrets** | Environment vars, not files |
| **Audit** | Log access and changes |

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/server-management`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: 7. Troubleshooting Priority

When something's wrong:

1. **Check if running** (process status)
2. **Check logs** (error messages)
3. **Check resources** (disk, memory, CPU)
4. **Check network** (ports, DNS)
5. **Check dependencies** (database, APIs)

---

## Related Skills

- `@service-mesh-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@service-mesh-observability` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@sexual-health-analyzer` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@shadcn` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 8. Anti-Patterns

| ❌ Don't | ✅ Do |
|----------|-------|
| Run as root | Use non-root user |
| Ignore logs | Set up log rotation |
| Skip monitoring | Monitor from day one |
| Manual restarts | Auto-restart config |
| No backups | Regular backup schedule |

---

> **Remember:** A well-managed server is boring. That's the goal.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
