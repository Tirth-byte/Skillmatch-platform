"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle, Calendar } from "lucide-react";

interface MentorProps {
    name: string;
    role: string;
    company: string;
    rating: number;
    reviews: number;
    skills: string[];
    image: string;
    hourlyRate: string;
}

export function MentorCard({ mentor }: { mentor: MentorProps }) {
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                        <Avatar className="h-16 w-16 border-2 border-purple-100">
                            <AvatarImage src={mentor.image} />
                            <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">{mentor.name}</h3>
                            <p className="text-sm text-gray-600">{mentor.role} at {mentor.company}</p>
                            <div className="flex items-center gap-1 mt-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                <span className="font-bold text-sm text-gray-900">{mentor.rating}</span>
                                <span className="text-xs text-gray-500">({mentor.reviews} reviews)</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold text-purple-600">{mentor.hourlyRate}</p>
                        <p className="text-xs text-gray-500">per session</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {mentor.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md font-medium">
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full">
                        <MessageCircle className="w-4 h-4 mr-2" /> Chat
                    </Button>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        <Calendar className="w-4 h-4 mr-2" /> Book
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
