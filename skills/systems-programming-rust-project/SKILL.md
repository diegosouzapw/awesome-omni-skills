---
name: systems-programming-rust-project
description: "Rust Project Scaffolding workflow skill. Use this skill when the user needs You are a Rust project architecture expert specializing in scaffolding production-ready Rust applications. Generate complete project structures with cargo tooling, proper module organization, testing and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["systems-programming-rust-project", "you", "are", "rust", "project", "architecture", "expert", "specializing"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Rust Project Scaffolding

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/systems-programming-rust-project` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Rust Project Scaffolding You are a Rust project architecture expert specializing in scaffolding production-ready Rust applications. Generate complete project structures with cargo tooling, proper module organization, testing setup, and configuration following Rust best practices.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Context, Requirements, Output Format, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on rust project scaffolding tasks or workflows
- Needing guidance, best practices, or checklists for rust project scaffolding
- The task is unrelated to rust project scaffolding
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: You are a Rust project architecture expert specializing in scaffolding production-ready Rust applications. Generate complete project structures with cargo tooling, proper module organization, testing.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Binary: CLI tools, applications, services
2. Library: Reusable crates, shared utilities
3. Workspace: Multi-crate projects, monorepos
4. Web API: Actix/Axum web services, REST APIs
5. WebAssembly: Browser-based applications
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview and provenance files before loading any copied upstream support files.

### Imported Workflow Notes

#### Imported: Instructions

### 1. Analyze Project Type

Determine the project type from user requirements:
- **Binary**: CLI tools, applications, services
- **Library**: Reusable crates, shared utilities
- **Workspace**: Multi-crate projects, monorepos
- **Web API**: Actix/Axum web services, REST APIs
- **WebAssembly**: Browser-based applications

### 2. Initialize Project with Cargo

```bash
# Create binary project
cargo new project-name
cd project-name

# Or create library
cargo new --lib library-name

# Initialize git (cargo does this automatically)
# Add to .gitignore if needed
echo "/target" >> .gitignore
echo "Cargo.lock" >> .gitignore  # For libraries only
```

### 3. Generate Binary Project Structure

```
binary-project/
├── Cargo.toml
├── README.md
├── src/
│   ├── main.rs
│   ├── config.rs
│   ├── cli.rs
│   ├── commands/
│   │   ├── mod.rs
│   │   ├── init.rs
│   │   └── run.rs
│   ├── error.rs
│   └── lib.rs
├── tests/
│   ├── integration_test.rs
│   └── common/
│       └── mod.rs
├── benches/
│   └── benchmark.rs
└── examples/
    └── basic_usage.rs
```

**Cargo.toml**:
```toml
[package]
name = "project-name"
version = "0.1.0"
edition = "2021"
rust-version = "1.75"
authors = ["Your Name <email@example.com>"]
description = "Project description"
license = "MIT OR Apache-2.0"
repository = "https://github.com/user/project-name"

[dependencies]
clap = { version = "4.5", features = ["derive"] }
tokio = { version = "1.36", features = ["full"] }
anyhow = "1.0"
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"

[dev-dependencies]
criterion = "0.5"

[[bench]]
name = "benchmark"
harness = false

[profile.release]
opt-level = 3
lto = true
codegen-units = 1
```

**src/main.rs**:
```rust
use anyhow::Result;
use clap::Parser;

mod cli;
mod commands;
mod config;
mod error;

use cli::Cli;

#[tokio::main]
async fn main() -> Result<()> {
    let cli = Cli::parse();

    match cli.command {
        cli::Commands::Init(args) => commands::init::execute(args).await?,
        cli::Commands::Run(args) => commands::run::execute(args).await?,
    }

    Ok(())
}
```

**src/cli.rs**:
```rust
use clap::{Parser, Subcommand};

#[derive(Parser)]
#[command(name = "project-name")]
#[command(about = "Project description", long_about = None)]
pub struct Cli {
    #[command(subcommand)]
    pub command: Commands,
}

#[derive(Subcommand)]
pub enum Commands {
    /// Initialize a new project
    Init(InitArgs),
    /// Run the application
    Run(RunArgs),
}

#[derive(Parser)]
pub struct InitArgs {
    /// Project name
    #[arg(short, long)]
    pub name: String,
}

#[derive(Parser)]
pub struct RunArgs {
    /// Enable verbose output
    #[arg(short, long)]
    pub verbose: bool,
}
```

**src/error.rs**:
```rust
use std::fmt;

#[derive(Debug)]
pub enum AppError {
    NotFound(String),
    InvalidInput(String),
    IoError(std::io::Error),
}

impl fmt::Display for AppError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            AppError::NotFound(msg) => write!(f, "Not found: {}", msg),
            AppError::InvalidInput(msg) => write!(f, "Invalid input: {}", msg),
            AppError::IoError(e) => write!(f, "IO error: {}", e),
        }
    }
}

impl std::error::Error for AppError {}

