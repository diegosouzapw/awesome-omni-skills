---
name: azure-functions-v3
description: "Azure Functions workflow skill. Use this skill when the user needs Expert patterns for Azure Functions development including isolated and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["azure-functions-v3", "azure-functions", "expert", "patterns", "for", "azure", "functions", "development"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Azure Functions

## Overview

This public intake copy packages `plugins/antigravity-bundle-azure-ai-cloud/skills/azure-functions` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Functions Expert patterns for Azure Functions development including isolated worker model, Durable Functions orchestration, cold start optimization, and production patterns. Covers .NET, Python, and Node.js programming models.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Patterns, Sharp Edges, Use async pattern with Durable Functions, Use queue-based async pattern, Use webhook callback pattern, Use IHttpClientFactory (Recommended).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: azure function
- User mentions or implies: azure functions
- User mentions or implies: durable functions
- User mentions or implies: azure serverless
- User mentions or implies: function app
- Use when the request clearly matches the imported source intent: Expert patterns for Azure Functions development including isolated.

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

1. Only one pre-warmed instance by default
2. Rapid scale-out still creates cold instances
3. Pre-warmed instances still run YOUR code initialization
4. Warmup trigger runs, but your code may still be slow
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Use Durable Functions for long workflows

```csharp
[Function("LongWorkflowOrchestrator")]
public static async Task<string> RunOrchestrator(
    [OrchestrationTrigger] TaskOrchestrationContext context)
{
    // Each activity has its own timeout
    // Workflow can run for days
    await context.CallActivityAsync("Step1", input);
    await context.CallActivityAsync("Step2", input);
    await context.CallActivityAsync("Step3", input);
    return "Complete";
}
```

#### Imported: Migrate existing in-process to isolated

```csharp
// OLD - In-process (FunctionName attribute)
public class InProcessFunction
{
    [FunctionName("MyFunction")]
    public async Task<IActionResult> Run(
        [HttpTrigger] HttpRequest req,
        ILogger log)
    {
        log.LogInformation("Processing");
        return new OkResult();
    }
}

// NEW - Isolated worker (Function attribute)
public class IsolatedFunction
{
    private readonly ILogger<IsolatedFunction> _logger;

    public IsolatedFunction(ILogger<IsolatedFunction> logger)
    {
        _logger = logger;
    }

    [Function("MyFunction")]
    public async Task<HttpResponseData> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get")]
        HttpRequestData req)
    {
        _logger.LogInformation("Processing");
        return req.CreateResponse(HttpStatusCode.OK);
    }
}
```

#### Imported: Install explicit packages for isolated worker

```xml
<!-- .csproj - Isolated worker packages -->
<PackageReference Include="Microsoft.Azure.Functions.Worker" Version="1.20.0" />
<PackageReference Include="Microsoft.Azure.Functions.Worker.Sdk" Version="1.16.0" />

<!-- Storage triggers/bindings -->
<PackageReference Include="Microsoft.Azure.Functions.Worker.Extensions.Storage" Version="6.2.0" />

<!-- Service Bus -->
<PackageReference Include="Microsoft.Azure.Functions.Worker.Extensions.ServiceBus" Version="5.14.0" />

<!-- Cosmos DB -->
<PackageReference Include="Microsoft.Azure.Functions.Worker.Extensions.CosmosDB" Version="4.6.0" />

<!-- Durable Functions -->
<PackageReference Include="Microsoft.Azure.Functions.Worker.Extensions.DurableTask" Version="1.1.0" />
```

#### Imported: Verify function registration

```bash
# Check registered functions
func host start --verbose

# Look for:
# "Found the following functions:"
# If empty, check extensions and attributes
```

### Premium Plan Still Has Cold Start on New Instances

Severity: MEDIUM

Situation: Using Premium plan expecting zero cold start

Symptoms:
Still experiencing cold starts despite Premium plan.
First request to new instance is slow.
Latency spikes during scale-out events.
Pre-warmed instances not being used.

Why this breaks:
Premium plan provides pre-warmed instances, but:
- Only one pre-warmed instance by default
- Rapid scale-out still creates cold instances
- Pre-warmed instances still run YOUR code initialization
- Warmup trigger runs, but your code may still be slow

Pre-warmed means the runtime is ready, not your application.

Recommended fix:

#### Imported: Patterns

