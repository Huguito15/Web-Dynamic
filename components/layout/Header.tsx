"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { useLanguage } from "@/content/i18n-context";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ButtonLink } from "@/components/ui/Button";

const navSections = [
  { href: "/#servicios", key: "services" },
  { href: "/#ideas", key: "ideas" },
  { href: "/#galeria", key: "gallery" },
  { href: "/#cinema", key: "cinema" },
  { href: "/#nosotros", key: "about" },
  { href: "/#opiniones", key: "testimonials" },
  { href: "/#contacto", key: "contact" },
] as const;

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-400",
        solid ? "bg-carbon/95 backdrop-blur-sm shadow-lg shadow-black/10" : "bg-gradient-to-b from-black/50 to-transparent"
      )}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/#inicio" className="font-serif text-xl sm:text-2xl tracking-wide text-cream">
          Dynamic <span className="text-champagne">Casaments</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navSections.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="font-sans text-sm tracking-wide text-cream/85 transition-colors duration-400 hover:text-champagne"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <ButtonLink href="/#contacto" className="px-5 py-2.5 text-sm">
            {t.nav.cta}
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="text-cream lg:hidden"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden bg-carbon lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {navSections.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-cream/10 py-4 font-serif text-lg text-cream"
                >
                  {t.nav[item.key]}
                </Link>
              ))}
              <div className="mt-6 flex items-center justify-between gap-4">
                <LanguageSwitcher />
                <ButtonLink href="/#contacto" onClick={() => setMobileOpen(false)} className="flex-1 text-center">
                  {t.nav.cta}
                </ButtonLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
