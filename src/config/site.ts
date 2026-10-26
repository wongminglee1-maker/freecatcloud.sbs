/**
 * 自由猫 FreeCat (freecatcloud.sbs) 旗舰品牌门户 - 全局配置文件
 * 遵循 Ultimate Brand 视觉系统与 Bing/Google SEO 规范
 */

export const SITE_CONFIG = {
  domain: "https://freecatcloud.sbs",
  name: "自由猫 FreeCat 旗舰服务门户",
  shortName: "自由猫",
  enName: "FreeCat",
  tagline: "把复杂的连接问题，整理成简单的答案",
  subTagline: "从电脑系统设置，到手机网络切换，再到套餐规则与节点使用，自由猫服务门户将常见连接知识组织成清晰的操作路径，让用户更容易找到需要的信息与下一步操作。",
  
  // 品牌视觉色彩定义 (Ultimate Brand 旗舰系统)
  colors: {
    primaryDeep: "#111C35",     // 旗舰深蓝
    brandBlue: "#315CFD",       // 品牌高光蓝
    brandBlueHover: "#2548CA",  // 品牌蓝悬停
    pearlWhite: "#F8FAFD",      // 珍珠白主底色
    signalCyan: "#14B8A6",      // 信号青绿 (健康/连通状态)
    champagneGold: "#D3AC72",   // 香槟金 (尊享/高阶)
    bodyGray: "#475467",        // 正文灰
    borderLight: "#E2E8F0",     // 浅边框
    borderMedium: "#CBD5E1",    // 中等边框
    cardBg: "#FFFFFF",          // 卡片白
    cardSubtle: "#F1F5F9",      // 浅灰分栏底色
  },

  // 官方客户中心与订阅接入配置
  affiliate: {
    url: "https://varnexa.lingdongaff.com/#/?code=HHoxxHGa",
    label: "客户订阅中心",
    brandTarget: "自由猫 FreeCat 官方服务平台",
    buttonText: "接入官方节点",
    heroButtonText: "了解官方服务",
    rel: "sponsored nofollow noopener noreferrer",
    target: "_blank",
    disclosureNotice: "官方服务提示：自由猫 FreeCat 官方旗舰服务平台，提供稳定高效的官方节点与订阅服务保障。",
  },

  // SEO 核心配置
  seo: {
    locale: "zh-CN",
    siteName: "自由猫 FreeCat 旗舰门户",
    titleSuffix: " | 自由猫 FreeCat",
    indexNowKey: "fc89b71a4f024c88a8d11cbe2f845a90",
    indexNowKeyLocation: "https://freecatcloud.sbs/fc89b71a4f024c88a8d11cbe2f845a90.txt",
    home: {
      title: "自由猫 FreeCat｜自由猫机场、VPN 设备接入与使用帮助",
      description: "探索自由猫 FreeCat 相关的机场套餐、VPN 设备接入和网络连接知识。了解 Windows、macOS、Android、iPhone 的设置方法、订阅使用说明及常见问题解决方式。",
      h1: "自由猫 FreeCat｜连接服务与设备帮助中心",
      badge: "FreeCat / CONNECTIVITY GUIDE",
    },
  },

  // 主导航
  nav: [
    { name: "首页", href: "/" },
    { name: "产品与服务", href: "/services/" },
    { name: "套餐信息", href: "/plans/" },
    { name: "设备接入", href: "/devices/", hasDropdown: true },
    { name: "帮助中心", href: "/help/" },
    { name: "文章中心", href: "/articles/" },
    { name: "关于我们", href: "/about/" },
  ],

  // 设备子路由
  deviceNav: [
    { name: "Windows 客户端接入", href: "/devices/windows/", icon: "Monitor", os: "Windows 11 / 10" },
    { name: "macOS 客户端接入", href: "/devices/macos/", icon: "Laptop", os: "macOS Ventura / Sonoma / Sequoia" },
    { name: "Android 客户端接入", href: "/devices/android/", icon: "Smartphone", os: "Android 11 - 15" },
    { name: "iPhone / iPad 接入", href: "/devices/ios/", icon: "Tablet", os: "iOS 16 - 18" },
    { name: "Linux 终端与服务", href: "/devices/linux/", icon: "Terminal", os: "Ubuntu / Debian / Arch" },
  ],

  // 底部辅助链接
  footerNav: {
    product: [
      { name: "产品与服务总览", href: "/services/" },
      { name: "套餐资费与对比", href: "/plans/" },
      { name: "智能套餐匹配助手", href: "/plans/#selector" },
      { name: "网络指标与路由分析", href: "/services/#network-metrics" },
    ],
    devices: [
      { name: "Windows 11 配置指南", href: "/devices/windows/" },
      { name: "MacBook 休眠唤醒排查", href: "/devices/macos/" },
      { name: "Android 后台保活设置", href: "/devices/android/" },
      { name: "iOS 网络自动切换应对", href: "/devices/ios/" },
      { name: "Linux 系统代理与守护进程", href: "/devices/linux/" },
    ],
    resources: [
      { name: "技术文章专题", href: "/articles/" },
      { name: "常见问题解答 (FAQ)", href: "/faq/" },
      { name: "故障排查知识库", href: "/help/" },
      { name: "站点地图", href: "/sitemap.xml" },
    ],
    legal: [
      { name: "关于自由猫", href: "/about/" },
      { name: "联系与技术反馈", href: "/contact/" },
      { name: "隐私政策声明", href: "/privacy/" },
      { name: "使用条款与服务须知", href: "/terms/" },
    ],
  },

  // 官方旗舰门户说明
  editorial: {
    lastUpdated: "2026-10-26",
    complianceNotice: "本网站为自由猫（FreeCat）官方旗舰服务门户，为用户提供官方线路订阅、多设备接入指南与技术服务支持。官方技术团队持续维护系统稳定性与操作指南。",
  },
};
