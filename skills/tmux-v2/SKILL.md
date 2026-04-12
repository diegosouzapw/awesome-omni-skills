---
name: tmux-v2
description: "tmux \u2014 Terminal Multiplexer workflow skill. Use this skill when the user needs Expert tmux session, window, and pane management for terminal multiplexing, persistent remote workflows, and shell scripting automation and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["tmux", "terminal", "multiplexer", "sessions", "shell", "remote", "automation", "tmux-v2"]
complexity: advanced
risk: safe
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "kostakost2"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# tmux — Terminal Multiplexer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/tmux` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# tmux — Terminal Multiplexer

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Security & Safety Notes, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when setting up or managing persistent terminal sessions on remote servers
- Use when the user needs to run long-running processes that survive SSH disconnects
- Use when scripting multi-pane terminal layouts (e.g., logs + shell + editor)
- Use when automating tmux commands from bash scripts without user interaction
- Use when the request clearly matches the imported source intent: Expert tmux session, window, and pane management for terminal multiplexing, persistent remote workflows, and shell scripting automation.
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

`tmux` keeps terminal sessions alive across SSH disconnects, splits work across multiple panes, and enables fully scriptable terminal automation. This skill covers session management, window/pane layout, keybinding patterns, and using `tmux` non-interactively from shell scripts — essential for remote servers, long-running jobs, and automated workflows.

#### Imported: How It Works

`tmux` has three hierarchy levels: **sessions** (top level, survives disconnects), **windows** (tabs within a session), and **panes** (splits within a window). Everything is controllable from outside via `tmux <command>` or from inside via the prefix key (`Ctrl-b` by default).

### Session Management

```bash
# Create a new named session
tmux new-session -s work

# Create detached (background) session
tmux new-session -d -s work

# Create detached session and start a command
tmux new-session -d -s build -x 220 -y 50 "make all"

# Attach to a session
tmux attach -t work
tmux attach          # attaches to most recent session

# List all sessions
tmux list-sessions
tmux ls

# Detach from inside tmux
# Prefix + d   (Ctrl-b d)

# Kill a session
tmux kill-session -t work

# Kill all sessions except the current one
tmux kill-session -a

# Rename a session from outside
tmux rename-session -t old-name new-name

# Switch to another session from outside
tmux switch-client -t other-session

# Check if a session exists (useful in scripts)
tmux has-session -t work 2>/dev/null && echo "exists"
```

### Window Management

```bash
# Create a new window in the current session
tmux new-window -t work -n "logs"

# Create a window running a specific command
tmux new-window -t work:3 -n "server" "python -m http.server 8080"

# List windows
tmux list-windows -t work

# Select (switch to) a window
tmux select-window -t work:logs
tmux select-window -t work:2       # by index

# Rename a window
tmux rename-window -t work:2 "editor"

# Kill a window
tmux kill-window -t work:logs

# Move window to a new index
tmux move-window -s work:3 -t work:1

# From inside tmux:
# Prefix + c     — new window
# Prefix + ,     — rename window
# Prefix + &     — kill window
# Prefix + n/p   — next/previous window
# Prefix + 0-9   — switch to window by number
```

### Pane Management

```bash
# Split pane vertically (left/right)
tmux split-window -h -t work:1

# Split pane horizontally (top/bottom)
tmux split-window -v -t work:1

# Split and run a command
tmux split-window -h -t work:1 "tail -f /var/log/syslog"

# Select a pane by index
tmux select-pane -t work:1.0

# Resize panes
tmux resize-pane -t work:1.0 -R 20   # expand right by 20 cols
tmux resize-pane -t work:1.0 -D 10   # shrink down by 10 rows
tmux resize-pane -Z                   # toggle zoom (fullscreen)

# Swap panes
tmux swap-pane -s work:1.0 -t work:1.1

# Kill a pane
tmux kill-pane -t work:1.1

# From inside tmux:
# Prefix + %     — split vertical
# Prefix + "     — split horizontal
# Prefix + arrow — navigate panes
# Prefix + z     — zoom/unzoom current pane
# Prefix + x     — kill pane
# Prefix + {/}   — swap pane with previous/next
```

