---
name: bdi-mental-states-v2
description: "BDI Mental State Modeling workflow skill. Use this skill when the user needs This skill should be used when the user asks to \"model agent mental states\", \"implement BDI architecture\", \"create belief-desire-intention models\", \"transform RDF to beliefs\", \"build cognitive agent\", or mentions BDI ontology, mental state modeling, rational agency, or neuro-symbolic AI integration and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["bdi-mental-states-v2", "bdi-mental-states", "should", "used", "the", "user", "asks", "model"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-19"
date_updated: "2026-04-19"
---

# BDI Mental State Modeling

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/bdi-mental-states` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# BDI Mental State Modeling Transform external RDF context into agent mental states (beliefs, desires, intentions) using formal BDI ontology patterns. This skill enables agents to reason about context through cognitive architecture, supporting deliberative reasoning, explainability, and semantic interoperability within multi-agent systems.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, T2B2T Paradigm, Notation Selection by Level, Justification and Explainability, Temporal Dimensions, Compositional Mental Entities.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Processing external RDF context into agent beliefs about world states
- Modeling rational agency with perception, deliberation, and action cycles
- Enabling explainability through traceable reasoning chains
- Implementing BDI frameworks (SEMAS, JADE, JADEX)
- Augmenting LLMs with formal cognitive structures (Logic Augmented Generation)
- Coordinating mental states across multi-agent platforms

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

#### Imported: Core Concepts

### Mental Reality Architecture

**Mental States (Endurants)**: Persistent cognitive attributes
- `Belief`: What the agent believes to be true about the world
- `Desire`: What the agent wishes to bring about
- `Intention`: What the agent commits to achieving

**Mental Processes (Perdurants)**: Events that modify mental states
- `BeliefProcess`: Forming/updating beliefs from perception
- `DesireProcess`: Generating desires from beliefs
- `IntentionProcess`: Committing to desires as actionable intentions

### Cognitive Chain Pattern

```turtle
:Belief_store_open a bdi:Belief ;
    rdfs:comment "Store is open" ;
    bdi:motivates :Desire_buy_groceries .

:Desire_buy_groceries a bdi:Desire ;
    rdfs:comment "I desire to buy groceries" ;
    bdi:isMotivatedBy :Belief_store_open .

:Intention_go_shopping a bdi:Intention ;
    rdfs:comment "I will buy groceries" ;
    bdi:fulfils :Desire_buy_groceries ;
    bdi:isSupportedBy :Belief_store_open ;
    bdi:specifies :Plan_shopping .
```

### World State Grounding

Mental states reference structured configurations of the environment:

```turtle
:Agent_A a bdi:Agent ;
    bdi:perceives :WorldState_WS1 ;
    bdi:hasMentalState :Belief_B1 .

:WorldState_WS1 a bdi:WorldState ;
    rdfs:comment "Meeting scheduled at 10am in Room 5" ;
    bdi:atTime :TimeInstant_10am .

:Belief_B1 a bdi:Belief ;
    bdi:refersTo :WorldState_WS1 .
```

### Goal-Directed Planning

Intentions specify plans that address goals through task sequences:

```turtle
:Intention_I1 bdi:specifies :Plan_P1 .

:Plan_P1 a bdi:Plan ;
    bdi:addresses :Goal_G1 ;
    bdi:beginsWith :Task_T1 ;
    bdi:endsWith :Task_T3 .

:Task_T1 bdi:precedes :Task_T2 .
:Task_T2 bdi:precedes :Task_T3 .
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @bdi-mental-states-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @bdi-mental-states-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @bdi-mental-states-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @bdi-mental-states-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Model world states as configurations independent of agent perspectives, providing referential substrate for mental states.
- Distinguish endurants (persistent mental states) from perdurants (temporal mental processes), aligning with DOLCE ontology.
- Treat goals as descriptions rather than mental states, maintaining separation between cognitive and planning layers.
- Use hasPart relations for meronymic structures enabling selective belief updates.
- Associate every mental entity with temporal constructs via atTime or hasValidity.
- Use bidirectional property pairs (motivates/isMotivatedBy, generates/isGeneratedBy) for flexible querying.
- Link mental entities to Justification instances for explainability and trust.

