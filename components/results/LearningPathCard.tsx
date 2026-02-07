"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CheckCircle, ChevronRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LearningPathCardProps {
    missingSkills: string[];
}

export function LearningPathCard({ missingSkills }: LearningPathCardProps) {
    if (!missingSkills || missingSkills.length === 0) return null;

    const primaryGap = missingSkills[0]; // Focus on the most important missing skill

    // Mock "AI Generated" steps based on common skills
    const getSteps = (skill: string) => {
        const s = skill.toLowerCase();
        if (s.includes("react") || s.includes("next")) return [
            "Complete 'React Foundations' on Documentation",
            "Build a simple Todo App using hooks",
            "Deploy your first app to Vercel"
        ];
        if (s.includes("type")) return [
            "Read the TypeScript Handbook (Basics)",
            "Convert a small JS project to TS",
            "Learn about Interfaces vs Types"
        ];
        if (s.includes("node") || s.includes("back")) return [
            "Build a REST API with Express",
            "Connect to a MongoDB database",
            "Implement JWT Authentication"
        ];
        // Generic fallback
        return [
            `Watch a crash course on ${skill}`,
            `Build a 'Hello World' project with ${skill}`,
            `Join a community forum for ${skill}`
        ];
    };

    const steps = getSteps(primaryGap);

    return (
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Award size={100} className="text-purple-600" />
            </div>

            <CardHeader className="pb-2 relative z-10">
                <div className="flex items-center gap-2 mb-1">
                    <span className="bg-purple-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">AI Recommended</span>
                </div>
                <CardTitle className="text-lg text-purple-900">
                    Master <span className="underline decoration-purple-400">{primaryGap}</span>
                </CardTitle>
                <p className="text-sm text-purple-600">
                    Closing this skill gap boosts your match rate by ~15%.
                </p>
            </CardHeader>

            <CardContent className="relative z-10">
                <div className="space-y-3 mt-2">
                    {steps.map((step, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-purple-100 shadow-sm">
                            <div className="bg-purple-100 text-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                {i + 1}
                            </div>
                            <p className="text-sm text-gray-700">{step}</p>
                        </div>
                    ))}
                </div>

                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white" size="sm">
                    <BookOpen className="w-4 h-4 mr-2" /> Start Learning Path
                </Button>
            </CardContent>
        </Card>
    );
}
