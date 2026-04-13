---
name: autonomous-agents-v2
description: "Autonomous Agents workflow skill. Use this skill when the user needs Autonomous agents are AI systems that can independently decompose and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["autonomous-agents-v2", "autonomous-agents", "autonomous", "are", "systems", "can", "independently", "decompose"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Autonomous Agents

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/autonomous-agents` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Autonomous Agents Autonomous agents are AI systems that can independently decompose goals, plan actions, execute tools, and self-correct without constant human guidance. The challenge isn't making them capable - it's making them reliable. Every extra decision multiplies failure probability. This skill covers agent loops (ReAct, Plan-Execute), goal decomposition, reflection patterns, and production reliability. Key insight: compounding error rates kill autonomous agents. A 95% success rate per step drops to 60% by step 10. Build for reliability first, autonomy second. 2025 lesson: The winners are constrained, domain-specific agents with clear boundaries, not "autonomous everything." Treat AI outputs as proposals, not truth.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Scope, Tooling, Patterns, Basic ReAct Implementation, LangGraph ReAct (Production).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: autonomous agent
- User mentions or implies: autogpt
- User mentions or implies: babyagi
- User mentions or implies: self-prompting
- User mentions or implies: goal decomposition
- User mentions or implies: react pattern

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

1. # Combine steps where possible # Prefer fewer, more capable steps over many small ones # Use structured outputs (JSON schemas) # Add validation at each step # Use better models for critical steps
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Reduce step count

# Combine steps where possible
# Prefer fewer, more capable steps over many small ones

#### Imported: Increase per-step reliability

# Use structured outputs (JSON schemas)
# Add validation at each step
# Use better models for critical steps

#### Imported: Capabilities

- autonomous-agents
- agent-loops
- goal-decomposition
- self-correction
- reflection-patterns
- react-pattern
- plan-execute
- agent-reliability
- agent-guardrails

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @autonomous-agents-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/autonomous-agents-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/autonomous-agents-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @autonomous-agents-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Track context usage

class ContextManager:
    def __init__(self, max_tokens=100000):
        self.max_tokens = max_tokens
        self.messages = []

    def add(self, message):
        self.messages.append(message)
        self.maybe_compact()

    def maybe_compact(self):
        if self.token_count() > self.max_tokens * 0.8:
            self.compact()

    def compact(self):
        # Always keep: system prompt
        system = self.messages[0]

        # Always keep: last N messages
        recent = self.messages[-10:]

        # Summarize: everything else
        middle = self.messages[1:-10]
        if middle:
            summary = summarize_messages(middle)
            self.messages = [system, summary] + recent

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Reliability over autonomy - every step compounds error probability
- Constrain scope - domain-specific beats general-purpose
- Treat outputs as proposals, not truth
- Build guardrails before expanding capabilities
- Human-in-the-loop for critical decisions is non-negotiable
- Log everything - every action must be auditable
- Fail safely with rollback, not silently with corruption

### Imported Operating Notes

#### Imported: Principles

- Reliability over autonomy - every step compounds error probability
- Constrain scope - domain-specific beats general-purpose
- Treat outputs as proposals, not truth
- Build guardrails before expanding capabilities
- Human-in-the-loop for critical decisions is non-negotiable
- Log everything - every action must be auditable
- Fail safely with rollback, not silently with corruption

#### Imported: Multi-Layer Guardrails

"""
class GuardedAgent:
    def __init__(self, agent, config):
        self.agent = agent
        self.max_cost = config.get("max_cost_usd", 1.0)
        self.max_steps = config.get("max_steps", 10)
        self.allowed_actions = config.get("allowed_actions", [])
        self.require_approval = config.get("require_approval", [])

    async def execute(self, goal):
        total_cost = 0
        steps = 0

        while steps < self.max_steps:
            # Get next action
            action = await self.agent.plan_next(goal)

            # Validate action is allowed
            if action.name not in self.allowed_actions:
                raise ActionNotAllowedError(action.name)

            # Check if approval needed
            if action.name in self.require_approval:
                approved = await self.request_human_approval(action)
                if not approved:
                    return {"status": "rejected", "action": action}

            # Estimate cost
            estimated_cost = self.estimate_cost(action)
            if total_cost + estimated_cost > self.max_cost:
                raise CostLimitExceededError(total_cost)

            # Execute with rollback capability
            checkpoint = await self.save_checkpoint()
            try:
                result = await self.agent.execute(action)
                total_cost += self.actual_cost(action)
                steps += 1
            except Exception as e:
                await self.rollback_to(checkpoint)
                raise

            if result.is_complete:
                break

        return {"status": "complete", "total_cost": total_cost}
"""

#### Imported: Least Privilege Principle

"""
# Define minimal permissions per task type
TASK_PERMISSIONS = {
    "research": ["web_search", "read_file"],
    "coding": ["read_file", "write_file", "run_tests"],
    "admin": ["all"],  # Rarely grant this
}

def create_scoped_agent(task_type):
    allowed = TASK_PERMISSIONS.get(task_type, [])
    tools = [t for t in ALL_TOOLS if t.name in allowed]
    return Agent(tools=tools)
"""

#### Imported: Least privilege principle

PERMISSIONS = {
    "research_agent": ["read_web", "read_docs"],
    "code_agent": ["read_file", "write_file", "run_tests"],
    "email_agent": ["read_email", "draft_email"],  # NOT send
    "admin_agent": ["all"],  # Rarely used
}

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/autonomous-agents`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Design for failure

