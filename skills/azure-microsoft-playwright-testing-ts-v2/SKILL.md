---
name: azure-microsoft-playwright-testing-ts-v2
description: "Azure Playwright Workspaces SDK for TypeScript workflow skill. Use this skill when the user needs Run Playwright tests at scale with cloud-hosted browsers and integrated Azure portal reporting and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["azure-microsoft-playwright-testing-ts-v2", "azure-microsoft-playwright-testing-ts", "run", "playwright", "tests", "scale", "cloud-hosted", "browsers"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Azure Playwright Workspaces SDK for TypeScript

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-microsoft-playwright-testing-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Playwright Workspaces SDK for TypeScript Run Playwright tests at scale with cloud-hosted browsers and integrated Azure portal reporting. > Migration Notice: @azure/microsoft-playwright-testing is retired on March 8, 2026. Use @azure/playwright instead. See migration guide.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Configuration Options, CI/CD Integration, Key Types, Migration from Old Package.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Run Playwright tests at scale with cloud-hosted browsers and integrated Azure portal reporting.
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

1. Playwright version 1.47+ (basic usage)
2. Playwright version 1.57+ (Azure reporter features)
3. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
4. Read the overview, playbook, and source summary before loading any upstream support files.
5. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
6. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
7. Validate the result against the checklist, rubric, and expected evidence for the task.

### Imported Workflow Notes

#### Imported: Installation

```bash
# Recommended: Auto-generates config
npm init @azure/playwright@latest

# Manual installation
npm install @azure/playwright --save-dev
npm install @playwright/test@^1.47 --save-dev
npm install @azure/identity --save-dev
```

**Requirements:**
- Playwright version 1.47+ (basic usage)
- Playwright version 1.57+ (Azure reporter features)

#### Imported: Core Workflow

### Service Configuration

```typescript
// playwright.service.config.ts
import { defineConfig } from "@playwright/test";
import { createAzurePlaywrightConfig, ServiceOS } from "@azure/playwright";
import { DefaultAzureCredential } from "@azure/identity";
import config from "./playwright.config";

export default defineConfig(
  config,
  createAzurePlaywrightConfig(config, {
    os: ServiceOS.LINUX,
    connectTimeout: 30000,
    exposeNetwork: "<loopback>",
    credential: new DefaultAzureCredential(),
  })
);
```

### Run Tests

```bash
npx playwright test --config=playwright.service.config.ts --workers=20
```

### With Azure Reporter

```typescript
import { defineConfig } from "@playwright/test";
import { createAzurePlaywrightConfig, ServiceOS } from "@azure/playwright";
import { DefaultAzureCredential } from "@azure/identity";
import config from "./playwright.config";

export default defineConfig(
  config,
  createAzurePlaywrightConfig(config, {
    os: ServiceOS.LINUX,
    credential: new DefaultAzureCredential(),
  }),
  {
    reporter: [
      ["html", { open: "never" }],
      ["@azure/playwright/reporter"],
    ],
  }
);
```

### Manual Browser Connection

```typescript
import playwright, { test, expect, BrowserType } from "@playwright/test";
import { getConnectOptions } from "@azure/playwright";

test("manual connection", async ({ browserName }) => {
  const { wsEndpoint, options } = await getConnectOptions();
  const browser = await (playwright[browserName] as BrowserType).connect(wsEndpoint, options);
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://example.com");
  await expect(page).toHaveTitle(/Example/);

  await browser.close();
});
```

#### Imported: Environment Variables

```bash
PLAYWRIGHT_SERVICE_URL=wss://eastus.api.playwright.microsoft.com/playwrightworkspaces/{workspace-id}/browsers
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-microsoft-playwright-testing-ts-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-microsoft-playwright-testing-ts-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-microsoft-playwright-testing-ts-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-microsoft-playwright-testing-ts-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use Entra ID auth — More secure than access tokens
- Provide explicit credential — Always pass credential: new DefaultAzureCredential()
- Enable artifacts — Set trace: "on-first-retry", video: "retain-on-failure" in config
- Scale workers — Use --workers=20 or higher for parallel execution
- Region selection — Choose region closest to your test targets
- HTML reporter first — When using Azure reporter, list HTML reporter before Azure reporter
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use Entra ID auth** — More secure than access tokens
2. **Provide explicit credential** — Always pass `credential: new DefaultAzureCredential()`
3. **Enable artifacts** — Set `trace: "on-first-retry"`, `video: "retain-on-failure"` in config
4. **Scale workers** — Use `--workers=20` or higher for parallel execution
5. **Region selection** — Choose region closest to your test targets
6. **HTML reporter first** — When using Azure reporter, list HTML reporter before Azure reporter

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-microsoft-playwright-testing-ts`, fails to mention provenance, or does not use the support pack at all.
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

