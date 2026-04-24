---
name: upgrading-expo
description: "Upgrading Expo workflow skill. Use this skill when the user needs Upgrade Expo SDK versions and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["upgrading-expo", "upgrade", "expo", "sdk", "versions", "tools"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# Upgrading Expo

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/upgrading-expo` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Upgrading Expo

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Common Issues, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Upgrading to a new Expo SDK version
- Handling breaking changes between SDK versions
- Updating dependencies for compatibility
- Migrating deprecated APIs to new versions
- Preparing apps for new Expo features
- Use when the request clearly matches the imported source intent: Upgrade Expo SDK versions.

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

1. Pre-Upgrade Planning: Review release notes and breaking changes
2. Dependency Updates: Update packages for SDK compatibility
3. Configuration Migration: Update app.json and configuration files
4. Code Updates: Migrate deprecated APIs to new versions
5. Testing: Verify app functionality after upgrade
6. Review Expo SDK release notes
7. Identify breaking changes affecting your app

### Imported Workflow Notes

#### Imported: Instructions

This skill guides you through upgrading Expo SDK versions:

1. **Pre-Upgrade Planning**: Review release notes and breaking changes
2. **Dependency Updates**: Update packages for SDK compatibility
3. **Configuration Migration**: Update app.json and configuration files
4. **Code Updates**: Migrate deprecated APIs to new versions
5. **Testing**: Verify app functionality after upgrade

#### Imported: Upgrade Process

### 1. Pre-Upgrade Checklist

- Review Expo SDK release notes
- Identify breaking changes affecting your app
- Check compatibility of third-party packages
- Backup current project state
- Create a feature branch for the upgrade

### 2. Update Expo SDK

```bash
# Update Expo CLI
npm install -g expo-cli@latest

# Upgrade Expo SDK
npx expo install expo@latest

# Update all Expo packages
npx expo install --fix
```

### 3. Handle Breaking Changes

- Review migration guides for breaking changes
- Update deprecated API calls
- Modify configuration files as needed
- Update native dependencies if required
- Test affected features thoroughly

### 4. Update Dependencies

```bash
# Check for outdated packages
npx expo-doctor

# Update packages to compatible versions
npx expo install --fix

# Verify compatibility
npx expo-doctor
```

### 5. Testing

- Test core app functionality
- Verify native modules work correctly
- Check for runtime errors
- Test on both iOS and Android
- Verify app store builds still work

#### Imported: Overview

Upgrade Expo SDK versions safely, handling breaking changes, dependencies, and configuration updates.

#### Imported: Common Issues

### Dependency Conflicts

- Use `expo install` instead of `npm install` for Expo packages
- Check package compatibility with new SDK version
- Resolve peer dependency warnings

### Configuration Changes

- Update `app.json` for new SDK requirements
- Migrate deprecated configuration options
- Update native configuration files if needed

### Breaking API Changes

- Review API migration guides
- Update code to use new APIs
- Test affected features after changes

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @upgrading-expo to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @upgrading-expo against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @upgrading-expo for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @upgrading-expo using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Always upgrade in a feature branch
- Test thoroughly before merging
- Review release notes carefully
- Update dependencies incrementally
- Keep Expo CLI updated
- Use expo-doctor to verify setup
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

- Always upgrade in a feature branch
- Test thoroughly before merging
- Review release notes carefully
- Update dependencies incrementally
- Keep Expo CLI updated
- Use `expo-doctor` to verify setup

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/upgrading-expo`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@tmux` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@todoist-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tool-design` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tool-use-guardian` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

For more information, see the [source repository](https://github.com/expo/skills/tree/main/plugins/upgrading-expo).

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
