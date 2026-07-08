import path from "node:path";

export function getClaudeSettingsPath(env) {
  return path.join(env.homeDir, ".claude", "settings.json");
}

export function getGeminiSettingsPath(env, scope = "user") {
  if (scope === "workspace") {
    return path.join(env.cwd, ".gemini", "settings.json");
  }
  return path.join(env.homeDir, ".gemini", "settings.json");
}

export function getKiroSettingsPath(env, scope = "user") {
  if (scope === "workspace") {
    return path.join(env.cwd, ".kiro", "settings", "mcp.json");
  }
  return path.join(env.homeDir, ".kiro", "settings", "mcp.json");
}

export function getContinueWorkspaceConfigPath(env) {
  return path.join(env.cwd, ".continue", "mcpServers", "omni-skills.yaml");
}

export function getJunieConfigPath(env, scope = "user") {
  if (scope === "project") {
    return path.join(env.cwd, ".junie", "mcp", "mcp.json");
  }
  return path.join(env.homeDir, ".junie", "mcp", "mcp.json");
}

export function getWindsurfConfigPath(env) {
  return path.join(env.homeDir, ".codeium", "windsurf", "mcp_config.json");
}

export function getGooseConfigDir(env) {
  if (process.platform === "win32") {
    const appData = process.env.APPDATA || path.join(env.homeDir, "AppData", "Roaming");
    return path.join(appData, "Block", "goose", "config");
  }
  return path.join(env.homeDir, ".config", "goose");
}

export function getGooseConfigPath(env) {
  return path.join(getGooseConfigDir(env), "config.yaml");
}

export function getClineConfigRoot(env) {
  const customRoot = String(process.env.CLINE_DIR || "").trim();
  if (customRoot) {
    return path.resolve(customRoot);
  }
  return path.join(env.homeDir, ".cline");
}

export function getClineSettingsPath(env) {
  return path.join(getClineConfigRoot(env), "data", "settings", "cline_mcp_settings.json");
}

export function getCopilotHome(env) {
  const customRoot = String(process.env.COPILOT_HOME || "").trim();
  if (customRoot) {
    return path.resolve(customRoot);
  }
  return path.join(env.homeDir, ".copilot");
}

export function getCopilotUserConfigPath(env) {
  return path.join(getCopilotHome(env), "mcp-config.json");
}

export function getCopilotRepoConfigPath(env) {
  return path.join(env.cwd, ".github", "mcp.json");
}

export function getKiloConfigDir(env) {
  if (process.platform === "win32") {
    const appData = process.env.APPDATA || path.join(env.homeDir, "AppData", "Roaming");
    return path.join(appData, "kilo");
  }
  return path.join(env.homeDir, ".config", "kilo");
}

export function getKiloUserConfigPath(env) {
  return path.join(getKiloConfigDir(env), "kilo.json");
}

export function getKiloProjectConfigPath(env) {
  return path.join(env.cwd, "kilo.json");
}

export function getKiloWorkspaceConfigPath(env) {
  return path.join(env.cwd, ".kilocode", "mcp.json");
}

export function getOpenCodeConfigDir(env) {
  if (process.platform === "win32") {
    const appData = process.env.APPDATA || path.join(env.homeDir, "AppData", "Roaming");
    return path.join(appData, "opencode");
  }
  return path.join(env.homeDir, ".config", "opencode");
}

export function getOpenCodeUserConfigPath(env) {
  return path.join(getOpenCodeConfigDir(env), "opencode.json");
}

export function getOpenCodeProjectConfigPath(env) {
  return path.join(env.cwd, "opencode.json");
}

export function getOpenCodeSkillsPath(env) {
  return path.join(env.cwd, ".opencode", "skills");
}

export function getZedWorkspaceSettingsPath(env) {
  return path.join(env.cwd, ".zed", "settings.json");
}

export function getClaudeDesktopConfigPath(env) {
  if (process.platform === "darwin") {
    return path.join(env.homeDir, "Library", "Application Support", "Claude", "claude_desktop_config.json");
  }
  if (process.platform === "win32") {
    const appData = process.env.APPDATA || path.join(env.homeDir, "AppData", "Roaming");
    return path.join(appData, "Claude", "claude_desktop_config.json");
  }
  return path.join(env.homeDir, ".config", "Claude", "claude_desktop_config.json");
}

export function getVscodeUserConfigPath(env, edition = "stable") {
  const platform = process.platform;
  if (platform === "darwin") {
    const appName = edition === "insiders" ? "Code - Insiders" : "Code";
    return path.join(env.homeDir, "Library", "Application Support", appName, "User", "mcp.json");
  }
  if (platform === "win32") {
    const appData = process.env.APPDATA || path.join(env.homeDir, "AppData", "Roaming");
    const appName = edition === "insiders" ? "Code - Insiders" : "Code";
    return path.join(appData, appName, "User", "mcp.json");
  }
  const appName = edition === "insiders" ? "Code - Insiders" : "Code";
  return path.join(env.homeDir, ".config", appName, "User", "mcp.json");
}
