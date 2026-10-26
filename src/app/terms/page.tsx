import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/config/site";
import { FileText, AlertTriangle, Scale, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "使用条款与服务规范｜自由猫 FreeCat 官方旗舰门户",
  description:
    "自由猫 FreeCat 官方旗舰服务门户（freecatcloud.sbs）使用条款、合规使用须知与知识产权说明。规范开源技术引用与官方服务规范。",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/terms/`,
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <Breadcrumbs items={[{ name: "服务条款", href: "/terms/" }]} />

      <header className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
          <Scale className="w-3.5 h-3.5" />
          <span>法律协议与合规须知</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          自由猫 FreeCat 服务条款与使用规范
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          访问与使用本网站即代表您已阅读并完全同意下述条款。请在遵守当地法律法规的前提下进行技术学习与合规网络配置。
        </p>
      </header>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>一、网站性质与官方旗舰门户定位</span>
          </h2>
          <p>
            本网站（域名：freecatcloud.sbs）为自由猫 FreeCat 官方旗舰服务门户。本站为广大用户提供官方线路订阅支持、操作系统网络设置指南、常见连接故障排查知识库与网络指标科普，保障官方网络服务与全平台设备接入体验。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            二、合规合法使用与严正约定
          </h2>
          <p>
            用户在使用本站介绍的网络分流技术、客户端工具及官方网络服务时，<strong>必须严格遵守中华人民共和国各项法律法规</strong>，以及用户物理所在地与目标服务器所在地的法律规范：
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>严禁利用相关网络通道从事危害国家安全、泄露国家机密、破坏网络秩序的违法行为；</li>
            <li>严禁从事电信网络诈骗、洗钱、黑客攻击、入侵计算机系统或滥用爬虫破坏他人服务器；</li>
            <li>严禁利用专线中转网络大量下载侵犯著作权的盗版影视、音乐或运行 P2P 种子暴力做种；</li>
            <li>严禁从事任何违反公序良俗或网络空间管理规范的活动。</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            三、技术指南操作提示
          </h2>
          <p>
            本站提供的所有操作系统命令、注册表配置、系统代理开关教程与诊断步骤，均本着严谨负责之原则编写。由于各用户电脑的软硬件环境极其复杂（如系统安装的安全杀毒管家、企业 MDM 设备策略、特定固件版本），建议用户在操作复杂系统命令前做好配置备份，按照官方排障流程循序渐进排查。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            四、开源客户端与软件协议规范
          </h2>
          <p>
            本站指南中引用的 Clash Verge Rev、v2rayN、Sing-box、Shadowrocket 等软件，其著作权与商标权完全归属于各自的开源开发者或原作者。本站遵循开源协议规范，仅提供前往其官方 GitHub Releases 仓库或官方 App Store 的公开安装指引，保障纯净安全。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            五、官方服务保障与服务范围说明
          </h2>
          <p>
            本站为自由猫 FreeCat 官方旗舰服务门户。通过官方用户中心或订阅中心选购的官方网络加速套餐，享有自由猫官方标准化 SLA 保障与技术工单支持。用户应遵循网络服务公约与合规使用守则，享受安全纯净的网络连接服务。
          </p>
        </section>
      </div>
    </div>
  );
}
