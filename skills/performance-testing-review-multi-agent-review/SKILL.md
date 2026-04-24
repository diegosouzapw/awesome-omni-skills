---
name: performance-testing-review-multi-agent-review
description: "Multi-Agent Code Review Orchestration Tool workflow skill. Use this skill when the user needs working with performance testing review multi agent review and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["performance-testing-review-multi-agent-review", "working", "performance", "testing", "review", "multi", "testing-security"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# Multi-Agent Code Review Orchestration Tool

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/performance-testing-review-multi-agent-review` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Multi-Agent Code Review Orchestration Tool

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Role: Expert Multi-Agent Review Orchestration Specialist, Context and Purpose, Tool Arguments and Configuration, Multi-Agent Coordination Strategy, Best Practices and Considerations, Extensibility.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on multi-agent code review orchestration tool tasks or workflows
- Needing guidance, best practices, or checklists for multi-agent code review orchestration tool
- The task is unrelated to multi-agent code review orchestration tool
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: working with performance testing review multi agent review.
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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Role: Expert Multi-Agent Review Orchestration Specialist

A sophisticated AI-powered code review system designed to provide comprehensive, multi-perspective analysis of software artifacts through intelligent agent coordination and specialized domain expertise.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @performance-testing-review-multi-agent-review to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @performance-testing-review-multi-agent-review against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @performance-testing-review-multi-agent-review for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @performance-testing-review-multi-agent-review using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Implementations

### 1. Parallel Code Review Scenario
```python
multi_agent_review(
    target="/path/to/project",
    agents=[
        {"type": "security-auditor", "weight": 0.3},
        {"type": "architecture-reviewer", "weight": 0.3},
        {"type": "performance-analyst", "weight": 0.2}
    ]
)
```

### 2. Sequential Workflow
```python
sequential_review_workflow = [
    {"phase": "design-review", "agent": "architect-reviewer"},
    {"phase": "implementation-review", "agent": "code-quality-reviewer"},
    {"phase": "testing-review", "agent": "test-coverage-analyst"},
    {"phase": "deployment-readiness", "agent": "devops-validator"}
]
```

### 3. Hybrid Orchestration
```python
hybrid_review_strategy = {
    "parallel_agents": ["security", "performance"],
    "sequential_agents": ["architecture", "compliance"]
}
```

#### Imported: Invocation

Target for review: $ARGUMENTS

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/performance-testing-review-multi-agent-review`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@odoo-sales-crm-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-security-rules` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-shopify-integration` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-upgrade-advisor` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Reference Implementations

1. **Web Application Security Review**
2. **Microservices Architecture Validation**

#### Imported: Context and Purpose

The Multi-Agent Review Tool leverages a distributed, specialized agent network to perform holistic code assessments that transcend traditional single-perspective review approaches. By coordinating agents with distinct expertise, we generate a comprehensive evaluation that captures nuanced insights across multiple critical dimensions:

- **Depth**: Specialized agents dive deep into specific domains
- **Breadth**: Parallel processing enables comprehensive coverage
- **Intelligence**: Context-aware routing and intelligent synthesis
- **Adaptability**: Dynamic agent selection based on code characteristics

#### Imported: Tool Arguments and Configuration

### Input Parameters
- `$ARGUMENTS`: Target code/project for review
  - Supports: File paths, Git repositories, code snippets
  - Handles multiple input formats
  - Enables context extraction and agent routing

### Agent Types
1. Code Quality Reviewers
2. Security Auditors
3. Architecture Specialists
4. Performance Analysts
5. Compliance Validators
6. Best Practices Experts

#### Imported: Multi-Agent Coordination Strategy

### 1. Agent Selection and Routing Logic
- **Dynamic Agent Matching**:
  - Analyze input characteristics
  - Select most appropriate agent types
  - Configure specialized sub-agents dynamically
- **Expertise Routing**:
  ```python
  def route_agents(code_context):
      agents = []
      if is_web_application(code_context):
          agents.extend([
              "security-auditor",
              "web-architecture-reviewer"
          ])
      if is_performance_critical(code_context):
          agents.append("performance-analyst")
      return agents
  ```

### 2. Context Management and State Passing
- **Contextual Intelligence**:
  - Maintain shared context across agent interactions
  - Pass refined insights between agents
  - Support incremental review refinement
- **Context Propagation Model**:
  ```python
  class ReviewContext:
      def __init__(self, target, metadata):
          self.target = target
          self.metadata = metadata
          self.agent_insights = {}

      def update_insights(self, agent_type, insights):
          self.agent_insights[agent_type] = insights
  ```

### 3. Parallel vs Sequential Execution
- **Hybrid Execution Strategy**:
  - Parallel execution for independent reviews
  - Sequential processing for dependent insights
  - Intelligent timeout and fallback mechanisms
- **Execution Flow**:
  ```python
  def execute_review(review_context):
      # Parallel independent agents
      parallel_agents = [
          "code-quality-reviewer",
          "security-auditor"
      ]

      # Sequential dependent agents
      sequential_agents = [
          "architecture-reviewer",
          "performance-optimizer"
      ]
  ```

### 4. Result Aggregation and Synthesis
- **Intelligent Consolidation**:
  - Merge insights from multiple agents
  - Resolve conflicting recommendations
  - Generate unified, prioritized report
- **Synthesis Algorithm**:
  ```python
  def synthesize_review_insights(agent_results):
      consolidated_report = {
          "critical_issues": [],
          "important_issues": [],
          "improvement_suggestions": []
      }
      # Intelligent merging logic
      return consolidated_report
  ```

### 5. Conflict Resolution Mechanism
- **Smart Conflict Handling**:
  - Detect contradictory agent recommendations
  - Apply weighted scoring
  - Escalate complex conflicts
- **Resolution Strategy**:
  ```python
  def resolve_conflicts(agent_insights):
      conflict_resolver = ConflictResolutionEngine()
      return conflict_resolver.process(agent_insights)
  ```

### 6. Performance Optimization
- **Efficiency Techniques**:
  - Minimal redundant processing
  - Cached intermediate results
  - Adaptive agent resource allocation
- **Optimization Approach**:
  ```python
  def optimize_review_process(review_context):
      return ReviewOptimizer.allocate_resources(review_context)
  ```

### 7. Quality Validation Framework
- **Comprehensive Validation**:
  - Cross-agent result verification
  - Statistical confidence scoring
  - Continuous learning and improvement
- **Validation Process**:
  ```python
  def validate_review_quality(review_results):
      quality_score = QualityScoreCalculator.compute(review_results)
      return quality_score > QUALITY_THRESHOLD
  ```

#### Imported: Best Practices and Considerations

- Maintain agent independence
- Implement robust error handling
- Use probabilistic routing
- Support incremental reviews
- Ensure privacy and security

#### Imported: Extensibility

The tool is designed with a plugin-based architecture, allowing easy addition of new agent types and review strategies.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
