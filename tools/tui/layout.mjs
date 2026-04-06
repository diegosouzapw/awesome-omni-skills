import React from "react";
import { Box, Text } from "ink";
import { BRAND_LOGO, DEFAULT_TUI_THEME, getTheme, statusToneColor, toneColor } from "./theme.mjs";

const h = React.createElement;

export function resolveViewport(theme = getTheme(DEFAULT_TUI_THEME), options = {}) {
  const columns = Number(process.stdout.columns || 120);
  const forcedCompact = Boolean(options.compactMode);
  const screenReaderEnabled = Boolean(options.screenReaderEnabled);
  const narrow = forcedCompact || screenReaderEnabled || columns < 96;
  const minimal = screenReaderEnabled || columns < 72;
  const wide = !narrow && columns >= 136;
  return {
    columns,
    narrow,
    minimal,
    wide,
    sidebarWidth: narrow ? "100%" : wide ? "54%" : "58%",
    detailWidth: narrow ? "100%" : wide ? "46%" : "42%",
    showLogo: !screenReaderEnabled,
    theme,
  };
}

export function Badge({ label, tone = "neutral", theme = getTheme(DEFAULT_TUI_THEME) }) {
  return h(
    Text,
    {
      color: toneColor(theme, tone),
    },
    `[${label}]`,
  );
}

export function BadgeRow({ items = [], theme = getTheme(DEFAULT_TUI_THEME) }) {
  if (!items.length) {
    return null;
  }

  return h(
    Box,
    { flexWrap: "wrap", marginTop: 1, marginBottom: 1 },
    ...items.map((item, index) =>
      h(
        Box,
        { key: `${item}-${index}`, marginRight: 1 },
        h(Badge, { label: item, tone: "info", theme }),
      ),
    ),
  );
}

export function Panel({
  title,
  children,
  theme = getTheme(DEFAULT_TUI_THEME),
  tone = "neutral",
  marginBottom = 1,
  active = false,
  minimal = false,
  label = "",
}) {
  const borderColor = active ? theme.colors.borderActive : toneColor(theme, tone);
  return h(
    Box,
    {
      flexDirection: "column",
      borderStyle: minimal ? undefined : "round",
      borderColor,
      paddingX: minimal ? 0 : 1,
      paddingY: 0,
      marginBottom,
      "aria-label": label || title || undefined,
    },
    title
      ? h(
          Text,
          { color: active ? theme.colors.primary : toneColor(theme, tone), bold: true },
          title,
        )
      : null,
    children,
  );
}

export function Header({
  title,
  subtitle,
  status,
  theme = getTheme(DEFAULT_TUI_THEME),
  metrics = [],
  screenReaderEnabled = false,
  compactMode = false,
}) {
  const viewport = resolveViewport(theme, { screenReaderEnabled, compactMode });
  return h(
    Box,
    { flexDirection: "column", marginBottom: 1 },
    h(
      Box,
      {
        flexDirection: viewport.narrow ? "column" : "row",
        justifyContent: "space-between",
      },
      h(
        Box,
        { flexDirection: "column", width: viewport.narrow ? "100%" : "58%" },
        viewport.showLogo ? h(Text, { color: theme.colors.primary }, BRAND_LOGO.join("\n")) : null,
        h(Text, { color: theme.colors.text, bold: true }, title),
        subtitle ? h(Text, { color: theme.colors.textDim }, subtitle) : null,
      ),
      h(
        Box,
        {
          flexDirection: "column",
          width: viewport.narrow ? "100%" : "42%",
          alignItems: viewport.narrow ? "flex-start" : "flex-end",
          marginTop: viewport.narrow ? 1 : 0,
        },
        metrics.length
          ? metrics.map((metric) =>
              h(
                Text,
                {
                  key: metric.label,
                  color: metric.tone ? toneColor(theme, metric.tone) : theme.colors.textDim,
                },
                `${metric.label}: ${metric.value}`,
              ),
            )
          : h(Text, { color: theme.colors.textDim }, `Theme: ${theme.label}`),
        status
          ? h(Text, { color: statusToneColor(theme, status) }, status)
          : h(Text, { color: theme.colors.subtle }, `Visual shell: ${theme.label}`),
      ),
    ),
  );
}

export function StatusBar({
  theme = getTheme(DEFAULT_TUI_THEME),
  left,
  center = "",
  right = "",
  minimal = false,
}) {
  return h(
    Box,
    {
      flexDirection: minimal ? "column" : "row",
      justifyContent: minimal ? "flex-start" : "space-between",
      borderStyle: minimal ? undefined : "round",
      borderColor: theme.colors.border,
      paddingX: minimal ? 0 : 1,
      marginTop: 1,
      "aria-label": "Status bar",
    },
    h(Text, { color: theme.colors.textDim }, left || ""),
    center ? h(Text, { color: theme.colors.subtle }, center) : null,
    right ? h(Text, { color: theme.colors.textDim }, right) : null,
  );
}

