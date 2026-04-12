---
name: agent-orchestration-improve-agent
description: "Agent Performance Optimization Workflow workflow skill. Use this skill when the user needs Systematic improvement of existing agents through performance analysis, prompt engineering, and continuous iteration and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["agent-orchestration-improve-agent", "systematic", "improvement", "existing", "performance", "analysis", "prompt", "engineering"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Agent Performance Optimization Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/agent-orchestration-improve-agent` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Agent Performance Optimization Workflow Systematic improvement of existing agents through performance analysis, prompt engineering, and continuous iteration. [Extended thinking: Agent optimization requires a data-driven approach combining performance metrics, user feedback analysis, and advanced prompt engineering techniques. Success depends on systematic evaluation, targeted improvements, and rigorous testing with rollback capabilities for production safety.]

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Safety, Phase 1: Performance Analysis and Baseline Metrics, Phase 2: Prompt Engineering Improvements, Phase 3: Testing and Validation, Phase 4: Version Control and Deployment, Success Criteria.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Improving an existing agent's performance or reliability
- Analyzing failure modes, prompt quality, or tool usage
- Running structured A/B tests or evaluation suites
- Designing iterative optimization workflows for agents
- You are building a brand-new agent from scratch
- There are no metrics, feedback, or test cases available

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

1. Establish baseline metrics and collect representative examples.
2. Identify failure modes and prioritize high-impact fixes.
3. Apply prompt and workflow improvements with measurable goals.
4. Validate with tests and roll out changes in controlled stages.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

1. Establish baseline metrics and collect representative examples.
2. Identify failure modes and prioritize high-impact fixes.
3. Apply prompt and workflow improvements with measurable goals.
4. Validate with tests and roll out changes in controlled stages.

#### Imported: Safety

- Avoid deploying prompt changes without regression testing.
- Roll back quickly if quality or safety metrics regress.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @agent-orchestration-improve-agent to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/agent-orchestration-improve-agent/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/agent-orchestration-improve-agent/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @agent-orchestration-improve-agent using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/agent-orchestration-improve-agent`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Phase 1: Performance Analysis and Baseline Metrics

Comprehensive analysis of agent performance using context-manager for historical data collection.

### 1.1 Gather Performance Data

```
Use: context-manager
Command: analyze-agent-performance $ARGUMENTS --days 30
```

Collect metrics including:

- Task completion rate (successful vs failed tasks)
- Response accuracy and factual correctness
- Tool usage efficiency (correct tools, call frequency)
- Average response time and token consumption
- User satisfaction indicators (corrections, retries)
- Hallucination incidents and error patterns

### 1.2 User Feedback Pattern Analysis

Identify recurring patterns in user interactions:

- **Correction patterns**: Where users consistently modify outputs
- **Clarification requests**: Common areas of ambiguity
- **Task abandonment**: Points where users give up
- **Follow-up questions**: Indicators of incomplete responses
- **Positive feedback**: Successful patterns to preserve

### 1.3 Failure Mode Classification

Categorize failures by root cause:

- **Instruction misunderstanding**: Role or task confusion
- **Output format errors**: Structure or formatting issues
- **Context loss**: Long conversation degradation
- **Tool misuse**: Incorrect or inefficient tool selection
- **Constraint violations**: Safety or business rule breaches
- **Edge case handling**: Unusual input scenarios

### 1.4 Baseline Performance Report

Generate quantitative baseline metrics:

```
Performance Baseline:
- Task Success Rate: [X%]
- Average Corrections per Task: [Y]
- Tool Call Efficiency: [Z%]
- User Satisfaction Score: [1-10]
- Average Response Latency: [Xms]
- Token Efficiency Ratio: [X:Y]
```

#### Imported: Phase 2: Prompt Engineering Improvements

Apply advanced prompt optimization techniques using prompt-engineer agent.

### 2.1 Chain-of-Thought Enhancement

Implement structured reasoning patterns:

```
Use: prompt-engineer
Technique: chain-of-thought-optimization
```

- Add explicit reasoning steps: "Let's approach this step-by-step..."
- Include self-verification checkpoints: "Before proceeding, verify that..."
- Implement recursive decomposition for complex tasks
- Add reasoning trace visibility for debugging

### 2.2 Few-Shot Example Optimization

Curate high-quality examples from successful interactions:

- **Select diverse examples** covering common use cases
- **Include edge cases** that previously failed
- **Show both positive and negative examples** with explanations
- **Order examples** from simple to complex
- **Annotate examples** with key decision points

Example structure:

```
Good Example:
Input: [User request]
Reasoning: [Step-by-step thought process]
Output: [Successful response]
Why this works: [Key success factors]

