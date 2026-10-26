import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Smartphone,
  Laptop,
  Monitor,
  Activity,
  CheckCircle,
  HelpCircle,
  BookOpen,
  Layers,
  Sparkles,
  Lock,
  Wifi,
  ExternalLink,
} from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { NetworkKnowledgeGraph } from "@/components/NetworkKnowledgeGraph";
import { DeviceAccessHub } from "@/components/DeviceAccessHub";
import { PlanSelectorWizard } from "@/components/PlanSelectorWizard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ARTICLES_DATA } from "@/data/articles";
import { SITE_CONFIG } from "@/config/site";

export default function HomePage() {
  return (
    <div className="w-full space-y-16 sm:space-y-24 pb-20">
      {/* ─────────────────────────────────────────────────────────────
          MODULE A: 首屏 Hero (左文右图布局)
      ────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-slate-50 pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Action Buttons */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-extrabold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                <span>{SITE_CONFIG.seo.home.badge}</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                自由猫 <span className="text-brand-blue">FreeCat</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 mt-2">
                  把复杂的连接问题，整理成简单的答案
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {SITE_CONFIG.tagline}。{SITE_CONFIG.subTagline}
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/services/"
                  className="px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-sm sm:text-base font-bold shadow-md shadow-blue-600/20 hover:shadow-lg transition-all active:translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>了解服务体系</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/devices/"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-sm sm:text-base font-bold border border-slate-300 shadow-xs transition-all active:translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>进入设备中心</span>
                  <Laptop className="w-4 h-4 text-slate-500" />
                </Link>

                <AffiliateButton
                  variant="outline"
                  label="客户订阅中心"
                  showDisclosureHint={false}
                />
              </div>

              {/* Verified Neutrality Points */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>开源客户端通用配置</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>真实系统排障流程</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>官方直营品质保障</span>
                </div>
              </div>
            </div>

            {/* Right Column: Original Multi-Device Interface Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-3xl blur-2xl -z-10" />

                {/* Main Composite Card */}
                <div className="bg-slate-900 rounded-3xl p-6 sm:p-7 text-white shadow-2xl border border-slate-800 space-y-6">
                  {/* Laptop Mockup Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-xs font-mono text-slate-400 ml-2">
                        FreeCat Engine v2.4 (Schematic UI)
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Rule Mode
                    </span>
                  </div>

                  {/* Visual Node Routing Path (Schematic Curves) */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">本地客户端协议栈</span>
                        <span className="text-blue-400 font-mono">127.0.0.1:7897</span>
                      </div>
                      {/* Connection Graph Line */}
                      <div className="flex items-center justify-between gap-2 py-1">
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-center flex-1">
                          <Laptop className="w-4 h-4 mx-auto text-blue-400 mb-1" />
                          <span className="text-[10px] text-slate-300 block">终端请求</span>
                        </div>
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-500 to-teal-400 relative">
                          <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 shadow-xs" />
                        </div>
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-center flex-1">
                          <Layers className="w-4 h-4 mx-auto text-teal-400 mb-1" />
                          <span className="text-[10px] text-slate-300 block">规则分流</span>
                        </div>
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-teal-400 to-indigo-500" />
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-center flex-1">
                          <Wifi className="w-4 h-4 mx-auto text-indigo-400 mb-1" />
                          <span className="text-[10px] text-slate-300 block">专线中转</span>
                        </div>
                      </div>
                    </div>

                    {/* Multi-Device Status Badges */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-2.5">
                        <Monitor className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-slate-200">Windows 11</div>
                          <div className="text-[10px] text-slate-400">TUN 驱动就绪</div>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-2.5">
                        <Smartphone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-slate-200">iOS / Android</div>
                          <div className="text-[10px] text-slate-400">分应用策略激活</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer note: Explicitly states schematic interface */}
                  <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-slate-500" /> 架构拓扑示意
                    </span>
                    <span className="text-slate-400">示意界面 · 非实时测速</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MODULE B: 服务总览 (找到适合自己网络环境的使用方式)
      ────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 uppercase tracking-wider">
            <span>一站式服务门户体系</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            找到适合自己网络环境的使用方式
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            摒弃杂乱无章的卡片模板，自由猫服务门户按照真实数字工作流，将服务知识划分为三段式信息结构。
          </p>
        </div>

        {/* Three-Tier Horizontal Layout */}
        <div className="space-y-6">
          {/* Part 1: 日常使用 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="md:w-1/3 space-y-1">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                第一部分 · 基础网络交互
              </span>
              <h3 className="text-xl font-bold text-slate-900">日常网络使用</h3>
              <p className="text-xs text-slate-500">
                针对高频网页浏览、搜索引擎资料检索与移动即时通讯
              </p>
            </div>
            <div className="md:w-1/2 text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
              <p>
                在日常查阅 GitHub 开源项目、浏览学术文献与使用 ChatGPT 时，分流规则引擎能够自动识别域名特征，避免国内应用误走代理导致网络延迟升高或触发登录异地风控。
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-xs font-semibold text-slate-700">
                <span className="px-2.5 py-1 rounded-md bg-slate-100">规则智能分流</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100">国内网站直连</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100">轻量系统常驻</span>
              </div>
            </div>
            <div className="md:w-1/6 text-right">
              <Link
                href="/services/#daily"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:underline"
              >
                <span>查看配置细节</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Part 2: 跨设备协作 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="md:w-1/3 space-y-1">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                第二部分 · 多终端流转
              </span>
              <h3 className="text-xl font-bold text-slate-900">跨设备协同与订阅</h3>
              <p className="text-xs text-slate-500">
                电脑、手机与平板之间的配置分发与在线设备限额管理
              </p>
            </div>
            <div className="md:w-1/2 text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
              <p>
                通过标准化订阅 URL，用户无需在多台设备上繁琐手动录入节点 IP 与端口。了解各套餐档位的在线设备数上限，科学配置定时自动拉取更新周期，杜绝因并发超限被自动断开。
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-xs font-semibold text-slate-700">
                <span className="px-2.5 py-1 rounded-md bg-slate-100">在线设备上限规范</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100">订阅定时自动更新</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100">跨系统配置复用</span>
              </div>
            </div>
            <div className="md:w-1/6 text-right">
              <Link
                href="/services/#cross-device"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:underline"
              >
                <span>查看协同原则</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Part 3: 问题排查 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="md:w-1/3 space-y-1">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                第三部分 · 疑难应急处置
              </span>
              <h3 className="text-xl font-bold text-slate-900">连通性与故障排查</h3>
              <p className="text-xs text-slate-500">
                系统代理残留、DNS 污染、杀毒软件拦截与内核崩溃急救
              </p>
            </div>
            <div className="md:w-1/2 text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
              <p>
                提供覆盖 Windows 注册表 Internet Settings 修复、Mac 盒盖休眠断网重启、Android 电池优化白名单与 iOS 蜂窝网络漫游切换的全套工程化排错指引，彻底摆脱“上不去网不知所措”。
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-xs font-semibold text-slate-700">
                <span className="px-2.5 py-1 rounded-md bg-slate-100">注册表代理恢复</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100">DNS 缓存刷新</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100">保活白名单配置</span>
              </div>
            </div>
            <div className="md:w-1/6 text-right">
              <Link
                href="/help/"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:underline"
              >
                <span>前往排障专区</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MODULE C: 线路与网络信息中心 (交互式网络知识图)
      ────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NetworkKnowledgeGraph />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MODULE D: 设备接入中心 (核心差异化模块)
      ────────────────────────────────────────────────────────────── */}
      <section id="devices" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DeviceAccessHub initialSlug="windows" />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MODULE E: 套餐中心与决策小工具 (先理解使用需求，再选择服务方案)
      ────────────────────────────────────────────────────────────── */}
      <section id="plans" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PlanSelectorWizard />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MODULE F: 7 篇全新原创深度文章专题 (SEO & 实操核心)
      ────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>长文知识库</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              自由猫原创技术专题与实操教程
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              每篇 1500–2000 字严谨论述，拒绝假空口号，直击操作系统与网络配置本质。
            </p>
          </div>
          <Link
            href="/articles/"
            className="text-xs sm:text-sm font-bold text-brand-blue hover:underline inline-flex items-center gap-1 flex-shrink-0"
          >
            <span>浏览全部 7 篇专题长文</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES_DATA.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}/`}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                    {article.category}
                  </span>
                  <span className="text-slate-400 font-mono">
                    {article.readingTime}
                  </span>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-brand-blue leading-snug line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">{article.targetDevice}</span>
                <span className="font-bold text-brand-blue group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>阅读全文</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MODULE G: 常见问答中心 (15 项高频技术问答)
      ────────────────────────────────────────────────────────────── */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>常见疑问解答</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            自由猫连接与服务核心 FAQ
          </h2>
          <p className="text-slate-600 text-sm">
            解答关于平台性质、真伪辨识、设备权限、流量规则与网络抖动的深度疑问。
          </p>
        </div>

        <FaqAccordion limit={6} showCategoryTabs={false} />

        <div className="text-center pt-2">
          <Link
            href="/faq/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
          >
            <span>查看完整 15 项常见问题与分类检索</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MODULE H: 官方服务与技术支持横幅
      ────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold">
              准备好体验自由猫官方旗舰网络了吗？
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              遵循官方配置指南完成客户端设置后，即可前往官方客户订阅中心挑选适合您网络环境的高速专线节点。如有疑问欢迎查阅排障中心。
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <AffiliateButton
              variant="hero"
              label="客户订阅中心"
              showDisclosureHint={false}
              className="w-full md:w-auto"
            />
            <Link
              href="/help/"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold transition-colors w-full md:w-auto text-center border border-slate-700"
            >
              故障排查知识库
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
