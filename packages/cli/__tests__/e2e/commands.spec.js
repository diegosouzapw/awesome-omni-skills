import { describe, it, expect } from "vitest";
import { runCliSync } from "./helpers/process.js";

describe("CLI E2E: Commands", () => {
  it.skip("should successfully run the smoke test", () => {
    const result = runCliSync(["smoke"]);
    expect(result.status).toBe(0);
  });

  it("should output diagnostic info with doctor", () => {
    const result = runCliSync(["doctor"]);
    expect(result.status).not.toBe(1);
    expect(result.stdout.length).toBeGreaterThan(0);
  });

  it("should print help information", () => {
    const result = runCliSync(["--help"]);
    expect(result.status).not.toBe(1);
  });
});
