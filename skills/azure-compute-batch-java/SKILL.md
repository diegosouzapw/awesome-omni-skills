---
name: azure-compute-batch-java
description: "Azure Batch SDK for Java workflow skill. Use this skill when the user needs Azure Batch SDK for Java. Run large-scale parallel and HPC batch jobs with pools, jobs, tasks, and compute nodes and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-compute-batch-java", "azure", "batch", "sdk", "for", "java", "run", "large-scale"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Azure Batch SDK for Java

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-compute-batch-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Batch SDK for Java Client library for running large-scale parallel and high-performance computing (HPC) batch jobs in Azure.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Environment Variables, Client Creation, Key Concepts, Pool Operations, Job Operations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Batch SDK for Java. Run large-scale parallel and HPC batch jobs with pools, jobs, tasks, and compute nodes.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-compute-batch</artifactId> <version>1.0.0-beta.5</version> </dependency>
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```xml
<dependency>
    <groupId>com.azure</groupId>
    <artifactId>azure-compute-batch</artifactId>
    <version>1.0.0-beta.5</version>
</dependency>
```

#### Imported: Prerequisites

- Azure Batch account
- Pool configured with compute nodes
- Azure subscription

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-compute-batch-java to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-compute-batch-java against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-compute-batch-java for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-compute-batch-java using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use Entra ID — Preferred over shared key for authentication
- Use management SDK for pools — azure-resourcemanager-batch supports managed identities
- Batch task creation — Use createTaskCollection or createTasks for multiple tasks
- Handle LRO properly — Pool resize, delete operations are long-running
- Monitor task counts — Use getJobTaskCounts to track progress
- Set constraints — Configure maxWallClockTime and maxTaskRetryCount
- Use low-priority nodes — Cost savings for fault-tolerant workloads

### Imported Operating Notes

#### Imported: Best Practices

1. **Use Entra ID** — Preferred over shared key for authentication
2. **Use management SDK for pools** — `azure-resourcemanager-batch` supports managed identities
3. **Batch task creation** — Use `createTaskCollection` or `createTasks` for multiple tasks
4. **Handle LRO properly** — Pool resize, delete operations are long-running
5. **Monitor task counts** — Use `getJobTaskCounts` to track progress
6. **Set constraints** — Configure `maxWallClockTime` and `maxTaskRetryCount`
7. **Use low-priority nodes** — Cost savings for fault-tolerant workloads
8. **Enable autoscale** — Dynamically adjust pool size based on workload

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-compute-batch-java`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ai-dev-jobs-mcp` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@arm-cortex-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@asana-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ask-questions-if-underspecified` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| Maven Package | https://central.sonatype.com/artifact/com.azure/azure-compute-batch |
| GitHub | https://github.com/Azure/azure-sdk-for-java/tree/main/sdk/batch/azure-compute-batch |
| API Documentation | https://learn.microsoft.com/java/api/com.azure.compute.batch |
| Product Docs | https://learn.microsoft.com/azure/batch/ |
| REST API | https://learn.microsoft.com/rest/api/batchservice/ |
| Samples | https://github.com/azure/azure-batch-samples |

#### Imported: Environment Variables

```bash
AZURE_BATCH_ENDPOINT=https://<account>.<region>.batch.azure.com
AZURE_BATCH_ACCOUNT=<account-name>
AZURE_BATCH_ACCESS_KEY=<account-key>
```

#### Imported: Client Creation

### With Microsoft Entra ID (Recommended)

```java
import com.azure.compute.batch.BatchClient;
import com.azure.compute.batch.BatchClientBuilder;
import com.azure.identity.DefaultAzureCredentialBuilder;

BatchClient batchClient = new BatchClientBuilder()
    .credential(new DefaultAzureCredentialBuilder().build())
    .endpoint(System.getenv("AZURE_BATCH_ENDPOINT"))
    .buildClient();
```

### Async Client

```java
import com.azure.compute.batch.BatchAsyncClient;

BatchAsyncClient batchAsyncClient = new BatchClientBuilder()
    .credential(new DefaultAzureCredentialBuilder().build())
    .endpoint(System.getenv("AZURE_BATCH_ENDPOINT"))
    .buildAsyncClient();
```

### With Shared Key Credentials

```java
import com.azure.core.credential.AzureNamedKeyCredential;

String accountName = System.getenv("AZURE_BATCH_ACCOUNT");
String accountKey = System.getenv("AZURE_BATCH_ACCESS_KEY");
AzureNamedKeyCredential sharedKeyCreds = new AzureNamedKeyCredential(accountName, accountKey);

