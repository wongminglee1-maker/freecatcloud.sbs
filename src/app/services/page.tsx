import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  Globe,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Monitor,
  Laptop,
  Smartphone,
  Tablet,
  Terminal,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NetworkKnowledgeGraph } from "@/components/NetworkKnowledgeGraph";
import { AffiliateButton } from "@/components/AffiliateButton";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "产品与服务体系架构｜自由猫 FreeCat 旗舰门户",
  description:
    "深入了解自由猫 FreeCat 的网络服务信息、日常高频连接、多设备协同、网络质量核心指标与中转机制。全面构建稳定、高速的数字办公与娱乐访问链路。",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/services/`,
  },
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <Breadcrumbs items={[{ name: "产品与服务", href: "/services/" }]} />

      {/* Hero Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
          <Layers className="w-3.5 h-3.5" />
          <span>服务体系总览</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          自由猫 FreeCat 产品与网络服务架构
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          一个现代化的网络连接体系，绝不仅仅是“提供几个节点地址”，而是涵盖了智能分流内核、专线中转协议、设备权限管理以及全链路故障排查的完整工程方案。
        </p>
      </div>

      {/* Three Core Workload Scenarios */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3">
          三大核心网络使用场景解析
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Daily */}
          <div id="daily" className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900">日常高频访问</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              适用于代码库拉取（GitHub）、海外学术检索（Google Scholar）、日常网页浏览与即时消息推送。
            </p>
            <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>基于 GeoIP 的国内流量精准绕过</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>极低本地内存开销，开机自启无感</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>智能 Fake-IP 解析，秒级首屏加载</span>
              </li>
            </ul>
          </div>

          {/* Cross Device */}
          <div id="cross-device" className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900">跨设备多终端协作</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              针对现代职场白领与技术人员多终端（Windows / Mac / iPhone / Android）协同的工作环境。
            </p>
            <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>通用订阅 URL 导入，统一节点命名规范</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>自动健康度检查，故障节点静默剔除</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>严格遵守同时在线设备限制防封号</span>
              </li>
            </ul>
          </div>

          {/* Heavy */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900">超清影音与实时会议</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              针对 4K HDR 跨国流媒体串流、Zoom / Teams 跨国视频会议等高突发、低抖动严苛场景。
            </p>
            <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>IPLC / IEPL 专线中转，晚高峰不丢包</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>充裕的突发突发带宽通道保证 4K 不降码率</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>流媒体解锁住宅 IP 纯净度适配保障</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Network Metrics Interactive Section */}
      <section id="network-metrics" className="pt-4">
        <NetworkKnowledgeGraph />
      </section>

      {/* Direct links to devices */}
      <section className="bg-slate-100/70 p-6 sm:p-8 rounded-2xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              对应客户端与操作系统接入
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              每个操作系统均有独立的权限模型与代理驱动配置方式
            </p>
          </div>
          <Link
            href="/devices/"
            className="text-xs font-bold text-brand-blue hover:underline inline-flex items-center gap-1"
          >
            <span>进入设备接入中心</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <Link
            href="/devices/windows/"
            className="p-3 bg-white hover:bg-blue-50/50 rounded-xl border border-slate-200 text-center transition-colors group"
          >
            <Monitor className="w-5 h-5 mx-auto text-blue-600 mb-1" />
            <span className="text-xs font-bold text-slate-800 group-hover:text-brand-blue block">
              Windows 11
            </span>
          </Link>
          <Link
            href="/devices/macos/"
            className="p-3 bg-white hover:bg-blue-50/50 rounded-xl border border-slate-200 text-center transition-colors group"
          >
            <Laptop className="w-5 h-5 mx-auto text-indigo-600 mb-1" />
            <span className="text-xs font-bold text-slate-800 group-hover:text-brand-blue block">
              macOS
            </span>
          </Link>
          <Link
            href="/devices/android/"
            className="p-3 bg-white hover:bg-blue-50/50 rounded-xl border border-slate-200 text-center transition-colors group"
          >
            <Smartphone className="w-5 h-5 mx-auto text-emerald-600 mb-1" />
            <span className="text-xs font-bold text-slate-800 group-hover:text-brand-blue block">
              Android
            </span>
          </Link>
          <Link
            href="/devices/ios/"
            className="p-3 bg-white hover:bg-blue-50/50 rounded-xl border border-slate-200 text-center transition-colors group"
          >
            <Tablet className="w-5 h-5 mx-auto text-amber-600 mb-1" />
            <span className="text-xs font-bold text-slate-800 group-hover:text-brand-blue block">
              iPhone / iOS
            </span>
          </Link>
          <Link
            href="/devices/linux/"
            className="p-3 bg-white hover:bg-blue-50/50 rounded-xl border border-slate-200 text-center transition-colors group col-span-2 sm:col-span-1"
          >
            <Terminal className="w-5 h-5 mx-auto text-slate-700 mb-1" />
            <span className="text-xs font-bold text-slate-800 group-hover:text-brand-blue block">
              Linux
            </span>
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-900">需要核对具体的服务方案与流量配额？</h3>
          <p className="text-xs text-slate-500">
            可查阅套餐中心表格，或使用交互式选择助手进行估算。
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/plans/"
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
          >
            查看套餐对比
          </Link>
          <AffiliateButton
            variant="primary"
            label="客户订阅中心"
            showDisclosureHint={false}
          />
        </div>
      </div>
    </div>
  );
}
