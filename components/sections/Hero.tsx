"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/content/i18n-context";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="inicio" ref={sectionRef} className="relative flex h-[100svh] min-h-[600px] items-center overflow-hidden bg-carbon">
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        {/*
          TODO (cliente): sustituir por el vídeo real de Dynamic Casaments.
          Coloca el archivo en /public/videos/hero.mp4 (recomendado H.264, <15MB, 1920x1080, sin audio necesario)
          y opcionalmente /public/videos/hero.webm para mejor compresión.
          Mientras no exista el archivo, se muestra automáticamente la imagen "poster" de abajo.
        */}
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/70 via-carbon/40 to-carbon" />
        <div className="absolute inset-0 bg-carbon/10" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto w-full max-w-8xl px-6 sm:px-8 lg:px-12">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="block font-sans text-xs uppercase tracking-[0.3em] text-champagne-light sm:text-sm"
        >
          {t.hero.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] text-cream sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-xl font-serif text-lg italic text-champagne-light sm:text-xl"
        >
          &ldquo;{t.hero.subtitle}&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-5 max-w-lg text-base leading-relaxed text-cream/75 sm:text-lg"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <ButtonLink href="#contacto">{t.hero.ctaPrimary}</ButtonLink>
          <ButtonLink
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            {t.hero.ctaSecondary}
          </ButtonLink>
        </motion.div>
      </motion.div>

      <motion.a
        href="#servicios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit flex-col items-center gap-2 text-cream/70"
        aria-label={t.hero.scrollHint}
      >
        <span className="font-sans text-xs uppercase tracking-[0.2em]">{t.hero.scrollHint}</span>
        <motion.span
          animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} />
        </motion.span>
      </motion.a>
    </section>
  );
}
