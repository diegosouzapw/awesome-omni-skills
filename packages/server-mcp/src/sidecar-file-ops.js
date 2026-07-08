import fs from "node:fs";
import path from "node:path";
import {
  getCatalogPaths,
  loadCatalog,
  loadManifest,
} from "@omni-skills/catalog-core";
import { assertPathInsideRoot, assertPathAllowed } from "./sidecar-path-safety.js";

const SELECTIVE_DOC_PATHS = [
  "docs/README.md",
  "docs/CATALOG.md",
  "docs/users/GETTING-STARTED.md",
  "docs/users/USAGE.md",
  "docs/users/BUNDLES.md",
];

export function summarizeOperations(operations) {
  const summary = {
    total_operations: operations.length,
    copy_files: 0,
    remove_paths: 0,
    total_bytes: 0,
    by_kind: {},
  };

  for (const operation of operations) {
    if (operation.type === "copy-file") {
      summary.copy_files += 1;
      summary.total_bytes += operation.size_bytes || 0;
    }

    if (operation.type === "remove-path") {
      summary.remove_paths += 1;
    }

    summary.by_kind[operation.kind] = (summary.by_kind[operation.kind] || 0) + 1;
  }

  return summary;
}

function collectFilesUnder(rootPath, repoRoot, kind = "doc") {
  const safeRootPath = assertPathInsideRoot(rootPath, repoRoot, "Collection root");
  const rootRelative = path.relative(repoRoot, safeRootPath);
  if (rootRelative.startsWith("..") || path.isAbsolute(rootRelative)) {
    return [];
  }
  if (!fs.existsSync(safeRootPath)) {
    return [];
  }

  const files = [];
  for (const entry of fs.readdirSync(safeRootPath, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const absolutePath = assertPathInsideRoot(path.join(safeRootPath, entry.name), repoRoot, "Collected file");
    const relativeCheck = path.relative(repoRoot, absolutePath);
    if (relativeCheck.startsWith("..") || path.isAbsolute(relativeCheck)) {
      continue;
    }
    if (entry.isDirectory()) {
      files.push(...collectFilesUnder(absolutePath, repoRoot, kind));
      continue;
    }

    const relativePath = relativeCheck.split(path.sep).join("/");
    files.push({
      relativePath,
      absolutePath,
      kind,
      size_bytes: fs.statSync(absolutePath).size,
    });
  }

  return files;
}

export function buildFileCopyOperations(skillIds, targetPath, options = {}, includeDocs = true, fullLibrary = false) {
  const { repoRoot } = getCatalogPaths(options);
  const safeTargetPath = assertPathAllowed(targetPath, options);
  const operations = [];

  for (const skillId of skillIds) {
    const manifest = loadManifest(skillId, options);
    if (!manifest) {
      continue;
    }

    for (const artifact of manifest.artifacts || []) {
      const sourcePath = path.resolve(repoRoot, artifact.path);
      const destinationPath = path.join(safeTargetPath, artifact.path.replace(/^skills\//, ""));
      operations.push({
        type: "copy-file",
        kind: artifact.kind,
        skill_id: skillId,
        source: sourcePath,
        destination: destinationPath,
        source_root: repoRoot,
        destination_root: safeTargetPath,
        size_bytes: artifact.size_bytes,
        sha256: artifact.sha256,
      });
    }
  }

  if (!includeDocs) {
    return operations;
  }

  const docArtifacts = fullLibrary
    ? collectFilesUnder(path.join(repoRoot, "docs"), repoRoot)
    : SELECTIVE_DOC_PATHS
        .map((relativePath) => {
          const sourcePath = path.resolve(repoRoot, relativePath);
          const safeSourcePath = assertPathInsideRoot(sourcePath, repoRoot, "Document source");
          const sourceRelative = path.relative(repoRoot, safeSourcePath);
          if (sourceRelative.startsWith("..") || path.isAbsolute(sourceRelative)) {
            throw new Error(`Document source outside allowed root: ${safeSourcePath}`);
          }
          if (!fs.existsSync(safeSourcePath)) {
            return null;
          }
          return {
            relativePath,
            absolutePath: safeSourcePath,
            kind: "doc",
            size_bytes: fs.statSync(safeSourcePath).size,
          };
        })
        .filter(Boolean);

  for (const artifact of docArtifacts) {
    operations.push({
      type: "copy-file",
      kind: artifact.kind,
      skill_id: null,
      source: artifact.absolutePath,
      destination: path.join(safeTargetPath, artifact.relativePath),
      source_root: repoRoot,
      destination_root: safeTargetPath,
      size_bytes: artifact.size_bytes,
      sha256: null,
    });
  }

  return operations;
}

export function applyCopyOperations(operations) {
  for (const operation of operations) {
    const safeSource = assertPathInsideRoot(operation.source, operation.source_root, "Copy source");
    const safeDestination = assertPathInsideRoot(operation.destination, operation.destination_root, "Copy destination");
    const sourceRelative = path.relative(operation.source_root, safeSource);
    if (sourceRelative.startsWith("..") || path.isAbsolute(sourceRelative)) {
      throw new Error(`Copy source outside allowed root: ${safeSource}`);
    }
    const destinationRelative = path.relative(operation.destination_root, safeDestination);
    if (destinationRelative.startsWith("..") || path.isAbsolute(destinationRelative)) {
      throw new Error(`Copy destination outside allowed root: ${safeDestination}`);
    }
    fs.mkdirSync(path.dirname(safeDestination), { recursive: true });
    fs.copyFileSync(safeSource, safeDestination);
  }
}

export function applyRemoveOperations(operations) {
  for (const operation of operations) {
    // codeql[js/path-injection] Justification: Destination paths are structurally validated.
    fs.rmSync(operation.target, { recursive: true, force: true });
  }
}

export function resolveSelectedSkillIds(plan, options = {}) {
  if (plan.install_scope === "full-library") {
    return loadCatalog(options).skills.map((skill) => skill.id);
  }

  return plan.selected_skills.map((skill) => skill.id);
}
