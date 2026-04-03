# CSP Rollout and Troubleshooting (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇪🇸 [es](../../../../es/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇫🇷 [fr](../../../../fr/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇩🇪 [de](../../../../de/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇮🇹 [it](../../../../it/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇷🇺 [ru](../../../../ru/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇯🇵 [ja](../../../../ja/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇰🇷 [ko](../../../../ko/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇸🇦 [ar](../../../../ar/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇮🇳 [hi](../../../../hi/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇮🇳 [in](../../../../in/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇹🇭 [th](../../../../th/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇻🇳 [vi](../../../../vi/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇮🇩 [id](../../../../id/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇲🇾 [ms](../../../../ms/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇳🇱 [nl](../../../../nl/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇵🇱 [pl](../../../../pl/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇸🇪 [sv](../../../../sv/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇳🇴 [no](../../../../no/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇩🇰 [da](../../../../da/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇫🇮 [fi](../../../../fi/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇵🇹 [pt](../../../../pt/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇷🇴 [ro](../../../../ro/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇭🇺 [hu](../../../../hu/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇧🇬 [bg](../../../../bg/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇸🇰 [sk](../../../../sk/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇮🇱 [he](../../../../he/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇵🇭 [phi](../../../../phi/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇨🇿 [cs](../../../../cs/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md) · 🇹🇷 [tr](../../../../tr/skills_omni/best-practices/references/csp-rollout-and-troubleshooting.md)

---


Use this guide when adding or tightening CSP in a way that could break production behavior.

## Recommended rollout sequence

1. Inventory inline scripts, inline styles, eval-like usage, third-party origins, and embedded frames.
2. Draft a minimal policy that matches actual needs.
3. Deploy as `Content-Security-Policy-Report-Only` first.
4. Review violations and remove unnecessary sources.
5. Replace inline code with nonce or hash handling where possible.
6. Move to enforced CSP after verification.

## Safer pattern example

```text
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-random123';
  style-src 'self' 'nonce-random123';
  img-src 'self' data: https:;
  connect-src 'self' https://api.example.com;
  object-src 'none';
  base-uri 'self';
  frame-ancestors 'self';
  form-action 'self';
```

## Common failure modes

### Inline scripts stop working

**Likely cause:** missing nonce or hash, or reliance on permissive inline execution.  
**Fix:** move code out of inline blocks or apply a per-response nonce consistently in markup and header generation.

### Third-party script is blocked

**Likely cause:** origin not listed, or the script injects further resources unexpectedly.  
**Fix:** verify whether the dependency is truly needed before allowlisting it. If needed, scope the allowance as narrowly as possible.

### Styles break after enforcement

**Likely cause:** inline styles or style attributes are still in use.  
**Fix:** move styles into stylesheet files or use a nonce/hash approach where necessary.

### Nonce mismatch

**Likely cause:** server, template, and cache layers are not using the same nonce value per response.  
**Fix:** trace header generation and rendered markup together; ensure one nonce value is applied consistently for that response.

## Rollback guidance

If production behavior is broken:

- revert from enforced CSP to `Report-Only`
- keep evidence of blocked resources
- narrow the diagnosis before widening the policy
- avoid permanent permissive exceptions added under pressure without documentation

## Review questions

- Does the policy reflect actual resource needs?
- Are nonces or hashes generated and applied correctly?
- Are dangerous exceptions being added as shortcuts?
- Is the team prepared to monitor violations after rollout?
