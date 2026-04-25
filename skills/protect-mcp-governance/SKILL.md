---
name: protect-mcp-governance
description: "MCP Agent Governance with protect-mcp workflow skill. Use this skill when the user needs Agent governance skill for MCP tool calls \u2014 Cedar policy authoring, shadow-to-enforce rollout, and Ed25519 receipt verification and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["protect-mcp-governance", "governance", "for", "mcp", "tool", "calls", "cedar", "policy"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# MCP Agent Governance with protect-mcp

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/protect-mcp-governance` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# MCP Agent Governance with protect-mcp

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Do Not Use This Skill, How It Works, Core Concepts, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need to control which MCP tools an agent can call and under what conditions
- Use when you want a tamper-evident audit trail for agent tool executions
- Use when rolling out governance policies gradually (shadow mode first, then enforce)
- Use when authoring Cedar policies for MCP tool access control
- Use when verifying that a receipt or audit bundle has not been tampered with
- Use when the request clearly matches the imported source intent: Agent governance skill for MCP tool calls — Cedar policy authoring, shadow-to-enforce rollout, and Ed25519 receipt verification.

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

1. Initialize Governance for a Project `bash # Install and initialize hooks (Claude Code integration) npx protect-mcp init-hooks # Or run as a standalone MCP gateway npx protect-mcp serve This creates a protect-mcp.config.json and a starter Cedar policy in your project root.
2. Write Your First Policy Create policy.cedar in your project: cedar // Start permissive — allow everything in shadow mode permit( principal, action == Action::"calltool", resource ); ### 3.
3. Run in Shadow Mode (Observe First) bash # Shadow mode is the default — logs decisions without blocking npx protect-mcp --policy policy.cedar -- node your-mcp-server.js Review the shadow log to understand what your agent is doing before writing restrictive policies.
4. Tighten and Enforce Once you understand the tool-call patterns, write specific policies: cedar // Allow file reads, deny writes outside src/ permit( principal, action == Action::"calltool", resource ) when { resource.toolname == "readfile" }; permit( principal, action == Action::"calltool", resource ) when { resource.toolname == "writefile" && resource has args && resource.args.path like "src/*" }; // Deny everything else forbid( principal, action == Action::"calltool", resource ); Switch to enforce mode: bash npx protect-mcp --policy policy.cedar --enforce -- node your-mcp-server.js ### 5.
5. Verify Receipts bash # Verify a single receipt npx @veritasacta/verify receipt.json --key <public-key-hex> # Verify an audit bundle (multiple receipts + keys) npx @veritasacta/verify bundle.json --bundle # Self-test the verifier (proves it works offline) npx @veritasacta/verify --self-test Exit codes: 0 = signature valid (proven authentic), 1 = signature invalid (proven tampered), 2` = verifier error (malformed input).
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview and provenance files before loading any copied upstream support files.

### Imported Workflow Notes

#### Imported: Step-by-Step Guide

### 1. Initialize Governance for a Project

```bash
# Install and initialize hooks (Claude Code integration)
npx protect-mcp init-hooks

# Or run as a standalone MCP gateway
npx protect-mcp serve
```

This creates a `protect-mcp.config.json` and a starter Cedar policy in your project root.

### 2. Write Your First Policy

Create `policy.cedar` in your project:

```cedar
// Start permissive — allow everything in shadow mode
permit(
  principal,
  action == Action::"call_tool",
  resource
);
```

### 3. Run in Shadow Mode (Observe First)

```bash
# Shadow mode is the default — logs decisions without blocking
npx protect-mcp --policy policy.cedar -- node your-mcp-server.js
```

Review the shadow log to understand what your agent is doing before writing restrictive policies.

### 4. Tighten and Enforce

Once you understand the tool-call patterns, write specific policies:

```cedar
// Allow file reads, deny writes outside src/
permit(
  principal,
  action == Action::"call_tool",
  resource
) when {
  resource.tool_name == "read_file"
};

permit(
  principal,
  action == Action::"call_tool",
  resource
) when {
  resource.tool_name == "write_file"
  && resource has args
  && resource.args.path like "src/*"
};

// Deny everything else
forbid(
  principal,
  action == Action::"call_tool",
  resource
);
```

Switch to enforce mode:

```bash
npx protect-mcp --policy policy.cedar --enforce -- node your-mcp-server.js
```

### 5. Verify Receipts

```bash
# Verify a single receipt
npx @veritasacta/verify receipt.json --key <public-key-hex>

# Verify an audit bundle (multiple receipts + keys)
npx @veritasacta/verify bundle.json --bundle

# Self-test the verifier (proves it works offline)
npx @veritasacta/verify --self-test
```

Exit codes: `0` = signature valid (proven authentic), `1` = signature invalid (proven tampered), `2` = verifier error (malformed input).

#### Imported: Overview

Guidance for governing AI agent tool calls using Cedar policies and Ed25519 signed receipts. This skill teaches how to write access-control policies for MCP servers, run them in shadow mode for observation, and verify the cryptographic audit trail.

#### Imported: Do Not Use This Skill

- When you need general application security auditing (use `@security-auditor`)
- When you need to scan code for vulnerabilities (use `@security-audit`)
- When you need compliance framework guidance without agent-specific governance

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @protect-mcp-governance to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @protect-mcp-governance against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @protect-mcp-governance for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @protect-mcp-governance using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Governance for a Claude Code Session

```bash
# Initialize hooks
npx protect-mcp init-hooks

# Claude Code now generates a signed receipt for every tool call.
# Receipts are stored in .protect-mcp/receipts/
```

**Explanation:** After initialization, every tool call Claude Code makes is logged with a signed receipt. No tool calls are blocked (shadow mode).

### Example 2: Restrict a Production MCP Server

