---
name: "crewai-v2"
description: "Use this skill when the user needs expert CrewAI help for review, design, debugging, or production-readiness checks across agents, tasks, crews, and flows while preserving upstream workflow, copied support files, and provenance before merge or handoff."
version: "0.0.1"
category: "ai-agents"
license: "Unknown"
tags:
  - "crewai-v2"
  - "crewai"
  - "multi-agent"
  - "agents"
  - "tasks"
  - "crews"
  - "flows"
  - "orchestration"
  - "agent-review"
  - "workflow-design"
  - "debugging"
  - "observability"
  - "structured-output"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-16"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "crewai-v2"
family_name: "CrewAI"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/crewai-v2"
upstream_skill: "skills/crewai-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "crewai-v2"
---

# CrewAI

## Overview

This skill preserves the upstream CrewAI workflow and provenance while turning it into an operator-facing guide for reviewing, designing, debugging, and hardening CrewAI systems.

Use it when the task involves:
- reviewing whether a Crew or a Flow is the right orchestration primitive
- designing or auditing agents, tasks, crews, or flow steps
- tightening task contracts, expected outputs, and handoff boundaries
- diagnosing delegation loops, weak outputs, tool failures, or state loss
- checking observability, memory, replay, testing, and production-readiness
- preserving copied upstream files and provenance during merge or handoff

## When to Use

Activate this skill when the user asks for any of the following:
- "Review this CrewAI architecture"
- "Should this be a Crew or a Flow?"
- "Why are my agents looping or producing vague outputs?"
- "Help define tasks, expected outputs, and delegation rules"
- "How do I make this CrewAI workflow safer and more deterministic?"
- "Check if this CrewAI setup is ready for production"

Do **not** rely on this skill alone when:
- the request is about a different framework and CrewAI is only mentioned in passing
- the user needs undocumented product behavior or hidden internal APIs
- you cannot inspect the actual crew, flow, task, or runtime configuration and would only be guessing

## Workflow

1. **Preserve provenance and scope**
   - Keep the upstream workflow, copied support files, and origin notes intact.
   - Do not remove provenance markers or rewrite repository history.
   - Confirm whether the request is design help, review, debugging, migration, or handoff preparation.

2. **Identify the orchestration model**
   - Determine whether the implementation uses a **Crew**, a **Flow**, or both.
   - Prefer a **Crew** for role-based collaboration and delegated reasoning.
   - Prefer a **Flow** for deterministic, stateful, event-driven, or branch-heavy orchestration.
   - Flag architecture drift when a problem needing deterministic control has been forced into a free-form crew.

3. **Inspect agents and task contracts**
   - Check whether each agent has a clear role, bounded responsibility, and relevant tools.
   - Check whether each task defines a concrete objective, required inputs, and an explicit expected output.
   - Look for missing output schemas, vague success criteria, or tasks that combine too many decisions.
   - Verify that delegation is intentional rather than implied by vague task wording.

4. **Review process and execution behavior**
   - Confirm whether the chosen process type matches the work: sequential, hierarchical, or another supported pattern in the implementation.
   - Inspect handoff order, branch conditions, retries, human approval points, and failure paths.
   - Check whether state transitions are observable and whether intermediate outputs are recoverable.

5. **Evaluate production controls**
   - Check observability: tracing, logs, event listeners, runtime visibility, and replay support.
   - Check memory use: whether memory is necessary, scoped, and unlikely to leak stale or irrelevant context.
   - Check validation: structured outputs, guardrails, assertions, or post-task verification.
   - Check testing readiness: sample inputs, expected outputs, and deterministic review paths.

6. **Deliver a concrete review or remediation plan**
   - Summarize what is correct, risky, and missing.
   - Recommend the smallest viable architecture or prompt/task changes first.
   - Provide before/after guidance for task wording, flow choice, validation, or observability.
   - If handing off, preserve provenance and note any copied support files that must remain attached.

## Examples

### Example 1: Crew vs Flow decision

**Input**
```text
We have a support-ticket system. One agent classifies the issue, another drafts a reply, and a third decides whether to escalate. The workflow must branch on ticket severity and stop if required fields are missing.
```

