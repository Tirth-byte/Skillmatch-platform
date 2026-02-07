"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, ArrowRight, RefreshCw, Hammer } from "lucide-react";
import { useState } from "react";

export function OpportunityShaper() {
    const [idea, setIdea] = useState<{ title: string, desc: string, stack: string[] } | null>(null);
    const [loading, setLoading] = useState(false);

    const generateIdea = () => {
        setLoading(true);
        // Simulate AI Generation
        setTimeout(() => {
            const ideas = [
                {
                    title: "Decentralized Skill Passport",
                    desc: "Build a blockchain-based verification system for the certificates you earn on this platform.",
                    stack: ["Rescript", "Solidity", "Next.js"]
                },
                {
                    title: "AI Code Review Agent",
                    desc: "A CLI tool that proactively fixes linting errors using a local LLM.",
                    stack: ["Python", "Rust", "Ollama"]
                },
                {
                    title: "Real-time Collaboration Canvas",
                    desc: "A whiteboard emphasizing low-latency syncing for remote teams.",
                    stack: ["WebSockets", "React", "Redis"]
                }
            ];
            setIdea(ideas[Math.floor(Math.random() * ideas.length)]);
            setLoading(false);
        }, 1200);
    };

    return (
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-orange-100">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-900">
                    <Lightbulb className="text-orange-500" /> Opportunity Shaper
                </CardTitle>
                <CardDescription>
                    Don't just find jobs—create them. Generate a project tailored to your skills.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {idea ? (
                    <div className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm animate-in fade-in zoom-in duration-300">
                        <h3 className="font-bold text-gray-900 text-lg mb-1">{idea.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{idea.desc}</p>
                        <div className="flex gap-2 mb-4">
                            {idea.stack.map(s => (
                                <span key={s} className="text-xs font-mono bg-orange-100 text-orange-700 px-2 py-1 rounded">
                                    {s}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                                <Hammer className="mr-2 h-4 w-4" /> Start Building
                            </Button>
                            <Button size="sm" variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50" onClick={generateIdea}>
                                <RefreshCw className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-6">
                        <Button onClick={generateIdea} disabled={loading} className="bg-orange-600 hover:bg-orange-700 text-white">
                            {loading ? <RefreshCw className="animate-spin mr-2 h-4 w-4" /> : <Lightbulb className="mr-2 h-4 w-4" />}
                            {loading ? "Analyzing Global Trends..." : "Generate Opportunity"}
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
