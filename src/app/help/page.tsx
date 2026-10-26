"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  BookOpen,
  Smartphone,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  LifeBuoy,
  MessageSquare,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ARTICLES_DATA } from "@/data/articles";
import { FAQ_DATA } from "@/data/faq";
import { DEVICE_LIST } from "@/data/devices";
import { SITE_CONFIG } from "@/config/site";

export default function HelpCenterPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = ARTICLES_DATA.filter((a) => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return true;
    return (
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q)
    );
  });

  const filteredFaqs = FAQ_DATA.filter((f) => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return true;
    return (
      f.question.toLowerCase().includes(q) ||
      f.answer.toLowerCase().includes(q) ||
      f.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <Breadcrumbs items={[{ name: "帮助中心", href: "/help/" }]} />

      {/* Hero Header with Embedded Search Input */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden space-y-6">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <LifeBuoy className="w-3.5 h-3.5" />
            <span>技术帮助与排障知识库</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            自由猫 FreeCat 帮助与故障诊断中心
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            输入您遇到的具体现象（如“休眠”、“安卓断线”、“7897”、“流量偷跑”），快速检索对应的系统解决方案。
          </p>
        </div>

        {/* Real working Chinese search bar */}
        <div className="relative max-w-2xl">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="输入搜索词检索技术文章与 15 个常见问答..."
            className="w-full pl-12 pr-4 py-3.5 text-sm sm:text-base bg-white/10 hover:bg-white/15 focus:bg-white text-white focus:text-slate-900 placeholder:text-slate-400 rounded-2xl border border-white/20 focus:border-brand-blue focus:outline-none transition-all shadow-inner"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              清空
            </button>
          )}
        </div>

        {/* Quick tags */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span>高频问题：</span>
          {["Windows 7897", "休眠断连", "安卓保活", "iPhone 蜂窝", "流量异常", "旁路由"].map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Diagnostic Triage Categories */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link
          href="/articles/windows-proxy-dns/"
          className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all space-y-2 group"
        >
          <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 w-fit">
            <Wrench className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 group-hover:text-brand-blue text-sm">
            Windows 无法打开网页
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            排查 7897 回环端口占用、注册表 Internet Settings 修复与 DNS 缓存。
          </p>
        </Link>

        <Link
          href="/articles/macos-sleep-connection/"
          className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all space-y-2 group"
        >
          <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 w-fit">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 group-hover:text-brand-blue text-sm">
            MacBook 休眠唤醒断网
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            解决盒盖待机后再开盖长连接假死、iCloud 专用代理双重竞争。
          </p>
        </Link>

        <Link
          href="/articles/android-background-network/"
          className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all space-y-2 group"
        >
          <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 w-fit">
            <Smartphone className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 group-hover:text-brand-blue text-sm">
            Android 息屏频繁断连
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            小米澎湃 OS、华为鸿蒙电池优化白名单、常驻通知栏与 VpnService。
          </p>
        </Link>

        <Link
          href="/articles/traffic-usage-troubleshooting/"
          className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all space-y-2 group"
        >
          <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 w-fit">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 group-hover:text-brand-blue text-sm">
            套餐流量突然激增
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            排查 Windows Update 自动更新、iCloud 相册备份与 P2P 种子后台做种。
          </p>
        </Link>
      </section>

      {/* Matched FAQ Section */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              常见问答与速查表 ({filteredFaqs.length})
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              支持快速核验关于平台真伪、协议区别与工单反馈的标准回答
            </p>
          </div>
          <Link
            href="/faq/"
            className="text-xs font-bold text-brand-blue hover:underline inline-flex items-center gap-1"
          >
            <span>查看完整 FAQ 页面</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFaqs.slice(0, 6).map((faq) => (
            <div
              key={faq.id}
              className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">
                  {faq.categoryLabel}
                </span>
                <h4 className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-1">
                  {faq.question}
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                {faq.answer}
              </p>
              <div className="pt-1">
                <Link
                  href={`/faq/#${faq.id}`}
                  className="text-[11px] font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                >
                  <span>阅读完整解答</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Matched Technical Articles */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="text-xl font-bold text-slate-900">
            全部深度技术专题 ({filteredArticles.length})
          </h2>
          <Link
            href="/articles/"
            className="text-xs font-bold text-brand-blue hover:underline inline-flex items-center gap-1"
          >
            <span>文章中心</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-3">
          {filteredArticles.map((art) => (
            <Link
              key={art.slug}
              href={`/articles/${art.slug}/`}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                    {art.category}
                  </span>
                  <span className="text-slate-400">{art.targetDevice}</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-brand-blue">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1">
                  {art.summary}
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400 flex-shrink-0">
                <span>{art.readingTime}</span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Triage */}
      <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <MessageSquare className="w-6 h-6 text-brand-blue flex-shrink-0" />
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              知识库内容勘误或技术建议？
            </h4>
            <p className="text-xs text-slate-500">
              欢迎提交您的系统排障实测反馈，帮助我们持续完善指南。
            </p>
          </div>
        </div>
        <Link
          href="/contact/"
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors whitespace-nowrap"
        >
          提交反馈或联系编辑部
        </Link>
      </div>
    </div>
  );
}
