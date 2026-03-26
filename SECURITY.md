# Security Policy

## Reporting a Vulnerability

If you discover a security issue in Omni Skills, do not open a public issue first.

Please report it through one of these private channels:

1. GitHub private security advisory
2. Direct contact with the maintainers

Include:

- affected component or path
- reproduction steps
- impact assessment
- any proof-of-concept material needed to verify the issue

We aim to acknowledge reports within 48 hours and prioritize fixes according to impact.

## Scope

This policy covers the repository runtime and content surfaces, including:

- the published CLI and installer under `tools/bin/`
- shared libraries under `tools/lib/`
- build and validation scripts under `tools/scripts/`
- generated catalog artifacts under `dist/`
- the API, MCP, and A2A packages under `packages/`
- skill content under `skills/`, especially when it contains shell commands, network access, credential flows, or security-sensitive guidance

## Current Security Model

The project currently relies on these guardrails:

- skill metadata includes a `risk` field
- validation scripts inspect skill structure and metadata
- install flows use path safety checks
- local MCP sidecar writes are constrained by an allowlist
- write-oriented local tools default to dry-run behavior unless explicitly disabled
- smoke checks exercise the shipped runtime surfaces before release

## Current Limitations

The following hardening steps are still pending:

- signed release artifacts or per-skill archives
- auth and rate limiting for hosted API or MCP deployments
- more specialized client-specific MCP config writers
- stronger remote governance around hosted catalog usage

## Risk Levels in Skills

Each skill declares one of these `risk` levels:

- `safe`: no destructive operations expected
- `caution`: may modify files or interact with external systems
- `offensive`: security-testing or adversarial workflows that require explicit authorization
- `critical`: high-impact or system-level operations
