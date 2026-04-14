---
name: hosted-agents
description: "Hosted Agent Infrastructure workflow skill. Use this skill when the user needs Build background agents in sandboxed environments. Use for hosted coding agents, sandboxed VMs, Modal sandboxes, and remote coding environments and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["hosted-agents", "build", "background", "sandboxed", "environments", "use", "for", "hosted"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Hosted Agent Infrastructure

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/hosted-agents` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Hosted Agent Infrastructure Hosted agents run in remote sandboxed environments rather than on local machines. When designed well, they provide unlimited concurrency, consistent execution environments, and multiplayer collaboration. The critical insight is that session speed should be limited only by model provider time-to-first-token, with all infrastructure setup completed before the user starts their session.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Detailed Topics, Practical Guidance, Integration, Skill Metadata, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Building background coding agents that run independently of user devices
- Designing sandboxed execution environments for agent workloads
- Implementing multiplayer agent sessions with shared state
- Creating multi-client agent interfaces (Slack, Web, Chrome extensions)
- Scaling agent infrastructure beyond local machine constraints
- Building systems where agents spawn sub-agents for parallel work

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Core Concepts

Hosted agents address the fundamental limitation of local agent execution: resource contention, environment inconsistency, and single-user constraints. By moving agent execution to remote sandboxed environments, teams gain unlimited concurrency, reproducible environments, and collaborative workflows.

The architecture consists of three layers: sandbox infrastructure for isolated execution, API layer for state management and client coordination, and client interfaces for user interaction across platforms. Each layer has specific design requirements that enable the system to scale.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hosted-agents to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hosted-agents against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hosted-agents for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hosted-agents using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Pre-build environment images on regular cadence (30 minutes is a good default)
- Start warming sandboxes when users begin typing, not when they submit
- Allow file reads before git sync completes; block only writes
- Structure agent framework as server-first with clients as thin wrappers
- Isolate state per session to prevent cross-session interference
- Attribute commits to the user who prompted, not the app
- Track merged PRs as primary success metric

### Imported Operating Notes

#### Imported: Guidelines

1. Pre-build environment images on regular cadence (30 minutes is a good default)
2. Start warming sandboxes when users begin typing, not when they submit
3. Allow file reads before git sync completes; block only writes
4. Structure agent framework as server-first with clients as thin wrappers
5. Isolate state per session to prevent cross-session interference
6. Attribute commits to the user who prompted, not the app
7. Track merged PRs as primary success metric
8. Build for multiplayer from the start; it is nearly free with proper sync architecture

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/hosted-agents`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@gitlab-ci-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitops-workflow` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@global-chat-agent-discovery` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gmail-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: References

Internal reference:
- Infrastructure Patterns - Detailed implementation patterns

Related skills in this collection:
- multi-agent-patterns - Coordination patterns for self-spawning agents
- tool-design - Designing tools for hosted environments
- context-optimization - Managing context in distributed systems

