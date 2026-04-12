# Tooling by Ecosystem

Use ecosystem-native tools where possible. The exact commands depend on repository layout, build tooling, and permissions.

## General guidance

- Prefer read-only analysis commands.
- Scope commands to the relevant area rather than the whole repository when possible.
- Exclude generated code and tests if they overwhelm the signal.
- Treat tool output as input to analysis, not the final answer.

## JavaScript / TypeScript

Possible approaches:
- inspect `package.json`, workspace manifests, and import structure
- use a dependency graph tool such as dependency-cruiser when available in the repo
- review API client modules, shared types, and cross-package imports carefully

Questions to ask:
- are shared types actually public contracts or leaked internal models?
- do front-end and back-end packages co-change because of real coupling or generated clients?

## Python

Possible approaches:
- inspect package boundaries and imports directly
- use a dependency graph tool such as pydeps when already available and appropriate
- review monkey-patching, dynamic imports, and shared settings modules closely

Questions to ask:
- are modules coupled through internals, globals, or implicit settings?
- is framework glue creating noise that should be filtered out?

## Java

Possible approaches:
- inspect package/module structure and build files
- use `jdeps` when available to examine package or jar dependencies
- review direct entity sharing, reflection, and transactional boundaries carefully

Questions to ask:
- are domain entities leaking across bounded boundaries?
- does transaction management force behavior to stay synchronized?

## Go

Possible approaches:
- inspect module/package structure and interfaces
- use `go list` and related package inspection commands when appropriate
- review shared structs, internal packages, and cross-service schema usage

Questions to ask:
- are packages small and explicit, or tightly bound by shared concrete types?
- is interface usage reducing coupling or merely hiding it?

## Service ecosystems

Independent of language, review:
- API contracts
- event schemas
- shared databases
- deployment coordination
- ownership boundaries
- runtime traces or sequence diagrams when available

## Output expectation

No tool replaces semantic judgment. Always translate raw tool output into:
- important edges
- coupling type
- risk explanation
- recommendation
