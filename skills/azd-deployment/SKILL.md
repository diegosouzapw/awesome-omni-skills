---
name: azd-deployment
description: "Azure Developer CLI (azd) Container Apps Deployment workflow skill. Use this skill when the user needs Deploy containerized frontend + backend applications to Azure Container Apps with remote builds, managed identity, and idempotent infrastructure and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["azd-deployment", "deploy", "containerized", "frontend", "backend", "applications", "azure", "container"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Azure Developer CLI (azd) Container Apps Deployment

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azd-deployment` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Developer CLI (azd) Container Apps Deployment Deploy containerized frontend + backend applications to Azure Container Apps with remote builds, managed identity, and idempotent infrastructure.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core File Structure, azure.yaml Configuration, Environment Variables Flow, Idempotent Deployments, Container App Service Discovery, Managed Identity & RBAC.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Deploy containerized frontend + backend applications to Azure Container Apps with remote builds, managed identity, and idempotent infrastructure.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Core File Structure

```
project/
├── azure.yaml              # azd service definitions + hooks
├── infra/
│   ├── main.bicep          # Root infrastructure module
│   ├── main.parameters.json # Parameter injection from env vars
│   └── modules/
│       ├── container-apps-environment.bicep
│       └── container-app.bicep
├── .azure/
│   ├── config.json         # Default environment pointer
│   └── <env-name>/
│       ├── .env            # Environment-specific values (azd-managed)
│       └── config.json     # Environment metadata
└── src/
    ├── frontend/Dockerfile
    └── backend/Dockerfile
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azd-deployment to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azd-deployment against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azd-deployment for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azd-deployment using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

```bash
# Initialize and deploy
azd auth login
azd init                    # Creates azure.yaml and .azure/ folder
azd env new <env-name>      # Create environment (dev, staging, prod)
azd up                      # Provision infra + build + deploy
```

#### Imported: Common Commands

```bash
# Environment management
azd env list                        # List environments
azd env select <name>               # Switch environment
azd env get-values                  # Show all env vars
azd env set KEY value               # Set variable

# Deployment
azd up                              # Full provision + deploy
azd provision                       # Infrastructure only
azd deploy                          # Code deployment only
azd deploy --service backend        # Deploy single service

# Debugging
azd show                            # Show project status
az containerapp logs show -n <app> -g <rg> --follow  # Stream logs
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azd-deployment`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Reference Files

- **Bicep patterns**: See references/bicep-patterns.md for Container Apps modules
- **Troubleshooting**: See references/troubleshooting.md for common issues
- **azure.yaml schema**: See references/azure-yaml-schema.md for full options

#### Imported: azure.yaml Configuration

### Minimal Configuration

```yaml
name: azd-deployment
services:
  backend:
    project: ./src/backend
    language: python
    host: containerapp
    docker:
      path: ./Dockerfile
      remoteBuild: true
```

### Full Configuration with Hooks

```yaml
name: azd-deployment
metadata:
  template: my-project@1.0.0

infra:
  provider: bicep
  path: ./infra

azure:
  location: eastus2

services:
  frontend:
    project: ./src/frontend
    language: ts
    host: containerapp
    docker:
      path: ./Dockerfile
      context: .
      remoteBuild: true

  backend:
    project: ./src/backend
    language: python
    host: containerapp
    docker:
      path: ./Dockerfile
      context: .
      remoteBuild: true

hooks:
  preprovision:
    shell: sh
    run: |
      echo "Before provisioning..."

  postprovision:
    shell: sh
    run: |
      echo "After provisioning - set up RBAC, etc."

  postdeploy:
    shell: sh
    run: |
      echo "Frontend: ${SERVICE_FRONTEND_URI}"
      echo "Backend: ${SERVICE_BACKEND_URI}"
```

### Key azure.yaml Options

| Option | Description |
|--------|-------------|
| `remoteBuild: true` | Build images in Azure Container Registry (recommended) |
| `context: .` | Docker build context relative to project path |
| `host: containerapp` | Deploy to Azure Container Apps |
| `infra.provider: bicep` | Use Bicep for infrastructure |

#### Imported: Environment Variables Flow

### Three-Level Configuration

1. **Local `.env`** - For local development only
2. **`.azure/<env>/.env`** - azd-managed, auto-populated from Bicep outputs
3. **`main.parameters.json`** - Maps env vars to Bicep parameters

