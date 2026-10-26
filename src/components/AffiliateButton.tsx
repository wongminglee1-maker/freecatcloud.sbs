"use client";

import React, { useState } from "react";
import { ExternalLink, Info, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface AffiliateButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "hero" | "compact" | "outline";
  className?: string;
  showDisclosureHint?: boolean;
}

export const AffiliateButton: React.FC<AffiliateButtonProps> = ({
  label,
  variant = "primary",
  className = "",
  showDisclosureHint = false,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { affiliate } = SITE_CONFIG;
  const buttonText = label || affiliate.label;

  const baseClasses =
    "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-lg text-center cursor-pointer select-none group whitespace-nowrap flex-shrink-0";

  const variantStyles = {
    primary:
      "bg-brand-blue hover:bg-brand-blue-hover text-white px-4 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm shadow-md shadow-blue-500/15 hover:shadow-lg hover:shadow-blue-500/25 active:translate-y-0.5",
    secondary:
      "bg-slate-900 hover:bg-slate-800 text-white px-4 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm shadow-sm hover:shadow active:translate-y-0.5",
    hero:
      "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base lg:text-lg shadow-lg shadow-blue-600/25 hover:shadow-xl active:translate-y-0.5",
    compact:
      "bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 text-xs font-semibold rounded-md border border-blue-200",
    outline:
      "border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 px-3.5 py-2 text-xs sm:text-sm",
  };

  return (
    <div className="relative inline-flex items-center gap-1.5 flex-shrink-0 whitespace-nowrap">
      <a
        href={affiliate.url}
        target={affiliate.target}
        rel={affiliate.rel}
        className={`${baseClasses} ${variantStyles[variant]} ${className}`}
        aria-label={`${buttonText}（前往自由猫官方服务平台）`}
      >
        <span className="whitespace-nowrap">{buttonText}</span>
        <ExternalLink className="w-3.5 h-3.5 xl:w-4 xl:h-4 ml-1.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
      </a>

      {showDisclosureHint && (
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowTooltip(!showTooltip)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="官方服务通道保障信息"
          >
            <Info className="w-4 h-4" />
          </button>

          {showTooltip && (
            <div
              role="tooltip"
              className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 p-3 bg-slate-900 text-slate-100 text-xs rounded-lg shadow-xl z-50 border border-slate-700 leading-relaxed pointer-events-none"
            >
              <div className="flex items-center gap-1.5 font-bold text-blue-400 mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>官方服务通道保障</span>
              </div>
              <p className="text-slate-300 text-[11px]">
                {affiliate.disclosureNotice}
              </p>
              <div className="w-2 h-2 bg-slate-900 rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1 border-r border-b border-slate-700" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
