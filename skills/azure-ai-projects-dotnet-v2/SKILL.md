---
name: azure-ai-projects-dotnet-v2
description: "Azure.AI.Projects (.NET) workflow skill. Use this skill when the user needs Azure AI Projects SDK for .NET. High-level client for Azure AI Foundry projects including agents, connections, datasets, deployments, evaluations, and indexes and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["azure-ai-projects-dotnet-v2", "azure-ai-projects-dotnet", "azure", "projects", "sdk", "for", "net", "high-level"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# Azure.AI.Projects (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-ai-projects-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure.AI.Projects (.NET) High-level SDK for Azure AI Foundry project operations including agents, connections, datasets, deployments, evaluations, and indexes.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Hierarchy, Available Agent Tools, Error Handling, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure AI Projects SDK for .NET. High-level client for Azure AI Foundry projects including agents, connections, datasets, deployments, evaluations, and indexes.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. `bash dotnet add package Azure.AI.Projects dotnet add package Azure.Identity # Optional: For versioned agents with OpenAI extensions dotnet add package Azure.AI.Projects.OpenAI --prerelease # Optional: For low-level agent operations dotnet add package Azure.AI.Agents.Persistent --prerelease Current Versions: GA v1.1.0, Preview v1.2.0-beta.5 ### 1.
2. Get Persistent Agents Client csharp // Get low-level agents client from project client PersistentAgentsClient agentsClient = projectClient.GetPersistentAgentsClient(); // Create agent PersistentAgent agent = await agentsClient.Administration.CreateAgentAsync( model: "gpt-4o-mini", name: "Math Tutor", instructions: "You are a personal math tutor."); // Create thread and run PersistentAgentThread thread = await agentsClient.Threads.CreateThreadAsync(); await agentsClient.Messages.CreateMessageAsync(thread.Id, MessageRole.User, "Solve 3x + 11 = 14"); ThreadRun run = await agentsClient.Runs.CreateRunAsync(thread.Id, agent.Id); // Poll for completion do { await Task.Delay(500); run = await agentsClient.Runs.GetRunAsync(thread.Id, run.Id); } while (run.Status == RunStatus.Queued || run.Status == RunStatus.InProgress); // Get messages await foreach (var msg in agentsClient.Messages.GetMessagesAsync(thread.Id)) { foreach (var content in msg.ContentItems) { if (content is MessageTextContent textContent) Console.WriteLine(textContent.Text); } } // Cleanup await agentsClient.Threads.DeleteThreadAsync(thread.Id); await agentsClient.Administration.DeleteAgentAsync(agent.Id); ### 2.
3. Versioned Agents with Tools (Preview) csharp using Azure.AI.Projects.OpenAI; // Create agent with web search tool PromptAgentDefinition agentDefinition = new(model: "gpt-4o-mini") { Instructions = "You are a helpful assistant that can search the web", Tools = { ResponseTool.CreateWebSearchTool( userLocation: WebSearchToolLocation.CreateApproximateLocation( country: "US", city: "Seattle", region: "Washington" ) ), } }; AgentVersion agentVersion = await projectClient.Agents.CreateAgentVersionAsync( agentName: "myAgent", options: new(agentDefinition)); // Get response client ProjectResponsesClient responseClient = projectClient.OpenAI.GetProjectResponsesClientForAgent(agentVersion.Name); // Create response ResponseResult response = responseClient.CreateResponse("What's the weather in Seattle?"); Console.WriteLine(response.GetOutputText()); // Cleanup projectClient.Agents.DeleteAgentVersion(agentName: agentVersion.Name, agentVersion: agentVersion.Version); ### 3.
4. Connections csharp // List all connections foreach (AIProjectConnection connection in projectClient.Connections.GetConnections()) { Console.WriteLine($"{connection.Name}: {connection.ConnectionType}"); } // Get specific connection AIProjectConnection conn = projectClient.Connections.GetConnection( connectionName, includeCredentials: true); // Get default connection AIProjectConnection defaultConn = projectClient.Connections.GetDefaultConnection( includeCredentials: false); ### 4.
5. Deployments csharp // List all deployments foreach (AIProjectDeployment deployment in projectClient.Deployments.GetDeployments()) { Console.WriteLine($"{deployment.Name}: {deployment.ModelName}"); } // Filter by publisher foreach (var deployment in projectClient.Deployments.GetDeployments(modelPublisher: "Microsoft")) { Console.WriteLine(deployment.Name); } // Get specific deployment ModelDeployment details = (ModelDeployment)projectClient.Deployments.GetDeployment("gpt-4o-mini"); ### 5.
6. Datasets csharp // Upload single file FileDataset fileDataset = projectClient.Datasets.UploadFile( name: "my-dataset", version: "1.0", filePath: "data/training.txt", connectionName: connectionName); // Upload folder FolderDataset folderDataset = projectClient.Datasets.UploadFolder( name: "my-dataset", version: "2.0", folderPath: "data/training", connectionName: connectionName, filePattern: new Regex(".*\\.txt")); // Get dataset AIProjectDataset dataset = projectClient.Datasets.GetDataset("my-dataset", "1.0"); // Delete dataset projectClient.Datasets.Delete("my-dataset", "1.0"); ### 6.
7. Indexes csharp // Create Azure AI Search index AzureAISearchIndex searchIndex = new(aiSearchConnectionName, aiSearchIndexName) { Description = "Sample Index" }; searchIndex = (AzureAISearchIndex)projectClient.Indexes.CreateOrUpdate( name: "my-index", version: "1.0", index: searchIndex); // List indexes foreach (AIProjectIndex index in projectClient.Indexes.GetIndexes()) { Console.WriteLine(index.Name); } // Delete index projectClient.Indexes.Delete(name: "my-index", version: "1.0"); ### 7.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.AI.Projects
dotnet add package Azure.Identity

