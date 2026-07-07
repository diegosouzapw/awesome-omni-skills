import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import {
  applyExpressHttpRuntime,
  createHttpCorsMiddleware,
  createHttpRuntimeMiddleware,
} from "@omni-skills/http-core";
import { OmniSkillsA2ARuntime } from "./task-runtime.js";

const PORT = Number.parseInt(process.env.PORT || "3335", 10);
const HOST = process.env.HOST || "127.0.0.1";
const DEFAULT_BASE_URL = process.env.BASE_URL || `http://${HOST}:${PORT}`;

function jsonRpcSuccess(id, result) {
  return { jsonrpc: "2.0", id, result };
}

function jsonRpcError(id, code, message, data) {
  return {
    jsonrpc: "2.0",
    id: id ?? null,
    error: {
      code,
      message,
      ...(data ? { data } : {}),
    },
  };
}

function sendRpcFailure(res, rpc, error, fallbackCode = -32603, fallbackStatus = 500) {
  const code = Number.isInteger(error?.code) ? error.code : fallbackCode;
  const status =
    code === -32600 || code === -32601 || code === -32602
      ? 400
      : code === -32001
        ? 404
        : code === -32002 || code === -32003 || code === -32004
          ? 409
          : fallbackStatus;

  res.status(status).json(
    jsonRpcError(rpc?.id, code, error?.message || "Failed to process request.", {
      ...(error?.name ? { name: error.name } : {}),
    }),
  );
}

export function createA2AApp({ runtime, baseUrl = DEFAULT_BASE_URL } = {}) {
  const app = express();
  const a2aRuntime = runtime || new OmniSkillsA2ARuntime({ baseUrl });

  applyExpressHttpRuntime(app);
  app.use(createHttpCorsMiddleware());
  app.use(express.json({ limit: "1mb" }));
  app.use(
    createHttpRuntimeMiddleware({
      allowAnonymousPaths: ["/healthz", "/.well-known/agent.json"],
    }),
  );

  app.get("/healthz", (_req, res) => {
    res.json(a2aRuntime.getHealthSnapshot());
  });

  app.get("/.well-known/agent.json", (_req, res) => {
    res.json(a2aRuntime.getAgentCard(baseUrl));
  });

  app.post("/a2a", async (req, res) => {
    const rpc = req.body;

  if (!rpc || rpc.jsonrpc !== "2.0" || typeof rpc.method !== "string") {
    sendRpcFailure(res, rpc, { code: -32600, message: "Invalid JSON-RPC request." }, -32600, 400);
    return;
  }

  try {
    switch (rpc.method) {
      case "message/send": {
        const payload = await a2aRuntime.handleMessageSend(rpc.params || {});
        res.json(jsonRpcSuccess(rpc.id, payload.result));
        return;
      }
      case "message/stream": {
        const payload = await a2aRuntime.handleMessageSend({
          ...(rpc.params || {}),
          configuration: {
            ...(rpc.params?.configuration || {}),
            blocking: false,
          },
        });
        a2aRuntime.createSseSubscriber(payload.task, req, res, rpc.id, {
          includeSnapshot: true,
          replayFrom: payload.task._sequence,
        });
        return;
      }
      case "tasks/get":
        res.json(jsonRpcSuccess(rpc.id, a2aRuntime.handleTasksGet(rpc.params || {})));
        return;
      case "tasks/cancel":
        res.json(jsonRpcSuccess(rpc.id, a2aRuntime.handleTasksCancel(rpc.params || {})));
        return;
      case "tasks/resubscribe": {
        const params = rpc.params || {};
        const task = a2aRuntime.getTask(params.id);
        if (!task) {
          throw Object.assign(new Error(`Task '${params.id}' was not found.`), { code: -32001 });
        }

        const replayFromHeader = req.header("last-event-id");
        const replayFromMetadata =
          params.metadata?.lastEventId ??
          params.metadata?.last_event_id ??
          params.metadata?.sequence;
        const replayFrom = Number.parseInt(String(replayFromHeader ?? replayFromMetadata ?? ""), 10);
        a2aRuntime.createSseSubscriber(task, req, res, rpc.id, {
          includeSnapshot: !Number.isFinite(replayFrom),
          replayFrom: Number.isFinite(replayFrom) ? replayFrom : task._sequence,
        });
        return;
      }
      case "tasks/pushNotificationConfig/set":
        res.json(jsonRpcSuccess(rpc.id, a2aRuntime.setPushNotificationConfig(rpc.params || {})));
        return;
      case "tasks/pushNotificationConfig/get":
        res.json(jsonRpcSuccess(rpc.id, a2aRuntime.getPushNotificationConfig(rpc.params || {})));
        return;
      case "tasks/pushNotificationConfig/list":
        res.json(jsonRpcSuccess(rpc.id, a2aRuntime.listPushNotificationConfigs(rpc.params || {})));
        return;
      case "tasks/pushNotificationConfig/delete":
        res.json(jsonRpcSuccess(rpc.id, a2aRuntime.deletePushNotificationConfig(rpc.params || {})));
        return;
      default:
        sendRpcFailure(
          res,
          rpc,
          { code: -32601, message: `Method '${rpc.method}' is not implemented.` },
          -32601,
          404,
        );
    }
  } catch (error) {
    sendRpcFailure(res, rpc, error);
  }
  });

  return app;
}

function startServer() {
  const app = createA2AApp();
  app.listen(PORT, HOST, () => {
    console.log(`Awesome Omni Skills A2A server listening at ${DEFAULT_BASE_URL}`);
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  startServer();
}
