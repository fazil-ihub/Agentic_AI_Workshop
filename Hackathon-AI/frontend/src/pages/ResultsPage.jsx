import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

// Mock parser - you'll need to adapt this to your actual API response structure
const parseFinalReport = (apiResponse) => {
    // This is a placeholder. You'll need to write logic to extract these details
    // from the text-based reports returned by your AI agents.
    return {
        score: Math.floor(Math.random() * (92 - 75 + 1) + 75), // Random score for demo
        strengths: "Clear problem statement; Engaging opening hook.",
        weaknesses: "Call-to-action is unclear; Pacing is slightly too fast.",
        wpm: 182,
        fillerWords: 7,
    };
};

export const ResultsPage = ({ results, setPage, setVideoUrl, setResults }) => {
    const finalReport = parseFinalReport(results);
    return (
        <main className="max-w-6xl mx-auto">
            <Card>
                <CardHeader>
                     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <CardTitle>Evaluation Dashboard</CardTitle>
                            <CardDescription>A complete breakdown of your pitch analysis.</CardDescription>
                        </div>
                        <Button onClick={() => { setResults(null); setVideoUrl(''); setPage('entry'); }} variant="secondary">
                            Evaluate Another Video
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="bg-gray-900/50">
                            <CardHeader><CardTitle>Final Summary & Coaching (from AutoGen)</CardTitle></CardHeader>
                            <CardContent className="prose prose-custom max-w-none">
                                <pre className="bg-transparent p-0 whitespace-pre-wrap font-sans">{results.outputs.final_summary_autogen}</pre>
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-900/50">
                             <CardHeader><CardTitle>Detailed Reports from AI Agents</CardTitle></CardHeader>
                             <CardContent className="space-y-4">
                                 <div>
                                     <h4 className="font-bold text-blue-300 mb-1">CrewAI Initial Report</h4>
                                     <p className="text-sm bg-gray-800 p-4 rounded-md whitespace-pre-wrap font-mono text-gray-300">{results.outputs.initial_report_crewai}</p>
                                 </div>
                                 <div>
                                     <h4 className="font-bold text-blue-300 mb-1">LangGraph Refined Report</h4>
                                     <p className="text-sm bg-gray-800 p-4 rounded-md whitespace-pre-wrap font-mono text-gray-300">{results.outputs.refined_report_langgraph}</p>
                                 </div>
                             </CardContent>
                        </Card>
                    </div>
                    <div className="lg:col-span-1 space-y-6">
                         <Card className="bg-gray-900/50">
                             <CardHeader><CardTitle>Key Metrics</CardTitle></CardHeader>
                             <CardContent className="divide-y divide-gray-700">
                                 <div className="py-3 flex justify-between items-center"><span className="text-gray-300">Overall Score</span><span className="font-bold text-2xl text-green-400">{finalReport.score}/100</span></div>
                                 <div className="py-3 flex justify-between items-center"><span className="text-gray-300">Words Per Minute</span><span className="font-bold text-lg text-blue-300">{finalReport.wpm}</span></div>
                                 <div className="py-3 flex justify-between items-center"><span className="text-gray-300">Filler Words</span><span className="font-bold text-lg text-blue-300">{finalReport.fillerWords}</span></div>
                             </CardContent>
                         </Card>
                         <Card className="bg-gray-900/50">
                            <CardHeader><CardTitle>Strengths & Weaknesses</CardTitle></CardHeader>
                            <CardContent>
                                <div className="mb-4">
                                    <h4 className="font-bold text-green-400 mb-1">Strengths</h4>
                                    <p className="text-sm text-gray-300">{finalReport.strengths}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-red-400 mb-1">Weaknesses</h4>
                                    <p className="text-sm text-gray-300">{finalReport.weaknesses}</p>
                                </div>
                            </CardContent>
                         </Card>
                    </div>
                </CardContent>
            </Card>
        </main>
    );
};