---
name: llm-app-patterns
description: "\ud83e\udd16 LLM Application Patterns workflow skill. Use this skill when the user needs Production-ready patterns for building LLM applications, inspired by Dify and industry best practices and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["llm-app-patterns", "production-ready", "patterns", "for", "building", "llm", "applications", "inspired"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# 🤖 LLM Application Patterns

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/llm-app-patterns` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# 🤖 LLM Application Patterns > Production-ready patterns for building LLM applications, inspired by Dify and industry best practices.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 1. RAG Pipeline Architecture, 2. Agent Architectures, 3. Prompt IDE Patterns, 4. LLMOps & Observability, 5. Production Patterns, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Designing LLM-powered applications
- Implementing RAG (Retrieval-Augmented Generation)
- Building AI agents with tools
- Setting up LLMOps monitoring
- Choosing between agent architectures
- Use when the request clearly matches the imported source intent: Production-ready patterns for building LLM applications, inspired by Dify and industry best practices.

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: 1. RAG Pipeline Architecture

### Overview

RAG (Retrieval-Augmented Generation) grounds LLM responses in your data.

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Ingest    │────▶│   Retrieve  │────▶│   Generate  │
│  Documents  │     │   Context   │     │   Response  │
└─────────────┘     └─────────────┘     └─────────────┘
      │                   │                   │
      ▼                   ▼                   ▼
 ┌─────────┐       ┌───────────┐       ┌───────────┐
 │ Chunking│       │  Vector   │       │    LLM    │
 │Embedding│       │  Search   │       │  + Context│
 └─────────┘       └───────────┘       └───────────┘
```

### 1.1 Document Ingestion

```python
# Chunking strategies
class ChunkingStrategy:
    # Fixed-size chunks (simple but may break context)
    FIXED_SIZE = "fixed_size"  # e.g., 512 tokens

    # Semantic chunking (preserves meaning)
    SEMANTIC = "semantic"      # Split on paragraphs/sections

    # Recursive splitting (tries multiple separators)
    RECURSIVE = "recursive"    # ["\n\n", "\n", " ", ""]

    # Document-aware (respects structure)
    DOCUMENT_AWARE = "document_aware"  # Headers, lists, etc.

# Recommended settings
CHUNK_CONFIG = {
    "chunk_size": 512,       # tokens
    "chunk_overlap": 50,     # token overlap between chunks
    "separators": ["\n\n", "\n", ". ", " "],
}
```

### 1.2 Embedding & Storage

```python
# Vector database selection
VECTOR_DB_OPTIONS = {
    "pinecone": {
        "use_case": "Production, managed service",
        "scale": "Billions of vectors",
        "features": ["Hybrid search", "Metadata filtering"]
    },
    "weaviate": {
        "use_case": "Self-hosted, multi-modal",
        "scale": "Millions of vectors",
        "features": ["GraphQL API", "Modules"]
    },
    "chromadb": {
        "use_case": "Development, prototyping",
        "scale": "Thousands of vectors",
        "features": ["Simple API", "In-memory option"]
    },
    "pgvector": {
        "use_case": "Existing Postgres infrastructure",
        "scale": "Millions of vectors",
        "features": ["SQL integration", "ACID compliance"]
    }
}

# Embedding model selection
EMBEDDING_MODELS = {
    "openai/text-embedding-3-small": {
        "dimensions": 1536,
        "cost": "$0.02/1M tokens",
        "quality": "Good for most use cases"
    },
    "openai/text-embedding-3-large": {
        "dimensions": 3072,
        "cost": "$0.13/1M tokens",
        "quality": "Best for complex queries"
    },
    "local/bge-large": {
        "dimensions": 1024,
        "cost": "Free (compute only)",
        "quality": "Comparable to OpenAI small"
    }
}
```

### 1.3 Retrieval Strategies

