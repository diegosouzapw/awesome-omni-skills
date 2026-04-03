# Deployment Preflight Checklist (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/vercel-deploy/references/deployment-preflight-checklist.md)

---


Use this checklist before running a Vercel deployment.

## Intent

- [ ] Confirm whether the user wants **preview** or **production**
- [ ] If ambiguous, default to **preview**
- [ ] If production, confirm explicit approval before `--prod`

## Working context

- [ ] Confirm the correct repository and app directory
- [ ] Confirm whether this is a monorepo or single-project repo
- [ ] Confirm whether deployment should run from repo root or a subdirectory

## Auth and target

- [ ] Confirm Vercel CLI is available
- [ ] Confirm CLI auth is valid, or ask to authenticate
- [ ] Confirm the correct Vercel account/team
- [ ] Confirm the intended Vercel project

## Project alignment

- [ ] If local directory is not linked, run `vercel link`
- [ ] If settings may be stale, run `vercel pull --environment=preview` or `vercel pull --environment=production`

## Konfiguration

- [ ] Check framework detection or framework preset if custom
- [ ] Check build command, install command, and output directory when relevant
- [ ] Confirm Node/runtime expectations if the project depends on them

## Environment variables

- [ ] Confirm required env vars exist for the target environment
- [ ] Do not expose secret values into chat or logs
- [ ] Watch for preview vs production scope differences

## Safety

- [ ] Do not default to production
- [ ] Do not deploy from the wrong directory
- [ ] Do not retry blindly if a prior build already failed
- [ ] If outbound networking is blocked, ask before escalating permissions
