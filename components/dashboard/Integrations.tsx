"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Slack, Check } from "lucide-react";
import { useState } from "react";

export function Integrations() {
    const [connected, setConnected] = useState({
        github: true,
        linkedin: false,
        slack: false
    });

    const toggle = (key: keyof typeof connected) => {
        setConnected(prev => ({ ...prev, [key]: !prev[key] }));
    }

    return (
        <Card className="dark:bg-slate-900 border-gray-100 dark:border-gray-800 transition-colors">
            <CardHeader>
                <CardTitle className="text-lg dark:text-white">Integrations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                            <Github size={20} className="text-gray-900 dark:text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">GitHub</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Sync repositories & contributions</p>
                        </div>
                    </div>
                    <Button
                        variant={connected.github ? "outline" : "default"}
                        size="sm"
                        onClick={() => toggle('github')}
                        className={connected.github ? "border-green-200 bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400" : ""}
                    >
                        {connected.github ? <><Check size={14} className="mr-1" /> Connected</> : "Connect"}
                    </Button>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <Linkedin size={20} className="text-blue-700 dark:text-blue-400" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">LinkedIn</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Import work history</p>
                        </div>
                    </div>
                    <Button
                        variant={connected.linkedin ? "outline" : "default"}
                        size="sm"
                        onClick={() => toggle('linkedin')}
                        className={connected.linkedin ? "border-green-200 bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400" : ""}
                    >
                        {connected.linkedin ? <><Check size={14} className="mr-1" /> Connected</> : "Connect"}
                    </Button>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                            <Slack size={20} className="text-purple-700 dark:text-purple-400" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Slack</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Receive job alerts</p>
                        </div>
                    </div>
                    <Button
                        variant={connected.slack ? "outline" : "default"}
                        size="sm"
                        onClick={() => toggle('slack')}
                        className={connected.slack ? "border-green-200 bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400" : ""}
                    >
                        {connected.slack ? <><Check size={14} className="mr-1" /> Connected</> : "Connect"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
