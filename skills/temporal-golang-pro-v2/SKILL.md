---
name: temporal-golang-pro-v2
description: "Temporal Go SDK (temporal-golang-pro) workflow skill. Use this skill when the user needs building durable distributed systems with Temporal Go SDK. Covers deterministic workflow rules, mTLS worker configs, and advanced patterns and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["temporal-golang-pro-v2", "temporal-golang-pro", "building", "durable", "distributed", "systems", "temporal", "sdk"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Temporal Go SDK (temporal-golang-pro)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/temporal-golang-pro` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Temporal Go SDK (temporal-golang-pro)

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Designing Distributed Systems: When building microservices that require durable state and reliable orchestration.
- Implementing Complex Workflows: Using the Go SDK to handle long-running processes (days/months) or complex Saga patterns.
- Optimizing Performance: When workers need fine-tuned concurrency, mTLS security, or custom interceptors.
- Ensuring Reliability: Implementing idempotent activities, graceful error handling, and sophisticated retry policies.
- Maintenance & Evolution: Versioning running workflows or performing zero-downtime worker updates.
- Using Temporal with other SDKs (Python, Java, TypeScript) - refer to their specific -pro skills.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `resources/implementation-playbook.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `resources/testing-strategies.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Gather Context: Proactively ask for:
2. Target Temporal Cluster (Cloud vs. Self-hosted) and Namespace.
3. Task Queue names and expected throughput.
4. Security requirements (mTLS paths, authentication).
5. Failure modes and desired retry/timeout policies.
6. Verify Determinism: Before suggesting workflow code, verify against these 5 Rules:
7. No native Go concurrency (goroutines).

### Imported Workflow Notes

#### Imported: Step-by-Step Guide

1.  **Gather Context**: Proactively ask for:
    - Target **Temporal Cluster** (Cloud vs. Self-hosted) and **Namespace**.
    - **Task Queue** names and expected throughput.
    - **Security requirements** (mTLS paths, authentication).
    - **Failure modes** and desired retry/timeout policies.
2.  **Verify Determinism**: Before suggesting workflow code, verify against these **5 Rules**:
    - No native Go concurrency (goroutines).
    - No native time (`time.Now`, `time.Sleep`).
    - No non-deterministic map iteration (must sort keys).
    - No direct external I/O or network calls.
    - No non-deterministic random numbers.
3.  **Implement Incrementally**: Start with shared Protobuf/Data classes, then Activities, then Workflows, and finally Workers.
4.  **Leverage Resources**: If the implementation requires advanced patterns (Sagas, Interceptors, Replay Testing), explicitly refer to the implementation playbook and testing strategies.

#### Imported: Overview

Expert-level guide for building resilient, scalable, and deterministic distributed systems using the Temporal Go SDK. This skill transforms vague orchestration requirements into production-grade Go implementations, focusing on durable execution, strict determinism, and enterprise-scale worker configuration.

#### Imported: Capabilities

### Go SDK Implementation

- **Worker Management**: Deep knowledge of `worker.Options`, including `MaxConcurrentActivityTaskPollers`, `WorkerStopTimeout`, and `StickyScheduleToStartTimeout`.
- **Interceptors**: Implementing Client, Worker, and Workflow interceptors for cross-cutting concerns (logging, tracing, auth).
- **Custom Data Converters**: Integrating Protobuf, encrypted payloads, or custom JSON marshaling.

### Advanced Workflow Patterns

- **Durable Concurrency**: Using `workflow.Go`, `workflow.Channel`, and `workflow.Selector` instead of native primitives.
- **Versioning**: Implementing safe code evolution using `workflow.GetVersion` and `workflow.GetReplaySafeLogger`.
- **Large-scale Processing**: Pattern for `ContinueAsNew` to manage history size limits (defaults: 50MB or 50K events).
- **Child Workflows**: Managing lifecycle, cancellation, and parent-child signal propagation.

### Testing & Observability

- **Testsuite Mastery**: Using `WorkflowTestSuite` for unit and functional testing with deterministic time control.
- **Mocking**: Sophisticated activity and child workflow mocking strategies.
- **Replay Testing**: Validating code changes against production event histories.
- **Metrics**: Configuring Prometheus/OpenTelemetry exporters for worker performance tracking.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @temporal-golang-pro-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @temporal-golang-pro-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @temporal-golang-pro-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @temporal-golang-pro-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Versioned Workflow (Deterministic)

```go
// Note: imports omitted. Requires 'go.temporal.io/sdk/workflow', 'go.temporal.io/sdk/temporal', and 'time'.
func SubscriptionWorkflow(ctx workflow.Context, userID string) error {
    // 1. Versioning for logic evolution (v1 = DefaultVersion)
    v := workflow.GetVersion(ctx, "billing_logic", workflow.DefaultVersion, 2)

    for i := 0; i < 12; i++ {
        ao := workflow.ActivityOptions{
            StartToCloseTimeout: 5 * time.Minute,
            RetryPolicy: &temporal.RetryPolicy{MaximumAttempts: 3},
        }
        ctx = workflow.WithActivityOptions(ctx, ao)

        // 2. Activity Execution (Always handle errors)
        err := workflow.ExecuteActivity(ctx, ChargePaymentActivity, userID).Get(ctx, nil)
        if err != nil {
            workflow.GetLogger(ctx).Error("Payment failed", "Error", err)
            return err
        }

        // 3. Durable Sleep (Time-skipping safe)
        sleepDuration := 30 * 24 * time.Hour
        if v >= 2 {
            sleepDuration = 28 * 24 * time.Hour
        }

        if err := workflow.Sleep(ctx, sleepDuration); err != nil {
            return err
        }
    }
    return nil
}
```

