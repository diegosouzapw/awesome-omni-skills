---
name: skill-rails-upgrade
description: "Rails Upgrade Analyzer workflow skill. Use this skill when the user needs Analyze Rails apps and provide upgrade assessments and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["skill-rails-upgrade", "analyze", "rails", "apps", "and", "provide", "upgrade", "assessments"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-05-17"
---

# Rails Upgrade Analyzer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/skill-rails-upgrade` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Upgrade Plan: Rails X.Y.Z → A.B.C, Error Handling, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Analyze Rails apps and provide upgrade assessments Use this skill when working with analyze rails apps and provide upgrade assessments.
- # Rails Upgrade Analyzer Analyze the current Rails application and provide a comprehensive upgrade assessment with selective file merging.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. Gemfile (must exist and contain 'rails')
2. config/application.rb (Rails application config)
3. config/environment.rb (Rails environment)
4. First, check Gemfile.lock for the exact installed version (look for rails (x.y.z))
5. If not found, check Gemfile for the version constraint
6. Patch upgrade: Same major.minor, different patch (e.g., 7.1.3 → 7.1.5)
7. Minor upgrade: Same major, different minor (e.g., 7.1.3 → 7.2.0)

### Imported Workflow Notes

#### Imported: Step 1: Verify Rails Application

Check that we're in a Rails application by looking for these files:
- `Gemfile` (must exist and contain 'rails')
- `config/application.rb` (Rails application config)
- `config/environment.rb` (Rails environment)

If any of these are missing or don't indicate a Rails app, stop and inform the user this doesn't appear to be a Rails application.

#### Imported: Step 2: Get Current Rails Version

Extract the current Rails version from:
1. First, check `Gemfile.lock` for the exact installed version (look for `rails (x.y.z)`)
2. If not found, check `Gemfile` for the version constraint

Report the exact current version (e.g., `7.1.3`).

#### Imported: Step 3: Find Latest Rails Version

Use the GitHub CLI to fetch the latest Rails release:

```bash
gh api repos/rails/rails/releases/latest --jq '.tag_name'
```

This returns the latest stable version tag (e.g., `v8.0.1`). Strip the 'v' prefix for comparison.

Also check recent tags to understand the release landscape:

```bash
gh api repos/rails/rails/tags --jq '.[0:10] | .[].name'
```

#### Imported: Step 4: Determine Upgrade Type

Compare current and latest versions to classify the upgrade:

- **Patch upgrade**: Same major.minor, different patch (e.g., 7.1.3 → 7.1.5)
- **Minor upgrade**: Same major, different minor (e.g., 7.1.3 → 7.2.0)
- **Major upgrade**: Different major version (e.g., 7.1.3 → 8.0.0)

#### Imported: Step 5: Fetch Upgrade Guide

Use WebFetch to get the official Rails upgrade guide:

URL: `https://guides.rubyonrails.org/upgrading_ruby_on_rails.html`

Look for sections relevant to the version jump. The guide is organized by target version with sections like:
- "Upgrading from Rails X.Y to Rails X.Z"
- Breaking changes
- Deprecation warnings
- Configuration changes
- Required migrations

Extract and summarize the relevant sections for the user's specific upgrade path.

#### Imported: Step 6: Fetch Rails Diff

Use WebFetch to get the diff between versions from railsdiff.org:

URL: `https://railsdiff.org/{current_version}/{target_version}`

For example: `https://railsdiff.org/7.1.3/8.0.0`

This shows:
- Changes to default configuration files
- New files that need to be added
- Modified initializers
- Updated dependencies
- Changes to bin/ scripts

Summarize the key file changes.

#### Imported: Step 7: Check JavaScript Dependencies

Rails applications often include JavaScript packages that should be updated alongside Rails. Check for and report on these dependencies.

### 7.1: Identify JS Package Manager

Check which package manager the app uses:

```bash
# Check for package.json (npm/yarn)
ls package.json 2>/dev/null

# Check for importmap (Rails 7+)
ls config/importmap.rb 2>/dev/null
```

### 7.2: Check Rails-Related JS Packages

If `package.json` exists, check for these Rails-related packages:

```bash
# Extract current versions of Rails-related packages
cat package.json | grep -E '"@hotwired/|"@rails/|"stimulus"|"turbo-rails"' || echo "No Rails JS packages found"
```

**Key packages to check:**

