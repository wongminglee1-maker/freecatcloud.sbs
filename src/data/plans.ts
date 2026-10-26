/**
 * 自由猫 FreeCat - 套餐结构与选购决策数据
 * 主题：先理解使用需求，再选择服务方案
 * 遵循真实性原则：明确标注文档依据来源，不猜测不虚构未经核验的折扣，提供交互式选购助手
 */

export interface PlanTier {
  id: string;
  name: string;
  badge?: string;
  monthlyQuota: string;
  deviceLimit: number;
  speedLimit: string;
  suitableFor: string;
  features: string[];
  pricingReference: {
    monthly: string;
    quarterly: string;
    halfYear: string;
    yearly: string;
    note: string;
  };
  resetRule: string;
  restrictions: string[];
}

export const PLAN_TIERS: PlanTier[] = [
  {
    id: "basic",
    name: "基础型 (流浪猫档位参考)",
    badge: "入门轻量",
    monthlyQuota: "100 GB / 月",
    deviceLimit: 2,
    speedLimit: "峰值约 200 Mbps",
    suitableFor: "个人单设备日常查阅资料、文献搜索、轻度文字社交与邮件收发",
    features: [
      "支持基础国际节点组（港/日/美常用线路）",
      "智能 DNS 分流与流媒体基础适配",
      "限制同时在线设备 2 台",
      "工单标准技术支持支持响应",
    ],
    pricingReference: {
      monthly: "约 ¥10 - ¥15 / 月（以结算中心实时报价为准）",
      quarterly: "以对应服务平台周期定价为准",
      halfYear: "以对应服务平台周期定价为准",
      yearly: "以对应服务平台周期定价为准",
      note: "注：具体金额受促销政策与结算周期调整，购买前请在官方订单确认页复核。",
    },
    resetRule: "每月按账单生效日或自然月 1 日零点重置流量计数，未使用完的当月流量不支持累计结转到次月。",
    restrictions: [
      "不可在同一时间超过 2 台设备并发建立连接，超出将导致先连设备被踢下线",
      "严禁用于 BT/PT 种子长时间全带宽 P2P 暴力下载，节点可能自动阻断 BT 协议端口",
    ],
  },
  {
    id: "standard",
    name: "标准型 (田园猫档位参考)",
    badge: "热门通用",
    monthlyQuota: "250 GB - 350 GB / 月",
    deviceLimit: 3,
    speedLimit: "峰值约 500 Mbps",
    suitableFor: "上班族多设备协同（手机+笔记本）、经常观看 1080P/4K 高清流媒体视频、日常使用 AI 对话工具",
    features: [
      "包含优质 BGP 入口与中转优化线路组",
      "主流流媒体平台（Netflix / Disney+）及 ChatGPT 常用访问解锁适配",
      "支持 3 台设备同时在线连接",
      "支持 Clash / Sing-box / Shadowrocket 一键导入",
    ],
    pricingReference: {
      monthly: "约 ¥20 - ¥30 / 月（以结算中心实时报价为准）",
      quarterly: "以对应服务平台周期定价为准",
      halfYear: "以对应服务平台周期定价为准",
      yearly: "以对应服务平台周期定价为准",
      note: "注：参考行业常见田园级方案，实际资费以用户中心最终订单为准。",
    },
    resetRule: "每个计费周期起始日自动清零，周期内若流量耗尽将暂时停止服务或自动限速，需购买临时加油包。",
    restrictions: [
      "支持 3 台设备协同使用，请妥善保管个人订阅 URL，防止因公开分享导致 IP 频繁变动触发风控",
      "公共节点会定期进行健康度轮询，维护期间可能短暂重连",
    ],
  },
  {
    id: "advanced",
    name: "进阶型 (美短猫档位参考)",
    badge: "多设备大流量",
    monthlyQuota: "500 GB - 600 GB / 月",
    deviceLimit: 5,
    speedLimit: "峰值最高 800 Mbps - 1000 Mbps",
    suitableFor: "深度网络从业者、远程开发者、多设备家庭或工作室，常需大体量代码仓库同步与高频会议",
    features: [
      "全量专线节点（IPLC / IEPL 内网直达中转）优先访问通道",
      "更充裕的突发突发带宽通道，应对 4K 多屏并发或大体积文件拉取",
      "支持 5 台设备同时并发在线",
      "VIP 优先工单响应队列",
    ],
    pricingReference: {
      monthly: "约 ¥40 - ¥50 / 月（以结算中心实时报价为准）",
      quarterly: "以对应服务平台周期定价为准",
      halfYear: "以对应服务平台周期定价为准",
      yearly: "以对应服务平台周期定价为准",
      note: "注：专线资源成本较高，建议根据实际吞吐需求选择月付或季付体验核验后决定。",
    },
    resetRule: "周期到期日自动重置流量，不跨周期累加。",
    restrictions: [
      "支持最多 5 台设备同时在线，适合个人多终端或小规模家庭组，严禁转售或群发共享",
      "严禁任何滥发垃圾邮件 (SPAM) 或网络爬虫滥用行为",
    ],
  },
  {
    id: "flagship",
    name: "旗舰型 (布偶猫档位参考)",
    badge: "重度与极速",
    monthlyQuota: "1000 GB+ / 月 (或企业定制)",
    deviceLimit: 8,
    speedLimit: "极速千兆带宽保障通道",
    suitableFor: "重度音视频内容创作者、海外远程办公全天候长连接团队、家庭影音中心直通",
    features: [
      "全协议链路支持，涵盖深港、沪日、京德等全线顶级专线节点",
      "支持最高 8 台设备同时建立活动 Socket 连接",
      "超大 TB 级月度高速流量配额，杜绝中途告急",
      "专属技术顾问对接与定制分流配置咨询",
    ],
    pricingReference: {
      monthly: "约 ¥70 - ¥100+ / 月（以结算中心实时报价为准）",
      quarterly: "以对应服务平台周期定价为准",
      halfYear: "以对应服务平台周期定价为准",
      yearly: "以对应服务平台周期定价为准",
      note: "注：重度用户方案价格请以官方管理后台当前实时上架 SKU 为准。",
    },
    resetRule: "固定周期重置，超量后需增购配额。",
    restrictions: [
      "同一账号在线设备上限 8 台",
      "遵守国际公网与服务商节点所在地法律法规",
    ],
  },
];

