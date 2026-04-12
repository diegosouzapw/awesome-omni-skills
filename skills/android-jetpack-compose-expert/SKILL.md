---
name: android-jetpack-compose-expert
description: "Android Jetpack Compose Expert workflow skill. Use this skill when the user needs Expert guidance for building modern Android UIs with Jetpack Compose, covering state management, navigation, performance, and Material Design 3 and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["android-jetpack-compose-expert", "expert", "guidance", "for", "building", "modern", "android", "uis"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Android Jetpack Compose Expert

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/android-jetpack-compose-expert` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Android Jetpack Compose Expert

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when starting a new Android project with Jetpack Compose.
- Use when migrating legacy XML layouts to Compose.
- Use when implementing complex UI state management and side effects.
- Use when optimizing Compose performance (recomposition counts, stability).
- Use when setting up Navigation with type safety.
- Use when the request clearly matches the imported source intent: Expert guidance for building modern Android UIs with Jetpack Compose, covering state management, navigation, performance, and Material Design 3.

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

1. Project Setup & Dependencies Ensure your libs.versions.toml includes the necessary Compose BOM and libraries.
2. `kotlin [versions] composeBom = "2024.02.01" activityCompose = "1.8.2" [libraries] androidx-compose-bom = { group = "androidx.compose", name = "compose-bom", version.ref = "composeBom" } androidx-ui = { group = "androidx.compose.ui", name = "ui" } androidx-ui-graphics = { group = "androidx.compose.ui", name = "ui-graphics" } androidx-ui-tooling-preview = { group = "androidx.compose.ui", name = "ui-tooling-preview" } androidx-material3 = { group = "androidx.compose.material3", name = "material3" } androidx-activity-compose = { group = "androidx.activity", name = "activity-compose", version.ref = "activityCompose" } ### 2.
3. State Management Pattern (MVI/MVVM) Use ViewModel with StateFlow to expose UI state.
4. Avoid exposing MutableStateFlow.
5. `kotlin // UI State Definition data class UserUiState( val isLoading: Boolean = false, val user: User?
6. = null, val error: String?
7. = null ) // ViewModel class UserViewModel @Inject constructor( private val userRepository: UserRepository ) : ViewModel() { private val uiState = MutableStateFlow(UserUiState()) val uiState: StateFlow<UserUiState> = uiState.asStateFlow() fun loadUser() { viewModelScope.launch { uiState.update { it.copy(isLoading = true) } try { val user = userRepository.getUser() uiState.update { it.copy(user = user, isLoading = false) } } catch (e: Exception) { _uiState.update { it.copy(error = e.message, isLoading = false) } } } } } ` ### 3.

### Imported Workflow Notes

#### Imported: Step-by-Step Guide

### 1. Project Setup & Dependencies

Ensure your `libs.versions.toml` includes the necessary Compose BOM and libraries.

```kotlin
[versions]
composeBom = "2024.02.01"
activityCompose = "1.8.2"

[libraries]
androidx-compose-bom = { group = "androidx.compose", name = "compose-bom", version.ref = "composeBom" }
androidx-ui = { group = "androidx.compose.ui", name = "ui" }
androidx-ui-graphics = { group = "androidx.compose.ui", name = "ui-graphics" }
androidx-ui-tooling-preview = { group = "androidx.compose.ui", name = "ui-tooling-preview" }
androidx-material3 = { group = "androidx.compose.material3", name = "material3" }
androidx-activity-compose = { group = "androidx.activity", name = "activity-compose", version.ref = "activityCompose" }
```

### 2. State Management Pattern (MVI/MVVM)

Use `ViewModel` with `StateFlow` to expose UI state. Avoid exposing `MutableStateFlow`.

```kotlin
// UI State Definition
data class UserUiState(
    val isLoading: Boolean = false,
    val user: User? = null,
    val error: String? = null
)

// ViewModel
class UserViewModel @Inject constructor(
    private val userRepository: UserRepository
) : ViewModel() {

    private val _uiState = MutableStateFlow(UserUiState())
    val uiState: StateFlow<UserUiState> = _uiState.asStateFlow()

    fun loadUser() {
        viewModelScope.launch {
            _uiState.update { it.copy(isLoading = true) }
            try {
                val user = userRepository.getUser()
                _uiState.update { it.copy(user = user, isLoading = false) }
            } catch (e: Exception) {
                _uiState.update { it.copy(error = e.message, isLoading = false) }
            }
        }
    }
}
```

### 3. Creating the Screen Composable

Consume the state in a "Screen" composable and pass data down to stateless components.

```kotlin
@Composable
fun UserScreen(
    viewModel: UserViewModel = hiltViewModel()
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()

    UserContent(
        uiState = uiState,
        onRetry = viewModel::loadUser
    )
}

@Composable
fun UserContent(
    uiState: UserUiState,
    onRetry: () -> Unit
) {
    Scaffold { padding ->
        Box(modifier = Modifier.padding(padding)) {
            when {
                uiState.isLoading -> CircularProgressIndicator()
                uiState.error != null -> ErrorView(uiState.error, onRetry)
                uiState.user != null -> UserProfile(uiState.user)
            }
        }
    }
}
```

#### Imported: Overview

A comprehensive guide for building production-quality Android applications using Jetpack Compose. This skill covers architectural patterns, state management with ViewModels, navigation type-safety, and performance optimization techniques.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @android-jetpack-compose-expert to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/android-jetpack-compose-expert/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/android-jetpack-compose-expert/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @android-jetpack-compose-expert using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Type-Safe Navigation

Using the new Navigation Compose Type Safety (available in recent versions).

```kotlin
// Define Destinations
@Serializable
object Home

@Serializable
data class Profile(val userId: String)

// Setup NavHost
@Composable
fun AppNavHost(navController: NavHostController) {
    NavHost(navController, startDestination = Home) {
        composable<Home> {
            HomeScreen(onNavigateToProfile = { id ->
                navController.navigate(Profile(userId = id))
            })
        }
        composable<Profile> { backStackEntry ->
            val profile: Profile = backStackEntry.toRoute()
            ProfileScreen(userId = profile.userId)
        }
    }
}
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Do: Use remember and derivedStateOf to minimize unnecessary calculations during recomposition.
- ✅ Do: Mark data classes used in UI state as @Immutable or @Stable if they contain List or other unstable types to enable smart recomposition skipping.
- ✅ Do: Use LaunchedEffect for one-off side effects (like showing a Snackbar) triggered by state changes.
- ❌ Don't: Perform expensive operations (like sorting a list) directly inside the Composable function body without remember.
- ❌ Don't: Pass ViewModel instances down to child components. Pass only the data (state) and lambda callbacks (events).
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use `remember` and `derivedStateOf` to minimize unnecessary calculations during recomposition.
- ✅ **Do:** Mark data classes used in UI state as `@Immutable` or `@Stable` if they contain `List` or other unstable types to enable smart recomposition skipping.
- ✅ **Do:** Use `LaunchedEffect` for one-off side effects (like showing a Snackbar) triggered by state changes.
- ❌ **Don't:** Perform expensive operations (like sorting a list) directly inside the Composable function body without `remember`.
- ❌ **Don't:** Pass `ViewModel` instances down to child components. Pass only the data (state) and lambda callbacks (events).

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/android-jetpack-compose-expert`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

**Problem:** Infinite Recomposition loop.
**Solution:** Check if you are creating new object instances (like `List` or `Modifier`) inside the composition without `remember`, or if you are updating state inside the composition phase instead of a side-effect or callback. Use Layout Inspector to debug recomposition counts.

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