### Imported Operating Notes

#### Imported: Guidelines

1. Model world states as configurations independent of agent perspectives, providing referential substrate for mental states.

2. Distinguish endurants (persistent mental states) from perdurants (temporal mental processes), aligning with DOLCE ontology.

3. Treat goals as descriptions rather than mental states, maintaining separation between cognitive and planning layers.

4. Use `hasPart` relations for meronymic structures enabling selective belief updates.

5. Associate every mental entity with temporal constructs via `atTime` or `hasValidity`.

6. Use bidirectional property pairs (`motivates`/`isMotivatedBy`, `generates`/`isGeneratedBy`) for flexible querying.

7. Link mental entities to `Justification` instances for explainability and trust.

8. Implement T2B2T through: (1) translate RDF to beliefs, (2) execute BDI reasoning, (3) project mental states back to RDF.

9. Define existential restrictions on mental processes (e.g., `BeliefProcess ⊑ ∃generates.Belief`).

10. Reuse established ODPs (EventCore, Situation, TimeIndexedSituation, BasicPlan, Provenance) for interoperability.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/bdi-mental-states`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@bash-linux-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@bash-scripting-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@bats-testing-patterns-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@bazel-build-optimization-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

See `references/` folder for detailed documentation:
- `bdi-ontology-core.md` - Core ontology patterns and class definitions
- `rdf-examples.md` - Complete RDF/Turtle examples
- `sparql-competency.md` - Full competency question SPARQL queries
- `framework-integration.md` - SEMAS, JADE, LAG integration patterns

Primary sources:
- Zuppiroli et al. "The Belief-Desire-Intention Ontology" (2025)
- Rao & Georgeff "BDI agents: From theory to practice" (1995)
- Bratman "Intention, plans, and practical reason" (1987)

#### Imported: T2B2T Paradigm

Triples-to-Beliefs-to-Triples implements bidirectional flow between RDF knowledge graphs and internal mental states:

**Phase 1: Triples-to-Beliefs**
```turtle
# External RDF context triggers belief formation
:WorldState_notification a bdi:WorldState ;
    rdfs:comment "Push notification: Payment request $250" ;
    bdi:triggers :BeliefProcess_BP1 .

:BeliefProcess_BP1 a bdi:BeliefProcess ;
    bdi:generates :Belief_payment_request .
```

**Phase 2: Beliefs-to-Triples**
```turtle
# Mental deliberation produces new RDF output
:Intention_pay a bdi:Intention ;
    bdi:specifies :Plan_payment .

:PlanExecution_PE1 a bdi:PlanExecution ;
    bdi:satisfies :Plan_payment ;
    bdi:bringsAbout :WorldState_payment_complete .
```

#### Imported: Notation Selection by Level

| C4 Level | Notation | Mental State Representation |
|----------|----------|----------------------------|
| L1 Context | ArchiMate | Agent boundaries, external perception sources |
| L2 Container | ArchiMate | BDI reasoning engine, belief store, plan executor |
| L3 Component | UML | Mental state managers, process handlers |
| L4 Code | UML/RDF | Belief/Desire/Intention classes, ontology instances |

#### Imported: Justification and Explainability

Mental entities link to supporting evidence for traceable reasoning:

```turtle
:Belief_B1 a bdi:Belief ;
    bdi:isJustifiedBy :Justification_J1 .

:Justification_J1 a bdi:Justification ;
    rdfs:comment "Official announcement received via email" .

:Intention_I1 a bdi:Intention ;
    bdi:isJustifiedBy :Justification_J2 .

:Justification_J2 a bdi:Justification ;
    rdfs:comment "Location precondition satisfied" .
```

#### Imported: Temporal Dimensions

Mental states persist over bounded time periods:

```turtle
:Belief_B1 a bdi:Belief ;
    bdi:hasValidity :TimeInterval_TI1 .

