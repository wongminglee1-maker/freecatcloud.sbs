"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Monitor,
  Laptop,
  Smartphone,
  Tablet,
  Terminal,
  Download,
  ExternalLink,
  ShieldAlert,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { DEVICE_LIST, DeviceInfo } from "@/data/devices";

interface DeviceAccessHubProps {
  initialSlug?: string;
}

export const DeviceAccessHub: React.FC<DeviceAccessHubProps> = ({
  initialSlug = "windows",
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(initialSlug);

  const currentDevice =
    DEVICE_LIST.find((d) => d.slug === selectedSlug) || DEVICE_LIST[0];

  const getDeviceIcon = (slug: string, className = "w-5 h-5") => {
    switch (slug) {
      case "windows":
        return <Monitor className={className} />;
      case "macos":
        return <Laptop className={className} />;
      case "android":
        return <Smartphone className={className} />;
      case "ios":
        return <Tablet className={className} />;
      case "linux":
        return <Terminal className={className} />;
      default:
        return <Monitor className={className} />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 mb-2">
            <span>核心技术差异化模块</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            一种网络需求，多种设备使用方式
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl">
            覆盖 Windows、macOS、iPhone、Android 与 Linux。提供官方认证的主流客户端标准配置与原生网络接入指南。
          </p>
        </div>

        <Link
          href={`/devices/${currentDevice.slug}/`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-brand-blue text-sm font-bold text-slate-700 hover:text-brand-blue shadow-xs transition-colors flex-shrink-0"
        >
          <span>进入 {currentDevice.name} 独立指南</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Device Navigation Bar (Horizontal Scrollable on Mobile, Clean on Desktop) */}
      <div className="bg-slate-100/60 p-2 border-b border-slate-200 overflow-x-auto">
        <div
          className="flex space-x-1.5 min-w-max sm:min-w-0"
          role="tablist"
          aria-label="操作系统平台导航"
        >
          {DEVICE_LIST.map((dev) => {
            const isSelected = dev.slug === selectedSlug;
            return (
              <button
                key={dev.slug}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedSlug(dev.slug)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  isSelected
                    ? "bg-white text-brand-blue shadow-sm border border-slate-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                {getDeviceIcon(dev.slug, "w-4 h-4")}
                <span>{dev.name.replace("客户端接入", "").replace("终端与服务", "")}</span>
                <span className="hidden sm:inline-block text-[10px] font-normal px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                  {dev.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="p-6 sm:p-8 space-y-8">
        {/* Top: Notice regarding 3rd-party open source clients */}
        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-blue-900 leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">软件来源与品牌关系说明：</span>
            本站坚决不伪造或分发任何声称由“自由猫官方开发”的自营安装包。下方列出的是全球开发者公认、开源透明的通用网络客户端（如 Clash Verge Rev、Sing-box、Shadowrocket 等），我们提供中立的配置步骤与官方项目源地址。
          </div>
        </div>

        {/* Section 1: Recommended Clients */}
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Download className="w-4 h-4 text-brand-blue" />
            <span>推荐开源/主流客户端</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentDevice.recommendedClients.map((client) => (
              <div
                key={client.name}
                className="p-4 rounded-xl border border-slate-200 hover:border-blue-200 bg-white hover:bg-blue-50/20 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <span>{client.name}</span>
                    <span className="text-[11px] font-normal px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                      {client.version}
                    </span>
                  </div>
                  <a
                    href={client.openSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-brand-blue hover:underline font-semibold"
                  >
                    <span>官方源</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {client.description}
                </p>
                <div className="text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  <strong>特色：</strong> {client.pros}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Requirements & Permissions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* System Requirements */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              系统要求 (System Requirements)
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">操作系统版本</span>
                <span className="font-semibold text-slate-800 text-right">
                  {currentDevice.systemRequirements.os}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">硬件架构</span>
                <span className="font-semibold text-slate-800 text-right">
                  {currentDevice.systemRequirements.architecture}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">运行内存占用</span>
                <span className="font-semibold text-slate-800 text-right">
                  {currentDevice.systemRequirements.memory}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">网络连接要求</span>
                <span className="font-semibold text-slate-800 text-right">
                  {currentDevice.systemRequirements.network}
                </span>
              </div>
            </div>
          </div>

          {/* Required Permissions */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              必要权限与系统机制说明
            </h4>
            <div className="space-y-2 text-xs">
              {currentDevice.requiredPermissions.map((perm, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>{perm.title}</span>
                  </div>
                  <p className="text-slate-600 pl-5 leading-relaxed">
                    {perm.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Configuration Steps */}
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>订阅配置与连接步骤</span>
          </h3>
          <div className="space-y-3">
            {currentDevice.configurationSteps.map((step) => (
              <div
                key={step.step}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-200/80"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-blue text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  {step.step}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="font-bold text-sm text-slate-900">
                    {step.title}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                  {step.codeSnippet && (
                    <pre className="mt-2 p-2.5 rounded-lg bg-slate-900 text-slate-200 text-xs font-mono overflow-x-auto">
                      <code>{step.codeSnippet}</code>
                    </pre>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: System Restrictions & Troubleshooting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-3">
            <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>常见系统限制与陷阱</span>
            </h4>
            <div className="space-y-2 text-xs">
              {currentDevice.systemRestrictions.map((res, i) => (
                <div key={i} className="space-y-1">
                  <div className="font-bold text-slate-900">{res.title}</div>
                  <p className="text-slate-600">{res.impact}</p>
                  <p className="text-amber-800 bg-white/70 p-1.5 rounded border border-amber-200">
                    <strong>解决办法：</strong> {res.workaround}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>对应平台专项深度文章</span>
              </h4>
              <div className="font-bold text-sm text-slate-900 mb-1">
                {currentDevice.articleLink.title}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {currentDevice.articleLink.intro}
              </p>
            </div>
            <Link
              href={currentDevice.articleLink.href}
              className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold transition-colors shadow-xs"
            >
              <span>阅读完整系统级排查长文</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
