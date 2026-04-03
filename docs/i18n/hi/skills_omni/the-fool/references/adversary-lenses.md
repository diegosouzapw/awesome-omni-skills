# Adversary Lenses (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/the-fool/references/adversary-lenses.md) · 🇪🇸 [es](../../../../es/skills_omni/the-fool/references/adversary-lenses.md) · 🇫🇷 [fr](../../../../fr/skills_omni/the-fool/references/adversary-lenses.md) · 🇩🇪 [de](../../../../de/skills_omni/the-fool/references/adversary-lenses.md) · 🇮🇹 [it](../../../../it/skills_omni/the-fool/references/adversary-lenses.md) · 🇷🇺 [ru](../../../../ru/skills_omni/the-fool/references/adversary-lenses.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/the-fool/references/adversary-lenses.md) · 🇯🇵 [ja](../../../../ja/skills_omni/the-fool/references/adversary-lenses.md) · 🇰🇷 [ko](../../../../ko/skills_omni/the-fool/references/adversary-lenses.md) · 🇸🇦 [ar](../../../../ar/skills_omni/the-fool/references/adversary-lenses.md) · 🇮🇳 [hi](../../../../hi/skills_omni/the-fool/references/adversary-lenses.md) · 🇮🇳 [in](../../../../in/skills_omni/the-fool/references/adversary-lenses.md) · 🇹🇭 [th](../../../../th/skills_omni/the-fool/references/adversary-lenses.md) · 🇻🇳 [vi](../../../../vi/skills_omni/the-fool/references/adversary-lenses.md) · 🇮🇩 [id](../../../../id/skills_omni/the-fool/references/adversary-lenses.md) · 🇲🇾 [ms](../../../../ms/skills_omni/the-fool/references/adversary-lenses.md) · 🇳🇱 [nl](../../../../nl/skills_omni/the-fool/references/adversary-lenses.md) · 🇵🇱 [pl](../../../../pl/skills_omni/the-fool/references/adversary-lenses.md) · 🇸🇪 [sv](../../../../sv/skills_omni/the-fool/references/adversary-lenses.md) · 🇳🇴 [no](../../../../no/skills_omni/the-fool/references/adversary-lenses.md) · 🇩🇰 [da](../../../../da/skills_omni/the-fool/references/adversary-lenses.md) · 🇫🇮 [fi](../../../../fi/skills_omni/the-fool/references/adversary-lenses.md) · 🇵🇹 [pt](../../../../pt/skills_omni/the-fool/references/adversary-lenses.md) · 🇷🇴 [ro](../../../../ro/skills_omni/the-fool/references/adversary-lenses.md) · 🇭🇺 [hu](../../../../hu/skills_omni/the-fool/references/adversary-lenses.md) · 🇧🇬 [bg](../../../../bg/skills_omni/the-fool/references/adversary-lenses.md) · 🇸🇰 [sk](../../../../sk/skills_omni/the-fool/references/adversary-lenses.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/the-fool/references/adversary-lenses.md) · 🇮🇱 [he](../../../../he/skills_omni/the-fool/references/adversary-lenses.md) · 🇵🇭 [phi](../../../../phi/skills_omni/the-fool/references/adversary-lenses.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/the-fool/references/adversary-lenses.md) · 🇨🇿 [cs](../../../../cs/skills_omni/the-fool/references/adversary-lenses.md) · 🇹🇷 [tr](../../../../tr/skills_omni/the-fool/references/adversary-lenses.md)

---


Use this in **Attack This** mode to keep red-team critique concrete.

## Minimum adversary frame

For each abuse case, name:

- **Actor:** Who is attacking or abusing the system?
- **Goal:** What are they trying to gain or disrupt?
- **Target asset:** Data, capability, workflow, identity, or decision point.
- **Entry point:** Prompt, API, file upload, integration, operator workflow, credentialed surface, or social path.
- **Preconditions:** What must be true first?
- **Likely bypass or weakness:** What control is absent, weak, or misapplied?
- **Impact chain:** What happens first, then next, then at business level?

## Prompts

- If I were a malicious insider, how would I misuse this workflow?
- If I were an external attacker, what is the cheapest path to high impact?
- What assumptions about trusted inputs could be abused?
- What data exposure or privilege escalation path is being ignored?
- What safety or review checkpoint is easiest to bypass?

## AI-system abuse reminders

Consider whether the proposal is exposed to:

- prompt injection
- sensitive data leakage
- tool misuse
- over-trust in model output
- insecure retrieval or context poisoning
- weak human approval gates

## Output skeleton

| Actor | Goal | Asset | Entry point | Preconditions | Weakness | Impact |
| --- | --- | --- | --- | --- | --- | --- |
| <actor> | <goal> | <asset> | <entry> | <conditions> | <weakness> | <impact> |