# Optional: For versioned agents with OpenAI extensions
dotnet add package Azure.AI.Projects.OpenAI --prerelease

# Optional: For low-level agent operations
dotnet add package Azure.AI.Agents.Persistent --prerelease
```

**Current Versions**: GA v1.1.0, Preview v1.2.0-beta.5

#### Imported: Core Workflows

### 1. Get Persistent Agents Client

```csharp
// Get low-level agents client from project client
PersistentAgentsClient agentsClient = projectClient.GetPersistentAgentsClient();

// Create agent
PersistentAgent agent = await agentsClient.Administration.CreateAgentAsync(
    model: "gpt-4o-mini",
    name: "Math Tutor",
    instructions: "You are a personal math tutor.");

// Create thread and run
PersistentAgentThread thread = await agentsClient.Threads.CreateThreadAsync();
await agentsClient.Messages.CreateMessageAsync(thread.Id, MessageRole.User, "Solve 3x + 11 = 14");
ThreadRun run = await agentsClient.Runs.CreateRunAsync(thread.Id, agent.Id);

// Poll for completion
do
{
    await Task.Delay(500);
    run = await agentsClient.Runs.GetRunAsync(thread.Id, run.Id);
}
while (run.Status == RunStatus.Queued || run.Status == RunStatus.InProgress);

// Get messages
await foreach (var msg in agentsClient.Messages.GetMessagesAsync(thread.Id))
{
    foreach (var content in msg.ContentItems)
    {
        if (content is MessageTextContent textContent)
            Console.WriteLine(textContent.Text);
    }
}

// Cleanup
await agentsClient.Threads.DeleteThreadAsync(thread.Id);
await agentsClient.Administration.DeleteAgentAsync(agent.Id);
```

### 2. Versioned Agents with Tools (Preview)

```csharp
using Azure.AI.Projects.OpenAI;

// Create agent with web search tool
PromptAgentDefinition agentDefinition = new(model: "gpt-4o-mini")
{
    Instructions = "You are a helpful assistant that can search the web",
    Tools = {
        ResponseTool.CreateWebSearchTool(
            userLocation: WebSearchToolLocation.CreateApproximateLocation(
                country: "US",
                city: "Seattle",
                region: "Washington"
            )
        ),
    }
};

AgentVersion agentVersion = await projectClient.Agents.CreateAgentVersionAsync(
    agentName: "myAgent",
    options: new(agentDefinition));

// Get response client
ProjectResponsesClient responseClient = projectClient.OpenAI.GetProjectResponsesClientForAgent(agentVersion.Name);

// Create response
ResponseResult response = responseClient.CreateResponse("What's the weather in Seattle?");
Console.WriteLine(response.GetOutputText());

