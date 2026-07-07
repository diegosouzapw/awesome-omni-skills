import { describe, expect, test } from "vitest";
import { applyExpressHttpRuntime, createHttpCorsMiddleware, createHttpRuntimeMiddleware, getHttpRuntimeSnapshot, getHttpRuntimeConfig } from "../src/index.js";

describe("@omni-skills/http-core exports", () => {
  test("exposes the HTTP runtime middleware factories", () => {
    for (const fn of [applyExpressHttpRuntime, createHttpCorsMiddleware, createHttpRuntimeMiddleware, getHttpRuntimeSnapshot, getHttpRuntimeConfig]) {
      expect(typeof fn).toBe("function");
    }
  });
  test("createHttpRuntimeMiddleware returns a middleware function", () => {
    const mw = createHttpRuntimeMiddleware({ allowAnonymousPaths: ["/healthz"] });
    expect(typeof mw).toBe("function");
  });
});
