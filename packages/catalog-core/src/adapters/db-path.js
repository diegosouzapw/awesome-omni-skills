import fs from "node:fs";
import path from "node:path";

// Guard for the SQLite catalog database path: rejects empty input, a NUL byte, and any
// `..` traversal segment; accepts a path ending in `.db` (even if the file does not yet
// exist) or an existing directory. Shared by SQLiteSearchAdapter and createSearchAdapter
// so the two call sites cannot drift.
export function resolveSafeDbPath(candidatePath) {
  const normalized = String(candidatePath || "").trim();
  if (!normalized || normalized.includes(String.fromCharCode(0)) || /(^|[\\/])\.\.([\\/]|$)/.test(normalized)) {
    return null;
  }

  const absolutePath = path.resolve(normalized);
  if (path.basename(absolutePath).toLowerCase().endsWith(".db")) {
    return absolutePath;
  }

  if (!fs.existsSync(absolutePath) || !fs.statSync(absolutePath).isDirectory()) {
    return null;
  }

  return absolutePath;
}
