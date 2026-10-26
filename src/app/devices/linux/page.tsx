import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DEVICE_LIST } from "@/data/devices";
import { SITE_CONFIG } from "@/config/site";
import {
  Terminal,
  Download,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Linux 客户端与服务接入指南｜自由猫 FreeCat",
  description:
    "自由猫 FreeCat Linux 环境接入指南。针对 Ubuntu、Debian 与 Arch Linux，提供 Mihomo (Clash Meta) 与 Sing-box 二进制部署、systemd 开机自启守护及终端环境变量配置。",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/devices/linux/`,
  },
};

export default function LinuxDevicePage() {
  const device = DEVICE_LIST.find((d) => d.slug === "linux")!;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <Breadcrumbs
        items={[
          { name: "设备接入", href: "/devices/" },
          { name: "Linux 终端与服务接入", href: "/devices/linux/" },
        ]}
      />

      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-800">
          <Terminal className="w-3.5 h-3.5" />
          <span>Linux 服务器与开发工作站</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          自由猫 Linux 终端与守护进程配置指南
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Linux 系统没有统一的 GUI 网络接口，终端命令行、桌面环境与后台服务彼此隔离。本指南基于原生高性能二进制文件与 systemd，助您打造高可靠的后台服务链路。
        </p>
      </div>

      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Download className="w-5 h-5 text-slate-700" />
          <span>推荐 Linux 编译二进制核心</span>
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
                  <span>官方源 Releases</span>
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
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-brand-blue" />
          <span>Linux 终端配置步骤与命令行示例</span>
        </h2>
        <div className="space-y-4">
          {device.configurationSteps.map((step) => (
            <div
              key={step.step}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center">
                  {step.step}
                </span>
                <h3 className="font-bold text-slate-900 text-sm">
                  {step.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                {step.description}
              </p>
              {step.codeSnippet && (
                <div className="pl-8 pt-1">
                  <pre className="p-3 rounded-lg bg-slate-900 text-slate-200 text-xs font-mono overflow-x-auto">
                    <code>{step.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
          <h3 className="text-sm font-bold text-amber-900 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Linux 常见系统陷阱</span>
          </h3>
          <ul className="text-xs text-slate-700 space-y-2">
            <li>
              <strong>终端代理隔离</strong>：桌面代理不影响终端。必须在 <code>~/.bashrc</code> 添加 <code>export http_proxy=...</code> 才能使 curl / git 走代理。
            </li>
            <li>
              <strong>systemd-resolved 冲突</strong>：开启透明代理时，注意不要与本地 127.0.0.53 发生死锁。
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>家庭网络与网关专题</span>
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
            className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors border border-slate-700"
          >
            <span>阅读家庭旁路由网络配置长文</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
