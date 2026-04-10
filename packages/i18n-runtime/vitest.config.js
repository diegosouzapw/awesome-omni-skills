import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  root: fileURLToPath(new URL("./", import.meta.url)),
  test: {
    include: ["__tests__/**/*.spec.js"],
    name: "i18n-runtime",
    environment: "node",
  },
});
