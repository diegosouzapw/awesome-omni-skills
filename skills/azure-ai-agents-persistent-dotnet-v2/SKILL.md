---
name: azure-ai-agents-persistent-dotnet-v2
description: "Azure.AI.Agents.Persistent (.NET) workflow skill. Use this skill when the user needs Azure AI Agents Persistent SDK for .NET. Low-level SDK for creating and managing AI agents with threads, messages, runs, and tools and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["azure-ai-agents-persistent-dotnet-v2", "azure-ai-agents-persistent-dotnet", "azure", "persistent", "sdk", "for", "net", "low-level"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure.AI.Agents.Persistent (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-ai-agents-persistent-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure.AI.Agents.Persistent (.NET) Low-level SDK for creating and managing persistent AI agents with threads, messages, runs, and tools.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Hierarchy, Available Tools, Streaming Update Types, Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure AI Agents Persistent SDK for .NET. Low-level SDK for creating and managing AI agents with threads, messages, runs, and tools.
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

1. `bash dotnet add package Azure.AI.Agents.Persistent --prerelease dotnet add package Azure.Identity Current Versions: Stable v1.1.0, Preview v1.2.0-beta.8 ### 1.
2. Create Agent `csharp var modelDeploymentName = Environment.GetEnvironmentVariable("MODELDEPLOYMENTNAME"); PersistentAgent agent = await client.Administration.CreateAgentAsync( model: modelDeploymentName, name: "Math Tutor", instructions: "You are a personal math tutor.
3. Write and run code to answer math questions.", tools: [new CodeInterpreterToolDefinition()] ); ` ### 2.
4. Create Thread and Message `csharp // Create thread PersistentAgentThread thread = await client.Threads.CreateThreadAsync(); // Create message await client.Messages.CreateMessageAsync( thread.Id, MessageRole.User, "I need to solve the equation 3x + 11 = 14.
5. Can you help me?" ); ` ### 3.
6. Run Agent (Polling) csharp // Create run ThreadRun run = await client.Runs.CreateRunAsync( thread.Id, agent.Id, additionalInstructions: "Please address the user as Jane Doe." ); // Poll for completion do { await Task.Delay(TimeSpan.FromMilliseconds(500)); run = await client.Runs.GetRunAsync(thread.Id, run.Id); } while (run.Status == RunStatus.Queued || run.Status == RunStatus.InProgress); // Retrieve messages await foreach (PersistentThreadMessage message in client.Messages.GetMessagesAsync( threadId: thread.Id, order: ListSortOrder.Ascending)) { Console.Write($"{message.Role}: "); foreach (MessageContent content in message.ContentItems) { if (content is MessageTextContent textContent) Console.WriteLine(textContent.Text); } } ### 4.
7. Streaming Response `csharp AsyncCollectionResult<StreamingUpdate> stream = client.Runs.CreateRunStreamingAsync( thread.Id, agent.Id ); await foreach (StreamingUpdate update in stream) { if (update.UpdateKind == StreamingUpdateReason.RunCreated) { Console.WriteLine("--- Run started!

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.AI.Agents.Persistent --prerelease
dotnet add package Azure.Identity
```

**Current Versions**: Stable v1.1.0, Preview v1.2.0-beta.8

#### Imported: Core Workflow

### 1. Create Agent

```csharp
var modelDeploymentName = Environment.GetEnvironmentVariable("MODEL_DEPLOYMENT_NAME");

PersistentAgent agent = await client.Administration.CreateAgentAsync(
    model: modelDeploymentName,
    name: "Math Tutor",
    instructions: "You are a personal math tutor. Write and run code to answer math questions.",
    tools: [new CodeInterpreterToolDefinition()]
);
```

### 2. Create Thread and Message

```csharp
// Create thread
PersistentAgentThread thread = await client.Threads.CreateThreadAsync();

// Create message
await client.Messages.CreateMessageAsync(
    thread.Id,
    MessageRole.User,
    "I need to solve the equation `3x + 11 = 14`. Can you help me?"
);
```

### 3. Run Agent (Polling)

```csharp
// Create run
ThreadRun run = await client.Runs.CreateRunAsync(
    thread.Id,
    agent.Id,
    additionalInstructions: "Please address the user as Jane Doe."
);

// Poll for completion
do
{
    await Task.Delay(TimeSpan.FromMilliseconds(500));
    run = await client.Runs.GetRunAsync(thread.Id, run.Id);
}
while (run.Status == RunStatus.Queued || run.Status == RunStatus.InProgress);

// Retrieve messages
await foreach (PersistentThreadMessage message in client.Messages.GetMessagesAsync(
    threadId: thread.Id, 
    order: ListSortOrder.Ascending))
{
    Console.Write($"{message.Role}: ");
    foreach (MessageContent content in message.ContentItems)
    {
        if (content is MessageTextContent textContent)
            Console.WriteLine(textContent.Text);
    }
}
```

### 4. Streaming Response

```csharp
AsyncCollectionResult<StreamingUpdate> stream = client.Runs.CreateRunStreamingAsync(
    thread.Id, 
    agent.Id
);

await foreach (StreamingUpdate update in stream)
{
    if (update.UpdateKind == StreamingUpdateReason.RunCreated)
    {
        Console.WriteLine("--- Run started! ---");
    }
    else if (update is MessageContentUpdate contentUpdate)
    {
        Console.Write(contentUpdate.Text);
    }
    else if (update.UpdateKind == StreamingUpdateReason.RunCompleted)
    {
        Console.WriteLine("\n--- Run completed! ---");
    }
}
```

### 5. Function Calling

```csharp
// Define function tool
FunctionToolDefinition weatherTool = new(
    name: "getCurrentWeather",
    description: "Gets the current weather at a location.",
    parameters: BinaryData.FromObjectAsJson(new
    {
        Type = "object",
        Properties = new
        {
            Location = new { Type = "string", Description = "City and state, e.g. San Francisco, CA" },
            Unit = new { Type = "string", Enum = new[] { "c", "f" } }
        },
        Required = new[] { "location" }
    }, new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase })
);

// Create agent with function
PersistentAgent agent = await client.Administration.CreateAgentAsync(
    model: modelDeploymentName,
    name: "Weather Bot",
    instructions: "You are a weather bot.",
    tools: [weatherTool]
);

// Handle function calls during polling
do
{
    await Task.Delay(500);
    run = await client.Runs.GetRunAsync(thread.Id, run.Id);

    if (run.Status == RunStatus.RequiresAction 
        && run.RequiredAction is SubmitToolOutputsAction submitAction)
    {
        List<ToolOutput> outputs = [];
        foreach (RequiredToolCall toolCall in submitAction.ToolCalls)
        {
            if (toolCall is RequiredFunctionToolCall funcCall)
            {
                // Execute function and get result
                string result = ExecuteFunction(funcCall.Name, funcCall.Arguments);
                outputs.Add(new ToolOutput(toolCall, result));
            }
        }
        run = await client.Runs.SubmitToolOutputsToRunAsync(run, outputs, toolApprovals: null);
    }
}
while (run.Status == RunStatus.Queued || run.Status == RunStatus.InProgress);
```

### 6. File Search with Vector Store

```csharp
// Upload file
PersistentAgentFileInfo file = await client.Files.UploadFileAsync(
    filePath: "document.txt",
    purpose: PersistentAgentFilePurpose.Agents
);

// Create vector store
PersistentAgentsVectorStore vectorStore = await client.VectorStores.CreateVectorStoreAsync(
    fileIds: [file.Id],
    name: "my_vector_store"
);

// Create file search resource
FileSearchToolResource fileSearchResource = new();
fileSearchResource.VectorStoreIds.Add(vectorStore.Id);

// Create agent with file search
PersistentAgent agent = await client.Administration.CreateAgentAsync(
    model: modelDeploymentName,
    name: "Document Assistant",
    instructions: "You help users find information in documents.",
    tools: [new FileSearchToolDefinition()],
    toolResources: new ToolResources { FileSearch = fileSearchResource }
);
```

### 7. Bing Grounding

```csharp
var bingConnectionId = Environment.GetEnvironmentVariable("AZURE_BING_CONNECTION_ID");

BingGroundingToolDefinition bingTool = new(
    new BingGroundingSearchToolParameters(
        [new BingGroundingSearchConfiguration(bingConnectionId)]
    )
);

PersistentAgent agent = await client.Administration.CreateAgentAsync(
    model: modelDeploymentName,
    name: "Search Agent",
    instructions: "Use Bing to answer questions about current events.",
    tools: [bingTool]
);
```

### 8. Azure AI Search

```csharp
AzureAISearchToolResource searchResource = new(
    connectionId: searchConnectionId,
    indexName: "my_index",
    topK: 5,
    filter: "category eq 'documentation'",
    queryType: AzureAISearchQueryType.Simple
);

PersistentAgent agent = await client.Administration.CreateAgentAsync(
    model: modelDeploymentName,
    name: "Search Agent",
    instructions: "Search the documentation index to answer questions.",
    tools: [new AzureAISearchToolDefinition()],
    toolResources: new ToolResources { AzureAISearch = searchResource }
);
```

### 9. Cleanup

```csharp
await client.Threads.DeleteThreadAsync(thread.Id);
await client.Administration.DeleteAgentAsync(agent.Id);
await client.VectorStores.DeleteVectorStoreAsync(vectorStore.Id);
await client.Files.DeleteFileAsync(file.Id);
```

#### Imported: Environment Variables

```bash
PROJECT_ENDPOINT=https://<resource>.services.ai.azure.com/api/projects/<project>
MODEL_DEPLOYMENT_NAME=gpt-4o-mini
AZURE_BING_CONNECTION_ID=<bing-connection-resource-id>
AZURE_AI_SEARCH_CONNECTION_ID=<search-connection-resource-id>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-agents-persistent-dotnet-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-ai-agents-persistent-dotnet-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-ai-agents-persistent-dotnet-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-agents-persistent-dotnet-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Always dispose clients — Use using statements or explicit disposal
- Poll with appropriate delays — 500ms recommended between status checks
- Clean up resources — Delete threads and agents when done
- Handle all run statuses — Check for RequiresAction, Failed, Cancelled
- Use streaming for real-time UX — Better user experience than polling
- Store IDs not objects — Reference agents/threads by ID
- Use async methods — All operations should be async

### Imported Operating Notes

#### Imported: Best Practices

1. **Always dispose clients** — Use `using` statements or explicit disposal
2. **Poll with appropriate delays** — 500ms recommended between status checks
3. **Clean up resources** — Delete threads and agents when done
4. **Handle all run statuses** — Check for `RequiresAction`, `Failed`, `Cancelled`
5. **Use streaming for real-time UX** — Better user experience than polling
6. **Store IDs not objects** — Reference agents/threads by ID
7. **Use async methods** — All operations should be async

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-ai-agents-persistent-dotnet`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `PersistentAgentsClient` | Main entry point |
| `PersistentAgent` | Agent with model, instructions, tools |
| `PersistentAgentThread` | Conversation thread |
| `PersistentThreadMessage` | Message in thread |
| `ThreadRun` | Execution of agent against thread |
| `RunStatus` | Queued, InProgress, RequiresAction, Completed, Failed |
| `ToolResources` | Combined tool resources |
| `ToolOutput` | Function call response |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| NuGet Package | https://www.nuget.org/packages/Azure.AI.Agents.Persistent |
| API Reference | https://learn.microsoft.com/dotnet/api/azure.ai.agents.persistent |
| GitHub Source | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/ai/Azure.AI.Agents.Persistent |
| Samples | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/ai/Azure.AI.Agents.Persistent/samples |

#### Imported: Authentication

```csharp
using Azure.AI.Agents.Persistent;
using Azure.Identity;

var projectEndpoint = Environment.GetEnvironmentVariable("PROJECT_ENDPOINT");
PersistentAgentsClient client = new(projectEndpoint, new DefaultAzureCredential());
```

#### Imported: Client Hierarchy

```
PersistentAgentsClient
├── Administration  → Agent CRUD operations
├── Threads         → Thread management
├── Messages        → Message operations
├── Runs            → Run execution and streaming
├── Files           → File upload/download
└── VectorStores    → Vector store management
```

#### Imported: Available Tools

| Tool | Class | Purpose |
|------|-------|---------|
| Code Interpreter | `CodeInterpreterToolDefinition` | Execute Python code, generate visualizations |
| File Search | `FileSearchToolDefinition` | Search uploaded files via vector stores |
| Function Calling | `FunctionToolDefinition` | Call custom functions |
| Bing Grounding | `BingGroundingToolDefinition` | Web search via Bing |
| Azure AI Search | `AzureAISearchToolDefinition` | Search Azure AI Search indexes |
| OpenAPI | `OpenApiToolDefinition` | Call external APIs via OpenAPI spec |
| Azure Functions | `AzureFunctionToolDefinition` | Invoke Azure Functions |
| MCP | `MCPToolDefinition` | Model Context Protocol tools |
| SharePoint | `SharepointToolDefinition` | Access SharePoint content |
| Microsoft Fabric | `MicrosoftFabricToolDefinition` | Access Fabric data |

#### Imported: Streaming Update Types

| Update Type | Description |
|-------------|-------------|
| `StreamingUpdateReason.RunCreated` | Run started |
| `StreamingUpdateReason.RunInProgress` | Run processing |
| `StreamingUpdateReason.RunCompleted` | Run finished |
| `StreamingUpdateReason.RunFailed` | Run errored |
| `MessageContentUpdate` | Text content chunk |
| `RunStepUpdate` | Step status change |

#### Imported: Error Handling

```csharp
using Azure;

try
{
    var agent = await client.Administration.CreateAgentAsync(...);
}
catch (RequestFailedException ex) when (ex.Status == 404)
{
    Console.WriteLine("Resource not found");
}
catch (RequestFailedException ex)
{
    Console.WriteLine($"Error: {ex.Status} - {ex.ErrorCode}: {ex.Message}");
}
```
