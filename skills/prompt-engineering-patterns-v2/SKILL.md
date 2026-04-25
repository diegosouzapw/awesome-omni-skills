---
name: prompt-engineering-patterns-v2
description: "Prompt Engineering Patterns workflow skill. Use this skill when the user needs Master advanced prompt engineering techniques to maximize LLM performance, reliability, and controllability and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["prompt-engineering-patterns-v2", "prompt-engineering-patterns", "master", "advanced", "prompt", "engineering", "techniques", "maximize"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Prompt Engineering Patterns

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/prompt-engineering-patterns` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Prompt Engineering Patterns Master advanced prompt engineering techniques to maximize LLM performance, reliability, and controllability.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Capabilities, Key Patterns, Common Pitfalls, Integration Patterns, Performance Optimization, Success Metrics.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to prompt engineering patterns
- You need a different domain or tool outside this scope
- Designing complex prompts for production LLM applications
- Optimizing prompt performance and consistency
- Implementing structured reasoning patterns (chain-of-thought, tree-of-thought)
- Building few-shot learning systems with dynamic example selection

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/chain-of-thought.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/few-shot-learning.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Review the prompt template library for common patterns
6. Experiment with few-shot learning for your specific use case
7. Implement prompt versioning and A/B testing

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Next Steps

1. Review the prompt template library for common patterns
2. Experiment with few-shot learning for your specific use case
3. Implement prompt versioning and A/B testing
4. Set up automated evaluation pipelines
5. Document your prompt engineering decisions and learnings

#### Imported: Core Capabilities

### 1. Few-Shot Learning
- Example selection strategies (semantic similarity, diversity sampling)
- Balancing example count with context window constraints
- Constructing effective demonstrations with input-output pairs
- Dynamic example retrieval from knowledge bases
- Handling edge cases through strategic example selection

### 2. Chain-of-Thought Prompting
- Step-by-step reasoning elicitation
- Zero-shot CoT with "Let's think step by step"
- Few-shot CoT with reasoning traces
- Self-consistency techniques (sampling multiple reasoning paths)
- Verification and validation steps

### 3. Prompt Optimization
- Iterative refinement workflows
- A/B testing prompt variations
- Measuring prompt performance metrics (accuracy, consistency, latency)
- Reducing token usage while maintaining quality
- Handling edge cases and failure modes

### 4. Template Systems
- Variable interpolation and formatting
- Conditional prompt sections
- Multi-turn conversation templates
- Role-based prompt composition
- Modular prompt components

### 5. System Prompt Design
- Setting model behavior and constraints
- Defining output formats and structure
- Establishing role and expertise
- Safety guidelines and content policies
- Context setting and background information

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @prompt-engineering-patterns-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @prompt-engineering-patterns-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @prompt-engineering-patterns-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @prompt-engineering-patterns-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

```python
from prompt_optimizer import PromptTemplate, FewShotSelector

# Define a structured prompt template
template = PromptTemplate(
    system="You are an expert SQL developer. Generate efficient, secure SQL queries.",
    instruction="Convert the following natural language query to SQL:\n{query}",
    few_shot_examples=True,
    output_format="SQL code block with explanatory comments"
)

# Configure few-shot learning
selector = FewShotSelector(
    examples_db="sql_examples.jsonl",
    selection_strategy="semantic_similarity",
    max_examples=3
)

# Generate optimized prompt
prompt = template.render(
    query="Find all users who registered in the last 30 days",
    examples=selector.select(query="user registration date filter")
)
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Be Specific: Vague prompts produce inconsistent results
- Show, Don't Tell: Examples are more effective than descriptions
- Test Extensively: Evaluate on diverse, representative inputs
- Iterate Rapidly: Small changes can have large impacts
- Monitor Performance: Track metrics in production
- Version Control: Treat prompts as code with proper versioning
- Document Intent: Explain why prompts are structured as they are

### Imported Operating Notes

#### Imported: Best Practices

