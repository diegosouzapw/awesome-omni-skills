# Example: Run Many Projects and Affected Scope (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-run-tasks/examples/run-many-and-affected.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-run-tasks/examples/run-many-and-affected.md)

---


## Run the same target for selected projects

```bash
nx run-many -t lint --projects=web,ui
```

## Run several tasks across the workspace

```bash
nx run-many -t build,test,lint --parallel=3
```

## Exclude specific projects

```bash
nx run-many -t test --projects=app1,app2,app3 --exclude=app2
```

## Run tasks only for changed scope

```bash
nx affected -t test --base=origin/main --head=HEAD
```

## File-driven affected fallback

```bash
nx affected -t lint --files=apps/web/src/main.ts,libs/ui/src/button.tsx
```

## Notes

- `run-many` is for broad repeated execution
- `affected` is for change-based execution
- in CI, explicit diff inputs are usually safer than defaults
