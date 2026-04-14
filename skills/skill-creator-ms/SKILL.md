---
name: skill-creator-ms
description: "Skill Creator workflow skill. Use this skill when the user needs Guide for creating effective skills for AI coding agents working with Azure SDKs and Microsoft Foundry services. Use when creating new skills or updating existing skills and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: documentation
tags: ["skill-creator-ms", "guide", "for", "creating", "effective", "coding", "working", "azure"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Skill Creator

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/skill-creator-ms` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Skill Creator Guide for creating skills that extend AI agent capabilities, with emphasis on Azure SDKs and Microsoft Foundry. > Required Context: When creating SDK or API skills, users MUST provide the SDK package name, documentation URL, or repository reference for the skill to be based on.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: About Skills, Before Implementation, Skill Structure, Creating Azure SDK Skills, Environment Variables, Authentication.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Guide for creating effective skills for AI coding agents working with Azure SDKs and Microsoft Foundry services. Use when creating new skills or updating existing skills.
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

1. Gather SDK Context — User provides SDK/API reference (REQUIRED)
2. Understand — Research SDK patterns from official docs
3. Plan — Identify reusable resources and product area category
4. Create — Write SKILL.md in .github/skills/<skill-name>/
5. Categorize — Create symlink in skills/<language>/<category>/
6. Test — Create acceptance criteria and test scenarios
7. Document — Update README.md skill catalog

### Imported Workflow Notes

#### Imported: Installation

\`\`\`bash
pip install azure-ai-example
\`\`\`

#### Imported: Core Workflow

\`\`\`python
# Create
item = client.create_item(name="example", data={...})

# List (pagination handled automatically)
for item in client.list_items():
    print(item.name)

# Long-running operation
poller = client.begin_process(item_id)
result = poller.result()

# Cleanup
client.delete_item(item_id)
\`\`\`

#### Imported: Skill Creation Process

1. **Gather SDK Context** — User provides SDK/API reference (REQUIRED)
2. **Understand** — Research SDK patterns from official docs
3. **Plan** — Identify reusable resources and product area category
4. **Create** — Write SKILL.md in `.github/skills/<skill-name>/`
5. **Categorize** — Create symlink in `skills/<language>/<category>/`
6. **Test** — Create acceptance criteria and test scenarios
7. **Document** — Update README.md skill catalog
8. **Iterate** — Refine based on real usage

### Step 1: Gather SDK Context (REQUIRED)

**Before creating any SDK skill, the user MUST provide:**

| Required | Example | Purpose |
|----------|---------|---------|
| **SDK Package** | `azure-ai-agents`, `Azure.AI.OpenAI` | Identifies the exact SDK |
| **Documentation URL** | `https://learn.microsoft.com/en-us/azure/ai-services/...` | Primary source of truth |
| **Repository** (optional) | `Azure/azure-sdk-for-python` | For code patterns |

**Prompt the user if not provided:**
```
To create this skill, I need:
1. The SDK package name (e.g., azure-ai-projects)
2. The Microsoft Learn documentation URL or GitHub repo
3. The target language (py/dotnet/ts/java)
```

**Search official docs first:**
```bash
# Use microsoft-docs MCP to get current API patterns
# Query: "[SDK name] [operation] [language]"
# Verify: Parameters match the latest SDK version
```

### Step 2: Understand the Skill

Gather concrete examples:

- "What SDK operations should this skill cover?"
- "What triggers should activate this skill?"
- "What errors do developers commonly encounter?"

| Example Task | Reusable Resource |
|--------------|-------------------|
| Same auth code each time | Code example in SKILL.md |
| Complex streaming patterns | `references/streaming.md` |
| Tool configurations | `references/tools.md` |
| Error handling patterns | `references/error-handling.md` |

### Step 3: Plan Product Area Category

Skills are organized by **language** and **product area** in the `skills/` directory via symlinks.

**Product Area Categories:**

| Category | Description | Examples |
|----------|-------------|----------|
| `foundry` | AI Foundry, agents, projects, inference | `azure-ai-agents-py`, `azure-ai-projects-py` |
| `data` | Storage, Cosmos DB, Tables, Data Lake | `azure-cosmos-py`, `azure-storage-blob-py` |
| `messaging` | Event Hubs, Service Bus, Event Grid | `azure-eventhub-py`, `azure-servicebus-py` |
| `monitoring` | OpenTelemetry, App Insights, Query | `azure-monitor-opentelemetry-py` |
| `identity` | Authentication, DefaultAzureCredential | `azure-identity-py` |
| `security` | Key Vault, secrets, keys, certificates | `azure-keyvault-py` |
| `integration` | API Management, App Configuration | `azure-appconfiguration-py` |
| `compute` | Batch, ML compute | `azure-compute-batch-java` |
| `container` | Container Registry, ACR | `azure-containerregistry-py` |

**Determine the category** based on:
1. Azure service family (Storage → `data`, Event Hubs → `messaging`)
2. Primary use case (AI agents → `foundry`)
3. Existing skills in the same service area

### Step 4: Create the Skill

**Location:** `.github/skills/<skill-name>/SKILL.md`

**Naming convention:**
- `azure-<service>-<subservice>-<language>`
- Examples: `azure-ai-agents-py`, `azure-cosmos-java`, `azure-storage-blob-ts`

**For Azure SDK skills:**

1. Search `microsoft-docs` MCP for current API patterns
2. Verify against installed SDK version
3. Follow the section order above
4. Include cleanup code in examples
5. Add feature comparison tables

**Write bundled resources first**, then SKILL.md.

**Frontmatter:**

```yaml
---
name: skill-name-py
description: |
  Azure Service SDK for Python. Use for [specific features].
  Triggers: "service name", "create resource", "specific operation".
---
```

### Step 5: Categorize with Symlinks

After creating the skill in `.github/skills/`, create a symlink in the appropriate category:

```bash
# Pattern: skills/<language>/<category>/<short-name> -> ../../../.github/skills/<full-skill-name>

# Example for azure-ai-agents-py in python/foundry:
cd skills/python/foundry
ln -s ../../../.github/skills/azure-ai-agents-py agents

# Example for azure-cosmos-db-py in python/data:
cd skills/python/data
ln -s ../../../.github/skills/azure-cosmos-db-py cosmos-db
```

**Symlink naming:**
- Use short, descriptive names (e.g., `agents`, `cosmos`, `blob`)
- Remove the `azure-` prefix and language suffix
- Match existing patterns in the category

**Verify the symlink:**
```bash
ls -la skills/python/foundry/agents
# Should show: agents -> ../../../.github/skills/azure-ai-agents-py
```

### Step 6: Create Tests

**Every skill MUST have acceptance criteria and test scenarios.**

#### 6.1 Create Acceptance Criteria

**Location:** `.github/skills/<skill-name>/references/acceptance-criteria.md`

**Source materials** (in priority order):
1. Official Microsoft Learn docs (via `microsoft-docs` MCP)
2. SDK source code from the repository
3. Existing reference files in the skill

**Format:**
```markdown
# Acceptance Criteria: <skill-name>

**SDK**: `package-name`
**Repository**: https://github.com/Azure/azure-sdk-for-<language>
**Purpose**: Skill testing acceptance criteria

---

#### Imported: About Skills

Skills are modular knowledge packages that transform general-purpose agents into specialized experts:

1. **Procedural knowledge** — Multi-step workflows for specific domains
2. **SDK expertise** — API patterns, authentication, error handling for Azure services
3. **Domain context** — Schemas, business logic, company-specific patterns
4. **Bundled resources** — Scripts, references, templates for complex tasks

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @skill-creator-ms to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/skill-creator-ms/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/skill-creator-ms/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @skill-creator-ms using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

[Minimal example]

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Concise is Key The context window is a shared resource.
- Challenge each piece: "Does this justify its token cost?" Default assumption: Agents are already capable.
- Only add what they don't already know.
- Fresh Documentation First Azure SDKs change constantly.
- Skills should instruct agents to verify documentation: ```markdown
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Core Principles

### 1. Concise is Key

The context window is a shared resource. Challenge each piece: "Does this justify its token cost?"

**Default assumption: Agents are already capable.** Only add what they don't already know.

### 2. Fresh Documentation First

**Azure SDKs change constantly.** Skills should instruct agents to verify documentation:

```markdown

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/skill-creator-ms`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Reference Files

| File | Contents |
|------|----------|
| references/tools.md | Tool integrations |
| references/streaming.md | Event streaming patterns |
```

---

#### Imported: Design Pattern References

| Reference | Contents |
|-----------|----------|
| `references/workflows.md` | Sequential and conditional workflows |
| `references/output-patterns.md` | Templates and examples |
| `references/azure-sdk-patterns.md` | Language-specific Azure SDK patterns |

---

#### Imported: Before Implementation

Search `microsoft-docs` MCP for current API patterns:
- Query: "[SDK name] [operation] python"
- Verify: Parameters match your installed SDK version
```

### 3. Degrees of Freedom

Match specificity to task fragility:

| Freedom | When | Example |
|---------|------|---------|
| **High** | Multiple valid approaches | Text guidelines |
| **Medium** | Preferred pattern with variation | Pseudocode |
| **Low** | Must be exact | Specific scripts |

### 4. Progressive Disclosure

Skills load in three levels:

1. **Metadata** (~100 words) — Always in context
2. **SKILL.md body** (<5k words) — When skill triggers
3. **References** (unlimited) — As needed

**Keep SKILL.md under 500 lines.** Split into reference files when approaching this limit.

---

#### Imported: Skill Structure

```
skill-name/
├── SKILL.md (required)
│   ├── YAML frontmatter (name, description)
│   └── Markdown instructions
└── Bundled Resources (optional)
    ├── scripts/      — Executable code
    ├── references/   — Documentation loaded as needed
    └── assets/       — Output resources (templates, images)
```

### SKILL.md

- **Frontmatter**: `name` and `description`. The description is the trigger mechanism.
- **Body**: Instructions loaded only after triggering.

### Bundled Resources

| Type | Purpose | When to Include |
|------|---------|-----------------|
| `scripts/` | Deterministic operations | Same code rewritten repeatedly |
| `references/` | Detailed patterns | API docs, schemas, detailed guides |
| `assets/` | Output resources | Templates, images, boilerplate |

**Don't include**: README.md, CHANGELOG.md, installation guides.

---

#### Imported: Creating Azure SDK Skills

When creating skills for Azure SDKs, follow these patterns consistently.

### Skill Section Order

Follow this structure (based on existing Azure SDK skills):

1. **Title** — `# SDK Name`
2. **Installation** — `pip install`, `npm install`, etc.
3. **Environment Variables** — Required configuration
4. **Authentication** — Always `DefaultAzureCredential`
5. **Core Workflow** — Minimal viable example
6. **Feature Tables** — Clients, methods, tools
7. **Best Practices** — Numbered list
8. **Reference Links** — Table linking to `/references/*.md`

### Authentication Pattern (All Languages)

Always use `DefaultAzureCredential`:

```python
# Python
from azure.identity import DefaultAzureCredential
credential = DefaultAzureCredential()
client = ServiceClient(endpoint, credential)
```

```csharp
// C#
var credential = new DefaultAzureCredential();
var client = new ServiceClient(new Uri(endpoint), credential);
```

```java
// Java
TokenCredential credential = new DefaultAzureCredentialBuilder().build();
ServiceClient client = new ServiceClientBuilder()
    .endpoint(endpoint)
    .credential(credential)
    .buildClient();
```

```typescript
// TypeScript
import { DefaultAzureCredential } from "@azure/identity";
const credential = new DefaultAzureCredential();
const client = new ServiceClient(endpoint, credential);
```

**Never hardcode credentials. Use environment variables.**

### Standard Verb Patterns

Azure SDKs use consistent verbs across all languages:

| Verb | Behavior |
|------|----------|
| `create` | Create new; fail if exists |
| `upsert` | Create or update |
| `get` | Retrieve; error if missing |
| `list` | Return collection |
| `delete` | Succeed even if missing |
| `begin` | Start long-running operation |

### Language-Specific Patterns

See `references/azure-sdk-patterns.md` for detailed patterns including:

- **Python**: `ItemPaged`, `LROPoller`, context managers, Sphinx docstrings
- **.NET**: `Response<T>`, `Pageable<T>`, `Operation<T>`, mocking support
- **Java**: Builder pattern, `PagedIterable`/`PagedFlux`, Reactor types
- **TypeScript**: `PagedAsyncIterableIterator`, `AbortSignal`, browser considerations

### Example: Azure SDK Skill Structure

```markdown
---
name: skill-creator
description: |
  Azure AI Example SDK for Python. Use for [specific service features].
  Triggers: "example service", "create example", "list examples".
---

# Azure AI Example SDK

#### Imported: Environment Variables

\`\`\`bash
AZURE_EXAMPLE_ENDPOINT=https://<resource>.example.azure.com
\`\`\`

#### Imported: Authentication

\`\`\`python
from azure.identity import DefaultAzureCredential
from azure.ai.example import ExampleClient

credential = DefaultAzureCredential()
client = ExampleClient(
    endpoint=os.environ["AZURE_EXAMPLE_ENDPOINT"],
    credential=credential
)
\`\`\`

#### Imported: 1. Correct Import Patterns

### 1.1 Client Imports

#### ✅ CORRECT: Main Client
\`\`\`python
from azure.ai.mymodule import MyClient
from azure.identity import DefaultAzureCredential
\`\`\`

#### ❌ INCORRECT: Wrong Module Path
\`\`\`python
from azure.ai.mymodule.models import MyClient  # Wrong - Client is not in models
\`\`\`

#### Imported: 2. Authentication Patterns

#### ✅ CORRECT: DefaultAzureCredential
\`\`\`python
credential = DefaultAzureCredential()
client = MyClient(endpoint, credential)
\`\`\`

#### ❌ INCORRECT: Hardcoded Credentials
\`\`\`python
client = MyClient(endpoint, api_key="hardcoded")  # Security risk
\`\`\`
```

**Critical patterns to document:**
- Import paths (these vary significantly between Azure SDKs)
- Authentication patterns
- Client initialization
- Async variants (`.aio` modules)
- Common anti-patterns

#### 6.2 Create Test Scenarios

**Location:** `tests/scenarios/<skill-name>/scenarios.yaml`

```yaml
config:
  model: gpt-4
  max_tokens: 2000
  temperature: 0.3

scenarios:
  - name: basic_client_creation
    prompt: |
      Create a basic example using the Azure SDK.
      Include proper authentication and client initialization.
    expected_patterns:
      - "DefaultAzureCredential"
      - "MyClient"
    forbidden_patterns:
      - "api_key="
      - "hardcoded"
    tags:
      - basic
      - authentication
    mock_response: |
      import os
      from azure.identity import DefaultAzureCredential
      from azure.ai.mymodule import MyClient
      
      credential = DefaultAzureCredential()
      client = MyClient(
          endpoint=os.environ["AZURE_ENDPOINT"],
          credential=credential
      )
      # ... rest of working example
```

**Scenario design principles:**
- Each scenario tests ONE specific pattern or feature
- `expected_patterns` — patterns that MUST appear
- `forbidden_patterns` — common mistakes that must NOT appear
- `mock_response` — complete, working code that passes all checks
- `tags` — for filtering (`basic`, `async`, `streaming`, `tools`)

#### 6.3 Run Tests

```bash
cd tests
pnpm install

# Check skill is discovered
pnpm harness --list

# Run in mock mode (fast, deterministic)
pnpm harness <skill-name> --mock --verbose

# Run with Ralph Loop (iterative improvement)
pnpm harness <skill-name> --ralph --mock --max-iterations 5 --threshold 85
```

**Success criteria:**
- All scenarios pass (100% pass rate)
- No false positives (mock responses always pass)
- Patterns catch real mistakes

### Step 7: Update Documentation

After creating the skill:

1. **Update README.md** — Add the skill to the appropriate language section in the Skill Catalog
   - Update total skill count (line ~73: `> N skills in...`)
   - Update Skill Explorer link count (line ~15: `Browse all N skills`)
   - Update language count table (lines ~77-83)
   - Update language section count (e.g., `> N skills • suffix: -py`)
   - Update category count (e.g., `<summary><strong>Foundry & AI</strong> (N skills)</summary>`)
   - Add skill row in alphabetical order within its category
   - Update test coverage summary (line ~622: `**N skills with N test scenarios**`)
   - Update test coverage table — update skill count, scenario count, and top skills for the language

2. **Regenerate GitHub Pages data** — Run the extraction script to update the docs site
   ```bash
   cd docs-site && npx tsx scripts/extract-skills.ts
   ```
   This updates `docs-site/src/data/skills.json` which feeds the Astro-based docs site.
   Then rebuild the docs site:
   ```bash
   cd docs-site && npm run build
   ```
   This outputs to `docs/` which is served by GitHub Pages.

3. **Verify AGENTS.md** — Ensure the skill count is accurate

---

#### Imported: Progressive Disclosure Patterns

### Pattern 1: High-Level Guide with References

```markdown
# SDK Name

#### Imported: Advanced Features

- **Streaming**: See references/streaming.md
- **Tools**: See references/tools.md
```

### Pattern 2: Language Variants

```
azure-service-skill/
├── SKILL.md (overview + language selection)
└── references/
    ├── python.md
    ├── dotnet.md
    ├── java.md
    └── typescript.md
```

### Pattern 3: Feature Organization

```
azure-ai-agents/
├── SKILL.md (core workflow)
└── references/
    ├── tools.md
    ├── streaming.md
    ├── async-patterns.md
    └── error-handling.md
```

---

#### Imported: Anti-Patterns

| Don't | Why |
|-------|-----|
| Create skill without SDK context | Users must provide package name/docs URL |
| Put "when to use" in body | Body loads AFTER triggering |
| Hardcode credentials | Security risk |
| Skip authentication section | Agents will improvise poorly |
| Use outdated SDK patterns | APIs change; search docs first |
| Include README.md | Agents don't need meta-docs |
| Deeply nest references | Keep one level deep |
| Skip acceptance criteria | Skills without tests can't be validated |
| Skip symlink categorization | Skills won't be discoverable by category |
| Use wrong import paths | Azure SDKs have specific module structures |

---

#### Imported: Checklist

Before completing a skill:

**Prerequisites:**
- [ ] User provided SDK package name or documentation URL
- [ ] Verified SDK patterns via `microsoft-docs` MCP

**Skill Creation:**
- [ ] Description includes what AND when (trigger phrases)
- [ ] SKILL.md under 500 lines
- [ ] Authentication uses `DefaultAzureCredential`
- [ ] Includes cleanup/delete in examples
- [ ] References organized by feature

**Categorization:**
- [ ] Skill created in `.github/skills/<skill-name>/`
- [ ] Symlink created in `skills/<language>/<category>/<short-name>`
- [ ] Symlink points to `../../../.github/skills/<skill-name>`

**Testing:**
- [ ] `references/acceptance-criteria.md` created with correct/incorrect patterns
- [ ] `tests/scenarios/<skill-name>/scenarios.yaml` created
- [ ] All scenarios pass (`pnpm harness <skill> --mock`)
- [ ] Import paths documented precisely

**Documentation:**
- [ ] README.md skill catalog updated
- [ ] Instructs to search `microsoft-docs` MCP for current APIs

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
