import fs from "node:fs";
import path from "node:path";
import { MemorySearchAdapter } from "./MemorySearchAdapter.js";
import { SQLiteSearchAdapter } from "./SQLiteSearchAdapter.js";

function resolveRequestedMode(context = {}) {
  return String(
    context.searchMode ||
      context.search_mode ||
      process.env.OMNI_SKILLS_SEARCH_ADAPTER ||
      "auto",
  )
    .trim()
    .toLowerCase();
}

function resolveSafeDatabasePath(candidatePath) {
  const normalized = String(candidatePath || "").trim();
  if (!normalized || normalized.includes("\u0000") || /(^|[\\/])\.\.([\\/]|$)/.test(normalized)) {
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

export function createSearchAdapter(context = {}) {
  if (context.searchAdapter && typeof context.searchAdapter.search === "function") {
    return context.searchAdapter;
  }

  const requestedMode = resolveRequestedMode(context);
  const databasePath = resolveSafeDatabasePath(context.databasePath || context.dbPath || null);

  if (requestedMode !== "memory" && databasePath && fs.existsSync(databasePath)) {
    try {
      const sqliteAdapter = new SQLiteSearchAdapter({ ...context, databasePath });
      sqliteAdapter.init({ ...context, databasePath });
      return sqliteAdapter;
    } catch (error) {
      const warn = context.logger?.warn || context.warn || console.warn;
      warn?.(
        `SQLite search unavailable, falling back to memory adapter: ${error?.message || "unknown error"}`,
      );
    }
  }

  const memoryAdapter = new MemorySearchAdapter(context);
  memoryAdapter.init(context);
  return memoryAdapter;
}
