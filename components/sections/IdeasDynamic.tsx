"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/content/i18n-context";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ideaPosts } from "@/data/ideas";

export function IdeasDynamic() {
  const { t } = useLanguage();
  const featured = ideaPosts.slice(0, 3);

  return (
    <section id="ideas" className="bg-cream-dark py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t.ideas.eyebrow} title={t.ideas.title} description={t.ideas.description} />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featured.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.12}>
              <Link href={`/ideas/${post.slug}`} className="group block h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-400 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-600 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-carbon/80 px-3 py-1 font-sans text-xs uppercase tracking-wide text-champagne-light">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-sans text-xs uppercase tracking-wide text-carbon/45">
                      {post.readTime} de lectura
                    </span>
                    <h3 className="mt-3 font-serif text-xl leading-snug text-carbon">{post.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-carbon/65">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-medium text-champagne-dark">
                      {t.ideas.readMore}
                      <ArrowRight size={16} className="transition-transform duration-400 group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 flex justify-center">
            <ButtonLink href="/ideas" variant="dark">
              {t.ideas.viewAll}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
