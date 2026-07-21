"use client";

import { BookImage, Camera, Gift } from "lucide-react";
import { useLanguage } from "@/content/i18n-context";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

const upcomingProducts = [
  { icon: BookImage, label: "Álbumes premium" },
  { icon: Camera, label: "Sesiones extra" },
  { icon: Gift, label: "Cajas de recuerdo" },
];

export function Tienda() {
  const { t } = useLanguage();

  return (
    <section id="tienda" className="bg-cream py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-dashed border-champagne-dark/40 bg-cream-dark/60 px-8 py-14 text-center sm:px-14">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-champagne-dark">
              {t.shop.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-3xl text-carbon sm:text-4xl">{t.shop.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-carbon/70 sm:text-lg">{t.shop.description}</p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {upcomingProducts.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-carbon/10 bg-white/60 px-4 py-2 text-sm text-carbon/70"
                >
                  <Icon size={16} className="text-champagne-dark" />
                  {label}
                </div>
              ))}
            </div>

            <span className="mt-8 inline-block rounded-full bg-carbon px-5 py-2 font-sans text-xs uppercase tracking-wide text-champagne-light">
              {t.shop.comingSoon}
            </span>

            <p className="mt-6 text-sm text-carbon/60">{t.shop.ctaText}</p>
            <ButtonLink href="#contacto" variant="dark" className="mt-5">
              {t.nav.contact}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