### Sending Commands to Panes Without Being Attached

```bash
# Send a command to a specific pane and press Enter
tmux send-keys -t work:1.0 "ls -la" Enter

# Run a command in a background pane without attaching
tmux send-keys -t work:editor "vim src/main.py" Enter

# Send Ctrl+C to stop a running process
tmux send-keys -t work:1.0 C-c

# Send text without pressing Enter (useful for pre-filling prompts)
tmux send-keys -t work:1.0 "git commit -m '"

# Clear a pane
tmux send-keys -t work:1.0 "clear" Enter

# Check what's in a pane (capture its output)
tmux capture-pane -t work:1.0 -p
tmux capture-pane -t work:1.0 -p | grep "ERROR"
```

### Scripting a Full Workspace Layout

This is the most powerful pattern: create a fully configured multi-pane workspace from a single script.

```bash
#!/usr/bin/env bash
set -euo pipefail

SESSION="dev"

# Bail if session already exists
tmux has-session -t "$SESSION" 2>/dev/null && {
  echo "Session $SESSION already exists. Attaching..."
  tmux attach -t "$SESSION"
  exit 0
}

# Create session with first window
tmux new-session -d -s "$SESSION" -n "editor" -x 220 -y 50

# Window 1: editor + test runner side by side
tmux send-keys -t "$SESSION:editor" "vim ." Enter
tmux split-window -h -t "$SESSION:editor"
tmux send-keys -t "$SESSION:editor.1" "npm test -- --watch" Enter
tmux select-pane -t "$SESSION:editor.0"

# Window 2: server logs
tmux new-window -t "$SESSION" -n "server"
tmux send-keys -t "$SESSION:server" "docker compose up" Enter
tmux split-window -v -t "$SESSION:server"
tmux send-keys -t "$SESSION:server.1" "tail -f logs/app.log" Enter

# Window 3: general shell
tmux new-window -t "$SESSION" -n "shell"

# Focus first window
tmux select-window -t "$SESSION:editor"

# Attach
tmux attach -t "$SESSION"
```

### Configuration (`~/.tmux.conf`)

```bash
# Change prefix to Ctrl-a (screen-style)
unbind C-b
set -g prefix C-a
bind C-a send-prefix

# Enable mouse support
set -g mouse on

# Start window/pane numbering at 1
set -g base-index 1
setw -g pane-base-index 1

# Renumber windows when one is closed
set -g renumber-windows on

# Increase scrollback buffer
set -g history-limit 50000

# Use vi keys in copy mode
setw -g mode-keys vi

# Faster key repetition
set -s escape-time 0

# Reload config without restarting
bind r source-file ~/.tmux.conf \; display "Config reloaded"

# Intuitive splits: | and -
bind | split-window -h -c "#{pane_current_path}"
bind - split-window -v -c "#{pane_current_path}"

# New windows open in current directory
bind c new-window -c "#{pane_current_path}"

# Status bar
set -g status-right "#{session_name} | %H:%M %d-%b"
set -g status-interval 5
```

### Copy Mode and Scrollback

```bash
# Enter copy mode (scroll up through output)
# Prefix + [

# In vi mode:
# / to search forward, ? to search backward
# Space to start selection, Enter to copy
# q to exit copy mode

# Paste the most recent buffer
# Prefix + ]

# List paste buffers
tmux list-buffers

# Show the most recent buffer
tmux show-buffer

# Save buffer to a file
tmux save-buffer /tmp/tmux-output.txt

# Load a file into a buffer
tmux load-buffer /tmp/data.txt

# Pipe pane output to a command
tmux pipe-pane -t work:1.0 "cat >> ~/session.log"
```

### Practical Automation Patterns

