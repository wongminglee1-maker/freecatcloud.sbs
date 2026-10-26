import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WebSiteJsonLd } from "@/components/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: SITE_CONFIG.seo.home.title,
    template: `%s${SITE_CONFIG.seo.titleSuffix}`,
  },
  description: SITE_CONFIG.seo.home.description,
  keywords: [
    "自由猫",
    "自由猫机场",
    "自由猫vpn",
    "自由猫 VPN",
    "自由猫官网",
    "自由猫 官网",
    "自由猫机场官网",
    "FreeCat",
    "freecatcloud.sbs",
    "自由猫套餐",
    "自由猫节点",
    "自由猫订阅",
    "自由猫 Windows",
    "自由猫 macOS",
    "自由猫 Android",
    "自由猫 iPhone",
    "自由猫使用帮助",
    "自由猫设备接入",
    "Windows 11 系统代理设置",
    "Clash Verge Rev 分流规则",
    "iPhone VPN Wi-Fi 切换",
    "Android 后台代理断线",
  ],
  authors: [{ name: "FreeCat 网络架构实验室" }],
  creator: "FreeCat Editorial Team",
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
  openGraph: {
    title: SITE_CONFIG.seo.home.title,
    description: SITE_CONFIG.seo.home.description,
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.seo.siteName,
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "自由猫 FreeCat 旗舰服务门户与设备接入知识库",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.seo.home.title,
    description: SITE_CONFIG.seo.home.description,
    images: [`${SITE_CONFIG.domain}/og-image.svg`],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/logo-compact.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="msvalidate.01" content="BING_INDEXNOW_KEY_VERIFIED" />
        <meta name="theme-color" content="#111C35" />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <WebSiteJsonLd />
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
