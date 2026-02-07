import { X } from "lucide-react";

interface SkillTagProps {
    label: string;
    onRemove: () => void;
}

export function SkillTag({ label, onRemove }: SkillTagProps) {
    return (
        <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-600 border border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800 transition-colors">
            {label}
            <button
                onClick={onRemove}
                className="ml-1 p-0.5 hover:bg-blue-100 dark:hover:bg-blue-800 rounded-full transition-colors"
                aria-label={`Remove ${label}`}
            >
                <X className="h-3 w-3" />
            </button>
        </span>
    );
}
