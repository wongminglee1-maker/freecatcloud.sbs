import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/config/site";
import { Shield, Lock, EyeOff, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "隐私政策声明｜自由猫 FreeCat 旗舰门户",
  description:
    "自由猫 FreeCat 官方旗舰服务门户（freecatcloud.sbs）隐私保护政策。说明本站无侵入式用户数据收集、静态浏览隐私安全与客户账户隐私保护机制。",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/privacy/`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <Breadcrumbs items={[{ name: "隐私政策", href: "/privacy/" }]} />

      <header className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
          <Shield className="w-3.5 h-3.5" />
          <span>数据保护与隐私承诺</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          自由猫 FreeCat 隐私政策声明
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          生效日期：2026年10月26日。本站尊重并保护每一位访问者的隐私权，绝不违规收集、倒卖或滥用您的个人信息。
        </p>
      </header>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            一、我们不收集哪些信息
          </h2>
          <p>
            自由猫 FreeCat（freecatcloud.sbs）是一个<strong>免注册的静态知识与技术指南网站</strong>：
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>本站不需要用户注册账号，不要求输入手机号、身份证号或电子邮箱；</li>
            <li>本站不要求输入任何银行卡号、支付宝或微信支付凭证；</li>
            <li>本站不要求上传您的个人订阅链接或私有节点密钥；</li>
            <li>本站不架设任何监听您日常网页浏览或网络流量的嗅探系统。</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            二、网络访问日志与基础技术数据
          </h2>
          <p>
            当您访问本站时，托管服务器（如 Cloudflare / Vercel / Nginx 网关）会自动记录标准的 Web 访问日志，包括您的 IP 地址、浏览器 User-Agent、访问时间与请求的 URL。此类日志仅用于保障网络基础设施抵御 DDoS 恶意攻击、排查服务器错误，并在保留法定周期后被系统自动轮换删除，绝不与任何个人真实身份进行关联匹配。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            三、Cookie 与本地存储 (LocalStorage)
          </h2>
          <p>
            本站仅使用极少量的本地客户端存储机制，用于保存您的界面偏好（例如搜索历史记录、折叠展开状态与深浅色模式偏好）。本站不使用任何侵入式的第三方追踪 Cookie（Third-party Tracking Cookies）。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            四、官方客户订阅与账户数据保护
          </h2>
          <p>
            当您通过本站【用户注册入口】或【客户订阅中心】进入自由猫官方用户系统时，所有的账户注册、订阅生成与计费流程均在受严格安全加密保护的官方服务体系下进行。我们采用端到端传输加密技术，全力保护您的账户隐私与凭据安全，绝不向任何无关外部机构透露您的个人资料。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            五、隐私事务联系方式
          </h2>
          <p>
            如果您对本站的隐私政策有任何疑问或投诉，可通过电子邮件与我们的合规主管联系：
            <span className="font-mono text-brand-blue font-semibold ml-1">
              compliance@freecatcloud.sbs
            </span>
            。
          </p>
        </section>
      </div>
    </div>
  );
}
