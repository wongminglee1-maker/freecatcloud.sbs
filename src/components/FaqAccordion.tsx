"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, ArrowRight, HelpCircle } from "lucide-react";
import { FAQ_DATA, FaqItem } from "@/data/faq";

interface FaqAccordionProps {
  initialOpenId?: string;
  limit?: number;
  showCategoryTabs?: boolean;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  initialOpenId,
  limit,
  showCategoryTabs = true,
}) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    if (initialOpenId) {
      init[initialOpenId] = true;
    } else {
      init["faq-1"] = true; // First FAQ open by default
    }
    return init;
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      if (hashId) {
        setOpenItems((prev) => ({ ...prev, [hashId]: true }));
        const el = document.getElementById(hashId);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
        }
      }
    }
  }, []);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = [
    { id: "all", label: "全部问答 (15)" },
    { id: "brand", label: "品牌与定位" },
    { id: "device", label: "系统与设备" },
    { id: "network", label: "网络与线路" },
    { id: "security", label: "安全与规范" },
    { id: "troubleshooting", label: "故障排障" },
  ];

  // Filtering
  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;

    const q = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !q ||
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      item.keywords.some((k) => k.toLowerCase().includes(q));

    return matchesCategory && matchesQuery;
  });

  const displayList = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  return (
    <div className="space-y-6">
      {/* Category Tabs & Quick Search */}
      {showCategoryTabs && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Categories */}
          <div
            className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0"
            role="tablist"
            aria-label="FAQ 分类筛选"
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    isSelected
                      ? "bg-brand-blue text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search box inside FAQ */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="在 15 个常见问题中搜索..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
        </div>
      )}

      {/* Accordion Items List */}
      <div className="space-y-3">
        {displayList.length === 0 ? (
          <div className="p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200">
            <HelpCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-semibold">未找到匹配的问题</p>
            <p className="text-xs text-slate-400 mt-1">
              请尝试其他关键词或清除分类筛选
            </p>
          </div>
        ) : (
          displayList.map((item) => {
            const isOpen = !!openItems[item.id];
            const contentId = `faq-content-${item.id}`;
            const buttonId = `faq-btn-${item.id}`;

            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleItem(item.id);
                    }
                  }}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer select-none"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                        {item.categoryLabel}
                      </span>
                    </div>
                    <span className="font-bold text-sm sm:text-base text-slate-900 block leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`p-1.5 rounded-lg bg-slate-100 text-slate-600 transition-transform duration-200 flex-shrink-0 mt-1 ${
                      isOpen ? "rotate-180 bg-blue-100 text-blue-700" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30"
                  >
                    <p className="whitespace-pre-line">{item.answer}</p>

                    {item.actionLink && (
                      <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                        <Link
                          href={item.actionLink.href}
                          className="font-bold text-brand-blue hover:underline inline-flex items-center gap-1"
                        >
                          <span>{item.actionLink.text}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
