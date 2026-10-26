/**
 * 自由猫 FreeCat - 常见问题与解答 (FAQ)
 * 涵盖 15 项核心用户问答，深度解析连接原理、设备适配、流量与安全规则
 * 与 .mom 站点的问答文案完全隔离，采用技术严谨且可操作的解答风格
 */

export interface FaqItem {
  id: string;
  category: "brand" | "device" | "network" | "security" | "troubleshooting";
  categoryLabel: string;
  question: string;
  answer: string;
  keywords: string[];
  actionLink?: {
    text: string;
    href: string;
  };
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "brand",
    categoryLabel: "品牌与定位",
    question: "1. 自由猫 FreeCat 是什么？",
    answer: "自由猫（FreeCat）是领先的高品质网络连接与跨设备代理加速服务品牌。本网站（freecatcloud.sbs）为自由猫官方旗舰服务门户，由官方技术团队直接运营维护。本站集成了官方客户订阅中心、全平台操作系统客户端接入指南、线路网络指标分析以及专业排障知识库，旨在为全球用户提供高可用、极速稳定且安全透明的官方网络服务体验。",
    keywords: ["自由猫", "FreeCat", "官网", "官方旗舰门户", "官方网站", "定义"],
    actionLink: {
      text: "查看官方关于页面",
      href: "/about/",
    },
  },
  {
    id: "faq-2",
    category: "security",
    categoryLabel: "入口与安全",
    question: "2. 如何确认自由猫服务入口是否可信？",
    answer: "在互联网上存在大量仿冒‘自由猫’或‘FreeCat’的钓鱼镜像网站。辨别可靠入口的黄金法则是：① 检查域名证书与备案/安全评级，凡是刚注册数天且页面粗糙、诱导强制充值的站点需高度警惕；② 警惕任何要求提供本地操作系统管理员账号、微信/支付宝账户密码的假冒客户端安装包；③ 官方或可靠的订阅分发通常支持标准通用的 Clash / Sing-box / Shadowrocket 开源协议，不强制捆绑安装附带广告的封闭式定制浏览器；④ 建议收藏经过技术验证的长期知识门户，通过多维度核验来源后再进行账户操作。",
    keywords: ["服务入口", "钓鱼网站", "真伪辨别", "官方辨析", "防骗", "安全"],
    actionLink: {
      text: "阅读关于辨识与安全原则",
      href: "/about/",
    },
  },
  {
    id: "faq-3",
    category: "network",
    categoryLabel: "技术基础",
    question: "3. 自由猫机场和 VPN 客户端有何区别？",
    answer: "两者在技术实现层级上有本质区别。传统 VPN（如 IPsec, WireGuard, OpenVPN）通常工作在操作系统的数据链路层或网络层（L2/L3），默认将整台设备的所有外发 IP 数据包无差别通过加密隧道重定向，往往缺乏对国内域名的精细分流机制；而常说的‘机场’或现代化代理服务，基于 Socks5, Shadowsocks, VMess, VLESS, Trojan 等应用层（L7）协议或 TUN 虚拟网卡，搭配 Clash、Sing-box 等分流客户端使用。其最大优势是具备强大的规则引擎（Rule Engine），能够精准识别国内访问走本地直连、海外特定网站走加密中转节点，兼顾极速访问与本地服务低延迟。",
    keywords: ["机场", "VPN", "区别", "原理", "分流", "Socks5", "TUN"],
    actionLink: {
      text: "查看线路与网络质量中心",
      href: "/services/#network-metrics",
    },
  },
  {
    id: "faq-4",
    category: "brand",
    categoryLabel: "套餐选购",
    question: "4. 自由猫套餐应该关注哪些项目？",
    answer: "挑选服务方案时，切勿盲目追求‘超低价格’或‘无限流量’的噱头，而应重点核验五个核心技术指标：① **同时在线设备数上限**：是否满足个人手机、办公电脑与平板的同时在线；② **网络传输架构**：是廉价易拥堵的公网直连中转，还是具备抗晚高峰能力的 BGP 入口与专线（IPLC/IEPL）；③ **月度有效流量与重置周期**：重置日是自然月 1 日还是订单生效日，是否支持中途补购；④ **协议与客户端兼容性**：是否原生支持主流开源客户端的一键订阅；⑤ **退换与售后响应机制**：是否有明确的服务条款与工单系统。",
    keywords: ["套餐选购", "在线设备", "专线", "流量规则", "避坑指南"],
    actionLink: {
      text: "使用智能套餐匹配助手",
      href: "/plans/#selector",
    },
  },
  {
    id: "faq-5",
    category: "device",
    categoryLabel: "Windows 排障",
    question: "5. Windows 无法打开网页应该检查什么？",
    answer: "Windows 11/10 出现连接异常通常遵循‘四步诊断法’：第一步，**检查系统代理端口占用与开关**：打开系统‘设置 - 网络和 Internet - 代理’，查看代理服务器开关是否开启，端口（如 7897 或 7890）是否与客户端一致；第二步，**排查客户端内核是否闪退**：在任务管理器查看内核进程（如 mihomo-core）是否存在；第三步，**清除 DNS 缓存**：以管理员身份打开 CMD 执行 `ipconfig /flushdns`；第四步，**排除杀毒软件拦截**：部分电脑管家会静默阻断本地 127.0.0.1 代理回环。若完全关闭客户端后国内网页打不开，需手动将系统代理开关关闭即可恢复。",
    keywords: ["Windows 11", "无法上网", "网页打不开", "系统代理", "7897", "排查"],
    actionLink: {
      text: "阅读 Windows 11 系统代理与 DNS 深度专题",
      href: "/articles/windows-proxy-dns/",
    },
  },
  {
    id: "faq-6",
    category: "device",
    categoryLabel: "macOS 排障",
    question: "6. macOS 休眠后连接异常怎么办？",
    answer: "MacBook 盒盖进入休眠后，macOS 的电源保护机制会暂停活跃的 Socket 握手并切断部分后台守护进程。开盖唤醒时，Wi-Fi 重新获取局域网 IP，但代理内核中的长连接池可能仍指向旧的废弃会话，导致浏览器出现持续十数秒的‘等待响应’或直接报错。解决办法包括：① 在客户端设置中开启‘断线自动重试与健康度检查’；② 禁用苹果的‘iCloud 专用代理 (Private Relay)’以防止流量二重劫持；③ 若频繁发生，可在终端配置定时唤醒重置命令，或切换为 Sing-box 的 TUN 核心。详细解决方案参见专题文章。",
    keywords: ["macOS", "MacBook", "休眠断连", "盒盖", "唤醒假死", "苹果代理"],
    actionLink: {
      text: "阅读 MacBook 休眠与网络切换专题文章",
      href: "/articles/macos-sleep-connection/",
    },
  },
  {
    id: "faq-7",
    category: "device",
    categoryLabel: "Android 排障",
    question: "7. Android 后台断线如何排查？",
    answer: "Android 手机出现后台自动断开连接，95% 以上的原因源自厂商定制系统（如小米澎湃 HyperOS、华为鸿蒙、OPPO ColorOS、vivo OriginOS）的激进电池管理策略。排查步骤：① **锁定后台任务**：在多任务卡片视图长按客户端图标并点击‘锁定’锁头；② **允许无限制后台耗电**：进入系统应用信息，将‘省电策略’从智能省电改为‘无限制’；③ **开启自启动权限**：允许应用在开机或关联唤醒时自动启动；④ **开启‘始终开启的 VPN’**：在系统 VPN 设置中将当前客户端设为始终保持激活，防止底层 TUN 接口被垃圾清理回收。",
    keywords: ["Android", "安卓断线", "后台清理", "电池优化", "常驻后台", "保活"],
    actionLink: {
      text: "阅读 Android 后台电池与网络权限指南",
      href: "/articles/android-background-network/",
    },
  },
  {
    id: "faq-8",
    category: "device",
    categoryLabel: "iOS 排障",
    question: "8. iPhone 切换移动网络为什么可能断开连接？",
    answer: "当您离开家或办公室时，iPhone 会自动断开 Wi-Fi 并连接到 4G/5G 移动蜂窝基站。由于物理网卡发生切换，默认网关和本地 IP 全部重置。iOS 系统底层的 Network Extension 框架为了防止数据包在无保护状态下泄漏，会向代理进程触发重连接信号。若此时所处蜂窝信号不稳定（如电梯或地下车库），代理连接便会发生挂起。建议在 Shadowrocket 或客户端设置中开启‘连接失败时自动尝试下一个可用节点’，同时避免开启低电量模式，因为低电量模式会大幅降低 iOS 对后台网络扩展的数据调度频率。",
    keywords: ["iPhone", "iOS", "小火箭", "Wi-Fi 切换", "4G/5G", "移动数据断连"],
    actionLink: {
      text: "阅读 iPhone 移动网络切换排障指南",
      href: "/articles/ios-network-switching/",
    },
  },
  {
    id: "faq-9",
    category: "security",
    categoryLabel: "安全规范",
    question: "9. 订阅链接如何安全保存？",
    answer: "订阅 URL（Subscription URL）相当于您服务账号的‘动态通信钥匙’，内部包含了您账号的加密密钥、可用节点 IP 与鉴权 Token。严禁将订阅链接公开发布在论坛、博客、社交媒体或公共聊天群中。一旦链接泄漏，任何人都可以将其导入自己的客户端消耗您的流量配额，并可能因多地 IP 瞬时并发访问导致您的账号触发风控系统被临时封禁。如果怀疑订阅已经泄漏，请第一时间登录服务商控制台点击‘重置订阅令牌 (Reset Token)’，旧链接将瞬间失效。",
    keywords: ["订阅链接", "私密性", "泄漏", "重置 Token", "安全保管"],
    actionLink: {
      text: "查看使用条款与安全规范",
      href: "/terms/",
    },
  },
  {
    id: "faq-10",
    category: "network",
    categoryLabel: "网络质量",
    question: "10. 节点连接与网络速度有什么关系？",
    answer: "许多用户存在一种误解，认为‘延迟越低的节点速度就一定越快’，这在技术上并不成立。**延迟（Ping / RTT）**仅代表数据包单次往返所需的时间，决定了点击网页时的响应敏捷度；而**网络速度（带宽与吞吐量）**取决于信道宽度、中间传输节点的加密解密吞吐力以及目标服务器的下行配额。例如，一个 180ms 延迟的美西节点，如果拥有千兆专线带宽，其下载 10GB 文件的耗时往往远少于一个延迟只有 20ms 但带宽仅有 10Mbps 且严重拥塞的近程节点。选购与使用时需区分‘交互延迟’与‘带宽吞吐’的场景需求。",
    keywords: ["节点延迟", "下载速度", "Ping", "吞吐量", "带宽", "误区"],
    actionLink: {
      text: "了解网络指标全景模型",
      href: "/services/#network-metrics",
    },
  },
  {
    id: "faq-11",
    category: "network",
    categoryLabel: "网络质量",
    question: "11. 为什么晚高峰容易发生延迟变化？",
    answer: "每天晚间 20:00 至 23:30 是国内宽带用户的集中上网时段，通常被称为‘晚高峰’。在此期间，国内三大运营商（电信、联通、移动）通往国际互联网的公共骨干网出口网关（China163、China169、CMNET）承载的流量往往达到物理极限，导致路由器队列发生拥塞缓冲甚至直接丢包，表现为 Ping 延迟突增 100ms+ 或网页严重转圈。采用普通公网中转的服务容易受此冲击；而采用内网专线（IPLC/IEPL）或拥有充裕多线 BGP 冗余储备的高质量节点组，能绕开公网国际出口拥堵，保持全天候稳定。",
    keywords: ["晚高峰", "丢包", "国际出口", "QoS", "延迟波动", "专线优势"],
    actionLink: {
      text: "查看线路与路由中转机制",
      href: "/services/#network-metrics",
    },
  },
  {
    id: "faq-12",
    category: "brand",
    categoryLabel: "套餐使用",
    question: "12. 多设备同时在线有什么限制？",
    answer: "网络服务商通常会按照套餐档位严格限制‘同时在线设备数（Concurrent Online Devices）’。系统在后台是通过统计当前活跃 TCP/UDP 会话的客户端独立指纹或出口并发数来识别设备的。如果您的套餐限制 2 台设备，而您在手机、工作电脑、家用平板 3 台设备上同时开启了代理并产生了活跃流量，服务商网关通常会采取两种策略：① 踢出最早建立连接的设备，使其提示‘连接被重置’；② 直接拒绝新设备的握手请求。建议根据日常实际同时联网设备数选择对应配额，或在家庭网络中使用软路由进行统一透明分流。",
    keywords: ["多设备", "同时在线", "设备限制", "并发连接", "踢下线"],
    actionLink: {
      text: "了解不同套餐设备限制",
      href: "/plans/",
    },
  },
  {
    id: "faq-13",
    category: "troubleshooting",
    categoryLabel: "流量诊断",
    question: "13. 流量突然大量减少的原因有哪些？",
    answer: "如果发现订阅流量在一两天内消耗了数十甚至上百 GB，通常是以下隐蔽原因所致：① **操作系统自动更新**：Windows Update 或 macOS 系统版本升级在后台静默下载了 4GB - 12GB 的安装镜像，且分流规则未将其排除；② **云盘全量同步**：iCloud 照片同步、OneDrive 或 Google Drive 在后台将手机相册或大型视频上传到云端；③ **流媒体默认开启 4K HDR**：播放超清视频每小时耗费 7GB 流量，若后台挂机未关，数小时即可耗尽数十 GB；④ **订阅 URL 泄露被他人盗刷**；⑤ **P2P 种子下载软件**（如迅雷、BitTorrent）在后台做种上传。专题文章提供了完整的系统流量监控排查步骤。",
    keywords: ["流量偷跑", "流量异常", "后台下载", "Windows更新", "云盘同步", "流量诊断"],
    actionLink: {
      text: "阅读流量异常消耗排查完整专题",
      href: "/articles/traffic-usage-troubleshooting/",
    },
  },
  {
    id: "faq-14",
    category: "network",
    categoryLabel: "AI与流媒体",
    question: "14. AI 服务与流媒体的可用性受什么影响？",
    answer: "OpenAI (ChatGPT)、Anthropic (Claude) 以及 Netflix、Disney+ 等海外核心平台，对访问来源的 IP 质量有着极其严格的风控机制：① **IP 纯净度与欺诈分数 (Fraud Score)**：机房广播 IP、大量用户共用的黑名单 IP 会直接被 OpenAI 拦截并提示‘Access Denied’或‘1020 报错’；② **地理位置与语言策略**：部分平台仅开放特定地区访问，若节点落地 IP 识别为非支持国家将无法使用；③ **DNS 泄漏**：客户端本地 DNS 泄露了中国大陆的解析记录，导致平台判断环境存在代理伪装。使用这些服务需配合原生住宅 IP 节点、纯净住宅中转及严格防泄漏的 DNS 规则体系。",
    keywords: ["ChatGPT", "OpenAI", "Netflix", "流媒体解锁", "IP纯净度", "DNS泄漏"],
    actionLink: {
      text: "阅读远程协作与网络排障指南",
      href: "/articles/meeting-network-diagnostics/",
    },
  },
  {
    id: "faq-15",
    category: "troubleshooting",
    categoryLabel: "工单与帮助",
    question: "15. 出现连接问题时怎样整理客服所需信息？",
    answer: "高效解决网络故障的关键在于提供客观清晰的现场数据，而不是只发送一句‘为什么连不上’。向技术支持提交工单或求助前，请整理以下 6 项标准信息：① **故障设备与操作系统版本**（如 Windows 11 23H2 / iPhone 15 Pro iOS 17.5）；② **当前使用的客户端及版本号**（如 Clash Verge Rev 2.0.2）；③ **所连接的具体节点名称**（如‘香港专线 03’）；④ **分流模式设置**（Rule 规则模式还是 Global 全局模式）；⑤ **具体的错误提示截图与终端 ping / curl 测试结果**；⑥ **本地宽带运营商与网络类型**（如中国电信千兆光纤家庭宽带）。整理好这些信息通常能将工单排查时间缩短 80%。",
    keywords: ["客服工单", "故障整理", "技术排障", "报错截图", "诊断信息"],
    actionLink: {
      text: "前往故障排查帮助中心",
      href: "/help/",
    },
  },
];
