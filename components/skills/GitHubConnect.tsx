"use client";

import { useState } from "react";
import { Github, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface GitHubConnectProps {
    onConnect: (username: string, skills: string[]) => void;
}

export function GitHubConnect({ onConnect }: GitHubConnectProps) {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [fetchedSkills, setFetchedSkills] = useState<string[]>([]);

    const handleConnect = async () => {
        if (!username) return;
        setLoading(true);
        setStatus("idle");

        try {
            // Call internal API endpoint that proxies to GitHub Service
            // For now, we'll fetch via a server-side action or simple API route.
            // Since we don't have a dedicated API route for this yet, let's create a quick one or simulate.
            // Wait, we need a way to call GitHubService from client.
            // Let's assume we create /api/github wrapper.

            const res = await fetch("/api/github/connect", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username })
            });

            if (!res.ok) throw new Error("Failed to connect");

            const data = await res.json();
            setFetchedSkills(data.skills);
            setStatus("success");
            onConnect(data.profile.login, data.skills);

        } catch (error) {
            console.error(error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-900 dark:bg-slate-900 text-white p-6 rounded-2xl mb-8 relative overflow-hidden border border-gray-800 dark:border-gray-700">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20 -mr-32 -mt-32 pointer-events-none"></div>

            <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-gray-800 dark:bg-gray-800 rounded-xl">
                    <Github className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-bold">Connect GitHub Profile</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        Auto-import skills from your repositories to get better job matches.
                        We'll analyze your top languages.
                    </p>

                    <div className="flex gap-2 max-w-md">
                        <Input
                            placeholder="Enter GitHub Username (e.g. torvalds)"
                            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-purple-500 dark:bg-slate-800 dark:border-slate-700"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Button
                            className="bg-purple-600 hover:bg-purple-700 text-white font-medium min-w-[100px]"
                            onClick={handleConnect}
                            disabled={loading || !username}
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Connect"}
                        </Button>
                    </div>

                    {status === "success" && (
                        <div className="mt-4 flex items-center gap-2 text-green-400 text-sm bg-green-400/10 p-2 rounded-lg inline-flex">
                            <CheckCircle className="w-4 h-4" />
                            <span>Found {fetchedSkills.length} skills: {fetchedSkills.slice(0, 3).join(", ")}...</span>
                        </div>
                    )}

                    {status === "error" && (
                        <div className="mt-4 flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-2 rounded-lg inline-flex">
                            <AlertCircle className="w-4 h-4" />
                            <span>Could not find user. Please check the username.</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
