# Project Initialization (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/references/project-init.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/references/project-init.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/references/project-init.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/references/project-init.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/references/project-init.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/references/project-init.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/references/project-init.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/references/project-init.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/references/project-init.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/references/project-init.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/references/project-init.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/references/project-init.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/references/project-init.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/references/project-init.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/references/project-init.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/references/project-init.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/references/project-init.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/references/project-init.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/references/project-init.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/references/project-init.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/references/project-init.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/references/project-init.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/references/project-init.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/references/project-init.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/references/project-init.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/references/project-init.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/references/project-init.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/references/project-init.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/references/project-init.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/references/project-init.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/references/project-init.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/references/project-init.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/references/project-init.md)

---


**Trigger:** "Initialize project", "Setup project", "Start new project"

## Process

Extract project vision via iterative Q&A (max 3-5 questions per message):

**Essential questions:**

1. What are you building?
2. Who is it for and what problem does it solve?
3. What tech stack are you using? (if known)
4. What's in scope for v1? What's explicitly excluded?
5. Critical constraints? (timeline, technical, resources)

**Stop when:** Clear understanding of vision, goals, and boundaries.

## Output: .specs/project/PROJECT.md

**Structure:**

```markdown
# [Project Name]

**Vision:** [1-2 sentence description]
**For:** [target users]
**Solves:** [core problem being addressed]

## Goals

- [Primary goal with measurable success metric]
- [Secondary goal with measurable success metric]

## Tech Stack

**Core:**

- Framework: [name + version]
- Language: [name + version]
- Database: [name]

**Key dependencies:** [3-5 critical libraries/frameworks]

## Scope

**v1 includes:**

- [Core capability 1]
- [Core capability 2]
- [Core capability 3]

**Explicitly out of scope:**

- [What is NOT being built]
- [What is NOT being built]

## Constraints

- Timeline: [if applicable]
- Technical: [if applicable]
- Resources: [if applicable]
```

**Size limit:** 2,000 tokens (~1,200 words)

**Validation:**

- Vision clear in 1-2 sentences?
- Goals have measurable outcomes?
- Scope boundaries explicit?
