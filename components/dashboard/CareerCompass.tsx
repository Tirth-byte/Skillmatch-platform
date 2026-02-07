"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase } from 'lucide-react';

export function CareerCompass() {
    const [mode, setMode] = useState<'upskill' | 'hired'>('upskill');

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    Career Compass 🧭
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                    What is your primary goal right now?
                </p>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <Button
                        variant={mode === 'upskill' ? 'default' : 'outline'}
                        className="h-24 flex flex-col gap-2"
                        onClick={() => setMode('upskill')}
                    >
                        <GraduationCap className="w-8 h-8" />
                        <span className="font-bold">Upskill Mode</span>
                    </Button>

                    <Button
                        variant={mode === 'hired' ? 'default' : 'outline'}
                        className="h-24 flex flex-col gap-2"
                        onClick={() => setMode('hired')}
                    >
                        <Briefcase className="w-8 h-8" />
                        <span className="font-bold">Get Hired</span>
                    </Button>
                </div>

                <div className="mt-6 p-4 bg-secondary/20 rounded-lg border">
                    <h4 className="font-semibold mb-2">
                        {mode === 'upskill' ? '🎓 Learning Plan Activated' : '💼 Job Hunt Activated'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                        {mode === 'upskill'
                            ? "We've curated 3 courses to close your TypeScript gap."
                            : "Optimizing your resume for Senior Frontend roles."}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
