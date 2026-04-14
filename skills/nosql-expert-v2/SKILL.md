---
name: nosql-expert-v2
description: "NoSQL Expert Patterns (Cassandra & DynamoDB) workflow skill. Use this skill when the user needs Expert guidance for distributed NoSQL databases (Cassandra, DynamoDB). Focuses on mental models, query-first modeling, single-table design, and avoiding hot partitions in high-scale systems and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["nosql-expert-v2", "nosql-expert", "expert", "guidance", "for", "distributed", "nosql", "databases"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# NoSQL Expert Patterns (Cassandra & DynamoDB)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/nosql-expert` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# NoSQL Expert Patterns (Cassandra & DynamoDB)

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: The Mental Shift: SQL vs. Distributed NoSQL, Core Design Patterns, Specific Guidance, Expert Checklist, Common Anti-Patterns, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Designing for Scale: Moving beyond simple single-node databases to distributed clusters.
- Technology Selection: Evaluating or using Cassandra, ScyllaDB, or DynamoDB.
- Performance Tuning: Troubleshooting "hot partitions" or high latency in existing NoSQL systems.
- Microservices: Implementing "database-per-service" patterns where highly optimized reads are required.
- Use when the request clearly matches the imported source intent: Expert guidance for distributed NoSQL databases (Cassandra, DynamoDB). Focuses on mental models, query-first modeling, single-table design, and avoiding hot partitions in high-scale systems.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

#### Imported: Overview

This skill provides professional mental models and design patterns for **distributed wide-column and key-value stores** (specifically Apache Cassandra and Amazon DynamoDB).

Unlike SQL (where you model data entities), or document stores (like MongoDB), these distributed systems require you to **model your queries first**.

#### Imported: The Mental Shift: SQL vs. Distributed NoSQL

| Feature | SQL (Relational) | Distributed NoSQL (Cassandra/DynamoDB) |
| :--- | :--- | :--- |
| **Data modeling** | Model Entities + Relationships | Model **Queries** (Access Patterns) |
| **Joins** | CPU-intensive, at read time | **Pre-computed** (Denormalized) at write time |
| **Storage cost** | Expensive (minimize duplication) | Cheap (duplicate data for read speed) |
| **Consistency** | ACID (Strong) | **BASE (Eventual)** / Tunable |
| **Scalability** | Vertical (Bigger machine) | **Horizontal** (More nodes/shards) |

> **The Golden Rule:** In SQL, you design the data model to answer *any* query. In NoSQL, you design the data model to answer *specific* queries efficiently.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @nosql-expert-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/nosql-expert-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/nosql-expert-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @nosql-expert-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/nosql-expert`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Core Design Patterns

### 1. Query-First Modeling (Access Patterns)

You typically cannot "add a query later" without migration or creating a new table/index.

**Process:**
1.  **List all Entities** (User, Order, Product).
2.  **List all Access Patterns** ("Get User by Email", "Get Orders by User sorted by Date").
3.  **Design Table(s)** specifically to serve those patterns with a single lookup.

### 2. The Partition Key is King

Data is distributed across physical nodes based on the **Partition Key (PK)**.
-   **Goal:** Even distribution of data and traffic.
-   **Anti-Pattern:** Using a low-cardinality PK (e.g., `status="active"` or `gender="m"`) creates **Hot Partitions**, limiting throughput to a single node's capacity.
-   **Best Practice:** Use high-cardinality keys (User IDs, Device IDs, Composite Keys).

### 3. Clustering / Sort Keys

Within a partition, data is sorted on disk by the **Clustering Key (Cassandra)** or **Sort Key (DynamoDB)**.
-   This allows for efficient **Range Queries** (e.g., `WHERE user_id=X AND date > Y`).
-   It effectively pre-sorts your data for specific retrieval requirements.

### 4. Single-Table Design (Adjacency Lists)

*Primary use: DynamoDB (but concepts apply elsewhere)*

Storing multiple entity types in one table to enable pre-joined reads.

| PK (Partition) | SK (Sort) | Data Fields... |
| :--- | :--- | :--- |
| `USER#123` | `PROFILE` | `{ name: "Ian", email: "..." }` |
| `USER#123` | `ORDER#998` | `{ total: 50.00, status: "shipped" }` |
| `USER#123` | `ORDER#999` | `{ total: 12.00, status: "pending" }` |

-   **Query:** `PK="USER#123"`
-   **Result:** Fetches User Profile AND all Orders in **one network request**.

### 5. Denormalization & Duplication

Don't be afraid to store the same data in multiple tables to serve different query patterns.
-   **Table A:** `users_by_id` (PK: uuid)
-   **Table B:** `users_by_email` (PK: email)

*Trade-off: You must manage data consistency across tables (often using eventual consistency or batch writes).*

#### Imported: Specific Guidance

### Apache Cassandra / ScyllaDB

-   **Primary Key Structure:** `((Partition Key), Clustering Columns)`
-   **No Joins, No Aggregates:** Do not try to `JOIN` or `GROUP BY`. Pre-calculate aggregates in a separate counter table.
-   **Avoid `ALLOW FILTERING`:** If you see this in production, your data model is wrong. It implies a full cluster scan.
-   **Writes are Cheap:** Inserts and Updates are just appends to the LSM tree. Don't worry about write volume as much as read efficiency.
-   **Tombstones:** Deletes are expensive markers. Avoid high-velocity delete patterns (like queues) in standard tables.

### AWS DynamoDB

-   **GSI (Global Secondary Index):** Use GSIs to create alternative views of your data (e.g., "Search Orders by Date" instead of by User).
    -   *Note:* GSIs are eventually consistent.
-   **LSI (Local Secondary Index):** Sorts data differently *within* the same partition. Must be created at table creation time.
-   **WCU / RCU:** Understand capacity modes. Single-table design helps optimize consumed capacity units.
-   **TTL:** Use Time-To-Live attributes to automatically expire old data (free delete) without creating tombstones.

#### Imported: Expert Checklist

Before finalizing your NoSQL schema:

-   [ ] **Access Pattern Coverage:** Does every query pattern map to a specific table or index?
-   [ ] **Cardinality Check:** Does the Partition Key have enough unique values to spread traffic evenly?
-   [ ] **Split Partition Risk:** For any single partition (e.g., a single user's orders), will it grow indefinitely? (If > 10GB, you need to "shard" the partition, e.g., `USER#123#2024-01`).
-   [ ] **Consistency Requirement:** Can the application tolerate eventual consistency for this read pattern?

#### Imported: Common Anti-Patterns

❌ **Scatter-Gather:** Querying *all* partitions to find one item (Scan).
❌ **Hot Keys:** Putting all "Monday" data into one partition.
❌ **Relational Modeling:** Creating `Author` and `Book` tables and trying to join them in code. (Instead, embed Book summaries in Author, or duplicate Author info in Books).

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
