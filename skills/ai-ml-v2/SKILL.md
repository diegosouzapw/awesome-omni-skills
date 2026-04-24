---
name: ai-ml-v2
description: "AI/ML Workflow Bundle workflow skill. Use this skill when the user needs AI and machine learning workflow covering LLM application development, RAG implementation, agent architecture, ML pipelines, and AI-powered features and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["ai-ml-v2", "ai-ml", "and", "machine", "learning", "covering", "llm", "application"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# AI/ML Workflow Bundle

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/ai-ml` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# AI/ML Workflow Bundle

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: AI Development Checklist, Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Building LLM-powered applications
- Implementing RAG (Retrieval-Augmented Generation)
- Creating AI agents
- Developing ML pipelines
- Adding AI features to applications
- Setting up AI observability

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

1. ai-product - AI product development
2. ai-engineer - AI engineering
3. ai-agents-architect - Agent architecture
4. llm-app-patterns - LLM patterns
5. Define AI use cases
6. Choose appropriate models
7. Design system architecture

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: AI Application Design

#### Skills to Invoke
- `ai-product` - AI product development
- `ai-engineer` - AI engineering
- `ai-agents-architect` - Agent architecture
- `llm-app-patterns` - LLM patterns

#### Actions
1. Define AI use cases
2. Choose appropriate models
3. Design system architecture
4. Plan data flows
5. Define success metrics

#### Copy-Paste Prompts
```
Use @ai-product to design AI-powered features
```

```
Use @ai-agents-architect to design multi-agent system
```

### Phase 2: LLM Integration

#### Skills to Invoke
- `llm-application-dev-ai-assistant` - AI assistant development
- `llm-application-dev-langchain-agent` - LangChain agents
- `llm-application-dev-prompt-optimize` - Prompt engineering
- `gemini-api-dev` - Gemini API

#### Actions
1. Select LLM provider
2. Set up API access
3. Implement prompt templates
4. Configure model parameters
5. Add streaming support
6. Implement error handling

#### Copy-Paste Prompts
```
Use @llm-application-dev-ai-assistant to build conversational AI
```

```
Use @llm-application-dev-langchain-agent to create LangChain agents
```

```
Use @llm-application-dev-prompt-optimize to optimize prompts
```

### Phase 3: RAG Implementation

#### Skills to Invoke
- `rag-engineer` - RAG engineering
- `rag-implementation` - RAG implementation
- `embedding-strategies` - Embedding selection
- `vector-database-engineer` - Vector databases
- `similarity-search-patterns` - Similarity search
- `hybrid-search-implementation` - Hybrid search

#### Actions
1. Design data pipeline
2. Choose embedding model
3. Set up vector database
4. Implement chunking strategy
5. Configure retrieval
6. Add reranking
7. Implement caching

#### Copy-Paste Prompts
```
Use @rag-engineer to design RAG pipeline
```

```
Use @vector-database-engineer to set up vector search
```

```
Use @embedding-strategies to select optimal embeddings
```

### Phase 4: AI Agent Development

#### Skills to Invoke
- `autonomous-agents` - Autonomous agent patterns
- `autonomous-agent-patterns` - Agent patterns
- `crewai` - CrewAI framework
- `langgraph` - LangGraph
- `multi-agent-patterns` - Multi-agent systems
- `computer-use-agents` - Computer use agents

#### Actions
1. Design agent architecture
2. Define agent roles
3. Implement tool integration
4. Set up memory systems
5. Configure orchestration
6. Add human-in-the-loop

#### Copy-Paste Prompts
```
Use @crewai to build role-based multi-agent system
```

```
Use @langgraph to create stateful AI workflows
```

```
Use @autonomous-agents to design autonomous agent
```

### Phase 5: ML Pipeline Development

#### Skills to Invoke
- `ml-engineer` - ML engineering
- `mlops-engineer` - MLOps
- `machine-learning-ops-ml-pipeline` - ML pipelines
- `ml-pipeline-workflow` - ML workflows
- `data-engineer` - Data engineering

#### Actions
1. Design ML pipeline
2. Set up data processing
3. Implement model training
4. Configure evaluation
5. Set up model registry
6. Deploy models

#### Copy-Paste Prompts
```
Use @ml-engineer to build machine learning pipeline
```

```
Use @mlops-engineer to set up MLOps infrastructure
```

### Phase 6: AI Observability

#### Skills to Invoke
- `langfuse` - Langfuse observability
- `manifest` - Manifest telemetry
- `evaluation` - AI evaluation
- `llm-evaluation` - LLM evaluation

#### Actions
1. Set up tracing
2. Configure logging
3. Implement evaluation
4. Monitor performance
5. Track costs
6. Set up alerts

#### Copy-Paste Prompts
```
Use @langfuse to set up LLM observability
```

```
Use @evaluation to create evaluation framework
```

### Phase 7: AI Security

#### Skills to Invoke
- `prompt-engineering` - Prompt security
- `security-scanning-security-sast` - Security scanning

#### Actions
1. Implement input validation
2. Add output filtering
3. Configure rate limiting
4. Set up access controls
5. Monitor for abuse
6. Implement audit logging

#### Imported: Related Workflow Bundles

- `development` - Application development
- `database` - Data management
- `cloud-devops` - Infrastructure
- `testing-qa` - AI testing

#### Imported: Overview

Comprehensive AI/ML workflow for building LLM applications, implementing RAG systems, creating AI agents, and developing machine learning pipelines. This bundle orchestrates skills for production AI development.

#### Imported: AI Development Checklist

### LLM Integration
- [ ] API keys secured
- [ ] Rate limiting configured
- [ ] Error handling implemented
- [ ] Streaming enabled
- [ ] Token usage tracked

### RAG System
- [ ] Data pipeline working
- [ ] Embeddings generated
- [ ] Vector search optimized
- [ ] Retrieval accuracy tested
- [ ] Caching implemented

### AI Agents
- [ ] Agent roles defined
- [ ] Tools integrated
- [ ] Memory working
- [ ] Orchestration tested
- [ ] Error handling robust

### Observability
- [ ] Tracing enabled
- [ ] Metrics collected
- [ ] Evaluation running
- [ ] Alerts configured
- [ ] Dashboards created

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ai-ml-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ai-ml-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ai-ml-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ai-ml-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/ai-ml`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ab-test-setup-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@acceptance-orchestrator-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@accessibility-compliance-accessibility-audit-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@activecampaign-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Quality Gates

- [ ] All AI features tested
- [ ] Performance benchmarks met
- [ ] Security measures in place
- [ ] Observability configured
- [ ] Documentation complete

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
