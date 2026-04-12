---
name: azure-appconfiguration-ts-v2
description: "Azure App Configuration SDK for TypeScript workflow skill. Use this skill when the user needs Centralized configuration management with feature flags and dynamic refresh and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-appconfiguration-ts-v2", "azure-appconfiguration-ts", "centralized", "configuration", "management", "feature", "flags", "and"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure App Configuration SDK for TypeScript

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-appconfiguration-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure App Configuration SDK for TypeScript Centralized configuration management with feature flags and dynamic refresh.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, CRUD Operations, App Configuration Provider, Feature Flags, Snapshots.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Centralized configuration management with feature flags and dynamic refresh.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. bash # Low-level CRUD SDK npm install @azure/app-configuration @azure/identity # High-level provider (recommended for apps) npm install @azure/app-configuration-provider @azure/identity # Feature flag management npm install @microsoft/feature-management
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
# Low-level CRUD SDK
npm install @azure/app-configuration @azure/identity

# High-level provider (recommended for apps)
npm install @azure/app-configuration-provider @azure/identity

# Feature flag management
npm install @microsoft/feature-management
```

#### Imported: Environment Variables

```bash
AZURE_APPCONFIG_ENDPOINT=https://<your-resource>.azconfig.io
# OR
AZURE_APPCONFIG_CONNECTION_STRING=Endpoint=https://...;Id=...;Secret=...
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-appconfiguration-ts-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-appconfiguration-ts-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-appconfiguration-ts-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-appconfiguration-ts-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use provider for apps - @azure/app-configuration-provider for runtime config
- Use low-level for management - @azure/app-configuration for CRUD operations
- Enable refresh - For dynamic configuration updates
- Use labels - Separate configurations by environment
- Use snapshots - For immutable release configurations
- Sentinel pattern - Use a sentinel key to trigger full refresh
- RBAC roles - App Configuration Data Reader for read-only access

### Imported Operating Notes

#### Imported: Best Practices

1. **Use provider for apps** - `@azure/app-configuration-provider` for runtime config
2. **Use low-level for management** - `@azure/app-configuration` for CRUD operations
3. **Enable refresh** - For dynamic configuration updates
4. **Use labels** - Separate configurations by environment
5. **Use snapshots** - For immutable release configurations
6. **Sentinel pattern** - Use a sentinel key to trigger full refresh
7. **RBAC roles** - `App Configuration Data Reader` for read-only access

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-appconfiguration-ts`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Authentication

```typescript
import { AppConfigurationClient } from "@azure/app-configuration";
import { DefaultAzureCredential } from "@azure/identity";

// DefaultAzureCredential (recommended)
const client = new AppConfigurationClient(
  process.env.AZURE_APPCONFIG_ENDPOINT!,
  new DefaultAzureCredential()
);

// Connection string
const client2 = new AppConfigurationClient(
  process.env.AZURE_APPCONFIG_CONNECTION_STRING!
);
```

#### Imported: CRUD Operations

### Create/Update Settings

```typescript
// Add new (fails if exists)
await client.addConfigurationSetting({
  key: "app:settings:message",
  value: "Hello World",
  label: "production",
  contentType: "text/plain",
  tags: { environment: "prod" },
});

// Set (create or update)
await client.setConfigurationSetting({
  key: "app:settings:message",
  value: "Updated value",
  label: "production",
});

// Update with optimistic concurrency
const existing = await client.getConfigurationSetting({ key: "myKey" });
existing.value = "new value";
await client.setConfigurationSetting(existing, { onlyIfUnchanged: true });
```

### Read Settings

```typescript
// Get single setting
const setting = await client.getConfigurationSetting({
  key: "app:settings:message",
  label: "production",  // optional
});
console.log(setting.value);

// List with filters
const settings = client.listConfigurationSettings({
  keyFilter: "app:*",
  labelFilter: "production",
});

for await (const setting of settings) {
  console.log(`${setting.key}: ${setting.value}`);
}
```

### Delete Settings

```typescript
await client.deleteConfigurationSetting({
  key: "app:settings:message",
  label: "production",
});
```

### Lock/Unlock (Read-Only)

```typescript
// Lock
await client.setReadOnly({ key: "myKey", label: "prod" }, true);

// Unlock
await client.setReadOnly({ key: "myKey", label: "prod" }, false);
```

#### Imported: App Configuration Provider

### Load Configuration

```typescript
import { load } from "@azure/app-configuration-provider";
import { DefaultAzureCredential } from "@azure/identity";

const appConfig = await load(
  process.env.AZURE_APPCONFIG_ENDPOINT!,
  new DefaultAzureCredential(),
  {
    selectors: [
      { keyFilter: "app:*", labelFilter: "production" },
    ],
    trimKeyPrefixes: ["app:"],
  }
);

