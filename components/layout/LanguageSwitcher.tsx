"use client";

import { locales, useLanguage } from "@/content/i18n-context";
import clsx from "clsx";

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={clsx(
        "flex items-center gap-1 rounded-full border px-1 py-1 text-xs font-medium tracking-wide",
        dark ? "border-carbon/20" : "border-cream/30"
      )}
      role="group"
      aria-label="Selector de idioma"
    >
      {locales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={clsx(
            "rounded-full px-2.5 py-1 transition-colors duration-400",
            locale === code
              ? "bg-champagne text-carbon"
              : dark
              ? "text-carbon/60 hover:text-carbon"
              : "text-cream/70 hover:text-cream"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
