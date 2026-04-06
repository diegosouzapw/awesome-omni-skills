import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "catalog-core",
    environment: "node",
    include: ["__tests__/**/*.spec.js"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.js"],
      thresholds: {
        lines: 85,
        functions: 85,
        statements: 85,
        branches: 80,
      },
    },
  },
});
