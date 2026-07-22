"use client";

import Image from "next/image";
import { useLanguage } from "@/content/i18n-context";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Nosotros() {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="bg-cream-dark py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              {/* TODO: sustituir por una fotografía real del equipo/fotógrafo de Dynamic Casaments */}
              <Image
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop"
                alt="Fotógrafo de Dynamic Casaments trabajando durante una boda"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-champagne-dark">
                {t.about.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-carbon sm:text-4xl md:text-5xl">
                {t.about.title}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-relaxed text-carbon/75 sm:text-lg">{t.about.description}</p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-4 text-base leading-relaxed text-carbon/75 sm:text-lg">{t.about.paragraph2}</p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex items-center gap-4 border-t border-carbon/10 pt-6">
                <div>
                  <p className="font-serif text-lg text-carbon">{t.about.founderName}</p>
                  <p className="text-sm text-carbon/55">{t.about.founderRole}</p>
                </div>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {t.about.values.map((value, i) => (
                <Reveal key={value.title} delay={0.1 * i}>
                  <div className="rounded-xl border border-carbon/10 bg-white/50 p-5">
                    <p className="font-sans font-semibold text-carbon">{value.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-carbon/65">{value.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
