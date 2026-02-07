"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, ArrowUpRight, Sparkles } from "lucide-react";

export function PredictiveChart() {
    const predictions = [
        { label: "Q1", value: 65, future: false },
        { label: "Q2", value: 72, future: false },
        { label: "Q3", value: 85, future: true },
        { label: "Q4", value: 94, future: true },
    ];

    return (
        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white border-none shadow-xl">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Sparkles className="text-purple-400" size={20} />
                            <span>Future Projections</span>
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            AI Forecast for your top skills (Next 6 Mo.)
                        </CardDescription>
                    </div>
                    <div className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <TrendingUp size={12} /> +24% Demand
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="h-40 flex items-end justify-between gap-2 mt-2">
                    {predictions.map((p, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2 group relative">
                            {/* Tooltip */}
                            <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap z-10">
                                {p.future ? "Projected: " : "Actual: "}{p.value}%
                            </div>

                            {/* Bar */}
                            <div
                                className={`w-full rounded-t-sm transition-all duration-500 hover:brightness-110 ${p.future ? 'bg-purple-500/50 border-t-2 border-dashed border-purple-400' : 'bg-blue-500'}`}
                                style={{ height: `${p.value}%` }}
                            ></div>

                            {/* Label */}
                            <span className={`text-xs font-medium ${p.future ? 'text-purple-300' : 'text-slate-400'}`}>
                                {p.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Insight */}
                <div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/10 flex items-start gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-full mt-0.5">
                        <ArrowUpRight size={16} className="text-purple-300" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white">Salary Insight</p>
                        <p className="text-xs text-slate-300 leading-relaxed">
                            Based on current learning trajectory, your market value is projected to increase by <strong>$15k - $20k</strong> by Q3 2026.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
