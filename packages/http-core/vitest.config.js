import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "http-core",
    environment: "node",
    include: ["__tests__/**/*.spec.js"],
  },
});
