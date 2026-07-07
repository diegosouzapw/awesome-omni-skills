import { randomUUID } from "node:crypto";
import { describe, expect, test } from "vitest";
import { OmniSkillsA2ARuntime } from "../src/task-runtime.js";

function buildMessage(text, extra = {}) {
  return {
    kind: "message",
    role: "user",
    parts: [{ kind: "text", text }],
    messageId: randomUUID(),
    ...extra,
  };
}

// A fresh runtime per test: persistence and the coordination queue are disabled so
// tests exercise the in-memory task map directly, with no disk/network side effects.
function createRuntime(overrides = {}) {
  return new OmniSkillsA2ARuntime({
    persistenceEnabled: false,
    queueEnabled: false,
    ...overrides,
  });
}

describe("OmniSkillsA2ARuntime message/send task creation", () => {
  test("creates a task and completes it synchronously when blocking", async () => {
    const runtime = createRuntime();
    const message = buildMessage("figma", { metadata: { operation: "discover-skills" } });

    const { result } = await runtime.handleMessageSend({
      message,
      configuration: { blocking: true },
    });

    expect(result.kind).toBe("task");
    expect(typeof result.id).toBe("string");
    expect(result.id.length).toBeGreaterThan(0);
    // A real (non-mocked) catalog search ran; the task reaches a terminal state.
    expect(result.status.state).toBe("completed");
    expect(result.artifacts).toHaveLength(1);
    expect(result.metadata.operation).toBe("discover-skills");
  });

  test("rejects an unsupported operation", async () => {
    const runtime = createRuntime();
    const message = buildMessage("anything", { metadata: { operation: "not-a-real-operation" } });

    const { result } = await runtime.handleMessageSend({
      message,
      configuration: { blocking: true },
    });

    expect(result.status.state).toBe("rejected");
    expect(result.status.message.parts[0].text).toContain("not-a-real-operation");
  });

  test("returns input-required when discover-skills is missing a query, without touching async processing", async () => {
    const runtime = createRuntime();
    const message = buildMessage("", { metadata: { operation: "discover-skills" } });

    const { result } = await runtime.handleMessageSend({ message });

    expect(result.status.state).toBe("input-required");
    // input-required is an interrupted (non-terminal) state, evaluated synchronously
    // before any timer/executor work is scheduled.
  });

  test("continuing a task with a taskId merges input instead of creating a new task", async () => {
    const runtime = createRuntime();
    const first = await runtime.handleMessageSend({
      message: buildMessage("", { metadata: { operation: "discover-skills" } }),
    });
    expect(first.result.status.state).toBe("input-required");
    const taskId = first.result.id;

    const second = await runtime.handleMessageSend({
      message: buildMessage("figma", { taskId }),
      configuration: { blocking: true },
    });

    expect(second.result.id).toBe(taskId);
    expect(second.result.status.state).toBe("completed");
    expect(second.result.metadata.input.query).toBe("figma");
  });

  test("rejects continuing a task that already reached a terminal state (-32002)", async () => {
    const runtime = createRuntime();
    const created = await runtime.handleMessageSend({
      message: buildMessage("figma", { metadata: { operation: "discover-skills" } }),
      configuration: { blocking: true },
    });
    expect(created.result.status.state).toBe("completed");
    const taskId = created.result.id;

    await expect(
      runtime.handleMessageSend({
        message: buildMessage("more", { taskId }),
      }),
    ).rejects.toMatchObject({ code: -32002 });
  });

  test("rejects a message that is not a valid A2A message (-32602)", async () => {
    const runtime = createRuntime();
    await expect(runtime.handleMessageSend({})).rejects.toMatchObject({ code: -32602 });
    await expect(
      runtime.handleMessageSend({ message: { kind: "not-a-message" } }),
    ).rejects.toMatchObject({ code: -32602 });
  });

  test("rejects a message referencing an unknown taskId (-32001)", async () => {
    const runtime = createRuntime();
    await expect(
      runtime.handleMessageSend({ message: buildMessage("hi", { taskId: "does-not-exist" }) }),
    ).rejects.toMatchObject({ code: -32001 });
  });
});

