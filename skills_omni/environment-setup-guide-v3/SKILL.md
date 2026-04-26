---
name: "environment-setup-guide-v3"
description: "Environment Setup Guide workflow skill. Use this skill when the user needs Guide developers through setting up development environments with proper tools, dependencies, and configurations and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "tools"
tags:
  - "environment-setup-guide-v3"
  - "environment-setup-guide"
  - "guide"
  - "developers"
  - "setting"
  - "development"
  - "environments"
  - "proper"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-26"
date_updated: "2026-04-26"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "environment-setup-guide-v3"
family_name: "Environment Setup Guide"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/environment-setup-guide-v3"
upstream_skill: "skills/environment-setup-guide-v3"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "253"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "9bde1c99ef94d5af2b63ec62a7534e51f683b4f7"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "environment-setup-guide-v3"
---

# Environment Setup Guide

## Overview

This public intake copy packages `plugins/antigravity-bundle-devops-cloud/skills/environment-setup-guide` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

<!-- security-allowlist: curl-pipe-bash --> # Environment Setup Guide

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Setting Up Node.js Development Environment, Setting Up Python Development Environment, Setting Up Docker Development Environment, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when starting a new project and need to set up the development environment
- Use when onboarding new team members to a project
- Use when switching to a new machine or operating system
- Use when troubleshooting environment-related issues
- Use when documenting setup instructions for a project
- Use when creating development environment documentation

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

1. Create a setup.sh script to automate setup: ``bash #!/bin/bash echo "🚀 Setting up development environment..." # Check prerequisites command -v node >/dev/null 2>&1 || { echo "❌ Node.js not installed"; exit 1; } command -v git >/dev/null 2>&1 || { echo "❌ Git not installed"; exit 1; } echo "✅ Prerequisites check passed" # Install dependencies echo "📦 Installing dependencies..." npm install # Copy environment file if [ !
2. -f .env ]; then echo "📝 Creating .env file..." cp .env.example .env echo "⚠️ Please edit .env with your configuration" fi # Run database migrations echo "🗄️ Running database migrations..." npm run migrate # Verify setup echo "🔍 Verifying setup..." npm run test:setup echo "✅ Setup complete!
3. Run 'npm run dev' to start" ``
4. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
5. Read the overview and provenance files before loading any copied upstream support files.
6. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
7. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.

### Imported Workflow Notes

#### Imported: Setup Script Template

Create a `setup.sh` script to automate setup:

```bash
#!/bin/bash

echo "🚀 Setting up development environment..."

# Check prerequisites
command -v node >/dev/null 2>&1 || { echo "❌ Node.js not installed"; exit 1; }
command -v git >/dev/null 2>&1 || { echo "❌ Git not installed"; exit 1; }

echo "✅ Prerequisites check passed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Copy environment file
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "⚠️  Please edit .env with your configuration"
fi

# Run database migrations
echo "🗄️  Running database migrations..."
npm run migrate

# Verify setup
echo "🔍 Verifying setup..."
npm run test:setup

echo "✅ Setup complete! Run 'npm run dev' to start"
```

#### Imported: Overview

Help developers set up complete development environments from scratch. This skill provides step-by-step guidance for installing tools, configuring dependencies, setting up environment variables, and verifying the setup works correctly.

#### Imported: How It Works

### Step 1: Identify Requirements

I'll help you determine what needs to be installed:
- Programming language and version (Node.js, Python, Go, etc.)
- Package managers (npm, pip, cargo, etc.)
- Database systems (PostgreSQL, MongoDB, Redis, etc.)
- Development tools (Git, Docker, IDE extensions, etc.)
- Environment variables and configuration files

### Step 2: Check Current Setup

Before installing anything, I'll help you check what's already installed:
```bash
# Check versions of installed tools
node --version
python --version
git --version
docker --version
```

### Step 3: Provide Installation Instructions

I'll give platform-specific installation commands:
- **macOS:** Using Homebrew
- **Linux:** Using apt, yum, or package manager
- **Windows:** Using Chocolatey, Scoop, or direct installers

### Step 4: Configure the Environment

