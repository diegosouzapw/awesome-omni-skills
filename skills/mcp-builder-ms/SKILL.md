---
name: mcp-builder-ms
description: "MCP Server Development Guide workflow skill. Use this skill when the user needs building MCP servers to integrate external APIs or services, whether in Python (FastMCP) or Node/TypeScript (MCP SDK) and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["mcp-builder-ms", "building", "mcp", "servers", "integrate", "external", "apis", "services"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# MCP Server Development Guide

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/mcp-builder-ms` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# MCP Server Development Guide

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Microsoft MCP Ecosystem, 📚 Documentation Library, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use this skill when building MCP servers to integrate external APIs or services, whether in Python (FastMCP) or Node/TypeScript (MCP SDK).
- Use when the request clearly matches the imported source intent: building MCP servers to integrate external APIs or services, whether in Python (FastMCP) or Node/TypeScript (MCP SDK).
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Specification overview and architecture
2. Transport mechanisms (streamable HTTP, stdio)
3. Tool, resource, and prompt definitions
4. Language - Best For - SDK
5. TypeScript (recommended) - General MCP servers, broad compatibility - @modelcontextprotocol/sdk
6. Python - Data/ML pipelines, FastAPI integration - mcp (FastMCP)
7. C#/.NET - Azure/Microsoft ecosystem, enterprise - Microsoft.Mcp.Core

### Imported Workflow Notes

#### Imported: 🚀 High-Level Workflow

Creating a high-quality MCP server involves four main phases:

### Phase 1: Deep Research and Planning

#### 1.1 Understand Modern MCP Design

**API Coverage vs. Workflow Tools:**
Balance comprehensive API endpoint coverage with specialized workflow tools. Workflow tools can be more convenient for specific tasks, while comprehensive coverage gives agents flexibility to compose operations. Performance varies by client—some clients benefit from code execution that combines basic tools, while others work better with higher-level workflows. When uncertain, prioritize comprehensive API coverage.

**Tool Naming and Discoverability:**
Clear, descriptive tool names help agents find the right tools quickly. Use consistent prefixes (e.g., `github_create_issue`, `github_list_repos`) and action-oriented naming.

**Context Management:**
Agents benefit from concise tool descriptions and the ability to filter/paginate results. Design tools that return focused, relevant data. Some clients support code execution which can help agents filter and process data efficiently.

**Actionable Error Messages:**
Error messages should guide agents toward solutions with specific suggestions and next steps.

#### 1.2 Study MCP Protocol Documentation

**Navigate the MCP specification:**

Start with the sitemap to find relevant pages: `https://modelcontextprotocol.io/sitemap.xml`

Then fetch specific pages with `.md` suffix for markdown format (e.g., `https://modelcontextprotocol.io/specification/draft.md`).

Key pages to review:
- Specification overview and architecture
- Transport mechanisms (streamable HTTP, stdio)
- Tool, resource, and prompt definitions

#### 1.3 Study Framework Documentation

**Language Selection:**

| Language | Best For | SDK |
|----------|----------|-----|
| **TypeScript** (recommended) | General MCP servers, broad compatibility | `@modelcontextprotocol/sdk` |
| **Python** | Data/ML pipelines, FastAPI integration | `mcp` (FastMCP) |
| **C#/.NET** | Azure/Microsoft ecosystem, enterprise | `Microsoft.Mcp.Core` |

**Transport Selection:**

| Transport | Use Case | Characteristics |
|-----------|----------|-----------------|
| **Streamable HTTP** | Remote servers, multi-tenant, Agent Service | Stateless, scalable, requires auth |
| **stdio** | Local servers, desktop apps | Simple, single-user, no network |

**Load framework documentation:**

- **MCP Best Practices**: 📋 View Best Practices - Core guidelines

**For TypeScript (recommended):**
- **TypeScript SDK**: Use WebFetch to load `https://raw.githubusercontent.com/modelcontextprotocol/typescript-sdk/main/README.md`
- ⚡ TypeScript Guide - TypeScript patterns and examples

**For Python:**
- **Python SDK**: Use WebFetch to load `https://raw.githubusercontent.com/modelcontextprotocol/python-sdk/main/README.md`
- 🐍 Python Guide - Python patterns and examples