describe("OmniSkillsA2ARuntime tasks/get", () => {
  test("returns the task snapshot for a known id", async () => {
    const runtime = createRuntime();
    const created = await runtime.handleMessageSend({
      message: buildMessage("figma", { metadata: { operation: "discover-skills" } }),
      configuration: { blocking: true },
    });
    const taskId = created.result.id;

    const fetched = runtime.handleTasksGet({ id: taskId });

    expect(fetched.id).toBe(taskId);
    expect(fetched.status.state).toBe("completed");
  });

  test("honors historyLength to bound the returned history", async () => {
    const runtime = createRuntime();
    const created = await runtime.handleMessageSend({
      message: buildMessage("figma", { metadata: { operation: "discover-skills" } }),
      configuration: { blocking: true },
    });
    const taskId = created.result.id;

    const withoutHistory = runtime.handleTasksGet({ id: taskId });
    expect(withoutHistory.history).toBeUndefined();

    const withHistory = runtime.handleTasksGet({ id: taskId, historyLength: 1 });
    expect(Array.isArray(withHistory.history)).toBe(true);
    expect(withHistory.history.length).toBeLessThanOrEqual(1);
  });

  test("throws -32001 for an unknown task id", () => {
    const runtime = createRuntime();
    expect(() => runtime.handleTasksGet({ id: "does-not-exist" })).toThrowError(
      expect.objectContaining({ code: -32001 }),
    );
  });
});

describe("OmniSkillsA2ARuntime tasks/cancel", () => {
  test("cancels a task that has not reached a terminal state yet", async () => {
    // A very large processing delay keeps the task in "submitted" long enough to cancel it
    // deterministically; handleTasksCancel clears the pending timer as part of cancellation.
    const runtime = createRuntime({ processingDelayMs: 10_000_000 });
    const created = await runtime.handleMessageSend({
      message: buildMessage("figma", { metadata: { operation: "discover-skills" } }),
    });
    expect(created.result.status.state).toBe("submitted");
    const taskId = created.result.id;

    const canceled = runtime.handleTasksCancel({ id: taskId });

    expect(canceled.status.state).toBe("canceled");
    expect(canceled.status.message.parts[0].text).toContain("Canceled");

    // The scheduled executor timer must have been cleared: fetching again afterwards
    // still reflects the canceled (terminal) state.
    const fetched = runtime.handleTasksGet({ id: taskId });
    expect(fetched.status.state).toBe("canceled");
  });

  test("throws -32003 when canceling a task that already reached a terminal state", async () => {
    const runtime = createRuntime();
    const created = await runtime.handleMessageSend({
      message: buildMessage("figma", { metadata: { operation: "discover-skills" } }),
      configuration: { blocking: true },
    });
    const taskId = created.result.id;
    expect(created.result.status.state).toBe("completed");

    expect(() => runtime.handleTasksCancel({ id: taskId })).toThrowError(
      expect.objectContaining({ code: -32003 }),
    );
  });

  test("throws -32001 for an unknown task id", () => {
    const runtime = createRuntime();
    expect(() => runtime.handleTasksCancel({ id: "does-not-exist" })).toThrowError(
      expect.objectContaining({ code: -32001 }),
    );
  });
});

