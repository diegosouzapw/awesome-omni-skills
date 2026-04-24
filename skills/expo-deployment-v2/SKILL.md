---
name: expo-deployment-v2
description: "Expo Deployment workflow skill. Use this skill when the user needs Deploy Expo apps to production and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["expo-deployment-v2", "expo-deployment", "deploy", "expo", "apps", "production", "devops"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-24"
---

# Expo Deployment

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/expo-deployment` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Expo Deployment

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Deploying Expo apps to production
- Publishing to app stores (iOS App Store, Google Play)
- Setting up over-the-air (OTA) updates
- Configuring production build settings
- Managing release channels and versions
- Use when the request clearly matches the imported source intent: Deploy Expo apps to production.

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

1. Build Configuration: Set up production build settings
2. App Store Submission: Prepare and submit to app stores
3. OTA Updates: Configure over-the-air update channels
4. Release Management: Manage versions and release channels
5. Production Optimization: Optimize apps for production
6. Ensure all tests pass
7. Update version numbers

### Imported Workflow Notes

#### Imported: Instructions

This skill provides guidance for deploying Expo apps:

1. **Build Configuration**: Set up production build settings
2. **App Store Submission**: Prepare and submit to app stores
3. **OTA Updates**: Configure over-the-air update channels
4. **Release Management**: Manage versions and release channels
5. **Production Optimization**: Optimize apps for production

#### Imported: Deployment Workflow

### Pre-Deployment

1. Ensure all tests pass
2. Update version numbers
3. Configure production environment variables
4. Review and optimize app bundle size
5. Test production builds locally

### App Store Deployment

1. Build production binaries (iOS/Android)
2. Configure app store metadata
3. Submit to App Store Connect / Google Play Console
4. Manage app store listings and screenshots
5. Handle app review process

### OTA Updates

1. Configure update channels (production, staging, etc.)
2. Build and publish updates
3. Manage rollout strategies
4. Monitor update adoption
5. Handle rollbacks if needed

#### Imported: Overview

Deploy Expo applications to production environments, including app stores and over-the-air updates.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @expo-deployment-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @expo-deployment-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @expo-deployment-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @expo-deployment-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use EAS Build for reliable production builds
- Test production builds before submission
- Implement proper error tracking and analytics
- Use release channels for staged rollouts
- Keep app store metadata up to date
- Monitor app performance in production
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

- Use EAS Build for reliable production builds
- Test production builds before submission
- Implement proper error tracking and analytics
- Use release channels for staged rollouts
- Keep app store metadata up to date
- Monitor app performance in production

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/expo-deployment`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@earllm-build-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@electron-development-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@elixir-pro-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@elon-musk-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

For more information, see the [source repository](https://github.com/expo/skills/tree/main/plugins/expo-deployment).
