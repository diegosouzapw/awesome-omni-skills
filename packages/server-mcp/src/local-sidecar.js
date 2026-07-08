import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { buildInstallPlan } from "@omni-skills/catalog-core";
import { isPathInside } from "@omni-skills/shared-fs";

import { listBuiltinInstallTargets } from "@omni-skills/install-targets";
import {
  getClaudeSettingsPath,
  getGeminiSettingsPath,
  getKiroSettingsPath,
  getContinueWorkspaceConfigPath,
  getJunieConfigPath,
  getWindsurfConfigPath,
  getGooseConfigDir,
  getGooseConfigPath,
  getClineConfigRoot,
  getClineSettingsPath,
  getCopilotHome,
  getCopilotUserConfigPath,
  getCopilotRepoConfigPath,
  getKiloConfigDir,
  getKiloUserConfigPath,
  getKiloProjectConfigPath,
  getKiloWorkspaceConfigPath,
  getOpenCodeConfigDir,
  getOpenCodeUserConfigPath,
  getOpenCodeProjectConfigPath,
  getOpenCodeSkillsPath,
  getZedWorkspaceSettingsPath,
  getClaudeDesktopConfigPath,
  getVscodeUserConfigPath,
} from "./client-config-paths.js";
import {
  normalizeEnv,
  assertPathAllowed,
  canWritePath,
  listInstalledSkillIdsForPath,
  getLocalAllowlistRoots,
} from "./sidecar-path-safety.js";
import {
  summarizeOperations,
  buildFileCopyOperations,
  applyCopyOperations,
  applyRemoveOperations,
  resolveSelectedSkillIds,
} from "./sidecar-file-ops.js";
import {
  CONFIG_PROFILES,
  normalizeTransportMode,
  buildMcpServerEntry,
  applyClientSpecificProfileOptions,
  getNestedValue,
  setNestedValue,
  upsertCodexConfigToml,
  renderContinueYamlConfig,
  buildConfigInstructions,
  buildConfigRecipes,
} from "./mcp-config-writer.js";

export { getLocalAllowlistRoots } from "./sidecar-path-safety.js";

const CLIENT_DEFINITIONS = {
  "claude-code": {
    name: "Claude Code",
    aliases: ["claude-code", "claude"],
    skillsPath: (env) => path.join(env.homeDir, ".claude", "skills"),
    configPath: (env) => getClaudeSettingsPath(env),
    configProfile: "claude-settings-json",
  },
  cursor: {
    name: "Cursor",
    aliases: ["cursor"],
    skillsPath: (env) => path.join(env.homeDir, ".cursor", "skills"),
    configPath: (env) => path.join(env.homeDir, ".cursor", "mcp.json"),
    configProfile: "cursor-json",
  },
  "gemini-cli": {
    name: "Gemini CLI",
    aliases: ["gemini-cli", "gemini"],
    skillsPath: (env) => path.join(env.homeDir, ".gemini", "skills"),
    configPath: (env) => getGeminiSettingsPath(env, "user"),
    configProfile: "gemini-settings-json",
  },
  "codex-cli": {
    name: "Codex CLI",
    aliases: ["codex-cli", "codex"],
    skillsPath: (env) => path.join(env.codexHome, "skills"),
    configPath: (env) => path.join(env.codexHome, "config.toml"),
    configProfile: "codex-toml",
  },
  kiro: {
    name: "Kiro",
    aliases: ["kiro"],
    skillsPath: (env) => path.join(env.homeDir, ".kiro", "skills"),
    configPath: (env) => getKiroSettingsPath(env, "user"),
    configProfile: "kiro-json",
  },
  antigravity: {
    name: "Antigravity",
    aliases: ["antigravity"],
    skillsPath: (env) => path.join(env.homeDir, ".gemini", "antigravity", "skills"),
    configPath: (env) => path.join(env.homeDir, ".gemini", "antigravity", "mcp.json"),
    configProfile: "antigravity-json",
  },
  opencode: {
    name: "OpenCode",
    aliases: ["opencode"],
    skillsPath: (env) => getOpenCodeSkillsPath(env),
    configPath: (env) => getOpenCodeProjectConfigPath(env),
    configProfile: "opencode-config-json",
  },
  goose: {
    name: "Goose",
    aliases: ["goose"],
    skillsPath: (env) => path.join(env.homeDir, ".agents", "skills"),
    configPath: (env) => getGooseConfigPath(env),
    configProfile: "goose-yaml",
  },
};

