---
name: "debug-buttercup-v2"
description: "Debug Buttercup workflow skill. Use this skill when the user needs All pods run in namespace crs. Use when pods in the crs namespace are in CrashLoopBackOff, OOMKilled, or restarting, multiple services restart simultaneously (cascade failure), or redis is unresponsive or showing AOF warnings and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "frontend"
tags:
  - "debug-buttercup-v2"
  - "debug-buttercup"
  - "all"
  - "pods"
  - "run"
  - "namespace"
  - "crs"
  - "use"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-16"
date_updated: "2026-05-04"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "debug-buttercup-v2"
family_name: "Debug Buttercup"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/debug-buttercup-v2"
upstream_skill: "skills/debug-buttercup-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "debug-buttercup-v2"
---

# Debug Buttercup

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/debug-buttercup` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Debug Buttercup

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Namespace and Services, Log Analysis, Redis Debugging, Health Checks, Telemetry (OpenTelemetry / Signoz), Volume and Storage.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Pods in the crs namespace are in CrashLoopBackOff, OOMKilled, or restarting
- Multiple services restart simultaneously (cascade failure)
- Redis is unresponsive or showing AOF warnings
- Queues are growing but tasks are not progressing
- Nodes show DiskPressure, MemoryPressure, or PID pressure
- Build-bot cannot reach the Docker daemon (DinD failures)

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

1. --tail shows the end of the log buffer, which may contain old messages. Use --since=300s to confirm issues are actively happening now.
2. --timestamps on log output helps correlate events across services.
3. Check Last State timestamps in describe pod to see when the most recent crash actually occurred.
4. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
5. Read the overview and provenance files before loading any copied upstream support files.
6. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
7. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.

### Imported Workflow Notes

#### Imported: Triage Workflow

Always start with triage. Run these three commands first:

```bash
# 1. Pod status - look for restarts, CrashLoopBackOff, OOMKilled
kubectl get pods -n crs -o wide

# 2. Events - the timeline of what went wrong
kubectl get events -n crs --sort-by='.lastTimestamp'

# 3. Warnings only - filter the noise
kubectl get events -n crs --field-selector type=Warning --sort-by='.lastTimestamp'
```

Then narrow down:

```bash
# Why did a specific pod restart? Check Last State Reason (OOMKilled, Error, Completed)
kubectl describe pod -n crs <pod-name> | grep -A8 'Last State:'

# Check actual resource limits vs intended
kubectl get pod -n crs <pod-name> -o jsonpath='{.spec.containers[0].resources}'

# Crashed container's logs (--previous = the container that died)
kubectl logs -n crs <pod-name> --previous --tail=200

# Current logs
kubectl logs -n crs <pod-name> --tail=200
```

### Historical vs Ongoing Issues

High restart counts don't necessarily mean an issue is ongoing -- restarts accumulate over a pod's lifetime. Always distinguish:
- `--tail` shows the end of the log buffer, which may contain old messages. Use `--since=300s` to confirm issues are actively happening now.
- `--timestamps` on log output helps correlate events across services.
- Check `Last State` timestamps in `describe pod` to see when the most recent crash actually occurred.

### Cascade Detection

When many pods restart around the same time, check for a shared-dependency failure before investigating individual pods. The most common cascade: Redis goes down -> every service gets `ConnectionError`/`ConnectionRefusedError` -> mass restarts. Look for the same error across multiple `--previous` logs -- if they all say `redis.exceptions.ConnectionError`, debug Redis, not the individual services.

#### Imported: Namespace and Services

All pods run in namespace `crs`. Key services:

| Layer | Services |
|-------|----------|
| Infra | redis, dind, litellm, registry-cache |
| Orchestration | scheduler, task-server, task-downloader, scratch-cleaner |
| Fuzzing | build-bot, fuzzer-bot, coverage-bot, tracer-bot, merger-bot |
| Analysis | patcher, seed-gen, program-model, pov-reproducer |
| Interface | competition-api, ui |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @debug-buttercup-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @debug-buttercup-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @debug-buttercup-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @debug-buttercup-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/debug-buttercup`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Resource Pressure

```bash
# Per-pod CPU/memory
kubectl top pods -n crs

# Node-level
kubectl top nodes

# Node conditions (disk pressure, memory pressure, PID pressure)
kubectl describe node <node> | grep -A5 Conditions

# Disk usage inside a pod
kubectl exec -n crs <pod> -- df -h

# What's eating disk
kubectl exec -n crs <pod> -- sh -c 'du -sh /corpus/* 2>/dev/null'
kubectl exec -n crs <pod> -- sh -c 'du -sh /scratch/* 2>/dev/null'
```

#### Imported: Log Analysis

```bash
# All replicas of a service at once
kubectl logs -n crs -l app=fuzzer-bot --tail=100 --prefix

# Stream live
kubectl logs -n crs -l app.kubernetes.io/name=redis -f

# Collect all logs to disk (existing script)
bash deployment/collect-logs.sh
```

#### Imported: Redis Debugging

Redis is the backbone. When it goes down, everything cascades.

```bash
# Redis pod status
kubectl get pods -n crs -l app.kubernetes.io/name=redis

# Redis logs (AOF warnings, OOM, connection issues)
kubectl logs -n crs -l app.kubernetes.io/name=redis --tail=200

# Connect to Redis CLI
kubectl exec -n crs <redis-pod> -- redis-cli

# Inside redis-cli: key diagnostics
INFO memory          # used_memory_human, maxmemory
INFO persistence     # aof_enabled, aof_last_bgrewrite_status, aof_delayed_fsync
INFO clients         # connected_clients, blocked_clients
INFO stats           # total_connections_received, rejected_connections
CLIENT LIST          # see who's connected
DBSIZE               # total keys

# AOF configuration
CONFIG GET appendonly     # is AOF enabled?
CONFIG GET appendfsync   # fsync policy: everysec, always, or no

# What is /data mounted on? (disk vs tmpfs matters for AOF performance)
```

