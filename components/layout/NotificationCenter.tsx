"use client";

import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotificationCenter() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasUnread, setHasUnread] = useState(true);

    // Mock Notifications - In real app, these would come from the backend based on user's profile
    const notifications = [
        {
            id: 1,
            title: "New React Internship Match",
            message: "A new role at Vercel matches your skills!",
            time: "2m ago",
            type: "job"
        },
        {
            id: 2,
            title: "Hackathon Ending Soon",
            message: "Registration for 'AI Agents Hack' closes in 24h.",
            time: "1h ago",
            type: "alert"
        },
        {
            id: 3,
            title: "Skill Recommendation",
            message: "Learning 'TypeScript' could boost your match rate by 20%.",
            time: "5h ago",
            type: "tip"
        }
    ];

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setHasUnread(false);
    };

    return (
        <div className="relative">
            <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-500 hover:text-purple-600 hover:bg-purple-50"
                onClick={handleToggle}
            >
                <Bell className="h-5 w-5" />
                {hasUnread && (
                    <span className="absolute top-2 right-2.5 h-2 w-2 bg-red-500 rounded-full border border-white" />
                )}
            </Button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className="px-4 py-2 border-b border-gray-50 flex justify-between items-center">
                        <span className="font-semibold text-sm text-gray-900">Notifications</span>
                        <span className="text-xs text-purple-600 cursor-pointer hover:underline">Mark all read</span>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto">
                        {notifications.map((notif) => (
                            <div key={notif.id} className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0 transition-colors">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="text-sm font-medium text-gray-900">{notif.title}</h4>
                                    <span className="text-[10px] text-gray-400">{notif.time}</span>
                                </div>
                                <p className="text-xs text-gray-500 leading-relaxed">{notif.message}</p>
                            </div>
                        ))}
                    </div>
                    <div className="px-4 py-2 border-t border-gray-50 text-center">
                        <span className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer">View all notifications</span>
                    </div>
                </div>
            )}
        </div>
    );
}
