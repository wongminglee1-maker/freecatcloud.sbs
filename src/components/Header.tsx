"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Monitor,
  Laptop,
  Smartphone,
  Tablet,
  Terminal,
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { AffiliateButton } from "./AffiliateButton";
import { SearchModal } from "./SearchModal";
import { SITE_CONFIG } from "@/config/site";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [deviceDropdownOpen, setDeviceDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDeviceDropdownOpen(false);
  }, [pathname]);

  const deviceIcons: Record<string, React.ReactNode> = {
    Monitor: <Monitor className="w-4 h-4 text-blue-600" />,
    Laptop: <Laptop className="w-4 h-4 text-indigo-600" />,
    Smartphone: <Smartphone className="w-4 h-4 text-emerald-600" />,
    Tablet: <Tablet className="w-4 h-4 text-amber-600" />,
    Terminal: <Terminal className="w-4 h-4 text-slate-700" />,
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80"
            : "bg-white border-b border-slate-200"
        }`}
      >
        {/* Top Mini Banner: Official Entity Guarantee Notice */}
        <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-xs py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-1.5 truncate">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span className="truncate">
                自由猫 FreeCat 官方旗舰服务门户：全平台设备配置支持与官方正品线路保障
              </span>
            </div>
            <div className="hidden md:flex items-center gap-3 flex-shrink-0 text-slate-400">
              <span>官方域名：freecatcloud.sbs</span>
              <span className="text-slate-600">|</span>
              <Link
                href="/about/"
                className="hover:text-white transition-colors"
              >
                关于自由猫
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 xl:gap-6">
            {/* Left: Brand Logo */}
            <BrandLogo />

            {/* Center: Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 2xl:space-x-2 flex-shrink-0"
              aria-label="主要导航"
            >
              {SITE_CONFIG.nav.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.name}
                      className="relative flex-shrink-0"
                      onMouseEnter={() => setDeviceDropdownOpen(true)}
                      onMouseLeave={() => setDeviceDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        className={`px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg inline-flex items-center gap-1 transition-colors whitespace-nowrap flex-shrink-0 ${
                          isActive
                            ? "text-brand-blue bg-blue-50/80"
                            : "text-slate-700 hover:text-brand-blue hover:bg-slate-100/70"
                        }`}
                        aria-expanded={deviceDropdownOpen}
                      >
                        <span className="whitespace-nowrap">{item.name}</span>
                        <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:rotate-180 flex-shrink-0" />
                      </button>

                      {/* Mega Menu / Dropdown */}
                      {deviceDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 p-3 bg-white rounded-2xl shadow-xl border border-slate-200 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                          <div className="px-2 py-1 mb-2 border-b border-slate-100">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              全平台系统配置指南
                            </span>
                          </div>
                          <div className="space-y-1">
                            {SITE_CONFIG.deviceNav.map((d) => (
                              <Link
                                key={d.href}
                                href={d.href}
                                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group"
                              >
                                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-blue-200 transition-colors">
                                  {deviceIcons[d.icon]}
                                </div>
                                <div className="flex-1">
                                  <div className="text-xs font-bold text-slate-800 group-hover:text-brand-blue">
                                    {d.name}
                                  </div>
                                  <div className="text-[11px] text-slate-400">
                                    {d.os}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-2 pt-2 border-t border-slate-100 px-2">
                            <Link
                              href="/devices/"
                              className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                            >
                              <span>查看设备中心概览</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap flex-shrink-0 ${
                      isActive
                        ? "text-brand-blue bg-blue-50/80"
                        : "text-slate-700 hover:text-brand-blue hover:bg-slate-100/70"
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right: Search & Action Button */}
            <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 flex-shrink-0">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3 py-2 text-xs font-medium text-slate-500 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors border border-slate-200/70 whitespace-nowrap flex-shrink-0"
                aria-label="搜索全站内容"
              >
                <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span className="hidden xl:inline whitespace-nowrap">搜索故障/设置...</span>
                <span className="hidden lg:inline xl:hidden whitespace-nowrap">搜索</span>
                <kbd className="hidden sm:inline-block text-[10px] bg-white text-slate-400 px-1.5 py-0.5 rounded border border-slate-200 whitespace-nowrap flex-shrink-0">
                  Ctrl K
                </kbd>
              </button>

              <AffiliateButton
                variant="primary"
                label="用户注册入口"
                showDisclosureHint={false}
              />
            </div>

            {/* Mobile Menu & Search Controls */}
            <div className="flex sm:hidden items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="p-2 text-slate-600 hover:text-brand-blue rounded-lg hover:bg-slate-100"
                aria-label="打开搜索"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-brand-blue rounded-lg hover:bg-slate-100"
                aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-xl">
            <div className="space-y-1">
              {SITE_CONFIG.nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                      isActive
                        ? "text-brand-blue bg-blue-50"
                        : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Device Sublinks */}
            <div className="pt-2 border-t border-slate-100">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                设备指南快速直达
              </span>
              <div className="grid grid-cols-2 gap-1.5 px-1">
                {SITE_CONFIG.deviceNav.map((d) => (
                  <Link
                    key={d.href}
                    href={d.href}
                    className="p-2 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-brand-blue rounded-lg truncate border border-slate-100"
                  >
                    {d.name.replace("客户端接入", "").replace("终端与服务", "")}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Affiliate button */}
            <div className="pt-2">
              <AffiliateButton
                variant="hero"
                label="用户注册入口"
                className="w-full"
                showDisclosureHint={false}
              />
            </div>
          </div>
        )}
      </header>

      {/* Global Chinese Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
