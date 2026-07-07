import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as catalogCore from "@omni-skills/catalog-core";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_REPO_ROOT = path.resolve(__dirname, "..", "..", "..", "..");

export function formatSearchModeLabel(searchAdapter) {
  return searchAdapter?.mode === "sqlite" ? "SQLite FTS5" : "Memory";
}

export function createCatalogRuntime({
  repoRoot = DEFAULT_REPO_ROOT,
  searchMode = "",
} = {}) {
  const baseOptions = { repoRoot };
  const catalog = catalogCore.loadCatalog(baseOptions); // exposto para renderização (memoizado)
  const bundles = catalogCore.listBundles(baseOptions);
  const databasePath = catalogCore.resolveCatalogDatabaseFile(baseOptions);
  const requestedMode = String(
    searchMode || process.env.OMNI_SKILLS_SEARCH_ADAPTER || "auto",
  )
    .trim()
    .toLowerCase();
  const willUseSqlite =
    requestedMode !== "memory" && Boolean(databasePath) && fs.existsSync(databasePath);
  const searchAdapter = catalogCore.createSearchAdapter({
    ...baseOptions,
    searchMode,
    // Com DB presente, NÃO injeta o catálogo: deixa o SQLiteSearchAdapter usar o SQL
    // (BM25/porter/trigram) em vez de curto-circuitar para o scorer em memória.
    // catalogLoader mantém o fallback Memory funcional sem eager parse.
    catalog: willUseSqlite ? undefined : catalog,
    catalogLoader: () => catalogCore.loadCatalog(baseOptions),
    databasePath,
    manifestLoader: (skillId) => catalogCore.loadManifest(skillId, baseOptions),
  });

  return {
    core: catalogCore,
    catalog,
    bundles,
    searchAdapter,
    searchModeLabel: formatSearchModeLabel(searchAdapter),
    baseOptions,
    withSearch(options = {}) {
      return {
        ...baseOptions,
        ...options,
        searchAdapter,
      };
    },
    close() {
      searchAdapter.close?.();
    },
  };
}