pub type Result<T> = std::result::Result<T, AppError>;
```

### 4. Generate Library Project Structure

```
library-name/
├── Cargo.toml
├── README.md
├── src/
│   ├── lib.rs
│   ├── core.rs
│   ├── utils.rs
│   └── error.rs
├── tests/
│   └── integration_test.rs
└── examples/
    └── basic.rs
```

**Cargo.toml for Library**:
```toml
[package]
name = "library-name"
version = "0.1.0"
edition = "2021"
rust-version = "1.75"

[dependencies]
# Keep minimal for libraries

[dev-dependencies]
tokio-test = "0.4"

[lib]
name = "library_name"
path = "src/lib.rs"
```

**src/lib.rs**:
```rust
//! Library documentation
//!
//! # Examples
//!
//! ```
//! use library_name::core::CoreType;
//!
//! let instance = CoreType::new();
//! ```

pub mod core;
pub mod error;
pub mod utils;

pub use core::CoreType;
pub use error::{Error, Result};

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```

### 5. Generate Workspace Structure

```
workspace/
├── Cargo.toml
├── .gitignore
├── crates/
│   ├── api/
│   │   ├── Cargo.toml
│   │   └── src/
│   │       └── lib.rs
│   ├── core/
│   │   ├── Cargo.toml
│   │   └── src/
│   │       └── lib.rs
│   └── cli/
│       ├── Cargo.toml
│       └── src/
│           └── main.rs
└── tests/
    └── integration_test.rs
```

**Cargo.toml (workspace root)**:
```toml
[workspace]
members = [
    "crates/api",
    "crates/core",
    "crates/cli",
]
resolver = "2"

[workspace.package]
version = "0.1.0"
edition = "2021"
rust-version = "1.75"
authors = ["Your Name <email@example.com>"]
license = "MIT OR Apache-2.0"

[workspace.dependencies]
tokio = { version = "1.36", features = ["full"] }
serde = { version = "1.0", features = ["derive"] }

[profile.release]
opt-level = 3
lto = true
```

### 6. Generate Web API Structure (Axum)

```
web-api/
├── Cargo.toml
├── src/
│   ├── main.rs
│   ├── routes/
│   │   ├── mod.rs
│   │   ├── users.rs
│   │   └── health.rs
│   ├── handlers/
│   │   ├── mod.rs
│   │   └── user_handler.rs
│   ├── models/
│   │   ├── mod.rs
│   │   └── user.rs
│   ├── services/
│   │   ├── mod.rs
│   │   └── user_service.rs
│   ├── middleware/
│   │   ├── mod.rs
│   │   └── auth.rs
│   └── error.rs
└── tests/
    └── api_tests.rs
```

**Cargo.toml for Web API**:
```toml
[package]
name = "web-api"
version = "0.1.0"
edition = "2021"

[dependencies]
axum = "0.7"
tokio = { version = "1.36", features = ["full"] }
tower = "0.4"
tower-http = { version = "0.5", features = ["trace", "cors"] }
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
sqlx = { version = "0.7", features = ["runtime-tokio-native-tls", "postgres"] }
tracing = "0.1"
tracing-subscriber = "0.3"
```

**src/main.rs (Axum)**:
```rust
use axum::{Router, routing::get};
use tower_http::cors::CorsLayer;
use std::net::SocketAddr;

mod routes;
mod handlers;
mod models;
mod services;
mod error;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();

    let app = Router::new()
        .route("/health", get(routes::health::health_check))
        .nest("/api/users", routes::users::router())
        .layer(CorsLayer::permissive());

    let addr = SocketAddr::from(([0, 0, 0, 0], 3000));
    tracing::info!("Listening on {}", addr);

    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
```

### 7. Configure Development Tools

**Makefile**:
```makefile
.PHONY: build test lint fmt run clean bench

build:
	cargo build

test:
	cargo test

lint:
	cargo clippy -- -D warnings

fmt:
	cargo fmt --check

run:
	cargo run

clean:
	cargo clean

bench:
	cargo bench
```

**rustfmt.toml**:
```toml
edition = "2021"
max_width = 100
tab_spaces = 4
use_small_heuristics = "Max"
```

**clippy.toml**:
```toml
cognitive-complexity-threshold = 30
```

#### Imported: Context

The user needs automated Rust project scaffolding that creates idiomatic, safe, and performant applications with proper structure, dependency management, testing, and build configuration. Focus on Rust idioms and scalable architecture.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @systems-programming-rust-project to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @systems-programming-rust-project against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @systems-programming-rust-project for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @systems-programming-rust-project using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/systems-programming-rust-project`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Requirements

$ARGUMENTS

#### Imported: Output Format

1. **Project Structure**: Complete directory tree with idiomatic Rust organization
2. **Configuration**: Cargo.toml with dependencies and build settings
3. **Entry Point**: main.rs or lib.rs with proper documentation
4. **Tests**: Unit and integration test structure
5. **Documentation**: README and code documentation
6. **Development Tools**: Makefile, clippy/rustfmt configs

Focus on creating idiomatic Rust projects with strong type safety, proper error handling, and comprehensive testing setup.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
