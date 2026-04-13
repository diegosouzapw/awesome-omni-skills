---
name: dependency-upgrade-v2
description: "Dependency Upgrade workflow skill. Use this skill when the user needs Master major dependency version upgrades, compatibility analysis, staged upgrade strategies, and comprehensive testing approaches and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["dependency-upgrade-v2", "dependency-upgrade", "master", "major", "dependency", "version", "upgrades", "compatibility"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Dependency Upgrade

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/dependency-upgrade` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Dependency Upgrade Master major dependency version upgrades, compatibility analysis, staged upgrade strategies, and comprehensive testing approaches.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Semantic Versioning Review, Dependency Analysis, Staged Upgrade Strategy, Breaking Change Handling, Testing Strategy, Automated Dependency Updates.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to dependency upgrade
- You need a different domain or tool outside this scope
- Upgrading major framework versions
- Updating security-vulnerable dependencies
- Modernizing legacy dependencies
- Resolving dependency conflicts

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

#### Imported: Semantic Versioning Review

```
MAJOR.MINOR.PATCH (e.g., 2.3.1)

MAJOR: Breaking changes
MINOR: New features, backward compatible
PATCH: Bug fixes, backward compatible

^2.3.1 = >=2.3.1 <3.0.0 (minor updates)
~2.3.1 = >=2.3.1 <2.4.0 (patch updates)
2.3.1 = exact version
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @dependency-upgrade-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/dependency-upgrade-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/dependency-upgrade-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @dependency-upgrade-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Read Changelogs: Understand what changed
- Upgrade Incrementally: One major version at a time
- Test Thoroughly: Unit, integration, E2E tests
- Check Peer Dependencies: Resolve conflicts early
- Use Lock Files: Ensure reproducible installs
- Automate Updates: Use Renovate or Dependabot
- Monitor: Watch for runtime errors post-upgrade

### Imported Operating Notes

#### Imported: Best Practices

1. **Read Changelogs**: Understand what changed
2. **Upgrade Incrementally**: One major version at a time
3. **Test Thoroughly**: Unit, integration, E2E tests
4. **Check Peer Dependencies**: Resolve conflicts early
5. **Use Lock Files**: Ensure reproducible installs
6. **Automate Updates**: Use Renovate or Dependabot
7. **Monitor**: Watch for runtime errors post-upgrade
8. **Document**: Keep upgrade notes

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/dependency-upgrade`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Compatibility Matrix

```javascript
// compatibility-matrix.js
const compatibilityMatrix = {
  'react': {
    '16.x': {
      'react-dom': '^16.0.0',
      'react-router-dom': '^5.0.0',
      '@testing-library/react': '^11.0.0'
    },
    '17.x': {
      'react-dom': '^17.0.0',
      'react-router-dom': '^5.0.0 || ^6.0.0',
      '@testing-library/react': '^12.0.0'
    },
    '18.x': {
      'react-dom': '^18.0.0',
      'react-router-dom': '^6.0.0',
      '@testing-library/react': '^13.0.0'
    }
  }
};

function checkCompatibility(packages) {
  // Validate package versions against matrix
}
```

#### Imported: Resources

- **references/semver.md**: Semantic versioning guide
- **references/compatibility-matrix.md**: Common compatibility issues
- **references/staged-upgrades.md**: Incremental upgrade strategies
- **references/testing-strategy.md**: Comprehensive testing approaches
- **assets/upgrade-checklist.md**: Step-by-step checklist
- **assets/compatibility-matrix.csv**: Version compatibility table
- **scripts/audit-dependencies.sh**: Dependency audit script

#### Imported: Dependency Analysis

### Audit Dependencies
```bash
# npm
npm outdated
npm audit
npm audit fix

# yarn
yarn outdated
yarn audit

# Check for major updates
npx npm-check-updates
npx npm-check-updates -u  # Update package.json
```

### Analyze Dependency Tree
```bash
# See why a package is installed
npm ls package-name
yarn why package-name

# Find duplicate packages
npm dedupe
yarn dedupe

# Visualize dependencies
npx madge --image graph.png src/
```

#### Imported: Staged Upgrade Strategy

### Phase 1: Planning
```bash
# 1. Identify current versions
npm list --depth=0

# 2. Check for breaking changes
# Read CHANGELOG.md and MIGRATION.md

# 3. Create upgrade plan
echo "Upgrade order:
1. TypeScript
2. React
3. React Router
4. Testing libraries
5. Build tools" > UPGRADE_PLAN.md
```

### Phase 2: Incremental Updates
```bash
# Don't upgrade everything at once!

# Step 1: Update TypeScript
npm install typescript@latest

# Test
npm run test
npm run build

# Step 2: Update React (one major version at a time)
npm install react@17 react-dom@17

# Test again
npm run test

# Step 3: Continue with other packages
npm install react-router-dom@6

