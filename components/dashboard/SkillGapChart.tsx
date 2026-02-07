import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function SkillGapChart() {
    // Mock data for the chart since we can't easily install Recharts yet
    const skills = [
        { name: 'TypeScript', match: 90 },
        { name: 'React', match: 85 },
        { name: 'Node.js', match: 60 },
        { name: 'GraphQL', match: 40 },
    ];

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Skill Gap Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between text-sm">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.match}%</span>
                        </div>
                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-500 ${skill.match > 80 ? 'bg-green-500' :
                                        skill.match > 50 ? 'bg-yellow-500' : 'bg-red-500'
                                    }`}
                                style={{ width: `${skill.match}%` }}
                            />
                        </div>
                    </div>
                ))}
                <div className="pt-4 border-t text-sm text-center text-muted-foreground">
                    Overall Match: <span className="font-bold text-primary">70%</span>
                </div>
            </CardContent>
        </Card>
    );
}
