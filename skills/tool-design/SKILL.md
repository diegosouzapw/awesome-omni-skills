---
name: tool-design
description: "Tool Design for Agents workflow skill. Use this skill when the user needs Build tools that agents can use effectively, including architectural reduction patterns. Use when creating new tools for agent systems, debugging tool-related failures or misuse, or optimizing existing tool sets for better agent performance and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["tool-design", "build", "tools", "can", "use", "effectively", "including", "architectural"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Tool Design for Agents

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/tool-design` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Detailed Topics, Practical Guidance, Integration, Skill Metadata, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating new tools for agent systems
- Debugging tool-related failures or misuse
- Optimizing existing tool sets for better agent performance
- Designing tool APIs from scratch
- Evaluating third-party tools for agent integration
- Standardizing tool conventions across a codebase

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Core Concepts

Tools are contracts between deterministic systems and non-deterministic agents. The consolidation principle states that if a human engineer cannot definitively say which tool should be used in a given situation, an agent cannot be expected to do better. Effective tool descriptions are prompt engineering that shapes agent behavior.

Key principles include: clear descriptions that answer what, when, and what returns; response formats that balance completeness and token efficiency; error messages that enable recovery; and consistent conventions that reduce cognitive load.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @tool-design to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @tool-design against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @tool-design for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @tool-design using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

**Example 1: Well-Designed Tool**
```python
def get_customer(customer_id: str, format: str = "concise"):
    """
    Retrieve customer information by ID.
    
    Use when:
    - User asks about specific customer details
    - Need customer context for decision-making
    - Verifying customer identity
    
    Args:
        customer_id: Format "CUST-######" (e.g., "CUST-000001")
        format: "concise" for key fields, "detailed" for complete record
    
    Returns:
        Customer object with requested fields
    
    Errors:
        NOT_FOUND: Customer ID not found
        INVALID_FORMAT: ID must match CUST-###### pattern
    """
```

**Example 2: Poor Tool Design**

This example demonstrates several tool design anti-patterns:

```python
def search(query):
    """Search the database."""
    pass
```

**Problems with this design:**

1. **Vague name**: "search" is ambiguous - search what, for what purpose?
2. **Missing parameters**: What database? What format should query take?
3. **No return description**: What does this function return? A list? A string? Error handling?
4. **No usage context**: When should an agent use this versus other tools?
5. **No error handling**: What happens if the database is unavailable?

**Failure modes:**
- Agents may call this tool when they should use a more specific tool
- Agents cannot determine correct query format
- Agents cannot interpret results
- Agents cannot recover from failures

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Write descriptions that answer what, when, and what returns
- Use consolidation to reduce ambiguity
- Implement response format options for token efficiency
- Design error messages for agent recovery
- Establish and follow consistent naming conventions
- Limit tool count and use namespacing for organization
- Test tool designs with actual agent interactions

### Imported Operating Notes

#### Imported: Guidelines

1. Write descriptions that answer what, when, and what returns
2. Use consolidation to reduce ambiguity
3. Implement response format options for token efficiency
4. Design error messages for agent recovery
5. Establish and follow consistent naming conventions
6. Limit tool count and use namespacing for organization
7. Test tool designs with actual agent interactions
8. Iterate based on observed failure modes
9. Question whether each tool enables or constrains the model
10. Prefer primitive, general-purpose tools over specialized wrappers
11. Invest in documentation quality over tooling sophistication
12. Build minimal architectures that benefit from model improvements

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/tool-design`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: References

Internal references:
- Best Practices Reference - Detailed tool design guidelines
- Architectural Reduction Case Study - Production evidence for tool minimalism

Related skills in this collection:
- context-fundamentals - Tool context interactions
- evaluation - Tool testing patterns

External resources:
- MCP (Model Context Protocol) documentation
- Framework tool conventions
- API design best practices for agents
- Vercel d0 agent architecture case study

---

#### Imported: Detailed Topics

### The Tool-Agent Interface

**Tools as Contracts**
Tools are contracts between deterministic systems and non-deterministic agents. When humans call APIs, they understand the contract and make appropriate requests. Agents must infer the contract from descriptions and generate calls that match expected formats.