External resources:
- [Ramp](https://builders.ramp.com/post/why-we-built-our-background-agent) - Why We Built Our Own Background Agent
- [Modal Sandboxes](https://modal.com/docs/guide/sandbox) - Cloud sandbox infrastructure
- [Cloudflare Durable Objects](https://developers.cloudflare.com/durable-objects/) - Per-session state management
- [OpenCode](https://github.com/sst/opencode) - Server-first agent framework

---

#### Imported: Detailed Topics

### Sandbox Infrastructure

**The Core Challenge**
Spinning up full development environments quickly is the primary technical challenge. Users expect near-instant session starts, but development environments require cloning repositories, installing dependencies, and running build steps.

**Image Registry Pattern**
Pre-build environment images on a regular cadence (every 30 minutes works well). Each image contains:
- Cloned repository at a known commit
- All runtime dependencies installed
- Initial setup and build commands completed
- Cached files from running app and test suite once

When starting a session, spin up a sandbox from the most recent image. The repository is at most 30 minutes out of date, making synchronization with the latest code much faster.

**Snapshot and Restore**
Take filesystem snapshots at key points:
- After initial image build (base snapshot)
- When agent finishes making changes (session snapshot)
- Before sandbox exit for potential follow-up

This enables instant restoration for follow-up prompts without re-running setup.

**Git Configuration for Background Agents**
Since git operations are not tied to a specific user during image builds:
- Generate GitHub app installation tokens for repository access during clone
- Update git config's `user.name` and `user.email` when committing and pushing changes
- Use the prompting user's identity for commits, not the app identity

**Warm Pool Strategy**
Maintain a pool of pre-warmed sandboxes for high-volume repositories:
- Sandboxes are ready before users start sessions
- Expire and recreate pool entries as new image builds complete
- Start warming sandbox as soon as user begins typing (predictive warm-up)

### Agent Framework Selection

**Server-First Architecture**
Choose an agent framework structured as a server first, with TUI and desktop apps as clients. This enables:
- Multiple custom clients without duplicating agent logic
- Consistent behavior across all interaction surfaces
- Plugin systems for extending functionality
- Event-driven architectures for real-time updates

**Code as Source of Truth**
Select frameworks where the agent can read its own source code to understand behavior. This is underrated in AI development: having the code as source of truth prevents hallucination about the agent's own capabilities.

**Plugin System Requirements**
The framework should support plugins that:
- Listen to tool execution events (e.g., `tool.execute.before`)
- Block or modify tool calls conditionally
- Inject context or state at runtime

### Speed Optimizations

**Predictive Warm-Up**
Start warming the sandbox as soon as a user begins typing their prompt:
- Clone latest changes in parallel with user typing
- Run initial setup before user hits enter
- For fast spin-up, sandbox can be ready before user finishes typing

**Parallel File Reading**
Allow the agent to start reading files immediately, even if sync from latest base branch is not complete:
- In large repositories, incoming prompts rarely modify recently-changed files
- Agent can research immediately without waiting for git sync
- Block file edits (not reads) until synchronization completes

**Maximize Build-Time Work**
Move everything possible to the image build step:
- Full dependency installation
- Database schema setup
- Initial app and test suite runs (populates caches)
- Build-time duration is invisible to users

### Self-Spawning Agents

**Agent-Spawned Sessions**
Create tools that allow agents to spawn new sessions:
- Research tasks across different repositories
- Parallel subtask execution for large changes
- Multiple smaller PRs from one major task

Frontier models are capable of containing themselves. The tools should:
- Start a new session with specified parameters
- Read status of any session (check-in capability)
- Continue main work while sub-sessions run in parallel

**Prompt Engineering for Self-Spawning**
Engineer prompts to guide when agents spawn sub-sessions:
- Research tasks that require cross-repository exploration
- Breaking monolithic changes into smaller PRs
- Parallel exploration of different approaches

### API Layer

**Per-Session State Isolation**
Each session requires its own isolated state storage:
- Dedicated database per session (SQLite per session works well)
- No session can impact another's performance
- Handles hundreds of concurrent sessions

**Real-Time Streaming**
Agent work involves high-frequency updates:
- Token streaming from model providers
- Tool execution status updates
- File change notifications

WebSocket connections with hibernation APIs reduce compute costs during idle periods while maintaining open connections.

**Synchronization Across Clients**
Build a single state system that synchronizes across:
- Chat interfaces
- Slack bots
- Chrome extensions
- Web interfaces
- VS Code instances

All changes sync to the session state, enabling seamless client switching.

### Multiplayer Support

**Why Multiplayer Matters**
Multiplayer enables:
- Teaching non-engineers to use AI effectively
- Live QA sessions with multiple team members
- Real-time PR review with immediate changes
- Collaborative debugging sessions

**Implementation Requirements**
- Data model must not tie sessions to single authors
- Pass authorship info to each prompt
- Attribute code changes to the prompting user
- Share session links for instant collaboration

With proper synchronization architecture, multiplayer support is nearly free to add.

### Authentication and Authorization

**User-Based Commits**
Use GitHub authentication to:
- Obtain user tokens for PR creation
- Open PRs on behalf of the user (not the app)
- Prevent users from approving their own changes

**Sandbox-to-API Flow**
1. Sandbox pushes changes (updating git user config)
2. Sandbox sends event to API with branch name and session ID
3. API uses user's GitHub token to create PR
4. GitHub webhooks notify API of PR events

### Client Implementations

**Slack Integration**
The most effective distribution channel for internal adoption:
- Creates virality loop as team members see others using it
- No syntax required, natural chat interface
- Classify repository from message, thread context, and channel name

Build a classifier to determine which repository to work in:
- Fast model with descriptions of available repositories
- Include hints for common repositories
- Allow "unknown" option for ambiguous cases

**Web Interface**
Core features:
- Works on desktop and mobile
- Real-time streaming of agent work
- Hosted VS Code instance running inside sandbox
- Streamed desktop view for visual verification
- Before/after screenshots for PRs

Statistics page showing:
- Sessions resulting in merged PRs (primary metric)
- Usage over time
- Live "humans prompting" count (prompts in last 5 minutes)

**Chrome Extension**
For non-engineering users:
- Sidebar chat interface with screenshot tool
- DOM and React internals extraction instead of raw images
- Reduces token usage while maintaining precision
- Distribute via managed device policy (bypasses Chrome Web Store)

#### Imported: Practical Guidance

### Follow-Up Message Handling

Decide how to handle messages sent during execution:
- **Queue approach**: Messages wait until current prompt completes
- **Insert approach**: Messages are processed immediately

Queueing is simpler to manage and lets users send thoughts on next steps while agent works. Build mechanism to stop agent mid-execution when needed.

### Metrics That Matter

Track metrics that indicate real value:
- Sessions resulting in merged PRs (primary success metric)
- Time from session start to first model response
- PR approval rate and revision count
- Agent-written code percentage across repositories

### Adoption Strategy

Internal adoption patterns that work:
- Work in public spaces (Slack channels) for visibility
- Let the product create virality loops
- Don't force usage over existing tools
- Build to people's needs, not hypothetical requirements

#### Imported: Integration

This skill builds on multi-agent-patterns for agent coordination and tool-design for agent-tool interfaces. It connects to:

- multi-agent-patterns - Self-spawning agents follow supervisor patterns
- tool-design - Building tools for agent spawning and status checking
- context-optimization - Managing context across distributed sessions
- filesystem-context - Using filesystem for session state and artifacts

#### Imported: Skill Metadata

**Created**: 2026-01-12
**Last Updated**: 2026-01-12
**Author**: Agent Skills for Context Engineering Contributors
**Version**: 1.0.0

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