Help set up:
- Environment variables (.env files)
- Configuration files (.gitconfig, .npmrc, etc.)
- IDE settings (VS Code, IntelliJ, etc.)
- Shell configuration (.bashrc, .zshrc, etc.)

### Step 5: Verify Installation

Provide verification steps to ensure everything works:
- Run version checks
- Test basic commands
- Verify database connections
- Check environment variables are loaded

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @environment-setup-guide-v3 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @environment-setup-guide-v3 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @environment-setup-guide-v3 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @environment-setup-guide-v3 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Node.js Project Setup

```markdown

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Document Everything - Write clear setup instructions
- Use Version Managers - nvm for Node, pyenv for Python
- Create .env.example - Show required environment variables
- Test on Clean System - Verify instructions work from scratch
- Include Troubleshooting - Document common issues and solutions
- Use Docker - For consistent environments across machines
- Pin Versions - Specify exact versions in package files

### Imported Operating Notes

#### Imported: Best Practices

### ✅ Do This

- **Document Everything** - Write clear setup instructions
- **Use Version Managers** - nvm for Node, pyenv for Python
- **Create .env.example** - Show required environment variables
- **Test on Clean System** - Verify instructions work from scratch
- **Include Troubleshooting** - Document common issues and solutions
- **Use Docker** - For consistent environments across machines
- **Pin Versions** - Specify exact versions in package files
- **Automate Setup** - Create setup scripts when possible
- **Check Prerequisites** - List required tools before starting
- **Provide Verification Steps** - Help users confirm setup works

### ❌ Don't Do This

- **Don't Assume Tools Installed** - Always check and provide install instructions
- **Don't Skip Environment Variables** - Document all required variables
- **Don't Use Sudo with npm** - Fix permissions instead
- **Don't Forget Platform Differences** - Provide OS-specific instructions
- **Don't Leave Out Verification** - Always include test steps
- **Don't Use Global Installs** - Prefer local/virtual environments
- **Don't Ignore Errors** - Document how to handle common errors
- **Don't Skip Database Setup** - Include database initialization steps

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-devops-cloud/skills/environment-setup-guide`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@airflow-dag-patterns-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@aws-serverless-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@bash-linux-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@concise-planning-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Additional Resources

