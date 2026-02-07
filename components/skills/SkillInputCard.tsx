import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SkillInputCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    buttonText: string;
    buttonVariant?: "default" | "outline" | "ghost";
    onClick?: () => void;
}

export function SkillInputCard({
    icon: Icon,
    title,
    description,
    buttonText,
    buttonVariant = "outline",
    onClick,
}: SkillInputCardProps) {
    return (
        <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-8 flex flex-col items-center text-center hover:border-purple-200 transition-colors cursor-pointer group">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-50 transition-colors">
                <Icon className="h-8 w-8 text-slate-900 group-hover:text-purple-600 transition-colors" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-sm text-slate-500 mb-6">{description}</p>

            <Button
                variant={buttonVariant}
                className="w-full mt-auto"
                onClick={onClick}
            >
                {buttonText}
            </Button>
        </div>
    );
}
