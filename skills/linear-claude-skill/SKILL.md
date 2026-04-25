---
name: linear-claude-skill
description: "Linear workflow skill. Use this skill when the user needs Manage Linear issues, projects, and teams and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["linear-claude-skill", "manage", "linear", "issues", "projects", "and", "teams", "cli-automation"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Linear

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/linear-claude-skill` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: ⚠️ Tool Availability (READ FIRST), 🔐 Security: Varlock Integration, Quick Start (First-Time Users), Tool Selection, Critical Requirements, Conventions.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Manage Linear issues, projects, and teams Use this skill when working with manage linear issues, projects, and teams.
- # Linear Tools and workflows for managing issues, projects, and teams in Linear.
- --- Manage Linear issues, projects, and teams Use this skill when working with manage linear issues, projects, and teams.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Create the project first:
2. Set project state to Planned:
3. Create issues directly in the project:
4. Update project state when work begins:
5. Traceability: Issues are linked to their project from creation
6. Metrics: Project progress tracking is accurate from day one
7. Workflow: No time wasted moving issues between projects

### Imported Workflow Notes

#### Imported: Project Planning Workflow

### Create Issues in the Correct Project from the Start

**Best Practice**: When planning a new phase or initiative, create the project and its issues together in a single planning session. Avoid creating issues in a catch-all project and moving them later.

#### Recommended Workflow

1. **Create the project first**:
   ```bash
   npx tsx scripts/linear-ops.ts create-project "Phase X: Feature Name" "My Initiative"
   ```

2. **Set project state to Planned**:
   ```bash
   npx tsx scripts/linear-ops.ts project-status "Phase X: Feature Name" planned
   ```

3. **Create issues directly in the project**:
   ```bash
   npx tsx scripts/linear-ops.ts create-issue "Phase X: Feature Name" "Parent task" "Description"
   npx tsx scripts/linear-ops.ts create-sub-issue ENG-XXX "Sub-task 1" "Description"
   npx tsx scripts/linear-ops.ts create-sub-issue ENG-XXX "Sub-task 2" "Description"
   ```

4. **Update project state when work begins**:
   ```bash
   npx tsx scripts/linear-ops.ts project-status "Phase X: Feature Name" in-progress
   ```

#### Why This Matters

- **Traceability**: Issues are linked to their project from creation
- **Metrics**: Project progress tracking is accurate from day one
- **Workflow**: No time wasted moving issues between projects
- **Organization**: Linear views and filters work correctly

#### Anti-Pattern to Avoid

❌ Creating issues in a "holding" project and moving them later:
```bash
# Don't do this
create-issue "Phase 6A" "New feature"  # Wrong project
# Later: manually move to Phase X      # Extra work
```

---

#### Imported: ⚠️ Tool Availability (READ FIRST)

**This skill supports multiple tool backends. Use whichever is available:**

1. **MCP Tools (mcp__linear)** - Use if available in your tool set
2. **Linear CLI (`linear` command)** - Always available via Bash
3. **Helper Scripts** - For complex operations

**If MCP tools are NOT available**, use the Linear CLI via Bash:

```bash
# View an issue
linear issues view ENG-123

# Create an issue
linear issues create --title "Issue title" --description "Description"

# Update issue status (get state IDs first)
linear issues update ENG-123 -s "STATE_ID"

# Add a comment
linear issues comment add ENG-123 -m "Comment text"

# List issues
linear issues list
```

**Do NOT report "MCP tools not available" as a blocker** - use CLI instead.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @linear-claude-skill to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @linear-claude-skill against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @linear-claude-skill for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @linear-claude-skill using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Project Management Commands

### project-status

Update a project's state in Linear. Accepts user-friendly terminology that maps to Linear's API.

```bash
npx tsx scripts/linear-ops.ts project-status <project-name> <state>
```

**Valid States:**
| Input | Description | API Value |
|-------|-------------|-----------|
| `backlog` | Not yet started | backlog |
| `planned` | Scheduled for future | planned |
| `in-progress` | Currently active | started |
| `paused` | Temporarily on hold | paused |
| `completed` | Successfully finished | completed |
| `canceled` | Will not be done | canceled |

**Examples:**
```bash
# Start working on a project
npx tsx scripts/linear-ops.ts project-status "Phase 8: MCP Decision Engine" in-progress

# Mark project complete
npx tsx scripts/linear-ops.ts project-status "Phase 8" completed

# Partial name matching works
npx tsx scripts/linear-ops.ts project-status "Phase 8" paused
```

### link-initiative

Link an existing project to an initiative.

```bash
npx tsx scripts/linear-ops.ts link-initiative <project-name> <initiative-name>
```

**Examples:**
```bash
# Link a project to an initiative
npx tsx scripts/linear-ops.ts link-initiative "Phase 8: MCP Decision Engine" "Q1 Goals"

# Partial matching works
npx tsx scripts/linear-ops.ts link-initiative "Phase 8" "Q1 Goals"
```

### unlink-initiative

Remove a project from an initiative.

```bash
npx tsx scripts/linear-ops.ts unlink-initiative <project-name> <initiative-name>
```

**Examples:**
```bash
# Remove incorrect link
npx tsx scripts/linear-ops.ts unlink-initiative "Phase 8" "Linear Skill"

