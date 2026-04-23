---
name: "aegisops-ai"
description: "/aegisops-ai \\u2014 Autonomous Governance Orchestrator workflow skill. Use this skill when the user needs Autonomous DevSecOps & FinOps Guardrails. Orchestrates Gemini 3 Flash to audit Linux Kernel patches, Terraform cost drifts, and K8s compliance and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "devops"
tags:
  - "aegisops-ai"
  - "autonomous"
  - "devsecops"
  - "finops"
  - "guardrails"
  - "orchestrates"
  - "gemini"
  - "flash"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-14"
date_updated: "2026-04-23"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "aegisops-ai"
family_name: "/aegisops-ai \u2014 Autonomous Governance Orchestrator"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/aegisops-ai"
upstream_skill: "skills/aegisops-ai"
upstream_author: "Champbreed"
upstream_source: "community"
upstream_pr: "126"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "032affbbd536f09d7636f0fbbfd35093380dae89"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "aegisops-ai"
---

# /aegisops-ai — Autonomous Governance Orchestrator

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/aegisops-ai` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# /aegisops-ai — Autonomous Governance Orchestrator AegisOps-AI is a professional-grade "Living Pipeline" that integrates advanced AI reasoning directly into the SDLC. It acts as an intelligent gatekeeper for systems-level security, cloud infrastructure costs, and Kubernetes compliance.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Goal, 🤖 Generative AI Integration, 🧭 Core Modules, 🏁 Operational Dashboard, 🔒 Security & Safety Notes, Links.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Kernel Patch Review: Auditing raw C-based Git diffs for memory safety.
- Pre-Apply IaC Audit: Analyzing terraform plan outputs to prevent bill spikes.
- Cluster Hardening: Generating "Least Privilege" securityContexts for deployments.
- CI/CD Quality Gating: Blocking non-compliant merges via GitHub Actions.
- Web App Logic: Do not use for standard web vulnerabilities (XSS, SQLi); use dedicated SAST scanners.
- Non-C Memory Analysis: The patch analyzer is optimized for C-logic; avoid using it for high-level languages like Python or JS.

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

1. Clone the Repository `bash git clone https://github.com/Champbreed/AegisOps-AI.git cd AegisOps-AI bash python3 -m venv venv source venv/bin/activate pip install google-genai python-dotenv ### 3.
2. API Configuration Create a .env file in the root directory to securely store your credentials: bash echo "GEMINIAPIKEY='yourapikey_here'" > .env `
3. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
4. Read the overview and provenance files before loading any copied upstream support files.
5. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
6. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
7. Validate the result against the upstream expectations and the evidence you can point to in the copied files.

### Imported Workflow Notes

#### Imported: 🛠️ Setup & Environment

### 1. Clone the Repository

```bash
git clone https://github.com/Champbreed/AegisOps-AI.git
cd AegisOps-AI
```

#### Imported: 2. Setup

```bash
python3 -m venv venv
source venv/bin/activate
pip install google-genai python-dotenv
```
### 3. API Configuration

Create a `.env` file in the root directory to securely 
store your credentials:

```bash
echo "GEMINI_API_KEY='your_api_key_here'" > .env
```

#### Imported: Goal

To automate high-stakes security and financial audits by:
1. Identifying logic-based vulnerabilities (UAF, Stale 
State) in Linux Kernel patches.
2. Detecting massive "Silent Disaster" cost drifts in 
Terraform plans.
3. Translating natural language security intent into 
hardened K8s manifests.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @aegisops-ai to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @aegisops-ai against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @aegisops-ai for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @aegisops-ai using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Context is King: Provide at least 5 lines of context around Git diffs for more accurate neural reasoning.
- Continuous Gating: Run the FinOps auditor before every infrastructure change, not after.
- Manual Sign-off: Use AI findings as a high-fidelity signal, but maintain human-in-the-loop for kernel-level merges.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: 💡 Best Practices

* **Context is King:** Provide at least 5 lines of context around Git diffs for more accurate neural reasoning.
* **Continuous Gating:** Run the FinOps auditor before every infrastructure change, not after.
* **Manual Sign-off:** Use AI findings as a high-fidelity signal, but maintain human-in-the-loop for kernel-level merges.

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/aegisops-ai`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-web-experience` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 🤖 Generative AI Integration

AegisOps-AI leverages the **Google GenAI SDK** to implement a "Reasoning Path" for autonomous security and financial audits:

* **Neural Patch Analysis:** Performs semantic code reviews of Linux Kernel patches, moving beyond simple pattern matching to understand complex memory state logic.
* **Intelligent Cost Synthesis:** Processes raw Terraform plan diffs through a financial reasoning model to detect high-risk resource escalations and "silent" fiscal drifts.
* **Natural Language Policy Mapping:** Translates human security intent into syntactically correct, hardened Kubernetes `securityContext` configurations.

#### Imported: 🧭 Core Modules

### 1. 🐧 Kernel Patch Reviewer (`patch_analyzer.py`)

* **Problem:** Manual review of Linux Kernel memory safety is time-consuming and prone to human error.
* **Solution:** Gemini 3 performs a "Deep Reasoning" audit on raw Git diffs to detect critical memory corruption vulnerabilities (UAF, Stale State) in seconds.
* **Key Output:** `analysis_results.json`

### 2. 💰 FinOps & Cloud Auditor (`cost_auditor.py`)

* **Problem:** Infrastructure-as-Code (IaC) changes can lead to accidental "Silent Disasters" and massive cloud bill spikes.
* **Solution:** Analyzes `terraform plan` output to identify cost anomalies—such as accidental upgrades from `t3.micro` to high-performance GPU instances.
* **Key Output:** `infrastructure_audit_report.json`

### 3. ☸️ K8s Policy Hardener (`k8s_policy_generator.py`)

* **Problem:** Implementing "Least Privilege" security contexts in Kubernetes is complex and often neglected.
* **Solution:** Translates natural language security requirements into production-ready, hardened YAML manifests (Read-only root FS, Non-root enforcement, etc.).
* **Key Output:** `hardened_deployment.yaml`

#### Imported: 🏁 Operational Dashboard

To execute the full suite of agents in sequence and generate all security reports:

```bash
python3 main.py
```
### Pattern: Over-Privileged Container

* **Indicators:** `allowPrivilegeEscalation: true` or root user execution.
* **Investigation:** Pass security intent (e.g., "non-root only") to the K8s Hardener module.

---

#### Imported: 🔒 Security & Safety Notes

* **Key Management:** Use CI/CD secrets for `GEMINI_API_KEY` in production.
* **Least Privilege:** Test "Hardened" manifests in staging first to ensure no functional regressions.

#### Imported: Links

+ - **Repository**: https://github.com/Champbreed/AegisOps-AI
+ - **Documentation**: https://github.com/Champbreed/AegisOps-AI#readme

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
