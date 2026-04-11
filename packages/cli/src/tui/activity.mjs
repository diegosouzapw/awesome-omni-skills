import React from "react";
import { Static, Text } from "ink";
import { Panel } from "./layout.mjs";
import { getTheme, DEFAULT_TUI_THEME } from "./theme.mjs";
import { useTuiI18n } from "./i18n.mjs";

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
  const { t } = useTuiI18n();
  return h(
    Panel,
    { title: title || t("components.activity.sessionTitle"), theme, tone: "info" },
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
      : h(Text, { color: theme.colors.subtle }, emptyText || t("components.activity.sessionEmpty")),
  );
}

export function ProgressPanel({
  title = "Current progress",
  progress,
  theme = getTheme(DEFAULT_TUI_THEME),
  screenReaderEnabled = false,
}) {
  const { t } = useTuiI18n();
  if (!progress) {
    return h(
      Panel,
      { title: title || t("components.activity.progressTitle"), theme, tone: "accent" },
      h(Text, { color: theme.colors.subtle }, t("components.activity.progressEmpty")),
    );
  }

  const total = Number(progress.total || 0);
  const completed = Number(progress.completed || 0);
  const summary = progressBar(completed, total, screenReaderEnabled ? 12 : 22);

  return h(
    Panel,
    { title: title || t("components.activity.progressTitle"), theme, tone: "accent" },
    h(Text, { color: theme.colors.text }, progress.label || t("components.activity.preparingAction")),
    h(Text, { color: theme.colors.primary }, summary),
    progress.detail ? h(Text, { color: theme.colors.textDim }, progress.detail) : null,
    progress.nextStep ? h(Text, { color: theme.colors.subtle }, t("components.activity.nextStep", { value: progress.nextStep })) : null,
  );
}
