import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleReader } from "@/components/ArticleReader";
import { ARTICLES_DATA } from "@/data/articles";
import { SITE_CONFIG } from "@/config/site";

const article = ARTICLES_DATA.find((a) => a.slug === "traffic-usage-troubleshooting")!;

export const metadata: Metadata = {
  title: article.seoTitle,
  description: article.seoDescription,
  alternates: {
    canonical: `${SITE_CONFIG.domain}/articles/${article.slug}/`,
  },
  openGraph: {
    title: article.seoTitle,
    description: article.seoDescription,
    url: `${SITE_CONFIG.domain}/articles/${article.slug}/`,
    type: "article",
    publishedTime: article.publishDate,
  },
};

export default function TrafficUsageTroubleshootingPage() {
  if (!article) notFound();
  return <ArticleReader article={article} />;
}
