"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/content/i18n-context";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

export function WhatsAppButton() {
  const { t } = useLanguage();
  const message = encodeURIComponent("Hola! Nos gustaría recibir información para nuestra boda.");

  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.common.whatsappCta}
      title={t.common.whatsappCta}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon width={28} height={28} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50" />
    </motion.a>
  );
}