// Cleanup
projectClient.Agents.DeleteAgentVersion(agentName: agentVersion.Name, agentVersion: agentVersion.Version);
```

### 3. Connections

```csharp
// List all connections
foreach (AIProjectConnection connection in projectClient.Connections.GetConnections())
{
    Console.WriteLine($"{connection.Name}: {connection.ConnectionType}");
}

// Get specific connection
AIProjectConnection conn = projectClient.Connections.GetConnection(
    connectionName, 
    includeCredentials: true);

// Get default connection
AIProjectConnection defaultConn = projectClient.Connections.GetDefaultConnection(
    includeCredentials: false);
```

### 4. Deployments

```csharp
// List all deployments
foreach (AIProjectDeployment deployment in projectClient.Deployments.GetDeployments())
{
    Console.WriteLine($"{deployment.Name}: {deployment.ModelName}");
}

// Filter by publisher
foreach (var deployment in projectClient.Deployments.GetDeployments(modelPublisher: "Microsoft"))
{
    Console.WriteLine(deployment.Name);
}

// Get specific deployment
ModelDeployment details = (ModelDeployment)projectClient.Deployments.GetDeployment("gpt-4o-mini");
```

### 5. Datasets

```csharp
// Upload single file
FileDataset fileDataset = projectClient.Datasets.UploadFile(
    name: "my-dataset",
    version: "1.0",
    filePath: "data/training.txt",
    connectionName: connectionName);

// Upload folder
FolderDataset folderDataset = projectClient.Datasets.UploadFolder(
    name: "my-dataset",
    version: "2.0",
    folderPath: "data/training",
    connectionName: connectionName,
    filePattern: new Regex(".*\\.txt"));

// Get dataset
AIProjectDataset dataset = projectClient.Datasets.GetDataset("my-dataset", "1.0");

// Delete dataset
projectClient.Datasets.Delete("my-dataset", "1.0");
```

### 6. Indexes

```csharp
// Create Azure AI Search index
AzureAISearchIndex searchIndex = new(aiSearchConnectionName, aiSearchIndexName)
{
    Description = "Sample Index"
};

searchIndex = (AzureAISearchIndex)projectClient.Indexes.CreateOrUpdate(
    name: "my-index",
    version: "1.0",
    index: searchIndex);

// List indexes
foreach (AIProjectIndex index in projectClient.Indexes.GetIndexes())
{
    Console.WriteLine(index.Name);
}

// Delete index
projectClient.Indexes.Delete(name: "my-index", version: "1.0");
```

### 7. Evaluations

```csharp
// Create evaluation configuration
var evaluatorConfig = new EvaluatorConfiguration(id: EvaluatorIDs.Relevance);
evaluatorConfig.InitParams.Add("deployment_name", BinaryData.FromObjectAsJson("gpt-4o"));

// Create evaluation
Evaluation evaluation = new Evaluation(
    data: new InputDataset("<dataset_id>"),
    evaluators: new Dictionary<string, EvaluatorConfiguration> 
    { 
        { "relevance", evaluatorConfig } 
    }
)
{
    DisplayName = "Sample Evaluation"
};

// Run evaluation
Evaluation result = projectClient.Evaluations.Create(evaluation: evaluation);

// Get evaluation
Evaluation getResult = projectClient.Evaluations.Get(result.Name);

// List evaluations
foreach (var eval in projectClient.Evaluations.GetAll())
{
    Console.WriteLine($"{eval.DisplayName}: {eval.Status}");
}
```

### 8. Get Azure OpenAI Chat Client

```csharp
using Azure.AI.OpenAI;
using OpenAI.Chat;

ClientConnection connection = projectClient.GetConnection(typeof(AzureOpenAIClient).FullName!);

if (!connection.TryGetLocatorAsUri(out Uri uri) || uri is null)
    throw new InvalidOperationException("Invalid URI.");

uri = new Uri($"https://{uri.Host}");

AzureOpenAIClient azureOpenAIClient = new AzureOpenAIClient(uri, new DefaultAzureCredential());
ChatClient chatClient = azureOpenAIClient.GetChatClient("gpt-4o-mini");

