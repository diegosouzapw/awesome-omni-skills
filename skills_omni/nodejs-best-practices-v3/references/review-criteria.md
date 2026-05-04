# Node.js Review Criteria

Use this rubric when you need a compact, repeatable way to assess a Node.js codebase. Score each area as:

- **Acceptable** — no immediate action needed
- **Needs change soon** — should be corrected before the next meaningful release window
- **Block release** — unacceptable for the stated runtime or deployment context

## 1. Package and module boundaries

### Review questions

- Does `package.json` clearly declare module intent, such as `"type": "module"`, or is CommonJS chosen deliberately?
- If this is a library, are supported entrypoints exposed intentionally through `exports`?
- Are internal files imported through private deep paths that bypass package boundaries?
- Is import-time behavior predictable, or do modules perform hidden side effects during load?

### Evidence to gather

- `package.json`
- entrypoint files
- import graph examples
- build or bundler configuration

### Severity guide

- **Acceptable:** one intentional module system, stable entrypoints, minimal side effects
- **Needs change soon:** mixed ESM/CommonJS or deep imports with a known migration plan
- **Block release:** boundary confusion likely to break consumers or production startup behavior

## 2. Async safety and concurrency

### Review questions

- Are promise lifecycles explicit, or is work started without ownership?
- Are there unhandled rejections, swallowed errors, or retry loops without limits?
- If request correlation, tenant context, or tracing context is required, is `AsyncLocalStorage` or equivalent explicit context propagation used?
- Is CPU-heavy work isolated from the main event loop when latency matters?

### Evidence to gather

- server request handlers
- queue consumers
- worker code
- log correlation patterns
- performance incident notes if available

### Severity guide

- **Acceptable:** failures propagate predictably, context handling is deliberate, CPU work is isolated appropriately
- **Needs change soon:** a few unsafe async patterns exist but are low-frequency or non-critical
- **Block release:** shared globals for request state, unowned background work, or event-loop blocking on hot paths

### Notes

`async`/`await` improves readability but does not make code non-blocking. Heavy synchronous JSON transforms, crypto, compression, and parsing can still stall the event loop.

## 3. Test and dependency reproducibility

### Review questions

- Is the lockfile committed and used as the source of truth?
- Does CI use `npm ci` where deterministic installs are expected?
- Are dependency additions justified by capability gaps instead of convenience duplication?
- Is there any inventory or SBOM process for shipped artifacts?

### Evidence to gather

- lockfile presence
- CI workflows
- Dockerfile build steps
- package count and overlap

### Severity guide

- **Acceptable:** deterministic install path, sensible dependency surface, visible update policy
- **Needs change soon:** reproducibility mostly exists but is inconsistently enforced
- **Block release:** install path is nondeterministic for production builds or release artifacts

## 4. Runtime security and permissions

### Review questions

- Are secrets injected at runtime instead of baked into source or images?
- Is external input validated before use in filesystem, SQL, shell, template, or deserialization paths?
- Are child processes narrowly scoped and free from dangerous interpolation?
- Is the Node Permission Model relevant for this application’s threat model?

### Evidence to gather

- configuration loading code
- child process and filesystem usage
- container build files
- runtime flags or startup docs

### Severity guide

- **Acceptable:** minimal secret exposure, validated input, bounded process and file access
- **Needs change soon:** some broad access assumptions remain but can be reduced without redesign
- **Block release:** command injection risk, secrets embedded in artifacts, or uncontrolled privileged access

### Notes

Do not force the Permission Model everywhere. Use it when it meaningfully reduces risk and the application can tolerate explicit access declarations.

## 5. Diagnostics and incident readiness

### Review questions

- Are logs structured enough to support filtering and correlation?
- Are correlation IDs or request IDs present where they matter?
- Can operators capture useful crash artifacts such as process reports?
- Are event-loop lag or utilization metrics visible for latency-sensitive services?
- Is startup failure loud and actionable?

### Evidence to gather

- logging examples
- health endpoint behavior
- process signal handlers
- observability docs or dashboards if available

### Severity guide

- **Acceptable:** failures are visible, correlation exists, investigation paths are practical
- **Needs change soon:** diagnostics are partially present but inconsistent
- **Block release:** major incidents would be difficult to investigate due to weak logs and no crash diagnostics path

## 6. Container and deployment behavior

### Review questions

- Does the image use multi-stage builds when useful to reduce attack surface and artifact size?
- Does the runtime image avoid root execution?
- Are secrets excluded from image layers and build history?
- Does the Node process handle SIGTERM and shutdown gracefully?
- Are readiness and liveness semantics aligned with actual service state?

### Evidence to gather

- Dockerfile
- entrypoint scripts
- orchestrator manifests
- shutdown code

### Severity guide

- **Acceptable:** non-root runtime, graceful shutdown, no secret leakage in image construction
- **Needs change soon:** container basics exist but signal handling or readiness behavior is weak
- **Block release:** root runtime, unsafe build practices, or shutdown behavior likely to drop work

## Recommended output structure

For each important finding, record:

1. **Finding** — concise statement of the issue
2. **Evidence** — what in the repo or deployment path supports it
3. **Risk** — reliability, security, maintainability, or operability impact
4. **Severity** — acceptable, needs change soon, or block release
5. **Remediation** — smallest credible next action

## Primary topic anchors

Use official documentation on these topics when validating edge cases:

- Node package/module resolution and package `exports`
- Node test runner
- `AsyncLocalStorage`, `AsyncResource`, and worker threads
- npm `ci` and SBOM generation
- Node Permission Model and security guidance
- Docker multi-stage builds, non-root containers, and signal handling guidance
