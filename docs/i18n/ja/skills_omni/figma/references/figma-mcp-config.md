# Figma MCP config reference (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/figma/references/figma-mcp-config.md) · 🇪🇸 [es](../../../../es/skills_omni/figma/references/figma-mcp-config.md) · 🇫🇷 [fr](../../../../fr/skills_omni/figma/references/figma-mcp-config.md) · 🇩🇪 [de](../../../../de/skills_omni/figma/references/figma-mcp-config.md) · 🇮🇹 [it](../../../../it/skills_omni/figma/references/figma-mcp-config.md) · 🇷🇺 [ru](../../../../ru/skills_omni/figma/references/figma-mcp-config.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/figma/references/figma-mcp-config.md) · 🇯🇵 [ja](../../../../ja/skills_omni/figma/references/figma-mcp-config.md) · 🇰🇷 [ko](../../../../ko/skills_omni/figma/references/figma-mcp-config.md) · 🇸🇦 [ar](../../../../ar/skills_omni/figma/references/figma-mcp-config.md) · 🇮🇳 [hi](../../../../hi/skills_omni/figma/references/figma-mcp-config.md) · 🇮🇳 [in](../../../../in/skills_omni/figma/references/figma-mcp-config.md) · 🇹🇭 [th](../../../../th/skills_omni/figma/references/figma-mcp-config.md) · 🇻🇳 [vi](../../../../vi/skills_omni/figma/references/figma-mcp-config.md) · 🇮🇩 [id](../../../../id/skills_omni/figma/references/figma-mcp-config.md) · 🇲🇾 [ms](../../../../ms/skills_omni/figma/references/figma-mcp-config.md) · 🇳🇱 [nl](../../../../nl/skills_omni/figma/references/figma-mcp-config.md) · 🇵🇱 [pl](../../../../pl/skills_omni/figma/references/figma-mcp-config.md) · 🇸🇪 [sv](../../../../sv/skills_omni/figma/references/figma-mcp-config.md) · 🇳🇴 [no](../../../../no/skills_omni/figma/references/figma-mcp-config.md) · 🇩🇰 [da](../../../../da/skills_omni/figma/references/figma-mcp-config.md) · 🇫🇮 [fi](../../../../fi/skills_omni/figma/references/figma-mcp-config.md) · 🇵🇹 [pt](../../../../pt/skills_omni/figma/references/figma-mcp-config.md) · 🇷🇴 [ro](../../../../ro/skills_omni/figma/references/figma-mcp-config.md) · 🇭🇺 [hu](../../../../hu/skills_omni/figma/references/figma-mcp-config.md) · 🇧🇬 [bg](../../../../bg/skills_omni/figma/references/figma-mcp-config.md) · 🇸🇰 [sk](../../../../sk/skills_omni/figma/references/figma-mcp-config.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/figma/references/figma-mcp-config.md) · 🇮🇱 [he](../../../../he/skills_omni/figma/references/figma-mcp-config.md) · 🇵🇭 [phi](../../../../phi/skills_omni/figma/references/figma-mcp-config.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/figma/references/figma-mcp-config.md) · 🇨🇿 [cs](../../../../cs/skills_omni/figma/references/figma-mcp-config.md) · 🇹🇷 [tr](../../../../tr/skills_omni/figma/references/figma-mcp-config.md)

---


Use this snippet to register the Figma MCP server in your agent's configuration as a streamable HTTP server with bearer auth pulled from your env.

## Configuration Example

```toml
[mcp_servers.figma]
url = "https://mcp.figma.com/mcp"
bearer_token_env_var = "FIGMA_OAUTH_TOKEN"
http_headers = { "X-Figma-Region" = "us-east-1" }
```

## Notes and options

- The bearer token must be available as `FIGMA_OAUTH_TOKEN` in the environment that launches your agent.
- Keep the region header aligned with your Figma region. If your org uses another region, update `X-Figma-Region` consistently.
- OAuth on streamable HTTP requires the RMCP client feature to be enabled in your agent's configuration.
- Optional per-server timeouts: `startup_timeout_sec` (default 10) and `tool_timeout_sec` (default 60) can be set if needed.

## Env var setup (if missing)

- One-time set for current shell: `export FIGMA_OAUTH_TOKEN="<token>"`
- Persist for future sessions: add the export line to your shell profile (e.g., `~/.zshrc` or `~/.bashrc`), then restart the shell or your IDE.
- Verify before launching your agent: `echo $FIGMA_OAUTH_TOKEN` should print a non-empty token.

## Setup + verification checklist

- Add the MCP server configuration to your agent's config file.
- Enable RMCP client feature if required by your agent.
- Restart your agent (CLI/IDE) after updating config and env vars.
- Ask your agent to list Figma tools or run a simple call to confirm the server is reachable.

## トラブルシューティング

- Token not picked up: Export `FIGMA_OAUTH_TOKEN` in the same shell that launches your agent, or add it to your shell profile and restart.
- OAuth errors: Verify RMCP client is enabled and the bearer token is valid. Tokens copied from Figma should not include surrounding quotes.
- Network/headers: Keep the `X-Figma-Region` header; if your org uses another region, update the header consistently across config and requests.

## Usage reminders

- The server is link-based: copy the Figma frame or layer link, then ask the MCP client to implement that URL. The client will extract the node ID from the link (it does not browse the page).
- If output feels generic, restate the project-specific rules from the main skill and ensure you follow the required flow (get_design_context → get_metadata if needed → get_screenshot).
