"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/content/i18n-context";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "dc-cookie-consent";

export function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleChoice = (choice: "accepted" | "rejected") => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    // TODO: si se acepta, inicializar aquí Google Analytics / Meta Pixel (ver app/layout.tsx).
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          role="dialog"
          aria-live="polite"
          aria-label="Aviso de cookies"
          className="fixed inset-x-0 bottom-0 z-[90] border-t border-champagne/20 bg-carbon/98 backdrop-blur-sm"
        >
          <div className="mx-auto flex max-w-8xl flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between sm:px-8 lg:px-12">
            <p className="text-center text-sm text-cream/75 sm:text-left">
              {t.cookies.text}{" "}
              <Link href="/legal/cookies" className="underline decoration-champagne underline-offset-4 hover:text-champagne">
                {t.cookies.learnMore}
              </Link>
            </p>
            <div className="flex shrink-0 gap-3">
              <Button variant="outline" className="px-5 py-2.5 text-sm" onClick={() => handleChoice("rejected")}>
                {t.cookies.reject}
              </Button>
              <Button className="px-5 py-2.5 text-sm" onClick={() => handleChoice("accepted")}>
                {t.cookies.accept}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
