---
name: multi-platform-apps-multi-platform
description: "Multi-Platform Feature Development Workflow workflow skill. Use this skill when the user needs Build and deploy the same feature consistently across web, mobile, and desktop platforms using API-first architecture and parallel implementation strategies and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["multi-platform-apps-multi-platform", "build", "and", "deploy", "the", "same", "feature", "consistently"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Multi-Platform Feature Development Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/multi-platform-apps-multi-platform` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Multi-Platform Feature Development Workflow Build and deploy the same feature consistently across web, mobile, and desktop platforms using API-first architecture and parallel implementation strategies. [Extended thinking: This workflow orchestrates multiple specialized agents to ensure feature parity across platforms while maintaining platform-specific optimizations. The coordination strategy emphasizes shared contracts and parallel development with regular synchronization points. By establishing API contracts and data models upfront, teams can work independently while ensuring consistency. The workflow benefits include faster time-to-market, reduced integration issues, and maintainable cross-platform codebases.]

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Phase 1: Architecture and API Design (Sequential), Phase 2: Parallel Platform Implementation, Phase 3: Integration and Validation, Configuration Options, Success Criteria, Platform-Specific Considerations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on multi-platform feature development workflow tasks or workflows
- Needing guidance, best practices, or checklists for multi-platform feature development workflow
- The task is unrelated to multi-platform feature development workflow
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: Build and deploy the same feature consistently across web, mobile, and desktop platforms using API-first architecture and parallel implementation strategies.
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

#### Imported: Phase 1: Architecture and API Design (Sequential)

### 1. Define Feature Requirements and API Contracts
- Use Task tool with subagent_type="backend-architect"
- Prompt: "Design the API contract for feature: $ARGUMENTS. Create OpenAPI 3.1 specification with:
  - RESTful endpoints with proper HTTP methods and status codes
  - GraphQL schema if applicable for complex data queries
  - WebSocket events for real-time features
  - Request/response schemas with validation rules
  - Authentication and authorization requirements
  - Rate limiting and caching strategies
  - Error response formats and codes
  Define shared data models that all platforms will consume."
- Expected output: Complete API specification, data models, and integration guidelines

### 2. Design System and UI/UX Consistency
- Use Task tool with subagent_type="ui-ux-designer"
- Prompt: "Create cross-platform design system for feature using API spec: [previous output]. Include:
  - Component specifications for each platform (Material Design, iOS HIG, Fluent)
  - Responsive layouts for web (mobile-first approach)
  - Native patterns for iOS (SwiftUI) and Android (Material You)
  - Desktop-specific considerations (keyboard shortcuts, window management)
  - Accessibility requirements (WCAG 2.2 Level AA)
  - Dark/light theme specifications
  - Animation and transition guidelines"
- Context from previous: API endpoints, data structures, authentication flows
- Expected output: Design system documentation, component library specs, platform guidelines

### 3. Shared Business Logic Architecture
- Use Task tool with subagent_type="comprehensive-review::architect-review"
- Prompt: "Design shared business logic architecture for cross-platform feature. Define:
  - Core domain models and entities (platform-agnostic)
  - Business rules and validation logic
  - State management patterns (MVI/Redux/BLoC)
  - Caching and offline strategies
  - Error handling and retry policies
  - Platform-specific adapter patterns
  Consider Kotlin Multiplatform for mobile or TypeScript for web/desktop sharing."
