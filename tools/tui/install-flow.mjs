import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const {
  PRIMARY_NPX_COMMAND,
  buildInstallerArgs,
  getInstallTargetById,
  listBuiltinInstallTargets,
  listInstallTargets,
  normalizeInstallTargetId,
  renderInstallerCommand,
  resolveCustomPath,
  expandUserPath,
} = require("../lib/install-targets.js");

function listKnownInstallTargets(customTargets = [], options = {}) {
  return listInstallTargets(customTargets, options);
}

function listBuiltInInstallTargets(options = {}) {
  return listBuiltinInstallTargets(options);
}

function emptyInstallDraft() {
  return {
    tool: "",
    targetLabel: "",
    targetPath: "",
    targetKind: "",
    scope: "",
    skillId: "",
    bundleId: "",
    query: "",
  };
}

function buildInstallRecord(draft, skill, bundle, installerArgs, command) {
  return {
    tool: draft.tool || "",
    targetPath: draft.targetPath,
    targetLabel: draft.targetLabel,
    targetKind: draft.targetKind || "",
    scope: draft.scope,
    skillId: skill?.id || "",
    bundleId: bundle?.id || "",
    command,
    installerArgs,
  };
}

function formatRecentInstall(entry) {
  if (entry.scope === "skill" && entry.skillId) {
    return `${entry.targetLabel || entry.tool || "custom"} • skill ${entry.skillId}`;
  }
  if (entry.scope === "bundle" && entry.bundleId) {
    return `${entry.targetLabel || entry.tool || "custom"} • bundle ${entry.bundleId}`;
  }
  if (entry.scope === "search" && entry.skillId) {
    return `${entry.targetLabel || entry.tool || "custom"} • search → ${entry.skillId}`;
  }
  return `${entry.targetLabel || entry.tool || "custom"} • full library`;
}

export {
  PRIMARY_NPX_COMMAND,
  buildInstallRecord,
  buildInstallerArgs,
  emptyInstallDraft,
  expandUserPath,
  formatRecentInstall,
  getInstallTargetById,
  listBuiltInInstallTargets,
  listKnownInstallTargets,
  normalizeInstallTargetId,
  renderInstallerCommand,
  resolveCustomPath,
};
