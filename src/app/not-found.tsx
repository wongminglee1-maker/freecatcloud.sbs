import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, BookOpen, Laptop, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-brand-blue font-extrabold text-2xl shadow-inner">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            页面未找到 (Page Not Found)
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            抱歉，您访问的网址不存在或已被迁移。请使用下方导航返回或查阅核心指南。
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <Link
            href="/"
            className="p-3 bg-white hover:bg-blue-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:text-brand-blue flex items-center justify-center gap-1.5 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>返回门户首页</span>
          </Link>
          <Link
            href="/devices/"
            className="p-3 bg-white hover:bg-blue-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:text-brand-blue flex items-center justify-center gap-1.5 transition-colors"
          >
            <Laptop className="w-4 h-4" />
            <span>设备接入中心</span>
          </Link>
          <Link
            href="/articles/"
            className="p-3 bg-white hover:bg-blue-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:text-brand-blue flex items-center justify-center gap-1.5 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>技术专题文章</span>
          </Link>
          <Link
            href="/help/"
            className="p-3 bg-white hover:bg-blue-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:text-brand-blue flex items-center justify-center gap-1.5 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            <span>故障排查帮助</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
