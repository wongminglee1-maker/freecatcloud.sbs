import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DEVICE_LIST } from "@/data/devices";
import { SITE_CONFIG } from "@/config/site";
import {
  Monitor,
  Download,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";

export const metadata: Metadata = {
  title: "Windows 11 / 10 客户端接入与设置指南｜自由猫 FreeCat",
  description:
    "自由猫 FreeCat Windows 11/10 官方接入指南。包含 Clash Verge Rev 与 v2rayN 客户端配置、系统代理开关、TUN 虚拟网卡驱动安装与 UWP 本地回环网络隔离修复。",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/devices/windows/`,
  },
};

export default function WindowsDevicePage() {
  const device = DEVICE_LIST.find((d) => d.slug === "windows")!;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <Breadcrumbs
        items={[
          { name: "设备接入", href: "/devices/" },
          { name: "Windows 客户端接入", href: "/devices/windows/" },
        ]}
      />

      {/* Hero Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
          <Monitor className="w-3.5 h-3.5" />
          <span>Windows 11 / 10 专用指引</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          自由猫 Windows 11 客户端接入与系统配置
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Windows 拥有极其完善的网络协议栈支持，也是广大工程师与职场人士最常用的工作环境。本指南将指导您基于开源的 Clash Verge Rev 客户端建立稳定、纯净的规则分流通道。
        </p>
      </div>

      {/* Recommended Clients */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Download className="w-5 h-5 text-brand-blue" />
          <span>推荐 Windows 开源客户端软件</span>
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
                  <span>GitHub 项目仓库</span>
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

      {/* Step by Step Configuration */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
          Windows 11 详细配置操作步骤
        </h2>
        <div className="space-y-4">
          {device.configurationSteps.map((step) => (
            <div
              key={step.step}
              className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
            >
              <div className="w-8 h-8 rounded-full bg-brand-blue text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
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

      {/* System Pitfalls & Link to in-depth article */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
          <h3 className="text-sm font-bold text-amber-900 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Windows 11 特殊系统限制注意</span>
          </h3>
          <ul className="text-xs text-slate-700 space-y-2">
            <li>
              <strong>UWP 回环隔离</strong>：微软商店应用（包括 Edge 部分插件）默认无法访问本地代理端口。在客户端设置中运行“UWP Loopback 工具”勾选保存即可解决。
            </li>
            <li>
              <strong>杀毒软件干扰</strong>：某些卫士软件清理垃圾时会静默关闭注册表代理端口。如遇突然断网，请先检查系统代理设置。
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>专项技术长文</span>
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
            className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold transition-colors"
          >
            <span>阅读 Windows 11 进阶排障长文</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
