import type { MetadataRoute } from "next";
import { ARTICLES_DATA } from "@/data/articles";
import { SITE_CONFIG } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = "2026-10-26";
  const baseUrl = SITE_CONFIG.domain;

  const coreRoutes: { url: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: "daily" },
    { url: `${baseUrl}/services/`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/plans/`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/devices/`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/devices/windows/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/devices/macos/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/devices/android/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/devices/ios/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/devices/linux/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/help/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/faq/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/articles/`, priority: 0.9, changeFrequency: "daily" },
    { url: `${baseUrl}/about/`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/contact/`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${baseUrl}/privacy/`, priority: 0.4, changeFrequency: "monthly" },
    { url: `${baseUrl}/terms/`, priority: 0.4, changeFrequency: "monthly" },
  ];

  const articleRoutes = ARTICLES_DATA.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}/`,
    lastModified: article.publishDate || currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const standardRoutes = coreRoutes.map((r) => ({
    url: r.url,
    lastModified: currentDate,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  return [...standardRoutes, ...articleRoutes];
}
