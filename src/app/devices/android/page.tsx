import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DEVICE_LIST } from "@/data/devices";
import { SITE_CONFIG } from "@/config/site";
import {
  Smartphone,
  Download,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Android 客户端接入与后台断线保活指南｜自由猫 FreeCat",
  description:
    "自由猫 FreeCat Android 客户端接入指南。适配小米澎湃 OS、华为鸿蒙、OPPO ColorOS 与 vivo OriginOS，提供 Flclash 与 Sing-box 配置、电池白名单及后台常驻设置。",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/devices/android/`,
  },
};

export default function AndroidDevicePage() {
  const device = DEVICE_LIST.find((d) => d.slug === "android")!;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <Breadcrumbs
        items={[
          { name: "设备接入", href: "/devices/" },
          { name: "Android 客户端接入", href: "/devices/android/" },
        ]}
      />

      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
          <Smartphone className="w-3.5 h-3.5" />
          <span>Android 平台专用指引</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          自由猫 Android 客户端接入与后台保活指南
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Android 系统的碎片化与国产品牌激进的“电池优化杀后台”是移动端断线的最主要原因。本指南教您如何通过正确的应用加锁与权限授权，实现长久稳定的后台常驻。
        </p>
      </div>

      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Download className="w-5 h-5 text-emerald-600" />
          <span>推荐 Android 开源客户端</span>
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
                  <span>官方源</span>
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
          Android 客户端配置与分应用代理步骤
        </h2>
        <div className="space-y-4">
          {device.configurationSteps.map((step) => (
            <div
              key={step.step}
              className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
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
            <span>防息屏断线四大核心操作</span>
          </h3>
          <ul className="text-xs text-slate-700 space-y-2">
            <li>
              <strong>多任务界面加锁</strong>：在多任务卡片下拉或长按，点击锁头图标常驻后台。
            </li>
            <li>
              <strong>电池优化设为无限制</strong>：进入系统设置“应用信息 - 省电策略”，设为无限制。
            </li>
            <li>
              <strong>保持前台常驻通知栏</strong>：绝不要关闭状态栏通知，通知是前台核心服务的存活标志。
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Android 专项技术长文</span>
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
            className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
          >
            <span>阅读 Android 厂商系统保活长文</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
