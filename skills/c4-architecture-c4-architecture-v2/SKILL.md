---
name: c4-architecture-c4-architecture-v2
description: "C4 Architecture Documentation Workflow workflow skill. Use this skill when the user needs Generate comprehensive C4 architecture documentation for an existing repository/codebase using a bottom-up analysis approach and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["c4-architecture-c4-architecture-v2", "c4-architecture-c4-architecture", "generate", "comprehensive", "architecture", "documentation", "for", "existing"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# C4 Architecture Documentation Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/c4-architecture-c4-architecture` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# C4 Architecture Documentation Workflow Generate comprehensive C4 architecture documentation for an existing repository/codebase using a bottom-up analysis approach. [Extended thinking: This workflow implements a complete C4 architecture documentation process following the C4 model (Context, Container, Component, Code). It uses a bottom-up approach, starting from the deepest code directories and working upward, ensuring every code element is documented before synthesizing into higher-level abstractions. The workflow coordinates four specialized C4 agents (Code, Component, Container, Context) to create a complete architectural documentation set that serves both technical and non-technical stakeholders.]

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Phase 1: Code-Level Documentation (Bottom-Up Analysis), Phase 2: Component-Level Synthesis, Phase 3: Container-Level Synthesis, Phase 4: Context-Level Documentation, Configuration Options, Success Criteria.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on c4 architecture documentation workflow tasks or workflows
- Needing guidance, best practices, or checklists for c4 architecture documentation workflow
- The task is unrelated to c4 architecture documentation workflow
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: Generate comprehensive C4 architecture documentation for an existing repository/codebase using a bottom-up analysis approach.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Overview

