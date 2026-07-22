import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { ideaPosts } from "@/data/ideas";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/ideas`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/legal/aviso-legal`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/legal/privacidad`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/legal/cookies`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const postRoutes: MetadataRoute.Sitemap = ideaPosts.map((post) => ({
    url: `${siteConfig.url}/ideas/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