const CONFIG_TARGETS = {
  workspace: {
    name: "Claude workspace MCP config",
    path: (env) => path.join(env.cwd, ".mcp.json"),
    configProfile: "claude-json",
  },
  "claude-project": {
    name: "Claude Code project settings",
    path: (env) => path.join(env.cwd, ".claude", "settings.json"),
    configProfile: "claude-settings-json",
  },
  "claude-user-settings": {
    name: "Claude Code user settings",
    path: (env) => getClaudeSettingsPath(env),
    configProfile: "claude-settings-json",
  },
  "claude-user-legacy": {
    name: "Claude legacy JSON config",
    path: (env) => path.join(env.homeDir, ".claude.json"),
    configProfile: "claude-json",
  },
  "claude-desktop": {
    name: "Claude Desktop config",
    path: (env) => getClaudeDesktopConfigPath(env),
    configProfile: "claude-json",
  },
  "cursor-workspace": {
    name: "Cursor workspace MCP config",
    path: (env) => path.join(env.cwd, ".cursor", "mcp.json"),
    configProfile: "cursor-json",
  },
  vscode: {
    name: "VS Code workspace MCP config",
    path: (env) => path.join(env.cwd, ".vscode", "mcp.json"),
    configProfile: "vscode-json",
  },
  "vscode-user": {
    name: "VS Code user MCP config",
    path: (env) => getVscodeUserConfigPath(env, "stable"),
    configProfile: "vscode-json",
  },
  "vscode-insiders-user": {
    name: "VS Code Insiders user MCP config",
    path: (env) => getVscodeUserConfigPath(env, "insiders"),
    configProfile: "vscode-json",
  },
  devcontainer: {
    name: "Dev Container VS Code MCP config",
    path: (env) => path.join(env.cwd, ".devcontainer", "devcontainer.json"),
    configProfile: "devcontainer-json",
  },
  "claude-user": {
    name: "Claude Code user MCP config",
    path: (env) => path.join(env.homeDir, ".claude.json"),
    configProfile: "claude-json",
  },
  "cursor-user": {
    name: "Cursor user MCP config",
    path: (env) => path.join(env.homeDir, ".cursor", "mcp.json"),
    configProfile: "cursor-json",
  },
  "gemini-user": {
    name: "Gemini CLI user settings",
    path: (env) => getGeminiSettingsPath(env, "user"),
    configProfile: "gemini-settings-json",
  },
  "gemini-workspace": {
    name: "Gemini CLI workspace settings",
    path: (env) => getGeminiSettingsPath(env, "workspace"),
    configProfile: "gemini-settings-json",
  },
  "antigravity-user": {
    name: "Antigravity user MCP config",
    path: (env) => path.join(env.homeDir, ".gemini", "antigravity", "mcp.json"),
    configProfile: "antigravity-json",
  },
  "kiro-user": {
    name: "Kiro user MCP config",
    path: (env) => getKiroSettingsPath(env, "user"),
    configProfile: "kiro-json",
  },
  "kiro-workspace": {
    name: "Kiro workspace MCP config",
    path: (env) => getKiroSettingsPath(env, "workspace"),
    configProfile: "kiro-json",
  },
  "kiro-user-legacy": {
    name: "Kiro legacy MCP config",
    path: (env) => path.join(env.homeDir, ".kiro", "mcp.json"),
    configProfile: "generic-json",
  },
  "codex-user": {
    name: "Codex user MCP config",
    path: (env) => path.join(env.codexHome, "config.toml"),
    configProfile: "codex-toml",
  },
  "opencode-workspace": {
    name: "OpenCode workspace MCP config",
    path: (env) => getOpenCodeProjectConfigPath(env),
    configProfile: "opencode-config-json",
  },
  "opencode-user": {
    name: "OpenCode user MCP config",
    path: (env) => getOpenCodeUserConfigPath(env),
    configProfile: "opencode-config-json",
  },
  "cline-user": {
    name: "Cline user MCP config",
    path: (env) => getClineSettingsPath(env),
    configProfile: "cline-json",
  },
  "kilo-user": {
    name: "Kilo Code user MCP config",
    path: (env) => getKiloUserConfigPath(env),
    configProfile: "opencode-config-json",
  },
  "kilo-project": {
    name: "Kilo Code project MCP config",
    path: (env) => getKiloProjectConfigPath(env),
    configProfile: "opencode-config-json",
  },
  "kilo-workspace": {
    name: "Kilo Code workspace MCP config",
    path: (env) => getKiloWorkspaceConfigPath(env),
    configProfile: "kilo-json",
  },
  "copilot-user": {
    name: "GitHub Copilot CLI user MCP config",
    path: (env) => getCopilotUserConfigPath(env),
    configProfile: "copilot-json",
  },
  "copilot-repo": {
    name: "GitHub Copilot repository MCP config",
    path: (env) => getCopilotRepoConfigPath(env),
    configProfile: "copilot-json",
  },
  "zed-workspace": {
    name: "Zed workspace MCP config",
    path: (env) => getZedWorkspaceSettingsPath(env),
    configProfile: "zed-json",
  },
  "continue-workspace": {
    name: "Continue workspace MCP config",
    path: (env) => getContinueWorkspaceConfigPath(env),
    configProfile: "continue-yaml",
  },
  "junie-project": {
    name: "Junie project MCP config",
    path: (env) => getJunieConfigPath(env, "project"),
    configProfile: "junie-json",
  },
  "junie-user": {
    name: "Junie user MCP config",
    path: (env) => getJunieConfigPath(env, "user"),
    configProfile: "junie-json",
  },
  "windsurf-user": {
    name: "Windsurf user MCP config",
    path: (env) => getWindsurfConfigPath(env),
    configProfile: "windsurf-json",
  },
  "goose-user": {
    name: "Goose user MCP config",
    path: (env) => getGooseConfigPath(env),
    configProfile: "goose-yaml",
  },
};