```bash
kubectl exec -n crs <redis-pod> -- mount | grep /data
kubectl exec -n crs <redis-pod> -- du -sh /data/
```

### Queue Inspection

Buttercup uses Redis streams with consumer groups. Queue names:

| Queue | Stream Key |
|-------|-----------|
| Build | fuzzer_build_queue |
| Build Output | fuzzer_build_output_queue |
| Crash | fuzzer_crash_queue |
| Confirmed Vulns | confirmed_vulnerabilities_queue |
| Download Tasks | orchestrator_download_tasks_queue |
| Ready Tasks | tasks_ready_queue |
| Patches | patches_queue |
| Index | index_queue |
| Index Output | index_output_queue |
| Traced Vulns | traced_vulnerabilities_queue |
| POV Requests | pov_reproducer_requests_queue |
| POV Responses | pov_reproducer_responses_queue |
| Delete Task | orchestrator_delete_task_queue |

```bash
# Check stream length (pending messages)
kubectl exec -n crs <redis-pod> -- redis-cli XLEN fuzzer_build_queue

# Check consumer group lag
kubectl exec -n crs <redis-pod> -- redis-cli XINFO GROUPS fuzzer_build_queue

# Check pending messages per consumer
kubectl exec -n crs <redis-pod> -- redis-cli XPENDING fuzzer_build_queue build_bot_consumers - + 10

# Task registry size
kubectl exec -n crs <redis-pod> -- redis-cli HLEN tasks_registry

# Task state counts
kubectl exec -n crs <redis-pod> -- redis-cli SCARD cancelled_tasks
kubectl exec -n crs <redis-pod> -- redis-cli SCARD succeeded_tasks
kubectl exec -n crs <redis-pod> -- redis-cli SCARD errored_tasks
```

Consumer groups: `build_bot_consumers`, `orchestrator_group`, `patcher_group`, `index_group`, `tracer_bot_group`.

#### Imported: Health Checks

Pods write timestamps to `/tmp/health_check_alive`. The liveness probe checks file freshness.

```bash
# Check health file freshness
kubectl exec -n crs <pod> -- stat /tmp/health_check_alive
kubectl exec -n crs <pod> -- cat /tmp/health_check_alive
```

If a pod is restart-looping, the health check file is likely going stale because the main process is blocked (e.g. waiting on Redis, stuck on I/O).

#### Imported: Telemetry (OpenTelemetry / Signoz)

All services export traces and metrics via OpenTelemetry. If Signoz is deployed (`global.signoz.deployed: true`), use its UI for distributed tracing across services.

```bash
# Check if OTEL is configured
kubectl exec -n crs <pod> -- env | grep OTEL

# Verify Signoz pods are running (if deployed)
kubectl get pods -n platform -l app.kubernetes.io/name=signoz
```

Traces are especially useful for diagnosing slow task processing, identifying which service in a pipeline is the bottleneck, and correlating events across the scheduler -> build-bot -> fuzzer-bot chain.

#### Imported: Volume and Storage

```bash
# PVC status
kubectl get pvc -n crs

# Check if corpus tmpfs is mounted, its size, and backing type
kubectl exec -n crs <pod> -- mount | grep corpus_tmpfs
kubectl exec -n crs <pod> -- df -h /corpus_tmpfs 2>/dev/null

# Check if CORPUS_TMPFS_PATH is set
kubectl exec -n crs <pod> -- env | grep CORPUS

# Full disk layout - what's on real disk vs tmpfs
kubectl exec -n crs <pod> -- df -h
```

`CORPUS_TMPFS_PATH` is set when `global.volumes.corpusTmpfs.enabled: true`. This affects fuzzer-bot, coverage-bot, seed-gen, and merger-bot.

### Deployment Config Verification

When behavior doesn't match expectations, verify Helm values actually took effect:

```bash
# Check a pod's actual resource limits
kubectl get pod -n crs <pod-name> -o jsonpath='{.spec.containers[0].resources}'

# Check a pod's actual volume definitions
kubectl get pod -n crs <pod-name> -o jsonpath='{.spec.volumes}'
```

Helm values template typos (e.g. wrong key names) silently fall back to chart defaults. If deployed resources don't match the values template, check for key name mismatches.

#### Imported: Service-Specific Debugging

For detailed per-service symptoms, root causes, and fixes, see references/failure-patterns.md.

Quick reference:

- **DinD**: `kubectl logs -n crs -l app=dind --tail=100` -- look for docker daemon crashes, storage driver errors
- **Build-bot**: check build queue depth, DinD connectivity, OOM during compilation
- **Fuzzer-bot**: corpus disk usage, CPU throttling, crash queue backlog
- **Patcher**: LiteLLM connectivity, LLM timeout, patch queue depth
- **Scheduler**: the central brain -- `kubectl logs -n crs -l app=scheduler --tail=-1 --prefix | grep "WAIT_PATCH_PASS\|ERROR\|SUBMIT"`

#### Imported: Diagnostic Script

Run the automated triage snapshot:

```bash
bash {baseDir}/scripts/diagnose.sh
```

Pass `--full` to also dump recent logs from all pods:

```bash
bash {baseDir}/scripts/diagnose.sh --full
```

This collects pod status, events, resource usage, Redis health, and queue depths in one pass.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