- [Node.js Installation Guide](https://nodejs.org/en/download/)
- [Python Virtual Environments](https://docs.python.org/3/tutorial/venv.html)
- [Docker Documentation](https://docs.docker.com/get-started/)
- [Homebrew (macOS)](https://brew.sh/)
- [Chocolatey (Windows)](https://chocolatey.org/)
- [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm)
- [pyenv (Python Version Manager)](https://github.com/pyenv/pyenv)

---

**Pro Tip:** Create a `setup.sh` or `setup.ps1` script to automate the entire setup process. Test it on a clean system to ensure it works!

#### Imported: Setting Up Node.js Development Environment

### Prerequisites
- macOS, Linux, or Windows
- Terminal/Command Prompt access
- Internet connection

### Step 1: Install Node.js

**macOS (using Homebrew):**
\`\`\`bash
# Install Homebrew if not installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
\`\`\`

**Linux (Ubuntu/Debian):**
\`\`\`bash
# Update package list
sudo apt update

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
\`\`\`

**Windows (using Chocolatey):**
\`\`\`powershell
# Install Chocolatey if not installed
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install Node.js
choco install nodejs
\`\`\`

### Step 2: Verify Installation

\`\`\`bash
node --version  # Should show v20.x.x or higher
npm --version   # Should show 10.x.x or higher
\`\`\`

### Step 3: Install Project Dependencies

\`\`\`bash
# Clone the repository
git clone https://github.com/your-repo/project.git
cd project

# Install dependencies
npm install
\`\`\`

### Step 4: Set Up Environment Variables

Create a \`.env\` file:
\`\`\`bash
# Copy example environment file
cp .env.example .env

# Edit with your values
nano .env
\`\`\`

Example \`.env\` content:
\`\`\`
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://localhost:5432/mydb
API_KEY=your-api-key-here
\`\`\`

### Step 5: Run the Project

\`\`\`bash
# Start development server
npm run dev

# Should see: Server running on http://localhost:3000
\`\`\`

### Troubleshooting

**Problem:** "node: command not found"
**Solution:** Restart your terminal or run \`source ~/.bashrc\` (Linux) or \`source ~/.zshrc\` (macOS)

**Problem:** "Permission denied" errors
**Solution:** Don't use sudo with npm. Fix permissions:
\`\`\`bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
\`\`\`
```

### Example 2: Python Project Setup

```markdown

#### Imported: Setting Up Python Development Environment

### Step 1: Install Python

**macOS:**
\`\`\`bash
brew install python@3.11
\`\`\`

**Linux:**
\`\`\`bash
sudo apt update
sudo apt install python3.11 python3.11-venv python3-pip
\`\`\`

**Windows:**
\`\`\`powershell
choco install python --version=3.11
\`\`\`

### Step 2: Verify Installation

\`\`\`bash
python3 --version  # Should show Python 3.11.x
pip3 --version     # Should show pip 23.x.x
\`\`\`

### Step 3: Create Virtual Environment

\`\`\`bash
# Navigate to project directory
cd my-project

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
# macOS/Linux:
source venv/bin/activate

# Windows:
venv\Scripts\activate
\`\`\`

### Step 4: Install Dependencies

\`\`\`bash
# Install from requirements.txt
pip install -r requirements.txt

# Or install packages individually
pip install flask sqlalchemy python-dotenv
\`\`\`

### Step 5: Set Up Environment Variables

Create \`.env\` file:
\`\`\`
FLASK_APP=app.py
FLASK_ENV=development
DATABASE_URL=sqlite:///app.db
SECRET_KEY=your-secret-key-here
\`\`\`

### Step 6: Run the Application

\`\`\`bash
# Run Flask app
flask run

# Should see: Running on http://127.0.0.1:5000
\`\`\`
```

### Example 3: Docker Development Environment

```markdown

#### Imported: Setting Up Docker Development Environment

### Step 1: Install Docker

**macOS:**
\`\`\`bash
brew install --cask docker
# Or download Docker Desktop from docker.com
\`\`\`

**Linux:**
\`\`\`bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group
sudo usermod -aG docker $USER
newgrp docker
\`\`\`

**Windows:**
Download Docker Desktop from docker.com

### Step 2: Verify Installation

\`\`\`bash
docker --version        # Should show Docker version 24.x.x
docker-compose --version # Should show Docker Compose version 2.x.x
\`\`\`

### Step 3: Create docker-compose.yml

\`\`\`yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://postgres:password@db:5432/mydb
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=mydb
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
\`\`\`

### Step 4: Start Services

\`\`\`bash
# Build and start containers
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
\`\`\`

### Step 5: Verify Services

\`\`\`bash
# Check running containers
docker ps

# Test database connection
docker-compose exec db psql -U postgres -d mydb
\`\`\`
```

#### Imported: Common Pitfalls

### Problem: "Command not found" after installation
**Symptoms:** Installed tool but terminal doesn't recognize it
**Solution:**
- Restart terminal or source shell config
- Check PATH environment variable
- Verify installation location
```bash
# Check PATH
echo $PATH

# Add to PATH (example)
export PATH="/usr/local/bin:$PATH"
```

### Problem: Permission errors with npm/pip
**Symptoms:** "EACCES" or "Permission denied" errors
**Solution:**
- Don't use sudo
- Fix npm permissions or use nvm
- Use virtual environments for Python
```bash
# Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
```

### Problem: Port already in use
**Symptoms:** "Port 3000 is already in use"
**Solution:**
- Find and kill process using the port
- Use a different port
```bash
# Find process on port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Or use different port
PORT=3001 npm start
```

### Problem: Database connection fails
**Symptoms:** "Connection refused" or "Authentication failed"
**Solution:**
- Verify database is running
- Check connection string
- Verify credentials
```bash
# Check if PostgreSQL is running
sudo systemctl status postgresql

# Test connection
psql -h localhost -U postgres -d mydb
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
