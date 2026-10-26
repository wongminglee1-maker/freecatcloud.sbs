import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/config/site";
import {
  Mail,
  MessageSquare,
  ShieldCheck,
  Send,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "联系我们与技术反馈｜自由猫 FreeCat 旗舰门户",
  description:
    "联系自由猫 FreeCat 编辑部。提供文章勘误、设备配置反馈、合作咨询与隐私问题沟通渠道。我们承诺在 48 小时内核实技术反馈。",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/contact/`,
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <Breadcrumbs items={[{ name: "联系我们", href: "/contact/" }]} />

      <header className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>互动与勘误渠道</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          联系自由猫 FreeCat 知识指南编辑部
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          如果您在按照本站指南操作时发现了版本过期的配置步骤、失效的开源链接，或有新的操作系统排障经验分享，欢迎随时通过以下方式与我们交流。
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact channels */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Mail className="w-5 h-5 text-brand-blue" />
            <span>官方联系邮箱与处理时效</span>
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              <strong>技术勘误与内容投稿：</strong>
              <br />
              <span className="font-mono text-brand-blue font-semibold">
                editorial@freecatcloud.sbs
              </span>
            </p>
            <p>
              <strong>合规审核与隐私事务：</strong>
              <br />
              <span className="font-mono text-brand-blue font-semibold">
                compliance@freecatcloud.sbs
              </span>
            </p>
            <p className="pt-2 text-xs text-slate-400">
              常规工作日处理时效：24 - 48 小时。请在邮件中清晰注明问题发生的操作系统版本与客户端版本。
            </p>
          </div>
        </div>

        {/* Customer Support Guidance */}
        <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-blue" />
            <span>官方客户服务与工单支持</span>
          </h2>
          <div className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
            <p>
              <strong>账号与订阅服务：</strong> 如需查询您的官方账号订阅状态、流量额度、重置节点信息或处理账单工单，请直接访问【客户订阅中心】登录您的用户后台。
            </p>
            <p>
              自由猫官方技术工程师提供全天候工单响应与在线网络诊断支持，保障您的服务顺畅运行。
            </p>
          </div>
        </div>
      </div>

      {/* Suggested template for feedback */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-base font-bold text-slate-900">
          建议提交的技术反馈格式模板
        </h2>
        <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto space-y-1">
          <p className="text-slate-400">// 复制此模板并发送至 editorial@freecatcloud.sbs</p>
          <p>【问题页面】：https://freecatcloud.sbs/articles/windows-proxy-dns/</p>
          <p>【操作系统】：Windows 11 23H2 (OS Build 22631.3880)</p>
          <p>【客户端软件】：Clash Verge Rev v2.0.2</p>
          <p>【发现问题】：第四步在管理员执行 ipconfig /flushdns 后...</p>
          <p>【建议修正说明】：建议补充对于禁用系统代理的批处理脚本示例。</p>
        </div>
      </section>
    </div>
  );
}