**For C#/.NET (Microsoft ecosystem):**
- 🔷 Microsoft MCP Patterns - C# patterns, Azure MCP architecture, command hierarchy

#### 1.4 Plan Your Implementation

**Understand the API:**
Review the service's API documentation to identify key endpoints, authentication requirements, and data models. Use web search and WebFetch as needed.

**Tool Selection:**
Prioritize comprehensive API coverage. List endpoints to implement, starting with the most common operations.

---

### Phase 2: Implementation

#### 2.1 Set Up Project Structure

See language-specific guides for project setup:
- ⚡ TypeScript Guide - Project structure, package.json, tsconfig.json
- 🐍 Python Guide - Module organization, dependencies
- 🔷 Microsoft MCP Patterns - C# project structure, command hierarchy

#### 2.2 Implement Core Infrastructure

Create shared utilities:
- API client with authentication
- Error handling helpers
- Response formatting (JSON/Markdown)
- Pagination support

#### 2.3 Implement Tools

For each tool:

**Input Schema:**
- Use Zod (TypeScript) or Pydantic (Python)
- Include constraints and clear descriptions
- Add examples in field descriptions

**Output Schema:**
- Define `outputSchema` where possible for structured data
- Use `structuredContent` in tool responses (TypeScript SDK feature)
- Helps clients understand and process tool outputs

**Tool Description:**
- Concise summary of functionality
- Parameter descriptions
- Return type schema

**Implementation:**
- Async/await for I/O operations
- Proper error handling with actionable messages
- Support pagination where applicable
- Return both text content and structured data when using modern SDKs

**Annotations:**
- `readOnlyHint`: true/false
- `destructiveHint`: true/false
- `idempotentHint`: true/false
- `openWorldHint`: true/false

---

### Phase 3: Review and Test

#### 3.1 Code Quality

Review for:
- No duplicated code (DRY principle)
- Consistent error handling
- Full type coverage
- Clear tool descriptions

#### 3.2 Build and Test

**TypeScript:**
- Run `npm run build` to verify compilation
- Test with MCP Inspector: `npx @modelcontextprotocol/inspector`

**Python:**
- Verify syntax: `python -m py_compile your_server.py`
- Test with MCP Inspector

See language-specific guides for detailed testing approaches and quality checklists.

---

### Phase 4: Create Evaluations

After implementing your MCP server, create comprehensive evaluations to test its effectiveness.

**Load ✅ Evaluation Guide for complete evaluation guidelines.**

#### 4.1 Understand Evaluation Purpose

Use evaluations to test whether LLMs can effectively use your MCP server to answer realistic, complex questions.

#### 4.2 Create 10 Evaluation Questions

To create effective evaluations, follow the process outlined in the evaluation guide:

1. **Tool Inspection**: List available tools and understand their capabilities
2. **Content Exploration**: Use READ-ONLY operations to explore available data
3. **Question Generation**: Create 10 complex, realistic questions
4. **Answer Verification**: Solve each question yourself to verify answers

#### 4.3 Evaluation Requirements

Ensure each question is:
- **Independent**: Not dependent on other questions
- **Read-only**: Only non-destructive operations required
- **Complex**: Requiring multiple tool calls and deep exploration
- **Realistic**: Based on real use cases humans would care about
- **Verifiable**: Single, clear answer that can be verified by string comparison
- **Stable**: Answer won't change over time

#### 4.4 Output Format

Create an XML file with this structure:

```xml
<evaluation>
  <qa_pair>
    <question>Find discussions about AI model launches with animal codenames. One model needed a specific safety designation that uses the format ASL-X. What number X was being determined for the model named after a spotted wild cat?</question>
    <answer>3</answer>
  </qa_pair>
<!-- More qa_pairs... -->
</evaluation>
```

---

# Reference Files

#### Imported: Overview

Create MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. The quality of an MCP server is measured by how well it enables LLMs to accomplish real-world tasks.

---

#### Imported: Microsoft MCP Ecosystem

Microsoft provides extensive MCP infrastructure for Azure and Foundry services. Understanding this ecosystem helps you decide whether to build custom servers or leverage existing ones.

### Server Types

