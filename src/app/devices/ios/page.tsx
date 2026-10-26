import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DEVICE_LIST } from "@/data/devices";
import { SITE_CONFIG } from "@/config/site";
import {
  Tablet,
  Download,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "iPhone / iPad (iOS) 客户端接入与蜂窝网络切换指南｜自由猫 FreeCat",
  description:
    "自由猫 FreeCat iOS 移动端接入指南。介绍 Shadowrocket (小火箭) 与 Sing-box 配置、非国区 Apple ID 准备、iOS VPN 权限授权及 Wi-Fi 跨网至 5G 移动数据的排障策略。",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/devices/ios/`,
  },
};

export default function IosDevicePage() {
  const device = DEVICE_LIST.find((d) => d.slug === "ios")!;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <Breadcrumbs
        items={[
          { name: "设备接入", href: "/devices/" },
          { name: "iPhone / iPad 接入", href: "/devices/ios/" },
        ]}
      />

      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
          <Tablet className="w-3.5 h-3.5" />
          <span>Apple iOS / iPadOS 平台专用指引</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          自由猫 iPhone / iPad 客户端接入与网络漫游配置
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          iOS 平台拥有出色的能效比与流线型交互体验。本指南针对 Shadowrocket（小火箭）与 Sing-box，详解订阅导入、分流模式选择与跨网络切换的注意事项。
        </p>
      </div>

      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Download className="w-5 h-5 text-amber-600" />
          <span>推荐 iOS 客户端工具</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {device.recommendedClients.map((client) => (
            <div
              key={client.name}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">{client.name}</span>
                <a
                  href={client.openSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                >
                  <span>App Store 入口</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {client.description}
              </p>
              <div className="text-[11px] text-emerald-800 bg-emerald-50 p-2 rounded border border-emerald-200">
                <strong>优势：</strong> {client.pros}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
          iOS 客户端订阅添加与授权步骤
        </h2>
        <div className="space-y-4">
          {device.configurationSteps.map((step) => (
            <div
              key={step.step}
              className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
            >
              <div className="w-8 h-8 rounded-full bg-amber-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                {step.step}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
          <h3 className="text-sm font-bold text-amber-900 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>iOS 使用中的两大易错红线</span>
          </h3>
          <ul className="text-xs text-slate-700 space-y-2">
            <li>
              <strong>全局路由误设为代理</strong>：切勿把首页的“全局路由”拨为“代理”，这会导致发微信刷抖音全部绕路海外，流量几小时跑光。务必保持为“配置 (Config)”。
            </li>
            <li>
              <strong>Wi-Fi 切换 5G 瞬断</strong>：外出断开家庭 Wi-Fi 时，基带芯片重置网关可能导致连接短暂挂起，开启“断开自动重连”可有效缓解。
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>iOS 移动端专项技术长文</span>
            </span>
            <h3 className="text-lg font-bold text-white">
              {device.articleLink.title}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {device.articleLink.intro}
            </p>
          </div>
          <Link
            href={device.articleLink.href}
            className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors"
          >
            <span>阅读 iPhone 移动网络切换排查长文</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