### Isolated Worker Model (.NET)

Modern .NET execution model with process isolation

**When to use**: Building new .NET Azure Functions apps

### Template

// Program.cs - Isolated Worker Model
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var host = new HostBuilder()
    .ConfigureFunctionsWorkerDefaults()
    .ConfigureServices(services =>
    {
        // Add Application Insights
        services.AddApplicationInsightsTelemetryWorkerService();
        services.ConfigureFunctionsApplicationInsights();

        // Add HttpClientFactory (prevents socket exhaustion)
        services.AddHttpClient();

        // Add your services
        services.AddSingleton<IMyService, MyService>();
    })
    .Build();

host.Run();

// HttpTriggerFunction.cs
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

public class HttpTriggerFunction
{
    private readonly ILogger<HttpTriggerFunction> _logger;
    private readonly IMyService _service;

    public HttpTriggerFunction(
        ILogger<HttpTriggerFunction> logger,
        IMyService service)
    {
        _logger = logger;
        _service = service;
    }

    [Function("HttpTrigger")]
    public async Task<HttpResponseData> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", "post")] HttpRequestData req)
    {
        _logger.LogInformation("Processing request");

        try
        {
            var result = await _service.ProcessAsync(req);

            var response = req.CreateResponse(HttpStatusCode.OK);
            await response.WriteAsJsonAsync(result);
            return response;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error processing request");
            var response = req.CreateResponse(HttpStatusCode.InternalServerError);
            await response.WriteAsJsonAsync(new { error = "Internal server error" });
            return response;
        }
    }
}

### Notes

- In-process model deprecated November 2026
- Isolated worker supports .NET 8, 9, 10, and .NET Framework
- Full dependency injection support
- Custom middleware support

### Node.js v4 Programming Model

Modern code-centric approach for TypeScript/JavaScript

**When to use**: Building Node.js Azure Functions

### Template

// src/functions/httpTrigger.ts
import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function httpTrigger(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  try {
    const name = request.query.get("name") || (await request.text()) || "world";

    return {
      status: 200,
      jsonBody: { message: `Hello, ${name}!` }
    };
  } catch (error) {
    context.error("Error processing request:", error);
    return {
      status: 500,
      jsonBody: { error: "Internal server error" }
    };
  }
}

// Register function with app object
app.http("httpTrigger", {
  methods: ["GET", "POST"],
  authLevel: "function",
  handler: httpTrigger
});

// Timer trigger example
app.timer("timerTrigger", {
  schedule: "0 */5 * * * *",  // Every 5 minutes
  handler: async (myTimer, context) => {
    context.log("Timer function executed at:", new Date().toISOString());
  }
});

// Blob trigger example
app.storageBlob("blobTrigger", {
  path: "samples-workitems/{name}",
  connection: "AzureWebJobsStorage",
  handler: async (blob, context) => {
    context.log(`Blob trigger processing: ${context.triggerMetadata.name}`);
    context.log(`Blob size: ${blob.length} bytes`);
  }
});

### Notes

- v4 model is code-centric, no function.json files
- Uses app object similar to Express.js
- TypeScript first-class support
- All triggers registered in code

### Python v2 Programming Model

Decorator-based approach for Python functions

**When to use**: Building Python Azure Functions

### Template

# function_app.py
import azure.functions as func
import logging
import json

app = func.FunctionApp(http_auth_level=func.AuthLevel.FUNCTION)

@app.route(route="hello", methods=["GET", "POST"])
async def http_trigger(req: func.HttpRequest) -> func.HttpResponse:
    logging.info("Python HTTP trigger function processed a request.")

    try:
        name = req.params.get("name")
        if not name:
            try:
                req_body = req.get_json()
                name = req_body.get("name")
            except ValueError:
                pass

        if name:
            return func.HttpResponse(
                json.dumps({"message": f"Hello, {name}!"}),
                mimetype="application/json"
            )
        else:
            return func.HttpResponse(
                json.dumps({"message": "Hello, World!"}),
                mimetype="application/json"
            )
    except Exception as e:
        logging.error(f"Error processing request: {str(e)}")
        return func.HttpResponse(
            json.dumps({"error": "Internal server error"}),
            status_code=500,
            mimetype="application/json"
        )

