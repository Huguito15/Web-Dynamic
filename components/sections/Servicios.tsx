"use client";

import { Check, Camera, Drone, BookImage, Users2, Timer, Heart, Package } from "lucide-react";
import { useLanguage } from "@/content/i18n-context";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import clsx from "clsx";

const addonIcons = [Drone, BookImage, Users2, Timer, Heart, Package];

export function Servicios() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="relative bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {t.services.packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.12}>
              <div
                className={clsx(
                  "flex h-full flex-col rounded-2xl border p-8 sm:p-10 transition-all duration-400",
                  pkg.highlighted
                    ? "border-champagne bg-carbon text-cream shadow-2xl shadow-champagne/20 lg:-translate-y-4"
                    : "border-carbon/10 bg-white/60 text-carbon hover:border-champagne/50 hover:shadow-xl"
                )}
              >
                {pkg.highlighted && (
                  <span className="mb-4 w-fit rounded-full bg-champagne px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-carbon">
                    Más elegido
                  </span>
                )}
                <Camera className={clsx("mb-4", pkg.highlighted ? "text-champagne" : "text-champagne-dark")} size={28} />
                <h3 className="font-serif text-2xl sm:text-3xl">{pkg.name}</h3>
                <p className={clsx("mt-2 text-sm", pkg.highlighted ? "text-cream/70" : "text-carbon/60")}>
                  {pkg.tagline}
                </p>
                <p className={clsx("mt-5 font-serif text-xl", pkg.highlighted ? "text-champagne-light" : "text-champagne-dark")}>
                  {pkg.price}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed">
                      <Check
                        size={18}
                        className={clsx("mt-0.5 shrink-0", pkg.highlighted ? "text-champagne" : "text-champagne-dark")}
                      />
                      <span className={pkg.highlighted ? "text-cream/85" : "text-carbon/75"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href="#contacto"
                  variant={pkg.highlighted ? "primary" : "dark"}
                  className="mt-8 w-full"
                >
                  {t.services.ctaButton}
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-24">
            <h3 className="text-center font-serif text-2xl text-carbon sm:text-3xl">{t.services.addonsTitle}</h3>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {t.services.addons.map((addon, i) => {
                const Icon = addonIcons[i % addonIcons.length];
                return (
                  <div
                    key={addon.name}
                    className="flex items-start gap-4 rounded-xl border border-carbon/10 bg-white/50 p-5 transition-colors duration-400 hover:border-champagne/50"
                  >
                    <Icon size={22} className="mt-0.5 shrink-0 text-champagne-dark" />
                    <div>
                      <p className="font-sans font-semibold text-carbon">{addon.name}</p>
                      <p className="mt-1 text-sm text-carbon/65">{addon.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-col items-center justify-center gap-4 rounded-2xl bg-carbon px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="font-serif text-xl text-cream sm:text-2xl">{t.services.ctaText}</p>
            <ButtonLink href="#contacto" className="shrink-0">
              {t.services.ctaButton}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
