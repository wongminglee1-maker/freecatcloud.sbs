import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanSelectorWizard } from "@/components/PlanSelectorWizard";
import { SITE_CONFIG } from "@/config/site";
import { ShieldCheck, HelpCircle, ArrowRight, Info } from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";

export const metadata: Metadata = {
  title: "自由猫套餐信息与对比｜智能套餐选择助手",
  description:
    "全面了解自由猫 FreeCat 相关的机场套餐结构、流量档位（流浪猫、田园猫、美短猫、布偶猫参考）、设备数限制与重置规则。通过交互式助手智能匹配适合您的方案。",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/plans/`,
  },
};

export default function PlansPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <Breadcrumbs items={[{ name: "套餐信息", href: "/plans/" }]} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>套餐与选购指南</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          自由猫 FreeCat 套餐信息与选购决策中心
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          先明确您的常用设备数量、视频观看习惯以及办公场景，再核对对应的套餐档位。避免花冤枉钱买超量，更杜绝因并发设备超额被系统判定离线。
        </p>
      </div>

      {/* Plan Wizard & Table */}
      <PlanSelectorWizard />

      {/* Detailed Rules & Purchase Advice */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
          套餐选购核心注意事项与避坑原则
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>1. 流量重置周期与未用配额</span>
            </h3>
            <p>
              服务商的流量重置机制通常分为两种：<strong>账单周期重置</strong>（自购买之日起每 30 天重置一次）与<strong>自然月 1 日重置</strong>。大部分方案的月度剩余流量<strong>不支持累加结转</strong>到下个周期。请根据月度实际消耗量选择合适档位。
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>2. 同时在线设备数严格限制</span>
            </h3>
            <p>
              各档位严格限制“同时在线连接设备数”。例如 2 台设备方案，若在手机、电脑、iPad 同时开启了代理，服务商服务端网关会根据并发连接指纹，直接将先连设备踢下线。建议多设备家庭选用 5 设备及以上方案。
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>3. 严禁 P2P/BT 种子长时间滥用</span>
            </h3>
            <p>
              由于版权合规与机房带宽公平使用策略（FUP），绝大部分中转服务器严格封禁 BitTorrent、迅雷等 P2P 协议端口。若全天候挂机下载可能导致账号被系统自动化防护程序暂时限制。
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>4. 官方直营订购与价格保障</span>
            </h3>
            <p>
              本站为自由猫 FreeCat 官方旗舰服务门户。点击订购将直接进入官方统一收银台与用户管理后台，所有套餐价格、流量配额与工单支持均由自由猫官方团队直接履约保障，购买前请在确认页核对周期。
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Info className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span>遇到流量消耗异常激增？请查阅我们的流量诊断专题文章。</span>
          </div>
          <Link
            href="/articles/traffic-usage-troubleshooting/"
            className="text-xs font-bold text-brand-blue hover:underline inline-flex items-center gap-1 flex-shrink-0"
          >
            <span>排查流量异常原因</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
