---
name: mise-configurator-v2
description: "Mise Configurator workflow skill. Use this skill when the user needs Generate production-ready mise.toml setups for local development, CI/CD pipelines, and toolchain standardization and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["mise", "devops", "ci-cd", "toolchain", "runtimes", "automation", "mise-configurator-v2", "mise-configurator"]
complexity: beginner
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "community"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Mise Configurator

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/mise-configurator` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Mise Configurator

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations, Security & Safety Notes, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need to create or update a mise.toml
- Use when working with Node.js, Python, Go, Rust, Java, Bun, Terraform, or mixed stacks
- Use when the user asks about CI/CD runtime setup using mise
- Use when migrating from .tool-versions, asdf, nvm, or pyenv
- Use when standardizing tool versions across teams or monorepos
- Use when the request clearly matches the imported source intent: Generate production-ready mise.toml setups for local development, CI/CD pipelines, and toolchain standardization.

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

This skill generates clean, production-ready `mise.toml` configurations for local development environments and CI/CD pipelines.

It helps standardize runtime versions, simplify onboarding, replace legacy version managers like `asdf`, `nvm`, and `pyenv`, and create reproducible multi-language environments with minimal setup effort.

#### Imported: How It Works

### Step 1: Detect Project Context

Inspect available repository files such as:

- `package.json`
- `pnpm-lock.yaml`
- `pyproject.toml`
- `requirements.txt`
- `go.mod`
- `Cargo.toml`
- `.tool-versions`
- `Dockerfile`
- GitHub Actions or CI files

Infer languages, package managers, and pinned versions.

### Step 2: Generate `mise.toml`

Create a minimal, valid, copy-paste-ready configuration using:

- existing pinned versions when found
- explicit user-provided target versions when absent
- practical defaults for developer productivity
- concrete pinned versions in shared production configs

### Step 3: Add Bootstrap Commands

Provide setup commands such as:

```bash
mise trust
mise install
```

### Step 4: Generate CI/CD Integration

If requested, generate pipeline examples using mise with caching and runtime installation.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @mise-configurator-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @mise-configurator-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @mise-configurator-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @mise-configurator-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Node.js + pnpm Project

```toml
[tools]
node = "22.11.0"
pnpm = "9.15.0"
```

### Example 2: Python + GitHub Actions

```toml
[tools]
python = "3.12.7"
poetry = "1.8.4"
```

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: jdx/mise-action@v2
  - run: poetry install
  - run: pytest
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Respect versions already pinned in the repository
- ✅ Keep configs minimal and readable
- ✅ Prefer stable runtime releases
- ✅ Generate CI examples with caching
- ✅ Ask for target versions before pinning when the repository does not already declare them
- ❌ Do not use floating latest or lts aliases in shared production configs unless explicitly requested
- ❌ Do not over-engineer unnecessary tool entries

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Respect versions already pinned in the repository

- ✅ Keep configs minimal and readable

- ✅ Prefer stable runtime releases

- ✅ Generate CI examples with caching

- ✅ Ask for target versions before pinning when the repository does not already declare them

- ❌ Do not use floating `latest` or `lts` aliases in shared production configs unless explicitly requested

- ❌ Do not over-engineer unnecessary tool entries

- ❌ Do not ignore existing lockfiles or version files

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/mise-configurator`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Limitations

- This skill does not replace environment-specific validation, testing, or expert review.

- Stop and ask for clarification if required inputs, permissions, or safety boundaries are missing.

- Runtime availability may vary by OS, shell, or CI platform.

- Some plugins or niche tools may require manual adjustment.

#### Imported: Security & Safety Notes

- Review generated shell commands before execution.

- Confirm CI/CD permissions before modifying pipelines.

- Validate runtime versions against production requirements.

- Use only in authorized repositories and environments.

#### Imported: Common Pitfalls

- **Problem:** Wrong runtime version selected
    **Solution:** Check repository lockfiles and pinned versions first.

- **Problem:** CI installs are slow
    **Solution:** Enable cache layers and reuse mise cache directories.

- **Problem:** Tool missing from registry
    **Solution:** Verify plugin support or install manually.