// Map-style access
const value = appConfig.get("settings:message");

// Object-style access
const config = appConfig.constructConfigurationObject({ separator: ":" });
console.log(config.settings.message);
```

### Dynamic Refresh

```typescript
const appConfig = await load(endpoint, credential, {
  selectors: [{ keyFilter: "app:*" }],
  refreshOptions: {
    enabled: true,
    refreshIntervalInMs: 30_000,  // 30 seconds
  },
});

// Trigger refresh (non-blocking)
appConfig.refresh();

// Listen for refresh events
const disposer = appConfig.onRefresh(() => {
  console.log("Configuration refreshed!");
});

// Express middleware pattern
app.use((req, res, next) => {
  appConfig.refresh();
  next();
});
```

### Key Vault References

```typescript
const appConfig = await load(endpoint, credential, {
  selectors: [{ keyFilter: "app:*" }],
  keyVaultOptions: {
    credential: new DefaultAzureCredential(),
    secretRefreshIntervalInMs: 7200_000,  // 2 hours
  },
});

// Secrets are automatically resolved
const dbPassword = appConfig.get("database:password");
```

#### Imported: Feature Flags

### Create Feature Flag (Low-Level)

```typescript
import {
  featureFlagPrefix,
  featureFlagContentType,
  FeatureFlagValue,
  ConfigurationSetting,
} from "@azure/app-configuration";

const flag: ConfigurationSetting<FeatureFlagValue> = {
  key: `${featureFlagPrefix}Beta`,
  contentType: featureFlagContentType,
  value: {
    id: "Beta",
    enabled: true,
    description: "Beta feature",
    conditions: {
      clientFilters: [
        {
          name: "Microsoft.Targeting",
          parameters: {
            Audience: {
              Users: ["user@example.com"],
              Groups: [{ Name: "beta-testers", RolloutPercentage: 50 }],
              DefaultRolloutPercentage: 0,
            },
          },
        },
      ],
    },
  },
};

await client.addConfigurationSetting(flag);
```

### Load and Evaluate Feature Flags

```typescript
import { load } from "@azure/app-configuration-provider";
import {
  ConfigurationMapFeatureFlagProvider,
  FeatureManager,
} from "@microsoft/feature-management";

const appConfig = await load(endpoint, credential, {
  featureFlagOptions: {
    enabled: true,
    selectors: [{ keyFilter: "*" }],
    refresh: {
      enabled: true,
      refreshIntervalInMs: 30_000,
    },
  },
});

const featureProvider = new ConfigurationMapFeatureFlagProvider(appConfig);
const featureManager = new FeatureManager(featureProvider);

// Simple check
const isEnabled = await featureManager.isEnabled("Beta");

// With targeting context
const isEnabledForUser = await featureManager.isEnabled("Beta", {
  userId: "user@example.com",
  groups: ["beta-testers"],
});
```

#### Imported: Snapshots

```typescript
// Create snapshot
const snapshot = await client.beginCreateSnapshotAndWait({
  name: "release-v1.0",
  retentionPeriod: 2592000,  // 30 days
  filters: [{ keyFilter: "app:*", labelFilter: "production" }],
});

// Get snapshot
const snap = await client.getSnapshot("release-v1.0");

// List settings in snapshot
const settings = client.listConfigurationSettingsForSnapshot("release-v1.0");
for await (const setting of settings) {
  console.log(`${setting.key}: ${setting.value}`);
}

// Archive/recover
await client.archiveSnapshot("release-v1.0");
await client.recoverSnapshot("release-v1.0");

// Load from snapshot (provider)
const config = await load(endpoint, credential, {
  selectors: [{ snapshotName: "release-v1.0" }],
});
```

#### Imported: Labels

```typescript
// Create settings with labels
await client.setConfigurationSetting({
  key: "database:host",
  value: "dev-db.example.com",
  label: "development",
});

await client.setConfigurationSetting({
  key: "database:host",
  value: "prod-db.example.com",
  label: "production",
});

// Filter by label
const prodSettings = client.listConfigurationSettings({
  keyFilter: "*",
  labelFilter: "production",
});

// No label (null label)
const noLabelSettings = client.listConfigurationSettings({
  labelFilter: "\0",
});

// List available labels
for await (const label of client.listLabels()) {
  console.log(label.name);
}
```

#### Imported: Key Types

```typescript
import {
  AppConfigurationClient,
  ConfigurationSetting,
  FeatureFlagValue,
  SecretReferenceValue,
  featureFlagPrefix,
  featureFlagContentType,
  secretReferenceContentType,
  ListConfigurationSettingsOptions,
} from "@azure/app-configuration";

import { load } from "@azure/app-configuration-provider";

import {
  FeatureManager,
  ConfigurationMapFeatureFlagProvider,
} from "@microsoft/feature-management";
```
