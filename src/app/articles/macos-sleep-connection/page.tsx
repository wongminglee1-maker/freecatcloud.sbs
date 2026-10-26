import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleReader } from "@/components/ArticleReader";
import { ARTICLES_DATA } from "@/data/articles";
import { SITE_CONFIG } from "@/config/site";

const article = ARTICLES_DATA.find((a) => a.slug === "macos-sleep-connection")!;

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

export default function MacOsSleepConnectionPage() {
  if (!article) notFound();
  return <ArticleReader article={article} />;
}
