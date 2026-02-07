"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrainCircuit, User as UserIcon, LogOut, LayoutDashboard } from "lucide-react";
import { NotificationCenter } from "@/components/layout/NotificationCenter";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { useAuth } from "@/lib/auth/AuthContext";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { ProfileEditor } from "@/components/profile/ProfileEditor";
import { useState } from "react";

export function Header() {
    const { user, logout } = useAuth();
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800 transition-colors">
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-1.5 rounded-lg text-white group-hover:shadow-lg transition-all duration-300">
                        <BrainCircuit size={24} strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                        SkillMatch AI
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/skills" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Skills</Link>
                    <Link href="/results" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Explore</Link>
                    {user && (
                        <Link href="/dashboard" className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">Dashboard</Link>
                    )}
                </nav>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <NotificationCenter />

                    {user ? (
                        <>
                            <ProfileEditor isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar className="h-9 w-9 cursor-pointer border-2 border-purple-100 hover:border-purple-300 transition-colors">
                                        <AvatarImage src={user.avatar} alt={user.name} />
                                        <AvatarFallback className="bg-gradient-to-br from-purple-100 to-blue-100 text-purple-700">
                                            {user.name.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-lg">
                                    <DropdownMenuLabel>
                                        <div className="flex flex-col space-y-1">
                                            <span className="font-medium leading-none dark:text-slate-100">{user.name}</span>
                                            <span className="text-xs text-slate-500 dark:text-slate-400 leading-none font-normal">{user.email}</span>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator className="bg-slate-200 dark:bg-slate-800" />
                                    <DropdownMenuItem asChild>
                                        <Link href="/dashboard" className="cursor-pointer dark:text-slate-300 focus:bg-slate-100 dark:focus:bg-slate-800 dark:focus:text-white">
                                            <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setIsProfileOpen(true)} className="cursor-pointer dark:text-slate-300 focus:bg-slate-100 dark:focus:bg-slate-800 dark:focus:text-white">
                                        <UserIcon className="mr-2 h-4 w-4" /> Edit Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="bg-slate-200 dark:bg-slate-800" />
                                    <DropdownMenuItem onClick={logout} className="text-red-600 dark:text-red-400 cursor-pointer focus:text-red-600 dark:focus:text-red-300 focus:bg-slate-100 dark:focus:bg-slate-800">
                                        <LogOut className="mr-2 h-4 w-4" /> Sign out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <Link href="/login">
                            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all rounded-full px-6">
                                Sign In
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
