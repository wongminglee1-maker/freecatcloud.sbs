import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DEVICE_LIST } from "@/data/devices";
import { SITE_CONFIG } from "@/config/site";
import {
  Laptop,
  Download,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "macOS 客户端接入与 MacBook 休眠唤醒排查｜自由猫 FreeCat",
  description:
    "自由猫 FreeCat macOS 客户端接入指南。适配 Apple Silicon (M1-M4) 与 Intel 芯片，解决 MacBook 盒盖休眠断网、iCloud 专用代理冲突及终端 Terminal 代理配置。",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/devices/macos/`,
  },
};

export default function MacOsDevicePage() {
  const device = DEVICE_LIST.find((d) => d.slug === "macos")!;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <Breadcrumbs
        items={[
          { name: "设备接入", href: "/devices/" },
          { name: "macOS 客户端接入", href: "/devices/macos/" },
        ]}
      />

      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">
          <Laptop className="w-3.5 h-3.5" />
          <span>Apple macOS 平台专用指引</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          自由猫 macOS 客户端接入与休眠唤醒排查
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          全面支持搭载 M1 至 M4 系列芯片的 MacBook 与 Mac 桌面电脑。通过原生适配的 Clash Verge Rev 或 Sing-box 客户端，享受沉浸式菜单栏状态管理与快速分流。
        </p>
      </div>

      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Download className="w-5 h-5 text-indigo-600" />
          <span>推荐 macOS 开源客户端</span>
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
          macOS 安装与订阅导入配置流程
        </h2>
        <div className="space-y-4">
          {device.configurationSteps.map((step) => (
            <div
              key={step.step}
              className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
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
            <span>MacBook 典型陷阱：休眠与 iCloud 专用代理</span>
          </h3>
          <ul className="text-xs text-slate-700 space-y-2">
            <li>
              <strong>休眠 Socket 挂起</strong>：盒盖待机后再开盖，旧长连接失效导致网页等待 15 秒。可通过菜单栏重启内核或配置保活参数修复。
            </li>
            <li>
              <strong>iCloud 专用代理</strong>：苹果专用代理会二重加密 Safari 流量，导致本地客户端分流失效。建议在系统设置中将其关闭。
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Mac 专属技术长文</span>
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
            className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors"
          >
            <span>阅读 MacBook 休眠唤醒深度长文</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