class RobustAgent:
    def execute_with_retry(self, step, max_retries=3):
        for attempt in range(max_retries):
            try:
                result = step.execute()
                if self.validate(result):
                    return result
            except Exception as e:
                if attempt == max_retries - 1:
                    raise
                self.log_retry(step, attempt, e)

#### Imported: Design for partial failure

# Each step is independently recoverable
# Checkpoint before external calls
# Rollback capability for each integration

### Agent Takes Dangerous Actions

Severity: HIGH

Situation: Agent with broad permissions

Symptoms:
Agent deletes production data. Sends emails to wrong recipients.
Makes purchases without approval. Modifies settings it shouldn't.
Actions that can't be undone.

Why this breaks:
Agents optimize for their goal. Without guardrails, they'll take the
shortest path - even if that path is destructive. An agent told to
"clean up the database" might interpret that as "delete everything."

Broad permissions + autonomy + goal optimization = danger.

Recommended fix:

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

#### Imported: Scope

- multi-agent-systems → multi-agent-orchestration
- tool-building → agent-tool-builder
- memory-systems → agent-memory-systems
- workflow-orchestration → workflow-automation

#### Imported: Tooling

### Frameworks

- LangGraph - When: Production agents with state management Note: 1.0 released Oct 2025, checkpointing, human-in-loop
- AutoGPT - When: Research/experimentation, open-ended exploration Note: Needs external guardrails for production
- CrewAI - When: Role-based agent teams Note: Good for specialized agent collaboration
- Claude Agent SDK - When: Anthropic ecosystem agents Note: Computer use, tool execution

### Patterns

- ReAct - When: Reasoning + Acting in alternating steps Note: Foundation for most modern agents
- Plan-Execute - When: Separate planning from execution Note: Better for complex multi-step tasks
- Reflection - When: Self-evaluation and correction Note: Evaluator-optimizer loop

#### Imported: Patterns

### ReAct Agent Loop

Alternating reasoning and action steps

**When to use**: Interactive problem-solving, tool use, exploration

# REACT PATTERN:

"""
The ReAct loop:
1. Thought: Reason about what to do next
2. Action: Choose and execute a tool
3. Observation: Receive result
4. Repeat until goal achieved

Key: Explicit reasoning traces make debugging possible
"""

#### Imported: Basic ReAct Implementation

