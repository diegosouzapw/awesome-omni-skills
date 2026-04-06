export const BRAND_LOGO = [
  "  ____                 _   _____ _    _ _ _     ",
  " / __ \\/___ ___  ____  (_) / ___/| | _(_) | |___ ",
  "/ / / / _ `__ \\/ __ \\/ /  \\__ \\ | |/ / | | / __|",
  "/ /_/ / / / / / / / / /  ___/ / |   <| | | \\__ \\",
  "\\____/_/ /_/_/ /_/_/ /_/  /____/  |_|\\_\\_|_|_|___/",
];

export const DEFAULT_TUI_THEME = "midnight-ice";

const baseLayout = {
  sidebarRatio: 0.56,
  contentRatio: 0.44,
  compactColumns: 96,
  minimalColumns: 72,
  wideColumns: 136,
};

export const TUI_THEMES = {
  "midnight-ice": {
    name: "midnight-ice",
    label: "Midnight Ice",
    colors: {
      primary: "#7dd3fc",
      accent: "#c084fc",
      success: "#4ade80",
      warning: "#fbbf24",
      error: "#fb7185",
      info: "#38bdf8",
      text: "#e2e8f0",
      textDim: "#94a3b8",
      subtle: "#64748b",
      border: "#334155",
      borderActive: "#7dd3fc",
      panelAlt: "#1e293b",
      panelMuted: "#0f172a",
      focusBg: "#0f172a",
    },
    layout: baseLayout,
  },
  ember: {
    name: "ember",
    label: "Ember",
    colors: {
      primary: "#f97316",
      accent: "#fb7185",
      success: "#84cc16",
      warning: "#facc15",
      error: "#ef4444",
      info: "#fb923c",
      text: "#f8fafc",
      textDim: "#cbd5e1",
      subtle: "#94a3b8",
      border: "#7c2d12",
      borderActive: "#fb923c",
      panelAlt: "#431407",
      panelMuted: "#1c1917",
      focusBg: "#431407",
    },
    layout: baseLayout,
  },
  forest: {
    name: "forest",
    label: "Forest",
    colors: {
      primary: "#34d399",
      accent: "#a3e635",
      success: "#4ade80",
      warning: "#fbbf24",
      error: "#f87171",
      info: "#2dd4bf",
      text: "#ecfdf5",
      textDim: "#bbf7d0",
      subtle: "#86efac",
      border: "#14532d",
      borderActive: "#34d399",
      panelAlt: "#052e16",
      panelMuted: "#022c22",
      focusBg: "#052e16",
    },
    layout: baseLayout,
  },
};

export function getTheme(name = DEFAULT_TUI_THEME) {
  return TUI_THEMES[name] || TUI_THEMES[DEFAULT_TUI_THEME];
}

export function toneColor(theme, tone = "neutral") {
  if (tone === "primary") {
    return theme.colors.primary;
  }
  if (tone === "accent") {
    return theme.colors.accent;
  }
  if (tone === "success") {
    return theme.colors.success;
  }
  if (tone === "warning") {
    return theme.colors.warning;
  }
  if (tone === "error") {
    return theme.colors.error;
  }
  if (tone === "info") {
    return theme.colors.info;
  }
  return theme.colors.border;
}

export function statusToneColor(theme, value = "") {
  const normalized = String(value || "").toLowerCase();
  if (normalized.includes("error") || normalized.includes("invalid")) {
    return theme.colors.error;
  }
  if (normalized.includes("warn") || normalized.includes("review")) {
    return theme.colors.warning;
  }
  if (normalized.includes("saved") || normalized.includes("ready") || normalized.includes("published")) {
    return theme.colors.success;
  }
  return theme.colors.info;
}
