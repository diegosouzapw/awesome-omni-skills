---
name: langchain-architecture-v2
description: "LangChain Architecture workflow skill. Use this skill when the user needs Master the LangChain framework for building sophisticated LLM applications with agents, chains, memory, and tool integration and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["langchain-architecture-v2", "langchain-architecture", "master", "the", "langchain", "framework", "for", "building"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-17"
date_updated: "2026-04-24"
---

# LangChain Architecture

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/langchain-architecture` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# LangChain Architecture Master the LangChain framework for building sophisticated LLM applications with agents, chains, memory, and tool integration.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Architecture Patterns, Memory Management Best Practices, Callback System, Testing Strategies, Performance Optimization.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to langchain architecture
- You need a different domain or tool outside this scope
- Building autonomous AI agents with tool access
- Implementing complex multi-step LLM workflows
- Managing conversation memory and state
- Integrating LLMs with external data sources and APIs

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

#### Imported: Core Concepts

### 1. Agents
Autonomous systems that use LLMs to decide which actions to take.

**Agent Types:**
- **ReAct**: Reasoning + Acting in interleaved manner
- **OpenAI Functions**: Leverages function calling API
- **Structured Chat**: Handles multi-input tools
- **Conversational**: Optimized for chat interfaces
- **Self-Ask with Search**: Decomposes complex queries

### 2. Chains
Sequences of calls to LLMs or other utilities.

**Chain Types:**
- **LLMChain**: Basic prompt + LLM combination
- **SequentialChain**: Multiple chains in sequence
- **RouterChain**: Routes inputs to specialized chains
- **TransformChain**: Data transformations between steps
- **MapReduceChain**: Parallel processing with aggregation

### 3. Memory
Systems for maintaining context across interactions.

**Memory Types:**
- **ConversationBufferMemory**: Stores all messages
- **ConversationSummaryMemory**: Summarizes older messages
- **ConversationBufferWindowMemory**: Keeps last N messages
- **EntityMemory**: Tracks information about entities
- **VectorStoreMemory**: Semantic similarity retrieval

### 4. Document Processing
Loading, transforming, and storing documents for retrieval.

**Components:**
- **Document Loaders**: Load from various sources
- **Text Splitters**: Chunk documents intelligently
- **Vector Stores**: Store and retrieve embeddings
- **Retrievers**: Fetch relevant documents
- **Indexes**: Organize documents for efficient access

### 5. Callbacks
Hooks for logging, monitoring, and debugging.

**Use Cases:**
- Request/response logging
- Token usage tracking
- Latency monitoring
- Error handling
- Custom metrics collection

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @langchain-architecture-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @langchain-architecture-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @langchain-architecture-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @langchain-architecture-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

```python
from langchain.agents import AgentType, initialize_agent, load_tools
from langchain.llms import OpenAI
from langchain.memory import ConversationBufferMemory

# Initialize LLM
llm = OpenAI(temperature=0)

# Load tools
tools = load_tools(["serpapi", "llm-math"], llm=llm)

# Add memory
memory = ConversationBufferMemory(memory_key="chat_history")

# Create agent
agent = initialize_agent(
    tools,
    llm,
    agent=AgentType.CONVERSATIONAL_REACT_DESCRIPTION,
    memory=memory,
    verbose=True
)

# Run agent
result = agent.run("What's the weather in SF? Then calculate 25 * 4")
```

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/langchain-architecture`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@interactive-portfolio-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@intercom-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@internal-comms-anthropic-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@internal-comms-community-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Resources

- **references/agents.md**: Deep dive on agent architectures
- **references/memory.md**: Memory system patterns
- **references/chains.md**: Chain composition strategies
- **references/document-processing.md**: Document loading and indexing
- **references/callbacks.md**: Monitoring and observability
- **assets/agent-template.py**: Production-ready agent template
- **assets/memory-config.yaml**: Memory configuration examples
- **assets/chain-example.py**: Complex chain examples

#### Imported: Architecture Patterns

### Pattern 1: RAG with LangChain
```python
from langchain.chains import RetrievalQA
from langchain.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings

# Load and process documents
loader = TextLoader('documents.txt')
documents = loader.load()

text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
texts = text_splitter.split_documents(documents)

# Create vector store
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(texts, embeddings)

# Create retrieval chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vectorstore.as_retriever(),
    return_source_documents=True
)

# Query
result = qa_chain({"query": "What is the main topic?"})
```

### Pattern 2: Custom Agent with Tools
```python
from langchain.agents import Tool, AgentExecutor
from langchain.agents.react.base import ReActDocstoreAgent
from langchain.tools import tool

@tool
def search_database(query: str) -> str:
    """Search internal database for information."""
    # Your database search logic
    return f"Results for: {query}"

@tool
def send_email(recipient: str, content: str) -> str:
    """Send an email to specified recipient."""
    # Email sending logic
    return f"Email sent to {recipient}"

tools = [search_database, send_email]

agent = initialize_agent(
    tools,
    llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)
```