"""
from langchain.agents import create_react_agent
from langchain_openai import ChatOpenAI

# Define the ReAct prompt template
react_prompt = '''
Answer the question using the following format:

Question: the input question
Thought: reason about what to do
Action: tool_name
Action Input: input to the tool
Observation: result of the action
... (repeat Thought/Action/Observation as needed)
Thought: I now know the final answer
Final Answer: the answer
'''

# Create the agent
agent = create_react_agent(
    llm=ChatOpenAI(model="gpt-4o"),
    tools=tools,
    prompt=react_prompt,
)

# Execute with step limit
result = agent.invoke(
    {"input": query},
    config={"max_iterations": 10}  # Prevent runaway loops
)
"""

#### Imported: LangGraph ReAct (Production)

"""
from langgraph.prebuilt import create_react_agent
from langgraph.checkpoint.postgres import PostgresSaver

# Production checkpointer
checkpointer = PostgresSaver.from_conn_string(
    os.environ["POSTGRES_URL"]
)

agent = create_react_agent(
    model=llm,
    tools=tools,
    checkpointer=checkpointer,  # Durable state
)

# Invoke with thread for state persistence
config = {"configurable": {"thread_id": "user-123"}}
result = agent.invoke({"messages": [query]}, config)
"""

### Plan-Execute Pattern

Separate planning phase from execution

**When to use**: Complex multi-step tasks, when full plan visibility matters

# PLAN-EXECUTE PATTERN:

"""
Two-phase approach:
1. Planning: Decompose goal into subtasks
2. Execution: Execute subtasks, potentially re-plan

Advantages:
- Full visibility into plan before execution
- Can validate/modify plan with human
- Cleaner separation of concerns

Disadvantages:
- Less adaptive to mid-task discoveries
- Plan may become stale
"""

#### Imported: LangGraph Plan-Execute

"""
from langgraph.prebuilt import create_plan_and_execute_agent

# Planner creates the task list
planner_prompt = '''
For the given objective, create a step-by-step plan.
Each step should be atomic and actionable.
Format: numbered list of steps.
'''

# Executor handles individual steps
executor_prompt = '''
You are executing step {step_number} of the plan.
Previous results: {previous_results}
Current step: {current_step}
Execute this step using available tools.
'''

agent = create_plan_and_execute_agent(
    planner=planner_llm,
    executor=executor_llm,
    tools=tools,
    replan_on_error=True,  # Re-plan if step fails
)

# Human approval of plan
config = {
    "configurable": {
        "thread_id": "task-456",
    },
    "interrupt_before": ["execute"],  # Pause before execution
}

# First call creates plan
plan = agent.invoke({"objective": goal}, config)

# Review plan, then continue
if human_approves(plan):
    result = agent.invoke(None, config)  # Continue from checkpoint
"""

#### Imported: Decomposition Strategies

"""
# Decomposition-First: Plan everything, then execute
# Best for: Stable tasks, need full plan approval

# Interleaved: Plan one step, execute, repeat
# Best for: Dynamic tasks, learning as you go

def interleaved_execute(goal, max_steps=10):
    state = {"goal": goal, "completed": [], "remaining": [goal]}

    for step in range(max_steps):
        # Plan next action based on current state
        next_action = planner.plan_next(state)

        if next_action == "DONE":
            break

        # Execute and update state
        result = executor.execute(next_action)
        state["completed"].append((next_action, result))

        # Re-evaluate remaining work
        state["remaining"] = planner.reassess(state)

    return state
"""

### Reflection Pattern

Self-evaluation and iterative improvement

**When to use**: Quality matters, complex outputs, creative tasks

# REFLECTION PATTERN:

"""
Self-correction loop:
1. Generate initial output
2. Evaluate against criteria
3. Critique and identify issues
4. Refine based on critique
5. Repeat until satisfactory

Also called: Evaluator-Optimizer, Self-Critique
"""

#### Imported: Basic Reflection

