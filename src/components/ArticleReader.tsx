import React from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  Monitor,
  ArrowRight,
  BookOpen,
  Share2,
  CheckCircle2,
  Info,
} from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";
import { ArticleJsonLd } from "./JsonLd";
import { AffiliateButton } from "./AffiliateButton";
import { ArticleItem } from "@/data/articles";
import { SITE_CONFIG } from "@/config/site";

interface ArticleReaderProps {
  article: ArticleItem;
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({ article }) => {
  const articleUrl = `${SITE_CONFIG.domain}/articles/${article.slug}/`;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Article Schema for Bing & Google */}
      <ArticleJsonLd
        title={article.seoTitle}
        description={article.seoDescription}
        publishDate={article.publishDate}
        url={articleUrl}
        authorName={article.author}
      />

      <Breadcrumbs
        items={[
          { name: "文章中心", href: "/articles/" },
          { name: article.category, href: `/articles/` },
          { name: article.title, href: `/articles/${article.slug}/` },
        ]}
      />

      {/* Header Info */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-100 text-blue-800">
            {article.category}
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
            目标设备：{article.targetDevice}
          </span>
        </div>

        {/* H1 Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          {article.h1}
        </h1>

        {/* Meta Bar */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <User className="w-3.5 h-3.5 text-blue-600" />
            <span>{article.author}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <time dateTime={article.publishDate}>发布时间：{article.publishDate}</time>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>预计阅读：{article.readingTime}</span>
          </span>
        </div>

        {/* Executive Summary Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1.5">
          <span className="font-bold text-blue-900 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-brand-blue" />
            <span>导读提要</span>
          </span>
          <p>{article.summary}</p>
        </div>
      </header>

      {/* Table of Contents */}
      {article.tableOfContents.length > 0 && (
        <nav
          aria-label="文章目录"
          className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
        >
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            本专题核心章节导览
          </span>
          <ul className="space-y-1.5 text-xs sm:text-sm">
            {article.tableOfContents.map((toc) => (
              <li key={toc.id} className="pl-1">
                <a
                  href={`#${toc.id}`}
                  className="text-slate-700 hover:text-brand-blue hover:underline transition-colors block py-0.5"
                >
                  {toc.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Article Body Content */}
      <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-10 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-2 prose-h3:text-lg prose-p:leading-relaxed prose-p:text-slate-700 prose-li:text-slate-700 prose-code:font-mono prose-code:text-xs prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl">
        <div
          dangerouslySetInnerHTML={{
            __html: formatMarkdownArticle(article.content, article.tableOfContents),
          }}
        />
      </div>

      {/* Editorial Compliance Note */}
      <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-500 leading-relaxed">
        <span className="font-bold text-slate-700">官方技术支持说明：</span>
        本文由自由猫 FreeCat 官方网络架构团队原创撰写，旨在为用户提供操作系统底层运行逻辑剖析与开源客户端标准配置指引。
      </div>

      {/* Related Articles Internal Linking */}
      {article.relatedArticles.length > 0 && (
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-brand-blue" />
            <span>相关延伸排障专题推荐</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {article.relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/articles/${rel.slug}/`}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group space-y-2"
              >
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-brand-blue line-clamp-2">
                  {rel.title}
                </h3>
                <div className="flex items-center text-[11px] font-semibold text-brand-blue">
                  <span>查阅专题</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Official CTA Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
        <div className="space-y-1">
          <h3 className="font-bold text-base sm:text-lg">
            需要接入自由猫官方高品质网络？
          </h3>
          <p className="text-xs text-slate-400">
            完成系统客户端设置后，可直接前往自由猫官方客户订阅中心开启高品质网络体验。
          </p>
        </div>
        <AffiliateButton
          variant="hero"
          label="客户订阅中心"
          showDisclosureHint={false}
        />
      </div>
    </article>
  );
};

// Simple Markdown parser for Article Body with anchor linking and robust OS line breaks
function formatMarkdownArticle(rawMarkdown: string, tocList: { id: string; text: string }[] = []): string {
  // Normalize Windows \r\n to \n
  let html = rawMarkdown.replace(/\r\n/g, "\n");

  // Code blocks first (before paragraph splitting)
  html = html.replace(/```([a-z0-9_-]*)\n([\s\S]*?)```/g, (_m, lang, code) => {
    return `<div class="my-6 rounded-2xl overflow-hidden border border-slate-800 shadow-md"><div class="bg-slate-800/90 px-4 py-1.5 text-xs font-mono text-slate-300 font-bold uppercase tracking-wider flex items-center justify-between"><span>${lang || "command / config"}</span><span class="text-[10px] text-slate-400">可复现配置</span></div><pre class="p-4 bg-slate-950 text-emerald-400 text-xs font-mono overflow-x-auto leading-relaxed m-0"><code>${code.trim()}</code></pre></div>`;
  });

  // Convert tables
  html = html.replace(/\|(.+)\|\n\|[-:| ]+\|\n((?:\|.+\|\n?)+)/g, (match, header, rows) => {
    const ths = header
      .split("|")
      .filter((c: string) => c.trim())
      .map((c: string) => `<th class="p-3 bg-slate-100 border border-slate-200 font-bold text-left text-xs sm:text-sm text-slate-800">${c.trim()}</th>`)
      .join("");

    const trs = rows
      .trim()
      .split("\n")
      .map((row: string) => {
        const tds = row
          .split("|")
          .filter((c: string) => c.trim())
          .map((c: string) => `<td class="p-3 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">${c.trim()}</td>`)
          .join("");
        return `<tr class="hover:bg-slate-50 transition-colors">${tds}</tr>`;
      })
      .join("");

    return `<div class="overflow-x-auto my-6 rounded-xl border border-slate-200 shadow-xs"><table class="w-full border-collapse text-left"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
  });

  // Convert Headings with matching TOC IDs if available
  html = html.replace(/^### (.*$)/gim, (_m, headingText) => {
    const cleanText = headingText.trim();
    const matchedToc = tocList.find((t) => cleanText.includes(t.text) || t.text.includes(cleanText));
    const anchorId = matchedToc ? matchedToc.id : cleanText.replace(/[^a-zA-Z0-9\u4e00-\u9fa5_-]/g, "-").toLowerCase();
    return `<h3 id="${anchorId}" class="scroll-mt-24 text-lg sm:text-xl font-bold text-slate-900 mt-8 mb-3 flex items-center gap-2"><span class="w-1.5 h-4 rounded-full bg-brand-blue inline-block"></span><span>${cleanText}</span></h3>`;
  });

  html = html.replace(/^## (.*$)/gim, (_m, headingText) => {
    const cleanText = headingText.trim();
    const matchedToc = tocList.find((t) => cleanText.includes(t.text) || t.text.includes(cleanText));
    const anchorId = matchedToc ? matchedToc.id : cleanText.replace(/[^a-zA-Z0-9\u4e00-\u9fa5_-]/g, "-").toLowerCase();
    return `<h2 id="${anchorId}" class="scroll-mt-24 text-xl sm:text-2xl font-black text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-200">${cleanText}</h2>`;
  });

  html = html
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-xs border border-slate-200">$1</code>')
    .replace(/^---$/gim, '<hr class="my-8 border-slate-200" />');

  // Convert paragraphs
  html = html
    .split("\n\n")
    .map((p) => {
      const trimmed = p.trim();
      if (!trimmed) return "";
      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<div") ||
        trimmed.startsWith("<hr") ||
        trimmed.startsWith("<table")
      ) {
        return trimmed;
      }
      return `<p class="my-3 text-sm sm:text-base text-slate-700 leading-relaxed">${trimmed}</p>`;
    })
    .join("\n");

  return html;
}
