
"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2 } from "lucide-react";

interface ProfileEditorProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ProfileEditor({ isOpen, onClose }: ProfileEditorProps) {
    const { user, updateProfile } = useAuth();
    const [name, setName] = useState(user?.name || "");
    const [avatarUrl, setAvatarUrl] = useState(user?.avatar || "");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        updateProfile({
            name,
            avatar: avatarUrl
        });

        setLoading(false);
        onClose();
    };

    if (!user) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] bg-white dark:bg-slate-900 border-gray-100 dark:border-gray-800">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold dark:text-white">Edit Profile</DialogTitle>
                    <DialogDescription className="dark:text-gray-400">
                        Update your public profile information.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 py-4">
                    <div className="flex flex-col items-center gap-4">
                        <Avatar className="h-24 w-24 border-4 border-gray-100 dark:border-gray-800">
                            <AvatarImage src={avatarUrl} alt="Preview" />
                            <AvatarFallback className="text-2xl">{name?.[0]}</AvatarFallback>
                        </Avatar>
                        <p className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-[200px]">
                            Preview of your profile picture
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="dark:text-gray-200">Display Name</Label>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="dark:bg-slate-800 dark:border-gray-700 dark:text-white"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="avatar" className="dark:text-gray-200">Avatar URL</Label>
                            <Input
                                id="avatar"
                                value={avatarUrl}
                                onChange={(e) => setAvatarUrl(e.target.value)}
                                className="dark:bg-slate-800 dark:border-gray-700 dark:text-white"
                                placeholder="https://..."
                            />
                            <p className="text-[10px] text-gray-400 dark:text-gray-500">
                                Use a direct image link (e.g. from GitHub, Gravatar, or DiceBear).
                            </p>
                        </div>
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={onClose} className="dark:bg-transparent dark:text-gray-300 dark:border-gray-700 dark:hover:bg-slate-800">
                            Cancel
                        </Button>
                        <Button type="submit" disabled={loading} className="bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-600 dark:hover:bg-purple-700">
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Save Changes"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
