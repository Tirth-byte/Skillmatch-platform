"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Users, UserPlus } from "lucide-react";

export function TeamMatch() {
    const peers = [
        { name: "Sarah Chen", role: "UX Designer", match: "Perfect Complement", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
        { name: "David Kim", role: "Backend Dev", match: "Needs Frontend", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
        { name: "Elena R.", role: "Product Mgr", match: "Hackathon Ready", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena" }
    ];

    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                    <Users className="text-blue-500 w-4 h-4" /> Global Team Match
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {peers.map((peer, i) => (
                    <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9 border border-gray-100">
                                <AvatarImage src={peer.img} />
                                <AvatarFallback>{peer.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium text-gray-900">{peer.name}</p>
                                <p className="text-xs text-blue-600 font-medium">{peer.match}</p>
                            </div>
                        </div>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-gray-400 hover:text-blue-600 hover:bg-blue-50">
                            <UserPlus size={16} />
                        </Button>
                    </div>
                ))}
                <Button variant="outline" className="w-full text-xs text-gray-500 h-8">
                    View All Matches
                </Button>
            </CardContent>
        </Card>
    );
}
