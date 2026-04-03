# Nx CI Monitor Command Matrix (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-ci-monitor/references/nx-ci-monitor-command-matrix.md)

---


Use non-destructive inspection commands first.

## Repository state

```bash
git branch --show-current
git rev-parse --short HEAD
git status --short
```

## Nx Cloud connection

```bash
[ -f nx.json ] && grep -E 'nxCloudId|nxCloudAccessToken' nx.json
```

## Package manager detection

```bash
if [ -f pnpm-lock.yaml ]; then echo pnpm; \
elif [ -f yarn.lock ]; then echo yarn; \
elif [ -f package-lock.json ]; then echo npm; \
else echo unknown; fi
```

## Narrow task verification

```bash
pnpm nx run <project>:<target>
yarn nx run <project>:<target>
npx nx run <project>:<target>
```

## Affected verification when base/head is known

```bash
pnpm nx affected -t test --base=<base> --head=<head>
```

## Apply self-healing patch locally

```bash
nx apply-locally <shortLink>
git status --short
```

## Commit after bounded remediation

```bash
git add -A
git commit -m "fix(<projects>): <brief description>

Failed tasks: <taskId1>, <taskId2>
Local verification: passed|enhanced|failed-pushing-to-ci"
```

## Caution

Commands that mutate the branch should only be used after preflight, evidence capture, and user-allowed push behavior are clear.