### Parameter Injection Pattern

```json
// infra/main.parameters.json
{
  "parameters": {
    "environmentName": { "value": "${AZURE_ENV_NAME}" },
    "location": { "value": "${AZURE_LOCATION=eastus2}" },
    "azureOpenAiEndpoint": { "value": "${AZURE_OPENAI_ENDPOINT}" }
  }
}
```

Syntax: `${VAR_NAME}` or `${VAR_NAME=default_value}`

### Setting Environment Variables

```bash
# Set for current environment
azd env set AZURE_OPENAI_ENDPOINT "https://my-openai.openai.azure.com"
azd env set AZURE_SEARCH_ENDPOINT "https://my-search.search.windows.net"

# Set during init
azd env new prod
azd env set AZURE_OPENAI_ENDPOINT "..."
```

### Bicep Output → Environment Variable

```bicep
// In main.bicep - outputs auto-populate .azure/<env>/.env
output SERVICE_FRONTEND_URI string = frontend.outputs.uri
output SERVICE_BACKEND_URI string = backend.outputs.uri
output BACKEND_PRINCIPAL_ID string = backend.outputs.principalId
```

#### Imported: Idempotent Deployments

### Why azd up is Idempotent

1. **Bicep is declarative** - Resources reconcile to desired state
2. **Remote builds tag uniquely** - Image tags include deployment timestamp
3. **ACR reuses layers** - Only changed layers upload

### Preserving Manual Changes

Custom domains added via Portal can be lost on redeploy. Preserve with hooks:

```yaml
hooks:
  preprovision:
    shell: sh
    run: |
      # Save custom domains before provision
      if az containerapp show --name "$FRONTEND_NAME" -g "$RG" &>/dev/null; then
        az containerapp show --name "$FRONTEND_NAME" -g "$RG" \
          --query "properties.configuration.ingress.customDomains" \
          -o json > /tmp/domains.json
      fi

  postprovision:
    shell: sh
    run: |
      # Verify/restore custom domains
      if [ -f /tmp/domains.json ]; then
        echo "Saved domains: $(cat /tmp/domains.json)"
      fi
```

### Handling Existing Resources

```bicep
// Reference existing ACR (don't recreate)
resource containerRegistry 'Microsoft.ContainerRegistry/registries@2023-07-01' existing = {
  name: containerRegistryName
}

// Set customDomains to null to preserve Portal-added domains
customDomains: empty(customDomainsParam) ? null : customDomainsParam
```

#### Imported: Container App Service Discovery

Internal HTTP routing between Container Apps in same environment:

```bicep
// Backend reference in frontend env vars
env: [
  {
    name: 'BACKEND_URL'
    value: 'http://ca-backend-${resourceToken}'  // Internal DNS
  }
]
```

Frontend nginx proxies to internal URL:
```nginx
location /api {
    proxy_pass $BACKEND_URL;
}
```

#### Imported: Managed Identity & RBAC

### Enable System-Assigned Identity

```bicep
resource containerApp 'Microsoft.App/containerApps@2024-03-01' = {
  identity: {
    type: 'SystemAssigned'
  }
}

output principalId string = containerApp.identity.principalId
```

### Post-Provision RBAC Assignment

```yaml
hooks:
  postprovision:
    shell: sh
    run: |
      PRINCIPAL_ID="${BACKEND_PRINCIPAL_ID}"

      # Azure OpenAI access
      az role assignment create \
        --assignee-object-id "$PRINCIPAL_ID" \
        --assignee-principal-type ServicePrincipal \
        --role "Cognitive Services OpenAI User" \
        --scope "$OPENAI_RESOURCE_ID" 2>/dev/null || true

      # Azure AI Search access
      az role assignment create \
        --assignee-object-id "$PRINCIPAL_ID" \
        --role "Search Index Data Reader" \
        --scope "$SEARCH_RESOURCE_ID" 2>/dev/null || true
```

#### Imported: Critical Reminders

1. **Always use `remoteBuild: true`** - Local builds fail on M1/ARM Macs deploying to AMD64
2. **Bicep outputs auto-populate .azure/<env>/.env** - Don't manually edit
3. **Use `azd env set` for secrets** - Not main.parameters.json defaults
4. **Service tags (`azd-service-name`)** - Required for azd to find Container Apps
5. **`|| true` in hooks** - Prevent RBAC "already exists" errors from failing deploy

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
