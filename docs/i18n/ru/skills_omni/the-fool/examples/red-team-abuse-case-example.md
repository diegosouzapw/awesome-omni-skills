# Red-Team Abuse Case Example (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇪🇸 [es](../../../../es/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇩🇪 [de](../../../../de/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇮🇹 [it](../../../../it/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇮🇳 [in](../../../../in/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇹🇭 [th](../../../../th/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇮🇩 [id](../../../../id/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇳🇴 [no](../../../../no/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇩🇰 [da](../../../../da/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇮🇱 [he](../../../../he/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/the-fool/examples/red-team-abuse-case-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/the-fool/examples/red-team-abuse-case-example.md)

---


## User request

> Red-team our internal AI support assistant.

## Critique excerpt

**Steelmanned thesis:**  
You believe an internal AI support assistant can improve employee support throughput safely because it is restricted to internal use and can only access approved knowledge sources.

**Mode used:**  
Attack This

**Abuse case 1**  
- **Actor:** Malicious insider
- **Goal:** Exfiltrate sensitive internal HR guidance and privileged case notes
- **Asset:** Sensitive support knowledge and case context
- **Entry point:** Prompting the assistant through a legitimate employee account
- **Preconditions:** The assistant can retrieve broad internal content and output filtering is weak
- **Weakness:** Trust boundary assumes authenticated employees should see all retrieved content
- **Impact:** Sensitive disclosures, policy violations, and loss of internal trust

**Abuse case 2**  
- **Actor:** External attacker using a compromised employee session
- **Goal:** Extract internal workflows and abuse support actions
- **Asset:** Internal operational procedures and support capabilities
- **Entry point:** Stolen browser session or compromised endpoint
- **Preconditions:** Session remains active and approval gates are weak
- **Weakness:** The workflow over-trusts authenticated context and lacks strong human review
- **Impact:** Unauthorized actions, data exposure, and operational disruption

**Residual adversarial risk:**  
The proposal appears to treat internal-only access as a sufficient control, which is not a reliable security boundary.