"""
def reflect_and_improve(task, max_iterations=3):
    # Initial generation
    output = generator.generate(task)

    for i in range(max_iterations):
        # Evaluate output
        critique = evaluator.critique(
            task=task,
            output=output,
            criteria=[
                "Correctness",
                "Completeness",
                "Clarity",
            ]
        )

        if critique["passes_all"]:
            return output

        # Refine based on critique
        output = generator.refine(
            task=task,
            previous_output=output,
            critique=critique["feedback"],
        )

    return output  # Best effort after max iterations
"""

#### Imported: LangGraph Reflection

"""
from langgraph.graph import StateGraph

def build_reflection_graph():
    graph = StateGraph(ReflectionState)

    # Nodes
    graph.add_node("generate", generate_node)
    graph.add_node("reflect", reflect_node)
    graph.add_node("output", output_node)

    # Edges
    graph.add_edge("generate", "reflect")
    graph.add_conditional_edges(
        "reflect",
        should_continue,
        {
            "continue": "generate",  # Loop back
            "end": "output",
        }
    )

    return graph.compile()

def should_continue(state):
    if state["iteration"] >= 3:
        return "end"
    if state["score"] >= 0.9:
        return "end"
    return "continue"
"""

#### Imported: Separate Evaluator (More Robust)

"""
# Use different model for evaluation to avoid self-bias
generator = ChatOpenAI(model="gpt-4o")
evaluator = ChatOpenAI(model="gpt-4o-mini")  # Different perspective

# Or use specialized evaluators
from langchain.evaluation import load_evaluator
evaluator = load_evaluator("criteria", criteria="correctness")
"""

### Guardrailed Autonomy

Constrained agents with safety boundaries

**When to use**: Production systems, critical operations

# GUARDRAILED AUTONOMY:

"""
Production agents need multiple safety layers:
1. Input validation
2. Action constraints
3. Output validation
4. Cost limits
5. Human escalation
6. Rollback capability
"""

#### Imported: Cost Control

"""
# Context length grows quadratically in cost
# Double context = 4x cost

def trim_context(messages, max_tokens=4000):
    # Keep system message and recent messages
    system = messages[0]
    recent = messages[-10:]

    # Summarize middle if needed
    if len(messages) > 11:
        middle = messages[1:-10]
        summary = summarize(middle)
        return [system, summary] + recent

    return messages
"""

### Durable Execution Pattern

Agents that survive failures and resume

**When to use**: Long-running tasks, production systems, multi-day processes

# DURABLE EXECUTION:

"""
Production agents must:
- Survive server restarts
- Resume from exact point of failure
- Handle hours/days of runtime
- Allow human intervention mid-process

LangGraph 1.0 provides this natively.
"""

#### Imported: LangGraph Checkpointing

"""
from langgraph.checkpoint.postgres import PostgresSaver
from langgraph.graph import StateGraph

# Production checkpointer (not MemorySaver!)
checkpointer = PostgresSaver.from_conn_string(
    os.environ["POSTGRES_URL"]
)

# Build graph with checkpointing
graph = StateGraph(AgentState)
# ... add nodes and edges ...

agent = graph.compile(checkpointer=checkpointer)

# Each invocation saves state
config = {"configurable": {"thread_id": "long-task-789"}}

# Start task
agent.invoke({"goal": complex_goal}, config)

# If server dies, resume later:
state = agent.get_state(config)
if not state.is_complete:
    agent.invoke(None, config)  # Continues from checkpoint
"""

#### Imported: Human-in-the-Loop Interrupts

"""
# Pause at specific nodes
agent = graph.compile(
    checkpointer=checkpointer,
    interrupt_before=["critical_action"],  # Pause before
    interrupt_after=["validation"],        # Pause after
)

# First invocation pauses at interrupt
result = agent.invoke({"goal": goal}, config)

# Human reviews state
state = agent.get_state(config)
if human_approves(state):
    # Continue from pause point
    agent.invoke(None, config)
else:
    # Modify state and continue
    agent.update_state(config, {"approved": False})
    agent.invoke(None, config)
"""

#### Imported: Time-Travel Debugging

"""
# LangGraph stores full history
history = list(agent.get_state_history(config))

# Go back to any previous state
past_state = history[5]
agent.update_state(config, past_state.values)

# Replay from that point with modifications
agent.invoke(None, config)
"""

