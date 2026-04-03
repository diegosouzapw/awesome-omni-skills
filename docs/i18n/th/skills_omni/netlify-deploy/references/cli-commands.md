# Netlify CLI Commands Reference (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/netlify-deploy/references/cli-commands.md) · 🇪🇸 [es](../../../../es/skills_omni/netlify-deploy/references/cli-commands.md) · 🇫🇷 [fr](../../../../fr/skills_omni/netlify-deploy/references/cli-commands.md) · 🇩🇪 [de](../../../../de/skills_omni/netlify-deploy/references/cli-commands.md) · 🇮🇹 [it](../../../../it/skills_omni/netlify-deploy/references/cli-commands.md) · 🇷🇺 [ru](../../../../ru/skills_omni/netlify-deploy/references/cli-commands.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/netlify-deploy/references/cli-commands.md) · 🇯🇵 [ja](../../../../ja/skills_omni/netlify-deploy/references/cli-commands.md) · 🇰🇷 [ko](../../../../ko/skills_omni/netlify-deploy/references/cli-commands.md) · 🇸🇦 [ar](../../../../ar/skills_omni/netlify-deploy/references/cli-commands.md) · 🇮🇳 [hi](../../../../hi/skills_omni/netlify-deploy/references/cli-commands.md) · 🇮🇳 [in](../../../../in/skills_omni/netlify-deploy/references/cli-commands.md) · 🇹🇭 [th](../../../../th/skills_omni/netlify-deploy/references/cli-commands.md) · 🇻🇳 [vi](../../../../vi/skills_omni/netlify-deploy/references/cli-commands.md) · 🇮🇩 [id](../../../../id/skills_omni/netlify-deploy/references/cli-commands.md) · 🇲🇾 [ms](../../../../ms/skills_omni/netlify-deploy/references/cli-commands.md) · 🇳🇱 [nl](../../../../nl/skills_omni/netlify-deploy/references/cli-commands.md) · 🇵🇱 [pl](../../../../pl/skills_omni/netlify-deploy/references/cli-commands.md) · 🇸🇪 [sv](../../../../sv/skills_omni/netlify-deploy/references/cli-commands.md) · 🇳🇴 [no](../../../../no/skills_omni/netlify-deploy/references/cli-commands.md) · 🇩🇰 [da](../../../../da/skills_omni/netlify-deploy/references/cli-commands.md) · 🇫🇮 [fi](../../../../fi/skills_omni/netlify-deploy/references/cli-commands.md) · 🇵🇹 [pt](../../../../pt/skills_omni/netlify-deploy/references/cli-commands.md) · 🇷🇴 [ro](../../../../ro/skills_omni/netlify-deploy/references/cli-commands.md) · 🇭🇺 [hu](../../../../hu/skills_omni/netlify-deploy/references/cli-commands.md) · 🇧🇬 [bg](../../../../bg/skills_omni/netlify-deploy/references/cli-commands.md) · 🇸🇰 [sk](../../../../sk/skills_omni/netlify-deploy/references/cli-commands.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/netlify-deploy/references/cli-commands.md) · 🇮🇱 [he](../../../../he/skills_omni/netlify-deploy/references/cli-commands.md) · 🇵🇭 [phi](../../../../phi/skills_omni/netlify-deploy/references/cli-commands.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/netlify-deploy/references/cli-commands.md) · 🇨🇿 [cs](../../../../cs/skills_omni/netlify-deploy/references/cli-commands.md) · 🇹🇷 [tr](../../../../tr/skills_omni/netlify-deploy/references/cli-commands.md)

---


Quick reference for common Netlify CLI commands used in deployments.

## Authentication

```bash
# Login via browser OAuth
npx netlify login

# Check authentication status and site link
npx netlify status

# Logout
npx netlify logout
```

## Site Management

```bash
# Link current directory to existing site
npx netlify link

# Link by Git remote URL
npx netlify link --git-remote-url <url>

# Create and link new site
npx netlify init

# Unlink from current site
npx netlify unlink

# Open site in Netlify dashboard
npx netlify open

# Open site admin panel
npx netlify open:admin

# Open site in browser
npx netlify open:site
```

## การปรับใช้

```bash
# Deploy preview/draft (safe for testing)
npx netlify deploy

# Deploy to production
npx netlify deploy --prod

# Deploy with specific directory
npx netlify deploy --dir=dist

# Deploy with message
npx netlify deploy --message="Deploy message"

# List all deploys
npx netlify deploy:list
```

## Development

```bash
# Run local dev server with Netlify features
npx netlify dev

# Run local dev server on specific port
npx netlify dev --port 3000
```

## Site Information

```bash
# Get site info
npx netlify sites:list

# Get current site info
npx netlify api getSite --data '{"site_id": "YOUR_SITE_ID"}'
```

## Environment Variables

```bash
# List environment variables
npx netlify env:list

# Set environment variable
npx netlify env:set KEY value

# Get environment variable value
npx netlify env:get KEY

# Import env vars from file
npx netlify env:import .env
```

## Build

```bash
# Show build settings
npx netlify build --dry

# Run build locally
npx netlify build
```

## Functions (Serverless)

```bash
# List functions
npx netlify functions:list

# Invoke function locally
npx netlify functions:invoke FUNCTION_NAME

# Create new function
npx netlify functions:create FUNCTION_NAME
```

## Logs

```bash
# Stream function logs
npx netlify logs

# View logs for specific function
npx netlify logs:function FUNCTION_NAME
```

## Troubleshooting Commands

```bash
# Check CLI version
npx netlify --version

# Get help for any command
npx netlify help [command]

# Check status with verbose output
npx netlify status --verbose
```

## Exit Codes

- `0` - Success
- `1` - General error
- `2` - Authentication error
- `3` - Site not found
- `4` - Build failed

## Common Flags

- `--json` - Output as JSON
- `--silent` - Suppress output
- `--debug` - Show debug information
- `--force` - Skip confirmation prompts

## Resources

- Full CLI documentation: https://docs.netlify.com/cli/get-started/
- CLI GitHub repository: https://github.com/netlify/cli
