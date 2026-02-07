import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BrainCircuit, Briefcase, GraduationCap } from "lucide-react";

const features = [
    {
        title: "AI Analysis",
        description: "Our advanced algorithms parse your resume and GitHub to identify your true skill set, beyond just keywords.",
        icon: BrainCircuit,
        color: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-100 dark:border-purple-900/30",
        gradient: "from-purple-500/10 to-blue-500/10"
    },
    {
        title: "Smart Matching",
        description: "Get matched with jobs and internships where you are a statistical fit, with percentage scoring.",
        icon: Briefcase,
        color: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-100 dark:border-blue-900/30",
        gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
        title: "Learning Paths",
        description: "Identify skill gaps and get personalized curriculum recommendations to reach your dream role.",
        icon: GraduationCap,
        color: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-50 dark:bg-emerald-900/20",
        border: "border-emerald-100 dark:border-emerald-900/30",
        gradient: "from-emerald-500/10 to-teal-500/10"
    },
];

export function FeatureGrid() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-slate-950 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 dark:text-slate-50">
                        How SkillMatch Works
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        We bridge the gap between your current capabilities and your career goals using data-driven insights.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <Card key={index} className={`relative overflow-hidden border ${feature.border} shadow-sm hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900 group`}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                            <CardHeader className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-105 duration-300`}>
                                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                                </div>
                                <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-50">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <CardDescription className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