ChatCompletion result = chatClient.CompleteChat("List all rainbow colors");
Console.WriteLine(result.Content[0].Text);
```

#### Imported: Environment Variables

```bash
PROJECT_ENDPOINT=https://<resource>.services.ai.azure.com/api/projects/<project>
MODEL_DEPLOYMENT_NAME=gpt-4o-mini
CONNECTION_NAME=<your-connection-name>
AI_SEARCH_CONNECTION_NAME=<ai-search-connection>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-projects-dotnet-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-ai-projects-dotnet-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-ai-projects-dotnet-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-projects-dotnet-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use DefaultAzureCredential for production authentication
- Use async methods (*Async) for all I/O operations
- Poll with appropriate delays (500ms recommended) when waiting for runs
- Clean up resources — delete threads, agents, and files when done
- Use versioned agents (via Azure.AI.Projects.OpenAI) for production scenarios
- Store connection IDs rather than names for tool configurations
- Use includeCredentials: true only when credentials are needed

### Imported Operating Notes

#### Imported: Best Practices

1. **Use `DefaultAzureCredential`** for production authentication
2. **Use async methods** (`*Async`) for all I/O operations
3. **Poll with appropriate delays** (500ms recommended) when waiting for runs
4. **Clean up resources** — delete threads, agents, and files when done
5. **Use versioned agents** (via `Azure.AI.Projects.OpenAI`) for production scenarios
6. **Store connection IDs** rather than names for tool configurations
7. **Use `includeCredentials: true`** only when credentials are needed
8. **Handle pagination** — use `AsyncPageable<T>` for listing operations

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-ai-projects-dotnet`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@apify-ultimate-scraper-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@app-builder-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@app-store-changelog-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@app-store-optimization-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `AIProjectClient` | Main entry point |
| `PersistentAgentsClient` | Low-level agent operations |
| `PromptAgentDefinition` | Versioned agent definition |
| `AgentVersion` | Versioned agent instance |
| `AIProjectConnection` | Connection to Azure resource |
| `AIProjectDeployment` | Model deployment info |
| `AIProjectDataset` | Dataset metadata |
| `AIProjectIndex` | Search index metadata |
| `Evaluation` | Evaluation configuration and results |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| NuGet Package | https://www.nuget.org/packages/Azure.AI.Projects |
| API Reference | https://learn.microsoft.com/dotnet/api/azure.ai.projects |
| GitHub Source | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/ai/Azure.AI.Projects |
| Samples | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/ai/Azure.AI.Projects/samples |

#### Imported: Authentication

```csharp
using Azure.Identity;
using Azure.AI.Projects;

var endpoint = Environment.GetEnvironmentVariable("PROJECT_ENDPOINT");
AIProjectClient projectClient = new AIProjectClient(
    new Uri(endpoint), 
    new DefaultAzureCredential());
```

#### Imported: Client Hierarchy

```
AIProjectClient
├── Agents          → AIProjectAgentsOperations (versioned agents)
├── Connections     → ConnectionsClient
├── Datasets        → DatasetsClient
├── Deployments     → DeploymentsClient
├── Evaluations     → EvaluationsClient
├── Evaluators      → EvaluatorsClient
├── Indexes         → IndexesClient
├── Telemetry       → AIProjectTelemetry
├── OpenAI          → ProjectOpenAIClient (preview)
└── GetPersistentAgentsClient() → PersistentAgentsClient
```

#### Imported: Available Agent Tools

| Tool | Class | Purpose |
|------|-------|---------|
| Code Interpreter | `CodeInterpreterToolDefinition` | Execute Python code |
| File Search | `FileSearchToolDefinition` | Search uploaded files |
| Function Calling | `FunctionToolDefinition` | Call custom functions |
| Bing Grounding | `BingGroundingToolDefinition` | Web search via Bing |
| Azure AI Search | `AzureAISearchToolDefinition` | Search Azure AI indexes |
| OpenAPI | `OpenApiToolDefinition` | Call external APIs |
| Azure Functions | `AzureFunctionToolDefinition` | Invoke Azure Functions |
| MCP | `MCPToolDefinition` | Model Context Protocol tools |

#### Imported: Error Handling

```csharp
using Azure;

try
{
    var result = await projectClient.Evaluations.CreateAsync(evaluation);
}
catch (RequestFailedException ex)
{
    Console.WriteLine($"Error: {ex.Status} - {ex.ErrorCode}: {ex.Message}");
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
