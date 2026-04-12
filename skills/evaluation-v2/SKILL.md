---
name: evaluation-v2
description: "Evaluation Methods for Agent Systems workflow skill. Use this skill when the user needs Build evaluation frameworks for agent systems. Use when testing agent performance systematically, validating context engineering choices, or measuring improvements over time and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["evaluation-v2", "evaluation", "build", "frameworks", "for", "systems", "use", "testing"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Evaluation Methods for Agent Systems

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/evaluation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Detailed Topics, Practical Guidance, Integration, Skill Metadata.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Testing agent performance systematically
- Validating context engineering choices
- Measuring improvements over time
- Catching regressions before deployment
- Building quality gates for agent pipelines
- Comparing different agent configurations

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Core Concepts

Agent evaluation requires outcome-focused approaches that account for non-determinism and multiple valid paths. Multi-dimensional rubrics capture various quality aspects: factual accuracy, completeness, citation accuracy, source quality, and tool efficiency. LLM-as-judge provides scalable evaluation while human evaluation catches edge cases.

The key insight is that agents may find alternative paths to goals—the evaluation should judge whether they achieve right outcomes while following reasonable processes.

**Performance Drivers: The 95% Finding**
Research on the BrowseComp evaluation (which tests browsing agents' ability to locate hard-to-find information) found that three factors explain 95% of performance variance:

| Factor | Variance Explained | Implication |
|--------|-------------------|-------------|
| Token usage | 80% | More tokens = better performance |
| Number of tool calls | ~10% | More exploration helps |
| Model choice | ~5% | Better models multiply efficiency |

This finding has significant implications for evaluation design:
- **Token budgets matter**: Evaluate agents with realistic token budgets, not unlimited resources
- **Model upgrades beat token increases**: Upgrading to Claude Sonnet 4.5 or GPT-5.2 provides larger gains than doubling token budgets on previous versions
- **Multi-agent validation**: The finding validates architectures that distribute work across agents with separate context windows

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @evaluation-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/evaluation-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/evaluation-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @evaluation-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

**Example 1: Simple Evaluation**
```python
def evaluate_agent_response(response, expected):
    rubric = load_rubric()
    scores = {}
    for dimension, config in rubric.items():
        scores[dimension] = assess_dimension(response, expected, dimension)
    overall = weighted_average(scores, config["weights"])
    return {"passed": overall >= 0.7, "scores": scores}
```

**Example 2: Test Set Structure**

Test sets should span multiple complexity levels to ensure comprehensive evaluation:

```python
test_set = [
    {
        "name": "simple_lookup",
        "input": "What is the capital of France?",
        "expected": {"type": "fact", "answer": "Paris"},
        "complexity": "simple",
        "description": "Single tool call, factual lookup"
    },
    {
        "name": "medium_query",
        "input": "Compare the revenue of Apple and Microsoft last quarter",
        "complexity": "medium",
        "description": "Multiple tool calls, comparison logic"
    },
    {
        "name": "multi_step_reasoning",
        "input": "Analyze sales data from Q1-Q4 and create a summary report with trends",
        "complexity": "complex",
        "description": "Many tool calls, aggregation, analysis"
    },
    {
        "name": "research_synthesis",
        "input": "Research emerging AI technologies, evaluate their potential impact, and recommend adoption strategy",
        "complexity": "very_complex",
        "description": "Extended interaction, deep reasoning, synthesis"
    }
]
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use multi-dimensional rubrics, not single metrics
- Evaluate outcomes, not specific execution paths
- Cover complexity levels from simple to complex
- Test with realistic context sizes and histories
- Run evaluations continuously, not just before release
- Supplement LLM evaluation with human review
- Track metrics over time for trend detection

### Imported Operating Notes

#### Imported: Guidelines

1. Use multi-dimensional rubrics, not single metrics
2. Evaluate outcomes, not specific execution paths
3. Cover complexity levels from simple to complex
4. Test with realistic context sizes and histories
5. Run evaluations continuously, not just before release
6. Supplement LLM evaluation with human review
7. Track metrics over time for trend detection
8. Set clear pass/fail thresholds based on use case

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/evaluation`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: References

Internal reference:
- Metrics Reference - Detailed evaluation metrics and implementation

#### Imported: References

Internal skills:
- All other skills connect to evaluation for quality measurement

External resources:
- LLM evaluation benchmarks
- Agent evaluation research papers
- Production monitoring practices

---

#### Imported: Detailed Topics

### Evaluation Challenges

**Non-Determinism and Multiple Valid Paths**
Agents may take completely different valid paths to reach goals. One agent might search three sources while another searches ten. They might use different tools to find the same answer. Traditional evaluations that check for specific steps fail in this context.

The solution is outcome-focused evaluation that judges whether agents achieve right outcomes while following reasonable processes.

**Context-Dependent Failures**
Agent failures often depend on context in subtle ways. An agent might succeed on simple queries but fail on complex ones. It might work well with one tool set but fail with another. Failures may emerge only after extended interaction when context accumulates.

Evaluation must cover a range of complexity levels and test extended interactions, not just isolated queries.

**Composite Quality Dimensions**
Agent quality is not a single dimension. It includes factual accuracy, completeness, coherence, tool efficiency, and process quality. An agent might score high on accuracy but low in efficiency, or vice versa.

Evaluation rubrics must capture multiple dimensions with appropriate weighting for the use case.

### Evaluation Rubric Design

**Multi-Dimensional Rubric**
Effective rubrics cover key dimensions with descriptive levels:

Factual accuracy: Claims match ground truth (excellent to failed)

Completeness: Output covers requested aspects (excellent to failed)

Citation accuracy: Citations match claimed sources (excellent to failed)

Source quality: Uses appropriate primary sources (excellent to failed)

Tool efficiency: Uses right tools reasonable number of times (excellent to failed)

**Rubric Scoring**
Convert dimension assessments to numeric scores (0.0 to 1.0) with appropriate weighting. Calculate weighted overall scores. Determine passing threshold based on use case requirements.

### Evaluation Methodologies

**LLM-as-Judge**
LLM-based evaluation scales to large test sets and provides consistent judgments. The key is designing effective evaluation prompts that capture the dimensions of interest.

Provide clear task description, agent output, ground truth (if available), evaluation scale with level descriptions, and request structured judgment.

**Human Evaluation**
Human evaluation catches what automation misses. Humans notice hallucinated answers on unusual queries, system failures, and subtle biases that automated evaluation misses.

Effective human evaluation covers edge cases, samples systematically, tracks patterns, and provides contextual understanding.

**End-State Evaluation**
For agents that mutate persistent state, end-state evaluation focuses on whether the final state matches expectations rather than how the agent got there.

### Test Set Design

**Sample Selection**
Start with small samples during development. Early in agent development, changes have dramatic impacts because there is abundant low-hanging fruit. Small test sets reveal large effects.

Sample from real usage patterns. Add known edge cases. Ensure coverage across complexity levels.

**Complexity Stratification**
Test sets should span complexity levels: simple (single tool call), medium (multiple tool calls), complex (many tool calls, significant ambiguity), and very complex (extended interaction, deep reasoning).

### Context Engineering Evaluation

**Testing Context Strategies**
Context engineering choices should be validated through systematic evaluation. Run agents with different context strategies on the same test set. Compare quality scores, token usage, and efficiency metrics.

**Degradation Testing**
Test how context degradation affects performance by running agents at different context sizes. Identify performance cliffs where context becomes problematic. Establish safe operating limits.

### Continuous Evaluation

**Evaluation Pipeline**
Build evaluation pipelines that run automatically on agent changes. Track results over time. Compare versions to identify improvements or regressions.

**Monitoring Production**
Track evaluation metrics in production by sampling interactions and evaluating randomly. Set alerts for quality drops. Maintain dashboards for trend analysis.

#### Imported: Practical Guidance

### Building Evaluation Frameworks

1. Define quality dimensions relevant to your use case
2. Create rubrics with clear, actionable level descriptions
3. Build test sets from real usage patterns and edge cases
4. Implement automated evaluation pipelines
5. Establish baseline metrics before making changes
6. Run evaluations on all significant changes
7. Track metrics over time for trend analysis
8. Supplement automated evaluation with human review

### Avoiding Evaluation Pitfalls

Overfitting to specific paths: Evaluate outcomes, not specific steps.
Ignoring edge cases: Include diverse test scenarios.
Single-metric obsession: Use multi-dimensional rubrics.
Neglecting context effects: Test with realistic context sizes.
Skipping human evaluation: Automated evaluation misses subtle issues.

#### Imported: Integration

This skill connects to all other skills as a cross-cutting concern:

- context-fundamentals - Evaluating context usage
- context-degradation - Detecting degradation
- context-optimization - Measuring optimization effectiveness
- multi-agent-patterns - Evaluating coordination
- tool-design - Evaluating tool effectiveness
- memory-systems - Evaluating memory quality

#### Imported: Skill Metadata

**Created**: 2025-12-20
**Last Updated**: 2025-12-20
**Author**: Agent Skills for Context Engineering Contributors
**Version**: 1.0.0
