"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import es from "./dictionaries/es.json";
import ca from "./dictionaries/ca.json";
import en from "./dictionaries/en.json";

export type Locale = "es" | "ca" | "en";
export type Dictionary = typeof es;

const dictionaries: Record<Locale, Dictionary> = { es, ca, en };

export const locales: { code: Locale; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "ca", label: "CA" },
  { code: "en", label: "EN" },
];

const STORAGE_KEY = "dynamic-casaments-locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored in dictionaries) {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  };

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  }
  return ctx;
}
