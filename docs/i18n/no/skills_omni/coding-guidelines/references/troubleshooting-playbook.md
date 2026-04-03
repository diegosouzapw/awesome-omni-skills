# Troubleshooting Playbook (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇪🇸 [es](../../../../es/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇩🇪 [de](../../../../de/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇮🇹 [it](../../../../it/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇮🇳 [in](../../../../in/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇹🇭 [th](../../../../th/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇮🇩 [id](../../../../id/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇳🇴 [no](../../../../no/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇩🇰 [da](../../../../da/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇮🇱 [he](../../../../he/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/coding-guidelines/references/troubleshooting-playbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/coding-guidelines/references/troubleshooting-playbook.md)

---


## Problem: Ambiguous requirements

**Symptoms:** Multiple behaviors fit the request, acceptance criteria are missing, or user language is underspecified.

**Recovery path:** Pause, list plausible interpretations, identify the smallest clarifying question, and avoid irreversible implementation choices.

## Problem: Scope creep

**Symptoms:** The diff grows across unrelated files, optional cleanup appears, or new abstractions are being added for future use.

**Recovery path:** Revert unrelated edits, split follow-up ideas from the current task, and return to the smallest request-aligned implementation.

## Problem: Validation failure after editing

**Symptoms:** Tests, lint, or typecheck fail and ownership of the failure is unclear.

**Recovery path:** Run the narrowest relevant checks, compare against baseline if possible, and label failures as pre-existing, introduced, or environment-related.

## Problem: Convention mismatch

**Symptoms:** The repository uses patterns different from your preferred design or style.

**Recovery path:** Follow local conventions unless the user explicitly requested standardization. Optimize for consistency and maintainability inside the existing codebase.

## Problem: Low-confidence security-sensitive change

**Symptoms:** The task touches auth, permissions, command execution, secrets, or untrusted input and you cannot explain the resulting risk confidently.

**Recovery path:** Narrow the implementation, add defensive checks where possible, state assumptions explicitly, and recommend security review instead of improvising.