# Clean up test links
npx tsx scripts/linear-ops.ts unlink-initiative "Test Project" "Q1 Goals"
```

**Error Handling:**
- Returns error if project is not linked to the specified initiative
- Returns error if project or initiative not found

### Complete Project Lifecycle Example

```bash
# 1. Create project linked to initiative
npx tsx scripts/linear-ops.ts create-project "Phase 11: New Feature" "Q1 Goals"

# 2. Set state to planned
npx tsx scripts/linear-ops.ts project-status "Phase 11" planned

# 3. Create issues in the project
npx tsx scripts/linear-ops.ts create-issue "Phase 11" "Parent task" "Description"
npx tsx scripts/linear-ops.ts create-sub-issue ENG-XXX "Sub-task 1" "Details"

# 4. Start work - update to in-progress
npx tsx scripts/linear-ops.ts project-status "Phase 11" in-progress

# 5. Mark issues done
npx tsx scripts/linear-ops.ts status Done ENG-XXX ENG-YYY

# 6. Complete project
npx tsx scripts/linear-ops.ts project-status "Phase 11" completed

# 7. (Optional) Link to additional initiative
npx tsx scripts/linear-ops.ts link-initiative "Phase 11" "Q2 Goals"
```

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/linear-claude-skill`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



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



### Imported Reference Notes

#### Imported: Reference

| Document | Purpose |
|----------|---------|
| api.md | GraphQL API reference, timeout handling |
| sdk.md | SDK automation patterns |
| sync.md | Bulk sync patterns |
| projects.md | Project & initiative management |
| troubleshooting.md | Common issues, MCP debugging |
| docs/labels.md | Label taxonomy |

