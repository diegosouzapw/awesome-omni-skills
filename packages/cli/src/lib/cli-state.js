import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";

const DEFAULT_STATE_PATH = path.join(
  os.homedir(),
  ".omni-skills",
  "state",
  "ui-state.json",
);

const RECENT_LIMIT = 8;
const PRESET_LIMIT = 12;

function slugifyInstallTargetName(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function defaultState() {
  return {
    version: 2,
    last_updated_at: null,
    recentInstalls: [],
    recentServices: [],
    installPresets: [],
    servicePresets: [],
    customInstallTargets: [],
    favorites: {
      skills: [],
      bundles: [],
    },
    preferences: {
      theme: null,
      compactMode: true,
      screenReaderMode: "auto",
    },
  };
}

function ensureStateDir(filePath = DEFAULT_STATE_PATH) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function resolveStatePath(filePath = null) {
  return filePath || process.env.OMNI_SKILLS_STATE_PATH || DEFAULT_STATE_PATH;
}

function readJsonFile(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function dedupeEntries(entries, keyBuilder, limit) {
  const seen = new Set();
  const deduped = [];
  for (const entry of entries) {
    const key = keyBuilder(entry);
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    deduped.push(entry);
    if (deduped.length >= limit) {
      break;
    }
  }
  return deduped;
}

function normalizeState(input = {}) {
  const baseline = defaultState();
  return {
    ...baseline,
    ...input,
    recentInstalls: Array.isArray(input.recentInstalls) ? input.recentInstalls : baseline.recentInstalls,
    recentServices: Array.isArray(input.recentServices) ? input.recentServices : baseline.recentServices,
    installPresets: Array.isArray(input.installPresets) ? input.installPresets : baseline.installPresets,
    servicePresets: Array.isArray(input.servicePresets) ? input.servicePresets : baseline.servicePresets,
    customInstallTargets: Array.isArray(input.customInstallTargets)
      ? input.customInstallTargets
          .map((entry) => normalizeCustomInstallTarget(entry))
          .filter(Boolean)
      : baseline.customInstallTargets,
    favorites: {
      skills: Array.isArray(input.favorites?.skills) ? input.favorites.skills : baseline.favorites.skills,
      bundles: Array.isArray(input.favorites?.bundles) ? input.favorites.bundles : baseline.favorites.bundles,
    },
    preferences: {
      theme:
        typeof input.preferences?.theme === "string" || input.preferences?.theme === null
          ? input.preferences?.theme ?? baseline.preferences.theme
          : baseline.preferences.theme,
      compactMode:
        typeof input.preferences?.compactMode === "boolean"
          ? input.preferences.compactMode
          : baseline.preferences.compactMode,
      screenReaderMode:
        typeof input.preferences?.screenReaderMode === "string"
          ? input.preferences.screenReaderMode
          : baseline.preferences.screenReaderMode,
    },
  };
}

function loadCliState(filePath = null) {
  const resolvedPath = resolveStatePath(filePath);
  if (!fs.existsSync(resolvedPath)) {
    return normalizeState();
  }

  try {
    return normalizeState(readJsonFile(resolvedPath));
  } catch (_error) {
    return normalizeState();
  }
}

function saveCliState(state, filePath = null) {
  const resolvedPath = resolveStatePath(filePath);
  ensureStateDir(resolvedPath);
  const normalized = normalizeState({
    ...state,
    last_updated_at: new Date().toISOString(),
  });
  fs.writeFileSync(resolvedPath, `${JSON.stringify(normalized, null, 2)}\n`, "utf-8");
  return normalized;
}

function recentInstallKey(entry) {
  return JSON.stringify({
    tool: entry.tool || "",
    targetPath: entry.targetPath || "",
    skillId: entry.skillId || "",
    bundleId: entry.bundleId || "",
    scope: entry.scope || "",
  });
}

function recentServiceKey(entry) {
  return JSON.stringify({
    service: entry.service || "",
    transport: entry.transport || "",
    mode: entry.mode || "",
    host: entry.host || "",
    port: entry.port || "",
    storeType: entry.storeType || "",
    executorMode: entry.executorMode || "",
  });
}

function recordRecentInstall(state, entry) {
  const stamped = {
    id: entry.id || crypto.randomUUID(),
    created_at: entry.created_at || new Date().toISOString(),
    ...entry,
  };
  return {
    ...state,
    recentInstalls: dedupeEntries(
      [stamped, ...(state.recentInstalls || [])],
      recentInstallKey,
      RECENT_LIMIT,
    ),
  };
}

function recordRecentService(state, entry) {
  const stamped = {
    id: entry.id || crypto.randomUUID(),
    created_at: entry.created_at || new Date().toISOString(),
    ...entry,
  };
  return {
    ...state,
    recentServices: dedupeEntries(
      [stamped, ...(state.recentServices || [])],
      recentServiceKey,
      RECENT_LIMIT,
    ),
  };
}

function saveInstallPreset(state, name, entry) {
  const preset = {
    id: entry.id || crypto.randomUUID(),
    name: String(name || "").trim(),
    created_at: entry.created_at || new Date().toISOString(),
    ...entry,
  };
  return {
    ...state,
    installPresets: dedupeEntries(
      [preset, ...(state.installPresets || []).filter((item) => item.name !== preset.name)],
      (item) => item.name,
      PRESET_LIMIT,
    ),
  };
}

function saveServicePreset(state, name, entry) {
  const preset = {
    id: entry.id || crypto.randomUUID(),
    name: String(name || "").trim(),
    created_at: entry.created_at || new Date().toISOString(),
    ...entry,
  };
  return {
    ...state,
    servicePresets: dedupeEntries(
      [preset, ...(state.servicePresets || []).filter((item) => item.name !== preset.name)],
      (item) => item.name,
      PRESET_LIMIT,
    ),
  };
}

function normalizeCustomInstallTarget(entry) {
  if (!entry || typeof entry !== "object") {
    return null;
  }

  const name = String(entry.name || "").trim();
  const targetPath = String(entry.path || entry.targetPath || "").trim();
  const id = String(entry.id || `custom-${slugifyInstallTargetName(name) || "target"}`)
    .trim()
    .toLowerCase();
  if (!id || !name || !targetPath) {
    return null;
  }

  return {
    id,
    name,
    path: targetPath,
    created_at: entry.created_at || null,
    updated_at: entry.updated_at || null,
  };
}

function upsertCustomInstallTarget(state, entry) {
  const normalized = normalizeCustomInstallTarget({
    ...entry,
    updated_at: new Date().toISOString(),
  });
  if (!normalized) {
    return state;
  }

  const existing = (state.customInstallTargets || []).find(
    (item) => item.id === normalized.id || item.path === normalized.path,
  );
  const nextEntry = {
    ...existing,
    ...normalized,
    created_at: existing?.created_at || normalized.created_at || new Date().toISOString(),
  };

  return {
    ...state,
    customInstallTargets: [
      nextEntry,
      ...(state.customInstallTargets || []).filter(
        (item) => item.id !== normalized.id && item.path !== normalized.path,
      ),
    ].sort((left, right) => left.name.localeCompare(right.name)),
  };
}

function removeCustomInstallTarget(state, targetId) {
  const normalizedId = String(targetId || "").trim().toLowerCase();
  if (!normalizedId) {
    return state;
  }

  return {
    ...state,
    customInstallTargets: (state.customInstallTargets || []).filter((entry) => entry.id !== normalizedId),
  };
}

function toggleFavoriteSkill(state, skillId) {
  const normalized = String(skillId || "").trim();
  if (!normalized) {
    return state;
  }

  const hasSkill = state.favorites.skills.includes(normalized);
  return {
    ...state,
    favorites: {
      ...state.favorites,
      skills: hasSkill
        ? state.favorites.skills.filter((item) => item !== normalized)
        : [...state.favorites.skills, normalized].sort(),
    },
  };
}

function toggleFavoriteBundle(state, bundleId) {
  const normalized = String(bundleId || "").trim();
  if (!normalized) {
    return state;
  }

  const hasBundle = state.favorites.bundles.includes(normalized);
  return {
    ...state,
    favorites: {
      ...state.favorites,
      bundles: hasBundle
        ? state.favorites.bundles.filter((item) => item !== normalized)
        : [...state.favorites.bundles, normalized].sort(),
    },
  };
}

function updateCliPreferences(state, patch = {}) {
  return {
    ...state,
    preferences: {
      ...normalizeState(state).preferences,
      ...patch,
    },
  };
}

export {
  DEFAULT_STATE_PATH,
  defaultState,
  loadCliState,
  saveCliState,
  upsertCustomInstallTarget,
  removeCustomInstallTarget,
  recordRecentInstall,
  recordRecentService,
  saveInstallPreset,
  saveServicePreset,
  toggleFavoriteSkill,
  toggleFavoriteBundle,
  updateCliPreferences,
};
