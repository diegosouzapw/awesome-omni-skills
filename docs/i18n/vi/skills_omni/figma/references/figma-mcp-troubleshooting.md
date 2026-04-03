# Figma MCP Troubleshooting (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇪🇸 [es](../../../../es/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇫🇷 [fr](../../../../fr/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇩🇪 [de](../../../../de/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇮🇹 [it](../../../../it/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇷🇺 [ru](../../../../ru/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇯🇵 [ja](../../../../ja/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇰🇷 [ko](../../../../ko/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇸🇦 [ar](../../../../ar/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇮🇳 [hi](../../../../hi/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇮🇳 [in](../../../../in/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇹🇭 [th](../../../../th/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇻🇳 [vi](../../../../vi/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇮🇩 [id](../../../../id/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇲🇾 [ms](../../../../ms/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇳🇱 [nl](../../../../nl/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇵🇱 [pl](../../../../pl/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇸🇪 [sv](../../../../sv/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇳🇴 [no](../../../../no/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇩🇰 [da](../../../../da/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇫🇮 [fi](../../../../fi/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇵🇹 [pt](../../../../pt/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇷🇴 [ro](../../../../ro/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇭🇺 [hu](../../../../hu/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇧🇬 [bg](../../../../bg/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇸🇰 [sk](../../../../sk/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇮🇱 [he](../../../../he/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇵🇭 [phi](../../../../phi/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇨🇿 [cs](../../../../cs/skills_omni/figma/references/figma-mcp-troubleshooting.md) · 🇹🇷 [tr](../../../../tr/skills_omni/figma/references/figma-mcp-troubleshooting.md)

---


Use this guide when Figma MCP calls fail, return the wrong target, or produce low-signal output.

## 1. Server or client connection failure

**Symptoms:** MCP calls fail immediately, the server appears unavailable, or the client cannot use Figma tools.

**Recovery steps:**

1. Confirm the client is supported and configured for Figma MCP.
2. Confirm the user is signed in to Figma.
3. Restart the client or refresh the MCP integration if setup was changed recently.
4. Retry with a minimal verification request.
5. If still failing, document whether the failure occurs before file access is checked.

## 2. Auth is present but file access fails

**Symptoms:** The user is logged in, but the requested file or node still cannot be read.

**Recovery steps:**

1. Open the same file directly in Figma.
2. Confirm the correct account and workspace are active.
3. Confirm the link points to the intended file.
4. Confirm the shared file permissions actually allow reading.
5. Retry with a node from a file known to be accessible.

## 3. Wrong frame or variant returned

**Symptoms:** The result is close to the intended design but does not match the requested state or screen.

**Recovery steps:**

1. Ask for the exact frame or layer link.
2. Extract and use the specific node target.
3. Request a screenshot before requesting assets or implementation notes.
4. If needed, inspect the parent frame structure to identify the right child node.

## 4. Response too large or too generic

**Symptoms:** Output is truncated, broad, or not useful for implementation.

**Recovery steps:**

1. Stop requesting the whole file.
2. Narrow to the exact frame or component.
3. Request only structure first.
4. Follow up with specific asks such as spacing, variables, hierarchy, or text styles.
5. Retrieve screenshots and assets only for the narrowed scope.

## 5. Asset mismatch or missing asset

**Symptoms:** The returned image or SVG is missing, low fidelity, or inconsistent with the screenshot.

**Recovery steps:**

1. Re-check the selected node.
2. Confirm the target layer is the asset-bearing layer.
3. Compare the fetched asset to the screenshot.
4. Inspect surrounding structure to determine whether the asset is nested or part of a variant.
5. Do not replace provided assets with placeholders unless the user explicitly approves a fallback.

## 6. Implementation is being attempted too early

**Symptoms:** The workflow jumps straight into code with unclear hierarchy, missing variants, or no screenshot validation.

**Recovery steps:**

1. Return to the MCP-first order.
2. Fetch structure.
3. Fetch screenshot.
4. Fetch only necessary assets.
5. Then produce an implementation brief or hand off to an implementation skill.
