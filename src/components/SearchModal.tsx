"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { Search, X, BookOpen, Smartphone, HelpCircle, ArrowRight, CornerDownLeft } from "lucide-react";
import { ARTICLES_DATA } from "@/data/articles";
import { DEVICE_LIST } from "@/data/devices";
import { FAQ_DATA } from "@/data/faq";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Search algorithm
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { articles: [], devices: [], faqs: [] };

    // Search Articles
    const matchedArticles = ARTICLES_DATA.filter((a) => {
      return (
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.targetDevice.toLowerCase().includes(q) ||
        a.content.toLowerCase().includes(q)
      );
    }).slice(0, 4);

    // Search Devices
    const matchedDevices = DEVICE_LIST.filter((d) => {
      return (
        d.name.toLowerCase().includes(q) ||
        d.slug.toLowerCase().includes(q) ||
        d.recommendedClients.some((c) =>
          c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
        ) ||
        d.systemRestrictions.some((r) =>
          r.title.toLowerCase().includes(q) || r.impact.toLowerCase().includes(q)
        )
      );
    }).slice(0, 3);

    // Search FAQs
    const matchedFaqs = FAQ_DATA.filter((f) => {
      return (
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q) ||
        f.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }).slice(0, 5);

    return {
      articles: matchedArticles,
      devices: matchedDevices,
      faqs: matchedFaqs,
    };
  }, [query]);

  const totalResults =
    results.articles.length + results.devices.length + results.faqs.length;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="全站内容与技术知识搜索"
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索连接排障、设备设置、FAQ 或文章（例如：安卓断线、休眠、7897、分流）..."
            className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-base focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
              aria-label="清空搜索框"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded shadow-xs">
              ESC 关闭
            </kbd>
          )}
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {!query && (
            <div className="py-8 text-center text-slate-500">
              <p className="text-sm font-medium mb-3">支持中文关键词与场景联想搜索</p>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {["Windows 7897 端口", "Mac 休眠断连", "安卓后台保活", "iPhone 蜂窝切换", "流量偷跑", "视频会议声音断续", "家庭旁路由"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="text-xs bg-slate-100 hover:bg-blue-50 hover:text-brand-blue text-slate-600 px-3 py-1.5 rounded-full transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {query && totalResults === 0 && (
            <div className="py-12 text-center text-slate-500">
              <HelpCircle className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <p className="font-semibold text-slate-700">未找到与 “{query}” 相关的内容</p>
              <p className="text-xs text-slate-400 mt-1">
                尝试缩短搜索词，或输入系统名称如 “Windows”、“macOS”、“Android”
              </p>
            </div>
          )}

          {/* Matched Devices */}
          {results.devices.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5" />
                <span>设备接入与客户端 ({results.devices.length})</span>
              </h4>
              <div className="space-y-1.5">
                {results.devices.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/devices/${d.slug}/`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-100 transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-sm text-slate-800 group-hover:text-brand-blue">
                        {d.name}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">
                        推荐客户端：{d.recommendedClients.map((c) => c.name).join("、")}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Matched Articles */}
          {results.articles.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>技术专题与深度文章 ({results.articles.length})</span>
              </h4>
              <div className="space-y-1.5">
                {results.articles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/articles/${a.slug}/`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-100 transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-sm text-slate-800 group-hover:text-brand-blue">
                        {a.title}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">
                        {a.summary}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Matched FAQ */}
          {results.faqs.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>常见问题解答 FAQ ({results.faqs.length})</span>
              </h4>
              <div className="space-y-1.5">
                {results.faqs.map((f) => (
                  <Link
                    key={f.id}
                    href={`/faq/#${f.id}`}
                    onClick={onClose}
                    className="block p-3 rounded-xl hover:bg-slate-50 border border-slate-100 transition-colors group"
                  >
                    <div className="font-semibold text-xs text-slate-800 group-hover:text-brand-blue mb-1">
                      {f.question}
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {f.answer}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <CornerDownLeft className="w-3.5 h-3.5" /> 选择并直接跳转对应指南
          </span>
          <span>自由猫 FreeCat 旗舰知识库</span>
        </div>
      </div>
    </div>
  );
};
