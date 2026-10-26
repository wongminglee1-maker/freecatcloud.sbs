import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbJsonLd } from "./JsonLd";

export interface BreadcrumbCrumb {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbCrumb[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = "",
}) => {
  const allItems = [{ name: "首页", href: "/" }, ...items];

  return (
    <>
      <BreadcrumbJsonLd
        items={allItems.map((i) => ({ name: i.name, url: i.href }))}
      />
      <nav
        aria-label="面包屑导航"
        className={`flex items-center text-xs sm:text-sm text-slate-500 overflow-x-auto py-2 whitespace-nowrap ${className}`}
      >
        <ol className="flex items-center space-x-1 sm:space-x-2">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="inline-flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 mx-1 text-slate-400 flex-shrink-0" />
                )}
                {index === 0 && (
                  <Home className="w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" />
                )}
                {isLast ? (
                  <span
                    className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-xs"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-brand-blue hover:underline transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
