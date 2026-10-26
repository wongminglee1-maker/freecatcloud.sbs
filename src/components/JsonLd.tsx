import React from "react";
import { SITE_CONFIG } from "@/config/site";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  publishDate: string;
  modifiedDate?: string;
  url: string;
  authorName?: string;
}

interface FaqSchemaItem {
  question: string;
  answer: string;
}

export const WebSiteJsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    alternateName: ["自由猫", "FreeCat", "freecatcloud.sbs"],
    url: SITE_CONFIG.domain,
    inLanguage: "zh-CN",
    description: SITE_CONFIG.seo.home.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.domain}/help/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const BreadcrumbJsonLd: React.FC<{ items: BreadcrumbItem[] }> = ({
  items,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${SITE_CONFIG.domain}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ArticleJsonLd: React.FC<ArticleSchemaProps> = ({
  title,
  description,
  publishDate,
  modifiedDate,
  url,
  authorName = "FreeCat 网络架构实验室",
}) => {
  const canonicalUrl = url.startsWith("http")
    ? url
    : `${SITE_CONFIG.domain}${url}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    author: {
      "@type": "Organization",
      name: authorName,
      url: SITE_CONFIG.domain,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.domain}/logo.svg`,
      },
    },
    inLanguage: "zh-CN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const FaqPageJsonLd: React.FC<{ items: FaqSchemaItem[] }> = ({
  items,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
