import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DeviceAccessHub } from "@/components/DeviceAccessHub";
import { SITE_CONFIG } from "@/config/site";
import {
  Monitor,
  Laptop,
  Smartphone,
  Tablet,
  Terminal,
  ArrowRight,
  ShieldAlert,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "设备接入中心｜Windows、macOS、Android、iOS、Linux 客户端配置指南",
  description:
    "自由猫 FreeCat 全平台设备接入中心。提供 Windows 11、MacBook、iPhone、Android 手机与 Linux 系统的 Clash Verge Rev、Sing-box、Shadowrocket 等开源客户端配置教程。",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/devices/`,
  },
};

export default function DevicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <Breadcrumbs items={[{ name: "设备接入", href: "/devices/" }]} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
          <Monitor className="w-3.5 h-3.5" />
          <span>全平台设备接入</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          自由猫 FreeCat 跨平台设备接入中心
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          每种操作系统都有各自独特的网络堆栈、底层驱动与后台电源限制。点击下方独立平台卡片，进入专属排障与配置手册。
        </p>
      </div>

      {/* Quick Platform Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/devices/windows/"
          className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all space-y-3 group"
        >
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Monitor className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
              Windows 11 / 10
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue">
            Windows 客户端接入
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            基于 Clash Verge Rev 部署系统代理与 TUN 虚拟网卡，包含 UWP 回环隔离解除与注册表修复。
          </p>
          <div className="pt-2 flex items-center text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform">
            <span>进入 Windows 详细指引</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </Link>

        <Link
          href="/devices/macos/"
          className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all space-y-3 group"
        >
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Laptop className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
              Apple Silicon / Intel
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue">
            macOS 客户端接入
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            完美适配 Sonoma 与 Sequoia，解决盒盖休眠后唤醒网络挂起、iCloud 专用代理冲突及终端环境变量。
          </p>
          <div className="pt-2 flex items-center text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform">
            <span>进入 macOS 详细指引</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </Link>

        <Link
          href="/devices/android/"
          className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all space-y-3 group"
        >
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Smartphone className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
              Android 11 - 15
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue">
            Android 客户端接入
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            应对小米澎湃 OS、华为鸿蒙与 OPPO/vivo 激进的电池杀后台机制，保持长连接不掉线。
          </p>
          <div className="pt-2 flex items-center text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform">
            <span>进入 Android 详细指引</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </Link>

        <Link
          href="/devices/ios/"
          className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all space-y-3 group"
        >
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Tablet className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700">
              iOS 16 - 18
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue">
            iPhone / iPad 接入
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            通过 Shadowrocket / Sing-box 完成节点导入，解决出门 Wi-Fi 切换 5G 瞬间断连挂起问题。
          </p>
          <div className="pt-2 flex items-center text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform">
            <span>进入 iOS 详细指引</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </Link>

        <Link
          href="/devices/linux/"
          className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all space-y-3 group sm:col-span-2 lg:col-span-1"
        >
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
              <Terminal className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
              Ubuntu / Debian / Arch
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue">
            Linux 终端与服务接入
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            systemd 后台守护进程托管、终端 http_proxy 环境变量设置与软路由网关透明分流。
          </p>
          <div className="pt-2 flex items-center text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform">
            <span>进入 Linux 详细指引</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </Link>
      </div>

      {/* Embedded Full Interactive Hub */}
      <DeviceAccessHub initialSlug="windows" />
    </div>
  );
}
