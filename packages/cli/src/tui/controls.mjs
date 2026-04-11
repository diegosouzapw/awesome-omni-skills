import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useFocus, useFocusManager, useInput } from "ink";
import TextInput from "ink-text-input";
import { DetailPanel, Panel, Screen, SplitLayout } from "./layout.mjs";
import { DEFAULT_TUI_THEME, getTheme } from "./theme.mjs";
import { useTuiI18n } from "./i18n.mjs";

const h = React.createElement;

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
}) {
  const { t } = useTuiI18n();
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
    if (!isFocused || items.length === 0) {
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
    if (input >= "1" && input <= "9") {
      const target = Number.parseInt(input, 10) - 1;
      if (items[target]) {
        setIndex(target);
        onSelect(items[target]);
      }
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
          `${selected ? (isFocused ? "❯" : "•") : " "} ${absoluteIndex + 1}. ${item.label}`,
        ),
        item.meta ? h(Text, { color: theme.colors.subtle }, `    ${item.meta}`) : null,
        item.description ? h(Text, { color: theme.colors.textDim }, `    ${item.description}`) : null,
      );
    }),
    h(
      Text,
      { color: isFocused ? theme.colors.primary : theme.colors.subtle },
      t("components.selectMenu.showing", {
        start: items.length === 0 ? 0 : start + 1,
        end,
        total: items.length,
        note: footerNote ? ` • ${footerNote}` : "",
      }),
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
}) {
  const { t } = useTuiI18n();
  const [activeItem, setActiveItem] = useState(items[0] || null);

  useEffect(() => {
    setActiveItem(items[0] || null);
  }, [items]);

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
        t(onBack ? "components.menuScreen.footerWithBack" : "components.menuScreen.footerNoBack"),
    },
    h(SplitLayout, {
      theme,
      screenReaderEnabled,
      compactMode,
      sidebar: h(
        Panel,
        {
          title: t("components.menuScreen.actionListTitle"),
          theme,
          tone: "primary",
          active: true,
          label: t("components.menuScreen.actionListLabel"),
        },
        h(SelectMenu, {
          items,
          onSelect,
          onBack,
          onHighlight: setActiveItem,
          theme,
          pageSize,
          footerNote: t("components.menuScreen.quickOpen"),
        }),
      ),
      detail: h(
        Panel,
        {
          title: t("components.menuScreen.selectionDetailTitle"),
          theme,
          tone: "accent",
          label: t("components.menuScreen.selectionDetailLabel"),
        },
        h(DetailPanel, { item: activeItem, theme }),
      ),
    }),
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
  const { t } = useTuiI18n();
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
      return t("components.textPrompt.example", { value: placeholder });
    }
    return t("components.textPrompt.typeAndPressEnter");
  }, [error, placeholder, t]);

  return h(
    Screen,
    {
      title,
      subtitle,
      status: error || status,
      theme,
      screenReaderEnabled,
      compactMode,
      footer: t(onBack ? "components.textPrompt.footerWithBack" : "components.textPrompt.footerNoBack"),
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
        {
          title: t("components.textPrompt.hintTitle"),
          theme,
          tone: error ? "error" : "info",
          label: t("components.textPrompt.hintLabel"),
        },
        h(Text, { color: error ? theme.colors.error : theme.colors.textDim }, hintText),
        h(Text, { color: theme.colors.subtle }, t("components.textPrompt.nothingWrittenBeforePreview")),
      ),
    }),
  );
}

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