```python
# Basic semantic search
def semantic_search(query: str, top_k: int = 5):
    query_embedding = embed(query)
    results = vector_db.similarity_search(
        query_embedding,
        top_k=top_k
    )
    return results

# Hybrid search (semantic + keyword)
def hybrid_search(query: str, top_k: int = 5, alpha: float = 0.5):
    """
    alpha=1.0: Pure semantic
    alpha=0.0: Pure keyword (BM25)
    alpha=0.5: Balanced
    """
    semantic_results = vector_db.similarity_search(query)
    keyword_results = bm25_search(query)

    # Reciprocal Rank Fusion
    return rrf_merge(semantic_results, keyword_results, alpha)

# Multi-query retrieval
def multi_query_retrieval(query: str):
    """Generate multiple query variations for better recall"""
    queries = llm.generate_query_variations(query, n=3)
    all_results = []
    for q in queries:
        all_results.extend(semantic_search(q))
    return deduplicate(all_results)

# Contextual compression
def compressed_retrieval(query: str):
    """Retrieve then compress to relevant parts only"""
    docs = semantic_search(query, top_k=10)
    compressed = llm.extract_relevant_parts(docs, query)
    return compressed
```

### 1.4 Generation with Context

```python
RAG_PROMPT_TEMPLATE = """
Answer the user's question based ONLY on the following context.
If the context doesn't contain enough information, say "I don't have enough information to answer that."

Context:
{context}

Question: {question}

Answer:"""

def generate_with_rag(question: str):
    # Retrieve
    context_docs = hybrid_search(question, top_k=5)
    context = "\n\n".join([doc.content for doc in context_docs])

    # Generate
    prompt = RAG_PROMPT_TEMPLATE.format(
        context=context,
        question=question
    )

    response = llm.generate(prompt)

    # Return with citations
    return {
        "answer": response,
        "sources": [doc.metadata for doc in context_docs]
    }
```

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @llm-app-patterns to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @llm-app-patterns against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @llm-app-patterns for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @llm-app-patterns using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/llm-app-patterns`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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

#### Imported: Architecture Decision Matrix

| Pattern              | Use When         | Complexity | Cost      |
| :------------------- | :--------------- | :--------- | :-------- |
| **Simple RAG**       | FAQ, docs search | Low        | Low       |
| **Hybrid RAG**       | Mixed queries    | Medium     | Medium    |
| **ReAct Agent**      | Multi-step tasks | Medium     | Medium    |
| **Function Calling** | Structured tools | Low        | Low       |
| **Plan-Execute**     | Complex tasks    | High       | High      |
| **Multi-Agent**      | Research tasks   | Very High  | Very High |

---

#### Imported: Resources

- [Dify Platform](https://github.com/langgenius/dify)
- [LangChain Docs](https://python.langchain.com/)
- [LlamaIndex](https://www.llamaindex.ai/)
- [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)

#### Imported: 2. Agent Architectures

### 2.1 ReAct Pattern (Reasoning + Acting)

```
Thought: I need to search for information about X
Action: search("X")
Observation: [search results]
Thought: Based on the results, I should...
Action: calculate(...)
Observation: [calculation result]
Thought: I now have enough information
Action: final_answer("The answer is...")
```

```python
REACT_PROMPT = """
You are an AI assistant that can use tools to answer questions.

Available tools:
{tools_description}

Use this format:
Thought: [your reasoning about what to do next]
Action: [tool_name(arguments)]
Observation: [tool result - this will be filled in]
... (repeat Thought/Action/Observation as needed)
Thought: I have enough information to answer
Final Answer: [your final response]

Question: {question}
"""

class ReActAgent:
    def __init__(self, tools: list, llm):
        self.tools = {t.name: t for t in tools}
        self.llm = llm
        self.max_iterations = 10

    def run(self, question: str) -> str:
        prompt = REACT_PROMPT.format(
            tools_description=self._format_tools(),
            question=question
        )

        for _ in range(self.max_iterations):
            response = self.llm.generate(prompt)

            if "Final Answer:" in response:
                return self._extract_final_answer(response)

            action = self._parse_action(response)
            observation = self._execute_tool(action)
            prompt += f"\nObservation: {observation}\n"

        return "Max iterations reached"