### Microsoft Entra ID (Recommended)

```bash
# Sign in with Azure CLI
az login
```

```typescript
// playwright.service.config.ts
import { defineConfig } from "@playwright/test";
import { createAzurePlaywrightConfig, ServiceOS } from "@azure/playwright";
import { DefaultAzureCredential } from "@azure/identity";
import config from "./playwright.config";

export default defineConfig(
  config,
  createAzurePlaywrightConfig(config, {
    os: ServiceOS.LINUX,
    credential: new DefaultAzureCredential(),
  })
);
```

### Custom Credential

```typescript
import { ManagedIdentityCredential } from "@azure/identity";
import { createAzurePlaywrightConfig } from "@azure/playwright";

export default defineConfig(
  config,
  createAzurePlaywrightConfig(config, {
    credential: new ManagedIdentityCredential(),
  })
);
```

#### Imported: Configuration Options

```typescript
type PlaywrightServiceAdditionalOptions = {
  serviceAuthType?: "ENTRA_ID" | "ACCESS_TOKEN";  // Default: ENTRA_ID
  os?: "linux" | "windows";                        // Default: linux
  runName?: string;                                // Custom run name for portal
  connectTimeout?: number;                         // Default: 30000ms
  exposeNetwork?: string;                          // Default: <loopback>
  credential?: TokenCredential;                    // REQUIRED for Entra ID
};
```

### ServiceOS Enum

```typescript
import { ServiceOS } from "@azure/playwright";

// Available values
ServiceOS.LINUX   // "linux" - default
ServiceOS.WINDOWS // "windows"
```

### ServiceAuth Enum

```typescript
import { ServiceAuth } from "@azure/playwright";

// Available values
ServiceAuth.ENTRA_ID      // Recommended - uses credential
ServiceAuth.ACCESS_TOKEN  // Use PLAYWRIGHT_SERVICE_ACCESS_TOKEN env var
```

#### Imported: CI/CD Integration

### GitHub Actions

```yaml
name: playwright-ts
on: [push, pull_request]

permissions:
  id-token: write
  contents: read

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Azure Login
        uses: azure/login@v2
        with:
          client-id: ${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: ${{ secrets.AZURE_TENANT_ID }}
          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}

      - run: npm ci
      
      - name: Run Tests
        env:
          PLAYWRIGHT_SERVICE_URL: ${{ secrets.PLAYWRIGHT_SERVICE_URL }}
        run: npx playwright test -c playwright.service.config.ts --workers=20
```

### Azure Pipelines

```yaml
- task: AzureCLI@2
  displayName: Run Playwright Tests
  env:
    PLAYWRIGHT_SERVICE_URL: $(PLAYWRIGHT_SERVICE_URL)
  inputs:
    azureSubscription: My_Service_Connection
    scriptType: pscore
    inlineScript: |
      npx playwright test -c playwright.service.config.ts --workers=20
    addSpnToEnvironment: true
```

#### Imported: Key Types

```typescript
import {
  createAzurePlaywrightConfig,
  getConnectOptions,
  ServiceOS,
  ServiceAuth,
  ServiceEnvironmentVariable,
} from "@azure/playwright";

import type {
  OsType,
  AuthenticationType,
  BrowserConnectOptions,
  PlaywrightServiceAdditionalOptions,
} from "@azure/playwright";
```

#### Imported: Migration from Old Package

| Old (`@azure/microsoft-playwright-testing`) | New (`@azure/playwright`) |
|---------------------------------------------|---------------------------|
| `getServiceConfig()` | `createAzurePlaywrightConfig()` |
| `timeout` option | `connectTimeout` option |
| `runId` option | `runName` option |
| `useCloudHostedBrowsers` option | Removed (always enabled) |
| `@azure/microsoft-playwright-testing/reporter` | `@azure/playwright/reporter` |
| Implicit credential | Explicit `credential` parameter |

### Before (Old)

```typescript
import { getServiceConfig, ServiceOS } from "@azure/microsoft-playwright-testing";

export default defineConfig(
  config,
  getServiceConfig(config, {
    os: ServiceOS.LINUX,
    timeout: 30000,
    useCloudHostedBrowsers: true,
  }),
  {
    reporter: [["@azure/microsoft-playwright-testing/reporter"]],
  }
);
```

### After (New)

```typescript
import { createAzurePlaywrightConfig, ServiceOS } from "@azure/playwright";
import { DefaultAzureCredential } from "@azure/identity";

export default defineConfig(
  config,
  createAzurePlaywrightConfig(config, {
    os: ServiceOS.LINUX,
    connectTimeout: 30000,
    credential: new DefaultAzureCredential(),
  }),
  {
    reporter: [
      ["html", { open: "never" }],
      ["@azure/playwright/reporter"],
    ],
  }
);
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
