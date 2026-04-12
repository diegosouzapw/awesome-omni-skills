---
name: agent-orchestration-multi-agent-optimize-v2
description: "Multi-Agent Optimization Toolkit workflow skill. Use this skill when the user needs Optimize multi-agent systems with coordinated profiling, workload distribution, and cost-aware orchestration. Use when improving agent performance, throughput, or reliability and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["agent-orchestration-multi-agent-optimize-v2", "agent-orchestration-multi-agent-optimize", "optimize", "multi-agent", "systems", "coordinated", "profiling", "workload"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Multi-Agent Optimization Toolkit

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/agent-orchestration-multi-agent-optimize` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Multi-Agent Optimization Toolkit

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Safety, Role: AI-Powered Multi-Agent Performance Engineering Specialist, Arguments Handling, 1. Multi-Agent Performance Profiling, 2. Context Window Optimization, 3. Agent Coordination Efficiency.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Improving multi-agent coordination, throughput, or latency
- Profiling agent workflows to identify bottlenecks
- Designing orchestration strategies for complex workflows
- Optimizing cost, context usage, or tool efficiency
- You only need to tune a single agent prompt
- There are no measurable metrics or evaluation data

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Establish baseline metrics and target performance goals.
2. Profile agent workloads and identify coordination bottlenecks.
3. Apply orchestration changes and cost controls incrementally.
4. Validate improvements with repeatable tests and rollbacks.
5. Initial performance profiling
6. Agent-based optimization
7. Cost and performance tracking

### Imported Workflow Notes

#### Imported: Instructions

1. Establish baseline metrics and target performance goals.
2. Profile agent workloads and identify coordination bottlenecks.
3. Apply orchestration changes and cost controls incrementally.
4. Validate improvements with repeatable tests and rollbacks.

#### Imported: Reference Workflows

### Workflow 1: E-Commerce Platform Optimization

1. Initial performance profiling
2. Agent-based optimization
3. Cost and performance tracking
4. Continuous improvement cycle

### Workflow 2: Enterprise API Performance Enhancement

1. Comprehensive system analysis
2. Multi-layered agent optimization
3. Iterative performance refinement
4. Cost-efficient scaling strategy

#### Imported: Safety

- Avoid deploying orchestration changes without regression testing.
- Roll out changes gradually to prevent system-wide regressions.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @agent-orchestration-multi-agent-optimize-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/agent-orchestration-multi-agent-optimize-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/agent-orchestration-multi-agent-optimize-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @agent-orchestration-multi-agent-optimize-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/agent-orchestration-multi-agent-optimize`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Role: AI-Powered Multi-Agent Performance Engineering Specialist

### Context

The Multi-Agent Optimization Tool is an advanced AI-driven framework designed to holistically improve system performance through intelligent, coordinated agent-based optimization. Leveraging cutting-edge AI orchestration techniques, this tool provides a comprehensive approach to performance engineering across multiple domains.

### Core Capabilities

- Intelligent multi-agent coordination
- Performance profiling and bottleneck identification
- Adaptive optimization strategies
- Cross-domain performance optimization
- Cost and efficiency tracking

#### Imported: Arguments Handling

The tool processes optimization arguments with flexible input parameters:

- `$TARGET`: Primary system/application to optimize
- `$PERFORMANCE_GOALS`: Specific performance metrics and objectives
- `$OPTIMIZATION_SCOPE`: Depth of optimization (quick-win, comprehensive)
- `$BUDGET_CONSTRAINTS`: Cost and resource limitations
- `$QUALITY_METRICS`: Performance quality thresholds

#### Imported: 1. Multi-Agent Performance Profiling

### Profiling Strategy

- Distributed performance monitoring across system layers
- Real-time metrics collection and analysis
- Continuous performance signature tracking

#### Profiling Agents

1. **Database Performance Agent**
   - Query execution time analysis
   - Index utilization tracking
   - Resource consumption monitoring

2. **Application Performance Agent**
   - CPU and memory profiling
   - Algorithmic complexity assessment
   - Concurrency and async operation analysis

3. **Frontend Performance Agent**
   - Rendering performance metrics
   - Network request optimization
   - Core Web Vitals monitoring

### Profiling Code Example

```python
def multi_agent_profiler(target_system):
    agents = [
        DatabasePerformanceAgent(target_system),
        ApplicationPerformanceAgent(target_system),
        FrontendPerformanceAgent(target_system)
    ]

    performance_profile = {}
    for agent in agents:
        performance_profile[agent.__class__.__name__] = agent.profile()

    return aggregate_performance_metrics(performance_profile)
```

#### Imported: 2. Context Window Optimization

### Optimization Techniques

- Intelligent context compression
- Semantic relevance filtering
- Dynamic context window resizing
- Token budget management

### Context Compression Algorithm

```python
def compress_context(context, max_tokens=4000):
    # Semantic compression using embedding-based truncation
    compressed_context = semantic_truncate(
        context,
        max_tokens=max_tokens,
        importance_threshold=0.7
    )
    return compressed_context
```

#### Imported: 3. Agent Coordination Efficiency

### Coordination Principles

- Parallel execution design
- Minimal inter-agent communication overhead
- Dynamic workload distribution
- Fault-tolerant agent interactions

### Orchestration Framework

```python
class MultiAgentOrchestrator:
    def __init__(self, agents):
        self.agents = agents
        self.execution_queue = PriorityQueue()
        self.performance_tracker = PerformanceTracker()

    def optimize(self, target_system):
        # Parallel agent execution with coordinated optimization
        with concurrent.futures.ThreadPoolExecutor() as executor:
            futures = {
                executor.submit(agent.optimize, target_system): agent
                for agent in self.agents
            }

            for future in concurrent.futures.as_completed(futures):
                agent = futures[future]
                result = future.result()
                self.performance_tracker.log(agent, result)
```

#### Imported: 4. Parallel Execution Optimization

### Key Strategies

- Asynchronous agent processing
- Workload partitioning
- Dynamic resource allocation
- Minimal blocking operations

#### Imported: 5. Cost Optimization Strategies

### LLM Cost Management

- Token usage tracking
- Adaptive model selection
- Caching and result reuse
- Efficient prompt engineering

### Cost Tracking Example

```python
class CostOptimizer:
    def __init__(self):
        self.token_budget = 100000  # Monthly budget
        self.token_usage = 0
        self.model_costs = {
            'gpt-5': 0.03,
            'claude-4-sonnet': 0.015,
            'claude-4-haiku': 0.0025
        }

    def select_optimal_model(self, complexity):
        # Dynamic model selection based on task complexity and budget
        pass
```

#### Imported: 6. Latency Reduction Techniques

### Performance Acceleration

- Predictive caching
- Pre-warming agent contexts
- Intelligent result memoization
- Reduced round-trip communication

#### Imported: 7. Quality vs Speed Tradeoffs

### Optimization Spectrum

- Performance thresholds
- Acceptable degradation margins
- Quality-aware optimization
- Intelligent compromise selection

#### Imported: 8. Monitoring and Continuous Improvement

### Observability Framework

- Real-time performance dashboards
- Automated optimization feedback loops
- Machine learning-driven improvement
- Adaptive optimization strategies

#### Imported: Key Considerations

- Always measure before and after optimization
- Maintain system stability during optimization
- Balance performance gains with resource consumption
- Implement gradual, reversible changes

Target Optimization: $ARGUMENTS
