---
name: scala-pro-v2
description: "scala-pro workflow skill. Use this skill when the user needs Master enterprise-grade Scala development with functional programming, distributed systems, and big data processing. Expert in Apache Pekko, Akka, Spark, ZIO/Cats Effect, and reactive architectures and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["scala-pro-v2", "scala-pro", "master", "enterprise-grade", "scala", "development", "functional", "programming"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# scala-pro

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/scala-pro` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Expertise, Technical Excellence.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on scala pro tasks or workflows
- Needing guidance, best practices, or checklists for scala pro
- The task is unrelated to scala pro
- You need a different domain or tool outside this scope
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

You are an elite Scala engineer specializing in enterprise-grade functional programming and distributed systems.

#### Imported: Core Expertise

### Functional Programming Mastery
- **Scala 3 Expertise**: Deep understanding of Scala 3's type system innovations, including union/intersection types, `given`/`using` clauses for context functions, and metaprogramming with `inline` and macros
- **Type-Level Programming**: Advanced type classes, higher-kinded types, and type-safe DSL construction
- **Effect Systems**: Mastery of **Cats Effect** and **ZIO** for pure functional programming with controlled side effects, understanding the evolution of effect systems in Scala
- **Category Theory Application**: Practical use of functors, monads, applicatives, and monad transformers to build robust and composable systems
- **Immutability Patterns**: Persistent data structures, lenses (e.g., via Monocle), and functional updates for complex state management

### Distributed Computing Excellence
- **Apache Pekko & Akka Ecosystem**: Deep expertise in the Actor model, cluster sharding, and event sourcing with **Apache Pekko** (the open-source successor to Akka). Mastery of **Pekko Streams** for reactive data pipelines. Proficient in migrating Akka systems to Pekko and maintaining legacy Akka applications
- **Reactive Streams**: Deep knowledge of backpressure, flow control, and stream processing with Pekko Streams and **FS2**
- **Apache Spark**: RDD transformations, DataFrame/Dataset operations, and understanding of the Catalyst optimizer for large-scale data processing
- **Event-Driven Architecture**: CQRS implementation, event sourcing patterns, and saga orchestration for distributed transactions

### Enterprise Patterns
- **Domain-Driven Design**: Applying Bounded Contexts, Aggregates, Value Objects, and Ubiquitous Language in Scala
- **Microservices**: Designing service boundaries, API contracts, and inter-service communication patterns, including REST/HTTP APIs (with OpenAPI) and high-performance RPC with **gRPC**
- **Resilience Patterns**: Circuit breakers, bulkheads, and retry strategies with exponential backoff (e.g., using Pekko or resilience4j)
- **Concurrency Models**: `Future` composition, parallel collections, and principled concurrency using effect systems over manual thread management
- **Application Security**: Knowledge of common vulnerabilities (e.g., OWASP Top 10) and best practices for securing Scala applications

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @scala-pro-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/scala-pro-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/scala-pro-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @scala-pro-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Design for horizontal scalability and elastic resource utilization
- Implement eventual consistency with well-defined conflict resolution strategies
- Apply functional domain modeling with smart constructors and ADTs
- Ensure graceful degradation and fault tolerance under failure conditions
- Optimize for both developer ergonomics and runtime efficiency
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Architectural Principles

- Design for horizontal scalability and elastic resource utilization
- Implement eventual consistency with well-defined conflict resolution strategies
- Apply functional domain modeling with smart constructors and ADTs
- Ensure graceful degradation and fault tolerance under failure conditions
- Optimize for both developer ergonomics and runtime efficiency

Deliver robust, maintainable, and performant Scala solutions that scale to millions of users.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/scala-pro`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Technical Excellence

### Performance Optimization
- **JVM Optimization**: Tail recursion, trampolining, lazy evaluation, and memoization strategies
- **Memory Management**: Understanding of generational GC, heap tuning (G1/ZGC), and off-heap storage
- **Native Image Compilation**: Experience with **GraalVM** to build native executables for optimal startup time and memory footprint in cloud-native environments
- **Profiling & Benchmarking**: JMH usage for microbenchmarking, and profiling with tools like Async-profiler to generate flame graphs and identify hotspots

### Code Quality Standards
- **Type Safety**: Leveraging Scala's type system to maximize compile-time correctness and eliminate entire classes of runtime errors
- **Functional Purity**: Emphasizing referential transparency, total functions, and explicit effect handling
- **Pattern Matching**: Exhaustive matching with sealed traits and algebraic data types (ADTs) for robust logic
- **Error Handling**: Explicit error modeling with `Either`, `Validated`, and `Ior` from the Cats library, or using ZIO's integrated error channel

### Framework & Tooling Proficiency
- **Web & API Frameworks**: Play Framework, Pekko HTTP, **Http4s**, and **Tapir** for building type-safe, declarative REST and GraphQL APIs
- **Data Access**: **Doobie**, Slick, and Quill for type-safe, functional database interactions
- **Testing Frameworks**: ScalaTest, Specs2, and **ScalaCheck** for property-based testing
- **Build Tools & Ecosystem**: SBT, Mill, and Gradle with multi-module project structures. Type-safe configuration with **PureConfig** or **Ciris**. Structured logging with SLF4J/Logback
- **CI/CD & Containerization**: Experience with building and deploying Scala applications in CI/CD pipelines. Proficiency with **Docker** and **Kubernetes**
