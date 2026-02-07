"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, MoreHorizontal, Mail } from "lucide-react";

export function ApplicantTable() {
    const applicants = [
        { name: "John Doe", role: "Frontend Dev", match: 98, skills: ["React", "TypeScript"], status: "Reviewing" },
        { name: "Alice Smith", role: "AI Engineer", match: 95, skills: ["Python", "PyTorch"], status: "Shortlisted" },
        { name: "Bob Johnson", role: "Full Stack", match: 88, skills: ["Node.js", "Vue"], status: "New" },
        { name: "Emma Wilson", role: "UX Designer", match: 92, skills: ["Figma", "User Research"], status: "Interviewing" },
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-gray-900">Top Matched Candidates</h3>
                <Button variant="outline" size="sm" className="text-gray-600">
                    <Download className="w-4 h-4 mr-2" /> Export CSV
                </Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Candidate</TableHead>
                        <TableHead>AI Match</TableHead>
                        <TableHead>Top Skills</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {applicants.map((a, i) => (
                        <TableRow key={i}>
                            <TableCell className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${a.name}`} />
                                    <AvatarFallback>{a.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium text-gray-900">{a.name}</p>
                                    <p className="text-xs text-gray-500">{a.role}</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <span className={`font-bold ${a.match > 90 ? 'text-green-600' : 'text-orange-600'}`}>{a.match}%</span>
                                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full ${a.match > 90 ? 'bg-green-500' : 'bg-orange-500'}`} style={{ width: `${a.match}%` }}></div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex gap-1 flex-wrap">
                                    {a.skills.map(s => (
                                        <Badge key={s} variant="secondary" className="text-[10px] scale-90 origin-left">
                                            {s}
                                        </Badge>
                                    ))}
                                </div>
                            </TableCell>
                            <TableCell>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${a.status === 'Shortlisted' ? 'bg-purple-100 text-purple-700' :
                                        a.status === 'New' ? 'bg-blue-100 text-blue-700' :
                                            'bg-gray-100 text-gray-700'
                                    }`}>
                                    {a.status}
                                </span>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Mail className="w-4 h-4 text-gray-500" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="w-4 h-4 text-gray-500" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
