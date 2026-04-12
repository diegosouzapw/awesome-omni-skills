---
name: prompt-library-v2
description: "\ud83d\udcdd Prompt Library workflow skill. Use this skill when the user needs A comprehensive collection of battle-tested prompts inspired by awesome-chatgpt-prompts and community best practices and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["prompt-library-v2", "prompt-library", "comprehensive", "collection", "battle-tested", "prompts", "inspired", "awesome-chatgpt-prompts"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# 📝 Prompt Library

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/prompt-library` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# 📝 Prompt Library > A comprehensive collection of battle-tested prompts inspired by awesome-chatgpt-prompts and community best practices.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prompt Categories, Prompt Engineering Techniques, Prompt Improvement Checklist.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Needs ready-to-use prompt templates
- Wants role-based prompts (act as X)
- Asks for prompt examples or inspiration
- Needs task-specific prompt patterns
- Wants to improve their prompting
- Use when the request clearly matches the imported source intent: A comprehensive collection of battle-tested prompts inspired by awesome-chatgpt-prompts and community best practices.

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

#### Imported: Prompt Categories

### 🎭 Role-Based Prompts

#### Expert Developer

```
Act as an expert software developer with 15+ years of experience. You specialize in clean code, SOLID principles, and pragmatic architecture. When reviewing code:
1. Identify bugs and potential issues
2. Suggest performance improvements
3. Recommend better patterns
4. Explain your reasoning clearly
Always prioritize readability and maintainability over cleverness.
```

#### Code Reviewer

```
Act as a senior code reviewer. Your role is to:
1. Check for bugs, edge cases, and error handling
2. Evaluate code structure and organization
3. Assess naming conventions and readability
4. Identify potential security issues
5. Suggest improvements with specific examples

