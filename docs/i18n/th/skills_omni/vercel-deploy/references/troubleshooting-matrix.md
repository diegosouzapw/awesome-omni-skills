# Troubleshooting Matrix (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇪🇸 [es](../../../../es/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇫🇷 [fr](../../../../fr/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇩🇪 [de](../../../../de/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇮🇹 [it](../../../../it/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇷🇺 [ru](../../../../ru/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇯🇵 [ja](../../../../ja/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇰🇷 [ko](../../../../ko/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇸🇦 [ar](../../../../ar/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇮🇳 [hi](../../../../hi/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇮🇳 [in](../../../../in/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇹🇭 [th](../../../../th/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇻🇳 [vi](../../../../vi/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇮🇩 [id](../../../../id/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇲🇾 [ms](../../../../ms/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇳🇱 [nl](../../../../nl/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇵🇱 [pl](../../../../pl/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇸🇪 [sv](../../../../sv/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇳🇴 [no](../../../../no/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇩🇰 [da](../../../../da/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇫🇮 [fi](../../../../fi/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇵🇹 [pt](../../../../pt/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇷🇴 [ro](../../../../ro/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇭🇺 [hu](../../../../hu/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇧🇬 [bg](../../../../bg/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇸🇰 [sk](../../../../sk/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇮🇱 [he](../../../../he/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇵🇭 [phi](../../../../phi/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇨🇿 [cs](../../../../cs/skills_omni/vercel-deploy/references/troubleshooting-matrix.md) · 🇹🇷 [tr](../../../../tr/skills_omni/vercel-deploy/references/troubleshooting-matrix.md)

---


## 1. Authentication failure

**Symptoms**
- `No existing credentials found`
- login/token errors
- wrong team/project access

**Likely causes**
- CLI is not authenticated
- token is missing or invalid
- wrong account/team context

**Actions**
- use `vercel login` for interactive work
- confirm valid token availability for non-interactive work
- confirm correct team/project target
- avoid expose tokens or secret values

## 2. Wrong project or team deployed

**Symptoms**
- deployment URL belongs to the wrong project
- framework or settings do not match the intended app

**Likely causes**
- wrong working directory
- local folder linked to the wrong Vercel project

**Actions**
- verify current directory
- run `vercel link`
- confirm project/team before redeploying

## 3. Build failure during deploy

**Symptoms**
- install/build command failure
- framework detection issues
- output directory missing

**Likely causes**
- bad project configuration
- wrong root directory
- missing dependencies or env vars

**Actions**
- run `vercel build`
- review build/output/framework settings
- confirm correct app directory in monorepos

## 4. Preview works, production fails

**Symptoms**
- preview deploy succeeds but production breaks
- environment-specific behavior differs

**Likely causes**
- missing production env vars
- production-only configuration mismatch

**Actions**
- verify env var presence and scope
- use `vercel pull --environment=production`
- re-check build/runtime assumptions for production

## 5. Deployment succeeds, runtime fails

**Symptoms**
- deployment URL exists, but requests fail
- serverless/runtime errors

**Likely causes**
- application runtime bug
- missing runtime env vars
- framework or server code issue

**Actions**
- run `vercel inspect <deployment-url-or-id>`
- run `vercel logs <deployment-url-or-id>`
- separate deployment success from app health

## 6. Monorepo root mismatch

**Symptoms**
- wrong package deployed
- wrong framework auto-detected
- missing output or unexpected files

**Likely causes**
- deploy command run at repo root instead of app directory
- Vercel root/build settings misaligned

**Actions**
- move to the correct app directory
- verify root/build/output settings
- re-link if needed

## 7. Network or sandbox restriction

**Symptoms**
- timeout
- DNS failure
- outbound connection failure

**Likely causes**
- sandbox blocks outbound network traffic
- connectivity issue in the execution environment

**Actions**
- check auth/build/linking first
- then ask before rerunning with escalated network permissions
- use a longer timeout for deploy/build commands
