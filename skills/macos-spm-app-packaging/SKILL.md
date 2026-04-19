---
name: macos-spm-app-packaging
description: "macOS SwiftPM App Packaging (No Xcode) workflow skill. Use this skill when the user needs Scaffold, build, sign, and package SwiftPM macOS apps without Xcode projects and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["macos-spm-app-packaging", "scaffold", "build", "sign", "and", "package", "swiftpm", "macos"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# macOS SwiftPM App Packaging (No Xcode)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/macos-spm-app-packaging` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# macOS SwiftPM App Packaging (No Xcode)

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Validation Checkpoints, Templates, Notes, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user needs a SwiftPM-based macOS app without relying on an Xcode project.
- When you need packaging, signing, notarization, or appcast guidance for a SwiftPM app.
- Use when the request clearly matches the imported source intent: Scaffold, build, sign, and package SwiftPM macOS apps without Xcode projects.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/packaging.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/release.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Copy assets/templates/bootstrap/ into a new repo.
2. Rename MyApp in Package.swift, Sources/MyApp/, and version.env.
3. Customize APPNAME, BUNDLEID, and versions.
4. Copy scripts from assets/templates/ into your repo (for example, Scripts/).
5. Build/tests: swift build and swift test.
6. Package: Scripts/package_app.sh.
7. Run: Scripts/compileandrun.sh (preferred) or Scripts/launch.sh.

### Imported Workflow Notes

#### Imported: Two-Step Workflow

1) Bootstrap the project folder
   - Copy `assets/templates/bootstrap/` into a new repo.
   - Rename `MyApp` in `Package.swift`, `Sources/MyApp/`, and `version.env`.
   - Customize `APP_NAME`, `BUNDLE_ID`, and versions.

2) Build, package, and run the bootstrapped app
   - Copy scripts from `assets/templates/` into your repo (for example, `Scripts/`).
   - Build/tests: `swift build` and `swift test`.
   - Package: `Scripts/package_app.sh`.
   - Run: `Scripts/compile_and_run.sh` (preferred) or `Scripts/launch.sh`.
   - Release (optional): `Scripts/sign-and-notarize.sh` and `Scripts/make_appcast.sh`.
   - Tag + GitHub release (optional): create a git tag, upload the zip/appcast to the GitHub release, and publish.

#### Imported: Overview

Bootstrap a complete SwiftPM macOS app folder, then build, package, and run it without Xcode. Use `assets/templates/bootstrap/` for the starter layout and `references/packaging.md` + `references/release.md` for packaging and release details.

#### Imported: Validation Checkpoints

Run these after key steps to catch failures early before proceeding to the next stage.

**After packaging (`Scripts/package_app.sh`):**
```bash
# Confirm .app bundle structure is intact
ls -R build/HelloApp.app/Contents

# Check that the binary is present and executable
file build/HelloApp.app/Contents/MacOS/HelloApp
```

**After signing (`Scripts/sign-and-notarize.sh` or ad-hoc dev signing):**
```bash
# Inspect signature and entitlements
codesign -dv --verbose=4 build/HelloApp.app

# Verify the bundle passes Gatekeeper checks locally
spctl --assess --type execute --verbose build/HelloApp.app
```

**After notarization and stapling:**
```bash
# Confirm the staple ticket is attached
stapler validate build/HelloApp.app

# Re-run Gatekeeper to confirm notarization is recognised
spctl --assess --type execute --verbose build/HelloApp.app
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @macos-spm-app-packaging to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @macos-spm-app-packaging against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @macos-spm-app-packaging for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @macos-spm-app-packaging using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Minimum End-to-End Example

Shortest path from bootstrap to a running app:
```bash
# 1. Copy and rename the skeleton
cp -R assets/templates/bootstrap/ ~/Projects/MyApp
cd ~/Projects/MyApp
sed -i '' 's/MyApp/HelloApp/g' Package.swift version.env

# 2. Copy scripts
cp assets/templates/package_app.sh Scripts/
cp assets/templates/compile_and_run.sh Scripts/
chmod +x Scripts/*.sh

# 3. Build and launch
swift build
Scripts/compile_and_run.sh
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/macos-spm-app-packaging`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Common Notarization Failures

| Symptom | Likely Cause | Recovery |
|---|---|---|
| `The software asset has already been uploaded` | Duplicate submission for same version | Bump `BUILD_NUMBER` in `version.env` and repackage. |
| `Package Invalid: Invalid Code Signing Entitlements` | Entitlements in `.entitlements` file don't match provisioning | Audit entitlements against Apple's allowed set; remove unsupported keys. |
| `The executable does not have the hardened runtime enabled` | Missing `--options runtime` flag in `codesign` invocation | Edit `sign-and-notarize.sh` to add `--options runtime` to all `codesign` calls. |
| Notarization hangs / no status email | `xcrun notarytool` network or credential issue | Run `xcrun notarytool history` to check status; re-export App Store Connect API key if expired. |
| `stapler validate` fails after successful notarization | Ticket not yet propagated | Wait ~60 s, then re-run `xcrun stapler staple`. |

## Related Skills

- `@lint-and-validate` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linux-shell-scripting` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linux-troubleshooting` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@llm-app-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/packaging.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/openai.yaml` |
| `assets` | supporting assets or schemas copied from the source package | `assets/templates/bootstrap/Package.swift` |

- [packaging.md](references/packaging.md)
- [release.md](references/release.md)
- [scaffold.md](references/scaffold.md)
- [openai.yaml](agents/openai.yaml)
- [templates/bootstrap/Package.swift](assets/templates/bootstrap/Package.swift)
- [templates/bootstrap/Sources/MyApp/Resources/.keep](assets/templates/bootstrap/Sources/MyApp/Resources/.keep)
- [templates/bootstrap/Sources/MyApp/main.swift](assets/templates/bootstrap/Sources/MyApp/main.swift)
- [templates/bootstrap/version.env](assets/templates/bootstrap/version.env)

### Imported Reference Notes

#### Imported: Templates

- `assets/templates/package_app.sh`: Build binaries, create the .app bundle, copy resources, sign.
- `assets/templates/compile_and_run.sh`: Dev loop to kill running app, package, launch.
- `assets/templates/build_icon.sh`: Generate .icns from an Icon Composer file (requires Xcode install).
- `assets/templates/sign-and-notarize.sh`: Notarize, staple, and zip a release build.
- `assets/templates/make_appcast.sh`: Generate Sparkle appcast entries for updates.
- `assets/templates/setup_dev_signing.sh`: Create a stable dev code-signing identity.
- `assets/templates/launch.sh`: Simple launcher for a packaged .app.
- `assets/templates/version.env`: Example version file consumed by packaging scripts.
- `assets/templates/bootstrap/`: Minimal SwiftPM macOS app skeleton (Package.swift, Sources/, version.env).

#### Imported: Notes

- Keep entitlements and signing configuration explicit; edit the template scripts instead of reimplementing.
- Remove Sparkle steps if you do not use Sparkle for updates.
- Sparkle relies on the bundle build number (`CFBundleVersion`), so `BUILD_NUMBER` in `version.env` must increase for each update.
- For menu bar apps, set `MENU_BAR_APP=1` when packaging to emit `LSUIElement` in Info.plist.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
