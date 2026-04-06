import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "server-api",
    environment: "node",
    include: ["__tests__/**/*.spec.js"],
    passWithNoTests: true,
  },
});
