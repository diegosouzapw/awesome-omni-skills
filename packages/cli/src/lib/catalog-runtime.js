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
  const catalog = catalogCore.loadCatalog(baseOptions);
  const bundles = catalogCore.listBundles(baseOptions);
  const searchAdapter = catalogCore.createSearchAdapter({
    ...baseOptions,
    searchMode,
    catalog,
    databasePath: catalogCore.resolveCatalogDatabaseFile(baseOptions),
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
