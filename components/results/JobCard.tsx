import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Heart, ExternalLink } from "lucide-react";
import Analytics from "@/lib/analytics";
import { GeneratedIcon } from "@/components/ui/GeneratedIcon";
import { useState } from "react";

function MatchBadge({ score }: { score: number }) {
    return (
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold transition-colors ${score >= 90 ? "bg-emerald-100 text-emerald-700" :
            score >= 70 ? "bg-blue-100 text-blue-700" :
                "bg-amber-100 text-amber-700"
            }`}>
            {score}% Match
        </span>
    );
}

interface JobCardProps {
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    matchScore: number;
    skills: string[];
    logoColor?: string;
    logoUrl?: string;
    applyLink?: string;
}

export function JobCard({
    title,
    company,
    location,
    type,
    salary,
    matchScore,
    skills,
    logoColor = "bg-purple-100",
    logoUrl,
    applyLink
}: JobCardProps) {
    const [imgError, setImgError] = useState(false);

    const handleViewDetails = () => {
        Analytics.track('JOB_CLICKED', { company, title, matchScore });
        if (applyLink) {
            window.open(applyLink, '_blank');
        }
    };

    return (
        <div className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                    {/* Logo Placeholder */}

                    <div className="w-12 h-12 shrink-0 relative">
                        {logoUrl && !imgError ? (
                            <div className={`w-full h-full rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center border border-gray-100 dark:border-gray-700 overflow-hidden`}>
                                <img
                                    src={logoUrl}
                                    alt={company}
                                    className="w-full h-full object-contain p-0.5"
                                    onError={() => setImgError(true)}
                                />
                            </div>
                        ) : (
                            <GeneratedIcon name={company} className="w-full h-full" />
                        )}
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {title}
                        </h3>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{company}</p>
                    </div>
                </div>

                <MatchBadge score={matchScore} />
            </div>

            <div className="flex flex-wrap gap-y-2 gap-x-4 mb-4 text-xs text-gray-500 dark:text-gray-400 font-medium">
                <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {location}
                </div>
                <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {type}
                </div>
                <div className="flex items-center gap-1">
                    <DollarSign className="h-3.5 w-3.5" /> {salary}
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-2.5 py-1 bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 text-xs rounded-md font-medium border border-gray-100 dark:border-slate-700"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800">
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded-full">
                    Recently Posted
                </span>

                <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400 dark:text-gray-500 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20">
                        <Heart className="h-5 w-5" />
                    </Button>
                    <Button
                        size="sm"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20 gap-2"
                        onClick={handleViewDetails}
                    >
                        Apply Now <ExternalLink className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