| Package | Purpose | Version Alignment |
|---------|---------|-------------------|
| `@hotwired/turbo-rails` | Turbo Drive/Frames/Streams | Should match Rails version era |
| `@hotwired/stimulus` | Stimulus JS framework | Generally stable across Rails versions |
| `@rails/actioncable` | WebSocket support | Should match Rails version |
| `@rails/activestorage` | Direct uploads | Should match Rails version |
| `@rails/actiontext` | Rich text editing | Should match Rails version |
| `@rails/request.js` | Rails UJS replacement | Should match Rails version era |

### 7.3: Check for Updates

For npm/yarn projects, check for available updates:

```bash
# Using npm
npm outdated @hotwired/turbo-rails @hotwired/stimulus @rails/actioncable @rails/activestorage 2>/dev/null

# Or check latest versions directly
npm view @hotwired/turbo-rails version 2>/dev/null
npm view @rails/actioncable version 2>/dev/null
```

### 7.4: Check Importmap Pins (if applicable)

If the app uses importmap-rails, check `config/importmap.rb` for pinned versions:

```bash
cat config/importmap.rb | grep -E 'pin.*turbo|pin.*stimulus|pin.*@rails' || echo "No importmap pins found"
```

To update importmap pins:
```bash
bin/importmap pin @hotwired/turbo-rails
bin/importmap pin @hotwired/stimulus
```

### 7.5: JS Dependency Summary

Include in the upgrade summary:

```
### JavaScript Dependencies

**Package Manager**: [npm/yarn/importmap/none]

| Package | Current | Latest | Action |
|---------|---------|--------|--------|
| @hotwired/turbo-rails | 8.0.4 | 8.0.12 | Update recommended |
| @rails/actioncable | 7.1.0 | 8.0.0 | Update with Rails |
| ... | ... | ... | ... |

**Recommended JS Updates:**
- Run `npm update @hotwired/turbo-rails` (or yarn equivalent)
- Run `npm update @rails/actioncable @rails/activestorage` to match Rails version
```

---

#### Imported: Step 8: Generate Upgrade Summary

Provide a comprehensive summary including all findings from Steps 1-7:

### Version Information
- Current version: X.Y.Z
- Latest version: A.B.C
- Upgrade type: [Patch/Minor/Major]

### Upgrade Complexity Assessment

Rate the upgrade as **Small**, **Medium**, or **Large** based on:

| Factor | Small | Medium | Large |
|--------|-------|--------|-------|
| Version jump | Patch only | Minor version | Major version |
| Breaking changes | None | Few, well-documented | Many, significant |
| Config changes | Minimal | Moderate | Extensive |
| Deprecations | None active | Some to address | Many requiring refactoring |
| Dependencies | Compatible | Some updates needed | Major dependency updates |

### Key Changes to Address

List the most important changes the user needs to handle:
1. Configuration file updates
2. Deprecated methods/features to update
3. New required dependencies
4. Database migrations needed
5. Breaking API changes

### Recommended Upgrade Steps

1. Update test suite and ensure passing
2. Review deprecation warnings in current version
3. Update Gemfile with new Rails version
4. Run `bundle update rails`
5. Update JavaScript dependencies (see JS Dependencies section)
6. **DO NOT run `rails app:update` directly** - use the selective merge process below
7. Run database migrations
8. Run test suite
9. Review and update deprecated code

### Resources

- Rails Upgrade Guide: https://guides.rubyonrails.org/upgrading_ruby_on_rails.html
- Rails Diff: https://railsdiff.org/{current}/{target}
- Release Notes: https://github.com/rails/rails/releases/tag/v{target}

---


### When to Use This Skill

Analyze Rails apps and provide upgrade assessments

Use this skill when working with analyze rails apps and provide upgrade assessments.

#### Imported: Step 9: Selective File Update (replaces `rails app:update`)

**IMPORTANT:** Do NOT run `rails app:update` as it overwrites files without considering local customizations. Instead, follow this selective merge process:

### 9.1: Detect Local Customizations

Before any upgrade, identify files with local customizations:

```bash
# Check for uncommitted changes
git status

# List config files that differ from a fresh Rails app
# These are the files we need to be careful with
git diff HEAD --name-only -- config/ bin/ public/
```

Create a mental list of files in these categories:
- **Custom config files**: Files with project-specific settings (i18n, mailer, etc.)
- **Modified bin scripts**: Scripts with custom behavior (bin/dev with foreman, etc.)
- **Standard files**: Files that haven't been customized

### 9.2: Analyze Required Changes from Railsdiff

Based on the railsdiff output from Step 6, categorize each changed file:

