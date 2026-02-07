import { CheckCircle2, AlertCircle, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SkillGapCardProps {
    readinessScore: number;
    missingSkills: string[];
    existingSkills: string[];
}

export function SkillGapCard({ readinessScore, missingSkills, existingSkills }: SkillGapCardProps) {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 md:p-8 shadow-sm transition-colors">
            <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Career Readiness</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Based on your target role: <span className="font-medium text-gray-900 dark:text-gray-200">Senior Frontend Engineer</span></p>
                    </div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{readinessScore}%</span>
                </div>

                <div className="w-full h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${readinessScore}%` }}
                    ></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Missing Skills */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                            <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-500" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Priority to Learn</h3>
                    </div>

                    <div className="space-y-3">
                        {missingSkills.map((skill, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-amber-50/50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/20">
                                <span className="font-medium text-amber-900 dark:text-amber-400">{skill}</span>
                                <Button variant="ghost" size="sm" className="h-7 text-xs text-amber-700 dark:text-amber-500 hover:text-amber-800 dark:hover:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/30">
                                    Find Course <ArrowRight className="h-3 w-3 ml-1" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Existing Skills */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Your Strengths</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {existingSkills.map((skill, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-sm font-medium border border-emerald-100 dark:border-emerald-900/30">
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                        <div className="flex gap-3">
                            <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm h-fit">
                                <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Recommended Path</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-2">Master Advanced React Patterns to boost your score by 15%</p>
                                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline">View Curriculum &rarr;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
