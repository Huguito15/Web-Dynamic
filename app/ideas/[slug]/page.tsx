import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ideaPosts } from "@/data/ideas";
import { Container } from "@/components/ui/Container";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { siteConfig } from "@/data/siteConfig";

export function generateStaticParams() {
  return ideaPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = ideaPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default function IdeaPostPage({ params }: { params: { slug: string } }) {
  const post = ideaPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = ideaPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="bg-cream pb-24 pt-32 sm:pt-36">
      <Container className="max-w-3xl">
        <Link
          href="/ideas"
          className="inline-flex items-center gap-2 font-sans text-sm text-carbon/60 transition-colors duration-400 hover:text-champagne-dark"
        >
          <ArrowLeft size={16} /> Volver a todas las ideas
        </Link>

        <span className="mt-6 block font-sans text-xs uppercase tracking-[0.25em] text-champagne-dark">
          {post.category} · {post.readTime} de lectura
        </span>
        <h1 className="mt-4 font-serif text-3xl leading-tight text-carbon sm:text-4xl md:text-5xl">{post.title}</h1>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image src={post.image} alt={post.title} fill sizes="768px" className="object-cover" priority />
        </div>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-carbon/80">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-carbon/10 pt-8">
          <span className="font-sans text-sm text-carbon/50">Compartir este artículo</span>
          <ShareButtons url={`${siteConfig.url}/ideas/${post.slug}`} title={post.title} />
        </div>
      </Container>

      {related.length > 0 && (
        <Container className="mt-20">
          <h2 className="font-serif text-2xl text-carbon">Más ideas para vosotros</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/ideas/${r.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 font-serif text-lg text-carbon">{r.title}</h3>
              </Link>
            ))}
          </div>
        </Container>
      )}
    </article>
  );
}