// 套餐选择助手问答数据
export interface SelectorQuestion {
  id: string;
  title: string;
  description: string;
  options: {
    label: string;
    score: Record<string, number>; // 对各套餐的推荐权重
    desc: string;
  }[];
}

export const SELECTOR_QUESTIONS: SelectorQuestion[] = [
  {
    id: "devices",
    title: "1. 您日常需要同时联网的设备大概有几台？",
    description: "考虑您本人或共同居住者的手机、电脑、平板及电视盒子等终端总数",
    options: [
      {
        label: "1 - 2 台（单人手机 + 随身电脑）",
        score: { basic: 3, standard: 2, advanced: 0, flagship: 0 },
        desc: "轻量使用，两台设备限额完全能满足日常切换需求",
      },
      {
        label: "3 台左右（手机 + 工作电脑 + iPad 或家用设备）",
        score: { basic: 0, standard: 3, advanced: 1, flagship: 0 },
        desc: "最常见的现代白领终端配置，建议至少选择 3 设备方案",
      },
      {
        label: "4 - 5 台（个人全家桶或与家庭成员合用）",
        score: { basic: 0, standard: 0, advanced: 3, flagship: 1 },
        desc: "设备较多，需防范同时在线因超限被自动踢出",
      },
      {
        label: "6 台及以上（全屋多终端、电视盒子、工作站等）",
        score: { basic: 0, standard: 0, advanced: 1, flagship: 3 },
        desc: "重度多屏并发，需选择高配或旗舰档位保障稳定",
      },
    ],
  },
  {
    id: "media",
    title: "2. 您的海外流媒体与高清视频观看频率如何？",
    description: "视频流媒体是消耗月度流量的最主要来源（4K 视频约 7GB/小时，1080P 约 2GB/小时）",
    options: [
      {
        label: "很少看视频，主要查阅文字资料、学术文献与使用 AI",
        score: { basic: 3, standard: 1, advanced: 0, flagship: 0 },
        desc: "纯文字与代码交互每月流量消耗极少，通常 50-100GB 充裕",
      },
      {
        label: "每天偶尔看 1-2 小时 YouTube / Netflix（以 1080P 为主）",
        score: { basic: 1, standard: 3, advanced: 1, flagship: 0 },
        desc: "月消耗约 100-250GB，标准档位处于舒适区间",
      },
      {
        label: "重度影音爱好者，习惯开启 4K HDR 追剧或长期后台播放",
        score: { basic: 0, standard: 1, advanced: 3, flagship: 2 },
        desc: "4K 超清大码率消耗大，建议 500GB 以上方案避免中途断流",
      },
      {
        label: "全家影院串流或直播推流需求",
        score: { basic: 0, standard: 0, advanced: 1, flagship: 3 },
        desc: "需要 TB 级大流量配额与专线大带宽保障",
      },
    ],
  },
  {
    id: "workload",
    title: "3. 您的日常工作与远程协作要求是什么？",
    description: "视频会议、远程桌面、大型代码拉取对网络稳定度有不同维度的考验",
    options: [
      {
        label: "普通网页浏览、日常查阅邮件与即时通讯",
        score: { basic: 3, standard: 2, advanced: 0, flagship: 0 },
        desc: "普通线路即可满足，延迟敏感度不高",
      },
      {
        label: "经常使用 ChatGPT / Claude 等 AI 工具及海外协作看板",
        score: { basic: 1, standard: 3, advanced: 2, flagship: 1 },
        desc: "要求节点纯净度高且连通稳定，标准方案适合",
      },
      {
        label: "每天需要参加 Zoom / Teams 跨国视频会议，不能卡顿",
        score: { basic: 0, standard: 1, advanced: 3, flagship: 2 },
        desc: "高度敏感丢包与抖动，需专线 IPLC/IEPL 中转保障连击顺畅",
      },
      {
        label: "频繁下载数十 GB 大型工程镜像、模型权重或开发代码包",
        score: { basic: 0, standard: 0, advanced: 2, flagship: 3 },
        desc: "对突发下行带宽与高速中转节点有硬性要求",
      },
    ],
  },
];
