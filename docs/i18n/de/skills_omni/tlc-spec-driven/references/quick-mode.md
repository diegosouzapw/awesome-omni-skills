# Quick Mode (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/references/quick-mode.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/references/quick-mode.md)

---


**Goal:** Execute small, ad-hoc tasks with the same quality principles but without full pipeline ceremony.

**Trigger:** "Quick fix", "Quick task", "Small change", "Bug fix", "Just do X"

## When to Use

| Use quick mode             | Use full pipeline                   |
| -------------------------- | ----------------------------------- |
| Bug fixes with known cause | New features with multiple stories  |
| Config changes             | Architectural changes               |
| Small UI tweaks            | Features requiring design decisions |
| Adding a field/column      | Multi-component features            |
| One-off scripts            | Anything with unclear scope         |
| Dependency updates         | Features requiring user stories     |

**Rule of thumb:** If you can describe it in one sentence AND it touches ≤3 files, it's a quick task.

## Process

### 1. Describe the Task

User provides a clear, one-sentence description. If vague, ask for specifics:

- ❌ "Fix the login" → Ask: "What's broken? What should happen instead?"
- ✅ "Fix: login button returns 401 because token refresh skips expired check"

### 2. Pre-Implementation Check

Before writing code, state:

```
Quick Task: [description]
Files: [list ONLY files to touch]
Approach: [one sentence]
Verify: [how to prove it works]
```

Get user approval before proceeding. If the pre-implementation check reveals the task is bigger than expected (>3 files, unclear dependencies, design decisions needed), recommend the full pipeline instead.

### 3. Implement

Follow [coding-principles.md](coding-principles.md):

- Simplest code that works
- Touch ONLY listed files
- No scope creep — fix the thing, nothing else

### 4. Verify

Run verification from step 2. Mark done only after verification passes.

### 5. Commit

Atomic commit following [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/):

```
<type>(<scope>): <description>
```

Use imperative mood, lowercase, no period. See [implement.md](implement.md) for full types table.

Examples:

- `fix(auth): prevent 401 on token refresh`
- `feat(settings): add dark mode toggle`
- `chore(deps): update eslint to v9`

### 6. Track

Update `.specs/project/STATE.md` with quick task record (see state-management.md Quick Tasks section).

---

## Structure

Quick tasks live separately from planned features:

```
.specs/
└── quick/
    └── NNN-slug/
        ├── TASK.md       # Description + verification
        └── SUMMARY.md    # What was done + commit
```

**TASK.md template:**

```markdown
# Quick Task NNN: [Title]

**Date:** [date]
**Status:** Done | In Progress | Blocked

## Description

[One sentence: what and why]

## Files Changed

- `src/path/to/file.ts` — [what changed]
- `src/path/to/other.ts` — [what changed]

## Verification

- [ ] [How to verify it works]
- [ ] [Expected behavior after fix]

## Commit

`[hash]` — [commit message]
```

---

## Guardrails

- **Max 3 files** — If more, use full pipeline
- **Max 1 hour** — If longer, scope is wrong
- **No design decisions** — If you're choosing between approaches, use full pipeline
- **No new dependencies** — Adding packages needs full pipeline review
- **Track everything** — Even quick tasks get commits and STATE.md entries

---

## Tips

- **Quick ≠ sloppy** — Same coding principles apply, just less ceremony
- **When in doubt, go full** — Better to over-plan than to ship broken code
- **Quick tasks compound** — If you're doing 5+ quick tasks for the same area, it's a feature that needs planning
- **Verify before marking done** — The whole point is quality, even for small tasks