1. **Be Specific**: Vague prompts produce inconsistent results
2. **Show, Don't Tell**: Examples are more effective than descriptions
3. **Test Extensively**: Evaluate on diverse, representative inputs
4. **Iterate Rapidly**: Small changes can have large impacts
5. **Monitor Performance**: Track metrics in production
6. **Version Control**: Treat prompts as code with proper versioning
7. **Document Intent**: Explain why prompts are structured as they are

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/prompt-engineering-patterns`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@product-design-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@product-inventor-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@product-manager-toolkit-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@product-manager-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/chain-of-thought.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/optimize-prompt.py` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/few-shot-examples.json` |

- [chain-of-thought.md](references/chain-of-thought.md)
- [few-shot-learning.md](references/few-shot-learning.md)
- [prompt-optimization.md](references/prompt-optimization.md)
- [prompt-templates.md](references/prompt-templates.md)
- [optimize-prompt.py](scripts/optimize-prompt.py)
- [few-shot-examples.json](assets/few-shot-examples.json)
- [prompt-template-library.md](assets/prompt-template-library.md)

### Imported Reference Notes

#### Imported: Resources

- **references/few-shot-learning.md**: Deep dive on example selection and construction
- **references/chain-of-thought.md**: Advanced reasoning elicitation techniques
- **references/prompt-optimization.md**: Systematic refinement workflows
- **references/prompt-templates.md**: Reusable template patterns
- **references/system-prompts.md**: System-level prompt design
- **assets/prompt-template-library.md**: Battle-tested prompt templates
- **assets/few-shot-examples.json**: Curated example datasets
- **scripts/optimize-prompt.py**: Automated prompt optimization tool

#### Imported: Key Patterns

### Progressive Disclosure
Start with simple prompts, add complexity only when needed:

1. **Level 1**: Direct instruction
   - "Summarize this article"

2. **Level 2**: Add constraints
   - "Summarize this article in 3 bullet points, focusing on key findings"

3. **Level 3**: Add reasoning
   - "Read this article, identify the main findings, then summarize in 3 bullet points"

4. **Level 4**: Add examples
   - Include 2-3 example summaries with input-output pairs

### Instruction Hierarchy
```
[System Context] → [Task Instruction] → [Examples] → [Input Data] → [Output Format]
```

### Error Recovery
Build prompts that gracefully handle failures:
- Include fallback instructions
- Request confidence scores
- Ask for alternative interpretations when uncertain
- Specify how to indicate missing information

#### Imported: Common Pitfalls

- **Over-engineering**: Starting with complex prompts before trying simple ones
- **Example pollution**: Using examples that don't match the target task
- **Context overflow**: Exceeding token limits with excessive examples
- **Ambiguous instructions**: Leaving room for multiple interpretations
- **Ignoring edge cases**: Not testing on unusual or boundary inputs

#### Imported: Integration Patterns

### With RAG Systems
```python
# Combine retrieved context with prompt engineering
prompt = f"""Given the following context:
{retrieved_context}

{few_shot_examples}

Question: {user_question}

Provide a detailed answer based solely on the context above. If the context doesn't contain enough information, explicitly state what's missing."""
```

### With Validation
```python
# Add self-verification step
prompt = f"""{main_task_prompt}

After generating your response, verify it meets these criteria:
1. Answers the question directly
2. Uses only information from provided context
3. Cites specific sources
4. Acknowledges any uncertainty

If verification fails, revise your response."""
```

#### Imported: Performance Optimization

### Token Efficiency
- Remove redundant words and phrases
- Use abbreviations consistently after first definition
- Consolidate similar instructions
- Move stable content to system prompts

### Latency Reduction
- Minimize prompt length without sacrificing quality
- Use streaming for long-form outputs
- Cache common prompt prefixes
- Batch similar requests when possible

#### Imported: Success Metrics

Track these KPIs for your prompts:
- **Accuracy**: Correctness of outputs
- **Consistency**: Reproducibility across similar inputs
- **Latency**: Response time (P50, P95, P99)
- **Token Usage**: Average tokens per request
- **Success Rate**: Percentage of valid outputs
- **User Satisfaction**: Ratings and feedback

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
