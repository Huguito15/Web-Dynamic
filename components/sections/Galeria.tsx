"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useLanguage } from "@/content/i18n-context";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { galleryImages, type GalleryCategory } from "@/data/gallery";
import clsx from "clsx";

const filterOrder: (GalleryCategory | "all")[] = ["all", "wedding", "preboda", "detail", "party"];

export function Galeria() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<GalleryCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(
    () => (activeFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)),
    [activeFilter]
  );

  const slides = filteredImages.map((img) => ({ src: img.src, alt: img.alt }));

  return (
    <section id="galeria" className="bg-carbon py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} description={t.gallery.description} light />

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
                    : "border-cream/25 text-cream/70 hover:border-champagne/60 hover:text-champagne-light"
                )}
              >
                {t.gallery.filters[key]}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {filteredImages.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="group relative mb-4 block w-full overflow-hidden rounded-xl break-inside-avoid focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne"
              style={{ aspectRatio: `${img.width} / ${img.height}` }}
              aria-label={img.alt}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-600 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-carbon/70 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <span className="p-4 font-sans text-xs uppercase tracking-wide text-cream">
                  {t.gallery.filters[img.category]}
                </span>
              </div>
            </button>
          ))}
        </div>
      </Container>

      <Lightbox
        open={lightboxIndex !== null}
        index={lightboxIndex ?? 0}
        close={() => setLightboxIndex(null)}
        slides={slides}
        controller={{ closeOnBackdropClick: true }}
        styles={{ container: { backgroundColor: "rgba(14, 14, 14, 0.97)" } }}
      />
    </section>
  );
}