# And so on...
```

### Phase 3: Validation
```javascript
// tests/compatibility.test.js
describe('Dependency Compatibility', () => {
  it('should have compatible React versions', () => {
    const reactVersion = require('react/package.json').version;
    const reactDomVersion = require('react-dom/package.json').version;

    expect(reactVersion).toBe(reactDomVersion);
  });

  it('should not have peer dependency warnings', () => {
    // Run npm ls and check for warnings
  });
});
```

#### Imported: Breaking Change Handling

### Identifying Breaking Changes
```bash
# Use changelog parsers
npx changelog-parser react 16.0.0 17.0.0

# Or manually check
curl https://raw.githubusercontent.com/facebook/react/main/CHANGELOG.md
```

### Codemod for Automated Fixes
```bash
# React upgrade codemods
npx react-codeshift <transform> <path>

# Example: Update lifecycle methods
npx react-codeshift \
  --parser tsx \
  --transform react-codeshift/transforms/rename-unsafe-lifecycles.js \
  src/
```

### Custom Migration Script
```javascript
// migration-script.js
const fs = require('fs');
const glob = require('glob');

glob('src/**/*.tsx', (err, files) => {
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Replace old API with new API
    content = content.replace(
      /componentWillMount/g,
      'UNSAFE_componentWillMount'
    );

    // Update imports
    content = content.replace(
      /import { Component } from 'react'/g,
      "import React, { Component } from 'react'"
    );

    fs.writeFileSync(file, content);
  });
});
```

#### Imported: Testing Strategy

### Unit Tests
```javascript
// Ensure tests pass before and after upgrade
npm run test

// Update test utilities if needed
npm install @testing-library/react@latest
```

### Integration Tests
```javascript
// tests/integration/app.test.js
describe('App Integration', () => {
  it('should render without crashing', () => {
    render(<App />);
  });

  it('should handle navigation', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('Navigate'));
    expect(screen.getByText('New Page')).toBeInTheDocument();
  });
});
```

### Visual Regression Tests
```javascript
// visual-regression.test.js
describe('Visual Regression', () => {
  it('should match snapshot', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

### E2E Tests
```javascript
// cypress/e2e/app.cy.js
describe('E2E Tests', () => {
  it('should complete user flow', () => {
    cy.visit('/');
    cy.get('[data-testid="login"]').click();
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
```

#### Imported: Automated Dependency Updates

### Renovate Configuration
```json
// renovate.json
{
  "extends": ["config:base"],
  "packageRules": [
    {
      "matchUpdateTypes": ["minor", "patch"],
      "automerge": true
    },
    {
      "matchUpdateTypes": ["major"],
      "automerge": false,
      "labels": ["major-update"]
    }
  ],
  "schedule": ["before 3am on Monday"],
  "timezone": "America/New_York"
}
```

### Dependabot Configuration
```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
    reviewers:
      - "team-leads"
    commit-message:
      prefix: "chore"
      include: "scope"
```

#### Imported: Rollback Plan

```javascript
// rollback.sh
#!/bin/bash

# Save current state
git stash
git checkout -b upgrade-branch

# Attempt upgrade
npm install package@latest

# Run tests
if npm run test; then
  echo "Upgrade successful"
  git add package.json package-lock.json
  git commit -m "chore: upgrade package"
else
  echo "Upgrade failed, rolling back"
  git checkout main
  git branch -D upgrade-branch
  npm install  # Restore from package-lock.json
fi
```

#### Imported: Common Upgrade Patterns

### Lock File Management
```bash
# npm
npm install --package-lock-only  # Update lock file only
npm ci  # Clean install from lock file

# yarn
yarn install --frozen-lockfile  # CI mode
yarn upgrade-interactive  # Interactive upgrades
```

### Peer Dependency Resolution
```bash
# npm 7+: strict peer dependencies
npm install --legacy-peer-deps  # Ignore peer deps

# npm 8+: override peer dependencies
npm install --force
```

### Workspace Upgrades
```bash
# Update all workspace packages
npm install --workspaces

# Update specific workspace
npm install package@latest --workspace=packages/app
```

#### Imported: Upgrade Checklist

```markdown
Pre-Upgrade:
- [ ] Review current dependency versions
- [ ] Read changelogs for breaking changes
- [ ] Create feature branch
- [ ] Backup current state (git tag)
- [ ] Run full test suite (baseline)

During Upgrade:
- [ ] Upgrade one dependency at a time
- [ ] Update peer dependencies
- [ ] Fix TypeScript errors
- [ ] Update tests if needed
- [ ] Run test suite after each upgrade
- [ ] Check bundle size impact

Post-Upgrade:
- [ ] Full regression testing
- [ ] Performance testing
- [ ] Update documentation
- [ ] Deploy to staging
- [ ] Monitor for errors
- [ ] Deploy to production
```

#### Imported: Common Pitfalls

- Upgrading all dependencies at once
- Not testing after each upgrade
- Ignoring peer dependency warnings
- Forgetting to update lock file
- Not reading breaking change notes
- Skipping major versions
- Not having rollback plan

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