This workflow creates comprehensive C4 architecture documentation following the [official C4 model](https://c4model.com/diagrams) by:

1. **Code Level**: Analyzing every subdirectory bottom-up to create code-level documentation
2. **Component Level**: Synthesizing code documentation into logical components within containers
3. **Container Level**: Mapping components to deployment containers with API documentation (shows high-level technology choices)
4. **Context Level**: Creating high-level system context with personas and user journeys (focuses on people and software systems, not technologies)

**Note**: According to the [C4 model](https://c4model.com/diagrams), you don't need to use all 4 levels of diagram - the system context and container diagrams are sufficient for most software development teams. This workflow generates all levels for completeness, but teams can choose which levels to use.

All documentation is written to a new `C4-Documentation/` directory in the repository root.

#### Imported: Phase 1: Code-Level Documentation (Bottom-Up Analysis)

### 1.1 Discover All Subdirectories

- Use codebase search to identify all subdirectories in the repository
- Sort directories by depth (deepest first) for bottom-up processing
- Filter out common non-code directories (node_modules, .git, build, dist, etc.)
- Create list of directories to process

### 1.2 Process Each Directory (Bottom-Up)

For each directory, starting from the deepest:

- Use Task tool with subagent_type="c4-architecture::c4-code"
- Prompt: |
  Analyze the code in directory: [directory_path]

  Create comprehensive C4 Code-level documentation following this structure:
  1. **Overview Section**:
     - Name: [Descriptive name for this code directory]
     - Description: [Short description of what this code does]
     - Location: [Link to actual directory path relative to repo root]
     - Language: [Primary programming language(s) used]
     - Purpose: [What this code accomplishes]
  2. **Code Elements Section**:
     - Document all functions/methods with complete signatures:
       - Function name, parameters (with types), return type
       - Description of what each function does
       - Location (file path and line numbers)
       - Dependencies (what this function depends on)
     - Document all classes/modules:
       - Class name, description, location
       - Methods and their signatures
       - Dependencies
  3. **Dependencies Section**:
     - Internal dependencies (other code in this repo)
     - External dependencies (libraries, frameworks, services)
  4. **Relationships Section**:
     - Optional Mermaid diagram if relationships are complex

  Save the output as: C4-Documentation/c4-code-[directory-name].md
  Use a sanitized directory name (replace / with -, remove special chars) for the filename.

  Ensure the documentation includes:
  - Complete function signatures with all parameters and types
  - Links to actual source code locations
  - All dependencies (internal and external)
  - Clear, descriptive names and descriptions

- Expected output: c4-code-<directory-name>.md file in C4-Documentation/
- Context: All files in the directory and its subdirectories

**Repeat for every subdirectory** until all directories have corresponding c4-code-\*.md files.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @c4-architecture-c4-architecture-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/c4-architecture-c4-architecture-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/c4-architecture-c4-architecture-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @c4-architecture-c4-architecture-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Usage

```bash
/c4-architecture:c4-architecture
```

This will:

1. Walk through all subdirectories bottom-up
2. Create c4-code-\*.md for each directory
3. Synthesize into components
4. Map to containers with API docs
5. Create system context with personas and journeys

All documentation written to: C4-Documentation/

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/c4-architecture-c4-architecture`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Phase 2: Component-Level Synthesis

### 2.1 Analyze All Code-Level Documentation

- Collect all c4-code-\*.md files created in Phase 1
- Analyze code structure, dependencies, and relationships
- Identify logical component boundaries based on:
  - Domain boundaries (related business functionality)
  - Technical boundaries (shared frameworks, libraries)
  - Organizational boundaries (team ownership, if evident)

### 2.2 Create Component Documentation

For each identified component:

- Use Task tool with subagent_type="c4-architecture::c4-component"
- Prompt: |
  Synthesize the following C4 Code-level documentation files into a logical component:

  Code files to analyze:
  [List of c4-code-*.md file paths]

  Create comprehensive C4 Component-level documentation following this structure:
  1. **Overview Section**:
     - Name: [Component name - descriptive and meaningful]
     - Description: [Short description of component purpose]
     - Type: [Application, Service, Library, etc.]
     - Technology: [Primary technologies used]
  2. **Purpose Section**:
     - Detailed description of what this component does
     - What problems it solves
     - Its role in the system
  3. **Software Features Section**:
     - List all software features provided by this component
     - Each feature with a brief description
  4. **Code Elements Section**:
     - List all c4-code-\*.md files contained in this component
     - Link to each file with a brief description
  5. **Interfaces Section**:
     - Document all component interfaces:
       - Interface name
       - Protocol (REST, GraphQL, gRPC, Events, etc.)
       - Description
       - Operations (function signatures, endpoints, etc.)
  6. **Dependencies Section**:
     - Components used (other components this depends on)
     - External systems (databases, APIs, services)
  7. **Component Diagram**:
     - Mermaid diagram showing this component and its relationships

  Save the output as: C4-Documentation/c4-component-[component-name].md
  Use a sanitized component name for the filename.

- Expected output: c4-component-<name>.md file for each component
- Context: All relevant c4-code-\*.md files for this component

### 2.3 Create Master Component Index

- Use Task tool with subagent_type="c4-architecture::c4-component"
- Prompt: |
  Create a master component index that lists all components in the system.

  Based on all c4-component-\*.md files created, generate:
  1. **System Components Section**:
     - List all components with:
       - Component name
       - Short description
       - Link to component documentation
  2. **Component Relationships Diagram**:
     - Mermaid diagram showing all components and their relationships
     - Show dependencies between components
     - Show external system dependencies

  Save the output as: C4-Documentation/c4-component.md

- Expected output: Master c4-component.md file
- Context: All c4-component-\*.md files

#### Imported: Phase 3: Container-Level Synthesis

### 3.1 Analyze Components and Deployment Definitions

- Review all c4-component-\*.md files
- Search for deployment/infrastructure definitions:
  - Dockerfiles
  - Kubernetes manifests (deployments, services, etc.)
  - Docker Compose files
  - Terraform/CloudFormation configs
  - Cloud service definitions (AWS Lambda, Azure Functions, etc.)
  - CI/CD pipeline definitions

### 3.2 Map Components to Containers

- Use Task tool with subagent_type="c4-architecture::c4-container"
- Prompt: |
  Synthesize components into containers based on deployment definitions.

  Component documentation:
  [List of all c4-component-*.md file paths]

  Deployment definitions found:
  [List of deployment config files: Dockerfiles, K8s manifests, etc.]

  Create comprehensive C4 Container-level documentation following this structure:
  1. **Containers Section** (for each container):
     - Name: [Container name]
     - Description: [Short description of container purpose and deployment]
     - Type: [Web Application, API, Database, Message Queue, etc.]
     - Technology: [Primary technologies: Node.js, Python, PostgreSQL, etc.]
     - Deployment: [Docker, Kubernetes, Cloud Service, etc.]
  2. **Purpose Section** (for each container):
     - Detailed description of what this container does
     - How it's deployed
     - Its role in the system
  3. **Components Section** (for each container):
     - List all components deployed in this container
     - Link to component documentation
  4. **Interfaces Section** (for each container):
     - Document all container APIs and interfaces:
       - API/Interface name
       - Protocol (REST, GraphQL, gRPC, Events, etc.)
       - Description
       - Link to OpenAPI/Swagger/API Spec file
       - List of endpoints/operations
  5. **API Specifications**:
     - For each container API, create an OpenAPI 3.1+ specification
     - Save as: C4-Documentation/apis/[container-name]-api.yaml
     - Include:
       - All endpoints with methods (GET, POST, etc.)
       - Request/response schemas
       - Authentication requirements
       - Error responses
  6. **Dependencies Section** (for each container):
     - Containers used (other containers this depends on)
     - External systems (databases, third-party APIs, etc.)
     - Communication protocols
  7. **Infrastructure Section** (for each container):
     - Link to deployment config (Dockerfile, K8s manifest, etc.)
     - Scaling strategy
     - Resource requirements (CPU, memory, storage)
  8. **Container Diagram**:
     - Mermaid diagram showing all containers and their relationships
     - Show communication protocols
     - Show external system dependencies

  Save the output as: C4-Documentation/c4-container.md

- Expected output: c4-container.md with all containers and API specifications
- Context: All component documentation and deployment definitions

#### Imported: Phase 4: Context-Level Documentation

### 4.1 Analyze System Documentation

- Review container and component documentation
- Search for system documentation:
  - README files
  - Architecture documentation
  - Requirements documents
  - Design documents
  - Test files (to understand system behavior)
  - API documentation
  - User documentation

### 4.2 Create Context Documentation

- Use Task tool with subagent_type="c4-architecture::c4-context"
- Prompt: |
  Create comprehensive C4 Context-level documentation for the system.

  Container documentation: C4-Documentation/c4-container.md
  Component documentation: C4-Documentation/c4-component.md
  System documentation: [List of README, architecture docs, requirements, etc.]
  Test files: [List of test files that show system behavior]

  Create comprehensive C4 Context-level documentation following this structure:
  1. **System Overview Section**:
     - Short Description: [One-sentence description of what the system does]
     - Long Description: [Detailed description of system purpose, capabilities, problems solved]
  2. **Personas Section**:
     - For each persona (human users and programmatic "users"):
       - Persona name
       - Type (Human User / Programmatic User / External System)
       - Description (who they are, what they need)
       - Goals (what they want to achieve)
       - Key features used
  3. **System Features Section**:
     - For each high-level feature:
       - Feature name
       - Description (what this feature does)
       - Users (which personas use this feature)
       - Link to user journey map
  4. **User Journeys Section**:
     - For each key feature and persona:
       - Journey name: [Feature Name] - [Persona Name] Journey
       - Step-by-step journey:
         1. [Step 1]: [Description]
         2. [Step 2]: [Description]
            ...
       - Include all system touchpoints
     - For programmatic users (external systems, APIs):
       - Integration journey with step-by-step process
  5. **External Systems and Dependencies Section**:
     - For each external system:
       - System name
       - Type (Database, API, Service, Message Queue, etc.)
       - Description (what it provides)
       - Integration type (API, Events, File Transfer, etc.)
       - Purpose (why the system depends on this)
  6. **System Context Diagram**:
     - Mermaid C4Context diagram showing:
       - The system (as a box in the center)
       - All personas (users) around it
       - All external systems around it
       - Relationships and data flows
       - Use C4Context notation for proper C4 diagram
  7. **Related Documentation Section**:
     - Links to container documentation
     - Links to component documentation

  Save the output as: C4-Documentation/c4-context.md

  Ensure the documentation is:
  - Understandable by non-technical stakeholders
  - Focuses on system purpose, users, and external relationships
  - Includes comprehensive user journey maps
  - Identifies all external systems and dependencies

- Expected output: c4-context.md with complete system context
- Context: All container, component, and system documentation

#### Imported: Configuration Options

- `target_directory`: Root directory to analyze (default: current repository root)
- `exclude_patterns`: Patterns to exclude (default: node_modules, .git, build, dist, etc.)
- `output_directory`: Where to write C4 documentation (default: C4-Documentation/)
- `include_tests`: Whether to analyze test files for context (default: true)
- `api_format`: Format for API specs (default: openapi)

#### Imported: Success Criteria

- ✅ Every subdirectory has a corresponding c4-code-\*.md file
- ✅ All code-level documentation includes complete function signatures
- ✅ Components are logically grouped with clear boundaries
- ✅ All components have interface documentation
- ✅ Master component index created with relationship diagram
- ✅ Containers map to actual deployment units
- ✅ All container APIs documented with OpenAPI/Swagger specs
- ✅ Container diagram shows deployment architecture
- ✅ System context includes all personas (human and programmatic)
- ✅ User journeys documented for all key features
- ✅ All external systems and dependencies identified
- ✅ Context diagram shows system, users, and external systems
- ✅ Documentation is organized in C4-Documentation/ directory

#### Imported: Output Structure

```
C4-Documentation/
├── c4-code-*.md              # Code-level docs (one per directory)
├── c4-component-*.md          # Component-level docs (one per component)
├── c4-component.md            # Master component index
├── c4-container.md            # Container-level docs
├── c4-context.md              # Context-level docs
└── apis/                      # API specifications
    ├── [container]-api.yaml   # OpenAPI specs for each container
    └── ...
```

#### Imported: Coordination Notes

- **Bottom-up processing**: Process directories from deepest to shallowest
- **Incremental synthesis**: Each level builds on the previous level's documentation
- **Complete coverage**: Every directory must have code-level documentation before synthesis
- **Link consistency**: All documentation files link to each other appropriately
- **API documentation**: Container APIs must have OpenAPI/Swagger specifications
- **Stakeholder-friendly**: Context documentation should be understandable by non-technical stakeholders
- **Mermaid diagrams**: Use proper C4 Mermaid notation for all diagrams

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
