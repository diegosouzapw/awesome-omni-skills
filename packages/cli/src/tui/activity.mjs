import React from "react";
import { Static, Text } from "ink";
import { Panel } from "./layout.mjs";
import { getTheme, DEFAULT_TUI_THEME } from "./theme.mjs";

const h = React.createElement;

function progressBar(completed, total, width = 20) {
  if (!total || total <= 0) {
    return `${"·".repeat(width)} 0/0`;
  }
  const ratio = Math.max(0, Math.min(1, completed / total));
  const filled = Math.round(ratio * width);
  return `${"█".repeat(filled)}${"·".repeat(Math.max(0, width - filled))} ${completed}/${total}`;
}

export function ActivityFeed({
  items = [],
  theme = getTheme(DEFAULT_TUI_THEME),
  title = "Session activity",
  emptyText = "No session activity yet.",
}) {
  return h(
    Panel,
    { title, theme, tone: "info" },
    items.length
      ? h(
          Static,
          { items },
          (item) =>
            h(
              Text,
              {
                key: item.id,
                color:
                  item.tone === "error"
                    ? theme.colors.error
                    : item.tone === "warning"
                      ? theme.colors.warning
                      : item.tone === "success"
                        ? theme.colors.success
                        : theme.colors.textDim,
              },
              `${item.timestamp || ""} ${item.label}`.trim(),
            ),
        )
      : h(Text, { color: theme.colors.subtle }, emptyText),
  );
}

export function ProgressPanel({
  title = "Current progress",
  progress,
  theme = getTheme(DEFAULT_TUI_THEME),
  screenReaderEnabled = false,
}) {
  if (!progress) {
    return h(
      Panel,
      { title, theme, tone: "accent" },
      h(Text, { color: theme.colors.subtle }, "No active progress event."),
    );
  }

  const total = Number(progress.total || 0);
  const completed = Number(progress.completed || 0);
  const summary = progressBar(completed, total, screenReaderEnabled ? 12 : 22);

  return h(
    Panel,
    { title, theme, tone: "accent" },
    h(Text, { color: theme.colors.text }, progress.label || "Preparing action"),
    h(Text, { color: theme.colors.primary }, summary),
    progress.detail ? h(Text, { color: theme.colors.textDim }, progress.detail) : null,
    progress.nextStep ? h(Text, { color: theme.colors.subtle }, `Next: ${progress.nextStep}`) : null,
  );
}
