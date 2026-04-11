import React, { createContext, useContext, useMemo } from "react";
import { createRuntimeTranslator, resolveRuntimeLocale } from "../lib/runtime-i18n.js";

const h = React.createElement;

const DEFAULT_TUI_I18N = createRuntimeTranslator({
  locale: "en",
  namespaces: ["common", "tui", "cli"],
});

const TuiI18nContext = createContext(DEFAULT_TUI_I18N);

function TuiI18nProvider({
  resolvedLocale = null,
  preferredLocale = null,
  children,
}) {
  const translator = useMemo(
    () =>
      createRuntimeTranslator({
        locale: resolveRuntimeLocale({
          requestedLocale: resolvedLocale,
          preferredLocale,
        }),
        namespaces: ["common", "tui", "cli"],
      }),
    [preferredLocale, resolvedLocale],
  );

  return h(TuiI18nContext.Provider, { value: translator }, children);
}

function useTuiI18n() {
  return useContext(TuiI18nContext);
}

export {
  TuiI18nProvider,
  useTuiI18n,
};
