"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, DollarSign, Clock } from "lucide-react";

export function MicroTasks() {
    const tasks = [
        { title: "Fix Responsive Layout Bug", reward: "$50", time: "2hrs", skills: ["CSS", "Tailwind"] },
        { title: "Write Unit Tests for API", reward: "$120", time: "5hrs", skills: ["Jest", "Node.js"] },
        { title: "Optimize Landing Page Images", reward: "$30", time: "1hr", skills: ["Performance"] },
    ];

    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle2 className="text-green-600 w-4 h-4" /> Quick Wins & Gigs
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {tasks.map((task, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-green-200 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-green-700">{task.title}</h4>
                            <span className="flex items-center text-green-700 font-bold text-xs bg-green-100 px-2 py-0.5 rounded-full">
                                <DollarSign className="w-3 h-3 mr-0.5" /> {task.reward}
                            </span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <div className="flex gap-2">
                                {task.skills.map(s => (
                                    <span key={s} className="text-[10px] text-gray-500 bg-white px-1.5 py-0.5 rounded border border-gray-200">
                                        {s}
                                    </span>
                                ))}
                            </div>
                            <span className="flex items-center text-xs text-gray-400">
                                <Clock className="w-3 h-3 mr-1" /> {task.time}
                            </span>
                        </div>
                    </div>
                ))}
                <Button variant="ghost" className="w-full text-xs text-green-600 hover:text-green-700 hover:bg-green-50 h-8">
                    View All Gigs
                </Button>
            </CardContent>
        </Card>
    );
}
