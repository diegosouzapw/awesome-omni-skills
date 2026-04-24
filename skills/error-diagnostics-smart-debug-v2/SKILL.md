---
name: error-diagnostics-smart-debug-v2
description: "error-diagnostics-smart-debug workflow skill. Use this skill when the user needs working with error diagnostics smart debug and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["error-diagnostics-smart-debug-v2", "error-diagnostics-smart-debug", "working", "error", "diagnostics", "smart", "debug", "development"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-24"
---

# error-diagnostics-smart-debug

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/error-diagnostics-smart-debug` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Context, Output Format, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on error diagnostics smart debug tasks or workflows
- Needing guidance, best practices, or checklists for error diagnostics smart debug
- The task is unrelated to error diagnostics smart debug
- You need a different domain or tool outside this scope
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Error pattern recognition
6. Stack trace analysis with probable causes
7. Component dependency analysis

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

You are an expert AI-assisted debugging specialist with deep knowledge of modern debugging tools, observability platforms, and automated root cause analysis.

#### Imported: Workflow

### 1. Initial Triage
Use Task tool (subagent_type="debugger") for AI-powered analysis:
- Error pattern recognition
- Stack trace analysis with probable causes
- Component dependency analysis
- Severity assessment
- Generate 3-5 ranked hypotheses
- Recommend debugging strategy

### 2. Observability Data Collection
For production/staging issues, gather:
- Error tracking (Sentry, Rollbar, Bugsnag)
- APM metrics (DataDog, New Relic, Dynatrace)
- Distributed traces (Jaeger, Zipkin, Honeycomb)
- Log aggregation (ELK, Splunk, Loki)
- Session replays (LogRocket, FullStory)

Query for:
- Error frequency/trends
- Affected user cohorts
- Environment-specific patterns
- Related errors/warnings
- Performance degradation correlation
- Deployment timeline correlation

### 3. Hypothesis Generation
For each hypothesis include:
- Probability score (0-100%)
- Supporting evidence from logs/traces/code
- Falsification criteria
- Testing approach
- Expected symptoms if true

Common categories:
- Logic errors (race conditions, null handling)
- State management (stale cache, incorrect transitions)
- Integration failures (API changes, timeouts, auth)
- Resource exhaustion (memory leaks, connection pools)
- Configuration drift (env vars, feature flags)
- Data corruption (schema mismatches, encoding)

### 4. Strategy Selection
Select based on issue characteristics:

**Interactive Debugging**: Reproducible locally → VS Code/Chrome DevTools, step-through
**Observability-Driven**: Production issues → Sentry/DataDog/Honeycomb, trace analysis
**Time-Travel**: Complex state issues → rr/Redux DevTools, record & replay
**Chaos Engineering**: Intermittent under load → Chaos Monkey/Gremlin, inject failures
**Statistical**: Small % of cases → Delta debugging, compare success vs failure

### 5. Intelligent Instrumentation
AI suggests optimal breakpoint/logpoint locations:
- Entry points to affected functionality
- Decision nodes where behavior diverges
- State mutation points
- External integration boundaries
- Error handling paths

Use conditional breakpoints and logpoints for production-like environments.

### 6. Production-Safe Techniques
**Dynamic Instrumentation**: OpenTelemetry spans, non-invasive attributes
**Feature-Flagged Debug Logging**: Conditional logging for specific users
**Sampling-Based Profiling**: Continuous profiling with minimal overhead (Pyroscope)
**Read-Only Debug Endpoints**: Protected by auth, rate-limited state inspection
**Gradual Traffic Shifting**: Canary deploy debug version to 10% traffic

### 7. Root Cause Analysis
AI-powered code flow analysis:
- Full execution path reconstruction
- Variable state tracking at decision points
- External dependency interaction analysis
- Timing/sequence diagram generation
- Code smell detection
- Similar bug pattern identification
- Fix complexity estimation

### 8. Fix Implementation
AI generates fix with:
- Code changes required
- Impact assessment
- Risk level
- Test coverage needs
- Rollback strategy

### 9. Validation
Post-fix verification:
- Run test suite
- Performance comparison (baseline vs fix)
- Canary deployment (monitor error rate)
- AI code review of fix

Success criteria:
- Tests pass
- No performance regression
- Error rate unchanged or decreased
- No new edge cases introduced

### 10. Prevention
- Generate regression tests using AI
- Update knowledge base with root cause
- Add monitoring/alerts for similar issues
- Document troubleshooting steps in runbook

#### Imported: Context

Process issue from: $ARGUMENTS

Parse for:
- Error messages/stack traces
- Reproduction steps
- Affected components/services
- Performance characteristics
- Environment (dev/staging/production)
- Failure patterns (intermittent/consistent)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @error-diagnostics-smart-debug-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @error-diagnostics-smart-debug-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @error-diagnostics-smart-debug-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @error-diagnostics-smart-debug-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example: Minimal Debug Session

```typescript
// Issue: "Checkout timeout errors (intermittent)"

// 1. Initial analysis
const analysis = await aiAnalyze({
  error: "Payment processing timeout",
  frequency: "5% of checkouts",
  environment: "production"
});
// AI suggests: "Likely N+1 query or external API timeout"

// 2. Gather observability data
const sentryData = await getSentryIssue("CHECKOUT_TIMEOUT");
const ddTraces = await getDataDogTraces({
  service: "checkout",
  operation: "process_payment",
  duration: ">5000ms"
});

// 3. Analyze traces
// AI identifies: 15+ sequential DB queries per checkout
// Hypothesis: N+1 query in payment method loading

// 4. Add instrumentation
span.setAttribute('debug.queryCount', queryCount);
span.setAttribute('debug.paymentMethodId', methodId);

// 5. Deploy to 10% traffic, monitor
// Confirmed: N+1 pattern in payment verification

// 6. AI generates fix
// Replace sequential queries with batch query

// 7. Validate
// - Tests pass
// - Latency reduced 70%
// - Query count: 15 → 1
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/error-diagnostics-smart-debug`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@earllm-build-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@electron-development-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@elixir-pro-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@elon-musk-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Output Format

Provide structured report:
1. **Issue Summary**: Error, frequency, impact
2. **Root Cause**: Detailed diagnosis with evidence
3. **Fix Proposal**: Code changes, risk, impact
4. **Validation Plan**: Steps to verify fix
5. **Prevention**: Tests, monitoring, documentation

Focus on actionable insights. Use AI assistance throughout for pattern recognition, hypothesis generation, and fix validation.

---

Issue to debug: $ARGUMENTS

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
