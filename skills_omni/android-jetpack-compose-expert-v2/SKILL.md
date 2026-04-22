---
name: "android-jetpack-compose-expert-v2"
description: "Android Jetpack Compose Expert workflow skill. Use this skill when the user needs Expert guidance for building modern Android UIs with Jetpack Compose, covering state management, navigation, performance, and Material Design 3 and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "frontend"
tags:
  - "android-jetpack-compose-expert-v2"
  - "android-jetpack-compose-expert"
  - "expert"
  - "guidance"
  - "for"
  - "building"
  - "modern"
  - "android"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-20"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "android-jetpack-compose-expert-v2"
family_name: "Android Jetpack Compose Expert"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/android-jetpack-compose-expert-v2"
upstream_skill: "skills/android-jetpack-compose-expert-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "85"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "8fab9480d35a3f46aca4c7314a9d34bd60d77f92"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "android-jetpack-compose-expert-v2"
---

# Android Jetpack Compose Expert

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/android-jetpack-compose-expert` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Android Jetpack Compose Expert

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Limitations.

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
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

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

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @android-jetpack-compose-expert-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @android-jetpack-compose-expert-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @android-jetpack-compose-expert-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @android-jetpack-compose-expert-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/android-jetpack-compose-expert`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

**Problem:** Infinite Recomposition loop.
**Solution:** Check if you are creating new object instances (like `List` or `Modifier`) inside the composition without `remember`, or if you are updating state inside the composition phase instead of a side-effect or callback. Use Layout Inspector to debug recomposition counts.

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
