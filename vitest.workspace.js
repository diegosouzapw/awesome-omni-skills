import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "./packages/http-core/vitest.config.js",
  "./packages/shared-fs/vitest.config.js",
  "./packages/catalog-core/vitest.config.js",
  "./packages/server-api/vitest.config.js",
  "./packages/server-mcp/vitest.config.js",
  "./packages/server-a2a/vitest.config.js",
  "./packages/cli/vitest.config.js",
]);