const CONFIG_CLIENT_FAMILIES = [
  { id: "claude", name: "Claude Code and Claude Desktop" },
  { id: "cursor", name: "Cursor" },
  { id: "vscode", name: "VS Code and Dev Containers" },
  { id: "gemini-cli", name: "Gemini CLI" },
  { id: "antigravity", name: "Antigravity" },
  { id: "kiro", name: "Kiro" },
  { id: "codex-cli", name: "Codex CLI" },
  { id: "continue", name: "Continue" },
  { id: "junie", name: "Junie" },
  { id: "windsurf", name: "Windsurf" },
  { id: "goose", name: "Goose" },
  { id: "opencode", name: "OpenCode" },
  { id: "cline", name: "Cline" },
  { id: "copilot", name: "GitHub Copilot CLI" },
  { id: "kilo", name: "Kilo Code" },
  { id: "zed", name: "Zed" },
];

export function getLocalSidecarSupportSnapshot() {
  const installTargets = listBuiltinInstallTargets();
  return {
    install_capable_client_count: installTargets.length,
    install_capable_client_ids: installTargets.map((target) => target.id),
    config_capable_client_count: CONFIG_CLIENT_FAMILIES.length,
    config_capable_clients: CONFIG_CLIENT_FAMILIES,
    config_target_count: Object.keys(CONFIG_TARGETS).length,
    config_target_ids: Object.keys(CONFIG_TARGETS),
    config_profile_count: Object.keys(CONFIG_PROFILES).length,
    config_profile_ids: Object.keys(CONFIG_PROFILES),
  };
}

function getClientDefinition(client) {
  const normalized = String(client || "").trim().toLowerCase();
  if (!normalized) {
    return null;
  }

  return Object.entries(CLIENT_DEFINITIONS)
    .map(([id, definition]) => ({ id, ...definition }))
    .find((definition) => definition.aliases.includes(normalized)) || null;
}

function normalizeClientId(client) {
  return getClientDefinition(client)?.id || null;
}

function resolveSkillsTarget({ client, targetPath }, options = {}) {
  if (targetPath) {
    return assertPathAllowed(targetPath, options);
  }

  const definition = getClientDefinition(client);
  if (!definition) {
    throw new Error("Provide a supported client or an explicit target_path.");
  }

  return assertPathAllowed(definition.skillsPath(normalizeEnv(options)), options);
}

