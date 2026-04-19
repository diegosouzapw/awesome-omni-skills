---
name: "agentfolio-v2"
description: "AgentFolio workflow skill. Use this skill when the user needs Skill for discovering and researching autonomous AI agents, tools, and ecosystems using the AgentFolio directory and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "ai-agents"
tags:
  - "agentfolio-v2"
  - "agentfolio"
  - "for"
  - "discovering"
  - "and"
  - "researching"
  - "autonomous"
  - "tools"
  - "omni-enhanced"
complexity: "intermediate"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-15"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "agentfolio-v2"
family_name: "AgentFolio"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/agentfolio-v2"
upstream_skill: "skills/agentfolio-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "37"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "8fab9480d35a3f46aca4c7314a9d34bd60d77f92"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "agentfolio-v2"
---

# AgentFolio

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/agentfolio` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# AgentFolio Role: Autonomous Agent Discovery Guide Use this skill when you want to discover, compare, and research autonomous AI agents across ecosystems. AgentFolio is a curated directory at https://agentfolio.io that tracks agent frameworks, products, and tools. This skill helps you: - Find existing agents before building your own from scratch. - Map the landscape of agent frameworks and hosted products. - Collect concrete examples and benchmarks for agent capabilities.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, How to Use AgentFolio, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- At the start of a new agent or workflow project.
- When evaluating vendors or tools to integrate.
- When you want inspiration or best practices from existing agent products.
- Use when the request clearly matches the imported source intent: Skill for discovering and researching autonomous AI agents, tools, and ecosystems using the AgentFolio directory.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Define the problem: “autonomous test failure triage for CI pipelines”.
2. Use AgentFolio to search for:
3. “testing agent”, “CI agent”, “DevOps assistant”, “incident triage”.
4. For each relevant agent:
5. Note supported platforms (GitHub, GitLab, Jenkins, etc.).
6. Capture how they explain autonomy and safety boundaries.
7. Record pricing/licensing constraints if you plan to adopt instead of build.

### Imported Workflow Notes

#### Imported: Example Workflows

### 1) Landscape scan before building a new agent

- Define the problem: “autonomous test failure triage for CI pipelines”.
- Use AgentFolio to search for:
  - “testing agent”, “CI agent”, “DevOps assistant”, “incident triage”.
- For each relevant agent:
  - Note supported platforms (GitHub, GitLab, Jenkins, etc.).
  - Capture how they explain autonomy and safety boundaries.
  - Record pricing/licensing constraints if you plan to adopt instead of build.

### 2) Competitive and inspiration research for a new skill

- If you plan to add a new skill (e.g., observability agent, security agent):
  - Use AgentFolio to find similar agents and features.
  - Extract 3–5 concrete patterns you want to emulate or avoid.
  - Translate those patterns into clear requirements for your own skill.

### 3) Vendor shortlisting

- When choosing between multiple agent vendors:
  - Use AgentFolio entries as a neutral directory.
  - Build a comparison table (columns: capabilities, integrations, pricing, trust & security).
  - Use that table to drive a more formal evaluation or proof-of-concept.

#### Imported: Capabilities

- Discover autonomous AI agents, frameworks, and tools by use case.
- Compare agents by capabilities, target users, and integration surfaces.
- Identify gaps in the market or inspiration for new skills/workflows.
- Gather example agent behavior and UX patterns for your own designs.
- Track emerging trends in agent architectures and deployments.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @agentfolio-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @agentfolio-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @agentfolio-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @agentfolio-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Prompts

Use these prompts when working with this skill in an AI coding agent:

- “Use AgentFolio to find 3 autonomous AI agents focused on code review. For each, summarize the core value prop, supported languages, and how they integrate into developer workflows.”
- “Scan AgentFolio for agents that help with customer support triage. List the top options, their target customer size (SMB vs. enterprise), and any notable UX patterns.”
- “Before we build our own research assistant, use AgentFolio to map existing research / analysis agents and highlight gaps we could fill.”

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/agentfolio`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: How to Use AgentFolio

1. **Open the directory**
   - Visit `https://agentfolio.io` in your browser.
   - Optionally filter by category (e.g., Dev Tools, Ops, Marketing, Productivity).

2. **Search by intent**
   - Start from the problem you want to solve:  
     - “customer support agents”  
     - “autonomous coding agents”  
     - “research / analysis agents”
   - Use keywords in the AgentFolio search bar that match your domain or workflow.

3. **Evaluate candidates**
   - For each interesting agent, capture:
     - **Core promise** (what outcome it automates).
     - **Input / output shape** (APIs, UI, data sources).
     - **Autonomy model** (one-shot, multi-step, tool-using, human-in-the-loop).
     - **Deployment model** (SaaS, self-hosted, browser, IDE, etc.).

4. **Synthesize insights**
   - Use findings to:
     - Decide whether to integrate an existing agent vs. build your own.
     - Borrow successful UX and safety patterns.
     - Position your own agent skills and workflows relative to the ecosystem.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