@app.timer_trigger(schedule="0 */5 * * * *", arg_name="myTimer")
def timer_trigger(myTimer: func.TimerRequest) -> None:
    logging.info("Timer trigger executed")

@app.blob_trigger(arg_name="myblob", path="samples-workitems/{name}",
                  connection="AzureWebJobsStorage")
def blob_trigger(myblob: func.InputStream):
    logging.info(f"Blob trigger: {myblob.name}, Size: {myblob.length} bytes")

@app.queue_trigger(arg_name="msg", queue_name="myqueue",
                   connection="AzureWebJobsStorage")
def queue_trigger(msg: func.QueueMessage) -> None:
    logging.info(f"Queue message: {msg.get_body().decode('utf-8')}")

### Notes

- v2 model uses decorators, no function.json files
- Python runs out-of-process (always isolated)
- Linux-based hosting required for Python
- Async functions supported

### Durable Functions - Function Chaining

Sequential execution with state persistence

**When to use**: Need sequential workflow with automatic retry

### Template

// C# Isolated Worker - Function Chaining
using Microsoft.Azure.Functions.Worker;
using Microsoft.DurableTask;
using Microsoft.DurableTask.Client;

public class OrderWorkflow
{
    [Function("OrderOrchestrator")]
    public static async Task<OrderResult> RunOrchestrator(
        [OrchestrationTrigger] TaskOrchestrationContext context)
    {
        var order = context.GetInput<Order>();

        // Functions execute sequentially, state persisted between each
        var validated = await context.CallActivityAsync<ValidatedOrder>(
            "ValidateOrder", order);

        var payment = await context.CallActivityAsync<PaymentResult>(
            "ProcessPayment", validated);

        var shipped = await context.CallActivityAsync<ShippingResult>(
            "ShipOrder", new ShipRequest { Order = validated, Payment = payment });

        var notification = await context.CallActivityAsync<bool>(
            "SendNotification", shipped);

        return new OrderResult
        {
            OrderId = order.Id,
            Status = "Completed",
            TrackingNumber = shipped.TrackingNumber
        };
    }

    [Function("ValidateOrder")]
    public static async Task<ValidatedOrder> ValidateOrder(
        [ActivityTrigger] Order order, FunctionContext context)
    {
        var logger = context.GetLogger<OrderWorkflow>();
        logger.LogInformation("Validating order {OrderId}", order.Id);

        // Validation logic...
        return new ValidatedOrder { /* ... */ };
    }

    [Function("ProcessPayment")]
    public static async Task<PaymentResult> ProcessPayment(
        [ActivityTrigger] ValidatedOrder order, FunctionContext context)
    {
        // Payment processing with built-in retry...
        return new PaymentResult { /* ... */ };
    }

    [Function("OrderWorkflow_HttpStart")]
    public static async Task<HttpResponseData> HttpStart(
        [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req,
        [DurableClient] DurableTaskClient client,
        FunctionContext context)
    {
        var order = await req.ReadFromJsonAsync<Order>();
        string instanceId = await client.ScheduleNewOrchestrationInstanceAsync(
            "OrderOrchestrator", order);

        return client.CreateCheckStatusResponse(req, instanceId);
    }
}

### Notes

- State automatically persisted between activities
- Automatic retry on transient failures
- Survives process restarts
- Built-in status endpoint for monitoring

### Durable Functions - Fan-Out/Fan-In

Parallel execution with result aggregation

**When to use**: Processing multiple items in parallel

### Template

// C# Isolated Worker - Fan-Out/Fan-In
using Microsoft.Azure.Functions.Worker;
using Microsoft.DurableTask;

public class ParallelProcessing
{
    [Function("ProcessImagesOrchestrator")]
    public static async Task<ProcessingResult> RunOrchestrator(
        [OrchestrationTrigger] TaskOrchestrationContext context)
    {
        var images = context.GetInput<List<string>>();

        // Fan-out: Start all tasks in parallel
        var tasks = images.Select(image =>
            context.CallActivityAsync<ImageResult>("ProcessImage", image));

        // Fan-in: Wait for all tasks to complete
        var results = await Task.WhenAll(tasks);

        // Aggregate results
        var successful = results.Count(r => r.Success);
        var failed = results.Count(r => !r.Success);

        return new ProcessingResult
        {
            TotalProcessed = results.Length,
            Successful = successful,
            Failed = failed,
            Results = results.ToList()
        };
    }

