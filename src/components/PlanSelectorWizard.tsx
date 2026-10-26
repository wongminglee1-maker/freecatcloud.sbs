"use client";

import React, { useState } from "react";
import {
  Check,
  HelpCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  RotateCcw,
} from "lucide-react";
import { PLAN_TIERS, SELECTOR_QUESTIONS, PlanTier } from "@/data/plans";
import { AffiliateButton } from "./AffiliateButton";

export const PlanSelectorWizard: React.FC = () => {
  // Wizard state
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [step, setStep] = useState<number>(0);
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  const currentQuestion = SELECTOR_QUESTIONS[step];

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    const newAnswers = { ...answers, [questionId]: optionIndex };
    setAnswers(newAnswers);

    if (step < SELECTOR_QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setIsCalculated(true);
    }
  };

  const resetWizard = () => {
    setAnswers({});
    setStep(0);
    setIsCalculated(false);
  };

  // Calculate best plan
  const getRecommendedPlan = (): PlanTier => {
    const scores: Record<string, number> = {
      basic: 0,
      standard: 0,
      advanced: 0,
      flagship: 0,
    };

    SELECTOR_QUESTIONS.forEach((q) => {
      const selectedOptIdx = answers[q.id];
      if (selectedOptIdx !== undefined && q.options[selectedOptIdx]) {
        const optionScores = q.options[selectedOptIdx].score;
        Object.entries(optionScores).forEach(([tier, pts]) => {
          scores[tier] = (scores[tier] || 0) + pts;
        });
      }
    });

    let bestTierId = "standard";
    let maxScore = -1;
    Object.entries(scores).forEach(([tier, score]) => {
      if (score > maxScore) {
        maxScore = score;
        bestTierId = tier;
      }
    });

    return PLAN_TIERS.find((p) => p.id === bestTierId) || PLAN_TIERS[1];
  };

  const recommendedPlan = getRecommendedPlan();

  return (
    <div className="space-y-12">
      {/* 1. Flagship Enterprise Plan Comparison Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 mb-2">
              <span>套餐与资费核对中心</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              先理解使用需求，再选择服务方案
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              提供标准化的流量、设备数与协议规则对照表。数据参考市场公开档位，实际成交以自由猫官方订购中心实时收银台为准。
            </p>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 flex-shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>不捏造折扣 · 不虚构年付优惠</span>
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                <th className="py-4 px-4 sm:px-5 min-w-[180px] whitespace-nowrap align-middle">
                  方案名称与定位
                </th>
                <th className="py-4 px-4 sm:px-5 min-w-[130px] whitespace-nowrap align-middle">
                  月度可用流量
                </th>
                <th className="py-4 px-4 sm:px-5 min-w-[120px] whitespace-nowrap text-center align-middle">
                  同时在线设备
                </th>
                <th className="py-4 px-4 sm:px-5 min-w-[140px] whitespace-nowrap align-middle">
                  突发峰值速率
                </th>
                <th className="py-4 px-4 sm:px-5 min-w-[200px] whitespace-nowrap align-middle">
                  参考资费范围
                </th>
                <th className="py-4 px-4 sm:px-5 min-w-[240px] whitespace-nowrap align-middle">
                  流量重置规则
                </th>
                <th className="py-4 px-4 sm:px-5 text-center min-w-[120px] whitespace-nowrap align-middle">
                  服务入口
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600">
              {PLAN_TIERS.map((tier) => (
                <tr
                  key={tier.id}
                  className="hover:bg-blue-50/30 transition-colors"
                >
                  <td className="py-4 px-4 sm:px-5 font-semibold text-slate-900 align-middle">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-slate-900 text-sm whitespace-nowrap">
                        {tier.name}
                      </span>
                      {tier.badge && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 whitespace-nowrap flex-shrink-0">
                          {tier.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-500 font-normal leading-relaxed max-w-[240px]">
                      {tier.suitableFor}
                    </div>
                  </td>
                  <td className="py-4 px-4 sm:px-5 font-bold text-slate-900 whitespace-nowrap align-middle text-sm sm:text-base">
                    {tier.monthlyQuota}
                  </td>
                  <td className="py-4 px-4 sm:px-5 whitespace-nowrap text-center align-middle">
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-100 font-bold text-slate-800 text-xs">
                      {tier.deviceLimit} 台
                    </span>
                  </td>
                  <td className="py-4 px-4 sm:px-5 text-xs text-slate-700 whitespace-nowrap align-middle font-medium">
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-slate-50 text-slate-700 border border-slate-200/60 font-mono text-xs">
                      {tier.speedLimit}
                    </span>
                  </td>
                  <td className="py-4 px-4 sm:px-5 text-xs space-y-1 align-middle">
                    <div className="font-bold text-slate-900 text-sm leading-snug">
                      {tier.pricingReference.monthly}
                    </div>
                    <div className="text-[11px] text-slate-400 leading-snug">
                      {tier.pricingReference.note}
                    </div>
                  </td>
                  <td className="py-4 px-4 sm:px-5 text-xs text-slate-600 leading-relaxed align-middle min-w-[240px] max-w-[320px]">
                    <div>{tier.resetRule}</div>
                  </td>
                  <td className="py-4 px-4 sm:px-5 text-center whitespace-nowrap align-middle">
                    <AffiliateButton
                      variant="compact"
                      label="立即订阅"
                      showDisclosureHint={false}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Interactive Plan Selector Wizard (套餐选择助手) */}
      <div
        id="selector"
        className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl shadow-xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden"
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Section Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>智能决策小工具</span>
            </span>
            <span className="text-xs text-slate-400">
              根据日常习惯评估适合核对的方案
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            自由猫套餐选择助手
          </h3>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed">
            回答 3 个简单的使用习惯问题，算法将根据设备数量、流媒体频率及工作负载特征，为你匹配最契合的套餐层级，避免花冤枉钱买超量或因设备超限被踢下线。
          </p>

          {!isCalculated ? (
            /* Questions Flow */
            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/80 space-y-6">
              {/* Progress Steps Indicator */}
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-700 pb-3">
                <span>
                  问题 {step + 1} / {SELECTOR_QUESTIONS.length}
                </span>
                <span className="font-semibold text-blue-400">
                  {Math.round(((step + 1) / SELECTOR_QUESTIONS.length) * 100)}% 完成
                </span>
              </div>

              {/* Current Question */}
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {currentQuestion.title}
                </h4>
                <p className="text-xs text-slate-400">
                  {currentQuestion.description}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(currentQuestion.id, idx)}
                    className="w-full text-left p-4 rounded-xl bg-slate-900/60 hover:bg-blue-600/20 border border-slate-700 hover:border-blue-400/50 transition-all group flex items-start justify-between"
                  >
                    <div>
                      <div className="font-semibold text-sm text-slate-100 group-hover:text-blue-300">
                        {opt.label}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {opt.desc}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 mt-0.5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results Presentation */
            <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-700 space-y-6 animate-in fade-in duration-200">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                    ✓ 分析完成 · 匹配建议
                  </span>
                  <h4 className="text-2xl font-bold text-white">
                    推荐您重点核对：{recommendedPlan.name}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={resetWizard}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-700/60 hover:bg-slate-700 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>重新测试</span>
                </button>
              </div>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                  <div className="text-[11px] text-slate-400">建议月流量</div>
                  <div className="text-base font-extrabold text-blue-400 mt-0.5">
                    {recommendedPlan.monthlyQuota}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                  <div className="text-[11px] text-slate-400">支持在线设备</div>
                  <div className="text-base font-extrabold text-emerald-400 mt-0.5">
                    {recommendedPlan.deviceLimit} 台
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                  <div className="text-[11px] text-slate-400">峰值带宽</div>
                  <div className="text-base font-extrabold text-cyan-400 mt-0.5">
                    {recommendedPlan.speedLimit}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                  <div className="text-[11px] text-slate-400">参考月付</div>
                  <div className="text-xs font-bold text-slate-200 mt-1 line-clamp-1">
                    {recommendedPlan.pricingReference.monthly.split("（")[0]}
                  </div>
                </div>
              </div>

              {/* Why this fits */}
              <div className="space-y-2 text-xs text-slate-300 bg-slate-900/40 p-4 rounded-xl border border-slate-700">
                <div className="font-bold text-slate-100">匹配逻辑解读：</div>
                <p>{recommendedPlan.suitableFor}</p>
                <ul className="space-y-1 list-disc pl-4 text-slate-400 pt-1">
                  {recommendedPlan.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-700">
                <p className="text-[11px] text-slate-400 max-w-sm">
                  提示：本工具由官方算法提供配置选型建议，不读取您的本地网络流量，最终方案以官方管理后台为准。
                </p>
                <AffiliateButton
                  variant="hero"
                  label="核对该方案实时价格"
                  showDisclosureHint={false}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
