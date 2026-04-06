import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      "./packages/catalog-core/vitest.config.js",
      "./packages/server-api/vitest.config.js",
      "./packages/server-mcp/vitest.config.js",
      "./packages/server-a2a/vitest.config.js",
      "./packages/cli/vitest.config.js",
    ],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/skills/**",
      "**/skills_omni/**",
    ],
  },
});