:TimeInterval_TI1 a bdi:TimeInterval ;
    bdi:hasStartTime :TimeInstant_9am ;
    bdi:hasEndTime :TimeInstant_11am .
```

Query mental states active at specific moments:

```sparql
SELECT ?mentalState WHERE {
    ?mentalState bdi:hasValidity ?interval .
    ?interval bdi:hasStartTime ?start ;
              bdi:hasEndTime ?end .
    FILTER(?start <= "2025-01-04T10:00:00"^^xsd:dateTime && 
           ?end >= "2025-01-04T10:00:00"^^xsd:dateTime)
}
```

#### Imported: Compositional Mental Entities

Complex mental entities decompose into constituent parts for selective updates:

```turtle
:Belief_meeting a bdi:Belief ;
    rdfs:comment "Meeting at 10am in Room 5" ;
    bdi:hasPart :Belief_meeting_time , :Belief_meeting_location .

# Update only location component
:BeliefProcess_update a bdi:BeliefProcess ;
    bdi:modifies :Belief_meeting_location .
```

#### Imported: Integration Patterns

### Logic Augmented Generation (LAG)

Augment LLM outputs with ontological constraints:

```python
def augment_llm_with_bdi_ontology(prompt, ontology_graph):
    ontology_context = serialize_ontology(ontology_graph, format='turtle')
    augmented_prompt = f"{ontology_context}\n\n{prompt}"
    
    response = llm.generate(augmented_prompt)
    triples = extract_rdf_triples(response)
    
    is_consistent = validate_triples(triples, ontology_graph)
    return triples if is_consistent else retry_with_feedback()
```

### SEMAS Rule Translation

Map BDI ontology to executable production rules:

```prolog
% Belief triggers desire formation
[HEAD: belief(agent_a, store_open)] / 
[CONDITIONALS: time(weekday_afternoon)] » 
[TAIL: generate_desire(agent_a, buy_groceries)].

% Desire triggers intention commitment
[HEAD: desire(agent_a, buy_groceries)] / 
[CONDITIONALS: belief(agent_a, has_shopping_list)] » 
[TAIL: commit_intention(agent_a, buy_groceries)].
```

#### Imported: Competency Questions

Validate implementation against these SPARQL queries:

```sparql
# CQ1: What beliefs motivated formation of a given desire?
SELECT ?belief WHERE {
    :Desire_D1 bdi:isMotivatedBy ?belief .
}

# CQ2: Which desire does a particular intention fulfill?
SELECT ?desire WHERE {
    :Intention_I1 bdi:fulfils ?desire .
}

# CQ3: Which mental process generated a belief?
SELECT ?process WHERE {
    ?process bdi:generates :Belief_B1 .
}

# CQ4: What is the ordered sequence of tasks in a plan?
SELECT ?task ?nextTask WHERE {
    :Plan_P1 bdi:hasComponent ?task .
    OPTIONAL { ?task bdi:precedes ?nextTask }
} ORDER BY ?task
```

#### Imported: Anti-Patterns

1. **Conflating mental states with world states**: Mental states reference world states, they are not world states themselves.

2. **Missing temporal bounds**: Every mental state should have validity intervals for diachronic reasoning.

3. **Flat belief structures**: Use compositional modeling with `hasPart` for complex beliefs.

4. **Implicit justifications**: Always link mental entities to explicit justification instances.

5. **Direct intention-to-action mapping**: Intentions specify plans which contain tasks; actions execute tasks.

#### Imported: Integration

- **RDF Processing**: Apply after parsing external RDF context to construct cognitive representations
- **Semantic Reasoning**: Combine with ontology reasoning to infer implicit mental state relationships
- **Multi-Agent Communication**: Integrate with FIPA ACL for cross-platform belief sharing
- **Temporal Context**: Coordinate with temporal reasoning for mental state evolution
- **Explainable AI**: Feed into explanation systems tracing perception through deliberation to action
- **Neuro-Symbolic AI**: Apply in LAG pipelines to constrain LLM outputs with cognitive structures

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
