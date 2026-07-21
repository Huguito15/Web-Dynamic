import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ideaPosts } from "@/data/ideas";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Ideas e inspiración para bodas",
  description:
    "Tendencias, ideas de sesión y consejos de planificación de bodas por el equipo de Dynamic Casaments, fotógrafos de boda en Sabadell y Barcelona.",
};

export default function IdeasPage() {
  return (
    <div className="bg-cream pb-24 pt-36 sm:pt-40">
      <Container>
        <div className="max-w-2xl">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-champagne-dark">+ Ideas Dynamic</span>
          <h1 className="mt-4 font-serif text-4xl text-carbon sm:text-5xl">Inspiración para vuestro gran día</h1>
          <p className="mt-5 text-lg leading-relaxed text-carbon/70">
            Tendencias, ideas de sesión y consejos de planificación para que cada detalle de vuestra boda tenga alma
            propia.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ideaPosts.map((post) => (
            <Link key={post.slug} href={`/ideas/${post.slug}`} className="group block h-full">
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
                  <h2 className="mt-3 font-serif text-xl leading-snug text-carbon">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-carbon/65">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