```

### 2.2 Function Calling Pattern

```python
# Define tools as functions with schemas
TOOLS = [
    {
        "name": "search_web",
        "description": "Search the web for current information",
        "parameters": {
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "Search query"
                }
            },
            "required": ["query"]
        }
    },
    {
        "name": "calculate",
        "description": "Perform mathematical calculations",
        "parameters": {
            "type": "object",
            "properties": {
                "expression": {
                    "type": "string",
                    "description": "Math expression to evaluate"
                }
            },
            "required": ["expression"]
        }
    }
]

class FunctionCallingAgent:
    def run(self, question: str) -> str:
        messages = [{"role": "user", "content": question}]

        while True:
            response = self.llm.chat(
                messages=messages,
                tools=TOOLS,
                tool_choice="auto"
            )

            if response.tool_calls:
                for tool_call in response.tool_calls:
                    result = self._execute_tool(
                        tool_call.name,
                        tool_call.arguments
                    )
                    messages.append({
                        "role": "tool",
                        "tool_call_id": tool_call.id,
                        "content": str(result)
                    })
            else:
                return response.content
```

### 2.3 Plan-and-Execute Pattern

```python
class PlanAndExecuteAgent:
    """
    1. Create a plan (list of steps)
    2. Execute each step
    3. Replan if needed
    """

    def run(self, task: str) -> str:
        # Planning phase
        plan = self.planner.create_plan(task)
        # Returns: ["Step 1: ...", "Step 2: ...", ...]

        results = []
        for step in plan:
            # Execute each step
            result = self.executor.execute(step, context=results)
            results.append(result)

            # Check if replan needed
            if self._needs_replan(task, results):
                new_plan = self.planner.replan(
                    task,
                    completed=results,
                    remaining=plan[len(results):]
                )
                plan = new_plan

        # Synthesize final answer
        return self.synthesizer.summarize(task, results)
```

### 2.4 Multi-Agent Collaboration

```python
class AgentTeam:
    """
    Specialized agents collaborating on complex tasks
    """

    def __init__(self):
        self.agents = {
            "researcher": ResearchAgent(),
            "analyst": AnalystAgent(),
            "writer": WriterAgent(),
            "critic": CriticAgent()
        }
        self.coordinator = CoordinatorAgent()

    def solve(self, task: str) -> str:
        # Coordinator assigns subtasks
        assignments = self.coordinator.decompose(task)

        results = {}
        for assignment in assignments:
            agent = self.agents[assignment.agent]
            result = agent.execute(
                assignment.subtask,
                context=results
            )
            results[assignment.id] = result

        # Critic reviews
        critique = self.agents["critic"].review(results)

        if critique.needs_revision:
            # Iterate with feedback
            return self.solve_with_feedback(task, results, critique)

        return self.coordinator.synthesize(results)
```

---

#### Imported: 3. Prompt IDE Patterns

### 3.1 Prompt Templates with Variables

```python
class PromptTemplate:
    def __init__(self, template: str, variables: list[str]):
        self.template = template
        self.variables = variables

    def format(self, **kwargs) -> str:
        # Validate all variables provided
        missing = set(self.variables) - set(kwargs.keys())
        if missing:
            raise ValueError(f"Missing variables: {missing}")

        return self.template.format(**kwargs)

    def with_examples(self, examples: list[dict]) -> str:
        """Add few-shot examples"""
        example_text = "\n\n".join([
            f"Input: {ex['input']}\nOutput: {ex['output']}"
            for ex in examples
        ])
        return f"{example_text}\n\n{self.template}"

# Usage
summarizer = PromptTemplate(
    template="Summarize the following text in {style} style:\n\n{text}",
    variables=["style", "text"]
)