Bad Example:
Input: [Similar request]
Output: [Failed response]
Why this fails: [Specific issues]
Correct approach: [Fixed version]
```

### 2.3 Role Definition Refinement

Strengthen agent identity and capabilities:

- **Core purpose**: Clear, single-sentence mission
- **Expertise domains**: Specific knowledge areas
- **Behavioral traits**: Personality and interaction style
- **Tool proficiency**: Available tools and when to use them
- **Constraints**: What the agent should NOT do
- **Success criteria**: How to measure task completion

### 2.4 Constitutional AI Integration

Implement self-correction mechanisms:

```
Constitutional Principles:
1. Verify factual accuracy before responding
2. Self-check for potential biases or harmful content
3. Validate output format matches requirements
4. Ensure response completeness
5. Maintain consistency with previous responses
```

Add critique-and-revise loops:

- Initial response generation
- Self-critique against principles
- Automatic revision if issues detected
- Final validation before output

### 2.5 Output Format Tuning

Optimize response structure:

- **Structured templates** for common tasks
- **Dynamic formatting** based on complexity
- **Progressive disclosure** for detailed information
- **Markdown optimization** for readability
- **Code block formatting** with syntax highlighting
- **Table and list generation** for data presentation

#### Imported: Phase 3: Testing and Validation

Comprehensive testing framework with A/B comparison.

### 3.1 Test Suite Development

Create representative test scenarios:

```
Test Categories:
1. Golden path scenarios (common successful cases)
2. Previously failed tasks (regression testing)
3. Edge cases and corner scenarios
4. Stress tests (complex, multi-step tasks)
5. Adversarial inputs (potential breaking points)
6. Cross-domain tasks (combining capabilities)
```

### 3.2 A/B Testing Framework

Compare original vs improved agent:

```
Use: parallel-test-runner
Config:
  - Agent A: Original version
  - Agent B: Improved version
  - Test set: 100 representative tasks
  - Metrics: Success rate, speed, token usage
  - Evaluation: Blind human review + automated scoring
```

Statistical significance testing:

- Minimum sample size: 100 tasks per variant
- Confidence level: 95% (p < 0.05)
- Effect size calculation (Cohen's d)
- Power analysis for future tests

### 3.3 Evaluation Metrics

Comprehensive scoring framework:

**Task-Level Metrics:**

- Completion rate (binary success/failure)
- Correctness score (0-100% accuracy)
- Efficiency score (steps taken vs optimal)
- Tool usage appropriateness
- Response relevance and completeness

**Quality Metrics:**

- Hallucination rate (factual errors per response)
- Consistency score (alignment with previous responses)
- Format compliance (matches specified structure)
- Safety score (constraint adherence)
- User satisfaction prediction

**Performance Metrics:**

- Response latency (time to first token)
- Total generation time
- Token consumption (input + output)
- Cost per task (API usage fees)
- Memory/context efficiency

### 3.4 Human Evaluation Protocol

Structured human review process:

- Blind evaluation (evaluators don't know version)
- Standardized rubric with clear criteria
- Multiple evaluators per sample (inter-rater reliability)
- Qualitative feedback collection
- Preference ranking (A vs B comparison)

#### Imported: Phase 4: Version Control and Deployment

Safe rollout with monitoring and rollback capabilities.

### 4.1 Version Management

Systematic versioning strategy:

```
Version Format: agent-name-v[MAJOR].[MINOR].[PATCH]
Example: customer-support-v2.3.1

MAJOR: Significant capability changes
MINOR: Prompt improvements, new examples
PATCH: Bug fixes, minor adjustments
```

Maintain version history:

- Git-based prompt storage
- Changelog with improvement details
- Performance metrics per version
- Rollback procedures documented

### 4.2 Staged Rollout

Progressive deployment strategy:

1. **Alpha testing**: Internal team validation (5% traffic)
2. **Beta testing**: Selected users (20% traffic)
3. **Canary release**: Gradual increase (20% → 50% → 100%)
4. **Full deployment**: After success criteria met
5. **Monitoring period**: 7-day observation window

### 4.3 Rollback Procedures

Quick recovery mechanism:

```
Rollback Triggers:
- Success rate drops >10% from baseline
- Critical errors increase >5%
- User complaints spike
- Cost per task increases >20%
- Safety violations detected

Rollback Process:
1. Detect issue via monitoring
2. Alert team immediately
3. Switch to previous stable version
4. Analyze root cause
5. Fix and re-test before retry
```

### 4.4 Continuous Monitoring

Real-time performance tracking:

- Dashboard with key metrics
- Anomaly detection alerts
- User feedback collection
- Automated regression testing
- Weekly performance reports

#### Imported: Success Criteria

Agent improvement is successful when:

- Task success rate improves by ≥15%
- User corrections decrease by ≥25%
- No increase in safety violations
- Response time remains within 10% of baseline
- Cost per task doesn't increase >5%
- Positive user feedback increases

#### Imported: Post-Deployment Review

After 30 days of production use:

1. Analyze accumulated performance data
2. Compare against baseline and targets
3. Identify new improvement opportunities
4. Document lessons learned
5. Plan next optimization cycle

#### Imported: Continuous Improvement Cycle

Establish regular improvement cadence:

- **Weekly**: Monitor metrics and collect feedback
- **Monthly**: Analyze patterns and plan improvements
- **Quarterly**: Major version updates with new capabilities
- **Annually**: Strategic review and architecture updates

Remember: Agent optimization is an iterative process. Each cycle builds upon previous learnings, gradually improving performance while maintaining stability and safety.
