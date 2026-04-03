# Troubleshooting playbook (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇪🇸 [es](../../../../es/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇩🇪 [de](../../../../de/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇮🇹 [it](../../../../it/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇮🇳 [in](../../../../in/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇹🇭 [th](../../../../th/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇮🇩 [id](../../../../id/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇳🇴 [no](../../../../no/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇩🇰 [da](../../../../da/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇮🇱 [he](../../../../he/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/web-quality-audit/references/troubleshooting-playbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/web-quality-audit/references/troubleshooting-playbook.md)

---


## 1. Lab and field disagree

**Symptoms:** Lighthouse looks poor, but field data or RUM is acceptable.

**Likely causes:** Synthetic throttling, cold-cache runs, non-representative page choice, variable third-party behavior, aggregated field data.

**Collect:** URL tested, run timestamp, throttling assumptions, field source, screenshot/export, repeat-run notes.

**Next action:** Report both, explain the difference, and prioritize issues that are visible, repeatable, or also supported by field evidence.

## 2. Authenticated pages are hard to audit

**Symptoms:** Login expires, redirected shell page, partial render, blocked route transitions.

**Likely causes:** Session handling, bot protection, feature flags, missing seed data, cookie banners.

**Collect:** Account type, login steps, route list, blockers, tested state, screenshots.

**Next action:** Narrow to reproducible routes and document untested areas explicitly.

## 3. SEO signals conflict

**Symptoms:** Good on-page markup, poor crawl/index outcome.

**Likely causes:** `robots.txt`, `noindex`, canonical conflicts, blocked resources, inconsistent status codes, sitemap omission.

**Collect:** robots.txt, canonical tag, response status, robots directives, sitemap entry status.

**Next action:** Fix crawl/index controls before content-level recommendations.

## 4. Accessibility automation gives false confidence

**Symptoms:** Automated tools report few issues, but navigation or comprehension still fails manually.

**Likely causes:** Custom widgets, missing semantic meaning, broken focus order, poor labeling, dynamic updates not announced.

**Collect:** Keyboard notes, focus screenshots, control names/roles, error examples.

**Next action:** Document manual failures and recommend native controls or APG-aligned behavior where needed.

## 5. Best-practices findings drift into security overclaiming

**Symptoms:** Audit wording implies exploitability or full security coverage without evidence.

**Likely causes:** Conflating browser hygiene with security testing.

**Collect:** Exact observable issue, affected resource, header or console evidence.

**Next action:** Reframe to precise browser-facing risk language and route to a security-specific skill if deeper analysis is requested.
