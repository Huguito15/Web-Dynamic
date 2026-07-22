"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import clsx from "clsx";
import { useLanguage } from "@/content/i18n-context";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cinemaVideos, type CinemaCategory } from "@/data/cinema";

const filterOrder: (CinemaCategory | "all")[] = ["all", "teaser", "documentary", "drone"];

export function Cinema() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<CinemaCategory | "all">("all");
  const [playingId, setPlayingId] = useState<string | null>(null);

  const filtered =
    activeFilter === "all" ? cinemaVideos : cinemaVideos.filter((v) => v.category === activeFilter);
  const activeVideo = cinemaVideos.find((v) => v.id === playingId) ?? null;

  return (
    <section id="cinema" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t.cinema.eyebrow} title={t.cinema.title} description={t.cinema.description} />

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {filterOrder.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveFilter(key)}
                className={clsx(
                  "rounded-full border px-5 py-2 font-sans text-sm transition-colors duration-400",
                  activeFilter === key
                    ? "border-champagne bg-champagne text-carbon"
                    : "border-carbon/20 text-carbon/65 hover:border-champagne-dark hover:text-champagne-dark"
                )}
              >
                {t.cinema.filters[key]}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((video, i) => (
            <Reveal key={video.id} delay={i * 0.08}>
              <button
                type="button"
                onClick={() => setPlayingId(video.id)}
                aria-label={`${t.cinema.playLabel}: ${video.title}`}
                className="group relative block aspect-video w-full overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-600 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-carbon/35 transition-colors duration-400 group-hover:bg-carbon/50" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-champagne/90 text-carbon shadow-lg transition-transform duration-400 group-hover:scale-110">
                    <Play size={26} fill="currentColor" className="ml-1" />
                  </span>
                </span>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-carbon/90 to-transparent p-4 text-left">
                  <p className="font-serif text-lg text-cream">{video.title}</p>
                  <p className="font-sans text-xs uppercase tracking-wide text-champagne-light">{video.couple}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-carbon/95 p-6"
            onClick={() => setPlayingId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative aspect-video w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPlayingId(null)}
                aria-label="Cerrar vídeo"
                className="absolute -top-12 right-0 text-cream/80 transition-colors duration-400 hover:text-champagne"
              >
                <X size={28} />
              </button>
              {/* TODO: sustituir embedUrl en data/cinema.ts por el vídeo real del cliente (Vimeo/YouTube) */}
              <iframe
                src={`${activeVideo.embedUrl}&autoplay=1`}
                title={activeVideo.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="h-full w-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
