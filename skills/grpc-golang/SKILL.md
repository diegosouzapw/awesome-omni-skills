---
name: grpc-golang
description: "gRPC Golang (gRPC-Go) workflow skill. Use this skill when the user needs Build production-ready gRPC services in Go with mTLS, streaming, and observability. Use when designing Protobuf contracts with Buf or implementing secure service-to-service transport and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["grpc-golang", "build", "production-ready", "grpc", "services", "mtls", "streaming", "and"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# gRPC Golang (gRPC-Go)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/grpc-golang` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# gRPC Golang (gRPC-Go)

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Designing microservices communication with gRPC in Go.
- Building high-performance internal APIs using Protobuf.
- Implementing streaming workloads (unidirectional or bidirectional).
- Standardizing API contracts using Protobuf and Buf.
- Configuring mTLS for service-to-service authentication.
- Building pure REST/HTTP public APIs without gRPC requirements.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `resources/implementation-playbook.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `resources/implementation-playbook.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm Technical Context: Identify Go version, gRPC-Go version, and whether the project uses Buf or raw protoc.
2. Confirm Requirements: Identify mTLS needs, load patterns (unary/streaming), SLOs, and message size limits.
3. Plan Schema: Define package versioning (e.g., api.v1), resource types, and error mapping.
4. Security Design: Implement mTLS for service-to-service authentication.
5. Observability: Configure interceptors for tracing, metrics, and structured logging.
6. Verification: Always run buf lint and breaking change checks before finalizing code generation.
7. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.

### Imported Workflow Notes

#### Imported: Step-by-Step Guide

1. **Confirm Technical Context**: Identify Go version, gRPC-Go version, and whether the project uses Buf or raw protoc.
2. **Confirm Requirements**: Identify mTLS needs, load patterns (unary/streaming), SLOs, and message size limits.
3. **Plan Schema**: Define package versioning (e.g., `api.v1`), resource types, and error mapping.
4. **Security Design**: Implement mTLS for service-to-service authentication.
5. **Observability**: Configure interceptors for tracing, metrics, and structured logging.
6. **Verification**: Always run `buf lint` and breaking change checks before finalizing code generation.

Refer to `resources/implementation-playbook.md` for detailed patterns, code examples, and anti-patterns.

#### Imported: Overview

Comprehensive guide for designing and implementing production-grade gRPC services in Go. Covers contract standardization with Buf, transport layer security via mTLS, and deep observability with OpenTelemetry interceptors.

#### Imported: Limitations

- Does not cover service mesh traffic routing (Istio/Linkerd configuration).
- Does not cover gRPC-Web or browser-based gRPC integration.
- Assumes Go 1.21+ and gRPC-Go v1.60+; older versions may have different APIs (e.g., `grpc.Dial` vs `grpc.NewClient`).
- Does not cover L7 gRPC-aware load balancer configuration (e.g., Envoy, NGINX).
- Does not address Protobuf schema registry or large-scale schema governance beyond Buf lint.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @grpc-golang to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @grpc-golang against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @grpc-golang for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @grpc-golang using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Defining a Service & Message (v1 API)

```proto
syntax = "proto3";
package api.v1;
option go_package = "github.com/org/repo/gen/api/v1;apiv1";

service UserService {
  rpc GetUser(GetUserRequest) returns (GetUserResponse);
}

message User {
  string id = 1;
  string name = 2;
}

message GetUserRequest {
  string id = 1;
}

message GetUserResponse {
  User user = 1;
}
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Use Buf to standardize your toolchain and linting with buf.yaml and buf.gen.yaml.
- ✅ Do: Always use semantic versioning in package paths (e.g., package api.v1).
- ✅ Do: Enforce mTLS for all internal service-to-service communication.
- ✅ Do: Handle ctx.Done() in all streaming handlers to prevent resource leaks.
- ✅ Do: Map domain errors to standard gRPC status codes (e.g., codes.NotFound).
- ❌ Don't: Return raw internal error strings or stack traces to gRPC clients.
- ❌ Don't: Create a new grpc.ClientConn per request; always reuse connections.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use Buf to standardize your toolchain and linting with `buf.yaml` and `buf.gen.yaml`.
- ✅ **Do:** Always use semantic versioning in package paths (e.g., `package api.v1`).
- ✅ **Do:** Enforce mTLS for all internal service-to-service communication.
- ✅ **Do:** Handle `ctx.Done()` in all streaming handlers to prevent resource leaks.
- ✅ **Do:** Map domain errors to standard gRPC status codes (e.g., `codes.NotFound`).
- ❌ **Don't:** Return raw internal error strings or stack traces to gRPC clients.
- ❌ **Don't:** Create a new `grpc.ClientConn` per request; always reuse connections.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/grpc-golang`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

- **Error: Inconsistent Gen**: If the generated code does not match the schema, run `buf generate` and verify the `go_package` option.
- **Error: Context Deadline**: Check client timeouts and ensure the server is not blocking infinitely in streaming handlers.
- **Error: mTLS Handshake**: Ensure the CA certificate is correctly added to the `x509.CertPool` on both client and server sides.

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

- [implementation-playbook.md](resources/implementation-playbook.md)

### Imported Reference Notes

#### Imported: Resources

- `resources/implementation-playbook.md` for detailed patterns, code examples, and anti-patterns.
- [Google API Design Guide](https://cloud.google.com/apis/design)
- [Buf Docs](https://buf.build/docs)
- [gRPC-Go Docs](https://grpc.io/docs/languages/go/)
- [OpenTelemetry Go Instrumentation](https://opentelemetry.io/docs/instrumentation/go/)
