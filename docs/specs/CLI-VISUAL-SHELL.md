# 🖥️ CLI Visual Shell Specification

> **Behavioral contract for the Ink-based terminal UI exposed by `awesome-omni-skills ui`.**

---

## 1. Scope

The visual shell is a guided product surface on top of the existing CLI and installer engine.

It does not replace:

- expert flag-based CLI usage
- `tools/bin/install.js`
- the guided text install flow
- API, MCP, or A2A runtime behavior

It defines:

- the behavior of `awesome-omni-skills ui`
- the fallback contract for `awesome-omni-skills ui --text`
- local state and preset persistence
- guided service launch previews
- repeatability for recent installs and service runs
- managed service status and stop behavior

---

## 2. Entry Rules

### 2.1 Visual Mode

`awesome-omni-skills ui` launches the Ink-based visual shell.

The visual shell is the primary non-expert terminal experience for:

- install flows
- catalog-first discovery and install
- family and bundle inspection
- MCP startup
- API startup
- Web dashboard startup
- A2A startup
- managed service status and stop flows
- doctor and smoke handoff

### 2.2 Text Fallback

`awesome-omni-skills ui --text` launches the readline-based fallback interface.

This remains useful when:

- a terminal cannot render the richer shell correctly
- raw-mode behavior is constrained
- a minimal text fallback is preferred

### 2.3 Handoff Rule

The visual shell does not reimplement service runtimes or installation writes directly.

After preview and confirmation, it exits cleanly and hands execution to the existing CLI entrypoint with the equivalent arguments and environment variables.

---

## 3. Home Screen Contract

The home screen must expose:

- install skills
- find and install
- inspect families and bundles
- repeat recent installs when present
- run saved install presets when present
- start a service
- inspect running services when present
- repeat recent services when present
- run saved service presets when present
- doctor
- smoke
- exit

The home screen should also surface:

- current published bundle availability
- local state counts for recents, presets, and favorites

---

## 4. Install Flow Contract

The visual shell install flow must support:

- known client target selection
- custom path selection
- full library install
- one-skill install
- family-first selection with variant handoff
- one-bundle install
- search-then-install
- preview before write
- preset saving
- favorite skill or bundle toggling

Preview must show:

- resolved target label
- resolved path
- install scope
- selected skill or bundle when applicable
- equivalent CLI command

---

## 5. Service Flow Contract

The visual shell must guide startup for:

### 5.1 MCP

- transport: `stdio`, `stream`, `sse`
- mode: `read-only` or `local`
- host/port configuration for network transports
- explicit command preview

### 5.2 API

- host
- port
- basic or hardened profile
- hardened bearer or API key auth
- hardened rate-limit parameters
- audit log enablement
- explicit command preview

### 5.3 Web Dashboard

- host
- port
- explicit command preview
- health endpoint preview
- browser URL preview

### 5.4 A2A

- host
- port
- store type: `memory`, `json`, `sqlite`
- store path for durable modes
- executor: `inline`, `process`
- queue-enabled SQLite mode
- poll interval and lease duration for shared-lease mode
- explicit command preview

### 5.5 Managed Service Control

After a runtime is launched in managed mode, the shell must provide:

- runtime status summary
- current health state
- primary URL or connection target when applicable
- stop action
- refresh action
- recent service replay

---

## 6. Local State Contract

The visual shell persists local-only state in:

```text
~/.omni-skills/state/ui-state.json
```

State currently includes:

- recent installs
- recent service launches
- named install presets
- named service presets
- favorite skills
- favorite bundles

The shell must support:

- replaying recent installs
- replaying recent service launches
- reusing named install presets
- reusing named service presets
- tracking active managed services until they are stopped or cleaned up

---

## 7. Compatibility Contract

The visual shell is additive.

These flows must remain valid and stable:

- `npx awesome-omni-skills --cursor --skill omni-figma`
- `npx awesome-omni-skills --bundle devops`
- `npx awesome-omni-skills install --guided`
- `npx awesome-omni-skills find figma --tool cursor --install --yes`
- `npx awesome-omni-skills mcp stream --local`
- `npx awesome-omni-skills api --port 3333`
- `npx awesome-omni-skills web --port 3380`
- `npx awesome-omni-skills a2a --port 3335`
- `npx awesome-omni-skills status`
- `npx awesome-omni-skills stop --all`
- `npx awesome-omni-skills start mcp stream --port 3334`

The visual shell must never force itself into explicit expert command paths.

---

## 8. Safety Contract

The visual shell should make state and writes explicit.

It must:

- preview installs before write handoff
- preview service launch commands before execution
- keep secret material out of clear-text command previews where practical
- persist state locally only
- preserve non-interactive CLI behavior outside the visual shell