| Category | Action | Example |
|----------|--------|---------|
| **New files** | Create directly | `config/initializers/new_framework_defaults_X_Y.rb` |
| **Unchanged locally** | Safe to overwrite | `public/404.html` (if not customized) |
| **Customized locally** | Manual merge needed | `config/application.rb`, `bin/dev` |
| **Comment-only changes** | Usually skip | Minor comment updates in config files |

### 9.3: Create Upgrade Plan

Present the user with a clear upgrade plan:

```

#### Imported: Step 10: Finalize Framework Defaults

After verifying the app works:

1. Review `config/initializers/new_framework_defaults_X_Y.rb`
2. Enable each new default one by one, testing after each
3. Once all defaults are enabled and tested, update `config/application.rb`:
   ```ruby
   config.load_defaults X.Y  # Update to new version
   ```
4. Delete the `new_framework_defaults_X_Y.rb` file

---


### When to Use This Skill

Analyze Rails apps and provide upgrade assessments

Use this skill when working with analyze rails apps and provide upgrade assessments.

#### Imported: Upgrade Plan: Rails X.Y.Z → A.B.C

### New Files (will be created):
- config/initializers/new_framework_defaults_A_B.rb
- bin/ci (new CI script)

### Safe to Update (no local customizations):
- public/400.html
- public/404.html
- public/500.html

### Needs Manual Merge (local customizations detected):
- config/application.rb
  └─ Local: i18n configuration
  └─ Rails: [describe new Rails changes if any]

- config/environments/development.rb
  └─ Local: letter_opener mailer config
  └─ Rails: [describe new Rails changes]

- bin/dev
  └─ Local: foreman + Procfile.dev setup
  └─ Rails: changed to simple ruby script

### Skip (comment-only or irrelevant changes):
- config/puma.rb (only comment changes)
```

### 9.4: Execute Upgrade Plan

After user confirms the plan:

#### For New Files:
Create them directly using the content from railsdiff or by extracting from a fresh Rails app:

```bash
# Generate a temporary fresh Rails app to extract new files
cd /tmp && rails new rails_template --skip-git --skip-bundle
# Then copy needed files
```

Or use the Rails generator for specific files:
```bash
bin/rails app:update:configs  # Only updates config files, still interactive
```

#### For Safe Updates:
Overwrite these files as they have no local customizations.

#### For Manual Merges:
For each file needing merge, show the user:

1. **Current local version** (their customizations)
2. **New Rails default** (from railsdiff)
3. **Suggested merged version** that:
   - Keeps all local customizations
   - Adds only essential new Rails functionality
   - Removes deprecated settings

Example merge for `config/application.rb`:
```ruby
# KEEP local customizations:
config.i18n.available_locales = [:de, :en]
config.i18n.default_locale = :de
config.i18n.fallbacks = [:en]

# ADD new Rails 8.1 settings if needed:
# (usually none required - new defaults come via new_framework_defaults file)
```

### 9.5: Handle Active Storage Migrations

After file updates, run any new migrations:

```bash
bin/rails db:migrate
```

Check for new migrations that were added:
```bash
ls -la db/migrate/ | tail -10
```

### 9.6: Verify Upgrade

After completing the merge:

1. Start the Rails server and check for errors:
   ```bash
   bin/dev  # or bin/rails server
   ```

2. Check the Rails console:
   ```bash
   bin/rails console
   ```

3. Run the test suite:
   ```bash
   bin/rails test
   ```

4. Review deprecation warnings in logs

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @skill-rails-upgrade to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @skill-rails-upgrade against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @skill-rails-upgrade for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @skill-rails-upgrade using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Never overwrite without checking - Always check for local customizations first
- Preserve user intent - Local customizations exist for a reason
- Minimal changes - Only add what's necessary for the new Rails version
- Transparency - Show the user exactly what will change before doing it
- Reversibility - User should be able to git checkout to restore if needed
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Key Principles

1. **Never overwrite without checking** - Always check for local customizations first
2. **Preserve user intent** - Local customizations exist for a reason
3. **Minimal changes** - Only add what's necessary for the new Rails version
4. **Transparency** - Show the user exactly what will change before doing it
5. **Reversibility** - User should be able to `git checkout` to restore if needed

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/skill-rails-upgrade`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@20-andruia-niche-intelligence` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-criminal` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-especialista` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agent-memory-systems` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Error Handling

- If `gh` CLI is not authenticated, instruct the user to run `gh auth login`
- If railsdiff.org doesn't have the exact versions, try with major.minor.0 versions
- If the app is already on the latest version, congratulate the user and note any upcoming releases
- If local customizations would be lost, ALWAYS stop and show the user what would be overwritten before proceeding

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