prompt = summarizer.format(
    style="professional",
    text="Long article content..."
)
```

### 3.2 Prompt Versioning & A/B Testing

```python
class PromptRegistry:
    def __init__(self, db):
        self.db = db

    def register(self, name: str, template: str, version: str):
        """Store prompt with version"""
        self.db.save({
            "name": name,
            "template": template,
            "version": version,
            "created_at": datetime.now(),
            "metrics": {}
        })

    def get(self, name: str, version: str = "latest") -> str:
        """Retrieve specific version"""
        return self.db.get(name, version)

    def ab_test(self, name: str, user_id: str) -> str:
        """Return variant based on user bucket"""
        variants = self.db.get_all_versions(name)
        bucket = hash(user_id) % len(variants)
        return variants[bucket]

    def record_outcome(self, prompt_id: str, outcome: dict):
        """Track prompt performance"""
        self.db.update_metrics(prompt_id, outcome)
```

### 3.3 Prompt Chaining

```python
class PromptChain:
    """
    Chain prompts together, passing output as input to next
    """

    def __init__(self, steps: list[dict]):
        self.steps = steps

    def run(self, initial_input: str) -> dict:
        context = {"input": initial_input}
        results = []

        for step in self.steps:
            prompt = step["prompt"].format(**context)
            output = llm.generate(prompt)

            # Parse output if needed
            if step.get("parser"):
                output = step"parser"

            context[step["output_key"]] = output
            results.append({
                "step": step["name"],
                "output": output
            })

        return {
            "final_output": context[self.steps[-1]["output_key"]],
            "intermediate_results": results
        }

# Example: Research → Analyze → Summarize
chain = PromptChain([
    {
        "name": "research",
        "prompt": "Research the topic: {input}",
        "output_key": "research"
    },
    {
        "name": "analyze",
        "prompt": "Analyze these findings:\n{research}",
        "output_key": "analysis"
    },
    {
        "name": "summarize",
        "prompt": "Summarize this analysis in 3 bullet points:\n{analysis}",
        "output_key": "summary"
    }
])
```

---

#### Imported: 4. LLMOps & Observability

### 4.1 Metrics to Track

```python
LLM_METRICS = {
    # Performance
    "latency_p50": "50th percentile response time",
    "latency_p99": "99th percentile response time",
    "tokens_per_second": "Generation speed",

    # Quality
    "user_satisfaction": "Thumbs up/down ratio",
    "task_completion": "% tasks completed successfully",
    "hallucination_rate": "% responses with factual errors",

    # Cost
    "cost_per_request": "Average $ per API call",
    "tokens_per_request": "Average tokens used",
    "cache_hit_rate": "% requests served from cache",

    # Reliability
    "error_rate": "% failed requests",
    "timeout_rate": "% requests that timed out",
    "retry_rate": "% requests needing retry"
}
```

### 4.2 Logging & Tracing

```python
import logging
from opentelemetry import trace

tracer = trace.get_tracer(__name__)

class LLMLogger:
    def log_request(self, request_id: str, data: dict):
        """Log LLM request for debugging and analysis"""
        log_entry = {
            "request_id": request_id,
            "timestamp": datetime.now().isoformat(),
            "model": data["model"],
            "prompt": data["prompt"][:500],  # Truncate for storage
            "prompt_tokens": data["prompt_tokens"],
            "temperature": data.get("temperature", 1.0),
            "user_id": data.get("user_id"),
        }
        logging.info(f"LLM_REQUEST: {json.dumps(log_entry)}")

    def log_response(self, request_id: str, data: dict):
        """Log LLM response"""
        log_entry = {
            "request_id": request_id,
            "completion_tokens": data["completion_tokens"],
            "total_tokens": data["total_tokens"],
            "latency_ms": data["latency_ms"],
            "finish_reason": data["finish_reason"],
            "cost_usd": self._calculate_cost(data),
        }
        logging.info(f"LLM_RESPONSE: {json.dumps(log_entry)}")

# Distributed tracing
@tracer.start_as_current_span("llm_call")
def call_llm(prompt: str) -> str:
    span = trace.get_current_span()
    span.set_attribute("prompt.length", len(prompt))

    response = llm.generate(prompt)

    span.set_attribute("response.length", len(response))
    span.set_attribute("tokens.total", response.usage.total_tokens)

    return response.content