```bash
# Idempotent session: create or attach
ensure_session() {
  local name="$1"
  tmux has-session -t "$name" 2>/dev/null \
    || tmux new-session -d -s "$name"
  tmux attach -t "$name"
}

# Run a command in a new background window and tail its output
run_bg() {
  local session="${1:-main}" cmd="${*:2}"
  tmux new-window -t "$session" -n "bg-$$"
  tmux send-keys -t "$session:bg-$$" "$cmd" Enter
}

# Wait for a pane to produce specific output (polling)
wait_for_output() {
  local target="$1" pattern="$2" timeout="${3:-30}"
  local elapsed=0
  while (( elapsed < timeout )); do
    tmux capture-pane -t "$target" -p | grep -q "$pattern" && return 0
    sleep 1
    (( elapsed++ ))
  done
  return 1
}

# Kill all background windows matching a name prefix
kill_bg_windows() {
  local session="$1" prefix="${2:-bg-}"
  tmux list-windows -t "$session" -F "#W" \
    | grep "^${prefix}" \
    | while read -r win; do
        tmux kill-window -t "${session}:${win}"
      done
}
```

### Remote and SSH Workflows

```bash
# SSH and immediately attach to an existing session
ssh user@host -t "tmux attach -t work || tmux new-session -s work"

# Run a command on remote host inside a tmux session (fire and forget)
ssh user@host "tmux new-session -d -s deploy 'bash /opt/deploy.sh'"

# Watch the remote session output from another terminal
ssh user@host -t "tmux attach -t deploy -r"  # read-only attach

# Pair programming: share a session (both users attach to the same session)
# User 1:
tmux new-session -s shared
# User 2 (same server):
tmux attach -t shared
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @tmux-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/tmux-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/tmux-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @tmux-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Always name sessions (-s name) in scripts — unnamed sessions are hard to target reliably
- Use tmux has-session -t name 2>/dev/null before creating to make scripts idempotent
- Set -x and -y when creating detached sessions to give panes a proper size for commands that check terminal dimensions
- Use send-keys ... Enter for automation rather than piping stdin — it works even when the target pane is running an interactive program
- Keep ~/.tmux.conf in version control for reproducibility across machines
- Prefer bind -n for bindings that don't need the prefix, but only for keys that don't conflict with application shortcuts
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

- Always name sessions (`-s name`) in scripts — unnamed sessions are hard to target reliably
- Use `tmux has-session -t name 2>/dev/null` before creating to make scripts idempotent
- Set `-x` and `-y` when creating detached sessions to give panes a proper size for commands that check terminal dimensions
- Use `send-keys ... Enter` for automation rather than piping stdin — it works even when the target pane is running an interactive program
- Keep `~/.tmux.conf` in version control for reproducibility across machines
- Prefer `bind -n` for bindings that don't need the prefix, but only for keys that don't conflict with application shortcuts

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/tmux`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Security & Safety Notes

- `send-keys` executes commands in a pane without confirmation — verify the target (`-t session:window.pane`) before use in scripts to avoid sending keystrokes to the wrong pane
- Read-only attach (`-r`) is appropriate when sharing sessions with others to prevent accidental input
- Avoid storing secrets in tmux window/pane titles or environment variables exported into sessions on shared machines

#### Imported: Common Pitfalls

- **Problem:** `tmux` commands from a script fail with "no server running"
  **Solution:** Start the server first with `tmux start-server`, or create a detached session before running other commands.

- **Problem:** Pane size is 0x0 when creating a detached session
  **Solution:** Pass explicit dimensions: `tmux new-session -d -s name -x 200 -y 50`.

- **Problem:** `send-keys` types the text but doesn't run the command
  **Solution:** Ensure you pass `Enter` (capital E) as a second argument: `tmux send-keys -t target "cmd" Enter`.

- **Problem:** Script creates a duplicate session each run
  **Solution:** Guard with `tmux has-session -t name 2>/dev/null || tmux new-session -d -s name`.

- **Problem:** Copy-mode selection doesn't work as expected
  **Solution:** Confirm `mode-keys vi` or `mode-keys emacs` is set to match your preference in `~/.tmux.conf`.
