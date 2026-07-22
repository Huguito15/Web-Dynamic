"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const alreadyLoaded = window.sessionStorage.getItem("dc-loaded");
    if (alreadyLoaded || shouldReduceMotion) {
      setVisible(false);
      return;
    }
    const timer = setTimeout(() => {
      setVisible(false);
      window.sessionStorage.setItem("dc-loaded", "1");
    }, 1400);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-carbon"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif text-2xl text-cream sm:text-3xl"
          >
            Dynamic <span className="text-champagne">Casaments</span>
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