    [Function("ProcessImage")]
    public static async Task<ImageResult> ProcessImage(
        [ActivityTrigger] string imageUrl, FunctionContext context)
    {
        var logger = context.GetLogger<ParallelProcessing>();
        logger.LogInformation("Processing image: {Url}", imageUrl);

        try
        {
            // Image processing logic...
            await Task.Delay(1000); // Simulated work

            return new ImageResult
            {
                Url = imageUrl,
                Success = true,
                ProcessedUrl = $"processed-{imageUrl}"
            };
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Failed to process {Url}", imageUrl);
            return new ImageResult { Url = imageUrl, Success = false };
        }
    }

    // Python equivalent
    // @app.orchestration_trigger(context_name="context")
    // def process_images_orchestrator(context: df.DurableOrchestrationContext):
    //     images = context.get_input()
    //
    //     # Fan-out: Create parallel tasks
    //     tasks = [context.call_activity("ProcessImage", img) for img in images]
    //
    //     # Fan-in: Wait for all
    //     results = yield context.task_all(tasks)
    //
    //     return {"processed": len(results), "results": results}
}

### Notes

- Parallel execution for independent tasks
- Results aggregated when all complete
- Memory efficient - only stores task IDs
- Up to thousands of parallel activities

### Cold Start Optimization

Minimize cold start latency in production

**When to use**: Need fast response times in production

### Template

// 1. Use Premium Plan with pre-warmed instances
// host.json
{
  "version": "2.0",
  "extensions": {
    "durableTask": {
      "hubName": "MyTaskHub"
    }
  },
  "functionTimeout": "00:30:00"
}

// 2. Add warmup trigger (Premium Plan)
[Function("Warmup")]
public static void Warmup(
    [WarmupTrigger] object warmupContext,
    FunctionContext context)
{
    var logger = context.GetLogger("Warmup");
    logger.LogInformation("Warmup trigger executed - initializing dependencies");

    // Pre-initialize expensive resources
    // Database connections, HttpClients, etc.
}

// 3. Use static/singleton clients with DI
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        // HttpClientFactory prevents socket exhaustion
        services.AddHttpClient<IMyApiClient, MyApiClient>(client =>
        {
            client.BaseAddress = new Uri("https://api.example.com");
            client.Timeout = TimeSpan.FromSeconds(30);
        });

        // Singleton for expensive initialization
        services.AddSingleton<IExpensiveService>(sp =>
        {
            // Initialize once, reuse across invocations
            return new ExpensiveService();
        });
    }
}

// 4. Reduce package size
// .csproj - exclude unnecessary dependencies
<PropertyGroup>
  <PublishTrimmed>true</PublishTrimmed>
  <TrimMode>partial</TrimMode>
</PropertyGroup>

// 5. Run from package deployment
// Azure CLI
// az functionapp deployment source config-zip \
//   --resource-group myResourceGroup \
//   --name myFunctionApp \
//   --src myapp.zip \
//   --build-remote true

### Notes

- Cold starts improved ~53% across all regions/languages
- Premium Plan provides pre-warmed instances
- Warmup trigger initializes before traffic
- Package deployment can reduce cold start

### Queue Trigger with Error Handling

Reliable message processing with poison queue

**When to use**: Processing messages from Azure Storage Queue

### Template

// C# Isolated Worker - Queue Trigger
using Microsoft.Azure.Functions.Worker;

public class QueueProcessor
{
    private readonly ILogger<QueueProcessor> _logger;
    private readonly IMyService _service;

    public QueueProcessor(ILogger<QueueProcessor> logger, IMyService service)
    {
        _logger = logger;
        _service = service;
    }

    [Function("ProcessQueueMessage")]
    public async Task Run(
        [QueueTrigger("myqueue-items", Connection = "AzureWebJobsStorage")]
        QueueMessage message)
    {
        _logger.LogInformation("Processing message: {Id}", message.MessageId);

        try
        {
            var payload = JsonSerializer.Deserialize<MyPayload>(message.Body);
            await _service.ProcessAsync(payload);

            _logger.LogInformation("Message processed successfully: {Id}", message.MessageId);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error processing message: {Id}", message.MessageId);

            // Message will be retried up to maxDequeueCount (default 5)
            // Then moved to poison queue: myqueue-items-poison
            throw;
        }
    }

