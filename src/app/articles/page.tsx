import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ARTICLES_DATA } from "@/data/articles";
import { SITE_CONFIG } from "@/config/site";
import { BookOpen, ArrowRight, Calendar, Clock, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "技术文章中心｜自由猫 FreeCat 原创连接指南",
  description:
    "自由猫 FreeCat 原创技术文章专题。涵盖 Windows 11 系统代理与 DNS、MacBook 休眠唤醒、iPhone 移动网络切换、Android 后台保活、流量消耗异常排查、远程会议防卡顿与家庭路由器旁路由拓扑。",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/articles/`,
  },
};

export default function ArticlesIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <Breadcrumbs items={[{ name: "文章中心", href: "/articles/" }]} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
          <BookOpen className="w-3.5 h-3.5" />
          <span>原创技术专题库</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          自由猫 FreeCat 原创技术文章与排障教程
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          深入系统内核与网络协议底层，每篇均为 1500–2000 字以上的独立技术长文。提供真实、严密、可验证的实操排错方案。
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTICLES_DATA.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}/`}
            className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between group space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                  {article.category}
                </span>
                <span className="text-slate-400 font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{article.readingTime}</span>
                </span>
              </div>

              <h2 className="font-bold text-lg text-slate-900 group-hover:text-brand-blue leading-snug">
                {article.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                {article.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{article.publishDate}</span>
              </span>
              <span className="font-bold text-brand-blue group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                <span>阅读全文</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
