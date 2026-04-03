# Troubleshooting Playbook (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-cold-outreach/references/troubleshooting-playbook.md)

---


Use this playbook to separate targeting, infrastructure, and compliance failures.

## 1. Gmail / Yahoo rejects or bulk-folder placement

### Check

- SPF, DKIM, DMARC presence and alignment
- visible From consistency
- recent volume jumps
- complaint signals
- first-touch links, images, attachments
- domain/mailbox concentration risk

### Action

- pause scaling
- isolate the affected domain or mailbox group
- simplify the first touch
- confirm provider/admin ownership for remediation

## 2. Bounce spike

### Check

- latest import source
- verification recency
- catch-all handling
- waterfall provider quality
- domain mismatch or bad enrichment merges

### Action

- suppress the risky segment
- re-verify before the next send wave
- lower volume until source quality is understood

## 3. Unsubscribe complaints

### Check

- suppression syncing across platforms
- manual removals vs automated removals
- whether replies such as “stop” are being honored
- whether the campaign requires list-unsubscribe / one-click behavior

### Action

- pause the campaign if removals are not reliable
- test the full removal path end to end
- record who owns remediation

## 4. Open rates collapse after scaling

### Check

- recent volume ramps
- domain rotation strategy
- reputation indicators
- segmentation changes
- whether subject-line tests were confounded with infrastructure changes

### Action

- reverse the last scale jump
- compare by domain and mailbox pool
- hold one variable steady while diagnosing

## 5. AI copy quality is poor

### Check

- whether prompts allow unsupported invention
- whether source data is too thin
- whether the model is being asked to sound “clever” instead of factual

### Action

- constrain prompts to provided facts only
- ban hype and unverifiable claims
- generate fewer variants with better inputs

## 6. Positive replies are not converting to meetings

### Check

- CTA friction
- reply routing speed
- calendar or handoff ownership
- whether follow-up answers objections clearly

### Action

- lower the ask in the first exchange
- tighten response SLAs
- give human owners clearer next-step packets