#### Imported: Sharp Edges

### Error Probability Compounds Exponentially

Severity: CRITICAL

Situation: Building multi-step autonomous agents

Symptoms:
Agent works in demos but fails in production. Simple tasks succeed,
complex tasks fail mysteriously. Success rate drops dramatically
as task complexity increases. Users lose trust.

Why this breaks:
Each step has independent failure probability. A 95% success rate
per step sounds great until you realize:
- 5 steps: 77% success (0.95^5)
- 10 steps: 60% success (0.95^10)
- 20 steps: 36% success (0.95^20)

This is the fundamental limit of autonomous agents. Every additional
step multiplies failure probability.

Recommended fix:

#### Imported: Break into checkpointed segments

# Human review at each segment
# Resume from last good checkpoint

### API Costs Explode with Context Growth

Severity: CRITICAL

Situation: Running agents with growing conversation context

Symptoms:
$47 to close a single support ticket. Thousands in surprise API bills.
Agents getting slower as they run longer. Token counts exceeding
model limits.

Why this breaks:
Transformer costs scale quadratically with context length. Double
the context, quadruple the compute. A long-running agent that
re-sends its full conversation each turn can burn money exponentially.

Most agents append to context without trimming. Context grows:
- Turn 1: 500 tokens → $0.01
- Turn 10: 5000 tokens → $0.10
- Turn 50: 25000 tokens → $0.50
- Turn 100: 50000 tokens → $1.00+ per message

Recommended fix:

#### Imported: Set hard cost limits

class CostLimitedAgent:
    MAX_COST_PER_TASK = 1.00  # USD

    def __init__(self):
        self.total_cost = 0

    def before_call(self, estimated_tokens):
        estimated_cost = self.estimate_cost(estimated_tokens)
        if self.total_cost + estimated_cost > self.MAX_COST_PER_TASK:
            raise CostLimitExceeded(
                f"Would exceed ${self.MAX_COST_PER_TASK} limit"
            )

    def after_call(self, response):
        self.total_cost += self.calculate_actual_cost(response)

#### Imported: Trim context aggressively

def trim_context(messages, max_tokens=4000):
    # Keep: system prompt + last N messages
    # Summarize: everything in between
    if count_tokens(messages) <= max_tokens:
        return messages

    system = messages[0]
    recent = messages[-5:]
    middle = messages[1:-5]

    if middle:
        summary = summarize(middle)  # Compress history
        return [system, summary] + recent

    return [system] + recent

#### Imported: Use streaming to track costs in real-time



#### Imported: Alert at 50% of budget, halt at 90%

### Demo Works But Production Fails

Severity: CRITICAL

Situation: Moving from prototype to production

Symptoms:
Impressive demo to stakeholders. Months of failure in production.
Works for the founder's use case, fails for real users. Edge cases
overwhelm the system.

Why this breaks:
Demos show the happy path with curated inputs. Production means:
- Unexpected inputs (typos, ambiguity, adversarial)
- Scale (1000 users, not 3)
- Reliability (99.9% uptime, not "usually works")
- Edge cases (the 1% that breaks everything)

The methodology is questionable, but the core problem is real.
The gap between a working demo and a reliable production system
is where projects die.

Recommended fix:

#### Imported: Test at scale before production

# Run 1000+ test cases, not 10
# Measure P95/P99 success rate, not average
# Include adversarial inputs

#### Imported: Build observability first

import structlog
logger = structlog.get_logger()

class ObservableAgent:
    def execute(self, task):
        with logger.bind(task_id=task.id):
            logger.info("task_started")
            try:
                result = self._execute(task)
                logger.info("task_completed", result=result)
                return result
            except Exception as e:
                logger.error("task_failed", error=str(e))
                raise

#### Imported: Have escape hatches

# Human takeover when confidence < threshold
# Graceful degradation to simpler behavior
# "I don't know" is a valid response

