"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, ExternalLink, Star } from "lucide-react";
import { useLanguage } from "@/content/i18n-context";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/siteConfig";

export function Opiniones() {
  const { t } = useLanguage();
  const items = t.testimonials.items;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % items.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [items.length]);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + items.length) % items.length);
  };

  const current = items[index];

  return (
    <section id="opiniones" className="bg-carbon py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          description={t.testimonials.description}
          light
        />

        <Reveal delay={0.2}>
          <div className="relative mx-auto mt-16 max-w-3xl">
            <Quote size={48} className="mx-auto text-champagne/40" />

            <div className="relative mt-6 min-h-[220px] sm:min-h-[180px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 40 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 text-center"
                >
                  <div className="mb-4 flex justify-center gap-1 text-champagne">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="font-serif text-xl leading-relaxed text-cream sm:text-2xl">&ldquo;{current.quote}&rdquo;</p>
                  <p className="mt-6 font-sans text-sm font-semibold uppercase tracking-wide text-champagne-light">
                    {current.names}
                  </p>
                  <p className="text-sm text-cream/50">{current.location}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Testimonio anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors duration-400 hover:border-champagne hover:text-champagne"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ir al testimonio ${i + 1}`}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className={`h-2 w-2 rounded-full transition-colors duration-400 ${
                      i === index ? "bg-champagne" : "bg-cream/25"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Testimonio siguiente"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors duration-400 hover:border-champagne hover:text-champagne"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 flex justify-center">
            <a
              href={siteConfig.reviews.bodasNet}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-champagne-light transition-colors duration-400 hover:text-champagne"
            >
              {t.testimonials.reviewsLinkText}
              <ExternalLink size={16} />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