function inferConfigProfileFromPath(filePath) {
  const normalizedPath = path.resolve(filePath);
  const baseName = path.basename(normalizedPath);
  if (baseName === "config.toml") {
    return CONFIG_PROFILES["codex-toml"];
  }
  if (normalizedPath.endsWith(path.join(".devcontainer", "devcontainer.json"))) {
    return CONFIG_PROFILES["devcontainer-json"];
  }
  if (normalizedPath.endsWith(path.join(".vscode", "mcp.json"))) {
    return CONFIG_PROFILES["vscode-json"];
  }
  if (normalizedPath.endsWith(path.join(".claude", "settings.json"))) {
    return CONFIG_PROFILES["claude-settings-json"];
  }
  if (normalizedPath.endsWith(path.join(".gemini", "settings.json"))) {
    return CONFIG_PROFILES["gemini-settings-json"];
  }
  if (normalizedPath.endsWith(path.join(".gemini", "antigravity", "mcp.json"))) {
    return CONFIG_PROFILES["antigravity-json"];
  }
  if (normalizedPath.endsWith(path.join(".kiro", "settings", "mcp.json"))) {
    return CONFIG_PROFILES["kiro-json"];
  }
  if (normalizedPath.endsWith(path.join(".cline", "data", "settings", "cline_mcp_settings.json"))) {
    return CONFIG_PROFILES["cline-json"];
  }
  if (normalizedPath.endsWith(path.join(".copilot", "mcp-config.json"))) {
    return CONFIG_PROFILES["copilot-json"];
  }
  if (normalizedPath.endsWith(path.join(".github", "mcp.json"))) {
    return CONFIG_PROFILES["copilot-json"];
  }
  if (normalizedPath.endsWith(path.join(".kilocode", "mcp.json"))) {
    return CONFIG_PROFILES["kilo-json"];
  }
  if (normalizedPath.endsWith(path.join(".agents", "mcp.json"))) {
    return CONFIG_PROFILES["opencode-json"];
  }
  if (baseName === "kilo.json" || baseName === "opencode.json") {
    return CONFIG_PROFILES["opencode-config-json"];
  }
  if (normalizedPath.endsWith(path.join(".zed", "settings.json"))) {
    return CONFIG_PROFILES["zed-json"];
  }
  if (normalizedPath.endsWith(path.join(".continue", "mcpServers", "omni-skills.yaml"))) {
    return CONFIG_PROFILES["continue-yaml"];
  }
  if (normalizedPath.endsWith(path.join(".junie", "mcp", "mcp.json"))) {
    return CONFIG_PROFILES["junie-json"];
  }
  if (normalizedPath.endsWith(path.join(".codeium", "windsurf", "mcp_config.json"))) {
    return CONFIG_PROFILES["windsurf-json"];
  }
  if (normalizedPath.endsWith(path.join("goose", "config.yaml"))) {
    return CONFIG_PROFILES["goose-yaml"];
  }
  if (baseName === ".mcp.json" || baseName === ".claude.json") {
    return CONFIG_PROFILES["claude-json"];
  }
  if (baseName === "mcp.json") {
    if (normalizedPath.includes(`${path.sep}.cursor${path.sep}`)) {
      return CONFIG_PROFILES["cursor-json"];
    }
    return CONFIG_PROFILES["generic-json"];
  }
  return CONFIG_PROFILES["generic-json"];
}

function resolveConfigTarget({ client, configTarget, filePath }, options = {}) {
  const env = normalizeEnv(options);

  if (filePath) {
    const configPath = assertPathAllowed(filePath, options);
    return {
      configPath,
      profile: inferConfigProfileFromPath(configPath),
      source: "file_path",
      targetId: null,
      targetName: path.basename(configPath),
    };
  }

  if (configTarget) {
    const definition = CONFIG_TARGETS[String(configTarget).trim().toLowerCase()];
    if (!definition) {
      throw new Error(`Unsupported config_target '${configTarget}'.`);
    }
    return {
      configPath: assertPathAllowed(definition.path(env), options),
      profile: CONFIG_PROFILES[definition.configProfile] || CONFIG_PROFILES["generic-json"],
      source: "config_target",
      targetId: String(configTarget).trim().toLowerCase(),
      targetName: definition.name,
    };
  }

  const clientDefinition = getClientDefinition(client);
  if (!clientDefinition) {
    throw new Error("Provide client, config_target, or file_path.");
  }

  return {
    configPath: assertPathAllowed(clientDefinition.configPath(env), options),
    profile: CONFIG_PROFILES[clientDefinition.configProfile] || CONFIG_PROFILES["generic-json"],
    source: "client",
    targetId: clientDefinition.id,
    targetName: clientDefinition.name,
  };
}

