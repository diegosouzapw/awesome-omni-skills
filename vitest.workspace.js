import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "./packages/catalog-core/vitest.config.js",
  "./packages/server-api/vitest.config.js",
  "./packages/server-mcp/vitest.config.js",
  "./packages/server-a2a/vitest.config.js",
  "./packages/cli/vitest.config.js",
]);