This fundamental difference requires rethinking API design. The contract must be unambiguous, examples must illustrate expected patterns, and error messages must guide correction. Every ambiguity in tool definitions becomes a potential failure mode.

**Tool Description as Prompt**
Tool descriptions are loaded into agent context and collectively steer behavior. The descriptions are not just documentation—they are prompt engineering that shapes how agents reason about tool use.

Poor descriptions like "Search the database" with cryptic parameter names force agents to guess. Optimized descriptions include usage context, examples, and defaults. The description answers: what the tool does, when to use it, and what it produces.

**Namespacing and Organization**
As tool collections grow, organization becomes critical. Namespacing groups related tools under common prefixes, helping agents select appropriate tools at the right time.

Namespacing creates clear boundaries between functionality. When an agent needs database information, it routes to the database namespace. When it needs web search, it routes to web namespace.

### The Consolidation Principle

**Single Comprehensive Tools**
The consolidation principle states that if a human engineer cannot definitively say which tool should be used in a given situation, an agent cannot be expected to do better. This leads to a preference for single comprehensive tools over multiple narrow tools.

Instead of implementing list_users, list_events, and create_event, implement schedule_event that finds availability and schedules. The comprehensive tool handles the full workflow internally rather than requiring agents to chain multiple calls.

**Why Consolidation Works**
Agents have limited context and attention. Each tool in the collection competes for attention in the tool selection phase. Each tool adds description tokens that consume context budget. Overlapping functionality creates ambiguity about which tool to use.

Consolidation reduces token consumption by eliminating redundant descriptions. It eliminates ambiguity by having one tool cover each workflow. It reduces tool selection complexity by shrinking the effective tool set.

**When Not to Consolidate**
Consolidation is not universally correct. Tools with fundamentally different behaviors should remain separate. Tools used in different contexts benefit from separation. Tools that might be called independently should not be artificially bundled.

### Architectural Reduction

The consolidation principle, taken to its logical extreme, leads to architectural reduction: removing most specialized tools in favor of primitive, general-purpose capabilities. Production evidence shows this approach can outperform sophisticated multi-tool architectures.

**The File System Agent Pattern**
Instead of building custom tools for data exploration, schema lookup, and query validation, provide direct file system access through a single command execution tool. The agent uses standard Unix utilities (grep, cat, find, ls) to explore, understand, and operate on your system.

This works because:
1. File systems are a proven abstraction that models understand deeply
2. Standard tools have predictable, well-documented behavior
3. The agent can chain primitives flexibly rather than being constrained to predefined workflows
4. Good documentation in files replaces the need for summarization tools

**When Reduction Outperforms Complexity**
Reduction works when:
- Your data layer is well-documented and consistently structured
- The model has sufficient reasoning capability to navigate complexity
- Your specialized tools were constraining rather than enabling the model
- You're spending more time maintaining scaffolding than improving outcomes

Reduction fails when:
- Your underlying data is messy, inconsistent, or poorly documented
- The domain requires specialized knowledge the model lacks
- Safety constraints require limiting what the agent can do
- Operations are truly complex and benefit from structured workflows

**Stop Constraining Reasoning**
A common anti-pattern is building tools to "protect" the model from complexity. Pre-filtering context, constraining options, wrapping interactions in validation logic. These guardrails often become liabilities as models improve.

The question to ask: are your tools enabling new capabilities, or are they constraining reasoning the model could handle on its own?

**Build for Future Models**
Models improve faster than tooling can keep up. An architecture optimized for today's model may be over-constrained for tomorrow's. Build minimal architectures that can benefit from model improvements rather than sophisticated architectures that lock in current limitations.

See Architectural Reduction Case Study for production evidence.

### Tool Description Engineering

**Description Structure**
Effective tool descriptions answer four questions:

What does the tool do? Clear, specific description of functionality. Avoid vague language like "helps with" or "can be used for." State exactly what the tool accomplishes.

When should it be used? Specific triggers and contexts. Include both direct triggers ("User asks about pricing") and indirect signals ("Need current market rates").

What inputs does it accept? Parameter descriptions with types, constraints, and defaults. Explain what each parameter controls.

What does it return? Output format and structure. Include examples of successful responses and error conditions.