export function Screen({
  title,
  subtitle,
  status,
  footer,
  footerCenter = "",
  footerRight = "",
  children,
  theme = getTheme(DEFAULT_TUI_THEME),
  metrics = [],
  screenReaderEnabled = false,
  compactMode = false,
}) {
  const viewport = resolveViewport(theme, { screenReaderEnabled, compactMode });
  return h(
    Box,
    { flexDirection: "column", paddingX: 1, paddingY: 0, "aria-label": title },
    h(Header, {
      title,
      subtitle,
      status,
      theme,
      metrics,
      screenReaderEnabled,
      compactMode,
    }),
    children,
    footer
      ? h(StatusBar, {
          theme,
          left: footer,
          center: footerCenter,
          right: footerRight,
          minimal: viewport.minimal,
        })
      : null,
  );
}

export function SplitLayout({
  sidebar,
  detail,
  theme = getTheme(DEFAULT_TUI_THEME),
  screenReaderEnabled = false,
  compactMode = false,
}) {
  const viewport = resolveViewport(theme, { screenReaderEnabled, compactMode });
  return h(
    Box,
    { flexDirection: viewport.narrow ? "column" : "row", gap: viewport.narrow ? 0 : 2 },
    h(Box, { flexDirection: "column", width: viewport.sidebarWidth }, sidebar),
    h(Box, { flexDirection: "column", width: viewport.detailWidth }, detail),
  );
}

export function EmptyState({
  title,
  text,
  hint = "",
  theme = getTheme(DEFAULT_TUI_THEME),
  tone = "info",
}) {
  return h(
    Panel,
    { title, theme, tone },
    h(Text, { color: theme.colors.text }, text),
    hint ? h(Text, { color: theme.colors.subtle }, hint) : null,
  );
}

export function DetailPanel({
  item,
  theme = getTheme(DEFAULT_TUI_THEME),
  emptyTitle = "Focus an action",
  emptyText = "Use the arrow keys to preview an action before running it.",
}) {
  if (!item) {
    return h(
      Box,
      { flexDirection: "column" },
      h(Text, { color: theme.colors.primary, bold: true }, emptyTitle),
      h(Text, { color: theme.colors.textDim }, emptyText),
      h(Text, { color: theme.colors.subtle }, "Enter to continue • Esc to return"),
    );
  }

  const detailLines = []
    .concat(item.badges || [])
    .concat(item.detailLines || [])
    .filter(Boolean);

  return h(
    Box,
    { flexDirection: "column" },
    h(
      Text,
      { color: item.tone ? toneColor(theme, item.tone) : theme.colors.primary, bold: true },
      item.detailTitle || item.label,
    ),
    item.description ? h(Text, { color: theme.colors.text }, item.description) : null,
    item.detailText ? h(Text, { color: theme.colors.textDim }, item.detailText) : null,
    h(BadgeRow, { items: item.badges || [], theme }),
    detailLines.length
      ? detailLines.map((line, index) =>
          h(Text, { key: `${item.id || item.label}-detail-${index}`, color: theme.colors.textDim }, `${index + 1}. ${line}`),
        )
      : h(Text, { color: theme.colors.subtle }, "No extra detail for this action yet."),
  );
}

export function SummaryPanel({ lines, theme = getTheme(DEFAULT_TUI_THEME), title = "Preview", tone = "primary" }) {
  return h(
    Panel,
    { title, theme, tone },
    ...lines.map((line, index) =>
      h(Text, { key: String(index), color: line.color || theme.colors.text }, `${line.label}: ${line.value}`),
    ),
  );
}

export function StepRail({
  steps = [],
  theme = getTheme(DEFAULT_TUI_THEME),
  title = "Flow steps",
  currentId = "",
}) {
  return h(
    Panel,
    { title, theme, tone: "info" },
    ...(steps.length
      ? steps.map((step, index) => {
          const status = step.status || (step.id === currentId ? "current" : "pending");
          const marker =
            status === "completed" ? "✓" : status === "current" || status === "running" ? "→" : status === "error" ? "!" : "·";
          const color =
            status === "completed"
              ? theme.colors.success
              : status === "error"
                ? theme.colors.error
                : status === "current" || status === "running"
                  ? theme.colors.primary
                  : theme.colors.textDim;
          return h(
            Text,
            { key: step.id || String(index), color },
            `${marker} ${index + 1}. ${step.label}`,
          );
        })
      : [h(Text, { key: "empty", color: theme.colors.subtle }, "No steps registered.")]),
  );
}

export function TextPreviewPanel({
  title,
  text,
  color,
  maxLines = 18,
  theme = getTheme(DEFAULT_TUI_THEME),
  tone = "accent",
}) {
  const lines = String(text || "")
    .split("\n")
    .filter(Boolean)
    .slice(0, maxLines);

  return h(
    Panel,
    { title, theme, tone },
    ...(lines.length > 0
      ? lines.map((line, index) => h(Text, { key: `${title}-${index}`, color: color || theme.colors.text }, line))
      : [h(Text, { key: `${title}-empty`, color: theme.colors.subtle }, "No preview available.")]),
  );
}
