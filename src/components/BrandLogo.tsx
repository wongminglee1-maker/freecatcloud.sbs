import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "light",
  showTagline = true,
  className = "",
}) => {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg p-1 transition-transform flex-shrink-0 whitespace-nowrap ${className}`}
      aria-label="自由猫 FreeCat 旗舰服务门户首页"
    >
      {/* Geometric Cat Icon with Network Nodes */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform group-hover:scale-105"
        >
          {/* Outer Shield Box */}
          <rect
            width="64"
            height="64"
            rx="16"
            fill={isDark ? "#1E293B" : "#111C35"}
          />
          <rect
            x="2"
            y="2"
            width="60"
            height="60"
            rx="14"
            stroke="url(#logo_grad_comp)"
            strokeWidth="2.5"
          />
          {/* Geometric Cat Silhouette */}
          <path
            d="M18 42 L18 25 L26 33 L38 33 L46 25 L46 42 Z"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Left Cat Ear Circuit */}
          <path
            d="M18 25 L23 16 L30 27"
            stroke="#315CFD"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right Cat Ear Circuit */}
          <path
            d="M46 25 L41 16 L34 27"
            stroke="#14B8A6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Central Connectivity Nodes */}
          <circle cx="32" cy="38" r="4" fill="#315CFD" />
          <circle cx="32" cy="38" r="1.8" fill="#FFFFFF" />
          <circle cx="23" cy="16" r="2.5" fill="#315CFD" />
          <circle cx="41" cy="16" r="2.5" fill="#14B8A6" />
          <defs>
            <linearGradient id="logo_grad_comp" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#315CFD" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left whitespace-nowrap flex-shrink-0">
        <div className="flex items-center gap-1.5 leading-none whitespace-nowrap">
          <span
            className={`font-extrabold text-lg sm:text-xl tracking-tight whitespace-nowrap ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            自由猫
          </span>
          <span className="font-bold text-lg sm:text-xl text-brand-blue tracking-tight whitespace-nowrap">
            FreeCat
          </span>
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 whitespace-nowrap">
            .SBS
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase whitespace-nowrap mt-1 ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Ultimate Brand 旗舰门户
          </span>
        )}
      </div>
    </Link>
  );
};
