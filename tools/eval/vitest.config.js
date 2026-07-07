import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "eval",
    environment: "node",
    include: ["__tests__/**/*.spec.js"],
  },
});