| Type | Transport | Use Case | Example |
|------|-----------|----------|---------|
| **Local** | stdio | Desktop apps, single-user, local dev | Azure MCP Server via NPM/Docker |
| **Remote** | Streamable HTTP | Cloud services, multi-tenant, Agent Service | `https://mcp.ai.azure.com` (Foundry) |

### Microsoft MCP Servers

Before building a custom server, check if Microsoft already provides one:

| Server | Type | Description |
|--------|------|-------------|
| **Azure MCP** | Local | 48+ Azure services (Storage, KeyVault, Cosmos, SQL, etc.) |
| **Foundry MCP** | Remote | `https://mcp.ai.azure.com` - Models, deployments, evals, agents |
| **Fabric MCP** | Local | Microsoft Fabric APIs, OneLake, item definitions |
| **Playwright MCP** | Local | Browser automation and testing |
| **GitHub MCP** | Remote | `https://api.githubcopilot.com/mcp` |

**Full ecosystem:** See 🔷 Microsoft MCP Patterns for complete server catalog and patterns.

### When to Use Microsoft vs Custom

| Scenario | Recommendation |
|----------|----------------|
| Azure service integration | Use **Azure MCP Server** (48 services covered) |
| AI Foundry agents/evals | Use **Foundry MCP** remote server |
| Custom internal APIs | Build **custom server** (this guide) |
| Third-party SaaS integration | Build **custom server** (this guide) |
| Extending Azure MCP | Follow Microsoft MCP Patterns

---

# Process

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @mcp-builder-ms to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @mcp-builder-ms against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @mcp-builder-ms for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @mcp-builder-ms using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/mcp-builder-ms`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@linear-claude-skill` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linkedin-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linkedin-cli` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linkedin-profile-optimizer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 📚 Documentation Library

Load these resources as needed during development:

### Core MCP Documentation (Load First)
- **MCP Protocol**: Start with sitemap at `https://modelcontextprotocol.io/sitemap.xml`, then fetch specific pages with `.md` suffix
- 📋 MCP Best Practices - Universal MCP guidelines including:
  - Server and tool naming conventions
  - Response format guidelines (JSON vs Markdown)
  - Pagination best practices
  - Transport selection (streamable HTTP vs stdio)
  - Security and error handling standards

### Microsoft MCP Documentation (For Azure/Foundry)
- 🔷 Microsoft MCP Patterns - Microsoft-specific patterns including:
  - Azure MCP Server architecture (48+ Azure services)
  - C#/.NET command implementation patterns
  - Remote MCP with Foundry Agent Service
  - Authentication (Entra ID, OBO flow, Managed Identity)
  - Testing infrastructure with Bicep templates

### SDK Documentation (Load During Phase 1/2)
- **Python SDK**: Fetch from `https://raw.githubusercontent.com/modelcontextprotocol/python-sdk/main/README.md`
- **TypeScript SDK**: Fetch from `https://raw.githubusercontent.com/modelcontextprotocol/typescript-sdk/main/README.md`
- **Microsoft MCP SDK**: See Microsoft MCP Patterns for C#/.NET

### Language-Specific Implementation Guides (Load During Phase 2)
- 🐍 Python Implementation Guide - Complete Python/FastMCP guide with:
  - Server initialization patterns
  - Pydantic model examples
  - Tool registration with `@mcp.tool`
  - Complete working examples
  - Quality checklist

- ⚡ TypeScript Implementation Guide - Complete TypeScript guide with:
  - Project structure
  - Zod schema patterns
  - Tool registration with `server.registerTool`
  - Complete working examples
  - Quality checklist

- 🔷 Microsoft MCP Patterns - Complete C#/.NET guide with:
  - Command hierarchy (BaseCommand → GlobalCommand → SubscriptionCommand)
  - Naming conventions (`{Resource}{Operation}Command`)
  - Option handling with `.AsRequired()` / `.AsOptional()`
  - Azure Functions remote MCP deployment
  - Live test patterns with Bicep

### Evaluation Guide (Load During Phase 4)
- ✅ Evaluation Guide - Complete evaluation creation guide with:
  - Question creation guidelines
  - Answer verification strategies
  - XML format specifications
  - Example questions and answers
  - Running an evaluation with the provided scripts

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
