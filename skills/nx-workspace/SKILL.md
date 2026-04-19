---
name: nx-workspace
description: "Nx Workspace Management workflow skill. Use this skill when the user needs Configure, explore, and optimize Nx monorepo workspaces. Use when setting up Nx, exploring workspace structure, configuring project boundaries, analyzing affected projects, optimizing build caching, or implementing CI/CD with affected commands. Keywords \u2014 nx, monorepo, workspace, projects, targets, affected. Do NOT use for running tasks (use nx-run-tasks) or code generation with generators (use nx-generate) and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["nx-workspace", "configure", "explore", "and", "optimize", "monorepo", "workspaces", "use"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Nx Workspace Management

## Overview

This public intake copy packages `packages/skills-catalog/skills/(tooling)/nx-workspace` from `https://github.com/tech-leads-club/agent-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Nx Workspace Management

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Workspace Architecture.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Configure, explore, and optimize Nx monorepo workspaces. Use when setting up Nx, exploring workspace structure, configuring project boundaries, analyzing affected projects, optimizing build caching, or implementing....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `reference/best-practices.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `reference/ci-cd.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. "What's in this workspace?" bash nx show projects --type app # List applications nx show projects --type lib # List libraries "How do I run project X?" bash nx show project X --json | jq '.targets | keys' "What changed?" bash nx show projects --affected --base=main
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Common Workflows

**"What's in this workspace?"**

```bash
nx show projects --type app  # List applications
nx show projects --type lib  # List libraries
```

**"How do I run project X?"**

```bash
nx show project X --json | jq '.targets | keys'
```

**"What changed?"**

```bash
nx show projects --affected --base=main
```

#### Imported: Workspace Architecture

```
workspace/
├── apps/              # Deployable applications
├── libs/              # Shared libraries
│   ├── shared/        # Shared across scopes
│   └── feature/       # Feature-specific
├── nx.json            # Workspace configuration
└── tools/             # Custom executors/generators
```

### Library Types

| Type            | Purpose                          | Example             |
| --------------- | -------------------------------- | ------------------- |
| **feature**     | Business logic, smart components | `feature-auth`      |
| **ui**          | Presentational components        | `ui-buttons`        |
| **data-access** | API calls, state management      | `data-access-users` |
| **util**        | Pure functions, helpers          | `util-formatting`   |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @nx-workspace to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @nx-workspace against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @nx-workspace for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @nx-workspace using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

**Exploring workspace**: `nx show projects` and `nx show project <name> --json`  
**Running tasks**: `nx <target> <project>` (e.g., `nx build my-app`)  
**Affected analysis**: `nx show projects --affected` or `nx affected -t <target>`

> **Note**: Prefix commands with `npx`/`pnpx`/`yarn` if nx isn't installed globally.

#### Imported: Core Commands

### List and Explore Projects

```bash
# List all projects
nx show projects

# Filter by type, pattern, or target
nx show projects --type app
nx show projects --projects "apps/*"
nx show projects --withTarget build

# Find affected projects
nx show projects --affected --base=main
```

### Get Project Information

**Critical**: Always use `nx show project <name> --json` for full resolved configuration. Do NOT read `project.json` directly - it contains only partial configuration.

```bash
# Get full configuration
nx show project my-app --json

# Extract targets
nx show project my-app --json | jq '.targets | keys'
```

Configuration schemas:

- Workspace: `node_modules/nx/schemas/nx-schema.json`
- Project: `node_modules/nx/schemas/project-schema.json`

### Run Tasks

```bash
# Run specific project
nx build web --configuration=production

# Run affected
nx affected -t test --base=main

# View dependency graph
nx graph
```

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

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(tooling)/nx-workspace`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Quick Troubleshooting

- **Targets not showing**: Use `nx show project <name> --json`, not project.json
- **Affected not working**: Ensure git history available (`fetch-depth: 0` in CI)
- **Cache issues**: Run `nx reset`

For detailed troubleshooting, see [reference/best-practices.md](reference/best-practices.md).

## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [best-practices.md](reference/best-practices.md)
- [ci-cd.md](reference/ci-cd.md)
- [commands.md](reference/commands.md)
- [configuration.md](reference/configuration.md)

### Imported Reference Notes

#### Imported: Detailed Resources

**Configuration**: See [reference/configuration.md](reference/configuration.md) for:

- nx.json templates and options
- project.json structure
- Module boundary rules
- Remote caching setup

**Commands**: See [reference/commands.md](reference/commands.md) for:

- Complete command reference
- Advanced filtering options
- Common workflows

**CI/CD**: See [reference/ci-cd.md](reference/ci-cd.md) for:

- GitHub Actions configuration
- GitLab CI setup
- Jenkins, Azure Pipelines, CircleCI examples
- Affected commands in pipelines

**Best Practices**: See [reference/best-practices.md](reference/best-practices.md) for:

- Do's and don'ts
- Complete troubleshooting guide
- Performance optimization
- Migration guides
