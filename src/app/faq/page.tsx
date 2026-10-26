import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FaqPageJsonLd } from "@/components/JsonLd";
import { FAQ_DATA } from "@/data/faq";
import { SITE_CONFIG } from "@/config/site";
import { HelpCircle, ShieldCheck } from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";

export const metadata: Metadata = {
  title: "常见问题解答 (FAQ)｜自由猫 FreeCat 完整疑难排查手册",
  description:
    "自由猫 FreeCat 常见问题完整解答。汇总 15 项关于官方真伪辨识、机场与 VPN 区别、Windows/Mac/Android/iOS 系统排障、流量异常与晚高峰延迟波动的专业回答。",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/faq/`,
  },
};

export default function FaqPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <Breadcrumbs items={[{ name: "常见问题 FAQ", href: "/faq/" }]} />

      {/* JSON-LD Rich Snippet for Bing and Google FAQPage */}
      <FaqPageJsonLd
        items={FAQ_DATA.map((f) => ({
          question: f.question,
          answer: f.answer,
        }))}
      />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>权威常见问答库</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          自由猫 FreeCat 常见问题解答 (FAQ)
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          针对用户最为关切的 15 项常见问题，提供透明、客观、不回避技术本质的详尽解答。支持分类筛选与实时检索。
        </p>
      </div>

      {/* Accordion Component with all 15 items and interactive tabs */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <FaqAccordion showCategoryTabs={true} />
      </div>

      {/* Official CTA Box */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-base">需要获取高速专线网络节点服务？</h3>
          <p className="text-xs text-slate-400 mt-1">
            可前往自由猫官方客户订阅中心核对实时套餐与节点可用性。
          </p>
        </div>
        <AffiliateButton
          variant="hero"
          label="客户订阅中心"
          showDisclosureHint={false}
        />
      </div>
    </div>
  );
}
