import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useFocus, useFocusManager, useInput } from "ink";
import TextInput from "ink-text-input";
import { Panel, Screen, SplitLayout } from "./layout.mjs";
import { DEFAULT_TUI_THEME, getTheme } from "./theme.mjs";

const h = React.createElement;

function clampLine(value, maxLength = 120) {
  const normalized = String(value || "").replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }
  return `${normalized.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}

function terminalSafeWidth(fallback = 120) {
  return Math.max(48, Number(process.stdout?.columns || fallback));
}

function commandLineLimit(offset = 0) {
  return Math.max(24, terminalSafeWidth() - offset);
}

function slugifyCommandSegment(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeSlashInput(value) {
  return String(value || "").replace(/\s+/g, " ").trimStart();
}

function resolveItemCommand(item) {
  if (item?.command) {
    return String(item.command).startsWith("/") ? String(item.command) : `/${String(item.command)}`;
  }
  const fromLabel = slugifyCommandSegment(item?.label || "");
  return fromLabel ? `/${fromLabel}` : "/command";
}

function slashSearchTokens(item) {
  const command = resolveItemCommand(item).replace(/^\//, "");
  const aliases = Array.isArray(item?.aliases) ? item.aliases : [];
  return [command, ...aliases.map((entry) => slugifyCommandSegment(entry))]
    .filter(Boolean);
}

function filterSlashCommandItems(items, rawQuery) {
  const normalized = normalizeSlashInput(rawQuery);
  if (!normalized.startsWith("/")) {
    return [];
  }
  const query = normalized.slice(1).trim().toLowerCase();
  if (!query) {
    return items;
  }
  return items.filter((item) =>
    slashSearchTokens(item).some((token) => token.startsWith(query)),
  );
}

function visibleWindow(items, index, pageSize) {
  if (items.length <= pageSize) {
    return { start: 0, end: items.length };
  }
  const half = Math.floor(pageSize / 2);
  const maxStart = Math.max(0, items.length - pageSize);
  const start = Math.max(0, Math.min(index - half, maxStart));
  return { start, end: Math.min(items.length, start + pageSize) };
}

export function SelectMenu({
  items,
  onSelect,
  onBack,
  onHighlight,
  theme = getTheme(DEFAULT_TUI_THEME),
  focusId = "select-menu",
  autoFocus = true,
  pageSize = 10,
  label = "Selection menu",
  footerNote = "",
  allowUnfocusedNumericShortcuts = false,
  numericShortcuts = true,
}) {
  const focusManager = useFocusManager();
  const { isFocused } = useFocus({ id: focusId, autoFocus });
  const [index, setIndex] = useState(0);
  const itemSignature = useMemo(
    () => items.map((item) => item.id || item.value || item.label || "").join("|"),
    [items],
  );

  useEffect(() => {
    if (index >= items.length) {
      setIndex(0);
    }
  }, [index, items.length]);

  useEffect(() => {
    setIndex(0);
  }, [focusId, itemSignature]);

  useEffect(() => {
    if (autoFocus) {
      focusManager.focus(focusId);
    }
  }, [autoFocus, focusId, focusManager, itemSignature]);

  useEffect(() => {
    onHighlight?.(items[index] || null);
  }, [index, items, onHighlight]);

  useInput((input, key) => {
    if (items.length === 0) {
      return;
    }
    if (
      numericShortcuts &&
      input >= "1" &&
      input <= "9" &&
      (isFocused || allowUnfocusedNumericShortcuts)
    ) {
      const target = Number.parseInt(input, 10) - 1;
      if (items[target]) {
        setIndex(target);
        onSelect(items[target]);
      }
      return;
    }
    if (!isFocused) {
      return;
    }
    if (key.upArrow) {
      setIndex((current) => (current <= 0 ? items.length - 1 : current - 1));
      return;
    }
    if (key.downArrow) {
      setIndex((current) => (current >= items.length - 1 ? 0 : current + 1));
      return;
    }
    if (key.pageUp) {
      setIndex((current) => Math.max(0, current - pageSize));
      return;
    }
    if (key.pageDown) {
      setIndex((current) => Math.min(items.length - 1, current + pageSize));
      return;
    }
    if (key.home) {
      setIndex(0);
      return;
    }
    if (key.end) {
      setIndex(items.length - 1);
      return;
    }
    if (key.return) {
      onSelect(items[index]);
      return;
    }
    if (key.escape && onBack) {
      onBack();
      return;
    }
  });

  const { start, end } = visibleWindow(items, index, pageSize);
  const windowedItems = items.slice(start, end);

  return h(
    Box,
    { flexDirection: "column", "aria-label": label },
    ...windowedItems.map((item, itemIndex) => {
      const absoluteIndex = start + itemIndex;
      const previous = items[absoluteIndex - 1];
      const showSection = item.section && previous?.section !== item.section;
      const selected = absoluteIndex === index;
      return h(
        Box,
        {
          key: item.id || item.value || String(absoluteIndex),
          flexDirection: "column",
          marginBottom: absoluteIndex === end - 1 ? 0 : 1,
        },
        showSection ? h(Text, { color: theme.colors.subtle }, item.section.toUpperCase()) : null,
        h(
          Text,
          {
            color: selected ? theme.colors.primary : theme.colors.text,
            backgroundColor: selected ? theme.colors.panelAlt : undefined,
            bold: selected,
          },
          clampLine(`${selected ? (isFocused ? "❯" : "•") : " "} ${absoluteIndex + 1}. ${item.label}`, commandLineLimit(8)),
        ),
        item.meta
          ? h(Text, { color: theme.colors.subtle }, clampLine(`    ${item.meta}`, commandLineLimit(8)))
          : null,
        item.description
          ? h(Text, { color: theme.colors.textDim }, clampLine(`    ${item.description}`, commandLineLimit(8)))
          : null,
      );
    }),
    h(
      Text,
      { color: isFocused ? theme.colors.primary : theme.colors.subtle },
      clampLine(`Showing ${items.length === 0 ? 0 : start + 1}-${end} of ${items.length}${footerNote ? ` • ${footerNote}` : ""}`, commandLineLimit(4)),
    ),
  );
}

export function MenuScreen({
  title,
  subtitle,
  items,
  onSelect,
  onBack,
  status,
  footer,
  theme = getTheme(DEFAULT_TUI_THEME),
  metrics = [],
  screenReaderEnabled = false,
  compactMode = false,
  pageSize = 10,
  numericShortcuts = true,
  commandPlaceholder = "/command",
}) {
  const focusManager = useFocusManager();
  const { isFocused } = useFocus({ id: "menu-command-input", autoFocus: true });
  const [rawQuery, setRawQuery] = useState("/");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const filteredItems = useMemo(() => filterSlashCommandItems(items, rawQuery), [items, rawQuery]);
  const activeItems = rawQuery.startsWith("/") ? filteredItems : [];
  const activeItem = activeItems[selectedIndex] || null;
  const { start, end } = visibleWindow(activeItems, selectedIndex, pageSize);
  const windowedItems = activeItems.slice(start, end);

  useEffect(() => {
    if (selectedIndex >= activeItems.length) {
      setSelectedIndex(0);
    }
  }, [activeItems.length, selectedIndex]);

  useEffect(() => {
    setRawQuery("/");
    setSelectedIndex(0);
  }, [items, title]);

  useEffect(() => {
    focusManager.focus("menu-command-input");
  }, [focusManager, title]);

  useInput((input, key) => {
    const numericPool = rawQuery.startsWith("/") ? activeItems : items;
    if (
      numericShortcuts &&
      input >= "1" &&
      input <= "9"
    ) {
      const target = Number.parseInt(input, 10) - 1;
      if (numericPool[target]) {
        onSelect(numericPool[target]);
      }
      return;
    }
    if (!isFocused) {
      if (key.escape && onBack) {
        onBack();
      }
      return;
    }
    if (key.upArrow && activeItems.length) {
      setSelectedIndex((current) => (current <= 0 ? activeItems.length - 1 : current - 1));
      return;
    }
    if (key.downArrow && activeItems.length) {
      setSelectedIndex((current) => (current >= activeItems.length - 1 ? 0 : current + 1));
      return;
    }
    if (key.pageUp && activeItems.length) {
      setSelectedIndex((current) => Math.max(0, current - pageSize));
      return;
    }
    if (key.pageDown && activeItems.length) {
      setSelectedIndex((current) => Math.min(Math.max(0, activeItems.length - 1), current + pageSize));
      return;
    }
    if (key.escape) {
      if (rawQuery && rawQuery !== "/") {
        setRawQuery("/");
        setSelectedIndex(0);
        return;
      }
      onBack?.();
      return;
    }
    if (key.return && activeItem) {
      onSelect(activeItem);
    }
  });

  return h(
    Screen,
    {
      title,
      subtitle,
      status,
      theme,
      metrics,
      screenReaderEnabled,
      compactMode,
      footer:
        footer ||
        `Type / to list commands • ↑/↓ choose • Enter open • ${onBack ? "Esc back • " : ""}Ctrl+C exit`,
    },
    h(
      Box,
      { flexDirection: "column" },
      h(
        Panel,
        { title: "Command palette", theme, tone: "primary", active: true, label: "Menu command palette" },
        h(
          Box,
          {
            flexDirection: "row",
            borderStyle: "round",
            borderColor: theme.colors.borderActive,
            paddingX: 1,
            marginTop: 1,
            marginBottom: 1,
          },
          h(TextInput, {
            value: rawQuery,
            focus: isFocused,
            placeholder: commandPlaceholder,
            onChange: (value) => setRawQuery(normalizeSlashInput(value)),
            onSubmit: () => {
              if (activeItem) {
                onSelect(activeItem);
              }
            },
          }),
        ),
        !rawQuery
          ? h(Text, { color: theme.colors.subtle }, clampLine("Type / to open the available commands for this screen.", commandLineLimit(8)))
          : !rawQuery.startsWith("/")
            ? h(Text, { color: theme.colors.warning }, clampLine("Commands in this shell start with /. Try /install, /doctor, or /mcp.", commandLineLimit(8)))
            : null,
        rawQuery === "/"
          ? h(Text, { color: theme.colors.textDim }, clampLine("All commands for this screen:", commandLineLimit(8)))
          : null,
        rawQuery.startsWith("/") && !activeItems.length
          ? h(Text, { color: theme.colors.warning }, clampLine("No commands match the current slash query.", commandLineLimit(8)))
          : null,
        ...windowedItems.map((item, index) => {
          const absoluteIndex = start + index;
          const selected = absoluteIndex === selectedIndex;
          const command = resolveItemCommand(item);
          return h(
            Box,
            {
              key: item.id || command,
              flexDirection: "column",
              marginTop: index === 0 ? 1 : 0,
              marginBottom: absoluteIndex === end - 1 ? 0 : 1,
            },
            h(
              Text,
              {
                color: selected ? theme.colors.primary : theme.colors.text,
                backgroundColor: selected ? theme.colors.panelAlt : undefined,
                bold: selected,
              },
              clampLine(`${selected ? "›" : " "} ${command}`, commandLineLimit(8)),
            ),
            h(
              Text,
              { color: selected ? theme.colors.text : theme.colors.textDim },
              clampLine(`  ${item.label}${item.meta ? ` • ${item.meta}` : ""}`, commandLineLimit(8)),
            ),
            selected && item.description
              ? h(Text, { color: theme.colors.subtle }, clampLine(`  ${item.description}`, commandLineLimit(8)))
              : null,
          );
        }),
        activeItem && activeItem.badges?.length
          ? h(Text, { color: theme.colors.subtle }, clampLine(activeItem.badges.join(" • "), commandLineLimit(8)))
          : null,
      ),
    ),
  );
}

export function TextPromptScreen({
  title,
  subtitle,
  label,
  initialValue,
  onSubmit,
  onBack,
  status,
  placeholder = "",
  validate,
  theme = getTheme(DEFAULT_TUI_THEME),
  screenReaderEnabled = false,
  compactMode = false,
  mask = "",
}) {
  const [value, setValue] = useState(initialValue || "");
  const [error, setError] = useState("");
  const { isFocused } = useFocus({ id: `${label}-input`, autoFocus: true });

  useEffect(() => {
    setValue(initialValue || "");
    setError("");
  }, [initialValue, label, title]);

  useInput((_input, key) => {
    if (key.escape && onBack) {
      onBack();
    }
  });

  const hintText = useMemo(() => {
    if (error) {
      return error;
    }
    if (placeholder) {
      return `Example: ${placeholder}`;
    }
    return "Type a value and press Enter.";
  }, [error, placeholder]);

  return h(
    Screen,
    {
      title,
      subtitle,
      status: error || status,
      theme,
      screenReaderEnabled,
      compactMode,
      footer: `Enter submit • ${onBack ? "Esc back • " : ""}Ctrl+C exit`,
    },
    h(SplitLayout, {
      theme,
      screenReaderEnabled,
      compactMode,
      sidebar: h(
        Panel,
        { title: label, theme, tone: error ? "error" : "primary", active: isFocused, label },
        h(
          Box,
          { flexDirection: "row" },
          h(Text, { color: theme.colors.primary }, "> "),
          h(TextInput, {
            value,
            focus: true,
            placeholder,
            mask: mask || undefined,
            onChange: (nextValue) => {
              setValue(nextValue);
              setError("");
            },
            onSubmit: (submittedValue) => {
              const validationError = validate ? validate(submittedValue) : "";
              if (validationError) {
                setError(validationError);
                return;
              }
              onSubmit(submittedValue);
            },
          }),
        ),
      ),
      detail: h(
        Panel,
        { title: "Hint", theme, tone: error ? "error" : "info", label: "Input hint panel" },
        h(Text, { color: error ? theme.colors.error : theme.colors.textDim }, hintText),
        h(Text, { color: theme.colors.subtle }, "Nothing is written before the preview step."),
      ),
    }),
  );
}

export {
  filterSlashCommandItems,
  normalizeSlashInput,
  resolveItemCommand,
};

export function FocusTabs({ theme = getTheme(DEFAULT_TUI_THEME), active, items = [] }) {
  return h(
    Box,
    { marginBottom: 1 },
    ...items.map((item, index) =>
      h(
        Box,
        { key: item.id, marginRight: index === items.length - 1 ? 0 : 1 },
        h(
          Text,
          { color: active === item.id ? theme.colors.primary : theme.colors.textDim, bold: active === item.id },
          `${active === item.id ? "◉" : "○"} ${item.label}`,
        ),
      ),
    ),
  );
}

export function useTabNavigation() {
  const focusManager = useFocusManager();

  useInput((_input, key) => {
    if (!key.tab) {
      return;
    }
    if (key.shift) {
      focusManager.focusPrevious();
      return;
    }
    focusManager.focusNext();
  });
}