BatchClient batchClient = new BatchClientBuilder()
    .credential(sharedKeyCreds)
    .endpoint(System.getenv("AZURE_BATCH_ENDPOINT"))
    .buildClient();
```

#### Imported: Key Concepts

| Concept | Description |
|---------|-------------|
| Pool | Collection of compute nodes that run tasks |
| Job | Logical grouping of tasks |
| Task | Unit of computation (command/script) |
| Node | VM that executes tasks |
| Job Schedule | Recurring job creation |

#### Imported: Pool Operations

### Create Pool

```java
import com.azure.compute.batch.models.*;

batchClient.createPool(new BatchPoolCreateParameters("myPoolId", "STANDARD_DC2s_V2")
    .setVirtualMachineConfiguration(
        new VirtualMachineConfiguration(
            new BatchVmImageReference()
                .setPublisher("Canonical")
                .setOffer("UbuntuServer")
                .setSku("22_04-lts")
                .setVersion("latest"),
            "batch.node.ubuntu 22.04"))
    .setTargetDedicatedNodes(2)
    .setTargetLowPriorityNodes(0), null);
```

### Get Pool

```java
BatchPool pool = batchClient.getPool("myPoolId");
System.out.println("Pool state: " + pool.getState());
System.out.println("Current dedicated nodes: " + pool.getCurrentDedicatedNodes());
```

### List Pools

```java
import com.azure.core.http.rest.PagedIterable;

PagedIterable<BatchPool> pools = batchClient.listPools();
for (BatchPool pool : pools) {
    System.out.println("Pool: " + pool.getId() + ", State: " + pool.getState());
}
```

### Resize Pool

```java
import com.azure.core.util.polling.SyncPoller;

BatchPoolResizeParameters resizeParams = new BatchPoolResizeParameters()
    .setTargetDedicatedNodes(4)
    .setTargetLowPriorityNodes(2);

SyncPoller<BatchPool, BatchPool> poller = batchClient.beginResizePool("myPoolId", resizeParams);
poller.waitForCompletion();
BatchPool resizedPool = poller.getFinalResult();
```

### Enable AutoScale

```java
BatchPoolEnableAutoScaleParameters autoScaleParams = new BatchPoolEnableAutoScaleParameters()
    .setAutoScaleEvaluationInterval(Duration.ofMinutes(5))
    .setAutoScaleFormula("$TargetDedicatedNodes = min(10, $PendingTasks.GetSample(TimeInterval_Minute * 5));");

batchClient.enablePoolAutoScale("myPoolId", autoScaleParams);
```

### Delete Pool

```java
SyncPoller<BatchPool, Void> deletePoller = batchClient.beginDeletePool("myPoolId");
deletePoller.waitForCompletion();
```

#### Imported: Job Operations

### Create Job

```java
batchClient.createJob(
    new BatchJobCreateParameters("myJobId", new BatchPoolInfo().setPoolId("myPoolId"))
        .setPriority(100)
        .setConstraints(new BatchJobConstraints()
            .setMaxWallClockTime(Duration.ofHours(24))
            .setMaxTaskRetryCount(3)),
    null);
```

### Get Job

```java
BatchJob job = batchClient.getJob("myJobId", null, null);
System.out.println("Job state: " + job.getState());
```

### List Jobs

```java
PagedIterable<BatchJob> jobs = batchClient.listJobs(new BatchJobsListOptions());
for (BatchJob job : jobs) {
    System.out.println("Job: " + job.getId() + ", State: " + job.getState());
}
```

### Get Task Counts

```java
BatchTaskCountsResult counts = batchClient.getJobTaskCounts("myJobId");
System.out.println("Active: " + counts.getTaskCounts().getActive());
System.out.println("Running: " + counts.getTaskCounts().getRunning());
System.out.println("Completed: " + counts.getTaskCounts().getCompleted());
```

### Terminate Job

```java
BatchJobTerminateParameters terminateParams = new BatchJobTerminateParameters()
    .setTerminationReason("Manual termination");
BatchJobTerminateOptions options = new BatchJobTerminateOptions().setParameters(terminateParams);