export function isLocalModeEnabled() {
  return (
    process.env.OMNI_SKILLS_MCP_MODE === "local" ||
    process.env.OMNI_SKILLS_MCP_LOCAL_MODE === "1"
  );
}

export function detectClients(options = {}) {
  const env = normalizeEnv(options);
  const allowlistRoots = getLocalAllowlistRoots(options);

  return {
    mode: isLocalModeEnabled() ? "local" : "read-only",
    allowlist_roots: allowlistRoots,
    clients: Object.entries(CLIENT_DEFINITIONS).map(([clientId, definition]) => {
      const skillsPath = definition.skillsPath(env);
      const configPath = definition.configPath(env);
      const installedSkillIds = listInstalledSkillIdsForPath(skillsPath);

      return {
        id: clientId,
        name: definition.name,
        aliases: definition.aliases,
        skills_path: skillsPath,
        skills_path_exists: fs.existsSync(skillsPath),
        skills_path_writable: canWritePath(skillsPath),
        skills_path_allowed: allowlistRoots.some((rootPath) => isPathInside(skillsPath, rootPath)),
        config_path: configPath,
        config_profile: definition.configProfile,
        config_profile_description:
          (CONFIG_PROFILES[definition.configProfile] || CONFIG_PROFILES["generic-json"]).description,
        config_format: (CONFIG_PROFILES[definition.configProfile] || CONFIG_PROFILES["generic-json"]).format,
        config_path_exists: fs.existsSync(configPath),
        config_path_writable: canWritePath(configPath),
        config_path_allowed: allowlistRoots.some((rootPath) => isPathInside(configPath, rootPath)),
        installed_skill_ids: installedSkillIds,
      };
    }),
    config_targets: Object.entries(CONFIG_TARGETS).map(([targetId, definition]) => ({
      id: targetId,
      name: definition.name,
      path: definition.path(env),
      config_profile: definition.configProfile,
      config_profile_description:
        (CONFIG_PROFILES[definition.configProfile] || CONFIG_PROFILES["generic-json"]).description,
    })),
  };
}

export function listInstalledSkills(input = {}, options = {}) {
  const detection = detectClients(options);

  if (!input.client && !input.target_path) {
    return {
      targets: detection.clients.map((client) => ({
        client: client.id,
        name: client.name,
        target_path: client.skills_path,
        installed_skill_ids: client.installed_skill_ids,
      })),
    };
  }

  const targetPath = resolveSkillsTarget({ client: input.client, targetPath: input.target_path }, options);
  return {
    client: input.client || null,
    target_path: targetPath,
    installed_skill_ids: listInstalledSkillIdsForPath(targetPath),
  };
}

export function installSkills(input = {}, options = {}) {
  const dryRun = input.dry_run !== undefined ? Boolean(input.dry_run) : true;
  const includeDocs = input.include_docs !== undefined ? Boolean(input.include_docs) : true;
  const normalizedClientId = normalizeClientId(input.client);
  const targetPath = resolveSkillsTarget({ client: input.client, targetPath: input.target_path }, options);
  const plan = buildInstallPlan(
    {
      skill_ids: input.skill_ids || [],
      bundle_ids: input.bundle_ids || [],
      tools: normalizedClientId ? [normalizedClientId] : input.tools || [],
      target_path: targetPath,
      dry_run: true,
    },
    options,
  );
  const selectedSkillIds = resolveSelectedSkillIds(plan, options);
  const operations = buildFileCopyOperations(
    selectedSkillIds,
    targetPath,
    options,
    includeDocs,
    plan.install_scope === "full-library",
  );

  if (!dryRun) {
    applyCopyOperations(operations);
  }

  return {
    dry_run: dryRun,
    client: normalizedClientId || input.client || null,
    target_path: targetPath,
    include_docs: includeDocs,
    install_scope: plan.install_scope,
    selected_bundles: plan.selected_bundles,
    selected_skill_ids: selectedSkillIds,
    warnings: plan.warnings,
    operations,
    summary: summarizeOperations(operations),
    applied: !dryRun,
  };
}

