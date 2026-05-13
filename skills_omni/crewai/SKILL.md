---
name: "crewai"
description: "CrewAI workflow skill. Use this skill when the user needs expert review or design guidance for CrewAI crews, tasks, processes, memory, and flows while preserving upstream workflow context and provenance."
version: "0.0.1"
category: "ai-agents"
tags:
  - "crewai"
  - "multi-agent"
  - "agent-orchestration"
  - "crews"
  - "flows"
  - "review"
  - "ai-agents"
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
license: "Unknown"
date_added: "2026-04-14"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "crewai"
family_name: "CrewAI"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/crewai"
upstream_skill: "skills/crewai"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "crewai"
---

# CrewAI

## Overview

This skill preserves the upstream CrewAI intent while making it more useful for real operator work: reviewing, designing, and troubleshooting CrewAI-based multi-agent systems.

Use this skill to assess whether a CrewAI design is appropriate, complete, and reliable before implementation changes, stakeholder review, or handoff.

Preserve provenance and upstream context when merging or handing off. Do not remove copied support files or rewrite source history unless the user explicitly asks.

## When to Use

Use this skill when the user needs to:
- decide whether a problem should use **Crews**, **Flows**, or a hybrid
- review agent roles, delegation boundaries, and task decomposition
- verify process selection such as sequential vs hierarchical orchestration
- improve handoff reliability with structured outputs and task guardrails
- assess memory scope, persisted state, and recovery behavior
- review observability, tracing, usage metrics, testing, and evaluation coverage
- compare a proposed CrewAI design against production-readiness criteria

Do **not** use this skill as a generic prompt-writing aid when the work does not involve CrewAI architecture, task orchestration, or workflow review.

## Workflow

1. **Classify the requested workflow shape**
   - Determine whether the problem is best modeled as a Crew, a Flow, or a hybrid.
   - Prefer **Crews** for collaborative role-based task execution.
   - Prefer **Flows** for event-driven, stateful, branching, or long-running orchestration.
   - Recommend a hybrid only when agents are one stage inside a broader deterministic flow.

2. **Inspect process choice and orchestration rules**
   - Check whether the design uses sequential or hierarchical execution intentionally.
   - If hierarchical mode is proposed, verify the design includes a valid `manager_llm` or `manager_agent` and that delegation authority is explicit.
   - Flag process choice that exists only because it "sounds advanced" rather than because the task requires it.

3. **Review agent and task contracts**
   - Confirm each agent has a narrow role, clear responsibility, and non-overlapping scope.
   - Check that each task specifies input assumptions, expected output, completion criteria, and handoff destination.
   - Prefer structured outputs for machine-consumed handoffs instead of free-form prose.
   - Recommend guardrails where malformed or partial outputs would break downstream steps.

4. **Assess state, memory, and persistence**
   - Check whether memory is actually needed, and if so, whether the scope matches the task.
   - Distinguish short-lived conversational context from reusable long-term memory or persisted Flow state.
   - Review whether persisted state has clear ownership, lifecycle, and recovery expectations.
   - Flag designs that store everything by default without retention or retrieval boundaries.

5. **Check observability and runtime controls**
   - Verify the workflow can be traced, inspected, and debugged after execution.
   - Look for tracing coverage, usage metrics, failure visibility, and enough context to explain bad outcomes.
   - Require explicit handling for retries, partial failures, and operator review points where appropriate.

6. **Evaluate testing and quality gates**
   - Check whether the design can be tested with repeatable inputs and comparable outputs.
   - Prefer a mix of CrewAI-native testing and external evaluation loops for business-level quality.
   - Confirm that "working once" is not treated as proof of reliability.

7. **Deliver a review verdict with action priority**
   - Summarize what is sound, what is risky, and what must change before implementation.
   - Classify findings as **blocker**, **important**, or **nice to improve**.
   - When relevant, recommend a simpler CrewAI pattern instead of adding more agents or orchestration.

## Examples

### Example 1: Choose Crew vs Flow

**Input**
```text
We need a system that receives a support ticket, classifies it, asks an analyst agent to investigate only for complex cases, waits for human approval for refunds, and resumes later if the customer uploads new evidence.
```