SyncPoller<BatchJob, BatchJob> poller = batchClient.beginTerminateJob("myJobId", options, null);
poller.waitForCompletion();
```

### Delete Job

```java
SyncPoller<BatchJob, Void> deletePoller = batchClient.beginDeleteJob("myJobId");
deletePoller.waitForCompletion();
```

#### Imported: Task Operations

### Create Single Task

```java
BatchTaskCreateParameters task = new BatchTaskCreateParameters("task1", "echo 'Hello World'");
batchClient.createTask("myJobId", task);
```

### Create Task with Exit Conditions

```java
batchClient.createTask("myJobId", new BatchTaskCreateParameters("task2", "cmd /c exit 3")
    .setExitConditions(new ExitConditions()
        .setExitCodeRanges(Arrays.asList(
            new ExitCodeRangeMapping(2, 4, 
                new ExitOptions().setJobAction(BatchJobActionKind.TERMINATE)))))
    .setUserIdentity(new UserIdentity()
        .setAutoUser(new AutoUserSpecification()
            .setScope(AutoUserScope.TASK)
            .setElevationLevel(ElevationLevel.NON_ADMIN))),
    null);
```

### Create Task Collection (up to 100)

```java
List<BatchTaskCreateParameters> taskList = Arrays.asList(
    new BatchTaskCreateParameters("task1", "echo Task 1"),
    new BatchTaskCreateParameters("task2", "echo Task 2"),
    new BatchTaskCreateParameters("task3", "echo Task 3")
);
BatchTaskGroup taskGroup = new BatchTaskGroup(taskList);
BatchCreateTaskCollectionResult result = batchClient.createTaskCollection("myJobId", taskGroup);
```

### Create Many Tasks (no limit)

```java
List<BatchTaskCreateParameters> tasks = new ArrayList<>();
for (int i = 0; i < 1000; i++) {
    tasks.add(new BatchTaskCreateParameters("task" + i, "echo Task " + i));
}
batchClient.createTasks("myJobId", tasks);
```

### Get Task

```java
BatchTask task = batchClient.getTask("myJobId", "task1");
System.out.println("Task state: " + task.getState());
System.out.println("Exit code: " + task.getExecutionInfo().getExitCode());
```

### List Tasks

```java
PagedIterable<BatchTask> tasks = batchClient.listTasks("myJobId");
for (BatchTask task : tasks) {
    System.out.println("Task: " + task.getId() + ", State: " + task.getState());
}
```

### Get Task Output

```java
import com.azure.core.util.BinaryData;
import java.nio.charset.StandardCharsets;

BinaryData stdout = batchClient.getTaskFile("myJobId", "task1", "stdout.txt");
System.out.println(new String(stdout.toBytes(), StandardCharsets.UTF_8));
```

### Terminate Task

```java
batchClient.terminateTask("myJobId", "task1", null, null);
```

#### Imported: Node Operations

### List Nodes

```java
PagedIterable<BatchNode> nodes = batchClient.listNodes("myPoolId", new BatchNodesListOptions());
for (BatchNode node : nodes) {
    System.out.println("Node: " + node.getId() + ", State: " + node.getState());
}
```

### Reboot Node

```java
SyncPoller<BatchNode, BatchNode> rebootPoller = batchClient.beginRebootNode("myPoolId", "nodeId");
rebootPoller.waitForCompletion();
```

### Get Remote Login Settings

```java
BatchNodeRemoteLoginSettings settings = batchClient.getNodeRemoteLoginSettings("myPoolId", "nodeId");
System.out.println("IP: " + settings.getRemoteLoginIpAddress());
System.out.println("Port: " + settings.getRemoteLoginPort());
```

#### Imported: Job Schedule Operations

### Create Job Schedule

```java
batchClient.createJobSchedule(new BatchJobScheduleCreateParameters("myScheduleId",
    new BatchJobScheduleConfiguration()
        .setRecurrenceInterval(Duration.ofHours(6))
        .setDoNotRunUntil(OffsetDateTime.now().plusDays(1)),
    new BatchJobSpecification(new BatchPoolInfo().setPoolId("myPoolId"))
        .setPriority(50)),
    null);
```

### Get Job Schedule

```java
BatchJobSchedule schedule = batchClient.getJobSchedule("myScheduleId");
System.out.println("Schedule state: " + schedule.getState());
```

#### Imported: Error Handling

```java
import com.azure.compute.batch.models.BatchErrorException;
import com.azure.compute.batch.models.BatchError;

try {
    batchClient.getPool("nonexistent-pool");
} catch (BatchErrorException e) {
    BatchError error = e.getValue();
    System.err.println("Error code: " + error.getCode());
    System.err.println("Message: " + error.getMessage().getValue());
    
    if ("PoolNotFound".equals(error.getCode())) {
        System.err.println("The specified pool does not exist.");
    }
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
