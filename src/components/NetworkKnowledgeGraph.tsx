"use client";

import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  Zap,
  Gauge,
  GitFork,
  Cpu,
  Radio,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { NETWORK_METRICS, NetworkMetric } from "@/data/network-metrics";

export const NetworkKnowledgeGraph: React.FC = () => {
  const [activeMetricId, setActiveMetricId] = useState<string>("latency");

  const currentMetric =
    NETWORK_METRICS.find((m) => m.id === activeMetricId) || NETWORK_METRICS[0];

  const getMetricIcon = (id: string) => {
    switch (id) {
      case "latency":
        return <Activity className="w-5 h-5 text-blue-600" />;
      case "packet-loss":
        return <AlertTriangle className="w-5 h-5 text-rose-500" />;
      case "jitter":
        return <Zap className="w-5 h-5 text-amber-500" />;
      case "bandwidth":
        return <Gauge className="w-5 h-5 text-emerald-500" />;
      case "routing":
        return <GitFork className="w-5 h-5 text-indigo-500" />;
      case "device-env":
        return <Cpu className="w-5 h-5 text-purple-500" />;
      case "isp-difference":
        return <Radio className="w-5 h-5 text-cyan-600" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header Bar */}
      <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 mb-2">
            <span>线路与网络信息中心</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            网络质量，需要从多个角度理解
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl">
            不能只看测速跑分或单一 Ping 延迟。点击下方维度，探索延迟、丢包、抖动与路由对实际使用体验的真实影响。
          </p>
        </div>

        {/* Transparent Compliance Badge */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 flex-shrink-0">
          <HelpCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <span>坚持科普逻辑 · 不捏造虚假实时测速</span>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Column: Metric Selector Tabs */}
        <div className="lg:col-span-5 p-4 sm:p-6 space-y-2 bg-slate-50/40">
          <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
            选择网络质量评价指标
          </span>
          <div className="space-y-1.5" role="tablist" aria-label="网络指标切换">
            {NETWORK_METRICS.map((metric) => {
              const isSelected = metric.id === activeMetricId;
              return (
                <button
                  key={metric.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveMetricId(metric.id)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? "bg-white text-slate-900 shadow-md border-blue-200 ring-2 ring-blue-500/20"
                      : "bg-transparent hover:bg-white/80 text-slate-700 border-transparent hover:border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected ? "bg-blue-50" : "bg-slate-100"
                      }`}
                    >
                      {getMetricIcon(metric.id)}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{metric.name}</div>
                      <div className="text-xs text-slate-400">
                        {metric.enName}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {metric.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Metric Analysis */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
          {/* Title & Definition */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs font-bold tracking-wider text-brand-blue uppercase bg-blue-50 px-2.5 py-1 rounded-md">
                {currentMetric.badge}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Metric ID: {currentMetric.id}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {currentMetric.name}
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <strong className="text-slate-900">核心定义：</strong>
              {currentMetric.definition}
            </p>
          </div>

          {/* Real World Impact */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              实际使用体验影响 (Impact)
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {currentMetric.impact}
            </p>
          </div>

          {/* Reference Benchmarks */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              行业经验参考区间 (Industry Benchmarks)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                <span className="block font-bold text-emerald-800 mb-1">
                  ● 极佳体验
                </span>
                <span className="text-emerald-700">
                  {currentMetric.benchmarks.excellent}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                <span className="block font-bold text-blue-800 mb-1">
                  ● 正常使用
                </span>
                <span className="text-blue-700">
                  {currentMetric.benchmarks.good}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200">
                <span className="block font-bold text-rose-800 mb-1">
                  ● 明显卡顿
                </span>
                <span className="text-rose-700">
                  {currentMetric.benchmarks.poor}
                </span>
              </div>
            </div>
          </div>

          {/* Causes & Diagnostic Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                <span>波动与退化主因</span>
              </h4>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                {currentMetric.causes.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>标准化诊断路径</span>
              </h4>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                {currentMetric.diagnosticSteps.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tips Callout */}
          <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-800">专家排查提醒：</span>
            {currentMetric.tips}
          </div>
        </div>
      </div>
    </div>
  );
};
