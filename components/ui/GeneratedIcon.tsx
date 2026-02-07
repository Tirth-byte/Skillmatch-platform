
import { Box, Zap, Activity, Layers, Command, Cpu, Globe, Hexagon, Radar, Triangle, Briefcase, Code2, Terminal, Rocket } from "lucide-react";
import { useMemo } from "react";

const ICONS = [Box, Zap, Activity, Layers, Command, Cpu, Globe, Hexagon, Radar, Triangle, Briefcase, Code2, Terminal, Rocket];

const GRADIENTS = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-emerald-500 to-teal-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-600",
    "from-rose-500 to-orange-400",
    "from-slate-700 to-slate-900",
    "from-violet-600 to-indigo-600"
];

interface GeneratedIconProps {
    name: string;
    className?: string;
}

export function GeneratedIcon({ name, className = "w-12 h-12" }: GeneratedIconProps) {
    const { Icon, gradient } = useMemo(() => {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }

        const iconIndex = Math.abs(hash) % ICONS.length;
        const gradientIndex = Math.abs(hash) % GRADIENTS.length;

        return {
            Icon: ICONS[iconIndex],
            gradient: GRADIENTS[gradientIndex]
        };
    }, [name]);

    return (
        <div className={`flex items-center justify-center rounded-lg bg-gradient-to-br ${gradient} text-white shadow-sm ${className}`}>
            <Icon className="w-1/2 h-1/2" strokeWidth={2} />
        </div>
    );
}