**Default Parameter Selection**
Defaults should reflect common use cases. They reduce agent burden by eliminating unnecessary parameter specification. They prevent errors from omitted parameters.

### Response Format Optimization

Tool response size significantly impacts context usage. Implementing response format options gives agents control over verbosity.

Concise format returns essential fields only, appropriate for confirmation or basic information. Detailed format returns complete objects with all fields, appropriate when full context is needed for decisions.

Include guidance in tool descriptions about when to use each format. Agents learn to select appropriate formats based on task requirements.

### Error Message Design

Error messages serve two audiences: developers debugging issues and agents recovering from failures. For agents, error messages must be actionable. They must tell the agent what went wrong and how to correct it.

Design error messages that enable recovery. For retryable errors, include retry guidance. For input errors, include corrected format. For missing data, include what's needed.

### Tool Definition Schema

Use a consistent schema across all tools. Establish naming conventions: verb-noun pattern for tool names, consistent parameter names across tools, consistent return field names.

### Tool Collection Design

Research shows tool description overlap causes model confusion. More tools do not always lead to better outcomes. A reasonable guideline is 10-20 tools for most applications. If more are needed, use namespacing to create logical groupings.

Implement mechanisms to help agents select the right tool: tool grouping, example-based selection, and hierarchy with umbrella tools that route to specialized sub-tools.

### MCP Tool Naming Requirements

When using MCP (Model Context Protocol) tools, always use fully qualified tool names to avoid "tool not found" errors.

Format: `ServerName:tool_name`

```python
# Correct: Fully qualified names
"Use the BigQuery:bigquery_schema tool to retrieve table schemas."
"Use the GitHub:create_issue tool to create issues."

# Incorrect: Unqualified names
"Use the bigquery_schema tool..."  # May fail with multiple servers
```

Without the server prefix, agents may fail to locate tools, especially when multiple MCP servers are available. Establish naming conventions that include server context in all tool references.

### Using Agents to Optimize Tools

Claude can optimize its own tools. When given a tool and observed failure modes, it diagnoses issues and suggests improvements. Production testing shows this approach achieves 40% reduction in task completion time by helping future agents avoid mistakes.

**The Tool-Testing Agent Pattern**:

```python
def optimize_tool_description(tool_spec, failure_examples):
    """
    Use an agent to analyze tool failures and improve descriptions.
    
    Process:
    1. Agent attempts to use tool across diverse tasks
    2. Collect failure modes and friction points
    3. Agent analyzes failures and proposes improvements
    4. Test improved descriptions against same tasks
    """
    prompt = f"""
    Analyze this tool specification and the observed failures.
    
    Tool: {tool_spec}
    
    Failures observed:
    {failure_examples}
    
    Identify:
    1. Why agents are failing with this tool
    2. What information is missing from the description
    3. What ambiguities cause incorrect usage
    
    Propose an improved tool description that addresses these issues.
    """
    
    return get_agent_response(prompt)
```

This creates a feedback loop: agents using tools generate failure data, which agents then use to improve tool descriptions, which reduces future failures.

### Testing Tool Design

Evaluate tool designs against criteria: unambiguity, completeness, recoverability, efficiency, and consistency. Test tools by presenting representative agent requests and evaluating the resulting tool calls.

#### Imported: Practical Guidance

### Anti-Patterns to Avoid

Vague descriptions: "Search the database for customer information" leaves too many questions unanswered.

Cryptic parameter names: Parameters named x, val, or param1 force agents to guess meaning.

Missing error handling: Tools that fail with generic errors provide no recovery guidance.

Inconsistent naming: Using id in some tools, identifier in others, and customer_id in some creates confusion.

### Tool Selection Framework

When designing tool collections:
1. Identify distinct workflows agents must accomplish
2. Group related actions into comprehensive tools
3. Ensure each tool has a clear, unambiguous purpose
4. Document error cases and recovery paths
5. Test with actual agent interactions

#### Imported: Integration

This skill connects to:
- context-fundamentals - How tools interact with context
- multi-agent-patterns - Specialized tools per agent
- evaluation - Evaluating tool effectiveness

#### Imported: Skill Metadata

**Created**: 2025-12-20
**Last Updated**: 2025-12-23
**Author**: Agent Skills for Context Engineering Contributors
**Version**: 1.1.0

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