export function removeSkills(input = {}, options = {}) {
  const skillIds = Array.isArray(input.skill_ids) ? input.skill_ids : [];
  const bundleIds = Array.isArray(input.bundle_ids) ? input.bundle_ids : [];
  const dryRun = input.dry_run !== undefined ? Boolean(input.dry_run) : true;
  const normalizedClientId = normalizeClientId(input.client);
  const targetPath = resolveSkillsTarget({ client: input.client, targetPath: input.target_path }, options);

  if (skillIds.length === 0 && bundleIds.length === 0) {
    throw new Error("Provide at least one skill_id or bundle_id to remove.");
  }

  const plan = buildInstallPlan(
    {
      skill_ids: skillIds,
      bundle_ids: bundleIds,
      tools: normalizedClientId ? [normalizedClientId] : input.tools || [],
      target_path: targetPath,
      dry_run: true,
    },
    options,
  );

  const operations = resolveSelectedSkillIds(plan, options).map((skillId) => ({
    type: "remove-path",
    kind: "skill-directory",
    skill_id: skillId,
    target: path.join(targetPath, skillId),
    exists: fs.existsSync(path.join(targetPath, skillId)),
  }));

  if (!dryRun) {
    applyRemoveOperations(operations);
  }

  return {
    dry_run: dryRun,
    client: normalizedClientId || input.client || null,
    target_path: targetPath,
    selected_bundles: plan.selected_bundles,
    selected_skill_ids: operations.map((operation) => operation.skill_id),
    warnings: plan.warnings,
    operations,
    summary: summarizeOperations(operations),
    applied: !dryRun,
  };
}

export function configureClientMcp(input = {}, options = {}) {
  const dryRun = input.dry_run !== undefined ? Boolean(input.dry_run) : true;
  const serverName = String(input.server_name || "omni-skills");
  const transport = normalizeTransportMode(input.transport || "stream");
  const resolvedTarget = resolveConfigTarget(
    {
      client: input.client,
      configTarget: input.config_target,
      filePath: input.file_path,
    },
    options,
  );
  const { configPath, profile, source, targetId, targetName } = resolvedTarget;
  const initialEntry = buildMcpServerEntry({ transport, url: input.url }, profile);
  const recipes = buildConfigRecipes({
    targetId,
    configPath,
    serverName,
    transport,
    url: input.url,
  });
  const currentConfigText = fs.existsSync(configPath) ? fs.readFileSync(configPath, "utf-8") : "";
  let currentConfig = null;
  let nextConfig = null;
  let nextConfigText = "";

  if (profile.format === "toml") {
    nextConfigText = upsertCodexConfigToml(currentConfigText, serverName, initialEntry);
  } else if (profile.format === "yaml") {
    const { entry } = applyClientSpecificProfileOptions({}, profile, initialEntry, input);
    if (profile.id === "continue-yaml") {
      nextConfigText = renderContinueYamlConfig(serverName, entry);
    } else {
      currentConfig = currentConfigText ? (YAML.parse(currentConfigText) || {}) : {};
      const rootPath = profile.rootPath || [profile.rootKey];
      const currentServers = getNestedValue(currentConfig, rootPath) || {};
      nextConfig = setNestedValue(currentConfig, rootPath, {
        ...currentServers,
        [serverName]: entry,
      });
      nextConfigText = YAML.stringify(nextConfig);
      if (!nextConfigText.endsWith("\n")) {
        nextConfigText = `${nextConfigText}\n`;
      }
    }
  } else {
    currentConfig = currentConfigText ? JSON.parse(currentConfigText) : {};
    const rootPath = profile.rootPath || [profile.rootKey];
    const currentServers = getNestedValue(currentConfig, rootPath) || {};
    const { config: mutatedConfig, entry } = applyClientSpecificProfileOptions(currentConfig, profile, initialEntry, input);
    nextConfig = setNestedValue(
      mutatedConfig,
      rootPath,
      {
        ...currentServers,
        [serverName]: entry,
      },
    );
    nextConfigText = `${JSON.stringify(nextConfig, null, 2)}\n`;
  }

  if (!dryRun) {
    fs.mkdirSync(path.dirname(configPath), { recursive: true });
    fs.writeFileSync(configPath, nextConfigText);
  }

  return {
    dry_run: dryRun,
    config_path: configPath,
    config_profile: profile.id,
    config_format: profile.format,
    config_root_key: profile.rootKey,
    config_root_path: profile.rootPath || [profile.rootKey],
    target_source: source,
    target_id: targetId,
    target_name: targetName,
    server_name: serverName,
    transport,
    applied: !dryRun,
    instructions: buildConfigInstructions(targetName, configPath, profile, transport),
    recipes,
    current_config: currentConfig,
    current_config_text: currentConfigText,
    next_config: nextConfig,
    next_config_text: nextConfigText,
  };
}
