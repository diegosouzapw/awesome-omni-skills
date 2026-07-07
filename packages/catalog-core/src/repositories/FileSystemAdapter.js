import fs from "node:fs";
import path from "node:path";
import { isPathInside } from "@omni-skills/shared-fs";

function assertReadablePath(candidatePath, context = {}) {
  const absolutePath = path.resolve(String(candidatePath || ""));
  const allowedRoots = [context.repoRoot, ...(context.allowedRoots || [])]
    .filter(Boolean)
    .map((rootPath) => path.resolve(rootPath));

  if (allowedRoots.length > 0 && !allowedRoots.some((rootPath) => isPathInside(absolutePath, rootPath))) {
    throw new Error(`Path '${absolutePath}' is outside the allowed repository roots.`);
  }

  return absolutePath;
}

export const defaultFsAdapter = {
  existsSync(filePath, context = {}) {
    const safePath = assertReadablePath(filePath, context);
    return fs.existsSync(safePath);
  },
  readJsonSync(jsonPath, context = {}) {
    const safePath = assertReadablePath(jsonPath, context);
    return JSON.parse(fs.readFileSync(safePath, "utf-8"));
  },
  statMtimeMs(filePath, context = {}) {
    const safePath = assertReadablePath(filePath, context);
    return fs.statSync(safePath).mtimeMs;
  },
};
