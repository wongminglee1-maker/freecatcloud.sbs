import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/config/site";
import {
  ShieldCheck,
  Zap,
  Layers,
  CheckCircle,
  ArrowRight,
  Headphones,
} from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";

export const metadata: Metadata = {
  title: "关于自由猫 FreeCat｜官方旗舰服务门户",
  description:
    "深入了解自由猫 FreeCat 官方旗舰服务门户（freecatcloud.sbs）的品牌定位、官方专线架构、全平台设备支持体系与客户服务保障。",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/about/`,
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <Breadcrumbs items={[{ name: "关于我们", href: "/about/" }]} />

      <header className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>官方旗舰服务门户</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          关于自由猫 FreeCat 官方网站
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          自由猫 FreeCat（freecatcloud.sbs）是自由猫品牌官方旗舰服务门户。我们秉持“把复杂的连接问题，整理成简单的答案”的初衷，为全球用户提供高品质网络连接服务、全平台设备配置支持以及前沿的网络技术指南。
        </p>
      </header>

      {/* Official Brand Guarantee Card */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white space-y-5 border border-slate-800 shadow-xl">
        <div className="flex items-center gap-2.5 text-blue-300 font-bold text-base">
          <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <span>自由猫 FreeCat 官方旗舰服务承诺</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-200">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <div className="font-bold text-white flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>官方专线高速通道</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              直连高规格优质机房与 IPLC/IEPL 专线中转，保障突发大带宽与超低抖动，无中间商层层加价。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <div className="font-bold text-white flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>多平台原生配置指引</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              全面适配 Windows、macOS、Android、iOS 及 Linux，提供官方验证的开源分流客户端配置方案。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <div className="font-bold text-white flex items-center gap-1.5">
              <Headphones className="w-4 h-4 text-emerald-400" />
              <span>专业在线售后保障</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              统一收银台直连用户管理中心，提供透明可查的账单周期、配额查询与专业工程师工单支持。
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
          <span className="text-xs text-slate-400">
            官方统一认证域名：freecatcloud.sbs · 正品节点与安全支付保障
          </span>
          <AffiliateButton
            variant="compact"
            label="进入官方客户订阅中心"
            showDisclosureHint={false}
          />
        </div>
      </section>

      {/* Editorial Principles */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
          官方三大技术与内容准则
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>严谨客观的性能标准</span>
            </h3>
            <p>
              绝不使用虚假跑分或不可实现的夸大口号。全维度呈现延迟、丢包率、网络抖动等真实物理指标，让用户明明白白选套餐。
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>真实系统级排障逻辑</span>
            </h3>
            <p>
              所有教程均基于 Windows 11、macOS Sequoia、Android 15 与 iOS 18 真实系统环境测试，步骤严密可复现。
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>独立优质的知识体系</span>
            </h3>
            <p>
              坚持原创技术内容与专业设备支持，打造业内标杆级的官方技术帮助门户与客户服务中心。
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Corrections */}
      <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-900 text-sm">
            需要技术协助或联系官方团队？
          </h3>
          <p className="text-xs text-slate-500">
            欢迎查阅我们的常见问答、排障知识库或联系官方技术服务支持团队。
          </p>
        </div>
        <Link
          href="/contact/"
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors whitespace-nowrap"
        >
          前往联系与技术反馈
        </Link>
      </div>
    </div>
  );
}
