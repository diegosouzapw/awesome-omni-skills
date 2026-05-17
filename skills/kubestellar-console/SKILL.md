---
name: kubestellar-console
description: "KubeStellar Console workflow skill. Use this skill when the user needs Multi-cluster Kubernetes dashboard with AI-powered operations via MCP server and 10+ built-in agent skills and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["kubernetes", "multi-cluster", "mcp", "dashboard", "cncf", "devops", "observability", "kubestellar-console"]
complexity: intermediate
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "kubestellar"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# KubeStellar Console

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/kubestellar-console` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# KubeStellar Console

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Key Features, Security & Safety Notes, Limitations, Links.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when managing multiple Kubernetes clusters across edge and cloud
- Use when you need AI-assisted Kubernetes troubleshooting and debugging
- Use when running performance tests, cache compliance checks, or CI debugging on a Kubernetes dashboard
- Use when integrating with CNCF projects (Argo, Kyverno, Istio, and 20+ others)
- Use when the request clearly matches the imported source intent: Multi-cluster Kubernetes dashboard with AI-powered operations via MCP server and 10+ built-in agent skills.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

KubeStellar Console is an open-source multi-cluster Kubernetes dashboard (CNCF project) with AI-powered operations. It ships with `kc-agent`, an MCP server that bridges coding agents to kubeconfig and Kubernetes APIs, plus 10+ built-in agent skills for development, testing, and operations.

#### Imported: How It Works

### Step 1: Install kc-agent

```bash
brew tap kubestellar/tap && brew install kc-agent
```

### Step 2: Start the MCP server

```bash
kc-agent
```

This bridges the active kubeconfig context to any MCP-compatible coding agent. Do not start it from a cluster-admin or write-capable context unless the user explicitly accepts that risk.

### Step 3: Use built-in agent skills

The project ships with agent skills accessible via `CLAUDE.md` and `AGENTS.md`:

- **@perf-test** — Dashboard performance testing and TTFI analysis
- **@cache-test** — Card cache compliance testing (IndexedDB warm return)
- **@nav-test** — Navigation performance testing
- **@ui-compliance-test** — Card loading compliance (8 criteria, 150+ cards)
- **@ci-status** — CI pipeline monitoring and status checks
- **@rca** — Root cause analysis for CI/test failures
- **@tdd** — Test-driven development workflow
- **@k8s-debug** — Kubernetes debugging and troubleshooting

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @kubestellar-console to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @kubestellar-console against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @kubestellar-console for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @kubestellar-console using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/kubestellar-console`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@20-andruia-niche-intelligence` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-criminal` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-especialista` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agent-memory-systems` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Key Features

- Multi-cluster management across edge and cloud
- Real-time streaming observability
- 20+ CNCF project integrations (Argo, Kyverno, Istio, etc.)
- GitHub OAuth authentication
- Supply chain security (SBOM, SLSA)
- SQLite WASM caching with stale-while-revalidate pattern
- 15+ themes with dark/light mode

#### Imported: Security & Safety Notes

- **Critical risk:** `kc-agent` bridges your active kubeconfig context to MCP-compatible agents. If that context carries cluster-admin, write permissions, or secret read access, agents inherit those capabilities.
- **Do not rely on RBAC objects alone:** creating a ServiceAccount or ClusterRoleBinding does not change the credentials `kc-agent` uses. Start `kc-agent` only after switching `KUBECONFIG`/context to dedicated least-privilege credentials and verifying them.
- **Recommended read-only scope:** avoid `resources='*'`, because it includes sensitive objects such as Secrets. Prefer an explicit non-secret resource list and verify access before starting the MCP server:
  ```bash
  kubectl create serviceaccount kc-agent -n default
  kubectl create clusterrole kc-agent-readonly \
    --verb=get,list,watch \
    --resource=pods,services,deployments.apps,replicasets.apps,statefulsets.apps,daemonsets.apps,namespaces,nodes,events,configmaps
  kubectl create clusterrolebinding kc-agent-readonly \
    --clusterrole=kc-agent-readonly \
    --serviceaccount=default:kc-agent
  kubectl auth can-i get secrets --as=system:serviceaccount:default:kc-agent
  kubectl auth can-i list pods --as=system:serviceaccount:default:kc-agent
  ```
- The first `can-i` command must return `no`; the second should return `yes`. Then create or select a kubeconfig that actually authenticates as that ServiceAccount before running `kc-agent`.
- Do not expose `kc-agent` on a public network without authentication.
- Review [SECURITY-AI.md](https://github.com/kubestellar/console/blob/main/docs/security/SECURITY-AI.md) for prompt injection and agent drift mitigations.

#### Imported: Limitations

- This skill requires an external binary (`kc-agent`) installed separately via Homebrew.
- Do not treat agent output as a substitute for environment-specific validation or expert review.
- Stop and ask for clarification if required permissions or safety boundaries are unclear.

#### Imported: Links

- [GitHub](https://github.com/kubestellar/console)
- [Website](https://console.kubestellar.io)
- [CLAUDE.md](https://github.com/kubestellar/console/blob/main/CLAUDE.md)
- [AGENTS.md](https://github.com/kubestellar/console/blob/main/AGENTS.md)
