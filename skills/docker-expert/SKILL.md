---
name: docker-expert
description: "Docker workflow skill. Use this skill when a user needs Dockerfiles, image build strategy, runtime hardening, or container debugging guidance."
version: "0.0.1"
category: devops
tags: [docker, containers, images, dockerfile, buildkit, compose]
complexity: advanced
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-27"
date_updated: "2026-03-27"
---

# Docker Expert

## Overview

Use this skill when the user needs production-minded Docker guidance rather than a quick Dockerfile guess. It is for image structure, build performance, runtime safety, dependency layering, container debugging, and handoff-ready examples.

This skill should prefer boring reliability over clever image tricks. Good output makes images smaller, faster to rebuild, easier to inspect, and safer to ship.

## When to Use This Skill

- Use when creating or refactoring a `Dockerfile`, `compose.yaml`, or containerized local workflow.
- Use when a build is slow, non-reproducible, or shipping too much runtime baggage.
- Use when the user needs runtime hardening, non-root execution, or better image hygiene.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| Slow build | layer order and context | Dependency layers cache cleanly and rebuild scope is small |
| Runtime hardening | user, filesystem, and surface area | Final image runs with minimal privileges and only required files |
| Compose mismatch | local vs CI parity | Local shortcuts are separated from image behavior |
| Multi-stage migration | build-to-runtime handoff | Build artifacts and runtime requirements are explicit |
| Production debug | container contract | Run command, writable paths, and health behavior are easy to inspect |

## Core Concepts

### Build Context Is Part of the Contract

Poor build context and layer ordering can dominate build time and leak files that never belonged in the image. Reduce the context, isolate dependency layers, and keep the rebuild path explicit.

### Runtime Images Should Be Smaller Than Build Images

Compilers, caches, and test tooling belong in build stages unless runtime behavior actually requires them. Multi-stage builds are usually the safest default.

## Workflow

1. Define the runtime target: API, worker, CLI, cron, or static asset server, including ports, writable paths, environment expectations, and process model.
2. Design the build stages so dependency restore, source copy, artifact build, and runtime packaging each have a clear purpose and cache boundary.
3. Reduce the attack surface by shrinking the base image, dropping build tools from the final stage, avoiding baked secrets, and preferring non-root execution.
4. Make local and CI behavior match by documenting build args, targets, cache mounts, platform flags, health checks, and debug commands explicitly.
5. Validate the container contract with the exact build and run commands, expected filesystem behavior, and the shortest triage sequence for startup failures.

## Examples

### Example 1: Multi-stage web app image

```text
Refactor this Node image into a multi-stage Dockerfile that installs dependencies once, builds once, and ships a small runtime image.
```

**Explanation:** The answer should focus on layer order, runtime size, and safer defaults.

### Example 2: Build review packet

```bash
python3 skills/docker-expert/scripts/render_container_plan.py \
  "catalog-api" \
  "node runtime with read-only HTTP server" \
  "small image,reproducible build,non-root user"
```

**Explanation:** Use the starter packet when the user needs a structured Docker review or migration plan.

### Example 3: Runtime hardening worksheet

```text
Use @docker-expert to review this Dockerfile and tell me what must change for non-root execution, read-only filesystems, and smaller runtime images.
```

**Explanation:** Use this framing when runtime safety matters more than just getting the image to build.

### Example 4: Local container plan from the skill folder

```bash
cd skills/docker-expert
python3 scripts/render_container_plan.py \
  "worker-image" \
  "python batch processor with tmp writes" \
  "cache strategy,non-root,debug path"
```

**Explanation:** This path is useful when iterating on the container review packet inside the skill folder.

## Best Practices

- ✅ **Do:** Prefer multi-stage builds for compiled apps or heavy dependency trees.
- ✅ **Do:** Copy manifest files before source files so dependency layers cache cleanly.
- ✅ **Do:** Run containers as non-root when the workload permits it.
- ❌ **Don't:** ship build tools, caches, or test dependencies in the runtime image without a reason.
- ❌ **Don't:** let `COPY . .` pull in secrets, local caches, or unrelated project files.

## Troubleshooting

### Problem: Rebuilds are too slow

**Symptoms:** Small code changes trigger large dependency reinstall steps.  
**Solution:** Reorder the Dockerfile so package manifests and lockfiles are copied before application source, and keep the build context tight.

### Problem: The image works locally but fails in deployment

**Symptoms:** The process crashes under non-root execution, read-only filesystems, or different environment variables.  
**Solution:** State the runtime contract explicitly, then test the same command, user, port, and writable paths outside local Compose shortcuts.

### Problem: The Dockerfile looks fine but the shipped image is still too large

**Symptoms:** The image contains build caches, package managers, unused files, or debug dependencies that were never intended for runtime.
**Solution:** Re-check build context, stage boundaries, copied paths, and whether the final image still inherits tools that only belong in the build stage.

## Related Skills

- `@kubernetes` — Use when the container contract must fit probes, rollouts, and cluster deployment.
- `@terraform` — Use when the container is part of a broader infrastructure rollout.
- `@vulnerability-scanner` — Use when the image or archive workflow needs security verification before release.

## Additional Resources

- [Docker checklist](references/checklist.md)
- [Build stage rubric](references/build-stage-rubric.md)
- [Runtime contract worksheet](references/runtime-contract-worksheet.md)
- [Render a container plan](scripts/render_container_plan.py)
- [Layer review matrix](examples/layer-review-matrix.md)
