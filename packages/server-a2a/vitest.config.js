import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "server-a2a",
    environment: "node",
    include: ["__tests__/**/*.spec.js"],
    passWithNoTests: true,
  },
});
