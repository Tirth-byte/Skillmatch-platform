"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
    role: "user" | "ai";
    content: string;
}

export function AIAdvisor() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "ai", content: "Hi! I'm your AI Career Advisor. Ask me anything about your career path, skills, or job market trends." }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: "user", content: userMsg }]);
        setInput("");
        setIsTyping(true);

        // Simulate AI thinking and response
        setTimeout(() => {
            let aiResponse = "I can help with that! Based on your profile, I recommend focusing on Next.js 14 features.";

            if (userMsg.toLowerCase().includes("salary") || userMsg.toLowerCase().includes("pay")) {
                aiResponse = "For a Senior React Developer in your region, the average salary range is $120k - $160k. Mastering TypeScript could boost this by ~15%.";
            } else if (userMsg.toLowerCase().includes("learn") || userMsg.toLowerCase().includes("skill")) {
                aiResponse = "Learning **Rust** or **AI Engineering** concepts is highly recommended right now. Demand for these skills has grown by 40% in Q2.";
            } else if (userMsg.toLowerCase().includes("job") || userMsg.toLowerCase().includes("hiring")) {
                aiResponse = "I found 3 new opportunities at Vercel, Linear, and OpenAI that match your profile. Check the 'Results' tab!";
            }

            setMessages(prev => [...prev, { role: "ai", content: aiResponse }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            {/* Floating Button */}
            {!isOpen && (
                <Button
                    className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-transform z-50 p-0"
                    onClick={() => setIsOpen(true)}
                >
                    <Bot size={28} className="text-white" />
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </Button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <Card className="fixed bottom-6 right-6 w-96 max-h-[600px] shadow-2xl z-50 flex flex-col border-purple-100 animate-in slide-in-from-bottom-10 fade-in duration-300">
                    <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-xl flex flex-row justify-between items-center space-y-0">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/20 p-1.5 rounded-lg">
                                <Sparkles size={18} className="text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-base font-bold">AI Career Advisor</CardTitle>
                                <p className="text-xs text-purple-100 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online
                                </p>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 h-8 w-8">
                            <X size={18} />
                        </Button>
                    </CardHeader>

                    <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 min-h-[300px]" ref={scrollRef}>
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                                {msg.role === "ai" && (
                                    <Avatar className="h-8 w-8 border border-white shadow-sm mt-1">
                                        <AvatarImage src="https://api.dicebear.com/7.x/bottts/svg?seed=ai" />
                                        <AvatarFallback>AI</AvatarFallback>
                                    </Avatar>
                                )}
                                <div
                                    className={`p-3 rounded-2xl text-sm max-w-[80%] shadow-sm ${msg.role === "user"
                                            ? "bg-blue-600 text-white rounded-tr-none"
                                            : "bg-white text-slate-800 border border-slate-100 rounded-tl-none"
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex gap-3">
                                <Avatar className="h-8 w-8 border border-white shadow-sm mt-1">
                                    <AvatarImage src="https://api.dicebear.com/7.x/bottts/svg?seed=ai" />
                                    <AvatarFallback>AI</AvatarFallback>
                                </Avatar>
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                </div>
                            </div>
                        )}
                    </CardContent>

                    <CardFooter className="p-3 bg-white border-t border-slate-100">
                        <form
                            className="flex w-full gap-2"
                            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        >
                            <input
                                className="flex-1 bg-slate-100 border-0 rounded-full px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Ask anything..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <Button size="icon" type="submit" className="rounded-full bg-purple-600 hover:bg-purple-700" disabled={!input.trim()}>
                                <Send size={16} />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            )}
        </>
    );
}