### Example 2: Full mTLS Worker Setup

```go
func RunSecureWorker() error {
    // 1. Load Client Certificate and Key
    cert, err := tls.LoadX509KeyPair("client.pem", "client.key")
    if err != nil {
        return fmt.Errorf("failed to load client keys: %w", err)
    }

    // 2. Load CA Certificate for Server verification (Proper mTLS)
    caPem, err := os.ReadFile("ca.pem")
    if err != nil {
        return fmt.Errorf("failed to read CA cert: %w", err)
    }
    certPool := x509.NewCertPool()
    if !certPool.AppendCertsFromPEM(caPem) {
        return fmt.Errorf("failed to parse CA cert")
    }

    // 3. Dial Cluster with full TLS config
    c, err := client.Dial(client.Options{
        HostPort:  "temporal.example.com:7233",
        Namespace: "production",
        ConnectionOptions: client.ConnectionOptions{
            TLS: &tls.Config{
                Certificates: []tls.Certificate{cert},
                RootCAs:      certPool,
            },
        },
    })
    if err != nil {
        return fmt.Errorf("failed to dial temporal: %w", err)
    }
    defer c.Close()

    w := worker.New(c, "payment-queue", worker.Options{})
    w.RegisterWorkflow(SubscriptionWorkflow)

    if err := w.Run(worker.InterruptCh()); err != nil {
        return fmt.Errorf("worker run failed: %w", err)
    }
    return nil
}
```

### Example 3: Selector & Signal Integration

```go
func ApprovalWorkflow(ctx workflow.Context) (string, error) {
    var approved bool
    signalCh := workflow.GetSignalChannel(ctx, "approval-signal")

    // Use Selector to wait for multiple async events
    s := workflow.NewSelector(ctx)
    s.AddReceive(signalCh, func(c workflow.ReceiveChannel, _ bool) {
        c.Receive(ctx, &approved)
    })

    // Add 72-hour timeout timer
    s.AddReceive(workflow.NewTimer(ctx, 72*time.Hour).GetChannel(), func(c workflow.ReceiveChannel, _ bool) {
        approved = false
    })

    s.Select(ctx)

    if !approved {
        return "rejected", nil
    }
    return "approved", nil
}
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Always handle errors from ExecuteActivity and client.Dial.
- ✅ Do: Use workflow.Go and workflow.Channel for concurrency.
- ✅ Do: Sort map keys before iteration to maintain determinism.
- ✅ Do: Use activity.RecordHeartbeat for activities lasting > 1 minute.
- ✅ Do: Test logic compatibility using replayer.ReplayWorkflowHistoryFromJSON.
- ❌ Don't: Swallow errors with _ or log.Fatal in production workers.
- ❌ Don't: Perform direct Network/Disk I/O inside a Workflow function.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Always handle errors from `ExecuteActivity` and `client.Dial`.
- ✅ **Do:** Use `workflow.Go` and `workflow.Channel` for concurrency.
- ✅ **Do:** Sort map keys before iteration to maintain determinism.
- ✅ **Do:** Use `activity.RecordHeartbeat` for activities lasting > 1 minute.
- ✅ **Do:** Test logic compatibility using `replayer.ReplayWorkflowHistoryFromJSON`.
- ❌ **Don't:** Swallow errors with `_` or `log.Fatal` in production workers.
- ❌ **Don't:** Perform direct Network/Disk I/O inside a Workflow function.
- ❌ **Don't:** Rely on native `time.Now()` or `rand.Int()`.
- ❌ **Don't:** Apply this to simple cron jobs that don't require durability.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/temporal-golang-pro`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

- **Panic: Determinism Mismatch**: Usually caused by logic changes without `workflow.GetVersion` or non-deterministic code (e.g., native maps).
- **Error: History Size Exceeded**: History limit reached (default 50K events). Ensure `ContinueAsNew` is implemented.
- **Worker Hang**: Check `WorkerStopTimeout` and ensure all activities handle context cancellation.

## Related Skills

- `@tdd-workflow-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tdd-workflows-tdd-cycle-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tdd-workflows-tdd-green-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tdd-workflows-tdd-red-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [implementation-playbook.md](resources/implementation-playbook.md)
- [testing-strategies.md](resources/testing-strategies.md)

### Imported Reference Notes

#### Imported: Resources

- [Implementation Playbook](resources/implementation-playbook.md) - Deep dive into Go SDK patterns.
- [Testing Strategies](resources/testing-strategies.md) - Unit, Replay, and Integration testing for Go.
- [Temporal Go SDK Reference](https://pkg.go.dev/go.temporal.io/sdk)
- [Temporal Go Samples](https://github.com/temporalio/samples-go)

#### Imported: Limitations

- Does not cover Temporal Cloud UI navigation or TLS certificate provisioning workflows.
- Does not cover Temporal Java, Python, or TypeScript SDKs; refer to their dedicated `-pro` skills.
- Assumes Temporal Server v1.20+ and Go SDK v1.25+; older SDK versions may have different APIs.
- Does not cover experimental Temporal features (e.g., Nexus, Multi-cluster Replication).
- Does not address global namespace configuration or multi-region failover setup.
- Does not cover Temporal Worker versioning via the `worker-versioning` feature flag (experimental).