describe("OmniSkillsA2ARuntime push notification config", () => {
  async function createCompletedTask(runtime) {
    const created = await runtime.handleMessageSend({
      message: buildMessage("figma", { metadata: { operation: "discover-skills" } }),
      configuration: { blocking: true },
    });
    return created.result.id;
  }

  test("set then get returns the configuration that was stored", async () => {
    const runtime = createRuntime();
    const taskId = await createCompletedTask(runtime);

    const set = runtime.setPushNotificationConfig({
      taskId,
      url: "https://example.com/webhook",
      token: "secret-token",
    });
    expect(set.taskId).toBe(taskId);
    expect(set.url).toBe("https://example.com/webhook");
    expect(set.token).toBe("secret-token");

    const fetched = runtime.getPushNotificationConfig({ taskId });
    expect(fetched).toEqual(set);
  });

  test("list reflects every stored configuration", async () => {
    const runtime = createRuntime();
    const taskId = await createCompletedTask(runtime);

    runtime.setPushNotificationConfig({ taskId, id: "one", url: "https://one.example.com/hook" });
    runtime.setPushNotificationConfig({ taskId, id: "two", url: "https://two.example.com/hook" });

    const configs = runtime.listPushNotificationConfigs({ taskId });
    expect(configs.map((config) => config.id).sort()).toEqual(["one", "two"]);
  });

  test("delete removes only the requested configuration", async () => {
    const runtime = createRuntime();
    const taskId = await createCompletedTask(runtime);
    runtime.setPushNotificationConfig({ taskId, id: "one", url: "https://one.example.com/hook" });
    runtime.setPushNotificationConfig({ taskId, id: "two", url: "https://two.example.com/hook" });

    const deletion = runtime.deletePushNotificationConfig({ taskId, pushNotificationId: "one" });
    expect(deletion).toEqual({ deleted: true, taskId, pushNotificationId: "one" });

    const remaining = runtime.listPushNotificationConfigs({ taskId });
    expect(remaining.map((config) => config.id)).toEqual(["two"]);
  });

  test("delete without an id removes the first configuration (shift semantics)", async () => {
    const runtime = createRuntime();
    const taskId = await createCompletedTask(runtime);
    runtime.setPushNotificationConfig({ taskId, id: "one", url: "https://one.example.com/hook" });
    runtime.setPushNotificationConfig({ taskId, id: "two", url: "https://two.example.com/hook" });

    const deletion = runtime.deletePushNotificationConfig({ taskId });
    expect(deletion.pushNotificationId).toBe("one");
    expect(runtime.listPushNotificationConfigs({ taskId }).map((c) => c.id)).toEqual(["two"]);
  });

  test("deleting a config that does not exist reports deleted: false", async () => {
    const runtime = createRuntime();
    const taskId = await createCompletedTask(runtime);
    runtime.setPushNotificationConfig({ taskId, id: "one", url: "https://one.example.com/hook" });

    const deletion = runtime.deletePushNotificationConfig({ taskId, pushNotificationId: "does-not-exist" });
    expect(deletion.deleted).toBe(false);
    // Nothing was removed: "one" is still present.
    expect(runtime.listPushNotificationConfigs({ taskId }).map((c) => c.id)).toEqual(["one"]);
  });

  test("SURPRISING: getting a config by a stale/unknown id silently falls back to the first stored config", async () => {
    // getPushNotificationConfig's lookup is:
    //   (requestedId && configs.find(id === requestedId)) || configs[0] || null
    // When requestedId doesn't match anything, `find` returns undefined, and the
    // expression falls through to configs[0] instead of raising -32004. This means a
    // caller asking for a specific (now-deleted or mistyped) notification id can
    // silently receive a *different* config rather than an error. Documented and
    // asserted here as real, current behavior rather than "fixed" as a bug, since it
    // is plausibly intentional single-config-per-task convenience behavior and the
    // task description asks not to change defensible-but-surprising behavior.
    const runtime = createRuntime();
    const taskId = await createCompletedTask(runtime);
    runtime.setPushNotificationConfig({ taskId, id: "two", url: "https://two.example.com/hook" });

    const fetched = runtime.getPushNotificationConfig({ taskId, pushNotificationId: "one" });
    expect(fetched.id).toBe("two");
  });

  test("getting a config throws -32004 when the task has none", async () => {
    const runtime = createRuntime();
    const taskId = await createCompletedTask(runtime);

    expect(() => runtime.getPushNotificationConfig({ taskId })).toThrowError(
      expect.objectContaining({ code: -32004 }),
    );
  });

  test("rejects insecure (non-HTTPS, non-local) webhook URLs", async () => {
    const runtime = createRuntime();
    const taskId = await createCompletedTask(runtime);

    expect(() =>
      runtime.setPushNotificationConfig({ taskId, url: "http://malicious.example.com/hook" }),
    ).toThrowError(/HTTPS/);
  });

  test("accepts insecure http URLs pointed at localhost", async () => {
    const runtime = createRuntime();
    const taskId = await createCompletedTask(runtime);

    const config = runtime.setPushNotificationConfig({ taskId, url: "http://127.0.0.1:4000/hook" });
    expect(config.url).toBe("http://127.0.0.1:4000/hook");
  });

  test("throws -32001 for any push config operation on an unknown task", () => {
    const runtime = createRuntime();
    expect(() =>
      runtime.setPushNotificationConfig({ taskId: "does-not-exist", url: "https://example.com/hook" }),
    ).toThrowError(expect.objectContaining({ code: -32001 }));
    expect(() => runtime.getPushNotificationConfig({ taskId: "does-not-exist" })).toThrowError(
      expect.objectContaining({ code: -32001 }),
    );
    expect(() => runtime.listPushNotificationConfigs({ taskId: "does-not-exist" })).toThrowError(
      expect.objectContaining({ code: -32001 }),
    );
    expect(() => runtime.deletePushNotificationConfig({ taskId: "does-not-exist" })).toThrowError(
      expect.objectContaining({ code: -32001 }),
    );
  });
});
