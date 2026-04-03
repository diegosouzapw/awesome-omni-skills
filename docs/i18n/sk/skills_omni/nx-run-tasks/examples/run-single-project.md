# Example: Run a Single Project Task (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-run-tasks/examples/run-single-project.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-run-tasks/examples/run-single-project.md)

---


## Goal

Discover a project's targets and run one of them safely.

## Step 1: Inspect available targets

```bash
nx show project myapp --json
```

Look for a `targets` section such as:

```json
{
  "name": "myapp",
  "targets": {
    "build": {},
    "test": {},
    "lint": {},
    "serve": {}
  }
}
```

## Step 2: Run the target you confirmed

```bash
nx run myapp:test
```

## Step 3: Add configuration or forwarded args only if needed

```bash
nx run myapp:build --configuration=production
nx run myapp:test -- --watch
```

## If it fails

- re-check the exact target name with `nx show project myapp --json`
- add `--verbose`
- if cache behavior is suspicious, do one comparison run with `--skipNxCache`
