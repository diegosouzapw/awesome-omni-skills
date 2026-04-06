import path from "node:path";
import fs from "node:fs";

/**
 * Resolve a symlink safely, ensuring it doesn't escape the root directory.
 * Returns the resolved real path, or null if unsafe.
 */
function resolveSafeRealPath(rootDir, linkPath) {
  try {
    const realRoot = fs.realpathSync(rootDir);
    const realTarget = fs.realpathSync(linkPath);
    if (!realTarget.startsWith(realRoot + path.sep) && realTarget !== realRoot) {
      return null;
    }
    return realTarget;
  } catch {
    return null;
  }
}

export { resolveSafeRealPath };
