"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-20 pb-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center rounded-full border border-gray-200 bg-white dark:bg-slate-900 dark:border-slate-800 px-3 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 shadow-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                        New: AI-Powered Career Paths
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-slate-900 dark:text-slate-50">
                        Turn Your Skills Into{" "}
                        <span className="bg-gradient-to-r from-purple-700 to-blue-500 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                            Real Opportunities
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400">
                        Stop searching blindly. Our AI analyzes your skills, portfolio, and code to match you with opportunities that perfectly fit your potential.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/skills">
                            <Button size="lg" className="h-12 px-8 text-lg shadow-xl shadow-purple-500/20 dark:shadow-purple-900/20 w-full sm:w-auto bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100">
                                Start Matching Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="h-12 px-8 text-lg w-full sm:w-auto bg-transparent dark:text-white dark:border-slate-700 dark:hover:bg-slate-800" onClick={() => alert("Demo video coming soon!")}>
                            <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