**Expected review outcome**
```text
Recommend a Flow as the primary orchestration layer because the process is stateful, branching, event-driven, and may pause/resume.
Use a Crew only inside the investigation stage if multiple specialist agents are actually needed.
Do not model the whole system as one Crew.
```

### Example 2: Flag a weak hierarchical design

**Input**
```text
The team wants a hierarchical Crew with four agents, but there is no manager agent, no manager LLM, and no explicit delegation logic. Tasks are loosely described as 'research', 'analyze', and 'write'.
```

**Expected review outcome**
```text
Blocker: hierarchical process is underspecified.
Required fixes:
1. Add a manager_llm or manager_agent.
2. Define delegation boundaries.
3. Replace vague task names with task contracts that specify inputs, outputs, and completion criteria.
4. Add structured output requirements for downstream consumption.
```

### Example 3: Improve brittle handoffs

**Before**
```text
Task output: "Write a summary of findings for the next agent."
```

**After**
```text
Task output contract:
- format: JSON
- fields: issue_type, evidence, confidence, recommended_action
- guardrail: reject output if any required field is missing
- downstream consumer: remediation task
```

**Expected review outcome**
```text
The revised task is more reliable because the next step receives typed fields instead of ambiguous prose.
```

For a fuller worked review, open [`examples/review-example.md`](examples/review-example.md).

## Best Practices

- **Do** choose Crews for collaborative agent work; **do not** use them as a default replacement for state machines or event orchestration.
- **Do** choose Flows for branching, persistence, pause/resume, and external event handling; **do not** force these into a single long Crew run.
- **Do** keep agent roles narrow and distinguishable; **do not** create multiple agents with nearly identical responsibilities.
- **Do** define task contracts with explicit outputs; **do not** rely on "the next agent will figure it out."
- **Do** use structured outputs when another agent, tool, or workflow step consumes the result; **do not** pass critical state only in narrative text.
- **Do** add guardrails for outputs that feed automation; **do not** assume natural-language consistency is sufficient for production.
- **Do** justify memory and persistence decisions; **do not** store broad context without a retrieval or lifecycle plan.
- **Do** instrument traces and usage metrics before scaling; **do not** wait for failures in production to discover blind spots.
- **Do** test with representative cases and failure paths; **do not** accept a happy-path demo as readiness evidence.
- **Do** simplify the architecture when one agent or one deterministic flow is enough; **do not** add agents for appearance.

## Troubleshooting

**Symptoms:** A workflow was modeled as a Crew, but it now needs retries, branching, human approval, or pause/resume behavior.

**Solution:** Reframe the top-level orchestration as a Flow. Keep a Crew only for bounded collaborative sub-tasks that genuinely need multiple roles.

**Symptoms:** Hierarchical execution is proposed, but reviews cannot explain who delegates work or how priorities are set.

**Solution:** Require an explicit `manager_llm` or `manager_agent`, document delegation rules, and define what each worker can accept, reject, or return.

**Symptoms:** Downstream tasks fail because prior agents return inconsistent prose.

**Solution:** Replace free-form handoffs with structured outputs and guardrails. Define required fields, validation rules, and failure handling.

**Symptoms:** The system appears to work in demos, but operators cannot explain cost spikes or bad outputs.

**Solution:** Add tracing, usage metrics, and run-level review checkpoints. Ensure the workflow emits enough evidence to reconstruct decisions after execution.

**Symptoms:** Memory is enabled, but results drift or irrelevant past context leaks into new work.

**Solution:** Reduce memory scope, separate transient from persisted state, and define what should be retained, retrieved, or discarded.

**Symptoms:** A CrewAI design looks impressive but is hard to test consistently.

**Solution:** Reduce ambiguity in task contracts, create repeatable input cases, and compare outputs using explicit evaluation criteria instead of subjective impressions.

## Additional Resources

- [`references/review-criteria.md`](references/review-criteria.md) — Open this when you need a compact audit rubric for process choice, task contracts, memory, observability, persistence, and testing.
- [`examples/review-example.md`](examples/review-example.md) — Open this when you want a worked example of reviewing a weak CrewAI design and rewriting the verdict into actionable findings.

## Related Skills

No local related skills were provided in the source context.