    // Optional: Monitor poison queue
    [Function("ProcessPoisonQueue")]
    public async Task ProcessPoison(
        [QueueTrigger("myqueue-items-poison", Connection = "AzureWebJobsStorage")]
        QueueMessage message)
    {
        _logger.LogWarning("Processing poison message: {Id}", message.MessageId);

        // Log to monitoring, alert, or store for manual review
        await _service.HandlePoisonMessageAsync(message);
    }
}

// host.json - Queue configuration
// {
//   "version": "2.0",
//   "extensions": {
//     "queues": {
//       "maxPollingInterval": "00:00:02",
//       "visibilityTimeout": "00:00:30",
//       "batchSize": 16,
//       "maxDequeueCount": 5,
//       "newBatchThreshold": 8
//     }
//   }
// }

### Notes

- Messages retried up to maxDequeueCount times
- Failed messages moved to poison queue
- Configure visibilityTimeout for processing time
- batchSize controls parallel processing

### HTTP Trigger with Long-Running Pattern

Handle work exceeding 230-second HTTP limit

**When to use**: HTTP request triggers long-running work

### Template

// Async HTTP pattern - return immediately, poll for status
[Function("StartLongRunning")]
public static async Task<HttpResponseData> StartLongRunning(
    [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req,
    [DurableClient] DurableTaskClient client,
    FunctionContext context)
{
    var input = await req.ReadFromJsonAsync<WorkRequest>();

    // Start orchestration (returns immediately)
    string instanceId = await client.ScheduleNewOrchestrationInstanceAsync(
        "LongRunningOrchestrator", input);

    // Return status URLs for polling
    return client.CreateCheckStatusResponse(req, instanceId);
}

// Response includes:
// {
//   "id": "abc123",
//   "statusQueryGetUri": "https://.../instances/abc123",
//   "sendEventPostUri": "https://.../instances/abc123/raiseEvent/{eventName}",
//   "terminatePostUri": "https://.../instances/abc123/terminate"
// }

// Alternative: Queue-based pattern without Durable Functions
[Function("StartWork")]
[QueueOutput("work-queue")]
public static async Task<WorkItem> StartWork(
    [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req,
    FunctionContext context)
{
    var input = await req.ReadFromJsonAsync<WorkRequest>();
    var workId = Guid.NewGuid().ToString();

    // Queue the work, return immediately
    var workItem = new WorkItem
    {
        Id = workId,
        Request = input
    };

    // Return work ID for status checking
    var response = req.CreateResponse(HttpStatusCode.Accepted);
    await response.WriteAsJsonAsync(new
    {
        workId = workId,
        statusUrl = $"/api/status/{workId}"
    });

    return workItem;
}

[Function("ProcessWork")]
public static async Task ProcessWork(
    [QueueTrigger("work-queue")] WorkItem work,
    FunctionContext context)
{
    // Long-running processing here
    // Update status in storage for polling
}

### Notes

- HTTP timeout is 230 seconds regardless of plan
- Use Durable Functions for async patterns
- Return immediately with status endpoint
- Client polls for completion

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-functions-v3 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-functions-v3 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-functions-v3 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-functions-v3 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-azure-ai-cloud/skills/azure-functions`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ab-test-setup-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@algolia-search-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@algorithmic-art-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@analytics-tracking-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Sharp Edges

### HTTP Timeout is 230 Seconds Regardless of Plan

Severity: HIGH

Situation: HTTP-triggered functions with long processing time

Symptoms:
504 Gateway Timeout after ~4 minutes.
Request terminates before function completes.
Client receives timeout even though function continues.
host.json timeout setting has no effect for HTTP.

Why this breaks:
The Azure Load Balancer has a hard-coded 230-second idle timeout for HTTP
requests. This applies regardless of your function app timeout setting.

Even if you set functionTimeout to 30 minutes in host.json, HTTP triggers
will timeout after 230 seconds from the client's perspective.

The function may continue running after timeout, but the client won't
receive the response.

Recommended fix:

#### Imported: Use async pattern with Durable Functions

```csharp
[Function("StartLongProcess")]
public static async Task<HttpResponseData> Start(
    [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req,
    [DurableClient] DurableTaskClient client)
{
    var input = await req.ReadFromJsonAsync<WorkRequest>();

    // Start orchestration, returns immediately
    string instanceId = await client.ScheduleNewOrchestrationInstanceAsync(
        "LongRunningOrchestrator", input);

    // Returns status URLs for polling
    return client.CreateCheckStatusResponse(req, instanceId);
}

// Client polls statusQueryGetUri until complete
```

#### Imported: Use queue-based async pattern

```csharp
[Function("StartWork")]
public static async Task<HttpResponseData> StartWork(
    [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req,
    [QueueOutput("work-queue")] out WorkItem workItem)
{
    var workId = Guid.NewGuid().ToString();

    workItem = new WorkItem { Id = workId, /* ... */ };

    var response = req.CreateResponse(HttpStatusCode.Accepted);
    await response.WriteAsJsonAsync(new {
        id = workId,
        statusUrl = $"/api/status/{workId}"
    });
    return response;
}
```

#### Imported: Use webhook callback pattern

```csharp
// Client provides callback URL
// Function queues work, returns 202 Accepted
// When done, POST result to callback URL
```

### Socket Exhaustion from HttpClient Instantiation

Severity: HIGH

Situation: Creating HttpClient instances inside function code

Symptoms:
SocketException: "Unable to connect to remote server"
"An attempt was made to access a socket in a way forbidden"
Sporadic connection failures under load.
Works locally but fails in production.

Why this breaks:
Creating a new HttpClient for each request creates a new socket connection.
Sockets linger in TIME_WAIT state for 240 seconds after closing.

In a serverless environment with high throughput, you quickly exhaust
available sockets. This affects all network clients, not just HttpClient.

Azure Functions shares network resources among multiple customers,
making this even more critical.

Recommended fix:

#### Imported: Use IHttpClientFactory (Recommended)

```csharp
// Program.cs
var host = new HostBuilder()
    .ConfigureFunctionsWorkerDefaults()
    .ConfigureServices(services =>
    {
        services.AddHttpClient<IMyApiClient, MyApiClient>(client =>
        {
            client.BaseAddress = new Uri("https://api.example.com");
            client.Timeout = TimeSpan.FromSeconds(30);
        });
    })
    .Build();

// MyApiClient.cs
public class MyApiClient : IMyApiClient
{
    private readonly HttpClient _client;

    public MyApiClient(HttpClient client)
    {
        _client = client;  // Injected, managed by factory
    }

    public async Task<string> GetDataAsync()
    {
        return await _client.GetStringAsync("/data");
    }
}
```

#### Imported: Use static client (Alternative)

```csharp
public static class MyFunction
{
    // Static HttpClient, reused across invocations
    private static readonly HttpClient _httpClient = new HttpClient
    {
        Timeout = TimeSpan.FromSeconds(30)
    };

    [Function("MyFunction")]
    public static async Task Run(...)
    {
        var result = await _httpClient.GetAsync("...");
    }
}
```

#### Imported: Same pattern for Azure SDK clients

```csharp
// Also applies to:
// - BlobServiceClient
// - CosmosClient
// - ServiceBusClient
// Use DI or static instances
```

### Blocking Async Calls Cause Thread Starvation

Severity: HIGH

Situation: Using .Result, .Wait(), or Thread.Sleep in async code

Symptoms:
Deadlocks under load.
Requests hang indefinitely.
"A task was canceled" exceptions.
Works with low concurrency, fails with high.

Why this breaks:
Azure Functions thread pool is limited. Blocking calls (.Result, .Wait())
hold a thread hostage while waiting, preventing other work.

Thread.Sleep blocks a thread that could be handling other requests.

With multiple concurrent executions, you quickly run out of threads,
causing deadlocks and timeouts.

Recommended fix:

#### Imported: Always use async/await

```csharp
// BAD - blocks thread
var result = httpClient.GetAsync(url).Result;
someTask.Wait();
Thread.Sleep(5000);

// GOOD - yields thread
var result = await httpClient.GetAsync(url);
await someTask;
await Task.Delay(5000);
```

#### Imported: Fix synchronous method calls

```csharp
// BAD - sync over async
public void ProcessData()
{
    var data = GetDataAsync().Result;  // Blocks!
}

// GOOD - async all the way
public async Task ProcessDataAsync()
{
    var data = await GetDataAsync();
}
```

#### Imported: Configure async in console/startup

```csharp
// If you must call async from sync context
public static void Main(string[] args)
{
    // Use GetAwaiter().GetResult() at entry point only
    MainAsync(args).GetAwaiter().GetResult();
}

private static async Task MainAsync(string[] args)
{
    // Async code here
}
```

### Consumption Plan 10-Minute Timeout Limit

Severity: MEDIUM

Situation: Running long processes on Consumption plan

Symptoms:
Function terminates after 10 minutes.
"Function timed out" in logs.
Incomplete processing with no error caught.
Works in development (with longer timeout) but fails in production.

Why this breaks:
Consumption plan has a hard limit of 10 minutes execution time.
Default is 5 minutes if not configured.

This cannot be increased beyond 10 minutes on Consumption plan.
Long-running work requires Premium plan or different architecture.

Recommended fix:

#### Imported: Configure maximum timeout (Consumption)

```json
// host.json
{
  "version": "2.0",
  "functionTimeout": "00:10:00"  // Max for Consumption
}
```

#### Imported: Upgrade to Premium plan for longer timeouts

```json
// Premium plan - 30 min default, unbounded available
{
  "version": "2.0",
  "functionTimeout": "00:30:00"  // Or remove for unbounded
}
```

#### Imported: Break work into smaller chunks

```csharp
// Queue-based chunking
[Function("ProcessChunk")]
[QueueOutput("work-queue")]
public static IEnumerable<WorkChunk> ProcessChunk(
    [QueueTrigger("work-queue")] WorkChunk chunk)
{
    var results = Process(chunk);

    // Queue next chunks if more work
    if (chunk.HasMore)
    {
        yield return chunk.Next();
    }
}
```

### .NET In-Process Model Deprecated November 2026

Severity: HIGH

Situation: Creating new .NET functions or maintaining existing

Symptoms:
Using in-process model in new projects.
Dependency conflicts with host runtime.
Cannot use latest .NET versions.
Future migration burden.

Why this breaks:
The in-process model runs your code in the same process as the
Azure Functions host. This causes:
- Assembly version conflicts
- Limited to LTS .NET versions
- No access to latest .NET features
- Tighter coupling with host runtime

Support ends November 10, 2026. After this date, in-process apps
may stop working or receive no security updates.

Recommended fix:

#### Imported: Use isolated worker for new projects

```bash
# Create new isolated worker project
func init MyFunctionApp --worker-runtime dotnet-isolated

# Or with .NET 8
dotnet new func --name MyFunctionApp --framework net8.0
```

#### Imported: Key migration changes

- FunctionName → Function attribute
- HttpRequest → HttpRequestData
- IActionResult → HttpResponseData
- ILogger injection → constructor injection
- Add Program.cs with HostBuilder

### ILogger Not Outputting to Console or AppInsights

Severity: MEDIUM

Situation: Using dependency-injected ILogger in isolated worker

Symptoms:
Logs not appearing in local console.
Logs not appearing in Application Insights.
Logs work with context.GetLogger() but not injected ILogger.
Must pass logger through all method calls.

Why this breaks:
In isolated worker model, the dependency-injected ILogger may not
be properly connected to the Azure Functions logging pipeline.

Local development especially affected - logs may go nowhere.
Application Insights requires explicit configuration.

The ILogger from FunctionContext works differently than
the injected ILogger<T>.

Recommended fix:

#### Imported: Configure Application Insights properly

```csharp
// Program.cs
var host = new HostBuilder()
    .ConfigureFunctionsWorkerDefaults()
    .ConfigureServices(services =>
    {
        // Add App Insights telemetry
        services.AddApplicationInsightsTelemetryWorkerService();
        services.ConfigureFunctionsApplicationInsights();
    })
    .Build();
```

#### Imported: Configure logging levels

```json
// host.json
{
  "version": "2.0",
  "logging": {
    "applicationInsights": {
      "samplingSettings": {
        "isEnabled": true,
        "excludedTypes": "Request"
      }
    },
    "logLevel": {
      "default": "Information",
      "Host.Results": "Error",
      "Function": "Information",
      "Host.Aggregator": "Trace"
    }
  }
}
```

#### Imported: Use context.GetLogger for reliability

```csharp
[Function("MyFunction")]
public async Task Run(
    [HttpTrigger] HttpRequestData req,
    FunctionContext context)
{
    // This logger always works
    var logger = context.GetLogger<MyFunction>();
    logger.LogInformation("Processing request");
}
```

#### Imported: Local development - check local.settings.json

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated",
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "APPLICATIONINSIGHTS_CONNECTION_STRING": "InstrumentationKey=..."
  }
}
```

### Missing Extension Packages Cause Silent Failures

Severity: MEDIUM

Situation: Using triggers/bindings without installing extensions

Symptoms:
Function not triggering on events.
"No job functions found" warning.
Bindings not working despite correct configuration.
Works after adding extension package.

Why this breaks:
Azure Functions v2+ uses extension bundles for triggers and bindings.
If extensions aren't properly configured or packages aren't installed,
the function host can't recognize the bindings.

In isolated worker, you need explicit NuGet packages.
In in-process, you need Microsoft.Azure.WebJobs.Extensions.*.

Recommended fix:

#### Imported: Check extension bundle (most common)

```json
// host.json - Extension bundles handle most cases
{
  "version": "2.0",
  "extensionBundle": {
    "id": "Microsoft.Azure.Functions.ExtensionBundle",
    "version": "[4.*, 5.0.0)"
  }
}
```

#### Imported: Configure pre-warmed instance count

```bash
# Increase pre-warmed instances (costs more)
az functionapp config set \
  --name <app-name> \
  --resource-group <rg> \
  --prewarmed-instance-count 3
```

#### Imported: Optimize application initialization

```csharp
// Lazy initialize heavy resources
private static readonly Lazy<ExpensiveClient> _client =
    new Lazy<ExpensiveClient>(() => new ExpensiveClient());

// Connection pooling
services.AddDbContext<MyDbContext>(options =>
    options.UseSqlServer(connectionString, sql =>
        sql.MinPoolSize(5)));
```

#### Imported: Use always-ready instances (most expensive)

```bash
# Instances always running, no cold start
az functionapp config set \
  --name <app-name> \
  --resource-group <rg> \
  --minimum-elastic-instance-count 2
```

#### Imported: Validation Checks

### Hardcoded Connection String

Severity: ERROR

Connection strings must never be hardcoded

Message: Hardcoded connection string. Use Key Vault or App Settings.

### Hardcoded API Key in Code

Severity: ERROR

API keys should use Key Vault or App Settings

Message: Hardcoded API key. Use Key Vault or environment variables.

### Anonymous Authorization Level in Production

Severity: WARNING

Anonymous endpoints should be protected by other means

Message: Anonymous authorization. Ensure protected by API Management or other auth.

### Blocking .Result Call

Severity: ERROR

Using .Result blocks threads and causes deadlocks

Message: Blocking .Result call. Use await instead.

### Blocking .Wait() Call

Severity: ERROR

Using .Wait() blocks threads

Message: Blocking .Wait() call. Use await instead.

### Thread.Sleep Usage

Severity: ERROR

Thread.Sleep blocks threads

Message: Thread.Sleep blocks threads. Use await Task.Delay() instead.

### New HttpClient Instance

Severity: WARNING

Creating HttpClient per request causes socket exhaustion

Message: New HttpClient per request. Use IHttpClientFactory or static client.

### HttpClient in Using Statement

Severity: WARNING

Disposing HttpClient causes socket exhaustion

Message: HttpClient in using statement. Use IHttpClientFactory for proper lifecycle.

### In-Process FunctionName Attribute

Severity: INFO

In-process model deprecated November 2026

Message: In-process FunctionName attribute. Consider migrating to isolated worker.

### Missing Function Attribute

Severity: WARNING

Isolated worker requires [Function] attribute

Message: HttpTrigger without [Function] attribute (isolated worker requires it).

#### Imported: Collaboration

### Delegation Triggers

- user needs AWS serverless -> aws-serverless (Lambda, API Gateway, SAM)
- user needs GCP serverless -> gcp-cloud-run (Cloud Run, Cloud Functions)
- user needs container-based deployment -> gcp-cloud-run (Azure Container Apps or Cloud Run)
- user needs database design -> postgres-wizard (Azure SQL, Cosmos DB data modeling)
- user needs authentication -> auth-specialist (Azure AD, Easy Auth, managed identity)
- user needs complex orchestration -> workflow-automation (Logic Apps, Power Automate)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