```

### 4.3 Evaluation Framework

```python
class LLMEvaluator:
    """
    Evaluate LLM outputs for quality
    """

    def evaluate_response(self,
                          question: str,
                          response: str,
                          ground_truth: str = None) -> dict:
        scores = {}

        # Relevance: Does it answer the question?
        scores["relevance"] = self._score_relevance(question, response)

        # Coherence: Is it well-structured?
        scores["coherence"] = self._score_coherence(response)

        # Groundedness: Is it based on provided context?
        scores["groundedness"] = self._score_groundedness(response)

        # Accuracy: Does it match ground truth?
        if ground_truth:
            scores["accuracy"] = self._score_accuracy(response, ground_truth)

        # Harmfulness: Is it safe?
        scores["safety"] = self._score_safety(response)

        return scores

    def run_benchmark(self, test_cases: list[dict]) -> dict:
        """Run evaluation on test set"""
        results = []
        for case in test_cases:
            response = llm.generate(case["prompt"])
            scores = self.evaluate_response(
                question=case["prompt"],
                response=response,
                ground_truth=case.get("expected")
            )
            results.append(scores)

        return self._aggregate_scores(results)
```

---

#### Imported: 5. Production Patterns

### 5.1 Caching Strategy

```python
import hashlib
from functools import lru_cache

class LLMCache:
    def __init__(self, redis_client, ttl_seconds=3600):
        self.redis = redis_client
        self.ttl = ttl_seconds

    def _cache_key(self, prompt: str, model: str, **kwargs) -> str:
        """Generate deterministic cache key"""
        content = f"{model}:{prompt}:{json.dumps(kwargs, sort_keys=True)}"
        return hashlib.sha256(content.encode()).hexdigest()

    def get_or_generate(self, prompt: str, model: str, **kwargs) -> str:
        key = self._cache_key(prompt, model, **kwargs)

        # Check cache
        cached = self.redis.get(key)
        if cached:
            return cached.decode()

        # Generate
        response = llm.generate(prompt, model=model, **kwargs)

        # Cache (only cache deterministic outputs)
        if kwargs.get("temperature", 1.0) == 0:
            self.redis.setex(key, self.ttl, response)

        return response
```

### 5.2 Rate Limiting & Retry

```python
import time
from tenacity import retry, wait_exponential, stop_after_attempt

class RateLimiter:
    def __init__(self, requests_per_minute: int):
        self.rpm = requests_per_minute
        self.timestamps = []

    def acquire(self):
        """Wait if rate limit would be exceeded"""
        now = time.time()

        # Remove old timestamps
        self.timestamps = [t for t in self.timestamps if now - t < 60]

        if len(self.timestamps) >= self.rpm:
            sleep_time = 60 - (now - self.timestamps[0])
            time.sleep(sleep_time)

        self.timestamps.append(time.time())

# Retry with exponential backoff
@retry(
    wait=wait_exponential(multiplier=1, min=4, max=60),
    stop=stop_after_attempt(5)
)
def call_llm_with_retry(prompt: str) -> str:
    try:
        return llm.generate(prompt)
    except RateLimitError:
        raise  # Will trigger retry
    except APIError as e:
        if e.status_code >= 500:
            raise  # Retry server errors
        raise  # Don't retry client errors
```

### 5.3 Fallback Strategy

```python
class LLMWithFallback:
    def __init__(self, primary: str, fallbacks: list[str]):
        self.primary = primary
        self.fallbacks = fallbacks

    def generate(self, prompt: str, **kwargs) -> str:
        models = [self.primary] + self.fallbacks

        for model in models:
            try:
                return llm.generate(prompt, model=model, **kwargs)
            except (RateLimitError, APIError) as e:
                logging.warning(f"Model {model} failed: {e}")
                continue

        raise AllModelsFailedError("All models exhausted")

# Usage
llm_client = LLMWithFallback(
    primary="gpt-4-turbo",
    fallbacks=["gpt-3.5-turbo", "claude-3-sonnet"]
)
```

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
