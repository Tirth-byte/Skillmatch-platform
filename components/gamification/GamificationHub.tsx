"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Medal, Star } from "lucide-react";

export function GamificationHub() {
    return (
        <Card className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white border-none shadow-lg">
            <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center justify-between">
                    <span className="flex items-center gap-2"><Trophy className="text-yellow-400 w-4 h-4" /> Level 5 Builder</span>
                    <span className="text-xs font-mono text-indigo-300">2,450 XP</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="mb-4">
                    <div className="flex justify-between text-xs text-indigo-200 mb-1">
                        <span>Progress to Lvl 6</span>
                        <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2 bg-white/10" indicatorClassName="bg-gradient-to-r from-yellow-400 to-orange-500" />
                </div>

                <h4 className="text-xs font-bold text-indigo-100 uppercase tracking-wider mb-3">Recent Badges</h4>
                <div className="flex gap-3">
                    <div className="flex flex-col items-center gap-1 group cursor-pointer">
                        <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                            <Medal className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-[10px] text-indigo-300">React Pro</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 group cursor-pointer">
                        <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                            <Star className="w-5 h-5 text-purple-400" />
                        </div>
                        <span className="text-[10px] text-indigo-300">Mentor</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 group cursor-pointer">
                        <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                            <Trophy className="w-5 h-5 text-green-400" />
                        </div>
                        <span className="text-[10px] text-indigo-300">Top 1%</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