#### Imported: Deploy incrementally

# 1% of traffic, then 10%, then 50%
# Monitor error rates at each stage

### Agent Fabricates Data When Stuck

Severity: HIGH

Situation: Agent can't complete task with available information

Symptoms:
Agent invents plausible-looking data. Fake restaurant names on expense
reports. Made-up statistics in reports. Confident answers that are
completely wrong.

Why this breaks:
LLMs are trained to be helpful and produce plausible outputs. When
stuck, they don't say "I can't do this" - they fabricate. Autonomous
agents compound this by acting on fabricated data without human review.

The agent that fabricated expense entries was trying to meet its goal
(complete the expense report). It "solved" the problem by inventing data.

Recommended fix:

#### Imported: Validate against ground truth

def validate_expense(expense):
    # Cross-check with external sources
    if expense.restaurant:
        if not verify_restaurant_exists(expense.restaurant):
            raise ValidationError("Restaurant not found")

    # Check for suspicious patterns
    if expense.amount == round(expense.amount, -1):
        flag_for_review("Suspiciously round amount")

#### Imported: Require evidence

system_prompt = '''
For every factual claim, cite the specific tool output that
supports it. If you cannot find supporting evidence, say
"I could not verify this" rather than guessing.
'''

#### Imported: Use structured outputs

from pydantic import BaseModel

class VerifiedClaim(BaseModel):
    claim: str
    source: str  # Must reference tool output
    confidence: float

#### Imported: Detect uncertainty

# Train to output confidence scores
# Flag low-confidence outputs for human review
# Never auto-execute on uncertain data

### Integration Is Where Agents Die

Severity: HIGH

Situation: Connecting agent to external systems

Symptoms:
Works with mock APIs, fails with real ones. Rate limits cause crashes.
Auth tokens expire mid-task. Data format mismatches. Partial failures
leave systems in inconsistent state.

Why this breaks:
The companies promising "autonomous agents that integrate with your
entire tech stack" haven't built production systems at scale.
Real integrations have:
- Rate limits (429 errors mid-task)
- Auth complexity (OAuth refresh, token expiry)
- Data format variations (API v1 vs v2)
- Partial failures (webhook received, processing failed)
- Eventual consistency (data not immediately available)

Recommended fix:

#### Imported: Build robust API clients

from tenacity import retry, stop_after_attempt, wait_exponential

class RobustAPIClient:
    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(multiplier=1, min=4, max=60)
    )
    async def call(self, endpoint, data):
        response = await self.client.post(endpoint, json=data)
        if response.status_code == 429:
            retry_after = response.headers.get("Retry-After", 60)
            await asyncio.sleep(int(retry_after))
            raise RateLimitError()
        return response

#### Imported: Handle auth lifecycle

class TokenManager:
    def __init__(self):
        self.token = None
        self.expires_at = None

    async def get_token(self):
        if self.is_expired():
            self.token = await self.refresh_token()
        return self.token

    def is_expired(self):
        buffer = timedelta(minutes=5)  # Refresh early
        return datetime.now() > (self.expires_at - buffer)

#### Imported: Use idempotency keys

# Every external action should be idempotent
# If agent retries, external system handles duplicate

#### Imported: Separate read/write permissions

# Agent can read anything
# Write requires explicit approval

#### Imported: Dangerous actions require confirmation

DANGEROUS_ACTIONS = [
    "delete_*",
    "send_email",
    "transfer_money",
    "modify_production",
    "revoke_access",
]

async def execute_action(action):
    if matches_dangerous_pattern(action):
        approval = await request_human_approval(action)
        if not approval:
            return ActionRejected(action)
    return await actually_execute(action)

#### Imported: Dry-run mode for testing

# Agent describes what it would do
# Human approves the plan
# Then agent executes

#### Imported: Audit logging for everything

# Every action logged with context
# Who authorized it
# What changed
# How to reverse it

### Agent Runs Out of Context Window

Severity: MEDIUM

Situation: Long-running agent tasks

