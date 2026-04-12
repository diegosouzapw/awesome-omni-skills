---
name: makepad-deployment-v3
description: "Makepad Packaging & Deployment workflow skill. Use this skill when the user needs | and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["makepad-deployment-v3", "makepad-deployment", "devops", "agents", "assets", "examples", "references", "scripts"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Makepad Packaging & Deployment

## Overview

This public intake copy packages `plugins/antigravity-bundle-makepad-builder/skills/makepad-deployment` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Makepad Packaging & Deployment This skill covers packaging Makepad applications for all supported platforms.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Quick Navigation, GitHub Actions Packaging, Desktop Packaging, Mobile Packaging, Wasm Packaging.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to package, distribute, or automate deployment of a Makepad application.
- The task involves desktop installers, APK/IPA builds, WebAssembly output, or CI-based release artifacts.
- You need guidance on cargo-packager, cargo-makepad, or GitHub Actions packaging flows for Makepad.
- Use when the request clearly matches the imported source intent: |.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Quick Navigation

| Platform | Tool | Output |
|----------|------|--------|
| [Desktop](#desktop-packaging) | `cargo-packager` | .deb, .nsis, .dmg |
| [Android](#android) | `cargo-makepad` | .apk |
| [iOS](#ios) | `cargo-makepad` | .app, .ipa |
| [Web](#wasm-packaging) | `cargo-makepad` | Wasm + HTML/JS |
| [CI/CD](#github-actions-packaging) | `makepad-packaging-action` | GitHub Release assets |

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @makepad-deployment-v3 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/makepad-deployment-v3/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/makepad-deployment-v3/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @makepad-deployment-v3 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Complete Example Cargo.toml

```toml
[package]
name = "my-makepad-app"
version = "1.0.0"
edition = "2024"

[dependencies]
makepad-widgets = { git = "https://github.com/makepad/makepad", branch = "dev" }

[profile.release]
opt-level = 3

[profile.release-lto]
inherits = "release"
lto = "thin"

[profile.distribution]
inherits = "release"
codegen-units = 1
lto = "fat"

[package.metadata.packager]
product_name = "My Makepad App"
identifier = "com.example.mymakepadapp"
authors = ["Your Name <you@example.com>"]
description = "A cross-platform Makepad application"
long_description = """
My Makepad App is a cross-platform application
built with the Makepad UI framework in Rust.
It runs on desktop, mobile, and web platforms.
"""
icons = ["./packaging/icon.png"]
out_dir = "./dist"

before-packaging-command = """
robius-packaging-commands before-packaging \
    --force-makepad \
    --binary-name my-makepad-app \
    --path-to-binary ./target/release/my-makepad-app
"""

resources = [
    { src = "./dist/resources/makepad_widgets", target = "makepad_widgets" },
    { src = "./dist/resources/makepad_fonts_chinese_bold", target = "makepad_fonts_chinese_bold" },
    { src = "./dist/resources/makepad_fonts_chinese_bold_2", target = "makepad_fonts_chinese_bold_2" },
    { src = "./dist/resources/makepad_fonts_chinese_regular", target = "makepad_fonts_chinese_regular" },
    { src = "./dist/resources/makepad_fonts_chinese_regular_2", target = "makepad_fonts_chinese_regular_2" },
    { src = "./dist/resources/makepad_fonts_emoji", target = "makepad_fonts_emoji" },
    { src = "./dist/resources/my-makepad-app", target = "my-makepad-app" },
]

before-each-package-command = """
robius-packaging-commands before-each-package \
    --force-makepad \
    --binary-name my-makepad-app \
    --path-to-binary ./target/release/my-makepad-app
"""

[package.metadata.packager.deb]
depends = "./dist/depends_deb.txt"
section = "utils"

[package.metadata.packager.macos]
minimum_system_version = "11.0"

[package.metadata.packager.nsis]
appdata_paths = ["$LOCALAPPDATA/$PRODUCTNAME"]
```

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-makepad-builder/skills/makepad-deployment`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

### Missing Resources

If app crashes with missing resources:
1. Check `resources` array in Cargo.toml includes all Makepad resources
2. Verify `before-packaging-command` runs successfully
3. Check `./dist/resources/` contains expected files

### iOS Provisioning

For iOS device deployment:
1. Create empty app in Xcode with same org/app identifiers
2. Run on physical device once to generate provisioning profile
3. Note the profile path, certificate fingerprint
4. Use `--profile`, `--cert`, `--device` flags

### Android SDK Issues

```bash
# Reinstall toolchain with full NDK
cargo makepad android install-toolchain --full-ndk
```

## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Quick Reference

| Task | Command |
|------|---------|
| Install desktop packager | `cargo install cargo-packager --locked` |
| Install resource helper | `cargo install --version 0.2.1 --locked --git https://github.com/project-robius/robius-packaging-commands.git robius-packaging-commands` |
| Install mobile packager | `cargo install --force --git https://github.com/makepad/makepad.git --branch dev cargo-makepad` |
| GitHub Actions packaging | `uses: Project-Robius-China/makepad-packaging-action@v1` |
| Package for Linux | `cargo packager --release` |
| Package for Windows | `cargo packager --release --formats nsis` |
| Package for macOS | `cargo packager --release` |
| Build Android APK | `cargo makepad android build -p app --release` |
| Build iOS (Simulator) | `cargo makepad apple ios --org=x --app=y run-sim -p app --release` |
| Build iOS (Device) | `cargo makepad apple ios --org=x --app=y --profile=... --cert=... run-device -p app --release` |
| Build Wasm | `cargo makepad wasm run -p app --release` |

---

#### Imported: Reference Files

- `references/platform-troubleshooting.md` - Platform-specific deployment issues
- `references/makepad-packaging-action.md` - GitHub Actions packaging reference
- `community/dora-studio-package-workflow.md` - Dora Studio CI packaging example

#### Imported: External References

- [cargo-packager docs](https://docs.crabnebula.dev/packager/)
- [robius-packaging-commands](https://github.com/project-robius/robius-packaging-commands)
- [cargo-makepad](https://github.com/makepad/makepad)
- [makepad-packaging-action](https://github.com/marketplace/actions/makepad-packaging-action)

#### Imported: GitHub Actions Packaging

Use `makepad-packaging-action` to package Makepad apps in CI. It wraps
`cargo-packager` (desktop) and `cargo-makepad` (mobile), and can upload artifacts
to GitHub Releases.

```yaml
jobs:
  package:
    runs-on: ubuntu-22.04
    steps:
      - uses: actions/checkout@v4
      - uses: Project-Robius-China/makepad-packaging-action@v1
        with:
          args: --target x86_64-unknown-linux-gnu --release
```

Notes:
- Desktop packages must run on matching OS runners (Linux/Windows/macOS).
- iOS builds require macOS runners.
- Android builds can run on any OS runner.

Full inputs/env/outputs and release workflows live in
`references/makepad-packaging-action.md`.

#### Imported: Desktop Packaging

Desktop packaging uses `cargo-packager` with `robius-packaging-commands` for resource handling.

### Install Tools

```bash
# Install cargo-packager
cargo install cargo-packager --locked

# Install robius-packaging-commands (v0.2.1)
cargo install --version 0.2.1 --locked \
    --git https://github.com/project-robius/robius-packaging-commands.git \
    robius-packaging-commands
```

### Configure Cargo.toml

Add packaging configuration to your `Cargo.toml`:

```toml
[package.metadata.packager]
product_name = "YourAppName"
identifier = "com.yourcompany.yourapp"
authors = ["Your Name or Team"]
description = "A brief description of your Makepad application"
# Note: long_description has 80 character max per line
long_description = """
Your detailed description here.
Keep each line under 80 characters.
"""
icons = ["./assets/icon.png"]
out_dir = "./dist"

# Pre-packaging command to collect resources
before-packaging-command = """
robius-packaging-commands before-packaging \
    --force-makepad \
    --binary-name your-app \
    --path-to-binary ./target/release/your-app
"""

# Resources to include in package
resources = [
    # Makepad built-in resources (required)
    { src = "./dist/resources/makepad_widgets", target = "makepad_widgets" },
    { src = "./dist/resources/makepad_fonts_chinese_bold", target = "makepad_fonts_chinese_bold" },
    { src = "./dist/resources/makepad_fonts_chinese_bold_2", target = "makepad_fonts_chinese_bold_2" },
    { src = "./dist/resources/makepad_fonts_chinese_regular", target = "makepad_fonts_chinese_regular" },
    { src = "./dist/resources/makepad_fonts_chinese_regular_2", target = "makepad_fonts_chinese_regular_2" },
    { src = "./dist/resources/makepad_fonts_emoji", target = "makepad_fonts_emoji" },

    # Your app resources
    { src = "./dist/resources/your_app_resource", target = "your_app_resource" },
]

before-each-package-command = """
robius-packaging-commands before-each-package \
    --force-makepad \
    --binary-name your-app \
    --path-to-binary ./target/release/your-app
"""
```

### Linux (Debian/Ubuntu)

```bash
# Install dependencies
sudo apt-get update
sudo apt-get install libssl-dev libsqlite3-dev pkg-config \
    binfmt-support libxcursor-dev libx11-dev libasound2-dev libpulse-dev

# Build package
cargo packager --release
```

Output: `.deb` file in `./dist/`

### Windows

```bash
# Build NSIS installer
cargo packager --release --formats nsis
```

Output: `.exe` installer in `./dist/`

### macOS

```bash
# Build package
cargo packager --release
```

Output: `.dmg` file in `./dist/`

### Platform-Specific Configuration

```toml
# Linux (Debian)
[package.metadata.packager.deb]
depends = "./dist/depends_deb.txt"
desktop_template = "./packaging/your-app.desktop"
section = "utils"

# macOS
[package.metadata.packager.macos]
minimum_system_version = "11.0"
frameworks = []
info_plist_path = "./packaging/Info.plist"
entitlements = "./packaging/Entitlements.plist"
# Optional: signing identity for distribution
signing_identity = "Developer ID Application: Your Name (XXXXXXXXXX)"

# macOS DMG
[package.metadata.packager.dmg]
background = "./packaging/dmg_background.png"
window_size = { width = 960, height = 540 }
app_position = { x = 200, y = 250 }
application_folder_position = { x = 760, y = 250 }

# Windows NSIS
[package.metadata.packager.nsis]
appdata_paths = [
    "$APPDATA/$PUBLISHER/$PRODUCTNAME",
    "$LOCALAPPDATA/$PRODUCTNAME",
]
```

---

#### Imported: Mobile Packaging

Mobile platforms use `cargo-makepad` for building and packaging.

### Install cargo-makepad

```bash
cargo install --force --git https://github.com/makepad/makepad.git \
    --branch dev cargo-makepad
```

### Android

```bash
# Install Android toolchain
cargo makepad android install-toolchain

# Full NDK (recommended for complete support)
cargo makepad android install-toolchain --full-ndk

# Build APK
cargo makepad android build -p your-app --release
```

Output: `.apk` in `./target/makepad-android-app/`

**Run on device/emulator:**
```bash
cargo makepad android run -p your-app --release
```

### iOS

```bash
# Install iOS toolchain
cargo makepad apple ios install-toolchain
```

**iOS Simulator:**
```bash
cargo makepad apple ios \
    --org=com.yourcompany \
    --app=YourApp \
    run-sim -p your-app --release
```

Output: `.app` in `./target/makepad-apple-app/aarch64-apple-ios-sim/release/`

**iOS Device (requires provisioning):**

First, create an empty app in Xcode with matching org/app names to generate provisioning profile.

```bash
cargo makepad apple ios \
    --org=com.yourcompany \
    --app=YourApp \
    --profile=$YOUR_PROFILE_PATH \
    --cert=$YOUR_CERT_FINGERPRINT \
    --device=iPhone \
    run-device -p your-app --release
```

Output: `.app` in `./target/makepad-apple-app/aarch64-apple-ios/release/`

**Create IPA for distribution:**
```bash
cd ./target/makepad-apple-app/aarch64-apple-ios/release
mkdir Payload
cp -r your-app.app Payload/
zip -r your-app-ios.ipa Payload
```

---

#### Imported: Wasm Packaging

Build your Makepad app for web browsers.

```bash
# Install Wasm toolchain
cargo makepad wasm install-toolchain

# Build and run
cargo makepad wasm run -p your-app --release
```

Output in `./target/makepad-wasm-app/release/your-app/`:
- `index.html` - Entry point
- `*.wasm` - WebAssembly module
- `*.js` - JavaScript bridge
- `resources/` - Static assets

**Serve locally:**
```bash
cd ./target/makepad-wasm-app/release/your-app
python3 -m http.server 8080
# Open http://localhost:8080
```

---
