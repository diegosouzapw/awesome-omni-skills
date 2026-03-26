# Local MCP Sidecar

This document describes the optional local-mode behavior of `@omni-skills/server-mcp`.

## Status

Implemented.

Current capabilities:

- read-only catalog tools plus local filesystem-aware tools
- `stdio`, `stream`, and `sse` transports
- allowlisted writes
- preview-before-write defaults
- client-aware MCP config writing for JSON and TOML targets

Current limitations:

- config output covers the current known JSON and TOML targets, but not every MCP client yet
- no auth or multi-user governance layer
- no signed artifact flow yet

## Purpose

Local mode adds filesystem-aware tools on top of the existing read-only MCP catalog surface.

Use it when an agent needs to:

- detect compatible local clients
- inspect installed skills
- preview skill installation or removal
- apply local skill installation or removal
- write a local MCP config file after preview

## Transports

The MCP server now supports three explicit transports:

- `stdio`
- `stream`
- `sse`

`stream` is the current Streamable HTTP transport.
`sse` is the legacy SSE transport for older clients that still require it.

## Enable Local Mode

From the repo root:

```bash
npm run mcp:local
```

For explicit transport modes:

```bash
npm run mcp:stream:local
npm run mcp:sse:local
```

Or through the repo CLI:

```bash
npm run cli -- mcp stdio --local
npm run cli -- mcp stream --local
npm run cli -- mcp sse --local
```

Or directly from the published package:

```bash
npx omni-skills mcp stdio --local
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

Both commands enable local mode by setting `OMNI_SKILLS_MCP_MODE=local`.

## Local Tools

When local mode is enabled, the MCP server exposes these extra tools:

- `detect_clients`
- `list_installed_skills`
- `install_skills`
- `remove_skills`
- `configure_client_mcp`

`install_skills`, `remove_skills`, and `configure_client_mcp` default to dry-run behavior when `dry_run` is omitted.

## Supported Targets

The local sidecar currently knows these client roots:

- `~/.claude/skills`
- `~/.cursor/skills`
- `~/.gemini/skills`
- `~/.gemini/antigravity/skills`
- `~/.kiro/skills`
- `~/.codex/skills` or `$CODEX_HOME/skills`
- `<workspace>/.agents/skills`

It also knows these MCP config targets:

- `~/.claude.json`
- `~/.cursor/mcp.json`
- `~/.codex/config.toml`
- `<workspace>/.mcp.json`
- `<workspace>/.vscode/mcp.json`
- per-client `mcp.json` files under the known client roots

## Allowlist Model

The local sidecar only writes under an explicit allowlist.

By default, the allowlist includes:

- the known client roots under the current user home
- `$CODEX_HOME` when set, otherwise `~/.codex`
- the current workspace root
- `<workspace>/.agents`
- `<workspace>/.vscode`

To allow additional custom roots, set:

```bash
export OMNI_SKILLS_LOCAL_ALLOWLIST=/absolute/path/one:/absolute/path/two
```

## Config Writing

`configure_client_mcp` now chooses the config format by target.

Claude Code and workspace JSON example:

```json
{
  "mcpServers": {
    "omni-skills": {
      "type": "http",
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

Cursor and generic JSON example:

```json
{
  "mcpServers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

VS Code example:

```json
{
  "servers": {
    "omni-skills": {
      "type": "stdio",
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

Codex example:

```toml
[mcp_servers.omni-skills]
url = "http://127.0.0.1:3334/mcp"
```

Generic stdio example:

```json
{
  "mcpServers": {
    "omni-skills": {
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

## Current Scope

This is a pragmatic first local sidecar:

- it uses the repo-generated manifests and local repo artifacts
- it supports preview-before-write
- it enforces an allowlist for writes
- it supports stdio, stream, and SSE transports
- it does not yet manage task lifecycle, auth, signed artifacts, or deep client-specific config coverage for every ecosystem tool
