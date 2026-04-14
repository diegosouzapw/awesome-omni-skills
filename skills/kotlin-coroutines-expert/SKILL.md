---
name: kotlin-coroutines-expert
description: "Kotlin Coroutines Expert workflow skill. Use this skill when the user needs Expert patterns for Kotlin Coroutines and Flow, covering structured concurrency, error handling, and testing and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["kotlin-coroutines-expert", "expert", "patterns", "for", "kotlin", "coroutines", "and", "flow"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Kotlin Coroutines Expert

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/kotlin-coroutines-expert` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Kotlin Coroutines Expert

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when implementing asynchronous operations in Kotlin.
- Use when designing reactive data streams with Flow.
- Use when debugging coroutine cancellations or exceptions.
- Use when writing unit tests for suspending functions or Flows.
- Use when the request clearly matches the imported source intent: Expert patterns for Kotlin Coroutines and Flow, covering structured concurrency, error handling, and testing.
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

1. Structured Concurrency Always launch coroutines within a defined CoroutineScope.
2. Use coroutineScope or supervisorScope to group concurrent tasks.
3. `kotlin suspend fun loadDashboardData(): DashboardData = coroutineScope { val userDeferred = async { userRepo.getUser() } val settingsDeferred = async { settingsRepo.getSettings() } DashboardData( user = userDeferred.await(), settings = settingsDeferred.await() ) } ### 2.
4. Exception Handling Use CoroutineExceptionHandler for top-level scopes, but rely on try-catch within suspending functions for granular control.
5. kotlin val handler = CoroutineExceptionHandler { , exception -> println("Caught $exception") } viewModelScope.launch(handler) { try { riskyOperation() } catch (e: IOException) { // Handle network error specifically } } ### 3.
6. Reactive Streams with Flow Use StateFlow for state that needs to be retained, and SharedFlow for events.
7. kotlin // Cold Flow (Lazy) val searchResults: Flow<List<Item>> = searchQuery .debounce(300) .flatMapLatest { query -> searchRepo.search(query) } .flowOn(Dispatchers.IO) // Hot Flow (State) val uiState: StateFlow<UiState> = uiState.asStateFlow() `

### Imported Workflow Notes

#### Imported: Step-by-Step Guide

### 1. Structured Concurrency

Always launch coroutines within a defined `CoroutineScope`. Use `coroutineScope` or `supervisorScope` to group concurrent tasks.

```kotlin
suspend fun loadDashboardData(): DashboardData = coroutineScope {
    val userDeferred = async { userRepo.getUser() }
    val settingsDeferred = async { settingsRepo.getSettings() }
    
    DashboardData(
        user = userDeferred.await(),
        settings = settingsDeferred.await()
    )
}
```

### 2. Exception Handling

Use `CoroutineExceptionHandler` for top-level scopes, but rely on `try-catch` within suspending functions for granular control.

```kotlin
val handler = CoroutineExceptionHandler { _, exception ->
    println("Caught $exception")
}

viewModelScope.launch(handler) {
    try {
        riskyOperation()
    } catch (e: IOException) {
        // Handle network error specifically
    }
}
```

### 3. Reactive Streams with Flow

Use `StateFlow` for state that needs to be retained, and `SharedFlow` for events.

```kotlin
// Cold Flow (Lazy)
val searchResults: Flow<List<Item>> = searchQuery
    .debounce(300)
    .flatMapLatest { query -> searchRepo.search(query) }
    .flowOn(Dispatchers.IO)

// Hot Flow (State)
val uiState: StateFlow<UiState> = _uiState.asStateFlow()
```

#### Imported: Overview

A guide to mastering asynchronous programming with Kotlin Coroutines. Covers advanced topics like structured concurrency, `Flow` transformations, exception handling, and testing strategies.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @kotlin-coroutines-expert to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/kotlin-coroutines-expert/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/kotlin-coroutines-expert/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @kotlin-coroutines-expert using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Parallel Execution with Error Handling

```kotlin
suspend fun fetchDataWithErrorHandling() = supervisorScope {
    val task1 = async { 
        try { api.fetchA() } catch (e: Exception) { null } 
    }
    val task2 = async { api.fetchB() }
    
    // If task2 fails, task1 is NOT cancelled because of supervisorScope
    val result1 = task1.await()
    val result2 = task2.await() // May throw
}
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Do: Use Dispatchers.IO for blocking I/O operations.
- ✅ Do: Cancel scopes when they are no longer needed (e.g., ViewModel.onCleared).
- ✅ Do: Use TestScope and runTest for unit testing coroutines.
- ❌ Don't: Use GlobalScope. It breaks structured concurrency and can lead to leaks.
- ❌ Don't: Catch CancellationException unless you rethrow it.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use `Dispatchers.IO` for blocking I/O operations.
- ✅ **Do:** Cancel scopes when they are no longer needed (e.g., `ViewModel.onCleared`).
- ✅ **Do:** Use `TestScope` and `runTest` for unit testing coroutines.
- ❌ **Don't:** Use `GlobalScope`. It breaks structured concurrency and can lead to leaks.
- ❌ **Don't:** Catch `CancellationException` unless you rethrow it.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/kotlin-coroutines-expert`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

**Problem:** Coroutine test hangs or fails unpredictably.
**Solution:** Ensure you are using `runTest` and injecting `TestDispatcher` into your classes so you can control virtual time.

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
