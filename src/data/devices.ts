/**
 * 自由猫 FreeCat - 设备接入中心核心数据
 * 主题：一种网络需求，多种设备使用方式
 * 真实第三方开源客户端说明，清晰指出开源软件与品牌的关系，杜绝虚假自营下载
 */

export interface DeviceInfo {
  slug: string;
  name: string;
  badge: string;
  icon: string;
  recommendedClients: {
    name: string;
    version: string;
    openSourceUrl: string;
    description: string;
    pros: string;
  }[];
  systemRequirements: {
    os: string;
    architecture: string;
    memory: string;
    network: string;
  };
  requiredPermissions: {
    title: string;
    reason: string;
  }[];
  configurationSteps: {
    step: number;
    title: string;
    description: string;
    codeSnippet?: string;
  }[];
  systemRestrictions: {
    title: string;
    impact: string;
    workaround: string;
  }[];
  troubleshootingPointers: {
    problem: string;
    solution: string;
  }[];
  articleLink: {
    title: string;
    href: string;
    intro: string;
  };
}

export const DEVICE_LIST: DeviceInfo[] = [
  {
    slug: "windows",
    name: "Windows 客户端接入",
    badge: "Windows 11 / 10 推荐",
    icon: "Monitor",
    recommendedClients: [
      {
        name: "Clash Verge Rev",
        version: "v2.0+ (Mihomo 内核)",
        openSourceUrl: "https://github.com/clash-verge-rev/clash-verge-rev",
        description: "现代化跨平台客户端，基于 Tauri 框架重构，资源占用极低，支持完整的系统代理与 TUN 虚拟网卡模式。",
        pros: "界面简洁美观、支持订阅自动更新、内置 UWP 本地回环免流工具。",
      },
      {
        name: "v2rayN",
        version: "v6.0+ (Xray / Sing-box 内核)",
        openSourceUrl: "https://github.com/2dust/v2rayN",
        description: "经典老牌 Windows 代理工具，支持多内核无缝切换，适合需要精细调节底层协议的高级用户。",
        pros: "协议支持全面、高度可定制、支持直接导入各格式节点。",
      },
    ],
    systemRequirements: {
      os: "Windows 11 (64-bit 推荐) 或 Windows 10 (21H2 及以上版本)",
      architecture: "x64 / ARM64 (支持高通骁龙 Windows 笔记本)",
      memory: "最低 2GB RAM，客户端运行时通常占用 80MB - 180MB",
      network: "具备正常本地以太网或无线 Wi-Fi 连通能力",
    },
    requiredPermissions: [
      {
        title: "修改系统代理设置权限",
        reason: "用于自动向 Windows 注册表 Internet Settings 注入本地代理端口（如 127.0.0.1:7897），接管浏览器流量。",
      },
      {
        title: "管理员身份运行（启用 TUN 虚拟网卡时）",
        reason: "安装 Wintun 驱动以创建虚拟网卡，实现非代理协议（如游戏、终端命令行、无代理设置应用）的全量接管。",
      },
    ],
    configurationSteps: [
      {
        step: 1,
        title: "获取并校验订阅链接",
        description: "登录您的订阅服务商控制台，找到‘一键导入 Clash 订阅’或复制通用 HTTPS 订阅 URL。请勿泄露该链接。",
      },
      {
        step: 2,
        title: "安装 Clash Verge Rev 客户端",
        description: "从官方 GitHub Releases 下载 Windows 对应架构的 .msi 或 .exe 安装包，完成安装并启动。",
      },
      {
        step: 3,
        title: "导入订阅并启用自动更新",
        description: "在客户端‘配置 (Profiles)’页面粘贴订阅 URL，点击‘下载’，并将更新间隔设置为 24 或 12 小时。",
      },
      {
        step: 4,
        title: "选择出站模式与节点",
        description: "在‘代理 (Proxies)’页面将分流模式设为‘规则 (Rule)’，根据需要选择香港、日本或美西等可用节点。",
      },
      {
        step: 5,
        title: "开启系统代理开关",
        description: "在左侧菜单或设置中开启‘系统代理 (System Proxy)’开关。浏览器此时即可正常通过分流规则访问网络。",
      },
    ],
    systemRestrictions: [
      {
        title: "Windows UWP 应用回环隔离限制 (Loopback Isolation)",
        impact: "微软应用商店下载的应用（如 Edge 插件、微软 To-Do、OneNote 等）默认无法访问本地 127.0.0.1 代理端口。",
        workaround: "在客户端设置中打开‘UWP 回环工具 (EnableLoopback Utility)’，勾选需要代理的商店应用并点击保存。",
      },
      {
        title: "杀毒软件与电脑管家篡改注册表",
        impact: "部分国内卫士软件会将第三方代理端口误报为‘恶意网络重定向’并静默重置注册表，导致系统代理频繁关闭。",
        workaround: "将客户端加入杀毒软件白名单，并在 Windows 防火墙中允许其通过私有与公用网络。",
      },
    ],
    troubleshootingPointers: [
      {
        problem: "开启系统代理后，无法打开任何网页（提示无法连接到代理服务器）",
        solution: "检查客户端核心是否异常闪退；打开 Windows‘设置 - 网络和 Internet - 代理’，查看端口号是否与客户端当前监听端口一致。",
      },
      {
        problem: "关闭客户端后，所有国内网站都无法访问",
        solution: "这是因为客户端非正常退出，未能撤销注册表代理。手动前往 Windows 代理设置中将‘使用代理服务器’开关关闭即可恢复。",
      },
    ],
    articleLink: {
      title: "《自由猫 Windows 11 使用进阶：系统代理、DNS 与分流规则如何配合》",
      href: "/articles/windows-proxy-dns/",
      intro: "深入剖析 Windows 注册表代理与 TUN 模式的区别，掌握 DNS 防泄漏与多网卡环境下的冲突排查体系。",
    },
  },
  {
    slug: "macos",
    name: "macOS 客户端接入",
    badge: "Apple Silicon & Intel 适配",
    icon: "Laptop",
    recommendedClients: [
      {
        name: "Clash Verge Rev (macOS 版)",
        version: "v2.0+ (Mihomo 原生适配)",
        openSourceUrl: "https://github.com/clash-verge-rev/clash-verge-rev",
        description: "完美兼容 macOS Sonoma 与 Sequoia，提供原生 aarch64 (M1/M2/M3/M4) 与 x64 双架构安装包。",
        pros: "菜单栏沉浸式图标、支持一键开启 Tun 模式、网络位置切换自动恢复。",
      },
      {
        name: "Sing-box for Apple",
        version: "v1.9+",
        openSourceUrl: "https://github.com/SagerNet/sing-box",
        description: "基于通用内核的轻量级工具，采用 Apple Network Extension 原生扩展，功耗极低。",
        pros: "与 macOS 系统级网络框架深度集成、休眠唤醒连通性极佳。",
      },
    ],
    systemRequirements: {
      os: "macOS 12 Monterey / 13 Ventura / 14 Sonoma / 15 Sequoia",
      architecture: "Apple Silicon (M 系列芯片) 或 Intel Core x86_64",
      memory: "4GB RAM 以上，客户端常驻内存小于 120MB",
      network: "Wi-Fi 6 / 6E 或 Thunderbolt 以太网连接",
    },
    requiredPermissions: [
      {
        title: "网络扩展权限 (Network Extension)",
        reason: "在系统设置中允许客户端向系统注册虚拟网络适配器或代理服务。",
      },
      {
        title: "系统设置更改凭据 (Touch ID 或管理员密码)",
        reason: "授权客户端在‘网络 - 代理’中修改 SOCKS5 / HTTP 代理配置。",
      },
    ],
    configurationSteps: [
      {
        step: 1,
        title: "下载 Apple 平台安装包",
        description: "根据 Mac 芯片类型下载 .dmg 安装包（M 系列芯片用户请选择 aarch64 版本，Intel 芯片选择 x64 版本）。",
      },
      {
        step: 2,
        title: "拖拽安装并信任应用",
        description: "将应用拖入 Applications 文件夹。若首次打开提示未知名开发者，可在‘系统设置 - 隐私与安全性’中点击‘仍要打开’。",
      },
      {
        step: 3,
        title: "导入订阅 URL",
        description: "在订阅管理中粘贴来自服务商的 Clash 订阅地址，完成配置拉取与节点节点解析。",
      },
      {
        step: 4,
        title: "设置代理规则并开启",
        description: "选择‘Rule (规则分流)’模式，打开‘Set as System Proxy (设为系统代理)’开关。",
      },
    ],
    systemRestrictions: [
      {
        title: "MacBook 盒盖休眠后网络唤醒假死",
        impact: "笔记本从休眠唤醒后，Wi-Fi 重新获取 IP，但底层 Socket 连接池仍保持在旧的断开状态，导致网页卡住十余秒。",
        workaround: "文章专题提供了配置自动健康检查与快速重启内核脚本的具体操作指南。",
      },
      {
        title: "iCloud 专用代理 (Private Relay) 冲突",
        impact: "若开启了苹果 iCloud 专用代理，Safari 流量会被二次加密接管，导致第三方客户端分流规则失效。",
        workaround: "建议在‘系统设置 - Apple 账户 - iCloud - 专用代理’中将其暂时停用。",
      },
    ],
    troubleshootingPointers: [
      {
        problem: "终端 Terminal 或 brew 命令行工具无法走代理",
        solution: "macOS 的终端默认不读取系统的 HTTP 代理。需在 ~/.zshrc 中配置 export https_proxy=http://127.0.0.1:7897 环境变量。",
      },
      {
        problem: "切换不同 Wi-Fi 网络后代理失效",
        solution: "打开‘系统设置 - 网络’，检查当前 Wi-Fi 服务的高级代理设置中是否正确勾选了 Web 代理与安全 Web 代理。",
      },
    ],
    articleLink: {
      title: "《MacBook 使用自由猫相关订阅时，休眠唤醒与网络切换应该检查什么？》",
      href: "/articles/macos-sleep-connection/",
      intro: "解决 Mac 笔记本盒盖合上再打开后的网络失联、Wi-Fi 漫游重新握手与 Apple 专用代理的共存问题。",
    },
  },
  {
    slug: "android",
    name: "Android 客户端接入",
    badge: "Android 11 - 15 适配",
    icon: "Smartphone",
    recommendedClients: [
      {
        name: "Flclash / Clash Meta for Android (CMFA)",
        version: "v2.10+ (Meta 内核)",
        openSourceUrl: "https://github.com/chen08209/Flclash",
        description: "支持 Material You 动态配色的现代化 Android 客户端，支持完整的分流规则、分应用代理与一键测速。",
        pros: "后台运行省电、分应用代理管理方便、支持扫码快速导入配置。",
      },
      {
        name: "Sing-box for Android",
        version: "v1.9+",
        openSourceUrl: "https://github.com/SagerNet/sing-box",
        description: "基于通用内核，内存消耗极低，适合低配或长期待机设备使用。",
        pros: "轻量高效、支持最新的 WireGuard 与 Shadowsocks-2022 协议。",
      },
    ],
    systemRequirements: {
      os: "Android 10.0 及以上版本（全面适配 Android 14 与 Android 15）",
      architecture: "arm64-v8a（主流手机均为此架构）",
      memory: "运行内存占用约 60MB - 120MB",
      network: "4G / 5G 移动蜂窝网络或双频 Wi-Fi",
    },
    requiredPermissions: [
      {
        title: "VpnService 系统级代理权限",
        reason: "Android 系统强制要求通过 VpnService API 建立本地回环隧道，接管手机应用的 IP 数据包。",
      },
      {
        title: "忽略电池优化 (无限制后台运行)",
        reason: "防止手机息屏或进入低功耗休眠时，系统垃圾清理机制将代理进程强制查杀导致断线。",
      },
    ],
    configurationSteps: [
      {
        step: 1,
        title: "下载并安装 APK 安装包",
        description: "前往客户端 GitHub 官方页面下载适用于 arm64-v8a 的 .apk 文件，授予安装权限并完成安装。",
      },
      {
        step: 2,
        title: "导入订阅链接",
        description: "在‘配置 (Profiles)’界面点击添加，输入服务商订阅链接或直接扫描网页端给出的二维码完成解析。",
      },
      {
        step: 3,
        title: "设置分应用代理 (推荐)",
        description: "在设置中开启‘分应用代理’，仅勾选需要访问海外服务的应用（如 Twitter、Telegram 等），国内微信支付宝走直连。",
      },
      {
        step: 4,
        title: "启动服务并允许 VPN 提示",
        description: "点击主界面大开关，在弹出的系统对话框‘连接请求：应用想要设置 VPN 连接’中点击‘确定’。",
      },
    ],
    systemRestrictions: [
      {
        title: "国产品牌手机激进的‘神隐模式’与墓碑后台",
        impact: "息屏 10 分钟后代理自动停止，必须点亮屏幕重新打开应用才恢复。",
        workaround: "必须在多任务界面给客户端‘加锁’，并在应用权限中将‘省电策略’改为‘无限制’。",
      },
      {
        title: "双卡数据自动切换或 Wi-Fi 断开瞬间重置 VPN",
        impact: "信号微弱导致蜂窝网重连时，Android 会短暂销毁并重建 TUN 接口。",
        workaround: "开启‘始终开启的 VPN’或在客户端开启‘自动重连守护’。",
      },
    ],
    troubleshootingPointers: [
      {
        problem: "启动时提示‘创建 VPN 失败，已被其他应用占用’",
        solution: "Android 规定同一时间只能激活一个 VpnService。检查通知栏是否运行了加速器、网络监控软件或企业网 MDM 证书，先将其关闭。",
      },
      {
        problem: "国内应用在后台收不到即时消息推送",
        solution: "确保分流模式为‘规则 (Rule)’而非‘全局 (Global)’，并将国内常用即时通讯软件排除在代理名单之外。",
      },
    ],
    articleLink: {
      title: "《Android 连接总在后台中断？自由猫用户需要了解的电池与网络权限》",
      href: "/articles/android-background-network/",
      intro: "详解小米 HyperOS、华为鸿蒙、OPPO ColorOS 与 vivo OriginOS 的后台保活设置差异与网络权限配置流程。",
    },
  },
  {
    slug: "ios",
    name: "iPhone / iPad (iOS) 接入",
    badge: "iOS 16 - 18 适配",
    icon: "Tablet",
    recommendedClients: [
      {
        name: "Shadowrocket (小火箭)",
        version: "最新 App Store 版",
        openSourceUrl: "https://apps.apple.com/app/shadowrocket/id932747118",
        description: "iOS 上普及度最高且维护多年的专业网络分流调试工具，功能成熟稳定，支持各种订阅协议一键识别导入。",
        pros: "扫码极速导入、分流规则强大、支持小组件快捷开关。",
      },
      {
        name: "Sing-box for iOS",
        version: "v1.9+ (App Store)",
        openSourceUrl: "https://apps.apple.com/app/sing-box/id6451272673",
        description: "完全免费且开源的轻量 iOS 客户端，采用现代化 Swift 编写，资源占用极其克制。",
        pros: "完全免费、无广告、纯净开源代码。",
      },
    ],
    systemRequirements: {
      os: "iOS 15.0 及以上（全面适配 iOS 17 与 iOS 18）",
      architecture: "64-bit ARM (A12 仿生芯片及更新机型)",
      memory: "受限于 iOS 对 Network Extension 15MB - 50MB 严格内存配额限制",
      network: "蜂窝数据或 Wi-Fi",
    },
    requiredPermissions: [
      {
        title: "添加 VPN 配置权限 (iOS 系统弹窗)",
        reason: "用于在 iOS 设置中注册由 Shadowrocket 或 Sing-box 驱动的本地网络扩展配置，需要输入锁屏密码确认。",
      },
      {
        title: "无线局域网与蜂窝数据联网权限",
        reason: "中国大陆国行 iPhone 首次打开新应用时弹出的‘允许使用无线局域网与蜂窝数据’确认项。",
      },
    ],
    configurationSteps: [
      {
        step: 1,
        title: "获取非大陆地区 Apple ID 账户",
        description: "受苹果地域政策限制，上述客户端需通过美区、港区或日区 Apple ID 在 App Store 检索下载。",
      },
      {
        step: 2,
        title: "添加订阅节点",
        description: "在 Shadowrocket 中点击右上角‘+’，类型选择‘Subscribe’，粘贴服务商订阅 URL 并完成命名保存。",
      },
      {
        step: 3,
        title: "设置全局路由策略为‘配置 (Config)’",
        description: "确保主界面的‘全局路由’选为‘配置’（对应规则模式），切忌设为‘代理’以免国内流量也绕道海外。",
      },
      {
        step: 4,
        title: "开启连接并输入锁屏密码",
        description: "打开最上方的连接开关，iOS 会弹出‘添加 VPN 配置’的系统提示，输入 iPhone 解锁密码完成授权。",
      },
    ],
    systemRestrictions: [
      {
        title: "从 Wi-Fi 离开出门切换为 5G 时连接短时中断",
        impact: "蜂窝基站与家庭无线路由器路由表重配期间，iOS 系统级 VPN 状态可能出现短暂挂起。",
        workaround: "可利用 iOS‘快捷指令’自动化在离开家时自动刷新网络状态，或在应用设置中开启‘断线自动重试’。",
      },
      {
        title: "Network Extension 内存泄漏被 iOS 强杀",
        impact: "若订阅包含数千个无效节点或规则集过于臃肿，超出系统内存上限会被系统看门狗立即中止。",
        workaround: "建议精简节点列表，仅保留常用区域节点，保持配置文件体积小于 2MB。",
      },
    ],
    troubleshootingPointers: [
      {
        problem: "开启后提示‘无法添加 VPN 配置’",
        solution: "进入 iPhone‘设置 - 通用 - VPN 与设备管理’，检查是否有残留或损坏的过期 VPN 配置项，将其删除后重试。",
      },
      {
        problem: "微信发图片变慢，但网页正常",
        solution: "在客户端中检查当前使用的分流规则（Rule），确保 cn.mmbiz.qpic.cn 等腾讯 CDN 域名走‘DIRECT 直连’策略。",
      },
    ],
    articleLink: {
      title: "《iPhone 从 Wi-Fi 切换到移动数据后连接异常？自由猫移动端排查指南》",
      href: "/articles/ios-network-switching/",
      intro: "解决 iOS 跨网络切换、省电模式下网络扩展后台冻结及系统代理重置的系统级完整诊断方案。",
    },
  },
  {
    slug: "linux",
    name: "Linux 终端与服务接入",
    badge: "Ubuntu / Debian / Arch 适配",
    icon: "Terminal",
    recommendedClients: [
      {
        name: "Mihomo (Clash Meta) Linux Core",
        version: "v1.18+ (编译二进制)",
        openSourceUrl: "https://github.com/MetaCubeX/mihomo",
        description: "极高并发性能的 Golang 编写核心，可通过 systemd 守护进程运行在服务器、树莓派或工作站上。",
        pros: "开机自启稳定、支持 RESTful API 远程面板、可作为透明代理网关。",
      },
      {
        name: "Sing-box Linux",
        version: "v1.9+",
        openSourceUrl: "https://github.com/SagerNet/sing-box",
        description: "极其轻量的新一代通用网络内核，配置文件采用标准化 JSON，可直接作为 systemd 单元托管。",
        pros: "单文件无依赖、资源开销极小、支持高性能 TUN 模式。",
      },
    ],
    systemRequirements: {
      os: "Ubuntu 20.04/22.04/24.04 LTS, Debian 11/12, Arch Linux, Fedora, CentOS Stream",
      architecture: "x86_64 / aarch64 (树莓派与 ARM 云主机完全支持)",
      memory: "极低，二进制文件与规则常驻内存仅约 35MB - 80MB",
      network: "支持 systemd-networkd / NetworkManager / iptables",
    },
    requiredPermissions: [
      {
        title: "CAP_NET_ADMIN / root 超级用户权限",
        reason: "用于配置 iptables / nftables 路由重定向，或创建 tun0 虚拟网卡接口以实现全局透明代理。",
      },
      {
        title: "systemd 服务注册权限",
        reason: "创建 /etc/systemd/system/mihomo.service 实现后台静默守护与异常崩溃自动拉起。",
      },
    ],
    configurationSteps: [
      {
        step: 1,
        title: "下载二进制文件并赋予执行权限",
        description: "wget 下载对应的 release 压缩包，解压后执行 chmod +x mihomo 并移至 /usr/local/bin/ 目录。",
        codeSnippet: "sudo mv mihomo-linux-amd64 /usr/local/bin/mihomo && sudo chmod +x /usr/local/bin/mihomo",
      },
      {
        step: 2,
        title: "拉取订阅并转化为 config.yaml",
        description: "通过 curl 携带真实 User-Agent 从服务商订阅地址拉取 YAML 配置文件，存入 /etc/mihomo/ 目录。",
        codeSnippet: "curl -sL -A \"clash\" \"YOUR_SUBSCRIPTION_URL\" -o /etc/mihomo/config.yaml",
      },
      {
        step: 3,
        title: "配置 systemd 开机自启服务",
        description: "编写 systemd 配置文件，启用并立即启动服务。",
        codeSnippet: "sudo systemctl enable --now mihomo.service",
      },
      {
        step: 4,
        title: "设置环境变量或透明代理",
        description: "在 ~/.bashrc 中添加 http_proxy 与 https_proxy 环境变量，或开启 TUN 模式自动接管整机流量。",
        codeSnippet: "export http_proxy=\"http://127.0.0.1:7890\"\nexport https_proxy=\"http://127.0.0.1:7890\"",
      },
    ],
    systemRestrictions: [
      {
        title: "Linux 桌面与控制台环境代理变量分离",
        impact: "在 GNOME 桌面设置了网络代理，但在终端中运行 git clone 或 docker pull 依然超时直连。",
        workaround: "Linux 系统中 GUI 代理、bash/zsh 终端代理、sudo 特权环境与 systemd 守护进程代理互不相通，需分别指定对应环境变量。",
      },
      {
        title: "DNS 被 systemd-resolved 循环劫持",
        impact: "启用透明代理后，127.0.0.53 本地 DNS 解析发生回环死锁，导致全机域名解析故障。",
        workaround: "文章提供了配置 /etc/systemd/resolved.conf 关闭本地 DNS 存根监听的标准化配置指令。",
      },
    ],
    troubleshootingPointers: [
      {
        problem: "journalctl -u mihomo 报错：bind: address already in use",
        solution: "说明 7890 端口已被其他本地进程占用。使用 sudo ss -tulpn | grep 7890 查找占用进程 PID 并妥善修改端口。",
      },
      {
        problem: "curl 走代理报错 SSL certificate problem",
        solution: "检查本地系统时间与证书链：sudo timedatectl set-ntp true 同步标准互联网时钟，时钟偏差超过 90 秒会导致 TLS 握手失败。",
      },
    ],
    articleLink: {
      title: "《家用网络连接指南：自由猫相关服务与路由器、DNS、局域网环境的配合方式》",
      href: "/articles/home-router-network/",
      intro: "了解如何基于 Linux 软路由或局域网旁路网关（旁路由）打造全屋免客户端自动分流网络架构。",
    },
  },
];