**External:** [Linear MCP Documentation](https://linear.app/docs/mcp.md)

#### Imported: 🔐 Security: Varlock Integration

**CRITICAL**: Never expose API keys in terminal output or Claude's context.

### Safe Commands (Always Use)

```bash
# Validate LINEAR_API_KEY is set (masked output)
varlock load 2>&1 | grep LINEAR

# Run commands with secrets injected
varlock run -- npx tsx scripts/query.ts "query { viewer { name } }"

# Check schema (safe - no values)
cat .env.schema | grep LINEAR
```

### Unsafe Commands (NEVER Use)

```bash
# ❌ NEVER - exposes key to Claude's context
linear config show
echo $LINEAR_API_KEY
printenv | grep LINEAR
cat .env
```

### Setup for New Projects

1. Create `.env.schema` with `@sensitive` annotation:
   ```bash
   # @type=string(startsWith=lin_api_) @required @sensitive
   LINEAR_API_KEY=
   ```

2. Add `LINEAR_API_KEY` to `.env` (never commit this file)

3. Configure MCP to use environment variable:
   ```json
   {
     "mcpServers": {
       "linear": {
         "env": { "LINEAR_API_KEY": "${LINEAR_API_KEY}" }
       }
     }
   }
   ```

4. Use `varlock load` to validate before operations

---

#### Imported: Quick Start (First-Time Users)

### 1. Check Your Setup

Run the setup check to verify your configuration:

```bash
npx tsx ~/.claude/skills/linear/scripts/setup.ts
```

This will check:
- LINEAR_API_KEY is set and valid
- @linear/sdk is installed
- Linear CLI availability (optional)
- MCP configuration (optional)

### 2. Get API Key (If Needed)

If setup reports a missing API key:

1. Open [Linear](https://linear.app) in your browser
2. Go to **Settings** (gear icon) -> **Security & access** -> **Personal API keys**
3. Click **Create key** and copy the key (starts with `lin_api_`)
4. Add to your environment:

```bash
# Option A: Add to shell profile (~/.zshrc or ~/.bashrc)
export LINEAR_API_KEY="lin_api_your_key_here"

# Option B: Add to Claude Code environment
echo 'LINEAR_API_KEY=lin_api_your_key_here' >> ~/.claude/.env

# Then reload your shell or restart Claude Code
```

### 3. Test Connection

Verify everything works:

```bash
npx tsx ~/.claude/skills/linear/scripts/query.ts "query { viewer { name } }"
```

You should see your name from Linear.

### 4. Common Operations

```bash
# Create issue in a project
npx tsx scripts/linear-ops.ts create-issue "Project" "Title" "Description"

# Update issue status
npx tsx scripts/linear-ops.ts status Done ENG-123 ENG-124

# Create sub-issue
npx tsx scripts/linear-ops.ts create-sub-issue ENG-100 "Sub-task" "Details"

# Update project status
npx tsx scripts/linear-ops.ts project-status "Phase 1" completed

# Show all commands
npx tsx scripts/linear-ops.ts help
```

See [Project Management Commands](#project-management-commands) for full reference.

---

#### Imported: Tool Selection

Choose the right tool for the task:

| Tool | When to Use |
|------|-------------|
| **MCP (Official Server)** | Most operations - PREFERRED |
| **Helper Scripts** | Bulk operations, when MCP unavailable |
| **SDK scripts** | Complex operations (loops, conditionals) |
| **GraphQL API** | Operations not supported by MCP/SDK |

### MCP Server Configuration

**Use the official Linear MCP server** at `mcp.linear.app`:

```json
{
  "mcpServers": {
    "linear": {
      "command": "npx",
      "args": ["mcp-remote", "https://mcp.linear.app/sse"],
      "env": { "LINEAR_API_KEY": "your_api_key" }
    }
  }
}
```

> **WARNING**: Do NOT use deprecated community servers. See troubleshooting.md for details.

### MCP Reliability (Official Server)

| Operation | Reliability | Notes |
|-----------|-------------|-------|
| Create issue | ✅ High | Full support |
| Update status | ✅ High | Use `state: "Done"` directly |
| List/Search issues | ✅ High | Supports filters, queries |
| Add comment | ✅ High | Works with issue IDs |

### Quick Status Update

```bash
# Via MCP - use human-readable state names
update_issue with id="issue-uuid", state="Done"

# Via helper script (bulk operations)
node scripts/linear-helpers.mjs update-status Done 123 124 125
```

### Helper Script Reference

For detailed helper script usage, see **troubleshooting.md**.

### Parallel Agent Execution

For bulk operations or background execution, use the `Linear-specialist` subagent:

```javascript
Task({
  description: "Update Linear issues",
  prompt: "Mark ENG-101, ENG-102, ENG-103 as Done",
  subagent_type: "Linear-specialist"
})
```

**When to use `Linear-specialist` (parallel):**
- Bulk status updates (3+ issues)
- Project status changes
- Creating multiple issues
- Sync operations after code changes

**When to use direct execution:**
- Single issue queries
- Viewing issue details
- Quick status checks
- Operations needing immediate results

See **sync.md** for parallel execution patterns.

#### Imported: Critical Requirements

### Issues → Projects → Initiatives

**Every issue MUST be attached to a project. Every project MUST be linked to an initiative.**

| Entity | Must Link To | If Missing |
|--------|--------------|------------|
| Issue | Project | Not visible in project board |
| Project | Initiative | Not visible in roadmap |

See **projects.md** for complete project creation checklist.

---

#### Imported: Conventions

### Issue Status

- **Assigned to me**: Set `state: "Todo"`
- **Unassigned**: Set `state: "Backlog"`

### Labels

Uses **domain-based label taxonomy**. See docs/labels.md.

**Key rules:**
- ONE Type label: `feature`, `bug`, `refactor`, `chore`, `spike`
- 1-2 Domain labels: `security`, `backend`, `frontend`, etc.
- Scope labels when applicable: `blocked`, `breaking-change`, `tech-debt`

```bash
# Validate labels
npx tsx scripts/linear-ops.ts labels validate "feature,security"

# Suggest labels for issue
npx tsx scripts/linear-ops.ts labels suggest "Fix XSS vulnerability"
```

#### Imported: SDK Automation Scripts

**Use only when MCP tools are insufficient.** For complex operations involving loops, mapping, or bulk updates, write TypeScript scripts using `@linear/sdk`. See `sdk.md` for:

- Complete script patterns and templates
- Common automation examples (bulk updates, filtering, reporting)
- Tool selection criteria

Scripts provide full type hints and are easier to debug than raw GraphQL for multi-step operations.

#### Imported: GraphQL API

**Fallback only.** Use when operations aren't supported by MCP or SDK.

See **api.md** for complete documentation including:
- Authentication and setup
- Example queries and mutations
- Timeout handling patterns
- MCP timeout workarounds
- Shell script compatibility

**Quick ad-hoc query:**

```bash
npx tsx ~/.claude/skills/linear/scripts/query.ts "query { viewer { name } }"
```

#### Imported: Projects & Initiatives

For advanced project and initiative management patterns, see **projects.md**.

**Quick reference** - common project commands:

```bash
# Create project linked to initiative
npx tsx scripts/linear-ops.ts create-project "Phase X: Name" "My Initiative"

# Update project status
npx tsx scripts/linear-ops.ts project-status "Phase X" in-progress
npx tsx scripts/linear-ops.ts project-status "Phase X" completed

# Link/unlink projects to initiatives
npx tsx scripts/linear-ops.ts link-initiative "Phase X" "My Initiative"
npx tsx scripts/linear-ops.ts unlink-initiative "Phase X" "Old Initiative"
```

**Key topics in projects.md:**
- Project creation checklist (mandatory steps)
- Content vs Description fields
- Discovery before creation
- Codebase verification before work
- Sub-issue management
- Project status updates
- Project updates (status reports)

---

#### Imported: Sync Patterns (Bulk Operations)

For bulk synchronization of code changes to Linear, see **sync.md**.

**Quick sync commands:**

```bash
# Bulk update issues to Done
npx tsx scripts/linear-ops.ts status Done ENG-101 ENG-102 ENG-103

# Update project status
npx tsx scripts/linear-ops.ts project-status "My Project" completed
```

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