### Pattern 3: Multi-Step Chain
```python
from langchain.chains import LLMChain, SequentialChain
from langchain.prompts import PromptTemplate

# Step 1: Extract key information
extract_prompt = PromptTemplate(
    input_variables=["text"],
    template="Extract key entities from: {text}\n\nEntities:"
)
extract_chain = LLMChain(llm=llm, prompt=extract_prompt, output_key="entities")

# Step 2: Analyze entities
analyze_prompt = PromptTemplate(
    input_variables=["entities"],
    template="Analyze these entities: {entities}\n\nAnalysis:"
)
analyze_chain = LLMChain(llm=llm, prompt=analyze_prompt, output_key="analysis")

# Step 3: Generate summary
summary_prompt = PromptTemplate(
    input_variables=["entities", "analysis"],
    template="Summarize:\nEntities: {entities}\nAnalysis: {analysis}\n\nSummary:"
)
summary_chain = LLMChain(llm=llm, prompt=summary_prompt, output_key="summary")

# Combine into sequential chain
overall_chain = SequentialChain(
    chains=[extract_chain, analyze_chain, summary_chain],
    input_variables=["text"],
    output_variables=["entities", "analysis", "summary"],
    verbose=True
)
```

#### Imported: Memory Management Best Practices

### Choosing the Right Memory Type
```python
# For short conversations (< 10 messages)
from langchain.memory import ConversationBufferMemory
memory = ConversationBufferMemory()

# For long conversations (summarize old messages)
from langchain.memory import ConversationSummaryMemory
memory = ConversationSummaryMemory(llm=llm)

# For sliding window (last N messages)
from langchain.memory import ConversationBufferWindowMemory
memory = ConversationBufferWindowMemory(k=5)

# For entity tracking
from langchain.memory import ConversationEntityMemory
memory = ConversationEntityMemory(llm=llm)

# For semantic retrieval of relevant history
from langchain.memory import VectorStoreRetrieverMemory
memory = VectorStoreRetrieverMemory(retriever=retriever)
```

#### Imported: Callback System

### Custom Callback Handler
```python
from langchain.callbacks.base import BaseCallbackHandler

class CustomCallbackHandler(BaseCallbackHandler):
    def on_llm_start(self, serialized, prompts, **kwargs):
        print(f"LLM started with prompts: {prompts}")

    def on_llm_end(self, response, **kwargs):
        print(f"LLM ended with response: {response}")

    def on_llm_error(self, error, **kwargs):
        print(f"LLM error: {error}")

    def on_chain_start(self, serialized, inputs, **kwargs):
        print(f"Chain started with inputs: {inputs}")

    def on_agent_action(self, action, **kwargs):
        print(f"Agent taking action: {action}")

# Use callback
agent.run("query", callbacks=[CustomCallbackHandler()])
```

#### Imported: Testing Strategies

```python
import pytest
from unittest.mock import Mock

def test_agent_tool_selection():
    # Mock LLM to return specific tool selection
    mock_llm = Mock()
    mock_llm.predict.return_value = "Action: search_database\nAction Input: test query"

    agent = initialize_agent(tools, mock_llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION)

    result = agent.run("test query")

    # Verify correct tool was selected
    assert "search_database" in str(mock_llm.predict.call_args)

def test_memory_persistence():
    memory = ConversationBufferMemory()

    memory.save_context({"input": "Hi"}, {"output": "Hello!"})

    assert "Hi" in memory.load_memory_variables({})['history']
    assert "Hello!" in memory.load_memory_variables({})['history']
```

#### Imported: Performance Optimization

### 1. Caching
```python
from langchain.cache import InMemoryCache
import langchain

langchain.llm_cache = InMemoryCache()
```

### 2. Batch Processing
```python
# Process multiple documents in parallel
from langchain.document_loaders import DirectoryLoader
from concurrent.futures import ThreadPoolExecutor

loader = DirectoryLoader('./docs')
docs = loader.load()

def process_doc(doc):
    return text_splitter.split_documents([doc])

with ThreadPoolExecutor(max_workers=4) as executor:
    split_docs = list(executor.map(process_doc, docs))
```

### 3. Streaming Responses
```python
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler

llm = OpenAI(streaming=True, callbacks=[StreamingStdOutCallbackHandler()])
```

#### Imported: Common Pitfalls

1. **Memory Overflow**: Not managing conversation history length
2. **Tool Selection Errors**: Poor tool descriptions confuse agents
3. **Context Window Exceeded**: Exceeding LLM token limits
4. **No Error Handling**: Not catching and handling agent failures
5. **Inefficient Retrieval**: Not optimizing vector store queries

#### Imported: Production Checklist

- [ ] Implement proper error handling
- [ ] Add request/response logging
- [ ] Monitor token usage and costs
- [ ] Set timeout limits for agent execution
- [ ] Implement rate limiting
- [ ] Add input validation
- [ ] Test with edge cases
- [ ] Set up observability (callbacks)
- [ ] Implement fallback strategies
- [ ] Version control prompts and configurations

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
