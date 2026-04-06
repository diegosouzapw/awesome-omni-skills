import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "server-mcp",
    environment: "node",
    include: ["__tests__/**/*.spec.js"],
    passWithNoTests: true,
  },
});