**Expected review outcome**
```text
Recommend a Flow as the top-level orchestrator because the process is stateful and branch-heavy.
Use Crew-based collaboration only inside steps that benefit from role-based reasoning, such as drafting or policy review.
Add explicit validation for required fields before any downstream step runs.
```

### Example 2: Weak task contract

**Before**
```yaml
Task: Analyze the market and give recommendations.
```

**After**
```yaml
Task: Analyze the last 4 quarters of B2B CRM market activity for mid-market buyers.
Inputs:
  - company_profile
  - target_segment
  - competitor_notes
Expected output:
  - top_5_findings
  - ranked_recommendations
  - evidence_table
  - confidence_notes
Rules:
  - cite only provided inputs unless external research is explicitly enabled
  - state unknowns instead of inventing data
```

**Expected improvement**
```text
The revised task reduces ambiguity, limits hallucination risk, and creates an output contract that can be reviewed or validated.
```

### Example 3: Delegation loop diagnosis

**Symptoms**
```text
The manager agent repeatedly asks a specialist to refine the same answer, and the specialist keeps returning near-duplicate drafts.
```

**Expected review outcome**
```text
Identify unclear stop conditions and missing acceptance criteria.
Recommend: cap retries, define a completion rubric, and require the manager to either approve, reject with specific corrections, or escalate.
```

Open `examples/review-example.md` for a fuller worked review with findings and remediation.

## Best Practices

- **Do** choose Flows for deterministic branching, approvals, and stateful automation.
- **Do** choose Crews for collaborative reasoning where role separation adds value.
- **Do** define expected outputs as reviewable artifacts, not vague prose goals.
- **Do** separate orchestration concerns from agent expertise concerns.
- **Do** make delegation boundaries explicit; hidden delegation causes loops and weak accountability.
- **Do** add validation after high-risk steps, especially when outputs feed tools, workflows, or users.
- **Do** keep memory scoped and justified; long-lived memory without retrieval discipline can degrade output quality.
- **Do** ensure traces, logs, or event visibility exist before calling a system production-ready.

- **Do not** use a Crew where a simple deterministic Flow or single agent would be clearer.
- **Do not** give multiple agents overlapping authority without a tie-break or approval rule.
- **Do not** accept tasks that lack inputs, expected outputs, or completion criteria.
- **Do not** rely on memory to compensate for poor task structure.
- **Do not** treat replay or debugging support as optional in multi-step production workflows.
- **Do not** remove provenance files or collapse copied upstream context during cleanup.

## Troubleshooting

**Symptoms:** Agents produce long but low-value answers.

**Solution:** Tighten task scope, add explicit expected outputs, reduce unnecessary agent overlap, and require evidence or structured fields instead of free-form prose.

**Symptoms:** A manager and specialist keep delegating the same work back and forth.

**Solution:** Add stop conditions, retry caps, role boundaries, and acceptance criteria. If the process is primarily branching control rather than collaborative reasoning, move orchestration into a Flow.

**Symptoms:** Outputs are hard to validate or compare across runs.

**Solution:** Define structured output contracts, add post-task checks, and make required fields explicit. Prefer deterministic schemas where downstream automation depends on the result.

**Symptoms:** The workflow fails after a tool call or external action, and the crew cannot recover cleanly.

**Solution:** Add explicit failure paths, retries only where safe, and state checkpoints so the run can be inspected or resumed. Use observability and replay features during diagnosis.

**Symptoms:** Memory seems to help early runs but later causes drift, stale facts, or irrelevant context.

**Solution:** Reduce memory scope, review what is persisted, and treat memory as a targeted aid rather than a substitute for clean task inputs.

**Symptoms:** The team cannot explain why a run produced a specific decision.

**Solution:** Improve tracing, event logging, intermediate artifact capture, and decision checkpoints. A production workflow should support post-run inspection without guesswork.

## Additional Resources

- `references/review-criteria.md` — Open this when you need a compact but deep audit checklist for architecture choice, task contracts, observability, memory, validation, and failure modes.
- `examples/review-example.md` — Open this when you need a worked example showing how to review a CrewAI design and turn findings into concrete remediation steps.

## Related Skills

No related local skills were provided in the source context.
