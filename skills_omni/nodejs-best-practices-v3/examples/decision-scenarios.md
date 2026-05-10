# Node.js Decision Scenarios

Use these when the user asks for a recommendation rather than a broad review.

## Scenario 1: "Should we add a bigger framework?"

**Context:** A small internal API has fewer than 20 routes, no SSR needs, and limited middleware requirements.

**Recommended decision:** Usually no.

**Rationale:** If the framework does not provide a concrete operational benefit such as plugin consistency, lifecycle control, or team-wide standardization, adding more abstraction increases maintenance and dependency surface without solving a hard problem.

## Scenario 2: "Should this CPU-heavy task stay in the request path?"

**Context:** Requests trigger document conversion, image transforms, hashing, or compression.

**Recommended decision:** Usually no for moderate or heavy workloads.

**Rationale:** Node handles I/O concurrency well, but CPU-heavy work can block the event loop and degrade unrelated requests. Move work to workers, queues, subprocesses, or a separate service boundary when latency or concurrency matters.

## Scenario 3: "Should we add a package for environment loading?"

**Context:** The team wants another dependency only to load environment variables from a file.

**Recommended decision:** Reconsider first.

**Rationale:** If the runtime and deployment model already support the needed behavior cleanly, prefer the built-in path before adding a package. Keep the package only when it solves a real compatibility or workflow problem.

## Scenario 4: "Should we replace our testing stack?"

**Context:** A service has a heavy test toolchain and slow maintenance around mocks and runners.

**Recommended decision:** Consider simplification before expansion.

**Rationale:** If built-in or simpler test capabilities cover the needed unit and integration behavior, reducing tooling complexity may improve reliability. Do not rewrite the suite casually; target the complexity that is causing maintenance cost.

## Scenario 5: "Should we keep adding utility dependencies?"

**Context:** The repository has many small packages for helpers now available in the platform or easily implemented locally.

**Recommended decision:** Tighten dependency admission.

**Rationale:** Every package adds update, trust, and breakage surface. Prefer fewer dependencies unless the package clearly reduces risk, complexity, or delivery time.

## Scenario 6: "Should we debug production issues with more logs only?"

**Context:** Incidents are hard to reproduce and the team wants to add more ad hoc logging.

**Recommended decision:** Not by itself.

**Rationale:** More logs without structure, correlation, and stable context propagation usually create noise. Improve observability design, not just log volume.