```cedar
// Only allow approved tools with rate limiting
permit(
  principal,
  action == Action::"call_tool",
  resource
) when {
  resource.tool_name in [
    "get_customer",
    "search_orders",
    "list_products"
  ]
};

forbid(
  principal,
  action == Action::"call_tool",
  resource
) when {
  resource.tool_name in [
    "delete_customer",
    "modify_payment",
    "execute_sql"
  ]
};
```

**Explanation:** A production MCP server that serves customer data. Read-only operations are permitted; destructive operations are blocked.

### Example 3: Verify an Audit Bundle After an Incident

```bash
# Export the session's audit bundle
npx protect-mcp export-bundle --session sess_abc123 --out audit.json

# Verify every receipt in the bundle
npx @veritasacta/verify audit.json --bundle

# Expected output:
# ✓ Bundle: VALID
#   Total:    47
#   Passed:   47
#   Failed:   0
```

**Explanation:** After an incident, export the audit bundle and verify that no receipts have been tampered with. The bundle contains all receipts from the session plus the signing keys needed for verification.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Start in shadow mode and observe before enforcing
- ✅ Do: Use policy_digest to track which policy version produced each decision
- ✅ Do: Store receipts alongside your application logs for correlation
- ✅ Do: Pin the verifier version when integrating into CI (@veritasacta/verify@0.2.5)
- ❌ Don't: Skip shadow mode and go straight to enforce in production
- ❌ Don't: Trust claimedissuertier without independent verification
- ❌ Don't: Treat a valid signature as proof the signer is trustworthy — it only proves the receipt has not been tampered with since signing

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Start in shadow mode and observe before enforcing
- ✅ **Do:** Use `policy_digest` to track which policy version produced each decision
- ✅ **Do:** Store receipts alongside your application logs for correlation
- ✅ **Do:** Pin the verifier version when integrating into CI (`@veritasacta/verify@0.2.5`)
- ❌ **Don't:** Skip shadow mode and go straight to enforce in production
- ❌ **Don't:** Trust `claimed_issuer_tier` without independent verification
- ❌ **Don't:** Treat a valid signature as proof the signer is trustworthy — it only proves the receipt has not been tampered with since signing

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/protect-mcp-governance`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

### Problem: Receipts fail verification with `no_public_key`
**Symptoms:** `npx @veritasacta/verify receipt.json` returns exit 2 with `no_public_key`
**Solution:** Provide the public key explicitly: `--key <64 hex chars>`. The receipt does not embed the public key by default. Check `protect-mcp.config.json` for the issuer's public key.

### Problem: Shadow mode shows unexpected denials
**Symptoms:** Shadow log shows `deny` decisions for tools you expected to be allowed
**Solution:** Check your Cedar policy ordering. Cedar evaluates `forbid` rules before `permit` rules — a broad `forbid` will override specific `permit` rules.

### Problem: Enforce mode blocks a legitimate tool call
**Symptoms:** Agent reports a tool call was denied after switching to enforce mode
**Solution:** Add the tool to your permit policy or switch back to shadow mode: remove `--enforce` flag. Review the receipt's `deny_reason` field for the specific policy violation.

## Related Skills

- `@prompt-engineer` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@prompt-engineering` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@prompt-engineering-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@prompt-library` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Additional Resources

- [protect-mcp on npm](https://www.npmjs.com/package/protect-mcp) — MIT licensed
- [Cedar Policy Language](https://www.cedarpolicy.com/) — AWS open-source policy engine
- [IETF Draft: Signed Receipts](https://datatracker.ietf.org/doc/draft-farley-acta-signed-receipts/) — Receipt format specification
- [@veritasacta/verify](https://www.npmjs.com/package/@veritasacta/verify) — Apache-2.0 verifier, works offline

#### Imported: How It Works

protect-mcp intercepts MCP tool calls, evaluates them against Cedar policies (the same policy engine used by AWS Verified Permissions), and signs every decision as an Ed25519 receipt. The receipt is a cryptographic proof that a specific policy was evaluated against a specific tool call at a specific time.

```
Agent → protect-mcp → Cedar policy evaluation → MCP Server
                ↓
        Ed25519 signed receipt
```

Three modes of operation:

1. **Shadow mode** (default) — logs decisions without blocking. Use this to observe what your policies would do before enforcing them.
2. **Enforce mode** — blocks tool calls that violate policy. Use after shadow-mode validation.
3. **Hooks mode** — integrates with Claude Code hooks for pre/post tool-call governance.

#### Imported: Core Concepts

### Cedar Policies

Cedar is a policy language designed for authorization. Policies are evaluated locally via WASM — no network calls required.

```cedar
// Allow read-only file operations
permit(
  principal,
  action == Action::"call_tool",
  resource
) when {
  resource.tool_name in ["read_file", "list_directory", "search_files"]
};

// Deny destructive operations
forbid(
  principal,
  action == Action::"call_tool",
  resource
) when {
  resource.tool_name in ["execute_command", "delete_file", "write_file"]
  && resource has args
  && resource.args.contains("rm -rf")
};
```

### Signed Receipts

Every policy decision produces a signed receipt:

```json
{
  "payload": {
    "type": "protectmcp:decision",
    "tool_name": "read_file",
    "decision": "allow",
    "policy_digest": "sha256:9d0fd4c9e72c1d5d",
    "issued_at": "2026-04-05T14:32:04.102Z",
    "issuer_id": "sb:issuer:de073ae64e43"
  },
  "signature": {
    "alg": "EdDSA",
    "kid": "sb:issuer:de073ae64e43",
    "sig": "2a3b5022..."
  }
}
```

The receipt format follows [IETF Internet-Draft draft-farley-acta-signed-receipts](https://datatracker.ietf.org/doc/draft-farley-acta-signed-receipts/).

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
