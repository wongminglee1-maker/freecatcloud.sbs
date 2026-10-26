import React from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { AffiliateButton } from "./AffiliateButton";
import { SITE_CONFIG } from "@/config/site";
import { ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Brand Identity & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="dark" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              自由猫 FreeCat 旗舰服务门户致力于把复杂的网络连接机制、设备代理配置与系统限制，梳理成直观、严谨且可操作的实践指南，为用户打造清晰透明的技术参考平台。
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>官方认证 · 开源客户端配置 · 稳定保障</span>
              </div>
            </div>
            <div className="pt-3">
              <AffiliateButton
                variant="compact"
                label="官网注册端"
                showDisclosureHint={false}
              />
            </div>
          </div>

          {/* Col 3: Products & Services */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              产品与服务架构
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.footerNav.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Devices Center */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              设备接入支持
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.footerNav.devices.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Resources & Legal */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              资源与合规声明
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.footerNav.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {SITE_CONFIG.footerNav.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Bottom Bar: Copyright & IndexNow info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {currentYear} {SITE_CONFIG.name}. 保留所有权利。持续维护日期：
            {SITE_CONFIG.editorial.lastUpdated}。
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/sitemap.xml" className="hover:text-slate-300">
              Sitemap.xml
            </Link>
            <span>•</span>
            <Link href="/robots.txt" className="hover:text-slate-300">
              Robots.txt
            </Link>
            <span>•</span>
            <Link href="/privacy/" className="hover:text-slate-300">
              隐私权政策
            </Link>
            <span>•</span>
            <Link href="/terms/" className="hover:text-slate-300">
              服务条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