- Context from previous: API contracts, data models, UI requirements
- Expected output: Shared code architecture, platform abstraction layers, implementation guide

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @multi-platform-apps-multi-platform to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/multi-platform-apps-multi-platform/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/multi-platform-apps-multi-platform/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @multi-platform-apps-multi-platform using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/multi-platform-apps-multi-platform`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Phase 2: Parallel Platform Implementation

### 4a. Web Implementation (React/Next.js)
- Use Task tool with subagent_type="frontend-developer"
- Prompt: "Implement web version of feature using:
  - React 18+ with Next.js 14+ App Router
  - TypeScript for type safety
  - TanStack Query for API integration: [API spec]
  - Zustand/Redux Toolkit for state management
  - Tailwind CSS with design system: [design specs]
  - Progressive Web App capabilities
  - SSR/SSG optimization where appropriate
  - Web vitals optimization (LCP < 2.5s, FID < 100ms)
  Follow shared business logic: [architecture doc]"
- Context from previous: API contracts, design system, shared logic patterns
- Expected output: Complete web implementation with tests

### 4b. iOS Implementation (SwiftUI)
- Use Task tool with subagent_type="ios-developer"
- Prompt: "Implement iOS version using:
  - SwiftUI with iOS 17+ features
  - Swift 5.9+ with async/await
  - URLSession with Combine for API: [API spec]
  - Core Data/SwiftData for persistence
  - Design system compliance: [iOS HIG specs]
  - Widget extensions if applicable
  - Platform-specific features (Face ID, Haptics, Live Activities)
  - Testable MVVM architecture
  Follow shared patterns: [architecture doc]"
- Context from previous: API contracts, iOS design guidelines, shared models
- Expected output: Native iOS implementation with unit/UI tests

### 4c. Android Implementation (Kotlin/Compose)
- Use Task tool with subagent_type="mobile-developer"
- Prompt: "Implement Android version using:
  - Jetpack Compose with Material 3
  - Kotlin coroutines and Flow
  - Retrofit/Ktor for API: [API spec]
  - Room database for local storage
  - Hilt for dependency injection
  - Material You dynamic theming: [design specs]
  - Platform features (biometric auth, widgets)
  - Clean architecture with MVI pattern
  Follow shared logic: [architecture doc]"
- Context from previous: API contracts, Material Design specs, shared patterns
- Expected output: Native Android implementation with tests

### 4d. Desktop Implementation (Optional - Electron/Tauri)
- Use Task tool with subagent_type="frontend-mobile-development::frontend-developer"
- Prompt: "Implement desktop version using Tauri 2.0 or Electron with:
  - Shared web codebase where possible
  - Native OS integration (system tray, notifications)
  - File system access if needed
  - Auto-updater functionality
  - Code signing and notarization setup
  - Keyboard shortcuts and menu bar
  - Multi-window support if applicable
  Reuse web components: [web implementation]"
- Context from previous: Web implementation, desktop-specific requirements
- Expected output: Desktop application with platform packages

#### Imported: Phase 3: Integration and Validation

### 5. API Documentation and Testing
- Use Task tool with subagent_type="documentation-generation::api-documenter"
- Prompt: "Create comprehensive API documentation including:
  - Interactive OpenAPI/Swagger documentation
  - Platform-specific integration guides
  - SDK examples for each platform
  - Authentication flow diagrams
  - Rate limiting and quota information
  - Postman/Insomnia collections
  - WebSocket connection examples
  - Error handling best practices
  - API versioning strategy
  Test all endpoints with platform implementations."
- Context from previous: Implemented platforms, API usage patterns
- Expected output: Complete API documentation portal, test results

### 6. Cross-Platform Testing and Feature Parity
- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Validate feature parity across all platforms:
  - Functional testing matrix (features work identically)
  - UI consistency verification (follows design system)
  - Performance benchmarks per platform
  - Accessibility testing (platform-specific tools)
  - Network resilience testing (offline, slow connections)
  - Data synchronization validation
  - Platform-specific edge cases
  - End-to-end user journey tests
  Create test report with any platform discrepancies."
- Context from previous: All platform implementations, API documentation
- Expected output: Test report, parity matrix, performance metrics

### 7. Platform-Specific Optimizations
- Use Task tool with subagent_type="application-performance::performance-engineer"
- Prompt: "Optimize each platform implementation:
  - Web: Bundle size, lazy loading, CDN setup, SEO
  - iOS: App size, launch time, memory usage, battery
  - Android: APK size, startup time, frame rate, battery
  - Desktop: Binary size, resource usage, startup time
  - API: Response time, caching, compression
  Maintain feature parity while leveraging platform strengths.
  Document optimization techniques and trade-offs."
- Context from previous: Test results, performance metrics
- Expected output: Optimized implementations, performance improvements

#### Imported: Configuration Options

- **--platforms**: Specify target platforms (web,ios,android,desktop)
- **--api-first**: Generate API before UI implementation (default: true)
- **--shared-code**: Use Kotlin Multiplatform or similar (default: evaluate)
- **--design-system**: Use existing or create new (default: create)
- **--testing-strategy**: Unit, integration, e2e (default: all)

#### Imported: Success Criteria

- API contract defined and validated before implementation
- All platforms achieve feature parity with <5% variance
- Performance metrics meet platform-specific standards
- Accessibility standards met (WCAG 2.2 AA minimum)
- Cross-platform testing shows consistent behavior
- Documentation complete for all platforms
- Code reuse >40% between platforms where applicable
- User experience optimized for each platform's conventions

#### Imported: Platform-Specific Considerations

**Web**: PWA capabilities, SEO optimization, browser compatibility
**iOS**: App Store guidelines, TestFlight distribution, iOS-specific features
**Android**: Play Store requirements, Android App Bundles, device fragmentation
**Desktop**: Code signing, auto-updates, OS-specific installers

Initial feature specification: $ARGUMENTS

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