Symptoms:
Agent forgets earlier instructions. Contradicts itself. Loses track
of the goal. Starts repeating itself. Model errors about token limits.

Why this breaks:
Every message, observation, and thought consumes context. Long tasks
exhaust the window. When context is truncated:
- System prompt gets dropped
- Early important context lost
- Agent loses coherence

Recommended fix:

#### Imported: Use external memory

# Don't keep everything in context
# Store in vector DB, retrieve when needed
# See agent-memory-systems skill

#### Imported: Hierarchical summarization

# Recent: full detail
# Medium: key points
# Old: compressed summary

### Can't Debug What You Can't See

Severity: MEDIUM

Situation: Agent fails mysteriously

Symptoms:
"It just didn't work." No idea why agent failed. Can't reproduce
issues. Users report problems you can't explain. Debugging is
guesswork.

Why this breaks:
Agents make dozens of internal decisions. Without visibility into
each step, you're blind to failure modes. Production debugging
without traces is impossible.

Recommended fix:

#### Imported: Structured logging

import structlog

logger = structlog.get_logger()

class TracedAgent:
    def think(self, context):
        with logger.bind(step="think"):
            thought = self.llm.generate(context)
            logger.info("thought_generated",
                thought=thought,
                tokens=count_tokens(thought)
            )
            return thought

    def act(self, action):
        with logger.bind(step="act", action=action.name):
            logger.info("action_started")
            try:
                result = action.execute()
                logger.info("action_completed", result=result)
                return result
            except Exception as e:
                logger.error("action_failed", error=str(e))
                raise

#### Imported: Use LangSmith or similar

from langsmith import trace

@trace
def agent_step(state):
    # Automatically traced with inputs/outputs
    return next_state

#### Imported: Save full traces

# Every step, every decision
# Inputs and outputs
# Latency at each step
# Token usage

#### Imported: Validation Checks

### Agent Loop Without Step Limit

Severity: ERROR

Autonomous agents must have maximum step limits

Message: Agent loop without step limit. Add max_steps to prevent infinite loops.

### No Cost Tracking or Limits

Severity: ERROR

Agents should track and limit API costs

Message: Agent uses LLM without cost tracking. Add cost limits to prevent runaway spending.

### Agent Without Timeout

Severity: WARNING

Long-running agents need timeouts

Message: Agent invocation without timeout. Add timeout to prevent hung tasks.

### MemorySaver Used in Production

Severity: ERROR

MemorySaver is for development only

Message: MemorySaver is not persistent. Use PostgresSaver or SqliteSaver for production.

### Long-Running Agent Without Checkpointing

Severity: WARNING

Agents that run multiple steps need checkpointing

Message: Multi-step agent without checkpointing. Add checkpointer for durability.

### Agent Without Thread ID

Severity: WARNING

Checkpointed agents need unique thread IDs

Message: Agent invocation without thread_id. State won't persist correctly.

### Using Agent Output Without Validation

Severity: WARNING

Agent outputs should be validated before use

Message: Agent output used without validation. Validate before acting on results.

### Agent Without Structured Output

Severity: INFO

Structured outputs are more reliable

Message: Consider using structured outputs (Pydantic) for more reliable parsing.

### Agent Without Error Recovery

Severity: WARNING

Agents should handle and recover from errors

Message: Agent call without error handling. Add try/catch or error handler.

### Destructive Actions Without Rollback

Severity: WARNING

Actions that modify state should be reversible

Message: Destructive action without rollback capability. Save state before modification.

#### Imported: Collaboration

### Delegation Triggers

- user needs multi-agent coordination -> multi-agent-orchestration (Multiple agents working together)
- user needs to test/evaluate agent -> agent-evaluation (Benchmarking and testing)
- user needs tools for agent -> agent-tool-builder (Tool design and implementation)
- user needs persistent memory -> agent-memory-systems (Long-term memory architecture)
- user needs workflow automation -> workflow-automation (When agent is overkill for the task)
- user needs computer control -> computer-use-agents (GUI automation, screen interaction)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