Format your review as:
🔴 Critical Issues (must fix)
🟡 Suggestions (should consider)
🟢 Praise (what's done well)
```

#### Technical Writer

```
Act as a technical documentation expert. Transform complex technical concepts into clear, accessible documentation. Follow these principles:
- Use simple language, avoid jargon
- Include practical examples
- Structure with clear headings
- Add code snippets where helpful
- Consider the reader's experience level
```

#### System Architect

```
Act as a senior system architect designing for scale. Consider:
- Scalability (horizontal and vertical)
- Reliability (fault tolerance, redundancy)
- Maintainability (modularity, clear boundaries)
- Performance (latency, throughput)
- Cost efficiency

Provide architecture decisions with trade-off analysis.
```

### 🛠️ Task-Specific Prompts

#### Debug This Code

```
Debug the following code. Your analysis should include:

1. **Problem Identification**: What exactly is failing?
2. **Root Cause**: Why is it failing?
3. **Fix**: Provide corrected code
4. **Prevention**: How to prevent similar bugs

Show your debugging thought process step by step.
```

#### Explain Like I'm 5 (ELI5)

```
Explain [CONCEPT] as if I'm 5 years old. Use:
- Simple everyday analogies
- No technical jargon
- Short sentences
- Relatable examples from daily life
- A fun, engaging tone
```

#### Code Refactoring

```
Refactor this code following these priorities:
1. Readability first
2. Remove duplication (DRY)
3. Single responsibility per function
4. Meaningful names
5. Add comments only where necessary

Show before/after with explanation of changes.
```

#### Write Tests

```
Write comprehensive tests for this code:
1. Happy path scenarios
2. Edge cases
3. Error conditions
4. Boundary values

Use [FRAMEWORK] testing conventions. Include:
- Descriptive test names
- Arrange-Act-Assert pattern
- Mocking where appropriate
```

#### API Documentation

```
Generate API documentation for this endpoint including:
- Endpoint URL and method
- Request parameters (path, query, body)
- Request/response examples
- Error codes and meanings
- Authentication requirements
- Rate limits if applicable

Format as OpenAPI/Swagger or Markdown.
```

### 📊 Analysis Prompts

#### Code Complexity Analysis

```
Analyze the complexity of this codebase:

1. **Cyclomatic Complexity**: Identify complex functions
2. **Coupling**: Find tightly coupled components
3. **Cohesion**: Assess module cohesion
4. **Dependencies**: Map critical dependencies
5. **Technical Debt**: Highlight areas needing refactoring

Rate each area and provide actionable recommendations.
```

#### Performance Analysis

```
Analyze this code for performance issues:

1. **Time Complexity**: Big O analysis
2. **Space Complexity**: Memory usage patterns
3. **I/O Bottlenecks**: Database, network, disk
4. **Algorithmic Issues**: Inefficient patterns
5. **Quick Wins**: Easy optimizations

Prioritize findings by impact.
```

#### Security Review

```
Perform a security review of this code:

1. **Input Validation**: Check all inputs
2. **Authentication/Authorization**: Access control
3. **Data Protection**: Sensitive data handling
4. **Injection Vulnerabilities**: SQL, XSS, etc.
5. **Dependencies**: Known vulnerabilities

Classify issues by severity (Critical/High/Medium/Low).
```

### 🎨 Creative Prompts

#### Brainstorm Features

```
Brainstorm features for [PRODUCT]:

For each feature, provide:
- Name and one-line description
- User value proposition
- Implementation complexity (Low/Med/High)
- Dependencies on other features

Generate 10 ideas, then rank top 3 by impact/effort ratio.
```

#### Name Generator

```
Generate names for [PROJECT/FEATURE]:

Provide 10 options in these categories:
- Descriptive (what it does)
- Evocative (how it feels)
- Acronyms (memorable abbreviations)
- Metaphorical (analogies)

For each, explain the reasoning and check domain availability patterns.
```

### 🔄 Transformation Prompts

#### Migrate Code

```
Migrate this code from [SOURCE] to [TARGET]:

1. Identify equivalent constructs
2. Handle incompatible features
3. Preserve functionality exactly
4. Follow target language idioms
5. Add necessary dependencies

Show the migration step by step with explanations.
```

#### Convert Format

```
Convert this [SOURCE_FORMAT] to [TARGET_FORMAT]:

Requirements:
- Preserve all data
- Use idiomatic target format
- Handle edge cases
- Validate the output
- Provide sample verification
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @prompt-library-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/prompt-library-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/prompt-library-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @prompt-library-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/prompt-library`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Resources

- [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts)
- [prompts.chat](https://prompts.chat)
- [Learn Prompting](https://learnprompting.org/)

---

> 💡 **Tip**: The best prompts are specific, provide context, and include examples of desired output.

#### Imported: Prompt Engineering Techniques

### Chain of Thought (CoT)

```
Let's solve this step by step:
1. First, I'll understand the problem
2. Then, I'll identify the key components
3. Next, I'll work through the logic
4. Finally, I'll verify the solution

[Your question here]
```

### Few-Shot Learning

```
Here are some examples of the task:

Example 1:
Input: [example input 1]
Output: [example output 1]

Example 2:
Input: [example input 2]
Output: [example output 2]

Now complete this:
Input: [actual input]
Output:
```

### Persona Pattern

```
You are [PERSONA] with [TRAITS].
Your communication style is [STYLE].
You prioritize [VALUES].

When responding:
- [Behavior 1]
- [Behavior 2]
- [Behavior 3]
```

### Structured Output

```
Respond in the following JSON format:
{
  "analysis": "your analysis here",
  "recommendations": ["rec1", "rec2"],
  "confidence": 0.0-1.0,
  "caveats": ["caveat1"]
}
```

#### Imported: Prompt Improvement Checklist

When crafting prompts, ensure:

- [ ] **Clear objective**: What exactly do you want?
- [ ] **Context provided**: Background information included?
- [ ] **Format specified**: How should output be structured?
- [ ] **Examples given**: Are there reference examples?
- [ ] **Constraints defined**: Any limitations or requirements?
- [ ] **Success criteria**: How do you measure good output?
